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
