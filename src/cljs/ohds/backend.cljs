(ns ohds.backend
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn fieldworker-uuid [username password]  
  (go (let [result (->> {:form-params {:username @username :password @password}}
                        (http/post "/api/v1/login")
                        (<!))
            {status :status uuid :body} result]
        (case status
          401 nil
          200 uuid))))

(defn login! [username password state]
  (let [result (fieldworker-uuid username password)]
    (if (nil? result)
      (swap! state assoc :page :bad-login :fieldworker-id nil))))
