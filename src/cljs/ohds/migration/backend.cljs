(ns ohds.migration.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.migration.messages :as m]))


(defn create-entity [id]
  (let [params {:id id}]
    (->> (http/post "/api/v1/entity" {:form-params params})
         (petrol/wrap m/map->ImplementMeResponse))))
