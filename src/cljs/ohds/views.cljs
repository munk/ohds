(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.model :as ml]
   [ohds.login.view :as login]
   [ohds.hierarchy.view :as hierarchy]
   [ohds.location.view :as location]
   [ohds.socialgroup.view :as socialgroup]
   [ohds.individual.view :as individual]

   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn header []
  [:div.page-header
   [:h1 "OpenHDS"]])

(defn pad []
  [:div {:style {:padding "20px"}}])

(defn errors [_ state]
  [:div {:style {:color "red"}} state])


(defn root-component [ch app]
  [:div.container
   [header]
   [pad]
   [errors ch (:errors app)]

   [:div.row
    [:div.col-md-4]
    [:div.col-md-3
     [:div.well.well-lg
      [:fieldset
       (if (= (:mode app) :not-authorized)
         (login/login ch (:user app))
         (case (:page app)
           :login [login/login ch (:user app)]
           :hierarchy [hierarchy/form ch app]
           :location [location/form ch app]
           :socialgroup [socialgroup/form ch app]
           :individual [individual/form ch app]
           [:div "Error Loading Page..."]))]]]]])
