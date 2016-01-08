(ns ohds.hierarchy.processing
  (:require
   [cognitect.transit :as t]
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [process-ok]]
   [ohds.hierarchy.messages :as m]
   [ohds.hierarchy.backend :as backend]))

(def json-reader (t/reader :json))

(defn hierarchy
  [state]
  (let [h (:hierarchies state)]
    (last (filter #(> (count %) 1) h))))

(extend-protocol Message
  m/ChangeLevelSelect
  (process-message
      [message app]
    (let [num (:num message)
          id (:id message)
          val (:val message)
          h (assoc (:hierarchies app) num val)]      
      (assoc app :hierarchies h)))
  m/StartCensus
  (process-message
      [message app]
    (let [selected-level-count (dec (count (filter #(< 0 (count %)) (:hierarchies app))))
          expected-level-count (:hierarchy-level-count app)]      
      (if (= selected-level-count
             expected-level-count)
        (assoc app :page :location :mode :census)
        (assoc app :errors "Please select all hierarchies"))))
  m/StartVisit
  (process-message
      [message app]
    (assoc app :location-hierarchy (hierarchy app) :page :location :mode :visit)))


