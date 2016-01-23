(ns ohds.individual-test
  (:require
   [ohds.individual.view :as view]
   [ohds.individual.messages :as m]
   [ohds.individual.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest individual-form-test
  (with-mounted-component
    (view/form nil {})
    (fn [c div]
      (is (not (found-in #"Submit" div)))))
  (with-mounted-component
    (view/form nil {:socialgroup {:extId "id" :name "name" :type "T"}})
    (fn [c div]
      (is (found-in #"Submit" div)))))

(deftest individual-test
  (testing "changing external id updates individual::extId"
    (let [msg (m/->ChangeExtId "extid")]
      (is (= {:individual {:extId "extid"}}
             (process-message msg {})))))

  (testing "changing first name updates individual::firstname"
    (let [msg (m/->ChangeFirstName "fname")]
      (is (= {:individual {:firstname "fname"}}
             (process-message msg {})))))

  (testing "changing gender updates app state"
    (let [msg (m/->ChangeGender "FEMALE")]
      (is (= {:individual {:gender "FEMALE"}}
             (process-message msg {})))))

  (testing "MoreResidents event toggles more-residents"
    (let [msg (m/->MoreResidents)]
      (is (= {:more-residents true}
             (process-message msg {})))
      (is (= {:more-residents true}
             (process-message msg {:more-residents false})))
      (is (= {:more-residents false}
             (process-message msg {:more-residents true})))))

  (testing "submitting individual calls backend correctly"
    (let [msg (m/->CreateIndividual)
          app {:individual {:extId "extid"
                            :firstname "fname"
                            :gender "FEMALE"}
               :fieldworker-id "fw-id"}]
      (with-redefs [http/post (fn [url body]
                                (is (= {:form-params {:fieldworker-id "fw-id"
                                                      :ext-id "extid"
                                                      :first-name "fname"
                                                      :gender "FEMALE"}}
                                       body))
                                {:status 200 :body "a-uuid"})
                    wrap (fn [m c] (m c))]
        (is (= #{(m/map->CreateIndividualResults {:status 200 :body "a-uuid"})}
               (watch-channels msg app))))))

  (testing "create individual results updates state correctly"
    (let [msg (m/map->CreateIndividualResults {:status 200 :body "a-uuid"})
          app {:individual {:extId "extid"
                            :firstname "fname"
                            :gender "FEMALE"}
               :fieldworker-id "fw-id"}

          expected {:individual {:firstname "fname"
                                 :extId "extid"
                                 :gender "FEMALE"
                                 :uuid "a-uuid"}
                    :fieldworker-id "fw-id"
                    :page :relationships
                    :individuals [{:extId "extid", :firstname "fname", :gender "FEMALE", :uuid "a-uuid"}]
                    }]
      (is (= expected
             (process-message msg app)))
      (is (= :individual
             (:page (process-message msg (assoc app :more-residents true))))))))
