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
