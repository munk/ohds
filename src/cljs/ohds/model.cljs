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
   :firstName (s/optional s/Str "firstName")
   :lastName (s/optional s/Str "lastName")
   :passwordHash s/Str})

(def Location
  {:collectedByUuid s/Str
   :locationHierarchyUuid s/Str
   :extId s/Str
   :name s/Str
   :type (s/enum "RURAL" "URBAN")

   ;; Optional Fields
   :longitude (s/optional s/Str "longitude")
   :latitude (s/optional s/Str "latitude")
   :altitude (s/optional s/Str "altitude")
   :accuracy (s/optional s/Str "accuracy")})

(def Individual
  {:firstName s/Str
   :gender s/Str

   :middleName (s/optional s/Str "middleName")
   :lastName (s/optional s/Str "lastName")})


(def LocationHierarchyOption
  {:uuid s/Str
   :name s/Str})

(def LocationOption
  {:uuid s/Str
   :name s/Str
   :extId s/Str
   :type (s/enum "RURAL" "URBAN")})

(def LocationHierarchyLevel
  {})

(def Membership
  {})

(def Relationship
  {})

(def Residency
  {})

(def SocialGroup
  {})
