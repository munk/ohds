(defproject ohds-ui "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [ring-server "0.4.0"]
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.13"]
                 [reagent-utils "0.1.5"]
                 [ring "1.4.0"]
                 [ring/ring-defaults "0.1.5"]
                 [prone "0.8.2"]
                 [compojure "1.4.0"]
                 [hiccup "1.0.5"]
                 [environ "1.0.1"]
                 [org.clojure/clojurescript "1.7.170" :scope "provided"]
                 [secretary "1.2.3"]
                 [venantius/accountant "0.1.4"]
                 [devcards "0.2.0-8"]]

  :plugins [[lein-environ "1.0.1"]
            [lein-cljsbuild "1.1.1"]
            [lein-ring "0.9.7"]
            [lein-asset-minifier "0.2.2"]]

  :ring {:handler ohds-ui.handler/app
         :uberwar-name "ohds-ui.war"}

  :min-lein-version "2.5.0"

  :uberjar-name "ohds-ui.jar"

  :main ohds-ui.server

  :clean-targets ^{:protect false} [:target-path
                                    [:cljsbuild :builds :app :compiler :output-dir]
                                    [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]

  :minify-assets
  {:assets
    {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :cljsbuild {:builds {:app {:source-paths ["src/cljs" "src/cljc"]
                             :compiler {:output-to "target/cljsbuild/public/js/app.js"
                                        :output-dir "target/cljsbuild/public/js/out"
                                        :asset-path   "js/out"
                                        :optimizations :none
                                        :pretty-print  true}}}}

  :profiles {:dev {:repl-options {:init-ns ohds-ui.repl}

                   :dependencies [[ring/ring-mock "0.3.0"]
                                  [ring/ring-devel "1.4.0"]
                                  [lein-figwheel "0.5.0-SNAPSHOT"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.1.5"]
                                  [pjstadig/humane-test-output "0.7.0"]]

                   :source-paths ["env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.0-SNAPSHOT"]
                             [cider/cider-nrepl "0.10.0-SNAPSHOT"]
                             [refactor-nrepl "2.0.0-SNAPSHOT"] ]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :nrepl-port 7002
                              :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"
                                                 "cider.nrepl/cider-middleware"
                                                 "refactor-nrepl.middleware/wrap-refactor"
                                                 ]
                              :css-dirs ["resources/public/css"]
                              :ring-handler ohds-ui.handler/app}

                   :env {:dev true}

                   :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]
                                              :compiler {:main "ohds-ui.dev"
                                                         :source-map true}}
                                        :test {:source-paths ["src/cljs" "src/cljc" "test/cljs"]
                                               :compiler {:output-to "target/test.js"
                                                          :optimizations :whitespace
                                                          :pretty-print true}}
                                        :devcards {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                                                   :figwheel {:devcards true}
                                                   :compiler {:main "ohds-ui.cards"
                                                              :asset-path "js/devcards_out"
                                                              :output-to "resources/public/js/app_devcards.js"
                                                              :output-dir "resources/public/js/devcards_out"
                                                              :source-map-timestamp true}}
                                        }
                               :test-commands {"unit" ["phantomjs" :runner
                                                       "test/vendor/es5-shim.js"
                                                       "test/vendor/es5-sham.js"
                                                       "test/vendor/console-polyfill.js"
                                                       "target/test.js"]}
                               }}

             :uberjar {:hooks [minify-assets.plugin/hooks]
                       :prep-tasks ["compile" ["cljsbuild" "once"]]
                       :env {:production true}
                       :aot :all
                       :omit-source true
                       :cljsbuild {:jar true
                                   :builds {:app
                                             {:source-paths ["env/prod/cljs"]
                                              :compiler
                                              {:optimizations :advanced
                                               :pretty-print false}}}}}})
