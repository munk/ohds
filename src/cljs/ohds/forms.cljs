(ns ohds.forms
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [ohds.components :refer [text-input password-input
                                     submit-button select-box]]))

(defn location-form [app owner loc-hiera]
  (reify
      om/IRender
    (render [_]
      (dom/div nil
               (select-box "Parent Location" loc-hiera)
               (text-input "Name" "name")
               (text-input "Type" "type")))))

(defn login-form [app owner action]
  (reify
      om/IRender
    (render [_]
      (dom/div
       nil
       (text-input "Username: " "username")
       (password-input "Password: " "password")
       (submit-button "Login" action)))))
