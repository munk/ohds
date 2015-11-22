// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__4064__auto__ = v;
if(cljs.core.truth_(and__4064__auto__)){
return (v > (0));
} else {
return and__4064__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__16361_SHARP_,p2__16360_SHARP_){
var vec__16363 = clojure.string.split.call(null,p2__16360_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__16363,(0),null);
var v = cljs.core.nth.call(null,vec__16363,(1),null);
return cljs.core.assoc.call(null,p1__16361_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__16364_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__16364_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__16365){
var vec__16367 = p__16365;
var k = cljs.core.nth.call(null,vec__16367,(0),null);
var v = cljs.core.nth.call(null,vec__16367,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__16368_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__16368_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__4064__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4064__auto__){
var and__4064__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4064__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4064__auto____$1;
}
} else {
return and__4064__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16369_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16369_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_default_headers = (function() { 
var cljs_http$client$wrap_default_headers__delegate = function (client,p__16370){
var vec__16372 = p__16370;
var default_headers = cljs.core.nth.call(null,vec__16372,(0),null);
return ((function (vec__16372,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16372,default_headers))
};
var cljs_http$client$wrap_default_headers = function (client,var_args){
var p__16370 = null;
if (arguments.length > 1) {
var G__16373__i = 0, G__16373__a = new Array(arguments.length -  1);
while (G__16373__i < G__16373__a.length) {G__16373__a[G__16373__i] = arguments[G__16373__i + 1]; ++G__16373__i;}
  p__16370 = new cljs.core.IndexedSeq(G__16373__a,0);
} 
return cljs_http$client$wrap_default_headers__delegate.call(this,client,p__16370);};
cljs_http$client$wrap_default_headers.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_default_headers.cljs$lang$applyTo = (function (arglist__16374){
var client = cljs.core.first(arglist__16374);
var p__16370 = cljs.core.rest(arglist__16374);
return cljs_http$client$wrap_default_headers__delegate(client,p__16370);
});
cljs_http$client$wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_default_headers__delegate;
return cljs_http$client$wrap_default_headers;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_accept = (function() { 
var cljs_http$client$wrap_accept__delegate = function (client,p__16375){
var vec__16377 = p__16375;
var accept = cljs.core.nth.call(null,vec__16377,(0),null);
return ((function (vec__16377,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16377,accept))
};
var cljs_http$client$wrap_accept = function (client,var_args){
var p__16375 = null;
if (arguments.length > 1) {
var G__16378__i = 0, G__16378__a = new Array(arguments.length -  1);
while (G__16378__i < G__16378__a.length) {G__16378__a[G__16378__i] = arguments[G__16378__i + 1]; ++G__16378__i;}
  p__16375 = new cljs.core.IndexedSeq(G__16378__a,0);
} 
return cljs_http$client$wrap_accept__delegate.call(this,client,p__16375);};
cljs_http$client$wrap_accept.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_accept.cljs$lang$applyTo = (function (arglist__16379){
var client = cljs.core.first(arglist__16379);
var p__16375 = cljs.core.rest(arglist__16379);
return cljs_http$client$wrap_accept__delegate(client,p__16375);
});
cljs_http$client$wrap_accept.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_accept__delegate;
return cljs_http$client$wrap_accept;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_content_type = (function() { 
var cljs_http$client$wrap_content_type__delegate = function (client,p__16380){
var vec__16382 = p__16380;
var content_type = cljs.core.nth.call(null,vec__16382,(0),null);
return ((function (vec__16382,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__16382,content_type))
};
var cljs_http$client$wrap_content_type = function (client,var_args){
var p__16380 = null;
if (arguments.length > 1) {
var G__16383__i = 0, G__16383__a = new Array(arguments.length -  1);
while (G__16383__i < G__16383__a.length) {G__16383__a[G__16383__i] = arguments[G__16383__i + 1]; ++G__16383__i;}
  p__16380 = new cljs.core.IndexedSeq(G__16383__a,0);
} 
return cljs_http$client$wrap_content_type__delegate.call(this,client,p__16380);};
cljs_http$client$wrap_content_type.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_content_type.cljs$lang$applyTo = (function (arglist__16384){
var client = cljs.core.first(arglist__16384);
var p__16380 = cljs.core.rest(arglist__16384);
return cljs_http$client$wrap_content_type__delegate(client,p__16380);
});
cljs_http$client$wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_content_type__delegate;
return cljs_http$client$wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 * Content Type header.
 * 
 * A :transit-opts map can be optionally provided with the following keys:
 * 
 * :encoding                #{:json, :json-verbose}
 * :decoding                #{:json, :json-verbose}
 * :encoding/decoding-opts  appropriate map of options to be passed to
 * transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__16386 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16386__$1 = ((cljs.core.seq_QMARK_.call(null,map__16386))?cljs.core.apply.call(null,cljs.core.hash_map,map__16386):map__16386);
var encoding = cljs.core.get.call(null,map__16386__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__16386__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__16390 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16390__$1 = ((cljs.core.seq_QMARK_.call(null,map__16390))?cljs.core.apply.call(null,cljs.core.hash_map,map__16390):map__16390);
var decoding = cljs.core.get.call(null,map__16390__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__16390__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__16390,map__16390__$1,decoding,decoding_opts){
return (function (p1__16387_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__16387_SHARP_,decoding,decoding_opts);
});})(map__16390,map__16390__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__16390,map__16390__$1,decoding,decoding_opts,transit_decode){
return (function (p1__16388_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16388_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__16390,map__16390__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__16391_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16391_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__16394){
var map__16395 = p__16394;
var map__16395__$1 = ((cljs.core.seq_QMARK_.call(null,map__16395))?cljs.core.apply.call(null,cljs.core.hash_map,map__16395):map__16395);
var req = map__16395__$1;
var query_params = cljs.core.get.call(null,map__16395__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__16398){
var map__16399 = p__16398;
var map__16399__$1 = ((cljs.core.seq_QMARK_.call(null,map__16399))?cljs.core.apply.call(null,cljs.core.hash_map,map__16399):map__16399);
var request = map__16399__$1;
var form_params = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16399__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4064__auto__ = form_params;
if(cljs.core.truth_(and__4064__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4064__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__16406_16412 = cljs.core.seq.call(null,params);
var chunk__16407_16413 = null;
var count__16408_16414 = (0);
var i__16409_16415 = (0);
while(true){
if((i__16409_16415 < count__16408_16414)){
var vec__16410_16416 = cljs.core._nth.call(null,chunk__16407_16413,i__16409_16415);
var k_16417 = cljs.core.nth.call(null,vec__16410_16416,(0),null);
var v_16418 = cljs.core.nth.call(null,vec__16410_16416,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16418)){
form_data.append(cljs.core.name.call(null,k_16417),cljs.core.first.call(null,v_16418),cljs.core.second.call(null,v_16418));
} else {
form_data.append(cljs.core.name.call(null,k_16417),v_16418);
}

var G__16419 = seq__16406_16412;
var G__16420 = chunk__16407_16413;
var G__16421 = count__16408_16414;
var G__16422 = (i__16409_16415 + (1));
seq__16406_16412 = G__16419;
chunk__16407_16413 = G__16420;
count__16408_16414 = G__16421;
i__16409_16415 = G__16422;
continue;
} else {
var temp__4425__auto___16423 = cljs.core.seq.call(null,seq__16406_16412);
if(temp__4425__auto___16423){
var seq__16406_16424__$1 = temp__4425__auto___16423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16406_16424__$1)){
var c__4863__auto___16425 = cljs.core.chunk_first.call(null,seq__16406_16424__$1);
var G__16426 = cljs.core.chunk_rest.call(null,seq__16406_16424__$1);
var G__16427 = c__4863__auto___16425;
var G__16428 = cljs.core.count.call(null,c__4863__auto___16425);
var G__16429 = (0);
seq__16406_16412 = G__16426;
chunk__16407_16413 = G__16427;
count__16408_16414 = G__16428;
i__16409_16415 = G__16429;
continue;
} else {
var vec__16411_16430 = cljs.core.first.call(null,seq__16406_16424__$1);
var k_16431 = cljs.core.nth.call(null,vec__16411_16430,(0),null);
var v_16432 = cljs.core.nth.call(null,vec__16411_16430,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16432)){
form_data.append(cljs.core.name.call(null,k_16431),cljs.core.first.call(null,v_16432),cljs.core.second.call(null,v_16432));
} else {
form_data.append(cljs.core.name.call(null,k_16431),v_16432);
}

var G__16433 = cljs.core.next.call(null,seq__16406_16424__$1);
var G__16434 = null;
var G__16435 = (0);
var G__16436 = (0);
seq__16406_16412 = G__16433;
chunk__16407_16413 = G__16434;
count__16408_16414 = G__16435;
i__16409_16415 = G__16436;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__16439){
var map__16440 = p__16439;
var map__16440__$1 = ((cljs.core.seq_QMARK_.call(null,map__16440))?cljs.core.apply.call(null,cljs.core.hash_map,map__16440):map__16440);
var request = map__16440__$1;
var multipart_params = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__16440__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4064__auto__ = multipart_params;
if(cljs.core.truth_(and__4064__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4064__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__16441_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__16441_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__16445){
var map__16446 = p__16445;
var map__16446__$1 = ((cljs.core.seq_QMARK_.call(null,map__16446))?cljs.core.apply.call(null,cljs.core.hash_map,map__16446):map__16446);
var req = map__16446__$1;
var query_params = cljs.core.get.call(null,map__16446__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__16446,map__16446__$1,req,query_params){
return (function (p1__16442_SHARP_){
return cljs.core.merge.call(null,p1__16442_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__16446,map__16446__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 * an Authorization header.
 * @param {...*} var_args
 */
cljs_http.client.wrap_basic_auth = (function() { 
var cljs_http$client$wrap_basic_auth__delegate = function (client,p__16447){
var vec__16449 = p__16447;
var credentials = cljs.core.nth.call(null,vec__16449,(0),null);
return ((function (vec__16449,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__16449,credentials))
};
var cljs_http$client$wrap_basic_auth = function (client,var_args){
var p__16447 = null;
if (arguments.length > 1) {
var G__16450__i = 0, G__16450__a = new Array(arguments.length -  1);
while (G__16450__i < G__16450__a.length) {G__16450__a[G__16450__i] = arguments[G__16450__i + 1]; ++G__16450__i;}
  p__16447 = new cljs.core.IndexedSeq(G__16450__a,0);
} 
return cljs_http$client$wrap_basic_auth__delegate.call(this,client,p__16447);};
cljs_http$client$wrap_basic_auth.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_basic_auth.cljs$lang$applyTo = (function (arglist__16451){
var client = cljs.core.first(arglist__16451);
var p__16447 = cljs.core.rest(arglist__16451);
return cljs_http$client$wrap_basic_auth__delegate(client,p__16447);
});
cljs_http$client$wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_basic_auth__delegate;
return cljs_http$client$wrap_basic_auth;
})()
;
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.delete$ = (function() { 
var cljs_http$client$delete__delegate = function (url,p__16452){
var vec__16454 = p__16452;
var req = cljs.core.nth.call(null,vec__16454,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$delete = function (url,var_args){
var p__16452 = null;
if (arguments.length > 1) {
var G__16455__i = 0, G__16455__a = new Array(arguments.length -  1);
while (G__16455__i < G__16455__a.length) {G__16455__a[G__16455__i] = arguments[G__16455__i + 1]; ++G__16455__i;}
  p__16452 = new cljs.core.IndexedSeq(G__16455__a,0);
} 
return cljs_http$client$delete__delegate.call(this,url,p__16452);};
cljs_http$client$delete.cljs$lang$maxFixedArity = 1;
cljs_http$client$delete.cljs$lang$applyTo = (function (arglist__16456){
var url = cljs.core.first(arglist__16456);
var p__16452 = cljs.core.rest(arglist__16456);
return cljs_http$client$delete__delegate(url,p__16452);
});
cljs_http$client$delete.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$delete__delegate;
return cljs_http$client$delete;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.get = (function() { 
var cljs_http$client$get__delegate = function (url,p__16457){
var vec__16459 = p__16457;
var req = cljs.core.nth.call(null,vec__16459,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$get = function (url,var_args){
var p__16457 = null;
if (arguments.length > 1) {
var G__16460__i = 0, G__16460__a = new Array(arguments.length -  1);
while (G__16460__i < G__16460__a.length) {G__16460__a[G__16460__i] = arguments[G__16460__i + 1]; ++G__16460__i;}
  p__16457 = new cljs.core.IndexedSeq(G__16460__a,0);
} 
return cljs_http$client$get__delegate.call(this,url,p__16457);};
cljs_http$client$get.cljs$lang$maxFixedArity = 1;
cljs_http$client$get.cljs$lang$applyTo = (function (arglist__16461){
var url = cljs.core.first(arglist__16461);
var p__16457 = cljs.core.rest(arglist__16461);
return cljs_http$client$get__delegate(url,p__16457);
});
cljs_http$client$get.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$get__delegate;
return cljs_http$client$get;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.head = (function() { 
var cljs_http$client$head__delegate = function (url,p__16462){
var vec__16464 = p__16462;
var req = cljs.core.nth.call(null,vec__16464,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$head = function (url,var_args){
var p__16462 = null;
if (arguments.length > 1) {
var G__16465__i = 0, G__16465__a = new Array(arguments.length -  1);
while (G__16465__i < G__16465__a.length) {G__16465__a[G__16465__i] = arguments[G__16465__i + 1]; ++G__16465__i;}
  p__16462 = new cljs.core.IndexedSeq(G__16465__a,0);
} 
return cljs_http$client$head__delegate.call(this,url,p__16462);};
cljs_http$client$head.cljs$lang$maxFixedArity = 1;
cljs_http$client$head.cljs$lang$applyTo = (function (arglist__16466){
var url = cljs.core.first(arglist__16466);
var p__16462 = cljs.core.rest(arglist__16466);
return cljs_http$client$head__delegate(url,p__16462);
});
cljs_http$client$head.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$head__delegate;
return cljs_http$client$head;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.jsonp = (function() { 
var cljs_http$client$jsonp__delegate = function (url,p__16467){
var vec__16469 = p__16467;
var req = cljs.core.nth.call(null,vec__16469,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$jsonp = function (url,var_args){
var p__16467 = null;
if (arguments.length > 1) {
var G__16470__i = 0, G__16470__a = new Array(arguments.length -  1);
while (G__16470__i < G__16470__a.length) {G__16470__a[G__16470__i] = arguments[G__16470__i + 1]; ++G__16470__i;}
  p__16467 = new cljs.core.IndexedSeq(G__16470__a,0);
} 
return cljs_http$client$jsonp__delegate.call(this,url,p__16467);};
cljs_http$client$jsonp.cljs$lang$maxFixedArity = 1;
cljs_http$client$jsonp.cljs$lang$applyTo = (function (arglist__16471){
var url = cljs.core.first(arglist__16471);
var p__16467 = cljs.core.rest(arglist__16471);
return cljs_http$client$jsonp__delegate(url,p__16467);
});
cljs_http$client$jsonp.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$jsonp__delegate;
return cljs_http$client$jsonp;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.move = (function() { 
var cljs_http$client$move__delegate = function (url,p__16472){
var vec__16474 = p__16472;
var req = cljs.core.nth.call(null,vec__16474,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$move = function (url,var_args){
var p__16472 = null;
if (arguments.length > 1) {
var G__16475__i = 0, G__16475__a = new Array(arguments.length -  1);
while (G__16475__i < G__16475__a.length) {G__16475__a[G__16475__i] = arguments[G__16475__i + 1]; ++G__16475__i;}
  p__16472 = new cljs.core.IndexedSeq(G__16475__a,0);
} 
return cljs_http$client$move__delegate.call(this,url,p__16472);};
cljs_http$client$move.cljs$lang$maxFixedArity = 1;
cljs_http$client$move.cljs$lang$applyTo = (function (arglist__16476){
var url = cljs.core.first(arglist__16476);
var p__16472 = cljs.core.rest(arglist__16476);
return cljs_http$client$move__delegate(url,p__16472);
});
cljs_http$client$move.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$move__delegate;
return cljs_http$client$move;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.options = (function() { 
var cljs_http$client$options__delegate = function (url,p__16477){
var vec__16479 = p__16477;
var req = cljs.core.nth.call(null,vec__16479,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$options = function (url,var_args){
var p__16477 = null;
if (arguments.length > 1) {
var G__16480__i = 0, G__16480__a = new Array(arguments.length -  1);
while (G__16480__i < G__16480__a.length) {G__16480__a[G__16480__i] = arguments[G__16480__i + 1]; ++G__16480__i;}
  p__16477 = new cljs.core.IndexedSeq(G__16480__a,0);
} 
return cljs_http$client$options__delegate.call(this,url,p__16477);};
cljs_http$client$options.cljs$lang$maxFixedArity = 1;
cljs_http$client$options.cljs$lang$applyTo = (function (arglist__16481){
var url = cljs.core.first(arglist__16481);
var p__16477 = cljs.core.rest(arglist__16481);
return cljs_http$client$options__delegate(url,p__16477);
});
cljs_http$client$options.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$options__delegate;
return cljs_http$client$options;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.patch = (function() { 
var cljs_http$client$patch__delegate = function (url,p__16482){
var vec__16484 = p__16482;
var req = cljs.core.nth.call(null,vec__16484,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$patch = function (url,var_args){
var p__16482 = null;
if (arguments.length > 1) {
var G__16485__i = 0, G__16485__a = new Array(arguments.length -  1);
while (G__16485__i < G__16485__a.length) {G__16485__a[G__16485__i] = arguments[G__16485__i + 1]; ++G__16485__i;}
  p__16482 = new cljs.core.IndexedSeq(G__16485__a,0);
} 
return cljs_http$client$patch__delegate.call(this,url,p__16482);};
cljs_http$client$patch.cljs$lang$maxFixedArity = 1;
cljs_http$client$patch.cljs$lang$applyTo = (function (arglist__16486){
var url = cljs.core.first(arglist__16486);
var p__16482 = cljs.core.rest(arglist__16486);
return cljs_http$client$patch__delegate(url,p__16482);
});
cljs_http$client$patch.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$patch__delegate;
return cljs_http$client$patch;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.post = (function() { 
var cljs_http$client$post__delegate = function (url,p__16487){
var vec__16489 = p__16487;
var req = cljs.core.nth.call(null,vec__16489,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$post = function (url,var_args){
var p__16487 = null;
if (arguments.length > 1) {
var G__16490__i = 0, G__16490__a = new Array(arguments.length -  1);
while (G__16490__i < G__16490__a.length) {G__16490__a[G__16490__i] = arguments[G__16490__i + 1]; ++G__16490__i;}
  p__16487 = new cljs.core.IndexedSeq(G__16490__a,0);
} 
return cljs_http$client$post__delegate.call(this,url,p__16487);};
cljs_http$client$post.cljs$lang$maxFixedArity = 1;
cljs_http$client$post.cljs$lang$applyTo = (function (arglist__16491){
var url = cljs.core.first(arglist__16491);
var p__16487 = cljs.core.rest(arglist__16491);
return cljs_http$client$post__delegate(url,p__16487);
});
cljs_http$client$post.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$post__delegate;
return cljs_http$client$post;
})()
;
/**
 * Like #'request, but sets the :method and :url as appropriate.
 * @param {...*} var_args
 */
cljs_http.client.put = (function() { 
var cljs_http$client$put__delegate = function (url,p__16492){
var vec__16494 = p__16492;
var req = cljs.core.nth.call(null,vec__16494,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$put = function (url,var_args){
var p__16492 = null;
if (arguments.length > 1) {
var G__16495__i = 0, G__16495__a = new Array(arguments.length -  1);
while (G__16495__i < G__16495__a.length) {G__16495__a[G__16495__i] = arguments[G__16495__i + 1]; ++G__16495__i;}
  p__16492 = new cljs.core.IndexedSeq(G__16495__a,0);
} 
return cljs_http$client$put__delegate.call(this,url,p__16492);};
cljs_http$client$put.cljs$lang$maxFixedArity = 1;
cljs_http$client$put.cljs$lang$applyTo = (function (arglist__16496){
var url = cljs.core.first(arglist__16496);
var p__16492 = cljs.core.rest(arglist__16496);
return cljs_http$client$put__delegate(url,p__16492);
});
cljs_http$client$put.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$put__delegate;
return cljs_http$client$put;
})()
;
