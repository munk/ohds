(ns ohds.pregnancy-observation.backend
  (:require [cljs-http.client :as http]
            [petrol.core :as petrol]
            [ohds.pregnancy-observation.messages :as m]))

(defrecord PregnancyObservationRequest
    [fieldworker-id
     mother
     pregnancy-date
     expected-due-date])

(defn submit [fieldworker-id mother pregnancy-date expected-due-date]
  (let [params (->PregnancyObservationRequest
                fieldworker-id
                mother
                pregnancy-date
                expected-due-date)]
    (petrol/wrap
     m/map->Results
     (http/post "/api/v1/pregnancy-observation" {:form-params params}))))
