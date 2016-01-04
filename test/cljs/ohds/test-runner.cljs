(ns ohds.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [ohds.hierarchy-test]
   [ohds.backend-test]
   [ohds.login-test]
   [ohds.views-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'ohds.login-test
        'ohds.hierarchy-test
        'ohds.backend-test
        'ohds.views-test))
    0
    1))
