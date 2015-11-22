(ns ohds-ui.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [accountant.core :as accountant]))


(defonce app-state (atom {:page :login}))

(enable-console-print!)


;; -------------------------
;; Business Rules
(defn do-login [username password]
  (println "Logging in" username password))

;;--------------------------
;; Components
(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn atom-input-password [value]
  [:input {:type "password"
           :value @value
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
    (fn []
      [:div [:h2 "Login Page"]
       [:div {} @username]
       [:div {} @password]
       [:div
        [:label "Username"] [atom-input username]]
       [:div
        [:label "Password"] [atom-input-password password]]
       [:div
        [:button {:on-click (fn [] (do-login @username @password))} "Login"]]
       [:div [:a {:href "/location"} "go to the location page"]]])))

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
  [:div [:h2 "Relationship Page"]])

(defn user-page []
  [:div [:h2 "User Page"]])

(defn fieldworker-page []
  [:div [:h2 "Fieldworker Page"]])

(defn inmigration-page []
  [:div [:h2 "In migration page"]])

(defn outmigration-page []
  [:div [:hs "out migration page"]])

(defn current-page []
  (js/console.log @app-state)
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "/login" []
  (session/put! :current-page #'login-page))

(secretary/defroute "/location" []
  (session/put! :current-page #'location-page))

(secretary/defroute "/individual" []
  (session/put! :current-page #'individual-page))

(secretary/defroute "/relationship" []
  (session/put! :current-page #'relationship-page))

(secretary/defroute "/user" []
  (session/put! :current-page #'user-page))

(secretary/defroute "/fieldworker" []
  (session/put! :current-page #'fieldworker-page))

(secretary/defroute "/in-migration" []
  (session/put! :current-page #'inmigration-page))

(secretary/defroute "/out-migration" []
  (session/put! :current-page #'outmigration-page))


;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))

