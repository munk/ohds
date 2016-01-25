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
        b (second pair)
        id-suffix (str (:uuid a) (:uuid b))]
    [:div
     [:div
      [:legend
       (str (:firstname a) " → " (:firstname b))]
      (c/select ch (partial m/->ChangeRelationshipType (:uuid a) (:uuid b))
                (str "type" id-suffix) "NOT_RELATED" relationships)
      [:label {:for (str "start-date" id-suffix)} "Relationship Start Date"]
      (c/date-input ch
                    (partial m/->ChangeRelationshipStartDate
                             (:uuid a)
                             (:uuid b))
                    (str "start-date" id-suffix))
      [:hr]]]))

(defn form [ch app]
  (let [inds (:individuals app)
        pairs (for [i (range (count inds))
                    :let [all-others (drop i inds)]
                    others (rest all-others)]
                [(first all-others) others])]
    [:span
     [:legend "Relationships"]
     (map (partial selects ch) pairs)
     (when (and
            (seq (:relationships app))
            (every? some? (flatten (vals (:relationships app)))))
       (c/submit ch m/->SubmitRelationship "Complete Household"))]))
