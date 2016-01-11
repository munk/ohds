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
    (->> (http/post "/api/v1/individuals" {:form-params params})
         (petrol/wrap m/map->CreateIndividualResults))))

(defn create-residency
  [fieldworker-id individual location]
  (let [params {:fieldworker-id fieldworker-id
                :individual-id individual
                :location-id location
                :start-type "UNKNOWN_STATUS" ;;;TODO: Find semantics for this
                :start-date "2016-01-01T00:00:00.00Z" ;;;TODO: how to populate this?
                }]
    (http/post "/api/v1/residencies" {:form-params params})))

(defn create-membership
  [fieldworker-id individual socialgroup]
  (let [params {:fieldworker-id fieldworker-id
                :individual-id individual
                :socialgroup-id socialgroup
                :start-type "UNKNOWN_STATUS" ;;;TODO: Find semantics for this
                :start-date "2016-01-01T00:00:00.00Z" ;;; TODO: how to populate this?
                }]
    (http/post "/api/v1/memberships" {:form-params params})))
