(ns ohds.service
  (:require
   [crypto.password.bcrypt :as password]
   [clojure.edn :as edn]
   [org.httpkit.client :as http]
   [clojure.data.json :as json])
  (:import (java.time LocalDateTime)))
   
   
(def config (edn/read-string (slurp "/Users/jdowns/ohds/application.edn")))
(def apihost (:apihost config))
(def apiuser (:apiuser config))
(def apipass (:apipass config))

(def fieldworkers-bulk-url "/fieldWorkers/bulk.json")
(def location-hierarchies-bulk-url "/locationHierarchies/bulk.json")
(def location-url "/locations")
(def individual-url "/individuals")

(defn now []
  (str (LocalDateTime/now) "Z"))

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


;;; Login

(defn find-fieldworker
  [username fieldworkers]
  (->> fieldworkers
       (filter #(= (:fieldWorkerId %) username))
       (first)))

(defn login [username password]
  {:pre [(some? username) (some? password)]}
  (let [{expected-username :fieldWorkerId expected-password :passwordHash uuid :uuid} 
        (->> fieldworkers-bulk-url
             (get)
             (filter #(= (:fieldWorkerId %) username))
             (first))]
    (if (and
         (password/check password expected-password)
         (= username expected-username))
      uuid
      nil)))

;;; Location
(defn location-hierarchies []
  (get location-hierarchies-bulk-url))

(defn create-location
  [collected-by parent loc]
  (->> {:collectedByUuid collected-by
        :locationHierarchyUuid parent
        :location (assoc loc "collectionDateTime" (now))}
       (post location-url)))


;;; Individual
(defn create-individual ;;;TODO: Allow additional fields
  [collected-by individual-id first-name gender]
  (->> {:collectedByUuid collected-by
        :extId individual-id
        :firstName first-name
        :gender gender}
       (post individual-url)))
