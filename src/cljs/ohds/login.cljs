(ns ohds.login
  (:require [petrol.core :refer [wrap Message EventSource]]
            [cljs-http.client :as http]))

(defrecord LoginResult [body])

(defrecord SubmitLogin []
  Message
  (process-message [msg app]
    (if (= (:username (:login app))
           "good-username")
      (assoc app :page :hierarchy-select)
      app))
  EventSource
  (watch-channels [msg app]
    (println "watch-channels about to wrap")
    #{(wrap
       map->LoginResult
       (http/post "/api/v1/login"
                  {:form-params (:login app)}))}))
