(ns ohds.out-migration.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.out-migration.processing]
    [ohds.out-migration.messages :as m]))


(defn modal [ch app uuid]
  (c/modal (str "out-migration-modal-" uuid)
           (str "Out Migration " uuid)
           [:div
            [:label {:for "migration-date"} "Migration Date"]
            (c/date-input ch m/MigrationDate "migration-date")
            (c/select ch m/Destination "migration-destination" "UNKNOWN_STATUS"
                                        ;TODO: Search box for locations?
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch m/Reason "migration-reason" "UNKNOWN_STATUS"
                      [["UNKNOWN_STATUS" "Unknown Status"]])]
           ch
           (m/->Submit)))
