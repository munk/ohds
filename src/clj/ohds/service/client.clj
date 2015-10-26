(ns ohds.service.client)

(defn login [username password]
  (let [exu "fieldworker"
        exp "password"]    
    (and (= username exu)
         (= password exp))))
