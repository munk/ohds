(ns ohds.location.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.location.messages :as m]))

(defrecord CreateLocationRequest
    [fieldworker-id
     parent
     name
     extId
     type])

(defn create-location
  [fieldworker-id parent name extId type & more]
  (let [loc (->CreateLocationRequest fieldworker-id
                                     parent
                                     name
                                     extId
                                     type)
        params (merge more loc)]
    (petrol/wrap
     m/map->CreateLocationResults
     (http/post "/api/v1/locations" {:form-params params}))))
