(ns ohds.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [ohds.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'ohds.core-test))
    0
    1))
