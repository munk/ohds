(ns ohds.login.processing
  (:require-macros [ohds.macros :refer [state-message]])
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.login.backend :as backend]
   [ohds.login.messages :as m]
   [ohds.messages :as msg]
   [ohds.processing :refer [assoc-state] :as p]))

;(state-message m/ChangeUsername :user)

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
    (update-in app [:admin-login] not)))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user] :as app}]
    (let [admin? (:admin-login app)
          user-ct (count (:username user))
          pass-ct (count (:password user))]
      (if (and (pos? user-ct)
               (pos? pass-ct))
        #{(backend/login user admin?)}
        #{(msg/map->LoginResults {:status 401})}))))
