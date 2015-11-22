(ns ohds.components)

(defn atom-input [value id]
  [:input {:type "text"
           :value @value
           :id id
           :class "form-control"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn atom-input-password [value id]
  [:input {:type "password"
           :value @value
           :id id
           :class "form-control"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn hamburger []
  [:button {:type "button"
            :class "navbar-toggle collapsed"
            :data-toggle "collapse"
            :data-target "#navbar"
            :aria-expanded "false" :aria-controls "navbar"}
   [:span {:class "sr-only"} "Toggle Nav"]
   [:span {:class "icon-bar"}]
   [:span {:class "icon-bar"}]
   [:span {:class "icon-bar"}]])

(defn nav-bar []
  [:div {:id "navbar" :class "navbar-collapse collapse" :aria-expanded "false"}
   [:ul {:class "nav navbar-nav"}
    [:li
     [:a {:href "#"} "Home"]]
    [:li
     [:a {:href "#"} "Logout"]]]])

(defn top []
  [:nav {:class "navbar navbar-inverse navbar-fixed-top"}
   [:div {:class "container"}
    [:div {:class "navbar-header"}
     [hamburger]
     [:span {:class "navbar-brand"} "OpenHDS"]]
    [nav-bar]
    ]])
