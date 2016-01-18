(ns ohds.location-select.view
  (:require
   [ohds.location-select.processing]
   [ohds.location-select.backend]
   [ohds.location-select.messages :as m]
   [ohds.processing :refer [process-ok]]
   [ohds.components :as c]))


(defn opt [o]
  (let [id (:uuid o)
        name (:name o)]
    [id name]))

(defn form [ch app]
  (let [locs (:locations app)
        cur (:current-location app)]
    [:div
     [:legend "Choose Location"]
     (c/select ch m/->ChangeLocation "locations" ""
               (map opt locs))
     [:div
      (c/const-text "id" (:uuid cur))
      (c/const-text "type" (:type cur))
      (c/const-text "description" (:description cur))
      (c/submit ch m/->StartLocationVisit "Begin Visit")]]))
