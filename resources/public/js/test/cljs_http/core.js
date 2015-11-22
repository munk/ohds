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
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
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
var seq__21857 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__21862 = null;
var count__21863 = (0);
var i__21864 = (0);
while(true){
if((i__21864 < count__21863)){
var h_name = cljs.core._nth.call(null,chunk__21862,i__21864);
var seq__21865_21869 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21866_21870 = null;
var count__21867_21871 = (0);
var i__21868_21872 = (0);
while(true){
if((i__21868_21872 < count__21867_21871)){
var h_val_21873 = cljs.core._nth.call(null,chunk__21866_21870,i__21868_21872);
xhr.headers.set(h_name,h_val_21873);

var G__21874 = seq__21865_21869;
var G__21875 = chunk__21866_21870;
var G__21876 = count__21867_21871;
var G__21877 = (i__21868_21872 + (1));
seq__21865_21869 = G__21874;
chunk__21866_21870 = G__21875;
count__21867_21871 = G__21876;
i__21868_21872 = G__21877;
continue;
} else {
var temp__4425__auto___21878 = cljs.core.seq.call(null,seq__21865_21869);
if(temp__4425__auto___21878){
var seq__21865_21879__$1 = temp__4425__auto___21878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21865_21879__$1)){
var c__4863__auto___21880 = cljs.core.chunk_first.call(null,seq__21865_21879__$1);
var G__21881 = cljs.core.chunk_rest.call(null,seq__21865_21879__$1);
var G__21882 = c__4863__auto___21880;
var G__21883 = cljs.core.count.call(null,c__4863__auto___21880);
var G__21884 = (0);
seq__21865_21869 = G__21881;
chunk__21866_21870 = G__21882;
count__21867_21871 = G__21883;
i__21868_21872 = G__21884;
continue;
} else {
var h_val_21885 = cljs.core.first.call(null,seq__21865_21879__$1);
xhr.headers.set(h_name,h_val_21885);

var G__21886 = cljs.core.next.call(null,seq__21865_21879__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__21865_21869 = G__21886;
chunk__21866_21870 = G__21887;
count__21867_21871 = G__21888;
i__21868_21872 = G__21889;
continue;
}
} else {
}
}
break;
}

var G__21890 = seq__21857;
var G__21891 = chunk__21862;
var G__21892 = count__21863;
var G__21893 = (i__21864 + (1));
seq__21857 = G__21890;
chunk__21862 = G__21891;
count__21863 = G__21892;
i__21864 = G__21893;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21857);
if(temp__4425__auto__){
var seq__21857__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21857__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__21857__$1);
var G__21894 = cljs.core.chunk_rest.call(null,seq__21857__$1);
var G__21895 = c__4863__auto__;
var G__21896 = cljs.core.count.call(null,c__4863__auto__);
var G__21897 = (0);
seq__21857 = G__21894;
chunk__21862 = G__21895;
count__21863 = G__21896;
i__21864 = G__21897;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__21857__$1);
var seq__21858_21898 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__21859_21899 = null;
var count__21860_21900 = (0);
var i__21861_21901 = (0);
while(true){
if((i__21861_21901 < count__21860_21900)){
var h_val_21902 = cljs.core._nth.call(null,chunk__21859_21899,i__21861_21901);
xhr.headers.set(h_name,h_val_21902);

var G__21903 = seq__21858_21898;
var G__21904 = chunk__21859_21899;
var G__21905 = count__21860_21900;
var G__21906 = (i__21861_21901 + (1));
seq__21858_21898 = G__21903;
chunk__21859_21899 = G__21904;
count__21860_21900 = G__21905;
i__21861_21901 = G__21906;
continue;
} else {
var temp__4425__auto___21907__$1 = cljs.core.seq.call(null,seq__21858_21898);
if(temp__4425__auto___21907__$1){
var seq__21858_21908__$1 = temp__4425__auto___21907__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21858_21908__$1)){
var c__4863__auto___21909 = cljs.core.chunk_first.call(null,seq__21858_21908__$1);
var G__21910 = cljs.core.chunk_rest.call(null,seq__21858_21908__$1);
var G__21911 = c__4863__auto___21909;
var G__21912 = cljs.core.count.call(null,c__4863__auto___21909);
var G__21913 = (0);
seq__21858_21898 = G__21910;
chunk__21859_21899 = G__21911;
count__21860_21900 = G__21912;
i__21861_21901 = G__21913;
continue;
} else {
var h_val_21914 = cljs.core.first.call(null,seq__21858_21908__$1);
xhr.headers.set(h_name,h_val_21914);

var G__21915 = cljs.core.next.call(null,seq__21858_21908__$1);
var G__21916 = null;
var G__21917 = (0);
var G__21918 = (0);
seq__21858_21898 = G__21915;
chunk__21859_21899 = G__21916;
count__21860_21900 = G__21917;
i__21861_21901 = G__21918;
continue;
}
} else {
}
}
break;
}

var G__21919 = cljs.core.next.call(null,seq__21857__$1);
var G__21920 = null;
var G__21921 = (0);
var G__21922 = (0);
seq__21857 = G__21919;
chunk__21862 = G__21920;
count__21863 = G__21921;
i__21864 = G__21922;
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
return xhr.setResponseType((function (){var G__21924 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__21924)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__21924)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__21924)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__21924)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__21924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__21924)){
return goog.net.XhrIo.ResponseType.DEFAULT;
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__21925){
var map__21928 = p__21925;
var map__21928__$1 = ((cljs.core.seq_QMARK_.call(null,map__21928))?cljs.core.apply.call(null,cljs.core.hash_map,map__21928):map__21928);
var request = map__21928__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21928__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__21928__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__21928__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__21929 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__21929,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__21929,response_type);

