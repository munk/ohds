(ns ohds.users
  (:require-macros [ohds.macros :refer [defwidget]])
  (:require [ohds.components :as c]
            [ohds.processing :refer [assoc-response process-ok]]
            [cljs-http.client :as http]
            [petrol.core :refer [wrap Message EventSource]]))

(declare find-user)
(def state-key :admin-user)

(defwidget ChangeUserSearch [user-search] state-key)
(defwidget ChangeUsername [username] :active-user)
(defwidget ChangeFirstName [firstName] :active-user)
(defwidget ChangeLastName [lastName] :active-user)
(defwidget ChangePassword [password] :active-user)

(defrecord DoUserSearch []
  EventSource
  (watch-channels [msg app]
    #{(find-user (:user-search (state-key app)))}))

(defrecord AddUserModal [])

(defrecord UpdateUser [])

(defrecord UserSearchResults [body]
  Message
  (process-message [msg app]
    (let [{:keys [status body]} msg
          user (cljs.reader/read-string body)]
      (assoc app :active-user user))))

(defn find-user [username]
  (wrap map->UserSearchResults
        (http/get (str "/api/v1/search?entity=user&field=username&q=" username))))

(defn form [ch state]
  [:div
   [:legend "Users"]
   (c/text-input ch ->ChangeUserSearch "user-search" "Username" state)
   (c/submit ch ->DoUserSearch "Find User")

   (let [{:keys [uuid firstName lastName username] :as user}
         (:active-user state)]
     [:div
      [:hr]
      [:div
       [:div
        [:label {:for "username"} "Username"]
        (c/text-input ch ->ChangeUsername "username" username state)]
       [:div
        [:label {:for "firstName"} "First Name"]
        (c/text-input ch ->ChangeFirstName "firstName" firstName state)]
       [:div
        [:label {:for "lastName"} "Last Name"]
        (c/text-input ch ->ChangeLastName "lastName" lastName state)]
       [:div
        [:label {:for "password"} "Password"]
        (c/password-input ch ->ChangePassword "password" "password")]
       (c/submit ch ->UpdateUser "Submit")]])])
