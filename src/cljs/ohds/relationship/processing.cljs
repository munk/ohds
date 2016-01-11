(ns ohds.relationship.processing
  (:require
   [petrol.core :refer [Message EventSource]]
   [ohds.relationship.backend :as backend]
   [ohds.relationship.messages :as m]))

(extend-protocol Message
  m/ChangeRelationshipType
  (process-message [response app]
    (let [a (:a-id response)
          b (:b-id response)
          t (:type response)
          r (get (:relationships app) [a b])]
      (if (not (nil? r))
        (let [d (second r)]
          (assoc app :relationships (assoc (:relationships app) [a b] [t d])))
        (assoc app :relationships (assoc (:relationships app) [a b] [t nil])))))
  m/ChangeRelationshipStartDate
  (process-message [response app]
    (let [a (:a-id response)
          b (:b-id response)
          d (:date response)
          r (get (:relationships app) [a b])]
      (if (not (nil? r))
        (let [t (first r)]
          (assoc app :relationships (assoc (:relationships app) [a b] [t d])))
        (assoc app :relationships (assoc (:relationships app) [a b] [nil d])))))
  m/ProcessRelationshipResults
  (process-message [response app]
    (println "processing relationship results")
    (if (= (:page app)
           :relationships)
      (assoc app :page :location)
      app)))

(extend-protocol EventSource
  m/SubmitRelationship
  (watch-channels [_ app]
    (let [{fieldworker-id :fieldworker-id
           relationships :relationships} app
          result (map (fn [r]
                        (let [[[a b] [t d]] r]
                          (backend/create-relationship
                           fieldworker-id
                           a b t (str d "T00:00:00.000Z")
                           ))) relationships)]
      (set (doall result)))))
