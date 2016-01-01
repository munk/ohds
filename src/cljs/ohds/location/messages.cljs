(ns ohds.location.messages)

(defrecord ChangeLocationName [name])

(defrecord ChangeLocationHierarchy [hierarchy])
(defrecord ChangeLocation [location])
(defrecord ChangeLocationExtId [extId])
(defrecord ChangeLocationType [type])
(defrecord SubmitLocation [])
(defrecord HierarchyLevelResults [body])
(defrecord LocationHierarchyResults [body])
(defrecord LocationResults [body])

(defrecord CreateLocationResults [body])
(defrecord UpdateLocationResults [body])
