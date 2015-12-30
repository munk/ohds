(ns ohds.login.view
  (:require
   [ohds.login.messages :as m]
   [ohds.login.processing]
   [ohds.components :as c]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn login [ch _]
  [:span
   [:legend "Login"]
   (c/text-input ch m/->ChangeUsername "username" "Username")
   (c/password-input ch m/->ChangePassword "password" "Password")
   (c/submit ch m/->FieldworkerLogin "Login")])
