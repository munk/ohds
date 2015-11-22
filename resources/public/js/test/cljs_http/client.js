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
return cljs.core.reduce.call(null,(function (p1__16362_SHARP_,p2__16361_SHARP_){
var vec__16364 = clojure.string.split.call(null,p2__16361_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__16364,(0),null);
var v = cljs.core.nth.call(null,vec__16364,(1),null);
return cljs.core.assoc.call(null,p1__16362_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__16365_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__16365_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__16366){
var vec__16368 = p__16366;
var k = cljs.core.nth.call(null,vec__16368,(0),null);
var v = cljs.core.nth.call(null,vec__16368,(1),null);
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
return (function (p1__16369_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__16369_SHARP_)].join('');
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
return cljs.core.async.map.call(null,(function (p1__16370_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16370_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_default_headers = (function() { 
var cljs_http$client$wrap_default_headers__delegate = function (client,p__16371){
var vec__16373 = p__16371;
var default_headers = cljs.core.nth.call(null,vec__16373,(0),null);
return ((function (vec__16373,default_headers){
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
;})(vec__16373,default_headers))
};
var cljs_http$client$wrap_default_headers = function (client,var_args){
var p__16371 = null;
if (arguments.length > 1) {
var G__16374__i = 0, G__16374__a = new Array(arguments.length -  1);
while (G__16374__i < G__16374__a.length) {G__16374__a[G__16374__i] = arguments[G__16374__i + 1]; ++G__16374__i;}
  p__16371 = new cljs.core.IndexedSeq(G__16374__a,0);
} 
return cljs_http$client$wrap_default_headers__delegate.call(this,client,p__16371);};
cljs_http$client$wrap_default_headers.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_default_headers.cljs$lang$applyTo = (function (arglist__16375){
var client = cljs.core.first(arglist__16375);
var p__16371 = cljs.core.rest(arglist__16375);
return cljs_http$client$wrap_default_headers__delegate(client,p__16371);
});
cljs_http$client$wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_default_headers__delegate;
return cljs_http$client$wrap_default_headers;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_accept = (function() { 
var cljs_http$client$wrap_accept__delegate = function (client,p__16376){
var vec__16378 = p__16376;
var accept = cljs.core.nth.call(null,vec__16378,(0),null);
return ((function (vec__16378,accept){
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
;})(vec__16378,accept))
};
var cljs_http$client$wrap_accept = function (client,var_args){
var p__16376 = null;
if (arguments.length > 1) {
var G__16379__i = 0, G__16379__a = new Array(arguments.length -  1);
while (G__16379__i < G__16379__a.length) {G__16379__a[G__16379__i] = arguments[G__16379__i + 1]; ++G__16379__i;}
  p__16376 = new cljs.core.IndexedSeq(G__16379__a,0);
} 
return cljs_http$client$wrap_accept__delegate.call(this,client,p__16376);};
cljs_http$client$wrap_accept.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_accept.cljs$lang$applyTo = (function (arglist__16380){
var client = cljs.core.first(arglist__16380);
var p__16376 = cljs.core.rest(arglist__16380);
return cljs_http$client$wrap_accept__delegate(client,p__16376);
});
cljs_http$client$wrap_accept.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_accept__delegate;
return cljs_http$client$wrap_accept;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_content_type = (function() { 
var cljs_http$client$wrap_content_type__delegate = function (client,p__16381){
var vec__16383 = p__16381;
var content_type = cljs.core.nth.call(null,vec__16383,(0),null);
return ((function (vec__16383,content_type){
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
;})(vec__16383,content_type))
};
var cljs_http$client$wrap_content_type = function (client,var_args){
var p__16381 = null;
if (arguments.length > 1) {
var G__16384__i = 0, G__16384__a = new Array(arguments.length -  1);
while (G__16384__i < G__16384__a.length) {G__16384__a[G__16384__i] = arguments[G__16384__i + 1]; ++G__16384__i;}
  p__16381 = new cljs.core.IndexedSeq(G__16384__a,0);
} 
return cljs_http$client$wrap_content_type__delegate.call(this,client,p__16381);};
cljs_http$client$wrap_content_type.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_content_type.cljs$lang$applyTo = (function (arglist__16385){
var client = cljs.core.first(arglist__16385);
var p__16381 = cljs.core.rest(arglist__16385);
return cljs_http$client$wrap_content_type__delegate(client,p__16381);
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
var map__16387 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16387__$1 = ((cljs.core.seq_QMARK_.call(null,map__16387))?cljs.core.apply.call(null,cljs.core.hash_map,map__16387):map__16387);
var encoding = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__16391 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__16391__$1 = ((cljs.core.seq_QMARK_.call(null,map__16391))?cljs.core.apply.call(null,cljs.core.hash_map,map__16391):map__16391);
var decoding = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__16391__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__16391,map__16391__$1,decoding,decoding_opts){
return (function (p1__16388_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__16388_SHARP_,decoding,decoding_opts);
});})(map__16391,map__16391__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__16391,map__16391__$1,decoding,decoding_opts,transit_decode){
return (function (p1__16389_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16389_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__16391,map__16391__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__16392_SHARP_){
return cljs_http.client.decode_body.call(null,p1__16392_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__16395){
var map__16396 = p__16395;
var map__16396__$1 = ((cljs.core.seq_QMARK_.call(null,map__16396))?cljs.core.apply.call(null,cljs.core.hash_map,map__16396):map__16396);
var req = map__16396__$1;
var query_params = cljs.core.get.call(null,map__16396__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__16399){
var map__16400 = p__16399;
var map__16400__$1 = ((cljs.core.seq_QMARK_.call(null,map__16400))?cljs.core.apply.call(null,cljs.core.hash_map,map__16400):map__16400);
var request = map__16400__$1;
var form_params = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16400__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var seq__16407_16413 = cljs.core.seq.call(null,params);
var chunk__16408_16414 = null;
var count__16409_16415 = (0);
var i__16410_16416 = (0);
while(true){
if((i__16410_16416 < count__16409_16415)){
var vec__16411_16417 = cljs.core._nth.call(null,chunk__16408_16414,i__16410_16416);
var k_16418 = cljs.core.nth.call(null,vec__16411_16417,(0),null);
var v_16419 = cljs.core.nth.call(null,vec__16411_16417,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16419)){
form_data.append(cljs.core.name.call(null,k_16418),cljs.core.first.call(null,v_16419),cljs.core.second.call(null,v_16419));
} else {
form_data.append(cljs.core.name.call(null,k_16418),v_16419);
}

var G__16420 = seq__16407_16413;
var G__16421 = chunk__16408_16414;
var G__16422 = count__16409_16415;
var G__16423 = (i__16410_16416 + (1));
seq__16407_16413 = G__16420;
chunk__16408_16414 = G__16421;
count__16409_16415 = G__16422;
i__16410_16416 = G__16423;
continue;
} else {
var temp__4425__auto___16424 = cljs.core.seq.call(null,seq__16407_16413);
if(temp__4425__auto___16424){
var seq__16407_16425__$1 = temp__4425__auto___16424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16407_16425__$1)){
var c__4863__auto___16426 = cljs.core.chunk_first.call(null,seq__16407_16425__$1);
var G__16427 = cljs.core.chunk_rest.call(null,seq__16407_16425__$1);
var G__16428 = c__4863__auto___16426;
var G__16429 = cljs.core.count.call(null,c__4863__auto___16426);
var G__16430 = (0);
seq__16407_16413 = G__16427;
chunk__16408_16414 = G__16428;
count__16409_16415 = G__16429;
i__16410_16416 = G__16430;
continue;
} else {
var vec__16412_16431 = cljs.core.first.call(null,seq__16407_16425__$1);
var k_16432 = cljs.core.nth.call(null,vec__16412_16431,(0),null);
var v_16433 = cljs.core.nth.call(null,vec__16412_16431,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_16433)){
form_data.append(cljs.core.name.call(null,k_16432),cljs.core.first.call(null,v_16433),cljs.core.second.call(null,v_16433));
} else {
form_data.append(cljs.core.name.call(null,k_16432),v_16433);
}

var G__16434 = cljs.core.next.call(null,seq__16407_16425__$1);
var G__16435 = null;
var G__16436 = (0);
var G__16437 = (0);
seq__16407_16413 = G__16434;
chunk__16408_16414 = G__16435;
count__16409_16415 = G__16436;
i__16410_16416 = G__16437;
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
return (function (p__16440){
var map__16441 = p__16440;
var map__16441__$1 = ((cljs.core.seq_QMARK_.call(null,map__16441))?cljs.core.apply.call(null,cljs.core.hash_map,map__16441):map__16441);
var request = map__16441__$1;
var multipart_params = cljs.core.get.call(null,map__16441__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__16441__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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
return (function (p1__16442_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__16442_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__16446){
var map__16447 = p__16446;
var map__16447__$1 = ((cljs.core.seq_QMARK_.call(null,map__16447))?cljs.core.apply.call(null,cljs.core.hash_map,map__16447):map__16447);
var req = map__16447__$1;
var query_params = cljs.core.get.call(null,map__16447__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__16447,map__16447__$1,req,query_params){
return (function (p1__16443_SHARP_){
return cljs.core.merge.call(null,p1__16443_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__16447,map__16447__$1,req,query_params))
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
var cljs_http$client$wrap_basic_auth__delegate = function (client,p__16448){
var vec__16450 = p__16448;
var credentials = cljs.core.nth.call(null,vec__16450,(0),null);
return ((function (vec__16450,credentials){
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
;})(vec__16450,credentials))
};
var cljs_http$client$wrap_basic_auth = function (client,var_args){
var p__16448 = null;
if (arguments.length > 1) {
var G__16451__i = 0, G__16451__a = new Array(arguments.length -  1);
while (G__16451__i < G__16451__a.length) {G__16451__a[G__16451__i] = arguments[G__16451__i + 1]; ++G__16451__i;}
  p__16448 = new cljs.core.IndexedSeq(G__16451__a,0);
} 
return cljs_http$client$wrap_basic_auth__delegate.call(this,client,p__16448);};
cljs_http$client$wrap_basic_auth.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_basic_auth.cljs$lang$applyTo = (function (arglist__16452){
var client = cljs.core.first(arglist__16452);
var p__16448 = cljs.core.rest(arglist__16452);
return cljs_http$client$wrap_basic_auth__delegate(client,p__16448);
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
var cljs_http$client$delete__delegate = function (url,p__16453){
var vec__16455 = p__16453;
var req = cljs.core.nth.call(null,vec__16455,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$delete = function (url,var_args){
var p__16453 = null;
if (arguments.length > 1) {
var G__16456__i = 0, G__16456__a = new Array(arguments.length -  1);
while (G__16456__i < G__16456__a.length) {G__16456__a[G__16456__i] = arguments[G__16456__i + 1]; ++G__16456__i;}
  p__16453 = new cljs.core.IndexedSeq(G__16456__a,0);
} 
return cljs_http$client$delete__delegate.call(this,url,p__16453);};
cljs_http$client$delete.cljs$lang$maxFixedArity = 1;
cljs_http$client$delete.cljs$lang$applyTo = (function (arglist__16457){
var url = cljs.core.first(arglist__16457);
var p__16453 = cljs.core.rest(arglist__16457);
return cljs_http$client$delete__delegate(url,p__16453);
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
var cljs_http$client$get__delegate = function (url,p__16458){
var vec__16460 = p__16458;
var req = cljs.core.nth.call(null,vec__16460,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$get = function (url,var_args){
var p__16458 = null;
if (arguments.length > 1) {
var G__16461__i = 0, G__16461__a = new Array(arguments.length -  1);
while (G__16461__i < G__16461__a.length) {G__16461__a[G__16461__i] = arguments[G__16461__i + 1]; ++G__16461__i;}
  p__16458 = new cljs.core.IndexedSeq(G__16461__a,0);
} 
return cljs_http$client$get__delegate.call(this,url,p__16458);};
cljs_http$client$get.cljs$lang$maxFixedArity = 1;
cljs_http$client$get.cljs$lang$applyTo = (function (arglist__16462){
var url = cljs.core.first(arglist__16462);
var p__16458 = cljs.core.rest(arglist__16462);
return cljs_http$client$get__delegate(url,p__16458);
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
var cljs_http$client$head__delegate = function (url,p__16463){
var vec__16465 = p__16463;
var req = cljs.core.nth.call(null,vec__16465,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$head = function (url,var_args){
var p__16463 = null;
if (arguments.length > 1) {
var G__16466__i = 0, G__16466__a = new Array(arguments.length -  1);
while (G__16466__i < G__16466__a.length) {G__16466__a[G__16466__i] = arguments[G__16466__i + 1]; ++G__16466__i;}
  p__16463 = new cljs.core.IndexedSeq(G__16466__a,0);
} 
return cljs_http$client$head__delegate.call(this,url,p__16463);};
cljs_http$client$head.cljs$lang$maxFixedArity = 1;
cljs_http$client$head.cljs$lang$applyTo = (function (arglist__16467){
var url = cljs.core.first(arglist__16467);
var p__16463 = cljs.core.rest(arglist__16467);
return cljs_http$client$head__delegate(url,p__16463);
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
var cljs_http$client$jsonp__delegate = function (url,p__16468){
var vec__16470 = p__16468;
var req = cljs.core.nth.call(null,vec__16470,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$jsonp = function (url,var_args){
var p__16468 = null;
if (arguments.length > 1) {
var G__16471__i = 0, G__16471__a = new Array(arguments.length -  1);
while (G__16471__i < G__16471__a.length) {G__16471__a[G__16471__i] = arguments[G__16471__i + 1]; ++G__16471__i;}
  p__16468 = new cljs.core.IndexedSeq(G__16471__a,0);
} 
return cljs_http$client$jsonp__delegate.call(this,url,p__16468);};
cljs_http$client$jsonp.cljs$lang$maxFixedArity = 1;
cljs_http$client$jsonp.cljs$lang$applyTo = (function (arglist__16472){
var url = cljs.core.first(arglist__16472);
var p__16468 = cljs.core.rest(arglist__16472);
return cljs_http$client$jsonp__delegate(url,p__16468);
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
var cljs_http$client$move__delegate = function (url,p__16473){
var vec__16475 = p__16473;
var req = cljs.core.nth.call(null,vec__16475,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$move = function (url,var_args){
var p__16473 = null;
if (arguments.length > 1) {
var G__16476__i = 0, G__16476__a = new Array(arguments.length -  1);
while (G__16476__i < G__16476__a.length) {G__16476__a[G__16476__i] = arguments[G__16476__i + 1]; ++G__16476__i;}
  p__16473 = new cljs.core.IndexedSeq(G__16476__a,0);
} 
return cljs_http$client$move__delegate.call(this,url,p__16473);};
cljs_http$client$move.cljs$lang$maxFixedArity = 1;
cljs_http$client$move.cljs$lang$applyTo = (function (arglist__16477){
var url = cljs.core.first(arglist__16477);
var p__16473 = cljs.core.rest(arglist__16477);
return cljs_http$client$move__delegate(url,p__16473);
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
var cljs_http$client$options__delegate = function (url,p__16478){
var vec__16480 = p__16478;
var req = cljs.core.nth.call(null,vec__16480,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$options = function (url,var_args){
var p__16478 = null;
if (arguments.length > 1) {
var G__16481__i = 0, G__16481__a = new Array(arguments.length -  1);
while (G__16481__i < G__16481__a.length) {G__16481__a[G__16481__i] = arguments[G__16481__i + 1]; ++G__16481__i;}
  p__16478 = new cljs.core.IndexedSeq(G__16481__a,0);
} 
return cljs_http$client$options__delegate.call(this,url,p__16478);};
cljs_http$client$options.cljs$lang$maxFixedArity = 1;
cljs_http$client$options.cljs$lang$applyTo = (function (arglist__16482){
var url = cljs.core.first(arglist__16482);
var p__16478 = cljs.core.rest(arglist__16482);
return cljs_http$client$options__delegate(url,p__16478);
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
var cljs_http$client$patch__delegate = function (url,p__16483){
var vec__16485 = p__16483;
var req = cljs.core.nth.call(null,vec__16485,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$patch = function (url,var_args){
var p__16483 = null;
if (arguments.length > 1) {
var G__16486__i = 0, G__16486__a = new Array(arguments.length -  1);
while (G__16486__i < G__16486__a.length) {G__16486__a[G__16486__i] = arguments[G__16486__i + 1]; ++G__16486__i;}
  p__16483 = new cljs.core.IndexedSeq(G__16486__a,0);
} 
return cljs_http$client$patch__delegate.call(this,url,p__16483);};
cljs_http$client$patch.cljs$lang$maxFixedArity = 1;
cljs_http$client$patch.cljs$lang$applyTo = (function (arglist__16487){
var url = cljs.core.first(arglist__16487);
var p__16483 = cljs.core.rest(arglist__16487);
return cljs_http$client$patch__delegate(url,p__16483);
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
var cljs_http$client$post__delegate = function (url,p__16488){
var vec__16490 = p__16488;
var req = cljs.core.nth.call(null,vec__16490,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$post = function (url,var_args){
var p__16488 = null;
if (arguments.length > 1) {
var G__16491__i = 0, G__16491__a = new Array(arguments.length -  1);
while (G__16491__i < G__16491__a.length) {G__16491__a[G__16491__i] = arguments[G__16491__i + 1]; ++G__16491__i;}
  p__16488 = new cljs.core.IndexedSeq(G__16491__a,0);
} 
return cljs_http$client$post__delegate.call(this,url,p__16488);};
cljs_http$client$post.cljs$lang$maxFixedArity = 1;
cljs_http$client$post.cljs$lang$applyTo = (function (arglist__16492){
var url = cljs.core.first(arglist__16492);
var p__16488 = cljs.core.rest(arglist__16492);
return cljs_http$client$post__delegate(url,p__16488);
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
var cljs_http$client$put__delegate = function (url,p__16493){
var vec__16495 = p__16493;
var req = cljs.core.nth.call(null,vec__16495,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$put = function (url,var_args){
var p__16493 = null;
if (arguments.length > 1) {
var G__16496__i = 0, G__16496__a = new Array(arguments.length -  1);
while (G__16496__i < G__16496__a.length) {G__16496__a[G__16496__i] = arguments[G__16496__i + 1]; ++G__16496__i;}
  p__16493 = new cljs.core.IndexedSeq(G__16496__a,0);
} 
return cljs_http$client$put__delegate.call(this,url,p__16493);};
cljs_http$client$put.cljs$lang$maxFixedArity = 1;
cljs_http$client$put.cljs$lang$applyTo = (function (arglist__16497){
var url = cljs.core.first(arglist__16497);
var p__16493 = cljs.core.rest(arglist__16497);
return cljs_http$client$put__delegate(url,p__16493);
});
cljs_http$client$put.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$put__delegate;
return cljs_http$client$put;
})()
;
