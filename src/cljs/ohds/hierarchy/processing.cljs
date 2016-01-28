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
          h (assoc (:hierarchies app) num id)]
      (assoc app :hierarchies h)))
  m/StartCensus
  (process-message
      [message app]
    (let [selected-level-count (dec (count (:hierarchies app)))
          expected-level-count (count (:hierarchy-levels app))]
      (if (= selected-level-count
             expected-level-count)
        (assoc app :page :locations)
        (assoc app :errors "Please select all hierarchies"))))
  m/StartVisit
  (process-message
      [message app]
    (assoc app :hierarchy (hierarchy app) :page :location-select))
  m/LocationsForHierarchyResults
  (process-message
      [message app]
    (let [{status :status
           body :body} message
          body' (process-ok body ["uuid" "name" "type" "description"])]
      (case status
        200 (assoc app :locations body' :current-location (first body'))
        (assoc app :errors "Unable to get locations!")))))


(extend-protocol EventSource
  m/StartVisit
  (watch-channels [msg app]
    #{(backend/locations-for-hierarchy (:hierarchy app))}))
