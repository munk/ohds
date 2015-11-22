(ns ohds.pages
  (:require
   [reagent.core :refer [atom]]
   [ohds.components :as c]))

(defn login-page [do-login app-state]
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
                  :on-click (fn [] (do-login username password))}
         "Login"]]])))


(defn bad-login [do-login app-state]
  (println "bad login")
  [:div
   [:h4 {:style {:color "red"}} "Invalid Username or Passoword"]
   [login-page do-login app-state]])
