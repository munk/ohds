(ns ohds.service.service
  (:require
   [ohds.service.api-config :refer [apihost apiuser apipass]]
   [org.httpkit.client :as http]
   [clojure.data.json :as json]))

(defn post [url req]
  (-> @(http/post (str apihost url) {:basic-auth [apiuser apipass]
                          :body (json/write-str req)
                          :headers {"Content-Type" "application/json"}})
      (:body)
      (json/read-str :key-fn keyword)
      (:uuid)))

(defn get [url]
  (-> @(http/get url {:basic-auth [apiuser apipass]})
      (:body)
      (json/read-str :key-fn keyword)))
