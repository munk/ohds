(ns ohds.socialgroup.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.socialgroup.backend :as backend]
   [ohds.socialgroup.messages :as m]
   [ohds.processing :refer [assoc-state assoc-response]]))

(extend-protocol Message
  m/ChangeExtId
  (process-message [response app]
    (assoc-state response app :socialgroup))
  m/ChangeGroupName
  (process-message [response app]
    (assoc-state response app :socialgroup))
  m/ChangeGroupType
  (process-message [response app]
    (if (= (:type response) "-----")
      (assoc-state {:type nil} app :individual)
      (assoc-state response app :individual)))


  m/CreateSocialGroupResults
  (process-message [response app]
    (let [uuid (:body response)
          status (:status response)
          socialgroup (assoc (:socialgroup app) :uuid uuid)]
      (assoc-response status uuid
                      #(assoc app :page :individual :socialgroup socialgroup)
                      #(assoc app :errors "Unable to retrieve social group")))))


(extend-protocol EventSource
  m/SubmitSocialGroup
  (watch-channels [_ app]
    (let [sg (:socialgroup app)
          fw (:fieldworker-id app)]
      #{(backend/create-socialgroup fw sg)})))
