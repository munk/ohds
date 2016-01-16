(ns ohds.socialgroup.backend
  (:require
   [cljs-http.client :as http]
   [petrol.core :as petrol]
   [ohds.socialgroup.messages :as m]))

(defn create-socialgroup [fw sg]
  (let [req {:fieldworker-id fw
             :ext-id (:extId sg)
             :group-name (:name sg)
             :group-type (:type sg)}]
    (petrol/wrap
     m/map->CreateSocialGroupResults
     (http/post "/api/v1/socialgroups" {:form-params req}))))
