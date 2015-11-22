// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19570__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19570__auto__){
return or__19570__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19570__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28362_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28362_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28367 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28368 = null;
var count__28369 = (0);
var i__28370 = (0);
while(true){
if((i__28370 < count__28369)){
var n = cljs.core._nth.call(null,chunk__28368,i__28370);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28371 = seq__28367;
var G__28372 = chunk__28368;
var G__28373 = count__28369;
var G__28374 = (i__28370 + (1));
seq__28367 = G__28371;
chunk__28368 = G__28372;
count__28369 = G__28373;
i__28370 = G__28374;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28367);
if(temp__4425__auto__){
var seq__28367__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28367__$1)){
var c__20373__auto__ = cljs.core.chunk_first.call(null,seq__28367__$1);
var G__28375 = cljs.core.chunk_rest.call(null,seq__28367__$1);
var G__28376 = c__20373__auto__;
var G__28377 = cljs.core.count.call(null,c__20373__auto__);
var G__28378 = (0);
seq__28367 = G__28375;
chunk__28368 = G__28376;
count__28369 = G__28377;
i__28370 = G__28378;
continue;
} else {
var n = cljs.core.first.call(null,seq__28367__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28379 = cljs.core.next.call(null,seq__28367__$1);
var G__28380 = null;
var G__28381 = (0);
var G__28382 = (0);
seq__28367 = G__28379;
chunk__28368 = G__28380;
count__28369 = G__28381;
i__28370 = G__28382;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28421_28428 = cljs.core.seq.call(null,deps);
var chunk__28422_28429 = null;
var count__28423_28430 = (0);
var i__28424_28431 = (0);
while(true){
if((i__28424_28431 < count__28423_28430)){
var dep_28432 = cljs.core._nth.call(null,chunk__28422_28429,i__28424_28431);
topo_sort_helper_STAR_.call(null,dep_28432,(depth + (1)),state);

var G__28433 = seq__28421_28428;
var G__28434 = chunk__28422_28429;
var G__28435 = count__28423_28430;
var G__28436 = (i__28424_28431 + (1));
seq__28421_28428 = G__28433;
chunk__28422_28429 = G__28434;
count__28423_28430 = G__28435;
i__28424_28431 = G__28436;
continue;
} else {
var temp__4425__auto___28437 = cljs.core.seq.call(null,seq__28421_28428);
if(temp__4425__auto___28437){
var seq__28421_28438__$1 = temp__4425__auto___28437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28421_28438__$1)){
var c__20373__auto___28439 = cljs.core.chunk_first.call(null,seq__28421_28438__$1);
var G__28440 = cljs.core.chunk_rest.call(null,seq__28421_28438__$1);
var G__28441 = c__20373__auto___28439;
var G__28442 = cljs.core.count.call(null,c__20373__auto___28439);
var G__28443 = (0);
seq__28421_28428 = G__28440;
chunk__28422_28429 = G__28441;
count__28423_28430 = G__28442;
i__28424_28431 = G__28443;
continue;
} else {
var dep_28444 = cljs.core.first.call(null,seq__28421_28438__$1);
topo_sort_helper_STAR_.call(null,dep_28444,(depth + (1)),state);

var G__28445 = cljs.core.next.call(null,seq__28421_28438__$1);
var G__28446 = null;
var G__28447 = (0);
var G__28448 = (0);
seq__28421_28428 = G__28445;
chunk__28422_28429 = G__28446;
count__28423_28430 = G__28447;
i__28424_28431 = G__28448;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28425){
var vec__28427 = p__28425;
var x = cljs.core.nth.call(null,vec__28427,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28427,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28427,x,xs,get_deps__$1){
return (function (p1__28383_SHARP_){
return clojure.set.difference.call(null,p1__28383_SHARP_,x);
});})(vec__28427,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28461 = cljs.core.seq.call(null,provides);
var chunk__28462 = null;
var count__28463 = (0);
var i__28464 = (0);
while(true){
if((i__28464 < count__28463)){
var prov = cljs.core._nth.call(null,chunk__28462,i__28464);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28465_28473 = cljs.core.seq.call(null,requires);
var chunk__28466_28474 = null;
var count__28467_28475 = (0);
var i__28468_28476 = (0);
while(true){
if((i__28468_28476 < count__28467_28475)){
var req_28477 = cljs.core._nth.call(null,chunk__28466_28474,i__28468_28476);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28477,prov);

var G__28478 = seq__28465_28473;
var G__28479 = chunk__28466_28474;
var G__28480 = count__28467_28475;
var G__28481 = (i__28468_28476 + (1));
seq__28465_28473 = G__28478;
chunk__28466_28474 = G__28479;
count__28467_28475 = G__28480;
i__28468_28476 = G__28481;
continue;
} else {
var temp__4425__auto___28482 = cljs.core.seq.call(null,seq__28465_28473);
if(temp__4425__auto___28482){
var seq__28465_28483__$1 = temp__4425__auto___28482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28465_28483__$1)){
var c__20373__auto___28484 = cljs.core.chunk_first.call(null,seq__28465_28483__$1);
var G__28485 = cljs.core.chunk_rest.call(null,seq__28465_28483__$1);
var G__28486 = c__20373__auto___28484;
var G__28487 = cljs.core.count.call(null,c__20373__auto___28484);
var G__28488 = (0);
seq__28465_28473 = G__28485;
chunk__28466_28474 = G__28486;
count__28467_28475 = G__28487;
i__28468_28476 = G__28488;
continue;
} else {
var req_28489 = cljs.core.first.call(null,seq__28465_28483__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28489,prov);

var G__28490 = cljs.core.next.call(null,seq__28465_28483__$1);
var G__28491 = null;
var G__28492 = (0);
var G__28493 = (0);
seq__28465_28473 = G__28490;
chunk__28466_28474 = G__28491;
count__28467_28475 = G__28492;
i__28468_28476 = G__28493;
continue;
}
} else {
}
}
break;
}

var G__28494 = seq__28461;
var G__28495 = chunk__28462;
var G__28496 = count__28463;
var G__28497 = (i__28464 + (1));
seq__28461 = G__28494;
chunk__28462 = G__28495;
count__28463 = G__28496;
i__28464 = G__28497;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28461);
if(temp__4425__auto__){
var seq__28461__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28461__$1)){
var c__20373__auto__ = cljs.core.chunk_first.call(null,seq__28461__$1);
var G__28498 = cljs.core.chunk_rest.call(null,seq__28461__$1);
var G__28499 = c__20373__auto__;
var G__28500 = cljs.core.count.call(null,c__20373__auto__);
var G__28501 = (0);
seq__28461 = G__28498;
chunk__28462 = G__28499;
count__28463 = G__28500;
i__28464 = G__28501;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28461__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28469_28502 = cljs.core.seq.call(null,requires);
var chunk__28470_28503 = null;
var count__28471_28504 = (0);
var i__28472_28505 = (0);
while(true){
if((i__28472_28505 < count__28471_28504)){
var req_28506 = cljs.core._nth.call(null,chunk__28470_28503,i__28472_28505);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28506,prov);

var G__28507 = seq__28469_28502;
var G__28508 = chunk__28470_28503;
var G__28509 = count__28471_28504;
var G__28510 = (i__28472_28505 + (1));
seq__28469_28502 = G__28507;
chunk__28470_28503 = G__28508;
count__28471_28504 = G__28509;
i__28472_28505 = G__28510;
continue;
} else {
var temp__4425__auto___28511__$1 = cljs.core.seq.call(null,seq__28469_28502);
if(temp__4425__auto___28511__$1){
var seq__28469_28512__$1 = temp__4425__auto___28511__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28469_28512__$1)){
var c__20373__auto___28513 = cljs.core.chunk_first.call(null,seq__28469_28512__$1);
var G__28514 = cljs.core.chunk_rest.call(null,seq__28469_28512__$1);
var G__28515 = c__20373__auto___28513;
var G__28516 = cljs.core.count.call(null,c__20373__auto___28513);
var G__28517 = (0);
seq__28469_28502 = G__28514;
chunk__28470_28503 = G__28515;
count__28471_28504 = G__28516;
i__28472_28505 = G__28517;
continue;
} else {
var req_28518 = cljs.core.first.call(null,seq__28469_28512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28518,prov);

var G__28519 = cljs.core.next.call(null,seq__28469_28512__$1);
var G__28520 = null;
var G__28521 = (0);
var G__28522 = (0);
seq__28469_28502 = G__28519;
chunk__28470_28503 = G__28520;
count__28471_28504 = G__28521;
i__28472_28505 = G__28522;
continue;
}
} else {
}
}
break;
}

