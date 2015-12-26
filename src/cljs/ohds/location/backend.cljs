(ns ohds.location.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.location.messages :as m]))

(defn location-hierarchies []
  (->> (http/get "/api/v1/locationHierarchy")
       (petrol/wrap m/map->LocationHierarchyResults)))

(defn locations
  ([]
   (locations "HIERARCHY_ROOT"))
  ([uuid]
   (->> (http/get (str "/api/v1/locations/" uuid))
        (petrol/wrap m/map->LocationResults))))
