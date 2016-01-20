(ns ohds.login.backend
  (:require
    [schema.core :as s]
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.messages :as m]))


(defn login [{:keys [admin?] :as user}]
  (let [url (if admin?
              "/api/v1/adminLogin"
              "/api/v1/login")]
    (petrol/wrap m/map->LoginResults
                 (http/post url {:form-params user}))))
