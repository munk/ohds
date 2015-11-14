(ns ohds.components
  (:require [om.dom :as dom :include-macros true]))

(defn text-input
  [labelname ref]
  (dom/div nil
           (dom/label nil labelname)
           (dom/input #js {:type "text" :ref ref})))

(defn password-input
  [labelname ref]
  (dom/div nil
           (dom/label nil labelname)
           (dom/input #js {:type "password" :ref ref})))

(defn submit-button [labelname onclick]
  (dom/div nil
           (dom/button #js {:onClick onclick} labelname)))

(defn option [opt]
  (let [{:keys [value label]} opt]
    (dom/option #js {:value value} label)))

(defn select-box [labelname options]
  (dom/select
   nil
   (doall
    (map option options))))

