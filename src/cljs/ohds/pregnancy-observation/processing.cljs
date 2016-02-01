(ns ohds.pregnancy-observation.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [assoc-state state!]]
   [ohds.pregnancy-observation.messages :as m]
   [ohds.pregnancy-observation.backend :as backend]))


(def state-key :pregnancy-observation)

(extend-protocol Message
  m/ChangePregnancyDate
  (process-message [msg app]
    (state! msg app state-key))
  m/ChangeExpectedDeliveryDate
  (process-message [msg app]
    (state! msg app state-key))
  m/Results
  (process-message [msg app]
    (assoc app :pregnancy-observation-result (:body msg))))

(extend-protocol EventSource
  m/Submit
  (watch-channels [msg app]
    (let [mother (:mother msg)
          {fieldworker :fieldworker-id
           visit :visit
           {:keys [pregnancy-date delivery-date]} :pregnancy-observation} app
          date-append "T00:00:00.000Z"]

      #{(backend/submit fieldworker mother visit
                        (str pregnancy-date date-append)
                        (str  delivery-date date-append))})))
