(ns ohds.macros)

(defmacro defwidget [msg-type value app-key]
  `(defrecord ~msg-type [~@value]
     ~'Message
     (~'process-message [msg# app#]
      (let [state# (~app-key app#)]
        (dissoc
         (->>
          (merge state# msg#)
          (assoc app# ~app-key))
         :errors)))))
