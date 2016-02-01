(ns ohds.backend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [petrol.core :as petrol]
            [ohds.messages :as m]
            [cljs.core.async :refer [<!]]))

(defn locations
  ([]
   (locations "HIERARCHY_ROOT"))
  ([uuid]
   (petrol/wrap
    m/map->LocationResults
    (http/get (str "/api/v1/locations" uuid)))))

(defn hierarchy-levels []
  (petrol/wrap
   m/map->HierarchyLevelResults
   (http/get "/api/v1/locationHierarchyLevels")))

(defn location-hierarchies []
  (petrol/wrap
   m/map->LocationHierarchyResults
   (http/get "/api/v1/locationHierarchy")))
