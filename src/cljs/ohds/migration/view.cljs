(ns ohds.migration.view
  (:require
   [petrol.core :refer [Message EventSource wrap]]
   [ohds.components :as c]
   [ohds.client :as client]
   [ohds.processing :refer [state!]]))


;;; Messages
(defrecord Date [date])

(defrecord OtherLocation [other])

(defrecord Reason [reason])

(defrecord InMigration [])
(defrecord OutMigration [])

;;; Message Processing
(def state-key :migration)

(extend-protocol Message
  Date
  (process-message [msg app]
    (state! msg app state-key))
  OtherLocation
  (process-message [msg app]
    (state! msg app state-key))
  Reason
  (process-message [msg app]
    (state! msg app state-key)))


;;; Client
(defprotocol MigrationClient
  (record-migration
    [msg fieldworker-id visit individual
     residency migration-date migration-type]))

(defrecord MigrationRequest
    [fieldworker-id
     visit
     individual
     residency
     migration-date
     migration-type])

(extend-protocol MigrationClient
  InMigration
  (record-migration [msg fieldworker-id visit individual
                     residency migration-date migration-type]
    (client/post msg (->MigrationRequest
                      fieldworker-id visit individual
                      residency migration-date migration-type)))
  OutMigration
  (record-migration [msg fieldworker-id visit individual
                     residency migration-date migration-type]
    (client/post msg (->MigrationRequest
                      fieldworker-id visit individual
                      residency migration-date migration-type))))



;;; View
(defn modal [ch app uuid type-str submit]
  (c/modal (str type-str "-migration-modal-" uuid)
           (str (clojure.string/capitalize type-str) " Migration " uuid)
           [:div
            [:label {:for "migration-date"} "Migration Date"]
            (c/date-input ch ->Date "migration-date")
            [:label {:for "migration-destination"} "Origin"]
            (c/select ch ->OtherLocation "migration-origin" "UNKNOWN_STATUS"
                      [["UNKNOWN_STATUS" "Unknown Location"]])
            [:label {:for "migration-reason"} "Migration Type"]
            (c/select ch ->Reason "migration-reason" "UNKNOWN_STATUS"
                      [["EXTERNAL_MIGRATION" "External Migration"]
                       ["INTERNAL_MIGRATION" "Internal Migration"]
                       ["UNKNOWN_STATUS" "Unknown Status"]])]
           ch
           (submit)))

(defn in-modal [ch app uuid]
  (modal ch app uuid "in" ->InMigration))

(defn out-modal [ch app uuid]
  (modal ch app uuid "out" ->OutMigration))
