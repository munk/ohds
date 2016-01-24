(ns ohds.pregnancy-observation.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [assoc-state]]
   [ohds.pregnancy-observation.messages :as m]
   [ohds.pregnancy-observation.backend :as backend]))

(defn state! [msg app]
  (println msg)
  (assoc-state msg app :pregnancy-observation))

(extend-protocol Message
  m/ChangePregnancyDate
  (process-message [msg app]
    (state! msg app))
  m/ChangeExpectedDeliveryDate
  (process-message [msg app]
    (state! msg app))
  m/Results
  (process-message [msg app]
    (println "Results" msg)
    app))

(extend-protocol EventSource
  m/Submit
  (watch-channels [msg app]
    (let [individual (get app (:individual msg))
          fieldworker (:fieldworker-id app)
          {mother :mother
           pregnancy-date :pregnancy-date
           expected-due-date :expected-due-date} individual]
      #{(backend/submit fieldworker mother pregnancy-date expected-due-date)})))
