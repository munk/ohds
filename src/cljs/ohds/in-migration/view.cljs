(ns ohds.in-migration.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.components :as c]
    [ohds.in-migration.processing]
    [ohds.in-migration.messages :as m]))


(defn modal [ch app]
  (c/modal "in-migration-modal"
           "In Migration"
           [:div
            [:label {:for "migration-date"} "Migration Date"]
            (c/date-input ch m/MigrationDate "migration-date")
            (c/select ch m/Origin "migration-origin" "UNKNOWN_STATUS"
                                        ;TODO: Search box for locations?
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch m/Reason "migration-reason" "UNKNOWN_STATUS"
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch m/Type "migration-type" "UNKNOWN_STATUS"
                      [["UNKNOWN_TYPE" "Unknown Type"]])
            [:div [:input {:type :text} "Individual goes here..."]]]
           ch
           (m/->Submit)))
