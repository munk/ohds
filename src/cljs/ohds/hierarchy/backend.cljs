(ns ohds.hierarchy.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.hierarchy.messages :as m]))



(defn locations-for-hierarchy
  [uuid]
  (->>
   (str "/api/v1/locations/" uuid)
   (http/get)
   (petrol/wrap m/map->LocationsForHierarchyResults)))
