(ns ohds.new-login-test
  (:require [ohds.login :as login]
            [petrol.core :refer [process-message]]
            [cljs.test :refer-macros [deftest testing is]]))

(deftest login-tests
  (testing "Logging in with good username and password loads hierarchy select page"
    (let [msg (login/->SubmitLogin)
          result (process-message msg {:login {:username "good-username"
                                               :password "good-password"}})]
      (is (= :hierarchy-select
             (:page result)))))
  
  (testing "Logging in with bad username or password stays on login page and displays error")
  (testing "Logging in after failed login clears error report")
  (testing "Successful login triggers location hierarchy requests")
  (testing "Unsuccessful login does not trigger location hierarchy requests")
  (testing "Logging in with admin credentials loads admin page"))
