// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj36350 = {};
return obj36350;
})();

cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__25094__auto__ = port;
if(and__25094__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__25750__auto__ = (((port == null))?null:port);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj36352 = {};
return obj36352;
})();

cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__25094__auto__ = port;
if(and__25094__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__25750__auto__ = (((port == null))?null:port);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj36354 = {};
return obj36354;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__25094__auto__ = chan;
if(and__25094__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__25750__auto__ = (((chan == null))?null:chan);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__25094__auto__ = chan;
if(and__25094__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__25750__auto__ = (((chan == null))?null:chan);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj36356 = {};
return obj36356;
})();

cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__25094__auto__ = h;
if(and__25094__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__25750__auto__ = (((h == null))?null:h);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
})().call(null,h);
}
});

cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__25094__auto__ = h;
if(and__25094__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__25094__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__25750__auto__ = (((h == null))?null:h);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj36358 = {};
return obj36358;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__25094__auto__ = b;
if(and__25094__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__25750__auto__ = (((b == null))?null:b);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__25094__auto__ = b;
if(and__25094__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__25750__auto__ = (((b == null))?null:b);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__25094__auto__ = b;
if(and__25094__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__25750__auto__ = (((b == null))?null:b);
return (function (){var or__25106__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function() {
var cljs$core$async$impl$protocols$add_BANG_ = null;
var cljs$core$async$impl$protocols$add_BANG___1 = (function (b){
return b;
});
var cljs$core$async$impl$protocols$add_BANG___2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});
cljs$core$async$impl$protocols$add_BANG_ = function(b,itm){
switch(arguments.length){
case 1:
return cljs$core$async$impl$protocols$add_BANG___1.call(this,b);
case 2:
return cljs$core$async$impl$protocols$add_BANG___2.call(this,b,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$impl$protocols$add_BANG___1;
cljs$core$async$impl$protocols$add_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$impl$protocols$add_BANG___2;
return cljs$core$async$impl$protocols$add_BANG_;
})()
;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj36360 = {};
return obj36360;
})();


//# sourceMappingURL=protocols.js.map?rel=1446160952419