(ns ohds.individual-update.view
  (:require
   [ohds.pregnancy-observation.view :as obs]
   [ohds.pregnancy-outcome.view :as outcome]
   [ohds.in-migration.view :as in-migration]
   [ohds.out-migration.view :as out-migration]
   [ohds.death.view :as death]
   [ohds.individual-update.messages :as m]
   [ohds.individual-update.processing]
   [ohds.components :as c]))

(defn individual [ch ind-states ind]
  (let [{firstName :firstName
         lastName :lastName
         gender :gender
         uuid :uuid} ind
        ind-update-state (get ind-states uuid)]
    [:div.well-sm
     [:label {:for "firstname"} "First Name"]
     (c/const-text "firstname" firstName)
     [:label {:for "lastname"} "Last Name"]
     (c/const-text "lastname" lastName)
     [:label {:for "gender"} "Gender"]
     (c/const-text "gender" gender)
     [:label {:for uuid} "Event"]
     (c/select ch (partial m/->IndividualUpdate uuid) uuid nil
               [[:no-change "No Change"]
                [:pregnancy-observation "Pregnancy Observation"]
                [:pregnancy-outcome "Pregnancy Outcome"]
                ;[:pregnancy-result "Pregnancy Result"]
                ;[:in-migration "In Migration"]
                [:out-migration "Out Migration"]
                [:death "Death"]])
     (when (some? ind-update-state)
       (println "when"  ind-update-state)
       (c/modal-toggle (str "#" ind-update-state "-modal")
                       "Take Observation"))
     [:hr]]))

(defn form [ch app]
  ;;;TODO: each card has shared IDs. Make them unique with uuids
  [:div
   (obs/modal ch app)
   (outcome/modal ch app)
   (in-migration/modal ch app)
   (out-migration/modal ch app)
   (death/modal ch app)
   (map (partial individual ch (:individual-state app)) (:individuals app))
   ;;;TODO: Move in-migration modal here to add new individual
   ])
