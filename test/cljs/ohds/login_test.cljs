(ns ohds.login-test
  (:require  
   [ohds.login.view :as view]
   [ohds.login.messages :as m]
   [ohds.login.processing :as p]
   [ohds.processing :as op]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))


(deftest login-test
  (testing "change username updates state with new username"
    (let [msg (m/->ChangeUsername "user")
          app {:user {:username "not-a-user"}}
          expected {:user {:username "user"}}]
      (is (= expected
             (process-message msg app)))))

  (testing "change password updates state with new password"
    (let [msg (m/->ChangePassword "pwd")
          app {:user {:password "not-a-password"}}
          expected {:user {:password "pwd"}}]
      (is (= expected
             (process-message msg app)))))

  (testing "submitting login updates fieldworker-id, page, and mode"
    (let [response {:status 200
                       :body "some-uuid"}
          msg (m/map->LoginResults response)
          app {:fieldworker-id nil
               :page :login
               :mode :logged-out
               :errors "OH NO!"}
          expected {:fieldworker-id "some-uuid"
                    :page :hierarchy
                    :mode :fieldworker-logged-in
                    :errors ""}]
      (is (= expected
             (process-message msg app)))))
  
  (testing "unsuccessful login "
    (let [msg (m/map->LoginResults {:status 400})
          app {:errors ""}
          expected {:errors "Bad username or password"}
          actual (process-message msg app)]
      (is (= expected actual))))

  (testing "fieldworker login calls backend correctly"
    (with-redefs [http/post (fn [url parmas] {:status 200 :body "some-uuid-response"})
                  wrap (fn [msg ch] (msg ch))]
      (let [actual (watch-channels (m/->FieldworkerLogin) {:user {:username "foo"
                                                                  :password "pwd"}})
            expected #{(m/map->LoginResults {:body "some-uuid-response" :status 200})}]
        
        (is (= actual expected)))))

  (testing "login results event triggers initial state from backend"
    ))
