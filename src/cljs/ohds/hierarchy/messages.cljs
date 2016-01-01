(ns ohds.hierarchy.messages)

(defrecord ChangeLevel [data])
(defrecord LocationHierarchyLevelResults [body])
(defrecord ChangeLevelSelect [num id val])
