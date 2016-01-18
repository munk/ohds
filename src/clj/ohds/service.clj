(ns ohds.service
  (:refer-clojure :exclude [get])
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
(def locations-by-hierarchy "/locations/bylocationhierarchy/bulk.json?locationHierarchyUuid=")
(def residencies-by-hierarchy "/residencies/bylocationhierarchy/bulk.json?locationHierarchyUuid=")
(def individuals-by-hierarchy "/individuals/bylocationhierarchy/bulk.json?locationHierarchyUuid=")
(def individual-url "/individuals")
(def socialgroup-url "/socialGroups")
(def relationship-url "/relationships")
(def residency-url "/residencies")
(def membership-url "/memberships")
(def visit-url "/visits")
(def location-hierarchy-levels-bulk-url "/locationHierarchyLevels/bulk.json")


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

(defn login [username password]
  {:pre [(some? username) (some? password)]}
  (let [result  (->> fieldworkers-bulk-url
                     (get)
                     (filter #(= (:fieldWorkerId %) username))
                     (first))
        {expected-username :fieldWorkerId expected-password :passwordHash uuid :uuid} result]
    (when (and
           (not (nil? result))
           (bcrypt/check password expected-password)
           (= username expected-username))
      uuid)))

(defn admin-login [username password]
  {:pre [(some? username) (some? password)]}
  (let [result  (->> users-bulk-url
                     (get)
                     (filter #(= (:username %) username))
                     (first))
        {expected-username :username expected-password :passwordHash uuid :uuid} result]
    (when (and
           (not (nil? result))
           (bcrypt/check password expected-password)
           (= username expected-username))
      uuid)))

;;; Location
(defn location-hierarchy-levels []
  (get location-hierarchy-levels-bulk-url))

(defn location-hierarchies []
  (get location-hierarchies-bulk-url))

(defn locations [hierarchy-uuid]
  (get (str locations-by-hierarchy hierarchy-uuid)))

(defn individuals-by-location [uuid]
  (let [hid (get (str location-url "/" uuid))
        hiera-id (:uuid (:locationHierarchy hid))
        individuals-by-hiera (get (str individuals-by-hierarchy hiera-id))
        residencies-by-hiera (get (str residencies-by-hierarchy hiera-id))
        residencies-by-location (filterv #(= (:uuid (:location %)) uuid) residencies-by-hiera)
        skeys (mapv #(select-keys % [:individual]) residencies-by-location)
        individual-uuids (set (map #(:uuid (:individual %)) skeys))
        individuals-by-loc (filterv #(contains? individual-uuids (:uuid %)) individuals-by-hiera)]
    individuals-by-loc))

(defn create-location
  [collected-by parent loc]
  (post
   location-url
   {:collectedByUuid collected-by,
    :locationHierarchyUuid parent,
    :location (assoc loc "collectionDateTime" (now))}))

;;; Individual
(defn create-individual ;;;TODO: Allow additional fields
  [collected-by individual-id first-name gender]
  (post
   individual-url
   {:collectedByUuid collected-by,
    :individual
    {:extId individual-id,
     :firstName first-name,
     :gender gender,
     :collectionDateTime (now)}}))

;;; Social Group
(defn create-social-group
  [collected-by ext-id group-name group-type]
  (post
   socialgroup-url
   {:collectedByUuid collected-by,
    :socialGroup
    {:extId ext-id,
     :groupName group-name,
     :groupType group-type,
     :collectionDateTime (now)}}))

;;; Relationships
(defn create-relationship
  [collected-by a-uuid b-uuid relationship-type start-date]
  (post
   relationship-url
   {:collectedByUuid collected-by,
    :individualAUuid a-uuid,
    :individualBUuid b-uuid,
    :relationship
    {:relationshipType relationship-type,
     :startDate start-date,
     :collectionDateTime (now)}}))

(defn create-residency
  [collected-by individual-id location-id start-type start-date]
  (post
   residency-url
   {:collectedByUuid collected-by,
    :individualUuid individual-id,
    :locationUuid location-id,
    :residency
    {:startType start-type,
     :startDate start-date,
     :collectionDateTime (now)}}))

(defn create-membership
  [collected-by individual-id socialgroup-id start-type start-date]
  (post
   membership-url
   {:collectedByUuid collected-by,
    :individualUuid individual-id,
    :socialGroupUuid socialgroup-id,
    :membership
    {:startType start-type,
     :startDate start-date,
     :collectionDateTime (now)}}))


(defrecord Visit [extId collectionDateTime visitDate])
(defrecord VisitRequest [collectedByUuid locationUuid visit])
(defn start-visit [collected-by location ext-id]
  (post
   visit-url
   (->VisitRequest collected-by location
                   (->Visit ext-id (now) (now)))))
