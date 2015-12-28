(ns ohds.location.processing
  (:require
    [clojure.walk :as w]
    [cognitect.transit :as t]
    [petrol.core :refer [Message EventSource]]
    [ohds.location.messages :as m]
    [ohds.location.backend :as backend]
    [ohds.processing :refer [assoc-state process-ok]]))

(def json-reader (t/reader :json))

(extend-protocol Message
  m/ChangeLocationName
  (process-message [response app]
    (assoc-state response app :location))
  m/ChangeLocationExtId
  (process-message [response app]
    (assoc-state response app :location))
  m/ChangeLocationType
  (process-message [response app]
    (assoc-state response app :location))
  m/ChangeLocationHierarchy
  (process-message [response app]
    (assoc app :location-hierarchy (:hierarchy response)))
  m/LocationHierarchyResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
        (case status
              200 (assoc app :location-hierarchies (process-ok body ["uuid" "name"])))))
  m/LocationResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app :locations
                   (->> body
                        (t/read json-reader)
                        (map #(select-keys
                               %
                               ["uuid" "name" "extId" "type"]))
                        (map w/keywordize-keys)))
        (assoc app :errors (str "Failed to get locations!" status)))))
  m/ChangeLocation
  (process-message [response app]
    (let [uuid (:location response)
          loc (first (filter #(= (:uuid %) uuid) (:locations app)))]
      (prn loc)
      (if (nil? loc) ;;;TODO: set uuid on location object when changes
        (assoc app :location {:uuid nil :name nil :extId nil :type nil})
        (assoc app :location loc))))
  m/CreateLocationResults
  (process-message [response app]
    (let [uuid (:uuid response)
          location (assoc (:location app) :uuid uuid)]
       (assoc app :page :individual :location location))))


(extend-protocol EventSource
  m/LocationHierarchyResults
  (watch-channels [_ _]
    #{(backend/locations)})
  m/ChangeLocationHierarchy
  (watch-channels [response app]
    (let [{uuid :hierarchy} response]
      #{(backend/locations uuid)}))
  m/SubmitLocation
  (watch-channels [response app]
    (let [location (:location app)
          name (:name location)
          extId (:extId location)
          type (:type location)
          fieldworker-id (:fieldworker-id app)
          parent (:hierarchy app)]
      (if (nil? (:uuid app))
        #{(backend/create-location fieldworker-id parent name extId type)}
        #{(backend/update-location {} {})}))))
