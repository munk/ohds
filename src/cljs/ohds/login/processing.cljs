(ns ohds.login.processing
  (:require-macros [ohds.macros :refer [state-message]])
  (:require
   [clojure.string :refer [blank?]]
   [petrol.core :refer [Message EventSource]]
   [ohds.login.backend :as backend]
   [ohds.login.messages :as m]
   [ohds.messages :as msg]
   [ohds.processing :refer [assoc-state] :as p]
   [ohds.domain :as d]))

(defn submit-login [{:keys [username password admin?]}]
  {:pre [(not (blank? username))
         (not (blank? password))]
   :post [(set? %)]}
  (let [login-request (d/->LoginRequest username password admin?)]
    #{(backend/login login-request)}))

(extend-protocol Message
  m/ChangeUsername
  (process-message
      [response app]
    (assoc-state response app :user))

  m/ChangePassword
  (process-message [response app]
    (assoc-state response app :user))

  m/ToggleAdmin
  (process-message [response app]
    (update-in app [:admin?] not)))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user]}]
    (submit-login user)))
