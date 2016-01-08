(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
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
   :fieldworker-id ""
   :location-id ""
   :social-group-id ""
   :individual-id ""})

(def app (atom initial-state))

(defn render-fn
  [ui-channel app]
  (enable-console-print!)
  (reagent/render-component [views/root-component ui-channel app]
                             js/document.body))

(defn main []
  (enable-console-print!)
  (petrol/start-message-loop! app render-fn))
