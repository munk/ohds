(ns ohds.location.view
  (:require
    [petrol.core :refer [send! send-value!]]
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
  [:div
   [:select {:on-change (send-value! ui-channel m/->ChangeLocation)
             :default-value "New Location"}
    [:option {:value "New Location"} "New Location"]
    (map ohds-option (:locations app))]])

(defn loc-hiera-select [ui-channel app]
  [:div
   [:select {:on-change (send-value! ui-channel m/->ChangeLocationHierarchy)
             :default-value "HIERARCHY_ROOT"}
    (map ohds-hiera-option (:location-hierarchies app))]])

(defn location-select [ui-channel app]
  [:div
   [:div
    [loc-hiera-select ui-channel app]]
   [:div
    [loc-select ui-channel app]]])

(defn location-form [ui-channel app]
 [:div
  [:div
   [:select {:value (:type app)
             :on-change (send-value! ui-channel m/->ChangeLocationType)}
    [:option {:value "RURAL"} "Rural"]
    [:option {:value "URBAN"} "Urban"]]]
  [:div
   [:input {:type :text
            :on-change  (send-value! ui-channel m/->ChangeLocationName)
            :value (:name app)
            :placeholder "Name"}]]
  [:div
   [:input {:type :text
            :on-change (send-value! ui-channel m/->ChangeLocationExtId)
            :value (:extId app)
            :placeholder "External Id"}]]
  [:div
   [:button {:on-click (send! ui-channel (m/->SubmitLocation))} "Submit"]]])

(defn location-widget [ui-channel app]
  [:div
   [location-select ui-channel app]
   [location-form ui-channel (:location app)]])
