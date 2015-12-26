(ns ohds.login.view
  (:require
   [ohds.login.messages :as m]
   [ohds.login.processing]
   [schema.core :as s :include-macros true]
   [petrol.core :refer [send! send-value!]]))


(defn login [ui-channel app]
  [:div {:class "form-signin"}
   [:h2 {:class "form-signin-heading"}
    "Please log in"]
   [:div
    [:input {:id "username"
             :type :text
             :placeholder "Username"
             :on-change (send-value! ui-channel m/->ChangeUsername)}]]
   [:div
    [:input {:id "password"
             :type :password
             :placeholder "Password"
             :on-change (send-value! ui-channel m/->ChangePassword)}]]
   [:div
    [:button {:on-click (send! ui-channel (m/->FieldworkerLogin))}
     "Login"]]])