var G__28523 = cljs.core.next.call(null,seq__28461__$1);
var G__28524 = null;
var G__28525 = (0);
var G__28526 = (0);
seq__28461 = G__28523;
chunk__28462 = G__28524;
count__28463 = G__28525;
i__28464 = G__28526;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28531_28535 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28532_28536 = null;
var count__28533_28537 = (0);
var i__28534_28538 = (0);
while(true){
if((i__28534_28538 < count__28533_28537)){
var ns_28539 = cljs.core._nth.call(null,chunk__28532_28536,i__28534_28538);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28539);

var G__28540 = seq__28531_28535;
var G__28541 = chunk__28532_28536;
var G__28542 = count__28533_28537;
var G__28543 = (i__28534_28538 + (1));
seq__28531_28535 = G__28540;
chunk__28532_28536 = G__28541;
count__28533_28537 = G__28542;
i__28534_28538 = G__28543;
continue;
} else {
var temp__4425__auto___28544 = cljs.core.seq.call(null,seq__28531_28535);
if(temp__4425__auto___28544){
var seq__28531_28545__$1 = temp__4425__auto___28544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28531_28545__$1)){
var c__20373__auto___28546 = cljs.core.chunk_first.call(null,seq__28531_28545__$1);
var G__28547 = cljs.core.chunk_rest.call(null,seq__28531_28545__$1);
var G__28548 = c__20373__auto___28546;
var G__28549 = cljs.core.count.call(null,c__20373__auto___28546);
var G__28550 = (0);
seq__28531_28535 = G__28547;
chunk__28532_28536 = G__28548;
count__28533_28537 = G__28549;
i__28534_28538 = G__28550;
continue;
} else {
var ns_28551 = cljs.core.first.call(null,seq__28531_28545__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28551);

var G__28552 = cljs.core.next.call(null,seq__28531_28545__$1);
var G__28553 = null;
var G__28554 = (0);
var G__28555 = (0);
seq__28531_28535 = G__28552;
chunk__28532_28536 = G__28553;
count__28533_28537 = G__28554;
i__28534_28538 = G__28555;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19570__auto__ = goog.require__;
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28556__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28557__i = 0, G__28557__a = new Array(arguments.length -  0);
while (G__28557__i < G__28557__a.length) {G__28557__a[G__28557__i] = arguments[G__28557__i + 0]; ++G__28557__i;}
  args = new cljs.core.IndexedSeq(G__28557__a,0);
} 
return G__28556__delegate.call(this,args);};
G__28556.cljs$lang$maxFixedArity = 0;
G__28556.cljs$lang$applyTo = (function (arglist__28558){
var args = cljs.core.seq(arglist__28558);
return G__28556__delegate(args);
});
G__28556.cljs$core$IFn$_invoke$arity$variadic = G__28556__delegate;
return G__28556;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28560 = cljs.core._EQ_;
var expr__28561 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28561))){
var path_parts = ((function (pred__28560,expr__28561){
return (function (p1__28559_SHARP_){
return clojure.string.split.call(null,p1__28559_SHARP_,/[\/\\]/);
});})(pred__28560,expr__28561))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28560,expr__28561){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28563){if((e28563 instanceof Error)){
var e = e28563;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28563;

}
}})());
});
;})(path_parts,sep,root,pred__28560,expr__28561))
} else {
if(cljs.core.truth_(pred__28560.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28561))){
return ((function (pred__28560,expr__28561){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28560,expr__28561){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28560,expr__28561))
);

return deferred.addErrback(((function (deferred,pred__28560,expr__28561){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28560,expr__28561))
);
});
;})(pred__28560,expr__28561))
} else {
return ((function (pred__28560,expr__28561){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28560,expr__28561))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28564,callback){
var map__28567 = p__28564;
var map__28567__$1 = ((((!((map__28567 == null)))?((((map__28567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28567):map__28567);
var file_msg = map__28567__$1;
var request_url = cljs.core.get.call(null,map__28567__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28567,map__28567__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28567,map__28567__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_28591){
var state_val_28592 = (state_28591[(1)]);
if((state_val_28592 === (7))){
var inst_28587 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
var statearr_28593_28613 = state_28591__$1;
(statearr_28593_28613[(2)] = inst_28587);

(statearr_28593_28613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (1))){
var state_28591__$1 = state_28591;
var statearr_28594_28614 = state_28591__$1;
(statearr_28594_28614[(2)] = null);

(statearr_28594_28614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (4))){
var inst_28571 = (state_28591[(7)]);
var inst_28571__$1 = (state_28591[(2)]);
var state_28591__$1 = (function (){var statearr_28595 = state_28591;
(statearr_28595[(7)] = inst_28571__$1);

return statearr_28595;
})();
if(cljs.core.truth_(inst_28571__$1)){
var statearr_28596_28615 = state_28591__$1;
(statearr_28596_28615[(1)] = (5));

} else {
var statearr_28597_28616 = state_28591__$1;
(statearr_28597_28616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (6))){
var state_28591__$1 = state_28591;
var statearr_28598_28617 = state_28591__$1;
(statearr_28598_28617[(2)] = null);

(statearr_28598_28617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (3))){
var inst_28589 = (state_28591[(2)]);
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28591__$1,inst_28589);
} else {
if((state_val_28592 === (2))){
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28592 === (11))){
var inst_28583 = (state_28591[(2)]);
var state_28591__$1 = (function (){var statearr_28599 = state_28591;
(statearr_28599[(8)] = inst_28583);

return statearr_28599;
})();
var statearr_28600_28618 = state_28591__$1;
(statearr_28600_28618[(2)] = null);

(statearr_28600_28618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (9))){
var inst_28577 = (state_28591[(9)]);
var inst_28575 = (state_28591[(10)]);
var inst_28579 = inst_28577.call(null,inst_28575);
var state_28591__$1 = state_28591;
var statearr_28601_28619 = state_28591__$1;
(statearr_28601_28619[(2)] = inst_28579);

(statearr_28601_28619[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (5))){
var inst_28571 = (state_28591[(7)]);
var inst_28573 = figwheel.client.file_reloading.blocking_load.call(null,inst_28571);
var state_28591__$1 = state_28591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,(8),inst_28573);
} else {
if((state_val_28592 === (10))){
var inst_28575 = (state_28591[(10)]);
var inst_28581 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28575);
var state_28591__$1 = state_28591;
var statearr_28602_28620 = state_28591__$1;
(statearr_28602_28620[(2)] = inst_28581);

(statearr_28602_28620[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28592 === (8))){
var inst_28577 = (state_28591[(9)]);
var inst_28571 = (state_28591[(7)]);
var inst_28575 = (state_28591[(2)]);
var inst_28576 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28577__$1 = cljs.core.get.call(null,inst_28576,inst_28571);
var state_28591__$1 = (function (){var statearr_28603 = state_28591;
(statearr_28603[(9)] = inst_28577__$1);

(statearr_28603[(10)] = inst_28575);

return statearr_28603;
})();
if(cljs.core.truth_(inst_28577__$1)){
var statearr_28604_28621 = state_28591__$1;
(statearr_28604_28621[(1)] = (9));

} else {
var statearr_28605_28622 = state_28591__$1;
(statearr_28605_28622[(1)] = (10));

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
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23745__auto__ = null;
var figwheel$client$file_reloading$state_machine__23745__auto____0 = (function (){
var statearr_28609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28609[(0)] = figwheel$client$file_reloading$state_machine__23745__auto__);

(statearr_28609[(1)] = (1));

return statearr_28609;
});
var figwheel$client$file_reloading$state_machine__23745__auto____1 = (function (state_28591){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_28591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e28610){if((e28610 instanceof Object)){
var ex__23748__auto__ = e28610;
var statearr_28611_28623 = state_28591;
(statearr_28611_28623[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28624 = state_28591;
state_28591 = G__28624;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23745__auto__ = function(state_28591){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23745__auto____1.call(this,state_28591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23745__auto____0;
figwheel$client$file_reloading$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23745__auto____1;
return figwheel$client$file_reloading$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_28612 = f__23857__auto__.call(null);
(statearr_28612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_28612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28625,callback){
var map__28628 = p__28625;
var map__28628__$1 = ((((!((map__28628 == null)))?((((map__28628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28628):map__28628);
var file_msg = map__28628__$1;
var namespace = cljs.core.get.call(null,map__28628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28628,map__28628__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28628,map__28628__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28630){
var map__28633 = p__28630;
var map__28633__$1 = ((((!((map__28633 == null)))?((((map__28633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28633):map__28633);
var file_msg = map__28633__$1;
var namespace = cljs.core.get.call(null,map__28633__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19558__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19558__auto__){
var or__19570__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
var or__19570__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19570__auto____$1)){
return or__19570__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19558__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28635,callback){
var map__28638 = p__28635;
var map__28638__$1 = ((((!((map__28638 == null)))?((((map__28638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28638):map__28638);
var file_msg = map__28638__$1;
var request_url = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23856__auto___28726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___28726,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___28726,out){
return (function (state_28708){
var state_val_28709 = (state_28708[(1)]);
if((state_val_28709 === (1))){
var inst_28686 = cljs.core.nth.call(null,files,(0),null);
var inst_28687 = cljs.core.nthnext.call(null,files,(1));
var inst_28688 = files;
var state_28708__$1 = (function (){var statearr_28710 = state_28708;
(statearr_28710[(7)] = inst_28686);

(statearr_28710[(8)] = inst_28687);

(statearr_28710[(9)] = inst_28688);

return statearr_28710;
})();
var statearr_28711_28727 = state_28708__$1;
(statearr_28711_28727[(2)] = null);

(statearr_28711_28727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (2))){
var inst_28691 = (state_28708[(10)]);
var inst_28688 = (state_28708[(9)]);
var inst_28691__$1 = cljs.core.nth.call(null,inst_28688,(0),null);
var inst_28692 = cljs.core.nthnext.call(null,inst_28688,(1));
var inst_28693 = (inst_28691__$1 == null);
var inst_28694 = cljs.core.not.call(null,inst_28693);
var state_28708__$1 = (function (){var statearr_28712 = state_28708;
(statearr_28712[(10)] = inst_28691__$1);

(statearr_28712[(11)] = inst_28692);

return statearr_28712;
})();
if(inst_28694){
var statearr_28713_28728 = state_28708__$1;
(statearr_28713_28728[(1)] = (4));

} else {
var statearr_28714_28729 = state_28708__$1;
(statearr_28714_28729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (3))){
var inst_28706 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28708__$1,inst_28706);
} else {
if((state_val_28709 === (4))){
var inst_28691 = (state_28708[(10)]);
var inst_28696 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28691);
var state_28708__$1 = state_28708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28708__$1,(7),inst_28696);
} else {
if((state_val_28709 === (5))){
var inst_28702 = cljs.core.async.close_BANG_.call(null,out);
var state_28708__$1 = state_28708;
var statearr_28715_28730 = state_28708__$1;
(statearr_28715_28730[(2)] = inst_28702);

(statearr_28715_28730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (6))){
var inst_28704 = (state_28708[(2)]);
var state_28708__$1 = state_28708;
var statearr_28716_28731 = state_28708__$1;
(statearr_28716_28731[(2)] = inst_28704);

(statearr_28716_28731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28709 === (7))){
var inst_28692 = (state_28708[(11)]);
var inst_28698 = (state_28708[(2)]);
var inst_28699 = cljs.core.async.put_BANG_.call(null,out,inst_28698);
var inst_28688 = inst_28692;
var state_28708__$1 = (function (){var statearr_28717 = state_28708;
(statearr_28717[(12)] = inst_28699);

(statearr_28717[(9)] = inst_28688);

return statearr_28717;
})();
var statearr_28718_28732 = state_28708__$1;
(statearr_28718_28732[(2)] = null);

(statearr_28718_28732[(1)] = (2));


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
});})(c__23856__auto___28726,out))
;
return ((function (switch__23744__auto__,c__23856__auto___28726,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____0 = (function (){
var statearr_28722 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28722[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__);

(statearr_28722[(1)] = (1));

return statearr_28722;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____1 = (function (state_28708){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_28708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e28723){if((e28723 instanceof Object)){
var ex__23748__auto__ = e28723;
var statearr_28724_28733 = state_28708;
(statearr_28724_28733[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28734 = state_28708;
state_28708 = G__28734;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__ = function(state_28708){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____1.call(this,state_28708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___28726,out))
})();
var state__23858__auto__ = (function (){var statearr_28725 = f__23857__auto__.call(null);
(statearr_28725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___28726);

return statearr_28725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___28726,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28735,opts){
var map__28739 = p__28735;
var map__28739__$1 = ((((!((map__28739 == null)))?((((map__28739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28739):map__28739);
var eval_body__$1 = cljs.core.get.call(null,map__28739__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19558__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19558__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19558__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28741){var e = e28741;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28742_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28742_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28747){
var vec__28748 = p__28747;
var k = cljs.core.nth.call(null,vec__28748,(0),null);
var v = cljs.core.nth.call(null,vec__28748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28749){
var vec__28750 = p__28749;
var k = cljs.core.nth.call(null,vec__28750,(0),null);
var v = cljs.core.nth.call(null,vec__28750,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28754,p__28755){
var map__29002 = p__28754;
var map__29002__$1 = ((((!((map__29002 == null)))?((((map__29002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29002):map__29002);
var opts = map__29002__$1;
var before_jsload = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29002__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29003 = p__28755;
var map__29003__$1 = ((((!((map__29003 == null)))?((((map__29003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29003):map__29003);
var msg = map__29003__$1;
var files = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29003__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29156){
var state_val_29157 = (state_29156[(1)]);
if((state_val_29157 === (7))){
var inst_29018 = (state_29156[(7)]);
var inst_29019 = (state_29156[(8)]);
var inst_29020 = (state_29156[(9)]);
var inst_29017 = (state_29156[(10)]);
var inst_29025 = cljs.core._nth.call(null,inst_29018,inst_29020);
var inst_29026 = figwheel.client.file_reloading.eval_body.call(null,inst_29025,opts);
var inst_29027 = (inst_29020 + (1));
var tmp29158 = inst_29018;
var tmp29159 = inst_29019;
var tmp29160 = inst_29017;
var inst_29017__$1 = tmp29160;
var inst_29018__$1 = tmp29158;
var inst_29019__$1 = tmp29159;
var inst_29020__$1 = inst_29027;
var state_29156__$1 = (function (){var statearr_29161 = state_29156;
(statearr_29161[(7)] = inst_29018__$1);

(statearr_29161[(8)] = inst_29019__$1);

(statearr_29161[(11)] = inst_29026);

(statearr_29161[(9)] = inst_29020__$1);

(statearr_29161[(10)] = inst_29017__$1);

return statearr_29161;
})();
var statearr_29162_29248 = state_29156__$1;
(statearr_29162_29248[(2)] = null);

(statearr_29162_29248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (20))){
var inst_29060 = (state_29156[(12)]);
var inst_29068 = figwheel.client.file_reloading.sort_files.call(null,inst_29060);
var state_29156__$1 = state_29156;
var statearr_29163_29249 = state_29156__$1;
(statearr_29163_29249[(2)] = inst_29068);

(statearr_29163_29249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (27))){
var state_29156__$1 = state_29156;
var statearr_29164_29250 = state_29156__$1;
(statearr_29164_29250[(2)] = null);

(statearr_29164_29250[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (1))){
var inst_29009 = (state_29156[(13)]);
var inst_29006 = before_jsload.call(null,files);
var inst_29007 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29008 = (function (){return ((function (inst_29009,inst_29006,inst_29007,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28751_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28751_SHARP_);
});
;})(inst_29009,inst_29006,inst_29007,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29009__$1 = cljs.core.filter.call(null,inst_29008,files);
var inst_29010 = cljs.core.not_empty.call(null,inst_29009__$1);
var state_29156__$1 = (function (){var statearr_29165 = state_29156;
(statearr_29165[(13)] = inst_29009__$1);

(statearr_29165[(14)] = inst_29007);

(statearr_29165[(15)] = inst_29006);

return statearr_29165;
})();
if(cljs.core.truth_(inst_29010)){
var statearr_29166_29251 = state_29156__$1;
(statearr_29166_29251[(1)] = (2));

} else {
var statearr_29167_29252 = state_29156__$1;
(statearr_29167_29252[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (24))){
var state_29156__$1 = state_29156;
var statearr_29168_29253 = state_29156__$1;
(statearr_29168_29253[(2)] = null);

(statearr_29168_29253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (39))){
var inst_29110 = (state_29156[(16)]);
var state_29156__$1 = state_29156;
var statearr_29169_29254 = state_29156__$1;
(statearr_29169_29254[(2)] = inst_29110);

(statearr_29169_29254[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (46))){
var inst_29151 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29170_29255 = state_29156__$1;
(statearr_29170_29255[(2)] = inst_29151);

(statearr_29170_29255[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (4))){
var inst_29054 = (state_29156[(2)]);
var inst_29055 = cljs.core.List.EMPTY;
var inst_29056 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29055);
var inst_29057 = (function (){return ((function (inst_29054,inst_29055,inst_29056,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28752_SHARP_){
var and__19558__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28752_SHARP_);
if(cljs.core.truth_(and__19558__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28752_SHARP_));
} else {
return and__19558__auto__;
}
});
;})(inst_29054,inst_29055,inst_29056,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29058 = cljs.core.filter.call(null,inst_29057,files);
var inst_29059 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29060 = cljs.core.concat.call(null,inst_29058,inst_29059);
var state_29156__$1 = (function (){var statearr_29171 = state_29156;
(statearr_29171[(12)] = inst_29060);

(statearr_29171[(17)] = inst_29056);

(statearr_29171[(18)] = inst_29054);

return statearr_29171;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29172_29256 = state_29156__$1;
(statearr_29172_29256[(1)] = (16));

} else {
var statearr_29173_29257 = state_29156__$1;
(statearr_29173_29257[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (15))){
var inst_29044 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29174_29258 = state_29156__$1;
(statearr_29174_29258[(2)] = inst_29044);

(statearr_29174_29258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (21))){
var inst_29070 = (state_29156[(19)]);
var inst_29070__$1 = (state_29156[(2)]);
var inst_29071 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29070__$1);
var state_29156__$1 = (function (){var statearr_29175 = state_29156;
(statearr_29175[(19)] = inst_29070__$1);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29156__$1,(22),inst_29071);
} else {
if((state_val_29157 === (31))){
var inst_29154 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29156__$1,inst_29154);
} else {
if((state_val_29157 === (32))){
var inst_29110 = (state_29156[(16)]);
var inst_29115 = inst_29110.cljs$lang$protocol_mask$partition0$;
var inst_29116 = (inst_29115 & (64));
var inst_29117 = inst_29110.cljs$core$ISeq$;
var inst_29118 = (inst_29116) || (inst_29117);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29118)){
var statearr_29176_29259 = state_29156__$1;
(statearr_29176_29259[(1)] = (35));

} else {
var statearr_29177_29260 = state_29156__$1;
(statearr_29177_29260[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (40))){
var inst_29131 = (state_29156[(20)]);
var inst_29130 = (state_29156[(2)]);
var inst_29131__$1 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29132 = cljs.core.get.call(null,inst_29130,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29133 = cljs.core.not_empty.call(null,inst_29131__$1);
var state_29156__$1 = (function (){var statearr_29178 = state_29156;
(statearr_29178[(20)] = inst_29131__$1);

(statearr_29178[(21)] = inst_29132);

return statearr_29178;
})();
if(cljs.core.truth_(inst_29133)){
var statearr_29179_29261 = state_29156__$1;
(statearr_29179_29261[(1)] = (41));

} else {
var statearr_29180_29262 = state_29156__$1;
(statearr_29180_29262[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (33))){
var state_29156__$1 = state_29156;
var statearr_29181_29263 = state_29156__$1;
(statearr_29181_29263[(2)] = false);

(statearr_29181_29263[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (13))){
var inst_29030 = (state_29156[(22)]);
var inst_29034 = cljs.core.chunk_first.call(null,inst_29030);
var inst_29035 = cljs.core.chunk_rest.call(null,inst_29030);
var inst_29036 = cljs.core.count.call(null,inst_29034);
var inst_29017 = inst_29035;
var inst_29018 = inst_29034;
var inst_29019 = inst_29036;
var inst_29020 = (0);
var state_29156__$1 = (function (){var statearr_29182 = state_29156;
(statearr_29182[(7)] = inst_29018);

(statearr_29182[(8)] = inst_29019);

(statearr_29182[(9)] = inst_29020);

(statearr_29182[(10)] = inst_29017);

return statearr_29182;
})();
var statearr_29183_29264 = state_29156__$1;
(statearr_29183_29264[(2)] = null);

(statearr_29183_29264[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (22))){
var inst_29074 = (state_29156[(23)]);
var inst_29070 = (state_29156[(19)]);
var inst_29078 = (state_29156[(24)]);
var inst_29073 = (state_29156[(25)]);
var inst_29073__$1 = (state_29156[(2)]);
var inst_29074__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29073__$1);
var inst_29075 = (function (){var all_files = inst_29070;
var res_SINGLEQUOTE_ = inst_29073__$1;
var res = inst_29074__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29074,inst_29070,inst_29078,inst_29073,inst_29073__$1,inst_29074__$1,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28753_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28753_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29074,inst_29070,inst_29078,inst_29073,inst_29073__$1,inst_29074__$1,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29076 = cljs.core.filter.call(null,inst_29075,inst_29073__$1);
var inst_29077 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29078__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29077);
var inst_29079 = cljs.core.not_empty.call(null,inst_29078__$1);
var state_29156__$1 = (function (){var statearr_29184 = state_29156;
(statearr_29184[(23)] = inst_29074__$1);

(statearr_29184[(26)] = inst_29076);

(statearr_29184[(24)] = inst_29078__$1);

(statearr_29184[(25)] = inst_29073__$1);

return statearr_29184;
})();
if(cljs.core.truth_(inst_29079)){
var statearr_29185_29265 = state_29156__$1;
(statearr_29185_29265[(1)] = (23));

} else {
var statearr_29186_29266 = state_29156__$1;
(statearr_29186_29266[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (36))){
var state_29156__$1 = state_29156;
var statearr_29187_29267 = state_29156__$1;
(statearr_29187_29267[(2)] = false);

(statearr_29187_29267[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (41))){
var inst_29131 = (state_29156[(20)]);
var inst_29135 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29136 = cljs.core.map.call(null,inst_29135,inst_29131);
var inst_29137 = cljs.core.pr_str.call(null,inst_29136);
var inst_29138 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29137)].join('');
var inst_29139 = figwheel.client.utils.log.call(null,inst_29138);
var state_29156__$1 = state_29156;
var statearr_29188_29268 = state_29156__$1;
(statearr_29188_29268[(2)] = inst_29139);

(statearr_29188_29268[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (43))){
var inst_29132 = (state_29156[(21)]);
var inst_29142 = (state_29156[(2)]);
var inst_29143 = cljs.core.not_empty.call(null,inst_29132);
var state_29156__$1 = (function (){var statearr_29189 = state_29156;
(statearr_29189[(27)] = inst_29142);

return statearr_29189;
})();
if(cljs.core.truth_(inst_29143)){
var statearr_29190_29269 = state_29156__$1;
(statearr_29190_29269[(1)] = (44));

} else {
var statearr_29191_29270 = state_29156__$1;
(statearr_29191_29270[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (29))){
var inst_29074 = (state_29156[(23)]);
var inst_29076 = (state_29156[(26)]);
var inst_29110 = (state_29156[(16)]);
var inst_29070 = (state_29156[(19)]);
var inst_29078 = (state_29156[(24)]);
var inst_29073 = (state_29156[(25)]);
var inst_29106 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29109 = (function (){var all_files = inst_29070;
var res_SINGLEQUOTE_ = inst_29073;
var res = inst_29074;
var files_not_loaded = inst_29076;
var dependencies_that_loaded = inst_29078;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29110,inst_29070,inst_29078,inst_29073,inst_29106,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29108){
var map__29192 = p__29108;
var map__29192__$1 = ((((!((map__29192 == null)))?((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var namespace = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29110,inst_29070,inst_29078,inst_29073,inst_29106,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29110__$1 = cljs.core.group_by.call(null,inst_29109,inst_29076);
var inst_29112 = (inst_29110__$1 == null);
var inst_29113 = cljs.core.not.call(null,inst_29112);
var state_29156__$1 = (function (){var statearr_29194 = state_29156;
(statearr_29194[(16)] = inst_29110__$1);

(statearr_29194[(28)] = inst_29106);

return statearr_29194;
})();
if(inst_29113){
var statearr_29195_29271 = state_29156__$1;
(statearr_29195_29271[(1)] = (32));

} else {
var statearr_29196_29272 = state_29156__$1;
(statearr_29196_29272[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (44))){
var inst_29132 = (state_29156[(21)]);
var inst_29145 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29132);
var inst_29146 = cljs.core.pr_str.call(null,inst_29145);
var inst_29147 = [cljs.core.str("not required: "),cljs.core.str(inst_29146)].join('');
var inst_29148 = figwheel.client.utils.log.call(null,inst_29147);
var state_29156__$1 = state_29156;
var statearr_29197_29273 = state_29156__$1;
(statearr_29197_29273[(2)] = inst_29148);

(statearr_29197_29273[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (6))){
var inst_29051 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29198_29274 = state_29156__$1;
(statearr_29198_29274[(2)] = inst_29051);

(statearr_29198_29274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (28))){
var inst_29076 = (state_29156[(26)]);
var inst_29103 = (state_29156[(2)]);
var inst_29104 = cljs.core.not_empty.call(null,inst_29076);
var state_29156__$1 = (function (){var statearr_29199 = state_29156;
(statearr_29199[(29)] = inst_29103);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29104)){
var statearr_29200_29275 = state_29156__$1;
(statearr_29200_29275[(1)] = (29));

} else {
var statearr_29201_29276 = state_29156__$1;
(statearr_29201_29276[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (25))){
var inst_29074 = (state_29156[(23)]);
var inst_29090 = (state_29156[(2)]);
var inst_29091 = cljs.core.not_empty.call(null,inst_29074);
var state_29156__$1 = (function (){var statearr_29202 = state_29156;
(statearr_29202[(30)] = inst_29090);

return statearr_29202;
})();
if(cljs.core.truth_(inst_29091)){
var statearr_29203_29277 = state_29156__$1;
(statearr_29203_29277[(1)] = (26));

} else {
var statearr_29204_29278 = state_29156__$1;
(statearr_29204_29278[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (34))){
var inst_29125 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29125)){
var statearr_29205_29279 = state_29156__$1;
(statearr_29205_29279[(1)] = (38));

} else {
var statearr_29206_29280 = state_29156__$1;
(statearr_29206_29280[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (17))){
var state_29156__$1 = state_29156;
var statearr_29207_29281 = state_29156__$1;
(statearr_29207_29281[(2)] = recompile_dependents);

(statearr_29207_29281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (3))){
var state_29156__$1 = state_29156;
var statearr_29208_29282 = state_29156__$1;
(statearr_29208_29282[(2)] = null);

(statearr_29208_29282[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (12))){
var inst_29047 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29209_29283 = state_29156__$1;
(statearr_29209_29283[(2)] = inst_29047);

(statearr_29209_29283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (2))){
var inst_29009 = (state_29156[(13)]);
var inst_29016 = cljs.core.seq.call(null,inst_29009);
var inst_29017 = inst_29016;
var inst_29018 = null;
var inst_29019 = (0);
var inst_29020 = (0);
var state_29156__$1 = (function (){var statearr_29210 = state_29156;
(statearr_29210[(7)] = inst_29018);

(statearr_29210[(8)] = inst_29019);

(statearr_29210[(9)] = inst_29020);

(statearr_29210[(10)] = inst_29017);

return statearr_29210;
})();
var statearr_29211_29284 = state_29156__$1;
(statearr_29211_29284[(2)] = null);

(statearr_29211_29284[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (23))){
var inst_29074 = (state_29156[(23)]);
var inst_29076 = (state_29156[(26)]);
var inst_29070 = (state_29156[(19)]);
var inst_29078 = (state_29156[(24)]);
var inst_29073 = (state_29156[(25)]);
var inst_29081 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29083 = (function (){var all_files = inst_29070;
var res_SINGLEQUOTE_ = inst_29073;
var res = inst_29074;
var files_not_loaded = inst_29076;
var dependencies_that_loaded = inst_29078;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29081,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29082){
var map__29212 = p__29082;
var map__29212__$1 = ((((!((map__29212 == null)))?((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var request_url = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29081,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29084 = cljs.core.reverse.call(null,inst_29078);
var inst_29085 = cljs.core.map.call(null,inst_29083,inst_29084);
var inst_29086 = cljs.core.pr_str.call(null,inst_29085);
var inst_29087 = figwheel.client.utils.log.call(null,inst_29086);
var state_29156__$1 = (function (){var statearr_29214 = state_29156;
(statearr_29214[(31)] = inst_29081);

return statearr_29214;
})();
var statearr_29215_29285 = state_29156__$1;
(statearr_29215_29285[(2)] = inst_29087);

(statearr_29215_29285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (35))){
var state_29156__$1 = state_29156;
var statearr_29216_29286 = state_29156__$1;
(statearr_29216_29286[(2)] = true);

(statearr_29216_29286[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (19))){
var inst_29060 = (state_29156[(12)]);
var inst_29066 = figwheel.client.file_reloading.expand_files.call(null,inst_29060);
var state_29156__$1 = state_29156;
var statearr_29217_29287 = state_29156__$1;
(statearr_29217_29287[(2)] = inst_29066);

(statearr_29217_29287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (11))){
var state_29156__$1 = state_29156;
var statearr_29218_29288 = state_29156__$1;
(statearr_29218_29288[(2)] = null);

(statearr_29218_29288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (9))){
var inst_29049 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29219_29289 = state_29156__$1;
(statearr_29219_29289[(2)] = inst_29049);

(statearr_29219_29289[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (5))){
var inst_29019 = (state_29156[(8)]);
var inst_29020 = (state_29156[(9)]);
var inst_29022 = (inst_29020 < inst_29019);
var inst_29023 = inst_29022;
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29023)){
var statearr_29220_29290 = state_29156__$1;
(statearr_29220_29290[(1)] = (7));

} else {
var statearr_29221_29291 = state_29156__$1;
(statearr_29221_29291[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (14))){
var inst_29030 = (state_29156[(22)]);
var inst_29039 = cljs.core.first.call(null,inst_29030);
var inst_29040 = figwheel.client.file_reloading.eval_body.call(null,inst_29039,opts);
var inst_29041 = cljs.core.next.call(null,inst_29030);
var inst_29017 = inst_29041;
var inst_29018 = null;
var inst_29019 = (0);
var inst_29020 = (0);
var state_29156__$1 = (function (){var statearr_29222 = state_29156;
(statearr_29222[(7)] = inst_29018);

(statearr_29222[(8)] = inst_29019);

(statearr_29222[(32)] = inst_29040);

(statearr_29222[(9)] = inst_29020);

(statearr_29222[(10)] = inst_29017);

return statearr_29222;
})();
var statearr_29223_29292 = state_29156__$1;
(statearr_29223_29292[(2)] = null);

(statearr_29223_29292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (45))){
var state_29156__$1 = state_29156;
var statearr_29224_29293 = state_29156__$1;
(statearr_29224_29293[(2)] = null);

(statearr_29224_29293[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (26))){
var inst_29074 = (state_29156[(23)]);
var inst_29076 = (state_29156[(26)]);
var inst_29070 = (state_29156[(19)]);
var inst_29078 = (state_29156[(24)]);
var inst_29073 = (state_29156[(25)]);
var inst_29093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29095 = (function (){var all_files = inst_29070;
var res_SINGLEQUOTE_ = inst_29073;
var res = inst_29074;
var files_not_loaded = inst_29076;
var dependencies_that_loaded = inst_29078;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29093,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29094){
var map__29225 = p__29094;
var map__29225__$1 = ((((!((map__29225 == null)))?((((map__29225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29225):map__29225);
var namespace = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29225__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29093,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29096 = cljs.core.map.call(null,inst_29095,inst_29074);
var inst_29097 = cljs.core.pr_str.call(null,inst_29096);
var inst_29098 = figwheel.client.utils.log.call(null,inst_29097);
var inst_29099 = (function (){var all_files = inst_29070;
var res_SINGLEQUOTE_ = inst_29073;
var res = inst_29074;
var files_not_loaded = inst_29076;
var dependencies_that_loaded = inst_29078;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29093,inst_29095,inst_29096,inst_29097,inst_29098,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29074,inst_29076,inst_29070,inst_29078,inst_29073,inst_29093,inst_29095,inst_29096,inst_29097,inst_29098,state_val_29157,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29100 = setTimeout(inst_29099,(10));
var state_29156__$1 = (function (){var statearr_29227 = state_29156;
(statearr_29227[(33)] = inst_29098);

(statearr_29227[(34)] = inst_29093);

return statearr_29227;
})();
var statearr_29228_29294 = state_29156__$1;
(statearr_29228_29294[(2)] = inst_29100);

(statearr_29228_29294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (16))){
var state_29156__$1 = state_29156;
var statearr_29229_29295 = state_29156__$1;
(statearr_29229_29295[(2)] = reload_dependents);

(statearr_29229_29295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (38))){
var inst_29110 = (state_29156[(16)]);
var inst_29127 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29110);
var state_29156__$1 = state_29156;
var statearr_29230_29296 = state_29156__$1;
(statearr_29230_29296[(2)] = inst_29127);

(statearr_29230_29296[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (30))){
var state_29156__$1 = state_29156;
var statearr_29231_29297 = state_29156__$1;
(statearr_29231_29297[(2)] = null);

(statearr_29231_29297[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (10))){
var inst_29030 = (state_29156[(22)]);
var inst_29032 = cljs.core.chunked_seq_QMARK_.call(null,inst_29030);
var state_29156__$1 = state_29156;
if(inst_29032){
var statearr_29232_29298 = state_29156__$1;
(statearr_29232_29298[(1)] = (13));

} else {
var statearr_29233_29299 = state_29156__$1;
(statearr_29233_29299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (18))){
var inst_29064 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
if(cljs.core.truth_(inst_29064)){
var statearr_29234_29300 = state_29156__$1;
(statearr_29234_29300[(1)] = (19));

} else {
var statearr_29235_29301 = state_29156__$1;
(statearr_29235_29301[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (42))){
var state_29156__$1 = state_29156;
var statearr_29236_29302 = state_29156__$1;
(statearr_29236_29302[(2)] = null);

(statearr_29236_29302[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (37))){
var inst_29122 = (state_29156[(2)]);
var state_29156__$1 = state_29156;
var statearr_29237_29303 = state_29156__$1;
(statearr_29237_29303[(2)] = inst_29122);

(statearr_29237_29303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29157 === (8))){
var inst_29030 = (state_29156[(22)]);
var inst_29017 = (state_29156[(10)]);
var inst_29030__$1 = cljs.core.seq.call(null,inst_29017);
var state_29156__$1 = (function (){var statearr_29238 = state_29156;
(statearr_29238[(22)] = inst_29030__$1);

return statearr_29238;
})();
if(inst_29030__$1){
var statearr_29239_29304 = state_29156__$1;
(statearr_29239_29304[(1)] = (10));

} else {
var statearr_29240_29305 = state_29156__$1;
(statearr_29240_29305[(1)] = (11));

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
});})(c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23744__auto__,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____0 = (function (){
var statearr_29244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29244[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__);

(statearr_29244[(1)] = (1));

return statearr_29244;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____1 = (function (state_29156){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_29156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e29245){if((e29245 instanceof Object)){
var ex__23748__auto__ = e29245;
var statearr_29246_29306 = state_29156;
(statearr_29246_29306[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29307 = state_29156;
state_29156 = G__29307;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__ = function(state_29156){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____1.call(this,state_29156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23858__auto__ = (function (){var statearr_29247 = f__23857__auto__.call(null);
(statearr_29247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_29247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__,map__29002,map__29002__$1,opts,before_jsload,on_jsload,reload_dependents,map__29003,map__29003__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23856__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29310,link){
var map__29313 = p__29310;
var map__29313__$1 = ((((!((map__29313 == null)))?((((map__29313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29313):map__29313);
var file = cljs.core.get.call(null,map__29313__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29313,map__29313__$1,file){
return (function (p1__29308_SHARP_,p2__29309_SHARP_){
if(cljs.core._EQ_.call(null,p1__29308_SHARP_,p2__29309_SHARP_)){
return p1__29308_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29313,map__29313__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29319){
var map__29320 = p__29319;
var map__29320__$1 = ((((!((map__29320 == null)))?((((map__29320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29320):map__29320);
var match_length = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29320__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29315_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29315_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29322 = [];
var len__20629__auto___29325 = arguments.length;
var i__20630__auto___29326 = (0);
while(true){
if((i__20630__auto___29326 < len__20629__auto___29325)){
args29322.push((arguments[i__20630__auto___29326]));

var G__29327 = (i__20630__auto___29326 + (1));
i__20630__auto___29326 = G__29327;
continue;
} else {
}
break;
}

var G__29324 = args29322.length;
switch (G__29324) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29322.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29329_SHARP_,p2__29330_SHARP_){
return cljs.core.assoc.call(null,p1__29329_SHARP_,cljs.core.get.call(null,p2__29330_SHARP_,key),p2__29330_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29331){
var map__29334 = p__29331;
var map__29334__$1 = ((((!((map__29334 == null)))?((((map__29334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29334):map__29334);
var f_data = map__29334__$1;
var file = cljs.core.get.call(null,map__29334__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29336,files_msg){
var map__29343 = p__29336;
var map__29343__$1 = ((((!((map__29343 == null)))?((((map__29343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29343):map__29343);
var opts = map__29343__$1;
var on_cssload = cljs.core.get.call(null,map__29343__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29345_29349 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29346_29350 = null;
var count__29347_29351 = (0);
var i__29348_29352 = (0);
while(true){
if((i__29348_29352 < count__29347_29351)){
var f_29353 = cljs.core._nth.call(null,chunk__29346_29350,i__29348_29352);
figwheel.client.file_reloading.reload_css_file.call(null,f_29353);

var G__29354 = seq__29345_29349;
var G__29355 = chunk__29346_29350;
var G__29356 = count__29347_29351;
var G__29357 = (i__29348_29352 + (1));
seq__29345_29349 = G__29354;
chunk__29346_29350 = G__29355;
count__29347_29351 = G__29356;
i__29348_29352 = G__29357;
continue;
} else {
var temp__4425__auto___29358 = cljs.core.seq.call(null,seq__29345_29349);
if(temp__4425__auto___29358){
var seq__29345_29359__$1 = temp__4425__auto___29358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29345_29359__$1)){
var c__20373__auto___29360 = cljs.core.chunk_first.call(null,seq__29345_29359__$1);
var G__29361 = cljs.core.chunk_rest.call(null,seq__29345_29359__$1);
var G__29362 = c__20373__auto___29360;
var G__29363 = cljs.core.count.call(null,c__20373__auto___29360);
var G__29364 = (0);
seq__29345_29349 = G__29361;
chunk__29346_29350 = G__29362;
count__29347_29351 = G__29363;
i__29348_29352 = G__29364;
continue;
} else {
var f_29365 = cljs.core.first.call(null,seq__29345_29359__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29365);

var G__29366 = cljs.core.next.call(null,seq__29345_29359__$1);
var G__29367 = null;
var G__29368 = (0);
var G__29369 = (0);
seq__29345_29349 = G__29366;
chunk__29346_29350 = G__29367;
count__29347_29351 = G__29368;
i__29348_29352 = G__29369;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29343,map__29343__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29343,map__29343__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1447608117082