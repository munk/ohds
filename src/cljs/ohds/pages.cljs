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
       [:div
        [:label {:for "username"} "Username"] [c/atom-input username "username"]]
       [:div
        [:label {:for "password"} "Password"] [c/atom-input-password password "password"]]
       [:div {:class "checkbox"}]
       [:div
        [:button {:class "btn btn-lg btn-primary btn-block" :type "submit"
                  :on-click (fn [] (login! username password))}
         "Login"]]])))

(defn bad-login [login! app-state]
  [:div
   [:h4 {:style {:color "red"}} "Invalid Username or Passoword"]
   [login-page login! app-state]])

(defn get-location-hierarchy-options []
  (let [options (atom nil)]

    options))

(defn location-page [app-state]
  {:pre [(not (nil? (:fieldworker-id app-state)))]}
  (let [location-id (atom "External ID")
        name (atom "Name")
        parents (atom nil)
        loctype (atom "URB")
        parent (atom nil)
        fw-id (:fieldworker-id app-state)]
    (go (let [result (<! (http/get
                          "/api/v1/locationHierarchy"
                          {:as :clojure}))
              body (t/read json-reader (:body result))
              parents' (map c/location-hierarchy-option body)]
          (reset! parents parents')
          (reset! parent (first parents'))))
    (fn []
      [:div [:h2 "Location Page"]
       [:div
        [:label "Parent Location"]
        [:select  @parents]]
       [:div [:label "Name"] [c/atom-input name]]
       [:div [:label "External ID"] [c/atom-input location-id]]
       [:div [:label "Type"] [:select {:on-change #(reset! loctype (-> % .-target .-value))}
                              [:option {:value "RUR"} "Rural"]
                              [:option {:value "URB"} "Urban"]]]
       [:div @loctype]
       [:div @parent]
       [:div
        [:button {:class "btn btn-lg btn-primary btn-block" :type "submit"
                  :on-click (fn [] (println location-id))}
         "Submit"]]])))
