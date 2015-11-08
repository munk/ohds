(ns ohds.service.api-config
  (:require
   [clojure.edn :as edn]))

(def config (edn/read-string (slurp "application.edn")))
(def apihost (:apihost config))
(def apiuser (:apiuser config))
(def apipass (:apipass config))
