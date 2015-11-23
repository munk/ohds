(ns ohds.service.individual
  (:require
   [org.httpkit.client :as http]
   [clojure.data.json :as json]
   [ohds.service.time :refer [now]]))

(def individual-url
  "/individuals")

(defn create-individual
  [collected-by])
