(ns ohds.components
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :refer [atom]]))


(defn a-swap [state key val]
  (swap! state assoc key val))

(defn on-change [elem state]
  (reset! state
          (-> elem
              .-target
              .-value)))

(defn update-page [app-state page]
  (a-swap app-state :page page))

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


(defn location-hierarchy-option [field]
  [:option {:value (get field "uuid") :key (get field "uuid")} (get field "name")])

(defn location-option [field]
  [:option {:value (get field "uuid") :key (get field "uuid")} (get field "name")])

(defn location-hierarchy-select [hierarchy]
  (println hierarchy)
  (map location-hierarchy-option hierarchy))


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


(defn nav-bar [app-state] ; TODO: Close the menu once something is clicked
  (fn []
    (let [nav-item
          (fn [page text]
            [:li
             [:a {:href "#"
                  :type "button"
                  :data-toggle "collapse"
                  :data-target "#navbar"
                  :aria-expanded "false" :aria-controls "navbar"
                  :on-click (fn [] (update-page app-state page))} text]])]
      [:div {:id "navbar" :class "navbar-collapse collapse" :aria-expanded "false"}
       [:ul {:class "nav navbar-nav"}
        [nav-item :update-location "Update event"]
        [nav-item :location "New Census"]
        [nav-item :login "Logout"]]])))


(defn top [app-state]
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     (if (:fieldworker-id @app-state)
       [hamburger])
     [:span {:class "navbar-brand"} "OpenHDS"]]
    [nav-bar app-state]
    ]])


(defn input [a id f]
  [:div
   [:label {:for id} (clojure.string/capitalize id)]
   [f a id]])

(defn text-input [a id]
  [input a id atom-input])

(defn password-input [a id]
  [input a id atom-input-password])

(defn padded-submit [n on-click]
  [:div
   [:div {:class "checkbox"}]
   [:button {:class "btn btn-lg btn-primary btn-block"
             :id n
             :type "submit"
             :on-click on-click}
    n]])

(defn select [lbl a & options]
  [:div
   [:label lbl]
   [:select {:on-change #(reset! a (-> % .-target .-value))}
    options]])

(defn select-with-update [lbl a f & options]
  [:div
   [:label lbl]
   [:select {:on-change
             (fn [c]
               (println "on change" c)
               (f)
               (reset! a (-> c .-target .-value)))}
    options]])

(defn login-form [authf]
  (let [username (atom "Username")
        password (atom "Password")]
    [:div {:class "form-signin"}
     [:h2 {:class "form-signin-heading"} "Please log in"]
     [text-input username "username"]
     [password-input password "password"]
     [padded-submit "Login"
      (fn [] (authf username password))]]))
