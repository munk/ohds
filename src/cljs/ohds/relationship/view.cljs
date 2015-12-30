(ns ohds.relationship.view)

(defn modal [ch state]
  [:div.modal.fade {:role "dialog"
                    :id "myModal"}
   [:div.modal-dialog {:role "document"}
    [:div.modal-content
     [:div.modal-header
      [:button.close "Close"]]
     [:div.modal-title "Title"]
     [:div.modal-body "Body"]]]])
