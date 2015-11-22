// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29774_29788 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29775_29789 = null;
var count__29776_29790 = (0);
var i__29777_29791 = (0);
while(true){
if((i__29777_29791 < count__29776_29790)){
var f_29792 = cljs.core._nth.call(null,chunk__29775_29789,i__29777_29791);
cljs.core.println.call(null,"  ",f_29792);

var G__29793 = seq__29774_29788;
var G__29794 = chunk__29775_29789;
var G__29795 = count__29776_29790;
var G__29796 = (i__29777_29791 + (1));
seq__29774_29788 = G__29793;
chunk__29775_29789 = G__29794;
count__29776_29790 = G__29795;
i__29777_29791 = G__29796;
continue;
} else {
var temp__4425__auto___29797 = cljs.core.seq.call(null,seq__29774_29788);
if(temp__4425__auto___29797){
var seq__29774_29798__$1 = temp__4425__auto___29797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29774_29798__$1)){
var c__20373__auto___29799 = cljs.core.chunk_first.call(null,seq__29774_29798__$1);
var G__29800 = cljs.core.chunk_rest.call(null,seq__29774_29798__$1);
var G__29801 = c__20373__auto___29799;
var G__29802 = cljs.core.count.call(null,c__20373__auto___29799);
var G__29803 = (0);
seq__29774_29788 = G__29800;
chunk__29775_29789 = G__29801;
count__29776_29790 = G__29802;
i__29777_29791 = G__29803;
continue;
} else {
var f_29804 = cljs.core.first.call(null,seq__29774_29798__$1);
cljs.core.println.call(null,"  ",f_29804);

var G__29805 = cljs.core.next.call(null,seq__29774_29798__$1);
var G__29806 = null;
var G__29807 = (0);
var G__29808 = (0);
seq__29774_29788 = G__29805;
chunk__29775_29789 = G__29806;
count__29776_29790 = G__29807;
i__29777_29791 = G__29808;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29809 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19570__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29809);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29809)))?cljs.core.second.call(null,arglists_29809):arglists_29809));
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

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29778 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29779 = null;
var count__29780 = (0);
var i__29781 = (0);
while(true){
if((i__29781 < count__29780)){
var vec__29782 = cljs.core._nth.call(null,chunk__29779,i__29781);
var name = cljs.core.nth.call(null,vec__29782,(0),null);
var map__29783 = cljs.core.nth.call(null,vec__29782,(1),null);
var map__29783__$1 = ((((!((map__29783 == null)))?((((map__29783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29783):map__29783);
var doc = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29810 = seq__29778;
var G__29811 = chunk__29779;
var G__29812 = count__29780;
var G__29813 = (i__29781 + (1));
seq__29778 = G__29810;
chunk__29779 = G__29811;
count__29780 = G__29812;
i__29781 = G__29813;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29778);
if(temp__4425__auto__){
var seq__29778__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29778__$1)){
var c__20373__auto__ = cljs.core.chunk_first.call(null,seq__29778__$1);
var G__29814 = cljs.core.chunk_rest.call(null,seq__29778__$1);
var G__29815 = c__20373__auto__;
var G__29816 = cljs.core.count.call(null,c__20373__auto__);
var G__29817 = (0);
seq__29778 = G__29814;
chunk__29779 = G__29815;
count__29780 = G__29816;
i__29781 = G__29817;
continue;
} else {
var vec__29785 = cljs.core.first.call(null,seq__29778__$1);
var name = cljs.core.nth.call(null,vec__29785,(0),null);
var map__29786 = cljs.core.nth.call(null,vec__29785,(1),null);
var map__29786__$1 = ((((!((map__29786 == null)))?((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);
var doc = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29818 = cljs.core.next.call(null,seq__29778__$1);
var G__29819 = null;
var G__29820 = (0);
var G__29821 = (0);
seq__29778 = G__29818;
chunk__29779 = G__29819;
count__29780 = G__29820;
i__29781 = G__29821;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1447608117608