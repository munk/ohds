(ns ohds.login
  (:require [petrol.core :refer [wrap Message EventSource]]
            [cljs-http.client :as http]
            [ohds.login.messages :as m]
            [ohds.components :as c]
            [ohds.model :refer [valid-login?]]))

(defrecord LoginResult [body])

(defrecord SubmitLogin []
  Message
  (process-message [msg app]
    (if (= (:username (:login app))
           "good-username")
      (assoc app :page :hierarchy-select)
      app))
  EventSource
  (watch-channels [msg app]
    (println "watch-channels about to wrap")
    #{(wrap
       map->LoginResult
       (http/post "/api/v1/login"
                  {:form-params (:login app)}))}))


(defn login [ch state]
  [:span
   [:legend "Login"]
   (c/text-input ch m/->ChangeUsername "username" "Username" state)
   (c/password-input ch m/->ChangePassword "password" "Password")
   (c/checkbox "administrator" "Administrator" ch (m/->ToggleAdmin))

   (when (valid-login? state)
     (c/submit ch m/->FieldworkerLogin "Login"))])
