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
if(typeof cljs.core.async.t22031 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22031 = (function (fn_handler,f,meta22032){
this.fn_handler = fn_handler;
this.f = f;
this.meta22032 = meta22032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22033,meta22032__$1){
var self__ = this;
var _22033__$1 = this;
return (new cljs.core.async.t22031(self__.fn_handler,self__.f,meta22032__$1));
});

cljs.core.async.t22031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22033){
var self__ = this;
var _22033__$1 = this;
return self__.meta22032;
});

cljs.core.async.t22031.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22031.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22031.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22031.cljs$lang$type = true;

cljs.core.async.t22031.cljs$lang$ctorStr = "cljs.core.async/t22031";

cljs.core.async.t22031.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t22031");
});

cljs.core.async.__GT_t22031 = (function cljs$core$async$fn_handler_$___GT_t22031(fn_handler__$1,f__$1,meta22032){
return (new cljs.core.async.t22031(fn_handler__$1,f__$1,meta22032));
});

}

return (new cljs.core.async.t22031(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22035 = buff;
if(G__22035){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__22035.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22035.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22035);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__22035);
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
var val_22036 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22036);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22036,ret){
return (function (){
return fn1.call(null,val_22036);
});})(val_22036,ret))
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
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__4963__auto___22037 = n;
var x_22038 = (0);
while(true){
if((x_22038 < n__4963__auto___22037)){
(a[x_22038] = (0));

var G__22039 = (x_22038 + (1));
x_22038 = G__22039;
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

var G__22040 = (i + (1));
i = G__22040;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t22044 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22044 = (function (alt_flag,flag,meta22045){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22045 = meta22045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22046,meta22045__$1){
var self__ = this;
var _22046__$1 = this;
return (new cljs.core.async.t22044(self__.alt_flag,self__.flag,meta22045__$1));
});})(flag))
;

cljs.core.async.t22044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22046){
var self__ = this;
var _22046__$1 = this;
return self__.meta22045;
});})(flag))
;

cljs.core.async.t22044.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22044.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t22044.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t22044.cljs$lang$type = true;

cljs.core.async.t22044.cljs$lang$ctorStr = "cljs.core.async/t22044";

cljs.core.async.t22044.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t22044");
});})(flag))
;

cljs.core.async.__GT_t22044 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t22044(alt_flag__$1,flag__$1,meta22045){
return (new cljs.core.async.t22044(alt_flag__$1,flag__$1,meta22045));
});})(flag))
;

}

return (new cljs.core.async.t22044(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t22050 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22050 = (function (alt_handler,flag,cb,meta22051){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22051 = meta22051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22052,meta22051__$1){
var self__ = this;
var _22052__$1 = this;
return (new cljs.core.async.t22050(self__.alt_handler,self__.flag,self__.cb,meta22051__$1));
});

cljs.core.async.t22050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22052){
var self__ = this;
var _22052__$1 = this;
return self__.meta22051;
});

cljs.core.async.t22050.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t22050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t22050.cljs$lang$type = true;

cljs.core.async.t22050.cljs$lang$ctorStr = "cljs.core.async/t22050";

cljs.core.async.t22050.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t22050");
});

cljs.core.async.__GT_t22050 = (function cljs$core$async$alt_handler_$___GT_t22050(alt_handler__$1,flag__$1,cb__$1,meta22051){
return (new cljs.core.async.t22050(alt_handler__$1,flag__$1,cb__$1,meta22051));
});

}

