(ns ohds.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(defn do-login []
  (println "Logging in"))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div
           nil
           "Username: "
           (dom/input #js {:type "text"})
           "Password: "
           (dom/input #js {:type "password"})
           (dom/button #js {:onClick do-login} "Login")))))
    app-state
    {:target (. js/document (getElementById "app"))}))
