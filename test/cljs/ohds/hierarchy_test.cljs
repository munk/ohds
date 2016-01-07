(ns ohds.hierarchy-test
  (:require
   [ohds.hierarchy.view :as view]
   [ohds.hierarchy.messages :as m]
   [ohds.hierarchy.processing :as p]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))


(deftest select-hieararchy-test
  (testing "changing level select updates app with selected level"
    (let [msg (m/->ChangeLevelSelect 2 "lvl-0-0-1" "a-uuid")
          app {:hierarchies ["h0" "h1" "h2"]}
          expected {:hierarchies ["h0" "h1" "a-uuid"]}
          actual (process-message msg app)]
      (is (= expected actual))))
  (testing "start census updates app with new page and census mode"
    (let [msg (m/->StartCensus)
          app {:page :test :mode :test}
          expected {:page :location :mode :census}
          actual (process-message msg app)]
      (is (= expected actual))))
  (testing "start census does not update if levels are unselected"
    (let [msg (m/->StartCensus)]))
  (testing "start visit updates app with new page and visit mode"
    (let [msg (m/->StartVisit)
          app {:page :test :mode :test :hierarchies ["h0" "h1" "a-uuid"]}
          expected {:location-hierarchy "a-uuid" :hierarchies ["h0" "h1" "a-uuid"]
                    :page :location :mode :visit}
          actual (process-message msg app)]
      (is (= expected actual)))))
