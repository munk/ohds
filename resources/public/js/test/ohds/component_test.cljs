(ns ohds.component-test
  (:require-macros [cljs.test :refer (is deftest testing)])
  (:require [cljs.test]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]))

(deftest example-passing-test
  (let [h (c/hamburger)]
    (is (= (get h 0) :button))))


