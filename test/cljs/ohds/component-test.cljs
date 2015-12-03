(ns ohds.component-test
  (:require-macros [cljs.test :refer (is deftest testing)])
  (:require [cljs.test]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]))


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

(deftest atom-change-tests
  (let [state (atom {:hello "world"})]
    (testing "a-swap only swaps out single key"
      (c/a-swap state :hello "foo")
      (is (= (:hello @state) "foo")))
    (testing "on-change resets atom"
      (let [value :reset-it
            target (js-obj "value" value)
            elem (js-obj "target" target)]
        (c/on-change elem state)))))


(deftest hamburger-menu-test
  (let [h (c/hamburger)]
    (is (= (get h 0) :button))
    (is (= (first (get h 2)) :span))
    (is (= (get h 3) (get h 4) (get h 5)))))


(deftest options-test
  (let [field {"uuid" "123" "name" "test"}]
;    (is (= field (reagent/render-component [c/location-hierarchy-option field] "<html></html>")))
    ))



