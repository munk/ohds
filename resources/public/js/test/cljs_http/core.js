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
var seq__16671 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)));
var chunk__16676 = null;
var count__16677 = (0);
var i__16678 = (0);
while(true){
if((i__16678 < count__16677)){
var h_name = cljs.core._nth.call(null,chunk__16676,i__16678);
var seq__16679_16683 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__16680_16684 = null;
var count__16681_16685 = (0);
var i__16682_16686 = (0);
while(true){
if((i__16682_16686 < count__16681_16685)){
var h_val_16687 = cljs.core._nth.call(null,chunk__16680_16684,i__16682_16686);
xhr.headers.set(h_name,h_val_16687);

var G__16688 = seq__16679_16683;
var G__16689 = chunk__16680_16684;
var G__16690 = count__16681_16685;
var G__16691 = (i__16682_16686 + (1));
seq__16679_16683 = G__16688;
chunk__16680_16684 = G__16689;
count__16681_16685 = G__16690;
i__16682_16686 = G__16691;
continue;
} else {
var temp__4425__auto___16692 = cljs.core.seq.call(null,seq__16679_16683);
if(temp__4425__auto___16692){
var seq__16679_16693__$1 = temp__4425__auto___16692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16679_16693__$1)){
var c__4863__auto___16694 = cljs.core.chunk_first.call(null,seq__16679_16693__$1);
var G__16695 = cljs.core.chunk_rest.call(null,seq__16679_16693__$1);
var G__16696 = c__4863__auto___16694;
var G__16697 = cljs.core.count.call(null,c__4863__auto___16694);
var G__16698 = (0);
seq__16679_16683 = G__16695;
chunk__16680_16684 = G__16696;
count__16681_16685 = G__16697;
i__16682_16686 = G__16698;
continue;
} else {
var h_val_16699 = cljs.core.first.call(null,seq__16679_16693__$1);
xhr.headers.set(h_name,h_val_16699);

var G__16700 = cljs.core.next.call(null,seq__16679_16693__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__16679_16683 = G__16700;
chunk__16680_16684 = G__16701;
count__16681_16685 = G__16702;
i__16682_16686 = G__16703;
continue;
}
} else {
}
}
break;
}

var G__16704 = seq__16671;
var G__16705 = chunk__16676;
var G__16706 = count__16677;
var G__16707 = (i__16678 + (1));
seq__16671 = G__16704;
chunk__16676 = G__16705;
count__16677 = G__16706;
i__16678 = G__16707;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16671);
if(temp__4425__auto__){
var seq__16671__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__16671__$1);
var G__16708 = cljs.core.chunk_rest.call(null,seq__16671__$1);
var G__16709 = c__4863__auto__;
var G__16710 = cljs.core.count.call(null,c__4863__auto__);
var G__16711 = (0);
seq__16671 = G__16708;
chunk__16676 = G__16709;
count__16677 = G__16710;
i__16678 = G__16711;
continue;
} else {
var h_name = cljs.core.first.call(null,seq__16671__$1);
var seq__16672_16712 = cljs.core.seq.call(null,cljs.core.vals.call(null,headers));
var chunk__16673_16713 = null;
var count__16674_16714 = (0);
var i__16675_16715 = (0);
while(true){
if((i__16675_16715 < count__16674_16714)){
var h_val_16716 = cljs.core._nth.call(null,chunk__16673_16713,i__16675_16715);
xhr.headers.set(h_name,h_val_16716);

var G__16717 = seq__16672_16712;
var G__16718 = chunk__16673_16713;
var G__16719 = count__16674_16714;
var G__16720 = (i__16675_16715 + (1));
seq__16672_16712 = G__16717;
chunk__16673_16713 = G__16718;
count__16674_16714 = G__16719;
i__16675_16715 = G__16720;
continue;
} else {
var temp__4425__auto___16721__$1 = cljs.core.seq.call(null,seq__16672_16712);
if(temp__4425__auto___16721__$1){
var seq__16672_16722__$1 = temp__4425__auto___16721__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16672_16722__$1)){
var c__4863__auto___16723 = cljs.core.chunk_first.call(null,seq__16672_16722__$1);
var G__16724 = cljs.core.chunk_rest.call(null,seq__16672_16722__$1);
var G__16725 = c__4863__auto___16723;
var G__16726 = cljs.core.count.call(null,c__4863__auto___16723);
var G__16727 = (0);
seq__16672_16712 = G__16724;
chunk__16673_16713 = G__16725;
count__16674_16714 = G__16726;
i__16675_16715 = G__16727;
continue;
} else {
var h_val_16728 = cljs.core.first.call(null,seq__16672_16722__$1);
xhr.headers.set(h_name,h_val_16728);

var G__16729 = cljs.core.next.call(null,seq__16672_16722__$1);
var G__16730 = null;
var G__16731 = (0);
var G__16732 = (0);
seq__16672_16712 = G__16729;
chunk__16673_16713 = G__16730;
count__16674_16714 = G__16731;
i__16675_16715 = G__16732;
continue;
}
} else {
}
}
break;
}

var G__16733 = cljs.core.next.call(null,seq__16671__$1);
var G__16734 = null;
var G__16735 = (0);
var G__16736 = (0);
seq__16671 = G__16733;
chunk__16676 = G__16734;
count__16677 = G__16735;
i__16678 = G__16736;
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
return xhr.setResponseType((function (){var G__16738 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__16738)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__16738)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__16738)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__16738)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__16738)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__16738)){
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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16739){
var map__16742 = p__16739;
var map__16742__$1 = ((cljs.core.seq_QMARK_.call(null,map__16742))?cljs.core.apply.call(null,cljs.core.hash_map,map__16742):map__16742);
var request = map__16742__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16742__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__16742__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__16742__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16743 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__16743,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__16743,response_type);

