(ns ohds.relationship.view
  (:require
   [ohds.relationship.processing]
   [ohds.relationship.messages :as m]
   [ohds.components :as c]))

(def relationships
  [["NOT_RELATED" "Not related"]
   ["household-member" "Household Member"]
   ["SELF" "Self"]
   ;["SPOUSE" "Spouse"]
   ;["SON_OR_DAUGHTER" "Child"]
   ;["BROTHER_OR_SISTER" "Sibling"]
   ;["PARENT" "parent"]
   ;["GRANDCHILD" "Grandchild"]
   ;["UNKNOWN" "Unknown relationship"]
   ])

(defn modal [ch state]
  [:div.modal.fade {:role "dialog"
                    :id "relationModal"}])

(defn selects [ch pair]
  (let [a (first pair)
        b (second pair)]
    (c/form-group
     [:span
      (str (:firstname a) " is ")
      (c/inline-select ch (partial m/->ChangeRelationshipType (:uuid a) (:uuid b))
                       "type" "NOT_RELATED" relationships)
      (str " to " (:firstname b))
      (c/date-input ch
                    (partial m/->ChangeRelationshipStartDate
                             (:uuid a)
                             (:uuid b))
                    "start-date")
      [:hr]])))

(defn form [ch app]
  (let [inds (:individuals app)
        pairs (apply concat  (for [i inds]
                               (for [j inds]
                                 [i j])))]
    [:div
     (map (partial selects ch) pairs)
     (when (and
            (not (empty? (:relationships app)))
            (every? some? (flatten (vals (:relationships app)))))
       (c/submit ch m/->SubmitRelationship "Complete Household"))]))
