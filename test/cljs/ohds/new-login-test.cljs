(ns ohds.new-login-test
  (:require [ohds.login :as login]
            [petrol.core :refer [process-message watch-channels]]
            [cljs-http.client :as http]
            [cljs.core.async :refer [chan put!]]
            [cljs.test :refer-macros [deftest testing is async]]))

(def good-login-state  {:page :login
               :login {:username "good-username"
                       :password "good-password"}})
(def bad-login-state  {:page :login
               :login {:username "bad-username"
                       :password "bad-password"}})

(defn mock-login [url data]
  (is (= url "/api/v1/login"))
  (let [mock-ch (chan)
        {{:keys [username password]} :form-params} data]
    (println "mock login. about to put")
    (if (and (= username "good-username")
             (= username "good-password"))
      (put! mock-ch {:status 200 :body "user-token"})
      (put! mock-ch {:status 401}))))

(deftest async-login-test
  (async done
         (with-redefs [http/post mock-login]
           (testing "Login checks with backend for result"
             (watch-channels (login/->SubmitLogin) {})))
         (done)))

(deftest login-tests
  (testing "Logging in with good username and password loads hierarchy select page"
    (let [msg (login/->SubmitLogin)
          result (process-message msg good-login-state)]
      (is (= :hierarchy-select
             (:page result)))))

  (testing "Logging in with bad credentials stays on page and displays error"
    (let [msg (login/->SubmitLogin)
          result (process-message msg bad-login-state)]
      (is (= :login
             (:page result)))))


  (testing "Logging in after failed login clears error report")
  (testing "Successful login triggers location hierarchy requests")
  (testing "Unsuccessful login does not trigger location hierarchy requests")
  (testing "Logging in with admin credentials loads admin page"))
