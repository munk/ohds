(ns ohds.model
  (:require [schema.core :as s :include-macros true]))


(def AuthenticationAttempt
  {:username s/Str
   :password s/Str})

(def AuthenticatedUser
  {:username s/Str
   :uuid s/Str})

(def FieldWorker
  {:fieldWorkerId s/Str
   :firstName (s/optional s/Str)
   :lastName (s/optional s/Str)
   :passwordHash s/Str})

(def Location
  {:collectedByUuid s/Str
   :locationHierarchyUuid s/Str
   :extId s/Str
   :name s/Str
   :type (s/Enum "RURAL" "URBAN")

   ;; Optional Fields
   :longitude (s/optional s/Str "longitude")
   :latitude (s/optional s/Str "latitude")
   :altitude (s/optional s/Str "altitude")
   :accuracy (s/optional s/Str "accuracy")})
