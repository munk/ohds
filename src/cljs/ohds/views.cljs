(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.model :as ml]
   [ohds.login.view :as login]
   [ohds.hierarchy.view :as hierarchy]
   [ohds.location.view :as location]
   [ohds.socialgroup.view :as socialgroup]
   [ohds.individual.view :as individual]
   [ohds.relationship.view :as relationships]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))




(defn hamburger []
  [:button {:type "button"
            :class "navbar-toggle collapsed"
            :data-toggle "collapse"
            :data-target "#navbar"
            :aria-expanded "false" :aria-controls "navbar"}
   [:span {:class "sr-only"} "Toggle Nav"]
   [:span {:class "icon-bar"}]
   [:span {:class "icon-bar"}]
   [:span {:class "icon-bar"}]])

(defn nav-item [ch msg text]
  [:li
   [:a {:href "#"
        :on-click (send! ch msg)} text]])

(defn nav-bar [ch state] ; TODO: Close the menu once something is clicked
  [:div {:id "navbar" :class "navbar-collapse collapse" :aria-expanded "false"}
   [:ul {:class "nav navbar-nav"}
    [nav-item state nil "Home"]
    (nav-item ch (m/->Logout) "Logout") ;;; TODO: why does the message need to be instantiated here instead of in nav-item?
    ]])


(defn top [ch state]
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [hamburger]
     [:span {:class "navbar-brand"} "OpenHDS"]]
    (nav-bar ch state)
    ]])

(defn header []
  [:div
   [:div.page-header]])

(defn pad []
  [:div {:style {:padding "20px"}}])

(defn errors [_ state]
  [:div {:style {:color "red"}} state])


(defn root-component [ch app]
  [:div.container
   (header)
   (top ch app)
   [pad]
   [errors ch (:errors app)]

   [:div.row
    [:div.col-md-4]
    [:div.col-md-4
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
           :relationships [relationships/form ch app]
           [:div "Error Loading Page..."]))]]]]])
