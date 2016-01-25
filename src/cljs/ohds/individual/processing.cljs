(ns ohds.individual.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.individual.backend :as backend]
   [ohds.individual.messages :as m]
   [ohds.processing :refer [assoc-state assoc-response]]))


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
          status (:status response)
          individual (assoc (:individual app) :uuid uuid)
          individuals (:individuals app)
          individuals' (conj individuals individual)
          more? (:more-residents app)]
      (backend/create-residency  (:fieldworker-id app) uuid (:location app))
      (backend/create-membership (:fieldworker-id app) uuid (:socialgroup app))
      (if more?
        (assoc-response 200 uuid #(assoc app :page :individual :individual {}
                                         :individuals individuals'
                                         :more-residents false) nil)
        (assoc-response 200 uuid #(assoc app :page :relationships :individual {}
                                         :individuals individuals') nil))))

  m/CreateResidencyResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          residencies (get app :residencies [])]
      (println "Residency Results" response)
      (assoc-response status body
                      #(assoc app :residencies (conj residencies {:uuid body}))
                      #(assoc app :errors "Unable to submit residency"))))
  m/CreateMembershipResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          memberships (get app :memberships [])]
      (println "Membership Results" response)
      (assoc-response status body
                      #(assoc app :memberships (conj memberships {:uuid body}))
                      #(assoc app :errors "Unable to submit residency")))))

(extend-protocol EventSource
  m/CreateIndividual
  (watch-channels [_ app]
    (let [{fieldworker-id :fieldworker-id
           location :location
           individual :individual} app
          first-name (:firstname individual)
          extId (:extId individual)
          gender (:gender individual)]
      (aset (.getElementById js/document "firstname") "value" "")
      (aset (.getElementById js/document "extId") "value" "")
      (aset (.getElementById js/document "more-residents") "checked" false)
      (aset (aget (.getElementsByTagName (.getElementById js/document "gender" ) "option") 0) "selected" true)
      #{(backend/create-individual fieldworker-id first-name extId gender)})))
