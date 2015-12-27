(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.model :as ml]
   [ohds.login.view :as login]
   [ohds.location.view :as location]
   [ohds.individual.view :as individual]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))

(defn root-component [ui-channel app]
  [:div {:class "container"}
   [:div {:style {:padding "20px"}}]
   [:div {:style {:color "red"}} (:errors app)]
   [:div
    (case (:page app)
      :login [login/login ui-channel (:user app)]
      :loc-hiera [location/location-widget ui-channel app]
      :individual [individual/individual-widget ui-channel app]
      [:div "Error Loading Page..."])]

   [:div {}  (str "hierarchy: "
                  (:location-hierarchy app)
                  " ||| location: "
                  (:location app))]])
