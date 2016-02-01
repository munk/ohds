(ns ohds.pregnancy-outcome.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [schema.core :as s :include-macros true]
    [ohds.pregnancy-outcome.messages :as m]))

(s/defrecord PregnancyOutcomeRequest
    [collectedBy :- s/Str
     visitUuid :- s/Str
     motherUuid :- s/Str
     fatherUuid :- s/Str
     outcomeDate :- s/Str
     outcomeType :- s/Str])

(s/defrecord PregnancyResultRequest
    [collectedBy :- s/Str
     outcomeId :- s/Str
     type :- s/Str
     child :- s/Str])

(defn create-pregnancy-outcome [fieldworker visit mother father
                                outcome-date outcome-type]
  (petrol/wrap
   m/map->OutcomeResponse
   (http/post "/api/v1/pregnancyOutcome"
              {:form-params (->PregnancyOutcomeRequest
                             fieldworker visit mother father
                             outcome-date outcome-type)})))

(defn create-child
  [fieldworker-id first-name ext-id gender]
  (let [params {:fieldworker-id fieldworker-id
                :first-name first-name
                :gender gender
                :ext-id ext-id}]
    (petrol/wrap
     m/map->ChildResponse
     (http/post "/api/v1/individuals" {:form-params params}))))

(defn create-pregnancy-result [fieldworker outcome type child]
  (petrol/wrap
   m/map->ResultResponse
   (http/post "/api/v1/pregnancyResult"
              {:form-params (->PregnancyResultRequest
                             fieldworker outcome type child)})))
