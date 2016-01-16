(ns ohds.login.backend
  (:require
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.messages :as m]))

(defn login [user admin?]
  (let [url (if admin?
              "/api/v1/adminLogin"
              "/api/v1/login")]
    (petrol/wrap m/map->LoginResults (http/post url {:form-params user}))))
