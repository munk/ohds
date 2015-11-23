(ns ohds.service.individual
  (:require
   [ohds.service.time :refer [now]]
   [ohds.service.service :refer [post]]))

(def individual-url
  "/individuals")

(defn create-individual ;;;TODO: Allow additional fields
  [collected-by individual-id first-name gender]
  (->> {:collectedByUuid collected-by
        :extId individual-id
        :firstName first-name
        :gender gender}
       (post individual-url)))

