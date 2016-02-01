(ns ohds.pregnancy-outcome.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.processing :refer [assoc-state state!]]
   [ohds.pregnancy-outcome.backend :as backend]
   [ohds.pregnancy-outcome.messages :as m]))

(def state-key :pregnancy-outcome)

(extend-protocol Message

  m/OutcomeDate
  (process-message [msg app]
    (state! msg app state-key))

  m/Outcome
  (process-message [msg app]
    (state! msg app state-key))

  m/ChangeFirstName
  (process-message [msg app]
    (println msg)
    (state! msg app :child))

  m/ChangeExtId
  (process-message [msg app]
    (state! msg app :child))

  m/ChangeGender
  (process-message [msg app]
    (println msg)
    (state! msg app :child))

  m/ChildResponse
  (process-message [msg app]
    (let [{body :body status :status} msg
          fieldworker (:fieldworker-id app)
          outcome (:pregnancy-outcome app)
          child body
          type "UNKNOWN_STATUS"]
      (backend/create-pregnancy-result fieldworker outcome type child)
      app))

  m/OutcomeResponse
  (process-message [msg app]
    (let [{body :body status :status} msg
          fieldworker (:fieldworker-id app)
          {:keys [first-name ext-id gender]} (:child app)]
      (backend/create-child fieldworker first-name ext-id gender)
      (assoc app state-key body))))


(extend-protocol EventSource
  m/Submit
  (watch-channels [msg app]
    (let [fieldworker (:fieldworker-id app)
          visit (:visit app)
          mother (:uuid msg)
          father "UNKNOWN"
          date (str (:date (:pregnancy-outcome app)) "T00:00:00.000Z")
          type (:type (:pregnancy-outcome app))]
      #{(backend/create-pregnancy-outcome fieldworker visit
                                          mother father
                                          date type)})))
