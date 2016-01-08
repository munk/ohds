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
          app {:page :test :mode :test
               :hierarchy-level-count 0
               :hierarchies ["ROOT"]}
          expected {:page :location :mode :census :hierarchy-level-count 0 :hierarchies ["ROOT"]}
          actual (process-message msg app)]
      (is (= expected actual))))

  (testing "start census does not update if levels are unselected"
    (let [msg (m/->StartCensus)
          app {:hierarchy-level-count 3
               :hierarchies ["ROOT" "1-0-0" "1-2-0" ""]}]
      
      (is (= "Please select all hierarchies"
             (:errors (process-message msg app))))))

  (testing "start visit updates app with new page and visit mode"
    (let [msg (m/->StartVisit)
          app {:page :test :mode :test :hierarchies ["h0" "h1" "a-uuid"]}
          expected {:hierarchy "a-uuid" :hierarchies ["h0" "h1" "a-uuid"]
                    :page :location :mode :visit}
          actual (process-message msg app)]
      (is (= expected actual)))))
