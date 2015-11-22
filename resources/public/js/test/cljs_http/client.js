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
return cljs.core.reduce.call(null,(function (p1__21547_SHARP_,p2__21546_SHARP_){
var vec__21549 = clojure.string.split.call(null,p2__21546_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__21549,(0),null);
var v = cljs.core.nth.call(null,vec__21549,(1),null);
return cljs.core.assoc.call(null,p1__21547_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__21550_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__21550_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__21551){
var vec__21553 = p__21551;
var k = cljs.core.nth.call(null,vec__21553,(0),null);
var v = cljs.core.nth.call(null,vec__21553,(1),null);
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
return (function (p1__21554_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__21554_SHARP_)].join('');
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
return cljs.core.async.map.call(null,(function (p1__21555_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21555_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_default_headers = (function() { 
var cljs_http$client$wrap_default_headers__delegate = function (client,p__21556){
var vec__21558 = p__21556;
var default_headers = cljs.core.nth.call(null,vec__21558,(0),null);
return ((function (vec__21558,default_headers){
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
;})(vec__21558,default_headers))
};
var cljs_http$client$wrap_default_headers = function (client,var_args){
var p__21556 = null;
if (arguments.length > 1) {
var G__21559__i = 0, G__21559__a = new Array(arguments.length -  1);
while (G__21559__i < G__21559__a.length) {G__21559__a[G__21559__i] = arguments[G__21559__i + 1]; ++G__21559__i;}
  p__21556 = new cljs.core.IndexedSeq(G__21559__a,0);
} 
return cljs_http$client$wrap_default_headers__delegate.call(this,client,p__21556);};
cljs_http$client$wrap_default_headers.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_default_headers.cljs$lang$applyTo = (function (arglist__21560){
var client = cljs.core.first(arglist__21560);
var p__21556 = cljs.core.rest(arglist__21560);
return cljs_http$client$wrap_default_headers__delegate(client,p__21556);
});
cljs_http$client$wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_default_headers__delegate;
return cljs_http$client$wrap_default_headers;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_accept = (function() { 
var cljs_http$client$wrap_accept__delegate = function (client,p__21561){
var vec__21563 = p__21561;
var accept = cljs.core.nth.call(null,vec__21563,(0),null);
return ((function (vec__21563,accept){
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
;})(vec__21563,accept))
};
var cljs_http$client$wrap_accept = function (client,var_args){
var p__21561 = null;
if (arguments.length > 1) {
var G__21564__i = 0, G__21564__a = new Array(arguments.length -  1);
while (G__21564__i < G__21564__a.length) {G__21564__a[G__21564__i] = arguments[G__21564__i + 1]; ++G__21564__i;}
  p__21561 = new cljs.core.IndexedSeq(G__21564__a,0);
} 
return cljs_http$client$wrap_accept__delegate.call(this,client,p__21561);};
cljs_http$client$wrap_accept.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_accept.cljs$lang$applyTo = (function (arglist__21565){
var client = cljs.core.first(arglist__21565);
var p__21561 = cljs.core.rest(arglist__21565);
return cljs_http$client$wrap_accept__delegate(client,p__21561);
});
cljs_http$client$wrap_accept.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$wrap_accept__delegate;
return cljs_http$client$wrap_accept;
})()
;
/**
 * @param {...*} var_args
 */
cljs_http.client.wrap_content_type = (function() { 
var cljs_http$client$wrap_content_type__delegate = function (client,p__21566){
var vec__21568 = p__21566;
var content_type = cljs.core.nth.call(null,vec__21568,(0),null);
return ((function (vec__21568,content_type){
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
;})(vec__21568,content_type))
};
var cljs_http$client$wrap_content_type = function (client,var_args){
var p__21566 = null;
if (arguments.length > 1) {
var G__21569__i = 0, G__21569__a = new Array(arguments.length -  1);
while (G__21569__i < G__21569__a.length) {G__21569__a[G__21569__i] = arguments[G__21569__i + 1]; ++G__21569__i;}
  p__21566 = new cljs.core.IndexedSeq(G__21569__a,0);
} 
return cljs_http$client$wrap_content_type__delegate.call(this,client,p__21566);};
cljs_http$client$wrap_content_type.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_content_type.cljs$lang$applyTo = (function (arglist__21570){
var client = cljs.core.first(arglist__21570);
var p__21566 = cljs.core.rest(arglist__21570);
return cljs_http$client$wrap_content_type__delegate(client,p__21566);
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
var map__21572 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21572__$1 = ((cljs.core.seq_QMARK_.call(null,map__21572))?cljs.core.apply.call(null,cljs.core.hash_map,map__21572):map__21572);
var encoding = cljs.core.get.call(null,map__21572__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__21572__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__21576 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__21576__$1 = ((cljs.core.seq_QMARK_.call(null,map__21576))?cljs.core.apply.call(null,cljs.core.hash_map,map__21576):map__21576);
var decoding = cljs.core.get.call(null,map__21576__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__21576__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__21576,map__21576__$1,decoding,decoding_opts){
return (function (p1__21573_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__21573_SHARP_,decoding,decoding_opts);
});})(map__21576,map__21576__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__21576,map__21576__$1,decoding,decoding_opts,transit_decode){
return (function (p1__21574_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21574_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__21576,map__21576__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__21577_SHARP_){
return cljs_http.client.decode_body.call(null,p1__21577_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__21580){
var map__21581 = p__21580;
var map__21581__$1 = ((cljs.core.seq_QMARK_.call(null,map__21581))?cljs.core.apply.call(null,cljs.core.hash_map,map__21581):map__21581);
var req = map__21581__$1;
var query_params = cljs.core.get.call(null,map__21581__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__21584){
var map__21585 = p__21584;
var map__21585__$1 = ((cljs.core.seq_QMARK_.call(null,map__21585))?cljs.core.apply.call(null,cljs.core.hash_map,map__21585):map__21585);
var request = map__21585__$1;
var form_params = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__21585__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
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
var seq__21592_21598 = cljs.core.seq.call(null,params);
var chunk__21593_21599 = null;
var count__21594_21600 = (0);
var i__21595_21601 = (0);
while(true){
if((i__21595_21601 < count__21594_21600)){
var vec__21596_21602 = cljs.core._nth.call(null,chunk__21593_21599,i__21595_21601);
var k_21603 = cljs.core.nth.call(null,vec__21596_21602,(0),null);
var v_21604 = cljs.core.nth.call(null,vec__21596_21602,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21604)){
form_data.append(cljs.core.name.call(null,k_21603),cljs.core.first.call(null,v_21604),cljs.core.second.call(null,v_21604));
} else {
form_data.append(cljs.core.name.call(null,k_21603),v_21604);
}

var G__21605 = seq__21592_21598;
var G__21606 = chunk__21593_21599;
var G__21607 = count__21594_21600;
var G__21608 = (i__21595_21601 + (1));
seq__21592_21598 = G__21605;
chunk__21593_21599 = G__21606;
count__21594_21600 = G__21607;
i__21595_21601 = G__21608;
continue;
} else {
var temp__4425__auto___21609 = cljs.core.seq.call(null,seq__21592_21598);
if(temp__4425__auto___21609){
var seq__21592_21610__$1 = temp__4425__auto___21609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21592_21610__$1)){
var c__4863__auto___21611 = cljs.core.chunk_first.call(null,seq__21592_21610__$1);
var G__21612 = cljs.core.chunk_rest.call(null,seq__21592_21610__$1);
var G__21613 = c__4863__auto___21611;
var G__21614 = cljs.core.count.call(null,c__4863__auto___21611);
var G__21615 = (0);
seq__21592_21598 = G__21612;
chunk__21593_21599 = G__21613;
count__21594_21600 = G__21614;
i__21595_21601 = G__21615;
continue;
} else {
var vec__21597_21616 = cljs.core.first.call(null,seq__21592_21610__$1);
var k_21617 = cljs.core.nth.call(null,vec__21597_21616,(0),null);
var v_21618 = cljs.core.nth.call(null,vec__21597_21616,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_21618)){
form_data.append(cljs.core.name.call(null,k_21617),cljs.core.first.call(null,v_21618),cljs.core.second.call(null,v_21618));
} else {
form_data.append(cljs.core.name.call(null,k_21617),v_21618);
}

var G__21619 = cljs.core.next.call(null,seq__21592_21610__$1);
var G__21620 = null;
var G__21621 = (0);
var G__21622 = (0);
seq__21592_21598 = G__21619;
chunk__21593_21599 = G__21620;
count__21594_21600 = G__21621;
i__21595_21601 = G__21622;
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
return (function (p__21625){
var map__21626 = p__21625;
var map__21626__$1 = ((cljs.core.seq_QMARK_.call(null,map__21626))?cljs.core.apply.call(null,cljs.core.hash_map,map__21626):map__21626);
var request = map__21626__$1;
var multipart_params = cljs.core.get.call(null,map__21626__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__21626__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
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
return (function (p1__21627_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__21627_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__21631){
var map__21632 = p__21631;
var map__21632__$1 = ((cljs.core.seq_QMARK_.call(null,map__21632))?cljs.core.apply.call(null,cljs.core.hash_map,map__21632):map__21632);
var req = map__21632__$1;
var query_params = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__21632,map__21632__$1,req,query_params){
return (function (p1__21628_SHARP_){
return cljs.core.merge.call(null,p1__21628_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__21632,map__21632__$1,req,query_params))
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
var cljs_http$client$wrap_basic_auth__delegate = function (client,p__21633){
var vec__21635 = p__21633;
var credentials = cljs.core.nth.call(null,vec__21635,(0),null);
return ((function (vec__21635,credentials){
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
;})(vec__21635,credentials))
};
var cljs_http$client$wrap_basic_auth = function (client,var_args){
var p__21633 = null;
if (arguments.length > 1) {
var G__21636__i = 0, G__21636__a = new Array(arguments.length -  1);
while (G__21636__i < G__21636__a.length) {G__21636__a[G__21636__i] = arguments[G__21636__i + 1]; ++G__21636__i;}
  p__21633 = new cljs.core.IndexedSeq(G__21636__a,0);
} 
return cljs_http$client$wrap_basic_auth__delegate.call(this,client,p__21633);};
cljs_http$client$wrap_basic_auth.cljs$lang$maxFixedArity = 1;
cljs_http$client$wrap_basic_auth.cljs$lang$applyTo = (function (arglist__21637){
var client = cljs.core.first(arglist__21637);
var p__21633 = cljs.core.rest(arglist__21637);
return cljs_http$client$wrap_basic_auth__delegate(client,p__21633);
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
var cljs_http$client$delete__delegate = function (url,p__21638){
var vec__21640 = p__21638;
var req = cljs.core.nth.call(null,vec__21640,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$delete = function (url,var_args){
var p__21638 = null;
if (arguments.length > 1) {
var G__21641__i = 0, G__21641__a = new Array(arguments.length -  1);
while (G__21641__i < G__21641__a.length) {G__21641__a[G__21641__i] = arguments[G__21641__i + 1]; ++G__21641__i;}
  p__21638 = new cljs.core.IndexedSeq(G__21641__a,0);
} 
return cljs_http$client$delete__delegate.call(this,url,p__21638);};
cljs_http$client$delete.cljs$lang$maxFixedArity = 1;
cljs_http$client$delete.cljs$lang$applyTo = (function (arglist__21642){
var url = cljs.core.first(arglist__21642);
var p__21638 = cljs.core.rest(arglist__21642);
return cljs_http$client$delete__delegate(url,p__21638);
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
var cljs_http$client$get__delegate = function (url,p__21643){
var vec__21645 = p__21643;
var req = cljs.core.nth.call(null,vec__21645,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$get = function (url,var_args){
var p__21643 = null;
if (arguments.length > 1) {
var G__21646__i = 0, G__21646__a = new Array(arguments.length -  1);
while (G__21646__i < G__21646__a.length) {G__21646__a[G__21646__i] = arguments[G__21646__i + 1]; ++G__21646__i;}
  p__21643 = new cljs.core.IndexedSeq(G__21646__a,0);
} 
return cljs_http$client$get__delegate.call(this,url,p__21643);};
cljs_http$client$get.cljs$lang$maxFixedArity = 1;
cljs_http$client$get.cljs$lang$applyTo = (function (arglist__21647){
var url = cljs.core.first(arglist__21647);
var p__21643 = cljs.core.rest(arglist__21647);
return cljs_http$client$get__delegate(url,p__21643);
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
var cljs_http$client$head__delegate = function (url,p__21648){
var vec__21650 = p__21648;
var req = cljs.core.nth.call(null,vec__21650,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$head = function (url,var_args){
var p__21648 = null;
if (arguments.length > 1) {
var G__21651__i = 0, G__21651__a = new Array(arguments.length -  1);
while (G__21651__i < G__21651__a.length) {G__21651__a[G__21651__i] = arguments[G__21651__i + 1]; ++G__21651__i;}
  p__21648 = new cljs.core.IndexedSeq(G__21651__a,0);
} 
return cljs_http$client$head__delegate.call(this,url,p__21648);};
cljs_http$client$head.cljs$lang$maxFixedArity = 1;
cljs_http$client$head.cljs$lang$applyTo = (function (arglist__21652){
var url = cljs.core.first(arglist__21652);
var p__21648 = cljs.core.rest(arglist__21652);
return cljs_http$client$head__delegate(url,p__21648);
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
var cljs_http$client$jsonp__delegate = function (url,p__21653){
var vec__21655 = p__21653;
var req = cljs.core.nth.call(null,vec__21655,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$jsonp = function (url,var_args){
var p__21653 = null;
if (arguments.length > 1) {
var G__21656__i = 0, G__21656__a = new Array(arguments.length -  1);
while (G__21656__i < G__21656__a.length) {G__21656__a[G__21656__i] = arguments[G__21656__i + 1]; ++G__21656__i;}
  p__21653 = new cljs.core.IndexedSeq(G__21656__a,0);
} 
return cljs_http$client$jsonp__delegate.call(this,url,p__21653);};
cljs_http$client$jsonp.cljs$lang$maxFixedArity = 1;
cljs_http$client$jsonp.cljs$lang$applyTo = (function (arglist__21657){
var url = cljs.core.first(arglist__21657);
var p__21653 = cljs.core.rest(arglist__21657);
return cljs_http$client$jsonp__delegate(url,p__21653);
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
var cljs_http$client$move__delegate = function (url,p__21658){
var vec__21660 = p__21658;
var req = cljs.core.nth.call(null,vec__21660,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$move = function (url,var_args){
var p__21658 = null;
if (arguments.length > 1) {
var G__21661__i = 0, G__21661__a = new Array(arguments.length -  1);
while (G__21661__i < G__21661__a.length) {G__21661__a[G__21661__i] = arguments[G__21661__i + 1]; ++G__21661__i;}
  p__21658 = new cljs.core.IndexedSeq(G__21661__a,0);
} 
return cljs_http$client$move__delegate.call(this,url,p__21658);};
cljs_http$client$move.cljs$lang$maxFixedArity = 1;
cljs_http$client$move.cljs$lang$applyTo = (function (arglist__21662){
var url = cljs.core.first(arglist__21662);
var p__21658 = cljs.core.rest(arglist__21662);
return cljs_http$client$move__delegate(url,p__21658);
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
var cljs_http$client$options__delegate = function (url,p__21663){
var vec__21665 = p__21663;
var req = cljs.core.nth.call(null,vec__21665,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$options = function (url,var_args){
var p__21663 = null;
if (arguments.length > 1) {
var G__21666__i = 0, G__21666__a = new Array(arguments.length -  1);
while (G__21666__i < G__21666__a.length) {G__21666__a[G__21666__i] = arguments[G__21666__i + 1]; ++G__21666__i;}
  p__21663 = new cljs.core.IndexedSeq(G__21666__a,0);
} 
return cljs_http$client$options__delegate.call(this,url,p__21663);};
cljs_http$client$options.cljs$lang$maxFixedArity = 1;
cljs_http$client$options.cljs$lang$applyTo = (function (arglist__21667){
var url = cljs.core.first(arglist__21667);
var p__21663 = cljs.core.rest(arglist__21667);
return cljs_http$client$options__delegate(url,p__21663);
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
var cljs_http$client$patch__delegate = function (url,p__21668){
var vec__21670 = p__21668;
var req = cljs.core.nth.call(null,vec__21670,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$patch = function (url,var_args){
var p__21668 = null;
if (arguments.length > 1) {
var G__21671__i = 0, G__21671__a = new Array(arguments.length -  1);
while (G__21671__i < G__21671__a.length) {G__21671__a[G__21671__i] = arguments[G__21671__i + 1]; ++G__21671__i;}
  p__21668 = new cljs.core.IndexedSeq(G__21671__a,0);
} 
return cljs_http$client$patch__delegate.call(this,url,p__21668);};
cljs_http$client$patch.cljs$lang$maxFixedArity = 1;
cljs_http$client$patch.cljs$lang$applyTo = (function (arglist__21672){
var url = cljs.core.first(arglist__21672);
var p__21668 = cljs.core.rest(arglist__21672);
return cljs_http$client$patch__delegate(url,p__21668);
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
var cljs_http$client$post__delegate = function (url,p__21673){
var vec__21675 = p__21673;
var req = cljs.core.nth.call(null,vec__21675,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$post = function (url,var_args){
var p__21673 = null;
if (arguments.length > 1) {
var G__21676__i = 0, G__21676__a = new Array(arguments.length -  1);
while (G__21676__i < G__21676__a.length) {G__21676__a[G__21676__i] = arguments[G__21676__i + 1]; ++G__21676__i;}
  p__21673 = new cljs.core.IndexedSeq(G__21676__a,0);
} 
return cljs_http$client$post__delegate.call(this,url,p__21673);};
cljs_http$client$post.cljs$lang$maxFixedArity = 1;
cljs_http$client$post.cljs$lang$applyTo = (function (arglist__21677){
var url = cljs.core.first(arglist__21677);
var p__21673 = cljs.core.rest(arglist__21677);
return cljs_http$client$post__delegate(url,p__21673);
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
var cljs_http$client$put__delegate = function (url,p__21678){
var vec__21680 = p__21678;
var req = cljs.core.nth.call(null,vec__21680,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var cljs_http$client$put = function (url,var_args){
var p__21678 = null;
if (arguments.length > 1) {
var G__21681__i = 0, G__21681__a = new Array(arguments.length -  1);
while (G__21681__i < G__21681__a.length) {G__21681__a[G__21681__i] = arguments[G__21681__i + 1]; ++G__21681__i;}
  p__21678 = new cljs.core.IndexedSeq(G__21681__a,0);
} 
return cljs_http$client$put__delegate.call(this,url,p__21678);};
cljs_http$client$put.cljs$lang$maxFixedArity = 1;
cljs_http$client$put.cljs$lang$applyTo = (function (arglist__21682){
var url = cljs.core.first(arglist__21682);
var p__21678 = cljs.core.rest(arglist__21682);
return cljs_http$client$put__delegate(url,p__21678);
});
cljs_http$client$put.cljs$core$IFn$_invoke$arity$variadic = cljs_http$client$put__delegate;
return cljs_http$client$put;
})()
;
