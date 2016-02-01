(ns ohds.hierarchy.view
  (:require
   [ohds.hierarchy.processing]
   [petrol.core :refer [send! send-value!]]
   [ohds.hierarchy.messages :as m]
   [ohds.components :as c]))


(defn filter-hierarchies [app level-key hierarchies]
  (filterv #(= (:uuid (:parent %))
               (get (:hierarchies app) level-key))
           hierarchies))

(defn select [ch app hierarchy-level]
  (let [level-key (get hierarchy-level :keyIdentifier 0)
        level (:uuid hierarchy-level)
        hierarchies (:location-hierarchies app)
        hierarchies' (filter-hierarchies app level-key hierarchies)]
    (c/select ch (partial m/->ChangeLevelSelect (inc level-key))
              level nil
              (mapv c/map->option'uuid hierarchies')
              [:option {:key :none} "------"])))

(defn form [ch app]
  (println app)
  (let [levels (:hierarchy-levels app)
        ct (count levels)]
    [:div
     [:legend "Location Hierarchy"]
     (when (= 0 ct)
       [:h3 "No Hierarchies found! Check with your supervisor to see if the project is set up correctly."])
     (map #(select ch app %) levels)
     [:div
      (c/submit ch m/->StartCensus "Census")
      (c/submit ch m/->StartVisit "Visit")]]))
