(ns accountant.core
  "The only namespace in this library."
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! <! chan]]
            [clojure.string :as str]
            [secretary.core :as secretary]
            [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History
           goog.Uri))

(defonce history (Html5History.))

(defn- listen [el type]
  (let [out (chan)]
    (events/listen el type
                   (fn [e] (put! out e)))
    out))

(defn- dispatch-on-navigate
  [history]
  (let [navigation (listen history EventType/NAVIGATE)]
    (go
      (while true
        (let [token (.-token (<! navigation))]
          (secretary/dispatch! token))))))

(defn- find-href
  "Given a DOM element that may or may not be a link, traverse up the DOM tree
  to see if any of its parents are links. If so, return the href content."
  [e]
  ((fn [e]
     (if-let [href (.-href e)]
        href
        (when-let [parent (.-parentNode e)]
           (recur parent)))) (.-target e)))

(defn- prevent-reload-on-known-path
  "Create a click handler that blocks page reloads for known routes in
  Secretary."
  [history]
  (events/listen
   js/document
   "click"
   (fn [e]
     (let [button (.-button e)
           href (find-href e)
           path (.getPath (.parse Uri href))
           title (.-title (.-target e))]
       (when (and (= button 0) (secretary/locate-route path))
         (. history (setToken path title))
         (.preventDefault e))))))

(defn configure-navigation!
  "Create and configure HTML5 history navigation."
  []
  (.setUseFragment history false)
  (.setPathPrefix history "")
  (.setEnabled history true)
  (dispatch-on-navigate history)
  (prevent-reload-on-known-path history))

(defn map->params [query]
  (let [params (map #(name %) (keys query))
        values (vals query)
        pairs (partition 2 (interleave params values))]
    (str/join "&" (map #(str/join "=" %) pairs))))

(defn navigate!
  "add a browser history entry. updates window/location"
  ([route] (navigate! route {}))
  ([route query]
     (let [token (.getToken history)
           old-route (first (str/split token "?"))
           query-string (map->params (reduce-kv (fn [valid k v]
                                                  (if v
                                                    (assoc valid k v)
                                                    valid)) {} query))
           with-params (if (empty? query-string)
                         route
                         (str route "?" query-string))]
       (if (= old-route route)
         (. history (replaceToken with-params))
         (. history (setToken with-params))))))

(defn dispatch-current! []
  "Dispatch current URI path."
  (let [path (-> js/window .-location .-pathname)
        query (-> js/window .-location .-search)]
    (secretary/dispatch! (str path query))))
