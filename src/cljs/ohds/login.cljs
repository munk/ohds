(ns ohds.login
  (:require [petrol.core :refer [Message]]))

(defrecord SubmitLogin []
  Message
  (process-message [msg app]
    (if (= (:username (:login app))
           "good-username")
      (assoc app :page :hierarchy-select)
      app)))
