(ns ohds.components
  (:require-macros [cljs.core.async.macros :refer [go]]))

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

(defn nav-item [app-state page text]
  [:li
   [:a {:href "#" :on-click (fn [] (swap! app-state assoc :page page))} text]])

(defn nav-bar [app-state] ; TODO: Close the menu once something is clicked
  [:div {:id "navbar" :class "navbar-collapse collapse" :aria-expanded "false"}
   [:ul {:class "nav navbar-nav"}
    [nav-item app-state :login "Logout"]
    [nav-item app-state :update-location "Update Location"]]])


(defn top [app-state]
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [hamburger]
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
