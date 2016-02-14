(ns ohds.client)


(declare login
         user
         fieldworker
         project-code
         location-hierarchy-level
         location-hierarchy
         location
         residency
         individual
         relationship
         social-group
         membership
         visit
         event
         death
         pregnancy-observation
         pregnancy-outcome
         pregnancy-result
         in-migration
         out-migration)

(defprotocol Http
  (get [msg])
  (post [msg]))

(def urls {:login "/api/v1/login"
           :admin-login "/api/v1/adminLogin"
           :user "/api/v1/user"
           })

(defrecord Login [username password admin?]
  Http
  (post [msg])
  )


(defn post [msg req])
