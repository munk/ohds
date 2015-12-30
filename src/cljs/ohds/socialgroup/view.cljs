(ns ohds.socialgroup.view
  (:require
   [ohds.socialgroup.processing]
   [ohds.socialgroup.messages :as m]
   [ohds.components :as c]))

(defn form [ch state]
  (let [sg (:socialgroup state)]
    [:span
     [:legend "Social Group"]
     (c/text-input ch m/->ChangeExtId (:extId sg) "extId" "External ID")
     (c/text-input ch m/->ChangeGroupName (:name sg) "groupName" "Group Name")
     (c/select ch m/->ChangeGroupType "groupType" "FAMILY"
               [["FAMILY" "Family"] ["COHORT" "Cohort"]])
     (c/submit ch m/->SubmitSocialGroup "Submit")]))
