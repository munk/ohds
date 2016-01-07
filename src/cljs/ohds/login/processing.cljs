(ns ohds.login.processing
  (:require-macros [ohds.macros :refer [state-message]])
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.login.backend :as backend]
   [ohds.login.messages :as m]
   [ohds.processing :refer [assoc-state]]))

;(state-message m/ChangeUsername :user)

(extend-protocol Message
  m/ChangeUsername
  (process-message
      [response app]
    (assoc-state response app :user))

  m/ChangePassword
  (process-message [response app]
    (assoc-state response app :user))

  m/LoginResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app
                   :fieldworker-id body
                   :page :hierarchy
                   :mode :fieldworker-logged-in
                   :errors "")
        (assoc app :errors "Bad username or password")))))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user] :as app}]
    (let [user-ct (count (:username user))
          pass-ct (count (:password user))]
      (if (and (> user-ct 0)
               (> pass-ct 0))
        #{(backend/login user)}
        #{(m/map->LoginResults {:status 401})}))))
