(ns ohds.views
  (:require
   [ohds.messages :as m]
   [ohds.admin :as admin]
   [ohds.login :as new-login]
   [ohds.users :as users]
   [ohds.projectcodes :as projectcodes]
   [ohds.fieldworkers :as fieldworkers]
   [ohds.admin-hierarchies :as admin-hierarchies]
   [ohds.hierarchy.view :as hierarchy]
   [ohds.location.view :as location]
   [ohds.socialgroup.view :as socialgroup]
   [ohds.individual.view :as individual]
   [ohds.relationship.view :as relationships]
   [ohds.location-select.view :as location-select]
   [ohds.individual-update.view :as individual-update]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))

(defn debug [app]
  [:div.well.well-lg {:style {:background-color :lightblue
                              :font-size 12
                              :color "#254117"
                              :white-space :nowrap
                              :overflow :scroll}}
   [:legend {:style {:color :black}} "Debug App State"]
   [:span {:id "debug-body" :style {:font-family :monospace}}
    (for [k (keys app)]
      (cond
        (= k :location-hierarchies)
        [:div (str k "-")
         (for [h (k app)]
           [:div {:style {:paddingLeft "30px"}} (str "\t" h)])]
        (= k :hierarchy-levels)
        [:div (str k "-")
         (for [h (k app)]
           [:div {:style {:paddingLeft "30px"}} (str "\t" h)])]
        :else [:div (str k " - " (k app))]))]])

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

(defn nav-bar [ch state]
  [:div.navbar-collapse.collapse {:id "navbar" :aria-expanded "false"}
   (when (and (not= (:page state) :login)
              (not= (:mode state) :not-authorized))
     [:ul.nav.navbar-nav
      (nav-item ch (m/->Logout) "Logout")
      (nav-item ch (m/->FieldworkerHome) "Home")
      (nav-item ch (m/->AdminHome) "Admin")
      (nav-item ch (m/->ToggleDebug) "Debug")
      (when (:admin-login state)
        (nav-item ch nil "Admin"))])])


(defn top [ch state]
  [:nav.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbar-header
     [hamburger]
     [:span.navbar-brand "OpenHDS"]]
    (nav-bar ch state)]])

(defn header []
  [:div
   [:div.page-header]])

(defn pad []
  [:div {:style {:padding "20px"}}])

(defn errors [_ state]
  (when (not (clojure.string/blank? state))
    [:div.alert.alert-danger {:id "errors"}
     state]))


(defn root-component [ch app]
  [:div.container
   (header)
   (top ch app)
   [pad]
   [errors ch (:errors app)]
   [:a {:href "https://github.com/munk/ohds"}
    [:img {:style {:position :absolute :top 50 :right 0 :border 0}
           :src "https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67"
           :alt "Fork me on GitHub"
           :data-canonical-src "https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png" }]]
   [:div.row
    (if (:debug app)
      [:div.col-md-6
       (debug app)]
      [:div.cold-md-4 {} " "])
    [:div.col-md-4
     [:div.well.well-lg
      [:fieldset
       (case (:page app)
         :login [new-login/login ch
                 (:user app)]
         :admin-home [admin/form ch app]
         :admin-users [users/form ch app]
         :admin-fieldworkers [fieldworkers/form ch app]
         :admin-project-codes [projectcodes/form ch app]
         :admin-location-hierarchies [admin-hierarchies/form ch app]

         :hierarchy [hierarchy/form ch
                     (assoc (:hierarchy app)
                            :fieldworker-id (:fieldworker-id app)
                            :hierarchies (:hierarchies app)
                            :location-hierarchies (:location-hierarchies app)
                            :hierarchy-levels (:hierarchy-levels app))]
         :location-select [location-select/form ch app]
         :location [location/form ch app]
         :socialgroup [socialgroup/form ch app]
         :individual [individual/form ch app]
         :relationships [relationships/form ch app]
         :individual-update [individual-update/form ch app]
         [:div "Error Loading Page..."])]]]]])
