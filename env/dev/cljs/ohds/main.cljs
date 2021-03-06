(ns ohds.main
  (:require [ohds.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [cljs.core.async :refer [put!]]
            [weasel.repl :as weasel]))

(println "Starting dev")
(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn []
                     (core/main)))

(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})

(core/main)
