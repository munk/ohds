// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 * with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var req = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var seq__33077 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__33082 = null;
var count__33083 = (0);
var i__33084 = (0);
while(true){
if((i__33084 < count__33083)){
var h_name = cljs.core._nth.call(null,chunk__33082,i__33084);
var seq__33085_33089 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__33086_33090 = null;
var count__33087_33091 = (0);
var i__33088_33092 = (0);
while(true){
if((i__33088_33092 < count__33087_33091)){
var h_val_33093 = cljs.core._nth.call(null,chunk__33086_33090,i__33088_33092);
xhr.headers.set(h_name,h_val_33093);

var G__33094 = seq__33085_33089;
var G__33095 = chunk__33086_33090;
var G__33096 = count__33087_33091;
var G__33097 = (i__33088_33092 + (1));
seq__33085_33089 = G__33094;
chunk__33086_33090 = G__33095;
count__33087_33091 = G__33096;
i__33088_33092 = G__33097;
continue;
} else {
var temp__4126__auto___33098 = cljs.core.seq.call(null,seq__33085_33089);
if(temp__4126__auto___33098){
var seq__33085_33099__$1 = temp__4126__auto___33098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33085_33099__$1)){
var c__26047__auto___33100 = cljs.core.chunk_first.call(null,seq__33085_33099__$1);
var G__33101 = cljs.core.chunk_rest.call(null,seq__33085_33099__$1);
var G__33102 = c__26047__auto___33100;
var G__33103 = cljs.core.count.call(null,c__26047__auto___33100);
var G__33104 = (0);
seq__33085_33089 = G__33101;
chunk__33086_33090 = G__33102;
count__33087_33091 = G__33103;
i__33088_33092 = G__33104;
continue;
} else {
var h_val_33105 = cljs.core.first.call(null,seq__33085_33099__$1);
xhr.headers.set(h_name,h_val_33105);

var G__33106 = cljs.core.next.call(null,seq__33085_33099__$1);
var G__33107 = null;
var G__33108 = (0);
var G__33109 = (0);
seq__33085_33089 = G__33106;
chunk__33086_33090 = G__33107;
count__33087_33091 = G__33108;
i__33088_33092 = G__33109;
continue;
}
} else {
}
}
break;
}

var G__33110 = seq__33077;
var G__33111 = chunk__33082;
var G__33112 = count__33083;
var G__33113 = (i__33084 + (1));
seq__33077 = G__33110;
chunk__33082 = G__33111;
count__33083 = G__33112;
i__33084 = G__33113;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33077);
if(temp__4126__auto__){
var seq__33077__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33077__$1)){
var c__26047__auto__ = cljs.core.chunk_first.call(null,seq__33077__$1);
var G__33114 = cljs.core.chunk_rest.call(null,seq__33077__$1);
var G__33115 = c__26047__auto__;
var G__33116 = cljs.core.count.call(null,c__26047__auto__);
var G__33117 = (0);
seq__33077 = G__33114;
chunk__33082 = G__33115;
count__33083 = G__33116;
i__33084 = G__33117;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__33077__$1);
var seq__33078_33118 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__33079_33119 = null;
var count__33080_33120 = (0);
var i__33081_33121 = (0);
while(true){
if((i__33081_33121 < count__33080_33120)){
var h_val_33122 = cljs.core._nth.call(null,chunk__33079_33119,i__33081_33121);
xhr.headers.set(h_name,h_val_33122);

var G__33123 = seq__33078_33118;
var G__33124 = chunk__33079_33119;
var G__33125 = count__33080_33120;
var G__33126 = (i__33081_33121 + (1));
seq__33078_33118 = G__33123;
chunk__33079_33119 = G__33124;
count__33080_33120 = G__33125;
i__33081_33121 = G__33126;
continue;
} else {
var temp__4126__auto___33127__$1 = cljs.core.seq.call(null,seq__33078_33118);
if(temp__4126__auto___33127__$1){
var seq__33078_33128__$1 = temp__4126__auto___33127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33078_33128__$1)){
var c__26047__auto___33129 = cljs.core.chunk_first.call(null,seq__33078_33128__$1);
var G__33130 = cljs.core.chunk_rest.call(null,seq__33078_33128__$1);
var G__33131 = c__26047__auto___33129;
var G__33132 = cljs.core.count.call(null,c__26047__auto___33129);
var G__33133 = (0);
seq__33078_33118 = G__33130;
chunk__33079_33119 = G__33131;
count__33080_33120 = G__33132;
i__33081_33121 = G__33133;
continue;
} else {
var h_val_33134 = cljs.core.first.call(null,seq__33078_33128__$1);
xhr.headers.set(h_name,h_val_33134);

var G__33135 = cljs.core.next.call(null,seq__33078_33128__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__33078_33118 = G__33135;
chunk__33079_33119 = G__33136;
count__33080_33120 = G__33137;
i__33081_33121 = G__33138;
continue;
}
} else {
}
}
break;
}

