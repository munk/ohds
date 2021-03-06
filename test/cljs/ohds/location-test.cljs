(ns ohds.location-test
  (:require
   [ohds.location.view :as view]
   [ohds.location.messages :as m]
   [ohds.location.processing :as p]
   [ohds.framework :refer [with-mounted-component found-in elem]]
   [cljs-http.client :as http]
   [petrol.core :refer [process-message watch-channels wrap]]
   [cljs.test :refer-macros [deftest is testing run-tests]]))


#_(deftest location-form-test
  (with-mounted-component
    (view/form nil {:hierarchy-level-count 3
                    :location {}
                    :hierarchies [{} {} {:uuid "abc" :name "some-location-name"}]
                    :location-hierarchues [{:uuid "abc"}] })
    (fn [c div]
      (is (found-in #"some-location-name" div))
      (is (not (found-in #"Submit" div)))))
  (with-mounted-component
    (view/form nil {:hierarchy-level-count 3
                    :location {:name "name"
                               :extId "id"
                               :type "T"}
                    :hierarchy-levels [{} {} {:name "some-location-name"}]})
    (fn [c div]
      (is (found-in #"some-location-name" div))
      (is (found-in #"Submit" div)))))


(deftest location-test
  (testing "change location type updates location type in app"
    (let [msg (m/->ChangeLocationType "FOO")]
      (is (= {:location {:type "FOO"}}
             (process-message msg {})))))

  (testing "change location name updates location name in app"
    (let [msg (m/->ChangeLocationName "NAME")]
      (is (= {:location {:name "NAME"}}
             (process-message msg {})))))

  (testing "change location extid updates extid in app"
    (let [msg (m/->ChangeLocationExtId "EXTID")]
      (is (= {:location {:extId "EXTID"}}
             (process-message msg {})))))

  (testing "submit location in census mode creates new location"
    (with-redefs [http/post (fn [_ _]
                              {:status 200 :body "location-uuid"})
                  wrap (fn [m c] (m c))]
      (let [msg (m/->SubmitLocation)
            app {:location {:name "Loc-Name"
                            :extId "Loc-Name"
                            :type "RURAL"}
                 :fieldworker-id "fw-id"
                 :hierarchy "hiera-id"}
            expected #{(m/map->CreateLocationResults {:status 200 :body "location-uuid"})}
            result (watch-channels msg app)]
        (is (= expected result)))))

  (testing "submit location results updates page and current location" ;;;TODO status validation
    (let [msg (m/map->CreateLocationResults {:status 200
                                          :body "location-uuid"})
          app {:location {:name "Loc-Name"
                          :extId "Loc-Name"
                          :type "RURAL"}}
          actual (process-message msg app)]
      (is (= {:page :socialgroup :location {:uuid "location-uuid"
                                            :name "Loc-Name"
                                            :extId "Loc-Name"
                                            :type "RURAL"}}
             actual)))))
