(ns ohds.individual-update.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.individual-update.messages :as m]
   [ohds.processing :refer [assoc-state]]))

(extend-protocol Message
  m/IndividualUpdate
  (process-message [response app]
    (let [ind-state (:individual-state app)
          ind-state' (assoc ind-state (:uuid response) (:value response))]
      (println ind-state')
      (assoc app :individual-state ind-state')))
  m/ProcessObservation
  (process-message [response app]
    (println "processing observation")
    app))
