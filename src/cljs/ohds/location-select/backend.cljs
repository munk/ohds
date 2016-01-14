(ns ohds.location-select.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.location-select.messages :as m]))

(defn individuals-by-location [loc]
  (->>
   (str "/api/v1/individuals-by-location/" loc)
   (http/get)
   (petrol/wrap m/map->IndividualsByLocationResults)))
