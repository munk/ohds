(ns ohds.project-service
  (:require [ohds.client :as client]))

(def code-groups
  [:gender
   :socialGroupType
   :dateOfBirthType
   :locationType
   :yesNo
   :maritalStatus
   :membershipType
   :relationshipType
   :dataStatus
   :ageConstraints
   :pregnancyResultType
   :migrationType
   ])

(def groups (set  (map :codeGroup (client/query :project-codes {:bulk? true}))))
groups
(count groups)

(count code-groups)
