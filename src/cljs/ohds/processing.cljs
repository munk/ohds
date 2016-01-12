(ns ohds.processing
  (:require
   [clojure.walk :as w]
   [petrol.core :refer [Message EventSource]]
   [cognitect.transit :as t]
   [ohds.backend :as backend]
   [ohds.messages :as m]))

(def json-reader (t/reader :json))

(defn has-keys? [m ks]
  (let [mks (set (keys m))]
    (= (clojure.set/intersection mks ks) ks)))

(defn assoc-state [response app app-key]
  {:pre [(map? app)]
   :post [(has-keys? (app-key %) (set (keys response)))]}
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
                   :hierarchy-levels result))))
  m/Logout
  (process-message [response app]
    (assoc app :page :login :mode :not-authorized :user {:username "" :password ""}))
  m/FieldworkerHome
  (process-message [response app]
    (assoc app :page :hierarchy)))

#_(extend-protocol EventSource
  m/LocationHierarchyResults
  (watch-channels [_ _]
      #{(backend/locations)}))

(extend-protocol EventSource
  m/LoginResults
  (watch-channels [_ _]
    #{(backend/hierarchy-levels)
      (backend/location-hierarchies)}))
