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
   [ohds.location-select.view :as location-select]
   [ohds.individual-update.view :as individual-update]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn hamburger []
  [:button.navbar-toggle.collapsed {:type "button"
            :data-toggle "collapse"
            :data-target "#navbar"
            :aria-expanded "false" :aria-controls "navbar"}
   [:span.sr-only "Toggle Nav"]
   [:span.icon-bar]
   [:span.icon-bar]
   [:span.icon-bar]])

(defn nav-item [ch msg text]
  [:li
   [:a {:href "#"
        :on-click (send! ch msg)} text]])

(defn nav-bar [ch state] ; TODO: Close the menu once something is clicked
  [:div.navbar-collapse.collapse {:id "navbar" :aria-expanded "false"}
   (when (and (not= (:page state) :login)
              (not= (:mode state) :not-authorized))
     [:ul.nav.navbar-nav
      (nav-item ch (m/->Logout) "Logout")
      (nav-item ch (m/->FieldworkerHome) "Home")
      (when (:admin-login state)
        (nav-item ch nil "Admin"))])])


(defn top [ch state]
  [:nav.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [hamburger]
     [:span.navbar-brand "OpenHDS"]]
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
           :location-select [location-select/form ch app]
           :location [location/form ch app]
           :socialgroup [socialgroup/form ch app]
           :individual [individual/form ch app]
           :relationships [relationships/form ch app]
           :individual-update [individual-update/form ch app]
           [:div "Error Loading Page..."]))]]]]])
