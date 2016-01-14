(ns ohds.individual-update.view
  (:require
   [ohds.individual-update.messages :as m]
   [ohds.components :as c]))

(defn individual [ch ind]
  (println "ind" ind)
  (let [{firstName :firstName
         lastName :lastName
         gender :gender
         uuid :uuid} ind]
    [:div.well-sm
     [:label {:for "firstname"} "First Name"]
     (c/const-text "firstname" firstName)
     [:label {:for "firstname"} "First Name"]
     (c/const-text "lastname" lastName)
     [:label {:for "lastname"} "Last Name"]
     (c/const-text "gender" gender)
     (c/select ch (partial m/->IndividualUpdate uuid) uuid nil
               [["no change" "No Change"]
                ["pregnancy observation" "Pregnancy Observation"]
                ["pregnancy outcome" "Pregnancy Outcome"]
                ["pregnancy result" "Pregnancy Result"]
                ["in migration" "In Migration"]
                ["out migration" "Out Migration"]
                ["death" "Death"]])
     (c/submit ch (partial m/->ProcessObservation uuid) "Take Observation")
     [:hr]]))


(defn form [ch app]  
  [:div
   (map (partial individual ch) (:individuals app))])
