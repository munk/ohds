(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [petrol.core :as petrol]
   [ohds.views :as views]
   [ohds.processing]))

(def initial-state
  {:page :login
   :errors ""
   :user {:username ""
          :password ""}
   :location-hierarchy "HIERARCHY_ROOT"
   :location {:name "" :uuid nil :extId "" :type "RURAL"}
   :individual {:firstname "" :dob ""}
   :fieldworker-id nil
   :location-id nil})

(def app (atom initial-state))

(defn render-fn
  [ui-channel app]
  (reagent/render-component [views/root-component ui-channel app]
                            js/document.body))

(defn main []
  (enable-console-print!)
  (petrol/start-message-loop! app render-fn))
