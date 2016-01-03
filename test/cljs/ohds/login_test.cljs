(ns ohds.login-test
  (:require
   [ohds.login.view :as view]
   [ohds.login.messages :as m]
   [ohds.login.processing :as p]
   [petrol.core :refer [process-message send! send-value!]]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))


(deftest login-test
  (let [msg (m/->ChangeUsername "user")
        app {:user {:username "not-a-user"}}
        expected {:user {:username "user"}}]
    (is (= expected
           (process-message msg app)))))
