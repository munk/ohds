(ns ohds.individual.view
  (:require
   [petrol.core :refer [send! send-value!]]
   [ohds.individual.processing]
   [ohds.individual.messages :as m]))

(defn individual-widget [ui-channel app]
  [:div
   [:div
    [:label {:for "firstname"} "First Name:"]
      [:input {:id "firstname"
               :type :text
               :on-change (send-value! ui-channel m/->ChangeFirstName)
               :placeholder "First Name"}]]
   [:div
    [:label {:for "extId"} "External ID"]
    [:input {:id "extId"
             :type :text
             :on-change (send-value! ui-channel m/->ChangeExtId)
             :placeholder "External ID"}]]
   [:div
      [:label {:for "gender"} "Gender:"]
      [:select {:id "gender"
                :on-change (send-value! ui-channel m/->ChangeGender)}
       [:option {:value "FEMALE"} "Female"]
       [:option {:value "MALE"} "Male"]]]

    [:div
      [:button
       {:on-click (send! ui-channel (m/->CreateIndividual))}
       "Submit!"]]])
