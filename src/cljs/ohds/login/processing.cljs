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
    {:pre [(map? response)]
     :post [(= (:username response)
               (:username (:user app)))]}
    (assoc-state response app :user))

  m/ChangePassword
  (process-message [response app]
    (assoc-state response app :user))

  m/ToggleAdmin
  (process-message [response app]
    (assoc app :admin-login (not (:admin-login app)))))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user] :as app}]
    (let [admin? (:admin-login app)
          user-ct (count (:username user))
          pass-ct (count (:password user))]
      (if (and (> user-ct 0)
               (> pass-ct 0))
        #{(backend/login user admin?)}
        #{(msg/map->LoginResults {:status 401})}))))
