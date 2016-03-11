(ns ohds.login
  (:require-macros [ohds.macros :refer [defwidget]])
  (:require [petrol.core :refer [wrap Message EventSource]]
            [cljs-http.client :as http]
            [clojure.string :refer [blank?]]
            [petrol.core :as petrol]
            [ohds.processing :refer [state! assoc-response]]
            [ohds.messages :as om]
            [ohds.components :as c]
            [ohds.domain :as d]
            [ohds.backend :as backend]
            [ohds.model :refer [valid-login?]]))

(declare submit-login
         hierarchy-levels)

(def state-key :user)

(defwidget ChangeUsername [username] state-key)
(defwidget ChangePassword [password] state-key)

(defrecord FieldworkerLogin []
  EventSource
  (watch-channels [_ {:keys [user admin?]}]
    (submit-login (assoc user :admin? admin?))))

(defrecord ToggleAdmin []
  Message
  (process-message [_ app]
    (update-in app [:admin?] not)))

(defrecord LoginResult []
  Message
  (process-message [response app]
    (let [{status :status
           body :body} response]
      (println "ohds.processing/LoginResults" response app)
      (assoc-response status body
                      #(assoc app :fieldworker-id body)
                      #(assoc app :errors "Bad username or password"))))
  EventSource
  (watch-channels [_ _]
    #{(hierarchy-levels)}))

(defrecord HierarchyLevelResult []
  Message
  (process-message [msg state]
    (let [{:keys [status body]} msg]
      (assoc state :hierarchy-count body
             :hierarchy-index 0
             :page :hierarchy))))

(defn do-login [{:keys [username password admin?] :as user}]
  (let [result (http/post "http://localhost:3000/system/session"
                          {:json-params
                           {:username username
                            :password password}})]
    (if admin?
      (petrol/wrap om/map->AdminLoginResults result)
      (petrol/wrap map->LoginResult result))))

(defn submit-login [{:keys [username password admin?]}]
  {:pre [(not (blank? username))
         (not (blank? password))]
   :post [(set? %)]}
  (let [login-request (d/->LoginRequest username password admin?)]
    #{(do-login login-request)}))

(defn hierarchy-levels []
  (let [result (http/get "http://localhost:3000/system/hierarchy-levels")]
    (petrol/wrap map->HierarchyLevelResult result)))

(defn login [ch state]
  [:span
   [:legend "Login"]
   (c/text-input ch ->ChangeUsername "username" "Username" state)
   (c/password-input ch ->ChangePassword "password" "Password")
   (c/checkbox "administrator" "Administrator" ch (->ToggleAdmin))

   (when (valid-login? state)
     (c/submit ch ->FieldworkerLogin "Login"))])
