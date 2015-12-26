(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.model :as ml]
   [ohds.login.view :as login]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn login [ui-channel app]
  [:div {:class "form-signin"}
   [:h2 {:class "form-signin-heading"}
    "Please log in"]
   [:div
    [:input {:id "username"
             :type :text
             :placeholder "Username"
             :on-change (send-value! ui-channel m/->ChangeUsername)}]]
   [:div
    [:input {:id "password"
             :type :password
             :placeholder "Password"
             :on-change (send-value! ui-channel m/->ChangePassword)}]]
   [:div
    [:button {:on-click (send! ui-channel (m/->FieldworkerLogin))}
     "Login"]]])

(defn ohds-option [field]
  (s/validate ml/LocationOption field)
  (let [{uuid :uuid name :name} field]
    [:option {:value uuid
              :key uuid} name]))

(defn ohds-hiera-option [field]
  (s/validate ml/LocationHierarchyOption field)
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
    [:input {:type :text ;;TODO Update value on change
             :on-change  (send-value! ui-channel m/->ChangeLocationName)
             :value (:name app)
             :placeholder "Name"}]]
   [:div
    [:input {:type :text
             :on-change (send-value! ui-channel m/->ChangeLocationExtId)
             :value (:extId app)
             :placeholder "External ID"}]]
   [:div
    [:button {:on-click (send! ui-channel m/->SubmitLocation)} "Submit"]]])

(defn location-widget [ui-channel app]
  [:div
   [location-select ui-channel app]
   [location-form ui-channel (:location app)]])


(defn root-component [ui-channel app]
  [:div {:class "container"}
   [:div {:style {:padding "20px"}}]
   [:div {:style {:color "red"}} (:errors app)]
   [:div
    (case (:page app)
      :login [login/login ui-channel (:user app)]
      :loc-hiera [location-widget ui-channel app]
      [:div "Error Loading Page..."])]

   [:div {}  (str "hierarchy: "
                  (:location-hierarchy app)
                  " ||| location: "
                  (:location app)
                  app)]])
