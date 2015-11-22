// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t33190 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33190 = (function (f,fn_handler,meta33191){
this.f = f;
this.fn_handler = fn_handler;
this.meta33191 = meta33191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33190.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t33190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t33190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33192){
var self__ = this;
var _33192__$1 = this;
return self__.meta33191;
});

cljs.core.async.t33190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33192,meta33191__$1){
var self__ = this;
var _33192__$1 = this;
return (new cljs.core.async.t33190(self__.f,self__.fn_handler,meta33191__$1));
});

cljs.core.async.t33190.cljs$lang$type = true;

cljs.core.async.t33190.cljs$lang$ctorStr = "cljs.core.async/t33190";

cljs.core.async.t33190.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t33190");
});

cljs.core.async.__GT_t33190 = (function cljs$core$async$fn_handler_$___GT_t33190(f__$1,fn_handler__$1,meta33191){
return (new cljs.core.async.t33190(f__$1,fn_handler__$1,meta33191));
});

}

return (new cljs.core.async.t33190(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__33194 = buff;
if(G__33194){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__33194.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__33194.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33194);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33194);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33195 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33195);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33195,ret){
return (function (){
return fn1.call(null,val_33195);
});})(val_33195,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25993__auto___33196 = n;
var x_33197 = (0);
while(true){
if((x_33197 < n__25993__auto___33196)){
(a[x_33197] = (0));

var G__33198 = (x_33197 + (1));
x_33197 = G__33198;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33199 = (i + (1));
i = G__33199;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t33203 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33203 = (function (flag,alt_flag,meta33204){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33204 = meta33204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t33203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t33203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33205){
var self__ = this;
var _33205__$1 = this;
return self__.meta33204;
});})(flag))
;

cljs.core.async.t33203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33205,meta33204__$1){
var self__ = this;
var _33205__$1 = this;
return (new cljs.core.async.t33203(self__.flag,self__.alt_flag,meta33204__$1));
});})(flag))
;

cljs.core.async.t33203.cljs$lang$type = true;

cljs.core.async.t33203.cljs$lang$ctorStr = "cljs.core.async/t33203";

cljs.core.async.t33203.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t33203");
});})(flag))
;

cljs.core.async.__GT_t33203 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t33203(flag__$1,alt_flag__$1,meta33204){
return (new cljs.core.async.t33203(flag__$1,alt_flag__$1,meta33204));
});})(flag))
;

}

return (new cljs.core.async.t33203(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t33209 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33209 = (function (cb,flag,alt_handler,meta33210){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33210 = meta33210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33209.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33209.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t33209.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t33209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33211){
var self__ = this;
var _33211__$1 = this;
return self__.meta33210;
});

cljs.core.async.t33209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33211,meta33210__$1){
var self__ = this;
var _33211__$1 = this;
return (new cljs.core.async.t33209(self__.cb,self__.flag,self__.alt_handler,meta33210__$1));
});

cljs.core.async.t33209.cljs$lang$type = true;

cljs.core.async.t33209.cljs$lang$ctorStr = "cljs.core.async/t33209";

cljs.core.async.t33209.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t33209");
});

cljs.core.async.__GT_t33209 = (function cljs$core$async$alt_handler_$___GT_t33209(cb__$1,flag__$1,alt_handler__$1,meta33210){
return (new cljs.core.async.t33209(cb__$1,flag__$1,alt_handler__$1,meta33210));
});

}

