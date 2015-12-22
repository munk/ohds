(ns ohds.processing
  (:require
   [clojure.walk :as w]
   [petrol.core :refer [Message EventSource]]
   [cognitect.transit :as t]
   [ohds.backend :as backend]
   [ohds.messages :as m]))

(def json-reader (t/reader :json))

;;; UI Events

(extend-protocol Message
  m/ChangeUsername
  (process-message [response app]
    (let [user (:user app)
          username (:username response)
          user' (assoc user :username username)]
      (assoc app :user user'))))

(extend-protocol Message
  m/ChangePassword
  (process-message [response app]
    (let [user (:user app)
          password (:password response)
          user' (assoc user :password password)]
      (assoc app :user user'))))

(extend-protocol Message
  m/ChangeLocationName
  (process-message [response app]
    (let [loc (:location app)          
          loc' (assoc loc :name (:name response))]
      (assoc app :location loc'))))

(extend-protocol Message
  m/ChangeLocationExtId
  (process-message [response app]
    (let [loc (:location app)
          loc' (assoc loc :extId (:extId response))]
      (assoc app :location loc'))))

(extend-protocol Message
  m/ChangeLocationType
  (process-message [response app]
    (let [loc (:location app)
          loc' (assoc loc :type (:type response))]
      (println loc')
      (assoc app :location loc'))))

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
                   :location-hierarchies
                   (->> body
                        (t/read json-reader)
                        (map #(select-keys % ["uuid" "name"]))
                        (map w/keywordize-keys))                   
                   :errors "Got hierarchies")))))

(extend-protocol EventSource
  m/ChangeLocationHierarchy
  (watch-channels [response app]
    (let [{uuid :hierarchy} response]
      #{(backend/locations uuid)})))

(extend-protocol Message
  m/ChangeLocationHierarchy
  (process-message [response app]
    (let [uuid (:hierarchy response)]
      (assoc app :location-hierarchy uuid))))

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

