(ns ohds.framework
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [petrol.core :refer [process-message watch-channels wrap]]
   [reagent.core :as reagent]))

(declare mock-login)

#_(defn mock-post [status body]
  (fn [_ _]
    {:status status
     :body body}))

(defn mock-wrap [m c]
  (m c))

(def isClient (not (nil? (try (.-document js/window)
                              (catch js/Object e nil)))))

(def rflush reagent/flush)

(defn add-test-div [name]
  (let [doc     js/document
        body    (.-body js/document)
        div     (.createElement doc "div")]
    (.appendChild body div)
    div))

(defn with-mounted-component [comp f]
  (when isClient
    (let [div (add-test-div "_testreagent")]
      (let [comp (reagent/render-component comp div #(f comp div))]
        (reagent/unmount-component-at-node div)
        (reagent/flush)
        (.removeChild (.-body js/document) div)))))


(defn found-in [re div]
  (let [res (.-innerHTML div)]
    (if (re-find re res)
      true
      (do; (println "Not found: " res)
          false))))

(def mock-location-hierarchy-response
  (str
   "[{\"uuid\": \"efe97b1b-4aa3-4aa5-b9ee-94f901bb4bf1\","
   "\"extId\": \"hierarchy-0-2-10\","
   "\"name\": \"hierarchy-0-2-10\","
   "\"parent\": {"
   "\"uuid\": \"d8c52339-b5c6-4ac6-ad02-fe0191d31501\""
   "},"
   "\"level\": {"
   "\"uuid\": \"25113a7d-ae4b-4fdc-bf2f-8dc179696a5e\""
   "}"
   "}]"))


(defn mock-get [url & args]
  (go
    (case url
      "api/v1/locationHierarchy" {:status 200 :body mock-location-hierarchy-response})))

(defn mock-post [url & args]
  (go
    (case url
      "/api/v1/login" (mock-login args)
      {:status 404 :body "invalid url"})))

(defn elem [id]
  (.getElementById js/document id))

(defn mock-login [args]
  (let [{username :username password :password} (:form-params args)]
    (if (and
         (= username "Username")
         (= password "Password"))
      {:status 200 :body "abc-123"}
      {:status 401 :body "bad login"})))
