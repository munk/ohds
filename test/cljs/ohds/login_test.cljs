(ns ohds.login-test
  (:require [petrol.core :refer [process-message]]
            [ohds.login :as sut]
            [cljs.test :refer-macros [deftest testing is]]
            ))

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
      (is (not (found-in #"<button.*Login" div)))))
  (with-mounted-component (view/login nil  {:username "user"
                                            :password "pass"})
    (fn [c div]
      (is  (found-in #"<button.*Login" div)))))

(deftest ui-message-test
  (testing "Send username updates app with the new value."
    (let [msg (->Username "new username")]
      (is (= {:username "new username"}
             (process-message msg {}))))))

(deftest login-test
  (testing "change username updates state with new username"
    (let [msg (m/->ChangeUsername "user")]
      (is (= {:user {:username "user"}}
             (process-message msg {}))))))
