(ns ohds-ui.prod
  (:require [ohds-ui.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
