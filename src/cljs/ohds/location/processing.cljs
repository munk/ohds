(ns ohds.location.processing
  (:require
    [clojure.walk :as w]
    [cognitect.transit :as t]
    [petrol.core :refer [Message EventSource]]
    [ohds.location.messages :as m]
    [ohds.location.backend :as backend]
    [ohds.backend :as ohds-backend]
    [ohds.processing :refer [assoc-state assoc-response process-ok]]))

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
    (if (= (:type response) "-----")
      (assoc-state {:type nil} app :location)
      (assoc-state response app :location)))

  m/LocationResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (assoc-response
       status body
       #(assoc app :locations (process-ok body ["uuid" "name" "extId" "type"]))
       #(assoc app :errors (str "Failed to get locations!" status)))))

  m/ChangeLocation
  (process-message [response app]
    (let [uuid (:location response)
          loc (first (filter #(= (:uuid %) uuid) (:locations app)))]
      (if (nil? loc) ;;;TODO: set uuid on location object when changes
        (assoc app :location {:uuid nil :name nil :extId nil :type nil})
        (assoc app :location loc))))
  m/CreateLocationResults
  (process-message [response app]
    (let [uuid (:body response)
          location (assoc (:location app) :uuid uuid)]
      (assoc app :page :socialgroup :location location)))
  m/UpdateLocationResults
  (process-message [response app]
    (assoc app :page :socialgroup)))


(extend-protocol EventSource
  m/LocationHierarchyResults
  (watch-channels [_ _]
    #{(ohds-backend/locations)})
  m/ChangeLocationHierarchy
  (watch-channels [response app]
    (let [{uuid :hierarchy} response]
      #{(ohds-backend/locations uuid)}))
  m/SubmitLocation
  (watch-channels [response app]
    (let [{:keys [name extId type]} (:location app)
          fieldworker-id (:fieldworker-id app)
          parent (last (:hierarchies app))]
      #{(backend/create-location fieldworker-id parent name extId type)})))
