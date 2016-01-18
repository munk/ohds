(ns ohds.pregnancy-outcome.processing
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.pregnancy-outcome.backend :as backend]
    [ohds.pregnancy-outcome.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
