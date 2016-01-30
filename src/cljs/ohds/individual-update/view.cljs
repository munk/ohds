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

(defn individual [ch app individual]
  (let [{firstName :firstName
         lastName :lastName
         gender :gender
         uuid :uuid} individual]
    [:span
     (obs/modal ch app uuid)
     (outcome/modal ch app uuid)

     (out-migration/modal ch app uuid)
     (death/modal ch app uuid)
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
      (when (get (:individual-state app) uuid)
        (c/modal-toggle (str "#" (get (:individual-state app) uuid) "-modal-" uuid)
                        "Take Observation"))
      [:hr]]]))

(defn form [ch app]
  [:div
   [:legend "Update Individuals"]
   (c/modal-toggle (str "#" "new-individual-modal-") "In Migration")
   (map (partial individual ch app) (:individuals app))
   (in-migration/modal ch app nil)])
