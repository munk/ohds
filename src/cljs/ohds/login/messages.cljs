(ns ohds.login.messages)

(defrecord ChangeUsername [username])
(defrecord ChangePassword [password])
(defrecord AdminLogin [])
(defrecord FieldworkerLogin [])
(defrecord LoginResults [body])
(defrecord ToggleAdmin [])
