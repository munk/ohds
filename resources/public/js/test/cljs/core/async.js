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
if(typeof cljs.core.async.t16845 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16845 = (function (fn_handler,f,meta16846){
this.fn_handler = fn_handler;
this.f = f;
this.meta16846 = meta16846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16847,meta16846__$1){
var self__ = this;
var _16847__$1 = this;
return (new cljs.core.async.t16845(self__.fn_handler,self__.f,meta16846__$1));
});

cljs.core.async.t16845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16847){
var self__ = this;
var _16847__$1 = this;
return self__.meta16846;
});

cljs.core.async.t16845.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16845.cljs$lang$type = true;

cljs.core.async.t16845.cljs$lang$ctorStr = "cljs.core.async/t16845";

cljs.core.async.t16845.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16845");
});

cljs.core.async.__GT_t16845 = (function cljs$core$async$fn_handler_$___GT_t16845(fn_handler__$1,f__$1,meta16846){
return (new cljs.core.async.t16845(fn_handler__$1,f__$1,meta16846));
});

}

return (new cljs.core.async.t16845(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16849 = buff;
if(G__16849){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__16849.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16849.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16849);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16849);
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
var val_16850 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16850);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16850,ret){
return (function (){
return fn1.call(null,val_16850);
});})(val_16850,ret))
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
var n__4963__auto___16851 = n;
var x_16852 = (0);
while(true){
if((x_16852 < n__4963__auto___16851)){
(a[x_16852] = (0));

var G__16853 = (x_16852 + (1));
x_16852 = G__16853;
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

var G__16854 = (i + (1));
i = G__16854;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16858 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16858 = (function (alt_flag,flag,meta16859){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16859 = meta16859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16860,meta16859__$1){
var self__ = this;
var _16860__$1 = this;
return (new cljs.core.async.t16858(self__.alt_flag,self__.flag,meta16859__$1));
});})(flag))
;

cljs.core.async.t16858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16860){
var self__ = this;
var _16860__$1 = this;
return self__.meta16859;
});})(flag))
;

cljs.core.async.t16858.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16858.cljs$lang$type = true;

cljs.core.async.t16858.cljs$lang$ctorStr = "cljs.core.async/t16858";

cljs.core.async.t16858.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16858");
});})(flag))
;

cljs.core.async.__GT_t16858 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t16858(alt_flag__$1,flag__$1,meta16859){
return (new cljs.core.async.t16858(alt_flag__$1,flag__$1,meta16859));
});})(flag))
;

}

return (new cljs.core.async.t16858(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t16864 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16864 = (function (alt_handler,flag,cb,meta16865){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16865 = meta16865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16866,meta16865__$1){
var self__ = this;
var _16866__$1 = this;
return (new cljs.core.async.t16864(self__.alt_handler,self__.flag,self__.cb,meta16865__$1));
});

cljs.core.async.t16864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16866){
var self__ = this;
var _16866__$1 = this;
return self__.meta16865;
});

cljs.core.async.t16864.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16864.cljs$lang$type = true;

cljs.core.async.t16864.cljs$lang$ctorStr = "cljs.core.async/t16864";

cljs.core.async.t16864.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16864");
});

cljs.core.async.__GT_t16864 = (function cljs$core$async$alt_handler_$___GT_t16864(alt_handler__$1,flag__$1,cb__$1,meta16865){
return (new cljs.core.async.t16864(alt_handler__$1,flag__$1,cb__$1,meta16865));
});

}

