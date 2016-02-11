(ns ohds.macros)

(defmacro defwidget [msg-type value app-key]
  `(defrecord ~msg-type [~@value]
     ~'petrol.core/Message
     (~'process-message [msg# app#]
      (let [state# (~app-key app#)]
        (dissoc
         (->>
          (merge state# msg#)
          (assoc app# ~app-key))
         :errors)))))


(defmacro defsubmit [msg-type url transform]
  `(defrecord ~msg-type []
     ~'petrol.core/EventSource
     (~'watch-channels [msg# app#]
      (let [request# (~transform app#)]
        (cljs-http.client/post url {:form-params request#})))))


(defmacro defhandler [msg-type app-key]
  `(defrecord ~msg-type [~'body]
     ~'petrol.core/Message
     (~'process-message [msg# app#]

      )))
