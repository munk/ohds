(ns ohds.processing
  (:require
   [clojure.walk :as w]
   [petrol.core :refer [Message EventSource]]
   [cognitect.transit :as t]
   [ohds.backend :as backend]
   [ohds.messages :as m]))

(def json-reader (t/reader :json))

(defn assoc-state [response app app-key]
  (let [state (app-key app)]
    (->>
     (merge state response)
     (assoc app app-key))))

(defn process-ok [body keys]
  (->> body
       (t/read json-reader)
       (map #(select-keys % keys))
       (map w/keywordize-keys)))

;;; High level events
(extend-protocol Message
  m/LoginResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app
                   :fieldworker-id body
                   :page :hierarchy
                   :mode :fieldworker-logged-in
                   :errors "")
        (assoc app :errors "Bad username or password"))))
  m/LocationHierarchyResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (case status
        200 (assoc app :location-hierarchies (process-ok body ["uuid" "name" "parent" "level"])))))
  m/HierarchyLevelResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          result (process-ok body  ["keyIdentifier" "uuid" "name"])]
      (case status
        200 (assoc app
                   :hierarchy-level-count (dec (count result))
                   :hierarchy-levels result)))))

(extend-protocol EventSource
  m/LocationHierarchyResults
  (watch-channels [_ _]
      #{(backend/locations)}))

(extend-protocol EventSource
  m/LoginResults
  (watch-channels [_ _]
    #{(backend/hierarchy-levels)
      (backend/location-hierarchies)}))
