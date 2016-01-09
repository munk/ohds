(ns ohds.socialgroup.view
  (:require
   [ohds.socialgroup.processing]
   [ohds.socialgroup.messages :as m]
   [ohds.components :as c]))

(defn form [ch state]
  (let [sg (:socialgroup state)
        group-type? (c/has-data? sg :type)
        group-name? (c/has-data? sg :name)
        group-id? (c/has-data? sg :extId)]
    [:span
     [:legend "Social Group"]
     (c/text-input ch m/->ChangeExtId (:extId sg) "extId" "External ID")
     (c/text-input ch m/->ChangeGroupName (:name sg) "groupName" "Group Name")
     (c/select ch m/->ChangeGroupType "groupType" "FAMILY"
               [["FAMILY" "Family"] ["COHORT" "Cohort"]])
     (when (and group-type? group-name? group-id?)
       (c/submit ch m/->SubmitSocialGroup "Submit"))]))
