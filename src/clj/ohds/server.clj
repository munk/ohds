(ns ohds.server
  (:require [clojure.java.io :as io]
            [ohds.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.data.json :as json]
            [ohds.service.login :as login]
            [ohds.service.location-hierarchy :as hier]
            [ohds.service.location :as loc])
  (:gen-class))

(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (POST "/api/v1/login" req
        (let [params (:form-params req)
              username (get params "username")
              password (get params "password")
              result (login/login username password)]
          (if (nil? result)
            {:status 401
             :headers {}
             :body "Bad username or password"}
            (str result))))
  
  (GET "/api/v1/locationHierarchy" req
       (json/write-str (hier/get-all)))
  
  (POST "/api/v1/locations" req
        (str (loc/create-location req nil nil)))
  
  (GET "/*" req (page)))

(def http-handler
  (if is-dev?
    (reload/wrap-reload (wrap-defaults #'routes api-defaults))
    (wrap-defaults routes api-defaults)))

(defn run-web-server [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (println (format "Starting web server on port %d." port))
    (run-jetty http-handler {:port port :join? false})))

(defn run-auto-reload [& [port]]
  (auto-reload *ns*)
  (start-figwheel))

(defn run [& [port]]
  (when is-dev?
    (run-auto-reload))
  (run-web-server port))

(defn -main [& [port]]
  (run port))
