(ns ohds.location.processing
  (:require
    [clojure.walk :as w]
    [cognitect.transit :as t]
    [petrol.core :refer [Message EventSource]]
    [ohds.location.messages :as m]
    [ohds.location.backend :as backend]
    [ohds.processing :refer [process-message' process-ok]]))

(def json-reader (t/reader :json))


(extend-protocol Message
  m/ChangeLocationName
  (process-message [response app]
    (process-message' response app :location)))

(extend-protocol Message
  m/ChangeLocationExtId
  (process-message [response app]
    (process-message' response app :extId)))

(extend-protocol Message
  m/ChangeLocationType
  (process-message [response app]
    (process-message' response app :location)))

(extend-protocol Message
  m/ChangeLocationHierarchy
  (process-message [response app]
    (let [uuid (:hierarchy response)]
      (assoc app :location-hierarchy uuid))))

(extend-protocol EventSource
  m/LocationHierarchyResults
    (watch-channels [_ _]
      #{(backend/locations)}))

(extend-protocol Message
  m/LocationHierarchyResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app
                   :location-hierarchies (process-ok body ["uuid" "name"]))))))

(extend-protocol EventSource
  m/ChangeLocationHierarchy
  (watch-channels [response app]
    (let [{uuid :hierarchy} response]
      #{(backend/locations uuid)})))

(extend-protocol Message
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
        (assoc app :errors (str "Failed to get locations!" status))))))

(extend-protocol Message
  m/ChangeLocation
  (process-message [response app]
    (let [uuid (:location response)
          loc (first (filter #(= (:uuid %) uuid) (:locations app)))]
      (if (nil? loc)
        (assoc app :location {:uuid nil :name nil :extId nil :type nil})
        (assoc app :location loc)))))
