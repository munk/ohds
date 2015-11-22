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
if(cljs.core.truth_((function (){var and__25248__auto__ = v;
if(cljs.core.truth_(and__25248__auto__)){
return (v > (0));
} else {
return and__25248__auto__;
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
return cljs.core.reduce.call(null,(function (p1__32737_SHARP_,p2__32736_SHARP_){
var vec__32739 = clojure.string.split.call(null,p2__32736_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__32739,(0),null);
var v = cljs.core.nth.call(null,vec__32739,(1),null);
return cljs.core.assoc.call(null,p1__32737_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__32740_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__32740_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__32741){
var vec__32743 = p__32741;
var k = cljs.core.nth.call(null,vec__32743,(0),null);
var v = cljs.core.nth.call(null,vec__32743,(1),null);
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
return (function (p1__32744_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__32744_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__25248__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__25248__auto__){
var and__25248__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__25248__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__25248__auto____$1;
}
} else {
return and__25248__auto__;
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
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
return cljs.core.async.map.call(null,(function (p1__32745_SHARP_){
return cljs_http.client.decode_body.call(null,p1__32745_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_default_headers = (function() { 
var cljs_http$client$wrap_default_headers__delegate = function (client,p__32746){
var vec__32748 = p__32746;
var default_headers = cljs.core.nth.call(null,vec__32748,(0),null);
return ((function (vec__32748,default_headers){
return (function (request){
var temp__4124__auto__ = (function (){var or__25260__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var default_headers__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__32748,default_headers))
};
var cljs_http$client$wrap_default_headers = function (client,var_args){
var p__32746 = null;
if (arguments.length > 1) {
var G__32749__i = 0, G__32749__a = new Array(arguments.length -  1);
while (G__32749__i < G__32749__a.length) {G__32749__a[G__32749__i] = arguments[G__32749__i + 1]; ++G__32749__i;}
  p__32746 = new cljs.core.IndexedSeq(G__32749__a,0);
} 
return cljs_http$client$wrap_default_headers__delegate.call(this,client,p__32746);};
cljs_http$client$wrap_default_headers.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_default_headers.cljs$lang$applyTo = (function (arglist__32750){
var client = cljs.core.first(arglist__32750);
var p__32746 = cljs.core.rest(arglist__32750);
return cljs_http$client$wrap_default_headers__delegate(client,p__32746);
});
cljs_http$client$wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_default_headers__delegate;
return cljs_http$client$wrap_default_headers;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_accept = (function() { 
var cljs_http$client$wrap_accept__delegate = function (client,p__32751){
var vec__32753 = p__32751;
var accept = cljs.core.nth.call(null,vec__32753,(0),null);
return ((function (vec__32753,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__25260__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__32753,accept))
};
var cljs_http$client$wrap_accept = function (client,var_args){
var p__32751 = null;
if (arguments.length > 1) {
var G__32754__i = 0, G__32754__a = new Array(arguments.length -  1);
while (G__32754__i < G__32754__a.length) {G__32754__a[G__32754__i] = arguments[G__32754__i + 1]; ++G__32754__i;}
  p__32751 = new cljs.core.IndexedSeq(G__32754__a,0);
} 
return cljs_http$client$wrap_accept__delegate.call(this,client,p__32751);};
cljs_http$client$wrap_accept.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_accept.cljs$lang$applyTo = (function (arglist__32755){
var client = cljs.core.first(arglist__32755);
var p__32751 = cljs.core.rest(arglist__32755);
return cljs_http$client$wrap_accept__delegate(client,p__32751);
});
cljs_http$client$wrap_accept.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_accept__delegate;
return cljs_http$client$wrap_accept;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_content_type = (function() { 
var cljs_http$client$wrap_content_type__delegate = function (client,p__32756){
var vec__32758 = p__32756;
var content_type = cljs.core.nth.call(null,vec__32758,(0),null);
return ((function (vec__32758,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__25260__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__32758,content_type))
};
var cljs_http$client$wrap_content_type = function (client,var_args){
var p__32756 = null;
if (arguments.length > 1) {
var G__32759__i = 0, G__32759__a = new Array(arguments.length -  1);
while (G__32759__i < G__32759__a.length) {G__32759__a[G__32759__i] = arguments[G__32759__i + 1]; ++G__32759__i;}
  p__32756 = new cljs.core.IndexedSeq(G__32759__a,0);
} 
return cljs_http$client$wrap_content_type__delegate.call(this,client,p__32756);};
cljs_http$client$wrap_content_type.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_content_type.cljs$lang$applyTo = (function (arglist__32760){
var client = cljs.core.first(arglist__32760);
var p__32756 = cljs.core.rest(arglist__32760);
return cljs_http$client$wrap_content_type__delegate(client,p__32756);
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__32762 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__32762__$1 = ((cljs.core.seq_QMARK_.call(null,map__32762))?cljs.core.apply.call(null,cljs.core.hash_map,map__32762):map__32762);
var encoding_opts = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__32762__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
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
var map__32766 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__32766__$1 = ((cljs.core.seq_QMARK_.call(null,map__32766))?cljs.core.apply.call(null,cljs.core.hash_map,map__32766):map__32766);
var decoding_opts = cljs.core.get.call(null,map__32766__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__32766__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__32766,map__32766__$1,decoding_opts,decoding){
return (function (p1__32763_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__32763_SHARP_,decoding,decoding_opts);
});})(map__32766,map__32766__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__32766,map__32766__$1,decoding_opts,decoding,transit_decode){
return (function (p1__32764_SHARP_){
return cljs_http.client.decode_body.call(null,p1__32764_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__32766,map__32766__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 * Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
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
return cljs.core.async.map.call(null,(function (p1__32767_SHARP_){
return cljs_http.client.decode_body.call(null,p1__32767_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__32770){
var map__32771 = p__32770;
var map__32771__$1 = ((cljs.core.seq_QMARK_.call(null,map__32771))?cljs.core.apply.call(null,cljs.core.hash_map,map__32771):map__32771);
var req = map__32771__$1;
var query_params = cljs.core.get.call(null,map__32771__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__32774){
var map__32775 = p__32774;
var map__32775__$1 = ((cljs.core.seq_QMARK_.call(null,map__32775))?cljs.core.apply.call(null,cljs.core.hash_map,map__32775):map__32775);
var request = map__32775__$1;
var headers = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__32775__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__25248__auto__ = form_params;
if(cljs.core.truth_(and__25248__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25248__auto__;
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
var seq__32782_32788 = cljs.core.seq.call(null,params);
var chunk__32783_32789 = null;
var count__32784_32790 = (0);
var i__32785_32791 = (0);
while(true){
if((i__32785_32791 < count__32784_32790)){
var vec__32786_32792 = cljs.core._nth.call(null,chunk__32783_32789,i__32785_32791);
var k_32793 = cljs.core.nth.call(null,vec__32786_32792,(0),null);
var v_32794 = cljs.core.nth.call(null,vec__32786_32792,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_32794)){
form_data.append(cljs.core.name.call(null,k_32793),cljs.core.first.call(null,v_32794),cljs.core.second.call(null,v_32794));
} else {
form_data.append(cljs.core.name.call(null,k_32793),v_32794);
}

var G__32795 = seq__32782_32788;
var G__32796 = chunk__32783_32789;
var G__32797 = count__32784_32790;
var G__32798 = (i__32785_32791 + (1));
seq__32782_32788 = G__32795;
chunk__32783_32789 = G__32796;
count__32784_32790 = G__32797;
i__32785_32791 = G__32798;
continue;
} else {
var temp__4126__auto___32799 = cljs.core.seq.call(null,seq__32782_32788);
if(temp__4126__auto___32799){
var seq__32782_32800__$1 = temp__4126__auto___32799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32782_32800__$1)){
var c__26047__auto___32801 = cljs.core.chunk_first.call(null,seq__32782_32800__$1);
var G__32802 = cljs.core.chunk_rest.call(null,seq__32782_32800__$1);
var G__32803 = c__26047__auto___32801;
var G__32804 = cljs.core.count.call(null,c__26047__auto___32801);
var G__32805 = (0);
seq__32782_32788 = G__32802;
chunk__32783_32789 = G__32803;
count__32784_32790 = G__32804;
i__32785_32791 = G__32805;
continue;
} else {
var vec__32787_32806 = cljs.core.first.call(null,seq__32782_32800__$1);
var k_32807 = cljs.core.nth.call(null,vec__32787_32806,(0),null);
var v_32808 = cljs.core.nth.call(null,vec__32787_32806,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_32808)){
form_data.append(cljs.core.name.call(null,k_32807),cljs.core.first.call(null,v_32808),cljs.core.second.call(null,v_32808));
} else {
form_data.append(cljs.core.name.call(null,k_32807),v_32808);
}

var G__32809 = cljs.core.next.call(null,seq__32782_32800__$1);
var G__32810 = null;
var G__32811 = (0);
var G__32812 = (0);
seq__32782_32788 = G__32809;
chunk__32783_32789 = G__32810;
count__32784_32790 = G__32811;
i__32785_32791 = G__32812;
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
return (function (p__32815){
var map__32816 = p__32815;
var map__32816__$1 = ((cljs.core.seq_QMARK_.call(null,map__32816))?cljs.core.apply.call(null,cljs.core.hash_map,map__32816):map__32816);
var request = map__32816__$1;
var request_method = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__32816__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__25248__auto__ = multipart_params;
if(cljs.core.truth_(and__25248__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__25248__auto__;
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__32817_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__32817_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__32821){
var map__32822 = p__32821;
var map__32822__$1 = ((cljs.core.seq_QMARK_.call(null,map__32822))?cljs.core.apply.call(null,cljs.core.hash_map,map__32822):map__32822);
var req = map__32822__$1;
var query_params = cljs.core.get.call(null,map__32822__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__32822,map__32822__$1,req,query_params){
return (function (p1__32818_SHARP_){
return cljs.core.merge.call(null,p1__32818_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__32822,map__32822__$1,req,query_params))
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
var cljs_http$client$wrap_basic_auth__delegate = function (client,p__32823){
var vec__32825 = p__32823;
var credentials = cljs.core.nth.call(null,vec__32825,(0),null);
return ((function (vec__32825,credentials){
return (function (req){
var credentials__$1 = (function (){var or__25260__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
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
;})(vec__32825,credentials))
};
var cljs_http$client$wrap_basic_auth = function (client,var_args){
var p__32823 = null;
if (arguments.length > 1) {
var G__32826__i = 0, G__32826__a = new Array(arguments.length -  1);
while (G__32826__i < G__32826__a.length) {G__32826__a[G__32826__i] = arguments[G__32826__i + 1]; ++G__32826__i;}
  p__32823 = new cljs.core.IndexedSeq(G__32826__a,0);
} 
return cljs_http$client$wrap_basic_auth__delegate.call(this,client,p__32823);};
cljs_http$client$wrap_basic_auth.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_basic_auth.cljs$lang$applyTo = (function (arglist__32827){
var client = cljs.core.first(arglist__32827);
var p__32823 = cljs.core.rest(arglist__32827);
return cljs_http$client$wrap_basic_auth__delegate(client,p__32823);
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
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
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
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
var cljs_http$client$delete__delegate = function (url,p__32828){
var vec__32830 = p__32828;
var req = cljs.core.nth.call(null,vec__32830,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$delete = function (url,var_args){
var p__32828 = null;
if (arguments.length > 1) {
var G__32831__i = 0, G__32831__a = new Array(arguments.length -  1);
while (G__32831__i < G__32831__a.length) {G__32831__a[G__32831__i] = arguments[G__32831__i + 1]; ++G__32831__i;}
  p__32828 = new cljs.core.IndexedSeq(G__32831__a,0);
} 
return cljs_http$client$delete__delegate.call(this,url,p__32828);};
cljs_http$client$delete.cljs$lang$maxFixedArity = 1;
cljs_http$client$delete.cljs$lang$applyTo = (function (arglist__32832){
var url = cljs.core.first(arglist__32832);
var p__32828 = cljs.core.rest(arglist__32832);
return cljs_http$client$delete__delegate(url,p__32828);
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
var cljs_http$client$get__delegate = function (url,p__32833){
var vec__32835 = p__32833;
var req = cljs.core.nth.call(null,vec__32835,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$get = function (url,var_args){
var p__32833 = null;
if (arguments.length > 1) {
var G__32836__i = 0, G__32836__a = new Array(arguments.length -  1);
while (G__32836__i < G__32836__a.length) {G__32836__a[G__32836__i] = arguments[G__32836__i + 1]; ++G__32836__i;}
  p__32833 = new cljs.core.IndexedSeq(G__32836__a,0);
} 
return cljs_http$client$get__delegate.call(this,url,p__32833);};
cljs_http$client$get.cljs$lang$maxFixedArity = 1;
cljs_http$client$get.cljs$lang$applyTo = (function (arglist__32837){
var url = cljs.core.first(arglist__32837);
var p__32833 = cljs.core.rest(arglist__32837);
return cljs_http$client$get__delegate(url,p__32833);
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
var cljs_http$client$head__delegate = function (url,p__32838){
var vec__32840 = p__32838;
var req = cljs.core.nth.call(null,vec__32840,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$head = function (url,var_args){
var p__32838 = null;
if (arguments.length > 1) {
var G__32841__i = 0, G__32841__a = new Array(arguments.length -  1);
while (G__32841__i < G__32841__a.length) {G__32841__a[G__32841__i] = arguments[G__32841__i + 1]; ++G__32841__i;}
  p__32838 = new cljs.core.IndexedSeq(G__32841__a,0);
} 
return cljs_http$client$head__delegate.call(this,url,p__32838);};
cljs_http$client$head.cljs$lang$maxFixedArity = 1;
cljs_http$client$head.cljs$lang$applyTo = (function (arglist__32842){
var url = cljs.core.first(arglist__32842);
var p__32838 = cljs.core.rest(arglist__32842);
return cljs_http$client$head__delegate(url,p__32838);
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
var cljs_http$client$jsonp__delegate = function (url,p__32843){
var vec__32845 = p__32843;
var req = cljs.core.nth.call(null,vec__32845,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$jsonp = function (url,var_args){
var p__32843 = null;
if (arguments.length > 1) {
var G__32846__i = 0, G__32846__a = new Array(arguments.length -  1);
while (G__32846__i < G__32846__a.length) {G__32846__a[G__32846__i] = arguments[G__32846__i + 1]; ++G__32846__i;}
  p__32843 = new cljs.core.IndexedSeq(G__32846__a,0);
} 
return cljs_http$client$jsonp__delegate.call(this,url,p__32843);};
cljs_http$client$jsonp.cljs$lang$maxFixedArity = 1;
cljs_http$client$jsonp.cljs$lang$applyTo = (function (arglist__32847){
var url = cljs.core.first(arglist__32847);
var p__32843 = cljs.core.rest(arglist__32847);
return cljs_http$client$jsonp__delegate(url,p__32843);
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
var cljs_http$client$move__delegate = function (url,p__32848){
var vec__32850 = p__32848;
var req = cljs.core.nth.call(null,vec__32850,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$move = function (url,var_args){
var p__32848 = null;
if (arguments.length > 1) {
var G__32851__i = 0, G__32851__a = new Array(arguments.length -  1);
while (G__32851__i < G__32851__a.length) {G__32851__a[G__32851__i] = arguments[G__32851__i + 1]; ++G__32851__i;}
  p__32848 = new cljs.core.IndexedSeq(G__32851__a,0);
} 
return cljs_http$client$move__delegate.call(this,url,p__32848);};
cljs_http$client$move.cljs$lang$maxFixedArity = 1;
cljs_http$client$move.cljs$lang$applyTo = (function (arglist__32852){
var url = cljs.core.first(arglist__32852);
var p__32848 = cljs.core.rest(arglist__32852);
return cljs_http$client$move__delegate(url,p__32848);
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
var cljs_http$client$options__delegate = function (url,p__32853){
var vec__32855 = p__32853;
var req = cljs.core.nth.call(null,vec__32855,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$options = function (url,var_args){
var p__32853 = null;
if (arguments.length > 1) {
var G__32856__i = 0, G__32856__a = new Array(arguments.length -  1);
while (G__32856__i < G__32856__a.length) {G__32856__a[G__32856__i] = arguments[G__32856__i + 1]; ++G__32856__i;}
  p__32853 = new cljs.core.IndexedSeq(G__32856__a,0);
} 
return cljs_http$client$options__delegate.call(this,url,p__32853);};
cljs_http$client$options.cljs$lang$maxFixedArity = 1;
cljs_http$client$options.cljs$lang$applyTo = (function (arglist__32857){
var url = cljs.core.first(arglist__32857);
var p__32853 = cljs.core.rest(arglist__32857);
return cljs_http$client$options__delegate(url,p__32853);
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
var cljs_http$client$patch__delegate = function (url,p__32858){
var vec__32860 = p__32858;
var req = cljs.core.nth.call(null,vec__32860,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$patch = function (url,var_args){
var p__32858 = null;
if (arguments.length > 1) {
var G__32861__i = 0, G__32861__a = new Array(arguments.length -  1);
while (G__32861__i < G__32861__a.length) {G__32861__a[G__32861__i] = arguments[G__32861__i + 1]; ++G__32861__i;}
  p__32858 = new cljs.core.IndexedSeq(G__32861__a,0);
} 
return cljs_http$client$patch__delegate.call(this,url,p__32858);};
cljs_http$client$patch.cljs$lang$maxFixedArity = 1;
cljs_http$client$patch.cljs$lang$applyTo = (function (arglist__32862){
var url = cljs.core.first(arglist__32862);
var p__32858 = cljs.core.rest(arglist__32862);
return cljs_http$client$patch__delegate(url,p__32858);
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
var cljs_http$client$post__delegate = function (url,p__32863){
var vec__32865 = p__32863;
var req = cljs.core.nth.call(null,vec__32865,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$post = function (url,var_args){
var p__32863 = null;
if (arguments.length > 1) {
var G__32866__i = 0, G__32866__a = new Array(arguments.length -  1);
while (G__32866__i < G__32866__a.length) {G__32866__a[G__32866__i] = arguments[G__32866__i + 1]; ++G__32866__i;}
  p__32863 = new cljs.core.IndexedSeq(G__32866__a,0);
} 
return cljs_http$client$post__delegate.call(this,url,p__32863);};
cljs_http$client$post.cljs$lang$maxFixedArity = 1;
cljs_http$client$post.cljs$lang$applyTo = (function (arglist__32867){
var url = cljs.core.first(arglist__32867);
var p__32863 = cljs.core.rest(arglist__32867);
return cljs_http$client$post__delegate(url,p__32863);
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
var cljs_http$client$put__delegate = function (url,p__32868){
var vec__32870 = p__32868;
var req = cljs.core.nth.call(null,vec__32870,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$put = function (url,var_args){
var p__32868 = null;
if (arguments.length > 1) {
var G__32871__i = 0, G__32871__a = new Array(arguments.length -  1);
while (G__32871__i < G__32871__a.length) {G__32871__a[G__32871__i] = arguments[G__32871__i + 1]; ++G__32871__i;}
  p__32868 = new cljs.core.IndexedSeq(G__32871__a,0);
} 
return cljs_http$client$put__delegate.call(this,url,p__32868);};
cljs_http$client$put.cljs$lang$maxFixedArity = 1;
cljs_http$client$put.cljs$lang$applyTo = (function (arglist__32872){
var url = cljs.core.first(arglist__32872);
var p__32868 = cljs.core.rest(arglist__32872);
return cljs_http$client$put__delegate(url,p__32868);
});
cljs_http$client$put.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$put__delegate;
return cljs_http$client$put;
})()
;

//# sourceMappingURL=client.js.map?rel=1446258008190