(ns ohds.individual.view
  (:require
    [petrol.core :refer [send! send-value!]]
    [ohds.individual.messages :as m]))

(defn individual-widget [ui-channel app]
  [:div
    [:div
      [:input {:id "firstname"
               :type :text
               :on-change (send-value! ui-channel m/->ChangeFirstName)
               :placeholder "First Name"}]]
    [:div
      [:input {:id "dob"
               :type :text
               :on-change (send-value! ui-channel m/->ChangeDob)
               :placeholder "Date of Birth"}]]
    [:div
      [:button
        {:on-click (send-value! ui-channel m/->SubmitIndividual)}
        "Submit"]]])
