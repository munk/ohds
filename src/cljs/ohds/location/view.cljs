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

(defn location-form [ch state hiera-level]
  (let [loc-type? (pos? (count (:type state)))
        name? (pos? (count (:name state)))
        ext-id? (pos? (count (:extId state)))]
    [:div
     (c/const-text "hierarchy-name" (:hiera-name state))
     (c/select ch m/->ChangeLocationType "type" (:type state)
               [["RURAL" "Rural"] ["URBAN" "Urban"]])
     (c/text-input ch m/->ChangeLocationName (:name state) "name" "Name")
     (c/text-input ch m/->ChangeLocationExtId (:extId state) "extId" "External ID")
     (when (and loc-type? name? ext-id?)
       (c/submit ch m/->SubmitLocation "Submit"))]))

(defn form [ch state]
  (let [n (dec (:hierarchy-level-count state))
        hiera-level (nth (:hierarchy-levels state) n)
        state' (assoc (:location state) :hiera-name (:name hiera-level))]
    [:span
     [:legend "Location"]
     [location-form ch state']]))
