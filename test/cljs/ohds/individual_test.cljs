(ns ohds.individual-test
  (:require
   [ohds.individual.view :as view]
   [ohds.individual.messages :as m]
   [ohds.individual.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest individual-test
  (testing "changing external id updates app state"
    (let [msg (m/->ChangeExtId "extid")]
      (is (= {:individual {:extId "extid"}})
          (process-message msg {}))))
  (testing "changing first name updates app state"
    (let [msg (m/->ChangeFirstName "fname")]
      (is (= {:individual {:firstname "fname"}})
          (process-message msg {}))))
  (testing "changing gender updates app state"
    (let [msg (m/->ChangeGender "FEMALE")]
      (is (= {:individual {:extId "FEMALE"}})
          (process-message msg {}))))
  (testing "submitting individual calls backend correctly"
    (is (= 0 1)))
  (testing "create individual results updates state correctly"
    (is (= 0 1))))
