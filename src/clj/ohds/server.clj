(ns ohds.server
  (:require [clojure.java.io :as io]
            [ohds.dev :refer [is-dev? inject-devmode-html browser-repl start-figwheel]]
            [compojure.core :refer [GET POST PUT defroutes]]
            [compojure.route :refer [resources]]
            [net.cgrand.enlive-html :refer [deftemplate]]
            [net.cgrand.reload :refer [auto-reload]]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [environ.core :refer [env]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ohds.controller :as ctrl])
  (:gen-class))


(deftemplate page (io/resource "index.html") []
  [:body] (if is-dev? inject-devmode-html identity))

(defroutes routes
  (resources "/")
  (resources "/react" {:root "react"})

  (POST "/api/v1/login" req (ctrl/login req))
  (POST "/api/v1/adminLogin" req (ctrl/admin-login req))
  (POST "/api/v1/locations" req (ctrl/create-location req))
  (POST "/api/v1/socialgroups" req (ctrl/create-social-group req))
  (POST "/api/v1/individuals" req (ctrl/create-individual req))
  (POST "/api/v1/relationships" req (ctrl/create-relationship req))
  (POST "/api/v1/residencies" req (ctrl/create-residency req))
  (POST "/api/v1/memberships" req (ctrl/create-membership req))

  (POST "/api/v1/visit" req (ctrl/start-visit req))
  (POST "/api/v1/pregnancyObservation" req "not implemented")
  (POST "/api/v1/pregnancyResult" req "not impmlented")
  (POST "/api/v1/pregnancyOutcome" req "not implemented")
  (POST "/api/v1/inMigration" req "not implemented")
  (POST "/api/v1/outMigration" req "not implemented")
  (POST "/api/v1/death" req "not implemented")

  (GET "/api/v1/projectCodes" req "not implemented")
  (GET "/api/v1/user" req "not implemented")
  (GET "/api/v1/fieldworker" req "not implemented")

  (PUT "/api/v1/entity/audit" req "not implemented")
  (GET "/api/v1/entity" req "not implemented")
  (POST "/api/v1/entity" req "not implemented")

  (GET "/api/v1/locationHierarchy" req (ctrl/get-location-hierarchies))
  (GET "/api/v1/locationHierarchyLevels" req (ctrl/get-location-hierarchy-levels))

  (GET "/api/v1/locations/:uuid" [uuid] (ctrl/locations uuid))
  (GET "/api/v1/locations/" [uuid] (ctrl/locations "HIERARCHY_ROOT"))
  (GET "/api/v1/individuals-by-location/:uuid" [uuid] (ctrl/individuals-by-location uuid))
  (GET "/*" req (page)))

(def http-handler
  (let [config (assoc api-defaults :params {:nested true
                                            :keywordize true})]
    (if is-dev?
      (reload/wrap-reload (wrap-defaults #'routes config))
      (wrap-defaults routes config))))

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
