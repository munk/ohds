(ns ohds.in-migration.view
  (:require [ohds.migration.view :as migration]))


(defn modal [ch app uuid]
  (migration/in-modal ch app uuid))
