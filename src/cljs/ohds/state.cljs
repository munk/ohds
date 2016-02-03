(ns ohds.state)

(defn set-page [s page]
  (assoc s :page page))

(defn page [s]
  (get s :page))

(defn set-fieldworker [s fw]
  (assoc s :fieldworker-id fw))

(defn fieldworker [s]
  (get s :fieldworker-id))

(defn set-hierarchies [s hierarchies]
  (assoc s :location-hierarchies hierarchies))

(defn unset-errors [s]
  (assoc s :errors nil))

(defn set-errors [s errors]
  (assoc s :errors errors))

(defn set-locations [s locations]
  (assoc s :locations locations))

(defn set-hierarchy-level [s hierarchy-level]
  (assoc s :hierarchy-levels hierarchy-level))

(defn set-hierarchy [s hierarchy]
  (assoc s :hierarchy hierarchy))
