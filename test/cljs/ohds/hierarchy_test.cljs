(ns ohds.hierarchy-test
  (:require
   [ohds.hierarchy.view :as view]
   [ohds.hierarchy.messages :as m]
   [ohds.hierarchy.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in mock-wrap] :as fw]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest hierarchy-form-test
  (testing "No hierarchies displays error message"
    (with-mounted-component (view/form nil {:hierarchy-level-count 0})
      (fn [c div]
        (is (found-in #"No Hierarchies found! Check with your supervisor to see if the project is set up correctly." div)))))

  (testing "Select is rendered for each location hierarchy except UNKNOWN_STATUS"
    (with-mounted-component (view/form nil {:hierarchy-level-count 2
                                           :hierarchy-levels [{:uuid "hiera-0"}
                                                              {:uuid "hiera-1"}
                                                              {:uuid "hiera-9" :name "UNKNOWN_STATUS"}]})
      (fn [c div]
        (is (found-in #"select id=\"hiera-0\"" div))
        (is (found-in #"select id=\"hiera-1\"" div))
        (is (not (found-in #"select id=\"hiera-9\"" div)))))))

(deftest select-hierarchy-test
  (testing "changing level select updates app with selected level"
    (let [msg (m/->ChangeLevelSelect 2 "lvl-0-0-1" "a-uuid")
          app {:hierarchies ["h0" "h1" "h2"]}
          expected {:hierarchies ["h0" "h1" "a-uuid"]}
          actual (process-message msg app)]
      (is (= (:hierarchies expected) (:hierarchies actual)))))

  (testing "select box only populated if previous select was chosen"
    (let [state
          {:hierarchy-level-count 2
           :hierarchy-levels [{:uuid "h-0" :keyIdentifier 1}
                              {:uuid "h-1" :keyIdentifier 2}
                              {:uuid "h-9" :keyIdentifier 9
                               :name "UNKNOWN_STATUS"}]
           :hierarchies ["HIERARCHY_ROOT" "" ""]
           :location-hierarchies [{:parent {:uuid "h-0"} :level {:uuid "h-0"}
                                   :uuid "h-0-loc" :name "h-0-loc"}
                                  {:parent {:uuid "h-1"} :level {:uuid "h-1"}
                                   :uuid "h-1-loc" :name "h-1-loc"}]}]

      (with-mounted-component
        (view/form nil (assoc state
                              :hierarchies ["HIERARCHY_ROOT" "h-0" ""]))
        (fn [c div]
          (is (found-in #"h-0-loc" div))
          (is (not (found-in #"h-1-loc" div)))))

      (with-mounted-component
        (view/form nil (assoc state
                              :hierarchies ["HIERARCHY_ROOT" "h-0" "h-1"]))
        (fn [c div]
          (is (found-in #"h-0-loc" div))
          (is (found-in #"h-1-loc" div))))))

  (testing "start census updates app with new page and census mode"
    (let [msg (m/->StartCensus)
          app {:page :test :mode :test
               :hierarchy-level-count 0
               :hierarchies ["ROOT"]}
          expected {:page :location :mode :census
                    :hierarchy-level-count 0 :hierarchies ["ROOT"]}
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
                    :page :location-select :mode :visit}
          actual (process-message msg app)]
      (is (= expected actual)))))
