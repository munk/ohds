(ns ohds.login.processing
  (:require-macros [ohds.macros :refer [state-message]])
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.login.backend :as backend]
    [ohds.login.messages :as m]
    [ohds.processing :refer [process-message']]))

;(state-message m/ChangeUsername :user)

(extend-protocol Message
  m/ChangeUsername
  (process-message [response app]
    (process-message' response app :user)))

(extend-protocol Message
  m/ChangePassword
  (process-message [response app]
    (process-message' response app :user)))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user] :as app}]
    #{(backend/login user)}))

(extend-protocol Message
  m/LoginResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app
                   :fieldworker-id body
                   :page :loc-hiera
                   :errors "Login successful")
        (assoc app :errors "Bad username or password")))))
