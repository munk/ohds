(ns ohds.admin
  (:require [ohds.components :as c]))


(defrecord User [])
(defrecord Fieldworker [])
(defrecord ProjectCode [])
(defrecord LocationHierarchy [])

(defn form [ch state]
  [:div
   [:legend "Admin Home"]
   (c/submit ch ->User "Users")
   (c/submit ch ->Fieldworker "Fieldworkers")
   (c/submit ch ->ProjectCode "Project Codes")
   (c/submit ch ->LocationHierarchy "Location Hierarchies")])
