(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.cookies :as cookies]
   [petrol.core :as petrol]
   [ohds.views :as views]
   [ohds.processing]))

(enable-console-print!)

(def initial-state
  {:page :login
   :mode :not-authorized

   :errors ""
   :user {:username ""
          :password ""}
   :hierarchy-level-count 0
   :hierarchies ["HIERARCHY_ROOT" "" "" "" "" "" "" "" ""]
   :location-hierarchy "HIERARCHY_ROOT"
   :location {:name "" :uuid "" :extId "" :type "RURAL"}
   :socialgroup {:name nil :uuid "" :extId "" :type "FAMILY"}
   :individual {:firstname nil :extId nil :gender "FEMALE"}
   :fieldworker-id "fa6bb290-533d-4a02-b9c1-141e93723cfc"
   :locations []
   :relationships {}
   :location-id ""
   :social-group-id ""
   :individual-id ""
   :individuals []})

(def app (atom initial-state))

(defn render-fn
  [ui-channel app]
  ;(cookies/clear!)
  ;(cookies/set! :app app)
  (reagent/render-component [views/root-component ui-channel app]
                             js/document.body))

(defn main []
  (enable-console-print!)
  (let [app' (cookies/get :app initial-state)]
    ;(reset! app app')
    (petrol/start-message-loop! app render-fn)))
