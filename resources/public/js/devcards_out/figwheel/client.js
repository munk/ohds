// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30193 = cljs.core._EQ_;
var expr__30194 = (function (){var or__19570__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30193.call(null,"true",expr__30194))){
return true;
} else {
if(cljs.core.truth_(pred__30193.call(null,"false",expr__30194))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30194)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30196__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30197__i = 0, G__30197__a = new Array(arguments.length -  0);
while (G__30197__i < G__30197__a.length) {G__30197__a[G__30197__i] = arguments[G__30197__i + 0]; ++G__30197__i;}
  args = new cljs.core.IndexedSeq(G__30197__a,0);
} 
return G__30196__delegate.call(this,args);};
G__30196.cljs$lang$maxFixedArity = 0;
G__30196.cljs$lang$applyTo = (function (arglist__30198){
var args = cljs.core.seq(arglist__30198);
return G__30196__delegate(args);
});
G__30196.cljs$core$IFn$_invoke$arity$variadic = G__30196__delegate;
return G__30196;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30199){
var map__30202 = p__30199;
var map__30202__$1 = ((((!((map__30202 == null)))?((((map__30202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30202):map__30202);
var message = cljs.core.get.call(null,map__30202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30202__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19570__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19558__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19558__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19558__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23856__auto___30364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___30364,ch){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___30364,ch){
return (function (state_30333){
var state_val_30334 = (state_30333[(1)]);
if((state_val_30334 === (7))){
var inst_30329 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30335_30365 = state_30333__$1;
(statearr_30335_30365[(2)] = inst_30329);

(statearr_30335_30365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (1))){
var state_30333__$1 = state_30333;
var statearr_30336_30366 = state_30333__$1;
(statearr_30336_30366[(2)] = null);

(statearr_30336_30366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (4))){
var inst_30286 = (state_30333[(7)]);
var inst_30286__$1 = (state_30333[(2)]);
var state_30333__$1 = (function (){var statearr_30337 = state_30333;
(statearr_30337[(7)] = inst_30286__$1);

return statearr_30337;
})();
if(cljs.core.truth_(inst_30286__$1)){
var statearr_30338_30367 = state_30333__$1;
(statearr_30338_30367[(1)] = (5));

} else {
var statearr_30339_30368 = state_30333__$1;
(statearr_30339_30368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (15))){
var inst_30293 = (state_30333[(8)]);
var inst_30308 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30293);
var inst_30309 = cljs.core.first.call(null,inst_30308);
var inst_30310 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30309);
var inst_30311 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30310)].join('');
var inst_30312 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30311);
var state_30333__$1 = state_30333;
var statearr_30340_30369 = state_30333__$1;
(statearr_30340_30369[(2)] = inst_30312);

(statearr_30340_30369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (13))){
var inst_30317 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30341_30370 = state_30333__$1;
(statearr_30341_30370[(2)] = inst_30317);

(statearr_30341_30370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (6))){
var state_30333__$1 = state_30333;
var statearr_30342_30371 = state_30333__$1;
(statearr_30342_30371[(2)] = null);

(statearr_30342_30371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (17))){
var inst_30315 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30343_30372 = state_30333__$1;
(statearr_30343_30372[(2)] = inst_30315);

(statearr_30343_30372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (3))){
var inst_30331 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30333__$1,inst_30331);
} else {
if((state_val_30334 === (12))){
var inst_30292 = (state_30333[(9)]);
var inst_30306 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30292,opts);
var state_30333__$1 = state_30333;
if(cljs.core.truth_(inst_30306)){
var statearr_30344_30373 = state_30333__$1;
(statearr_30344_30373[(1)] = (15));

} else {
var statearr_30345_30374 = state_30333__$1;
(statearr_30345_30374[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (2))){
var state_30333__$1 = state_30333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30333__$1,(4),ch);
} else {
if((state_val_30334 === (11))){
var inst_30293 = (state_30333[(8)]);
var inst_30298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30299 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30293);
var inst_30300 = cljs.core.async.timeout.call(null,(1000));
var inst_30301 = [inst_30299,inst_30300];
var inst_30302 = (new cljs.core.PersistentVector(null,2,(5),inst_30298,inst_30301,null));
var state_30333__$1 = state_30333;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30333__$1,(14),inst_30302);
} else {
if((state_val_30334 === (9))){
var inst_30293 = (state_30333[(8)]);
var inst_30319 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30320 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30293);
var inst_30321 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30320);
var inst_30322 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30321)].join('');
var inst_30323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30322);
var state_30333__$1 = (function (){var statearr_30346 = state_30333;
(statearr_30346[(10)] = inst_30319);

return statearr_30346;
})();
var statearr_30347_30375 = state_30333__$1;
(statearr_30347_30375[(2)] = inst_30323);

(statearr_30347_30375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (5))){
var inst_30286 = (state_30333[(7)]);
var inst_30288 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30289 = (new cljs.core.PersistentArrayMap(null,2,inst_30288,null));
var inst_30290 = (new cljs.core.PersistentHashSet(null,inst_30289,null));
var inst_30291 = figwheel.client.focus_msgs.call(null,inst_30290,inst_30286);
var inst_30292 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30291);
var inst_30293 = cljs.core.first.call(null,inst_30291);
var inst_30294 = figwheel.client.autoload_QMARK_.call(null);
var state_30333__$1 = (function (){var statearr_30348 = state_30333;
(statearr_30348[(8)] = inst_30293);

(statearr_30348[(9)] = inst_30292);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30294)){
var statearr_30349_30376 = state_30333__$1;
(statearr_30349_30376[(1)] = (8));

} else {
var statearr_30350_30377 = state_30333__$1;
(statearr_30350_30377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (14))){
var inst_30304 = (state_30333[(2)]);
var state_30333__$1 = state_30333;
var statearr_30351_30378 = state_30333__$1;
(statearr_30351_30378[(2)] = inst_30304);

(statearr_30351_30378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (16))){
var state_30333__$1 = state_30333;
var statearr_30352_30379 = state_30333__$1;
(statearr_30352_30379[(2)] = null);

(statearr_30352_30379[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (10))){
var inst_30325 = (state_30333[(2)]);
var state_30333__$1 = (function (){var statearr_30353 = state_30333;
(statearr_30353[(11)] = inst_30325);

return statearr_30353;
})();
var statearr_30354_30380 = state_30333__$1;
(statearr_30354_30380[(2)] = null);

(statearr_30354_30380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30334 === (8))){
var inst_30292 = (state_30333[(9)]);
var inst_30296 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30292,opts);
var state_30333__$1 = state_30333;
if(cljs.core.truth_(inst_30296)){
var statearr_30355_30381 = state_30333__$1;
(statearr_30355_30381[(1)] = (11));

} else {
var statearr_30356_30382 = state_30333__$1;
(statearr_30356_30382[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__23856__auto___30364,ch))
;
return ((function (switch__23744__auto__,c__23856__auto___30364,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____0 = (function (){
var statearr_30360 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30360[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__);

(statearr_30360[(1)] = (1));

return statearr_30360;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____1 = (function (state_30333){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30361){if((e30361 instanceof Object)){
var ex__23748__auto__ = e30361;
var statearr_30362_30383 = state_30333;
(statearr_30362_30383[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30384 = state_30333;
state_30333 = G__30384;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__ = function(state_30333){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____1.call(this,state_30333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23745__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___30364,ch))
})();
var state__23858__auto__ = (function (){var statearr_30363 = f__23857__auto__.call(null);
(statearr_30363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___30364);

return statearr_30363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___30364,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30385_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30385_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30392 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30392){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30390 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30391 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30390,_STAR_print_newline_STAR_30391,base_path_30392){
return (function() { 
var G__30393__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30393 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30394__i = 0, G__30394__a = new Array(arguments.length -  0);
while (G__30394__i < G__30394__a.length) {G__30394__a[G__30394__i] = arguments[G__30394__i + 0]; ++G__30394__i;}
  args = new cljs.core.IndexedSeq(G__30394__a,0);
} 
return G__30393__delegate.call(this,args);};
G__30393.cljs$lang$maxFixedArity = 0;
G__30393.cljs$lang$applyTo = (function (arglist__30395){
var args = cljs.core.seq(arglist__30395);
return G__30393__delegate(args);
});
G__30393.cljs$core$IFn$_invoke$arity$variadic = G__30393__delegate;
return G__30393;
})()
;})(_STAR_print_fn_STAR_30390,_STAR_print_newline_STAR_30391,base_path_30392))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30391;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30390;
}}catch (e30389){if((e30389 instanceof Error)){
var e = e30389;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30392], null));
} else {
var e = e30389;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30392))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30396){
var map__30403 = p__30396;
var map__30403__$1 = ((((!((map__30403 == null)))?((((map__30403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30403):map__30403);
var opts = map__30403__$1;
var build_id = cljs.core.get.call(null,map__30403__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30403,map__30403__$1,opts,build_id){
return (function (p__30405){
var vec__30406 = p__30405;
var map__30407 = cljs.core.nth.call(null,vec__30406,(0),null);
var map__30407__$1 = ((((!((map__30407 == null)))?((((map__30407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30407):map__30407);
var msg = map__30407__$1;
var msg_name = cljs.core.get.call(null,map__30407__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30406,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30406,map__30407,map__30407__$1,msg,msg_name,_,map__30403,map__30403__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30406,map__30407,map__30407__$1,msg,msg_name,_,map__30403,map__30403__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30403,map__30403__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30413){
var vec__30414 = p__30413;
var map__30415 = cljs.core.nth.call(null,vec__30414,(0),null);
var map__30415__$1 = ((((!((map__30415 == null)))?((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var msg = map__30415__$1;
var msg_name = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30414,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30417){
var map__30427 = p__30417;
var map__30427__$1 = ((((!((map__30427 == null)))?((((map__30427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30427):map__30427);
var on_compile_warning = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30427__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30427,map__30427__$1,on_compile_warning,on_compile_fail){
return (function (p__30429){
var vec__30430 = p__30429;
var map__30431 = cljs.core.nth.call(null,vec__30430,(0),null);
var map__30431__$1 = ((((!((map__30431 == null)))?((((map__30431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30431):map__30431);
var msg = map__30431__$1;
var msg_name = cljs.core.get.call(null,map__30431__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30430,(1));
var pred__30433 = cljs.core._EQ_;
var expr__30434 = msg_name;
if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30434))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30433.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30434))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30427,map__30427__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__,msg_hist,msg_names,msg){
return (function (state_30650){
var state_val_30651 = (state_30650[(1)]);
if((state_val_30651 === (7))){
var inst_30574 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30574)){
var statearr_30652_30698 = state_30650__$1;
(statearr_30652_30698[(1)] = (8));

} else {
var statearr_30653_30699 = state_30650__$1;
(statearr_30653_30699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (20))){
var inst_30644 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30654_30700 = state_30650__$1;
(statearr_30654_30700[(2)] = inst_30644);

(statearr_30654_30700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (27))){
var inst_30640 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30655_30701 = state_30650__$1;
(statearr_30655_30701[(2)] = inst_30640);

(statearr_30655_30701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (1))){
var inst_30567 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30567)){
var statearr_30656_30702 = state_30650__$1;
(statearr_30656_30702[(1)] = (2));

} else {
var statearr_30657_30703 = state_30650__$1;
(statearr_30657_30703[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (24))){
var inst_30642 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30658_30704 = state_30650__$1;
(statearr_30658_30704[(2)] = inst_30642);

(statearr_30658_30704[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (4))){
var inst_30648 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30650__$1,inst_30648);
} else {
if((state_val_30651 === (15))){
var inst_30646 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30659_30705 = state_30650__$1;
(statearr_30659_30705[(2)] = inst_30646);

(statearr_30659_30705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (21))){
var inst_30605 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30660_30706 = state_30650__$1;
(statearr_30660_30706[(2)] = inst_30605);

(statearr_30660_30706[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (31))){
var inst_30629 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30629)){
var statearr_30661_30707 = state_30650__$1;
(statearr_30661_30707[(1)] = (34));

} else {
var statearr_30662_30708 = state_30650__$1;
(statearr_30662_30708[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (32))){
var inst_30638 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30663_30709 = state_30650__$1;
(statearr_30663_30709[(2)] = inst_30638);

(statearr_30663_30709[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (33))){
var inst_30627 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30664_30710 = state_30650__$1;
(statearr_30664_30710[(2)] = inst_30627);

(statearr_30664_30710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (13))){
var inst_30588 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(16),inst_30588);
} else {
if((state_val_30651 === (22))){
var inst_30609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30610 = figwheel.client.heads_up.append_message.call(null,inst_30609);
var state_30650__$1 = state_30650;
var statearr_30665_30711 = state_30650__$1;
(statearr_30665_30711[(2)] = inst_30610);

(statearr_30665_30711[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (36))){
var inst_30636 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30666_30712 = state_30650__$1;
(statearr_30666_30712[(2)] = inst_30636);

(statearr_30666_30712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (29))){
var inst_30620 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30667_30713 = state_30650__$1;
(statearr_30667_30713[(2)] = inst_30620);

(statearr_30667_30713[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (6))){
var inst_30569 = (state_30650[(7)]);
var state_30650__$1 = state_30650;
var statearr_30668_30714 = state_30650__$1;
(statearr_30668_30714[(2)] = inst_30569);

(statearr_30668_30714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (28))){
var inst_30616 = (state_30650[(2)]);
var inst_30617 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30618 = figwheel.client.heads_up.display_warning.call(null,inst_30617);
var state_30650__$1 = (function (){var statearr_30669 = state_30650;
(statearr_30669[(8)] = inst_30616);

return statearr_30669;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(29),inst_30618);
} else {
if((state_val_30651 === (25))){
var inst_30614 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(28),inst_30614);
} else {
if((state_val_30651 === (34))){
var inst_30631 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(37),inst_30631);
} else {
if((state_val_30651 === (17))){
var inst_30596 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30670_30715 = state_30650__$1;
(statearr_30670_30715[(2)] = inst_30596);

(statearr_30670_30715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (3))){
var inst_30586 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30586)){
var statearr_30671_30716 = state_30650__$1;
(statearr_30671_30716[(1)] = (13));

} else {
var statearr_30672_30717 = state_30650__$1;
(statearr_30672_30717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (12))){
var inst_30582 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30673_30718 = state_30650__$1;
(statearr_30673_30718[(2)] = inst_30582);

(statearr_30673_30718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (2))){
var inst_30569 = (state_30650[(7)]);
var inst_30569__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30650__$1 = (function (){var statearr_30674 = state_30650;
(statearr_30674[(7)] = inst_30569__$1);

return statearr_30674;
})();
if(cljs.core.truth_(inst_30569__$1)){
var statearr_30675_30719 = state_30650__$1;
(statearr_30675_30719[(1)] = (5));

} else {
var statearr_30676_30720 = state_30650__$1;
(statearr_30676_30720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (23))){
var inst_30612 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30612)){
var statearr_30677_30721 = state_30650__$1;
(statearr_30677_30721[(1)] = (25));

} else {
var statearr_30678_30722 = state_30650__$1;
(statearr_30678_30722[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (35))){
var state_30650__$1 = state_30650;
var statearr_30679_30723 = state_30650__$1;
(statearr_30679_30723[(2)] = null);

(statearr_30679_30723[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (19))){
var inst_30607 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30607)){
var statearr_30680_30724 = state_30650__$1;
(statearr_30680_30724[(1)] = (22));

} else {
var statearr_30681_30725 = state_30650__$1;
(statearr_30681_30725[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (11))){
var inst_30578 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30682_30726 = state_30650__$1;
(statearr_30682_30726[(2)] = inst_30578);

(statearr_30682_30726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (9))){
var inst_30580 = figwheel.client.heads_up.clear.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(12),inst_30580);
} else {
if((state_val_30651 === (5))){
var inst_30571 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30650__$1 = state_30650;
var statearr_30683_30727 = state_30650__$1;
(statearr_30683_30727[(2)] = inst_30571);

(statearr_30683_30727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (14))){
var inst_30598 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30598)){
var statearr_30684_30728 = state_30650__$1;
(statearr_30684_30728[(1)] = (18));

} else {
var statearr_30685_30729 = state_30650__$1;
(statearr_30685_30729[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (26))){
var inst_30622 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30650__$1 = state_30650;
if(cljs.core.truth_(inst_30622)){
var statearr_30686_30730 = state_30650__$1;
(statearr_30686_30730[(1)] = (30));

} else {
var statearr_30687_30731 = state_30650__$1;
(statearr_30687_30731[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (16))){
var inst_30590 = (state_30650[(2)]);
var inst_30591 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30592 = figwheel.client.format_messages.call(null,inst_30591);
var inst_30593 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30594 = figwheel.client.heads_up.display_error.call(null,inst_30592,inst_30593);
var state_30650__$1 = (function (){var statearr_30688 = state_30650;
(statearr_30688[(9)] = inst_30590);

return statearr_30688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(17),inst_30594);
} else {
if((state_val_30651 === (30))){
var inst_30624 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30625 = figwheel.client.heads_up.display_warning.call(null,inst_30624);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(33),inst_30625);
} else {
if((state_val_30651 === (10))){
var inst_30584 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30689_30732 = state_30650__$1;
(statearr_30689_30732[(2)] = inst_30584);

(statearr_30689_30732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (18))){
var inst_30600 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30601 = figwheel.client.format_messages.call(null,inst_30600);
var inst_30602 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30603 = figwheel.client.heads_up.display_error.call(null,inst_30601,inst_30602);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(21),inst_30603);
} else {
if((state_val_30651 === (37))){
var inst_30633 = (state_30650[(2)]);
var state_30650__$1 = state_30650;
var statearr_30690_30733 = state_30650__$1;
(statearr_30690_30733[(2)] = inst_30633);

(statearr_30690_30733[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30651 === (8))){
var inst_30576 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30650__$1 = state_30650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30650__$1,(11),inst_30576);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23856__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23744__auto__,c__23856__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____0 = (function (){
var statearr_30694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30694[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__);

(statearr_30694[(1)] = (1));

return statearr_30694;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____1 = (function (state_30650){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30695){if((e30695 instanceof Object)){
var ex__23748__auto__ = e30695;
var statearr_30696_30734 = state_30650;
(statearr_30696_30734[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30735 = state_30650;
state_30650 = G__30735;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__ = function(state_30650){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____1.call(this,state_30650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__,msg_hist,msg_names,msg))
})();
var state__23858__auto__ = (function (){var statearr_30697 = f__23857__auto__.call(null);
(statearr_30697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_30697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__,msg_hist,msg_names,msg))
);

return c__23856__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23856__auto___30798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___30798,ch){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___30798,ch){
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (1))){
var state_30781__$1 = state_30781;
var statearr_30783_30799 = state_30781__$1;
(statearr_30783_30799[(2)] = null);

(statearr_30783_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (2))){
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(4),ch);
} else {
if((state_val_30782 === (3))){
var inst_30779 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (4))){
var inst_30769 = (state_30781[(7)]);
var inst_30769__$1 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30784 = state_30781;
(statearr_30784[(7)] = inst_30769__$1);

return statearr_30784;
})();
if(cljs.core.truth_(inst_30769__$1)){
var statearr_30785_30800 = state_30781__$1;
(statearr_30785_30800[(1)] = (5));

} else {
var statearr_30786_30801 = state_30781__$1;
(statearr_30786_30801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (5))){
var inst_30769 = (state_30781[(7)]);
var inst_30771 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30769);
var state_30781__$1 = state_30781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(8),inst_30771);
} else {
if((state_val_30782 === (6))){
var state_30781__$1 = state_30781;
var statearr_30787_30802 = state_30781__$1;
(statearr_30787_30802[(2)] = null);

(statearr_30787_30802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (7))){
var inst_30777 = (state_30781[(2)]);
var state_30781__$1 = state_30781;
var statearr_30788_30803 = state_30781__$1;
(statearr_30788_30803[(2)] = inst_30777);

(statearr_30788_30803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30773 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30789 = state_30781;
(statearr_30789[(8)] = inst_30773);

return statearr_30789;
})();
var statearr_30790_30804 = state_30781__$1;
(statearr_30790_30804[(2)] = null);

(statearr_30790_30804[(1)] = (2));


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
}
});})(c__23856__auto___30798,ch))
;
return ((function (switch__23744__auto__,c__23856__auto___30798,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23745__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23745__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23745__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var figwheel$client$heads_up_plugin_$_state_machine__23745__auto____1 = (function (state_30781){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object)){
var ex__23748__auto__ = e30795;
var statearr_30796_30805 = state_30781;
(statearr_30796_30805[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30806 = state_30781;
state_30781 = G__30806;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23745__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23745__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23745__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23745__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___30798,ch))
})();
var state__23858__auto__ = (function (){var statearr_30797 = f__23857__auto__.call(null);
(statearr_30797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___30798);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___30798,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_30827){
var state_val_30828 = (state_30827[(1)]);
if((state_val_30828 === (1))){
var inst_30822 = cljs.core.async.timeout.call(null,(3000));
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30827__$1,(2),inst_30822);
} else {
if((state_val_30828 === (2))){
var inst_30824 = (state_30827[(2)]);
var inst_30825 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30827__$1 = (function (){var statearr_30829 = state_30827;
(statearr_30829[(7)] = inst_30824);

return statearr_30829;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30827__$1,inst_30825);
} else {
return null;
}
}
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____0 = (function (){
var statearr_30833 = [null,null,null,null,null,null,null,null];
(statearr_30833[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__);

(statearr_30833[(1)] = (1));

return statearr_30833;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____1 = (function (state_30827){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30834){if((e30834 instanceof Object)){
var ex__23748__auto__ = e30834;
var statearr_30835_30837 = state_30827;
(statearr_30835_30837[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30838 = state_30827;
state_30827 = G__30838;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__ = function(state_30827){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____1.call(this,state_30827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23745__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_30836 = f__23857__auto__.call(null);
(statearr_30836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_30836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30839){
var map__30846 = p__30839;
var map__30846__$1 = ((((!((map__30846 == null)))?((((map__30846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30846):map__30846);
var ed = map__30846__$1;
var formatted_exception = cljs.core.get.call(null,map__30846__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30846__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30846__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30848_30852 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30849_30853 = null;
var count__30850_30854 = (0);
var i__30851_30855 = (0);
while(true){
if((i__30851_30855 < count__30850_30854)){
var msg_30856 = cljs.core._nth.call(null,chunk__30849_30853,i__30851_30855);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30856);

var G__30857 = seq__30848_30852;
var G__30858 = chunk__30849_30853;
var G__30859 = count__30850_30854;
var G__30860 = (i__30851_30855 + (1));
seq__30848_30852 = G__30857;
chunk__30849_30853 = G__30858;
count__30850_30854 = G__30859;
i__30851_30855 = G__30860;
continue;
} else {
var temp__4425__auto___30861 = cljs.core.seq.call(null,seq__30848_30852);
if(temp__4425__auto___30861){
var seq__30848_30862__$1 = temp__4425__auto___30861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30848_30862__$1)){
var c__20373__auto___30863 = cljs.core.chunk_first.call(null,seq__30848_30862__$1);
var G__30864 = cljs.core.chunk_rest.call(null,seq__30848_30862__$1);
var G__30865 = c__20373__auto___30863;
var G__30866 = cljs.core.count.call(null,c__20373__auto___30863);
var G__30867 = (0);
seq__30848_30852 = G__30864;
chunk__30849_30853 = G__30865;
count__30850_30854 = G__30866;
i__30851_30855 = G__30867;
continue;
} else {
var msg_30868 = cljs.core.first.call(null,seq__30848_30862__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30868);

var G__30869 = cljs.core.next.call(null,seq__30848_30862__$1);
var G__30870 = null;
var G__30871 = (0);
var G__30872 = (0);
seq__30848_30852 = G__30869;
chunk__30849_30853 = G__30870;
count__30850_30854 = G__30871;
i__30851_30855 = G__30872;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30873){
var map__30876 = p__30873;
var map__30876__$1 = ((((!((map__30876 == null)))?((((map__30876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30876):map__30876);
var w = map__30876__$1;
var message = cljs.core.get.call(null,map__30876__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19558__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19558__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19558__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30884 = cljs.core.seq.call(null,plugins);
var chunk__30885 = null;
var count__30886 = (0);
var i__30887 = (0);
while(true){
if((i__30887 < count__30886)){
var vec__30888 = cljs.core._nth.call(null,chunk__30885,i__30887);
var k = cljs.core.nth.call(null,vec__30888,(0),null);
var plugin = cljs.core.nth.call(null,vec__30888,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30890 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30884,chunk__30885,count__30886,i__30887,pl_30890,vec__30888,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30890.call(null,msg_hist);
});})(seq__30884,chunk__30885,count__30886,i__30887,pl_30890,vec__30888,k,plugin))
);
} else {
}

var G__30891 = seq__30884;
var G__30892 = chunk__30885;
var G__30893 = count__30886;
var G__30894 = (i__30887 + (1));
seq__30884 = G__30891;
chunk__30885 = G__30892;
count__30886 = G__30893;
i__30887 = G__30894;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30884);
if(temp__4425__auto__){
var seq__30884__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30884__$1)){
var c__20373__auto__ = cljs.core.chunk_first.call(null,seq__30884__$1);
var G__30895 = cljs.core.chunk_rest.call(null,seq__30884__$1);
var G__30896 = c__20373__auto__;
var G__30897 = cljs.core.count.call(null,c__20373__auto__);
var G__30898 = (0);
seq__30884 = G__30895;
chunk__30885 = G__30896;
count__30886 = G__30897;
i__30887 = G__30898;
continue;
} else {
var vec__30889 = cljs.core.first.call(null,seq__30884__$1);
var k = cljs.core.nth.call(null,vec__30889,(0),null);
var plugin = cljs.core.nth.call(null,vec__30889,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30899 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30884,chunk__30885,count__30886,i__30887,pl_30899,vec__30889,k,plugin,seq__30884__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30899.call(null,msg_hist);
});})(seq__30884,chunk__30885,count__30886,i__30887,pl_30899,vec__30889,k,plugin,seq__30884__$1,temp__4425__auto__))
);
} else {
}

var G__30900 = cljs.core.next.call(null,seq__30884__$1);
var G__30901 = null;
var G__30902 = (0);
var G__30903 = (0);
seq__30884 = G__30900;
chunk__30885 = G__30901;
count__30886 = G__30902;
i__30887 = G__30903;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args30904 = [];
var len__20629__auto___30907 = arguments.length;
var i__20630__auto___30908 = (0);
while(true){
if((i__20630__auto___30908 < len__20629__auto___30907)){
args30904.push((arguments[i__20630__auto___30908]));

var G__30909 = (i__20630__auto___30908 + (1));
i__20630__auto___30908 = G__30909;
continue;
} else {
}
break;
}

var G__30906 = args30904.length;
switch (G__30906) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30904.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20636__auto__ = [];
var len__20629__auto___30915 = arguments.length;
var i__20630__auto___30916 = (0);
while(true){
if((i__20630__auto___30916 < len__20629__auto___30915)){
args__20636__auto__.push((arguments[i__20630__auto___30916]));

var G__30917 = (i__20630__auto___30916 + (1));
i__20630__auto___30916 = G__30917;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((0) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20637__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30912){
var map__30913 = p__30912;
var map__30913__$1 = ((((!((map__30913 == null)))?((((map__30913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30913):map__30913);
var opts = map__30913__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30911){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30911));
});

//# sourceMappingURL=client.js.map?rel=1447608118607