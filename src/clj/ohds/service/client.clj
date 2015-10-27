(ns ohds.service.client
  (:require [org.httpkit.client :as http]
            [clojure.data.json :as json]
            [crypto.password.bcrypt :as password]))

(defn- get-fieldworkers
  []
  (json/read-str
   (:body @(http/get
            "http://localhost:8080/fieldWorkers/bulk.json"
            {:basic-auth ["user" "password"]}))
   :key-fn keyword))

(defn- find-fieldworker
  [username fieldworkers]
  (println fieldworkers)
  (first (filter #(= (:fieldWorkerId %) username) fieldworkers)))

(defn login [username password]
  (let [fieldworker (find-fieldworker username (get-fieldworkers))
        expected-username (:fieldWorkerId fieldworker)
        expected-password (:passwordHash fieldworker)]
    (and
     (not (nil? expected-username))
     (= username expected-username)
     (password/check password expected-password))))
