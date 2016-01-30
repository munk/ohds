(ns ohds.death.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.death.processing]
    [ohds.death.messages :as m]))


(defn modal [ch app uuid]
  (c/modal (str "death-modal-" uuid)
           (str "Death " uuid)
           [:div
            [:label {:for "death-date"} "Death Date"]
            (c/date-input ch m/DeathDate "death-date")
            (c/select ch m/Place "death-place" "UNKNOWN_STATUS"
                                        ;TODO: Search box for locations?
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch m/Cause "death-cause" "UNKNOWN_STATUS"
                      [["UNKNOWN_STATUS" "Unknown Status"]])]
           ch
           (m/->Submit)))
