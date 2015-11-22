(ns ohds-ui.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]))


(def app-state (atom {:page :login
                      :fieldworker-id "a5ba318f-1353-4d1e-a3d3-beb9d936c915"
                      :location-id "53f9eb9f-2903-409b-b0c4-4f555cc9583a"}))

(enable-console-print!)


;; -------------------------
;; Business Rules
(defn do-login [username password]
  (swap! app-state assoc :page :location)
  (println "Logging in" username password))

;;--------------------------
;; Components
(defn atom-input [value id]
  [:input {:type "text"
           :value @value
           :id id
           :class "form-control"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn atom-input-password [value id]
  [:input {:type "password"
           :value @value
           :id id
           :class "form-control"
           :on-change #(reset! value (-> % .-target .-value))}])

;; -------------------------
;; Views

(defn home-page []
  [:div [:h2 "Welcome to ohds-ui"]
   [:div [:a {:href "/about"} "go to about page"]]
   [:div [:a {:href "/login"} "go to login page"]]])

(defn about-page []
  (println "about page")
  [:div [:h2 "About ohds-ui"]
   [:div [:a {:href "/"} "go to the home page"]]])

(defn login-page []
  (let [username (atom "Username")
        password (atom "Password")]
    (swap! app-state assoc :fieldworker-id nil :location-id nil :individual-id nil)
    (fn []
      [:div {:class "container"}
       [:div 
        [:form {:class "form-signin"}
         [:h2 {:class "form-signin-heading"} "Please log in"]
         [:div
          [:label {:for "username"} "Username"] [atom-input username "username"]]
         [:div
          [:label {:for "password"} "Password"] [atom-input-password password "password"]]
         [:div {:class "checkbox"}]
         [:div
          [:button {:class "btn btn-lg btn-primary btn-block" :type "submit"
                    :on-click (fn [] (do-login @username @password))} "Login"]]]]])))

(defn location-page []
  (let [location-id (atom "External ID")
        name (atom "Name")]
    (fn []
      [:div [:h2 "Location Page"]
       [:div
        [:label "Parent Location"] [:select "Location Hierarchy"]]
       [:div [:label "Name"] [atom-input name]]
       [:div [:label "External ID"] [atom-input location-id]]
       [:div [:label "Type"] [:select [:option {:value "foo"} "Stuff"] "Type"]]
       [:div [:a {:href "/individual"} "go to individual page"]]])))

(defn individual-page []
  (let [individual-id (atom "External ID")
        firstname (atom "First Name")
        gender (atom "Gender")]
    [:div [:h2 "Individual Page"]
     [:div
      [:label "External ID"] [atom-input individual-id]]
     [:div [:label "First Name"] [atom-input firstname]]
     [:div [:label "Gender"] [atom-input gender]]
     [:div [:a {:href "/relationship"} "go to relationship page"]]]))

(defn relationship-page []
  [:div [:h2 "Relationship Page"]
   [:div
    [:label "Relationship Type"] [:input {:type "text"}]]
   [:div [:label "Collection Date"] [:input {:type "text"}]]
   [:div [:label "Other Individual"] [:input {:type "text"}]]])

(defn user-page []
  [:div [:h2 "User Page"]])

(defn fieldworker-page []
  [:div [:h2 "Fieldworker Page"]])

(defn inmigration-page []
  [:div [:h2 "In migration page"]])

(defn outmigration-page []
  [:div [:hs "out migration page"]])

(defn current-page []
  (println @app-state)
  [:div [(session/get :current-page)]])

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

(defn nav-bar []
  [:div {:id "navbar" :class "navbar-collapse collapse" :aria-expanded "false"}
   [:ul {:class "nav navbar-nav"}
    [:li
     [:a {:href "#"} "Home"]]
    [:li
     [:a {:href "#"} "Logout"]]]]
  )

(defn top []
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [hamburger]
     [:span {:class "navbar-brand"} "OpenHDS"]]
    [nav-bar]
  ]])
;; -------------------------
;; Initialize app
(defn root-component []
  (println "Root" (:page @app-state))
  [:div
   [top]
   
   [:div {:id "wrapper" :class "main"}
    (case (:page @app-state)
      :login [login-page]
      :location [location-page]
      :individual [individual-page]
      )]])

(defn mount-root []
  (reagent/render [;current-page
                   root-component] (.getElementById js/document "app")))

(defn init! []
  (reagent/render-component [root-component]
                      (.getElementById js/document "app")))

(defn on-js-reload []
  (init!))


