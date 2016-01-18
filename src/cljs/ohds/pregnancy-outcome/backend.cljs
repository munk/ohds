(ns ohds.pregnancy-outcome.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.pregnancy-outcome.messages :as m]))


(defn create-entity [id]
  (let [params {:id id}]
    (->> (http/post "/api/v1/entity" {:form-params params})
         (petrol/wrap m/map->ImplementMeResponse))))
