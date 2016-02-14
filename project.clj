(defproject ohds "0.2.0"
  :description "Front End for OpenHDS"
  :url "http://github.com/munk/ohds"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/tools.logging "0.3.1"]
                 [instaparse "1.4.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [org.clojure/data.json "0.2.6"]
                 [expectations "2.0.9"]

                 [http-kit "2.1.18"]
                 [http-kit.fake "0.2.1"]
                 [cljs-http "0.1.37"]

                 [crypto-password "0.1.3"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.4"]
                 [fogus/ring-edn "0.3.0"]

                 [compojure "1.3.2"]
                 [enlive "1.1.6"]
                 [environ "1.0.0"]
                 [petrol "0.1.2"]
                 [prismatic/schema "1.0.2"]

                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [com.cognitect/transit-cljs "0.8.225"]]

  :plugins [[lein-cljsbuild "1.1.2"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.7"]
            [lein-expectations "0.0.7"]]

  :min-lein-version "2.5.1"

  :uberjar-name "ohds.jar"

  :cljsbuild {:builds
              {:app
               {:source-paths ["src/cljs" "src/clj"]
                :compiler {:output-to     "resources/public/js/app.js"
                           :output-dir    "resources/public/js/app"
                           :source-map    "resources/public/js/app.js.map"
                           :preamble      ["react/react.min.js"]
                           :optimizations :none
                           :pretty-print  true}}}}

  :profiles {
             :uberjar {:source-paths ["env/prod/clj"]
                       :figwheel false
                       :hooks [leiningen.cljsbuild]
                       :env {:production true :is-dev false}
                       :omit-source true
                       :aot :all
                       :main ohds.server
                       :cljsbuild {:builds {:app
                                            {:source-paths ["env/prod/cljs"]
                                             :compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}
             :dev
             {:source-paths ["env/dev/clj"]
              :hooks [leiningen.cljsbuild]
              :optimizations :none

              :dependencies [[clojurescript-build "0.1.9"]
                             [org.clojure/tools.nrepl "0.2.12"]
                             [figwheel "0.5.0-2" :exclusions [ring/ring-core org.clojure/clojure org.clojure/tools.reader]]
                             [figwheel-sidecar "0.5.0-2"]
                             [com.cemerick/piggieback "0.2.1"]
                             [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]]

              :repl-options {:timeout 120000
                             :init-ns ohds.server
                             :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

              :plugins [[lein-figwheel "0.5.0-2"]]

              :figwheel {:http-server-root "public"
                         :server-port 3449
                         :autoload true
                         :css-dirs ["resources/public/css"]
                         :ring-handler ohds.server/http-handler}

              :env {:is-dev true}

              :cljsbuild {:test-commands { "test" ["phantomjs"
                                                   "env/test/js/unit-test.js"
                                                   "env/test/unit-test.html"]}
                          :builds {:app {:source-paths ["env/dev/cljs"]}
                                   :dev {:source-paths ["env/dev/cljs" "src/clj" "src/cljs"]
                                         :compiler {:output-to     "resources/public/js/app.js"
                                                    :output-dir    "resources/public/js/out"
                                                    :source-map    "resources/public/js/out.js.map"
                                                    :preamble      ["react/react.min.js"]
                                                    :optimizations :none
                                                    :pretty-print  true}}

                                   :test {:source-paths ["src/cljs" "src/clj" "test/cljs"]
                                          :compiler {:output-to     "resources/public/js/app_test.js"
                                                     :output-dir    "resources/public/js/test"
                                                     :source-map    "resources/public/js/test.js.map"
                                                     :preamble      ["react/react.min.js"]
                                                     :optimizations :whitespace
                                                     :pretty-print  false}}}}}

})