return (new cljs.core.async.t22050(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22053_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22053_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22054_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22054_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22055 = (i + (1));
i = G__22055;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4076__auto__ = ret;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4064__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4064__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4064__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__22056){
var map__22058 = p__22056;
var map__22058__$1 = ((cljs.core.seq_QMARK_.call(null,map__22058))?cljs.core.apply.call(null,cljs.core.hash_map,map__22058):map__22058);
var opts = map__22058__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__22056 = null;
if (arguments.length > 1) {
var G__22059__i = 0, G__22059__a = new Array(arguments.length -  1);
while (G__22059__i < G__22059__a.length) {G__22059__a[G__22059__i] = arguments[G__22059__i + 1]; ++G__22059__i;}
  p__22056 = new cljs.core.IndexedSeq(G__22059__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__22056);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__22060){
var ports = cljs.core.first(arglist__22060);
var p__22056 = cljs.core.rest(arglist__22060);
return cljs$core$async$alts_BANG___delegate(ports,p__22056);
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
var c__6709__auto___22155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___22155){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___22155){
return (function (state_22131){
var state_val_22132 = (state_22131[(1)]);
if((state_val_22132 === (7))){
var inst_22127 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22133_22156 = state_22131__$1;
(statearr_22133_22156[(2)] = inst_22127);

(statearr_22133_22156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (1))){
var state_22131__$1 = state_22131;
var statearr_22134_22157 = state_22131__$1;
(statearr_22134_22157[(2)] = null);

(statearr_22134_22157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (4))){
var inst_22110 = (state_22131[(7)]);
var inst_22110__$1 = (state_22131[(2)]);
var inst_22111 = (inst_22110__$1 == null);
var state_22131__$1 = (function (){var statearr_22135 = state_22131;
(statearr_22135[(7)] = inst_22110__$1);

return statearr_22135;
})();
if(cljs.core.truth_(inst_22111)){
var statearr_22136_22158 = state_22131__$1;
(statearr_22136_22158[(1)] = (5));

} else {
var statearr_22137_22159 = state_22131__$1;
(statearr_22137_22159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (13))){
var state_22131__$1 = state_22131;
var statearr_22138_22160 = state_22131__$1;
(statearr_22138_22160[(2)] = null);

(statearr_22138_22160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (6))){
var inst_22110 = (state_22131[(7)]);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22131__$1,(11),to,inst_22110);
} else {
if((state_val_22132 === (3))){
var inst_22129 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22131__$1,inst_22129);
} else {
if((state_val_22132 === (12))){
var state_22131__$1 = state_22131;
var statearr_22139_22161 = state_22131__$1;
(statearr_22139_22161[(2)] = null);

(statearr_22139_22161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (2))){
var state_22131__$1 = state_22131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22131__$1,(4),from);
} else {
if((state_val_22132 === (11))){
var inst_22120 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
if(cljs.core.truth_(inst_22120)){
var statearr_22140_22162 = state_22131__$1;
(statearr_22140_22162[(1)] = (12));

} else {
var statearr_22141_22163 = state_22131__$1;
(statearr_22141_22163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (9))){
var state_22131__$1 = state_22131;
var statearr_22142_22164 = state_22131__$1;
(statearr_22142_22164[(2)] = null);

(statearr_22142_22164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (5))){
var state_22131__$1 = state_22131;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22143_22165 = state_22131__$1;
(statearr_22143_22165[(1)] = (8));

} else {
var statearr_22144_22166 = state_22131__$1;
(statearr_22144_22166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (14))){
var inst_22125 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22145_22167 = state_22131__$1;
(statearr_22145_22167[(2)] = inst_22125);

(statearr_22145_22167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (10))){
var inst_22117 = (state_22131[(2)]);
var state_22131__$1 = state_22131;
var statearr_22146_22168 = state_22131__$1;
(statearr_22146_22168[(2)] = inst_22117);

(statearr_22146_22168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22132 === (8))){
var inst_22114 = cljs.core.async.close_BANG_.call(null,to);
var state_22131__$1 = state_22131;
var statearr_22147_22169 = state_22131__$1;
(statearr_22147_22169[(2)] = inst_22114);

(statearr_22147_22169[(1)] = (10));


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
});})(c__6709__auto___22155))
;
return ((function (switch__6653__auto__,c__6709__auto___22155){
return (function() {
var cljs$core$async$pipe_$_state_machine__6654__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6654__auto____0 = (function (){
var statearr_22151 = [null,null,null,null,null,null,null,null];
(statearr_22151[(0)] = cljs$core$async$pipe_$_state_machine__6654__auto__);

(statearr_22151[(1)] = (1));

return statearr_22151;
});
var cljs$core$async$pipe_$_state_machine__6654__auto____1 = (function (state_22131){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22152){if((e22152 instanceof Object)){
var ex__6657__auto__ = e22152;
var statearr_22153_22170 = state_22131;
(statearr_22153_22170[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22171 = state_22131;
state_22131 = G__22171;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6654__auto__ = function(state_22131){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6654__auto____1.call(this,state_22131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6654__auto____0;
cljs$core$async$pipe_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6654__auto____1;
return cljs$core$async$pipe_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___22155))
})();
var state__6711__auto__ = (function (){var statearr_22154 = f__6710__auto__.call(null);
(statearr_22154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22155);

return statearr_22154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___22155))
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
return (function (p__22355){
var vec__22356 = p__22355;
var v = cljs.core.nth.call(null,vec__22356,(0),null);
var p = cljs.core.nth.call(null,vec__22356,(1),null);
var job = vec__22356;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6709__auto___22538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results){
return (function (state_22361){
var state_val_22362 = (state_22361[(1)]);
if((state_val_22362 === (1))){
var state_22361__$1 = state_22361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22361__$1,(2),res,v);
} else {
if((state_val_22362 === (2))){
var inst_22358 = (state_22361[(2)]);
var inst_22359 = cljs.core.async.close_BANG_.call(null,res);
var state_22361__$1 = (function (){var statearr_22363 = state_22361;
(statearr_22363[(7)] = inst_22358);

return statearr_22363;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22361__$1,inst_22359);
} else {
return null;
}
}
});})(c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results))
;
return ((function (switch__6653__auto__,c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_22367 = [null,null,null,null,null,null,null,null];
(statearr_22367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__);

(statearr_22367[(1)] = (1));

return statearr_22367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1 = (function (state_22361){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22368){if((e22368 instanceof Object)){
var ex__6657__auto__ = e22368;
var statearr_22369_22539 = state_22361;
(statearr_22369_22539[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22540 = state_22361;
state_22361 = G__22540;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = function(state_22361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1.call(this,state_22361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results))
})();
var state__6711__auto__ = (function (){var statearr_22370 = f__6710__auto__.call(null);
(statearr_22370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22538);

return statearr_22370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___22538,res,vec__22356,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22371){
var vec__22372 = p__22371;
var v = cljs.core.nth.call(null,vec__22372,(0),null);
var p = cljs.core.nth.call(null,vec__22372,(1),null);
var job = vec__22372;
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
var n__4963__auto___22541 = n;
var __22542 = (0);
while(true){
if((__22542 < n__4963__auto___22541)){
var G__22373_22543 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22373_22543) {
case "compute":
var c__6709__auto___22545 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22542,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (__22542,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function (state_22386){
var state_val_22387 = (state_22386[(1)]);
if((state_val_22387 === (1))){
var state_22386__$1 = state_22386;
var statearr_22388_22546 = state_22386__$1;
(statearr_22388_22546[(2)] = null);

(statearr_22388_22546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (2))){
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22386__$1,(4),jobs);
} else {
if((state_val_22387 === (3))){
var inst_22384 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22386__$1,inst_22384);
} else {
if((state_val_22387 === (4))){
var inst_22376 = (state_22386[(2)]);
var inst_22377 = process.call(null,inst_22376);
var state_22386__$1 = state_22386;
if(cljs.core.truth_(inst_22377)){
var statearr_22389_22547 = state_22386__$1;
(statearr_22389_22547[(1)] = (5));

} else {
var statearr_22390_22548 = state_22386__$1;
(statearr_22390_22548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (5))){
var state_22386__$1 = state_22386;
var statearr_22391_22549 = state_22386__$1;
(statearr_22391_22549[(2)] = null);

(statearr_22391_22549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (6))){
var state_22386__$1 = state_22386;
var statearr_22392_22550 = state_22386__$1;
(statearr_22392_22550[(2)] = null);

(statearr_22392_22550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22387 === (7))){
var inst_22382 = (state_22386[(2)]);
var state_22386__$1 = state_22386;
var statearr_22393_22551 = state_22386__$1;
(statearr_22393_22551[(2)] = inst_22382);

(statearr_22393_22551[(1)] = (3));


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
});})(__22542,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
;
return ((function (__22542,switch__6653__auto__,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_22397 = [null,null,null,null,null,null,null];
(statearr_22397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__);

(statearr_22397[(1)] = (1));

return statearr_22397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1 = (function (state_22386){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22398){if((e22398 instanceof Object)){
var ex__6657__auto__ = e22398;
var statearr_22399_22552 = state_22386;
(statearr_22399_22552[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22553 = state_22386;
state_22386 = G__22553;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = function(state_22386){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1.call(this,state_22386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__;
})()
;})(__22542,switch__6653__auto__,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
})();
var state__6711__auto__ = (function (){var statearr_22400 = f__6710__auto__.call(null);
(statearr_22400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22545);

return statearr_22400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(__22542,c__6709__auto___22545,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
);


break;
case "async":
var c__6709__auto___22554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22542,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (__22542,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function (state_22413){
var state_val_22414 = (state_22413[(1)]);
if((state_val_22414 === (1))){
var state_22413__$1 = state_22413;
var statearr_22415_22555 = state_22413__$1;
(statearr_22415_22555[(2)] = null);

(statearr_22415_22555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (2))){
var state_22413__$1 = state_22413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22413__$1,(4),jobs);
} else {
if((state_val_22414 === (3))){
var inst_22411 = (state_22413[(2)]);
var state_22413__$1 = state_22413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22413__$1,inst_22411);
} else {
if((state_val_22414 === (4))){
var inst_22403 = (state_22413[(2)]);
var inst_22404 = async.call(null,inst_22403);
var state_22413__$1 = state_22413;
if(cljs.core.truth_(inst_22404)){
var statearr_22416_22556 = state_22413__$1;
(statearr_22416_22556[(1)] = (5));

} else {
var statearr_22417_22557 = state_22413__$1;
(statearr_22417_22557[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (5))){
var state_22413__$1 = state_22413;
var statearr_22418_22558 = state_22413__$1;
(statearr_22418_22558[(2)] = null);

(statearr_22418_22558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (6))){
var state_22413__$1 = state_22413;
var statearr_22419_22559 = state_22413__$1;
(statearr_22419_22559[(2)] = null);

(statearr_22419_22559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22414 === (7))){
var inst_22409 = (state_22413[(2)]);
var state_22413__$1 = state_22413;
var statearr_22420_22560 = state_22413__$1;
(statearr_22420_22560[(2)] = inst_22409);

(statearr_22420_22560[(1)] = (3));


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
});})(__22542,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
;
return ((function (__22542,switch__6653__auto__,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_22424 = [null,null,null,null,null,null,null];
(statearr_22424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__);

(statearr_22424[(1)] = (1));

return statearr_22424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1 = (function (state_22413){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22425){if((e22425 instanceof Object)){
var ex__6657__auto__ = e22425;
var statearr_22426_22561 = state_22413;
(statearr_22426_22561[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22562 = state_22413;
state_22413 = G__22562;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = function(state_22413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1.call(this,state_22413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__;
})()
;})(__22542,switch__6653__auto__,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
})();
var state__6711__auto__ = (function (){var statearr_22427 = f__6710__auto__.call(null);
(statearr_22427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22554);

return statearr_22427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(__22542,c__6709__auto___22554,G__22373_22543,n__4963__auto___22541,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22563 = (__22542 + (1));
__22542 = G__22563;
continue;
} else {
}
break;
}

var c__6709__auto___22564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___22564,jobs,results,process,async){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___22564,jobs,results,process,async){
return (function (state_22449){
var state_val_22450 = (state_22449[(1)]);
if((state_val_22450 === (1))){
var state_22449__$1 = state_22449;
var statearr_22451_22565 = state_22449__$1;
(statearr_22451_22565[(2)] = null);

(statearr_22451_22565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (2))){
var state_22449__$1 = state_22449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22449__$1,(4),from);
} else {
if((state_val_22450 === (3))){
var inst_22447 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22449__$1,inst_22447);
} else {
if((state_val_22450 === (4))){
var inst_22430 = (state_22449[(7)]);
var inst_22430__$1 = (state_22449[(2)]);
var inst_22431 = (inst_22430__$1 == null);
var state_22449__$1 = (function (){var statearr_22452 = state_22449;
(statearr_22452[(7)] = inst_22430__$1);

return statearr_22452;
})();
if(cljs.core.truth_(inst_22431)){
var statearr_22453_22566 = state_22449__$1;
(statearr_22453_22566[(1)] = (5));

} else {
var statearr_22454_22567 = state_22449__$1;
(statearr_22454_22567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (5))){
var inst_22433 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22449__$1 = state_22449;
var statearr_22455_22568 = state_22449__$1;
(statearr_22455_22568[(2)] = inst_22433);

(statearr_22455_22568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (6))){
var inst_22430 = (state_22449[(7)]);
var inst_22435 = (state_22449[(8)]);
var inst_22435__$1 = cljs.core.async.chan.call(null,(1));
var inst_22436 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22437 = [inst_22430,inst_22435__$1];
var inst_22438 = (new cljs.core.PersistentVector(null,2,(5),inst_22436,inst_22437,null));
var state_22449__$1 = (function (){var statearr_22456 = state_22449;
(statearr_22456[(8)] = inst_22435__$1);

return statearr_22456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22449__$1,(8),jobs,inst_22438);
} else {
if((state_val_22450 === (7))){
var inst_22445 = (state_22449[(2)]);
var state_22449__$1 = state_22449;
var statearr_22457_22569 = state_22449__$1;
(statearr_22457_22569[(2)] = inst_22445);

(statearr_22457_22569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22450 === (8))){
var inst_22435 = (state_22449[(8)]);
var inst_22440 = (state_22449[(2)]);
var state_22449__$1 = (function (){var statearr_22458 = state_22449;
(statearr_22458[(9)] = inst_22440);

return statearr_22458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22449__$1,(9),results,inst_22435);
} else {
if((state_val_22450 === (9))){
var inst_22442 = (state_22449[(2)]);
var state_22449__$1 = (function (){var statearr_22459 = state_22449;
(statearr_22459[(10)] = inst_22442);

return statearr_22459;
})();
var statearr_22460_22570 = state_22449__$1;
(statearr_22460_22570[(2)] = null);

(statearr_22460_22570[(1)] = (2));


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
});})(c__6709__auto___22564,jobs,results,process,async))
;
return ((function (switch__6653__auto__,c__6709__auto___22564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_22464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__);

(statearr_22464[(1)] = (1));

return statearr_22464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1 = (function (state_22449){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22465){if((e22465 instanceof Object)){
var ex__6657__auto__ = e22465;
var statearr_22466_22571 = state_22449;
(statearr_22466_22571[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22572 = state_22449;
state_22449 = G__22572;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = function(state_22449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1.call(this,state_22449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___22564,jobs,results,process,async))
})();
var state__6711__auto__ = (function (){var statearr_22467 = f__6710__auto__.call(null);
(statearr_22467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22564);

return statearr_22467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___22564,jobs,results,process,async))
);


var c__6709__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto__,jobs,results,process,async){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto__,jobs,results,process,async){
return (function (state_22505){
var state_val_22506 = (state_22505[(1)]);
if((state_val_22506 === (7))){
var inst_22501 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
var statearr_22507_22573 = state_22505__$1;
(statearr_22507_22573[(2)] = inst_22501);

(statearr_22507_22573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (20))){
var state_22505__$1 = state_22505;
var statearr_22508_22574 = state_22505__$1;
(statearr_22508_22574[(2)] = null);

(statearr_22508_22574[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (1))){
var state_22505__$1 = state_22505;
var statearr_22509_22575 = state_22505__$1;
(statearr_22509_22575[(2)] = null);

(statearr_22509_22575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (4))){
var inst_22470 = (state_22505[(7)]);
var inst_22470__$1 = (state_22505[(2)]);
var inst_22471 = (inst_22470__$1 == null);
var state_22505__$1 = (function (){var statearr_22510 = state_22505;
(statearr_22510[(7)] = inst_22470__$1);

return statearr_22510;
})();
if(cljs.core.truth_(inst_22471)){
var statearr_22511_22576 = state_22505__$1;
(statearr_22511_22576[(1)] = (5));

} else {
var statearr_22512_22577 = state_22505__$1;
(statearr_22512_22577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (15))){
var inst_22483 = (state_22505[(8)]);
var state_22505__$1 = state_22505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22505__$1,(18),to,inst_22483);
} else {
if((state_val_22506 === (21))){
var inst_22496 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
var statearr_22513_22578 = state_22505__$1;
(statearr_22513_22578[(2)] = inst_22496);

(statearr_22513_22578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (13))){
var inst_22498 = (state_22505[(2)]);
var state_22505__$1 = (function (){var statearr_22514 = state_22505;
(statearr_22514[(9)] = inst_22498);

return statearr_22514;
})();
var statearr_22515_22579 = state_22505__$1;
(statearr_22515_22579[(2)] = null);

(statearr_22515_22579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (6))){
var inst_22470 = (state_22505[(7)]);
var state_22505__$1 = state_22505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22505__$1,(11),inst_22470);
} else {
if((state_val_22506 === (17))){
var inst_22491 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
if(cljs.core.truth_(inst_22491)){
var statearr_22516_22580 = state_22505__$1;
(statearr_22516_22580[(1)] = (19));

} else {
var statearr_22517_22581 = state_22505__$1;
(statearr_22517_22581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (3))){
var inst_22503 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22505__$1,inst_22503);
} else {
if((state_val_22506 === (12))){
var inst_22480 = (state_22505[(10)]);
var state_22505__$1 = state_22505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22505__$1,(14),inst_22480);
} else {
if((state_val_22506 === (2))){
var state_22505__$1 = state_22505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22505__$1,(4),results);
} else {
if((state_val_22506 === (19))){
var state_22505__$1 = state_22505;
var statearr_22518_22582 = state_22505__$1;
(statearr_22518_22582[(2)] = null);

(statearr_22518_22582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (11))){
var inst_22480 = (state_22505[(2)]);
var state_22505__$1 = (function (){var statearr_22519 = state_22505;
(statearr_22519[(10)] = inst_22480);

return statearr_22519;
})();
var statearr_22520_22583 = state_22505__$1;
(statearr_22520_22583[(2)] = null);

(statearr_22520_22583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (9))){
var state_22505__$1 = state_22505;
var statearr_22521_22584 = state_22505__$1;
(statearr_22521_22584[(2)] = null);

(statearr_22521_22584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (5))){
var state_22505__$1 = state_22505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22522_22585 = state_22505__$1;
(statearr_22522_22585[(1)] = (8));

} else {
var statearr_22523_22586 = state_22505__$1;
(statearr_22523_22586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (14))){
var inst_22483 = (state_22505[(8)]);
var inst_22485 = (state_22505[(11)]);
var inst_22483__$1 = (state_22505[(2)]);
var inst_22484 = (inst_22483__$1 == null);
var inst_22485__$1 = cljs.core.not.call(null,inst_22484);
var state_22505__$1 = (function (){var statearr_22524 = state_22505;
(statearr_22524[(8)] = inst_22483__$1);

(statearr_22524[(11)] = inst_22485__$1);

return statearr_22524;
})();
if(inst_22485__$1){
var statearr_22525_22587 = state_22505__$1;
(statearr_22525_22587[(1)] = (15));

} else {
var statearr_22526_22588 = state_22505__$1;
(statearr_22526_22588[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (16))){
var inst_22485 = (state_22505[(11)]);
var state_22505__$1 = state_22505;
var statearr_22527_22589 = state_22505__$1;
(statearr_22527_22589[(2)] = inst_22485);

(statearr_22527_22589[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (10))){
var inst_22477 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
var statearr_22528_22590 = state_22505__$1;
(statearr_22528_22590[(2)] = inst_22477);

(statearr_22528_22590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (18))){
var inst_22488 = (state_22505[(2)]);
var state_22505__$1 = state_22505;
var statearr_22529_22591 = state_22505__$1;
(statearr_22529_22591[(2)] = inst_22488);

(statearr_22529_22591[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22506 === (8))){
var inst_22474 = cljs.core.async.close_BANG_.call(null,to);
var state_22505__$1 = state_22505;
var statearr_22530_22592 = state_22505__$1;
(statearr_22530_22592[(2)] = inst_22474);

(statearr_22530_22592[(1)] = (10));


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
});})(c__6709__auto__,jobs,results,process,async))
;
return ((function (switch__6653__auto__,c__6709__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_22534 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__);

(statearr_22534[(1)] = (1));

return statearr_22534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1 = (function (state_22505){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22535){if((e22535 instanceof Object)){
var ex__6657__auto__ = e22535;
var statearr_22536_22593 = state_22505;
(statearr_22536_22593[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22594 = state_22505;
state_22505 = G__22594;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__ = function(state_22505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1.call(this,state_22505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto__,jobs,results,process,async))
})();
var state__6711__auto__ = (function (){var statearr_22537 = f__6710__auto__.call(null);
(statearr_22537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto__);

return statearr_22537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto__,jobs,results,process,async))
);

return c__6709__auto__;
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
var c__6709__auto___22695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___22695,tc,fc){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___22695,tc,fc){
return (function (state_22670){
var state_val_22671 = (state_22670[(1)]);
if((state_val_22671 === (7))){
var inst_22666 = (state_22670[(2)]);
var state_22670__$1 = state_22670;
var statearr_22672_22696 = state_22670__$1;
(statearr_22672_22696[(2)] = inst_22666);

(statearr_22672_22696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (1))){
var state_22670__$1 = state_22670;
var statearr_22673_22697 = state_22670__$1;
(statearr_22673_22697[(2)] = null);

(statearr_22673_22697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (4))){
var inst_22647 = (state_22670[(7)]);
var inst_22647__$1 = (state_22670[(2)]);
var inst_22648 = (inst_22647__$1 == null);
var state_22670__$1 = (function (){var statearr_22674 = state_22670;
(statearr_22674[(7)] = inst_22647__$1);

return statearr_22674;
})();
if(cljs.core.truth_(inst_22648)){
var statearr_22675_22698 = state_22670__$1;
(statearr_22675_22698[(1)] = (5));

} else {
var statearr_22676_22699 = state_22670__$1;
(statearr_22676_22699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (13))){
var state_22670__$1 = state_22670;
var statearr_22677_22700 = state_22670__$1;
(statearr_22677_22700[(2)] = null);

(statearr_22677_22700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (6))){
var inst_22647 = (state_22670[(7)]);
var inst_22653 = p.call(null,inst_22647);
var state_22670__$1 = state_22670;
if(cljs.core.truth_(inst_22653)){
var statearr_22678_22701 = state_22670__$1;
(statearr_22678_22701[(1)] = (9));

} else {
var statearr_22679_22702 = state_22670__$1;
(statearr_22679_22702[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (3))){
var inst_22668 = (state_22670[(2)]);
var state_22670__$1 = state_22670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22670__$1,inst_22668);
} else {
if((state_val_22671 === (12))){
var state_22670__$1 = state_22670;
var statearr_22680_22703 = state_22670__$1;
(statearr_22680_22703[(2)] = null);

(statearr_22680_22703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (2))){
var state_22670__$1 = state_22670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22670__$1,(4),ch);
} else {
if((state_val_22671 === (11))){
var inst_22647 = (state_22670[(7)]);
var inst_22657 = (state_22670[(2)]);
var state_22670__$1 = state_22670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22670__$1,(8),inst_22657,inst_22647);
} else {
if((state_val_22671 === (9))){
var state_22670__$1 = state_22670;
var statearr_22681_22704 = state_22670__$1;
(statearr_22681_22704[(2)] = tc);

(statearr_22681_22704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (5))){
var inst_22650 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22651 = cljs.core.async.close_BANG_.call(null,fc);
var state_22670__$1 = (function (){var statearr_22682 = state_22670;
(statearr_22682[(8)] = inst_22650);

return statearr_22682;
})();
var statearr_22683_22705 = state_22670__$1;
(statearr_22683_22705[(2)] = inst_22651);

(statearr_22683_22705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (14))){
var inst_22664 = (state_22670[(2)]);
var state_22670__$1 = state_22670;
var statearr_22684_22706 = state_22670__$1;
(statearr_22684_22706[(2)] = inst_22664);

(statearr_22684_22706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (10))){
var state_22670__$1 = state_22670;
var statearr_22685_22707 = state_22670__$1;
(statearr_22685_22707[(2)] = fc);

(statearr_22685_22707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22671 === (8))){
var inst_22659 = (state_22670[(2)]);
var state_22670__$1 = state_22670;
if(cljs.core.truth_(inst_22659)){
var statearr_22686_22708 = state_22670__$1;
(statearr_22686_22708[(1)] = (12));

} else {
var statearr_22687_22709 = state_22670__$1;
(statearr_22687_22709[(1)] = (13));

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
});})(c__6709__auto___22695,tc,fc))
;
return ((function (switch__6653__auto__,c__6709__auto___22695,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6654__auto__ = null;
var cljs$core$async$split_$_state_machine__6654__auto____0 = (function (){
var statearr_22691 = [null,null,null,null,null,null,null,null,null];
(statearr_22691[(0)] = cljs$core$async$split_$_state_machine__6654__auto__);

(statearr_22691[(1)] = (1));

return statearr_22691;
});
var cljs$core$async$split_$_state_machine__6654__auto____1 = (function (state_22670){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22692){if((e22692 instanceof Object)){
var ex__6657__auto__ = e22692;
var statearr_22693_22710 = state_22670;
(statearr_22693_22710[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22711 = state_22670;
state_22670 = G__22711;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6654__auto__ = function(state_22670){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6654__auto____1.call(this,state_22670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6654__auto____0;
cljs$core$async$split_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6654__auto____1;
return cljs$core$async$split_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___22695,tc,fc))
})();
var state__6711__auto__ = (function (){var statearr_22694 = f__6710__auto__.call(null);
(statearr_22694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___22695);

return statearr_22694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___22695,tc,fc))
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
var c__6709__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto__){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto__){
return (function (state_22758){
var state_val_22759 = (state_22758[(1)]);
if((state_val_22759 === (1))){
var inst_22744 = init;
var state_22758__$1 = (function (){var statearr_22760 = state_22758;
(statearr_22760[(7)] = inst_22744);

return statearr_22760;
})();
var statearr_22761_22776 = state_22758__$1;
(statearr_22761_22776[(2)] = null);

(statearr_22761_22776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (2))){
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22758__$1,(4),ch);
} else {
if((state_val_22759 === (3))){
var inst_22756 = (state_22758[(2)]);
var state_22758__$1 = state_22758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22758__$1,inst_22756);
} else {
if((state_val_22759 === (4))){
var inst_22747 = (state_22758[(8)]);
var inst_22747__$1 = (state_22758[(2)]);
var inst_22748 = (inst_22747__$1 == null);
var state_22758__$1 = (function (){var statearr_22762 = state_22758;
(statearr_22762[(8)] = inst_22747__$1);

return statearr_22762;
})();
if(cljs.core.truth_(inst_22748)){
var statearr_22763_22777 = state_22758__$1;
(statearr_22763_22777[(1)] = (5));

} else {
var statearr_22764_22778 = state_22758__$1;
(statearr_22764_22778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (5))){
var inst_22744 = (state_22758[(7)]);
var state_22758__$1 = state_22758;
var statearr_22765_22779 = state_22758__$1;
(statearr_22765_22779[(2)] = inst_22744);

(statearr_22765_22779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (6))){
var inst_22744 = (state_22758[(7)]);
var inst_22747 = (state_22758[(8)]);
var inst_22751 = f.call(null,inst_22744,inst_22747);
var inst_22744__$1 = inst_22751;
var state_22758__$1 = (function (){var statearr_22766 = state_22758;
(statearr_22766[(7)] = inst_22744__$1);

return statearr_22766;
})();
var statearr_22767_22780 = state_22758__$1;
(statearr_22767_22780[(2)] = null);

(statearr_22767_22780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22759 === (7))){
var inst_22754 = (state_22758[(2)]);
var state_22758__$1 = state_22758;
var statearr_22768_22781 = state_22758__$1;
(statearr_22768_22781[(2)] = inst_22754);

(statearr_22768_22781[(1)] = (3));


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
});})(c__6709__auto__))
;
return ((function (switch__6653__auto__,c__6709__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6654__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6654__auto____0 = (function (){
var statearr_22772 = [null,null,null,null,null,null,null,null,null];
(statearr_22772[(0)] = cljs$core$async$reduce_$_state_machine__6654__auto__);

(statearr_22772[(1)] = (1));

return statearr_22772;
});
var cljs$core$async$reduce_$_state_machine__6654__auto____1 = (function (state_22758){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22773){if((e22773 instanceof Object)){
var ex__6657__auto__ = e22773;
var statearr_22774_22782 = state_22758;
(statearr_22774_22782[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22783 = state_22758;
state_22758 = G__22783;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6654__auto__ = function(state_22758){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6654__auto____1.call(this,state_22758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6654__auto____0;
cljs$core$async$reduce_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6654__auto____1;
return cljs$core$async$reduce_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto__))
})();
var state__6711__auto__ = (function (){var statearr_22775 = f__6710__auto__.call(null);
(statearr_22775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto__);

return statearr_22775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto__))
);

return c__6709__auto__;
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
var c__6709__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto__){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto__){
return (function (state_22857){
var state_val_22858 = (state_22857[(1)]);
if((state_val_22858 === (7))){
var inst_22839 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
var statearr_22859_22882 = state_22857__$1;
(statearr_22859_22882[(2)] = inst_22839);

(statearr_22859_22882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (1))){
var inst_22833 = cljs.core.seq.call(null,coll);
var inst_22834 = inst_22833;
var state_22857__$1 = (function (){var statearr_22860 = state_22857;
(statearr_22860[(7)] = inst_22834);

return statearr_22860;
})();
var statearr_22861_22883 = state_22857__$1;
(statearr_22861_22883[(2)] = null);

(statearr_22861_22883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (4))){
var inst_22834 = (state_22857[(7)]);
var inst_22837 = cljs.core.first.call(null,inst_22834);
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22857__$1,(7),ch,inst_22837);
} else {
if((state_val_22858 === (13))){
var inst_22851 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
var statearr_22862_22884 = state_22857__$1;
(statearr_22862_22884[(2)] = inst_22851);

(statearr_22862_22884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (6))){
var inst_22842 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
if(cljs.core.truth_(inst_22842)){
var statearr_22863_22885 = state_22857__$1;
(statearr_22863_22885[(1)] = (8));

} else {
var statearr_22864_22886 = state_22857__$1;
(statearr_22864_22886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (3))){
var inst_22855 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22857__$1,inst_22855);
} else {
if((state_val_22858 === (12))){
var state_22857__$1 = state_22857;
var statearr_22865_22887 = state_22857__$1;
(statearr_22865_22887[(2)] = null);

(statearr_22865_22887[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (2))){
var inst_22834 = (state_22857[(7)]);
var state_22857__$1 = state_22857;
if(cljs.core.truth_(inst_22834)){
var statearr_22866_22888 = state_22857__$1;
(statearr_22866_22888[(1)] = (4));

} else {
var statearr_22867_22889 = state_22857__$1;
(statearr_22867_22889[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (11))){
var inst_22848 = cljs.core.async.close_BANG_.call(null,ch);
var state_22857__$1 = state_22857;
var statearr_22868_22890 = state_22857__$1;
(statearr_22868_22890[(2)] = inst_22848);

(statearr_22868_22890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (9))){
var state_22857__$1 = state_22857;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22869_22891 = state_22857__$1;
(statearr_22869_22891[(1)] = (11));

} else {
var statearr_22870_22892 = state_22857__$1;
(statearr_22870_22892[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (5))){
var inst_22834 = (state_22857[(7)]);
var state_22857__$1 = state_22857;
var statearr_22871_22893 = state_22857__$1;
(statearr_22871_22893[(2)] = inst_22834);

(statearr_22871_22893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (10))){
var inst_22853 = (state_22857[(2)]);
var state_22857__$1 = state_22857;
var statearr_22872_22894 = state_22857__$1;
(statearr_22872_22894[(2)] = inst_22853);

(statearr_22872_22894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22858 === (8))){
var inst_22834 = (state_22857[(7)]);
var inst_22844 = cljs.core.next.call(null,inst_22834);
var inst_22834__$1 = inst_22844;
var state_22857__$1 = (function (){var statearr_22873 = state_22857;
(statearr_22873[(7)] = inst_22834__$1);

return statearr_22873;
})();
var statearr_22874_22895 = state_22857__$1;
(statearr_22874_22895[(2)] = null);

(statearr_22874_22895[(1)] = (2));


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
});})(c__6709__auto__))
;
return ((function (switch__6653__auto__,c__6709__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6654__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6654__auto____0 = (function (){
var statearr_22878 = [null,null,null,null,null,null,null,null];
(statearr_22878[(0)] = cljs$core$async$onto_chan_$_state_machine__6654__auto__);

(statearr_22878[(1)] = (1));

return statearr_22878;
});
var cljs$core$async$onto_chan_$_state_machine__6654__auto____1 = (function (state_22857){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_22857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e22879){if((e22879 instanceof Object)){
var ex__6657__auto__ = e22879;
var statearr_22880_22896 = state_22857;
(statearr_22880_22896[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22897 = state_22857;
state_22857 = G__22897;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6654__auto__ = function(state_22857){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6654__auto____1.call(this,state_22857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6654__auto____0;
cljs$core$async$onto_chan_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6654__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto__))
})();
var state__6711__auto__ = (function (){var statearr_22881 = f__6710__auto__.call(null);
(statearr_22881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto__);

return statearr_22881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto__))
);

return c__6709__auto__;
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

cljs.core.async.Mux = (function (){var obj22899 = {};
return obj22899;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4064__auto__ = _;
if(and__4064__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4720__auto__ = (((_ == null))?null:_);
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22901 = {};
return obj22901;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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
if(typeof cljs.core.async.t23123 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23123 = (function (mult,ch,cs,meta23124){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23124 = meta23124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23125,meta23124__$1){
var self__ = this;
var _23125__$1 = this;
return (new cljs.core.async.t23123(self__.mult,self__.ch,self__.cs,meta23124__$1));
});})(cs))
;

cljs.core.async.t23123.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23125){
var self__ = this;
var _23125__$1 = this;
return self__.meta23124;
});})(cs))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23123.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23123.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t23123.cljs$lang$type = true;

cljs.core.async.t23123.cljs$lang$ctorStr = "cljs.core.async/t23123";

cljs.core.async.t23123.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t23123");
});})(cs))
;

cljs.core.async.__GT_t23123 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t23123(mult__$1,ch__$1,cs__$1,meta23124){
return (new cljs.core.async.t23123(mult__$1,ch__$1,cs__$1,meta23124));
});})(cs))
;

}

return (new cljs.core.async.t23123(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6709__auto___23344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___23344,cs,m,dchan,dctr,done){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___23344,cs,m,dchan,dctr,done){
return (function (state_23256){
var state_val_23257 = (state_23256[(1)]);
if((state_val_23257 === (7))){
var inst_23252 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23258_23345 = state_23256__$1;
(statearr_23258_23345[(2)] = inst_23252);

(statearr_23258_23345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (20))){
var inst_23157 = (state_23256[(7)]);
var inst_23167 = cljs.core.first.call(null,inst_23157);
var inst_23168 = cljs.core.nth.call(null,inst_23167,(0),null);
var inst_23169 = cljs.core.nth.call(null,inst_23167,(1),null);
var state_23256__$1 = (function (){var statearr_23259 = state_23256;
(statearr_23259[(8)] = inst_23168);

return statearr_23259;
})();
if(cljs.core.truth_(inst_23169)){
var statearr_23260_23346 = state_23256__$1;
(statearr_23260_23346[(1)] = (22));

} else {
var statearr_23261_23347 = state_23256__$1;
(statearr_23261_23347[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (27))){
var inst_23199 = (state_23256[(9)]);
var inst_23197 = (state_23256[(10)]);
var inst_23128 = (state_23256[(11)]);
var inst_23204 = (state_23256[(12)]);
var inst_23204__$1 = cljs.core._nth.call(null,inst_23197,inst_23199);
var inst_23205 = cljs.core.async.put_BANG_.call(null,inst_23204__$1,inst_23128,done);
var state_23256__$1 = (function (){var statearr_23262 = state_23256;
(statearr_23262[(12)] = inst_23204__$1);

return statearr_23262;
})();
if(cljs.core.truth_(inst_23205)){
var statearr_23263_23348 = state_23256__$1;
(statearr_23263_23348[(1)] = (30));

} else {
var statearr_23264_23349 = state_23256__$1;
(statearr_23264_23349[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (1))){
var state_23256__$1 = state_23256;
var statearr_23265_23350 = state_23256__$1;
(statearr_23265_23350[(2)] = null);

(statearr_23265_23350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (24))){
var inst_23157 = (state_23256[(7)]);
var inst_23174 = (state_23256[(2)]);
var inst_23175 = cljs.core.next.call(null,inst_23157);
var inst_23137 = inst_23175;
var inst_23138 = null;
var inst_23139 = (0);
var inst_23140 = (0);
var state_23256__$1 = (function (){var statearr_23266 = state_23256;
(statearr_23266[(13)] = inst_23139);

(statearr_23266[(14)] = inst_23137);

(statearr_23266[(15)] = inst_23138);

(statearr_23266[(16)] = inst_23174);

(statearr_23266[(17)] = inst_23140);

return statearr_23266;
})();
var statearr_23267_23351 = state_23256__$1;
(statearr_23267_23351[(2)] = null);

(statearr_23267_23351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (39))){
var state_23256__$1 = state_23256;
var statearr_23271_23352 = state_23256__$1;
(statearr_23271_23352[(2)] = null);

(statearr_23271_23352[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (4))){
var inst_23128 = (state_23256[(11)]);
var inst_23128__$1 = (state_23256[(2)]);
var inst_23129 = (inst_23128__$1 == null);
var state_23256__$1 = (function (){var statearr_23272 = state_23256;
(statearr_23272[(11)] = inst_23128__$1);

return statearr_23272;
})();
if(cljs.core.truth_(inst_23129)){
var statearr_23273_23353 = state_23256__$1;
(statearr_23273_23353[(1)] = (5));

} else {
var statearr_23274_23354 = state_23256__$1;
(statearr_23274_23354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (15))){
var inst_23139 = (state_23256[(13)]);
var inst_23137 = (state_23256[(14)]);
var inst_23138 = (state_23256[(15)]);
var inst_23140 = (state_23256[(17)]);
var inst_23153 = (state_23256[(2)]);
var inst_23154 = (inst_23140 + (1));
var tmp23268 = inst_23139;
var tmp23269 = inst_23137;
var tmp23270 = inst_23138;
var inst_23137__$1 = tmp23269;
var inst_23138__$1 = tmp23270;
var inst_23139__$1 = tmp23268;
var inst_23140__$1 = inst_23154;
var state_23256__$1 = (function (){var statearr_23275 = state_23256;
(statearr_23275[(18)] = inst_23153);

(statearr_23275[(13)] = inst_23139__$1);

(statearr_23275[(14)] = inst_23137__$1);

(statearr_23275[(15)] = inst_23138__$1);

(statearr_23275[(17)] = inst_23140__$1);

return statearr_23275;
})();
var statearr_23276_23355 = state_23256__$1;
(statearr_23276_23355[(2)] = null);

(statearr_23276_23355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (21))){
var inst_23178 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23280_23356 = state_23256__$1;
(statearr_23280_23356[(2)] = inst_23178);

(statearr_23280_23356[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (31))){
var inst_23204 = (state_23256[(12)]);
var inst_23208 = done.call(null,null);
var inst_23209 = cljs.core.async.untap_STAR_.call(null,m,inst_23204);
var state_23256__$1 = (function (){var statearr_23281 = state_23256;
(statearr_23281[(19)] = inst_23208);

return statearr_23281;
})();
var statearr_23282_23357 = state_23256__$1;
(statearr_23282_23357[(2)] = inst_23209);

(statearr_23282_23357[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (32))){
var inst_23199 = (state_23256[(9)]);
var inst_23197 = (state_23256[(10)]);
var inst_23198 = (state_23256[(20)]);
var inst_23196 = (state_23256[(21)]);
var inst_23211 = (state_23256[(2)]);
var inst_23212 = (inst_23199 + (1));
var tmp23277 = inst_23197;
var tmp23278 = inst_23198;
var tmp23279 = inst_23196;
var inst_23196__$1 = tmp23279;
var inst_23197__$1 = tmp23277;
var inst_23198__$1 = tmp23278;
var inst_23199__$1 = inst_23212;
var state_23256__$1 = (function (){var statearr_23283 = state_23256;
(statearr_23283[(9)] = inst_23199__$1);

(statearr_23283[(10)] = inst_23197__$1);

(statearr_23283[(20)] = inst_23198__$1);

(statearr_23283[(21)] = inst_23196__$1);

(statearr_23283[(22)] = inst_23211);

return statearr_23283;
})();
var statearr_23284_23358 = state_23256__$1;
(statearr_23284_23358[(2)] = null);

(statearr_23284_23358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (40))){
var inst_23224 = (state_23256[(23)]);
var inst_23228 = done.call(null,null);
var inst_23229 = cljs.core.async.untap_STAR_.call(null,m,inst_23224);
var state_23256__$1 = (function (){var statearr_23285 = state_23256;
(statearr_23285[(24)] = inst_23228);

return statearr_23285;
})();
var statearr_23286_23359 = state_23256__$1;
(statearr_23286_23359[(2)] = inst_23229);

(statearr_23286_23359[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (33))){
var inst_23215 = (state_23256[(25)]);
var inst_23217 = cljs.core.chunked_seq_QMARK_.call(null,inst_23215);
var state_23256__$1 = state_23256;
if(inst_23217){
var statearr_23287_23360 = state_23256__$1;
(statearr_23287_23360[(1)] = (36));

} else {
var statearr_23288_23361 = state_23256__$1;
(statearr_23288_23361[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (13))){
var inst_23147 = (state_23256[(26)]);
var inst_23150 = cljs.core.async.close_BANG_.call(null,inst_23147);
var state_23256__$1 = state_23256;
var statearr_23289_23362 = state_23256__$1;
(statearr_23289_23362[(2)] = inst_23150);

(statearr_23289_23362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (22))){
var inst_23168 = (state_23256[(8)]);
var inst_23171 = cljs.core.async.close_BANG_.call(null,inst_23168);
var state_23256__$1 = state_23256;
var statearr_23290_23363 = state_23256__$1;
(statearr_23290_23363[(2)] = inst_23171);

(statearr_23290_23363[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (36))){
var inst_23215 = (state_23256[(25)]);
var inst_23219 = cljs.core.chunk_first.call(null,inst_23215);
var inst_23220 = cljs.core.chunk_rest.call(null,inst_23215);
var inst_23221 = cljs.core.count.call(null,inst_23219);
var inst_23196 = inst_23220;
var inst_23197 = inst_23219;
var inst_23198 = inst_23221;
var inst_23199 = (0);
var state_23256__$1 = (function (){var statearr_23291 = state_23256;
(statearr_23291[(9)] = inst_23199);

(statearr_23291[(10)] = inst_23197);

(statearr_23291[(20)] = inst_23198);

(statearr_23291[(21)] = inst_23196);

return statearr_23291;
})();
var statearr_23292_23364 = state_23256__$1;
(statearr_23292_23364[(2)] = null);

(statearr_23292_23364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (41))){
var inst_23215 = (state_23256[(25)]);
var inst_23231 = (state_23256[(2)]);
var inst_23232 = cljs.core.next.call(null,inst_23215);
var inst_23196 = inst_23232;
var inst_23197 = null;
var inst_23198 = (0);
var inst_23199 = (0);
var state_23256__$1 = (function (){var statearr_23293 = state_23256;
(statearr_23293[(27)] = inst_23231);

(statearr_23293[(9)] = inst_23199);

(statearr_23293[(10)] = inst_23197);

(statearr_23293[(20)] = inst_23198);

(statearr_23293[(21)] = inst_23196);

return statearr_23293;
})();
var statearr_23294_23365 = state_23256__$1;
(statearr_23294_23365[(2)] = null);

(statearr_23294_23365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (43))){
var state_23256__$1 = state_23256;
var statearr_23295_23366 = state_23256__$1;
(statearr_23295_23366[(2)] = null);

(statearr_23295_23366[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (29))){
var inst_23240 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23296_23367 = state_23256__$1;
(statearr_23296_23367[(2)] = inst_23240);

(statearr_23296_23367[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (44))){
var inst_23249 = (state_23256[(2)]);
var state_23256__$1 = (function (){var statearr_23297 = state_23256;
(statearr_23297[(28)] = inst_23249);

return statearr_23297;
})();
var statearr_23298_23368 = state_23256__$1;
(statearr_23298_23368[(2)] = null);

(statearr_23298_23368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (6))){
var inst_23188 = (state_23256[(29)]);
var inst_23187 = cljs.core.deref.call(null,cs);
var inst_23188__$1 = cljs.core.keys.call(null,inst_23187);
var inst_23189 = cljs.core.count.call(null,inst_23188__$1);
var inst_23190 = cljs.core.reset_BANG_.call(null,dctr,inst_23189);
var inst_23195 = cljs.core.seq.call(null,inst_23188__$1);
var inst_23196 = inst_23195;
var inst_23197 = null;
var inst_23198 = (0);
var inst_23199 = (0);
var state_23256__$1 = (function (){var statearr_23299 = state_23256;
(statearr_23299[(9)] = inst_23199);

(statearr_23299[(10)] = inst_23197);

(statearr_23299[(20)] = inst_23198);

(statearr_23299[(21)] = inst_23196);

(statearr_23299[(30)] = inst_23190);

(statearr_23299[(29)] = inst_23188__$1);

return statearr_23299;
})();
var statearr_23300_23369 = state_23256__$1;
(statearr_23300_23369[(2)] = null);

(statearr_23300_23369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (28))){
var inst_23196 = (state_23256[(21)]);
var inst_23215 = (state_23256[(25)]);
var inst_23215__$1 = cljs.core.seq.call(null,inst_23196);
var state_23256__$1 = (function (){var statearr_23301 = state_23256;
(statearr_23301[(25)] = inst_23215__$1);

return statearr_23301;
})();
if(inst_23215__$1){
var statearr_23302_23370 = state_23256__$1;
(statearr_23302_23370[(1)] = (33));

} else {
var statearr_23303_23371 = state_23256__$1;
(statearr_23303_23371[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (25))){
var inst_23199 = (state_23256[(9)]);
var inst_23198 = (state_23256[(20)]);
var inst_23201 = (inst_23199 < inst_23198);
var inst_23202 = inst_23201;
var state_23256__$1 = state_23256;
if(cljs.core.truth_(inst_23202)){
var statearr_23304_23372 = state_23256__$1;
(statearr_23304_23372[(1)] = (27));

} else {
var statearr_23305_23373 = state_23256__$1;
(statearr_23305_23373[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (34))){
var state_23256__$1 = state_23256;
var statearr_23306_23374 = state_23256__$1;
(statearr_23306_23374[(2)] = null);

(statearr_23306_23374[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (17))){
var state_23256__$1 = state_23256;
var statearr_23307_23375 = state_23256__$1;
(statearr_23307_23375[(2)] = null);

(statearr_23307_23375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (3))){
var inst_23254 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23256__$1,inst_23254);
} else {
if((state_val_23257 === (12))){
var inst_23183 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23308_23376 = state_23256__$1;
(statearr_23308_23376[(2)] = inst_23183);

(statearr_23308_23376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (2))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(4),ch);
} else {
if((state_val_23257 === (23))){
var state_23256__$1 = state_23256;
var statearr_23309_23377 = state_23256__$1;
(statearr_23309_23377[(2)] = null);

(statearr_23309_23377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (35))){
var inst_23238 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23310_23378 = state_23256__$1;
(statearr_23310_23378[(2)] = inst_23238);

(statearr_23310_23378[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (19))){
var inst_23157 = (state_23256[(7)]);
var inst_23161 = cljs.core.chunk_first.call(null,inst_23157);
var inst_23162 = cljs.core.chunk_rest.call(null,inst_23157);
var inst_23163 = cljs.core.count.call(null,inst_23161);
var inst_23137 = inst_23162;
var inst_23138 = inst_23161;
var inst_23139 = inst_23163;
var inst_23140 = (0);
var state_23256__$1 = (function (){var statearr_23311 = state_23256;
(statearr_23311[(13)] = inst_23139);

(statearr_23311[(14)] = inst_23137);

(statearr_23311[(15)] = inst_23138);

(statearr_23311[(17)] = inst_23140);

return statearr_23311;
})();
var statearr_23312_23379 = state_23256__$1;
(statearr_23312_23379[(2)] = null);

(statearr_23312_23379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (11))){
var inst_23137 = (state_23256[(14)]);
var inst_23157 = (state_23256[(7)]);
var inst_23157__$1 = cljs.core.seq.call(null,inst_23137);
var state_23256__$1 = (function (){var statearr_23313 = state_23256;
(statearr_23313[(7)] = inst_23157__$1);

return statearr_23313;
})();
if(inst_23157__$1){
var statearr_23314_23380 = state_23256__$1;
(statearr_23314_23380[(1)] = (16));

} else {
var statearr_23315_23381 = state_23256__$1;
(statearr_23315_23381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (9))){
var inst_23185 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23316_23382 = state_23256__$1;
(statearr_23316_23382[(2)] = inst_23185);

(statearr_23316_23382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (5))){
var inst_23135 = cljs.core.deref.call(null,cs);
var inst_23136 = cljs.core.seq.call(null,inst_23135);
var inst_23137 = inst_23136;
var inst_23138 = null;
var inst_23139 = (0);
var inst_23140 = (0);
var state_23256__$1 = (function (){var statearr_23317 = state_23256;
(statearr_23317[(13)] = inst_23139);

(statearr_23317[(14)] = inst_23137);

(statearr_23317[(15)] = inst_23138);

(statearr_23317[(17)] = inst_23140);

return statearr_23317;
})();
var statearr_23318_23383 = state_23256__$1;
(statearr_23318_23383[(2)] = null);

(statearr_23318_23383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (14))){
var state_23256__$1 = state_23256;
var statearr_23319_23384 = state_23256__$1;
(statearr_23319_23384[(2)] = null);

(statearr_23319_23384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (45))){
var inst_23246 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23320_23385 = state_23256__$1;
(statearr_23320_23385[(2)] = inst_23246);

(statearr_23320_23385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (26))){
var inst_23188 = (state_23256[(29)]);
var inst_23242 = (state_23256[(2)]);
var inst_23243 = cljs.core.seq.call(null,inst_23188);
var state_23256__$1 = (function (){var statearr_23321 = state_23256;
(statearr_23321[(31)] = inst_23242);

return statearr_23321;
})();
if(inst_23243){
var statearr_23322_23386 = state_23256__$1;
(statearr_23322_23386[(1)] = (42));

} else {
var statearr_23323_23387 = state_23256__$1;
(statearr_23323_23387[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (16))){
var inst_23157 = (state_23256[(7)]);
var inst_23159 = cljs.core.chunked_seq_QMARK_.call(null,inst_23157);
var state_23256__$1 = state_23256;
if(inst_23159){
var statearr_23324_23388 = state_23256__$1;
(statearr_23324_23388[(1)] = (19));

} else {
var statearr_23325_23389 = state_23256__$1;
(statearr_23325_23389[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (38))){
var inst_23235 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23326_23390 = state_23256__$1;
(statearr_23326_23390[(2)] = inst_23235);

(statearr_23326_23390[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (30))){
var state_23256__$1 = state_23256;
var statearr_23327_23391 = state_23256__$1;
(statearr_23327_23391[(2)] = null);

(statearr_23327_23391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (10))){
var inst_23138 = (state_23256[(15)]);
var inst_23140 = (state_23256[(17)]);
var inst_23146 = cljs.core._nth.call(null,inst_23138,inst_23140);
var inst_23147 = cljs.core.nth.call(null,inst_23146,(0),null);
var inst_23148 = cljs.core.nth.call(null,inst_23146,(1),null);
var state_23256__$1 = (function (){var statearr_23328 = state_23256;
(statearr_23328[(26)] = inst_23147);

return statearr_23328;
})();
if(cljs.core.truth_(inst_23148)){
var statearr_23329_23392 = state_23256__$1;
(statearr_23329_23392[(1)] = (13));

} else {
var statearr_23330_23393 = state_23256__$1;
(statearr_23330_23393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (18))){
var inst_23181 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23331_23394 = state_23256__$1;
(statearr_23331_23394[(2)] = inst_23181);

(statearr_23331_23394[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (42))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(45),dchan);
} else {
if((state_val_23257 === (37))){
var inst_23224 = (state_23256[(23)]);
var inst_23128 = (state_23256[(11)]);
var inst_23215 = (state_23256[(25)]);
var inst_23224__$1 = cljs.core.first.call(null,inst_23215);
var inst_23225 = cljs.core.async.put_BANG_.call(null,inst_23224__$1,inst_23128,done);
var state_23256__$1 = (function (){var statearr_23332 = state_23256;
(statearr_23332[(23)] = inst_23224__$1);

return statearr_23332;
})();
if(cljs.core.truth_(inst_23225)){
var statearr_23333_23395 = state_23256__$1;
(statearr_23333_23395[(1)] = (39));

} else {
var statearr_23334_23396 = state_23256__$1;
(statearr_23334_23396[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (8))){
var inst_23139 = (state_23256[(13)]);
var inst_23140 = (state_23256[(17)]);
var inst_23142 = (inst_23140 < inst_23139);
var inst_23143 = inst_23142;
var state_23256__$1 = state_23256;
if(cljs.core.truth_(inst_23143)){
var statearr_23335_23397 = state_23256__$1;
(statearr_23335_23397[(1)] = (10));

} else {
var statearr_23336_23398 = state_23256__$1;
(statearr_23336_23398[(1)] = (11));

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
});})(c__6709__auto___23344,cs,m,dchan,dctr,done))
;
return ((function (switch__6653__auto__,c__6709__auto___23344,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6654__auto__ = null;
var cljs$core$async$mult_$_state_machine__6654__auto____0 = (function (){
var statearr_23340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23340[(0)] = cljs$core$async$mult_$_state_machine__6654__auto__);

(statearr_23340[(1)] = (1));

return statearr_23340;
});
var cljs$core$async$mult_$_state_machine__6654__auto____1 = (function (state_23256){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_23256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e23341){if((e23341 instanceof Object)){
var ex__6657__auto__ = e23341;
var statearr_23342_23399 = state_23256;
(statearr_23342_23399[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23256;
state_23256 = G__23400;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6654__auto__ = function(state_23256){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6654__auto____1.call(this,state_23256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6654__auto____0;
cljs$core$async$mult_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6654__auto____1;
return cljs$core$async$mult_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___23344,cs,m,dchan,dctr,done))
})();
var state__6711__auto__ = (function (){var statearr_23343 = f__6710__auto__.call(null);
(statearr_23343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___23344);

return statearr_23343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___23344,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj23402 = {};
return obj23402;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__23403){
var map__23408 = p__23403;
var map__23408__$1 = ((cljs.core.seq_QMARK_.call(null,map__23408))?cljs.core.apply.call(null,cljs.core.hash_map,map__23408):map__23408);
var opts = map__23408__$1;
var statearr_23409_23412 = state;
(statearr_23409_23412[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23408,map__23408__$1,opts){
return (function (val){
var statearr_23410_23413 = state;
(statearr_23410_23413[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23408,map__23408__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23411_23414 = state;
(statearr_23411_23414[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__23403 = null;
if (arguments.length > 3) {
var G__23415__i = 0, G__23415__a = new Array(arguments.length -  3);
while (G__23415__i < G__23415__a.length) {G__23415__a[G__23415__i] = arguments[G__23415__i + 3]; ++G__23415__i;}
  p__23403 = new cljs.core.IndexedSeq(G__23415__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__23403);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__23416){
var state = cljs.core.first(arglist__23416);
arglist__23416 = cljs.core.next(arglist__23416);
var cont_block = cljs.core.first(arglist__23416);
arglist__23416 = cljs.core.next(arglist__23416);
var ports = cljs.core.first(arglist__23416);
var p__23403 = cljs.core.rest(arglist__23416);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__23403);
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
if(typeof cljs.core.async.t23536 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23536 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23537){
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
this.meta23537 = meta23537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23538,meta23537__$1){
var self__ = this;
var _23538__$1 = this;
return (new cljs.core.async.t23536(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23537__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23538){
var self__ = this;
var _23538__$1 = this;
return self__.meta23537;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23536.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t23536.cljs$lang$type = true;

cljs.core.async.t23536.cljs$lang$ctorStr = "cljs.core.async/t23536";

cljs.core.async.t23536.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t23536");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23536 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t23536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23537){
return (new cljs.core.async.t23536(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23537));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23536(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6709__auto___23655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23608){
var state_val_23609 = (state_23608[(1)]);
if((state_val_23609 === (7))){
var inst_23552 = (state_23608[(7)]);
var inst_23557 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23552);
var state_23608__$1 = state_23608;
var statearr_23610_23656 = state_23608__$1;
(statearr_23610_23656[(2)] = inst_23557);

(statearr_23610_23656[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (20))){
var inst_23567 = (state_23608[(8)]);
var state_23608__$1 = state_23608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23608__$1,(23),out,inst_23567);
} else {
if((state_val_23609 === (1))){
var inst_23542 = (state_23608[(9)]);
var inst_23542__$1 = calc_state.call(null);
var inst_23543 = cljs.core.seq_QMARK_.call(null,inst_23542__$1);
var state_23608__$1 = (function (){var statearr_23611 = state_23608;
(statearr_23611[(9)] = inst_23542__$1);

return statearr_23611;
})();
if(inst_23543){
var statearr_23612_23657 = state_23608__$1;
(statearr_23612_23657[(1)] = (2));

} else {
var statearr_23613_23658 = state_23608__$1;
(statearr_23613_23658[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (24))){
var inst_23560 = (state_23608[(10)]);
var inst_23552 = inst_23560;
var state_23608__$1 = (function (){var statearr_23614 = state_23608;
(statearr_23614[(7)] = inst_23552);

return statearr_23614;
})();
var statearr_23615_23659 = state_23608__$1;
(statearr_23615_23659[(2)] = null);

(statearr_23615_23659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (4))){
var inst_23542 = (state_23608[(9)]);
var inst_23548 = (state_23608[(2)]);
var inst_23549 = cljs.core.get.call(null,inst_23548,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23550 = cljs.core.get.call(null,inst_23548,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23551 = cljs.core.get.call(null,inst_23548,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23552 = inst_23542;
var state_23608__$1 = (function (){var statearr_23616 = state_23608;
(statearr_23616[(11)] = inst_23549);

(statearr_23616[(12)] = inst_23551);

(statearr_23616[(13)] = inst_23550);

(statearr_23616[(7)] = inst_23552);

return statearr_23616;
})();
var statearr_23617_23660 = state_23608__$1;
(statearr_23617_23660[(2)] = null);

(statearr_23617_23660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (15))){
var state_23608__$1 = state_23608;
var statearr_23618_23661 = state_23608__$1;
(statearr_23618_23661[(2)] = null);

(statearr_23618_23661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (21))){
var inst_23560 = (state_23608[(10)]);
var inst_23552 = inst_23560;
var state_23608__$1 = (function (){var statearr_23619 = state_23608;
(statearr_23619[(7)] = inst_23552);

return statearr_23619;
})();
var statearr_23620_23662 = state_23608__$1;
(statearr_23620_23662[(2)] = null);

(statearr_23620_23662[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (13))){
var inst_23604 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
var statearr_23621_23663 = state_23608__$1;
(statearr_23621_23663[(2)] = inst_23604);

(statearr_23621_23663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (22))){
var inst_23602 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
var statearr_23622_23664 = state_23608__$1;
(statearr_23622_23664[(2)] = inst_23602);

(statearr_23622_23664[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (6))){
var inst_23606 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23608__$1,inst_23606);
} else {
if((state_val_23609 === (25))){
var state_23608__$1 = state_23608;
var statearr_23623_23665 = state_23608__$1;
(statearr_23623_23665[(2)] = null);

(statearr_23623_23665[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (17))){
var inst_23582 = (state_23608[(14)]);
var state_23608__$1 = state_23608;
var statearr_23624_23666 = state_23608__$1;
(statearr_23624_23666[(2)] = inst_23582);

(statearr_23624_23666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (3))){
var inst_23542 = (state_23608[(9)]);
var state_23608__$1 = state_23608;
var statearr_23625_23667 = state_23608__$1;
(statearr_23625_23667[(2)] = inst_23542);

(statearr_23625_23667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (12))){
var inst_23568 = (state_23608[(15)]);
var inst_23582 = (state_23608[(14)]);
var inst_23561 = (state_23608[(16)]);
var inst_23582__$1 = inst_23561.call(null,inst_23568);
var state_23608__$1 = (function (){var statearr_23626 = state_23608;
(statearr_23626[(14)] = inst_23582__$1);

return statearr_23626;
})();
if(cljs.core.truth_(inst_23582__$1)){
var statearr_23627_23668 = state_23608__$1;
(statearr_23627_23668[(1)] = (17));

} else {
var statearr_23628_23669 = state_23608__$1;
(statearr_23628_23669[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (2))){
var inst_23542 = (state_23608[(9)]);
var inst_23545 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23542);
var state_23608__$1 = state_23608;
var statearr_23629_23670 = state_23608__$1;
(statearr_23629_23670[(2)] = inst_23545);

(statearr_23629_23670[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (23))){
var inst_23593 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
if(cljs.core.truth_(inst_23593)){
var statearr_23630_23671 = state_23608__$1;
(statearr_23630_23671[(1)] = (24));

} else {
var statearr_23631_23672 = state_23608__$1;
(statearr_23631_23672[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (19))){
var inst_23590 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
if(cljs.core.truth_(inst_23590)){
var statearr_23632_23673 = state_23608__$1;
(statearr_23632_23673[(1)] = (20));

} else {
var statearr_23633_23674 = state_23608__$1;
(statearr_23633_23674[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (11))){
var inst_23567 = (state_23608[(8)]);
var inst_23573 = (inst_23567 == null);
var state_23608__$1 = state_23608;
if(cljs.core.truth_(inst_23573)){
var statearr_23634_23675 = state_23608__$1;
(statearr_23634_23675[(1)] = (14));

} else {
var statearr_23635_23676 = state_23608__$1;
(statearr_23635_23676[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (9))){
var inst_23560 = (state_23608[(10)]);
var inst_23560__$1 = (state_23608[(2)]);
var inst_23561 = cljs.core.get.call(null,inst_23560__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23562 = cljs.core.get.call(null,inst_23560__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23563 = cljs.core.get.call(null,inst_23560__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23608__$1 = (function (){var statearr_23636 = state_23608;
(statearr_23636[(10)] = inst_23560__$1);

(statearr_23636[(17)] = inst_23562);

(statearr_23636[(16)] = inst_23561);

return statearr_23636;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23608__$1,(10),inst_23563);
} else {
if((state_val_23609 === (5))){
var inst_23552 = (state_23608[(7)]);
var inst_23555 = cljs.core.seq_QMARK_.call(null,inst_23552);
var state_23608__$1 = state_23608;
if(inst_23555){
var statearr_23637_23677 = state_23608__$1;
(statearr_23637_23677[(1)] = (7));

} else {
var statearr_23638_23678 = state_23608__$1;
(statearr_23638_23678[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (14))){
var inst_23568 = (state_23608[(15)]);
var inst_23575 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23568);
var state_23608__$1 = state_23608;
var statearr_23639_23679 = state_23608__$1;
(statearr_23639_23679[(2)] = inst_23575);

(statearr_23639_23679[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (26))){
var inst_23598 = (state_23608[(2)]);
var state_23608__$1 = state_23608;
var statearr_23640_23680 = state_23608__$1;
(statearr_23640_23680[(2)] = inst_23598);

(statearr_23640_23680[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (16))){
var inst_23578 = (state_23608[(2)]);
var inst_23579 = calc_state.call(null);
var inst_23552 = inst_23579;
var state_23608__$1 = (function (){var statearr_23641 = state_23608;
(statearr_23641[(18)] = inst_23578);

(statearr_23641[(7)] = inst_23552);

return statearr_23641;
})();
var statearr_23642_23681 = state_23608__$1;
(statearr_23642_23681[(2)] = null);

(statearr_23642_23681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (10))){
var inst_23567 = (state_23608[(8)]);
var inst_23568 = (state_23608[(15)]);
var inst_23566 = (state_23608[(2)]);
var inst_23567__$1 = cljs.core.nth.call(null,inst_23566,(0),null);
var inst_23568__$1 = cljs.core.nth.call(null,inst_23566,(1),null);
var inst_23569 = (inst_23567__$1 == null);
var inst_23570 = cljs.core._EQ_.call(null,inst_23568__$1,change);
var inst_23571 = (inst_23569) || (inst_23570);
var state_23608__$1 = (function (){var statearr_23643 = state_23608;
(statearr_23643[(8)] = inst_23567__$1);

(statearr_23643[(15)] = inst_23568__$1);

return statearr_23643;
})();
if(cljs.core.truth_(inst_23571)){
var statearr_23644_23682 = state_23608__$1;
(statearr_23644_23682[(1)] = (11));

} else {
var statearr_23645_23683 = state_23608__$1;
(statearr_23645_23683[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (18))){
var inst_23562 = (state_23608[(17)]);
var inst_23568 = (state_23608[(15)]);
var inst_23561 = (state_23608[(16)]);
var inst_23585 = cljs.core.empty_QMARK_.call(null,inst_23561);
var inst_23586 = inst_23562.call(null,inst_23568);
var inst_23587 = cljs.core.not.call(null,inst_23586);
var inst_23588 = (inst_23585) && (inst_23587);
var state_23608__$1 = state_23608;
var statearr_23646_23684 = state_23608__$1;
(statearr_23646_23684[(2)] = inst_23588);

(statearr_23646_23684[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23609 === (8))){
var inst_23552 = (state_23608[(7)]);
var state_23608__$1 = state_23608;
var statearr_23647_23685 = state_23608__$1;
(statearr_23647_23685[(2)] = inst_23552);

(statearr_23647_23685[(1)] = (9));


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
});})(c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6653__auto__,c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6654__auto__ = null;
var cljs$core$async$mix_$_state_machine__6654__auto____0 = (function (){
var statearr_23651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23651[(0)] = cljs$core$async$mix_$_state_machine__6654__auto__);

(statearr_23651[(1)] = (1));

return statearr_23651;
});
var cljs$core$async$mix_$_state_machine__6654__auto____1 = (function (state_23608){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_23608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e23652){if((e23652 instanceof Object)){
var ex__6657__auto__ = e23652;
var statearr_23653_23686 = state_23608;
(statearr_23653_23686[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23687 = state_23608;
state_23608 = G__23687;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6654__auto__ = function(state_23608){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6654__auto____1.call(this,state_23608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6654__auto____0;
cljs$core$async$mix_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6654__auto____1;
return cljs$core$async$mix_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6711__auto__ = (function (){var statearr_23654 = f__6710__auto__.call(null);
(statearr_23654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___23655);

return statearr_23654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___23655,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj23689 = {};
return obj23689;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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
var or__4076__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4076__auto__,mults){
return (function (p1__23690_SHARP_){
if(cljs.core.truth_(p1__23690_SHARP_.call(null,topic))){
return p1__23690_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23690_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23813 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23813 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta23814){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23814 = meta23814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23815,meta23814__$1){
var self__ = this;
var _23815__$1 = this;
return (new cljs.core.async.t23813(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23814__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23815){
var self__ = this;
var _23815__$1 = this;
return self__.meta23814;
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t23813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23813.cljs$lang$type = true;

cljs.core.async.t23813.cljs$lang$ctorStr = "cljs.core.async/t23813";

cljs.core.async.t23813.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t23813");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23813 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t23813(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23814){
return (new cljs.core.async.t23813(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23814));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23813(cljs$core$async$pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6709__auto___23935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___23935,mults,ensure_mult,p){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___23935,mults,ensure_mult,p){
return (function (state_23887){
var state_val_23888 = (state_23887[(1)]);
if((state_val_23888 === (7))){
var inst_23883 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23889_23936 = state_23887__$1;
(statearr_23889_23936[(2)] = inst_23883);

(statearr_23889_23936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (20))){
var state_23887__$1 = state_23887;
var statearr_23890_23937 = state_23887__$1;
(statearr_23890_23937[(2)] = null);

(statearr_23890_23937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (1))){
var state_23887__$1 = state_23887;
var statearr_23891_23938 = state_23887__$1;
(statearr_23891_23938[(2)] = null);

(statearr_23891_23938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (24))){
var inst_23866 = (state_23887[(7)]);
var inst_23875 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23866);
var state_23887__$1 = state_23887;
var statearr_23892_23939 = state_23887__$1;
(statearr_23892_23939[(2)] = inst_23875);

(statearr_23892_23939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (4))){
var inst_23818 = (state_23887[(8)]);
var inst_23818__$1 = (state_23887[(2)]);
var inst_23819 = (inst_23818__$1 == null);
var state_23887__$1 = (function (){var statearr_23893 = state_23887;
(statearr_23893[(8)] = inst_23818__$1);

return statearr_23893;
})();
if(cljs.core.truth_(inst_23819)){
var statearr_23894_23940 = state_23887__$1;
(statearr_23894_23940[(1)] = (5));

} else {
var statearr_23895_23941 = state_23887__$1;
(statearr_23895_23941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (15))){
var inst_23860 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23896_23942 = state_23887__$1;
(statearr_23896_23942[(2)] = inst_23860);

(statearr_23896_23942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (21))){
var inst_23880 = (state_23887[(2)]);
var state_23887__$1 = (function (){var statearr_23897 = state_23887;
(statearr_23897[(9)] = inst_23880);

return statearr_23897;
})();
var statearr_23898_23943 = state_23887__$1;
(statearr_23898_23943[(2)] = null);

(statearr_23898_23943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (13))){
var inst_23842 = (state_23887[(10)]);
var inst_23844 = cljs.core.chunked_seq_QMARK_.call(null,inst_23842);
var state_23887__$1 = state_23887;
if(inst_23844){
var statearr_23899_23944 = state_23887__$1;
(statearr_23899_23944[(1)] = (16));

} else {
var statearr_23900_23945 = state_23887__$1;
(statearr_23900_23945[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (22))){
var inst_23872 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
if(cljs.core.truth_(inst_23872)){
var statearr_23901_23946 = state_23887__$1;
(statearr_23901_23946[(1)] = (23));

} else {
var statearr_23902_23947 = state_23887__$1;
(statearr_23902_23947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (6))){
var inst_23868 = (state_23887[(11)]);
var inst_23866 = (state_23887[(7)]);
var inst_23818 = (state_23887[(8)]);
var inst_23866__$1 = topic_fn.call(null,inst_23818);
var inst_23867 = cljs.core.deref.call(null,mults);
var inst_23868__$1 = cljs.core.get.call(null,inst_23867,inst_23866__$1);
var state_23887__$1 = (function (){var statearr_23903 = state_23887;
(statearr_23903[(11)] = inst_23868__$1);

(statearr_23903[(7)] = inst_23866__$1);

return statearr_23903;
})();
if(cljs.core.truth_(inst_23868__$1)){
var statearr_23904_23948 = state_23887__$1;
(statearr_23904_23948[(1)] = (19));

} else {
var statearr_23905_23949 = state_23887__$1;
(statearr_23905_23949[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (25))){
var inst_23877 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23906_23950 = state_23887__$1;
(statearr_23906_23950[(2)] = inst_23877);

(statearr_23906_23950[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (17))){
var inst_23842 = (state_23887[(10)]);
var inst_23851 = cljs.core.first.call(null,inst_23842);
var inst_23852 = cljs.core.async.muxch_STAR_.call(null,inst_23851);
var inst_23853 = cljs.core.async.close_BANG_.call(null,inst_23852);
var inst_23854 = cljs.core.next.call(null,inst_23842);
var inst_23828 = inst_23854;
var inst_23829 = null;
var inst_23830 = (0);
var inst_23831 = (0);
var state_23887__$1 = (function (){var statearr_23907 = state_23887;
(statearr_23907[(12)] = inst_23829);

(statearr_23907[(13)] = inst_23830);

(statearr_23907[(14)] = inst_23828);

(statearr_23907[(15)] = inst_23831);

(statearr_23907[(16)] = inst_23853);

return statearr_23907;
})();
var statearr_23908_23951 = state_23887__$1;
(statearr_23908_23951[(2)] = null);

(statearr_23908_23951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (3))){
var inst_23885 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23887__$1,inst_23885);
} else {
if((state_val_23888 === (12))){
var inst_23862 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23909_23952 = state_23887__$1;
(statearr_23909_23952[(2)] = inst_23862);

(statearr_23909_23952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (2))){
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23887__$1,(4),ch);
} else {
if((state_val_23888 === (23))){
var state_23887__$1 = state_23887;
var statearr_23910_23953 = state_23887__$1;
(statearr_23910_23953[(2)] = null);

(statearr_23910_23953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (19))){
var inst_23868 = (state_23887[(11)]);
var inst_23818 = (state_23887[(8)]);
var inst_23870 = cljs.core.async.muxch_STAR_.call(null,inst_23868);
var state_23887__$1 = state_23887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23887__$1,(22),inst_23870,inst_23818);
} else {
if((state_val_23888 === (11))){
var inst_23842 = (state_23887[(10)]);
var inst_23828 = (state_23887[(14)]);
var inst_23842__$1 = cljs.core.seq.call(null,inst_23828);
var state_23887__$1 = (function (){var statearr_23911 = state_23887;
(statearr_23911[(10)] = inst_23842__$1);

return statearr_23911;
})();
if(inst_23842__$1){
var statearr_23912_23954 = state_23887__$1;
(statearr_23912_23954[(1)] = (13));

} else {
var statearr_23913_23955 = state_23887__$1;
(statearr_23913_23955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (9))){
var inst_23864 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23914_23956 = state_23887__$1;
(statearr_23914_23956[(2)] = inst_23864);

(statearr_23914_23956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (5))){
var inst_23825 = cljs.core.deref.call(null,mults);
var inst_23826 = cljs.core.vals.call(null,inst_23825);
var inst_23827 = cljs.core.seq.call(null,inst_23826);
var inst_23828 = inst_23827;
var inst_23829 = null;
var inst_23830 = (0);
var inst_23831 = (0);
var state_23887__$1 = (function (){var statearr_23915 = state_23887;
(statearr_23915[(12)] = inst_23829);

(statearr_23915[(13)] = inst_23830);

(statearr_23915[(14)] = inst_23828);

(statearr_23915[(15)] = inst_23831);

return statearr_23915;
})();
var statearr_23916_23957 = state_23887__$1;
(statearr_23916_23957[(2)] = null);

(statearr_23916_23957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (14))){
var state_23887__$1 = state_23887;
var statearr_23920_23958 = state_23887__$1;
(statearr_23920_23958[(2)] = null);

(statearr_23920_23958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (16))){
var inst_23842 = (state_23887[(10)]);
var inst_23846 = cljs.core.chunk_first.call(null,inst_23842);
var inst_23847 = cljs.core.chunk_rest.call(null,inst_23842);
var inst_23848 = cljs.core.count.call(null,inst_23846);
var inst_23828 = inst_23847;
var inst_23829 = inst_23846;
var inst_23830 = inst_23848;
var inst_23831 = (0);
var state_23887__$1 = (function (){var statearr_23921 = state_23887;
(statearr_23921[(12)] = inst_23829);

(statearr_23921[(13)] = inst_23830);

(statearr_23921[(14)] = inst_23828);

(statearr_23921[(15)] = inst_23831);

return statearr_23921;
})();
var statearr_23922_23959 = state_23887__$1;
(statearr_23922_23959[(2)] = null);

(statearr_23922_23959[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (10))){
var inst_23829 = (state_23887[(12)]);
var inst_23830 = (state_23887[(13)]);
var inst_23828 = (state_23887[(14)]);
var inst_23831 = (state_23887[(15)]);
var inst_23836 = cljs.core._nth.call(null,inst_23829,inst_23831);
var inst_23837 = cljs.core.async.muxch_STAR_.call(null,inst_23836);
var inst_23838 = cljs.core.async.close_BANG_.call(null,inst_23837);
var inst_23839 = (inst_23831 + (1));
var tmp23917 = inst_23829;
var tmp23918 = inst_23830;
var tmp23919 = inst_23828;
var inst_23828__$1 = tmp23919;
var inst_23829__$1 = tmp23917;
var inst_23830__$1 = tmp23918;
var inst_23831__$1 = inst_23839;
var state_23887__$1 = (function (){var statearr_23923 = state_23887;
(statearr_23923[(17)] = inst_23838);

(statearr_23923[(12)] = inst_23829__$1);

(statearr_23923[(13)] = inst_23830__$1);

(statearr_23923[(14)] = inst_23828__$1);

(statearr_23923[(15)] = inst_23831__$1);

return statearr_23923;
})();
var statearr_23924_23960 = state_23887__$1;
(statearr_23924_23960[(2)] = null);

(statearr_23924_23960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (18))){
var inst_23857 = (state_23887[(2)]);
var state_23887__$1 = state_23887;
var statearr_23925_23961 = state_23887__$1;
(statearr_23925_23961[(2)] = inst_23857);

(statearr_23925_23961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23888 === (8))){
var inst_23830 = (state_23887[(13)]);
var inst_23831 = (state_23887[(15)]);
var inst_23833 = (inst_23831 < inst_23830);
var inst_23834 = inst_23833;
var state_23887__$1 = state_23887;
if(cljs.core.truth_(inst_23834)){
var statearr_23926_23962 = state_23887__$1;
(statearr_23926_23962[(1)] = (10));

} else {
var statearr_23927_23963 = state_23887__$1;
(statearr_23927_23963[(1)] = (11));

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
});})(c__6709__auto___23935,mults,ensure_mult,p))
;
return ((function (switch__6653__auto__,c__6709__auto___23935,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6654__auto__ = null;
var cljs$core$async$pub_$_state_machine__6654__auto____0 = (function (){
var statearr_23931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23931[(0)] = cljs$core$async$pub_$_state_machine__6654__auto__);

(statearr_23931[(1)] = (1));

return statearr_23931;
});
var cljs$core$async$pub_$_state_machine__6654__auto____1 = (function (state_23887){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_23887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e23932){if((e23932 instanceof Object)){
var ex__6657__auto__ = e23932;
var statearr_23933_23964 = state_23887;
(statearr_23933_23964[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23965 = state_23887;
state_23887 = G__23965;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6654__auto__ = function(state_23887){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6654__auto____1.call(this,state_23887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6654__auto____0;
cljs$core$async$pub_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6654__auto____1;
return cljs$core$async$pub_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___23935,mults,ensure_mult,p))
})();
var state__6711__auto__ = (function (){var statearr_23934 = f__6710__auto__.call(null);
(statearr_23934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___23935);

return statearr_23934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___23935,mults,ensure_mult,p))
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
var c__6709__auto___24102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24072){
var state_val_24073 = (state_24072[(1)]);
if((state_val_24073 === (7))){
var state_24072__$1 = state_24072;
var statearr_24074_24103 = state_24072__$1;
(statearr_24074_24103[(2)] = null);

(statearr_24074_24103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (1))){
var state_24072__$1 = state_24072;
var statearr_24075_24104 = state_24072__$1;
(statearr_24075_24104[(2)] = null);

(statearr_24075_24104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (4))){
var inst_24036 = (state_24072[(7)]);
var inst_24038 = (inst_24036 < cnt);
var state_24072__$1 = state_24072;
if(cljs.core.truth_(inst_24038)){
var statearr_24076_24105 = state_24072__$1;
(statearr_24076_24105[(1)] = (6));

} else {
var statearr_24077_24106 = state_24072__$1;
(statearr_24077_24106[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (15))){
var inst_24068 = (state_24072[(2)]);
var state_24072__$1 = state_24072;
var statearr_24078_24107 = state_24072__$1;
(statearr_24078_24107[(2)] = inst_24068);

(statearr_24078_24107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (13))){
var inst_24061 = cljs.core.async.close_BANG_.call(null,out);
var state_24072__$1 = state_24072;
var statearr_24079_24108 = state_24072__$1;
(statearr_24079_24108[(2)] = inst_24061);

(statearr_24079_24108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (6))){
var state_24072__$1 = state_24072;
var statearr_24080_24109 = state_24072__$1;
(statearr_24080_24109[(2)] = null);

(statearr_24080_24109[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (3))){
var inst_24070 = (state_24072[(2)]);
var state_24072__$1 = state_24072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24072__$1,inst_24070);
} else {
if((state_val_24073 === (12))){
var inst_24058 = (state_24072[(8)]);
var inst_24058__$1 = (state_24072[(2)]);
var inst_24059 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24058__$1);
var state_24072__$1 = (function (){var statearr_24081 = state_24072;
(statearr_24081[(8)] = inst_24058__$1);

return statearr_24081;
})();
if(cljs.core.truth_(inst_24059)){
var statearr_24082_24110 = state_24072__$1;
(statearr_24082_24110[(1)] = (13));

} else {
var statearr_24083_24111 = state_24072__$1;
(statearr_24083_24111[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (2))){
var inst_24035 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24036 = (0);
var state_24072__$1 = (function (){var statearr_24084 = state_24072;
(statearr_24084[(7)] = inst_24036);

(statearr_24084[(9)] = inst_24035);

return statearr_24084;
})();
var statearr_24085_24112 = state_24072__$1;
(statearr_24085_24112[(2)] = null);

(statearr_24085_24112[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (11))){
var inst_24036 = (state_24072[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24072,(10),Object,null,(9));
var inst_24045 = chs__$1.call(null,inst_24036);
var inst_24046 = done.call(null,inst_24036);
var inst_24047 = cljs.core.async.take_BANG_.call(null,inst_24045,inst_24046);
var state_24072__$1 = state_24072;
var statearr_24086_24113 = state_24072__$1;
(statearr_24086_24113[(2)] = inst_24047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24072__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (9))){
var inst_24036 = (state_24072[(7)]);
var inst_24049 = (state_24072[(2)]);
var inst_24050 = (inst_24036 + (1));
var inst_24036__$1 = inst_24050;
var state_24072__$1 = (function (){var statearr_24087 = state_24072;
(statearr_24087[(7)] = inst_24036__$1);

(statearr_24087[(10)] = inst_24049);

return statearr_24087;
})();
var statearr_24088_24114 = state_24072__$1;
(statearr_24088_24114[(2)] = null);

(statearr_24088_24114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (5))){
var inst_24056 = (state_24072[(2)]);
var state_24072__$1 = (function (){var statearr_24089 = state_24072;
(statearr_24089[(11)] = inst_24056);

return statearr_24089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24072__$1,(12),dchan);
} else {
if((state_val_24073 === (14))){
var inst_24058 = (state_24072[(8)]);
var inst_24063 = cljs.core.apply.call(null,f,inst_24058);
var state_24072__$1 = state_24072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24072__$1,(16),out,inst_24063);
} else {
if((state_val_24073 === (16))){
var inst_24065 = (state_24072[(2)]);
var state_24072__$1 = (function (){var statearr_24090 = state_24072;
(statearr_24090[(12)] = inst_24065);

return statearr_24090;
})();
var statearr_24091_24115 = state_24072__$1;
(statearr_24091_24115[(2)] = null);

(statearr_24091_24115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (10))){
var inst_24040 = (state_24072[(2)]);
var inst_24041 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24072__$1 = (function (){var statearr_24092 = state_24072;
(statearr_24092[(13)] = inst_24040);

return statearr_24092;
})();
var statearr_24093_24116 = state_24072__$1;
(statearr_24093_24116[(2)] = inst_24041);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24072__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (8))){
var inst_24054 = (state_24072[(2)]);
var state_24072__$1 = state_24072;
var statearr_24094_24117 = state_24072__$1;
(statearr_24094_24117[(2)] = inst_24054);

(statearr_24094_24117[(1)] = (5));


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
});})(c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6653__auto__,c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6654__auto__ = null;
var cljs$core$async$map_$_state_machine__6654__auto____0 = (function (){
var statearr_24098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24098[(0)] = cljs$core$async$map_$_state_machine__6654__auto__);

(statearr_24098[(1)] = (1));

return statearr_24098;
});
var cljs$core$async$map_$_state_machine__6654__auto____1 = (function (state_24072){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24099){if((e24099 instanceof Object)){
var ex__6657__auto__ = e24099;
var statearr_24100_24118 = state_24072;
(statearr_24100_24118[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24119 = state_24072;
state_24072 = G__24119;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6654__auto__ = function(state_24072){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6654__auto____1.call(this,state_24072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6654__auto____0;
cljs$core$async$map_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6654__auto____1;
return cljs$core$async$map_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6711__auto__ = (function (){var statearr_24101 = f__6710__auto__.call(null);
(statearr_24101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24102);

return statearr_24101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6709__auto___24227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24227,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24227,out){
return (function (state_24203){
var state_val_24204 = (state_24203[(1)]);
if((state_val_24204 === (7))){
var inst_24183 = (state_24203[(7)]);
var inst_24182 = (state_24203[(8)]);
var inst_24182__$1 = (state_24203[(2)]);
var inst_24183__$1 = cljs.core.nth.call(null,inst_24182__$1,(0),null);
var inst_24184 = cljs.core.nth.call(null,inst_24182__$1,(1),null);
var inst_24185 = (inst_24183__$1 == null);
var state_24203__$1 = (function (){var statearr_24205 = state_24203;
(statearr_24205[(7)] = inst_24183__$1);

(statearr_24205[(9)] = inst_24184);

(statearr_24205[(8)] = inst_24182__$1);

return statearr_24205;
})();
if(cljs.core.truth_(inst_24185)){
var statearr_24206_24228 = state_24203__$1;
(statearr_24206_24228[(1)] = (8));

} else {
var statearr_24207_24229 = state_24203__$1;
(statearr_24207_24229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (1))){
var inst_24174 = cljs.core.vec.call(null,chs);
var inst_24175 = inst_24174;
var state_24203__$1 = (function (){var statearr_24208 = state_24203;
(statearr_24208[(10)] = inst_24175);

return statearr_24208;
})();
var statearr_24209_24230 = state_24203__$1;
(statearr_24209_24230[(2)] = null);

(statearr_24209_24230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (4))){
var inst_24175 = (state_24203[(10)]);
var state_24203__$1 = state_24203;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24203__$1,(7),inst_24175);
} else {
if((state_val_24204 === (6))){
var inst_24199 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24210_24231 = state_24203__$1;
(statearr_24210_24231[(2)] = inst_24199);

(statearr_24210_24231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (3))){
var inst_24201 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24203__$1,inst_24201);
} else {
if((state_val_24204 === (2))){
var inst_24175 = (state_24203[(10)]);
var inst_24177 = cljs.core.count.call(null,inst_24175);
var inst_24178 = (inst_24177 > (0));
var state_24203__$1 = state_24203;
if(cljs.core.truth_(inst_24178)){
var statearr_24212_24232 = state_24203__$1;
(statearr_24212_24232[(1)] = (4));

} else {
var statearr_24213_24233 = state_24203__$1;
(statearr_24213_24233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (11))){
var inst_24175 = (state_24203[(10)]);
var inst_24192 = (state_24203[(2)]);
var tmp24211 = inst_24175;
var inst_24175__$1 = tmp24211;
var state_24203__$1 = (function (){var statearr_24214 = state_24203;
(statearr_24214[(10)] = inst_24175__$1);

(statearr_24214[(11)] = inst_24192);

return statearr_24214;
})();
var statearr_24215_24234 = state_24203__$1;
(statearr_24215_24234[(2)] = null);

(statearr_24215_24234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (9))){
var inst_24183 = (state_24203[(7)]);
var state_24203__$1 = state_24203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24203__$1,(11),out,inst_24183);
} else {
if((state_val_24204 === (5))){
var inst_24197 = cljs.core.async.close_BANG_.call(null,out);
var state_24203__$1 = state_24203;
var statearr_24216_24235 = state_24203__$1;
(statearr_24216_24235[(2)] = inst_24197);

(statearr_24216_24235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (10))){
var inst_24195 = (state_24203[(2)]);
var state_24203__$1 = state_24203;
var statearr_24217_24236 = state_24203__$1;
(statearr_24217_24236[(2)] = inst_24195);

(statearr_24217_24236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24204 === (8))){
var inst_24183 = (state_24203[(7)]);
var inst_24175 = (state_24203[(10)]);
var inst_24184 = (state_24203[(9)]);
var inst_24182 = (state_24203[(8)]);
var inst_24187 = (function (){var cs = inst_24175;
var vec__24180 = inst_24182;
var v = inst_24183;
var c = inst_24184;
return ((function (cs,vec__24180,v,c,inst_24183,inst_24175,inst_24184,inst_24182,state_val_24204,c__6709__auto___24227,out){
return (function (p1__24120_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24120_SHARP_);
});
;})(cs,vec__24180,v,c,inst_24183,inst_24175,inst_24184,inst_24182,state_val_24204,c__6709__auto___24227,out))
})();
var inst_24188 = cljs.core.filterv.call(null,inst_24187,inst_24175);
var inst_24175__$1 = inst_24188;
var state_24203__$1 = (function (){var statearr_24218 = state_24203;
(statearr_24218[(10)] = inst_24175__$1);

return statearr_24218;
})();
var statearr_24219_24237 = state_24203__$1;
(statearr_24219_24237[(2)] = null);

(statearr_24219_24237[(1)] = (2));


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
});})(c__6709__auto___24227,out))
;
return ((function (switch__6653__auto__,c__6709__auto___24227,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6654__auto__ = null;
var cljs$core$async$merge_$_state_machine__6654__auto____0 = (function (){
var statearr_24223 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24223[(0)] = cljs$core$async$merge_$_state_machine__6654__auto__);

(statearr_24223[(1)] = (1));

return statearr_24223;
});
var cljs$core$async$merge_$_state_machine__6654__auto____1 = (function (state_24203){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24224){if((e24224 instanceof Object)){
var ex__6657__auto__ = e24224;
var statearr_24225_24238 = state_24203;
(statearr_24225_24238[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24239 = state_24203;
state_24203 = G__24239;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6654__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6654__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6654__auto____0;
cljs$core$async$merge_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6654__auto____1;
return cljs$core$async$merge_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24227,out))
})();
var state__6711__auto__ = (function (){var statearr_24226 = f__6710__auto__.call(null);
(statearr_24226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24227);

return statearr_24226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24227,out))
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
var c__6709__auto___24332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24332,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24332,out){
return (function (state_24309){
var state_val_24310 = (state_24309[(1)]);
if((state_val_24310 === (7))){
var inst_24291 = (state_24309[(7)]);
var inst_24291__$1 = (state_24309[(2)]);
var inst_24292 = (inst_24291__$1 == null);
var inst_24293 = cljs.core.not.call(null,inst_24292);
var state_24309__$1 = (function (){var statearr_24311 = state_24309;
(statearr_24311[(7)] = inst_24291__$1);

return statearr_24311;
})();
if(inst_24293){
var statearr_24312_24333 = state_24309__$1;
(statearr_24312_24333[(1)] = (8));

} else {
var statearr_24313_24334 = state_24309__$1;
(statearr_24313_24334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (1))){
var inst_24286 = (0);
var state_24309__$1 = (function (){var statearr_24314 = state_24309;
(statearr_24314[(8)] = inst_24286);

return statearr_24314;
})();
var statearr_24315_24335 = state_24309__$1;
(statearr_24315_24335[(2)] = null);

(statearr_24315_24335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (4))){
var state_24309__$1 = state_24309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24309__$1,(7),ch);
} else {
if((state_val_24310 === (6))){
var inst_24304 = (state_24309[(2)]);
var state_24309__$1 = state_24309;
var statearr_24316_24336 = state_24309__$1;
(statearr_24316_24336[(2)] = inst_24304);

(statearr_24316_24336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (3))){
var inst_24306 = (state_24309[(2)]);
var inst_24307 = cljs.core.async.close_BANG_.call(null,out);
var state_24309__$1 = (function (){var statearr_24317 = state_24309;
(statearr_24317[(9)] = inst_24306);

return statearr_24317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24309__$1,inst_24307);
} else {
if((state_val_24310 === (2))){
var inst_24286 = (state_24309[(8)]);
var inst_24288 = (inst_24286 < n);
var state_24309__$1 = state_24309;
if(cljs.core.truth_(inst_24288)){
var statearr_24318_24337 = state_24309__$1;
(statearr_24318_24337[(1)] = (4));

} else {
var statearr_24319_24338 = state_24309__$1;
(statearr_24319_24338[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (11))){
var inst_24286 = (state_24309[(8)]);
var inst_24296 = (state_24309[(2)]);
var inst_24297 = (inst_24286 + (1));
var inst_24286__$1 = inst_24297;
var state_24309__$1 = (function (){var statearr_24320 = state_24309;
(statearr_24320[(8)] = inst_24286__$1);

(statearr_24320[(10)] = inst_24296);

return statearr_24320;
})();
var statearr_24321_24339 = state_24309__$1;
(statearr_24321_24339[(2)] = null);

(statearr_24321_24339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (9))){
var state_24309__$1 = state_24309;
var statearr_24322_24340 = state_24309__$1;
(statearr_24322_24340[(2)] = null);

(statearr_24322_24340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (5))){
var state_24309__$1 = state_24309;
var statearr_24323_24341 = state_24309__$1;
(statearr_24323_24341[(2)] = null);

(statearr_24323_24341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (10))){
var inst_24301 = (state_24309[(2)]);
var state_24309__$1 = state_24309;
var statearr_24324_24342 = state_24309__$1;
(statearr_24324_24342[(2)] = inst_24301);

(statearr_24324_24342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24310 === (8))){
var inst_24291 = (state_24309[(7)]);
var state_24309__$1 = state_24309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24309__$1,(11),out,inst_24291);
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
});})(c__6709__auto___24332,out))
;
return ((function (switch__6653__auto__,c__6709__auto___24332,out){
return (function() {
var cljs$core$async$take_$_state_machine__6654__auto__ = null;
var cljs$core$async$take_$_state_machine__6654__auto____0 = (function (){
var statearr_24328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24328[(0)] = cljs$core$async$take_$_state_machine__6654__auto__);

(statearr_24328[(1)] = (1));

return statearr_24328;
});
var cljs$core$async$take_$_state_machine__6654__auto____1 = (function (state_24309){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24329){if((e24329 instanceof Object)){
var ex__6657__auto__ = e24329;
var statearr_24330_24343 = state_24309;
(statearr_24330_24343[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24344 = state_24309;
state_24309 = G__24344;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6654__auto__ = function(state_24309){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6654__auto____1.call(this,state_24309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6654__auto____0;
cljs$core$async$take_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6654__auto____1;
return cljs$core$async$take_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24332,out))
})();
var state__6711__auto__ = (function (){var statearr_24331 = f__6710__auto__.call(null);
(statearr_24331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24332);

return statearr_24331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24332,out))
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
if(typeof cljs.core.async.t24352 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24352 = (function (map_LT_,f,ch,meta24353){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24353 = meta24353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24354,meta24353__$1){
var self__ = this;
var _24354__$1 = this;
return (new cljs.core.async.t24352(self__.map_LT_,self__.f,self__.ch,meta24353__$1));
});

cljs.core.async.t24352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24354){
var self__ = this;
var _24354__$1 = this;
return self__.meta24353;
});

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t24355 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24355 = (function (map_LT_,f,ch,meta24353,_,fn1,meta24356){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24353 = meta24353;
this._ = _;
this.fn1 = fn1;
this.meta24356 = meta24356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24357,meta24356__$1){
var self__ = this;
var _24357__$1 = this;
return (new cljs.core.async.t24355(self__.map_LT_,self__.f,self__.ch,self__.meta24353,self__._,self__.fn1,meta24356__$1));
});})(___$1))
;

cljs.core.async.t24355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24357){
var self__ = this;
var _24357__$1 = this;
return self__.meta24356;
});})(___$1))
;

cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t24355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24345_SHARP_){
return f1.call(null,(((p1__24345_SHARP_ == null))?null:self__.f.call(null,p1__24345_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24355.cljs$lang$type = true;

cljs.core.async.t24355.cljs$lang$ctorStr = "cljs.core.async/t24355";

cljs.core.async.t24355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t24355");
});})(___$1))
;

cljs.core.async.__GT_t24355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t24355(map_LT___$1,f__$1,ch__$1,meta24353__$1,___$2,fn1__$1,meta24356){
return (new cljs.core.async.t24355(map_LT___$1,f__$1,ch__$1,meta24353__$1,___$2,fn1__$1,meta24356));
});})(___$1))
;

}

return (new cljs.core.async.t24355(self__.map_LT_,self__.f,self__.ch,self__.meta24353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t24352.cljs$lang$type = true;

cljs.core.async.t24352.cljs$lang$ctorStr = "cljs.core.async/t24352";

cljs.core.async.t24352.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t24352");
});

cljs.core.async.__GT_t24352 = (function cljs$core$async$map_LT__$___GT_t24352(map_LT___$1,f__$1,ch__$1,meta24353){
return (new cljs.core.async.t24352(map_LT___$1,f__$1,ch__$1,meta24353));
});

}

return (new cljs.core.async.t24352(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t24361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24361 = (function (map_GT_,f,ch,meta24362){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24362 = meta24362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24363,meta24362__$1){
var self__ = this;
var _24363__$1 = this;
return (new cljs.core.async.t24361(self__.map_GT_,self__.f,self__.ch,meta24362__$1));
});

cljs.core.async.t24361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24363){
var self__ = this;
var _24363__$1 = this;
return self__.meta24362;
});

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24361.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t24361.cljs$lang$type = true;

cljs.core.async.t24361.cljs$lang$ctorStr = "cljs.core.async/t24361";

cljs.core.async.t24361.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t24361");
});

cljs.core.async.__GT_t24361 = (function cljs$core$async$map_GT__$___GT_t24361(map_GT___$1,f__$1,ch__$1,meta24362){
return (new cljs.core.async.t24361(map_GT___$1,f__$1,ch__$1,meta24362));
});

}

return (new cljs.core.async.t24361(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t24367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24367 = (function (filter_GT_,p,ch,meta24368){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24368 = meta24368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24369,meta24368__$1){
var self__ = this;
var _24369__$1 = this;
return (new cljs.core.async.t24367(self__.filter_GT_,self__.p,self__.ch,meta24368__$1));
});

cljs.core.async.t24367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24369){
var self__ = this;
var _24369__$1 = this;
return self__.meta24368;
});

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t24367.cljs$lang$type = true;

cljs.core.async.t24367.cljs$lang$ctorStr = "cljs.core.async/t24367";

cljs.core.async.t24367.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t24367");
});

cljs.core.async.__GT_t24367 = (function cljs$core$async$filter_GT__$___GT_t24367(filter_GT___$1,p__$1,ch__$1,meta24368){
return (new cljs.core.async.t24367(filter_GT___$1,p__$1,ch__$1,meta24368));
});

}

return (new cljs.core.async.t24367(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6709__auto___24452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24452,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24452,out){
return (function (state_24431){
var state_val_24432 = (state_24431[(1)]);
if((state_val_24432 === (7))){
var inst_24427 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24433_24453 = state_24431__$1;
(statearr_24433_24453[(2)] = inst_24427);

(statearr_24433_24453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (1))){
var state_24431__$1 = state_24431;
var statearr_24434_24454 = state_24431__$1;
(statearr_24434_24454[(2)] = null);

(statearr_24434_24454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (4))){
var inst_24413 = (state_24431[(7)]);
var inst_24413__$1 = (state_24431[(2)]);
var inst_24414 = (inst_24413__$1 == null);
var state_24431__$1 = (function (){var statearr_24435 = state_24431;
(statearr_24435[(7)] = inst_24413__$1);

return statearr_24435;
})();
if(cljs.core.truth_(inst_24414)){
var statearr_24436_24455 = state_24431__$1;
(statearr_24436_24455[(1)] = (5));

} else {
var statearr_24437_24456 = state_24431__$1;
(statearr_24437_24456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (6))){
var inst_24413 = (state_24431[(7)]);
var inst_24418 = p.call(null,inst_24413);
var state_24431__$1 = state_24431;
if(cljs.core.truth_(inst_24418)){
var statearr_24438_24457 = state_24431__$1;
(statearr_24438_24457[(1)] = (8));

} else {
var statearr_24439_24458 = state_24431__$1;
(statearr_24439_24458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (3))){
var inst_24429 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24431__$1,inst_24429);
} else {
if((state_val_24432 === (2))){
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24431__$1,(4),ch);
} else {
if((state_val_24432 === (11))){
var inst_24421 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24440_24459 = state_24431__$1;
(statearr_24440_24459[(2)] = inst_24421);

(statearr_24440_24459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (9))){
var state_24431__$1 = state_24431;
var statearr_24441_24460 = state_24431__$1;
(statearr_24441_24460[(2)] = null);

(statearr_24441_24460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (5))){
var inst_24416 = cljs.core.async.close_BANG_.call(null,out);
var state_24431__$1 = state_24431;
var statearr_24442_24461 = state_24431__$1;
(statearr_24442_24461[(2)] = inst_24416);

(statearr_24442_24461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (10))){
var inst_24424 = (state_24431[(2)]);
var state_24431__$1 = (function (){var statearr_24443 = state_24431;
(statearr_24443[(8)] = inst_24424);

return statearr_24443;
})();
var statearr_24444_24462 = state_24431__$1;
(statearr_24444_24462[(2)] = null);

(statearr_24444_24462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (8))){
var inst_24413 = (state_24431[(7)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24431__$1,(11),out,inst_24413);
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
});})(c__6709__auto___24452,out))
;
return ((function (switch__6653__auto__,c__6709__auto___24452,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6654__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6654__auto____0 = (function (){
var statearr_24448 = [null,null,null,null,null,null,null,null,null];
(statearr_24448[(0)] = cljs$core$async$filter_LT__$_state_machine__6654__auto__);

(statearr_24448[(1)] = (1));

return statearr_24448;
});
var cljs$core$async$filter_LT__$_state_machine__6654__auto____1 = (function (state_24431){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24449){if((e24449 instanceof Object)){
var ex__6657__auto__ = e24449;
var statearr_24450_24463 = state_24431;
(statearr_24450_24463[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24464 = state_24431;
state_24431 = G__24464;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6654__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6654__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6654__auto____0;
cljs$core$async$filter_LT__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6654__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24452,out))
})();
var state__6711__auto__ = (function (){var statearr_24451 = f__6710__auto__.call(null);
(statearr_24451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24452);

return statearr_24451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24452,out))
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
var c__6709__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto__){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto__){
return (function (state_24630){
var state_val_24631 = (state_24630[(1)]);
if((state_val_24631 === (7))){
var inst_24626 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24632_24673 = state_24630__$1;
(statearr_24632_24673[(2)] = inst_24626);

(statearr_24632_24673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (20))){
var inst_24596 = (state_24630[(7)]);
var inst_24607 = (state_24630[(2)]);
var inst_24608 = cljs.core.next.call(null,inst_24596);
var inst_24582 = inst_24608;
var inst_24583 = null;
var inst_24584 = (0);
var inst_24585 = (0);
var state_24630__$1 = (function (){var statearr_24633 = state_24630;
(statearr_24633[(8)] = inst_24585);

(statearr_24633[(9)] = inst_24583);

(statearr_24633[(10)] = inst_24607);

(statearr_24633[(11)] = inst_24582);

(statearr_24633[(12)] = inst_24584);

return statearr_24633;
})();
var statearr_24634_24674 = state_24630__$1;
(statearr_24634_24674[(2)] = null);

(statearr_24634_24674[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (1))){
var state_24630__$1 = state_24630;
var statearr_24635_24675 = state_24630__$1;
(statearr_24635_24675[(2)] = null);

(statearr_24635_24675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (4))){
var inst_24571 = (state_24630[(13)]);
var inst_24571__$1 = (state_24630[(2)]);
var inst_24572 = (inst_24571__$1 == null);
var state_24630__$1 = (function (){var statearr_24636 = state_24630;
(statearr_24636[(13)] = inst_24571__$1);

return statearr_24636;
})();
if(cljs.core.truth_(inst_24572)){
var statearr_24637_24676 = state_24630__$1;
(statearr_24637_24676[(1)] = (5));

} else {
var statearr_24638_24677 = state_24630__$1;
(statearr_24638_24677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (15))){
var state_24630__$1 = state_24630;
var statearr_24642_24678 = state_24630__$1;
(statearr_24642_24678[(2)] = null);

(statearr_24642_24678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (21))){
var state_24630__$1 = state_24630;
var statearr_24643_24679 = state_24630__$1;
(statearr_24643_24679[(2)] = null);

(statearr_24643_24679[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (13))){
var inst_24585 = (state_24630[(8)]);
var inst_24583 = (state_24630[(9)]);
var inst_24582 = (state_24630[(11)]);
var inst_24584 = (state_24630[(12)]);
var inst_24592 = (state_24630[(2)]);
var inst_24593 = (inst_24585 + (1));
var tmp24639 = inst_24583;
var tmp24640 = inst_24582;
var tmp24641 = inst_24584;
var inst_24582__$1 = tmp24640;
var inst_24583__$1 = tmp24639;
var inst_24584__$1 = tmp24641;
var inst_24585__$1 = inst_24593;
var state_24630__$1 = (function (){var statearr_24644 = state_24630;
(statearr_24644[(14)] = inst_24592);

(statearr_24644[(8)] = inst_24585__$1);

(statearr_24644[(9)] = inst_24583__$1);

(statearr_24644[(11)] = inst_24582__$1);

(statearr_24644[(12)] = inst_24584__$1);

return statearr_24644;
})();
var statearr_24645_24680 = state_24630__$1;
(statearr_24645_24680[(2)] = null);

(statearr_24645_24680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (22))){
var state_24630__$1 = state_24630;
var statearr_24646_24681 = state_24630__$1;
(statearr_24646_24681[(2)] = null);

(statearr_24646_24681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (6))){
var inst_24571 = (state_24630[(13)]);
var inst_24580 = f.call(null,inst_24571);
var inst_24581 = cljs.core.seq.call(null,inst_24580);
var inst_24582 = inst_24581;
var inst_24583 = null;
var inst_24584 = (0);
var inst_24585 = (0);
var state_24630__$1 = (function (){var statearr_24647 = state_24630;
(statearr_24647[(8)] = inst_24585);

(statearr_24647[(9)] = inst_24583);

(statearr_24647[(11)] = inst_24582);

(statearr_24647[(12)] = inst_24584);

return statearr_24647;
})();
var statearr_24648_24682 = state_24630__$1;
(statearr_24648_24682[(2)] = null);

(statearr_24648_24682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (17))){
var inst_24596 = (state_24630[(7)]);
var inst_24600 = cljs.core.chunk_first.call(null,inst_24596);
var inst_24601 = cljs.core.chunk_rest.call(null,inst_24596);
var inst_24602 = cljs.core.count.call(null,inst_24600);
var inst_24582 = inst_24601;
var inst_24583 = inst_24600;
var inst_24584 = inst_24602;
var inst_24585 = (0);
var state_24630__$1 = (function (){var statearr_24649 = state_24630;
(statearr_24649[(8)] = inst_24585);

(statearr_24649[(9)] = inst_24583);

(statearr_24649[(11)] = inst_24582);

(statearr_24649[(12)] = inst_24584);

return statearr_24649;
})();
var statearr_24650_24683 = state_24630__$1;
(statearr_24650_24683[(2)] = null);

(statearr_24650_24683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (3))){
var inst_24628 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24630__$1,inst_24628);
} else {
if((state_val_24631 === (12))){
var inst_24616 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24651_24684 = state_24630__$1;
(statearr_24651_24684[(2)] = inst_24616);

(statearr_24651_24684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (2))){
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24630__$1,(4),in$);
} else {
if((state_val_24631 === (23))){
var inst_24624 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24652_24685 = state_24630__$1;
(statearr_24652_24685[(2)] = inst_24624);

(statearr_24652_24685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (19))){
var inst_24611 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24653_24686 = state_24630__$1;
(statearr_24653_24686[(2)] = inst_24611);

(statearr_24653_24686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (11))){
var inst_24596 = (state_24630[(7)]);
var inst_24582 = (state_24630[(11)]);
var inst_24596__$1 = cljs.core.seq.call(null,inst_24582);
var state_24630__$1 = (function (){var statearr_24654 = state_24630;
(statearr_24654[(7)] = inst_24596__$1);

return statearr_24654;
})();
if(inst_24596__$1){
var statearr_24655_24687 = state_24630__$1;
(statearr_24655_24687[(1)] = (14));

} else {
var statearr_24656_24688 = state_24630__$1;
(statearr_24656_24688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (9))){
var inst_24618 = (state_24630[(2)]);
var inst_24619 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24630__$1 = (function (){var statearr_24657 = state_24630;
(statearr_24657[(15)] = inst_24618);

return statearr_24657;
})();
if(cljs.core.truth_(inst_24619)){
var statearr_24658_24689 = state_24630__$1;
(statearr_24658_24689[(1)] = (21));

} else {
var statearr_24659_24690 = state_24630__$1;
(statearr_24659_24690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (5))){
var inst_24574 = cljs.core.async.close_BANG_.call(null,out);
var state_24630__$1 = state_24630;
var statearr_24660_24691 = state_24630__$1;
(statearr_24660_24691[(2)] = inst_24574);

(statearr_24660_24691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (14))){
var inst_24596 = (state_24630[(7)]);
var inst_24598 = cljs.core.chunked_seq_QMARK_.call(null,inst_24596);
var state_24630__$1 = state_24630;
if(inst_24598){
var statearr_24661_24692 = state_24630__$1;
(statearr_24661_24692[(1)] = (17));

} else {
var statearr_24662_24693 = state_24630__$1;
(statearr_24662_24693[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (16))){
var inst_24614 = (state_24630[(2)]);
var state_24630__$1 = state_24630;
var statearr_24663_24694 = state_24630__$1;
(statearr_24663_24694[(2)] = inst_24614);

(statearr_24663_24694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24631 === (10))){
var inst_24585 = (state_24630[(8)]);
var inst_24583 = (state_24630[(9)]);
var inst_24590 = cljs.core._nth.call(null,inst_24583,inst_24585);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24630__$1,(13),out,inst_24590);
} else {
if((state_val_24631 === (18))){
var inst_24596 = (state_24630[(7)]);
var inst_24605 = cljs.core.first.call(null,inst_24596);
var state_24630__$1 = state_24630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24630__$1,(20),out,inst_24605);
} else {
if((state_val_24631 === (8))){
var inst_24585 = (state_24630[(8)]);
var inst_24584 = (state_24630[(12)]);
var inst_24587 = (inst_24585 < inst_24584);
var inst_24588 = inst_24587;
var state_24630__$1 = state_24630;
if(cljs.core.truth_(inst_24588)){
var statearr_24664_24695 = state_24630__$1;
(statearr_24664_24695[(1)] = (10));

} else {
var statearr_24665_24696 = state_24630__$1;
(statearr_24665_24696[(1)] = (11));

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
});})(c__6709__auto__))
;
return ((function (switch__6653__auto__,c__6709__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____0 = (function (){
var statearr_24669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24669[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__);

(statearr_24669[(1)] = (1));

return statearr_24669;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____1 = (function (state_24630){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24670){if((e24670 instanceof Object)){
var ex__6657__auto__ = e24670;
var statearr_24671_24697 = state_24630;
(statearr_24671_24697[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24698 = state_24630;
state_24630 = G__24698;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__ = function(state_24630){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____1.call(this,state_24630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6654__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto__))
})();
var state__6711__auto__ = (function (){var statearr_24672 = f__6710__auto__.call(null);
(statearr_24672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto__);

return statearr_24672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto__))
);

return c__6709__auto__;
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
var c__6709__auto___24795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24795,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24795,out){
return (function (state_24770){
var state_val_24771 = (state_24770[(1)]);
if((state_val_24771 === (7))){
var inst_24765 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24772_24796 = state_24770__$1;
(statearr_24772_24796[(2)] = inst_24765);

(statearr_24772_24796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (1))){
var inst_24747 = null;
var state_24770__$1 = (function (){var statearr_24773 = state_24770;
(statearr_24773[(7)] = inst_24747);

return statearr_24773;
})();
var statearr_24774_24797 = state_24770__$1;
(statearr_24774_24797[(2)] = null);

(statearr_24774_24797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (4))){
var inst_24750 = (state_24770[(8)]);
var inst_24750__$1 = (state_24770[(2)]);
var inst_24751 = (inst_24750__$1 == null);
var inst_24752 = cljs.core.not.call(null,inst_24751);
var state_24770__$1 = (function (){var statearr_24775 = state_24770;
(statearr_24775[(8)] = inst_24750__$1);

return statearr_24775;
})();
if(inst_24752){
var statearr_24776_24798 = state_24770__$1;
(statearr_24776_24798[(1)] = (5));

} else {
var statearr_24777_24799 = state_24770__$1;
(statearr_24777_24799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (6))){
var state_24770__$1 = state_24770;
var statearr_24778_24800 = state_24770__$1;
(statearr_24778_24800[(2)] = null);

(statearr_24778_24800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (3))){
var inst_24767 = (state_24770[(2)]);
var inst_24768 = cljs.core.async.close_BANG_.call(null,out);
var state_24770__$1 = (function (){var statearr_24779 = state_24770;
(statearr_24779[(9)] = inst_24767);

return statearr_24779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24770__$1,inst_24768);
} else {
if((state_val_24771 === (2))){
var state_24770__$1 = state_24770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24770__$1,(4),ch);
} else {
if((state_val_24771 === (11))){
var inst_24750 = (state_24770[(8)]);
var inst_24759 = (state_24770[(2)]);
var inst_24747 = inst_24750;
var state_24770__$1 = (function (){var statearr_24780 = state_24770;
(statearr_24780[(7)] = inst_24747);

(statearr_24780[(10)] = inst_24759);

return statearr_24780;
})();
var statearr_24781_24801 = state_24770__$1;
(statearr_24781_24801[(2)] = null);

(statearr_24781_24801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (9))){
var inst_24750 = (state_24770[(8)]);
var state_24770__$1 = state_24770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24770__$1,(11),out,inst_24750);
} else {
if((state_val_24771 === (5))){
var inst_24747 = (state_24770[(7)]);
var inst_24750 = (state_24770[(8)]);
var inst_24754 = cljs.core._EQ_.call(null,inst_24750,inst_24747);
var state_24770__$1 = state_24770;
if(inst_24754){
var statearr_24783_24802 = state_24770__$1;
(statearr_24783_24802[(1)] = (8));

} else {
var statearr_24784_24803 = state_24770__$1;
(statearr_24784_24803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (10))){
var inst_24762 = (state_24770[(2)]);
var state_24770__$1 = state_24770;
var statearr_24785_24804 = state_24770__$1;
(statearr_24785_24804[(2)] = inst_24762);

(statearr_24785_24804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24771 === (8))){
var inst_24747 = (state_24770[(7)]);
var tmp24782 = inst_24747;
var inst_24747__$1 = tmp24782;
var state_24770__$1 = (function (){var statearr_24786 = state_24770;
(statearr_24786[(7)] = inst_24747__$1);

return statearr_24786;
})();
var statearr_24787_24805 = state_24770__$1;
(statearr_24787_24805[(2)] = null);

(statearr_24787_24805[(1)] = (2));


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
});})(c__6709__auto___24795,out))
;
return ((function (switch__6653__auto__,c__6709__auto___24795,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6654__auto__ = null;
var cljs$core$async$unique_$_state_machine__6654__auto____0 = (function (){
var statearr_24791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24791[(0)] = cljs$core$async$unique_$_state_machine__6654__auto__);

(statearr_24791[(1)] = (1));

return statearr_24791;
});
var cljs$core$async$unique_$_state_machine__6654__auto____1 = (function (state_24770){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24792){if((e24792 instanceof Object)){
var ex__6657__auto__ = e24792;
var statearr_24793_24806 = state_24770;
(statearr_24793_24806[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24807 = state_24770;
state_24770 = G__24807;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6654__auto__ = function(state_24770){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6654__auto____1.call(this,state_24770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6654__auto____0;
cljs$core$async$unique_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6654__auto____1;
return cljs$core$async$unique_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24795,out))
})();
var state__6711__auto__ = (function (){var statearr_24794 = f__6710__auto__.call(null);
(statearr_24794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24795);

return statearr_24794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24795,out))
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
var c__6709__auto___24942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___24942,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___24942,out){
return (function (state_24912){
var state_val_24913 = (state_24912[(1)]);
if((state_val_24913 === (7))){
var inst_24908 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24914_24943 = state_24912__$1;
(statearr_24914_24943[(2)] = inst_24908);

(statearr_24914_24943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (1))){
var inst_24875 = (new Array(n));
var inst_24876 = inst_24875;
var inst_24877 = (0);
var state_24912__$1 = (function (){var statearr_24915 = state_24912;
(statearr_24915[(7)] = inst_24876);

(statearr_24915[(8)] = inst_24877);

return statearr_24915;
})();
var statearr_24916_24944 = state_24912__$1;
(statearr_24916_24944[(2)] = null);

(statearr_24916_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (4))){
var inst_24880 = (state_24912[(9)]);
var inst_24880__$1 = (state_24912[(2)]);
var inst_24881 = (inst_24880__$1 == null);
var inst_24882 = cljs.core.not.call(null,inst_24881);
var state_24912__$1 = (function (){var statearr_24917 = state_24912;
(statearr_24917[(9)] = inst_24880__$1);

return statearr_24917;
})();
if(inst_24882){
var statearr_24918_24945 = state_24912__$1;
(statearr_24918_24945[(1)] = (5));

} else {
var statearr_24919_24946 = state_24912__$1;
(statearr_24919_24946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (15))){
var inst_24902 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24920_24947 = state_24912__$1;
(statearr_24920_24947[(2)] = inst_24902);

(statearr_24920_24947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (13))){
var state_24912__$1 = state_24912;
var statearr_24921_24948 = state_24912__$1;
(statearr_24921_24948[(2)] = null);

(statearr_24921_24948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (6))){
var inst_24877 = (state_24912[(8)]);
var inst_24898 = (inst_24877 > (0));
var state_24912__$1 = state_24912;
if(cljs.core.truth_(inst_24898)){
var statearr_24922_24949 = state_24912__$1;
(statearr_24922_24949[(1)] = (12));

} else {
var statearr_24923_24950 = state_24912__$1;
(statearr_24923_24950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (3))){
var inst_24910 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24912__$1,inst_24910);
} else {
if((state_val_24913 === (12))){
var inst_24876 = (state_24912[(7)]);
var inst_24900 = cljs.core.vec.call(null,inst_24876);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(15),out,inst_24900);
} else {
if((state_val_24913 === (2))){
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24912__$1,(4),ch);
} else {
if((state_val_24913 === (11))){
var inst_24892 = (state_24912[(2)]);
var inst_24893 = (new Array(n));
var inst_24876 = inst_24893;
var inst_24877 = (0);
var state_24912__$1 = (function (){var statearr_24924 = state_24912;
(statearr_24924[(7)] = inst_24876);

(statearr_24924[(10)] = inst_24892);

(statearr_24924[(8)] = inst_24877);

return statearr_24924;
})();
var statearr_24925_24951 = state_24912__$1;
(statearr_24925_24951[(2)] = null);

(statearr_24925_24951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (9))){
var inst_24876 = (state_24912[(7)]);
var inst_24890 = cljs.core.vec.call(null,inst_24876);
var state_24912__$1 = state_24912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24912__$1,(11),out,inst_24890);
} else {
if((state_val_24913 === (5))){
var inst_24876 = (state_24912[(7)]);
var inst_24885 = (state_24912[(11)]);
var inst_24880 = (state_24912[(9)]);
var inst_24877 = (state_24912[(8)]);
var inst_24884 = (inst_24876[inst_24877] = inst_24880);
var inst_24885__$1 = (inst_24877 + (1));
var inst_24886 = (inst_24885__$1 < n);
var state_24912__$1 = (function (){var statearr_24926 = state_24912;
(statearr_24926[(11)] = inst_24885__$1);

(statearr_24926[(12)] = inst_24884);

return statearr_24926;
})();
if(cljs.core.truth_(inst_24886)){
var statearr_24927_24952 = state_24912__$1;
(statearr_24927_24952[(1)] = (8));

} else {
var statearr_24928_24953 = state_24912__$1;
(statearr_24928_24953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (14))){
var inst_24905 = (state_24912[(2)]);
var inst_24906 = cljs.core.async.close_BANG_.call(null,out);
var state_24912__$1 = (function (){var statearr_24930 = state_24912;
(statearr_24930[(13)] = inst_24905);

return statearr_24930;
})();
var statearr_24931_24954 = state_24912__$1;
(statearr_24931_24954[(2)] = inst_24906);

(statearr_24931_24954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (10))){
var inst_24896 = (state_24912[(2)]);
var state_24912__$1 = state_24912;
var statearr_24932_24955 = state_24912__$1;
(statearr_24932_24955[(2)] = inst_24896);

(statearr_24932_24955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24913 === (8))){
var inst_24876 = (state_24912[(7)]);
var inst_24885 = (state_24912[(11)]);
var tmp24929 = inst_24876;
var inst_24876__$1 = tmp24929;
var inst_24877 = inst_24885;
var state_24912__$1 = (function (){var statearr_24933 = state_24912;
(statearr_24933[(7)] = inst_24876__$1);

(statearr_24933[(8)] = inst_24877);

return statearr_24933;
})();
var statearr_24934_24956 = state_24912__$1;
(statearr_24934_24956[(2)] = null);

(statearr_24934_24956[(1)] = (2));


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
});})(c__6709__auto___24942,out))
;
return ((function (switch__6653__auto__,c__6709__auto___24942,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6654__auto__ = null;
var cljs$core$async$partition_$_state_machine__6654__auto____0 = (function (){
var statearr_24938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24938[(0)] = cljs$core$async$partition_$_state_machine__6654__auto__);

(statearr_24938[(1)] = (1));

return statearr_24938;
});
var cljs$core$async$partition_$_state_machine__6654__auto____1 = (function (state_24912){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_24912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e24939){if((e24939 instanceof Object)){
var ex__6657__auto__ = e24939;
var statearr_24940_24957 = state_24912;
(statearr_24940_24957[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24958 = state_24912;
state_24912 = G__24958;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6654__auto__ = function(state_24912){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6654__auto____1.call(this,state_24912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6654__auto____0;
cljs$core$async$partition_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6654__auto____1;
return cljs$core$async$partition_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___24942,out))
})();
var state__6711__auto__ = (function (){var statearr_24941 = f__6710__auto__.call(null);
(statearr_24941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___24942);

return statearr_24941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___24942,out))
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
var c__6709__auto___25101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6709__auto___25101,out){
return (function (){
var f__6710__auto__ = (function (){var switch__6653__auto__ = ((function (c__6709__auto___25101,out){
return (function (state_25071){
var state_val_25072 = (state_25071[(1)]);
if((state_val_25072 === (7))){
var inst_25067 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25073_25102 = state_25071__$1;
(statearr_25073_25102[(2)] = inst_25067);

(statearr_25073_25102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (1))){
var inst_25030 = [];
var inst_25031 = inst_25030;
var inst_25032 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25071__$1 = (function (){var statearr_25074 = state_25071;
(statearr_25074[(7)] = inst_25031);

(statearr_25074[(8)] = inst_25032);

return statearr_25074;
})();
var statearr_25075_25103 = state_25071__$1;
(statearr_25075_25103[(2)] = null);

(statearr_25075_25103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (4))){
var inst_25035 = (state_25071[(9)]);
var inst_25035__$1 = (state_25071[(2)]);
var inst_25036 = (inst_25035__$1 == null);
var inst_25037 = cljs.core.not.call(null,inst_25036);
var state_25071__$1 = (function (){var statearr_25076 = state_25071;
(statearr_25076[(9)] = inst_25035__$1);

return statearr_25076;
})();
if(inst_25037){
var statearr_25077_25104 = state_25071__$1;
(statearr_25077_25104[(1)] = (5));

} else {
var statearr_25078_25105 = state_25071__$1;
(statearr_25078_25105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (15))){
var inst_25061 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25079_25106 = state_25071__$1;
(statearr_25079_25106[(2)] = inst_25061);

(statearr_25079_25106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (13))){
var state_25071__$1 = state_25071;
var statearr_25080_25107 = state_25071__$1;
(statearr_25080_25107[(2)] = null);

(statearr_25080_25107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (6))){
var inst_25031 = (state_25071[(7)]);
var inst_25056 = inst_25031.length;
var inst_25057 = (inst_25056 > (0));
var state_25071__$1 = state_25071;
if(cljs.core.truth_(inst_25057)){
var statearr_25081_25108 = state_25071__$1;
(statearr_25081_25108[(1)] = (12));

} else {
var statearr_25082_25109 = state_25071__$1;
(statearr_25082_25109[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (3))){
var inst_25069 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25071__$1,inst_25069);
} else {
if((state_val_25072 === (12))){
var inst_25031 = (state_25071[(7)]);
var inst_25059 = cljs.core.vec.call(null,inst_25031);
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25071__$1,(15),out,inst_25059);
} else {
if((state_val_25072 === (2))){
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25071__$1,(4),ch);
} else {
if((state_val_25072 === (11))){
var inst_25035 = (state_25071[(9)]);
var inst_25039 = (state_25071[(10)]);
var inst_25049 = (state_25071[(2)]);
var inst_25050 = [];
var inst_25051 = inst_25050.push(inst_25035);
var inst_25031 = inst_25050;
var inst_25032 = inst_25039;
var state_25071__$1 = (function (){var statearr_25083 = state_25071;
(statearr_25083[(7)] = inst_25031);

(statearr_25083[(11)] = inst_25049);

(statearr_25083[(12)] = inst_25051);

(statearr_25083[(8)] = inst_25032);

return statearr_25083;
})();
var statearr_25084_25110 = state_25071__$1;
(statearr_25084_25110[(2)] = null);

(statearr_25084_25110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (9))){
var inst_25031 = (state_25071[(7)]);
var inst_25047 = cljs.core.vec.call(null,inst_25031);
var state_25071__$1 = state_25071;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25071__$1,(11),out,inst_25047);
} else {
if((state_val_25072 === (5))){
var inst_25035 = (state_25071[(9)]);
var inst_25039 = (state_25071[(10)]);
var inst_25032 = (state_25071[(8)]);
var inst_25039__$1 = f.call(null,inst_25035);
var inst_25040 = cljs.core._EQ_.call(null,inst_25039__$1,inst_25032);
var inst_25041 = cljs.core.keyword_identical_QMARK_.call(null,inst_25032,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25042 = (inst_25040) || (inst_25041);
var state_25071__$1 = (function (){var statearr_25085 = state_25071;
(statearr_25085[(10)] = inst_25039__$1);

return statearr_25085;
})();
if(cljs.core.truth_(inst_25042)){
var statearr_25086_25111 = state_25071__$1;
(statearr_25086_25111[(1)] = (8));

} else {
var statearr_25087_25112 = state_25071__$1;
(statearr_25087_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (14))){
var inst_25064 = (state_25071[(2)]);
var inst_25065 = cljs.core.async.close_BANG_.call(null,out);
var state_25071__$1 = (function (){var statearr_25089 = state_25071;
(statearr_25089[(13)] = inst_25064);

return statearr_25089;
})();
var statearr_25090_25113 = state_25071__$1;
(statearr_25090_25113[(2)] = inst_25065);

(statearr_25090_25113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (10))){
var inst_25054 = (state_25071[(2)]);
var state_25071__$1 = state_25071;
var statearr_25091_25114 = state_25071__$1;
(statearr_25091_25114[(2)] = inst_25054);

(statearr_25091_25114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25072 === (8))){
var inst_25031 = (state_25071[(7)]);
var inst_25035 = (state_25071[(9)]);
var inst_25039 = (state_25071[(10)]);
var inst_25044 = inst_25031.push(inst_25035);
var tmp25088 = inst_25031;
var inst_25031__$1 = tmp25088;
var inst_25032 = inst_25039;
var state_25071__$1 = (function (){var statearr_25092 = state_25071;
(statearr_25092[(7)] = inst_25031__$1);

(statearr_25092[(14)] = inst_25044);

(statearr_25092[(8)] = inst_25032);

return statearr_25092;
})();
var statearr_25093_25115 = state_25071__$1;
(statearr_25093_25115[(2)] = null);

(statearr_25093_25115[(1)] = (2));


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
});})(c__6709__auto___25101,out))
;
return ((function (switch__6653__auto__,c__6709__auto___25101,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6654__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6654__auto____0 = (function (){
var statearr_25097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25097[(0)] = cljs$core$async$partition_by_$_state_machine__6654__auto__);

(statearr_25097[(1)] = (1));

return statearr_25097;
});
var cljs$core$async$partition_by_$_state_machine__6654__auto____1 = (function (state_25071){
while(true){
var ret_value__6655__auto__ = (function (){try{while(true){
var result__6656__auto__ = switch__6653__auto__.call(null,state_25071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6656__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6656__auto__;
}
break;
}
}catch (e25098){if((e25098 instanceof Object)){
var ex__6657__auto__ = e25098;
var statearr_25099_25116 = state_25071;
(statearr_25099_25116[(5)] = ex__6657__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25117 = state_25071;
state_25071 = G__25117;
continue;
} else {
return ret_value__6655__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6654__auto__ = function(state_25071){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6654__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6654__auto____1.call(this,state_25071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6654__auto____0;
cljs$core$async$partition_by_$_state_machine__6654__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6654__auto____1;
return cljs$core$async$partition_by_$_state_machine__6654__auto__;
})()
;})(switch__6653__auto__,c__6709__auto___25101,out))
})();
var state__6711__auto__ = (function (){var statearr_25100 = f__6710__auto__.call(null);
(statearr_25100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6709__auto___25101);

return statearr_25100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6711__auto__);
});})(c__6709__auto___25101,out))
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
