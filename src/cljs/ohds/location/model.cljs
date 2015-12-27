(ns ohds.location.model
  (:require [schema.core :as s :include-macros true]))

(def location-request-schema
  {:fieldworker-id s/Str
   :parent s/Str
   :location {
              :extId s/Str
              :name s/Str
              :type (s/enum "RURAL" "URBAN")

              ;; Optional Fields
              :longitude (s/optional s/Str "longitude")
              :latitude (s/optional s/Str "latitude")
              :altitude (s/optional s/Str "altitude")
              :accuracy (s/optional s/Str "accuracy")}})
