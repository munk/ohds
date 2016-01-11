(ns ohds.relationship.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.relationship.messages :as m]))

(defn create-relationship
  [fieldworker-id id-a id-b rtype start-date]
  (println "create-relationship" id-a id-b rtype)
  (let [params {:fieldworker-id fieldworker-id
                :id-a id-a
                :id-b id-b
                :type rtype
                :start-date start-date}]
    (->> (http/post "/api/v1/relationships" {:form-params params})
         (petrol/wrap m/map->ProcessRelationshipResults))))

