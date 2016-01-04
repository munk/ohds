(ns ohds.location-test
  (:require  
   [ohds.location.view :as view]
   [ohds.location.messages :as m]
   [ohds.location.messages :as lm]
   [ohds.location.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest location-test
  (is (= 0 0)))
