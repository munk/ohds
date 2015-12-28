(ns ohds.individual.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.individual.messages :as m]
   [ohds.processing :refer [assoc-state]]))

(extend-protocol Message
  m/ChangeFirstName
  (process-message [response app]
    (assoc-state response app :individual))

  m/ChangeDob
  (process-message [response app]
    (assoc-state response app :individual)))
