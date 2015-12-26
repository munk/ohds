(ns ohds.views-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [ohds.login.view :as views]
            [ohds.framework :as f]
            [cljs.core.async :as async :refer [chan take! <! >!]]
            [cljs.test :refer-macros [deftest testing is async]]))

(enable-console-print!)

#_(defn send-change-event [id event ch]
    (let [elem (. js/document getElementById id)]
      (aset (.-value elem) "some text")))

(deftest login-form
  (testing "Changing username emits ChangeUsername event")
  (async done
      (let [ch (chan 10) app {}]
        (f/with-mounted-component (views/login chan app)
          (fn [c div]
            (is (f/found-in #"Username" div))
            (is (f/found-in #"Password" div)))))
    (done)))


(deftest test1
  (let [ch (chan)]
      (go (>! ch "Hello")
        (test-async
          (test-within 1000
            (go (is (= "Hello?" (<! ch)))))))))
