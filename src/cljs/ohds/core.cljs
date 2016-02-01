(ns ohds.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.cookies :as cookies]
   [petrol.core :as petrol]
   [schema.core :as s]
   [ohds.views :as views]
   [ohds.domain :as d]
   [ohds.processing]))

(enable-console-print!)

(def initial-state
  {:page :login
   :debug true})

(defonce app (atom initial-state))

(defn render-fn
  [ui-channel app]
  (reagent/render-component [views/root-component ui-channel app]
                             js/document.body))

(defn main []
  (enable-console-print!)
  (let [app' (cookies/get :app initial-state)]
    (petrol/start-message-loop! app render-fn)))
