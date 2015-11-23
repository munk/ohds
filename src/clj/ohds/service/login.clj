(ns ohds.service.login
  (:require
   [crypto.password.bcrypt :as password]
   [ohds.service.service :refer [get]]))

(def fieldworkers-bulk-url
  "/fieldWorkers/bulk.json")

(defn find-fieldworker
  [username fieldworkers]
  (->> fieldworkers
       (filter #(= (:fieldWorkerId %) username))
       (first)))

(defn login [username password]
  (let [fieldworker (find-fieldworker username (get fieldworkers-bulk-url))
        expected-username (:fieldWorkerId fieldworker)
        expected-password (:passwordHash fieldworker)]
    (if (and
          (not (nil? expected-username))
          (= username expected-username)
          (password/check password expected-password))
      (:uuid fieldworker)
      nil)))
