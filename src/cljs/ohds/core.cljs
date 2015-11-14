(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [ohds.forms :refer [location-form login-form]]))

(enable-console-print!)

(defonce app-state (atom {}))

(def login-url "/api/v1/login")
(def loc-hiera-url "/api/v1/locationHierarchy")
(def locations-url "/api/v1/locations")

(def json-reader (t/reader :json))


(defn get-val [owner key]
  (.-value (om/get-node owner key)))


(defn loc-hiera->option [lh]
  {:value (get lh "uuid")
   :label (get lh "extId")})


(defn set-root [form]
  (om/root
   form
   app-state
   {:target (. js/document (getElementById "app"))}))


(defn do-login [app owner]
  (go
    (let [result
          (->> {:form-params {:username (get-val owner "username")
                              :password (get-val owner "password")}}
              (http/post login-url)
              (<!)
              (:body)
              (= "true"))]
      (if result
        (let [loc-hiera-data (->> (http/get loc-hiera-url)
                                  (<!)
                                  (:body)
                                  (t/read json-reader))
              loc-hiera (map loc-hiera->option loc-hiera-data)]
          (swap! app-state assoc :fieldworker (get-val owner "username"))
          (println app-state)
          (set-root  (fn [app owner] (location-form app owner loc-hiera))))
        (println "failed to login")))))


(defn create-location [app owner]
  (go
    ))


(defn main []
  (set-root (fn [app owner]
              (login-form app owner #(do-login app owner)))))

