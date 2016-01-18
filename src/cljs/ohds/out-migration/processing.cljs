(ns ohds.out-migration.processing
  (:require
    [petrol.core :refer [Message EventSource]]
    [ohds.out-migration.backend :as backend]
    [ohds.out-migration.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
