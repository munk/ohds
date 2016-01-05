(ns ohds.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [ohds.hierarchy-test]
   [ohds.login-test]
   [ohds.location-test]
   [ohds.socialgroup-test]
   [ohds.individual-test]
   [ohds.backend-test]
   [ohds.views-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'ohds.login-test
        'ohds.hierarchy-test
        'ohds.location-test
        'ohds.socialgroup-test
        'ohds.individual-test
        'ohds.backend-test
        'ohds.views-test))
    0
    1))
