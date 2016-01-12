(ns ohds.hierarchy.messages)

(defrecord ChangeLevelSelect [num id val])
(defrecord StartCensus [])
(defrecord StartVisit [])
(defrecord LocationsForHierarchyResults [body])
