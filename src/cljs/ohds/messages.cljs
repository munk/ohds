(ns ohds.messages)


;;; UI Events
(defrecord ChangeUsername [username])
(defrecord ChangePassword [password])

;;; Backend Results
(defrecord LoginResults [body])

;;; Login
(defrecord LogOut [])
(defrecord FieldworkerLogin [])
(defrecord AdminLogin [])

;;; Search
(defrecord LocationHierarchySelect [])

;;; Create
(defrecord NewLocation [])
(defrecord NewIndividual [])
(defrecord NewResidency [])
(defrecord NewRelationship [])
(defrecord NewMembership [])

(defrecord NewUser [])
(defrecord NewFieldworker [])


;;; Update
(defrecord UpdateIndividual [])
(defrecord UpdateLocation [])
(defrecord UpdateResidency [])
(defrecord UpdateRelationship [])
(defrecord UpdateMembership [])

(defrecord UpdateUser [])
(defrecord UpdateFieldworker [])

