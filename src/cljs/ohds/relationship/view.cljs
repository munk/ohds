(ns ohds.relationship.view
  (:require
   [ohds.relationship.messages :as m]
   [ohds.components :as c]))

(def relationships
  [["SELF" "Self"]
   ["SPOUSE" "Spouse"]
   ["SON_OR_DAUGHTER" "Child"]
   ["BROTHER_OR_SISTER" "Sibling"]
   ["PARENT" "parent"]
   ["GRANDCHILD" "Grandchild"]
   ["NOT_RELATED" "Not related"]
   ["UNKNOWN" "Unknown relationship"]])

(defn modal [ch state]
  [:div.modal.fade {:role "dialog"
                    :id "relationModal"}
   [:div.modal-dialog {:role "document"}
    [:div.modal-content
     [:div.modal-header "Add Relationship"
      [:button.close {:data-dismiss "modal" :aria-label "Close"} "×"]]
     [:div.container
      [:div.col-xs-4
       [:div.modal-title]
       [:div.modal-body
        [:div
         [:label {:for "type"} "Relationship Type"]
         [c/select ch m/->ChangeRelationshipType "type" "SELF"
          relationships]
         [:label {:for "of"} "Of"]
         [c/select ch m/->ChangeIndividualB "of" nil
          [["PersonID" "Person"]]]  ;;;TODO: Save a list of people in household
         [:label {:for "start-date"} "Relationship Start Date"]
         [c/date-input ch m/->ChangeRelationshipStartDate "start-date"]]
        
        [:button "Save"]
        [:button {:data-dismiss "modal" :aria-label "Close"} "Cancel"]]]]]]])

(defn selects [pair]
  (let [a (first pair)
        b (second pair)]
    
    [:div     
     [:input {:type :text
              :value (:firstname a)
              :style {:width "60px"}}]
     (c/select nil nil "type" "SELF" relationships)
     [:input {:type :text
              :value (:firstname b)
              :style {:width "60px"}}]
     [:hr]]))

(defn form [ch app]
  (let [inds (:individuals app)
        pairs (apply concat  (for [i inds]
                               (for [j inds]
                                 [i j])))]
    [:div
     (map selects pairs)]))
