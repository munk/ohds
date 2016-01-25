(ns ohds.location.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.components :as c]
   [ohds.location.processing]
   [ohds.location.messages :as m]))

;;;TODO Schema Validation


(defn current-hierarchy [state]
  (let [hierarchy (last (:hierarchies state))]
    (first
     (filter #(= hierarchy (:uuid %)) (:location-hierarchies state)))))

(defn filled-in? [key state]
  (pos? (count (key state))))

(defn form [ch state]
  (let [hiera-level (last (:hierarchies state))
        state' (assoc (:location state) :hiera-name (:name hiera-level))]
    [:div
     [:legend "Location"]
     (c/const-text "hierarchy-name" (:name (current-hierarchy state)))
     (c/select ch m/->ChangeLocationType "type" (:type state)
               [["RURAL" "Rural"] ["URBAN" "Urban"]]
               [:option {:key "none"} "-----"])
     (c/text-input ch m/->ChangeLocationName (:name state) "name" "Name")
     (c/text-input ch m/->ChangeLocationExtId (:extId state) "extId" "External ID")
     (when (and
            (filled-in? :type state)
            (filled-in? :name state)
            (filled-in? :extId state))
       (c/submit ch m/->SubmitLocation "Submit"))]))
