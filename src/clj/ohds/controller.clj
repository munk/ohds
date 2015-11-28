(ns ohds.controller
  (:require [ohds.service :as svc]
            [clojure.data.json :as json]))


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


(defn create-location [req]
  (let [params (:params req) ; TODO: Why does this require params but login requires form-params?
        collected-by (:fieldworker-id params)
        parent (:parent params)
        name (:name params)
        ext-id (:ext-id params)
        type (:type params)
        location (Location. name ext-id type)]          
    (str (svc/create-location collected-by parent location))))


(defn create-individual [req]
  (let [params (:params req)
        collected-by (:fieldworker-id params)
        ext-id (:ext-id params)
        first-name (:first-name params)
        gender (:gender params)]
    (str (svc/create-individual collected-by ext-id first-name gender))))

(defn locations [uuid]
  (let [result (svc/locations uuid)]
    (json/write-str result)))
