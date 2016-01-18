(ns ohds.pregnancy-observation.messages)

(defrecord ChangeExpectedDeliveryDate [date])
(defrecord ChangePregnancyDate [date])
(defrecord Submit [])
(defrecord Results [body])
(defrecord SubmitPregnancyResult [body])
