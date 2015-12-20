(ns ohds.backend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [petrol.core :as petrol]
            [ohds.messages :as m]
            [cljs.core.async :refer [<!]]))


(defn http-post [url body]
  (go
    (->> body
         (http/post url)
         (<!))))

(defn login [user]
  (->> (http/post "/api/v1/login" {:form-params user})
       (petrol/wrap m/map->LoginResults)))
