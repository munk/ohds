(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(enable-console-print!)

(defonce app-state (atom {}))

(defn text-input
  [labelname ref]
  (dom/div nil
   (dom/label nil labelname)
   (dom/input #js {:type "text" :ref ref})))

(defn password-input
  [labelname ref]
  (dom/div nil
   (dom/label nil labelname)
   (dom/input #js {:type "password" :ref ref})))

(defn submit-button [label onclick]
  (dom/div nil
   (dom/button #js {:onClick onclick} "Login")))

(defn location-form [app owner]
  (reify
      om/IRender
    (render [_]
      (dom/div nil
               (text-input "Parent Location" "parentLocation")
               (text-input "Name" "name")
               (text-input "Type" "type")))))

(defn do-login [app owner]
  (let [username (.-value (om/get-node owner "username"))
        password (.-value (om/get-node owner "password"))]
    (go (let [response (<! (http/post "http://localhost:10555/api/v1/login"
                                      {:form-params {:username username
                                                     :password password}}))
              success (= "true" (:body response))]          
          (println success)
          (om/root
           (fn [app owner]
             (location-form app owner))
           app-state
           {:target (. js/document (getElementById "app"))}
           )))))

(defn login-form [app owner]
  (reify
      om/IRender
    (render [_]
      (dom/div
       nil
       (text-input "Username: " "username")
       (password-input "Password: " "password")
       (submit-button "Login" (fn [] (do-login app owner)))))))





(defn main []
  (om/root
   (fn [app owner]
     (login-form app owner))
    app-state
    {:target (. js/document (getElementById "app"))}))
