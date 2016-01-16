(ns ohds.hierarchy.view
  (:require
   [ohds.hierarchy.processing]
   [petrol.core :refer [send! send-value!]]
   [ohds.hierarchy.messages :as m]
   [ohds.components :as c]))

(defn opt [o & more]
  (when o
    (let [uuid (:uuid o) name (:name o)]
      (try
        [:option {:key uuid, :value uuid} name]
        (catch js/Object e (println "failed to parse" name))))))

(defn filter-hierarchies [app ki level lh]
  (filter (fn [h]
            (let [hi (:hierarchies app)
                  lid (:level h)
                  parent (:uuid (:parent h))]
              (and
               (= parent (get hi ki))
               (= level (:uuid lid))))) lh))

(defn select [ch app i & more]
  (let [ki (get i :keyIdentifier 0)
        level (:uuid i)
        lh (:location-hierarchies  app)
        lh' (filter-hierarchies app ki level lh)]
    (c/form-group
     [:select.form-control
      {:id level
       :key level
       :name ki
       :on-change (send-value! ch (partial m/->ChangeLevelSelect (inc ki) level))}
      [:option "------"]
      (when (seq lh') (map opt lh'))])))

(defn form [ch app]
  {:pre [(or (= 0 (:hierarchy-level-count app))
             (= (inc (:hierarchy-level-count app)) ;;; We ignore the extra Unknown Status
                (count (:hierarchy-levels app))))]
   :post [(= (:hierarchy-level-count app) ;;; Must have correct number of select elements
             (count (filter #{:select.form-control} (flatten %))))]}

  (let [levels (:hierarchy-levels app)
        levelsf
        (filterv
         (fn [e]
           (not= "UNKNOWN_STATUS" (:name e)))
         levels)]
    [:div
     [:legend "Location Hierarchy"]
     (map #(select ch app %) levelsf)
     [:div
      (c/submit ch m/->StartCensus "Census")
      (c/submit ch m/->StartVisit "Visit")]]))
