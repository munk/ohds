// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 * @param {...*} var_args
 */
reagent.session.get = (function() { 
var reagent$session$get__delegate = function (k,p__32286){
var vec__32288 = p__32286;
var default$ = cljs.core.nth.call(null,vec__32288,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
};
var reagent$session$get = function (k,var_args){
var p__32286 = null;
if (arguments.length > 1) {
var G__32289__i = 0, G__32289__a = new Array(arguments.length -  1);
while (G__32289__i < G__32289__a.length) {G__32289__a[G__32289__i] = arguments[G__32289__i + 1]; ++G__32289__i;}
  p__32286 = new cljs.core.IndexedSeq(G__32289__a,0);
} 
return reagent$session$get__delegate.call(this,k,p__32286);};
reagent$session$get.cljs$lang$maxFixedArity = 1;
reagent$session$get.cljs$lang$applyTo = (function (arglist__32290){
var k = cljs.core.first(arglist__32290);
var p__32286 = cljs.core.rest(arglist__32290);
return reagent$session$get__delegate(k,p__32286);
});
reagent$session$get.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get__delegate;
return reagent$session$get;
})()
;
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 * returns nil if it doesn't exist.
 * @param {...*} var_args
 */
reagent.session.get_in = (function() { 
var reagent$session$get_in__delegate = function (ks,p__32291){
var vec__32293 = p__32291;
var default$ = cljs.core.nth.call(null,vec__32293,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
};
var reagent$session$get_in = function (ks,var_args){
var p__32291 = null;
if (arguments.length > 1) {
var G__32294__i = 0, G__32294__a = new Array(arguments.length -  1);
while (G__32294__i < G__32294__a.length) {G__32294__a[G__32294__i] = arguments[G__32294__i + 1]; ++G__32294__i;}
  p__32291 = new cljs.core.IndexedSeq(G__32294__a,0);
} 
return reagent$session$get_in__delegate.call(this,ks,p__32291);};
reagent$session$get_in.cljs$lang$maxFixedArity = 1;
reagent$session$get_in.cljs$lang$applyTo = (function (arglist__32295){
var ks = cljs.core.first(arglist__32295);
var p__32291 = cljs.core.rest(arglist__32295);
return reagent$session$get_in__delegate(ks,p__32291);
});
reagent$session$get_in.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_in__delegate;
return reagent$session$get_in;
})()
;
/**
 * Replace the current session's value with the result of executing f with
 * the current value and args.
 * @param {...*} var_args
 */
reagent.session.swap_BANG_ = (function() { 
var reagent$session$swap_BANG___delegate = function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
};
var reagent$session$swap_BANG_ = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__32296__i = 0, G__32296__a = new Array(arguments.length -  1);
while (G__32296__i < G__32296__a.length) {G__32296__a[G__32296__i] = arguments[G__32296__i + 1]; ++G__32296__i;}
  args = new cljs.core.IndexedSeq(G__32296__a,0);
} 
return reagent$session$swap_BANG___delegate.call(this,f,args);};
reagent$session$swap_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$swap_BANG_.cljs$lang$applyTo = (function (arglist__32297){
var f = cljs.core.first(arglist__32297);
var args = cljs.core.rest(arglist__32297);
return reagent$session$swap_BANG___delegate(f,args);
});
reagent$session$swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$swap_BANG___delegate;
return reagent$session$swap_BANG_;
})()
;
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32298_SHARP_){
return cljs.core.assoc_in.call(null,p1__32298_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 * and then removes it from the session.
 * @param {...*} var_args
 */
reagent.session.get_BANG_ = (function() { 
var reagent$session$get_BANG___delegate = function (k,p__32299){
var vec__32301 = p__32299;
var default$ = cljs.core.nth.call(null,vec__32301,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
};
var reagent$session$get_BANG_ = function (k,var_args){
var p__32299 = null;
if (arguments.length > 1) {
var G__32302__i = 0, G__32302__a = new Array(arguments.length -  1);
while (G__32302__i < G__32302__a.length) {G__32302__a[G__32302__i] = arguments[G__32302__i + 1]; ++G__32302__i;}
  p__32299 = new cljs.core.IndexedSeq(G__32302__a,0);
} 
return reagent$session$get_BANG___delegate.call(this,k,p__32299);};
reagent$session$get_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$get_BANG_.cljs$lang$applyTo = (function (arglist__32303){
var k = cljs.core.first(arglist__32303);
var p__32299 = cljs.core.rest(arglist__32303);
return reagent$session$get_BANG___delegate(k,p__32299);
});
reagent$session$get_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_BANG___delegate;
return reagent$session$get_BANG_;
})()
;
/**
 * Destructive get from the session. This returns the current value of the path
 * specified by the vector ks and then removes it from the session.
 * @param {...*} var_args
 */
reagent.session.get_in_BANG_ = (function() { 
var reagent$session$get_in_BANG___delegate = function (ks,p__32304){
var vec__32306 = p__32304;
var default$ = cljs.core.nth.call(null,vec__32306,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
};
var reagent$session$get_in_BANG_ = function (ks,var_args){
var p__32304 = null;
if (arguments.length > 1) {
var G__32307__i = 0, G__32307__a = new Array(arguments.length -  1);
while (G__32307__i < G__32307__a.length) {G__32307__a[G__32307__i] = arguments[G__32307__i + 1]; ++G__32307__i;}
  p__32304 = new cljs.core.IndexedSeq(G__32307__a,0);
} 
return reagent$session$get_in_BANG___delegate.call(this,ks,p__32304);};
reagent$session$get_in_BANG_.cljs$lang$maxFixedArity = 1;
reagent$session$get_in_BANG_.cljs$lang$applyTo = (function (arglist__32308){
var ks = cljs.core.first(arglist__32308);
var p__32304 = cljs.core.rest(arglist__32308);
return reagent$session$get_in_BANG___delegate(ks,p__32304);
});
reagent$session$get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$get_in_BANG___delegate;
return reagent$session$get_in_BANG_;
})()
;
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 * @param {...*} var_args
 */
reagent.session.update_in_BANG_ = (function() { 
var reagent$session$update_in_BANG___delegate = function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__32309_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__32309_SHARP_,ks,f),args);
}));
};
var reagent$session$update_in_BANG_ = function (ks,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__32310__i = 0, G__32310__a = new Array(arguments.length -  2);
while (G__32310__i < G__32310__a.length) {G__32310__a[G__32310__i] = arguments[G__32310__i + 2]; ++G__32310__i;}
  args = new cljs.core.IndexedSeq(G__32310__a,0);
} 
return reagent$session$update_in_BANG___delegate.call(this,ks,f,args);};
reagent$session$update_in_BANG_.cljs$lang$maxFixedArity = 2;
reagent$session$update_in_BANG_.cljs$lang$applyTo = (function (arglist__32311){
var ks = cljs.core.first(arglist__32311);
arglist__32311 = cljs.core.next(arglist__32311);
var f = cljs.core.first(arglist__32311);
var args = cljs.core.rest(arglist__32311);
return reagent$session$update_in_BANG___delegate(ks,f,args);
});
reagent$session$update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = reagent$session$update_in_BANG___delegate;
return reagent$session$update_in_BANG_;
})()
;

//# sourceMappingURL=session.js.map?rel=1448159962063