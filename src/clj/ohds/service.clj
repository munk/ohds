(ns ohds.service
  (:require
   [crypto.password.bcrypt :as bcrypt]
   [clojure.edn :as edn]
   [org.httpkit.client :as http]
   [clojure.data.json :as json])
  (:import (java.time LocalDateTime)))


(def config (edn/read-string (slurp "/workspace/src/openhds/ohds/application.edn")))
(def apihost (:apihost config))
(def apiuser (:apiuser config))
(def apipass (:apipass config))

(def fieldworkers-bulk-url "/fieldWorkers/bulk.json")
(def users-bulk-url "/users/bulk.json")
(def location-hierarchies-bulk-url "/locationHierarchies/bulk.json")
(def location-url "/locations")
(def locations-by-hierarchy "/locations/bylocationhierarchy/bulk?locationHierarchyUuid=")
(def individual-url "/individuals")
(def socialgroup-url "/socialGroups")

(defn now []
  (str (LocalDateTime/now) "Z"))

(defn json->cljs [data]
  (json/read-str data :key-fn keyword))

(defn post [url req]
  (->>
   {:basic-auth [apiuser apipass]
    :body (json/write-str req)
    :headers {"Content-Type" "application/json"}}
   (http/post (str apihost url))
   (deref)
   (:body)
   ((fn [res] (println "In post. Result:" res) res))
   (json->cljs)
   (:uuid)))

(defn get [url] ;;;TODO make this async
  (->>
   {:basic-auth [apiuser apipass]}
   (http/get (str apihost url))
   (deref)
   (:body)
   (json->cljs)))


;;; Login

(defn find-fieldworker
  [username fieldworkers]
  (->> fieldworkers
       (filter #(= (:fieldWorkerId %) username))
       (first)))

(defn login [username password]
  {:pre [(some? username) (some? password)]}
  (let [result  (->> fieldworkers-bulk-url
                     (get)
                     (filter #(= (:fieldWorkerId %) username))
                     (first))
        {expected-username :fieldWorkerId expected-password :passwordHash uuid :uuid} result]
    (if (and
         (not (nil? result))
         (bcrypt/check password expected-password)
         (= username expected-username))
      uuid
      nil)))

;;; Location
(defn location-hierarchies []
  (get location-hierarchies-bulk-url))

(defn locations [hierarchy-uuid]
  (get (str locations-by-hierarchy hierarchy-uuid)))

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
        :individual {:extId individual-id
                     :firstName first-name
                     :gender gender
                     :collectionDateTime (now)}}
       (post individual-url)))

;;; Social Group
(defn create-social-group
  [collected-by ext-id group-name group-type]
  (->> {:collectedByUuid collected-by
        :socialGroup {:extId ext-id
                      :groupName group-name
                      :groupType group-type
                      :collectionDateTime (now)}}
       (post socialgroup-url)))
