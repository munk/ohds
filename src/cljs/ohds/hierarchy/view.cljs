(ns ohds.hierarchy.view
  (:require
   [ohds.hierarchy.processing]
   [petrol.core :refer [send! send-value!]]
   [ohds.hierarchy.messages :as m]
   [ohds.components :as c]))

(defn opt [o & more]
  (if o
    (let [uuid (:uuid o)
          name (:name o)]
      (try
        [:option {:key uuid :value uuid} name]
        (catch js/Object e
          (println "failed to parse" name)))) ;;;TODO: Add logger
    nil))

(defn select [ch app i & more]
  (let [ki (get i :keyIdentifier 0)        
        level (:uuid i)
        lh (:location-hierarchies  app)
        lh' (filter (fn [h]
                      (let [hi (:hierarchies app)
                            lid (:level h)
                            parent (:uuid (:parent h))]
                        (and
                         (= parent (get hi ki))
                         (= level (:uuid lid))))) lh)]
    [:div
     [:select
      {:id level
       :name ki
       :on-change (send-value! ch (partial m/->ChangeLevelSelect (inc ki) level))}
      [:option "select"]
      (if (not (empty? lh'))
        (map opt lh')
        [:option "Loading..."])]]))

(defn form [ch app]
  (let [levels (:hierarchy-levels app)
        levelsf
        (filterv
         (fn [e]
           (not= "UNKNOWN_STATUS" (:name e)))
         levels)]
    [:div
     (map #(select ch app %) levelsf)
     [:div.form-group
      [:div 
       [:button.btn.btn-success.btn-default {:on-click (send! ch (m/->StartCensus))} "Census"]
       [:button.btn.btn-success.btn-default {:on-click (send! ch (m/->StartVisit))} "Visit"]]
      (:hierarchies app)]]))




