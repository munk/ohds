(ns ohds.service.login
  (:require [org.httpkit.client :as http]
            [clojure.data.json :as json]
            [crypto.password.bcrypt :as password]
            [clojure.edn :as edn]))

(def config (edn/read-string (slurp "application.edn")))
(def apihost (:apihost config))
(def apiuser (:apiuser config))
(def apipass (:apipass config))

(def fieldworkers-bulk-url
  (str
   apihost
   "/fieldWorkers/bulk.json"))

(defn- get-fieldworkers
  []
  (-> @(http/get fieldworkers-bulk-url {:basic-auth [apiuser apipass]})
      (:body)
      (json/read-str :key-fn keyword)))

(defn- find-fieldworker
  [username fieldworkers]
  (->> fieldworkers
       (filter #(= (:fieldWorkerId %) username))
       (first)))

(defn login [username password]
  (let [fieldworker (find-fieldworker username (get-fieldworkers))
        expected-username (:fieldWorkerId fieldworker)
        expected-password (:passwordHash fieldworker)]
    (and
     (not (nil? expected-username))
     (= username expected-username)
     (password/check password expected-password))))
