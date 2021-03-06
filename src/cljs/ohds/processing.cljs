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
    (dissoc
     (assoc app app-key (merge state response))
     :errors)))

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

(defn state! [msg app key]
  (assoc-state msg app key))

;;; High level events
(extend-protocol Message
  m/AdminLoginResults
  (process-message [response app]
    (println "Admin Login Results" app)
    (let [{status :status
           body :body} response]
      (assoc-response status body
       #(assoc app :admin-id body :page :admin-home)
       #(assoc app :errors "Bad username or password"))))

  m/LocationHierarchyResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          hierarchies (process-ok body ["uuid" "name" "parent" "level"])
          hierarchies' (filterv #(not= (:uuid (:level %)) "UNKNOWN") hierarchies)]
      (println "Location Hierarchy Results p" response)
      (assoc-response status body
       #(assoc app :location-hierarchies hierarchies')
       #(assoc app :errors "Unable to retrieve location hierarchies"))))

  m/HierarchyLevelResults
  (process-message [response app]
    (let [{status :status
           body :body} response
          result (filterv #(not= (:uuid %) "UNKNOWN")
                          (process-ok body  ["keyIdentifier" "uuid" "name"]))
          hierarchies (into ["HIERARCHY_ROOT"] (mapv #(str) (range (count result))))]
      (println "Location Hierarchy Level Results p" response)
      (assoc-response status body
       #(assoc app :hierarchy-levels result :hierarchies hierarchies)
       #(assoc app :errors "Unable to retrieve location levels"))))

  m/Logout
  (process-message [response app]
    {:page :login :debug (:debug app)})

  m/FieldworkerHome
  (process-message [response app]
    (assoc app :page :hierarchy))

  m/AdminHome
  (process-message [_ app]
    (assoc app :page :admin-home))

  m/ToggleDebug
  (process-message [response app]
    (assoc app :debug (not (:debug app)))))
