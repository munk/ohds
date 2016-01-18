(ns ohds.death.processing
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.death.backend :as backend]
    [ohds.death.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
