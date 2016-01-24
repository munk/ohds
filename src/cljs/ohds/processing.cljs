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
    (assoc app app-key (merge state response))))

(defn process-ok [body keys]
  (->> body
       (t/read json-reader)
       (map #(select-keys % keys))
       (map w/keywordize-keys)))

(defn assoc-response [status body ok-f error-f]
  (assoc (case status
           200 (ok-f)
           (error-f))
         :last-response {:status status
                         :body body}))

;;; High level events
(extend-protocol Message
  m/LoginResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (assoc-response
       status body
       #(assoc app :fieldworker-id body :page :hierarchy :mode :fieldworker-logged-in :errors "")
       #(assoc app :errors "Bad username or password"))))
  m/LocationHierarchyResults
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (assoc-response
       status body
       #(assoc app :location-hierarchies (process-ok body ["uuid" "name" "parent" "level"]))
       #(assoc app :errors "Unable to retrieve location hierarchies"))))
  m/HierarchyLevelResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          result (process-ok body  ["keyIdentifier" "uuid" "name"])]
      (assoc-response
       status body
       #(assoc app
                :hierarchy-level-count (dec (count result))
                :hierarchy-levels result)
       #(assoc app :errors "Unable to retrieve location levels"))))

  m/Logout
  (process-message [response app]
    (assoc app :page :login :mode :not-authorized :user {:username "" :password ""}))

  m/FieldworkerHome
  (process-message [response app]
    (assoc app :page :hierarchy))

  m/ToggleDebug
  (process-message [response app]
    (assoc app :debug (not (:debug app)))))


(extend-protocol EventSource
  m/LoginResults
  (watch-channels [_ _]
    #{(backend/hierarchy-levels)
      (backend/location-hierarchies)}))
