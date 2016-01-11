(ns ohds.relationship.messages)

(defrecord ChangeRelationshipType [a-id b-id type])
(defrecord ChangeIndividualB [])
(defrecord ChangeRelationshipStartDate [a-id b-id date])
(defrecord SubmitRelationship [])
(defrecord ProcessRelationshipResults [body])
