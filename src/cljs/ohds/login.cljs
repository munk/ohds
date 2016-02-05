(ns ohds.login
  (:require [petrol.core :refer [wrap Message EventSource]]))

(defrecord SubmitLogin []
  Message
  (process-message [msg app]
    (if (= (:username (:login app))
           "good-username")
      (assoc app :page :hierarchy-select)
      app))
  EventSource
  (watch-channels [msg app]))
