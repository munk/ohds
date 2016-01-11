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

  m/MoreResidents
  (process-message [response app]
    (let [more-residents (not (:more-residents app))]
      (assoc app :more-residents more-residents)))

  m/CreateIndividualResults
  (process-message [response app]
    (let [uuid (:body response)
          individual (assoc (:individual app) :uuid uuid)
          individuals (:individuals app)
          individuals' (conj individuals individual)
          more? (:more-residents app)]
      (backend/create-residency  (:fieldworker-id app) uuid (:location app))
      (backend/create-membership (:fieldworker-id app) uuid (:socialgroup app))
      (if more?
        (assoc app :page :individual :individual individual :individuals individuals')
        (assoc app :page :relationships :individual individual :individuals individuals')))))

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
