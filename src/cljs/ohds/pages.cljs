(ns ohds.pages
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cognitect.transit :as t]
   [cljs-http.client :as http]
   [reagent.core :refer [atom]]
   [ohds.components :as c]))

(def json-reader (t/reader :json))

(defn login-page [login! app-state]
  (let [username (atom "Username")
        password (atom "Password")]
    (swap! app-state assoc :fieldworker-id nil :location-id nil :individual-id nil)
    (fn []
      [:div {:class "form-signin"}
       [:h2 {:class "form-signin-heading"} "Please log in"]
       [c/text-input username "username"]
       [c/password-input password "password"]
       [c/padded-submit "Login"
        (fn [] (login! username password))]])))

(defn bad-login [login! app-state]
  [:div
   [:h4 {:style {:color "red"}} "Invalid Username or Passoword"]
   [login-page login! app-state]])

(defn location-page [app-state location-hierarchy submit]
  {:pre [(not (nil? (:fieldworker-id app-state)))]}

  (let [location-id (atom "External ID")
        name (atom "Name")
        loctype (atom "URB")
        parents (atom nil)
        parent (atom nil)
        fw-id (:fieldworker-id app-state)]

    (location-hierarchy parents parent)
    
    (fn []
      [:div [:h2 "Location Page"]
       [c/select "Parent Location" parent @parents]
       [c/text-input name "name"]
       [c/text-input location-id "external ID"]
       [c/select "Type" loctype
        [:option {:value "RUR" :key "RUR"} "Rural"]
        [:option {:value "URB" :key "URB"} "Urban"]]
       [c/padded-submit "Submit"
        (fn [] (submit @location-id @name @parent fw-id @loctype))]])))

