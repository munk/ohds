(ns ohds.pregnancy-result.processing
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.pregnancy-result.backend :as backend]
    [ohds.pregnancy-result.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
