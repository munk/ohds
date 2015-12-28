(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [petrol.core :as petrol]
   [ohds.views :as views]
   [ohds.processing]))

(def initial-state
  {:page :individual
   :errors ""
   :user {:username ""
          :password ""}
   :location-hierarchy "HIERARCHY_ROOT"
   :location {:name "" :uuid "f90d9ec5-aa18-4f9a-9feb-c96b7f473306" :extId "" :type "RURAL"}
   :individual {:firstname "" :extId "" :gender ""}
   :fieldworker-id "56825ead-e0b7-4ae8-93fc-9c211e8f9807"
   :location-id "f90d9ec5-aa18-4f9a-9feb-c96b7f473306"})

(def app (atom initial-state))

(defn render-fn
  [ui-channel app]
  (reagent/render-component [views/root-component ui-channel app]
                            js/document.body))

(defn main []
  (enable-console-print!)
  (petrol/start-message-loop! app render-fn))
