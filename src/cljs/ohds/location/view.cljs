(ns ohds.location.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.components :as c]
   [ohds.location.processing]    
   [ohds.location.messages :as m]))

;;;TODO Schema Validation

(defn ohds-option [field]
  (let [{uuid :uuid name :name} field]
    [:option {:value uuid
              :key uuid} name]))

(defn ohds-hiera-option [field]
  (let [{uuid :uuid name :name} field]
    [:option {:value uuid
              :key uuid} name]))

(defn loc-select [ui-channel app]
  (let [opts  (map c/map->option'uuid (:locations app))]
    [:div
     (c/select ui-channel m/->ChangeLocation "location" "New Location"
               opts [:option {:value "New Location" :key "new-location"} "New Location"])]))

(defn loc-hiera-select [ui-channel app]
  (let [opts (map c/map->option'uuid (:location-hierarchies app))]
    [:div
     (c/select ui-channel m/->ChangeLocationHierarchy "hierarchy" "HIERARCHY_ROOT" opts)]))

(defn location-select [ui-channel app]
  [:div
   [:div
    [loc-hiera-select ui-channel app]]
   [:div
    [loc-select ui-channel app]]])

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
   [location-select ch state]
   [location-form ch (:location state)]])
