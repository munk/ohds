(ns ohds.login.backend
  (:require
    [schema.core :as s]
    [cljs-http.client :as http]
    [petrol.core :as petrol]
    [ohds.messages :as m]))


(defn login [{:keys [admin?] :as user}]
  (println admin? user)
  (if admin?
    (petrol/wrap m/map->AdminLoginResults
                 (http/post "/api/v1/adminLogin" {:form-params user}))
    (petrol/wrap m/map->LoginResults
                 (http/post "/api/v1/login" {:form-params user}))))
