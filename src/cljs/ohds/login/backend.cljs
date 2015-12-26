(ns ohds.login.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.login.messages :as m]))

(defn login [user]
  (->> (http/post "/api/v1/login" {:form-params user})
       (petrol/wrap m/map->LoginResults)))
