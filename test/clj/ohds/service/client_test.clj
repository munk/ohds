(ns ohds.service.client-test
  (:use org.httpkit.fake)
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

(def mock-fieldworker-response
  (str "[{\"fieldWorkerId\": \"fieldworker\","
       "\"passwordHash\": \"$2a$04$ST5STE7bIY6R/kw2pEUEROOz6tkyH4sgK23OkwwgMjF1j4SetFCtW\"},"
       "{\"fieldWorkerId\": \"fooworker\","
       "\"passwordHash\": \"$2a$04$ST5STE7bIY6R/kw2pEUEROOz6tkyH4sgK23OkwwgMjF1j4SetFCtW\"}]"))

(deftest client-login
  (is (= true
         (with-fake-http
           ["http://localhost:8080/fieldWorkers/bulk.json"
            mock-fieldworker-response]           
           (client/login "fieldworker" "password"))))
  (is (= true
         (with-fake-http
           ["http://localhost:8080/fieldWorkers/bulk.json"
            mock-fieldworker-response]           
           (client/login "fieldworker" "password")))))





