(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.relationship.view :as rmodal]
   [ohds.membership.view :as mmodal]
   [ohds.components :as c]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn form [ch state]
  [:div.row
   [:div.col-md-4
    [:legend "Individual"]
    (rmodal/modal ch state)
    (mmodal/modal ch state)
    (c/text-input ch m/->ChangeFirstName
                  "firstname" "First Name")
    (c/text-input ch m/->ChangeExtId
                  "extId" "External ID")
    (c/select ch m/->ChangeGender (:gender state)
              "gender"
              [["FEMALE" "Female"] ["MALE" "Male"]])
    [:input {:type "checkbox"
             :onChange (send! ch (m/->MoreResidents))} "More Residents"]
    (c/modal-toggle "#relationModal" "Add Relationship")
    (c/modal-toggle "#membershipModal" "Add Membership")
    (c/submit ch m/->CreateIndividual "Save")]])
