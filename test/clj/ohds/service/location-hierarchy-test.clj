(ns ohds.service.location-hierarchy-test
  (:use org.httpkit.fake)
  (:require
   [ohds.service.location-hierarchy :as client]
   [clojure.test :refer :all]))

(def mock-location-hierarchy-response
  (str
   "[{\"uuid\": \"efe97b1b-4aa3-4aa5-b9ee-94f901bb4bf1\","
    "\"extId\": \"hierarchy-0-2-10\","
    "\"name\": \"hierarchy-0-2-10\","
    "\"parent\": {"
               "\"uuid\": \"d8c52339-b5c6-4ac6-ad02-fe0191d31501\""
               "},"
    "\"level\": {"
              "\"uuid\": \"25113a7d-ae4b-4fdc-bf2f-8dc179696a5e\""
              "}"
    "}]"))

(deftest location-hierarchies
  (is (= [{:uuid "efe97b1b-4aa3-4aa5-b9ee-94f901bb4bf1"
           :extId "hierarchy-0-2-10"
           :name "hierarchy-0-2-10"
           :parent {:uuid "d8c52339-b5c6-4ac6-ad02-fe0191d31501"}
           :level {:uuid "25113a7d-ae4b-4fdc-bf2f-8dc179696a5e"}}]
         (with-fake-http
           ["http://localhost:8080/locationHierarchies/bulk.json"
            mock-location-hierarchy-response]
           (client/get-all-location-hierarchies)))))
