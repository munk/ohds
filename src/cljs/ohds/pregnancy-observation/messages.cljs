(ns ohds.pregnancy-observation.messages)

(defrecord ChangeExpectedDeliveryDate [delivery-date])
(defrecord ChangePregnancyDate [pregnancy-date])
(defrecord Submit [mother])
(defrecord Results [body])
(defrecord SubmitPregnancyResult [body])
