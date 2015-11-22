(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]))

(enable-console-print!)

(def app-state (atom
                {:page :login
                 :fieldworker-id "a5ba318f-1353-4d1e-a3d3-beb9d936c915"
                 :location-id "53f9eb9f-2903-409b-b0c4-4f555cc9583a"}))

(def login-url "/api/v1/login")
(def loc-hiera-url "/api/v1/locationHierarchy")
(def locations-url "/api/v1/locations")

(def json-reader (t/reader :json))

(defn do-login [username password]
  (swap! app-state assoc :page :location)
  (println "Logging in" username password @app-state))

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
     [:a {:href "#"} "Logout"]]]])

(defn top []
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [hamburger]
     [:span {:class "navbar-brand"} "OpenHDS"]]
    [nav-bar]
    ]])

(defn login-page []
  (let [username (atom "Username")
        password (atom "Password")]
    (swap! app-state assoc :fieldworker-id nil :location-id nil :individual-id nil)
    (fn []
      [:div 
       [:div 
        [:div
         [:h2 {:class "form-signin-heading"} "Please log in"]
         [:div
          [:label {:for "username"} "Username"] [atom-input username "username"]]
         [:div
          [:label {:for "password"} "Password"] [atom-input-password password "password"]]
         [:div {:class "checkbox"}]
         [:div
          [:button {:class "btn btn-lg btn-primary btn-block" :type "submit"
                    :on-click (fn [] (do-login username password))}
           "Login"]]]]])))

(defn location-page []
  [:div "locations"])

(defn root-component []
  [:div {:class "container"}
   [:div {:class "row"} [top]]
   [:div {:style {:padding "20px"}}]
   [:div 
    (case (:page @app-state)
      :login [login-page]
      :location [location-page])]])

(defn main []
  (println "In Main")
  (reagent/render-component [root-component]
                            (.getElementById js/document "app")))

