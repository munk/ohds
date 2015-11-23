(ns ohds.service.location
  (:require [ohds.service.service :refer [post]]
            [ohds.service.time :refer [now]])
  (:gen-class))

(def location-url
  "/locations")

(defn create-location
  [collected-by parent loc]
  (->> {:collectedByUuid collected-by
        :locationHierarchyUuid parent
        :location (assoc loc "collectionDateTime" (now))}
       (post location-url)))
