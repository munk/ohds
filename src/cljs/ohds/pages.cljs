(ns ohds.pages
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cognitect.transit :as t]
   [cljs-http.client :as http]
   [reagent.core :refer [atom]]
   [ohds.components :as c]))

(def json-reader (t/reader :json))

(defn login-page [login app-state]
  (let [username (atom "Username")
        password (atom "Password")]
    (swap! app-state assoc :fieldworker-id nil :location-id nil :individual-id nil)
    (fn []
      [:div {:class "form-signin"}
       [:h2 {:class "form-signin-heading"} "Please log in"]
       [:div
        [:label {:for "username"} "Username"] [c/atom-input username "username"]]
       [:div
        [:label {:for "password"} "Password"] [c/atom-input-password password "password"]]
       [:div {:class "checkbox"}]
       [:div
        [:button {:class "btn btn-lg btn-primary btn-block" :type "submit"
                  :on-click (fn [] (login username password))}
         "Login"]]])))

(defn bad-login [do-login app-state]
  [:div
   [:h4 {:style {:color "red"}} "Invalid Username or Passoword"]
   [login-page do-login app-state]])

(defn get-location-hierarchy-options []
  (let [options (atom nil)]

    options))

(defn location-page [app-state]
  (let [location-id (atom "External ID")
        name (atom "Name")
        parents (atom nil)]
    (go (let [result (<! (http/get
                          "/api/v1/locationHierarchy"
                          {:as :clojure}))
              body (t/read json-reader (:body result))]
          (reset! parents (map c/location-hierarchy-option body))))
    (fn []
      [:div [:h2 "Location Page"]
       [:div
        [:label "Parent Location"] [:select "Location Hierarchy" @parents]]
       [:div [:label "Name"] [c/atom-input name]]
       [:div [:label "External ID"] [c/atom-input location-id]]
       [:div [:label "Type"] [:select
                              [:option {:value "RUR"} "Rural"]
                              [:option {:value "URB"} "Urban"]]]
       [:div [:a {:href "/individual"} "go to individual page"]]])))
