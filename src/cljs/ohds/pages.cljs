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
        name (atom nil)
        loctype (atom "RURAL")
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
        [:option {:value "RURAL" :key "RURAL"} "Rural"]
        [:option {:value "URBAN" :key "URBAN"} "Urban"]]
       [c/padded-submit "Submit"
        (fn [] (submit @location-id @name @parent fw-id @loctype))]])))


(defn update-visit-page [app-state location-hierarchy location submit]
  (let [parents (atom nil)
        parent (atom nil)
        locs (atom nil)
        loc (atom nil)
        inds (atom nil)
        ind (atom nil)]
    
    (location-hierarchy parents parent)
    (location locs loc @parent)

    (fn []
      [:div [:h2 "Update Event"]
       [c/select-with-update "Parent Location" parent
        (fn []
          (location locs loc @parent))
        @parents]
       [c/select "Location" loc @locs]
       [c/select "Individual" ind @inds]
       [c/padded-submit "PregnancyObservation"]
       [c/padded-submit "PregnancyOutcome"]
       ;[c/padded-submit "PregnancyResult"]
       [c/padded-submit "In Migration"]
       [c/padded-submit "Out Migration"]
       [c/padded-submit "Death"]])))


(defn update-location-page [app-state location-hierarchy submit]
  [location-page app-state location-hierarchy submit])


(defn individual-page [app-state submit]
  (let [individual-id (atom "External ID")
        firstname (atom "First Name")
        gender (atom "Gender")
        fw-id (:fieldworker-id app-state)] ;;; TODO: associate this person with current location
    [:div [:h2 "Individual Page"]
     [c/text-input individual-id "External ID"]
     [c/text-input firstname "First Name"]
     [c/text-input gender "Gender"]
     [c/padded-submit "Submit"
      (fn [] (submit fw-id @individual-id @firstname @gender))]]))
