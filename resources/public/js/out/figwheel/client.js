// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
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
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36402__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36403__i = 0, G__36403__a = new Array(arguments.length -  0);
while (G__36403__i < G__36403__a.length) {G__36403__a[G__36403__i] = arguments[G__36403__i + 0]; ++G__36403__i;}
  args = new cljs.core.IndexedSeq(G__36403__a,0);
} 
return G__36402__delegate.call(this,args);};
G__36402.cljs$lang$maxFixedArity = 0;
G__36402.cljs$lang$applyTo = (function (arglist__36404){
var args = cljs.core.seq(arglist__36404);
return G__36402__delegate(args);
});
G__36402.cljs$core$IFn$_invoke$arity$variadic = G__36402__delegate;
return G__36402;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36405){
var map__36407 = p__36405;
var map__36407__$1 = ((cljs.core.seq_QMARK_.call(null,map__36407))?cljs.core.apply.call(null,cljs.core.hash_map,map__36407):map__36407);
var class$ = cljs.core.get.call(null,map__36407__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__36407__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25106__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25094__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25094__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25094__auto__;
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
var c__28122__auto___36536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___36536,ch){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___36536,ch){
return (function (state_36510){
var state_val_36511 = (state_36510[(1)]);
if((state_val_36511 === (7))){
var inst_36506 = (state_36510[(2)]);
var state_36510__$1 = state_36510;
var statearr_36512_36537 = state_36510__$1;
(statearr_36512_36537[(2)] = inst_36506);

(statearr_36512_36537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (1))){
var state_36510__$1 = state_36510;
var statearr_36513_36538 = state_36510__$1;
(statearr_36513_36538[(2)] = null);

(statearr_36513_36538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (4))){
var inst_36474 = (state_36510[(7)]);
var inst_36474__$1 = (state_36510[(2)]);
var state_36510__$1 = (function (){var statearr_36514 = state_36510;
(statearr_36514[(7)] = inst_36474__$1);

return statearr_36514;
})();
if(cljs.core.truth_(inst_36474__$1)){
var statearr_36515_36539 = state_36510__$1;
(statearr_36515_36539[(1)] = (5));

} else {
var statearr_36516_36540 = state_36510__$1;
(statearr_36516_36540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (13))){
var state_36510__$1 = state_36510;
var statearr_36517_36541 = state_36510__$1;
(statearr_36517_36541[(2)] = null);

(statearr_36517_36541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (6))){
var state_36510__$1 = state_36510;
var statearr_36518_36542 = state_36510__$1;
(statearr_36518_36542[(2)] = null);

(statearr_36518_36542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (3))){
var inst_36508 = (state_36510[(2)]);
var state_36510__$1 = state_36510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36510__$1,inst_36508);
} else {
if((state_val_36511 === (12))){
var inst_36481 = (state_36510[(8)]);
var inst_36494 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36481);
var inst_36495 = cljs.core.first.call(null,inst_36494);
var inst_36496 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36495);
var inst_36497 = console.warn("Figwheel: Not loading code with warnings - ",inst_36496);
var state_36510__$1 = state_36510;
var statearr_36519_36543 = state_36510__$1;
(statearr_36519_36543[(2)] = inst_36497);

(statearr_36519_36543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (2))){
var state_36510__$1 = state_36510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36510__$1,(4),ch);
} else {
if((state_val_36511 === (11))){
var inst_36490 = (state_36510[(2)]);
var state_36510__$1 = state_36510;
var statearr_36520_36544 = state_36510__$1;
(statearr_36520_36544[(2)] = inst_36490);

(statearr_36520_36544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (9))){
var inst_36480 = (state_36510[(9)]);
var inst_36492 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36480,opts);
var state_36510__$1 = state_36510;
if(inst_36492){
var statearr_36521_36545 = state_36510__$1;
(statearr_36521_36545[(1)] = (12));

} else {
var statearr_36522_36546 = state_36510__$1;
(statearr_36522_36546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (5))){
var inst_36480 = (state_36510[(9)]);
var inst_36474 = (state_36510[(7)]);
var inst_36476 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36477 = (new cljs.core.PersistentArrayMap(null,2,inst_36476,null));
var inst_36478 = (new cljs.core.PersistentHashSet(null,inst_36477,null));
var inst_36479 = figwheel.client.focus_msgs.call(null,inst_36478,inst_36474);
var inst_36480__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36479);
var inst_36481 = cljs.core.first.call(null,inst_36479);
var inst_36482 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36480__$1,opts);
var state_36510__$1 = (function (){var statearr_36523 = state_36510;
(statearr_36523[(9)] = inst_36480__$1);

(statearr_36523[(8)] = inst_36481);

return statearr_36523;
})();
if(cljs.core.truth_(inst_36482)){
var statearr_36524_36547 = state_36510__$1;
(statearr_36524_36547[(1)] = (8));

} else {
var statearr_36525_36548 = state_36510__$1;
(statearr_36525_36548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (14))){
var inst_36500 = (state_36510[(2)]);
var state_36510__$1 = state_36510;
var statearr_36526_36549 = state_36510__$1;
(statearr_36526_36549[(2)] = inst_36500);

(statearr_36526_36549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (10))){
var inst_36502 = (state_36510[(2)]);
var state_36510__$1 = (function (){var statearr_36527 = state_36510;
(statearr_36527[(10)] = inst_36502);

return statearr_36527;
})();
var statearr_36528_36550 = state_36510__$1;
(statearr_36528_36550[(2)] = null);

(statearr_36528_36550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (8))){
var inst_36481 = (state_36510[(8)]);
var inst_36484 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36485 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36481);
var inst_36486 = cljs.core.async.timeout.call(null,(1000));
var inst_36487 = [inst_36485,inst_36486];
var inst_36488 = (new cljs.core.PersistentVector(null,2,(5),inst_36484,inst_36487,null));
var state_36510__$1 = state_36510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36510__$1,(11),inst_36488);
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
});})(c__28122__auto___36536,ch))
;
return ((function (switch__28066__auto__,c__28122__auto___36536,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____0 = (function (){
var statearr_36532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36532[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__);

(statearr_36532[(1)] = (1));

return statearr_36532;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____1 = (function (state_36510){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36533){if((e36533 instanceof Object)){
var ex__28070__auto__ = e36533;
var statearr_36534_36551 = state_36510;
(statearr_36534_36551[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36552 = state_36510;
state_36510 = G__36552;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__ = function(state_36510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____1.call(this,state_36510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28067__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___36536,ch))
})();
var state__28124__auto__ = (function (){var statearr_36535 = f__28123__auto__.call(null);
(statearr_36535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___36536);

return statearr_36535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___36536,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36553_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36553_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_36562 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__36555_SHARP_,p2__36554_SHARP_){
return [cljs.core.str(p2__36554_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36562){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_36560 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_36561 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_36560,_STAR_print_newline_STAR_36561,base_path_36562){
return (function() { 
var G__36563__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__36563 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36564__i = 0, G__36564__a = new Array(arguments.length -  0);
while (G__36564__i < G__36564__a.length) {G__36564__a[G__36564__i] = arguments[G__36564__i + 0]; ++G__36564__i;}
  args = new cljs.core.IndexedSeq(G__36564__a,0);
} 
return G__36563__delegate.call(this,args);};
G__36563.cljs$lang$maxFixedArity = 0;
G__36563.cljs$lang$applyTo = (function (arglist__36565){
var args = cljs.core.seq(arglist__36565);
return G__36563__delegate(args);
});
G__36563.cljs$core$IFn$_invoke$arity$variadic = G__36563__delegate;
return G__36563;
})()
;})(_STAR_print_fn_STAR_36560,_STAR_print_newline_STAR_36561,base_path_36562))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36561;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36560;
}}catch (e36559){if((e36559 instanceof Error)){
var e = e36559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36562], null));
} else {
var e = e36559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36562))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36566){
var map__36571 = p__36566;
var map__36571__$1 = ((cljs.core.seq_QMARK_.call(null,map__36571))?cljs.core.apply.call(null,cljs.core.hash_map,map__36571):map__36571);
var opts = map__36571__$1;
var build_id = cljs.core.get.call(null,map__36571__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36571,map__36571__$1,opts,build_id){
return (function (p__36572){
var vec__36573 = p__36572;
var map__36574 = cljs.core.nth.call(null,vec__36573,(0),null);
var map__36574__$1 = ((cljs.core.seq_QMARK_.call(null,map__36574))?cljs.core.apply.call(null,cljs.core.hash_map,map__36574):map__36574);
var msg = map__36574__$1;
var msg_name = cljs.core.get.call(null,map__36574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36573,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__36573,map__36574,map__36574__$1,msg,msg_name,_,map__36571,map__36571__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36573,map__36574,map__36574__$1,msg,msg_name,_,map__36571,map__36571__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36571,map__36571__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36578){
var vec__36579 = p__36578;
var map__36580 = cljs.core.nth.call(null,vec__36579,(0),null);
var map__36580__$1 = ((cljs.core.seq_QMARK_.call(null,map__36580))?cljs.core.apply.call(null,cljs.core.hash_map,map__36580):map__36580);
var msg = map__36580__$1;
var msg_name = cljs.core.get.call(null,map__36580__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36579,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36581){
var map__36589 = p__36581;
var map__36589__$1 = ((cljs.core.seq_QMARK_.call(null,map__36589))?cljs.core.apply.call(null,cljs.core.hash_map,map__36589):map__36589);
var on_compile_fail = cljs.core.get.call(null,map__36589__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__36589__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__36589,map__36589__$1,on_compile_fail,on_compile_warning){
return (function (p__36590){
var vec__36591 = p__36590;
var map__36592 = cljs.core.nth.call(null,vec__36591,(0),null);
var map__36592__$1 = ((cljs.core.seq_QMARK_.call(null,map__36592))?cljs.core.apply.call(null,cljs.core.hash_map,map__36592):map__36592);
var msg = map__36592__$1;
var msg_name = cljs.core.get.call(null,map__36592__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__36591,(1));
var pred__36593 = cljs.core._EQ_;
var expr__36594 = msg_name;
if(cljs.core.truth_(pred__36593.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36594))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36593.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36594))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36589,map__36589__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__,msg_hist,msg_names,msg){
return (function (state_36791){
var state_val_36792 = (state_36791[(1)]);
if((state_val_36792 === (7))){
var inst_36727 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36793_36834 = state_36791__$1;
(statearr_36793_36834[(2)] = inst_36727);

(statearr_36793_36834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (20))){
var inst_36753 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36753){
var statearr_36794_36835 = state_36791__$1;
(statearr_36794_36835[(1)] = (22));

} else {
var statearr_36795_36836 = state_36791__$1;
(statearr_36795_36836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (27))){
var inst_36765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36766 = figwheel.client.heads_up.display_warning.call(null,inst_36765);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(30),inst_36766);
} else {
if((state_val_36792 === (1))){
var inst_36715 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36715)){
var statearr_36796_36837 = state_36791__$1;
(statearr_36796_36837[(1)] = (2));

} else {
var statearr_36797_36838 = state_36791__$1;
(statearr_36797_36838[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (24))){
var inst_36781 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36798_36839 = state_36791__$1;
(statearr_36798_36839[(2)] = inst_36781);

(statearr_36798_36839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (4))){
var inst_36789 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36791__$1,inst_36789);
} else {
if((state_val_36792 === (15))){
var inst_36742 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36743 = figwheel.client.format_messages.call(null,inst_36742);
var inst_36744 = figwheel.client.heads_up.display_error.call(null,inst_36743);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(18),inst_36744);
} else {
if((state_val_36792 === (21))){
var inst_36783 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36799_36840 = state_36791__$1;
(statearr_36799_36840[(2)] = inst_36783);

(statearr_36799_36840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (31))){
var inst_36772 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(34),inst_36772);
} else {
if((state_val_36792 === (32))){
var state_36791__$1 = state_36791;
var statearr_36800_36841 = state_36791__$1;
(statearr_36800_36841[(2)] = null);

(statearr_36800_36841[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (33))){
var inst_36777 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36801_36842 = state_36791__$1;
(statearr_36801_36842[(2)] = inst_36777);

(statearr_36801_36842[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (13))){
var inst_36733 = (state_36791[(2)]);
var inst_36734 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36735 = figwheel.client.format_messages.call(null,inst_36734);
var inst_36736 = figwheel.client.heads_up.display_error.call(null,inst_36735);
var state_36791__$1 = (function (){var statearr_36802 = state_36791;
(statearr_36802[(7)] = inst_36733);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(14),inst_36736);
} else {
if((state_val_36792 === (22))){
var inst_36755 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(25),inst_36755);
} else {
if((state_val_36792 === (29))){
var inst_36779 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36803_36843 = state_36791__$1;
(statearr_36803_36843[(2)] = inst_36779);

(statearr_36803_36843[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (6))){
var inst_36723 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(9),inst_36723);
} else {
if((state_val_36792 === (28))){
var inst_36770 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36770){
var statearr_36804_36844 = state_36791__$1;
(statearr_36804_36844[(1)] = (31));

} else {
var statearr_36805_36845 = state_36791__$1;
(statearr_36805_36845[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (25))){
var inst_36757 = (state_36791[(2)]);
var inst_36758 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36759 = figwheel.client.heads_up.display_warning.call(null,inst_36758);
var state_36791__$1 = (function (){var statearr_36806 = state_36791;
(statearr_36806[(8)] = inst_36757);

return statearr_36806;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(26),inst_36759);
} else {
if((state_val_36792 === (34))){
var inst_36774 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36807_36846 = state_36791__$1;
(statearr_36807_36846[(2)] = inst_36774);

(statearr_36807_36846[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (17))){
var inst_36785 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36808_36847 = state_36791__$1;
(statearr_36808_36847[(2)] = inst_36785);

(statearr_36808_36847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (3))){
var inst_36729 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36729){
var statearr_36809_36848 = state_36791__$1;
(statearr_36809_36848[(1)] = (10));

} else {
var statearr_36810_36849 = state_36791__$1;
(statearr_36810_36849[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (12))){
var inst_36787 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36811_36850 = state_36791__$1;
(statearr_36811_36850[(2)] = inst_36787);

(statearr_36811_36850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (2))){
var inst_36717 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36791__$1 = state_36791;
if(cljs.core.truth_(inst_36717)){
var statearr_36812_36851 = state_36791__$1;
(statearr_36812_36851[(1)] = (5));

} else {
var statearr_36813_36852 = state_36791__$1;
(statearr_36813_36852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (23))){
var inst_36763 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36763){
var statearr_36814_36853 = state_36791__$1;
(statearr_36814_36853[(1)] = (27));

} else {
var statearr_36815_36854 = state_36791__$1;
(statearr_36815_36854[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (19))){
var inst_36750 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36751 = figwheel.client.heads_up.append_message.call(null,inst_36750);
var state_36791__$1 = state_36791;
var statearr_36816_36855 = state_36791__$1;
(statearr_36816_36855[(2)] = inst_36751);

(statearr_36816_36855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (11))){
var inst_36740 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36740){
var statearr_36817_36856 = state_36791__$1;
(statearr_36817_36856[(1)] = (15));

} else {
var statearr_36818_36857 = state_36791__$1;
(statearr_36818_36857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (9))){
var inst_36725 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36819_36858 = state_36791__$1;
(statearr_36819_36858[(2)] = inst_36725);

(statearr_36819_36858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (5))){
var inst_36719 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(8),inst_36719);
} else {
if((state_val_36792 === (14))){
var inst_36738 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36820_36859 = state_36791__$1;
(statearr_36820_36859[(2)] = inst_36738);

(statearr_36820_36859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (26))){
var inst_36761 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36821_36860 = state_36791__$1;
(statearr_36821_36860[(2)] = inst_36761);

(statearr_36821_36860[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (16))){
var inst_36748 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36791__$1 = state_36791;
if(inst_36748){
var statearr_36822_36861 = state_36791__$1;
(statearr_36822_36861[(1)] = (19));

} else {
var statearr_36823_36862 = state_36791__$1;
(statearr_36823_36862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (30))){
var inst_36768 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36824_36863 = state_36791__$1;
(statearr_36824_36863[(2)] = inst_36768);

(statearr_36824_36863[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (10))){
var inst_36731 = figwheel.client.heads_up.clear.call(null);
var state_36791__$1 = state_36791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36791__$1,(13),inst_36731);
} else {
if((state_val_36792 === (18))){
var inst_36746 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36825_36864 = state_36791__$1;
(statearr_36825_36864[(2)] = inst_36746);

(statearr_36825_36864[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36792 === (8))){
var inst_36721 = (state_36791[(2)]);
var state_36791__$1 = state_36791;
var statearr_36826_36865 = state_36791__$1;
(statearr_36826_36865[(2)] = inst_36721);

(statearr_36826_36865[(1)] = (7));


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
});})(c__28122__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28066__auto__,c__28122__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____0 = (function (){
var statearr_36830 = [null,null,null,null,null,null,null,null,null];
(statearr_36830[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__);

(statearr_36830[(1)] = (1));

return statearr_36830;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____1 = (function (state_36791){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36831){if((e36831 instanceof Object)){
var ex__28070__auto__ = e36831;
var statearr_36832_36866 = state_36791;
(statearr_36832_36866[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36867 = state_36791;
state_36791 = G__36867;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__ = function(state_36791){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____1.call(this,state_36791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__,msg_hist,msg_names,msg))
})();
var state__28124__auto__ = (function (){var statearr_36833 = f__28123__auto__.call(null);
(statearr_36833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_36833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__,msg_hist,msg_names,msg))
);

return c__28122__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28122__auto___36930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___36930,ch){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___36930,ch){
return (function (state_36913){
var state_val_36914 = (state_36913[(1)]);
if((state_val_36914 === (8))){
var inst_36905 = (state_36913[(2)]);
var state_36913__$1 = (function (){var statearr_36915 = state_36913;
(statearr_36915[(7)] = inst_36905);

return statearr_36915;
})();
var statearr_36916_36931 = state_36913__$1;
(statearr_36916_36931[(2)] = null);

(statearr_36916_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36914 === (7))){
var inst_36909 = (state_36913[(2)]);
var state_36913__$1 = state_36913;
var statearr_36917_36932 = state_36913__$1;
(statearr_36917_36932[(2)] = inst_36909);

(statearr_36917_36932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36914 === (6))){
var state_36913__$1 = state_36913;
var statearr_36918_36933 = state_36913__$1;
(statearr_36918_36933[(2)] = null);

(statearr_36918_36933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36914 === (5))){
var inst_36901 = (state_36913[(8)]);
var inst_36903 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36901);
var state_36913__$1 = state_36913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36913__$1,(8),inst_36903);
} else {
if((state_val_36914 === (4))){
var inst_36901 = (state_36913[(8)]);
var inst_36901__$1 = (state_36913[(2)]);
var state_36913__$1 = (function (){var statearr_36919 = state_36913;
(statearr_36919[(8)] = inst_36901__$1);

return statearr_36919;
})();
if(cljs.core.truth_(inst_36901__$1)){
var statearr_36920_36934 = state_36913__$1;
(statearr_36920_36934[(1)] = (5));

} else {
var statearr_36921_36935 = state_36913__$1;
(statearr_36921_36935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36914 === (3))){
var inst_36911 = (state_36913[(2)]);
var state_36913__$1 = state_36913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36913__$1,inst_36911);
} else {
if((state_val_36914 === (2))){
var state_36913__$1 = state_36913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36913__$1,(4),ch);
} else {
if((state_val_36914 === (1))){
var state_36913__$1 = state_36913;
var statearr_36922_36936 = state_36913__$1;
(statearr_36922_36936[(2)] = null);

(statearr_36922_36936[(1)] = (2));


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
});})(c__28122__auto___36930,ch))
;
return ((function (switch__28066__auto__,c__28122__auto___36930,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28067__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28067__auto____0 = (function (){
var statearr_36926 = [null,null,null,null,null,null,null,null,null];
(statearr_36926[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28067__auto__);

(statearr_36926[(1)] = (1));

return statearr_36926;
});
var figwheel$client$heads_up_plugin_$_state_machine__28067__auto____1 = (function (state_36913){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36927){if((e36927 instanceof Object)){
var ex__28070__auto__ = e36927;
var statearr_36928_36937 = state_36913;
(statearr_36928_36937[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36938 = state_36913;
state_36913 = G__36938;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28067__auto__ = function(state_36913){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28067__auto____1.call(this,state_36913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28067__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28067__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___36930,ch))
})();
var state__28124__auto__ = (function (){var statearr_36929 = f__28123__auto__.call(null);
(statearr_36929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___36930);

return statearr_36929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___36930,ch))
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
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_36959){
var state_val_36960 = (state_36959[(1)]);
if((state_val_36960 === (2))){
var inst_36956 = (state_36959[(2)]);
var inst_36957 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36959__$1 = (function (){var statearr_36961 = state_36959;
(statearr_36961[(7)] = inst_36956);

return statearr_36961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36959__$1,inst_36957);
} else {
if((state_val_36960 === (1))){
var inst_36954 = cljs.core.async.timeout.call(null,(3000));
var state_36959__$1 = state_36959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36959__$1,(2),inst_36954);
} else {
return null;
}
}
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____0 = (function (){
var statearr_36965 = [null,null,null,null,null,null,null,null];
(statearr_36965[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__);

(statearr_36965[(1)] = (1));

return statearr_36965;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____1 = (function (state_36959){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36966){if((e36966 instanceof Object)){
var ex__28070__auto__ = e36966;
var statearr_36967_36969 = state_36959;
(statearr_36967_36969[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36970 = state_36959;
state_36959 = G__36970;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__ = function(state_36959){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____1.call(this,state_36959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28067__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_36968 = f__28123__auto__.call(null);
(statearr_36968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_36968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__25094__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__25094__auto__)){
return ("CustomEvent" in window);
} else {
return and__25094__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj36974 = {"detail":url};
return obj36974;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36975){
var map__36981 = p__36975;
var map__36981__$1 = ((cljs.core.seq_QMARK_.call(null,map__36981))?cljs.core.apply.call(null,cljs.core.hash_map,map__36981):map__36981);
var ed = map__36981__$1;
var exception_data = cljs.core.get.call(null,map__36981__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__36981__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36982_36986 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36983_36987 = null;
var count__36984_36988 = (0);
var i__36985_36989 = (0);
while(true){
if((i__36985_36989 < count__36984_36988)){
var msg_36990 = cljs.core._nth.call(null,chunk__36983_36987,i__36985_36989);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36990);

var G__36991 = seq__36982_36986;
var G__36992 = chunk__36983_36987;
var G__36993 = count__36984_36988;
var G__36994 = (i__36985_36989 + (1));
seq__36982_36986 = G__36991;
chunk__36983_36987 = G__36992;
count__36984_36988 = G__36993;
i__36985_36989 = G__36994;
continue;
} else {
var temp__4126__auto___36995 = cljs.core.seq.call(null,seq__36982_36986);
if(temp__4126__auto___36995){
var seq__36982_36996__$1 = temp__4126__auto___36995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36982_36996__$1)){
var c__25893__auto___36997 = cljs.core.chunk_first.call(null,seq__36982_36996__$1);
var G__36998 = cljs.core.chunk_rest.call(null,seq__36982_36996__$1);
var G__36999 = c__25893__auto___36997;
var G__37000 = cljs.core.count.call(null,c__25893__auto___36997);
var G__37001 = (0);
seq__36982_36986 = G__36998;
chunk__36983_36987 = G__36999;
count__36984_36988 = G__37000;
i__36985_36989 = G__37001;
continue;
} else {
var msg_37002 = cljs.core.first.call(null,seq__36982_36996__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37002);

var G__37003 = cljs.core.next.call(null,seq__36982_36996__$1);
var G__37004 = null;
var G__37005 = (0);
var G__37006 = (0);
seq__36982_36986 = G__37003;
chunk__36983_36987 = G__37004;
count__36984_36988 = G__37005;
i__36985_36989 = G__37006;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37007){
var map__37009 = p__37007;
var map__37009__$1 = ((cljs.core.seq_QMARK_.call(null,map__37009))?cljs.core.apply.call(null,cljs.core.hash_map,map__37009):map__37009);
var w = map__37009__$1;
var message = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
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
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25094__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25094__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25094__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37016 = cljs.core.seq.call(null,plugins);
var chunk__37017 = null;
var count__37018 = (0);
var i__37019 = (0);
while(true){
if((i__37019 < count__37018)){
var vec__37020 = cljs.core._nth.call(null,chunk__37017,i__37019);
var k = cljs.core.nth.call(null,vec__37020,(0),null);
var plugin = cljs.core.nth.call(null,vec__37020,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37016,chunk__37017,count__37018,i__37019,pl_37022,vec__37020,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37022.call(null,msg_hist);
});})(seq__37016,chunk__37017,count__37018,i__37019,pl_37022,vec__37020,k,plugin))
);
} else {
}

var G__37023 = seq__37016;
var G__37024 = chunk__37017;
var G__37025 = count__37018;
var G__37026 = (i__37019 + (1));
seq__37016 = G__37023;
chunk__37017 = G__37024;
count__37018 = G__37025;
i__37019 = G__37026;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__37016);
if(temp__4126__auto__){
var seq__37016__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37016__$1)){
var c__25893__auto__ = cljs.core.chunk_first.call(null,seq__37016__$1);
var G__37027 = cljs.core.chunk_rest.call(null,seq__37016__$1);
var G__37028 = c__25893__auto__;
var G__37029 = cljs.core.count.call(null,c__25893__auto__);
var G__37030 = (0);
seq__37016 = G__37027;
chunk__37017 = G__37028;
count__37018 = G__37029;
i__37019 = G__37030;
continue;
} else {
var vec__37021 = cljs.core.first.call(null,seq__37016__$1);
var k = cljs.core.nth.call(null,vec__37021,(0),null);
var plugin = cljs.core.nth.call(null,vec__37021,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37031 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37016,chunk__37017,count__37018,i__37019,pl_37031,vec__37021,k,plugin,seq__37016__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37031.call(null,msg_hist);
});})(seq__37016,chunk__37017,count__37018,i__37019,pl_37031,vec__37021,k,plugin,seq__37016__$1,temp__4126__auto__))
);
} else {
}

var G__37032 = cljs.core.next.call(null,seq__37016__$1);
var G__37033 = null;
var G__37034 = (0);
var G__37035 = (0);
seq__37016 = G__37032;
chunk__37017 = G__37033;
count__37018 = G__37034;
i__37019 = G__37035;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
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
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__37036){
var map__37038 = p__37036;
var map__37038__$1 = ((cljs.core.seq_QMARK_.call(null,map__37038))?cljs.core.apply.call(null,cljs.core.hash_map,map__37038):map__37038);
var opts = map__37038__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__37036 = null;
if (arguments.length > 0) {
var G__37039__i = 0, G__37039__a = new Array(arguments.length -  0);
while (G__37039__i < G__37039__a.length) {G__37039__a[G__37039__i] = arguments[G__37039__i + 0]; ++G__37039__i;}
  p__37036 = new cljs.core.IndexedSeq(G__37039__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__37036);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__37040){
var p__37036 = cljs.core.seq(arglist__37040);
return figwheel$client$watch_and_reload__delegate(p__37036);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1446160952855