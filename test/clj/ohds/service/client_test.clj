(ns ohds.service.client-test
  (:require
   [ohds.service.client :as client]
   [clojure.test :refer :all]))


;; (defn mock-get
;;   ([url & [opts callback]]
;;    {:pre [(contains? opts :basic-auth)]}
;;    (case url
;;      "/" {"content":
;;           "Welcome to OpenHDS.  The Current time UTC is 2015-10-26T02:05:24.615Z"}
;;      "/fieldWorkers" {})
;;    )
;;   ([url & [callback]]))

(deftest client-login
  (is (= true
         (client/login "fieldworker" "password"))))
