(ns ohds.domain
  (:require [schema.core :as s]))

(s/defrecord LoginRequest
    [username :- s/Str
     password :- s/Str
     admin? :- s/Bool])


(s/defrecord ApplicationState
    [page :- s/Keyword
     mode :- s/Keyword ;TODO: Make this an enum
     errors :- s/Str
     login-request :- LoginRequest
     hierarchies :- [s/Str]
     location-hierarchy :- s/Str
     location :- {s/Keyword s/Str}
     socialgroup :- {s/Keyword s/Str}
     individual :- {s/Keyword s/Str}
     fieldworker-id :- s/Str
     locations :- [{s/Keyword s/Str}]
     relationships :- [{s/Keyword s/Str}]
     location-id :- s/Str
     social-group-id :- s/Str
     individual-id :- s/Str
     individuals :- [{s/Keyword s/Str}]
     ])
