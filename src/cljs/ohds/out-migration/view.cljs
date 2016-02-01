(ns ohds.out-migration.view
  (:require
   [ohds.migration.view :as migration]))

(defn modal [ch app uuid]
  (migration/out-modal ch app uuid))
