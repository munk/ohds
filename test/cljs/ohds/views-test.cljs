(ns ohds.views-test
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
            [ohds.framework :as f]
            [cljs.core.async :as async :refer [chan take! <! >!]]
            [cljs.test :refer-macros [deftest testing is async]]))

(enable-console-print!)
