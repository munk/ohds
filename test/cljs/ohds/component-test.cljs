(ns ohds.component-test
  (:require-macros [cljs.test :refer (is deftest testing)])
  (:require [cljs.test]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]))

(deftest hamburger-menu-test
  (let [h (c/hamburger)]
    (is (= (get h 0) :button))
    (is (= (first (get h 2)) :span))
    (is (= (get h 3) (get h 4) (get h 5)))))


