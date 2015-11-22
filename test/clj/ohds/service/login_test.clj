(ns ohds.service.login-test
  (:use org.httpkit.fake)
  (:require
   [ohds.service.login :as client]
   [clojure.test :refer :all]))


(def mock-fieldworker-response
  (str "[{\"fieldWorkerId\": \"fieldworker\","
       "\"uuid\": \"123-abc-123\","
       "\"passwordHash\": \"$2a$04$ST5STE7bIY6R/kw2pEUEROOz6tkyH4sgK23OkwwgMjF1j4SetFCtW\"},"
       "{\"fieldWorkerId\": \"fooworker\","
       "\"uuid\": \"123-abc-456\","
       "\"passwordHash\": \"$2a$04$ST5STE7bIY6R/kw2pEUEROOz6tkyH4sgK23OkwwgMjF1j4SetFCtW\"}]"))

(def url "http://localhost:8080/fieldWorkers/bulk.json")

(deftest client-login
  (let [fieldworker-result (with-fake-http [url mock-fieldworker-response]
                                           (client/login "fieldworker" "password"))
        fooworker-result (with-fake-http [url mock-fieldworker-response]
                           (client/login "fooworker" "password"))
        bad-username  (with-fake-http [url mock-fieldworker-response]
                        (client/login "bad" "login"))
        bad-password  (with-fake-http [url mock-fieldworker-response]
                        (client/login "fieldworker" "login"))]
    (is (= "123-abc-123" fieldworker-result))
    (is (= "123-abc-456" fooworker-result))
    (is (nil? bad-username))
    (is (nil? bad-password))))

