(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [reagent.core :as reagent :refer [atom]]
            [ohds.components :as c]
            [ohds.pages :as p]
            [ohds.service :as svc]))

(enable-console-print!)

(def app-state (atom
                {:page :select-location
                 :fieldworker-id "a5ba318f-1353-4d1e-a3d3-beb9d936c915"
                 :location-id "53f9eb9f-2903-409b-b0c4-4f555cc9583a"
                 }))

(def login-url "/api/v1/login")
(def loc-hiera-url "/api/v1/locationHierarchy")
(def locations-url "/api/v1/locations")
(def individuals-url "/api/v1/individuals")

(def json-reader (t/reader :json))


(defn login! [username password]  
  (go (let [result (->> {:form-params {:username @username :password @password}}
                        (http/post "/api/v1/login")
                        (<!))
            {status :status body :body} result]
        (case status
          401 (swap! app-state assoc :page :bad-login :fieldworker-id nil)
          200 (swap! app-state assoc :page :location :fieldworker-id body)))))

(defn location! [loc-id name parent fw-id loctype]
  (->> {:fieldworker-id fw-id
        :parent parent
        :name name
        :ext-id loc-id
        :type loctype}
       (svc/post locations-url :location-id :individual app-state)))

(defn individual! [fw-id ind-id first-name gender]
  (->> {:fieldworker-d fw-id
        :ext-id ind-id
        :first-name first-name
        :gender gender}
       (svc/post individuals-url :individual-id :individual app-state)));;;TODO: should refresh the page 

(defn location-hierarchy [as a]
  (go (let [result (->> (http/get "/api/v1/locationHierarchy")
                        (<!)
                        (:body)
                        (t/read json-reader)
                        (map c/location-hierarchy-option))]
        (reset! as result)
        (reset! a (first result)))))

(defn location [as a uuid]
  (go (let [result (->>
                    (str "/api/v1/locations/" uuid)
                    (http/get)
                    (<!)
                    (:body)
                    ((fn [x] (println x uuid) x))
                    (t/read json-reader)
                    (map c/location-option))]
        (println "result" result)
        (reset! as result)
        (reset! a (first result)))))

(defn root-component []
  (println @app-state)  
  [:div {:class "container"}
   [:div {:class "row"} [c/top app-state]]
   [:div {:style {:padding "20px"}}]
   [:div 
    (case (:page @app-state)
      :login [p/login-page login! app-state]
      :bad-login [p/bad-login login! app-state]
      :location [p/location-page @app-state location-hierarchy location!]
      :individual [p/individual-page @app-state individual!]
      :select-location [p/select-location-page @app-state location-hierarchy location nil]
      :update-location [p/update-location-page @app-state location-hierarchy location!])]])

(defn main []
  (reagent/render-component [root-component]
                            (.getElementById js/document "app")))

