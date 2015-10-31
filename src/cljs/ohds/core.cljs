(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello Chestnut!"}))

(defn do-login [app owner]
  (let [username (.-value (om/get-node owner "username"))
        password (.-value (om/get-node owner "password"))]
    (go (let [response (<! (http/post "http://localhost:10555/api/v1/login"
                                      {:form-params {:username username
                                                     :password password}}))]))))

(defn main []
  (om/root
    (fn [app owner]
      (reify
        om/IRender
        (render [_]
          (dom/div
           nil
           "Username: "
           (dom/input #js {:type "text" :ref "username"})
           "Password: "
           (dom/input #js {:type "password" :ref "password"})
           (dom/button #js {:onClick (fn []
                                       (do-login app owner))} "Login")))))
    app-state
    {:target (. js/document (getElementById "app"))}))
