(ns ohds.pregnancy-outcome.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.pregnancy-outcome.processing]
    [ohds.pregnancy-outcome.messages :as m]
    [ohds.individual.view :as indv]))


(defn modal [ch app uuid]
  (c/modal (str "pregnancy-outcome-modal-" uuid)
           (str "Pregnancy Outcome " uuid)
           [:div
            [:label {:for "outcome-date"} "Outcome Date"]
            (c/date-input ch m/OutcomeDate "outcome-date")

            ;;; TOOO: auto-populate mother or father
            [:label {:for "mother"} "Mother"]
            (c/text-input ch m/Mother "mother" "Mother" app)
            [:label {:for "father"}  "Father"]
            (c/text-input ch m/Father "father" "Father" app)

            (c/select ch m/Outcome "outcome-type" "UNKNOWN"
                      [["LIVE_BIRTH" "Live Birth"]
                       ["STILL_BIRTH" "Still Birth"]
                       ["MISCARRIAGE" "Miscarriage"]
                       ["ABORTION" "Abortion"]])
            (indv/form ch app)]
           ch
           (m/->Submit uuid)))
