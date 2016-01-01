(ns ohds.individual.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.individual.backend :as backend]
   [ohds.individual.messages :as m]
   [ohds.processing :refer [assoc-state]]))

(extend-protocol Message
  m/ChangeFirstName
  (process-message [response app]
    (assoc-state response app :individual))

  m/ChangeExtId
  (process-message [response app]
    (assoc-state response app :individual))

  m/ChangeGender
  (process-message [response app]
    (assoc-state response app :individual))

  m/CreateIndividualResults
  (process-message [response app]
    (let [uuid (:body response)
          individual (assoc (:individual app) :uuid uuid)]
      (prn individual)
      (assoc app :page :individual :individual individual))))


(extend-protocol EventSource
  m/CreateIndividual
  (watch-channels [_ app]
    (let [{fieldworker-id :fieldworker-id
           location :location
           individual :individual} app
          first-name (:firstname individual)
          extId (:extId individual)
          gender (:gender individual)]
      #{(backend/create-individual fieldworker-id first-name extId gender)})))

