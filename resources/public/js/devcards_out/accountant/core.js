// Compiled by ClojureScript 1.7.170 {}
goog.provide('accountant.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
if(typeof accountant.core.history !== 'undefined'){
} else {
accountant.core.history = (new goog.history.Html5History());
}
accountant.core.listen = (function accountant$core$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history){
var navigation = accountant.core.listen.call(null,history,goog.history.EventType.NAVIGATE);
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__,navigation){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__,navigation){
return (function (state_29539){
var state_val_29540 = (state_29539[(1)]);
if((state_val_29540 === (1))){
var state_29539__$1 = state_29539;
var statearr_29541_29555 = state_29539__$1;
(statearr_29541_29555[(2)] = null);

(statearr_29541_29555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (2))){
var state_29539__$1 = state_29539;
var statearr_29542_29556 = state_29539__$1;
(statearr_29542_29556[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (3))){
var inst_29537 = (state_29539[(2)]);
var state_29539__$1 = state_29539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29539__$1,inst_29537);
} else {
if((state_val_29540 === (4))){
var state_29539__$1 = state_29539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29539__$1,(7),navigation);
} else {
if((state_val_29540 === (5))){
var state_29539__$1 = state_29539;
var statearr_29544_29557 = state_29539__$1;
(statearr_29544_29557[(2)] = null);

(statearr_29544_29557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (6))){
var inst_29535 = (state_29539[(2)]);
var state_29539__$1 = state_29539;
var statearr_29545_29558 = state_29539__$1;
(statearr_29545_29558[(2)] = inst_29535);

(statearr_29545_29558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29540 === (7))){
var inst_29529 = (state_29539[(2)]);
var inst_29530 = inst_29529.token;
var inst_29531 = secretary.core.dispatch_BANG_.call(null,inst_29530);
var state_29539__$1 = (function (){var statearr_29546 = state_29539;
(statearr_29546[(7)] = inst_29531);

return statearr_29546;
})();
var statearr_29547_29559 = state_29539__$1;
(statearr_29547_29559[(2)] = null);

(statearr_29547_29559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23856__auto__,navigation))
;
return ((function (switch__23744__auto__,c__23856__auto__,navigation){
return (function() {
var accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__ = null;
var accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____1 = (function (state_29539){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_29539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e29552){if((e29552 instanceof Object)){
var ex__23748__auto__ = e29552;
var statearr_29553_29560 = state_29539;
(statearr_29553_29560[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29561 = state_29539;
state_29539 = G__29561;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__ = function(state_29539){
switch(arguments.length){
case 0:
return accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____0.call(this);
case 1:
return accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____1.call(this,state_29539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____0;
accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = accountant$core$dispatch_on_navigate_$_state_machine__23745__auto____1;
return accountant$core$dispatch_on_navigate_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__,navigation))
})();
var state__23858__auto__ = (function (){var statearr_29554 = f__23857__auto__.call(null);
(statearr_29554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__,navigation))
);

return c__23856__auto__;
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content.
 */
accountant.core.find_href = (function accountant$core$find_href(e){
return (function (e__$1){
while(true){
var temp__4423__auto__ = e__$1.href;
if(cljs.core.truth_(temp__4423__auto__)){
var href = temp__4423__auto__;
return href;
} else {
var temp__4425__auto__ = e__$1.parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
var G__29562 = parent;
e__$1 = G__29562;
continue;
} else {
return null;
}
}
break;
}
}).call(null,e.target);
});
/**
 * Create a click handler that blocks page reloads for known routes in
 *   Secretary.
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history){
return goog.events.listen(document,"click",(function (e){
var button = e.button;
var href = accountant.core.find_href.call(null,e);
var path = goog.Uri.parse(href).getPath();
var title = e.target.title;
if(cljs.core.truth_((function (){var and__19558__auto__ = cljs.core._EQ_.call(null,button,(0));
if(and__19558__auto__){
return secretary.core.locate_route.call(null,path);
} else {
return and__19558__auto__;
}
})())){
history.setToken(path,title);

return e.preventDefault();
} else {
return null;
}
}));
});
/**
 * Create and configure HTML5 history navigation.
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(){
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

accountant.core.dispatch_on_navigate.call(null,accountant.core.history);

return accountant.core.prevent_reload_on_known_path.call(null,accountant.core.history);
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.call(null,(function (p1__29563_SHARP_){
return cljs.core.name.call(null,p1__29563_SHARP_);
}),cljs.core.keys.call(null,query));
var values = cljs.core.vals.call(null,query);
var pairs = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,params,values));
return clojure.string.join.call(null,"&",cljs.core.map.call(null,((function (params,values,pairs){
return (function (p1__29564_SHARP_){
return clojure.string.join.call(null,"=",p1__29564_SHARP_);
});})(params,values,pairs))
,pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var args29565 = [];
var len__20629__auto___29568 = arguments.length;
var i__20630__auto___29569 = (0);
while(true){
if((i__20630__auto___29569 < len__20629__auto___29568)){
args29565.push((arguments[i__20630__auto___29569]));

var G__29570 = (i__20630__auto___29569 + (1));
i__20630__auto___29569 = G__29570;
continue;
} else {
}
break;
}

var G__29567 = args29565.length;
switch (G__29567) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29565.length)].join('')));

}
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});

accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first.call(null,clojure.string.split.call(null,token,"?"));
var query_string = accountant.core.map__GT_params.call(null,cljs.core.reduce_kv.call(null,((function (token,old_route){
return (function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.call(null,valid,k,v);
} else {
return valid;
}
});})(token,old_route))
,cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_.call(null,query_string))?route:[cljs.core.str(route),cljs.core.str("?"),cljs.core.str(query_string)].join(''));
if(cljs.core._EQ_.call(null,old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
});

accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2;
accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
return secretary.core.dispatch_BANG_.call(null,[cljs.core.str(path),cljs.core.str(query)].join(''));
});

//# sourceMappingURL=core.js.map?rel=1447608117442