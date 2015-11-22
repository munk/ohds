(ns ohds.service.location
  (:require [ohds.service.api-config :refer [apihost apiuser apipass]]
            [org.httpkit.client :as http]
            [clojure.data.json :as json])
  (:import (java.time LocalDateTime))
  (:gen-class))

(def location-url
  (str apihost "/locations"))

(defn now []
  (str (LocalDateTime/now) "Z"))

(defn create-location
  [collected-by parent loc]
  (let [req {:collectedByUuid collected-by
             :locationHierarchyUuid parent
             :location (assoc loc "collectionDateTime" (now))}]
    (-> @(http/post location-url {:basic-auth [apiuser apipass]
                                  :body (json/write-str req)
                                  :headers {"Content-Type" "application/json"}})
        (:body)
        (json/read-str :key-fn keyword)
        (:uuid))))
