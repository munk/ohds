(ns ohds.census-service
  (:require [ohds.client :refer [create! fetch map->Location now] :as client]))

#_(defn get-location-hierarchies []
  (client/fetch (client/->LocationHierarchy) {:bulk? true}))

(fetch (client/->Location) nil)

(create!  (map->Location
           {:collectedByUuid "fa6bb290-533d-4a02-b9c1-141e93723cfc"
            :locationHierarchyUuid "178b00cb-289e-4a24-8e90-13a5f8d076c9"
            :location {:name "123 Mockingbird Ln."
                       :extId "123 Mockingbird Ln."
                       :type "RURAL"
                       :collectionDateTime (now)}}))
