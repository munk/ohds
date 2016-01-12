(ns ohds.location-select.processing
  (:require
   [ohds.location-select.messages :as m]
   [petrol.core :refer [Message]]))

(extend-protocol Message
  m/ChangeLocation
  (process-message
      [msg app]
    (let [locs (:locations app)
          uuid (:loc msg)
          loc (first (filter #(= uuid (:uuid %)) locs))]
      (assoc app :current-location loc))))