G__21929.setTimeoutInterval(timeout);

G__21929.setWithCredentials(send_credentials);

return G__21929;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__21930){
var map__21956 = p__21930;
var map__21956__$1 = ((cljs.core.seq_QMARK_.call(null,map__21956))?cljs.core.apply.call(null,cljs.core.hash_map,map__21956):map__21956);
var request = map__21956__$1;
var request_method = cljs.core.get.call(null,map__21956__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__21956__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__21956__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__21956__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__21956__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4076__auto__ = request_method;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6709__auto___21981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_21967){
var state_val_21968 = (state_21967[(1)]);
if((state_val_21968 === (1))){
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21967__$1,(2),cancel);
} else {
if((state_val_21968 === (2))){
var inst_21958 = (state_21967[(2)]);
var inst_21959 = xhr__$1.isComplete();
var inst_21960 = cljs.core.not.call(null,inst_21959);
var state_21967__$1 = (function (){var statearr_21969 = state_21967;
(statearr_21969[(7)] = inst_21958);

return statearr_21969;
})();
if(inst_21960){
var statearr_21970_21982 = state_21967__$1;
(statearr_21970_21982[(1)] = (3));

} else {
var statearr_21971_21983 = state_21967__$1;
(statearr_21971_21983[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (3))){
var inst_21962 = xhr__$1.abort();
var state_21967__$1 = state_21967;
var statearr_21972_21984 = state_21967__$1;
(statearr_21972_21984[(2)] = inst_21962);

(statearr_21972_21984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (4))){
var state_21967__$1 = state_21967;
var statearr_21973_21985 = state_21967__$1;
(statearr_21973_21985[(2)] = null);

(statearr_21973_21985[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21968 === (5))){
var inst_21965 = (state_21967[(2)]);
var state_21967__$1 = state_21967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21967__$1,inst_21965);
} else {
return null;
}
}
}
}
}
});})(c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__6653__auto__,c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__6654__auto__ = null;
var cljs_http$core$xhr_$_state_machine__6654__auto____0 = (function (){
var statearr_21977 = [null,null,null,null,null,null,null,null];
(statearr_21977[(0)] = cljs_http$core$xhr_$_state_machine__6654__auto__);

(statearr_21977[(1)] = (1));

return statearr_21977;
});
var cljs_http$core$xhr_$_state_machine__6654__auto____1 = (function (state_21967){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_21967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e21978){if((e21978 instanceof Object)){
var ex__6657__auto__ = e21978;
var statearr_21979_21986 = state_21967;
(statearr_21979_21986[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21987 = state_21967;
state_21967 = G__21987;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__6654__auto__ = function(state_21967){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__6654__auto____1.call(this,state_21967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__6654__auto____0;
cljs_http$core$xhr_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__6654__auto____1;
return cljs_http$core$xhr_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__6711__auto__ = (function (){var statearr_21980 = f__6710__auto__.call(null);
(statearr_21980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___21981);

return statearr_21980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___21981,channel,request_url,method,headers__$1,xhr__$1,map__21956,map__21956__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__21988){
var map__22004 = p__21988;
var map__22004__$1 = ((cljs.core.seq_QMARK_.call(null,map__22004))?cljs.core.apply.call(null,cljs.core.hash_map,map__22004):map__22004);
var request = map__22004__$1;
var timeout = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__22004__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_22019 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_22019], null));

if(cljs.core.truth_(cancel)){
var c__6709__auto___22020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel){
return (function (state_22009){
var state_val_22010 = (state_22009[(1)]);
if((state_val_22010 === (1))){
var state_22009__$1 = state_22009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22009__$1,(2),cancel);
} else {
if((state_val_22010 === (2))){
var inst_22006 = (state_22009[(2)]);
var inst_22007 = jsonp__$1.cancel(req_22019);
var state_22009__$1 = (function (){var statearr_22011 = state_22009;
(statearr_22011[(7)] = inst_22006);

return statearr_22011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22009__$1,inst_22007);
} else {
return null;
}
}
});})(c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__6653__auto__,c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__6654__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__6654__auto____0 = (function (){
var statearr_22015 = [null,null,null,null,null,null,null,null];
(statearr_22015[(0)] = cljs_http$core$jsonp_$_state_machine__6654__auto__);

(statearr_22015[(1)] = (1));

return statearr_22015;
});
var cljs_http$core$jsonp_$_state_machine__6654__auto____1 = (function (state_22009){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22016){if((e22016 instanceof Object)){
var ex__6657__auto__ = e22016;
var statearr_22017_22021 = state_22009;
(statearr_22017_22021[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22022 = state_22009;
state_22009 = G__22022;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__6654__auto__ = function(state_22009){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__6654__auto____1.call(this,state_22009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__6654__auto____0;
cljs_http$core$jsonp_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__6654__auto____1;
return cljs_http$core$jsonp_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel))
})();
var state__6711__auto__ = (function (){var statearr_22018 = f__6710__auto__.call(null);
(statearr_22018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22020);

return statearr_22018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___22020,req_22019,channel,jsonp__$1,map__22004,map__22004__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__22023){
var map__22025 = p__22023;
var map__22025__$1 = ((cljs.core.seq_QMARK_.call(null,map__22025))?cljs.core.apply.call(null,cljs.core.hash_map,map__22025):map__22025);
var request__$1 = map__22025__$1;
var request_method = cljs.core.get.call(null,map__22025__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});
