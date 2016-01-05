(ns ohds.socialgroup-test
  (:require  
   [ohds.socialgroup.view :as view]
   [ohds.socialgroup.messages :as m]
   [ohds.socialgroup.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest socialgroup-test
  (is (= 0 1)))
