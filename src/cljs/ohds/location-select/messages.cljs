(ns ohds.location-select.messages)

(defrecord ChangeLocation [loc])
(defrecord StartLocationVisit [])
(defrecord IndividualsByLocationResults [body])
(defrecord RecordVisit [body])
