(ns ohds.pregnancy-observation.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [assoc-state]]
   [ohds.pregnancy-observation.messages :as m]
   [ohds.pregnancy-observation.backend :as backend]))

(defn state! [msg app]
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
    (println "Pregnancy Results" msg)
    (assoc app :pregnancy-observation-result (:body msg))))

(extend-protocol EventSource
  m/Submit
  (watch-channels [msg app]
    (println msg)
    (let [mother (:mother msg)
          {fieldworker :fieldworker-id
           visit :visit
           {:keys [pregnancy-date delivery-date]} :pregnancy-observation} app
          date-append "T00:00:00.000Z"]

      #{(backend/submit fieldworker mother visit
                        (str pregnancy-date date-append)
                        (str  delivery-date date-append))})))
