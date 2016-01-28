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
        gender? (c/has-data? ind :gender)
        dates? (and (c/has-data? (:residency state) :date)
                    (c/has-data? (:membership state) :date))]
    (println ind name? id? gender?)
    [:span {:id "individual-form"}
     [:legend "Individual"]
     (rmodal/modal ch state)
     (mmodal/modal ch state)
     (c/text-input ch m/->ChangeFirstName
                   "firstname" "First Name" state)
     (c/text-input ch m/->ChangeExtId
                   "extId" "External ID" state)
     (c/select ch m/->ChangeGender "gender" (:gender state)
               [["FEMALE" "Female"] ["MALE" "Male"]]
               [:option {:key "none"} "-----"])
     [:legend "Residency"]
     (c/const-text (:uuid (:location state))
                   (:extId (:location state)))
     (c/date-input ch m/->ChangeResidencyDate "residency-date")
     [:legend "Social Group"]
     (c/const-text (:uuid (:socialgroup state))
                   (:extId (:socialgroup state)))
     (c/date-input ch m/->ChangeSocialGroupMembershipDate "socialgroup-date")
     (c/checkbox "more-residents" "More Residents" ch (m/->MoreResidents))
     (when (and name? id? gender?)
       [:div {:onClick #(aset (.getElementById js/document "firstname") "value" nil)}
        (c/submit ch m/->CreateIndividual "Save")])]))
