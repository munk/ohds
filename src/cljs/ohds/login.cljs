(ns ohds.login
  (:require [petrol.core :refer [Message]]))

(defrecord SubmitLogin []
  Message
  (process-message [msg app]
    (assoc app :page :hierarchy-select)))
