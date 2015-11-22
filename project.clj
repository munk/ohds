(defproject ohds "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj"]

  :test-paths ["test/clj"]

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [instaparse "1.4.1"]
                 [org.clojure/clojurescript "0.0-3058" :scope "provided"]
                 [org.clojure/tools.nrepl "0.2.11"]
                 [org.clojure/data.json "0.2.6"]

                 [http-kit "2.1.18"]
                 [http-kit.fake "0.2.1"]
                 [cljs-http "0.1.37"]
                 
                 [crypto-password "0.1.3"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.4"]

                 [compojure "1.3.2"]
                 [enlive "1.1.6"]
                 [environ "1.0.0"]
                 [prismatic/schema "1.0.2"]

                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [com.cognitect/transit-cljs "0.8.225"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]
            [lein-ring "0.9.7"]]

  :min-lein-version "2.5.0"

  :uberjar-name "ohds.jar"

  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to     "resources/public/js/app.js"
                                        :output-dir    "resources/public/js/out"
                                        :source-map    "resources/public/js/out.js.map"
                                        :preamble      ["react/react.min.js"]
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:source-paths ["env/dev/clj"]
                   :hooks [leiningen.cljsbuild]
                   :test-paths ["test/clj" "test/cljs"]

                   :dependencies [[figwheel "0.2.5"]
                                  [figwheel-sidecar "0.2.5"]
                                  [com.cemerick/piggieback "0.1.5"]
                                  [weasel "0.6.0"]]

                   :repl-options {:init-ns ohds.server
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :plugins [[lein-figwheel "0.2.5"]]

                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :css-dirs ["resources/public/css"]
                              :ring-handler ohds.server/http-handler}

                   :env {:is-dev true}

                   :cljsbuild {:test-commands { "test" ["phantomjs" "env/test/js/unit-test.js" "env/test/unit-test.html"] }
                               :builds {:app {:source-paths ["env/dev/cljs"]}
                                        :test {:source-paths ["src/cljs" "test/cljs"]
                                               :compiler {:output-to     "resources/public/js/app_test.js"
                                                          :output-dir    "resources/public/js/test"
                                                          :source-map    "resources/public/js/test.js.map"
                                                          :preamble      ["react/react.min.js"]
                                                          :optimizations :whitespace
                                                          :pretty-print  false}}}}}

             :uberjar {:source-paths ["env/prod/clj"]
                       :hooks [leiningen.cljsbuild]
                       :env {:production true}
                       :omit-source true
                       :aot :all
                       :main ohds.server
                       :cljsbuild {:builds {:app
                                            {:source-paths ["env/prod/cljs"]
                                             :compiler
                                             {:optimizations :advanced
                                              :pretty-print false}}}}}})
