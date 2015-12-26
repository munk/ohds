(ns ohds.macros)

(defmacro state-message [msg-type app-key]
   `(extend-protocol
     Message
     ~msg-type
     (process-message [msg app]
        (let [state (app-key app)]
           (->>
             (merge state msg)
             (assoc app app-key))))))
