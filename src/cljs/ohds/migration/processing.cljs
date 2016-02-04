(ns ohds.migration.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.migration.backend :as backend]
   [ohds.migration.messages :as m]))


(extend-protocol Message
  m/ImplementMe
  (process-message [response app]
    app))