var G__33139 = cljs.core.next.call(null,seq__33077__$1);
var G__33140 = null;
var G__33141 = (0);
var G__33142 = (0);
seq__33077 = G__33139;
chunk__33082 = G__33140;
count__33083 = G__33141;
i__33084 = G__33142;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__33144 = response_type;
if(cljs.core._EQ_.call(null,null,G__33144)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__33144)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__33144)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__33144)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__33144)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__33144)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__33145){
var map__33148 = p__33145;
var map__33148__$1 = ((cljs.core.seq_QMARK_.call(null,map__33148))?cljs.core.apply.call(null,cljs.core.hash_map,map__33148):map__33148);
var request = map__33148__$1;
var response_type = cljs.core.get.call(null,map__33148__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var default_headers = cljs.core.get.call(null,map__33148__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33148__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = (function (){var or__25260__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__33149 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__33149,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__33149,response_type);

G__33149.setTimeoutInterval(timeout);

G__33149.setWithCredentials(send_credentials);

return G__33149;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__33150){
var map__33176 = p__33150;
var map__33176__$1 = ((cljs.core.seq_QMARK_.call(null,map__33176))?cljs.core.apply.call(null,cljs.core.hash_map,map__33176):map__33176);
var request = map__33176__$1;
var cancel = cljs.core.get.call(null,map__33176__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__33176__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__33176__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__33176__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__33176__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__25260__auto__ = request_method;
if(cljs.core.truth_(or__25260__auto__)){
return or__25260__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__27365__auto___33201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__27366__auto__ = (function (){var switch__27309__auto__ = ((function (c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_33187){
var state_val_33188 = (state_33187[(1)]);
if((state_val_33188 === (5))){
var inst_33185 = (state_33187[(2)]);
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33187__$1,inst_33185);
} else {
if((state_val_33188 === (4))){
var state_33187__$1 = state_33187;
var statearr_33189_33202 = state_33187__$1;
(statearr_33189_33202[(2)] = null);

(statearr_33189_33202[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (3))){
var inst_33182 = xhr__$1.abort();
var state_33187__$1 = state_33187;
var statearr_33190_33203 = state_33187__$1;
(statearr_33190_33203[(2)] = inst_33182);

(statearr_33190_33203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (2))){
var inst_33178 = (state_33187[(2)]);
var inst_33179 = xhr__$1.isComplete();
var inst_33180 = cljs.core.not.call(null,inst_33179);
var state_33187__$1 = (function (){var statearr_33191 = state_33187;
(statearr_33191[(7)] = inst_33178);

return statearr_33191;
})();
if(inst_33180){
var statearr_33192_33204 = state_33187__$1;
(statearr_33192_33204[(1)] = (3));

} else {
var statearr_33193_33205 = state_33187__$1;
(statearr_33193_33205[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33188 === (1))){
var state_33187__$1 = state_33187;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33187__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__27309__auto__,c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var cljs_http$core$xhr_$_state_machine__27310__auto__ = null;
var cljs_http$core$xhr_$_state_machine__27310__auto____0 = (function (){
var statearr_33197 = [null,null,null,null,null,null,null,null];
(statearr_33197[(0)] = cljs_http$core$xhr_$_state_machine__27310__auto__);

(statearr_33197[(1)] = (1));

return statearr_33197;
});
var cljs_http$core$xhr_$_state_machine__27310__auto____1 = (function (state_33187){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_33187);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e33198){if((e33198 instanceof Object)){
var ex__27313__auto__ = e33198;
var statearr_33199_33206 = state_33187;
(statearr_33199_33206[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33187);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33207 = state_33187;
state_33187 = G__33207;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__27310__auto__ = function(state_33187){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__27310__auto____1.call(this,state_33187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__27310__auto____0;
cljs_http$core$xhr_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__27310__auto____1;
return cljs_http$core$xhr_$_state_machine__27310__auto__;
})()
;})(switch__27309__auto__,c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__27367__auto__ = (function (){var statearr_33200 = f__27366__auto__.call(null);
(statearr_33200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27365__auto___33201);

return statearr_33200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27367__auto__);
});})(c__27365__auto___33201,channel,request_url,method,headers__$1,xhr__$1,map__33176,map__33176__$1,request,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__33208){
var map__33224 = p__33208;
var map__33224__$1 = ((cljs.core.seq_QMARK_.call(null,map__33224))?cljs.core.apply.call(null,cljs.core.hash_map,map__33224):map__33224);
var request = map__33224__$1;
var cancel = cljs.core.get.call(null,map__33224__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var callback_name = cljs.core.get.call(null,map__33224__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var timeout = cljs.core.get.call(null,map__33224__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_33239 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout))
,((function (channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_33239], null));

if(cljs.core.truth_(cancel)){
var c__27365__auto___33240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout){
return (function (){
var f__27366__auto__ = (function (){var switch__27309__auto__ = ((function (c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout){
return (function (state_33229){
var state_val_33230 = (state_33229[(1)]);
if((state_val_33230 === (2))){
var inst_33226 = (state_33229[(2)]);
var inst_33227 = jsonp__$1.cancel(req_33239);
var state_33229__$1 = (function (){var statearr_33231 = state_33229;
(statearr_33231[(7)] = inst_33226);

return statearr_33231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33229__$1,inst_33227);
} else {
if((state_val_33230 === (1))){
var state_33229__$1 = state_33229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33229__$1,(2),cancel);
} else {
return null;
}
}
});})(c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout))
;
return ((function (switch__27309__auto__,c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout){
return (function() {
var cljs_http$core$jsonp_$_state_machine__27310__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__27310__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs_http$core$jsonp_$_state_machine__27310__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs_http$core$jsonp_$_state_machine__27310__auto____1 = (function (state_33229){
while(true){
var ret_value__27311__auto__ = (function (){try{while(true){
var result__27312__auto__ = switch__27309__auto__.call(null,state_33229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27312__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27312__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__27313__auto__ = e33236;
var statearr_33237_33241 = state_33229;
(statearr_33237_33241[(5)] = ex__27313__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33242 = state_33229;
state_33229 = G__33242;
continue;
} else {
return ret_value__27311__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__27310__auto__ = function(state_33229){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__27310__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__27310__auto____1.call(this,state_33229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__27310__auto____0;
cljs_http$core$jsonp_$_state_machine__27310__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__27310__auto____1;
return cljs_http$core$jsonp_$_state_machine__27310__auto__;
})()
;})(switch__27309__auto__,c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout))
})();
var state__27367__auto__ = (function (){var statearr_33238 = f__27366__auto__.call(null);
(statearr_33238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27365__auto___33240);

return statearr_33238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27367__auto__);
});})(c__27365__auto___33240,req_33239,channel,jsonp__$1,map__33224,map__33224__$1,request,cancel,callback_name,timeout))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__33243){
var map__33245 = p__33243;
var map__33245__$1 = ((cljs.core.seq_QMARK_.call(null,map__33245))?cljs.core.apply.call(null,cljs.core.hash_map,map__33245):map__33245);
var request__$1 = map__33245__$1;
var request_method = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1446258008737