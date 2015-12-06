(ns ohds.component-test
  (:require-macros [cljs.test :refer (is deftest testing async)]
                   [cljs.core.async.macros :refer [go]])
  (:require [cljs.test]
            [cljs.core.async :refer [<! >! chan]]
            [cljs-http.client :as http]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]
            [ohds.core :as app]
            [ohds.framework :refer [with-mounted-component found-in]]))

;;;;;;;;;;;;;;;;;;;;;;;
;;; Login Form Tests;;;
;;;;;;;;;;;;;;;;;;;;;;;
(defn fake-login-success [& _]
  (go
    {:status 200 :body "abc-123"}))

(defn fake-login-failure [& _]
  (go
    {:status 401 :body "bad login"}))

(deftest login-form-rendering ;;;TODO write a macro to clean up this duplication
  (let [good-login-callback
        (fn [r s]
          (app/login-callback r s)
          (is (= (:page @app/app-state) :location))
          (is (= (:fieldworker-id @app/app-state) "abc-123")))
        bad-login-callback
        (fn [r s]
          (app/login-callback r s)
          (is (= (:page @app/app-state) :bad-login))
          (is (nil? (:fieldworker-id @app/app-state))))
        click-login (fn [] (.click (.getElementById js/document "Login")))]
    
    (testing "login form success redirects to new location page"
      (async done (go
         (with-redefs [http/post fake-login-success]
           (with-mounted-component (c/login-form app/login! good-login-callback)
             (fn [_ div]
               (is (found-in #"Username" div))
               (is (found-in #"Password" div))
               (is (found-in #"Login" div))
               (click-login))))
         (done))))
    (testing "login form failure redirects to bad login page"
      (async done (go
         (with-redefs [http/post fake-login-failure]
           (with-mounted-component (c/login-form app/login! bad-login-callback)
             (fn [_ div] (click-login))))
         (done))))))


                      


(deftest test-hamburger-rendering
  (with-mounted-component (c/hamburger)
    (fn [c div]
      (is (found-in #"Toggle Nav" div)))))



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
