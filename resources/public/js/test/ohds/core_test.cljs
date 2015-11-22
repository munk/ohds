(ns ohds.core-test
  (:require-macros [cljs.test :refer (is deftest testing)])
  (:require [cljs.test]
            [ohds.forms :as forms]))

(deftest example-passing-test
  (let [f (forms/login-form nil {} (fn [&args]))]
    (println (js-keys f))))

