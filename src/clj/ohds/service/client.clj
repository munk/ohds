(ns ohds.service.client
  (:require [org.httpkit.client :as http]
            [clojure.data.json :as json]))

(defn login [username password]
  (let [users (json/read-str
               (:body @(http/get "http://localhost:8080/fieldWorkers/bulk.json"
                                 {:basic-auth ["user" "password"]}))
               :key-fn keyword)
        user (first (filter #(= (:fieldWorkerId %) username) users))
        exu (:fieldWorkerId user)
        exp "password"]
    (println "exu" exu user users)
    (and
     (not (nil? exu))
     (= username exu)
     (= password exp))))
