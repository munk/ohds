(ns ohds.components
  (:require
   [petrol.core :refer [send! send-value!]]))

(defn has-data? [state key]
  (pos? (count (key state))))

(defn form-group [inner]
  [:div.row
   [:div.form-group
    inner]])

(defn const-text
  [id val]
  (form-group
   [:input.form-control
    {:id id
     :type :text
     :value val}]))

(defn text-input
  ([ch msg id placeholder app]
   (form-group
    [:input.form-control
     {:id id
      :type :text
      :placeholder placeholder
      :onChange (send-value! ch msg)}]))
  ([ch msg val id placeholder app]
   (form-group
    [:input.form-control
     {:id id
      :type :text
      :value val
      :placeholder placeholder
      :on-change (send-value! ch msg)}])))

(defn password-input [ch msg id placeholder]
  (form-group
   [:input.form-control
    {:id id
     :type :password
     :placeholder placeholder
     :on-change (send-value! ch msg)}]))

(defn date-input [ch msg id]
  (form-group
   [:input.form-control
    {:id id
     :type :date
     :on-change (send-value! ch msg)}]))

(defn map->option [m v n]
  [(v m) (n m)])


(defn map->option'uuid [m]
  (map->option m :uuid :name))


(defn option
  [opt]
  (let [[value name] opt]
    [:option {:value value :key value} name]))


(defn select [ch msg id val options & default-opt]
  (let [select-attr
        {:key id
         :id id
         :on-change (send-value! ch msg)}
        opts (map option options)]
    (form-group
     [:select.form-control select-attr default-opt opts])))

(defn inline-select [ch msg id val options & default-opt]
  (let [select-attr
        {:id id
         :data-width "100%"
         :on-change (send-value! ch msg)}
        opts (map option options)]
    [:select select-attr default-opt opts]))

(defn submit [ch msg txt]
  (form-group
   [:button.btn.btn-lg.btn-primary.btn-block {:id (str "submit" txt) :on-click (send! ch (msg))} txt]))

(defn modal-toggle [target txt]
  (form-group
   [:button.btn.btn-lg.btn-primary.btn-block {:data-toggle "modal"
                                              :data-target target} txt]))

(defn modal [id header body ch submit-msg]
  [:div.modal.fade {:role "dialog"
                    :id id}
   [:div.modal-dialog {:role "document"}
    [:div.modal-content
     [:div.modal-header
      header
      [:button.close {:data-dismiss "modal" :aria-label "Close"} "×"]]
     [:div.container
      [:div.col-xs-4
       [:div.modal-title]
       [:div.modal-body
        body
        [:div.modal-footer
         [:button.btn.btn-default {:on-click (send! ch submit-msg) :data-dismiss "modal"} "Save"]
         [:button.btn.btn-primary {:data-dismiss "modal" :aria-label "Close"} "Cancel"]]]]]]]])

(defn checkbox [id label ch msg]
  [:div.form-group
   [:input {:id id :type :checkbox :autoComplete "off"
            :onChange (send! ch msg)}]
   [:div.btn-group
    [:label.btn.btn-default {:for id}
     [:span.glyphicon.glyphicon-ok]
     [:span " "]]
    [:label.btn.btn-default {:for id} label]]])
