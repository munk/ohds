(ns ohds.service-test
  (:require
   [clojure.test :refer :all]
   [ohds.service :refer :all])
  (:import (java.time LocalDateTime)))

(deftest json->cljs-test
  (is (= {:foo "bar"} (json->cljs "{\"foo\": \"bar\"}"))))

(deftest http-methods-test
  (testing "Testing get"))
