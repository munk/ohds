(ns ohds.individual.view)

(defn individual-widget [ui-channel app]
  [:div
    [:div
      [:input {:type :text
               :placeholder "First Name"}]]
    [:div
      [:input {:type :text
               :placeholder "Date of Birth"}]]
    [:div
      [:button "Submit"]]])
