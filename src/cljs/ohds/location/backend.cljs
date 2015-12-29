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

(defn create-location
  [fieldworker-id parent name extId type & more]
  (let [params (merge more {:fieldworker-id fieldworker-id
                            :parent parent
                            :name name
                            :extId extId
                            :type type})
        {:keys [p] :as param} params]
    (->> (http/post "/api/v1/locations" {:form-params params})
         (petrol/wrap m/map->CreateLocationResults))))

(defn update-location
  [location]
  (println "Update" location)
  (->> (http/get (str "/api/v1/locations/" (:uuid location)))
       (petrol/wrap m/map->UpdateLocationResults)))
