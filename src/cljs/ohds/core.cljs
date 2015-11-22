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
                {:page :location
                 :fieldworker-id "a5ba318f-1353-4d1e-a3d3-beb9d936c915"
                 :location-id nil;"53f9eb9f-2903-409b-b0c4-4f555cc9583a"
                 }))

(def login-url "/api/v1/login")
(def loc-hiera-url "/api/v1/locationHierarchy")
(def locations-url "/api/v1/locations")

(def json-reader (t/reader :json))


(defn do-login [username password]  
  (go (let [result (<! (http/post
                      "/api/v1/login"
                      {:form-params {:username @username :password @password}}))
            status (:status result)
            body (:body result)]
        (case status
          401 (swap! app-state assoc :page :bad-login :fieldworker-id nil)
          200 (swap! app-state assoc :page :location :fieldworker-id body)))))


(defn root-component []
  ;(println @app-state)  
  [:div {:class "container"}
   [:div {:class "row"} [c/top]]
   [:div {:style {:padding "20px"}}]
   [:div 
    (case (:page @app-state)
      :login [p/login-page do-login app-state]
      :bad-login [p/bad-login do-login app-state]
      :location [p/location-page @app-state])]])

(defn main []
  (reagent/render-component [root-component]
                            (.getElementById js/document "app")))

