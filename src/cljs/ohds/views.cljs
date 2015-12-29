(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.model :as ml]
   [ohds.login.view :as login]
   [ohds.location.view :as location]
   [ohds.socialgroup.view :as socialgroup]
   [ohds.individual.view :as individual]
   
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))

(defn root-component [ch app]
  [:div.container
   [:div.page-header
    [:h1 "OpenHDS"]]
   [:div {:style {:padding "20px"}}]
   [:div {:style {:color "red"}} (:errors app)]
   [:div.row
    [:div.col-md-3
     [:div.well.well-lg
      [:fieldset
       (case (:page app)
         :login [login/login ch (:user app)]
         :location [location/form ch app]
         :socialgroup [socialgroup/form ch (:socialgroup app)]
         :individual [individual/form ch (:individual app)]
         [:div "Error Loading Page..."])]]]
    [:div.cold-md-3
     [:div
      [:div (str "Current User: " (:fieldworker-id app))]
      [:div {:title (str (:location app))} (str "Current Location: " (:uuid (:location app)))]
      [:div (str "Current Social Group: " (:social-group-id app))]
      [:div (str "Current Individual: " (:individual-id app))]]
     
     ]]])
