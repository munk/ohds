(ns ohds.pregnancy-result.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.pregnancy-result.messages :as m]))


(defn create-entity [id]
  (let [params {:id id}]
    (->> (http/post "/api/v1/entity" {:form-params params})
         (petrol/wrap m/map->ImplementMeResponse))))
