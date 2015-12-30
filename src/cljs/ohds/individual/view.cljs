(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.components :as c]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn form [ch state]
  [:span
   [:legend "Individual"]
   (c/text-input ch m/->ChangeFirstName
                 "firstname" "First Name")
   (c/text-input ch m/->ChangeExtId
                 "extId" "External ID")
   (c/select ch m/->ChangeGender (:gender state)             
             "gender"
             [["FEMALE" "Female"] ["MALE" "Male"]])   
   (c/submit ch m/->CreateIndividual "Submit")])

