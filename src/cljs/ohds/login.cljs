(ns ohds.login
  (:require-macros [ohds.macros :refer [defwidget]])
  (:require [petrol.core :refer [wrap Message EventSource]]
            [cljs-http.client :as http]
            [clojure.string :refer [blank?]]
            [petrol.core :as petrol]
            [ohds.processing :refer [state!] :as p]
            [ohds.messages :as om]
            [ohds.components :as c]
            [ohds.domain :as d]
            [ohds.model :refer [valid-login?]]))

(declare submit-login)

(def state-key :user)

(defwidget ChangeUsername [username] state-key)
(defwidget ChangePassword [password] state-key)
(defrecord FieldworkerLogin []
  EventSource
  (watch-channels [_ {:keys [user admin?]}]
    (submit-login (assoc user :admin? admin?))))

(defrecord ToggleAdmin []
  Message
  (process-message [_ app]
    (update-in app [:admin?] not)))


(defn do-login [{:keys [admin?] :as user}]
  (if admin?
    (petrol/wrap om/map->AdminLoginResults
                 (http/post "/api/v1/adminLogin" {:form-params user}))
    (petrol/wrap om/map->LoginResults
                 (http/post "/api/v1/login" {:form-params user}))))

(defn submit-login [{:keys [username password admin?]}]
  {:pre [(not (blank? username))
         (not (blank? password))]
   :post [(set? %)]}
  (let [login-request (d/->LoginRequest username password admin?)]
    #{(do-login login-request)}))



(defn login [ch state]
  [:span
   [:legend "Login"]
   (c/text-input ch ->ChangeUsername "username" "Username" state)
   (c/password-input ch ->ChangePassword "password" "Password")
   (c/checkbox "administrator" "Administrator" ch (->ToggleAdmin))

   (when (valid-login? state)
     (c/submit ch ->FieldworkerLogin "Login"))])
