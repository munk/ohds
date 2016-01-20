(ns ohds.login-test
  (:require
   [ohds.login.view :as view]
   [ohds.login.messages :as m]
   [ohds.messages :as om]
   [ohds.login.processing :as p]
   [ohds.processing :as op]
   [ohds.framework :refer [with-mounted-component found-in mock-wrap]
    :as fw]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))

(defn mock-post [status body]
  ;;;Why does this need to be in the local ns for with-redefs to use it??
  (fn [_ _]
    {:status status
     :body body}))

(deftest login-form-test
  (with-mounted-component (view/login nil {})
    (fn [c div]
      (is (found-in #"username" div))
      (is (found-in #"password" div))
      (is (not (found-in #"<button.*Login" div))))))

(deftest login-test
  (testing "change username updates state with new username"
    (let [msg (m/->ChangeUsername "user")]
      (is (= {:user {:username "user"}}
             (process-message msg {})))))

  (testing "change password updates state with new password"
    (let [msg (m/->ChangePassword "pwd")]
      (is (= {:user {:password "pwd"}}
             (process-message msg {})))))

  (testing "cannot submit login with blank credentials"
    (is (thrown? js/Object
                 (watch-channels (m/->FieldworkerLogin)
                                 {:user {:username ""
                                         :password ""}})))

    (let [msg (om/map->LoginResults {:status 401})
          no-user {:user {:username ""
                          :password "pwd"}}
          no-pswd {:user {:username "usr"
                          :password ""}}]
      (is (= {:user {:username ""
                     :password "pwd"}
              :errors "Bad username or password"}
             (process-message msg no-user)))
      (is (= {:user {:username "usr"
                     :password ""}
              :errors "Bad username or password"}
             (process-message msg no-pswd)))))

  (testing "submitting login updates fieldworker-id, page, and mode"
    (let [msg (om/map->LoginResults {:status 200 :body "some-uuid"})
          expected {:fieldworker-id "some-uuid"
                    :page :hierarchy
                    :mode :fieldworker-logged-in
                    :errors ""}]
      (is (= expected
             (process-message msg {})))))

  (testing "unsuccessful login"
    (let [msg (om/map->LoginResults {:status 400})
          expected {:errors "Bad username or password"}
          actual (process-message msg {})]
      (is (= expected actual))))

  (testing "fieldworker login calls backend correctly"
    (with-redefs [http/post (mock-post 200 "some-uuid-response")
                  wrap mock-wrap]
      (let [actual (watch-channels (m/->FieldworkerLogin) {:user {:username "foo"
                                                                  :password "pwd"}})
            expected #{(om/map->LoginResults {:body "some-uuid-response" :status 200})}]
        (is (= actual expected)))))

  (testing "login results event triggers initial state from backend"
    (let [level-response {:status 200 :body "level-data"}
          hiera-response {:status 200 :body "hiera-data"}]
        (with-redefs [http/get (fn [url body] ;;; TODO: Verify calls here
                                 (if (= url "/api/v1/locationHierarchyLevels")
                                   level-response
                                   hiera-response))
                      wrap mock-wrap]
          (let [actual (watch-channels (om/->LoginResults {}) {})
                expected #{(om/map->HierarchyLevelResults level-response)
                           (om/map->LocationHierarchyResults hiera-response)}]
            (is (= expected actual))))))
  (testing "hierarchy level results sets state correctly")
  (testing "location hierarchy sets state correctly"))
