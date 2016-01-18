(ns ohds.in-migration.processing
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.in-migration.backend :as backend]
    [ohds.in-migration.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