G__16743.setTimeoutInterval(timeout);

G__16743.setWithCredentials(send_credentials);

return G__16743;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16744){
var map__16770 = p__16744;
var map__16770__$1 = ((cljs.core.seq_QMARK_.call(null,map__16770))?cljs.core.apply.call(null,cljs.core.hash_map,map__16770):map__16770);
var request = map__16770__$1;
var request_method = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__16770__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
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

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
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
});})(channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6711__auto___16795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_16781){
var state_val_16782 = (state_16781[(1)]);
if((state_val_16782 === (1))){
var state_16781__$1 = state_16781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16781__$1,(2),cancel);
} else {
if((state_val_16782 === (2))){
var inst_16772 = (state_16781[(2)]);
var inst_16773 = xhr__$1.isComplete();
var inst_16774 = cljs.core.not.call(null,inst_16773);
var state_16781__$1 = (function (){var statearr_16783 = state_16781;
(statearr_16783[(7)] = inst_16772);

return statearr_16783;
})();
if(inst_16774){
var statearr_16784_16796 = state_16781__$1;
(statearr_16784_16796[(1)] = (3));

} else {
var statearr_16785_16797 = state_16781__$1;
(statearr_16785_16797[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16782 === (3))){
var inst_16776 = xhr__$1.abort();
var state_16781__$1 = state_16781;
var statearr_16786_16798 = state_16781__$1;
(statearr_16786_16798[(2)] = inst_16776);

(statearr_16786_16798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16782 === (4))){
var state_16781__$1 = state_16781;
var statearr_16787_16799 = state_16781__$1;
(statearr_16787_16799[(2)] = null);

(statearr_16787_16799[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16782 === (5))){
var inst_16779 = (state_16781[(2)]);
var state_16781__$1 = state_16781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16781__$1,inst_16779);
} else {
return null;
}
}
}
}
}
});})(c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__6655__auto__,c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__6656__auto__ = null;
var cljs_http$core$xhr_$_state_machine__6656__auto____0 = (function (){
var statearr_16791 = [null,null,null,null,null,null,null,null];
(statearr_16791[(0)] = cljs_http$core$xhr_$_state_machine__6656__auto__);

(statearr_16791[(1)] = (1));

return statearr_16791;
});
var cljs_http$core$xhr_$_state_machine__6656__auto____1 = (function (state_16781){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_16781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e16792){if((e16792 instanceof Object)){
var ex__6659__auto__ = e16792;
var statearr_16793_16800 = state_16781;
(statearr_16793_16800[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16801 = state_16781;
state_16781 = G__16801;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__6656__auto__ = function(state_16781){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__6656__auto____1.call(this,state_16781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__6656__auto____0;
cljs_http$core$xhr_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__6656__auto____1;
return cljs_http$core$xhr_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__6713__auto__ = (function (){var statearr_16794 = f__6712__auto__.call(null);
(statearr_16794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___16795);

return statearr_16794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___16795,channel,request_url,method,headers__$1,xhr__$1,map__16770,map__16770__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__16802){
var map__16818 = p__16802;
var map__16818__$1 = ((cljs.core.seq_QMARK_.call(null,map__16818))?cljs.core.apply.call(null,cljs.core.hash_map,map__16818):map__16818);
var request = map__16818__$1;
var timeout = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__16818__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_16833 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_16833], null));

if(cljs.core.truth_(cancel)){
var c__6711__auto___16834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel){
return (function (state_16823){
var state_val_16824 = (state_16823[(1)]);
if((state_val_16824 === (1))){
var state_16823__$1 = state_16823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16823__$1,(2),cancel);
} else {
if((state_val_16824 === (2))){
var inst_16820 = (state_16823[(2)]);
var inst_16821 = jsonp__$1.cancel(req_16833);
var state_16823__$1 = (function (){var statearr_16825 = state_16823;
(statearr_16825[(7)] = inst_16820);

return statearr_16825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16823__$1,inst_16821);
} else {
return null;
}
}
});})(c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__6655__auto__,c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__6656__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__6656__auto____0 = (function (){
var statearr_16829 = [null,null,null,null,null,null,null,null];
(statearr_16829[(0)] = cljs_http$core$jsonp_$_state_machine__6656__auto__);

(statearr_16829[(1)] = (1));

return statearr_16829;
});
var cljs_http$core$jsonp_$_state_machine__6656__auto____1 = (function (state_16823){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_16823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e16830){if((e16830 instanceof Object)){
var ex__6659__auto__ = e16830;
var statearr_16831_16835 = state_16823;
(statearr_16831_16835[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16836 = state_16823;
state_16823 = G__16836;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__6656__auto__ = function(state_16823){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__6656__auto____1.call(this,state_16823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__6656__auto____0;
cljs_http$core$jsonp_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__6656__auto____1;
return cljs_http$core$jsonp_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel))
})();
var state__6713__auto__ = (function (){var statearr_16832 = f__6712__auto__.call(null);
(statearr_16832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___16834);

return statearr_16832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___16834,req_16833,channel,jsonp__$1,map__16818,map__16818__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 * map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__16837){
var map__16839 = p__16837;
var map__16839__$1 = ((cljs.core.seq_QMARK_.call(null,map__16839))?cljs.core.apply.call(null,cljs.core.hash_map,map__16839):map__16839);
var request__$1 = map__16839__$1;
var request_method = cljs.core.get.call(null,map__16839__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});
