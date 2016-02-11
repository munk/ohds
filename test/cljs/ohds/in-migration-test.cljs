(ns ohds.in-migration-test
  (:require [ohds.in-migration.view :as inm]
            [petrol.core :refer [process-message watch-channels]]
            [cljs-http.client :as http]
            [cljs.test :refer-macros [deftest testing is]]))

(deftest modal-state
  (testing ":in-migration cleared after successful submit"
    (let [response {:status 200 :body "a-uuid"}
          state {:in-migration {:some :data}}
          msg (inm/map->SubmitResponse response)]
      (is (= {:in-migration {}}
             (process-message msg state)))))

  (testing "Submitting in-migration POSTs to /api/v1/inMigration \\
            with :in-migration and triggers SubmitResponse message"
    (let [called (atom {:http-post false})]
      (with-redefs [http/post (fn [url body]
                                (is (= url "/api/v1/inMigration"))
                                (is (= body {:form-params
                                             {:first-name "some-individual"
                                              :external-id "individual-extid"
                                              :gender "gender"
                                              :residency "some-residency"
                                              :visit "some-visit"
                                              :origin "origin"
                                              :migration-date "today"
                                              :migration-type "moved"
                                              :fieldworker-id "some-fieldworker"}}))
                                (swap! called assoc :http-post true))]
        (watch-channels (inm/->Submit) {:fieldworker-id "some-fieldworker"
                                        :current-visit "some-visit"
                                        :current-location "some-residency"
                                        :in-migration {:migration-date "today"
                                                       :migration-type "moved"
                                                       :origin "origin"
                                                       :first-name "some-individual"
                                                       :external-id "individual-extid"
                                                       :gender "gender"}})
        (is (:http-post @called))))))
