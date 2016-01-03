(ns ohds.server-test
  (:require
   [ohds.server :refer :all])
  (:use expectations))

(defn request [resource app method & params]
  (app {:request-method method :uri resource :form-params (first params)}))

(expect 401 (:status (request "/api/v1/login" routes :post
                              {"username" "fieldworker"
                               "password" "badpassword"})))

(expect 200 (:status (request "/api/v1/login" routes :post
                              {"username" "fieldworker"
                               "password" "password"})))

(expect AssertionError (:status (request "/api/v1/login" routes :post
                              {"username" nil
                               "password" "badpassword"})))

(expect 200 (:status (request "/api/v1/locationHierarchy" routes :get)))

(expect 200 (:status (request "/api/v1/locations/1" routes :get)))

(expect 200 (:status (request "/api/v1/locations/" routes :get)))

(expect 200 (:status (request "/api/v1/locations" routes :post {})))

(expect 400 (:status (request "/api/v1/individuals" routes :post {})))
