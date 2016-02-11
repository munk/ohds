(ns ohds.in-migration.view
  (:require-macros [ohds.macros :refer [defwidget]])
  (:require
   [petrol.core :refer [wrap send! send-value! Message EventSource]]
   [cljs-http.client :as http]
   [ohds.components :as c]

   [ohds.processing :refer [assoc-state state!]]))

(def state-key :in-migration)

(def foo 1)

(defwidget MigrationDate [date] state-key)
(defwidget Origin [origin] state-key)
(defwidget Reason [reason] state-key)
(defwidget Type [migration-type] state-key)
(defwidget ChangeFirstName [first-name] state-key)
(defwidget ChangeExtId [external-id] state-key)
(defwidget ChangeGender [gender] state-key)

(defrecord Submit []
  EventSource
  (watch-channels [msg app]
    (let [{:keys [fieldworker-id current-visit
                  in-migration current-location]} app
          {:keys [first-name external-id gender
                  migration-date migration-type origin]} in-migration
          request {:first-name first-name
                   :external-id external-id
                   :gender gender
                   :residency current-location
                   :visit current-visit
                   :origin origin
                   :migration-date migration-date
                   :migration-type migration-type
                   :fieldworker-id fieldworker-id}]
      (http/post "/api/v1/inMigration" {:form-params request}))))

(defrecord SubmitResponse [body]
  Message
  (process-message [msg app]
    (assoc app state-key {})))

(defn modal [ch app uuid]
  (c/modal (str "in-migration-modal-" uuid)
           (str "In Migration " uuid)
           [:div
            [:label {:for "migration-date"} "Migration Date"]
            (c/date-input ch MigrationDate "migration-date")
            (c/select ch Origin "migration-origin" "UNKNOWN_STATUS"
                                        ;TODO: Search box for locations?
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch Reason "migration-reason" "UNKNOWN_STATUS"
                      [["UNKNOWN_STATUS" "Unknown Status"]])
            (c/select ch Type "migration-type" "UNKNOWN_STATUS"
                      [["UNKNOWN_TYPE" "Unknown Type"]])
            [:legend "Individual"]
            (c/text-input ch ->ChangeFirstName
                          "firstname" "First Name" app)
            (c/text-input ch ->ChangeExtId
                          "extId" "External ID" app)
            (c/select ch ->ChangeGender "gender" (:gender app)
                      [["FEMALE" "Female"] ["MALE" "Male"]]
                      [:option {:key "none"} "-----"])]
           ch
           (->Submit)))
