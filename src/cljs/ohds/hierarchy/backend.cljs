(ns ohds.hierarchy.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.hierarchy.messages :as m]))

(defn locations-for-hierarchy
  [uuid]
  (petrol/wrap
   m/map->LocationsForHierarchyResults
   (http/get (str  "/api/v1/locations/" uuid))))
