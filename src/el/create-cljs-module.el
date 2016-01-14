;;; ELisp module to create 

(defvar *project-root* "/Users/jdowns/ohds/")
(defvar *cljs-home* "/src/cljs/ohds")
(defvar *module-name* "ohds")

(defun view-template (project-name module-name)
  (let ((ns (concat project-name "." module-name)))
    (concat
     "(ns " ns ".view\n"
     "  (:require\n"
     "    [petrol.core :refer [send! send-value!]]\n"
     "    [" project-name ".components :as c]\n"
     "    [" ns ".processing]\n"
     "    [" ns ".messages :as m]))\n\n\n"
     "(defn form [ch app]\n"
     "  [:div \"Implement Me\"])")))

(defun processing-template (project-name module-name)
  (let ((ns (concat project-name "." module-name)))
    (concat
     "(ns " ns ".processing\n"
     "  (:require\n"
     "    [petrol.core :refer [Message EventSource]]\n"
     "    [" ns ".backend :as backend]\n"
     "    [" ns ".messages :as m]))\n\n\n"
     "(extend-protocol Message\n"
     "  m/ImplementMe\n"
     "  (process-message [response app]\n"
     "    app))\n")))

(defun messages-template (project-name module-name)
  (concat
   "(ns " project-name "." module-name ".messages)\n\n"
   "(defrecord ImplementMe [])\n"
   "(defrecord ImplementMeResponse [body])\n"))

(defun backend-template (project-name module-name)
  (let ((ns (concat project-name "." module-name)))
    (concat
     "(ns " ns ".backend\n"
     "  (:require\n"
     "    [cljs-http.client :as http]\n"
     "    [petrol.core :as petrol]\n"
     "    [" ns ".messages :as m]))\n\n\n"
     "(defn create-entity [id]\n"
     "  (let [params {:id id}]\n"
     "    (->> (http/post \"/api/v1/entity\" {:form-params params})\n"
     "         (petrol/wrap m/map->ImplementMeResponse))))\n")))


(defun cljs-file (mod-dir fname template)
  (let ((file-name (concat *project-root*
                           "/src/cljs/" *module-name*
                           "/" mod-dir
                           "/" fname ".cljs"))
        (body (funcall template *module-name* module)))
    (write-region body nil file-name)))


(defun create-cljs-module (module)
  (let* ((base-dir (concat *project-root* *cljs-home*))
         (mod-dirs (concat base-dir module)))
    (make-directory mod-dirs)
    (cljs-file module "view" 'view-template)
    (cljs-file module "messages" 'messages-template)
    (cljs-file module "processing" 'processing-template)
    (cljs-file module "backend" 'backend-template)))
    

;(create-cljs-module "barmod")
;(view-template *module-name* "barmod")
