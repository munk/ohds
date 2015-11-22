// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__37355_SHARP_,p2__37356_SHARP_){
var and__25094__auto__ = p1__37355_SHARP_;
if(cljs.core.truth_(and__25094__auto__)){
return p2__37356_SHARP_;
} else {
return and__25094__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25106__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25106__auto__){
return or__25106__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__37358_SHARP_,p2__37357_SHARP_){
return [cljs.core.str(p2__37357_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__25106__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__25106__auto__){
return or__25106__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__25106__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__26003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26007__auto__,method_table__26003__auto__,prefer_table__26004__auto__,method_cache__26005__auto__,cached_hierarchy__26006__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37359){
var map__37360 = p__37359;
var map__37360__$1 = ((cljs.core.seq_QMARK_.call(null,map__37360))?cljs.core.apply.call(null,cljs.core.hash_map,map__37360):map__37360);
var file = cljs.core.get.call(null,map__37360__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__37361){
var map__37362 = p__37361;
var map__37362__$1 = ((cljs.core.seq_QMARK_.call(null,map__37362))?cljs.core.apply.call(null,cljs.core.hash_map,map__37362):map__37362);
var namespace = cljs.core.get.call(null,map__37362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__26003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26007__auto__,method_table__26003__auto__,prefer_table__26004__auto__,method_cache__26005__auto__,cached_hierarchy__26006__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e37363){if((e37363 instanceof Error)){
var e = e37363;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37363;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37364,callback){
var map__37366 = p__37364;
var map__37366__$1 = ((cljs.core.seq_QMARK_.call(null,map__37366))?cljs.core.apply.call(null,cljs.core.hash_map,map__37366):map__37366);
var file_msg = map__37366__$1;
var request_url = cljs.core.get.call(null,map__37366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37366,map__37366__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37366,map__37366__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37367){
var map__37369 = p__37367;
var map__37369__$1 = ((cljs.core.seq_QMARK_.call(null,map__37369))?cljs.core.apply.call(null,cljs.core.hash_map,map__37369):map__37369);
var file_msg = map__37369__$1;
var meta_data = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__37369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__25106__auto__ = meta_data;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__25094__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__25094__auto__){
var or__25106__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__25106__auto____$1)){
return or__25106__auto____$1;
} else {
var and__25094__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__25094__auto____$1){
var or__25106__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__25106__auto____$2){
return or__25106__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__25094__auto____$1;
}
}
}
} else {
return and__25094__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37370,callback){
var map__37372 = p__37370;
var map__37372__$1 = ((cljs.core.seq_QMARK_.call(null,map__37372))?cljs.core.apply.call(null,cljs.core.hash_map,map__37372):map__37372);
var file_msg = map__37372__$1;
var namespace = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__37372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28122__auto___37459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___37459,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___37459,out){
return (function (state_37441){
var state_val_37442 = (state_37441[(1)]);
if((state_val_37442 === (7))){
var inst_37425 = (state_37441[(7)]);
var inst_37431 = (state_37441[(2)]);
var inst_37432 = cljs.core.async.put_BANG_.call(null,out,inst_37431);
var inst_37421 = inst_37425;
var state_37441__$1 = (function (){var statearr_37443 = state_37441;
(statearr_37443[(8)] = inst_37421);

(statearr_37443[(9)] = inst_37432);

return statearr_37443;
})();
var statearr_37444_37460 = state_37441__$1;
(statearr_37444_37460[(2)] = null);

(statearr_37444_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (6))){
var inst_37437 = (state_37441[(2)]);
var state_37441__$1 = state_37441;
var statearr_37445_37461 = state_37441__$1;
(statearr_37445_37461[(2)] = inst_37437);

(statearr_37445_37461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (5))){
var inst_37435 = cljs.core.async.close_BANG_.call(null,out);
var state_37441__$1 = state_37441;
var statearr_37446_37462 = state_37441__$1;
(statearr_37446_37462[(2)] = inst_37435);

(statearr_37446_37462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (4))){
var inst_37424 = (state_37441[(10)]);
var inst_37429 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37424);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37441__$1,(7),inst_37429);
} else {
if((state_val_37442 === (3))){
var inst_37439 = (state_37441[(2)]);
var state_37441__$1 = state_37441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37441__$1,inst_37439);
} else {
if((state_val_37442 === (2))){
var inst_37421 = (state_37441[(8)]);
var inst_37424 = (state_37441[(10)]);
var inst_37424__$1 = cljs.core.nth.call(null,inst_37421,(0),null);
var inst_37425 = cljs.core.nthnext.call(null,inst_37421,(1));
var inst_37426 = (inst_37424__$1 == null);
var inst_37427 = cljs.core.not.call(null,inst_37426);
var state_37441__$1 = (function (){var statearr_37447 = state_37441;
(statearr_37447[(10)] = inst_37424__$1);

(statearr_37447[(7)] = inst_37425);

return statearr_37447;
})();
if(inst_37427){
var statearr_37448_37463 = state_37441__$1;
(statearr_37448_37463[(1)] = (4));

} else {
var statearr_37449_37464 = state_37441__$1;
(statearr_37449_37464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37442 === (1))){
var inst_37419 = cljs.core.nth.call(null,files,(0),null);
var inst_37420 = cljs.core.nthnext.call(null,files,(1));
var inst_37421 = files;
var state_37441__$1 = (function (){var statearr_37450 = state_37441;
(statearr_37450[(8)] = inst_37421);

(statearr_37450[(11)] = inst_37419);

(statearr_37450[(12)] = inst_37420);

return statearr_37450;
})();
var statearr_37451_37465 = state_37441__$1;
(statearr_37451_37465[(2)] = null);

(statearr_37451_37465[(1)] = (2));


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
});})(c__28122__auto___37459,out))
;
return ((function (switch__28066__auto__,c__28122__auto___37459,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____0 = (function (){
var statearr_37455 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37455[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__);

(statearr_37455[(1)] = (1));

return statearr_37455;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____1 = (function (state_37441){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37456){if((e37456 instanceof Object)){
var ex__28070__auto__ = e37456;
var statearr_37457_37466 = state_37441;
(statearr_37457_37466[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37467 = state_37441;
state_37441 = G__37467;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__ = function(state_37441){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____1.call(this,state_37441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___37459,out))
})();
var state__28124__auto__ = (function (){var statearr_37458 = f__28123__auto__.call(null);
(statearr_37458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___37459);

return statearr_37458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___37459,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__37468,p__37469){
var map__37472 = p__37468;
var map__37472__$1 = ((cljs.core.seq_QMARK_.call(null,map__37472))?cljs.core.apply.call(null,cljs.core.hash_map,map__37472):map__37472);
var opts = map__37472__$1;
var url_rewriter = cljs.core.get.call(null,map__37472__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__37473 = p__37469;
var map__37473__$1 = ((cljs.core.seq_QMARK_.call(null,map__37473))?cljs.core.apply.call(null,cljs.core.hash_map,map__37473):map__37473);
var file_msg = map__37473__$1;
var file = cljs.core.get.call(null,map__37473__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37474){
var map__37477 = p__37474;
var map__37477__$1 = ((cljs.core.seq_QMARK_.call(null,map__37477))?cljs.core.apply.call(null,cljs.core.hash_map,map__37477):map__37477);
var file = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__37477__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__25094__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25094__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25094__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e37478){var e = e37478;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37483,p__37484){
var map__37685 = p__37483;
var map__37685__$1 = ((cljs.core.seq_QMARK_.call(null,map__37685))?cljs.core.apply.call(null,cljs.core.hash_map,map__37685):map__37685);
var opts = map__37685__$1;
var load_unchanged_files = cljs.core.get.call(null,map__37685__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__37685__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__37685__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__37686 = p__37484;
var map__37686__$1 = ((cljs.core.seq_QMARK_.call(null,map__37686))?cljs.core.apply.call(null,cljs.core.hash_map,map__37686):map__37686);
var msg = map__37686__$1;
var files = cljs.core.get.call(null,map__37686__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (state_37810){
var state_val_37811 = (state_37810[(1)]);
if((state_val_37811 === (7))){
var inst_37699 = (state_37810[(7)]);
var inst_37698 = (state_37810[(8)]);
var inst_37700 = (state_37810[(9)]);
var inst_37697 = (state_37810[(10)]);
var inst_37705 = cljs.core._nth.call(null,inst_37698,inst_37700);
var inst_37706 = figwheel.client.file_reloading.eval_body.call(null,inst_37705);
var inst_37707 = (inst_37700 + (1));
var tmp37812 = inst_37699;
var tmp37813 = inst_37698;
var tmp37814 = inst_37697;
var inst_37697__$1 = tmp37814;
var inst_37698__$1 = tmp37813;
var inst_37699__$1 = tmp37812;
var inst_37700__$1 = inst_37707;
var state_37810__$1 = (function (){var statearr_37815 = state_37810;
(statearr_37815[(11)] = inst_37706);

(statearr_37815[(7)] = inst_37699__$1);

(statearr_37815[(8)] = inst_37698__$1);

(statearr_37815[(9)] = inst_37700__$1);

(statearr_37815[(10)] = inst_37697__$1);

return statearr_37815;
})();
var statearr_37816_37885 = state_37810__$1;
(statearr_37816_37885[(2)] = null);

(statearr_37816_37885[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (20))){
var inst_37746 = (state_37810[(12)]);
var inst_37747 = (state_37810[(13)]);
var inst_37742 = (state_37810[(14)]);
var inst_37743 = (state_37810[(15)]);
var inst_37749 = (state_37810[(16)]);
var inst_37752 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37754 = (function (){var files_not_loaded = inst_37749;
var res = inst_37747;
var res_SINGLEQUOTE_ = inst_37746;
var files_SINGLEQUOTE_ = inst_37743;
var all_files = inst_37742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37749,inst_37752,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p__37753){
var map__37817 = p__37753;
var map__37817__$1 = ((cljs.core.seq_QMARK_.call(null,map__37817))?cljs.core.apply.call(null,cljs.core.hash_map,map__37817):map__37817);
var file = cljs.core.get.call(null,map__37817__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__37817__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37749,inst_37752,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37755 = cljs.core.map.call(null,inst_37754,inst_37747);
var inst_37756 = cljs.core.pr_str.call(null,inst_37755);
var inst_37757 = figwheel.client.utils.log.call(null,inst_37756);
var inst_37758 = (function (){var files_not_loaded = inst_37749;
var res = inst_37747;
var res_SINGLEQUOTE_ = inst_37746;
var files_SINGLEQUOTE_ = inst_37743;
var all_files = inst_37742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37749,inst_37752,inst_37754,inst_37755,inst_37756,inst_37757,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37749,inst_37752,inst_37754,inst_37755,inst_37756,inst_37757,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37759 = setTimeout(inst_37758,(10));
var state_37810__$1 = (function (){var statearr_37818 = state_37810;
(statearr_37818[(17)] = inst_37752);

(statearr_37818[(18)] = inst_37757);

return statearr_37818;
})();
var statearr_37819_37886 = state_37810__$1;
(statearr_37819_37886[(2)] = inst_37759);

(statearr_37819_37886[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (27))){
var inst_37769 = (state_37810[(19)]);
var state_37810__$1 = state_37810;
var statearr_37820_37887 = state_37810__$1;
(statearr_37820_37887[(2)] = inst_37769);

(statearr_37820_37887[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (1))){
var inst_37689 = (state_37810[(20)]);
var inst_37687 = before_jsload.call(null,files);
var inst_37688 = (function (){return ((function (inst_37689,inst_37687,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p1__37479_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37479_SHARP_);
});
;})(inst_37689,inst_37687,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37689__$1 = cljs.core.filter.call(null,inst_37688,files);
var inst_37690 = cljs.core.not_empty.call(null,inst_37689__$1);
var state_37810__$1 = (function (){var statearr_37821 = state_37810;
(statearr_37821[(21)] = inst_37687);

(statearr_37821[(20)] = inst_37689__$1);

return statearr_37821;
})();
if(cljs.core.truth_(inst_37690)){
var statearr_37822_37888 = state_37810__$1;
(statearr_37822_37888[(1)] = (2));

} else {
var statearr_37823_37889 = state_37810__$1;
(statearr_37823_37889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (24))){
var state_37810__$1 = state_37810;
var statearr_37824_37890 = state_37810__$1;
(statearr_37824_37890[(2)] = null);

(statearr_37824_37890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (4))){
var inst_37734 = (state_37810[(2)]);
var inst_37735 = (function (){return ((function (inst_37734,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p1__37480_SHARP_){
var and__25094__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37480_SHARP_);
if(cljs.core.truth_(and__25094__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37480_SHARP_));
} else {
return and__25094__auto__;
}
});
;})(inst_37734,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37736 = cljs.core.filter.call(null,inst_37735,files);
var state_37810__$1 = (function (){var statearr_37825 = state_37810;
(statearr_37825[(22)] = inst_37736);

(statearr_37825[(23)] = inst_37734);

return statearr_37825;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_37826_37891 = state_37810__$1;
(statearr_37826_37891[(1)] = (16));

} else {
var statearr_37827_37892 = state_37810__$1;
(statearr_37827_37892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (15))){
var inst_37724 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37828_37893 = state_37810__$1;
(statearr_37828_37893[(2)] = inst_37724);

(statearr_37828_37893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (21))){
var state_37810__$1 = state_37810;
var statearr_37829_37894 = state_37810__$1;
(statearr_37829_37894[(2)] = null);

(statearr_37829_37894[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (31))){
var inst_37777 = (state_37810[(24)]);
var inst_37787 = (state_37810[(2)]);
var inst_37788 = cljs.core.not_empty.call(null,inst_37777);
var state_37810__$1 = (function (){var statearr_37830 = state_37810;
(statearr_37830[(25)] = inst_37787);

return statearr_37830;
})();
if(cljs.core.truth_(inst_37788)){
var statearr_37831_37895 = state_37810__$1;
(statearr_37831_37895[(1)] = (32));

} else {
var statearr_37832_37896 = state_37810__$1;
(statearr_37832_37896[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (32))){
var inst_37777 = (state_37810[(24)]);
var inst_37790 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37777);
var inst_37791 = cljs.core.pr_str.call(null,inst_37790);
var inst_37792 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_37791)].join('');
var inst_37793 = figwheel.client.utils.log.call(null,inst_37792);
var state_37810__$1 = state_37810;
var statearr_37833_37897 = state_37810__$1;
(statearr_37833_37897[(2)] = inst_37793);

(statearr_37833_37897[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (33))){
var state_37810__$1 = state_37810;
var statearr_37834_37898 = state_37810__$1;
(statearr_37834_37898[(2)] = null);

(statearr_37834_37898[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (13))){
var inst_37710 = (state_37810[(26)]);
var inst_37714 = cljs.core.chunk_first.call(null,inst_37710);
var inst_37715 = cljs.core.chunk_rest.call(null,inst_37710);
var inst_37716 = cljs.core.count.call(null,inst_37714);
var inst_37697 = inst_37715;
var inst_37698 = inst_37714;
var inst_37699 = inst_37716;
var inst_37700 = (0);
var state_37810__$1 = (function (){var statearr_37835 = state_37810;
(statearr_37835[(7)] = inst_37699);

(statearr_37835[(8)] = inst_37698);

(statearr_37835[(9)] = inst_37700);

(statearr_37835[(10)] = inst_37697);

return statearr_37835;
})();
var statearr_37836_37899 = state_37810__$1;
(statearr_37836_37899[(2)] = null);

(statearr_37836_37899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (22))){
var inst_37749 = (state_37810[(16)]);
var inst_37762 = (state_37810[(2)]);
var inst_37763 = cljs.core.not_empty.call(null,inst_37749);
var state_37810__$1 = (function (){var statearr_37837 = state_37810;
(statearr_37837[(27)] = inst_37762);

return statearr_37837;
})();
if(cljs.core.truth_(inst_37763)){
var statearr_37838_37900 = state_37810__$1;
(statearr_37838_37900[(1)] = (23));

} else {
var statearr_37839_37901 = state_37810__$1;
(statearr_37839_37901[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (36))){
var state_37810__$1 = state_37810;
var statearr_37840_37902 = state_37810__$1;
(statearr_37840_37902[(2)] = null);

(statearr_37840_37902[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (29))){
var inst_37778 = (state_37810[(28)]);
var inst_37781 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37778);
var inst_37782 = cljs.core.pr_str.call(null,inst_37781);
var inst_37783 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_37782)].join('');
var inst_37784 = figwheel.client.utils.log.call(null,inst_37783);
var state_37810__$1 = state_37810;
var statearr_37841_37903 = state_37810__$1;
(statearr_37841_37903[(2)] = inst_37784);

(statearr_37841_37903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (6))){
var inst_37731 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37842_37904 = state_37810__$1;
(statearr_37842_37904[(2)] = inst_37731);

(statearr_37842_37904[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (28))){
var inst_37778 = (state_37810[(28)]);
var inst_37775 = (state_37810[(2)]);
var inst_37776 = cljs.core.get.call(null,inst_37775,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37777 = cljs.core.get.call(null,inst_37775,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_37778__$1 = cljs.core.get.call(null,inst_37775,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37779 = cljs.core.not_empty.call(null,inst_37778__$1);
var state_37810__$1 = (function (){var statearr_37843 = state_37810;
(statearr_37843[(28)] = inst_37778__$1);

(statearr_37843[(24)] = inst_37777);

(statearr_37843[(29)] = inst_37776);

return statearr_37843;
})();
if(cljs.core.truth_(inst_37779)){
var statearr_37844_37905 = state_37810__$1;
(statearr_37844_37905[(1)] = (29));

} else {
var statearr_37845_37906 = state_37810__$1;
(statearr_37845_37906[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (25))){
var inst_37808 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37810__$1,inst_37808);
} else {
if((state_val_37811 === (34))){
var inst_37776 = (state_37810[(29)]);
var inst_37796 = (state_37810[(2)]);
var inst_37797 = cljs.core.not_empty.call(null,inst_37776);
var state_37810__$1 = (function (){var statearr_37846 = state_37810;
(statearr_37846[(30)] = inst_37796);

return statearr_37846;
})();
if(cljs.core.truth_(inst_37797)){
var statearr_37847_37907 = state_37810__$1;
(statearr_37847_37907[(1)] = (35));

} else {
var statearr_37848_37908 = state_37810__$1;
(statearr_37848_37908[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (17))){
var inst_37736 = (state_37810[(22)]);
var state_37810__$1 = state_37810;
var statearr_37849_37909 = state_37810__$1;
(statearr_37849_37909[(2)] = inst_37736);

(statearr_37849_37909[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (3))){
var state_37810__$1 = state_37810;
var statearr_37850_37910 = state_37810__$1;
(statearr_37850_37910[(2)] = null);

(statearr_37850_37910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (12))){
var inst_37727 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37851_37911 = state_37810__$1;
(statearr_37851_37911[(2)] = inst_37727);

(statearr_37851_37911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (2))){
var inst_37689 = (state_37810[(20)]);
var inst_37696 = cljs.core.seq.call(null,inst_37689);
var inst_37697 = inst_37696;
var inst_37698 = null;
var inst_37699 = (0);
var inst_37700 = (0);
var state_37810__$1 = (function (){var statearr_37852 = state_37810;
(statearr_37852[(7)] = inst_37699);

(statearr_37852[(8)] = inst_37698);

(statearr_37852[(9)] = inst_37700);

(statearr_37852[(10)] = inst_37697);

return statearr_37852;
})();
var statearr_37853_37912 = state_37810__$1;
(statearr_37853_37912[(2)] = null);

(statearr_37853_37912[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (23))){
var inst_37746 = (state_37810[(12)]);
var inst_37747 = (state_37810[(13)]);
var inst_37742 = (state_37810[(14)]);
var inst_37769 = (state_37810[(19)]);
var inst_37743 = (state_37810[(15)]);
var inst_37749 = (state_37810[(16)]);
var inst_37765 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37768 = (function (){var files_not_loaded = inst_37749;
var res = inst_37747;
var res_SINGLEQUOTE_ = inst_37746;
var files_SINGLEQUOTE_ = inst_37743;
var all_files = inst_37742;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37769,inst_37743,inst_37749,inst_37765,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p__37767){
var map__37854 = p__37767;
var map__37854__$1 = ((cljs.core.seq_QMARK_.call(null,map__37854))?cljs.core.apply.call(null,cljs.core.hash_map,map__37854):map__37854);
var meta_data = cljs.core.get.call(null,map__37854__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37769,inst_37743,inst_37749,inst_37765,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37769__$1 = cljs.core.group_by.call(null,inst_37768,inst_37749);
var inst_37770 = cljs.core.seq_QMARK_.call(null,inst_37769__$1);
var state_37810__$1 = (function (){var statearr_37855 = state_37810;
(statearr_37855[(31)] = inst_37765);

(statearr_37855[(19)] = inst_37769__$1);

return statearr_37855;
})();
if(inst_37770){
var statearr_37856_37913 = state_37810__$1;
(statearr_37856_37913[(1)] = (26));

} else {
var statearr_37857_37914 = state_37810__$1;
(statearr_37857_37914[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (35))){
var inst_37776 = (state_37810[(29)]);
var inst_37799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37776);
var inst_37800 = cljs.core.pr_str.call(null,inst_37799);
var inst_37801 = [cljs.core.str("not required: "),cljs.core.str(inst_37800)].join('');
var inst_37802 = figwheel.client.utils.log.call(null,inst_37801);
var state_37810__$1 = state_37810;
var statearr_37858_37915 = state_37810__$1;
(statearr_37858_37915[(2)] = inst_37802);

(statearr_37858_37915[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (19))){
var inst_37746 = (state_37810[(12)]);
var inst_37747 = (state_37810[(13)]);
var inst_37742 = (state_37810[(14)]);
var inst_37743 = (state_37810[(15)]);
var inst_37746__$1 = (state_37810[(2)]);
var inst_37747__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37746__$1);
var inst_37748 = (function (){var res = inst_37747__$1;
var res_SINGLEQUOTE_ = inst_37746__$1;
var files_SINGLEQUOTE_ = inst_37743;
var all_files = inst_37742;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37746__$1,inst_37747__$1,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p1__37482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37482_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_37746,inst_37747,inst_37742,inst_37743,inst_37746__$1,inst_37747__$1,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37749 = cljs.core.filter.call(null,inst_37748,inst_37746__$1);
var inst_37750 = cljs.core.not_empty.call(null,inst_37747__$1);
var state_37810__$1 = (function (){var statearr_37859 = state_37810;
(statearr_37859[(12)] = inst_37746__$1);

(statearr_37859[(13)] = inst_37747__$1);

(statearr_37859[(16)] = inst_37749);

return statearr_37859;
})();
if(cljs.core.truth_(inst_37750)){
var statearr_37860_37916 = state_37810__$1;
(statearr_37860_37916[(1)] = (20));

} else {
var statearr_37861_37917 = state_37810__$1;
(statearr_37861_37917[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (11))){
var state_37810__$1 = state_37810;
var statearr_37862_37918 = state_37810__$1;
(statearr_37862_37918[(2)] = null);

(statearr_37862_37918[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (9))){
var inst_37729 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37863_37919 = state_37810__$1;
(statearr_37863_37919[(2)] = inst_37729);

(statearr_37863_37919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (5))){
var inst_37699 = (state_37810[(7)]);
var inst_37700 = (state_37810[(9)]);
var inst_37702 = (inst_37700 < inst_37699);
var inst_37703 = inst_37702;
var state_37810__$1 = state_37810;
if(cljs.core.truth_(inst_37703)){
var statearr_37864_37920 = state_37810__$1;
(statearr_37864_37920[(1)] = (7));

} else {
var statearr_37865_37921 = state_37810__$1;
(statearr_37865_37921[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (14))){
var inst_37710 = (state_37810[(26)]);
var inst_37719 = cljs.core.first.call(null,inst_37710);
var inst_37720 = figwheel.client.file_reloading.eval_body.call(null,inst_37719);
var inst_37721 = cljs.core.next.call(null,inst_37710);
var inst_37697 = inst_37721;
var inst_37698 = null;
var inst_37699 = (0);
var inst_37700 = (0);
var state_37810__$1 = (function (){var statearr_37866 = state_37810;
(statearr_37866[(32)] = inst_37720);

(statearr_37866[(7)] = inst_37699);

(statearr_37866[(8)] = inst_37698);

(statearr_37866[(9)] = inst_37700);

(statearr_37866[(10)] = inst_37697);

return statearr_37866;
})();
var statearr_37867_37922 = state_37810__$1;
(statearr_37867_37922[(2)] = null);

(statearr_37867_37922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (26))){
var inst_37769 = (state_37810[(19)]);
var inst_37772 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37769);
var state_37810__$1 = state_37810;
var statearr_37868_37923 = state_37810__$1;
(statearr_37868_37923[(2)] = inst_37772);

(statearr_37868_37923[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (16))){
var inst_37736 = (state_37810[(22)]);
var inst_37738 = (function (){var all_files = inst_37736;
return ((function (all_files,inst_37736,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function (p1__37481_SHARP_){
return cljs.core.update_in.call(null,p1__37481_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_37736,state_val_37811,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var inst_37739 = cljs.core.map.call(null,inst_37738,inst_37736);
var state_37810__$1 = state_37810;
var statearr_37869_37924 = state_37810__$1;
(statearr_37869_37924[(2)] = inst_37739);

(statearr_37869_37924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (30))){
var state_37810__$1 = state_37810;
var statearr_37870_37925 = state_37810__$1;
(statearr_37870_37925[(2)] = null);

(statearr_37870_37925[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (10))){
var inst_37710 = (state_37810[(26)]);
var inst_37712 = cljs.core.chunked_seq_QMARK_.call(null,inst_37710);
var state_37810__$1 = state_37810;
if(inst_37712){
var statearr_37871_37926 = state_37810__$1;
(statearr_37871_37926[(1)] = (13));

} else {
var statearr_37872_37927 = state_37810__$1;
(statearr_37872_37927[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (18))){
var inst_37742 = (state_37810[(14)]);
var inst_37743 = (state_37810[(15)]);
var inst_37742__$1 = (state_37810[(2)]);
var inst_37743__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_37742__$1);
var inst_37744 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37743__$1);
var state_37810__$1 = (function (){var statearr_37873 = state_37810;
(statearr_37873[(14)] = inst_37742__$1);

(statearr_37873[(15)] = inst_37743__$1);

return statearr_37873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37810__$1,(19),inst_37744);
} else {
if((state_val_37811 === (37))){
var inst_37805 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37874_37928 = state_37810__$1;
(statearr_37874_37928[(2)] = inst_37805);

(statearr_37874_37928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (8))){
var inst_37710 = (state_37810[(26)]);
var inst_37697 = (state_37810[(10)]);
var inst_37710__$1 = cljs.core.seq.call(null,inst_37697);
var state_37810__$1 = (function (){var statearr_37875 = state_37810;
(statearr_37875[(26)] = inst_37710__$1);

return statearr_37875;
})();
if(inst_37710__$1){
var statearr_37876_37929 = state_37810__$1;
(statearr_37876_37929[(1)] = (10));

} else {
var statearr_37877_37930 = state_37810__$1;
(statearr_37877_37930[(1)] = (11));

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
});})(c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
;
return ((function (switch__28066__auto__,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____0 = (function (){
var statearr_37881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37881[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__);

(statearr_37881[(1)] = (1));

return statearr_37881;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____1 = (function (state_37810){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37882){if((e37882 instanceof Object)){
var ex__28070__auto__ = e37882;
var statearr_37883_37931 = state_37810;
(statearr_37883_37931[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37932 = state_37810;
state_37810 = G__37932;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__ = function(state_37810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____1.call(this,state_37810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
})();
var state__28124__auto__ = (function (){var statearr_37884 = f__28123__auto__.call(null);
(statearr_37884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_37884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__,map__37685,map__37685__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__37686,map__37686__$1,msg,files))
);

return c__28122__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37935,link){
var map__37937 = p__37935;
var map__37937__$1 = ((cljs.core.seq_QMARK_.call(null,map__37937))?cljs.core.apply.call(null,cljs.core.hash_map,map__37937):map__37937);
var file = cljs.core.get.call(null,map__37937__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__37937,map__37937__$1,file){
return (function (p1__37933_SHARP_,p2__37934_SHARP_){
if(cljs.core._EQ_.call(null,p1__37933_SHARP_,p2__37934_SHARP_)){
return p1__37933_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__37937,map__37937__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37941){
var map__37942 = p__37941;
var map__37942__$1 = ((cljs.core.seq_QMARK_.call(null,map__37942))?cljs.core.apply.call(null,cljs.core.hash_map,map__37942):map__37942);
var current_url_length = cljs.core.get.call(null,map__37942__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__37942__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37938_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37938_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
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
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__37943){
var map__37945 = p__37943;
var map__37945__$1 = ((cljs.core.seq_QMARK_.call(null,map__37945))?cljs.core.apply.call(null,cljs.core.hash_map,map__37945):map__37945);
var f_data = map__37945__$1;
var request_url = cljs.core.get.call(null,map__37945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__37945__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__25106__auto__ = request_url;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37946,files_msg){
var map__37968 = p__37946;
var map__37968__$1 = ((cljs.core.seq_QMARK_.call(null,map__37968))?cljs.core.apply.call(null,cljs.core.hash_map,map__37968):map__37968);
var opts = map__37968__$1;
var on_cssload = cljs.core.get.call(null,map__37968__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__37969_37989 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__37970_37990 = null;
var count__37971_37991 = (0);
var i__37972_37992 = (0);
while(true){
if((i__37972_37992 < count__37971_37991)){
var f_37993 = cljs.core._nth.call(null,chunk__37970_37990,i__37972_37992);
figwheel.client.file_reloading.reload_css_file.call(null,f_37993);

var G__37994 = seq__37969_37989;
var G__37995 = chunk__37970_37990;
var G__37996 = count__37971_37991;
var G__37997 = (i__37972_37992 + (1));
seq__37969_37989 = G__37994;
chunk__37970_37990 = G__37995;
count__37971_37991 = G__37996;
i__37972_37992 = G__37997;
continue;
} else {
var temp__4126__auto___37998 = cljs.core.seq.call(null,seq__37969_37989);
if(temp__4126__auto___37998){
var seq__37969_37999__$1 = temp__4126__auto___37998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37969_37999__$1)){
var c__25893__auto___38000 = cljs.core.chunk_first.call(null,seq__37969_37999__$1);
var G__38001 = cljs.core.chunk_rest.call(null,seq__37969_37999__$1);
var G__38002 = c__25893__auto___38000;
var G__38003 = cljs.core.count.call(null,c__25893__auto___38000);
var G__38004 = (0);
seq__37969_37989 = G__38001;
chunk__37970_37990 = G__38002;
count__37971_37991 = G__38003;
i__37972_37992 = G__38004;
continue;
} else {
var f_38005 = cljs.core.first.call(null,seq__37969_37999__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_38005);

var G__38006 = cljs.core.next.call(null,seq__37969_37999__$1);
var G__38007 = null;
var G__38008 = (0);
var G__38009 = (0);
seq__37969_37989 = G__38006;
chunk__37970_37990 = G__38007;
count__37971_37991 = G__38008;
i__37972_37992 = G__38009;
continue;
}
} else {
}
}
break;
}

var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload){
return (function (state_37979){
var state_val_37980 = (state_37979[(1)]);
if((state_val_37980 === (2))){
var inst_37975 = (state_37979[(2)]);
var inst_37976 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_37977 = on_cssload.call(null,inst_37976);
var state_37979__$1 = (function (){var statearr_37981 = state_37979;
(statearr_37981[(7)] = inst_37975);

return statearr_37981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37979__$1,inst_37977);
} else {
if((state_val_37980 === (1))){
var inst_37973 = cljs.core.async.timeout.call(null,(100));
var state_37979__$1 = state_37979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37979__$1,(2),inst_37973);
} else {
return null;
}
}
});})(c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload))
;
return ((function (switch__28066__auto__,c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____0 = (function (){
var statearr_37985 = [null,null,null,null,null,null,null,null];
(statearr_37985[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__);

(statearr_37985[(1)] = (1));

return statearr_37985;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____1 = (function (state_37979){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37986){if((e37986 instanceof Object)){
var ex__28070__auto__ = e37986;
var statearr_37987_38010 = state_37979;
(statearr_37987_38010[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38011 = state_37979;
state_37979 = G__38011;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__ = function(state_37979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____1.call(this,state_37979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload))
})();
var state__28124__auto__ = (function (){var statearr_37988 = f__28123__auto__.call(null);
(statearr_37988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_37988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__,map__37968,map__37968__$1,opts,on_cssload))
);

return c__28122__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1446160953473