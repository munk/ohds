(ns ohds.socialgroup.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.socialgroup.backend :as backend]
   [ohds.socialgroup.messages :as m]
   [ohds.processing :refer [assoc-state]]))

(extend-protocol Message
  m/ChangeExtId
  (process-message [response app]
    (assoc-state response app :socialgroup))
  m/ChangeGroupName
  (process-message [response app]
    (assoc-state response app :socialgroup))
  m/ChangeGroupType
  (process-message [response app]
    (assoc-state response app :socialgroup))
  m/CreateSocialGroupResults
  (process-message [response app]
    (let [uuid (:body response)
          socialgroup (assoc (:socialgroup app) :uuid uuid)]
      (assoc app :page :individual :socialgroup socialgroup))))

(extend-protocol EventSource
  m/SubmitSocialGroup
  (watch-channels [_ app]
    (println "Submit SocialGroup")
    (let [sg (:socialgroup app)
          fw (:fieldworker-id app)]
      #{(backend/create-socialgroup fw sg)})))
