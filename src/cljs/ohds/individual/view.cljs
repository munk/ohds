(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.relationship.view :as rmodal]
   [ohds.membership.view :as mmodal]
   [ohds.components :as c]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn form [ch state]
  [:span
   [:legend "Individual"]
   (rmodal/modal ch state)
   (mmodal/modal ch state)
   (c/text-input ch m/->ChangeFirstName
                 "firstname" "First Name" state)
   (c/text-input ch m/->ChangeExtId
                 "extId" "External ID" state)
   (c/select ch m/->ChangeGender (:gender state)
             "gender"
             [["FEMALE" "Female"] ["MALE" "Male"]])
   (c/checkbox "more-residents" "More Residents" ch (m/->MoreResidents))
   (c/modal-toggle "#relationModal" "Add Relationship")
   (c/modal-toggle "#membershipModal" "Add Membership")
   (c/submit ch m/->CreateIndividual "Save")])
