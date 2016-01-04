(ns ohds.login-test
  (:require  
   [ohds.login.view :as view]
   [ohds.login.messages :as m]
   [ohds.location.messages :as lm]
   [ohds.login.processing :as p]
   [ohds.processing :as op]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))


(defn mock-post [status body]
  (fn [_ _]
    {:status status
     :body body}))

(defn mock-wrap [m c]
  (m c))

(deftest login-test
  (testing "change username updates state with new username"
    (let [msg (m/->ChangeUsername "user")]
      (is (= {:user {:username "user"}}
             (process-message msg {})))))

  (testing "change password updates state with new password"
    (let [msg (m/->ChangePassword "pwd")]
      (is (= {:user {:password "pwd"}}
             (process-message msg {})))))

  (testing "submitting login updates fieldworker-id, page, and mode"
    (let [msg (m/map->LoginResults {:status 200 :body "some-uuid"})
          expected {:fieldworker-id "some-uuid"
                    :page :hierarchy
                    :mode :fieldworker-logged-in
                    :errors ""}]
      (is (= expected
             (process-message msg {})))))
  
  (testing "unsuccessful login "
    (let [msg (m/map->LoginResults {:status 400})
          expected {:errors "Bad username or password"}
          actual (process-message msg {})]
      (is (= expected actual))))

  (testing "fieldworker login calls backend correctly"
    (with-redefs [http/post (mock-post 200 "some-uuid-response")
                  wrap mock-wrap]
      (let [actual (watch-channels (m/->FieldworkerLogin) {:user {:username "foo"
                                                                  :password "pwd"}})
            expected #{(m/map->LoginResults {:body "some-uuid-response" :status 200})}]        
        (is (= actual expected)))))

  (testing "login results event triggers initial state from backend"
    (with-redefs [http/get (fn [url body]
                              (if (= url "/api/v1/locationHierarchyLevels")
                                {:status 200 :body "level-data"}
                                {:status 200 :body "hiera-data"}))                  
                  wrap mock-wrap]
      (let [actual (watch-channels (m/->LoginResults {}) {})
            expected #{(lm/map->HierarchyLevelResults {:status 200 :body "level-data"})
                       (lm/map->LocationHierarchyResults {:status 200 :body "hiera-data"})}]
        (is (= expected actual))))))
