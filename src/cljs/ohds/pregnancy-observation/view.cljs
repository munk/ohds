(ns ohds.pregnancy-observation.view
  (:require
   [petrol.core :refer [Message]]
   [ohds.pregnancy-observation.messages :as m]
   [ohds.pregnancy-observation.processing]
   [ohds.components :as c]))

(defn modal [ch app uuid]
  (c/modal (str "pregnancy-observation-modal-" uuid)
           (str  "Pregnancy Observation " uuid)
           [:div
            [:label {:for "pregnancy-date"} "Pregnancy Date"]
            (c/date-input ch m/->ChangePregnancyDate "pregnancy-date")
            [:label {:for "pregnancy-date"} "Expected Delivery Date"]
            (c/date-input ch m/->ChangeExpectedDeliveryDate "delivery-date")]
           ch
           (m/->Submit)))
