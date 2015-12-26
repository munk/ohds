(ns ohds.backend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [petrol.core :as petrol]
            [petrol.core :refer [Message EventSource]]
            [ohds.location.messages :as m]
            [cljs.core.async :refer [<!]]))


(defn http-post [url body]
  (go
    (->> body
         (http/post url)
         (<!)))


 (defn locations
   ([]
    (locations "HIERARCHY_ROOT"))
   ([uuid]
    (->> (http/get (str "/api/v1/locations/" uuid))
         (petrol/wrap m/map->LocationResults)))))
