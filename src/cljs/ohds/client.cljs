(ns ohds.client)


#_(declare login
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

#_(defprotocol Http
  (get [msg])
  (post [msg]))

#_(def urls {:login "/api/v1/login"
           :admin-login "/api/v1/adminLogin"
           :user "/api/v1/user"
           })

#_(defrecord Login [username password admin?]
  Http
  (post [msg])
  )


(defn post [msg req])
