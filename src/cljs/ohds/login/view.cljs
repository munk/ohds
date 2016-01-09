(ns ohds.login.view
  (:require
   [ohds.login.messages :as m]
   [ohds.login.processing]
   [ohds.components :as c]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn login [ch state]
  (let [username? (c/has-data? state :username)
        password? (c/has-data? state :password)]
    [:span
     [:legend "Login"]
     (c/text-input ch m/->ChangeUsername "username" "Username" state)
     (c/password-input ch m/->ChangePassword "password" "Password")
     (c/checkbox "administrator" "Administrator" nil nil)

     (when (and username? password?)
       (c/submit ch m/->FieldworkerLogin "Login"))]))
