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
(def individual-url "/individuals")
(def socialgroup-url "/socialGroups")
(def relationship-url "/relationships")
(def residency-url "/residencies")
(def membership-url "/memberships")
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
    (if (and
         (not (nil? result))
         (bcrypt/check password expected-password)
         (= username expected-username))
      uuid
      nil)))

(defn admin-login [username password]
  {:pre [(some? username) (some? password)]}
  (let [result  (->> users-bulk-url
                     (get)
                     (filter #(= (:username %) username))
                     (first))
        {expected-username :username expected-password :passwordHash uuid :uuid} result]
    (if (and
         (not (nil? result))
         (bcrypt/check password expected-password)
         (= username expected-username))
      uuid
      nil)))

;;; Location
(defn location-hierarchy-levels []
  (get location-hierarchy-levels-bulk-url))

(defn location-hierarchies []
  (get location-hierarchies-bulk-url))

(defn locations [hierarchy-uuid]
  (let [result (get (str locations-by-hierarchy hierarchy-uuid))]
    (println "getting locations for " hierarchy-uuid result)
    result))

(defn individuals-by-location [uuid]
  (let [hid @(http/get (str location-url "/" uuid))
        hiera-id 1 ;get this from the server
        individuals-by-hiera []         ;get individuals by hiera
        individuals-by-loc []           ; these are filtered
        ])
  "not implemented yet, sorry...")

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

;;; Relationships
(defn create-relationship
  [collected-by a-uuid b-uuid relationship-type start-date]  
  (->> {:collectedByUuid collected-by
        :individualAUuid a-uuid
        :individualBUuid b-uuid
        :relationship {:relationshipType relationship-type
                       :startDate start-date
                       :collectionDateTime (now)}}
       (post relationship-url)))

(defn create-residency
  [collected-by individual-id location-id start-type start-date]
  (->> {:collectedByUuid collected-by
        :individualUuid individual-id
        :locationUuid location-id
        :residency {:startType start-type
                    :startDate start-date
                    :collectionDateTime (now)}}
       (post residency-url)))

(defn create-membership 
  [collected-by individual-id socialgroup-id start-type start-date]
  (->> {:collectedByUuid collected-by
        :individualUuid individual-id
        :socialGroupUuid socialgroup-id
        :membership {:startType start-type
                     :startDate start-date
                     :collectionDateTime (now)}}
       (post membership-url)))
