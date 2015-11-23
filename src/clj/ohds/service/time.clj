(ns ohds.service.time
  (:import (java.time LocalDateTime)))

(defn now []
  (str (LocalDateTime/now) "Z"))
