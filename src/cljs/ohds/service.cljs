(ns ohds.service
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn post [url store page state data]
  (go (let [result (->> {:form-params data}
                        (http/post url)
                        (<!))
            {status :status body :body} result]
        (case status
          200 (swap! state assoc store body :page page)))))
