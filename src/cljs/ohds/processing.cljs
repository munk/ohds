(ns ohds.processing
  (:require
   [clojure.walk :as w]
   [petrol.core :refer [Message EventSource]]
   [cognitect.transit :as t]
   [ohds.backend :as backend]
   [ohds.messages :as m]))

(def json-reader (t/reader :json))

;;; UI Events

(defn process-message' [response app app-key]
  (let [state (app-key app)]
    (->>
     (merge state response)
     (assoc app app-key))))

(defn process-ok [body keys]
  (->> body
       (t/read json-reader)
       (map #(select-keys % keys))
       (map w/keywordize-keys)))

(extend-protocol Message
  m/ChangeUsername
  (process-message [response app]
    (process-message' response app :user)))

(extend-protocol Message
  m/ChangePassword
  (process-message [response app]
    (process-message' response app :user)))

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

;;; High level events
(extend-protocol Message
  m/FieldworkerLogin
  (process-message [response app]
    app))

(extend-protocol EventSource
  m/FieldworkerLogin
  (watch-channels [_ {:keys [user] :as app}]
    #{(backend/login user)}))

(extend-protocol Message
  m/LoginResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app
                   :fieldworker-id body
                   :page :loc-hiera
                   :errors "Login successful" )
        (assoc app :errors "Bad username or password")))))

(extend-protocol EventSource
  m/LoginResults
  (watch-channels [_ app]
    #{(backend/location-hierarchies)}))

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

