(ns ohds.location-select.processing
  (:require
   [ohds.location-select.messages :as m]
   [ohds.location-select.backend :as backend]
   [ohds.processing :refer [process-ok]]
   [cognitect.transit :as t]
   [clojure.walk :as w]
   [cljs.reader :refer [read-string]]
   [petrol.core :refer [Message EventSource]]))

(def json-reader (t/reader :json))

(extend-protocol Message
  m/ChangeLocation
  (process-message
      [msg app]
    (let [locs (:locations app)
          uuid (:loc msg)
          loc (first (filter #(= uuid (:uuid %)) locs))]
      (assoc app :current-location loc)))
  m/StartLocationVisit
  (process-message
      [msg app]
    (assoc app :page :individual-update))
  m/RecordVisit
  (process-message
    [msg app]
    (let [{status :status
           body :body} msg]
      (assoc app :vist body)))
  m/IndividualsByLocationResults
  (process-message
      [msg app]
    (let [{status :status
           body :body} msg
          b (read-string body)]
      (case status
        200 (assoc app :individuals b)
        (assoc app :error "Unable to get individuals for location")))))

(extend-protocol EventSource
  m/StartLocationVisit
  (watch-channels
      [msg app]
    (let [uuid (:hierarchy app)
          loc (:uuid (:current-location app))]
      #{(backend/individuals-by-location loc)
        (backend/start-visit
         (:fieldworker-id app)
         loc
         (str loc "-visit"))})))