return (new cljs.core.async.t16864(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16867_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16867_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16868_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16868_SHARP_,port], null));
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
var G__16869 = (i + (1));
i = G__16869;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__16870){
var map__16872 = p__16870;
var map__16872__$1 = ((cljs.core.seq_QMARK_.call(null,map__16872))?cljs.core.apply.call(null,cljs.core.hash_map,map__16872):map__16872);
var opts = map__16872__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__16870 = null;
if (arguments.length > 1) {
var G__16873__i = 0, G__16873__a = new Array(arguments.length -  1);
while (G__16873__i < G__16873__a.length) {G__16873__a[G__16873__i] = arguments[G__16873__i + 1]; ++G__16873__i;}
  p__16870 = new cljs.core.IndexedSeq(G__16873__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__16870);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__16874){
var ports = cljs.core.first(arglist__16874);
var p__16870 = cljs.core.rest(arglist__16874);
return cljs$core$async$alts_BANG___delegate(ports,p__16870);
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
var c__6711__auto___16969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___16969){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___16969){
return (function (state_16945){
var state_val_16946 = (state_16945[(1)]);
if((state_val_16946 === (7))){
var inst_16941 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16947_16970 = state_16945__$1;
(statearr_16947_16970[(2)] = inst_16941);

(statearr_16947_16970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (1))){
var state_16945__$1 = state_16945;
var statearr_16948_16971 = state_16945__$1;
(statearr_16948_16971[(2)] = null);

(statearr_16948_16971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (4))){
var inst_16924 = (state_16945[(7)]);
var inst_16924__$1 = (state_16945[(2)]);
var inst_16925 = (inst_16924__$1 == null);
var state_16945__$1 = (function (){var statearr_16949 = state_16945;
(statearr_16949[(7)] = inst_16924__$1);

return statearr_16949;
})();
if(cljs.core.truth_(inst_16925)){
var statearr_16950_16972 = state_16945__$1;
(statearr_16950_16972[(1)] = (5));

} else {
var statearr_16951_16973 = state_16945__$1;
(statearr_16951_16973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (13))){
var state_16945__$1 = state_16945;
var statearr_16952_16974 = state_16945__$1;
(statearr_16952_16974[(2)] = null);

(statearr_16952_16974[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (6))){
var inst_16924 = (state_16945[(7)]);
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16945__$1,(11),to,inst_16924);
} else {
if((state_val_16946 === (3))){
var inst_16943 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16945__$1,inst_16943);
} else {
if((state_val_16946 === (12))){
var state_16945__$1 = state_16945;
var statearr_16953_16975 = state_16945__$1;
(statearr_16953_16975[(2)] = null);

(statearr_16953_16975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (2))){
var state_16945__$1 = state_16945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16945__$1,(4),from);
} else {
if((state_val_16946 === (11))){
var inst_16934 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
if(cljs.core.truth_(inst_16934)){
var statearr_16954_16976 = state_16945__$1;
(statearr_16954_16976[(1)] = (12));

} else {
var statearr_16955_16977 = state_16945__$1;
(statearr_16955_16977[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (9))){
var state_16945__$1 = state_16945;
var statearr_16956_16978 = state_16945__$1;
(statearr_16956_16978[(2)] = null);

(statearr_16956_16978[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (5))){
var state_16945__$1 = state_16945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16957_16979 = state_16945__$1;
(statearr_16957_16979[(1)] = (8));

} else {
var statearr_16958_16980 = state_16945__$1;
(statearr_16958_16980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (14))){
var inst_16939 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16959_16981 = state_16945__$1;
(statearr_16959_16981[(2)] = inst_16939);

(statearr_16959_16981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (10))){
var inst_16931 = (state_16945[(2)]);
var state_16945__$1 = state_16945;
var statearr_16960_16982 = state_16945__$1;
(statearr_16960_16982[(2)] = inst_16931);

(statearr_16960_16982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16946 === (8))){
var inst_16928 = cljs.core.async.close_BANG_.call(null,to);
var state_16945__$1 = state_16945;
var statearr_16961_16983 = state_16945__$1;
(statearr_16961_16983[(2)] = inst_16928);

(statearr_16961_16983[(1)] = (10));


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
});})(c__6711__auto___16969))
;
return ((function (switch__6655__auto__,c__6711__auto___16969){
return (function() {
var cljs$core$async$pipe_$_state_machine__6656__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6656__auto____0 = (function (){
var statearr_16965 = [null,null,null,null,null,null,null,null];
(statearr_16965[(0)] = cljs$core$async$pipe_$_state_machine__6656__auto__);

(statearr_16965[(1)] = (1));

return statearr_16965;
});
var cljs$core$async$pipe_$_state_machine__6656__auto____1 = (function (state_16945){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_16945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e16966){if((e16966 instanceof Object)){
var ex__6659__auto__ = e16966;
var statearr_16967_16984 = state_16945;
(statearr_16967_16984[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16985 = state_16945;
state_16945 = G__16985;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6656__auto__ = function(state_16945){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6656__auto____1.call(this,state_16945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6656__auto____0;
cljs$core$async$pipe_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6656__auto____1;
return cljs$core$async$pipe_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___16969))
})();
var state__6713__auto__ = (function (){var statearr_16968 = f__6712__auto__.call(null);
(statearr_16968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___16969);

return statearr_16968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___16969))
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
return (function (p__17169){
var vec__17170 = p__17169;
var v = cljs.core.nth.call(null,vec__17170,(0),null);
var p = cljs.core.nth.call(null,vec__17170,(1),null);
var job = vec__17170;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6711__auto___17352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results){
return (function (state_17175){
var state_val_17176 = (state_17175[(1)]);
if((state_val_17176 === (1))){
var state_17175__$1 = state_17175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17175__$1,(2),res,v);
} else {
if((state_val_17176 === (2))){
var inst_17172 = (state_17175[(2)]);
var inst_17173 = cljs.core.async.close_BANG_.call(null,res);
var state_17175__$1 = (function (){var statearr_17177 = state_17175;
(statearr_17177[(7)] = inst_17172);

return statearr_17177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17175__$1,inst_17173);
} else {
return null;
}
}
});})(c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results))
;
return ((function (switch__6655__auto__,c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17181 = [null,null,null,null,null,null,null,null];
(statearr_17181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17181[(1)] = (1));

return statearr_17181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17175){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17182){if((e17182 instanceof Object)){
var ex__6659__auto__ = e17182;
var statearr_17183_17353 = state_17175;
(statearr_17183_17353[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17354 = state_17175;
state_17175 = G__17354;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results))
})();
var state__6713__auto__ = (function (){var statearr_17184 = f__6712__auto__.call(null);
(statearr_17184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17352);

return statearr_17184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17352,res,vec__17170,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17185){
var vec__17186 = p__17185;
var v = cljs.core.nth.call(null,vec__17186,(0),null);
var p = cljs.core.nth.call(null,vec__17186,(1),null);
var job = vec__17186;
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
var n__4963__auto___17355 = n;
var __17356 = (0);
while(true){
if((__17356 < n__4963__auto___17355)){
var G__17187_17357 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17187_17357) {
case "compute":
var c__6711__auto___17359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17356,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (__17356,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function (state_17200){
var state_val_17201 = (state_17200[(1)]);
if((state_val_17201 === (1))){
var state_17200__$1 = state_17200;
var statearr_17202_17360 = state_17200__$1;
(statearr_17202_17360[(2)] = null);

(statearr_17202_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (2))){
var state_17200__$1 = state_17200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17200__$1,(4),jobs);
} else {
if((state_val_17201 === (3))){
var inst_17198 = (state_17200[(2)]);
var state_17200__$1 = state_17200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17200__$1,inst_17198);
} else {
if((state_val_17201 === (4))){
var inst_17190 = (state_17200[(2)]);
var inst_17191 = process.call(null,inst_17190);
var state_17200__$1 = state_17200;
if(cljs.core.truth_(inst_17191)){
var statearr_17203_17361 = state_17200__$1;
(statearr_17203_17361[(1)] = (5));

} else {
var statearr_17204_17362 = state_17200__$1;
(statearr_17204_17362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (5))){
var state_17200__$1 = state_17200;
var statearr_17205_17363 = state_17200__$1;
(statearr_17205_17363[(2)] = null);

(statearr_17205_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (6))){
var state_17200__$1 = state_17200;
var statearr_17206_17364 = state_17200__$1;
(statearr_17206_17364[(2)] = null);

(statearr_17206_17364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17201 === (7))){
var inst_17196 = (state_17200[(2)]);
var state_17200__$1 = state_17200;
var statearr_17207_17365 = state_17200__$1;
(statearr_17207_17365[(2)] = inst_17196);

(statearr_17207_17365[(1)] = (3));


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
});})(__17356,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
;
return ((function (__17356,switch__6655__auto__,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17211 = [null,null,null,null,null,null,null];
(statearr_17211[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17211[(1)] = (1));

return statearr_17211;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17200){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17212){if((e17212 instanceof Object)){
var ex__6659__auto__ = e17212;
var statearr_17213_17366 = state_17200;
(statearr_17213_17366[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17367 = state_17200;
state_17200 = G__17367;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(__17356,switch__6655__auto__,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17214 = f__6712__auto__.call(null);
(statearr_17214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17359);

return statearr_17214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(__17356,c__6711__auto___17359,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
);


break;
case "async":
var c__6711__auto___17368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17356,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (__17356,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function (state_17227){
var state_val_17228 = (state_17227[(1)]);
if((state_val_17228 === (1))){
var state_17227__$1 = state_17227;
var statearr_17229_17369 = state_17227__$1;
(statearr_17229_17369[(2)] = null);

(statearr_17229_17369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17228 === (2))){
var state_17227__$1 = state_17227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17227__$1,(4),jobs);
} else {
if((state_val_17228 === (3))){
var inst_17225 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17227__$1,inst_17225);
} else {
if((state_val_17228 === (4))){
var inst_17217 = (state_17227[(2)]);
var inst_17218 = async.call(null,inst_17217);
var state_17227__$1 = state_17227;
if(cljs.core.truth_(inst_17218)){
var statearr_17230_17370 = state_17227__$1;
(statearr_17230_17370[(1)] = (5));

} else {
var statearr_17231_17371 = state_17227__$1;
(statearr_17231_17371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17228 === (5))){
var state_17227__$1 = state_17227;
var statearr_17232_17372 = state_17227__$1;
(statearr_17232_17372[(2)] = null);

(statearr_17232_17372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17228 === (6))){
var state_17227__$1 = state_17227;
var statearr_17233_17373 = state_17227__$1;
(statearr_17233_17373[(2)] = null);

(statearr_17233_17373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17228 === (7))){
var inst_17223 = (state_17227[(2)]);
var state_17227__$1 = state_17227;
var statearr_17234_17374 = state_17227__$1;
(statearr_17234_17374[(2)] = inst_17223);

(statearr_17234_17374[(1)] = (3));


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
});})(__17356,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
;
return ((function (__17356,switch__6655__auto__,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17238 = [null,null,null,null,null,null,null];
(statearr_17238[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17238[(1)] = (1));

return statearr_17238;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17227){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17239){if((e17239 instanceof Object)){
var ex__6659__auto__ = e17239;
var statearr_17240_17375 = state_17227;
(statearr_17240_17375[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17376 = state_17227;
state_17227 = G__17376;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(__17356,switch__6655__auto__,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17241 = f__6712__auto__.call(null);
(statearr_17241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17368);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(__17356,c__6711__auto___17368,G__17187_17357,n__4963__auto___17355,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17377 = (__17356 + (1));
__17356 = G__17377;
continue;
} else {
}
break;
}

var c__6711__auto___17378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17378,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17378,jobs,results,process,async){
return (function (state_17263){
var state_val_17264 = (state_17263[(1)]);
if((state_val_17264 === (1))){
var state_17263__$1 = state_17263;
var statearr_17265_17379 = state_17263__$1;
(statearr_17265_17379[(2)] = null);

(statearr_17265_17379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (2))){
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17263__$1,(4),from);
} else {
if((state_val_17264 === (3))){
var inst_17261 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17263__$1,inst_17261);
} else {
if((state_val_17264 === (4))){
var inst_17244 = (state_17263[(7)]);
var inst_17244__$1 = (state_17263[(2)]);
var inst_17245 = (inst_17244__$1 == null);
var state_17263__$1 = (function (){var statearr_17266 = state_17263;
(statearr_17266[(7)] = inst_17244__$1);

return statearr_17266;
})();
if(cljs.core.truth_(inst_17245)){
var statearr_17267_17380 = state_17263__$1;
(statearr_17267_17380[(1)] = (5));

} else {
var statearr_17268_17381 = state_17263__$1;
(statearr_17268_17381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (5))){
var inst_17247 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17263__$1 = state_17263;
var statearr_17269_17382 = state_17263__$1;
(statearr_17269_17382[(2)] = inst_17247);

(statearr_17269_17382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (6))){
var inst_17244 = (state_17263[(7)]);
var inst_17249 = (state_17263[(8)]);
var inst_17249__$1 = cljs.core.async.chan.call(null,(1));
var inst_17250 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17251 = [inst_17244,inst_17249__$1];
var inst_17252 = (new cljs.core.PersistentVector(null,2,(5),inst_17250,inst_17251,null));
var state_17263__$1 = (function (){var statearr_17270 = state_17263;
(statearr_17270[(8)] = inst_17249__$1);

return statearr_17270;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17263__$1,(8),jobs,inst_17252);
} else {
if((state_val_17264 === (7))){
var inst_17259 = (state_17263[(2)]);
var state_17263__$1 = state_17263;
var statearr_17271_17383 = state_17263__$1;
(statearr_17271_17383[(2)] = inst_17259);

(statearr_17271_17383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17264 === (8))){
var inst_17249 = (state_17263[(8)]);
var inst_17254 = (state_17263[(2)]);
var state_17263__$1 = (function (){var statearr_17272 = state_17263;
(statearr_17272[(9)] = inst_17254);

return statearr_17272;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17263__$1,(9),results,inst_17249);
} else {
if((state_val_17264 === (9))){
var inst_17256 = (state_17263[(2)]);
var state_17263__$1 = (function (){var statearr_17273 = state_17263;
(statearr_17273[(10)] = inst_17256);

return statearr_17273;
})();
var statearr_17274_17384 = state_17263__$1;
(statearr_17274_17384[(2)] = null);

(statearr_17274_17384[(1)] = (2));


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
});})(c__6711__auto___17378,jobs,results,process,async))
;
return ((function (switch__6655__auto__,c__6711__auto___17378,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17278 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17278[(1)] = (1));

return statearr_17278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17263){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17279){if((e17279 instanceof Object)){
var ex__6659__auto__ = e17279;
var statearr_17280_17385 = state_17263;
(statearr_17280_17385[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17386 = state_17263;
state_17263 = G__17386;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17263){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17378,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17281 = f__6712__auto__.call(null);
(statearr_17281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17378);

return statearr_17281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17378,jobs,results,process,async))
);


var c__6711__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto__,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto__,jobs,results,process,async){
return (function (state_17319){
var state_val_17320 = (state_17319[(1)]);
if((state_val_17320 === (7))){
var inst_17315 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
var statearr_17321_17387 = state_17319__$1;
(statearr_17321_17387[(2)] = inst_17315);

(statearr_17321_17387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (20))){
var state_17319__$1 = state_17319;
var statearr_17322_17388 = state_17319__$1;
(statearr_17322_17388[(2)] = null);

(statearr_17322_17388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (1))){
var state_17319__$1 = state_17319;
var statearr_17323_17389 = state_17319__$1;
(statearr_17323_17389[(2)] = null);

(statearr_17323_17389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (4))){
var inst_17284 = (state_17319[(7)]);
var inst_17284__$1 = (state_17319[(2)]);
var inst_17285 = (inst_17284__$1 == null);
var state_17319__$1 = (function (){var statearr_17324 = state_17319;
(statearr_17324[(7)] = inst_17284__$1);

return statearr_17324;
})();
if(cljs.core.truth_(inst_17285)){
var statearr_17325_17390 = state_17319__$1;
(statearr_17325_17390[(1)] = (5));

} else {
var statearr_17326_17391 = state_17319__$1;
(statearr_17326_17391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (15))){
var inst_17297 = (state_17319[(8)]);
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17319__$1,(18),to,inst_17297);
} else {
if((state_val_17320 === (21))){
var inst_17310 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
var statearr_17327_17392 = state_17319__$1;
(statearr_17327_17392[(2)] = inst_17310);

(statearr_17327_17392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (13))){
var inst_17312 = (state_17319[(2)]);
var state_17319__$1 = (function (){var statearr_17328 = state_17319;
(statearr_17328[(9)] = inst_17312);

return statearr_17328;
})();
var statearr_17329_17393 = state_17319__$1;
(statearr_17329_17393[(2)] = null);

(statearr_17329_17393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (6))){
var inst_17284 = (state_17319[(7)]);
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17319__$1,(11),inst_17284);
} else {
if((state_val_17320 === (17))){
var inst_17305 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
if(cljs.core.truth_(inst_17305)){
var statearr_17330_17394 = state_17319__$1;
(statearr_17330_17394[(1)] = (19));

} else {
var statearr_17331_17395 = state_17319__$1;
(statearr_17331_17395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (3))){
var inst_17317 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17319__$1,inst_17317);
} else {
if((state_val_17320 === (12))){
var inst_17294 = (state_17319[(10)]);
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17319__$1,(14),inst_17294);
} else {
if((state_val_17320 === (2))){
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17319__$1,(4),results);
} else {
if((state_val_17320 === (19))){
var state_17319__$1 = state_17319;
var statearr_17332_17396 = state_17319__$1;
(statearr_17332_17396[(2)] = null);

(statearr_17332_17396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (11))){
var inst_17294 = (state_17319[(2)]);
var state_17319__$1 = (function (){var statearr_17333 = state_17319;
(statearr_17333[(10)] = inst_17294);

return statearr_17333;
})();
var statearr_17334_17397 = state_17319__$1;
(statearr_17334_17397[(2)] = null);

(statearr_17334_17397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (9))){
var state_17319__$1 = state_17319;
var statearr_17335_17398 = state_17319__$1;
(statearr_17335_17398[(2)] = null);

(statearr_17335_17398[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (5))){
var state_17319__$1 = state_17319;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17336_17399 = state_17319__$1;
(statearr_17336_17399[(1)] = (8));

} else {
var statearr_17337_17400 = state_17319__$1;
(statearr_17337_17400[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (14))){
var inst_17297 = (state_17319[(8)]);
var inst_17299 = (state_17319[(11)]);
var inst_17297__$1 = (state_17319[(2)]);
var inst_17298 = (inst_17297__$1 == null);
var inst_17299__$1 = cljs.core.not.call(null,inst_17298);
var state_17319__$1 = (function (){var statearr_17338 = state_17319;
(statearr_17338[(8)] = inst_17297__$1);

(statearr_17338[(11)] = inst_17299__$1);

return statearr_17338;
})();
if(inst_17299__$1){
var statearr_17339_17401 = state_17319__$1;
(statearr_17339_17401[(1)] = (15));

} else {
var statearr_17340_17402 = state_17319__$1;
(statearr_17340_17402[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (16))){
var inst_17299 = (state_17319[(11)]);
var state_17319__$1 = state_17319;
var statearr_17341_17403 = state_17319__$1;
(statearr_17341_17403[(2)] = inst_17299);

(statearr_17341_17403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (10))){
var inst_17291 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
var statearr_17342_17404 = state_17319__$1;
(statearr_17342_17404[(2)] = inst_17291);

(statearr_17342_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (18))){
var inst_17302 = (state_17319[(2)]);
var state_17319__$1 = state_17319;
var statearr_17343_17405 = state_17319__$1;
(statearr_17343_17405[(2)] = inst_17302);

(statearr_17343_17405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17320 === (8))){
var inst_17288 = cljs.core.async.close_BANG_.call(null,to);
var state_17319__$1 = state_17319;
var statearr_17344_17406 = state_17319__$1;
(statearr_17344_17406[(2)] = inst_17288);

(statearr_17344_17406[(1)] = (10));


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
});})(c__6711__auto__,jobs,results,process,async))
;
return ((function (switch__6655__auto__,c__6711__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17348[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17348[(1)] = (1));

return statearr_17348;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17319){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17349){if((e17349 instanceof Object)){
var ex__6659__auto__ = e17349;
var statearr_17350_17407 = state_17319;
(statearr_17350_17407[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17408 = state_17319;
state_17319 = G__17408;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17351 = f__6712__auto__.call(null);
(statearr_17351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto__,jobs,results,process,async))
);

return c__6711__auto__;
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
var c__6711__auto___17509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17509,tc,fc){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17509,tc,fc){
return (function (state_17484){
var state_val_17485 = (state_17484[(1)]);
if((state_val_17485 === (7))){
var inst_17480 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17486_17510 = state_17484__$1;
(statearr_17486_17510[(2)] = inst_17480);

(statearr_17486_17510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (1))){
var state_17484__$1 = state_17484;
var statearr_17487_17511 = state_17484__$1;
(statearr_17487_17511[(2)] = null);

(statearr_17487_17511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (4))){
var inst_17461 = (state_17484[(7)]);
var inst_17461__$1 = (state_17484[(2)]);
var inst_17462 = (inst_17461__$1 == null);
var state_17484__$1 = (function (){var statearr_17488 = state_17484;
(statearr_17488[(7)] = inst_17461__$1);

return statearr_17488;
})();
if(cljs.core.truth_(inst_17462)){
var statearr_17489_17512 = state_17484__$1;
(statearr_17489_17512[(1)] = (5));

} else {
var statearr_17490_17513 = state_17484__$1;
(statearr_17490_17513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (13))){
var state_17484__$1 = state_17484;
var statearr_17491_17514 = state_17484__$1;
(statearr_17491_17514[(2)] = null);

(statearr_17491_17514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (6))){
var inst_17461 = (state_17484[(7)]);
var inst_17467 = p.call(null,inst_17461);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17467)){
var statearr_17492_17515 = state_17484__$1;
(statearr_17492_17515[(1)] = (9));

} else {
var statearr_17493_17516 = state_17484__$1;
(statearr_17493_17516[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (3))){
var inst_17482 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17484__$1,inst_17482);
} else {
if((state_val_17485 === (12))){
var state_17484__$1 = state_17484;
var statearr_17494_17517 = state_17484__$1;
(statearr_17494_17517[(2)] = null);

(statearr_17494_17517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (2))){
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17484__$1,(4),ch);
} else {
if((state_val_17485 === (11))){
var inst_17461 = (state_17484[(7)]);
var inst_17471 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17484__$1,(8),inst_17471,inst_17461);
} else {
if((state_val_17485 === (9))){
var state_17484__$1 = state_17484;
var statearr_17495_17518 = state_17484__$1;
(statearr_17495_17518[(2)] = tc);

(statearr_17495_17518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (5))){
var inst_17464 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17465 = cljs.core.async.close_BANG_.call(null,fc);
var state_17484__$1 = (function (){var statearr_17496 = state_17484;
(statearr_17496[(8)] = inst_17464);

return statearr_17496;
})();
var statearr_17497_17519 = state_17484__$1;
(statearr_17497_17519[(2)] = inst_17465);

(statearr_17497_17519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (14))){
var inst_17478 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17498_17520 = state_17484__$1;
(statearr_17498_17520[(2)] = inst_17478);

(statearr_17498_17520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (10))){
var state_17484__$1 = state_17484;
var statearr_17499_17521 = state_17484__$1;
(statearr_17499_17521[(2)] = fc);

(statearr_17499_17521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (8))){
var inst_17473 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
if(cljs.core.truth_(inst_17473)){
var statearr_17500_17522 = state_17484__$1;
(statearr_17500_17522[(1)] = (12));

} else {
var statearr_17501_17523 = state_17484__$1;
(statearr_17501_17523[(1)] = (13));

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
});})(c__6711__auto___17509,tc,fc))
;
return ((function (switch__6655__auto__,c__6711__auto___17509,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6656__auto__ = null;
var cljs$core$async$split_$_state_machine__6656__auto____0 = (function (){
var statearr_17505 = [null,null,null,null,null,null,null,null,null];
(statearr_17505[(0)] = cljs$core$async$split_$_state_machine__6656__auto__);

(statearr_17505[(1)] = (1));

return statearr_17505;
});
var cljs$core$async$split_$_state_machine__6656__auto____1 = (function (state_17484){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17506){if((e17506 instanceof Object)){
var ex__6659__auto__ = e17506;
var statearr_17507_17524 = state_17484;
(statearr_17507_17524[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17525 = state_17484;
state_17484 = G__17525;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6656__auto__ = function(state_17484){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6656__auto____1.call(this,state_17484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6656__auto____0;
cljs$core$async$split_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6656__auto____1;
return cljs$core$async$split_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17509,tc,fc))
})();
var state__6713__auto__ = (function (){var statearr_17508 = f__6712__auto__.call(null);
(statearr_17508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17509);

return statearr_17508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17509,tc,fc))
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
var c__6711__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto__){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto__){
return (function (state_17572){
var state_val_17573 = (state_17572[(1)]);
if((state_val_17573 === (1))){
var inst_17558 = init;
var state_17572__$1 = (function (){var statearr_17574 = state_17572;
(statearr_17574[(7)] = inst_17558);

return statearr_17574;
})();
var statearr_17575_17590 = state_17572__$1;
(statearr_17575_17590[(2)] = null);

(statearr_17575_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (2))){
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17572__$1,(4),ch);
} else {
if((state_val_17573 === (3))){
var inst_17570 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17572__$1,inst_17570);
} else {
if((state_val_17573 === (4))){
var inst_17561 = (state_17572[(8)]);
var inst_17561__$1 = (state_17572[(2)]);
var inst_17562 = (inst_17561__$1 == null);
var state_17572__$1 = (function (){var statearr_17576 = state_17572;
(statearr_17576[(8)] = inst_17561__$1);

return statearr_17576;
})();
if(cljs.core.truth_(inst_17562)){
var statearr_17577_17591 = state_17572__$1;
(statearr_17577_17591[(1)] = (5));

} else {
var statearr_17578_17592 = state_17572__$1;
(statearr_17578_17592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (5))){
var inst_17558 = (state_17572[(7)]);
var state_17572__$1 = state_17572;
var statearr_17579_17593 = state_17572__$1;
(statearr_17579_17593[(2)] = inst_17558);

(statearr_17579_17593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (6))){
var inst_17558 = (state_17572[(7)]);
var inst_17561 = (state_17572[(8)]);
var inst_17565 = f.call(null,inst_17558,inst_17561);
var inst_17558__$1 = inst_17565;
var state_17572__$1 = (function (){var statearr_17580 = state_17572;
(statearr_17580[(7)] = inst_17558__$1);

return statearr_17580;
})();
var statearr_17581_17594 = state_17572__$1;
(statearr_17581_17594[(2)] = null);

(statearr_17581_17594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17573 === (7))){
var inst_17568 = (state_17572[(2)]);
var state_17572__$1 = state_17572;
var statearr_17582_17595 = state_17572__$1;
(statearr_17582_17595[(2)] = inst_17568);

(statearr_17582_17595[(1)] = (3));


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
});})(c__6711__auto__))
;
return ((function (switch__6655__auto__,c__6711__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6656__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6656__auto____0 = (function (){
var statearr_17586 = [null,null,null,null,null,null,null,null,null];
(statearr_17586[(0)] = cljs$core$async$reduce_$_state_machine__6656__auto__);

(statearr_17586[(1)] = (1));

return statearr_17586;
});
var cljs$core$async$reduce_$_state_machine__6656__auto____1 = (function (state_17572){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17587){if((e17587 instanceof Object)){
var ex__6659__auto__ = e17587;
var statearr_17588_17596 = state_17572;
(statearr_17588_17596[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17597 = state_17572;
state_17572 = G__17597;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6656__auto__ = function(state_17572){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6656__auto____1.call(this,state_17572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6656__auto____0;
cljs$core$async$reduce_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6656__auto____1;
return cljs$core$async$reduce_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_17589 = f__6712__auto__.call(null);
(statearr_17589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto__))
);

return c__6711__auto__;
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
var c__6711__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto__){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto__){
return (function (state_17671){
var state_val_17672 = (state_17671[(1)]);
if((state_val_17672 === (7))){
var inst_17653 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
var statearr_17673_17696 = state_17671__$1;
(statearr_17673_17696[(2)] = inst_17653);

(statearr_17673_17696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (1))){
var inst_17647 = cljs.core.seq.call(null,coll);
var inst_17648 = inst_17647;
var state_17671__$1 = (function (){var statearr_17674 = state_17671;
(statearr_17674[(7)] = inst_17648);

return statearr_17674;
})();
var statearr_17675_17697 = state_17671__$1;
(statearr_17675_17697[(2)] = null);

(statearr_17675_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (4))){
var inst_17648 = (state_17671[(7)]);
var inst_17651 = cljs.core.first.call(null,inst_17648);
var state_17671__$1 = state_17671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17671__$1,(7),ch,inst_17651);
} else {
if((state_val_17672 === (13))){
var inst_17665 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
var statearr_17676_17698 = state_17671__$1;
(statearr_17676_17698[(2)] = inst_17665);

(statearr_17676_17698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (6))){
var inst_17656 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
if(cljs.core.truth_(inst_17656)){
var statearr_17677_17699 = state_17671__$1;
(statearr_17677_17699[(1)] = (8));

} else {
var statearr_17678_17700 = state_17671__$1;
(statearr_17678_17700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (3))){
var inst_17669 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17671__$1,inst_17669);
} else {
if((state_val_17672 === (12))){
var state_17671__$1 = state_17671;
var statearr_17679_17701 = state_17671__$1;
(statearr_17679_17701[(2)] = null);

(statearr_17679_17701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (2))){
var inst_17648 = (state_17671[(7)]);
var state_17671__$1 = state_17671;
if(cljs.core.truth_(inst_17648)){
var statearr_17680_17702 = state_17671__$1;
(statearr_17680_17702[(1)] = (4));

} else {
var statearr_17681_17703 = state_17671__$1;
(statearr_17681_17703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (11))){
var inst_17662 = cljs.core.async.close_BANG_.call(null,ch);
var state_17671__$1 = state_17671;
var statearr_17682_17704 = state_17671__$1;
(statearr_17682_17704[(2)] = inst_17662);

(statearr_17682_17704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (9))){
var state_17671__$1 = state_17671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17683_17705 = state_17671__$1;
(statearr_17683_17705[(1)] = (11));

} else {
var statearr_17684_17706 = state_17671__$1;
(statearr_17684_17706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (5))){
var inst_17648 = (state_17671[(7)]);
var state_17671__$1 = state_17671;
var statearr_17685_17707 = state_17671__$1;
(statearr_17685_17707[(2)] = inst_17648);

(statearr_17685_17707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (10))){
var inst_17667 = (state_17671[(2)]);
var state_17671__$1 = state_17671;
var statearr_17686_17708 = state_17671__$1;
(statearr_17686_17708[(2)] = inst_17667);

(statearr_17686_17708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17672 === (8))){
var inst_17648 = (state_17671[(7)]);
var inst_17658 = cljs.core.next.call(null,inst_17648);
var inst_17648__$1 = inst_17658;
var state_17671__$1 = (function (){var statearr_17687 = state_17671;
(statearr_17687[(7)] = inst_17648__$1);

return statearr_17687;
})();
var statearr_17688_17709 = state_17671__$1;
(statearr_17688_17709[(2)] = null);

(statearr_17688_17709[(1)] = (2));


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
});})(c__6711__auto__))
;
return ((function (switch__6655__auto__,c__6711__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6656__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6656__auto____0 = (function (){
var statearr_17692 = [null,null,null,null,null,null,null,null];
(statearr_17692[(0)] = cljs$core$async$onto_chan_$_state_machine__6656__auto__);

(statearr_17692[(1)] = (1));

return statearr_17692;
});
var cljs$core$async$onto_chan_$_state_machine__6656__auto____1 = (function (state_17671){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17693){if((e17693 instanceof Object)){
var ex__6659__auto__ = e17693;
var statearr_17694_17710 = state_17671;
(statearr_17694_17710[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17711 = state_17671;
state_17671 = G__17711;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6656__auto__ = function(state_17671){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6656__auto____1.call(this,state_17671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6656__auto____0;
cljs$core$async$onto_chan_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6656__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_17695 = f__6712__auto__.call(null);
(statearr_17695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto__))
);

return c__6711__auto__;
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

cljs.core.async.Mux = (function (){var obj17713 = {};
return obj17713;
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


cljs.core.async.Mult = (function (){var obj17715 = {};
return obj17715;
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
if(typeof cljs.core.async.t17937 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17937 = (function (mult,ch,cs,meta17938){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17938 = meta17938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17939,meta17938__$1){
var self__ = this;
var _17939__$1 = this;
return (new cljs.core.async.t17937(self__.mult,self__.ch,self__.cs,meta17938__$1));
});})(cs))
;

cljs.core.async.t17937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17939){
var self__ = this;
var _17939__$1 = this;
return self__.meta17938;
});})(cs))
;

cljs.core.async.t17937.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17937.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17937.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17937.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17937.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17937.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17937.cljs$lang$type = true;

cljs.core.async.t17937.cljs$lang$ctorStr = "cljs.core.async/t17937";

cljs.core.async.t17937.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t17937");
});})(cs))
;

cljs.core.async.__GT_t17937 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t17937(mult__$1,ch__$1,cs__$1,meta17938){
return (new cljs.core.async.t17937(mult__$1,ch__$1,cs__$1,meta17938));
});})(cs))
;

}

return (new cljs.core.async.t17937(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6711__auto___18158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18158,cs,m,dchan,dctr,done){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18158,cs,m,dchan,dctr,done){
return (function (state_18070){
var state_val_18071 = (state_18070[(1)]);
if((state_val_18071 === (7))){
var inst_18066 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18072_18159 = state_18070__$1;
(statearr_18072_18159[(2)] = inst_18066);

(statearr_18072_18159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (20))){
var inst_17971 = (state_18070[(7)]);
var inst_17981 = cljs.core.first.call(null,inst_17971);
var inst_17982 = cljs.core.nth.call(null,inst_17981,(0),null);
var inst_17983 = cljs.core.nth.call(null,inst_17981,(1),null);
var state_18070__$1 = (function (){var statearr_18073 = state_18070;
(statearr_18073[(8)] = inst_17982);

return statearr_18073;
})();
if(cljs.core.truth_(inst_17983)){
var statearr_18074_18160 = state_18070__$1;
(statearr_18074_18160[(1)] = (22));

} else {
var statearr_18075_18161 = state_18070__$1;
(statearr_18075_18161[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (27))){
var inst_18013 = (state_18070[(9)]);
var inst_18011 = (state_18070[(10)]);
var inst_17942 = (state_18070[(11)]);
var inst_18018 = (state_18070[(12)]);
var inst_18018__$1 = cljs.core._nth.call(null,inst_18011,inst_18013);
var inst_18019 = cljs.core.async.put_BANG_.call(null,inst_18018__$1,inst_17942,done);
var state_18070__$1 = (function (){var statearr_18076 = state_18070;
(statearr_18076[(12)] = inst_18018__$1);

return statearr_18076;
})();
if(cljs.core.truth_(inst_18019)){
var statearr_18077_18162 = state_18070__$1;
(statearr_18077_18162[(1)] = (30));

} else {
var statearr_18078_18163 = state_18070__$1;
(statearr_18078_18163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (1))){
var state_18070__$1 = state_18070;
var statearr_18079_18164 = state_18070__$1;
(statearr_18079_18164[(2)] = null);

(statearr_18079_18164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (24))){
var inst_17971 = (state_18070[(7)]);
var inst_17988 = (state_18070[(2)]);
var inst_17989 = cljs.core.next.call(null,inst_17971);
var inst_17951 = inst_17989;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18070__$1 = (function (){var statearr_18080 = state_18070;
(statearr_18080[(13)] = inst_17954);

(statearr_18080[(14)] = inst_17953);

(statearr_18080[(15)] = inst_17988);

(statearr_18080[(16)] = inst_17951);

(statearr_18080[(17)] = inst_17952);

return statearr_18080;
})();
var statearr_18081_18165 = state_18070__$1;
(statearr_18081_18165[(2)] = null);

(statearr_18081_18165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (39))){
var state_18070__$1 = state_18070;
var statearr_18085_18166 = state_18070__$1;
(statearr_18085_18166[(2)] = null);

(statearr_18085_18166[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (4))){
var inst_17942 = (state_18070[(11)]);
var inst_17942__$1 = (state_18070[(2)]);
var inst_17943 = (inst_17942__$1 == null);
var state_18070__$1 = (function (){var statearr_18086 = state_18070;
(statearr_18086[(11)] = inst_17942__$1);

return statearr_18086;
})();
if(cljs.core.truth_(inst_17943)){
var statearr_18087_18167 = state_18070__$1;
(statearr_18087_18167[(1)] = (5));

} else {
var statearr_18088_18168 = state_18070__$1;
(statearr_18088_18168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (15))){
var inst_17954 = (state_18070[(13)]);
var inst_17953 = (state_18070[(14)]);
var inst_17951 = (state_18070[(16)]);
var inst_17952 = (state_18070[(17)]);
var inst_17967 = (state_18070[(2)]);
var inst_17968 = (inst_17954 + (1));
var tmp18082 = inst_17953;
var tmp18083 = inst_17951;
var tmp18084 = inst_17952;
var inst_17951__$1 = tmp18083;
var inst_17952__$1 = tmp18084;
var inst_17953__$1 = tmp18082;
var inst_17954__$1 = inst_17968;
var state_18070__$1 = (function (){var statearr_18089 = state_18070;
(statearr_18089[(13)] = inst_17954__$1);

(statearr_18089[(14)] = inst_17953__$1);

(statearr_18089[(16)] = inst_17951__$1);

(statearr_18089[(18)] = inst_17967);

(statearr_18089[(17)] = inst_17952__$1);

return statearr_18089;
})();
var statearr_18090_18169 = state_18070__$1;
(statearr_18090_18169[(2)] = null);

(statearr_18090_18169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (21))){
var inst_17992 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18094_18170 = state_18070__$1;
(statearr_18094_18170[(2)] = inst_17992);

(statearr_18094_18170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (31))){
var inst_18018 = (state_18070[(12)]);
var inst_18022 = done.call(null,null);
var inst_18023 = cljs.core.async.untap_STAR_.call(null,m,inst_18018);
var state_18070__$1 = (function (){var statearr_18095 = state_18070;
(statearr_18095[(19)] = inst_18022);

return statearr_18095;
})();
var statearr_18096_18171 = state_18070__$1;
(statearr_18096_18171[(2)] = inst_18023);

(statearr_18096_18171[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (32))){
var inst_18012 = (state_18070[(20)]);
var inst_18013 = (state_18070[(9)]);
var inst_18010 = (state_18070[(21)]);
var inst_18011 = (state_18070[(10)]);
var inst_18025 = (state_18070[(2)]);
var inst_18026 = (inst_18013 + (1));
var tmp18091 = inst_18012;
var tmp18092 = inst_18010;
var tmp18093 = inst_18011;
var inst_18010__$1 = tmp18092;
var inst_18011__$1 = tmp18093;
var inst_18012__$1 = tmp18091;
var inst_18013__$1 = inst_18026;
var state_18070__$1 = (function (){var statearr_18097 = state_18070;
(statearr_18097[(20)] = inst_18012__$1);

(statearr_18097[(9)] = inst_18013__$1);

(statearr_18097[(21)] = inst_18010__$1);

(statearr_18097[(10)] = inst_18011__$1);

(statearr_18097[(22)] = inst_18025);

return statearr_18097;
})();
var statearr_18098_18172 = state_18070__$1;
(statearr_18098_18172[(2)] = null);

(statearr_18098_18172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (40))){
var inst_18038 = (state_18070[(23)]);
var inst_18042 = done.call(null,null);
var inst_18043 = cljs.core.async.untap_STAR_.call(null,m,inst_18038);
var state_18070__$1 = (function (){var statearr_18099 = state_18070;
(statearr_18099[(24)] = inst_18042);

return statearr_18099;
})();
var statearr_18100_18173 = state_18070__$1;
(statearr_18100_18173[(2)] = inst_18043);

(statearr_18100_18173[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (33))){
var inst_18029 = (state_18070[(25)]);
var inst_18031 = cljs.core.chunked_seq_QMARK_.call(null,inst_18029);
var state_18070__$1 = state_18070;
if(inst_18031){
var statearr_18101_18174 = state_18070__$1;
(statearr_18101_18174[(1)] = (36));

} else {
var statearr_18102_18175 = state_18070__$1;
(statearr_18102_18175[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (13))){
var inst_17961 = (state_18070[(26)]);
var inst_17964 = cljs.core.async.close_BANG_.call(null,inst_17961);
var state_18070__$1 = state_18070;
var statearr_18103_18176 = state_18070__$1;
(statearr_18103_18176[(2)] = inst_17964);

(statearr_18103_18176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (22))){
var inst_17982 = (state_18070[(8)]);
var inst_17985 = cljs.core.async.close_BANG_.call(null,inst_17982);
var state_18070__$1 = state_18070;
var statearr_18104_18177 = state_18070__$1;
(statearr_18104_18177[(2)] = inst_17985);

(statearr_18104_18177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (36))){
var inst_18029 = (state_18070[(25)]);
var inst_18033 = cljs.core.chunk_first.call(null,inst_18029);
var inst_18034 = cljs.core.chunk_rest.call(null,inst_18029);
var inst_18035 = cljs.core.count.call(null,inst_18033);
var inst_18010 = inst_18034;
var inst_18011 = inst_18033;
var inst_18012 = inst_18035;
var inst_18013 = (0);
var state_18070__$1 = (function (){var statearr_18105 = state_18070;
(statearr_18105[(20)] = inst_18012);

(statearr_18105[(9)] = inst_18013);

(statearr_18105[(21)] = inst_18010);

(statearr_18105[(10)] = inst_18011);

return statearr_18105;
})();
var statearr_18106_18178 = state_18070__$1;
(statearr_18106_18178[(2)] = null);

(statearr_18106_18178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (41))){
var inst_18029 = (state_18070[(25)]);
var inst_18045 = (state_18070[(2)]);
var inst_18046 = cljs.core.next.call(null,inst_18029);
var inst_18010 = inst_18046;
var inst_18011 = null;
var inst_18012 = (0);
var inst_18013 = (0);
var state_18070__$1 = (function (){var statearr_18107 = state_18070;
(statearr_18107[(20)] = inst_18012);

(statearr_18107[(9)] = inst_18013);

(statearr_18107[(27)] = inst_18045);

(statearr_18107[(21)] = inst_18010);

(statearr_18107[(10)] = inst_18011);

return statearr_18107;
})();
var statearr_18108_18179 = state_18070__$1;
(statearr_18108_18179[(2)] = null);

(statearr_18108_18179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (43))){
var state_18070__$1 = state_18070;
var statearr_18109_18180 = state_18070__$1;
(statearr_18109_18180[(2)] = null);

(statearr_18109_18180[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (29))){
var inst_18054 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18110_18181 = state_18070__$1;
(statearr_18110_18181[(2)] = inst_18054);

(statearr_18110_18181[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (44))){
var inst_18063 = (state_18070[(2)]);
var state_18070__$1 = (function (){var statearr_18111 = state_18070;
(statearr_18111[(28)] = inst_18063);

return statearr_18111;
})();
var statearr_18112_18182 = state_18070__$1;
(statearr_18112_18182[(2)] = null);

(statearr_18112_18182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (6))){
var inst_18002 = (state_18070[(29)]);
var inst_18001 = cljs.core.deref.call(null,cs);
var inst_18002__$1 = cljs.core.keys.call(null,inst_18001);
var inst_18003 = cljs.core.count.call(null,inst_18002__$1);
var inst_18004 = cljs.core.reset_BANG_.call(null,dctr,inst_18003);
var inst_18009 = cljs.core.seq.call(null,inst_18002__$1);
var inst_18010 = inst_18009;
var inst_18011 = null;
var inst_18012 = (0);
var inst_18013 = (0);
var state_18070__$1 = (function (){var statearr_18113 = state_18070;
(statearr_18113[(20)] = inst_18012);

(statearr_18113[(9)] = inst_18013);

(statearr_18113[(21)] = inst_18010);

(statearr_18113[(10)] = inst_18011);

(statearr_18113[(30)] = inst_18004);

(statearr_18113[(29)] = inst_18002__$1);

return statearr_18113;
})();
var statearr_18114_18183 = state_18070__$1;
(statearr_18114_18183[(2)] = null);

(statearr_18114_18183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (28))){
var inst_18010 = (state_18070[(21)]);
var inst_18029 = (state_18070[(25)]);
var inst_18029__$1 = cljs.core.seq.call(null,inst_18010);
var state_18070__$1 = (function (){var statearr_18115 = state_18070;
(statearr_18115[(25)] = inst_18029__$1);

return statearr_18115;
})();
if(inst_18029__$1){
var statearr_18116_18184 = state_18070__$1;
(statearr_18116_18184[(1)] = (33));

} else {
var statearr_18117_18185 = state_18070__$1;
(statearr_18117_18185[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (25))){
var inst_18012 = (state_18070[(20)]);
var inst_18013 = (state_18070[(9)]);
var inst_18015 = (inst_18013 < inst_18012);
var inst_18016 = inst_18015;
var state_18070__$1 = state_18070;
if(cljs.core.truth_(inst_18016)){
var statearr_18118_18186 = state_18070__$1;
(statearr_18118_18186[(1)] = (27));

} else {
var statearr_18119_18187 = state_18070__$1;
(statearr_18119_18187[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (34))){
var state_18070__$1 = state_18070;
var statearr_18120_18188 = state_18070__$1;
(statearr_18120_18188[(2)] = null);

(statearr_18120_18188[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (17))){
var state_18070__$1 = state_18070;
var statearr_18121_18189 = state_18070__$1;
(statearr_18121_18189[(2)] = null);

(statearr_18121_18189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (3))){
var inst_18068 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18070__$1,inst_18068);
} else {
if((state_val_18071 === (12))){
var inst_17997 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18122_18190 = state_18070__$1;
(statearr_18122_18190[(2)] = inst_17997);

(statearr_18122_18190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (2))){
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18070__$1,(4),ch);
} else {
if((state_val_18071 === (23))){
var state_18070__$1 = state_18070;
var statearr_18123_18191 = state_18070__$1;
(statearr_18123_18191[(2)] = null);

(statearr_18123_18191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (35))){
var inst_18052 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18124_18192 = state_18070__$1;
(statearr_18124_18192[(2)] = inst_18052);

(statearr_18124_18192[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (19))){
var inst_17971 = (state_18070[(7)]);
var inst_17975 = cljs.core.chunk_first.call(null,inst_17971);
var inst_17976 = cljs.core.chunk_rest.call(null,inst_17971);
var inst_17977 = cljs.core.count.call(null,inst_17975);
var inst_17951 = inst_17976;
var inst_17952 = inst_17975;
var inst_17953 = inst_17977;
var inst_17954 = (0);
var state_18070__$1 = (function (){var statearr_18125 = state_18070;
(statearr_18125[(13)] = inst_17954);

(statearr_18125[(14)] = inst_17953);

(statearr_18125[(16)] = inst_17951);

(statearr_18125[(17)] = inst_17952);

return statearr_18125;
})();
var statearr_18126_18193 = state_18070__$1;
(statearr_18126_18193[(2)] = null);

(statearr_18126_18193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (11))){
var inst_17951 = (state_18070[(16)]);
var inst_17971 = (state_18070[(7)]);
var inst_17971__$1 = cljs.core.seq.call(null,inst_17951);
var state_18070__$1 = (function (){var statearr_18127 = state_18070;
(statearr_18127[(7)] = inst_17971__$1);

return statearr_18127;
})();
if(inst_17971__$1){
var statearr_18128_18194 = state_18070__$1;
(statearr_18128_18194[(1)] = (16));

} else {
var statearr_18129_18195 = state_18070__$1;
(statearr_18129_18195[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (9))){
var inst_17999 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18130_18196 = state_18070__$1;
(statearr_18130_18196[(2)] = inst_17999);

(statearr_18130_18196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (5))){
var inst_17949 = cljs.core.deref.call(null,cs);
var inst_17950 = cljs.core.seq.call(null,inst_17949);
var inst_17951 = inst_17950;
var inst_17952 = null;
var inst_17953 = (0);
var inst_17954 = (0);
var state_18070__$1 = (function (){var statearr_18131 = state_18070;
(statearr_18131[(13)] = inst_17954);

(statearr_18131[(14)] = inst_17953);

(statearr_18131[(16)] = inst_17951);

(statearr_18131[(17)] = inst_17952);

return statearr_18131;
})();
var statearr_18132_18197 = state_18070__$1;
(statearr_18132_18197[(2)] = null);

(statearr_18132_18197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (14))){
var state_18070__$1 = state_18070;
var statearr_18133_18198 = state_18070__$1;
(statearr_18133_18198[(2)] = null);

(statearr_18133_18198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (45))){
var inst_18060 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18134_18199 = state_18070__$1;
(statearr_18134_18199[(2)] = inst_18060);

(statearr_18134_18199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (26))){
var inst_18002 = (state_18070[(29)]);
var inst_18056 = (state_18070[(2)]);
var inst_18057 = cljs.core.seq.call(null,inst_18002);
var state_18070__$1 = (function (){var statearr_18135 = state_18070;
(statearr_18135[(31)] = inst_18056);

return statearr_18135;
})();
if(inst_18057){
var statearr_18136_18200 = state_18070__$1;
(statearr_18136_18200[(1)] = (42));

} else {
var statearr_18137_18201 = state_18070__$1;
(statearr_18137_18201[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (16))){
var inst_17971 = (state_18070[(7)]);
var inst_17973 = cljs.core.chunked_seq_QMARK_.call(null,inst_17971);
var state_18070__$1 = state_18070;
if(inst_17973){
var statearr_18138_18202 = state_18070__$1;
(statearr_18138_18202[(1)] = (19));

} else {
var statearr_18139_18203 = state_18070__$1;
(statearr_18139_18203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (38))){
var inst_18049 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18140_18204 = state_18070__$1;
(statearr_18140_18204[(2)] = inst_18049);

(statearr_18140_18204[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (30))){
var state_18070__$1 = state_18070;
var statearr_18141_18205 = state_18070__$1;
(statearr_18141_18205[(2)] = null);

(statearr_18141_18205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (10))){
var inst_17954 = (state_18070[(13)]);
var inst_17952 = (state_18070[(17)]);
var inst_17960 = cljs.core._nth.call(null,inst_17952,inst_17954);
var inst_17961 = cljs.core.nth.call(null,inst_17960,(0),null);
var inst_17962 = cljs.core.nth.call(null,inst_17960,(1),null);
var state_18070__$1 = (function (){var statearr_18142 = state_18070;
(statearr_18142[(26)] = inst_17961);

return statearr_18142;
})();
if(cljs.core.truth_(inst_17962)){
var statearr_18143_18206 = state_18070__$1;
(statearr_18143_18206[(1)] = (13));

} else {
var statearr_18144_18207 = state_18070__$1;
(statearr_18144_18207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (18))){
var inst_17995 = (state_18070[(2)]);
var state_18070__$1 = state_18070;
var statearr_18145_18208 = state_18070__$1;
(statearr_18145_18208[(2)] = inst_17995);

(statearr_18145_18208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (42))){
var state_18070__$1 = state_18070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18070__$1,(45),dchan);
} else {
if((state_val_18071 === (37))){
var inst_17942 = (state_18070[(11)]);
var inst_18029 = (state_18070[(25)]);
var inst_18038 = (state_18070[(23)]);
var inst_18038__$1 = cljs.core.first.call(null,inst_18029);
var inst_18039 = cljs.core.async.put_BANG_.call(null,inst_18038__$1,inst_17942,done);
var state_18070__$1 = (function (){var statearr_18146 = state_18070;
(statearr_18146[(23)] = inst_18038__$1);

return statearr_18146;
})();
if(cljs.core.truth_(inst_18039)){
var statearr_18147_18209 = state_18070__$1;
(statearr_18147_18209[(1)] = (39));

} else {
var statearr_18148_18210 = state_18070__$1;
(statearr_18148_18210[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18071 === (8))){
var inst_17954 = (state_18070[(13)]);
var inst_17953 = (state_18070[(14)]);
var inst_17956 = (inst_17954 < inst_17953);
var inst_17957 = inst_17956;
var state_18070__$1 = state_18070;
if(cljs.core.truth_(inst_17957)){
var statearr_18149_18211 = state_18070__$1;
(statearr_18149_18211[(1)] = (10));

} else {
var statearr_18150_18212 = state_18070__$1;
(statearr_18150_18212[(1)] = (11));

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
});})(c__6711__auto___18158,cs,m,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6711__auto___18158,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6656__auto__ = null;
var cljs$core$async$mult_$_state_machine__6656__auto____0 = (function (){
var statearr_18154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18154[(0)] = cljs$core$async$mult_$_state_machine__6656__auto__);

(statearr_18154[(1)] = (1));

return statearr_18154;
});
var cljs$core$async$mult_$_state_machine__6656__auto____1 = (function (state_18070){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18155){if((e18155 instanceof Object)){
var ex__6659__auto__ = e18155;
var statearr_18156_18213 = state_18070;
(statearr_18156_18213[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18214 = state_18070;
state_18070 = G__18214;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6656__auto__ = function(state_18070){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6656__auto____1.call(this,state_18070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6656__auto____0;
cljs$core$async$mult_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6656__auto____1;
return cljs$core$async$mult_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18158,cs,m,dchan,dctr,done))
})();
var state__6713__auto__ = (function (){var statearr_18157 = f__6712__auto__.call(null);
(statearr_18157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18158);

return statearr_18157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18158,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18216 = {};
return obj18216;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18217){
var map__18222 = p__18217;
var map__18222__$1 = ((cljs.core.seq_QMARK_.call(null,map__18222))?cljs.core.apply.call(null,cljs.core.hash_map,map__18222):map__18222);
var opts = map__18222__$1;
var statearr_18223_18226 = state;
(statearr_18223_18226[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18222,map__18222__$1,opts){
return (function (val){
var statearr_18224_18227 = state;
(statearr_18224_18227[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18222,map__18222__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18225_18228 = state;
(statearr_18225_18228[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18217 = null;
if (arguments.length > 3) {
var G__18229__i = 0, G__18229__a = new Array(arguments.length -  3);
while (G__18229__i < G__18229__a.length) {G__18229__a[G__18229__i] = arguments[G__18229__i + 3]; ++G__18229__i;}
  p__18217 = new cljs.core.IndexedSeq(G__18229__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18217);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18230){
var state = cljs.core.first(arglist__18230);
arglist__18230 = cljs.core.next(arglist__18230);
var cont_block = cljs.core.first(arglist__18230);
arglist__18230 = cljs.core.next(arglist__18230);
var ports = cljs.core.first(arglist__18230);
var p__18217 = cljs.core.rest(arglist__18230);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__18217);
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
if(typeof cljs.core.async.t18350 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18350 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18351){
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
this.meta18351 = meta18351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18352,meta18351__$1){
var self__ = this;
var _18352__$1 = this;
return (new cljs.core.async.t18350(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18351__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18352){
var self__ = this;
var _18352__$1 = this;
return self__.meta18351;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18350.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18350.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18350.cljs$lang$type = true;

cljs.core.async.t18350.cljs$lang$ctorStr = "cljs.core.async/t18350";

cljs.core.async.t18350.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t18350");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18350 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18350(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18351){
return (new cljs.core.async.t18350(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18351));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18350(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6711__auto___18469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18422){
var state_val_18423 = (state_18422[(1)]);
if((state_val_18423 === (7))){
var inst_18366 = (state_18422[(7)]);
var inst_18371 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18366);
var state_18422__$1 = state_18422;
var statearr_18424_18470 = state_18422__$1;
(statearr_18424_18470[(2)] = inst_18371);

(statearr_18424_18470[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (20))){
var inst_18381 = (state_18422[(8)]);
var state_18422__$1 = state_18422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18422__$1,(23),out,inst_18381);
} else {
if((state_val_18423 === (1))){
var inst_18356 = (state_18422[(9)]);
var inst_18356__$1 = calc_state.call(null);
var inst_18357 = cljs.core.seq_QMARK_.call(null,inst_18356__$1);
var state_18422__$1 = (function (){var statearr_18425 = state_18422;
(statearr_18425[(9)] = inst_18356__$1);

return statearr_18425;
})();
if(inst_18357){
var statearr_18426_18471 = state_18422__$1;
(statearr_18426_18471[(1)] = (2));

} else {
var statearr_18427_18472 = state_18422__$1;
(statearr_18427_18472[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (24))){
var inst_18374 = (state_18422[(10)]);
var inst_18366 = inst_18374;
var state_18422__$1 = (function (){var statearr_18428 = state_18422;
(statearr_18428[(7)] = inst_18366);

return statearr_18428;
})();
var statearr_18429_18473 = state_18422__$1;
(statearr_18429_18473[(2)] = null);

(statearr_18429_18473[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (4))){
var inst_18356 = (state_18422[(9)]);
var inst_18362 = (state_18422[(2)]);
var inst_18363 = cljs.core.get.call(null,inst_18362,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18364 = cljs.core.get.call(null,inst_18362,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18365 = cljs.core.get.call(null,inst_18362,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18366 = inst_18356;
var state_18422__$1 = (function (){var statearr_18430 = state_18422;
(statearr_18430[(11)] = inst_18364);

(statearr_18430[(12)] = inst_18365);

(statearr_18430[(13)] = inst_18363);

(statearr_18430[(7)] = inst_18366);

return statearr_18430;
})();
var statearr_18431_18474 = state_18422__$1;
(statearr_18431_18474[(2)] = null);

(statearr_18431_18474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (15))){
var state_18422__$1 = state_18422;
var statearr_18432_18475 = state_18422__$1;
(statearr_18432_18475[(2)] = null);

(statearr_18432_18475[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (21))){
var inst_18374 = (state_18422[(10)]);
var inst_18366 = inst_18374;
var state_18422__$1 = (function (){var statearr_18433 = state_18422;
(statearr_18433[(7)] = inst_18366);

return statearr_18433;
})();
var statearr_18434_18476 = state_18422__$1;
(statearr_18434_18476[(2)] = null);

(statearr_18434_18476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (13))){
var inst_18418 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
var statearr_18435_18477 = state_18422__$1;
(statearr_18435_18477[(2)] = inst_18418);

(statearr_18435_18477[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (22))){
var inst_18416 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
var statearr_18436_18478 = state_18422__$1;
(statearr_18436_18478[(2)] = inst_18416);

(statearr_18436_18478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (6))){
var inst_18420 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18422__$1,inst_18420);
} else {
if((state_val_18423 === (25))){
var state_18422__$1 = state_18422;
var statearr_18437_18479 = state_18422__$1;
(statearr_18437_18479[(2)] = null);

(statearr_18437_18479[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (17))){
var inst_18396 = (state_18422[(14)]);
var state_18422__$1 = state_18422;
var statearr_18438_18480 = state_18422__$1;
(statearr_18438_18480[(2)] = inst_18396);

(statearr_18438_18480[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (3))){
var inst_18356 = (state_18422[(9)]);
var state_18422__$1 = state_18422;
var statearr_18439_18481 = state_18422__$1;
(statearr_18439_18481[(2)] = inst_18356);

(statearr_18439_18481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (12))){
var inst_18396 = (state_18422[(14)]);
var inst_18382 = (state_18422[(15)]);
var inst_18375 = (state_18422[(16)]);
var inst_18396__$1 = inst_18375.call(null,inst_18382);
var state_18422__$1 = (function (){var statearr_18440 = state_18422;
(statearr_18440[(14)] = inst_18396__$1);

return statearr_18440;
})();
if(cljs.core.truth_(inst_18396__$1)){
var statearr_18441_18482 = state_18422__$1;
(statearr_18441_18482[(1)] = (17));

} else {
var statearr_18442_18483 = state_18422__$1;
(statearr_18442_18483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (2))){
var inst_18356 = (state_18422[(9)]);
var inst_18359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18356);
var state_18422__$1 = state_18422;
var statearr_18443_18484 = state_18422__$1;
(statearr_18443_18484[(2)] = inst_18359);

(statearr_18443_18484[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (23))){
var inst_18407 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
if(cljs.core.truth_(inst_18407)){
var statearr_18444_18485 = state_18422__$1;
(statearr_18444_18485[(1)] = (24));

} else {
var statearr_18445_18486 = state_18422__$1;
(statearr_18445_18486[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (19))){
var inst_18404 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
if(cljs.core.truth_(inst_18404)){
var statearr_18446_18487 = state_18422__$1;
(statearr_18446_18487[(1)] = (20));

} else {
var statearr_18447_18488 = state_18422__$1;
(statearr_18447_18488[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (11))){
var inst_18381 = (state_18422[(8)]);
var inst_18387 = (inst_18381 == null);
var state_18422__$1 = state_18422;
if(cljs.core.truth_(inst_18387)){
var statearr_18448_18489 = state_18422__$1;
(statearr_18448_18489[(1)] = (14));

} else {
var statearr_18449_18490 = state_18422__$1;
(statearr_18449_18490[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (9))){
var inst_18374 = (state_18422[(10)]);
var inst_18374__$1 = (state_18422[(2)]);
var inst_18375 = cljs.core.get.call(null,inst_18374__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18376 = cljs.core.get.call(null,inst_18374__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18377 = cljs.core.get.call(null,inst_18374__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18422__$1 = (function (){var statearr_18450 = state_18422;
(statearr_18450[(17)] = inst_18376);

(statearr_18450[(16)] = inst_18375);

(statearr_18450[(10)] = inst_18374__$1);

return statearr_18450;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18422__$1,(10),inst_18377);
} else {
if((state_val_18423 === (5))){
var inst_18366 = (state_18422[(7)]);
var inst_18369 = cljs.core.seq_QMARK_.call(null,inst_18366);
var state_18422__$1 = state_18422;
if(inst_18369){
var statearr_18451_18491 = state_18422__$1;
(statearr_18451_18491[(1)] = (7));

} else {
var statearr_18452_18492 = state_18422__$1;
(statearr_18452_18492[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (14))){
var inst_18382 = (state_18422[(15)]);
var inst_18389 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18382);
var state_18422__$1 = state_18422;
var statearr_18453_18493 = state_18422__$1;
(statearr_18453_18493[(2)] = inst_18389);

(statearr_18453_18493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (26))){
var inst_18412 = (state_18422[(2)]);
var state_18422__$1 = state_18422;
var statearr_18454_18494 = state_18422__$1;
(statearr_18454_18494[(2)] = inst_18412);

(statearr_18454_18494[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (16))){
var inst_18392 = (state_18422[(2)]);
var inst_18393 = calc_state.call(null);
var inst_18366 = inst_18393;
var state_18422__$1 = (function (){var statearr_18455 = state_18422;
(statearr_18455[(18)] = inst_18392);

(statearr_18455[(7)] = inst_18366);

return statearr_18455;
})();
var statearr_18456_18495 = state_18422__$1;
(statearr_18456_18495[(2)] = null);

(statearr_18456_18495[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (10))){
var inst_18382 = (state_18422[(15)]);
var inst_18381 = (state_18422[(8)]);
var inst_18380 = (state_18422[(2)]);
var inst_18381__$1 = cljs.core.nth.call(null,inst_18380,(0),null);
var inst_18382__$1 = cljs.core.nth.call(null,inst_18380,(1),null);
var inst_18383 = (inst_18381__$1 == null);
var inst_18384 = cljs.core._EQ_.call(null,inst_18382__$1,change);
var inst_18385 = (inst_18383) || (inst_18384);
var state_18422__$1 = (function (){var statearr_18457 = state_18422;
(statearr_18457[(15)] = inst_18382__$1);

(statearr_18457[(8)] = inst_18381__$1);

return statearr_18457;
})();
if(cljs.core.truth_(inst_18385)){
var statearr_18458_18496 = state_18422__$1;
(statearr_18458_18496[(1)] = (11));

} else {
var statearr_18459_18497 = state_18422__$1;
(statearr_18459_18497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (18))){
var inst_18382 = (state_18422[(15)]);
var inst_18376 = (state_18422[(17)]);
var inst_18375 = (state_18422[(16)]);
var inst_18399 = cljs.core.empty_QMARK_.call(null,inst_18375);
var inst_18400 = inst_18376.call(null,inst_18382);
var inst_18401 = cljs.core.not.call(null,inst_18400);
var inst_18402 = (inst_18399) && (inst_18401);
var state_18422__$1 = state_18422;
var statearr_18460_18498 = state_18422__$1;
(statearr_18460_18498[(2)] = inst_18402);

(statearr_18460_18498[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18423 === (8))){
var inst_18366 = (state_18422[(7)]);
var state_18422__$1 = state_18422;
var statearr_18461_18499 = state_18422__$1;
(statearr_18461_18499[(2)] = inst_18366);

(statearr_18461_18499[(1)] = (9));


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
});})(c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6655__auto__,c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6656__auto__ = null;
var cljs$core$async$mix_$_state_machine__6656__auto____0 = (function (){
var statearr_18465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18465[(0)] = cljs$core$async$mix_$_state_machine__6656__auto__);

(statearr_18465[(1)] = (1));

return statearr_18465;
});
var cljs$core$async$mix_$_state_machine__6656__auto____1 = (function (state_18422){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18466){if((e18466 instanceof Object)){
var ex__6659__auto__ = e18466;
var statearr_18467_18500 = state_18422;
(statearr_18467_18500[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18501 = state_18422;
state_18422 = G__18501;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6656__auto__ = function(state_18422){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6656__auto____1.call(this,state_18422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6656__auto____0;
cljs$core$async$mix_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6656__auto____1;
return cljs$core$async$mix_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6713__auto__ = (function (){var statearr_18468 = f__6712__auto__.call(null);
(statearr_18468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18469);

return statearr_18468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18469,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18503 = {};
return obj18503;
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
return (function (p1__18504_SHARP_){
if(cljs.core.truth_(p1__18504_SHARP_.call(null,topic))){
return p1__18504_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18504_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18627 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18627 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta18628){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18628 = meta18628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18629,meta18628__$1){
var self__ = this;
var _18629__$1 = this;
return (new cljs.core.async.t18627(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18628__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18629){
var self__ = this;
var _18629__$1 = this;
return self__.meta18628;
});})(mults,ensure_mult))
;

cljs.core.async.t18627.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18627.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18627.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18627.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18627.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18627.cljs$lang$type = true;

cljs.core.async.t18627.cljs$lang$ctorStr = "cljs.core.async/t18627";

cljs.core.async.t18627.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t18627");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18627 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t18627(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18628){
return (new cljs.core.async.t18627(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18628));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18627(cljs$core$async$pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6711__auto___18749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18749,mults,ensure_mult,p){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18749,mults,ensure_mult,p){
return (function (state_18701){
var state_val_18702 = (state_18701[(1)]);
if((state_val_18702 === (7))){
var inst_18697 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18703_18750 = state_18701__$1;
(statearr_18703_18750[(2)] = inst_18697);

(statearr_18703_18750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (20))){
var state_18701__$1 = state_18701;
var statearr_18704_18751 = state_18701__$1;
(statearr_18704_18751[(2)] = null);

(statearr_18704_18751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (1))){
var state_18701__$1 = state_18701;
var statearr_18705_18752 = state_18701__$1;
(statearr_18705_18752[(2)] = null);

(statearr_18705_18752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (24))){
var inst_18680 = (state_18701[(7)]);
var inst_18689 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18680);
var state_18701__$1 = state_18701;
var statearr_18706_18753 = state_18701__$1;
(statearr_18706_18753[(2)] = inst_18689);

(statearr_18706_18753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (4))){
var inst_18632 = (state_18701[(8)]);
var inst_18632__$1 = (state_18701[(2)]);
var inst_18633 = (inst_18632__$1 == null);
var state_18701__$1 = (function (){var statearr_18707 = state_18701;
(statearr_18707[(8)] = inst_18632__$1);

return statearr_18707;
})();
if(cljs.core.truth_(inst_18633)){
var statearr_18708_18754 = state_18701__$1;
(statearr_18708_18754[(1)] = (5));

} else {
var statearr_18709_18755 = state_18701__$1;
(statearr_18709_18755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (15))){
var inst_18674 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18710_18756 = state_18701__$1;
(statearr_18710_18756[(2)] = inst_18674);

(statearr_18710_18756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (21))){
var inst_18694 = (state_18701[(2)]);
var state_18701__$1 = (function (){var statearr_18711 = state_18701;
(statearr_18711[(9)] = inst_18694);

return statearr_18711;
})();
var statearr_18712_18757 = state_18701__$1;
(statearr_18712_18757[(2)] = null);

(statearr_18712_18757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (13))){
var inst_18656 = (state_18701[(10)]);
var inst_18658 = cljs.core.chunked_seq_QMARK_.call(null,inst_18656);
var state_18701__$1 = state_18701;
if(inst_18658){
var statearr_18713_18758 = state_18701__$1;
(statearr_18713_18758[(1)] = (16));

} else {
var statearr_18714_18759 = state_18701__$1;
(statearr_18714_18759[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (22))){
var inst_18686 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
if(cljs.core.truth_(inst_18686)){
var statearr_18715_18760 = state_18701__$1;
(statearr_18715_18760[(1)] = (23));

} else {
var statearr_18716_18761 = state_18701__$1;
(statearr_18716_18761[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (6))){
var inst_18682 = (state_18701[(11)]);
var inst_18632 = (state_18701[(8)]);
var inst_18680 = (state_18701[(7)]);
var inst_18680__$1 = topic_fn.call(null,inst_18632);
var inst_18681 = cljs.core.deref.call(null,mults);
var inst_18682__$1 = cljs.core.get.call(null,inst_18681,inst_18680__$1);
var state_18701__$1 = (function (){var statearr_18717 = state_18701;
(statearr_18717[(11)] = inst_18682__$1);

(statearr_18717[(7)] = inst_18680__$1);

return statearr_18717;
})();
if(cljs.core.truth_(inst_18682__$1)){
var statearr_18718_18762 = state_18701__$1;
(statearr_18718_18762[(1)] = (19));

} else {
var statearr_18719_18763 = state_18701__$1;
(statearr_18719_18763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (25))){
var inst_18691 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18720_18764 = state_18701__$1;
(statearr_18720_18764[(2)] = inst_18691);

(statearr_18720_18764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (17))){
var inst_18656 = (state_18701[(10)]);
var inst_18665 = cljs.core.first.call(null,inst_18656);
var inst_18666 = cljs.core.async.muxch_STAR_.call(null,inst_18665);
var inst_18667 = cljs.core.async.close_BANG_.call(null,inst_18666);
var inst_18668 = cljs.core.next.call(null,inst_18656);
var inst_18642 = inst_18668;
var inst_18643 = null;
var inst_18644 = (0);
var inst_18645 = (0);
var state_18701__$1 = (function (){var statearr_18721 = state_18701;
(statearr_18721[(12)] = inst_18644);

(statearr_18721[(13)] = inst_18667);

(statearr_18721[(14)] = inst_18643);

(statearr_18721[(15)] = inst_18642);

(statearr_18721[(16)] = inst_18645);

return statearr_18721;
})();
var statearr_18722_18765 = state_18701__$1;
(statearr_18722_18765[(2)] = null);

(statearr_18722_18765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (3))){
var inst_18699 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18701__$1,inst_18699);
} else {
if((state_val_18702 === (12))){
var inst_18676 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18723_18766 = state_18701__$1;
(statearr_18723_18766[(2)] = inst_18676);

(statearr_18723_18766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (2))){
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18701__$1,(4),ch);
} else {
if((state_val_18702 === (23))){
var state_18701__$1 = state_18701;
var statearr_18724_18767 = state_18701__$1;
(statearr_18724_18767[(2)] = null);

(statearr_18724_18767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (19))){
var inst_18682 = (state_18701[(11)]);
var inst_18632 = (state_18701[(8)]);
var inst_18684 = cljs.core.async.muxch_STAR_.call(null,inst_18682);
var state_18701__$1 = state_18701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18701__$1,(22),inst_18684,inst_18632);
} else {
if((state_val_18702 === (11))){
var inst_18656 = (state_18701[(10)]);
var inst_18642 = (state_18701[(15)]);
var inst_18656__$1 = cljs.core.seq.call(null,inst_18642);
var state_18701__$1 = (function (){var statearr_18725 = state_18701;
(statearr_18725[(10)] = inst_18656__$1);

return statearr_18725;
})();
if(inst_18656__$1){
var statearr_18726_18768 = state_18701__$1;
(statearr_18726_18768[(1)] = (13));

} else {
var statearr_18727_18769 = state_18701__$1;
(statearr_18727_18769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (9))){
var inst_18678 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18728_18770 = state_18701__$1;
(statearr_18728_18770[(2)] = inst_18678);

(statearr_18728_18770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (5))){
var inst_18639 = cljs.core.deref.call(null,mults);
var inst_18640 = cljs.core.vals.call(null,inst_18639);
var inst_18641 = cljs.core.seq.call(null,inst_18640);
var inst_18642 = inst_18641;
var inst_18643 = null;
var inst_18644 = (0);
var inst_18645 = (0);
var state_18701__$1 = (function (){var statearr_18729 = state_18701;
(statearr_18729[(12)] = inst_18644);

(statearr_18729[(14)] = inst_18643);

(statearr_18729[(15)] = inst_18642);

(statearr_18729[(16)] = inst_18645);

return statearr_18729;
})();
var statearr_18730_18771 = state_18701__$1;
(statearr_18730_18771[(2)] = null);

(statearr_18730_18771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (14))){
var state_18701__$1 = state_18701;
var statearr_18734_18772 = state_18701__$1;
(statearr_18734_18772[(2)] = null);

(statearr_18734_18772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (16))){
var inst_18656 = (state_18701[(10)]);
var inst_18660 = cljs.core.chunk_first.call(null,inst_18656);
var inst_18661 = cljs.core.chunk_rest.call(null,inst_18656);
var inst_18662 = cljs.core.count.call(null,inst_18660);
var inst_18642 = inst_18661;
var inst_18643 = inst_18660;
var inst_18644 = inst_18662;
var inst_18645 = (0);
var state_18701__$1 = (function (){var statearr_18735 = state_18701;
(statearr_18735[(12)] = inst_18644);

(statearr_18735[(14)] = inst_18643);

(statearr_18735[(15)] = inst_18642);

(statearr_18735[(16)] = inst_18645);

return statearr_18735;
})();
var statearr_18736_18773 = state_18701__$1;
(statearr_18736_18773[(2)] = null);

(statearr_18736_18773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (10))){
var inst_18644 = (state_18701[(12)]);
var inst_18643 = (state_18701[(14)]);
var inst_18642 = (state_18701[(15)]);
var inst_18645 = (state_18701[(16)]);
var inst_18650 = cljs.core._nth.call(null,inst_18643,inst_18645);
var inst_18651 = cljs.core.async.muxch_STAR_.call(null,inst_18650);
var inst_18652 = cljs.core.async.close_BANG_.call(null,inst_18651);
var inst_18653 = (inst_18645 + (1));
var tmp18731 = inst_18644;
var tmp18732 = inst_18643;
var tmp18733 = inst_18642;
var inst_18642__$1 = tmp18733;
var inst_18643__$1 = tmp18732;
var inst_18644__$1 = tmp18731;
var inst_18645__$1 = inst_18653;
var state_18701__$1 = (function (){var statearr_18737 = state_18701;
(statearr_18737[(12)] = inst_18644__$1);

(statearr_18737[(17)] = inst_18652);

(statearr_18737[(14)] = inst_18643__$1);

(statearr_18737[(15)] = inst_18642__$1);

(statearr_18737[(16)] = inst_18645__$1);

return statearr_18737;
})();
var statearr_18738_18774 = state_18701__$1;
(statearr_18738_18774[(2)] = null);

(statearr_18738_18774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (18))){
var inst_18671 = (state_18701[(2)]);
var state_18701__$1 = state_18701;
var statearr_18739_18775 = state_18701__$1;
(statearr_18739_18775[(2)] = inst_18671);

(statearr_18739_18775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18702 === (8))){
var inst_18644 = (state_18701[(12)]);
var inst_18645 = (state_18701[(16)]);
var inst_18647 = (inst_18645 < inst_18644);
var inst_18648 = inst_18647;
var state_18701__$1 = state_18701;
if(cljs.core.truth_(inst_18648)){
var statearr_18740_18776 = state_18701__$1;
(statearr_18740_18776[(1)] = (10));

} else {
var statearr_18741_18777 = state_18701__$1;
(statearr_18741_18777[(1)] = (11));

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
});})(c__6711__auto___18749,mults,ensure_mult,p))
;
return ((function (switch__6655__auto__,c__6711__auto___18749,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6656__auto__ = null;
var cljs$core$async$pub_$_state_machine__6656__auto____0 = (function (){
var statearr_18745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18745[(0)] = cljs$core$async$pub_$_state_machine__6656__auto__);

(statearr_18745[(1)] = (1));

return statearr_18745;
});
var cljs$core$async$pub_$_state_machine__6656__auto____1 = (function (state_18701){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18746){if((e18746 instanceof Object)){
var ex__6659__auto__ = e18746;
var statearr_18747_18778 = state_18701;
(statearr_18747_18778[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18779 = state_18701;
state_18701 = G__18779;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6656__auto__ = function(state_18701){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6656__auto____1.call(this,state_18701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6656__auto____0;
cljs$core$async$pub_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6656__auto____1;
return cljs$core$async$pub_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18749,mults,ensure_mult,p))
})();
var state__6713__auto__ = (function (){var statearr_18748 = f__6712__auto__.call(null);
(statearr_18748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18749);

return statearr_18748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18749,mults,ensure_mult,p))
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
var c__6711__auto___18916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18886){
var state_val_18887 = (state_18886[(1)]);
if((state_val_18887 === (7))){
var state_18886__$1 = state_18886;
var statearr_18888_18917 = state_18886__$1;
(statearr_18888_18917[(2)] = null);

(statearr_18888_18917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (1))){
var state_18886__$1 = state_18886;
var statearr_18889_18918 = state_18886__$1;
(statearr_18889_18918[(2)] = null);

(statearr_18889_18918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (4))){
var inst_18850 = (state_18886[(7)]);
var inst_18852 = (inst_18850 < cnt);
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18852)){
var statearr_18890_18919 = state_18886__$1;
(statearr_18890_18919[(1)] = (6));

} else {
var statearr_18891_18920 = state_18886__$1;
(statearr_18891_18920[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (15))){
var inst_18882 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18892_18921 = state_18886__$1;
(statearr_18892_18921[(2)] = inst_18882);

(statearr_18892_18921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (13))){
var inst_18875 = cljs.core.async.close_BANG_.call(null,out);
var state_18886__$1 = state_18886;
var statearr_18893_18922 = state_18886__$1;
(statearr_18893_18922[(2)] = inst_18875);

(statearr_18893_18922[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (6))){
var state_18886__$1 = state_18886;
var statearr_18894_18923 = state_18886__$1;
(statearr_18894_18923[(2)] = null);

(statearr_18894_18923[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (3))){
var inst_18884 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18886__$1,inst_18884);
} else {
if((state_val_18887 === (12))){
var inst_18872 = (state_18886[(8)]);
var inst_18872__$1 = (state_18886[(2)]);
var inst_18873 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18872__$1);
var state_18886__$1 = (function (){var statearr_18895 = state_18886;
(statearr_18895[(8)] = inst_18872__$1);

return statearr_18895;
})();
if(cljs.core.truth_(inst_18873)){
var statearr_18896_18924 = state_18886__$1;
(statearr_18896_18924[(1)] = (13));

} else {
var statearr_18897_18925 = state_18886__$1;
(statearr_18897_18925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (2))){
var inst_18849 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18850 = (0);
var state_18886__$1 = (function (){var statearr_18898 = state_18886;
(statearr_18898[(7)] = inst_18850);

(statearr_18898[(9)] = inst_18849);

return statearr_18898;
})();
var statearr_18899_18926 = state_18886__$1;
(statearr_18899_18926[(2)] = null);

(statearr_18899_18926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (11))){
var inst_18850 = (state_18886[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18886,(10),Object,null,(9));
var inst_18859 = chs__$1.call(null,inst_18850);
var inst_18860 = done.call(null,inst_18850);
var inst_18861 = cljs.core.async.take_BANG_.call(null,inst_18859,inst_18860);
var state_18886__$1 = state_18886;
var statearr_18900_18927 = state_18886__$1;
(statearr_18900_18927[(2)] = inst_18861);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (9))){
var inst_18850 = (state_18886[(7)]);
var inst_18863 = (state_18886[(2)]);
var inst_18864 = (inst_18850 + (1));
var inst_18850__$1 = inst_18864;
var state_18886__$1 = (function (){var statearr_18901 = state_18886;
(statearr_18901[(7)] = inst_18850__$1);

(statearr_18901[(10)] = inst_18863);

return statearr_18901;
})();
var statearr_18902_18928 = state_18886__$1;
(statearr_18902_18928[(2)] = null);

(statearr_18902_18928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (5))){
var inst_18870 = (state_18886[(2)]);
var state_18886__$1 = (function (){var statearr_18903 = state_18886;
(statearr_18903[(11)] = inst_18870);

return statearr_18903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18886__$1,(12),dchan);
} else {
if((state_val_18887 === (14))){
var inst_18872 = (state_18886[(8)]);
var inst_18877 = cljs.core.apply.call(null,f,inst_18872);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18886__$1,(16),out,inst_18877);
} else {
if((state_val_18887 === (16))){
var inst_18879 = (state_18886[(2)]);
var state_18886__$1 = (function (){var statearr_18904 = state_18886;
(statearr_18904[(12)] = inst_18879);

return statearr_18904;
})();
var statearr_18905_18929 = state_18886__$1;
(statearr_18905_18929[(2)] = null);

(statearr_18905_18929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (10))){
var inst_18854 = (state_18886[(2)]);
var inst_18855 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18886__$1 = (function (){var statearr_18906 = state_18886;
(statearr_18906[(13)] = inst_18854);

return statearr_18906;
})();
var statearr_18907_18930 = state_18886__$1;
(statearr_18907_18930[(2)] = inst_18855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18886__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (8))){
var inst_18868 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18908_18931 = state_18886__$1;
(statearr_18908_18931[(2)] = inst_18868);

(statearr_18908_18931[(1)] = (5));


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
});})(c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6656__auto__ = null;
var cljs$core$async$map_$_state_machine__6656__auto____0 = (function (){
var statearr_18912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18912[(0)] = cljs$core$async$map_$_state_machine__6656__auto__);

(statearr_18912[(1)] = (1));

return statearr_18912;
});
var cljs$core$async$map_$_state_machine__6656__auto____1 = (function (state_18886){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18913){if((e18913 instanceof Object)){
var ex__6659__auto__ = e18913;
var statearr_18914_18932 = state_18886;
(statearr_18914_18932[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18933 = state_18886;
state_18886 = G__18933;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6656__auto__ = function(state_18886){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6656__auto____1.call(this,state_18886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6656__auto____0;
cljs$core$async$map_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6656__auto____1;
return cljs$core$async$map_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6713__auto__ = (function (){var statearr_18915 = f__6712__auto__.call(null);
(statearr_18915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18916);

return statearr_18915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18916,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6711__auto___19041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19041,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19041,out){
return (function (state_19017){
var state_val_19018 = (state_19017[(1)]);
if((state_val_19018 === (7))){
var inst_18996 = (state_19017[(7)]);
var inst_18997 = (state_19017[(8)]);
var inst_18996__$1 = (state_19017[(2)]);
var inst_18997__$1 = cljs.core.nth.call(null,inst_18996__$1,(0),null);
var inst_18998 = cljs.core.nth.call(null,inst_18996__$1,(1),null);
var inst_18999 = (inst_18997__$1 == null);
var state_19017__$1 = (function (){var statearr_19019 = state_19017;
(statearr_19019[(7)] = inst_18996__$1);

(statearr_19019[(8)] = inst_18997__$1);

(statearr_19019[(9)] = inst_18998);

return statearr_19019;
})();
if(cljs.core.truth_(inst_18999)){
var statearr_19020_19042 = state_19017__$1;
(statearr_19020_19042[(1)] = (8));

} else {
var statearr_19021_19043 = state_19017__$1;
(statearr_19021_19043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (1))){
var inst_18988 = cljs.core.vec.call(null,chs);
var inst_18989 = inst_18988;
var state_19017__$1 = (function (){var statearr_19022 = state_19017;
(statearr_19022[(10)] = inst_18989);

return statearr_19022;
})();
var statearr_19023_19044 = state_19017__$1;
(statearr_19023_19044[(2)] = null);

(statearr_19023_19044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (4))){
var inst_18989 = (state_19017[(10)]);
var state_19017__$1 = state_19017;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19017__$1,(7),inst_18989);
} else {
if((state_val_19018 === (6))){
var inst_19013 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19024_19045 = state_19017__$1;
(statearr_19024_19045[(2)] = inst_19013);

(statearr_19024_19045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (3))){
var inst_19015 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19017__$1,inst_19015);
} else {
if((state_val_19018 === (2))){
var inst_18989 = (state_19017[(10)]);
var inst_18991 = cljs.core.count.call(null,inst_18989);
var inst_18992 = (inst_18991 > (0));
var state_19017__$1 = state_19017;
if(cljs.core.truth_(inst_18992)){
var statearr_19026_19046 = state_19017__$1;
(statearr_19026_19046[(1)] = (4));

} else {
var statearr_19027_19047 = state_19017__$1;
(statearr_19027_19047[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (11))){
var inst_18989 = (state_19017[(10)]);
var inst_19006 = (state_19017[(2)]);
var tmp19025 = inst_18989;
var inst_18989__$1 = tmp19025;
var state_19017__$1 = (function (){var statearr_19028 = state_19017;
(statearr_19028[(10)] = inst_18989__$1);

(statearr_19028[(11)] = inst_19006);

return statearr_19028;
})();
var statearr_19029_19048 = state_19017__$1;
(statearr_19029_19048[(2)] = null);

(statearr_19029_19048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (9))){
var inst_18997 = (state_19017[(8)]);
var state_19017__$1 = state_19017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19017__$1,(11),out,inst_18997);
} else {
if((state_val_19018 === (5))){
var inst_19011 = cljs.core.async.close_BANG_.call(null,out);
var state_19017__$1 = state_19017;
var statearr_19030_19049 = state_19017__$1;
(statearr_19030_19049[(2)] = inst_19011);

(statearr_19030_19049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (10))){
var inst_19009 = (state_19017[(2)]);
var state_19017__$1 = state_19017;
var statearr_19031_19050 = state_19017__$1;
(statearr_19031_19050[(2)] = inst_19009);

(statearr_19031_19050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19018 === (8))){
var inst_18996 = (state_19017[(7)]);
var inst_18989 = (state_19017[(10)]);
var inst_18997 = (state_19017[(8)]);
var inst_18998 = (state_19017[(9)]);
var inst_19001 = (function (){var cs = inst_18989;
var vec__18994 = inst_18996;
var v = inst_18997;
var c = inst_18998;
return ((function (cs,vec__18994,v,c,inst_18996,inst_18989,inst_18997,inst_18998,state_val_19018,c__6711__auto___19041,out){
return (function (p1__18934_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18934_SHARP_);
});
;})(cs,vec__18994,v,c,inst_18996,inst_18989,inst_18997,inst_18998,state_val_19018,c__6711__auto___19041,out))
})();
var inst_19002 = cljs.core.filterv.call(null,inst_19001,inst_18989);
var inst_18989__$1 = inst_19002;
var state_19017__$1 = (function (){var statearr_19032 = state_19017;
(statearr_19032[(10)] = inst_18989__$1);

return statearr_19032;
})();
var statearr_19033_19051 = state_19017__$1;
(statearr_19033_19051[(2)] = null);

(statearr_19033_19051[(1)] = (2));


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
});})(c__6711__auto___19041,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19041,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6656__auto__ = null;
var cljs$core$async$merge_$_state_machine__6656__auto____0 = (function (){
var statearr_19037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19037[(0)] = cljs$core$async$merge_$_state_machine__6656__auto__);

(statearr_19037[(1)] = (1));

return statearr_19037;
});
var cljs$core$async$merge_$_state_machine__6656__auto____1 = (function (state_19017){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19038){if((e19038 instanceof Object)){
var ex__6659__auto__ = e19038;
var statearr_19039_19052 = state_19017;
(statearr_19039_19052[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19053 = state_19017;
state_19017 = G__19053;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6656__auto__ = function(state_19017){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6656__auto____1.call(this,state_19017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6656__auto____0;
cljs$core$async$merge_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6656__auto____1;
return cljs$core$async$merge_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19041,out))
})();
var state__6713__auto__ = (function (){var statearr_19040 = f__6712__auto__.call(null);
(statearr_19040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19041);

return statearr_19040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19041,out))
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
var c__6711__auto___19146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19146,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19146,out){
return (function (state_19123){
var state_val_19124 = (state_19123[(1)]);
if((state_val_19124 === (7))){
var inst_19105 = (state_19123[(7)]);
var inst_19105__$1 = (state_19123[(2)]);
var inst_19106 = (inst_19105__$1 == null);
var inst_19107 = cljs.core.not.call(null,inst_19106);
var state_19123__$1 = (function (){var statearr_19125 = state_19123;
(statearr_19125[(7)] = inst_19105__$1);

return statearr_19125;
})();
if(inst_19107){
var statearr_19126_19147 = state_19123__$1;
(statearr_19126_19147[(1)] = (8));

} else {
var statearr_19127_19148 = state_19123__$1;
(statearr_19127_19148[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (1))){
var inst_19100 = (0);
var state_19123__$1 = (function (){var statearr_19128 = state_19123;
(statearr_19128[(8)] = inst_19100);

return statearr_19128;
})();
var statearr_19129_19149 = state_19123__$1;
(statearr_19129_19149[(2)] = null);

(statearr_19129_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (4))){
var state_19123__$1 = state_19123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19123__$1,(7),ch);
} else {
if((state_val_19124 === (6))){
var inst_19118 = (state_19123[(2)]);
var state_19123__$1 = state_19123;
var statearr_19130_19150 = state_19123__$1;
(statearr_19130_19150[(2)] = inst_19118);

(statearr_19130_19150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (3))){
var inst_19120 = (state_19123[(2)]);
var inst_19121 = cljs.core.async.close_BANG_.call(null,out);
var state_19123__$1 = (function (){var statearr_19131 = state_19123;
(statearr_19131[(9)] = inst_19120);

return statearr_19131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19123__$1,inst_19121);
} else {
if((state_val_19124 === (2))){
var inst_19100 = (state_19123[(8)]);
var inst_19102 = (inst_19100 < n);
var state_19123__$1 = state_19123;
if(cljs.core.truth_(inst_19102)){
var statearr_19132_19151 = state_19123__$1;
(statearr_19132_19151[(1)] = (4));

} else {
var statearr_19133_19152 = state_19123__$1;
(statearr_19133_19152[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (11))){
var inst_19100 = (state_19123[(8)]);
var inst_19110 = (state_19123[(2)]);
var inst_19111 = (inst_19100 + (1));
var inst_19100__$1 = inst_19111;
var state_19123__$1 = (function (){var statearr_19134 = state_19123;
(statearr_19134[(10)] = inst_19110);

(statearr_19134[(8)] = inst_19100__$1);

return statearr_19134;
})();
var statearr_19135_19153 = state_19123__$1;
(statearr_19135_19153[(2)] = null);

(statearr_19135_19153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (9))){
var state_19123__$1 = state_19123;
var statearr_19136_19154 = state_19123__$1;
(statearr_19136_19154[(2)] = null);

(statearr_19136_19154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (5))){
var state_19123__$1 = state_19123;
var statearr_19137_19155 = state_19123__$1;
(statearr_19137_19155[(2)] = null);

(statearr_19137_19155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (10))){
var inst_19115 = (state_19123[(2)]);
var state_19123__$1 = state_19123;
var statearr_19138_19156 = state_19123__$1;
(statearr_19138_19156[(2)] = inst_19115);

(statearr_19138_19156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19124 === (8))){
var inst_19105 = (state_19123[(7)]);
var state_19123__$1 = state_19123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19123__$1,(11),out,inst_19105);
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
});})(c__6711__auto___19146,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19146,out){
return (function() {
var cljs$core$async$take_$_state_machine__6656__auto__ = null;
var cljs$core$async$take_$_state_machine__6656__auto____0 = (function (){
var statearr_19142 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19142[(0)] = cljs$core$async$take_$_state_machine__6656__auto__);

(statearr_19142[(1)] = (1));

return statearr_19142;
});
var cljs$core$async$take_$_state_machine__6656__auto____1 = (function (state_19123){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19143){if((e19143 instanceof Object)){
var ex__6659__auto__ = e19143;
var statearr_19144_19157 = state_19123;
(statearr_19144_19157[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19158 = state_19123;
state_19123 = G__19158;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6656__auto__ = function(state_19123){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6656__auto____1.call(this,state_19123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6656__auto____0;
cljs$core$async$take_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6656__auto____1;
return cljs$core$async$take_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19146,out))
})();
var state__6713__auto__ = (function (){var statearr_19145 = f__6712__auto__.call(null);
(statearr_19145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19146);

return statearr_19145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19146,out))
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
if(typeof cljs.core.async.t19166 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19166 = (function (map_LT_,f,ch,meta19167){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19167 = meta19167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19168,meta19167__$1){
var self__ = this;
var _19168__$1 = this;
return (new cljs.core.async.t19166(self__.map_LT_,self__.f,self__.ch,meta19167__$1));
});

cljs.core.async.t19166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19168){
var self__ = this;
var _19168__$1 = this;
return self__.meta19167;
});

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19169 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19169 = (function (map_LT_,f,ch,meta19167,_,fn1,meta19170){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19167 = meta19167;
this._ = _;
this.fn1 = fn1;
this.meta19170 = meta19170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19171,meta19170__$1){
var self__ = this;
var _19171__$1 = this;
return (new cljs.core.async.t19169(self__.map_LT_,self__.f,self__.ch,self__.meta19167,self__._,self__.fn1,meta19170__$1));
});})(___$1))
;

cljs.core.async.t19169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19171){
var self__ = this;
var _19171__$1 = this;
return self__.meta19170;
});})(___$1))
;

cljs.core.async.t19169.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19159_SHARP_){
return f1.call(null,(((p1__19159_SHARP_ == null))?null:self__.f.call(null,p1__19159_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19169.cljs$lang$type = true;

cljs.core.async.t19169.cljs$lang$ctorStr = "cljs.core.async/t19169";

cljs.core.async.t19169.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19169");
});})(___$1))
;

cljs.core.async.__GT_t19169 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19169(map_LT___$1,f__$1,ch__$1,meta19167__$1,___$2,fn1__$1,meta19170){
return (new cljs.core.async.t19169(map_LT___$1,f__$1,ch__$1,meta19167__$1,___$2,fn1__$1,meta19170));
});})(___$1))
;

}

return (new cljs.core.async.t19169(self__.map_LT_,self__.f,self__.ch,self__.meta19167,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19166.cljs$lang$type = true;

cljs.core.async.t19166.cljs$lang$ctorStr = "cljs.core.async/t19166";

cljs.core.async.t19166.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19166");
});

cljs.core.async.__GT_t19166 = (function cljs$core$async$map_LT__$___GT_t19166(map_LT___$1,f__$1,ch__$1,meta19167){
return (new cljs.core.async.t19166(map_LT___$1,f__$1,ch__$1,meta19167));
});

}

return (new cljs.core.async.t19166(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19175 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19175 = (function (map_GT_,f,ch,meta19176){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19176 = meta19176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19177,meta19176__$1){
var self__ = this;
var _19177__$1 = this;
return (new cljs.core.async.t19175(self__.map_GT_,self__.f,self__.ch,meta19176__$1));
});

cljs.core.async.t19175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19177){
var self__ = this;
var _19177__$1 = this;
return self__.meta19176;
});

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19175.cljs$lang$type = true;

cljs.core.async.t19175.cljs$lang$ctorStr = "cljs.core.async/t19175";

cljs.core.async.t19175.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19175");
});

cljs.core.async.__GT_t19175 = (function cljs$core$async$map_GT__$___GT_t19175(map_GT___$1,f__$1,ch__$1,meta19176){
return (new cljs.core.async.t19175(map_GT___$1,f__$1,ch__$1,meta19176));
});

}

return (new cljs.core.async.t19175(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19181 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19181 = (function (filter_GT_,p,ch,meta19182){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19182 = meta19182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19183,meta19182__$1){
var self__ = this;
var _19183__$1 = this;
return (new cljs.core.async.t19181(self__.filter_GT_,self__.p,self__.ch,meta19182__$1));
});

cljs.core.async.t19181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19183){
var self__ = this;
var _19183__$1 = this;
return self__.meta19182;
});

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19181.cljs$lang$type = true;

cljs.core.async.t19181.cljs$lang$ctorStr = "cljs.core.async/t19181";

cljs.core.async.t19181.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19181");
});

cljs.core.async.__GT_t19181 = (function cljs$core$async$filter_GT__$___GT_t19181(filter_GT___$1,p__$1,ch__$1,meta19182){
return (new cljs.core.async.t19181(filter_GT___$1,p__$1,ch__$1,meta19182));
});

}

return (new cljs.core.async.t19181(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6711__auto___19266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19266,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19266,out){
return (function (state_19245){
var state_val_19246 = (state_19245[(1)]);
if((state_val_19246 === (7))){
var inst_19241 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19247_19267 = state_19245__$1;
(statearr_19247_19267[(2)] = inst_19241);

(statearr_19247_19267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (1))){
var state_19245__$1 = state_19245;
var statearr_19248_19268 = state_19245__$1;
(statearr_19248_19268[(2)] = null);

(statearr_19248_19268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (4))){
var inst_19227 = (state_19245[(7)]);
var inst_19227__$1 = (state_19245[(2)]);
var inst_19228 = (inst_19227__$1 == null);
var state_19245__$1 = (function (){var statearr_19249 = state_19245;
(statearr_19249[(7)] = inst_19227__$1);

return statearr_19249;
})();
if(cljs.core.truth_(inst_19228)){
var statearr_19250_19269 = state_19245__$1;
(statearr_19250_19269[(1)] = (5));

} else {
var statearr_19251_19270 = state_19245__$1;
(statearr_19251_19270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (6))){
var inst_19227 = (state_19245[(7)]);
var inst_19232 = p.call(null,inst_19227);
var state_19245__$1 = state_19245;
if(cljs.core.truth_(inst_19232)){
var statearr_19252_19271 = state_19245__$1;
(statearr_19252_19271[(1)] = (8));

} else {
var statearr_19253_19272 = state_19245__$1;
(statearr_19253_19272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (3))){
var inst_19243 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19245__$1,inst_19243);
} else {
if((state_val_19246 === (2))){
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19245__$1,(4),ch);
} else {
if((state_val_19246 === (11))){
var inst_19235 = (state_19245[(2)]);
var state_19245__$1 = state_19245;
var statearr_19254_19273 = state_19245__$1;
(statearr_19254_19273[(2)] = inst_19235);

(statearr_19254_19273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (9))){
var state_19245__$1 = state_19245;
var statearr_19255_19274 = state_19245__$1;
(statearr_19255_19274[(2)] = null);

(statearr_19255_19274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (5))){
var inst_19230 = cljs.core.async.close_BANG_.call(null,out);
var state_19245__$1 = state_19245;
var statearr_19256_19275 = state_19245__$1;
(statearr_19256_19275[(2)] = inst_19230);

(statearr_19256_19275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (10))){
var inst_19238 = (state_19245[(2)]);
var state_19245__$1 = (function (){var statearr_19257 = state_19245;
(statearr_19257[(8)] = inst_19238);

return statearr_19257;
})();
var statearr_19258_19276 = state_19245__$1;
(statearr_19258_19276[(2)] = null);

(statearr_19258_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19246 === (8))){
var inst_19227 = (state_19245[(7)]);
var state_19245__$1 = state_19245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19245__$1,(11),out,inst_19227);
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
});})(c__6711__auto___19266,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19266,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6656__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6656__auto____0 = (function (){
var statearr_19262 = [null,null,null,null,null,null,null,null,null];
(statearr_19262[(0)] = cljs$core$async$filter_LT__$_state_machine__6656__auto__);

(statearr_19262[(1)] = (1));

return statearr_19262;
});
var cljs$core$async$filter_LT__$_state_machine__6656__auto____1 = (function (state_19245){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19263){if((e19263 instanceof Object)){
var ex__6659__auto__ = e19263;
var statearr_19264_19277 = state_19245;
(statearr_19264_19277[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19278 = state_19245;
state_19245 = G__19278;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6656__auto__ = function(state_19245){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6656__auto____1.call(this,state_19245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6656__auto____0;
cljs$core$async$filter_LT__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6656__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19266,out))
})();
var state__6713__auto__ = (function (){var statearr_19265 = f__6712__auto__.call(null);
(statearr_19265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19266);

return statearr_19265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19266,out))
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
var c__6711__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto__){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto__){
return (function (state_19444){
var state_val_19445 = (state_19444[(1)]);
if((state_val_19445 === (7))){
var inst_19440 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19446_19487 = state_19444__$1;
(statearr_19446_19487[(2)] = inst_19440);

(statearr_19446_19487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (20))){
var inst_19410 = (state_19444[(7)]);
var inst_19421 = (state_19444[(2)]);
var inst_19422 = cljs.core.next.call(null,inst_19410);
var inst_19396 = inst_19422;
var inst_19397 = null;
var inst_19398 = (0);
var inst_19399 = (0);
var state_19444__$1 = (function (){var statearr_19447 = state_19444;
(statearr_19447[(8)] = inst_19421);

(statearr_19447[(9)] = inst_19397);

(statearr_19447[(10)] = inst_19398);

(statearr_19447[(11)] = inst_19399);

(statearr_19447[(12)] = inst_19396);

return statearr_19447;
})();
var statearr_19448_19488 = state_19444__$1;
(statearr_19448_19488[(2)] = null);

(statearr_19448_19488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (1))){
var state_19444__$1 = state_19444;
var statearr_19449_19489 = state_19444__$1;
(statearr_19449_19489[(2)] = null);

(statearr_19449_19489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (4))){
var inst_19385 = (state_19444[(13)]);
var inst_19385__$1 = (state_19444[(2)]);
var inst_19386 = (inst_19385__$1 == null);
var state_19444__$1 = (function (){var statearr_19450 = state_19444;
(statearr_19450[(13)] = inst_19385__$1);

return statearr_19450;
})();
if(cljs.core.truth_(inst_19386)){
var statearr_19451_19490 = state_19444__$1;
(statearr_19451_19490[(1)] = (5));

} else {
var statearr_19452_19491 = state_19444__$1;
(statearr_19452_19491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (15))){
var state_19444__$1 = state_19444;
var statearr_19456_19492 = state_19444__$1;
(statearr_19456_19492[(2)] = null);

(statearr_19456_19492[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (21))){
var state_19444__$1 = state_19444;
var statearr_19457_19493 = state_19444__$1;
(statearr_19457_19493[(2)] = null);

(statearr_19457_19493[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (13))){
var inst_19397 = (state_19444[(9)]);
var inst_19398 = (state_19444[(10)]);
var inst_19399 = (state_19444[(11)]);
var inst_19396 = (state_19444[(12)]);
var inst_19406 = (state_19444[(2)]);
var inst_19407 = (inst_19399 + (1));
var tmp19453 = inst_19397;
var tmp19454 = inst_19398;
var tmp19455 = inst_19396;
var inst_19396__$1 = tmp19455;
var inst_19397__$1 = tmp19453;
var inst_19398__$1 = tmp19454;
var inst_19399__$1 = inst_19407;
var state_19444__$1 = (function (){var statearr_19458 = state_19444;
(statearr_19458[(9)] = inst_19397__$1);

(statearr_19458[(10)] = inst_19398__$1);

(statearr_19458[(11)] = inst_19399__$1);

(statearr_19458[(14)] = inst_19406);

(statearr_19458[(12)] = inst_19396__$1);

return statearr_19458;
})();
var statearr_19459_19494 = state_19444__$1;
(statearr_19459_19494[(2)] = null);

(statearr_19459_19494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (22))){
var state_19444__$1 = state_19444;
var statearr_19460_19495 = state_19444__$1;
(statearr_19460_19495[(2)] = null);

(statearr_19460_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (6))){
var inst_19385 = (state_19444[(13)]);
var inst_19394 = f.call(null,inst_19385);
var inst_19395 = cljs.core.seq.call(null,inst_19394);
var inst_19396 = inst_19395;
var inst_19397 = null;
var inst_19398 = (0);
var inst_19399 = (0);
var state_19444__$1 = (function (){var statearr_19461 = state_19444;
(statearr_19461[(9)] = inst_19397);

(statearr_19461[(10)] = inst_19398);

(statearr_19461[(11)] = inst_19399);

(statearr_19461[(12)] = inst_19396);

return statearr_19461;
})();
var statearr_19462_19496 = state_19444__$1;
(statearr_19462_19496[(2)] = null);

(statearr_19462_19496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (17))){
var inst_19410 = (state_19444[(7)]);
var inst_19414 = cljs.core.chunk_first.call(null,inst_19410);
var inst_19415 = cljs.core.chunk_rest.call(null,inst_19410);
var inst_19416 = cljs.core.count.call(null,inst_19414);
var inst_19396 = inst_19415;
var inst_19397 = inst_19414;
var inst_19398 = inst_19416;
var inst_19399 = (0);
var state_19444__$1 = (function (){var statearr_19463 = state_19444;
(statearr_19463[(9)] = inst_19397);

(statearr_19463[(10)] = inst_19398);

(statearr_19463[(11)] = inst_19399);

(statearr_19463[(12)] = inst_19396);

return statearr_19463;
})();
var statearr_19464_19497 = state_19444__$1;
(statearr_19464_19497[(2)] = null);

(statearr_19464_19497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (3))){
var inst_19442 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19444__$1,inst_19442);
} else {
if((state_val_19445 === (12))){
var inst_19430 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19465_19498 = state_19444__$1;
(statearr_19465_19498[(2)] = inst_19430);

(statearr_19465_19498[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (2))){
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19444__$1,(4),in$);
} else {
if((state_val_19445 === (23))){
var inst_19438 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19466_19499 = state_19444__$1;
(statearr_19466_19499[(2)] = inst_19438);

(statearr_19466_19499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (19))){
var inst_19425 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19467_19500 = state_19444__$1;
(statearr_19467_19500[(2)] = inst_19425);

(statearr_19467_19500[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (11))){
var inst_19410 = (state_19444[(7)]);
var inst_19396 = (state_19444[(12)]);
var inst_19410__$1 = cljs.core.seq.call(null,inst_19396);
var state_19444__$1 = (function (){var statearr_19468 = state_19444;
(statearr_19468[(7)] = inst_19410__$1);

return statearr_19468;
})();
if(inst_19410__$1){
var statearr_19469_19501 = state_19444__$1;
(statearr_19469_19501[(1)] = (14));

} else {
var statearr_19470_19502 = state_19444__$1;
(statearr_19470_19502[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (9))){
var inst_19432 = (state_19444[(2)]);
var inst_19433 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19444__$1 = (function (){var statearr_19471 = state_19444;
(statearr_19471[(15)] = inst_19432);

return statearr_19471;
})();
if(cljs.core.truth_(inst_19433)){
var statearr_19472_19503 = state_19444__$1;
(statearr_19472_19503[(1)] = (21));

} else {
var statearr_19473_19504 = state_19444__$1;
(statearr_19473_19504[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (5))){
var inst_19388 = cljs.core.async.close_BANG_.call(null,out);
var state_19444__$1 = state_19444;
var statearr_19474_19505 = state_19444__$1;
(statearr_19474_19505[(2)] = inst_19388);

(statearr_19474_19505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (14))){
var inst_19410 = (state_19444[(7)]);
var inst_19412 = cljs.core.chunked_seq_QMARK_.call(null,inst_19410);
var state_19444__$1 = state_19444;
if(inst_19412){
var statearr_19475_19506 = state_19444__$1;
(statearr_19475_19506[(1)] = (17));

} else {
var statearr_19476_19507 = state_19444__$1;
(statearr_19476_19507[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (16))){
var inst_19428 = (state_19444[(2)]);
var state_19444__$1 = state_19444;
var statearr_19477_19508 = state_19444__$1;
(statearr_19477_19508[(2)] = inst_19428);

(statearr_19477_19508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19445 === (10))){
var inst_19397 = (state_19444[(9)]);
var inst_19399 = (state_19444[(11)]);
var inst_19404 = cljs.core._nth.call(null,inst_19397,inst_19399);
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19444__$1,(13),out,inst_19404);
} else {
if((state_val_19445 === (18))){
var inst_19410 = (state_19444[(7)]);
var inst_19419 = cljs.core.first.call(null,inst_19410);
var state_19444__$1 = state_19444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19444__$1,(20),out,inst_19419);
} else {
if((state_val_19445 === (8))){
var inst_19398 = (state_19444[(10)]);
var inst_19399 = (state_19444[(11)]);
var inst_19401 = (inst_19399 < inst_19398);
var inst_19402 = inst_19401;
var state_19444__$1 = state_19444;
if(cljs.core.truth_(inst_19402)){
var statearr_19478_19509 = state_19444__$1;
(statearr_19478_19509[(1)] = (10));

} else {
var statearr_19479_19510 = state_19444__$1;
(statearr_19479_19510[(1)] = (11));

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
});})(c__6711__auto__))
;
return ((function (switch__6655__auto__,c__6711__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_19483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19483[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__);

(statearr_19483[(1)] = (1));

return statearr_19483;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1 = (function (state_19444){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19484){if((e19484 instanceof Object)){
var ex__6659__auto__ = e19484;
var statearr_19485_19511 = state_19444;
(statearr_19485_19511[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19512 = state_19444;
state_19444 = G__19512;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__ = function(state_19444){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1.call(this,state_19444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_19486 = f__6712__auto__.call(null);
(statearr_19486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_19486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto__))
);

return c__6711__auto__;
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
var c__6711__auto___19609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19609,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19609,out){
return (function (state_19584){
var state_val_19585 = (state_19584[(1)]);
if((state_val_19585 === (7))){
var inst_19579 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
var statearr_19586_19610 = state_19584__$1;
(statearr_19586_19610[(2)] = inst_19579);

(statearr_19586_19610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (1))){
var inst_19561 = null;
var state_19584__$1 = (function (){var statearr_19587 = state_19584;
(statearr_19587[(7)] = inst_19561);

return statearr_19587;
})();
var statearr_19588_19611 = state_19584__$1;
(statearr_19588_19611[(2)] = null);

(statearr_19588_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (4))){
var inst_19564 = (state_19584[(8)]);
var inst_19564__$1 = (state_19584[(2)]);
var inst_19565 = (inst_19564__$1 == null);
var inst_19566 = cljs.core.not.call(null,inst_19565);
var state_19584__$1 = (function (){var statearr_19589 = state_19584;
(statearr_19589[(8)] = inst_19564__$1);

return statearr_19589;
})();
if(inst_19566){
var statearr_19590_19612 = state_19584__$1;
(statearr_19590_19612[(1)] = (5));

} else {
var statearr_19591_19613 = state_19584__$1;
(statearr_19591_19613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (6))){
var state_19584__$1 = state_19584;
var statearr_19592_19614 = state_19584__$1;
(statearr_19592_19614[(2)] = null);

(statearr_19592_19614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (3))){
var inst_19581 = (state_19584[(2)]);
var inst_19582 = cljs.core.async.close_BANG_.call(null,out);
var state_19584__$1 = (function (){var statearr_19593 = state_19584;
(statearr_19593[(9)] = inst_19581);

return statearr_19593;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19584__$1,inst_19582);
} else {
if((state_val_19585 === (2))){
var state_19584__$1 = state_19584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19584__$1,(4),ch);
} else {
if((state_val_19585 === (11))){
var inst_19564 = (state_19584[(8)]);
var inst_19573 = (state_19584[(2)]);
var inst_19561 = inst_19564;
var state_19584__$1 = (function (){var statearr_19594 = state_19584;
(statearr_19594[(7)] = inst_19561);

(statearr_19594[(10)] = inst_19573);

return statearr_19594;
})();
var statearr_19595_19615 = state_19584__$1;
(statearr_19595_19615[(2)] = null);

(statearr_19595_19615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (9))){
var inst_19564 = (state_19584[(8)]);
var state_19584__$1 = state_19584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19584__$1,(11),out,inst_19564);
} else {
if((state_val_19585 === (5))){
var inst_19564 = (state_19584[(8)]);
var inst_19561 = (state_19584[(7)]);
var inst_19568 = cljs.core._EQ_.call(null,inst_19564,inst_19561);
var state_19584__$1 = state_19584;
if(inst_19568){
var statearr_19597_19616 = state_19584__$1;
(statearr_19597_19616[(1)] = (8));

} else {
var statearr_19598_19617 = state_19584__$1;
(statearr_19598_19617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (10))){
var inst_19576 = (state_19584[(2)]);
var state_19584__$1 = state_19584;
var statearr_19599_19618 = state_19584__$1;
(statearr_19599_19618[(2)] = inst_19576);

(statearr_19599_19618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19585 === (8))){
var inst_19561 = (state_19584[(7)]);
var tmp19596 = inst_19561;
var inst_19561__$1 = tmp19596;
var state_19584__$1 = (function (){var statearr_19600 = state_19584;
(statearr_19600[(7)] = inst_19561__$1);

return statearr_19600;
})();
var statearr_19601_19619 = state_19584__$1;
(statearr_19601_19619[(2)] = null);

(statearr_19601_19619[(1)] = (2));


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
});})(c__6711__auto___19609,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19609,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6656__auto__ = null;
var cljs$core$async$unique_$_state_machine__6656__auto____0 = (function (){
var statearr_19605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19605[(0)] = cljs$core$async$unique_$_state_machine__6656__auto__);

(statearr_19605[(1)] = (1));

return statearr_19605;
});
var cljs$core$async$unique_$_state_machine__6656__auto____1 = (function (state_19584){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19606){if((e19606 instanceof Object)){
var ex__6659__auto__ = e19606;
var statearr_19607_19620 = state_19584;
(statearr_19607_19620[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19621 = state_19584;
state_19584 = G__19621;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6656__auto__ = function(state_19584){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6656__auto____1.call(this,state_19584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6656__auto____0;
cljs$core$async$unique_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6656__auto____1;
return cljs$core$async$unique_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19609,out))
})();
var state__6713__auto__ = (function (){var statearr_19608 = f__6712__auto__.call(null);
(statearr_19608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19609);

return statearr_19608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19609,out))
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
var c__6711__auto___19756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19756,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19756,out){
return (function (state_19726){
var state_val_19727 = (state_19726[(1)]);
if((state_val_19727 === (7))){
var inst_19722 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19728_19757 = state_19726__$1;
(statearr_19728_19757[(2)] = inst_19722);

(statearr_19728_19757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (1))){
var inst_19689 = (new Array(n));
var inst_19690 = inst_19689;
var inst_19691 = (0);
var state_19726__$1 = (function (){var statearr_19729 = state_19726;
(statearr_19729[(7)] = inst_19691);

(statearr_19729[(8)] = inst_19690);

return statearr_19729;
})();
var statearr_19730_19758 = state_19726__$1;
(statearr_19730_19758[(2)] = null);

(statearr_19730_19758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (4))){
var inst_19694 = (state_19726[(9)]);
var inst_19694__$1 = (state_19726[(2)]);
var inst_19695 = (inst_19694__$1 == null);
var inst_19696 = cljs.core.not.call(null,inst_19695);
var state_19726__$1 = (function (){var statearr_19731 = state_19726;
(statearr_19731[(9)] = inst_19694__$1);

return statearr_19731;
})();
if(inst_19696){
var statearr_19732_19759 = state_19726__$1;
(statearr_19732_19759[(1)] = (5));

} else {
var statearr_19733_19760 = state_19726__$1;
(statearr_19733_19760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (15))){
var inst_19716 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19734_19761 = state_19726__$1;
(statearr_19734_19761[(2)] = inst_19716);

(statearr_19734_19761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (13))){
var state_19726__$1 = state_19726;
var statearr_19735_19762 = state_19726__$1;
(statearr_19735_19762[(2)] = null);

(statearr_19735_19762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (6))){
var inst_19691 = (state_19726[(7)]);
var inst_19712 = (inst_19691 > (0));
var state_19726__$1 = state_19726;
if(cljs.core.truth_(inst_19712)){
var statearr_19736_19763 = state_19726__$1;
(statearr_19736_19763[(1)] = (12));

} else {
var statearr_19737_19764 = state_19726__$1;
(statearr_19737_19764[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (3))){
var inst_19724 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19726__$1,inst_19724);
} else {
if((state_val_19727 === (12))){
var inst_19690 = (state_19726[(8)]);
var inst_19714 = cljs.core.vec.call(null,inst_19690);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19726__$1,(15),out,inst_19714);
} else {
if((state_val_19727 === (2))){
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19726__$1,(4),ch);
} else {
if((state_val_19727 === (11))){
var inst_19706 = (state_19726[(2)]);
var inst_19707 = (new Array(n));
var inst_19690 = inst_19707;
var inst_19691 = (0);
var state_19726__$1 = (function (){var statearr_19738 = state_19726;
(statearr_19738[(10)] = inst_19706);

(statearr_19738[(7)] = inst_19691);

(statearr_19738[(8)] = inst_19690);

return statearr_19738;
})();
var statearr_19739_19765 = state_19726__$1;
(statearr_19739_19765[(2)] = null);

(statearr_19739_19765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (9))){
var inst_19690 = (state_19726[(8)]);
var inst_19704 = cljs.core.vec.call(null,inst_19690);
var state_19726__$1 = state_19726;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19726__$1,(11),out,inst_19704);
} else {
if((state_val_19727 === (5))){
var inst_19691 = (state_19726[(7)]);
var inst_19699 = (state_19726[(11)]);
var inst_19694 = (state_19726[(9)]);
var inst_19690 = (state_19726[(8)]);
var inst_19698 = (inst_19690[inst_19691] = inst_19694);
var inst_19699__$1 = (inst_19691 + (1));
var inst_19700 = (inst_19699__$1 < n);
var state_19726__$1 = (function (){var statearr_19740 = state_19726;
(statearr_19740[(11)] = inst_19699__$1);

(statearr_19740[(12)] = inst_19698);

return statearr_19740;
})();
if(cljs.core.truth_(inst_19700)){
var statearr_19741_19766 = state_19726__$1;
(statearr_19741_19766[(1)] = (8));

} else {
var statearr_19742_19767 = state_19726__$1;
(statearr_19742_19767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (14))){
var inst_19719 = (state_19726[(2)]);
var inst_19720 = cljs.core.async.close_BANG_.call(null,out);
var state_19726__$1 = (function (){var statearr_19744 = state_19726;
(statearr_19744[(13)] = inst_19719);

return statearr_19744;
})();
var statearr_19745_19768 = state_19726__$1;
(statearr_19745_19768[(2)] = inst_19720);

(statearr_19745_19768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (10))){
var inst_19710 = (state_19726[(2)]);
var state_19726__$1 = state_19726;
var statearr_19746_19769 = state_19726__$1;
(statearr_19746_19769[(2)] = inst_19710);

(statearr_19746_19769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19727 === (8))){
var inst_19699 = (state_19726[(11)]);
var inst_19690 = (state_19726[(8)]);
var tmp19743 = inst_19690;
var inst_19690__$1 = tmp19743;
var inst_19691 = inst_19699;
var state_19726__$1 = (function (){var statearr_19747 = state_19726;
(statearr_19747[(7)] = inst_19691);

(statearr_19747[(8)] = inst_19690__$1);

return statearr_19747;
})();
var statearr_19748_19770 = state_19726__$1;
(statearr_19748_19770[(2)] = null);

(statearr_19748_19770[(1)] = (2));


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
});})(c__6711__auto___19756,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19756,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6656__auto__ = null;
var cljs$core$async$partition_$_state_machine__6656__auto____0 = (function (){
var statearr_19752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19752[(0)] = cljs$core$async$partition_$_state_machine__6656__auto__);

(statearr_19752[(1)] = (1));

return statearr_19752;
});
var cljs$core$async$partition_$_state_machine__6656__auto____1 = (function (state_19726){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19726);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19753){if((e19753 instanceof Object)){
var ex__6659__auto__ = e19753;
var statearr_19754_19771 = state_19726;
(statearr_19754_19771[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19772 = state_19726;
state_19726 = G__19772;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6656__auto__ = function(state_19726){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6656__auto____1.call(this,state_19726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6656__auto____0;
cljs$core$async$partition_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6656__auto____1;
return cljs$core$async$partition_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19756,out))
})();
var state__6713__auto__ = (function (){var statearr_19755 = f__6712__auto__.call(null);
(statearr_19755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19756);

return statearr_19755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19756,out))
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
var c__6711__auto___19915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19915,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19915,out){
return (function (state_19885){
var state_val_19886 = (state_19885[(1)]);
if((state_val_19886 === (7))){
var inst_19881 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19887_19916 = state_19885__$1;
(statearr_19887_19916[(2)] = inst_19881);

(statearr_19887_19916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (1))){
var inst_19844 = [];
var inst_19845 = inst_19844;
var inst_19846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19885__$1 = (function (){var statearr_19888 = state_19885;
(statearr_19888[(7)] = inst_19846);

(statearr_19888[(8)] = inst_19845);

return statearr_19888;
})();
var statearr_19889_19917 = state_19885__$1;
(statearr_19889_19917[(2)] = null);

(statearr_19889_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (4))){
var inst_19849 = (state_19885[(9)]);
var inst_19849__$1 = (state_19885[(2)]);
var inst_19850 = (inst_19849__$1 == null);
var inst_19851 = cljs.core.not.call(null,inst_19850);
var state_19885__$1 = (function (){var statearr_19890 = state_19885;
(statearr_19890[(9)] = inst_19849__$1);

return statearr_19890;
})();
if(inst_19851){
var statearr_19891_19918 = state_19885__$1;
(statearr_19891_19918[(1)] = (5));

} else {
var statearr_19892_19919 = state_19885__$1;
(statearr_19892_19919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (15))){
var inst_19875 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19893_19920 = state_19885__$1;
(statearr_19893_19920[(2)] = inst_19875);

(statearr_19893_19920[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (13))){
var state_19885__$1 = state_19885;
var statearr_19894_19921 = state_19885__$1;
(statearr_19894_19921[(2)] = null);

(statearr_19894_19921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (6))){
var inst_19845 = (state_19885[(8)]);
var inst_19870 = inst_19845.length;
var inst_19871 = (inst_19870 > (0));
var state_19885__$1 = state_19885;
if(cljs.core.truth_(inst_19871)){
var statearr_19895_19922 = state_19885__$1;
(statearr_19895_19922[(1)] = (12));

} else {
var statearr_19896_19923 = state_19885__$1;
(statearr_19896_19923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (3))){
var inst_19883 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19885__$1,inst_19883);
} else {
if((state_val_19886 === (12))){
var inst_19845 = (state_19885[(8)]);
var inst_19873 = cljs.core.vec.call(null,inst_19845);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19885__$1,(15),out,inst_19873);
} else {
if((state_val_19886 === (2))){
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19885__$1,(4),ch);
} else {
if((state_val_19886 === (11))){
var inst_19853 = (state_19885[(10)]);
var inst_19849 = (state_19885[(9)]);
var inst_19863 = (state_19885[(2)]);
var inst_19864 = [];
var inst_19865 = inst_19864.push(inst_19849);
var inst_19845 = inst_19864;
var inst_19846 = inst_19853;
var state_19885__$1 = (function (){var statearr_19897 = state_19885;
(statearr_19897[(7)] = inst_19846);

(statearr_19897[(8)] = inst_19845);

(statearr_19897[(11)] = inst_19863);

(statearr_19897[(12)] = inst_19865);

return statearr_19897;
})();
var statearr_19898_19924 = state_19885__$1;
(statearr_19898_19924[(2)] = null);

(statearr_19898_19924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (9))){
var inst_19845 = (state_19885[(8)]);
var inst_19861 = cljs.core.vec.call(null,inst_19845);
var state_19885__$1 = state_19885;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19885__$1,(11),out,inst_19861);
} else {
if((state_val_19886 === (5))){
var inst_19853 = (state_19885[(10)]);
var inst_19846 = (state_19885[(7)]);
var inst_19849 = (state_19885[(9)]);
var inst_19853__$1 = f.call(null,inst_19849);
var inst_19854 = cljs.core._EQ_.call(null,inst_19853__$1,inst_19846);
var inst_19855 = cljs.core.keyword_identical_QMARK_.call(null,inst_19846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19856 = (inst_19854) || (inst_19855);
var state_19885__$1 = (function (){var statearr_19899 = state_19885;
(statearr_19899[(10)] = inst_19853__$1);

return statearr_19899;
})();
if(cljs.core.truth_(inst_19856)){
var statearr_19900_19925 = state_19885__$1;
(statearr_19900_19925[(1)] = (8));

} else {
var statearr_19901_19926 = state_19885__$1;
(statearr_19901_19926[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (14))){
var inst_19878 = (state_19885[(2)]);
var inst_19879 = cljs.core.async.close_BANG_.call(null,out);
var state_19885__$1 = (function (){var statearr_19903 = state_19885;
(statearr_19903[(13)] = inst_19878);

return statearr_19903;
})();
var statearr_19904_19927 = state_19885__$1;
(statearr_19904_19927[(2)] = inst_19879);

(statearr_19904_19927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (10))){
var inst_19868 = (state_19885[(2)]);
var state_19885__$1 = state_19885;
var statearr_19905_19928 = state_19885__$1;
(statearr_19905_19928[(2)] = inst_19868);

(statearr_19905_19928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19886 === (8))){
var inst_19853 = (state_19885[(10)]);
var inst_19845 = (state_19885[(8)]);
var inst_19849 = (state_19885[(9)]);
var inst_19858 = inst_19845.push(inst_19849);
var tmp19902 = inst_19845;
var inst_19845__$1 = tmp19902;
var inst_19846 = inst_19853;
var state_19885__$1 = (function (){var statearr_19906 = state_19885;
(statearr_19906[(7)] = inst_19846);

(statearr_19906[(8)] = inst_19845__$1);

(statearr_19906[(14)] = inst_19858);

return statearr_19906;
})();
var statearr_19907_19929 = state_19885__$1;
(statearr_19907_19929[(2)] = null);

(statearr_19907_19929[(1)] = (2));


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
});})(c__6711__auto___19915,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19915,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6656__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6656__auto____0 = (function (){
var statearr_19911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19911[(0)] = cljs$core$async$partition_by_$_state_machine__6656__auto__);

(statearr_19911[(1)] = (1));

return statearr_19911;
});
var cljs$core$async$partition_by_$_state_machine__6656__auto____1 = (function (state_19885){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19912){if((e19912 instanceof Object)){
var ex__6659__auto__ = e19912;
var statearr_19913_19930 = state_19885;
(statearr_19913_19930[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19931 = state_19885;
state_19885 = G__19931;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6656__auto__ = function(state_19885){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6656__auto____1.call(this,state_19885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6656__auto____0;
cljs$core$async$partition_by_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6656__auto____1;
return cljs$core$async$partition_by_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19915,out))
})();
var state__6713__auto__ = (function (){var statearr_19914 = f__6712__auto__.call(null);
(statearr_19914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19915);

return statearr_19914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19915,out))
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
