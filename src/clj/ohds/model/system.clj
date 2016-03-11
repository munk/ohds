(ns ohds.model.system
  (:require [org.httpkit.client :as http]
            [clojure.edn :as edn]
            [ohds.model.protocols :refer :all]))

(def config (edn/read-string (slurp "application.edn")))

(defrecord User [uuid firstName lastName username password passwordHash]
  CRUD
  (update! [this]
    (let [{apihost :apihost} config
          user-id (:uuid this)
          user-from-system (http/get (str apihost "/users/" user-id))])
    )
  (search [this])
  )

(defrecord Fieldworker [uuid firstName lastName username password passwordHash])
