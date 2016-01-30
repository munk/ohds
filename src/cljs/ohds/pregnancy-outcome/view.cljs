(ns ohds.pregnancy-outcome.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.pregnancy-outcome.processing]
    [ohds.pregnancy-outcome.messages :as m]))


(defn modal [ch app uuid]
  (c/modal (str "pregnancy-outcome-modal-" uuid)
           (str "Pregnancy Outcome " uuid)
           [:div
            [:label {:for "outcome-date"} "Outcome Date"]
            (c/date-input ch m/OutcomeDate "outcome-date")

            ;;; TOOO: auto-populate mother or father
            [:label {:for "mother"} "Mother"]
            (c/date-input ch m/Mother "mother")
            [:label {:for "father"}  "Father"]
            (c/date-input ch m/Father "father")

            (c/select ch m/OutcomeType "outcome-type" "UNKNOWN"
                      [["LIVE_BIRTH" "Live Birth"]
                       ["STILL_BIRTH" "Still Birth"]
                       ["MISCARRIAGE" "Miscarriage"]
                       ["ABORTION" "Abortion"]])
            [:div [:input {:type :text} "Child goes here..."]]]
           ch
           (m/->Submit)))
