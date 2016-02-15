; HTTP Client for OpenHDS-REST

(ns ohds.client
  (:require [clojure.edn :as edn]
            [clojure.tools.logging :as log]
            [org.httpkit.client :as http]
            [clojure.data.json :as json]
            [schema.core :as s])
  (:import (java.time LocalDateTime)))


(defmacro def- [item value]
  `(def ^{:private true} ~item ~value))

;;; Get configuration data
(def- config (edn/read-string (slurp "application.edn")))
(def- apihost (:apihost config))
(def- apiuser (:apiuser config))
(def- apipass (:apipass config))
(def- auth {:basic-auth [apiuser apipass]})

(def- urls
  {:in-migrations "/inMigrations"
   :individuals "/individuals"
   :fieldworkers "/fieldworkers"
   :deaths "/deaths"
   :errorLogs "/errorLogs"
   :memberships "/memberships"
   :pregnancy-results "/pregnancyResults"
   :social-groups "/socialGroups"
   :events "/events"
   :relationships "/relationships"
   :location-hierarchies "/locationHierarchies"
   :out-migrations "/outMigrations"
   :pregnancy-outcomes "/pregnancyOutcomes"
   :location-hierarchy-levels "/locationHierarchyLevels"
   :locations "/locations"
   :residencies "/resdiencies"
   :visits "/visits"
   :users "/users"
   :pregnancy-observations "/pregnancyObservations"
   :project-codes "/projectCodes"})

(defn- now []
  (str (LocalDateTime/now) "Z"))

(defn- bulk [url]
  (str url "/bulk.json"))

(defn- json->clj [data]
  (json/read-str data :key-fn keyword))

(defn- get-entity [url]
  (-> (str apihost url) (http/get auth) deref :body json->clj))

(defn- create-entity [url entity]
  (let [body (json/write-str entity)
        params (assoc auth :body body :headers {"Content-Type" "application/json"})]
    (-> (str apihost url) (http/post params) deref :body json->clj)))

(defprotocol Create
  (create [entity] "Create an Entity with OpenHDS-Rest"))

(defmacro defendpoint [msg-type url-key schema]
  `(defrecord ~msg-type []
     Create
     (create [entity#]
       ;(println "S" ~schema "\nE" entity#)
       ;(Thread/sleep 200)
       (s/validate ~schema entity#)
       (create-entity (~url-key urls) entity#))))


(defn- query [url-key & [{:keys [id bulk?]}]]
  (let [base-url (url-key urls)
        url (cond
              id (str base-url "/" id)
              bulk? (str base-url "/bulk.json")
              :else base-url)]
    (log/debug "GET" url)
    (get-entity url)))


(defn- uuid-length []
  (s/pred (fn [uuid] (or
                      (= uuid "UNKNOWN")
                      (= 36 (count uuid))))))

(def- uuid-schema (s/both s/Str (uuid-length)))
(def- date-schema (s/both s/Str (s/pred #(re-matches #"\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ" %))))



(defendpoint Location :locations
  {:collectedByUuid uuid-schema
   :locationHierarchyUuid uuid-schema
   :location {:name s/Str
              :extId s/Str
              :type s/Str
              :collectionDateTime s/Str}})

(defendpoint LocationHierarchy :location-hierarchies
  {:collectedByUuid uuid-schema
   :parentUuid uuid-schema
   :levelUuid  uuid-schema
   :locationHierarchy {:extId s/Str
                       :name s/Str
                       :collectionDateTime date-schema}})

(defendpoint User :users
  {:user
   {:firstName s/Str
    :username s/Str}
   :password s/Str})

(defendpoint ProjectCode :project-codes
  {:projectCode {:codeName s/Str
                 :codeGroup s/Str
                 :codeValue s/Str}})

(defendpoint PregnancyObservation :pregnancy-observations
  {:collectedByUuid uuid-schema
   :motherUuid uuid-schema
   :visitUuid uuid-schema
   :pregnancyObservation {:pregnancyDate date-schema
                          :expectedDeliveryDate date-schema
                          :collectionDateTime date-schema}})

(defendpoint Visit :visits
  {:collectedByUuid uuid-schema
   :locationUuid uuid-schema
   :visit {:extId s/Str
           :visitDate date-schema
           :collectionDateTime date-schema}})

(defendpoint Residency :residencies
  {:collectedByUuid uuid-schema,
   :individualUuid uuid-schema,
   :locationUuid uuid-schema,
   :residency
   {:startType s/Str,
    :startDate date-schema,
    :collectionDateTime date-schema}})

(defendpoint LocationHierarchyLevel :location-hierarchy-levels
  {:locationHierarchyLevel
   {:keyIdentifier s/Int
    :name s/Str}})

(defendpoint PregnancyOutcome :pregnancy-outcomes
  {:collectedByUuid uuid-schema
   :motherUuid uuid-schema
   :fatherUuid (s/optional uuid-schema)
   :visitUuid uuid-schema
   :pregnancyOutcome {:outcomeDate date-schema
                      :outcomeType s/Str
                      :collectionDateTime date-schema}})

(defendpoint OutMigration :out-migrations
  {:collectedByUuid uuid-schema
   :visitUuid uuid-schema
   :individualUuid uuid-schema
   :residencyUuid uuid-schema
   :outMigration {:migrationDate date-schema
                  :migrationType s/Str
                  :collectionDateTime date-schema}})

(defendpoint InMigration :in-migrations
  {:collectedByUuid uuid-schema
   :visitUuid uuid-schema
   :individualUuid uuid-schema
   :residencyUuid uuid-schema
   :inMigration {:migrationDate date-schema
                 :migrationType s/Str
                 :collectionDateTime date-schema}})

(defendpoint Relationship :relationships
  {:collectedByUuid uuid-schema
   :individualAUuid uuid-schema
   :individualBUuid uuid-schema
   :relationship {:relationshipType s/Str
                  :startDate date-schema
                  :collectionDateTime date-schema}})

(defendpoint SocialGroup :social-groups
  {:collectedByUuid uuid-schema
   :socialGroup {:extId s/Str
                 :groupName s/Str
                 :groupType s/Str
                 :collectionDateTime date-schema}})

(defendpoint PregnancyResult :pregnancy-results
  {:collectedByUuid uuid-schema
   :pregnancyOutcomeUuid uuid-schema
   :pregnancyResult {:child {:uuid uuid-schema}
                     :type s/Str
                     :collectionDateTime date-schema}})

(defendpoint Membership :memberships
  {:collectedByUuid uuid-schema
   :individualUuid uuid-schema
   :socialGroupUuid uuid-schema
   :membership
   {:startType s/Str
    :startDate date-schema
    :collectionDateTime date-schema}})


(defendpoint Death :deaths
  {:collectedByUuid uuid-schema
   :visitUuid uuid-schema
   :individualUuid uuid-schema
   :death {:deathDate date-schema
           :collectionDateTime date-schema}})

(defendpoint Fieldworker :users
  {:user
   {:firstName s/Str
    :username s/Str}
   :password s/Str})

(defendpoint Individual :individuals
  {:collectedByUuid uuid-schema
   :individual
   {:extId s/Str
    :firstName s/Str
    :gender s/Str
    :collectionDateTime date-schema}})


(comment
  (let [fieldworker
        (create (map->Fieldworker
                 {:user {:username "tester-fw"
                         :firstName "tester-fw"} :password "letmein"}))]
    (:uuid fieldworker))


  (create  (map->Location
            {:collectedByUuid "fa6bb290-533d-4a02-b9c1-141e93723cfc"
             :locationHierarchyUuid "178b00cb-289e-4a24-8e90-13a5f8d076c9"
             :location {:name "123 Mockingbird Ln."
                        :extId "123 Mockingbird Ln."
                        :type "RURAL"
                        :collectionDateTime (now)}}))

  (create (map->LocationHierarchy
            {:collectedByUuid "fa6bb290-533d-4a02-b9c1-141e93723cfc"
             :parentUuid "0d6b1abd-674f-4a6a-9da9-3f5839508c76"
             :levelUuid  "99c1c6fe-c9e5-4c76-9ee8-becc2ce0d933"
             :locationHierarchy {:extId "a-test"
                                 :name "a-test"
                                 :collectionDateTime (now)}}))



  (create (map->ProjectCode {:projectCode {:codeName "fooCode"
                                           :codeGroup "fooGroup"
                                           :codeValue "fooValue"}}))

  )
(comment


;;; Some REPL tests
(comment
  (macroexpand-1
   '(defendpoint LocationHierarchy :location-hierarchies
      {:collectedByUuid uuid-schema
       :parentUuid uuid-schema
       :levelUuid uuid-schema
       :locationHierarchy {:extId s/Str
                           :name s/Str
                           :collectionDateTime date-schema}}))

  (macroexpand-1
   '(defendpoint Location :locations
      {:collectedByUuid uuid-schema
       :locationHierarchyUuid uuid-schema
       :location {:name s/Str
                  :extId s/Str
                  :type s/Str
                  :collectionDateTime s/Str}}))

  (get-entity (:individuals urls))
  (query :project-codes)
  (query :individuals {:id "6bcf1f2d-41d5-498c-b8ce-ccb0525380cf"})
  (query :individuals {:bulk? true})
  (count "6bcf1f2d-41d5-498c-b8ce-ccb0525380cf")


  (create (map->LocationHierarchyLevel {:locationHierarchyLevel {:keyIdentifier 11 :name "foo"}}))
)
)
