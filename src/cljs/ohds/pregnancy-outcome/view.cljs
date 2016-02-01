(ns ohds.pregnancy-outcome.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.pregnancy-outcome.processing]
    [ohds.pregnancy-outcome.messages :as m]
    [ohds.individual.view :as indv]))


(defn modal [ch app uuid]
  (c/modal (str "pregnancy-outcome-modal-" uuid)
           (str "Pregnancy Outcome ")
           [:div
            [:label {:for "outcome-date"} "Outcome Date"]
            (c/date-input ch m/->OutcomeDate "outcome-date")

            [:label {:for "mother"} "Mother"]
            (c/const-text "mother" (:extId (first (filter #(= uuid (:uuid %))
                                                          (:individuals app)))))

            (c/select ch m/->Outcome "outcome-type" "UNKNOWN"
                      [["LIVE_BIRTH" "Live Birth"]
                       ["STILL_BIRTH" "Still Birth"]
                       ["MISCARRIAGE" "Miscarriage"]
                       ["ABORTION" "Abortion"]])
            [:legend "Child"]
            (c/text-input ch m/->ChangeFirstName
                          "firstname" "First Name" app)
            (c/text-input ch m/->ChangeExtId
                          "extId" "External ID" app)
            (c/select ch m/->ChangeGender "gender" "Gender"
                      [["FEMALE" "Female"] ["MALE" "Male"]]
                      [:option {:key "none"} "-----"])]
           ch
           (m/->Submit uuid)))
