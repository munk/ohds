(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [petrol.core :as petrol]
   [ohds.views :as views]
   [ohds.processing]))

(enable-console-print!)

(def initial-state
  {:page :login
   :debug false})

(defonce app (atom initial-state))

(defn render-fn
  [ui-channel app]
  (reagent/render-component [views/root-component ui-channel app]
                             js/document.body))

(defn main []
  (enable-console-print!)
  (petrol/start-message-loop! app render-fn))
