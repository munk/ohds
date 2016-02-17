(ns ohds.model
  (:require [schema.core :as s :include-macros true]))


(defn valid-login? [state]
  (println "state" state)
  (let [has-data? (fn [state key] (pos? (count (key state))))]
    (and
     (has-data? state :username)
     (has-data? state :password))))
