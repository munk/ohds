(ns ohds.login.view
  (:require [ohds.login.messages :as m]
            [ohds.login.processing]
            [ohds.model :refer [valid-login?]]
            [ohds.components :as c]))


(defn login [ch state]
  [:span
   [:legend "Login"]
   (c/text-input ch m/->ChangeUsername "username" "Username" state)
   (c/password-input ch m/->ChangePassword "password" "Password")
   (c/checkbox "administrator" "Administrator" ch (m/->ToggleAdmin))

   (when (valid-login? state)
     (c/submit ch m/->FieldworkerLogin "Login"))])
