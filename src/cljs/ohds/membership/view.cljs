(ns ohds.membership.view
  (:require
   [ohds.membership.messages :as m]
   [ohds.components :as c]))

(defn modal [ch state]
  [:div.modal.fade {:role "dialog"
                    :id "membershipModal"}
   [:div.modal-dialog {:role "document"}
    [:div.modal-content
     [:div.modal-header "Add Membership"
      [:button.close {:data-dismiss "modal" :aria-label "Close"} "×"]]
     [:div.container
      [:div.col-xs-4
       [:div.modal-title]
       [:div.modal-body
        [:div
         [:label {:for "group"} "Social Group"]
         [c/select ch m/->ChangeSocialGroup "group" nil ;;;TODO: Get social groups here
          [["SELF" "Self"]
           ["SPOUSE" "Spouse"]]]
         [:label {:for "of"} "Of"]  ;;;TODO: Save a list of people in household
         [:label {:for "start-date"} "Membership Start Date"]
         [c/date-input ch m/->ChangeStartDate "start-date"]
         (c/text-input ch m/->ChangeStartType
                       "starttype" "Start Type" state)]
        [:button "Save"]
        [:button {:data-dismiss "modal" :aria-label "Close"} "Cancel"]]]]]]])
