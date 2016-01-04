(ns ohds.location.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.components :as c]
   [ohds.location.processing]    
   [ohds.location.messages :as m]))

;;;TODO Schema Validation


(defn hierarchy
  [state]
  (let [h (:hierarchies state)]
    (last (filter #(> (count %) 1) h))))

(defn location-form [ch state]
  [:div
   (c/select ch m/->ChangeLocationType "type" (:type state)
             [["RURAL" "Rural"] ["URBAN" "Urban"]])
   (c/text-input ch m/->ChangeLocationName (:name state) "name" "Name")
   (c/text-input ch m/->ChangeLocationExtId (:extId state)
                 "extId" "External ID")
   (c/submit ch m/->SubmitLocation "Submit")])

(defn form [ch state]
  [:span
   [:legend "Location"]
   [:div
    (hierarchy state)]
   [location-form ch (:location state)]])
