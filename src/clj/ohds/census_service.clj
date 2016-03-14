(ns ohds.census-service
  (:require [ohds.client :refer [create! fetch map->Location now] :as client]))

(defn fetch-location-hierarchies []
  (client/fetch (client/->LocationHierarchy) {:bulk? true}))

(defn create-location [fieldworker parent name ext-id type]
  (create! (map->Location
            {:collectedByUuid fieldworker
             :locationHierarchyUuid parent
             :location {:name name
                        :extId ext-id
                        :type type
                        :collectionDateTime (now)}})))
