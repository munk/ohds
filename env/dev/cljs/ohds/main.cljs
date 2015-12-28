(ns ohds.main
  (:require [ohds.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [cljs.core.async :refer [put!]]
            [weasel.repl :as weasel]))

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn []
                     (println "RELOADING!!!!!!!!")
                     (core/render-fn)))

(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})

(core/main)

