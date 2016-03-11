(ns ohds.protocols)

(defprotocol Page
  (form [this ch state] "A form to render")
  (modal [this ch state] "A modal to render"))
