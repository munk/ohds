(ns ohds.socialgroup-test
  (:require
   [ohds.socialgroup.view :as view]
   [ohds.socialgroup.messages :as m]
   [ohds.socialgroup.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(deftest socialgroup-test
  (testing "changing external id updates app state"
    (let [msg (m/->ChangeExtId "extid")]
      (is (= {:socialgroup {:extId "extid"}})
          (process-message msg {}))))
  (testing "changing group name updates app state"
    (let [msg (m/->ChangeGroupName "gname")]
      (is (= {:socialgroup {:name "gname"}}
             (process-message msg {})))))
  (testing "changing group type updates app state"
    (let [msg (m/->ChangeGroupType "COHORT")]
      (is (= {:socialgroup {:type "COHORT"}}
             (process-message msg {})))))
  (testing "submitting socialgroup calls backend correctly"
    (let [msg (m/->SubmitSocialGroup)
          app {:fieldworker-id "fw-id"
               :socialgroup {:name "gname"
                             :extId "extId"
                             :type "COHORT"}}]
      (with-redefs [http/post (fn [url body]
                                (is (= {:form-params {:fieldworker-id "fw-id"
                                                      :ext-id "extId"
                                                      :group-name "gname"
                                                      :group-type "COHORT"}}
                                     body))
                                {:status 200
                                 :body "a-uuid"})
                    wrap (fn [m c] (m c))]
        (is (= #{(m/map->CreateSocialGroupResults {:status 200 :body "a-uuid"})}
               (watch-channels msg app)))))))
