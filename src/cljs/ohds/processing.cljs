(ns ohds.processing
  (:require
   [clojure.walk :as w]
   [petrol.core :refer [Message EventSource]]
   [cognitect.transit :as t]
   [ohds.location.backend :as backend]
   [ohds.messages :as m]
   [ohds.login.messages :as lm]
   [ohds.location.messages :as locm]))

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

(extend-protocol EventSource
  locm/LocationHierarchyResults
    (watch-channels [_ _]
      #{(backend/locations)}))

(extend-protocol EventSource
  lm/LoginResults
  (watch-channels [_ _]
    #{(backend/hierarchy-levels)
      (backend/location-hierarchies)}))
