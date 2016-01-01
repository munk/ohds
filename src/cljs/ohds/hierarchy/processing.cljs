(ns ohds.hierarchy.processing
  (:require
   [cognitect.transit :as t]
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [process-ok]]
   [ohds.hierarchy.messages :as m]
   [ohds.hierarchy.backend :as backend]))

(def json-reader (t/reader :json))

(extend-protocol Message
  m/ChangeLevelSelect
  (process-message
      [message app]
    (let [num (:num message)
          id (:id message)
          val (:val message)
          h (assoc (:hierarchies app) num val)]
      (println h)
      (assoc app :hierarchies h))))

(extend-protocol EventSource
  m/ChangeLevel
  (watch-channels [response app]
    #{(backend/children response)}))
