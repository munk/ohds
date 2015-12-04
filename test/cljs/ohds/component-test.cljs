(ns ohds.component-test
  (:require-macros [cljs.test :refer (is deftest testing)]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test]
            [cljs.core.async :refer [<! >! chan]]
            [cljs-http.client :as http]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]
            [ohds.core :as app]))


(def isClient (not (nil? (try (.-document js/window)
                              (catch js/Object e nil)))))

(def rflush reagent/flush)

(defn add-test-div [name]
  (let [doc     js/document
        body    (.-body js/document)
        div     (.createElement doc "div")]
    (.appendChild body div)
    div))

(defn with-mounted-component [comp f]
  (when isClient
    (let [div (add-test-div "_testreagent")]
      (let [comp (reagent/render-component comp div #(f comp div))]
        (reagent/unmount-component-at-node div)
        (reagent/flush)
        (.removeChild (.-body js/document) div)))))


(defn found-in [re div]
  (let [res (.-innerHTML div)]
    (if (re-find re res)
      true
      (do (println "Not found: " res)
          false))))

(deftest test-hamburger-rendering
  (with-mounted-component (c/hamburger)
    (fn [c div]
      (is (found-in #"Toggle Nav" div)))))

(deftest login-form-rendering
  (with-redefs [http/post (fn [& _] {:status 200 :body "123-abc"})]
    (with-mounted-component (c/login-form
                             (fn [u p]
                               (let [ch (chan)]
                                 (>! ch (app/login! u p))
                                 ch)))
     (fn [c div]
       (is (found-in #"Username" div))
       (is (found-in #"Password" div))
       (is (found-in #"Login" div))
       (.click (.getElementById js/document "Login"))
       (is (= (:page @app/app-state) :location))))))

(deftest atom-change-tests
  (let [state (atom {:hello "world"})]
    (testing "a-swap only swaps out single key"
      (c/a-swap state :hello "foo")
      (is (= (:hello @state) "foo")))
    (testing "on-change resets atom"
      (let [value :reset-it
            target (js-obj "value" value)
            elem (js-obj "target" target)]
        (c/on-change elem state)))
    (testing "update-page changes atom correctly"
      (let [a (atom {:page 1})]
        (c/update-page a 2)
        (is (= (:page @a) 2))))
    (testing "atom-input generates the right structure"
      (let [under-test (c/atom-input (atom nil) "id")
            f (first under-test)]
        (is (= :input f))))))



(deftest hamburger-menu-test
  (let [h (c/hamburger)]
    (is (= (get h 0) :button))
    (is (= (first (get h 2)) :span))
    (is (= (get h 3) (get h 4) (get h 5)))))
