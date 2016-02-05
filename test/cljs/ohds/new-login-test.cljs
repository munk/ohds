(ns ohds.new-login-test
  (:require [ohds.login :as login]
            [petrol.core :refer [process-message]]
            [cljs-http.client :as http]
            [cljs.test :refer-macros [deftest testing is]]))

(deftest login-tests
  (testing "Logging in with good username and password loads hierarchy select page"
    (let [msg (login/->SubmitLogin)
          app {:page :login
               :login {:username "good-username"
                       :password "good-password"}}
          result (process-message msg app)]
      (println "good login" (= (:username (:login result)) "good-username"))
      (is (= :hierarchy-select
             (:page result)))))

  (testing "Logging in with bad credentials stays on page and displays error"
    (let [msg (login/->SubmitLogin)
          app {:page :login
               :login {:username "bad-username"
                       :password "bad-password"}}
          result (process-message msg app)]
      (println "bad login" (= (:username (:login app)) "good-username"))
      (is (= :login
             (:page result)))))

  (testing "Login checks with backend for result")
  (testing "Logging in after failed login clears error report")
  (testing "Successful login triggers location hierarchy requests")
  (testing "Unsuccessful login does not trigger location hierarchy requests")
  (testing "Logging in with admin credentials loads admin page"))
