(ns ohds.admin
  (:require [ohds.components :as c]
            [petrol.core :refer [Message]]))


(defrecord User []
  Message
  (process-message [_ app]
    (assoc app :page :admin-users)))
(defrecord Fieldworker []
  Message
  (process-message [_ app]
    (assoc app :page :admin-fieldworkers)))
(defrecord ProjectCode []
  Message
  (process-message [_ app]
    (assoc app :page :admin-project-codes)))
(defrecord LocationHierarchy []
  Message
  (process-message [_ app]
    (assoc app :page :admin-location-hierarchies)))

(defn form [ch state]
  [:div
   [:legend "Admin Home"]
   (c/submit ch ->User "Users")
   (c/submit ch ->Fieldworker "Fieldworkers")
   (c/submit ch ->ProjectCode "Project Codes")
   (c/submit ch ->LocationHierarchy "Location Hierarchies")])
