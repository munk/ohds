(ns ohds.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [reagent.core :as reagent :refer [atom]]
            [schema.core :as s :include-macros true]
            [petrol.core :as petrol]
            [ohds.components :as c]
            [ohds.pages :as p]
            [ohds.views :as views]
            [ohds.service :as svc]
            [ohds.processing]
            [ohds.event-handler :as e]))

(def initial-state
  {:page :login
   :errors "Ooops"
   :user {:username ""
          :password ""}
   :fieldworker-id "a5ba318f-1353-4d1e-a3d3-beb9d936c915"
   :location-id "53f9eb9f-2903-409b-b0c4-4f555cc9583a"
   })

(def app (atom initial-state))


(def loc-hiera-url "/api/v1/locationHierarchy")
(def locations-url "/api/v1/locations")
(def individuals-url "/api/v1/individuals")

(def json-reader (t/reader :json))





(defn location! [loc-id name parent fw-id loctype]
  (->> {:fieldworker-id fw-id
        :parent parent
        :name name
        :ext-id loc-id
        :type loctype}
       (svc/post locations-url :location-id :individual app)))

(defn individual! [fw-id ind-id first-name gender]
  (->> {:fieldworker-d fw-id
        :ext-id ind-id
        :first-name first-name
        :gender gender}
       (svc/post individuals-url :individual-id :individual app)));;;TODO: should refresh the page

(defn location-hierarchy [as a]
  (go (let [result (->> (http/get loc-hiera-url)
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



(defn render-fn
  [ui-channel app]
  (reagent/render-component [views/root-component ui-channel app]
                            js/document.body))


(defn main []  
  (enable-console-print!)
  (petrol/start-message-loop! app render-fn))
