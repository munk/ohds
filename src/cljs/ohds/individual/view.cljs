(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.relationship.view :as rmodal]
   [ohds.membership.view :as mmodal]
   [ohds.components :as c]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn form [ch state]
  (let [ind (:individual state)
        name? (c/has-data? ind :firstname)
        id? (c/has-data? ind :extId)
        gender? (c/has-data? ind :gender)]
    (println ind)
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
               [["nil" "Gender..."] ["FEMALE" "Female"] ["MALE" "Male"]])
     (c/checkbox "more-residents" "More Residents" ch (m/->MoreResidents))
     (when (and name? id? gender?)
       (c/submit ch m/->CreateIndividual "Save"))]))
