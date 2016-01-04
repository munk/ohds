(ns ohds.controller
  (:require [ohds.service :as svc]
            [clojure.data.json :as json]
            [schema.core :as s :include-macros true]))


(def Location-Request-Schema
  "A schema for location posts"
  {:fieldworker-id s/Str
   :parent s/Str
   :location {:name s/Str
              :ext-id s/Str
              :type (s/enum "RURAL" "URBAN")}})


(def Individual-Request-Schema
  "A schema for individual posts"
  {:fieldworker-id s/Str
   :ext-id s/Str
   :first-name s/Str
   :gender s/Str})

(def Socialgroup-Request-Schema
  "A schema for socialgroup posts"
  {:fieldworker-id s/Str
   :ext-id s/Str
   :group-name s/Str
   :group-type s/Str})


(defrecord Location
    [name extId type])


(defn login [req]
  (let [params (:form-params req)
        username (get params "username")
        password (get params "password")
        result (svc/login username password)]
    (if (nil? result)
      {:status 401
       :headers {}
       :body "Bad username or password"}
      (str result))))


(defn get-location-hierarchies []
  (json/write-str (svc/location-hierarchies)))


(defn create-location [{:keys [params]}]
  (let [{:keys [fieldworker-id parent name extId type]} params]
    (let [location (Location. name extId type)
          response (str (svc/create-location fieldworker-id parent location))]
      response)))


(defn create-social-group [{:keys [params]}]
  (try
    (s/validate Socialgroup-Request-Schema params)
    (let [collected-by (:fieldworker-id params)
          ext-id (:ext-id params)
          group-name (:group-name params)
          group-type (:group-type params)]
      (str (svc/create-social-group collected-by ext-id group-name group-type)))    
    (catch Exception e
      (println params (.getMessage e))
      {:status 400})))


(defn create-individual [req]
  (try
    (s/validate Individual-Request-Schema (:params req))
    (let [params (:params req)
          collected-by (:fieldworker-id params)
          ext-id (:ext-id params)
          first-name (:first-name params)
          gender (:gender params)
          result (str (svc/create-individual collected-by ext-id first-name gender))]
      result)
    (catch Exception e
      (println req (.getMessage e))
      {:status 400})))


(defn locations [uuid]
  (let [result (svc/locations uuid)]
    (json/write-str result)))

(defn get-location-hierarchy-levels []
  (let [result (svc/location-hierarchy-levels)]
    (json/write-str result)))
