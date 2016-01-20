(ns ohds.domain
  (:require [schema.core :as s]))

(s/defrecord LoginRequest
    [username :- s/Str
     password :- s/Str
     admin? :- s/Bool])

(defn make-login-request
  [username password admin?]
  (map->LoginRequest {:username username :password password :admin? admin}))

(defn make-fieldworker-login-request
  [username password]
  (make-login-request username password false))

(defn make-admin-login-request
  [username password]
  (make-login-request username password true))
