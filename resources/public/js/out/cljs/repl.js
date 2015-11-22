// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37316_37320 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37317_37321 = null;
var count__37318_37322 = (0);
var i__37319_37323 = (0);
while(true){
if((i__37319_37323 < count__37318_37322)){
var f_37324 = cljs.core._nth.call(null,chunk__37317_37321,i__37319_37323);
cljs.core.println.call(null,"  ",f_37324);

var G__37325 = seq__37316_37320;
var G__37326 = chunk__37317_37321;
var G__37327 = count__37318_37322;
var G__37328 = (i__37319_37323 + (1));
seq__37316_37320 = G__37325;
chunk__37317_37321 = G__37326;
count__37318_37322 = G__37327;
i__37319_37323 = G__37328;
continue;
} else {
var temp__4126__auto___37329 = cljs.core.seq.call(null,seq__37316_37320);
if(temp__4126__auto___37329){
var seq__37316_37330__$1 = temp__4126__auto___37329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37316_37330__$1)){
var c__25893__auto___37331 = cljs.core.chunk_first.call(null,seq__37316_37330__$1);
var G__37332 = cljs.core.chunk_rest.call(null,seq__37316_37330__$1);
var G__37333 = c__25893__auto___37331;
var G__37334 = cljs.core.count.call(null,c__25893__auto___37331);
var G__37335 = (0);
seq__37316_37320 = G__37332;
chunk__37317_37321 = G__37333;
count__37318_37322 = G__37334;
i__37319_37323 = G__37335;
continue;
} else {
var f_37336 = cljs.core.first.call(null,seq__37316_37330__$1);
cljs.core.println.call(null,"  ",f_37336);

var G__37337 = cljs.core.next.call(null,seq__37316_37330__$1);
var G__37338 = null;
var G__37339 = (0);
var G__37340 = (0);
seq__37316_37320 = G__37337;
chunk__37317_37321 = G__37338;
count__37318_37322 = G__37339;
i__37319_37323 = G__37340;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__25106__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map?rel=1446160953146