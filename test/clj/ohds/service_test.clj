(ns ohds.service-test
  (:require
   [clojure.test :refer :all]
   [ohds.service :refer :all]
   [org.httpkit.client :as http]))

(deftest json->cljs-test
  (is (= {:foo "bar"} (json->cljs "{\"foo\": \"bar\"}"))))

(deftest http-methods-test
  (testing "Testing get"
    (with-redefs [http/get
                  (fn [url req]
                    (is (= url "http://localhost:8080/foo"))
                    (is (= req {:basic-auth ["user" "password"]}))
                    (atom {:body "{\"uuid\": \"abc-123\"}"}))]
      (is (= (get "/foo") {:uuid "abc-123"})))))
