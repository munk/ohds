(ns ohds.individual.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.individual.messages :as m]))

(defn create-individual
  [fieldworker-id first-name extId gender & more]
  (let [params (merge more {:fieldworker-id fieldworker-id
                            :first-name first-name
                            :gender gender
                            :ext-id extId})]
    (petrol/wrap
     m/map->CreateIndividualResults
     (http/post "/api/v1/individuals" {:form-params params}))))

(defn create-residency
  [fieldworker-id individual location date]
  (println "Creating residency")
  (let [params {:fieldworker-id fieldworker-id
                :individual-id individual
                :location-id location
                :start-type "UNKNOWN_STATUS" ;;;TODO: Find semantics for this
                :start-date (str date "T00:00:00.00Z")
                }]
    (petrol/wrap
     m/map->CreateResidencyResults
     (http/post "/api/v1/residencies" {:form-params params}))))

(defn create-membership
  [fieldworker-id individual socialgroup date]
  (println "creating membership")
  (let [params {:fieldworker-id fieldworker-id
                :individual-id individual
                :socialgroup-id socialgroup
                :start-type "UNKNOWN_STATUS" ;;;TODO: Find semantics for this
                :start-date (str date "T00:00:00.00Z")
                }]
    (petrol/wrap
     m/map->CreateMembershipResults
     (http/post "/api/v1/memberships" {:form-params params}))))
