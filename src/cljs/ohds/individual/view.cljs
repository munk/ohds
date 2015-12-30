(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.relationship.view :as modal]
   [ohds.components :as c]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn form [ch state]
  [:div.row
   [:div.col-md-4
    [:legend "Individual"]
    (modal/modal ch state)
    (c/text-input ch m/->ChangeFirstName
                  "firstname" "First Name")
    (c/text-input ch m/->ChangeExtId
                  "extId" "External ID")
    (c/select ch m/->ChangeGender (:gender state)             
              "gender"
              [["FEMALE" "Female"] ["MALE" "Male"]])
    (c/submit ch m/->CreateIndividual "Submit")
    (c/submit ch m/->AddRelationship "Add Relationship")
    (c/submit ch m/->AddMembership "Add Membership")
    [:div [:button {:data-toggle "modal" :data-target "#myModal"} "Modal"]]]])
