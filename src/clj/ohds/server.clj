(ns ohds.server
  (:require [clojure.java.io :as io]
            [ohds.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET POST PUT defroutes contex]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [org.httpkit.client :as http]
            [ohds.controller :as ctrl])
  (:gen-class))

(def config (edn/read-string (slurp "application.edn")))

(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})
  (context "/api/v1" req
    (POST "/login" {{:keys [username password]} :params}
      (ctrl/login username password))
    (POST "/adminLogin" req (ctrl/admin-login req))

    (context "/locations" []
        (GET "/" [uuid] (ctrl/locations "HIERARCHY_ROOT"))
      (GET "/:uuid" [uuid] (ctrl/locations uuid))
      (POST "/" req (ctrl/create-location req)))

           ;;; Users
    (context "/fieldworker" []
      (GET "/" []

        )
      (POST "/" []
        ))
    (context "/user" []
      (GET "/" [])
      (POST "/" []))
           ;;; Project
    (context "/project-code" []
        (GET "/" [])
      (POST "/" []))
           ;;; Entities
    (context "/location-hierarchy" []
      (GET "/" [])
      (POST "/" []))
    (context "/location-hierarchy-levels" []
      (GET "/" [])
      (POST "/" []))
    (context "/location" []
      (GET "/" [])
      (POST "/" []))
    (context "/individual" []
      (GET "/" [])
      (POST "/" []))
    (context "/social-group" []
      (GET "/" [])
      (POST "/" []))
           ;;; Relations
    (context "/membership" []
      (GET "/" [])
      (POST "/" []))
    (context "/residency" []
      (GET "/" [])
      (POST "/" []))
    (context "/relationship" []
      (GET "/" [])
      (POST "/" []))
           ;;; Events
    (context "/visit" []
      (GET "/" [])
      (POST "/" []))
    (context "/pregnancy" []
      (context "/observation" []
        (GET "/" [])
        (POST "/" []))
      (context "/outcome" []
        (GET "/" [])
        (POST "/" [])))
    (context "/migration" []
      (context "/in" []
        (GET "/" [])
        (POST "/" []))
      (context "/out" []
        (GET "/" [])
        (POST "/" [])))

    (POST "/socialgroups" req (ctrl/create-social-group req))
    (POST "/individuals" req (ctrl/create-individual req))
    (POST "/relationships" req (ctrl/create-relationship req))
    (POST "/residencies" req (ctrl/create-residency req))
    (POST "/memberships" req (ctrl/create-membership req))

    (POST "/visit" req (ctrl/start-visit req))
    (POST "/pregnancyObservation" req "not implemented")
    (POST "/pregnancyResult" req "not impmlented")
    (POST "/pregnancyOutcome" req "not implemented")
    (POST "/inMigration" req "not implemented")
    (POST "/outMigration" req "not implemented")
    (POST "/death" req "not implemented")

    (GET "/projectCodes" req "not implemented")
    (GET "/user" req "not implemented")
    (GET "/fieldworker" req "not implemented")

    (PUT "/entity/audit" req "not implemented")
    (GET "/entity" req "not implemented")
    (POST "/entity" req "not implemented")

    (GET "/locationHierarchy" req (ctrl/get-location-hierarchies))
    (GET "/locationHierarchyLevels" req (ctrl/get-location-hierarchy-levels))

    (GET "/individuals-by-location/:uuid" [uuid] (ctrl/individuals-by-location uuid)))
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
