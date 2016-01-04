(ns ohds.hierarchy.messages)

(defrecord LocationHierarchyLevelResults [body])
(defrecord ChangeLevelSelect [num id val])

(defrecord StartCensus [])
(defrecord StartVisit [])
