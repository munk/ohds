(ns ohds.dev
  (:require [environ.core :refer [env]]
            [figwheel-sidecar.repl-api :as ra]
            [net.cgrand.enlive-html :refer [set-attr prepend append html]]
            [cemerick.piggieback :as piggieback]
            [weasel.repl.websocket :as weasel]
            ;[figwheel-sidecar.auto-builder :as fig-auto]
            ;[figwheel-sidecar.components.figwheel-server :as fig]
            [clojurescript-build.auto :as auto]
            [clojure.java.shell :refer [sh]]))


(def is-dev? (env :is-dev))


(def inject-devmode-html
  (comp
   (set-attr :class "is-dev")
   (prepend (html [:script {:type "text/javascript" :src "/js/out/goog/base.js"}]))
   (append  (html [:script {:type "text/javascript"} "goog.require('ohds.main')"]))))


(defn browser-repl []
  (piggieback/cljs-repl
   (weasel/repl-env :ip "0.0.0.0" :port 9001)))


(defn start-figwheel []
  (ra/start-figwheel!
   {:figwheel-options {:autoload true
                       }
    :build-ids ["dev"]
    :all-builds
    [{:id "dev"
      :figwheel true
      :source-paths ["src/cljs" "env/dev/cljs"]
      :compiler {
                 :output-to            "resources/public/js/app.js"
                 :output-dir           "resources/public/js/out"
                 :source-map           true
                 :optimizations        :none
                 :source-map-timestamp true
                 :heads-up-display true
                 :preamble             ["react/react.min.js"]}}]}))

;; Please note that when you stop the Figwheel Server http-kit throws
;; a java.util.concurrent.RejectedExecutionException, this is expected

(defn stop []
  (ra/stop-figwheel!))

(defn repl []
  (ra/cljs-repl))