return (new cljs.core.async.t33209(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33212_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33212_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33213_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33213_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25106__auto__ = wport;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33214 = (i + (1));
i = G__33214;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25106__auto__ = ret;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__25094__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25094__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25094__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__33215){
var map__33217 = p__33215;
var map__33217__$1 = ((cljs.core.seq_QMARK_.call(null,map__33217))?cljs.core.apply.call(null,cljs.core.hash_map,map__33217):map__33217);
var opts = map__33217__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__33215 = null;
if (arguments.length > 1) {
var G__33218__i = 0, G__33218__a = new Array(arguments.length -  1);
while (G__33218__i < G__33218__a.length) {G__33218__a[G__33218__i] = arguments[G__33218__i + 1]; ++G__33218__i;}
  p__33215 = new cljs.core.IndexedSeq(G__33218__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__33215);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__33219){
var ports = cljs.core.first(arglist__33219);
var p__33215 = cljs.core.rest(arglist__33219);
return cljs$core$async$alts_BANG___delegate(ports,p__33215);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__28122__auto___33314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___33314){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___33314){
return (function (state_33290){
var state_val_33291 = (state_33290[(1)]);
if((state_val_33291 === (7))){
var inst_33286 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33292_33315 = state_33290__$1;
(statearr_33292_33315[(2)] = inst_33286);

(statearr_33292_33315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (1))){
var state_33290__$1 = state_33290;
var statearr_33293_33316 = state_33290__$1;
(statearr_33293_33316[(2)] = null);

(statearr_33293_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (4))){
var inst_33269 = (state_33290[(7)]);
var inst_33269__$1 = (state_33290[(2)]);
var inst_33270 = (inst_33269__$1 == null);
var state_33290__$1 = (function (){var statearr_33294 = state_33290;
(statearr_33294[(7)] = inst_33269__$1);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33270)){
var statearr_33295_33317 = state_33290__$1;
(statearr_33295_33317[(1)] = (5));

} else {
var statearr_33296_33318 = state_33290__$1;
(statearr_33296_33318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (13))){
var state_33290__$1 = state_33290;
var statearr_33297_33319 = state_33290__$1;
(statearr_33297_33319[(2)] = null);

(statearr_33297_33319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (6))){
var inst_33269 = (state_33290[(7)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33290__$1,(11),to,inst_33269);
} else {
if((state_val_33291 === (3))){
var inst_33288 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33290__$1,inst_33288);
} else {
if((state_val_33291 === (12))){
var state_33290__$1 = state_33290;
var statearr_33298_33320 = state_33290__$1;
(statearr_33298_33320[(2)] = null);

(statearr_33298_33320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (2))){
var state_33290__$1 = state_33290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33290__$1,(4),from);
} else {
if((state_val_33291 === (11))){
var inst_33279 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
if(cljs.core.truth_(inst_33279)){
var statearr_33299_33321 = state_33290__$1;
(statearr_33299_33321[(1)] = (12));

} else {
var statearr_33300_33322 = state_33290__$1;
(statearr_33300_33322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (9))){
var state_33290__$1 = state_33290;
var statearr_33301_33323 = state_33290__$1;
(statearr_33301_33323[(2)] = null);

(statearr_33301_33323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (5))){
var state_33290__$1 = state_33290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33302_33324 = state_33290__$1;
(statearr_33302_33324[(1)] = (8));

} else {
var statearr_33303_33325 = state_33290__$1;
(statearr_33303_33325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (14))){
var inst_33284 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33304_33326 = state_33290__$1;
(statearr_33304_33326[(2)] = inst_33284);

(statearr_33304_33326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (10))){
var inst_33276 = (state_33290[(2)]);
var state_33290__$1 = state_33290;
var statearr_33305_33327 = state_33290__$1;
(statearr_33305_33327[(2)] = inst_33276);

(statearr_33305_33327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33291 === (8))){
var inst_33273 = cljs.core.async.close_BANG_.call(null,to);
var state_33290__$1 = state_33290;
var statearr_33306_33328 = state_33290__$1;
(statearr_33306_33328[(2)] = inst_33273);

(statearr_33306_33328[(1)] = (10));


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
});})(c__28122__auto___33314))
;
return ((function (switch__28066__auto__,c__28122__auto___33314){
return (function() {
var cljs$core$async$pipe_$_state_machine__28067__auto__ = null;
var cljs$core$async$pipe_$_state_machine__28067__auto____0 = (function (){
var statearr_33310 = [null,null,null,null,null,null,null,null];
(statearr_33310[(0)] = cljs$core$async$pipe_$_state_machine__28067__auto__);

(statearr_33310[(1)] = (1));

return statearr_33310;
});
var cljs$core$async$pipe_$_state_machine__28067__auto____1 = (function (state_33290){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33311){if((e33311 instanceof Object)){
var ex__28070__auto__ = e33311;
var statearr_33312_33329 = state_33290;
(statearr_33312_33329[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33330 = state_33290;
state_33290 = G__33330;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__28067__auto__ = function(state_33290){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__28067__auto____1.call(this,state_33290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__28067__auto____0;
cljs$core$async$pipe_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__28067__auto____1;
return cljs$core$async$pipe_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___33314))
})();
var state__28124__auto__ = (function (){var statearr_33313 = f__28123__auto__.call(null);
(statearr_33313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33314);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___33314))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33514){
var vec__33515 = p__33514;
var v = cljs.core.nth.call(null,vec__33515,(0),null);
var p = cljs.core.nth.call(null,vec__33515,(1),null);
var job = vec__33515;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28122__auto___33697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results){
return (function (state_33520){
var state_val_33521 = (state_33520[(1)]);
if((state_val_33521 === (2))){
var inst_33517 = (state_33520[(2)]);
var inst_33518 = cljs.core.async.close_BANG_.call(null,res);
var state_33520__$1 = (function (){var statearr_33522 = state_33520;
(statearr_33522[(7)] = inst_33517);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33520__$1,inst_33518);
} else {
if((state_val_33521 === (1))){
var state_33520__$1 = state_33520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33520__$1,(2),res,v);
} else {
return null;
}
}
});})(c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results))
;
return ((function (switch__28066__auto__,c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_33526 = [null,null,null,null,null,null,null,null];
(statearr_33526[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__);

(statearr_33526[(1)] = (1));

return statearr_33526;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1 = (function (state_33520){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33527){if((e33527 instanceof Object)){
var ex__28070__auto__ = e33527;
var statearr_33528_33698 = state_33520;
(statearr_33528_33698[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33699 = state_33520;
state_33520 = G__33699;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = function(state_33520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1.call(this,state_33520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results))
})();
var state__28124__auto__ = (function (){var statearr_33529 = f__28123__auto__.call(null);
(statearr_33529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33697);

return statearr_33529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___33697,res,vec__33515,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33530){
var vec__33531 = p__33530;
var v = cljs.core.nth.call(null,vec__33531,(0),null);
var p = cljs.core.nth.call(null,vec__33531,(1),null);
var job = vec__33531;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25993__auto___33700 = n;
var __33701 = (0);
while(true){
if((__33701 < n__25993__auto___33700)){
var G__33532_33702 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33532_33702) {
case "async":
var c__28122__auto___33704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33701,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (__33701,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function (state_33545){
var state_val_33546 = (state_33545[(1)]);
if((state_val_33546 === (7))){
var inst_33541 = (state_33545[(2)]);
var state_33545__$1 = state_33545;
var statearr_33547_33705 = state_33545__$1;
(statearr_33547_33705[(2)] = inst_33541);

(statearr_33547_33705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (6))){
var state_33545__$1 = state_33545;
var statearr_33548_33706 = state_33545__$1;
(statearr_33548_33706[(2)] = null);

(statearr_33548_33706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (5))){
var state_33545__$1 = state_33545;
var statearr_33549_33707 = state_33545__$1;
(statearr_33549_33707[(2)] = null);

(statearr_33549_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (4))){
var inst_33535 = (state_33545[(2)]);
var inst_33536 = async.call(null,inst_33535);
var state_33545__$1 = state_33545;
if(cljs.core.truth_(inst_33536)){
var statearr_33550_33708 = state_33545__$1;
(statearr_33550_33708[(1)] = (5));

} else {
var statearr_33551_33709 = state_33545__$1;
(statearr_33551_33709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33546 === (3))){
var inst_33543 = (state_33545[(2)]);
var state_33545__$1 = state_33545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33545__$1,inst_33543);
} else {
if((state_val_33546 === (2))){
var state_33545__$1 = state_33545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33545__$1,(4),jobs);
} else {
if((state_val_33546 === (1))){
var state_33545__$1 = state_33545;
var statearr_33552_33710 = state_33545__$1;
(statearr_33552_33710[(2)] = null);

(statearr_33552_33710[(1)] = (2));


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
});})(__33701,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
;
return ((function (__33701,switch__28066__auto__,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_33556 = [null,null,null,null,null,null,null];
(statearr_33556[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__);

(statearr_33556[(1)] = (1));

return statearr_33556;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1 = (function (state_33545){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33557){if((e33557 instanceof Object)){
var ex__28070__auto__ = e33557;
var statearr_33558_33711 = state_33545;
(statearr_33558_33711[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33712 = state_33545;
state_33545 = G__33712;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = function(state_33545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1.call(this,state_33545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__;
})()
;})(__33701,switch__28066__auto__,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
})();
var state__28124__auto__ = (function (){var statearr_33559 = f__28123__auto__.call(null);
(statearr_33559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33704);

return statearr_33559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(__33701,c__28122__auto___33704,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
);


break;
case "compute":
var c__28122__auto___33713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33701,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (__33701,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function (state_33572){
var state_val_33573 = (state_33572[(1)]);
if((state_val_33573 === (7))){
var inst_33568 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
var statearr_33574_33714 = state_33572__$1;
(statearr_33574_33714[(2)] = inst_33568);

(statearr_33574_33714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (6))){
var state_33572__$1 = state_33572;
var statearr_33575_33715 = state_33572__$1;
(statearr_33575_33715[(2)] = null);

(statearr_33575_33715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (5))){
var state_33572__$1 = state_33572;
var statearr_33576_33716 = state_33572__$1;
(statearr_33576_33716[(2)] = null);

(statearr_33576_33716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (4))){
var inst_33562 = (state_33572[(2)]);
var inst_33563 = process.call(null,inst_33562);
var state_33572__$1 = state_33572;
if(cljs.core.truth_(inst_33563)){
var statearr_33577_33717 = state_33572__$1;
(statearr_33577_33717[(1)] = (5));

} else {
var statearr_33578_33718 = state_33572__$1;
(statearr_33578_33718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33573 === (3))){
var inst_33570 = (state_33572[(2)]);
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33572__$1,inst_33570);
} else {
if((state_val_33573 === (2))){
var state_33572__$1 = state_33572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33572__$1,(4),jobs);
} else {
if((state_val_33573 === (1))){
var state_33572__$1 = state_33572;
var statearr_33579_33719 = state_33572__$1;
(statearr_33579_33719[(2)] = null);

(statearr_33579_33719[(1)] = (2));


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
});})(__33701,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
;
return ((function (__33701,switch__28066__auto__,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_33583 = [null,null,null,null,null,null,null];
(statearr_33583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__);

(statearr_33583[(1)] = (1));

return statearr_33583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1 = (function (state_33572){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33584){if((e33584 instanceof Object)){
var ex__28070__auto__ = e33584;
var statearr_33585_33720 = state_33572;
(statearr_33585_33720[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33721 = state_33572;
state_33572 = G__33721;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = function(state_33572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1.call(this,state_33572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__;
})()
;})(__33701,switch__28066__auto__,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
})();
var state__28124__auto__ = (function (){var statearr_33586 = f__28123__auto__.call(null);
(statearr_33586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33713);

return statearr_33586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(__33701,c__28122__auto___33713,G__33532_33702,n__25993__auto___33700,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33722 = (__33701 + (1));
__33701 = G__33722;
continue;
} else {
}
break;
}

var c__28122__auto___33723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___33723,jobs,results,process,async){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___33723,jobs,results,process,async){
return (function (state_33608){
var state_val_33609 = (state_33608[(1)]);
if((state_val_33609 === (9))){
var inst_33601 = (state_33608[(2)]);
var state_33608__$1 = (function (){var statearr_33610 = state_33608;
(statearr_33610[(7)] = inst_33601);

return statearr_33610;
})();
var statearr_33611_33724 = state_33608__$1;
(statearr_33611_33724[(2)] = null);

(statearr_33611_33724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (8))){
var inst_33594 = (state_33608[(8)]);
var inst_33599 = (state_33608[(2)]);
var state_33608__$1 = (function (){var statearr_33612 = state_33608;
(statearr_33612[(9)] = inst_33599);

return statearr_33612;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33608__$1,(9),results,inst_33594);
} else {
if((state_val_33609 === (7))){
var inst_33604 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33613_33725 = state_33608__$1;
(statearr_33613_33725[(2)] = inst_33604);

(statearr_33613_33725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (6))){
var inst_33589 = (state_33608[(10)]);
var inst_33594 = (state_33608[(8)]);
var inst_33594__$1 = cljs.core.async.chan.call(null,(1));
var inst_33595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33596 = [inst_33589,inst_33594__$1];
var inst_33597 = (new cljs.core.PersistentVector(null,2,(5),inst_33595,inst_33596,null));
var state_33608__$1 = (function (){var statearr_33614 = state_33608;
(statearr_33614[(8)] = inst_33594__$1);

return statearr_33614;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33608__$1,(8),jobs,inst_33597);
} else {
if((state_val_33609 === (5))){
var inst_33592 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33608__$1 = state_33608;
var statearr_33615_33726 = state_33608__$1;
(statearr_33615_33726[(2)] = inst_33592);

(statearr_33615_33726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (4))){
var inst_33589 = (state_33608[(10)]);
var inst_33589__$1 = (state_33608[(2)]);
var inst_33590 = (inst_33589__$1 == null);
var state_33608__$1 = (function (){var statearr_33616 = state_33608;
(statearr_33616[(10)] = inst_33589__$1);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33590)){
var statearr_33617_33727 = state_33608__$1;
(statearr_33617_33727[(1)] = (5));

} else {
var statearr_33618_33728 = state_33608__$1;
(statearr_33618_33728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (3))){
var inst_33606 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33608__$1,inst_33606);
} else {
if((state_val_33609 === (2))){
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33608__$1,(4),from);
} else {
if((state_val_33609 === (1))){
var state_33608__$1 = state_33608;
var statearr_33619_33729 = state_33608__$1;
(statearr_33619_33729[(2)] = null);

(statearr_33619_33729[(1)] = (2));


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
});})(c__28122__auto___33723,jobs,results,process,async))
;
return ((function (switch__28066__auto__,c__28122__auto___33723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_33623 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__);

(statearr_33623[(1)] = (1));

return statearr_33623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1 = (function (state_33608){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33624){if((e33624 instanceof Object)){
var ex__28070__auto__ = e33624;
var statearr_33625_33730 = state_33608;
(statearr_33625_33730[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33731 = state_33608;
state_33608 = G__33731;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___33723,jobs,results,process,async))
})();
var state__28124__auto__ = (function (){var statearr_33626 = f__28123__auto__.call(null);
(statearr_33626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33723);

return statearr_33626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___33723,jobs,results,process,async))
);


var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__,jobs,results,process,async){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__,jobs,results,process,async){
return (function (state_33664){
var state_val_33665 = (state_33664[(1)]);
if((state_val_33665 === (7))){
var inst_33660 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33666_33732 = state_33664__$1;
(statearr_33666_33732[(2)] = inst_33660);

(statearr_33666_33732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (20))){
var state_33664__$1 = state_33664;
var statearr_33667_33733 = state_33664__$1;
(statearr_33667_33733[(2)] = null);

(statearr_33667_33733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (1))){
var state_33664__$1 = state_33664;
var statearr_33668_33734 = state_33664__$1;
(statearr_33668_33734[(2)] = null);

(statearr_33668_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (4))){
var inst_33629 = (state_33664[(7)]);
var inst_33629__$1 = (state_33664[(2)]);
var inst_33630 = (inst_33629__$1 == null);
var state_33664__$1 = (function (){var statearr_33669 = state_33664;
(statearr_33669[(7)] = inst_33629__$1);

return statearr_33669;
})();
if(cljs.core.truth_(inst_33630)){
var statearr_33670_33735 = state_33664__$1;
(statearr_33670_33735[(1)] = (5));

} else {
var statearr_33671_33736 = state_33664__$1;
(statearr_33671_33736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (15))){
var inst_33642 = (state_33664[(8)]);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33664__$1,(18),to,inst_33642);
} else {
if((state_val_33665 === (21))){
var inst_33655 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33672_33737 = state_33664__$1;
(statearr_33672_33737[(2)] = inst_33655);

(statearr_33672_33737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (13))){
var inst_33657 = (state_33664[(2)]);
var state_33664__$1 = (function (){var statearr_33673 = state_33664;
(statearr_33673[(9)] = inst_33657);

return statearr_33673;
})();
var statearr_33674_33738 = state_33664__$1;
(statearr_33674_33738[(2)] = null);

(statearr_33674_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (6))){
var inst_33629 = (state_33664[(7)]);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33664__$1,(11),inst_33629);
} else {
if((state_val_33665 === (17))){
var inst_33650 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
if(cljs.core.truth_(inst_33650)){
var statearr_33675_33739 = state_33664__$1;
(statearr_33675_33739[(1)] = (19));

} else {
var statearr_33676_33740 = state_33664__$1;
(statearr_33676_33740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (3))){
var inst_33662 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33664__$1,inst_33662);
} else {
if((state_val_33665 === (12))){
var inst_33639 = (state_33664[(10)]);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33664__$1,(14),inst_33639);
} else {
if((state_val_33665 === (2))){
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33664__$1,(4),results);
} else {
if((state_val_33665 === (19))){
var state_33664__$1 = state_33664;
var statearr_33677_33741 = state_33664__$1;
(statearr_33677_33741[(2)] = null);

(statearr_33677_33741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (11))){
var inst_33639 = (state_33664[(2)]);
var state_33664__$1 = (function (){var statearr_33678 = state_33664;
(statearr_33678[(10)] = inst_33639);

return statearr_33678;
})();
var statearr_33679_33742 = state_33664__$1;
(statearr_33679_33742[(2)] = null);

(statearr_33679_33742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (9))){
var state_33664__$1 = state_33664;
var statearr_33680_33743 = state_33664__$1;
(statearr_33680_33743[(2)] = null);

(statearr_33680_33743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (5))){
var state_33664__$1 = state_33664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33681_33744 = state_33664__$1;
(statearr_33681_33744[(1)] = (8));

} else {
var statearr_33682_33745 = state_33664__$1;
(statearr_33682_33745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (14))){
var inst_33644 = (state_33664[(11)]);
var inst_33642 = (state_33664[(8)]);
var inst_33642__$1 = (state_33664[(2)]);
var inst_33643 = (inst_33642__$1 == null);
var inst_33644__$1 = cljs.core.not.call(null,inst_33643);
var state_33664__$1 = (function (){var statearr_33683 = state_33664;
(statearr_33683[(11)] = inst_33644__$1);

(statearr_33683[(8)] = inst_33642__$1);

return statearr_33683;
})();
if(inst_33644__$1){
var statearr_33684_33746 = state_33664__$1;
(statearr_33684_33746[(1)] = (15));

} else {
var statearr_33685_33747 = state_33664__$1;
(statearr_33685_33747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (16))){
var inst_33644 = (state_33664[(11)]);
var state_33664__$1 = state_33664;
var statearr_33686_33748 = state_33664__$1;
(statearr_33686_33748[(2)] = inst_33644);

(statearr_33686_33748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (10))){
var inst_33636 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33687_33749 = state_33664__$1;
(statearr_33687_33749[(2)] = inst_33636);

(statearr_33687_33749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (18))){
var inst_33647 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33688_33750 = state_33664__$1;
(statearr_33688_33750[(2)] = inst_33647);

(statearr_33688_33750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (8))){
var inst_33633 = cljs.core.async.close_BANG_.call(null,to);
var state_33664__$1 = state_33664;
var statearr_33689_33751 = state_33664__$1;
(statearr_33689_33751[(2)] = inst_33633);

(statearr_33689_33751[(1)] = (10));


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
});})(c__28122__auto__,jobs,results,process,async))
;
return ((function (switch__28066__auto__,c__28122__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_33693 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__);

(statearr_33693[(1)] = (1));

return statearr_33693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1 = (function (state_33664){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33694){if((e33694 instanceof Object)){
var ex__28070__auto__ = e33694;
var statearr_33695_33752 = state_33664;
(statearr_33695_33752[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33753 = state_33664;
state_33664 = G__33753;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__ = function(state_33664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1.call(this,state_33664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__,jobs,results,process,async))
})();
var state__28124__auto__ = (function (){var statearr_33696 = f__28123__auto__.call(null);
(statearr_33696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_33696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__,jobs,results,process,async))
);

return c__28122__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28122__auto___33854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___33854,tc,fc){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___33854,tc,fc){
return (function (state_33829){
var state_val_33830 = (state_33829[(1)]);
if((state_val_33830 === (7))){
var inst_33825 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33831_33855 = state_33829__$1;
(statearr_33831_33855[(2)] = inst_33825);

(statearr_33831_33855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (1))){
var state_33829__$1 = state_33829;
var statearr_33832_33856 = state_33829__$1;
(statearr_33832_33856[(2)] = null);

(statearr_33832_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (4))){
var inst_33806 = (state_33829[(7)]);
var inst_33806__$1 = (state_33829[(2)]);
var inst_33807 = (inst_33806__$1 == null);
var state_33829__$1 = (function (){var statearr_33833 = state_33829;
(statearr_33833[(7)] = inst_33806__$1);

return statearr_33833;
})();
if(cljs.core.truth_(inst_33807)){
var statearr_33834_33857 = state_33829__$1;
(statearr_33834_33857[(1)] = (5));

} else {
var statearr_33835_33858 = state_33829__$1;
(statearr_33835_33858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (13))){
var state_33829__$1 = state_33829;
var statearr_33836_33859 = state_33829__$1;
(statearr_33836_33859[(2)] = null);

(statearr_33836_33859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (6))){
var inst_33806 = (state_33829[(7)]);
var inst_33812 = p.call(null,inst_33806);
var state_33829__$1 = state_33829;
if(cljs.core.truth_(inst_33812)){
var statearr_33837_33860 = state_33829__$1;
(statearr_33837_33860[(1)] = (9));

} else {
var statearr_33838_33861 = state_33829__$1;
(statearr_33838_33861[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (3))){
var inst_33827 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33829__$1,inst_33827);
} else {
if((state_val_33830 === (12))){
var state_33829__$1 = state_33829;
var statearr_33839_33862 = state_33829__$1;
(statearr_33839_33862[(2)] = null);

(statearr_33839_33862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (2))){
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33829__$1,(4),ch);
} else {
if((state_val_33830 === (11))){
var inst_33806 = (state_33829[(7)]);
var inst_33816 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33829__$1,(8),inst_33816,inst_33806);
} else {
if((state_val_33830 === (9))){
var state_33829__$1 = state_33829;
var statearr_33840_33863 = state_33829__$1;
(statearr_33840_33863[(2)] = tc);

(statearr_33840_33863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (5))){
var inst_33809 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33810 = cljs.core.async.close_BANG_.call(null,fc);
var state_33829__$1 = (function (){var statearr_33841 = state_33829;
(statearr_33841[(8)] = inst_33809);

return statearr_33841;
})();
var statearr_33842_33864 = state_33829__$1;
(statearr_33842_33864[(2)] = inst_33810);

(statearr_33842_33864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (14))){
var inst_33823 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
var statearr_33843_33865 = state_33829__$1;
(statearr_33843_33865[(2)] = inst_33823);

(statearr_33843_33865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (10))){
var state_33829__$1 = state_33829;
var statearr_33844_33866 = state_33829__$1;
(statearr_33844_33866[(2)] = fc);

(statearr_33844_33866[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33830 === (8))){
var inst_33818 = (state_33829[(2)]);
var state_33829__$1 = state_33829;
if(cljs.core.truth_(inst_33818)){
var statearr_33845_33867 = state_33829__$1;
(statearr_33845_33867[(1)] = (12));

} else {
var statearr_33846_33868 = state_33829__$1;
(statearr_33846_33868[(1)] = (13));

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
});})(c__28122__auto___33854,tc,fc))
;
return ((function (switch__28066__auto__,c__28122__auto___33854,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__28067__auto__ = null;
var cljs$core$async$split_$_state_machine__28067__auto____0 = (function (){
var statearr_33850 = [null,null,null,null,null,null,null,null,null];
(statearr_33850[(0)] = cljs$core$async$split_$_state_machine__28067__auto__);

(statearr_33850[(1)] = (1));

return statearr_33850;
});
var cljs$core$async$split_$_state_machine__28067__auto____1 = (function (state_33829){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33851){if((e33851 instanceof Object)){
var ex__28070__auto__ = e33851;
var statearr_33852_33869 = state_33829;
(statearr_33852_33869[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33870 = state_33829;
state_33829 = G__33870;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__28067__auto__ = function(state_33829){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__28067__auto____1.call(this,state_33829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__28067__auto____0;
cljs$core$async$split_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__28067__auto____1;
return cljs$core$async$split_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___33854,tc,fc))
})();
var state__28124__auto__ = (function (){var statearr_33853 = f__28123__auto__.call(null);
(statearr_33853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___33854);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___33854,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_33917){
var state_val_33918 = (state_33917[(1)]);
if((state_val_33918 === (7))){
var inst_33913 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
var statearr_33919_33935 = state_33917__$1;
(statearr_33919_33935[(2)] = inst_33913);

(statearr_33919_33935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (6))){
var inst_33906 = (state_33917[(7)]);
var inst_33903 = (state_33917[(8)]);
var inst_33910 = f.call(null,inst_33903,inst_33906);
var inst_33903__$1 = inst_33910;
var state_33917__$1 = (function (){var statearr_33920 = state_33917;
(statearr_33920[(8)] = inst_33903__$1);

return statearr_33920;
})();
var statearr_33921_33936 = state_33917__$1;
(statearr_33921_33936[(2)] = null);

(statearr_33921_33936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (5))){
var inst_33903 = (state_33917[(8)]);
var state_33917__$1 = state_33917;
var statearr_33922_33937 = state_33917__$1;
(statearr_33922_33937[(2)] = inst_33903);

(statearr_33922_33937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (4))){
var inst_33906 = (state_33917[(7)]);
var inst_33906__$1 = (state_33917[(2)]);
var inst_33907 = (inst_33906__$1 == null);
var state_33917__$1 = (function (){var statearr_33923 = state_33917;
(statearr_33923[(7)] = inst_33906__$1);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33907)){
var statearr_33924_33938 = state_33917__$1;
(statearr_33924_33938[(1)] = (5));

} else {
var statearr_33925_33939 = state_33917__$1;
(statearr_33925_33939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33918 === (3))){
var inst_33915 = (state_33917[(2)]);
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33917__$1,inst_33915);
} else {
if((state_val_33918 === (2))){
var state_33917__$1 = state_33917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33917__$1,(4),ch);
} else {
if((state_val_33918 === (1))){
var inst_33903 = init;
var state_33917__$1 = (function (){var statearr_33926 = state_33917;
(statearr_33926[(8)] = inst_33903);

return statearr_33926;
})();
var statearr_33927_33940 = state_33917__$1;
(statearr_33927_33940[(2)] = null);

(statearr_33927_33940[(1)] = (2));


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
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28067__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28067__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$reduce_$_state_machine__28067__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$reduce_$_state_machine__28067__auto____1 = (function (state_33917){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_33917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e33932){if((e33932 instanceof Object)){
var ex__28070__auto__ = e33932;
var statearr_33933_33941 = state_33917;
(statearr_33933_33941[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33942 = state_33917;
state_33917 = G__33942;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28067__auto__ = function(state_33917){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28067__auto____1.call(this,state_33917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28067__auto____0;
cljs$core$async$reduce_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28067__auto____1;
return cljs$core$async$reduce_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_33934 = f__28123__auto__.call(null);
(statearr_33934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_33934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_34016){
var state_val_34017 = (state_34016[(1)]);
if((state_val_34017 === (7))){
var inst_33998 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34018_34041 = state_34016__$1;
(statearr_34018_34041[(2)] = inst_33998);

(statearr_34018_34041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (1))){
var inst_33992 = cljs.core.seq.call(null,coll);
var inst_33993 = inst_33992;
var state_34016__$1 = (function (){var statearr_34019 = state_34016;
(statearr_34019[(7)] = inst_33993);

return statearr_34019;
})();
var statearr_34020_34042 = state_34016__$1;
(statearr_34020_34042[(2)] = null);

(statearr_34020_34042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (4))){
var inst_33993 = (state_34016[(7)]);
var inst_33996 = cljs.core.first.call(null,inst_33993);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34016__$1,(7),ch,inst_33996);
} else {
if((state_val_34017 === (13))){
var inst_34010 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34021_34043 = state_34016__$1;
(statearr_34021_34043[(2)] = inst_34010);

(statearr_34021_34043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (6))){
var inst_34001 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
if(cljs.core.truth_(inst_34001)){
var statearr_34022_34044 = state_34016__$1;
(statearr_34022_34044[(1)] = (8));

} else {
var statearr_34023_34045 = state_34016__$1;
(statearr_34023_34045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (3))){
var inst_34014 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34016__$1,inst_34014);
} else {
if((state_val_34017 === (12))){
var state_34016__$1 = state_34016;
var statearr_34024_34046 = state_34016__$1;
(statearr_34024_34046[(2)] = null);

(statearr_34024_34046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (2))){
var inst_33993 = (state_34016[(7)]);
var state_34016__$1 = state_34016;
if(cljs.core.truth_(inst_33993)){
var statearr_34025_34047 = state_34016__$1;
(statearr_34025_34047[(1)] = (4));

} else {
var statearr_34026_34048 = state_34016__$1;
(statearr_34026_34048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (11))){
var inst_34007 = cljs.core.async.close_BANG_.call(null,ch);
var state_34016__$1 = state_34016;
var statearr_34027_34049 = state_34016__$1;
(statearr_34027_34049[(2)] = inst_34007);

(statearr_34027_34049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (9))){
var state_34016__$1 = state_34016;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34028_34050 = state_34016__$1;
(statearr_34028_34050[(1)] = (11));

} else {
var statearr_34029_34051 = state_34016__$1;
(statearr_34029_34051[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (5))){
var inst_33993 = (state_34016[(7)]);
var state_34016__$1 = state_34016;
var statearr_34030_34052 = state_34016__$1;
(statearr_34030_34052[(2)] = inst_33993);

(statearr_34030_34052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (10))){
var inst_34012 = (state_34016[(2)]);
var state_34016__$1 = state_34016;
var statearr_34031_34053 = state_34016__$1;
(statearr_34031_34053[(2)] = inst_34012);

(statearr_34031_34053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34017 === (8))){
var inst_33993 = (state_34016[(7)]);
var inst_34003 = cljs.core.next.call(null,inst_33993);
var inst_33993__$1 = inst_34003;
var state_34016__$1 = (function (){var statearr_34032 = state_34016;
(statearr_34032[(7)] = inst_33993__$1);

return statearr_34032;
})();
var statearr_34033_34054 = state_34016__$1;
(statearr_34033_34054[(2)] = null);

(statearr_34033_34054[(1)] = (2));


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
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__28067__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__28067__auto____0 = (function (){
var statearr_34037 = [null,null,null,null,null,null,null,null];
(statearr_34037[(0)] = cljs$core$async$onto_chan_$_state_machine__28067__auto__);

(statearr_34037[(1)] = (1));

return statearr_34037;
});
var cljs$core$async$onto_chan_$_state_machine__28067__auto____1 = (function (state_34016){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_34016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e34038){if((e34038 instanceof Object)){
var ex__28070__auto__ = e34038;
var statearr_34039_34055 = state_34016;
(statearr_34039_34055[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_34016;
state_34016 = G__34056;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__28067__auto__ = function(state_34016){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__28067__auto____1.call(this,state_34016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__28067__auto____0;
cljs$core$async$onto_chan_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__28067__auto____1;
return cljs$core$async$onto_chan_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_34040 = f__28123__auto__.call(null);
(statearr_34040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_34040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj34058 = {};
return obj34058;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__25094__auto__ = _;
if(and__25094__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25750__auto__ = (((_ == null))?null:_);
return (function (){var or__25106__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj34060 = {};
return obj34060;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t34282 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34282 = (function (cs,ch,mult,meta34283){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34283 = meta34283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34282.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t34282.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t34282.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t34282.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t34282.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34282.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t34282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34284){
var self__ = this;
var _34284__$1 = this;
return self__.meta34283;
});})(cs))
;

cljs.core.async.t34282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34284,meta34283__$1){
var self__ = this;
var _34284__$1 = this;
return (new cljs.core.async.t34282(self__.cs,self__.ch,self__.mult,meta34283__$1));
});})(cs))
;

cljs.core.async.t34282.cljs$lang$type = true;

cljs.core.async.t34282.cljs$lang$ctorStr = "cljs.core.async/t34282";

cljs.core.async.t34282.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t34282");
});})(cs))
;

cljs.core.async.__GT_t34282 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t34282(cs__$1,ch__$1,mult__$1,meta34283){
return (new cljs.core.async.t34282(cs__$1,ch__$1,mult__$1,meta34283));
});})(cs))
;

}

return (new cljs.core.async.t34282(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28122__auto___34503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___34503,cs,m,dchan,dctr,done){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___34503,cs,m,dchan,dctr,done){
return (function (state_34415){
var state_val_34416 = (state_34415[(1)]);
if((state_val_34416 === (7))){
var inst_34411 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34417_34504 = state_34415__$1;
(statearr_34417_34504[(2)] = inst_34411);

(statearr_34417_34504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (20))){
var inst_34316 = (state_34415[(7)]);
var inst_34326 = cljs.core.first.call(null,inst_34316);
var inst_34327 = cljs.core.nth.call(null,inst_34326,(0),null);
var inst_34328 = cljs.core.nth.call(null,inst_34326,(1),null);
var state_34415__$1 = (function (){var statearr_34418 = state_34415;
(statearr_34418[(8)] = inst_34327);

return statearr_34418;
})();
if(cljs.core.truth_(inst_34328)){
var statearr_34419_34505 = state_34415__$1;
(statearr_34419_34505[(1)] = (22));

} else {
var statearr_34420_34506 = state_34415__$1;
(statearr_34420_34506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (27))){
var inst_34356 = (state_34415[(9)]);
var inst_34287 = (state_34415[(10)]);
var inst_34358 = (state_34415[(11)]);
var inst_34363 = (state_34415[(12)]);
var inst_34363__$1 = cljs.core._nth.call(null,inst_34356,inst_34358);
var inst_34364 = cljs.core.async.put_BANG_.call(null,inst_34363__$1,inst_34287,done);
var state_34415__$1 = (function (){var statearr_34421 = state_34415;
(statearr_34421[(12)] = inst_34363__$1);

return statearr_34421;
})();
if(cljs.core.truth_(inst_34364)){
var statearr_34422_34507 = state_34415__$1;
(statearr_34422_34507[(1)] = (30));

} else {
var statearr_34423_34508 = state_34415__$1;
(statearr_34423_34508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (1))){
var state_34415__$1 = state_34415;
var statearr_34424_34509 = state_34415__$1;
(statearr_34424_34509[(2)] = null);

(statearr_34424_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (24))){
var inst_34316 = (state_34415[(7)]);
var inst_34333 = (state_34415[(2)]);
var inst_34334 = cljs.core.next.call(null,inst_34316);
var inst_34296 = inst_34334;
var inst_34297 = null;
var inst_34298 = (0);
var inst_34299 = (0);
var state_34415__$1 = (function (){var statearr_34425 = state_34415;
(statearr_34425[(13)] = inst_34297);

(statearr_34425[(14)] = inst_34298);

(statearr_34425[(15)] = inst_34333);

(statearr_34425[(16)] = inst_34296);

(statearr_34425[(17)] = inst_34299);

return statearr_34425;
})();
var statearr_34426_34510 = state_34415__$1;
(statearr_34426_34510[(2)] = null);

(statearr_34426_34510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (39))){
var state_34415__$1 = state_34415;
var statearr_34430_34511 = state_34415__$1;
(statearr_34430_34511[(2)] = null);

(statearr_34430_34511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (4))){
var inst_34287 = (state_34415[(10)]);
var inst_34287__$1 = (state_34415[(2)]);
var inst_34288 = (inst_34287__$1 == null);
var state_34415__$1 = (function (){var statearr_34431 = state_34415;
(statearr_34431[(10)] = inst_34287__$1);

return statearr_34431;
})();
if(cljs.core.truth_(inst_34288)){
var statearr_34432_34512 = state_34415__$1;
(statearr_34432_34512[(1)] = (5));

} else {
var statearr_34433_34513 = state_34415__$1;
(statearr_34433_34513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (15))){
var inst_34297 = (state_34415[(13)]);
var inst_34298 = (state_34415[(14)]);
var inst_34296 = (state_34415[(16)]);
var inst_34299 = (state_34415[(17)]);
var inst_34312 = (state_34415[(2)]);
var inst_34313 = (inst_34299 + (1));
var tmp34427 = inst_34297;
var tmp34428 = inst_34298;
var tmp34429 = inst_34296;
var inst_34296__$1 = tmp34429;
var inst_34297__$1 = tmp34427;
var inst_34298__$1 = tmp34428;
var inst_34299__$1 = inst_34313;
var state_34415__$1 = (function (){var statearr_34434 = state_34415;
(statearr_34434[(13)] = inst_34297__$1);

(statearr_34434[(14)] = inst_34298__$1);

(statearr_34434[(16)] = inst_34296__$1);

(statearr_34434[(17)] = inst_34299__$1);

(statearr_34434[(18)] = inst_34312);

return statearr_34434;
})();
var statearr_34435_34514 = state_34415__$1;
(statearr_34435_34514[(2)] = null);

(statearr_34435_34514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (21))){
var inst_34337 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34439_34515 = state_34415__$1;
(statearr_34439_34515[(2)] = inst_34337);

(statearr_34439_34515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (31))){
var inst_34363 = (state_34415[(12)]);
var inst_34367 = done.call(null,null);
var inst_34368 = cljs.core.async.untap_STAR_.call(null,m,inst_34363);
var state_34415__$1 = (function (){var statearr_34440 = state_34415;
(statearr_34440[(19)] = inst_34367);

return statearr_34440;
})();
var statearr_34441_34516 = state_34415__$1;
(statearr_34441_34516[(2)] = inst_34368);

(statearr_34441_34516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (32))){
var inst_34356 = (state_34415[(9)]);
var inst_34357 = (state_34415[(20)]);
var inst_34358 = (state_34415[(11)]);
var inst_34355 = (state_34415[(21)]);
var inst_34370 = (state_34415[(2)]);
var inst_34371 = (inst_34358 + (1));
var tmp34436 = inst_34356;
var tmp34437 = inst_34357;
var tmp34438 = inst_34355;
var inst_34355__$1 = tmp34438;
var inst_34356__$1 = tmp34436;
var inst_34357__$1 = tmp34437;
var inst_34358__$1 = inst_34371;
var state_34415__$1 = (function (){var statearr_34442 = state_34415;
(statearr_34442[(9)] = inst_34356__$1);

(statearr_34442[(20)] = inst_34357__$1);

(statearr_34442[(22)] = inst_34370);

(statearr_34442[(11)] = inst_34358__$1);

(statearr_34442[(21)] = inst_34355__$1);

return statearr_34442;
})();
var statearr_34443_34517 = state_34415__$1;
(statearr_34443_34517[(2)] = null);

(statearr_34443_34517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (40))){
var inst_34383 = (state_34415[(23)]);
var inst_34387 = done.call(null,null);
var inst_34388 = cljs.core.async.untap_STAR_.call(null,m,inst_34383);
var state_34415__$1 = (function (){var statearr_34444 = state_34415;
(statearr_34444[(24)] = inst_34387);

return statearr_34444;
})();
var statearr_34445_34518 = state_34415__$1;
(statearr_34445_34518[(2)] = inst_34388);

(statearr_34445_34518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (33))){
var inst_34374 = (state_34415[(25)]);
var inst_34376 = cljs.core.chunked_seq_QMARK_.call(null,inst_34374);
var state_34415__$1 = state_34415;
if(inst_34376){
var statearr_34446_34519 = state_34415__$1;
(statearr_34446_34519[(1)] = (36));

} else {
var statearr_34447_34520 = state_34415__$1;
(statearr_34447_34520[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (13))){
var inst_34306 = (state_34415[(26)]);
var inst_34309 = cljs.core.async.close_BANG_.call(null,inst_34306);
var state_34415__$1 = state_34415;
var statearr_34448_34521 = state_34415__$1;
(statearr_34448_34521[(2)] = inst_34309);

(statearr_34448_34521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (22))){
var inst_34327 = (state_34415[(8)]);
var inst_34330 = cljs.core.async.close_BANG_.call(null,inst_34327);
var state_34415__$1 = state_34415;
var statearr_34449_34522 = state_34415__$1;
(statearr_34449_34522[(2)] = inst_34330);

(statearr_34449_34522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (36))){
var inst_34374 = (state_34415[(25)]);
var inst_34378 = cljs.core.chunk_first.call(null,inst_34374);
var inst_34379 = cljs.core.chunk_rest.call(null,inst_34374);
var inst_34380 = cljs.core.count.call(null,inst_34378);
var inst_34355 = inst_34379;
var inst_34356 = inst_34378;
var inst_34357 = inst_34380;
var inst_34358 = (0);
var state_34415__$1 = (function (){var statearr_34450 = state_34415;
(statearr_34450[(9)] = inst_34356);

(statearr_34450[(20)] = inst_34357);

(statearr_34450[(11)] = inst_34358);

(statearr_34450[(21)] = inst_34355);

return statearr_34450;
})();
var statearr_34451_34523 = state_34415__$1;
(statearr_34451_34523[(2)] = null);

(statearr_34451_34523[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (41))){
var inst_34374 = (state_34415[(25)]);
var inst_34390 = (state_34415[(2)]);
var inst_34391 = cljs.core.next.call(null,inst_34374);
var inst_34355 = inst_34391;
var inst_34356 = null;
var inst_34357 = (0);
var inst_34358 = (0);
var state_34415__$1 = (function (){var statearr_34452 = state_34415;
(statearr_34452[(9)] = inst_34356);

(statearr_34452[(27)] = inst_34390);

(statearr_34452[(20)] = inst_34357);

(statearr_34452[(11)] = inst_34358);

(statearr_34452[(21)] = inst_34355);

return statearr_34452;
})();
var statearr_34453_34524 = state_34415__$1;
(statearr_34453_34524[(2)] = null);

(statearr_34453_34524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (43))){
var state_34415__$1 = state_34415;
var statearr_34454_34525 = state_34415__$1;
(statearr_34454_34525[(2)] = null);

(statearr_34454_34525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (29))){
var inst_34399 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34455_34526 = state_34415__$1;
(statearr_34455_34526[(2)] = inst_34399);

(statearr_34455_34526[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (44))){
var inst_34408 = (state_34415[(2)]);
var state_34415__$1 = (function (){var statearr_34456 = state_34415;
(statearr_34456[(28)] = inst_34408);

return statearr_34456;
})();
var statearr_34457_34527 = state_34415__$1;
(statearr_34457_34527[(2)] = null);

(statearr_34457_34527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (6))){
var inst_34347 = (state_34415[(29)]);
var inst_34346 = cljs.core.deref.call(null,cs);
var inst_34347__$1 = cljs.core.keys.call(null,inst_34346);
var inst_34348 = cljs.core.count.call(null,inst_34347__$1);
var inst_34349 = cljs.core.reset_BANG_.call(null,dctr,inst_34348);
var inst_34354 = cljs.core.seq.call(null,inst_34347__$1);
var inst_34355 = inst_34354;
var inst_34356 = null;
var inst_34357 = (0);
var inst_34358 = (0);
var state_34415__$1 = (function (){var statearr_34458 = state_34415;
(statearr_34458[(30)] = inst_34349);

(statearr_34458[(9)] = inst_34356);

(statearr_34458[(29)] = inst_34347__$1);

(statearr_34458[(20)] = inst_34357);

(statearr_34458[(11)] = inst_34358);

(statearr_34458[(21)] = inst_34355);

return statearr_34458;
})();
var statearr_34459_34528 = state_34415__$1;
(statearr_34459_34528[(2)] = null);

(statearr_34459_34528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (28))){
var inst_34374 = (state_34415[(25)]);
var inst_34355 = (state_34415[(21)]);
var inst_34374__$1 = cljs.core.seq.call(null,inst_34355);
var state_34415__$1 = (function (){var statearr_34460 = state_34415;
(statearr_34460[(25)] = inst_34374__$1);

return statearr_34460;
})();
if(inst_34374__$1){
var statearr_34461_34529 = state_34415__$1;
(statearr_34461_34529[(1)] = (33));

} else {
var statearr_34462_34530 = state_34415__$1;
(statearr_34462_34530[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (25))){
var inst_34357 = (state_34415[(20)]);
var inst_34358 = (state_34415[(11)]);
var inst_34360 = (inst_34358 < inst_34357);
var inst_34361 = inst_34360;
var state_34415__$1 = state_34415;
if(cljs.core.truth_(inst_34361)){
var statearr_34463_34531 = state_34415__$1;
(statearr_34463_34531[(1)] = (27));

} else {
var statearr_34464_34532 = state_34415__$1;
(statearr_34464_34532[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (34))){
var state_34415__$1 = state_34415;
var statearr_34465_34533 = state_34415__$1;
(statearr_34465_34533[(2)] = null);

(statearr_34465_34533[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (17))){
var state_34415__$1 = state_34415;
var statearr_34466_34534 = state_34415__$1;
(statearr_34466_34534[(2)] = null);

(statearr_34466_34534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (3))){
var inst_34413 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34415__$1,inst_34413);
} else {
if((state_val_34416 === (12))){
var inst_34342 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34467_34535 = state_34415__$1;
(statearr_34467_34535[(2)] = inst_34342);

(statearr_34467_34535[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (2))){
var state_34415__$1 = state_34415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34415__$1,(4),ch);
} else {
if((state_val_34416 === (23))){
var state_34415__$1 = state_34415;
var statearr_34468_34536 = state_34415__$1;
(statearr_34468_34536[(2)] = null);

(statearr_34468_34536[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (35))){
var inst_34397 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34469_34537 = state_34415__$1;
(statearr_34469_34537[(2)] = inst_34397);

(statearr_34469_34537[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (19))){
var inst_34316 = (state_34415[(7)]);
var inst_34320 = cljs.core.chunk_first.call(null,inst_34316);
var inst_34321 = cljs.core.chunk_rest.call(null,inst_34316);
var inst_34322 = cljs.core.count.call(null,inst_34320);
var inst_34296 = inst_34321;
var inst_34297 = inst_34320;
var inst_34298 = inst_34322;
var inst_34299 = (0);
var state_34415__$1 = (function (){var statearr_34470 = state_34415;
(statearr_34470[(13)] = inst_34297);

(statearr_34470[(14)] = inst_34298);

(statearr_34470[(16)] = inst_34296);

(statearr_34470[(17)] = inst_34299);

return statearr_34470;
})();
var statearr_34471_34538 = state_34415__$1;
(statearr_34471_34538[(2)] = null);

(statearr_34471_34538[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (11))){
var inst_34296 = (state_34415[(16)]);
var inst_34316 = (state_34415[(7)]);
var inst_34316__$1 = cljs.core.seq.call(null,inst_34296);
var state_34415__$1 = (function (){var statearr_34472 = state_34415;
(statearr_34472[(7)] = inst_34316__$1);

return statearr_34472;
})();
if(inst_34316__$1){
var statearr_34473_34539 = state_34415__$1;
(statearr_34473_34539[(1)] = (16));

} else {
var statearr_34474_34540 = state_34415__$1;
(statearr_34474_34540[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (9))){
var inst_34344 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34475_34541 = state_34415__$1;
(statearr_34475_34541[(2)] = inst_34344);

(statearr_34475_34541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (5))){
var inst_34294 = cljs.core.deref.call(null,cs);
var inst_34295 = cljs.core.seq.call(null,inst_34294);
var inst_34296 = inst_34295;
var inst_34297 = null;
var inst_34298 = (0);
var inst_34299 = (0);
var state_34415__$1 = (function (){var statearr_34476 = state_34415;
(statearr_34476[(13)] = inst_34297);

(statearr_34476[(14)] = inst_34298);

(statearr_34476[(16)] = inst_34296);

(statearr_34476[(17)] = inst_34299);

return statearr_34476;
})();
var statearr_34477_34542 = state_34415__$1;
(statearr_34477_34542[(2)] = null);

(statearr_34477_34542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (14))){
var state_34415__$1 = state_34415;
var statearr_34478_34543 = state_34415__$1;
(statearr_34478_34543[(2)] = null);

(statearr_34478_34543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (45))){
var inst_34405 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34479_34544 = state_34415__$1;
(statearr_34479_34544[(2)] = inst_34405);

(statearr_34479_34544[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (26))){
var inst_34347 = (state_34415[(29)]);
var inst_34401 = (state_34415[(2)]);
var inst_34402 = cljs.core.seq.call(null,inst_34347);
var state_34415__$1 = (function (){var statearr_34480 = state_34415;
(statearr_34480[(31)] = inst_34401);

return statearr_34480;
})();
if(inst_34402){
var statearr_34481_34545 = state_34415__$1;
(statearr_34481_34545[(1)] = (42));

} else {
var statearr_34482_34546 = state_34415__$1;
(statearr_34482_34546[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (16))){
var inst_34316 = (state_34415[(7)]);
var inst_34318 = cljs.core.chunked_seq_QMARK_.call(null,inst_34316);
var state_34415__$1 = state_34415;
if(inst_34318){
var statearr_34483_34547 = state_34415__$1;
(statearr_34483_34547[(1)] = (19));

} else {
var statearr_34484_34548 = state_34415__$1;
(statearr_34484_34548[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (38))){
var inst_34394 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34485_34549 = state_34415__$1;
(statearr_34485_34549[(2)] = inst_34394);

(statearr_34485_34549[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (30))){
var state_34415__$1 = state_34415;
var statearr_34486_34550 = state_34415__$1;
(statearr_34486_34550[(2)] = null);

(statearr_34486_34550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (10))){
var inst_34297 = (state_34415[(13)]);
var inst_34299 = (state_34415[(17)]);
var inst_34305 = cljs.core._nth.call(null,inst_34297,inst_34299);
var inst_34306 = cljs.core.nth.call(null,inst_34305,(0),null);
var inst_34307 = cljs.core.nth.call(null,inst_34305,(1),null);
var state_34415__$1 = (function (){var statearr_34487 = state_34415;
(statearr_34487[(26)] = inst_34306);

return statearr_34487;
})();
if(cljs.core.truth_(inst_34307)){
var statearr_34488_34551 = state_34415__$1;
(statearr_34488_34551[(1)] = (13));

} else {
var statearr_34489_34552 = state_34415__$1;
(statearr_34489_34552[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (18))){
var inst_34340 = (state_34415[(2)]);
var state_34415__$1 = state_34415;
var statearr_34490_34553 = state_34415__$1;
(statearr_34490_34553[(2)] = inst_34340);

(statearr_34490_34553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (42))){
var state_34415__$1 = state_34415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34415__$1,(45),dchan);
} else {
if((state_val_34416 === (37))){
var inst_34374 = (state_34415[(25)]);
var inst_34383 = (state_34415[(23)]);
var inst_34287 = (state_34415[(10)]);
var inst_34383__$1 = cljs.core.first.call(null,inst_34374);
var inst_34384 = cljs.core.async.put_BANG_.call(null,inst_34383__$1,inst_34287,done);
var state_34415__$1 = (function (){var statearr_34491 = state_34415;
(statearr_34491[(23)] = inst_34383__$1);

return statearr_34491;
})();
if(cljs.core.truth_(inst_34384)){
var statearr_34492_34554 = state_34415__$1;
(statearr_34492_34554[(1)] = (39));

} else {
var statearr_34493_34555 = state_34415__$1;
(statearr_34493_34555[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34416 === (8))){
var inst_34298 = (state_34415[(14)]);
var inst_34299 = (state_34415[(17)]);
var inst_34301 = (inst_34299 < inst_34298);
var inst_34302 = inst_34301;
var state_34415__$1 = state_34415;
if(cljs.core.truth_(inst_34302)){
var statearr_34494_34556 = state_34415__$1;
(statearr_34494_34556[(1)] = (10));

} else {
var statearr_34495_34557 = state_34415__$1;
(statearr_34495_34557[(1)] = (11));

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
});})(c__28122__auto___34503,cs,m,dchan,dctr,done))
;
return ((function (switch__28066__auto__,c__28122__auto___34503,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28067__auto__ = null;
var cljs$core$async$mult_$_state_machine__28067__auto____0 = (function (){
var statearr_34499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34499[(0)] = cljs$core$async$mult_$_state_machine__28067__auto__);

(statearr_34499[(1)] = (1));

return statearr_34499;
});
var cljs$core$async$mult_$_state_machine__28067__auto____1 = (function (state_34415){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_34415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e34500){if((e34500 instanceof Object)){
var ex__28070__auto__ = e34500;
var statearr_34501_34558 = state_34415;
(statearr_34501_34558[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34559 = state_34415;
state_34415 = G__34559;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28067__auto__ = function(state_34415){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28067__auto____1.call(this,state_34415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28067__auto____0;
cljs$core$async$mult_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28067__auto____1;
return cljs$core$async$mult_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___34503,cs,m,dchan,dctr,done))
})();
var state__28124__auto__ = (function (){var statearr_34502 = f__28123__auto__.call(null);
(statearr_34502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___34503);

return statearr_34502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___34503,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj34561 = {};
return obj34561;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__25094__auto__ = m;
if(and__25094__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25750__auto__ = (((m == null))?null:m);
return (function (){var or__25106__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__34562){
var map__34567 = p__34562;
var map__34567__$1 = ((cljs.core.seq_QMARK_.call(null,map__34567))?cljs.core.apply.call(null,cljs.core.hash_map,map__34567):map__34567);
var opts = map__34567__$1;
var statearr_34568_34571 = state;
(statearr_34568_34571[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__34567,map__34567__$1,opts){
return (function (val){
var statearr_34569_34572 = state;
(statearr_34569_34572[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34567,map__34567__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_34570_34573 = state;
(statearr_34570_34573[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__34562 = null;
if (arguments.length > 3) {
var G__34574__i = 0, G__34574__a = new Array(arguments.length -  3);
while (G__34574__i < G__34574__a.length) {G__34574__a[G__34574__i] = arguments[G__34574__i + 3]; ++G__34574__i;}
  p__34562 = new cljs.core.IndexedSeq(G__34574__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__34562);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__34575){
var state = cljs.core.first(arglist__34575);
arglist__34575 = cljs.core.next(arglist__34575);
var cont_block = cljs.core.first(arglist__34575);
arglist__34575 = cljs.core.next(arglist__34575);
var ports = cljs.core.first(arglist__34575);
var p__34562 = cljs.core.rest(arglist__34575);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__34562);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t34695 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34695 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34696){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34696 = meta34696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34695.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t34695.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34695.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34697){
var self__ = this;
var _34697__$1 = this;
return self__.meta34696;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34697,meta34696__$1){
var self__ = this;
var _34697__$1 = this;
return (new cljs.core.async.t34695(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34696__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t34695.cljs$lang$type = true;

cljs.core.async.t34695.cljs$lang$ctorStr = "cljs.core.async/t34695";

cljs.core.async.t34695.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t34695");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t34695 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t34695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34696){
return (new cljs.core.async.t34695(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34696));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t34695(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28122__auto___34814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (7))){
var inst_34711 = (state_34767[(7)]);
var inst_34716 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34711);
var state_34767__$1 = state_34767;
var statearr_34769_34815 = state_34767__$1;
(statearr_34769_34815[(2)] = inst_34716);

(statearr_34769_34815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (20))){
var inst_34726 = (state_34767[(8)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34767__$1,(23),out,inst_34726);
} else {
if((state_val_34768 === (1))){
var inst_34701 = (state_34767[(9)]);
var inst_34701__$1 = calc_state.call(null);
var inst_34702 = cljs.core.seq_QMARK_.call(null,inst_34701__$1);
var state_34767__$1 = (function (){var statearr_34770 = state_34767;
(statearr_34770[(9)] = inst_34701__$1);

return statearr_34770;
})();
if(inst_34702){
var statearr_34771_34816 = state_34767__$1;
(statearr_34771_34816[(1)] = (2));

} else {
var statearr_34772_34817 = state_34767__$1;
(statearr_34772_34817[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (24))){
var inst_34719 = (state_34767[(10)]);
var inst_34711 = inst_34719;
var state_34767__$1 = (function (){var statearr_34773 = state_34767;
(statearr_34773[(7)] = inst_34711);

return statearr_34773;
})();
var statearr_34774_34818 = state_34767__$1;
(statearr_34774_34818[(2)] = null);

(statearr_34774_34818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (4))){
var inst_34701 = (state_34767[(9)]);
var inst_34707 = (state_34767[(2)]);
var inst_34708 = cljs.core.get.call(null,inst_34707,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34709 = cljs.core.get.call(null,inst_34707,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34710 = cljs.core.get.call(null,inst_34707,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34711 = inst_34701;
var state_34767__$1 = (function (){var statearr_34775 = state_34767;
(statearr_34775[(7)] = inst_34711);

(statearr_34775[(11)] = inst_34710);

(statearr_34775[(12)] = inst_34708);

(statearr_34775[(13)] = inst_34709);

return statearr_34775;
})();
var statearr_34776_34819 = state_34767__$1;
(statearr_34776_34819[(2)] = null);

(statearr_34776_34819[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (15))){
var state_34767__$1 = state_34767;
var statearr_34777_34820 = state_34767__$1;
(statearr_34777_34820[(2)] = null);

(statearr_34777_34820[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (21))){
var inst_34719 = (state_34767[(10)]);
var inst_34711 = inst_34719;
var state_34767__$1 = (function (){var statearr_34778 = state_34767;
(statearr_34778[(7)] = inst_34711);

return statearr_34778;
})();
var statearr_34779_34821 = state_34767__$1;
(statearr_34779_34821[(2)] = null);

(statearr_34779_34821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (13))){
var inst_34763 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34780_34822 = state_34767__$1;
(statearr_34780_34822[(2)] = inst_34763);

(statearr_34780_34822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (22))){
var inst_34761 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34781_34823 = state_34767__$1;
(statearr_34781_34823[(2)] = inst_34761);

(statearr_34781_34823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (6))){
var inst_34765 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34767__$1,inst_34765);
} else {
if((state_val_34768 === (25))){
var state_34767__$1 = state_34767;
var statearr_34782_34824 = state_34767__$1;
(statearr_34782_34824[(2)] = null);

(statearr_34782_34824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (17))){
var inst_34741 = (state_34767[(14)]);
var state_34767__$1 = state_34767;
var statearr_34783_34825 = state_34767__$1;
(statearr_34783_34825[(2)] = inst_34741);

(statearr_34783_34825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (3))){
var inst_34701 = (state_34767[(9)]);
var state_34767__$1 = state_34767;
var statearr_34784_34826 = state_34767__$1;
(statearr_34784_34826[(2)] = inst_34701);

(statearr_34784_34826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (12))){
var inst_34727 = (state_34767[(15)]);
var inst_34741 = (state_34767[(14)]);
var inst_34722 = (state_34767[(16)]);
var inst_34741__$1 = inst_34722.call(null,inst_34727);
var state_34767__$1 = (function (){var statearr_34785 = state_34767;
(statearr_34785[(14)] = inst_34741__$1);

return statearr_34785;
})();
if(cljs.core.truth_(inst_34741__$1)){
var statearr_34786_34827 = state_34767__$1;
(statearr_34786_34827[(1)] = (17));

} else {
var statearr_34787_34828 = state_34767__$1;
(statearr_34787_34828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (2))){
var inst_34701 = (state_34767[(9)]);
var inst_34704 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34701);
var state_34767__$1 = state_34767;
var statearr_34788_34829 = state_34767__$1;
(statearr_34788_34829[(2)] = inst_34704);

(statearr_34788_34829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (23))){
var inst_34752 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34752)){
var statearr_34789_34830 = state_34767__$1;
(statearr_34789_34830[(1)] = (24));

} else {
var statearr_34790_34831 = state_34767__$1;
(statearr_34790_34831[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (19))){
var inst_34749 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34749)){
var statearr_34791_34832 = state_34767__$1;
(statearr_34791_34832[(1)] = (20));

} else {
var statearr_34792_34833 = state_34767__$1;
(statearr_34792_34833[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (11))){
var inst_34726 = (state_34767[(8)]);
var inst_34732 = (inst_34726 == null);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34732)){
var statearr_34793_34834 = state_34767__$1;
(statearr_34793_34834[(1)] = (14));

} else {
var statearr_34794_34835 = state_34767__$1;
(statearr_34794_34835[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (9))){
var inst_34719 = (state_34767[(10)]);
var inst_34719__$1 = (state_34767[(2)]);
var inst_34720 = cljs.core.get.call(null,inst_34719__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34721 = cljs.core.get.call(null,inst_34719__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34722 = cljs.core.get.call(null,inst_34719__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_34767__$1 = (function (){var statearr_34795 = state_34767;
(statearr_34795[(17)] = inst_34721);

(statearr_34795[(10)] = inst_34719__$1);

(statearr_34795[(16)] = inst_34722);

return statearr_34795;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34767__$1,(10),inst_34720);
} else {
if((state_val_34768 === (5))){
var inst_34711 = (state_34767[(7)]);
var inst_34714 = cljs.core.seq_QMARK_.call(null,inst_34711);
var state_34767__$1 = state_34767;
if(inst_34714){
var statearr_34796_34836 = state_34767__$1;
(statearr_34796_34836[(1)] = (7));

} else {
var statearr_34797_34837 = state_34767__$1;
(statearr_34797_34837[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (14))){
var inst_34727 = (state_34767[(15)]);
var inst_34734 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34727);
var state_34767__$1 = state_34767;
var statearr_34798_34838 = state_34767__$1;
(statearr_34798_34838[(2)] = inst_34734);

(statearr_34798_34838[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (26))){
var inst_34757 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34799_34839 = state_34767__$1;
(statearr_34799_34839[(2)] = inst_34757);

(statearr_34799_34839[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (16))){
var inst_34737 = (state_34767[(2)]);
var inst_34738 = calc_state.call(null);
var inst_34711 = inst_34738;
var state_34767__$1 = (function (){var statearr_34800 = state_34767;
(statearr_34800[(7)] = inst_34711);

(statearr_34800[(18)] = inst_34737);

return statearr_34800;
})();
var statearr_34801_34840 = state_34767__$1;
(statearr_34801_34840[(2)] = null);

(statearr_34801_34840[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (10))){
var inst_34727 = (state_34767[(15)]);
var inst_34726 = (state_34767[(8)]);
var inst_34725 = (state_34767[(2)]);
var inst_34726__$1 = cljs.core.nth.call(null,inst_34725,(0),null);
var inst_34727__$1 = cljs.core.nth.call(null,inst_34725,(1),null);
var inst_34728 = (inst_34726__$1 == null);
var inst_34729 = cljs.core._EQ_.call(null,inst_34727__$1,change);
var inst_34730 = (inst_34728) || (inst_34729);
var state_34767__$1 = (function (){var statearr_34802 = state_34767;
(statearr_34802[(15)] = inst_34727__$1);

(statearr_34802[(8)] = inst_34726__$1);

return statearr_34802;
})();
if(cljs.core.truth_(inst_34730)){
var statearr_34803_34841 = state_34767__$1;
(statearr_34803_34841[(1)] = (11));

} else {
var statearr_34804_34842 = state_34767__$1;
(statearr_34804_34842[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (18))){
var inst_34727 = (state_34767[(15)]);
var inst_34721 = (state_34767[(17)]);
var inst_34722 = (state_34767[(16)]);
var inst_34744 = cljs.core.empty_QMARK_.call(null,inst_34722);
var inst_34745 = inst_34721.call(null,inst_34727);
var inst_34746 = cljs.core.not.call(null,inst_34745);
var inst_34747 = (inst_34744) && (inst_34746);
var state_34767__$1 = state_34767;
var statearr_34805_34843 = state_34767__$1;
(statearr_34805_34843[(2)] = inst_34747);

(statearr_34805_34843[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (8))){
var inst_34711 = (state_34767[(7)]);
var state_34767__$1 = state_34767;
var statearr_34806_34844 = state_34767__$1;
(statearr_34806_34844[(2)] = inst_34711);

(statearr_34806_34844[(1)] = (9));


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
});})(c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28066__auto__,c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28067__auto__ = null;
var cljs$core$async$mix_$_state_machine__28067__auto____0 = (function (){
var statearr_34810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34810[(0)] = cljs$core$async$mix_$_state_machine__28067__auto__);

(statearr_34810[(1)] = (1));

return statearr_34810;
});
var cljs$core$async$mix_$_state_machine__28067__auto____1 = (function (state_34767){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_34767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e34811){if((e34811 instanceof Object)){
var ex__28070__auto__ = e34811;
var statearr_34812_34845 = state_34767;
(statearr_34812_34845[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34846 = state_34767;
state_34767 = G__34846;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28067__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28067__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28067__auto____0;
cljs$core$async$mix_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28067__auto____1;
return cljs$core$async$mix_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28124__auto__ = (function (){var statearr_34813 = f__28123__auto__.call(null);
(statearr_34813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___34814);

return statearr_34813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___34814,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj34848 = {};
return obj34848;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__25094__auto__ = p;
if(and__25094__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__25094__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25750__auto__ = (((p == null))?null:p);
return (function (){var or__25106__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__25094__auto__ = p;
if(and__25094__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25750__auto__ = (((p == null))?null:p);
return (function (){var or__25106__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__25094__auto__ = p;
if(and__25094__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25750__auto__ = (((p == null))?null:p);
return (function (){var or__25106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__25094__auto__ = p;
if(and__25094__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25750__auto__ = (((p == null))?null:p);
return (function (){var or__25106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25106__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25106__auto__,mults){
return (function (p1__34849_SHARP_){
if(cljs.core.truth_(p1__34849_SHARP_.call(null,topic))){
return p1__34849_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34849_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25106__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t34972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t34972 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34973){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34973 = meta34973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34972.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t34972.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t34972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34974){
var self__ = this;
var _34974__$1 = this;
return self__.meta34973;
});})(mults,ensure_mult))
;

cljs.core.async.t34972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34974,meta34973__$1){
var self__ = this;
var _34974__$1 = this;
return (new cljs.core.async.t34972(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34973__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t34972.cljs$lang$type = true;

cljs.core.async.t34972.cljs$lang$ctorStr = "cljs.core.async/t34972";

cljs.core.async.t34972.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t34972");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t34972 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t34972(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34973){
return (new cljs.core.async.t34972(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34973));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t34972(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28122__auto___35094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35094,mults,ensure_mult,p){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35094,mults,ensure_mult,p){
return (function (state_35046){
var state_val_35047 = (state_35046[(1)]);
if((state_val_35047 === (7))){
var inst_35042 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35048_35095 = state_35046__$1;
(statearr_35048_35095[(2)] = inst_35042);

(statearr_35048_35095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (20))){
var state_35046__$1 = state_35046;
var statearr_35049_35096 = state_35046__$1;
(statearr_35049_35096[(2)] = null);

(statearr_35049_35096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (1))){
var state_35046__$1 = state_35046;
var statearr_35050_35097 = state_35046__$1;
(statearr_35050_35097[(2)] = null);

(statearr_35050_35097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (24))){
var inst_35025 = (state_35046[(7)]);
var inst_35034 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35025);
var state_35046__$1 = state_35046;
var statearr_35051_35098 = state_35046__$1;
(statearr_35051_35098[(2)] = inst_35034);

(statearr_35051_35098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (4))){
var inst_34977 = (state_35046[(8)]);
var inst_34977__$1 = (state_35046[(2)]);
var inst_34978 = (inst_34977__$1 == null);
var state_35046__$1 = (function (){var statearr_35052 = state_35046;
(statearr_35052[(8)] = inst_34977__$1);

return statearr_35052;
})();
if(cljs.core.truth_(inst_34978)){
var statearr_35053_35099 = state_35046__$1;
(statearr_35053_35099[(1)] = (5));

} else {
var statearr_35054_35100 = state_35046__$1;
(statearr_35054_35100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (15))){
var inst_35019 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35055_35101 = state_35046__$1;
(statearr_35055_35101[(2)] = inst_35019);

(statearr_35055_35101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (21))){
var inst_35039 = (state_35046[(2)]);
var state_35046__$1 = (function (){var statearr_35056 = state_35046;
(statearr_35056[(9)] = inst_35039);

return statearr_35056;
})();
var statearr_35057_35102 = state_35046__$1;
(statearr_35057_35102[(2)] = null);

(statearr_35057_35102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (13))){
var inst_35001 = (state_35046[(10)]);
var inst_35003 = cljs.core.chunked_seq_QMARK_.call(null,inst_35001);
var state_35046__$1 = state_35046;
if(inst_35003){
var statearr_35058_35103 = state_35046__$1;
(statearr_35058_35103[(1)] = (16));

} else {
var statearr_35059_35104 = state_35046__$1;
(statearr_35059_35104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (22))){
var inst_35031 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
if(cljs.core.truth_(inst_35031)){
var statearr_35060_35105 = state_35046__$1;
(statearr_35060_35105[(1)] = (23));

} else {
var statearr_35061_35106 = state_35046__$1;
(statearr_35061_35106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (6))){
var inst_35027 = (state_35046[(11)]);
var inst_34977 = (state_35046[(8)]);
var inst_35025 = (state_35046[(7)]);
var inst_35025__$1 = topic_fn.call(null,inst_34977);
var inst_35026 = cljs.core.deref.call(null,mults);
var inst_35027__$1 = cljs.core.get.call(null,inst_35026,inst_35025__$1);
var state_35046__$1 = (function (){var statearr_35062 = state_35046;
(statearr_35062[(11)] = inst_35027__$1);

(statearr_35062[(7)] = inst_35025__$1);

return statearr_35062;
})();
if(cljs.core.truth_(inst_35027__$1)){
var statearr_35063_35107 = state_35046__$1;
(statearr_35063_35107[(1)] = (19));

} else {
var statearr_35064_35108 = state_35046__$1;
(statearr_35064_35108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (25))){
var inst_35036 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35065_35109 = state_35046__$1;
(statearr_35065_35109[(2)] = inst_35036);

(statearr_35065_35109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (17))){
var inst_35001 = (state_35046[(10)]);
var inst_35010 = cljs.core.first.call(null,inst_35001);
var inst_35011 = cljs.core.async.muxch_STAR_.call(null,inst_35010);
var inst_35012 = cljs.core.async.close_BANG_.call(null,inst_35011);
var inst_35013 = cljs.core.next.call(null,inst_35001);
var inst_34987 = inst_35013;
var inst_34988 = null;
var inst_34989 = (0);
var inst_34990 = (0);
var state_35046__$1 = (function (){var statearr_35066 = state_35046;
(statearr_35066[(12)] = inst_34988);

(statearr_35066[(13)] = inst_34990);

(statearr_35066[(14)] = inst_34989);

(statearr_35066[(15)] = inst_35012);

(statearr_35066[(16)] = inst_34987);

return statearr_35066;
})();
var statearr_35067_35110 = state_35046__$1;
(statearr_35067_35110[(2)] = null);

(statearr_35067_35110[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (3))){
var inst_35044 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35046__$1,inst_35044);
} else {
if((state_val_35047 === (12))){
var inst_35021 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35068_35111 = state_35046__$1;
(statearr_35068_35111[(2)] = inst_35021);

(statearr_35068_35111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (2))){
var state_35046__$1 = state_35046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35046__$1,(4),ch);
} else {
if((state_val_35047 === (23))){
var state_35046__$1 = state_35046;
var statearr_35069_35112 = state_35046__$1;
(statearr_35069_35112[(2)] = null);

(statearr_35069_35112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (19))){
var inst_35027 = (state_35046[(11)]);
var inst_34977 = (state_35046[(8)]);
var inst_35029 = cljs.core.async.muxch_STAR_.call(null,inst_35027);
var state_35046__$1 = state_35046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35046__$1,(22),inst_35029,inst_34977);
} else {
if((state_val_35047 === (11))){
var inst_35001 = (state_35046[(10)]);
var inst_34987 = (state_35046[(16)]);
var inst_35001__$1 = cljs.core.seq.call(null,inst_34987);
var state_35046__$1 = (function (){var statearr_35070 = state_35046;
(statearr_35070[(10)] = inst_35001__$1);

return statearr_35070;
})();
if(inst_35001__$1){
var statearr_35071_35113 = state_35046__$1;
(statearr_35071_35113[(1)] = (13));

} else {
var statearr_35072_35114 = state_35046__$1;
(statearr_35072_35114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (9))){
var inst_35023 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35073_35115 = state_35046__$1;
(statearr_35073_35115[(2)] = inst_35023);

(statearr_35073_35115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (5))){
var inst_34984 = cljs.core.deref.call(null,mults);
var inst_34985 = cljs.core.vals.call(null,inst_34984);
var inst_34986 = cljs.core.seq.call(null,inst_34985);
var inst_34987 = inst_34986;
var inst_34988 = null;
var inst_34989 = (0);
var inst_34990 = (0);
var state_35046__$1 = (function (){var statearr_35074 = state_35046;
(statearr_35074[(12)] = inst_34988);

(statearr_35074[(13)] = inst_34990);

(statearr_35074[(14)] = inst_34989);

(statearr_35074[(16)] = inst_34987);

return statearr_35074;
})();
var statearr_35075_35116 = state_35046__$1;
(statearr_35075_35116[(2)] = null);

(statearr_35075_35116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (14))){
var state_35046__$1 = state_35046;
var statearr_35079_35117 = state_35046__$1;
(statearr_35079_35117[(2)] = null);

(statearr_35079_35117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (16))){
var inst_35001 = (state_35046[(10)]);
var inst_35005 = cljs.core.chunk_first.call(null,inst_35001);
var inst_35006 = cljs.core.chunk_rest.call(null,inst_35001);
var inst_35007 = cljs.core.count.call(null,inst_35005);
var inst_34987 = inst_35006;
var inst_34988 = inst_35005;
var inst_34989 = inst_35007;
var inst_34990 = (0);
var state_35046__$1 = (function (){var statearr_35080 = state_35046;
(statearr_35080[(12)] = inst_34988);

(statearr_35080[(13)] = inst_34990);

(statearr_35080[(14)] = inst_34989);

(statearr_35080[(16)] = inst_34987);

return statearr_35080;
})();
var statearr_35081_35118 = state_35046__$1;
(statearr_35081_35118[(2)] = null);

(statearr_35081_35118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (10))){
var inst_34988 = (state_35046[(12)]);
var inst_34990 = (state_35046[(13)]);
var inst_34989 = (state_35046[(14)]);
var inst_34987 = (state_35046[(16)]);
var inst_34995 = cljs.core._nth.call(null,inst_34988,inst_34990);
var inst_34996 = cljs.core.async.muxch_STAR_.call(null,inst_34995);
var inst_34997 = cljs.core.async.close_BANG_.call(null,inst_34996);
var inst_34998 = (inst_34990 + (1));
var tmp35076 = inst_34988;
var tmp35077 = inst_34989;
var tmp35078 = inst_34987;
var inst_34987__$1 = tmp35078;
var inst_34988__$1 = tmp35076;
var inst_34989__$1 = tmp35077;
var inst_34990__$1 = inst_34998;
var state_35046__$1 = (function (){var statearr_35082 = state_35046;
(statearr_35082[(17)] = inst_34997);

(statearr_35082[(12)] = inst_34988__$1);

(statearr_35082[(13)] = inst_34990__$1);

(statearr_35082[(14)] = inst_34989__$1);

(statearr_35082[(16)] = inst_34987__$1);

return statearr_35082;
})();
var statearr_35083_35119 = state_35046__$1;
(statearr_35083_35119[(2)] = null);

(statearr_35083_35119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (18))){
var inst_35016 = (state_35046[(2)]);
var state_35046__$1 = state_35046;
var statearr_35084_35120 = state_35046__$1;
(statearr_35084_35120[(2)] = inst_35016);

(statearr_35084_35120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35047 === (8))){
var inst_34990 = (state_35046[(13)]);
var inst_34989 = (state_35046[(14)]);
var inst_34992 = (inst_34990 < inst_34989);
var inst_34993 = inst_34992;
var state_35046__$1 = state_35046;
if(cljs.core.truth_(inst_34993)){
var statearr_35085_35121 = state_35046__$1;
(statearr_35085_35121[(1)] = (10));

} else {
var statearr_35086_35122 = state_35046__$1;
(statearr_35086_35122[(1)] = (11));

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
});})(c__28122__auto___35094,mults,ensure_mult,p))
;
return ((function (switch__28066__auto__,c__28122__auto___35094,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__28067__auto__ = null;
var cljs$core$async$pub_$_state_machine__28067__auto____0 = (function (){
var statearr_35090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35090[(0)] = cljs$core$async$pub_$_state_machine__28067__auto__);

(statearr_35090[(1)] = (1));

return statearr_35090;
});
var cljs$core$async$pub_$_state_machine__28067__auto____1 = (function (state_35046){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35091){if((e35091 instanceof Object)){
var ex__28070__auto__ = e35091;
var statearr_35092_35123 = state_35046;
(statearr_35092_35123[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35124 = state_35046;
state_35046 = G__35124;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__28067__auto__ = function(state_35046){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__28067__auto____1.call(this,state_35046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__28067__auto____0;
cljs$core$async$pub_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__28067__auto____1;
return cljs$core$async$pub_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35094,mults,ensure_mult,p))
})();
var state__28124__auto__ = (function (){var statearr_35093 = f__28123__auto__.call(null);
(statearr_35093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35094);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35094,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28122__auto___35261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35231){
var state_val_35232 = (state_35231[(1)]);
if((state_val_35232 === (7))){
var state_35231__$1 = state_35231;
var statearr_35233_35262 = state_35231__$1;
(statearr_35233_35262[(2)] = null);

(statearr_35233_35262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (1))){
var state_35231__$1 = state_35231;
var statearr_35234_35263 = state_35231__$1;
(statearr_35234_35263[(2)] = null);

(statearr_35234_35263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (4))){
var inst_35195 = (state_35231[(7)]);
var inst_35197 = (inst_35195 < cnt);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35197)){
var statearr_35235_35264 = state_35231__$1;
(statearr_35235_35264[(1)] = (6));

} else {
var statearr_35236_35265 = state_35231__$1;
(statearr_35236_35265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (15))){
var inst_35227 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35237_35266 = state_35231__$1;
(statearr_35237_35266[(2)] = inst_35227);

(statearr_35237_35266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (13))){
var inst_35220 = cljs.core.async.close_BANG_.call(null,out);
var state_35231__$1 = state_35231;
var statearr_35238_35267 = state_35231__$1;
(statearr_35238_35267[(2)] = inst_35220);

(statearr_35238_35267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (6))){
var state_35231__$1 = state_35231;
var statearr_35239_35268 = state_35231__$1;
(statearr_35239_35268[(2)] = null);

(statearr_35239_35268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (3))){
var inst_35229 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35231__$1,inst_35229);
} else {
if((state_val_35232 === (12))){
var inst_35217 = (state_35231[(8)]);
var inst_35217__$1 = (state_35231[(2)]);
var inst_35218 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35217__$1);
var state_35231__$1 = (function (){var statearr_35240 = state_35231;
(statearr_35240[(8)] = inst_35217__$1);

return statearr_35240;
})();
if(cljs.core.truth_(inst_35218)){
var statearr_35241_35269 = state_35231__$1;
(statearr_35241_35269[(1)] = (13));

} else {
var statearr_35242_35270 = state_35231__$1;
(statearr_35242_35270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (2))){
var inst_35194 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35195 = (0);
var state_35231__$1 = (function (){var statearr_35243 = state_35231;
(statearr_35243[(7)] = inst_35195);

(statearr_35243[(9)] = inst_35194);

return statearr_35243;
})();
var statearr_35244_35271 = state_35231__$1;
(statearr_35244_35271[(2)] = null);

(statearr_35244_35271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (11))){
var inst_35195 = (state_35231[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35231,(10),Object,null,(9));
var inst_35204 = chs__$1.call(null,inst_35195);
var inst_35205 = done.call(null,inst_35195);
var inst_35206 = cljs.core.async.take_BANG_.call(null,inst_35204,inst_35205);
var state_35231__$1 = state_35231;
var statearr_35245_35272 = state_35231__$1;
(statearr_35245_35272[(2)] = inst_35206);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (9))){
var inst_35195 = (state_35231[(7)]);
var inst_35208 = (state_35231[(2)]);
var inst_35209 = (inst_35195 + (1));
var inst_35195__$1 = inst_35209;
var state_35231__$1 = (function (){var statearr_35246 = state_35231;
(statearr_35246[(10)] = inst_35208);

(statearr_35246[(7)] = inst_35195__$1);

return statearr_35246;
})();
var statearr_35247_35273 = state_35231__$1;
(statearr_35247_35273[(2)] = null);

(statearr_35247_35273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (5))){
var inst_35215 = (state_35231[(2)]);
var state_35231__$1 = (function (){var statearr_35248 = state_35231;
(statearr_35248[(11)] = inst_35215);

return statearr_35248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35231__$1,(12),dchan);
} else {
if((state_val_35232 === (14))){
var inst_35217 = (state_35231[(8)]);
var inst_35222 = cljs.core.apply.call(null,f,inst_35217);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35231__$1,(16),out,inst_35222);
} else {
if((state_val_35232 === (16))){
var inst_35224 = (state_35231[(2)]);
var state_35231__$1 = (function (){var statearr_35249 = state_35231;
(statearr_35249[(12)] = inst_35224);

return statearr_35249;
})();
var statearr_35250_35274 = state_35231__$1;
(statearr_35250_35274[(2)] = null);

(statearr_35250_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (10))){
var inst_35199 = (state_35231[(2)]);
var inst_35200 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35231__$1 = (function (){var statearr_35251 = state_35231;
(statearr_35251[(13)] = inst_35199);

return statearr_35251;
})();
var statearr_35252_35275 = state_35231__$1;
(statearr_35252_35275[(2)] = inst_35200);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35231__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (8))){
var inst_35213 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35253_35276 = state_35231__$1;
(statearr_35253_35276[(2)] = inst_35213);

(statearr_35253_35276[(1)] = (5));


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
});})(c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28066__auto__,c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__28067__auto__ = null;
var cljs$core$async$map_$_state_machine__28067__auto____0 = (function (){
var statearr_35257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35257[(0)] = cljs$core$async$map_$_state_machine__28067__auto__);

(statearr_35257[(1)] = (1));

return statearr_35257;
});
var cljs$core$async$map_$_state_machine__28067__auto____1 = (function (state_35231){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35258){if((e35258 instanceof Object)){
var ex__28070__auto__ = e35258;
var statearr_35259_35277 = state_35231;
(statearr_35259_35277[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35278 = state_35231;
state_35231 = G__35278;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__28067__auto__ = function(state_35231){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__28067__auto____1.call(this,state_35231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__28067__auto____0;
cljs$core$async$map_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__28067__auto____1;
return cljs$core$async$map_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28124__auto__ = (function (){var statearr_35260 = f__28123__auto__.call(null);
(statearr_35260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35261);

return statearr_35260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35261,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___35386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35386,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35386,out){
return (function (state_35362){
var state_val_35363 = (state_35362[(1)]);
if((state_val_35363 === (7))){
var inst_35342 = (state_35362[(7)]);
var inst_35341 = (state_35362[(8)]);
var inst_35341__$1 = (state_35362[(2)]);
var inst_35342__$1 = cljs.core.nth.call(null,inst_35341__$1,(0),null);
var inst_35343 = cljs.core.nth.call(null,inst_35341__$1,(1),null);
var inst_35344 = (inst_35342__$1 == null);
var state_35362__$1 = (function (){var statearr_35364 = state_35362;
(statearr_35364[(9)] = inst_35343);

(statearr_35364[(7)] = inst_35342__$1);

(statearr_35364[(8)] = inst_35341__$1);

return statearr_35364;
})();
if(cljs.core.truth_(inst_35344)){
var statearr_35365_35387 = state_35362__$1;
(statearr_35365_35387[(1)] = (8));

} else {
var statearr_35366_35388 = state_35362__$1;
(statearr_35366_35388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (1))){
var inst_35333 = cljs.core.vec.call(null,chs);
var inst_35334 = inst_35333;
var state_35362__$1 = (function (){var statearr_35367 = state_35362;
(statearr_35367[(10)] = inst_35334);

return statearr_35367;
})();
var statearr_35368_35389 = state_35362__$1;
(statearr_35368_35389[(2)] = null);

(statearr_35368_35389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (4))){
var inst_35334 = (state_35362[(10)]);
var state_35362__$1 = state_35362;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35362__$1,(7),inst_35334);
} else {
if((state_val_35363 === (6))){
var inst_35358 = (state_35362[(2)]);
var state_35362__$1 = state_35362;
var statearr_35369_35390 = state_35362__$1;
(statearr_35369_35390[(2)] = inst_35358);

(statearr_35369_35390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (3))){
var inst_35360 = (state_35362[(2)]);
var state_35362__$1 = state_35362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35362__$1,inst_35360);
} else {
if((state_val_35363 === (2))){
var inst_35334 = (state_35362[(10)]);
var inst_35336 = cljs.core.count.call(null,inst_35334);
var inst_35337 = (inst_35336 > (0));
var state_35362__$1 = state_35362;
if(cljs.core.truth_(inst_35337)){
var statearr_35371_35391 = state_35362__$1;
(statearr_35371_35391[(1)] = (4));

} else {
var statearr_35372_35392 = state_35362__$1;
(statearr_35372_35392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (11))){
var inst_35334 = (state_35362[(10)]);
var inst_35351 = (state_35362[(2)]);
var tmp35370 = inst_35334;
var inst_35334__$1 = tmp35370;
var state_35362__$1 = (function (){var statearr_35373 = state_35362;
(statearr_35373[(10)] = inst_35334__$1);

(statearr_35373[(11)] = inst_35351);

return statearr_35373;
})();
var statearr_35374_35393 = state_35362__$1;
(statearr_35374_35393[(2)] = null);

(statearr_35374_35393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (9))){
var inst_35342 = (state_35362[(7)]);
var state_35362__$1 = state_35362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35362__$1,(11),out,inst_35342);
} else {
if((state_val_35363 === (5))){
var inst_35356 = cljs.core.async.close_BANG_.call(null,out);
var state_35362__$1 = state_35362;
var statearr_35375_35394 = state_35362__$1;
(statearr_35375_35394[(2)] = inst_35356);

(statearr_35375_35394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (10))){
var inst_35354 = (state_35362[(2)]);
var state_35362__$1 = state_35362;
var statearr_35376_35395 = state_35362__$1;
(statearr_35376_35395[(2)] = inst_35354);

(statearr_35376_35395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35363 === (8))){
var inst_35343 = (state_35362[(9)]);
var inst_35342 = (state_35362[(7)]);
var inst_35341 = (state_35362[(8)]);
var inst_35334 = (state_35362[(10)]);
var inst_35346 = (function (){var c = inst_35343;
var v = inst_35342;
var vec__35339 = inst_35341;
var cs = inst_35334;
return ((function (c,v,vec__35339,cs,inst_35343,inst_35342,inst_35341,inst_35334,state_val_35363,c__28122__auto___35386,out){
return (function (p1__35279_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35279_SHARP_);
});
;})(c,v,vec__35339,cs,inst_35343,inst_35342,inst_35341,inst_35334,state_val_35363,c__28122__auto___35386,out))
})();
var inst_35347 = cljs.core.filterv.call(null,inst_35346,inst_35334);
var inst_35334__$1 = inst_35347;
var state_35362__$1 = (function (){var statearr_35377 = state_35362;
(statearr_35377[(10)] = inst_35334__$1);

return statearr_35377;
})();
var statearr_35378_35396 = state_35362__$1;
(statearr_35378_35396[(2)] = null);

(statearr_35378_35396[(1)] = (2));


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
});})(c__28122__auto___35386,out))
;
return ((function (switch__28066__auto__,c__28122__auto___35386,out){
return (function() {
var cljs$core$async$merge_$_state_machine__28067__auto__ = null;
var cljs$core$async$merge_$_state_machine__28067__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = cljs$core$async$merge_$_state_machine__28067__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var cljs$core$async$merge_$_state_machine__28067__auto____1 = (function (state_35362){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__28070__auto__ = e35383;
var statearr_35384_35397 = state_35362;
(statearr_35384_35397[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35398 = state_35362;
state_35362 = G__35398;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__28067__auto__ = function(state_35362){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__28067__auto____1.call(this,state_35362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__28067__auto____0;
cljs$core$async$merge_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__28067__auto____1;
return cljs$core$async$merge_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35386,out))
})();
var state__28124__auto__ = (function (){var statearr_35385 = f__28123__auto__.call(null);
(statearr_35385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35386);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35386,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___35491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35491,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35491,out){
return (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (7))){
var inst_35450 = (state_35468[(7)]);
var inst_35450__$1 = (state_35468[(2)]);
var inst_35451 = (inst_35450__$1 == null);
var inst_35452 = cljs.core.not.call(null,inst_35451);
var state_35468__$1 = (function (){var statearr_35470 = state_35468;
(statearr_35470[(7)] = inst_35450__$1);

return statearr_35470;
})();
if(inst_35452){
var statearr_35471_35492 = state_35468__$1;
(statearr_35471_35492[(1)] = (8));

} else {
var statearr_35472_35493 = state_35468__$1;
(statearr_35472_35493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (1))){
var inst_35445 = (0);
var state_35468__$1 = (function (){var statearr_35473 = state_35468;
(statearr_35473[(8)] = inst_35445);

return statearr_35473;
})();
var statearr_35474_35494 = state_35468__$1;
(statearr_35474_35494[(2)] = null);

(statearr_35474_35494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (4))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(7),ch);
} else {
if((state_val_35469 === (6))){
var inst_35463 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35475_35495 = state_35468__$1;
(statearr_35475_35495[(2)] = inst_35463);

(statearr_35475_35495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (3))){
var inst_35465 = (state_35468[(2)]);
var inst_35466 = cljs.core.async.close_BANG_.call(null,out);
var state_35468__$1 = (function (){var statearr_35476 = state_35468;
(statearr_35476[(9)] = inst_35465);

return statearr_35476;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35468__$1,inst_35466);
} else {
if((state_val_35469 === (2))){
var inst_35445 = (state_35468[(8)]);
var inst_35447 = (inst_35445 < n);
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35447)){
var statearr_35477_35496 = state_35468__$1;
(statearr_35477_35496[(1)] = (4));

} else {
var statearr_35478_35497 = state_35468__$1;
(statearr_35478_35497[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (11))){
var inst_35445 = (state_35468[(8)]);
var inst_35455 = (state_35468[(2)]);
var inst_35456 = (inst_35445 + (1));
var inst_35445__$1 = inst_35456;
var state_35468__$1 = (function (){var statearr_35479 = state_35468;
(statearr_35479[(8)] = inst_35445__$1);

(statearr_35479[(10)] = inst_35455);

return statearr_35479;
})();
var statearr_35480_35498 = state_35468__$1;
(statearr_35480_35498[(2)] = null);

(statearr_35480_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (9))){
var state_35468__$1 = state_35468;
var statearr_35481_35499 = state_35468__$1;
(statearr_35481_35499[(2)] = null);

(statearr_35481_35499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (5))){
var state_35468__$1 = state_35468;
var statearr_35482_35500 = state_35468__$1;
(statearr_35482_35500[(2)] = null);

(statearr_35482_35500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (10))){
var inst_35460 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35483_35501 = state_35468__$1;
(statearr_35483_35501[(2)] = inst_35460);

(statearr_35483_35501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (8))){
var inst_35450 = (state_35468[(7)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35468__$1,(11),out,inst_35450);
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
});})(c__28122__auto___35491,out))
;
return ((function (switch__28066__auto__,c__28122__auto___35491,out){
return (function() {
var cljs$core$async$take_$_state_machine__28067__auto__ = null;
var cljs$core$async$take_$_state_machine__28067__auto____0 = (function (){
var statearr_35487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35487[(0)] = cljs$core$async$take_$_state_machine__28067__auto__);

(statearr_35487[(1)] = (1));

return statearr_35487;
});
var cljs$core$async$take_$_state_machine__28067__auto____1 = (function (state_35468){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35488){if((e35488 instanceof Object)){
var ex__28070__auto__ = e35488;
var statearr_35489_35502 = state_35468;
(statearr_35489_35502[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35503 = state_35468;
state_35468 = G__35503;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__28067__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__28067__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__28067__auto____0;
cljs$core$async$take_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__28067__auto____1;
return cljs$core$async$take_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35491,out))
})();
var state__28124__auto__ = (function (){var statearr_35490 = f__28123__auto__.call(null);
(statearr_35490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35491);

return statearr_35490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35491,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t35511 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35511 = (function (ch,f,map_LT_,meta35512){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35512 = meta35512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t35514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35514 = (function (fn1,_,meta35512,map_LT_,f,ch,meta35515){
this.fn1 = fn1;
this._ = _;
this.meta35512 = meta35512;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35515 = meta35515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35514.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t35514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35504_SHARP_){
return f1.call(null,(((p1__35504_SHARP_ == null))?null:self__.f.call(null,p1__35504_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t35514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35516){
var self__ = this;
var _35516__$1 = this;
return self__.meta35515;
});})(___$1))
;

cljs.core.async.t35514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35516,meta35515__$1){
var self__ = this;
var _35516__$1 = this;
return (new cljs.core.async.t35514(self__.fn1,self__._,self__.meta35512,self__.map_LT_,self__.f,self__.ch,meta35515__$1));
});})(___$1))
;

cljs.core.async.t35514.cljs$lang$type = true;

cljs.core.async.t35514.cljs$lang$ctorStr = "cljs.core.async/t35514";

cljs.core.async.t35514.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t35514");
});})(___$1))
;

cljs.core.async.__GT_t35514 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t35514(fn1__$1,___$2,meta35512__$1,map_LT___$1,f__$1,ch__$1,meta35515){
return (new cljs.core.async.t35514(fn1__$1,___$2,meta35512__$1,map_LT___$1,f__$1,ch__$1,meta35515));
});})(___$1))
;

}

return (new cljs.core.async.t35514(fn1,___$1,self__.meta35512,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25094__auto__ = ret;
if(cljs.core.truth_(and__25094__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25094__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35513){
var self__ = this;
var _35513__$1 = this;
return self__.meta35512;
});

cljs.core.async.t35511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35513,meta35512__$1){
var self__ = this;
var _35513__$1 = this;
return (new cljs.core.async.t35511(self__.ch,self__.f,self__.map_LT_,meta35512__$1));
});

cljs.core.async.t35511.cljs$lang$type = true;

cljs.core.async.t35511.cljs$lang$ctorStr = "cljs.core.async/t35511";

cljs.core.async.t35511.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t35511");
});

cljs.core.async.__GT_t35511 = (function cljs$core$async$map_LT__$___GT_t35511(ch__$1,f__$1,map_LT___$1,meta35512){
return (new cljs.core.async.t35511(ch__$1,f__$1,map_LT___$1,meta35512));
});

}

return (new cljs.core.async.t35511(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t35520 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35520 = (function (ch,f,map_GT_,meta35521){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35521 = meta35521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35522){
var self__ = this;
var _35522__$1 = this;
return self__.meta35521;
});

cljs.core.async.t35520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35522,meta35521__$1){
var self__ = this;
var _35522__$1 = this;
return (new cljs.core.async.t35520(self__.ch,self__.f,self__.map_GT_,meta35521__$1));
});

cljs.core.async.t35520.cljs$lang$type = true;

cljs.core.async.t35520.cljs$lang$ctorStr = "cljs.core.async/t35520";

cljs.core.async.t35520.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t35520");
});

cljs.core.async.__GT_t35520 = (function cljs$core$async$map_GT__$___GT_t35520(ch__$1,f__$1,map_GT___$1,meta35521){
return (new cljs.core.async.t35520(ch__$1,f__$1,map_GT___$1,meta35521));
});

}

return (new cljs.core.async.t35520(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t35526 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35526 = (function (ch,p,filter_GT_,meta35527){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35527 = meta35527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t35526.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t35526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35528){
var self__ = this;
var _35528__$1 = this;
return self__.meta35527;
});

cljs.core.async.t35526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35528,meta35527__$1){
var self__ = this;
var _35528__$1 = this;
return (new cljs.core.async.t35526(self__.ch,self__.p,self__.filter_GT_,meta35527__$1));
});

cljs.core.async.t35526.cljs$lang$type = true;

cljs.core.async.t35526.cljs$lang$ctorStr = "cljs.core.async/t35526";

cljs.core.async.t35526.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"cljs.core.async/t35526");
});

cljs.core.async.__GT_t35526 = (function cljs$core$async$filter_GT__$___GT_t35526(ch__$1,p__$1,filter_GT___$1,meta35527){
return (new cljs.core.async.t35526(ch__$1,p__$1,filter_GT___$1,meta35527));
});

}

return (new cljs.core.async.t35526(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___35611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35611,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35611,out){
return (function (state_35590){
var state_val_35591 = (state_35590[(1)]);
if((state_val_35591 === (7))){
var inst_35586 = (state_35590[(2)]);
var state_35590__$1 = state_35590;
var statearr_35592_35612 = state_35590__$1;
(statearr_35592_35612[(2)] = inst_35586);

(statearr_35592_35612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (1))){
var state_35590__$1 = state_35590;
var statearr_35593_35613 = state_35590__$1;
(statearr_35593_35613[(2)] = null);

(statearr_35593_35613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (4))){
var inst_35572 = (state_35590[(7)]);
var inst_35572__$1 = (state_35590[(2)]);
var inst_35573 = (inst_35572__$1 == null);
var state_35590__$1 = (function (){var statearr_35594 = state_35590;
(statearr_35594[(7)] = inst_35572__$1);

return statearr_35594;
})();
if(cljs.core.truth_(inst_35573)){
var statearr_35595_35614 = state_35590__$1;
(statearr_35595_35614[(1)] = (5));

} else {
var statearr_35596_35615 = state_35590__$1;
(statearr_35596_35615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (6))){
var inst_35572 = (state_35590[(7)]);
var inst_35577 = p.call(null,inst_35572);
var state_35590__$1 = state_35590;
if(cljs.core.truth_(inst_35577)){
var statearr_35597_35616 = state_35590__$1;
(statearr_35597_35616[(1)] = (8));

} else {
var statearr_35598_35617 = state_35590__$1;
(statearr_35598_35617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (3))){
var inst_35588 = (state_35590[(2)]);
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35590__$1,inst_35588);
} else {
if((state_val_35591 === (2))){
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35590__$1,(4),ch);
} else {
if((state_val_35591 === (11))){
var inst_35580 = (state_35590[(2)]);
var state_35590__$1 = state_35590;
var statearr_35599_35618 = state_35590__$1;
(statearr_35599_35618[(2)] = inst_35580);

(statearr_35599_35618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (9))){
var state_35590__$1 = state_35590;
var statearr_35600_35619 = state_35590__$1;
(statearr_35600_35619[(2)] = null);

(statearr_35600_35619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (5))){
var inst_35575 = cljs.core.async.close_BANG_.call(null,out);
var state_35590__$1 = state_35590;
var statearr_35601_35620 = state_35590__$1;
(statearr_35601_35620[(2)] = inst_35575);

(statearr_35601_35620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (10))){
var inst_35583 = (state_35590[(2)]);
var state_35590__$1 = (function (){var statearr_35602 = state_35590;
(statearr_35602[(8)] = inst_35583);

return statearr_35602;
})();
var statearr_35603_35621 = state_35590__$1;
(statearr_35603_35621[(2)] = null);

(statearr_35603_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35591 === (8))){
var inst_35572 = (state_35590[(7)]);
var state_35590__$1 = state_35590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35590__$1,(11),out,inst_35572);
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
});})(c__28122__auto___35611,out))
;
return ((function (switch__28066__auto__,c__28122__auto___35611,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__28067__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__28067__auto____0 = (function (){
var statearr_35607 = [null,null,null,null,null,null,null,null,null];
(statearr_35607[(0)] = cljs$core$async$filter_LT__$_state_machine__28067__auto__);

(statearr_35607[(1)] = (1));

return statearr_35607;
});
var cljs$core$async$filter_LT__$_state_machine__28067__auto____1 = (function (state_35590){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35608){if((e35608 instanceof Object)){
var ex__28070__auto__ = e35608;
var statearr_35609_35622 = state_35590;
(statearr_35609_35622[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35623 = state_35590;
state_35590 = G__35623;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__28067__auto__ = function(state_35590){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__28067__auto____1.call(this,state_35590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__28067__auto____0;
cljs$core$async$filter_LT__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__28067__auto____1;
return cljs$core$async$filter_LT__$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35611,out))
})();
var state__28124__auto__ = (function (){var statearr_35610 = f__28123__auto__.call(null);
(statearr_35610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35611);

return statearr_35610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35611,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_35789){
var state_val_35790 = (state_35789[(1)]);
if((state_val_35790 === (7))){
var inst_35785 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35791_35832 = state_35789__$1;
(statearr_35791_35832[(2)] = inst_35785);

(statearr_35791_35832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (20))){
var inst_35755 = (state_35789[(7)]);
var inst_35766 = (state_35789[(2)]);
var inst_35767 = cljs.core.next.call(null,inst_35755);
var inst_35741 = inst_35767;
var inst_35742 = null;
var inst_35743 = (0);
var inst_35744 = (0);
var state_35789__$1 = (function (){var statearr_35792 = state_35789;
(statearr_35792[(8)] = inst_35743);

(statearr_35792[(9)] = inst_35742);

(statearr_35792[(10)] = inst_35744);

(statearr_35792[(11)] = inst_35766);

(statearr_35792[(12)] = inst_35741);

return statearr_35792;
})();
var statearr_35793_35833 = state_35789__$1;
(statearr_35793_35833[(2)] = null);

(statearr_35793_35833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (1))){
var state_35789__$1 = state_35789;
var statearr_35794_35834 = state_35789__$1;
(statearr_35794_35834[(2)] = null);

(statearr_35794_35834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (4))){
var inst_35730 = (state_35789[(13)]);
var inst_35730__$1 = (state_35789[(2)]);
var inst_35731 = (inst_35730__$1 == null);
var state_35789__$1 = (function (){var statearr_35795 = state_35789;
(statearr_35795[(13)] = inst_35730__$1);

return statearr_35795;
})();
if(cljs.core.truth_(inst_35731)){
var statearr_35796_35835 = state_35789__$1;
(statearr_35796_35835[(1)] = (5));

} else {
var statearr_35797_35836 = state_35789__$1;
(statearr_35797_35836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (15))){
var state_35789__$1 = state_35789;
var statearr_35801_35837 = state_35789__$1;
(statearr_35801_35837[(2)] = null);

(statearr_35801_35837[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (21))){
var state_35789__$1 = state_35789;
var statearr_35802_35838 = state_35789__$1;
(statearr_35802_35838[(2)] = null);

(statearr_35802_35838[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (13))){
var inst_35743 = (state_35789[(8)]);
var inst_35742 = (state_35789[(9)]);
var inst_35744 = (state_35789[(10)]);
var inst_35741 = (state_35789[(12)]);
var inst_35751 = (state_35789[(2)]);
var inst_35752 = (inst_35744 + (1));
var tmp35798 = inst_35743;
var tmp35799 = inst_35742;
var tmp35800 = inst_35741;
var inst_35741__$1 = tmp35800;
var inst_35742__$1 = tmp35799;
var inst_35743__$1 = tmp35798;
var inst_35744__$1 = inst_35752;
var state_35789__$1 = (function (){var statearr_35803 = state_35789;
(statearr_35803[(8)] = inst_35743__$1);

(statearr_35803[(9)] = inst_35742__$1);

(statearr_35803[(10)] = inst_35744__$1);

(statearr_35803[(14)] = inst_35751);

(statearr_35803[(12)] = inst_35741__$1);

return statearr_35803;
})();
var statearr_35804_35839 = state_35789__$1;
(statearr_35804_35839[(2)] = null);

(statearr_35804_35839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (22))){
var state_35789__$1 = state_35789;
var statearr_35805_35840 = state_35789__$1;
(statearr_35805_35840[(2)] = null);

(statearr_35805_35840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (6))){
var inst_35730 = (state_35789[(13)]);
var inst_35739 = f.call(null,inst_35730);
var inst_35740 = cljs.core.seq.call(null,inst_35739);
var inst_35741 = inst_35740;
var inst_35742 = null;
var inst_35743 = (0);
var inst_35744 = (0);
var state_35789__$1 = (function (){var statearr_35806 = state_35789;
(statearr_35806[(8)] = inst_35743);

(statearr_35806[(9)] = inst_35742);

(statearr_35806[(10)] = inst_35744);

(statearr_35806[(12)] = inst_35741);

return statearr_35806;
})();
var statearr_35807_35841 = state_35789__$1;
(statearr_35807_35841[(2)] = null);

(statearr_35807_35841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (17))){
var inst_35755 = (state_35789[(7)]);
var inst_35759 = cljs.core.chunk_first.call(null,inst_35755);
var inst_35760 = cljs.core.chunk_rest.call(null,inst_35755);
var inst_35761 = cljs.core.count.call(null,inst_35759);
var inst_35741 = inst_35760;
var inst_35742 = inst_35759;
var inst_35743 = inst_35761;
var inst_35744 = (0);
var state_35789__$1 = (function (){var statearr_35808 = state_35789;
(statearr_35808[(8)] = inst_35743);

(statearr_35808[(9)] = inst_35742);

(statearr_35808[(10)] = inst_35744);

(statearr_35808[(12)] = inst_35741);

return statearr_35808;
})();
var statearr_35809_35842 = state_35789__$1;
(statearr_35809_35842[(2)] = null);

(statearr_35809_35842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (3))){
var inst_35787 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35789__$1,inst_35787);
} else {
if((state_val_35790 === (12))){
var inst_35775 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35810_35843 = state_35789__$1;
(statearr_35810_35843[(2)] = inst_35775);

(statearr_35810_35843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (2))){
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35789__$1,(4),in$);
} else {
if((state_val_35790 === (23))){
var inst_35783 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35811_35844 = state_35789__$1;
(statearr_35811_35844[(2)] = inst_35783);

(statearr_35811_35844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (19))){
var inst_35770 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35812_35845 = state_35789__$1;
(statearr_35812_35845[(2)] = inst_35770);

(statearr_35812_35845[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (11))){
var inst_35741 = (state_35789[(12)]);
var inst_35755 = (state_35789[(7)]);
var inst_35755__$1 = cljs.core.seq.call(null,inst_35741);
var state_35789__$1 = (function (){var statearr_35813 = state_35789;
(statearr_35813[(7)] = inst_35755__$1);

return statearr_35813;
})();
if(inst_35755__$1){
var statearr_35814_35846 = state_35789__$1;
(statearr_35814_35846[(1)] = (14));

} else {
var statearr_35815_35847 = state_35789__$1;
(statearr_35815_35847[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (9))){
var inst_35777 = (state_35789[(2)]);
var inst_35778 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35789__$1 = (function (){var statearr_35816 = state_35789;
(statearr_35816[(15)] = inst_35777);

return statearr_35816;
})();
if(cljs.core.truth_(inst_35778)){
var statearr_35817_35848 = state_35789__$1;
(statearr_35817_35848[(1)] = (21));

} else {
var statearr_35818_35849 = state_35789__$1;
(statearr_35818_35849[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (5))){
var inst_35733 = cljs.core.async.close_BANG_.call(null,out);
var state_35789__$1 = state_35789;
var statearr_35819_35850 = state_35789__$1;
(statearr_35819_35850[(2)] = inst_35733);

(statearr_35819_35850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (14))){
var inst_35755 = (state_35789[(7)]);
var inst_35757 = cljs.core.chunked_seq_QMARK_.call(null,inst_35755);
var state_35789__$1 = state_35789;
if(inst_35757){
var statearr_35820_35851 = state_35789__$1;
(statearr_35820_35851[(1)] = (17));

} else {
var statearr_35821_35852 = state_35789__$1;
(statearr_35821_35852[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (16))){
var inst_35773 = (state_35789[(2)]);
var state_35789__$1 = state_35789;
var statearr_35822_35853 = state_35789__$1;
(statearr_35822_35853[(2)] = inst_35773);

(statearr_35822_35853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35790 === (10))){
var inst_35742 = (state_35789[(9)]);
var inst_35744 = (state_35789[(10)]);
var inst_35749 = cljs.core._nth.call(null,inst_35742,inst_35744);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35789__$1,(13),out,inst_35749);
} else {
if((state_val_35790 === (18))){
var inst_35755 = (state_35789[(7)]);
var inst_35764 = cljs.core.first.call(null,inst_35755);
var state_35789__$1 = state_35789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35789__$1,(20),out,inst_35764);
} else {
if((state_val_35790 === (8))){
var inst_35743 = (state_35789[(8)]);
var inst_35744 = (state_35789[(10)]);
var inst_35746 = (inst_35744 < inst_35743);
var inst_35747 = inst_35746;
var state_35789__$1 = state_35789;
if(cljs.core.truth_(inst_35747)){
var statearr_35823_35854 = state_35789__$1;
(statearr_35823_35854[(1)] = (10));

} else {
var statearr_35824_35855 = state_35789__$1;
(statearr_35824_35855[(1)] = (11));

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
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____0 = (function (){
var statearr_35828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35828[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__);

(statearr_35828[(1)] = (1));

return statearr_35828;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____1 = (function (state_35789){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35829){if((e35829 instanceof Object)){
var ex__28070__auto__ = e35829;
var statearr_35830_35856 = state_35789;
(statearr_35830_35856[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35857 = state_35789;
state_35789 = G__35857;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__ = function(state_35789){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____1.call(this,state_35789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28067__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_35831 = f__28123__auto__.call(null);
(statearr_35831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_35831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___35954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___35954,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___35954,out){
return (function (state_35929){
var state_val_35930 = (state_35929[(1)]);
if((state_val_35930 === (7))){
var inst_35924 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35931_35955 = state_35929__$1;
(statearr_35931_35955[(2)] = inst_35924);

(statearr_35931_35955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (1))){
var inst_35906 = null;
var state_35929__$1 = (function (){var statearr_35932 = state_35929;
(statearr_35932[(7)] = inst_35906);

return statearr_35932;
})();
var statearr_35933_35956 = state_35929__$1;
(statearr_35933_35956[(2)] = null);

(statearr_35933_35956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (4))){
var inst_35909 = (state_35929[(8)]);
var inst_35909__$1 = (state_35929[(2)]);
var inst_35910 = (inst_35909__$1 == null);
var inst_35911 = cljs.core.not.call(null,inst_35910);
var state_35929__$1 = (function (){var statearr_35934 = state_35929;
(statearr_35934[(8)] = inst_35909__$1);

return statearr_35934;
})();
if(inst_35911){
var statearr_35935_35957 = state_35929__$1;
(statearr_35935_35957[(1)] = (5));

} else {
var statearr_35936_35958 = state_35929__$1;
(statearr_35936_35958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (6))){
var state_35929__$1 = state_35929;
var statearr_35937_35959 = state_35929__$1;
(statearr_35937_35959[(2)] = null);

(statearr_35937_35959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (3))){
var inst_35926 = (state_35929[(2)]);
var inst_35927 = cljs.core.async.close_BANG_.call(null,out);
var state_35929__$1 = (function (){var statearr_35938 = state_35929;
(statearr_35938[(9)] = inst_35926);

return statearr_35938;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35929__$1,inst_35927);
} else {
if((state_val_35930 === (2))){
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35929__$1,(4),ch);
} else {
if((state_val_35930 === (11))){
var inst_35909 = (state_35929[(8)]);
var inst_35918 = (state_35929[(2)]);
var inst_35906 = inst_35909;
var state_35929__$1 = (function (){var statearr_35939 = state_35929;
(statearr_35939[(10)] = inst_35918);

(statearr_35939[(7)] = inst_35906);

return statearr_35939;
})();
var statearr_35940_35960 = state_35929__$1;
(statearr_35940_35960[(2)] = null);

(statearr_35940_35960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (9))){
var inst_35909 = (state_35929[(8)]);
var state_35929__$1 = state_35929;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35929__$1,(11),out,inst_35909);
} else {
if((state_val_35930 === (5))){
var inst_35909 = (state_35929[(8)]);
var inst_35906 = (state_35929[(7)]);
var inst_35913 = cljs.core._EQ_.call(null,inst_35909,inst_35906);
var state_35929__$1 = state_35929;
if(inst_35913){
var statearr_35942_35961 = state_35929__$1;
(statearr_35942_35961[(1)] = (8));

} else {
var statearr_35943_35962 = state_35929__$1;
(statearr_35943_35962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (10))){
var inst_35921 = (state_35929[(2)]);
var state_35929__$1 = state_35929;
var statearr_35944_35963 = state_35929__$1;
(statearr_35944_35963[(2)] = inst_35921);

(statearr_35944_35963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35930 === (8))){
var inst_35906 = (state_35929[(7)]);
var tmp35941 = inst_35906;
var inst_35906__$1 = tmp35941;
var state_35929__$1 = (function (){var statearr_35945 = state_35929;
(statearr_35945[(7)] = inst_35906__$1);

return statearr_35945;
})();
var statearr_35946_35964 = state_35929__$1;
(statearr_35946_35964[(2)] = null);

(statearr_35946_35964[(1)] = (2));


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
});})(c__28122__auto___35954,out))
;
return ((function (switch__28066__auto__,c__28122__auto___35954,out){
return (function() {
var cljs$core$async$unique_$_state_machine__28067__auto__ = null;
var cljs$core$async$unique_$_state_machine__28067__auto____0 = (function (){
var statearr_35950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35950[(0)] = cljs$core$async$unique_$_state_machine__28067__auto__);

(statearr_35950[(1)] = (1));

return statearr_35950;
});
var cljs$core$async$unique_$_state_machine__28067__auto____1 = (function (state_35929){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_35929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e35951){if((e35951 instanceof Object)){
var ex__28070__auto__ = e35951;
var statearr_35952_35965 = state_35929;
(statearr_35952_35965[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35966 = state_35929;
state_35929 = G__35966;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__28067__auto__ = function(state_35929){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__28067__auto____1.call(this,state_35929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__28067__auto____0;
cljs$core$async$unique_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__28067__auto____1;
return cljs$core$async$unique_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___35954,out))
})();
var state__28124__auto__ = (function (){var statearr_35953 = f__28123__auto__.call(null);
(statearr_35953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___35954);

return statearr_35953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___35954,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___36101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___36101,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___36101,out){
return (function (state_36071){
var state_val_36072 = (state_36071[(1)]);
if((state_val_36072 === (7))){
var inst_36067 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36073_36102 = state_36071__$1;
(statearr_36073_36102[(2)] = inst_36067);

(statearr_36073_36102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (1))){
var inst_36034 = (new Array(n));
var inst_36035 = inst_36034;
var inst_36036 = (0);
var state_36071__$1 = (function (){var statearr_36074 = state_36071;
(statearr_36074[(7)] = inst_36036);

(statearr_36074[(8)] = inst_36035);

return statearr_36074;
})();
var statearr_36075_36103 = state_36071__$1;
(statearr_36075_36103[(2)] = null);

(statearr_36075_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (4))){
var inst_36039 = (state_36071[(9)]);
var inst_36039__$1 = (state_36071[(2)]);
var inst_36040 = (inst_36039__$1 == null);
var inst_36041 = cljs.core.not.call(null,inst_36040);
var state_36071__$1 = (function (){var statearr_36076 = state_36071;
(statearr_36076[(9)] = inst_36039__$1);

return statearr_36076;
})();
if(inst_36041){
var statearr_36077_36104 = state_36071__$1;
(statearr_36077_36104[(1)] = (5));

} else {
var statearr_36078_36105 = state_36071__$1;
(statearr_36078_36105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (15))){
var inst_36061 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36079_36106 = state_36071__$1;
(statearr_36079_36106[(2)] = inst_36061);

(statearr_36079_36106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (13))){
var state_36071__$1 = state_36071;
var statearr_36080_36107 = state_36071__$1;
(statearr_36080_36107[(2)] = null);

(statearr_36080_36107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (6))){
var inst_36036 = (state_36071[(7)]);
var inst_36057 = (inst_36036 > (0));
var state_36071__$1 = state_36071;
if(cljs.core.truth_(inst_36057)){
var statearr_36081_36108 = state_36071__$1;
(statearr_36081_36108[(1)] = (12));

} else {
var statearr_36082_36109 = state_36071__$1;
(statearr_36082_36109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (3))){
var inst_36069 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36071__$1,inst_36069);
} else {
if((state_val_36072 === (12))){
var inst_36035 = (state_36071[(8)]);
var inst_36059 = cljs.core.vec.call(null,inst_36035);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36071__$1,(15),out,inst_36059);
} else {
if((state_val_36072 === (2))){
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36071__$1,(4),ch);
} else {
if((state_val_36072 === (11))){
var inst_36051 = (state_36071[(2)]);
var inst_36052 = (new Array(n));
var inst_36035 = inst_36052;
var inst_36036 = (0);
var state_36071__$1 = (function (){var statearr_36083 = state_36071;
(statearr_36083[(7)] = inst_36036);

(statearr_36083[(8)] = inst_36035);

(statearr_36083[(10)] = inst_36051);

return statearr_36083;
})();
var statearr_36084_36110 = state_36071__$1;
(statearr_36084_36110[(2)] = null);

(statearr_36084_36110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (9))){
var inst_36035 = (state_36071[(8)]);
var inst_36049 = cljs.core.vec.call(null,inst_36035);
var state_36071__$1 = state_36071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36071__$1,(11),out,inst_36049);
} else {
if((state_val_36072 === (5))){
var inst_36036 = (state_36071[(7)]);
var inst_36044 = (state_36071[(11)]);
var inst_36035 = (state_36071[(8)]);
var inst_36039 = (state_36071[(9)]);
var inst_36043 = (inst_36035[inst_36036] = inst_36039);
var inst_36044__$1 = (inst_36036 + (1));
var inst_36045 = (inst_36044__$1 < n);
var state_36071__$1 = (function (){var statearr_36085 = state_36071;
(statearr_36085[(11)] = inst_36044__$1);

(statearr_36085[(12)] = inst_36043);

return statearr_36085;
})();
if(cljs.core.truth_(inst_36045)){
var statearr_36086_36111 = state_36071__$1;
(statearr_36086_36111[(1)] = (8));

} else {
var statearr_36087_36112 = state_36071__$1;
(statearr_36087_36112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (14))){
var inst_36064 = (state_36071[(2)]);
var inst_36065 = cljs.core.async.close_BANG_.call(null,out);
var state_36071__$1 = (function (){var statearr_36089 = state_36071;
(statearr_36089[(13)] = inst_36064);

return statearr_36089;
})();
var statearr_36090_36113 = state_36071__$1;
(statearr_36090_36113[(2)] = inst_36065);

(statearr_36090_36113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (10))){
var inst_36055 = (state_36071[(2)]);
var state_36071__$1 = state_36071;
var statearr_36091_36114 = state_36071__$1;
(statearr_36091_36114[(2)] = inst_36055);

(statearr_36091_36114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36072 === (8))){
var inst_36044 = (state_36071[(11)]);
var inst_36035 = (state_36071[(8)]);
var tmp36088 = inst_36035;
var inst_36035__$1 = tmp36088;
var inst_36036 = inst_36044;
var state_36071__$1 = (function (){var statearr_36092 = state_36071;
(statearr_36092[(7)] = inst_36036);

(statearr_36092[(8)] = inst_36035__$1);

return statearr_36092;
})();
var statearr_36093_36115 = state_36071__$1;
(statearr_36093_36115[(2)] = null);

(statearr_36093_36115[(1)] = (2));


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
});})(c__28122__auto___36101,out))
;
return ((function (switch__28066__auto__,c__28122__auto___36101,out){
return (function() {
var cljs$core$async$partition_$_state_machine__28067__auto__ = null;
var cljs$core$async$partition_$_state_machine__28067__auto____0 = (function (){
var statearr_36097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36097[(0)] = cljs$core$async$partition_$_state_machine__28067__auto__);

(statearr_36097[(1)] = (1));

return statearr_36097;
});
var cljs$core$async$partition_$_state_machine__28067__auto____1 = (function (state_36071){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36098){if((e36098 instanceof Object)){
var ex__28070__auto__ = e36098;
var statearr_36099_36116 = state_36071;
(statearr_36099_36116[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36117 = state_36071;
state_36071 = G__36117;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__28067__auto__ = function(state_36071){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__28067__auto____1.call(this,state_36071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__28067__auto____0;
cljs$core$async$partition_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__28067__auto____1;
return cljs$core$async$partition_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___36101,out))
})();
var state__28124__auto__ = (function (){var statearr_36100 = f__28123__auto__.call(null);
(statearr_36100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___36101);

return statearr_36100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___36101,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28122__auto___36260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto___36260,out){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto___36260,out){
return (function (state_36230){
var state_val_36231 = (state_36230[(1)]);
if((state_val_36231 === (7))){
var inst_36226 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36232_36261 = state_36230__$1;
(statearr_36232_36261[(2)] = inst_36226);

(statearr_36232_36261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (1))){
var inst_36189 = [];
var inst_36190 = inst_36189;
var inst_36191 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36230__$1 = (function (){var statearr_36233 = state_36230;
(statearr_36233[(7)] = inst_36190);

(statearr_36233[(8)] = inst_36191);

return statearr_36233;
})();
var statearr_36234_36262 = state_36230__$1;
(statearr_36234_36262[(2)] = null);

(statearr_36234_36262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (4))){
var inst_36194 = (state_36230[(9)]);
var inst_36194__$1 = (state_36230[(2)]);
var inst_36195 = (inst_36194__$1 == null);
var inst_36196 = cljs.core.not.call(null,inst_36195);
var state_36230__$1 = (function (){var statearr_36235 = state_36230;
(statearr_36235[(9)] = inst_36194__$1);

return statearr_36235;
})();
if(inst_36196){
var statearr_36236_36263 = state_36230__$1;
(statearr_36236_36263[(1)] = (5));

} else {
var statearr_36237_36264 = state_36230__$1;
(statearr_36237_36264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (15))){
var inst_36220 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36238_36265 = state_36230__$1;
(statearr_36238_36265[(2)] = inst_36220);

(statearr_36238_36265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (13))){
var state_36230__$1 = state_36230;
var statearr_36239_36266 = state_36230__$1;
(statearr_36239_36266[(2)] = null);

(statearr_36239_36266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (6))){
var inst_36190 = (state_36230[(7)]);
var inst_36215 = inst_36190.length;
var inst_36216 = (inst_36215 > (0));
var state_36230__$1 = state_36230;
if(cljs.core.truth_(inst_36216)){
var statearr_36240_36267 = state_36230__$1;
(statearr_36240_36267[(1)] = (12));

} else {
var statearr_36241_36268 = state_36230__$1;
(statearr_36241_36268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (3))){
var inst_36228 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36230__$1,inst_36228);
} else {
if((state_val_36231 === (12))){
var inst_36190 = (state_36230[(7)]);
var inst_36218 = cljs.core.vec.call(null,inst_36190);
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36230__$1,(15),out,inst_36218);
} else {
if((state_val_36231 === (2))){
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36230__$1,(4),ch);
} else {
if((state_val_36231 === (11))){
var inst_36194 = (state_36230[(9)]);
var inst_36198 = (state_36230[(10)]);
var inst_36208 = (state_36230[(2)]);
var inst_36209 = [];
var inst_36210 = inst_36209.push(inst_36194);
var inst_36190 = inst_36209;
var inst_36191 = inst_36198;
var state_36230__$1 = (function (){var statearr_36242 = state_36230;
(statearr_36242[(7)] = inst_36190);

(statearr_36242[(11)] = inst_36208);

(statearr_36242[(8)] = inst_36191);

(statearr_36242[(12)] = inst_36210);

return statearr_36242;
})();
var statearr_36243_36269 = state_36230__$1;
(statearr_36243_36269[(2)] = null);

(statearr_36243_36269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (9))){
var inst_36190 = (state_36230[(7)]);
var inst_36206 = cljs.core.vec.call(null,inst_36190);
var state_36230__$1 = state_36230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36230__$1,(11),out,inst_36206);
} else {
if((state_val_36231 === (5))){
var inst_36194 = (state_36230[(9)]);
var inst_36191 = (state_36230[(8)]);
var inst_36198 = (state_36230[(10)]);
var inst_36198__$1 = f.call(null,inst_36194);
var inst_36199 = cljs.core._EQ_.call(null,inst_36198__$1,inst_36191);
var inst_36200 = cljs.core.keyword_identical_QMARK_.call(null,inst_36191,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36201 = (inst_36199) || (inst_36200);
var state_36230__$1 = (function (){var statearr_36244 = state_36230;
(statearr_36244[(10)] = inst_36198__$1);

return statearr_36244;
})();
if(cljs.core.truth_(inst_36201)){
var statearr_36245_36270 = state_36230__$1;
(statearr_36245_36270[(1)] = (8));

} else {
var statearr_36246_36271 = state_36230__$1;
(statearr_36246_36271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (14))){
var inst_36223 = (state_36230[(2)]);
var inst_36224 = cljs.core.async.close_BANG_.call(null,out);
var state_36230__$1 = (function (){var statearr_36248 = state_36230;
(statearr_36248[(13)] = inst_36223);

return statearr_36248;
})();
var statearr_36249_36272 = state_36230__$1;
(statearr_36249_36272[(2)] = inst_36224);

(statearr_36249_36272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (10))){
var inst_36213 = (state_36230[(2)]);
var state_36230__$1 = state_36230;
var statearr_36250_36273 = state_36230__$1;
(statearr_36250_36273[(2)] = inst_36213);

(statearr_36250_36273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36231 === (8))){
var inst_36194 = (state_36230[(9)]);
var inst_36190 = (state_36230[(7)]);
var inst_36198 = (state_36230[(10)]);
var inst_36203 = inst_36190.push(inst_36194);
var tmp36247 = inst_36190;
var inst_36190__$1 = tmp36247;
var inst_36191 = inst_36198;
var state_36230__$1 = (function (){var statearr_36251 = state_36230;
(statearr_36251[(14)] = inst_36203);

(statearr_36251[(7)] = inst_36190__$1);

(statearr_36251[(8)] = inst_36191);

return statearr_36251;
})();
var statearr_36252_36274 = state_36230__$1;
(statearr_36252_36274[(2)] = null);

(statearr_36252_36274[(1)] = (2));


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
});})(c__28122__auto___36260,out))
;
return ((function (switch__28066__auto__,c__28122__auto___36260,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__28067__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__28067__auto____0 = (function (){
var statearr_36256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36256[(0)] = cljs$core$async$partition_by_$_state_machine__28067__auto__);

(statearr_36256[(1)] = (1));

return statearr_36256;
});
var cljs$core$async$partition_by_$_state_machine__28067__auto____1 = (function (state_36230){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_36230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e36257){if((e36257 instanceof Object)){
var ex__28070__auto__ = e36257;
var statearr_36258_36275 = state_36230;
(statearr_36258_36275[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36276 = state_36230;
state_36230 = G__36276;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__28067__auto__ = function(state_36230){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__28067__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__28067__auto____1.call(this,state_36230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__28067__auto____0;
cljs$core$async$partition_by_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__28067__auto____1;
return cljs$core$async$partition_by_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto___36260,out))
})();
var state__28124__auto__ = (function (){var statearr_36259 = f__28123__auto__.call(null);
(statearr_36259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto___36260);

return statearr_36259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto___36260,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1446160952030