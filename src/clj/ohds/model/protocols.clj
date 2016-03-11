(ns ohds.model.protocols)

(defprotocol CRUD
  (create! [this])
  (read [this])
  (update! [this])
  (delete! [this])
  (search [this]))

