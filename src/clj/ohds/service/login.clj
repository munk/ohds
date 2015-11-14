(ns ohds.service.login
  (:require [org.httpkit.client :as http]
            [clojure.data.json :as json]
            [crypto.password.bcrypt :as password]
            [ohds.service.api-config :refer [apihost apiuser apipass]]))

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
