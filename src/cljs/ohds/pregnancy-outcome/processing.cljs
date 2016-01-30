(ns ohds.pregnancy-outcome.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [assoc-state state!]]
   [ohds.pregnancy-outcome.backend :as backend]
   [ohds.pregnancy-outcome.messages :as m]))


(extend-protocol Message

  m/OutcomeDate
  (process-message [msg app]
    (state! msg app))

  m/Mother
  (process-message [msg app]
    (state! msg app))

  m/Father
  (process-message [msg app]
    (state! msg app))

  m/Outcome
  (process-message [msg app]
    (state! msg app))

  m/Response
  (process-message [msg app]
    app))


(extend-protocol EventSource

  m/Submit
  (watch-channels [msg app]))
