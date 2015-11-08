(ns ohds.service.location-hierarchy
  (:require [ohds.service.api-config :refer [apihost apiuser apipass]]
            [org.httpkit.client :as http]
            [clojure.data.json :as json]))

(def location-hierarchies-bulk-url
  (str apihost "/locationHierarchies/bulk.json"))

(defn get-all-location-hierarchies []
  (-> @(http/get location-hierarchies-bulk-url {:basic-auth [apiuser apipass]})
      (:body)
      (json/read-str :key-fn keyword)))
