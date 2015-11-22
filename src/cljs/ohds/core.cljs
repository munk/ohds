(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]
            [ohds.pages :as p]))

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
  (go (let [result (http/post
                    "/api/v1/login"
                    {:form-params {:username username :password password}})]
        (println result)))
  (println "Logging in" username password @app-state))


(defn location-page []
  [:div "locations"])

(defn root-component []
  [:div {:class "container"}
   [:div {:class "row"} [c/top]]
   [:div {:style {:padding "20px"}}]
   [:div 
    (case (:page @app-state)
      :login [p/login-page do-login app-state]
      :location [location-page])]])

(defn main []
  (println "In Main")
  (reagent/render-component [root-component]
                            (.getElementById js/document "app")))

