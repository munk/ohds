(ns ohds.socialgroup.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.socialgroup.messages :as m]
   [ohds.processing :refer [assoc-state]]))

(extend-protocol Message
  m/ChangeExtId
  (process-message [response app]
    (assoc-state response app :socialgroup)))
