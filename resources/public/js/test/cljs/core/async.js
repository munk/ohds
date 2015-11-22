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
if(typeof cljs.core.async.t16846 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16846 = (function (fn_handler,f,meta16847){
this.fn_handler = fn_handler;
this.f = f;
this.meta16847 = meta16847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16848,meta16847__$1){
var self__ = this;
var _16848__$1 = this;
return (new cljs.core.async.t16846(self__.fn_handler,self__.f,meta16847__$1));
});

cljs.core.async.t16846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16848){
var self__ = this;
var _16848__$1 = this;
return self__.meta16847;
});

cljs.core.async.t16846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16846.cljs$lang$type = true;

cljs.core.async.t16846.cljs$lang$ctorStr = "cljs.core.async/t16846";

cljs.core.async.t16846.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16846");
});

cljs.core.async.__GT_t16846 = (function cljs$core$async$fn_handler_$___GT_t16846(fn_handler__$1,f__$1,meta16847){
return (new cljs.core.async.t16846(fn_handler__$1,f__$1,meta16847));
});

}

return (new cljs.core.async.t16846(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16850 = buff;
if(G__16850){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__16850.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16850.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16850);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16850);
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
var val_16851 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16851);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16851,ret){
return (function (){
return fn1.call(null,val_16851);
});})(val_16851,ret))
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
var n__4963__auto___16852 = n;
var x_16853 = (0);
while(true){
if((x_16853 < n__4963__auto___16852)){
(a[x_16853] = (0));

var G__16854 = (x_16853 + (1));
x_16853 = G__16854;
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

var G__16855 = (i + (1));
i = G__16855;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16859 = (function (alt_flag,flag,meta16860){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta16860 = meta16860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16861,meta16860__$1){
var self__ = this;
var _16861__$1 = this;
return (new cljs.core.async.t16859(self__.alt_flag,self__.flag,meta16860__$1));
});})(flag))
;

cljs.core.async.t16859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16861){
var self__ = this;
var _16861__$1 = this;
return self__.meta16860;
});})(flag))
;

cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16859.cljs$lang$type = true;

cljs.core.async.t16859.cljs$lang$ctorStr = "cljs.core.async/t16859";

cljs.core.async.t16859.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16859");
});})(flag))
;

cljs.core.async.__GT_t16859 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t16859(alt_flag__$1,flag__$1,meta16860){
return (new cljs.core.async.t16859(alt_flag__$1,flag__$1,meta16860));
});})(flag))
;

}

return (new cljs.core.async.t16859(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t16865 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16865 = (function (alt_handler,flag,cb,meta16866){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta16866 = meta16866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t16865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16867,meta16866__$1){
var self__ = this;
var _16867__$1 = this;
return (new cljs.core.async.t16865(self__.alt_handler,self__.flag,self__.cb,meta16866__$1));
});

cljs.core.async.t16865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16867){
var self__ = this;
var _16867__$1 = this;
return self__.meta16866;
});

cljs.core.async.t16865.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16865.cljs$lang$type = true;

cljs.core.async.t16865.cljs$lang$ctorStr = "cljs.core.async/t16865";

cljs.core.async.t16865.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t16865");
});

cljs.core.async.__GT_t16865 = (function cljs$core$async$alt_handler_$___GT_t16865(alt_handler__$1,flag__$1,cb__$1,meta16866){
return (new cljs.core.async.t16865(alt_handler__$1,flag__$1,cb__$1,meta16866));
});

}

return (new cljs.core.async.t16865(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16868_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16868_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16869_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16869_SHARP_,port], null));
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
var G__16870 = (i + (1));
i = G__16870;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__16871){
var map__16873 = p__16871;
var map__16873__$1 = ((cljs.core.seq_QMARK_.call(null,map__16873))?cljs.core.apply.call(null,cljs.core.hash_map,map__16873):map__16873);
var opts = map__16873__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__16871 = null;
if (arguments.length > 1) {
var G__16874__i = 0, G__16874__a = new Array(arguments.length -  1);
while (G__16874__i < G__16874__a.length) {G__16874__a[G__16874__i] = arguments[G__16874__i + 1]; ++G__16874__i;}
  p__16871 = new cljs.core.IndexedSeq(G__16874__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__16871);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__16875){
var ports = cljs.core.first(arglist__16875);
var p__16871 = cljs.core.rest(arglist__16875);
return cljs$core$async$alts_BANG___delegate(ports,p__16871);
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
var c__6711__auto___16970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___16970){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___16970){
return (function (state_16946){
var state_val_16947 = (state_16946[(1)]);
if((state_val_16947 === (7))){
var inst_16942 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16948_16971 = state_16946__$1;
(statearr_16948_16971[(2)] = inst_16942);

(statearr_16948_16971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (1))){
var state_16946__$1 = state_16946;
var statearr_16949_16972 = state_16946__$1;
(statearr_16949_16972[(2)] = null);

(statearr_16949_16972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (4))){
var inst_16925 = (state_16946[(7)]);
var inst_16925__$1 = (state_16946[(2)]);
var inst_16926 = (inst_16925__$1 == null);
var state_16946__$1 = (function (){var statearr_16950 = state_16946;
(statearr_16950[(7)] = inst_16925__$1);

return statearr_16950;
})();
if(cljs.core.truth_(inst_16926)){
var statearr_16951_16973 = state_16946__$1;
(statearr_16951_16973[(1)] = (5));

} else {
var statearr_16952_16974 = state_16946__$1;
(statearr_16952_16974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (13))){
var state_16946__$1 = state_16946;
var statearr_16953_16975 = state_16946__$1;
(statearr_16953_16975[(2)] = null);

(statearr_16953_16975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (6))){
var inst_16925 = (state_16946[(7)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16946__$1,(11),to,inst_16925);
} else {
if((state_val_16947 === (3))){
var inst_16944 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16946__$1,inst_16944);
} else {
if((state_val_16947 === (12))){
var state_16946__$1 = state_16946;
var statearr_16954_16976 = state_16946__$1;
(statearr_16954_16976[(2)] = null);

(statearr_16954_16976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (2))){
var state_16946__$1 = state_16946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16946__$1,(4),from);
} else {
if((state_val_16947 === (11))){
var inst_16935 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
if(cljs.core.truth_(inst_16935)){
var statearr_16955_16977 = state_16946__$1;
(statearr_16955_16977[(1)] = (12));

} else {
var statearr_16956_16978 = state_16946__$1;
(statearr_16956_16978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (9))){
var state_16946__$1 = state_16946;
var statearr_16957_16979 = state_16946__$1;
(statearr_16957_16979[(2)] = null);

(statearr_16957_16979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (5))){
var state_16946__$1 = state_16946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16958_16980 = state_16946__$1;
(statearr_16958_16980[(1)] = (8));

} else {
var statearr_16959_16981 = state_16946__$1;
(statearr_16959_16981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (14))){
var inst_16940 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16960_16982 = state_16946__$1;
(statearr_16960_16982[(2)] = inst_16940);

(statearr_16960_16982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (10))){
var inst_16932 = (state_16946[(2)]);
var state_16946__$1 = state_16946;
var statearr_16961_16983 = state_16946__$1;
(statearr_16961_16983[(2)] = inst_16932);

(statearr_16961_16983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16947 === (8))){
var inst_16929 = cljs.core.async.close_BANG_.call(null,to);
var state_16946__$1 = state_16946;
var statearr_16962_16984 = state_16946__$1;
(statearr_16962_16984[(2)] = inst_16929);

(statearr_16962_16984[(1)] = (10));


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
});})(c__6711__auto___16970))
;
return ((function (switch__6655__auto__,c__6711__auto___16970){
return (function() {
var cljs$core$async$pipe_$_state_machine__6656__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6656__auto____0 = (function (){
var statearr_16966 = [null,null,null,null,null,null,null,null];
(statearr_16966[(0)] = cljs$core$async$pipe_$_state_machine__6656__auto__);

(statearr_16966[(1)] = (1));

return statearr_16966;
});
var cljs$core$async$pipe_$_state_machine__6656__auto____1 = (function (state_16946){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_16946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e16967){if((e16967 instanceof Object)){
var ex__6659__auto__ = e16967;
var statearr_16968_16985 = state_16946;
(statearr_16968_16985[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16986 = state_16946;
state_16946 = G__16986;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6656__auto__ = function(state_16946){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6656__auto____1.call(this,state_16946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6656__auto____0;
cljs$core$async$pipe_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6656__auto____1;
return cljs$core$async$pipe_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___16970))
})();
var state__6713__auto__ = (function (){var statearr_16969 = f__6712__auto__.call(null);
(statearr_16969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___16970);

return statearr_16969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___16970))
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
return (function (p__17170){
var vec__17171 = p__17170;
var v = cljs.core.nth.call(null,vec__17171,(0),null);
var p = cljs.core.nth.call(null,vec__17171,(1),null);
var job = vec__17171;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6711__auto___17353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results){
return (function (state_17176){
var state_val_17177 = (state_17176[(1)]);
if((state_val_17177 === (1))){
var state_17176__$1 = state_17176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17176__$1,(2),res,v);
} else {
if((state_val_17177 === (2))){
var inst_17173 = (state_17176[(2)]);
var inst_17174 = cljs.core.async.close_BANG_.call(null,res);
var state_17176__$1 = (function (){var statearr_17178 = state_17176;
(statearr_17178[(7)] = inst_17173);

return statearr_17178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17176__$1,inst_17174);
} else {
return null;
}
}
});})(c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results))
;
return ((function (switch__6655__auto__,c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17182 = [null,null,null,null,null,null,null,null];
(statearr_17182[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17182[(1)] = (1));

return statearr_17182;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17176){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17183){if((e17183 instanceof Object)){
var ex__6659__auto__ = e17183;
var statearr_17184_17354 = state_17176;
(statearr_17184_17354[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17355 = state_17176;
state_17176 = G__17355;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results))
})();
var state__6713__auto__ = (function (){var statearr_17185 = f__6712__auto__.call(null);
(statearr_17185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17353);

return statearr_17185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17353,res,vec__17171,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17186){
var vec__17187 = p__17186;
var v = cljs.core.nth.call(null,vec__17187,(0),null);
var p = cljs.core.nth.call(null,vec__17187,(1),null);
var job = vec__17187;
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
var n__4963__auto___17356 = n;
var __17357 = (0);
while(true){
if((__17357 < n__4963__auto___17356)){
var G__17188_17358 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17188_17358) {
case "compute":
var c__6711__auto___17360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17357,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (__17357,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function (state_17201){
var state_val_17202 = (state_17201[(1)]);
if((state_val_17202 === (1))){
var state_17201__$1 = state_17201;
var statearr_17203_17361 = state_17201__$1;
(statearr_17203_17361[(2)] = null);

(statearr_17203_17361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17202 === (2))){
var state_17201__$1 = state_17201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17201__$1,(4),jobs);
} else {
if((state_val_17202 === (3))){
var inst_17199 = (state_17201[(2)]);
var state_17201__$1 = state_17201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17201__$1,inst_17199);
} else {
if((state_val_17202 === (4))){
var inst_17191 = (state_17201[(2)]);
var inst_17192 = process.call(null,inst_17191);
var state_17201__$1 = state_17201;
if(cljs.core.truth_(inst_17192)){
var statearr_17204_17362 = state_17201__$1;
(statearr_17204_17362[(1)] = (5));

} else {
var statearr_17205_17363 = state_17201__$1;
(statearr_17205_17363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17202 === (5))){
var state_17201__$1 = state_17201;
var statearr_17206_17364 = state_17201__$1;
(statearr_17206_17364[(2)] = null);

(statearr_17206_17364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17202 === (6))){
var state_17201__$1 = state_17201;
var statearr_17207_17365 = state_17201__$1;
(statearr_17207_17365[(2)] = null);

(statearr_17207_17365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17202 === (7))){
var inst_17197 = (state_17201[(2)]);
var state_17201__$1 = state_17201;
var statearr_17208_17366 = state_17201__$1;
(statearr_17208_17366[(2)] = inst_17197);

(statearr_17208_17366[(1)] = (3));


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
});})(__17357,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
;
return ((function (__17357,switch__6655__auto__,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17212 = [null,null,null,null,null,null,null];
(statearr_17212[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17212[(1)] = (1));

return statearr_17212;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17201){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17213){if((e17213 instanceof Object)){
var ex__6659__auto__ = e17213;
var statearr_17214_17367 = state_17201;
(statearr_17214_17367[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17368 = state_17201;
state_17201 = G__17368;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17201){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(__17357,switch__6655__auto__,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17215 = f__6712__auto__.call(null);
(statearr_17215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17360);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(__17357,c__6711__auto___17360,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
);


break;
case "async":
var c__6711__auto___17369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17357,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (__17357,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function (state_17228){
var state_val_17229 = (state_17228[(1)]);
if((state_val_17229 === (1))){
var state_17228__$1 = state_17228;
var statearr_17230_17370 = state_17228__$1;
(statearr_17230_17370[(2)] = null);

(statearr_17230_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (2))){
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17228__$1,(4),jobs);
} else {
if((state_val_17229 === (3))){
var inst_17226 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17228__$1,inst_17226);
} else {
if((state_val_17229 === (4))){
var inst_17218 = (state_17228[(2)]);
var inst_17219 = async.call(null,inst_17218);
var state_17228__$1 = state_17228;
if(cljs.core.truth_(inst_17219)){
var statearr_17231_17371 = state_17228__$1;
(statearr_17231_17371[(1)] = (5));

} else {
var statearr_17232_17372 = state_17228__$1;
(statearr_17232_17372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (5))){
var state_17228__$1 = state_17228;
var statearr_17233_17373 = state_17228__$1;
(statearr_17233_17373[(2)] = null);

(statearr_17233_17373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (6))){
var state_17228__$1 = state_17228;
var statearr_17234_17374 = state_17228__$1;
(statearr_17234_17374[(2)] = null);

(statearr_17234_17374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17229 === (7))){
var inst_17224 = (state_17228[(2)]);
var state_17228__$1 = state_17228;
var statearr_17235_17375 = state_17228__$1;
(statearr_17235_17375[(2)] = inst_17224);

(statearr_17235_17375[(1)] = (3));


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
});})(__17357,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
;
return ((function (__17357,switch__6655__auto__,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17239 = [null,null,null,null,null,null,null];
(statearr_17239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17239[(1)] = (1));

return statearr_17239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17228){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17240){if((e17240 instanceof Object)){
var ex__6659__auto__ = e17240;
var statearr_17241_17376 = state_17228;
(statearr_17241_17376[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17377 = state_17228;
state_17228 = G__17377;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(__17357,switch__6655__auto__,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17242 = f__6712__auto__.call(null);
(statearr_17242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17369);

return statearr_17242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(__17357,c__6711__auto___17369,G__17188_17358,n__4963__auto___17356,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17378 = (__17357 + (1));
__17357 = G__17378;
continue;
} else {
}
break;
}

var c__6711__auto___17379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17379,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17379,jobs,results,process,async){
return (function (state_17264){
var state_val_17265 = (state_17264[(1)]);
if((state_val_17265 === (1))){
var state_17264__$1 = state_17264;
var statearr_17266_17380 = state_17264__$1;
(statearr_17266_17380[(2)] = null);

(statearr_17266_17380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (2))){
var state_17264__$1 = state_17264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17264__$1,(4),from);
} else {
if((state_val_17265 === (3))){
var inst_17262 = (state_17264[(2)]);
var state_17264__$1 = state_17264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17264__$1,inst_17262);
} else {
if((state_val_17265 === (4))){
var inst_17245 = (state_17264[(7)]);
var inst_17245__$1 = (state_17264[(2)]);
var inst_17246 = (inst_17245__$1 == null);
var state_17264__$1 = (function (){var statearr_17267 = state_17264;
(statearr_17267[(7)] = inst_17245__$1);

return statearr_17267;
})();
if(cljs.core.truth_(inst_17246)){
var statearr_17268_17381 = state_17264__$1;
(statearr_17268_17381[(1)] = (5));

} else {
var statearr_17269_17382 = state_17264__$1;
(statearr_17269_17382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (5))){
var inst_17248 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17264__$1 = state_17264;
var statearr_17270_17383 = state_17264__$1;
(statearr_17270_17383[(2)] = inst_17248);

(statearr_17270_17383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (6))){
var inst_17245 = (state_17264[(7)]);
var inst_17250 = (state_17264[(8)]);
var inst_17250__$1 = cljs.core.async.chan.call(null,(1));
var inst_17251 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17252 = [inst_17245,inst_17250__$1];
var inst_17253 = (new cljs.core.PersistentVector(null,2,(5),inst_17251,inst_17252,null));
var state_17264__$1 = (function (){var statearr_17271 = state_17264;
(statearr_17271[(8)] = inst_17250__$1);

return statearr_17271;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17264__$1,(8),jobs,inst_17253);
} else {
if((state_val_17265 === (7))){
var inst_17260 = (state_17264[(2)]);
var state_17264__$1 = state_17264;
var statearr_17272_17384 = state_17264__$1;
(statearr_17272_17384[(2)] = inst_17260);

(statearr_17272_17384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17265 === (8))){
var inst_17250 = (state_17264[(8)]);
var inst_17255 = (state_17264[(2)]);
var state_17264__$1 = (function (){var statearr_17273 = state_17264;
(statearr_17273[(9)] = inst_17255);

return statearr_17273;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17264__$1,(9),results,inst_17250);
} else {
if((state_val_17265 === (9))){
var inst_17257 = (state_17264[(2)]);
var state_17264__$1 = (function (){var statearr_17274 = state_17264;
(statearr_17274[(10)] = inst_17257);

return statearr_17274;
})();
var statearr_17275_17385 = state_17264__$1;
(statearr_17275_17385[(2)] = null);

(statearr_17275_17385[(1)] = (2));


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
});})(c__6711__auto___17379,jobs,results,process,async))
;
return ((function (switch__6655__auto__,c__6711__auto___17379,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0 = (function (){
var statearr_17279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17279[(1)] = (1));

return statearr_17279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17264){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17280){if((e17280 instanceof Object)){
var ex__6659__auto__ = e17280;
var statearr_17281_17386 = state_17264;
(statearr_17281_17386[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17387 = state_17264;
state_17264 = G__17387;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17379,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17282 = f__6712__auto__.call(null);
(statearr_17282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17379);

return statearr_17282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17379,jobs,results,process,async))
);


var c__6711__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto__,jobs,results,process,async){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto__,jobs,results,process,async){
return (function (state_17320){
var state_val_17321 = (state_17320[(1)]);
if((state_val_17321 === (7))){
var inst_17316 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17322_17388 = state_17320__$1;
(statearr_17322_17388[(2)] = inst_17316);

(statearr_17322_17388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (20))){
var state_17320__$1 = state_17320;
var statearr_17323_17389 = state_17320__$1;
(statearr_17323_17389[(2)] = null);

(statearr_17323_17389[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (1))){
var state_17320__$1 = state_17320;
var statearr_17324_17390 = state_17320__$1;
(statearr_17324_17390[(2)] = null);

(statearr_17324_17390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (4))){
var inst_17285 = (state_17320[(7)]);
var inst_17285__$1 = (state_17320[(2)]);
var inst_17286 = (inst_17285__$1 == null);
var state_17320__$1 = (function (){var statearr_17325 = state_17320;
(statearr_17325[(7)] = inst_17285__$1);

return statearr_17325;
})();
if(cljs.core.truth_(inst_17286)){
var statearr_17326_17391 = state_17320__$1;
(statearr_17326_17391[(1)] = (5));

} else {
var statearr_17327_17392 = state_17320__$1;
(statearr_17327_17392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (15))){
var inst_17298 = (state_17320[(8)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17320__$1,(18),to,inst_17298);
} else {
if((state_val_17321 === (21))){
var inst_17311 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17328_17393 = state_17320__$1;
(statearr_17328_17393[(2)] = inst_17311);

(statearr_17328_17393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (13))){
var inst_17313 = (state_17320[(2)]);
var state_17320__$1 = (function (){var statearr_17329 = state_17320;
(statearr_17329[(9)] = inst_17313);

return statearr_17329;
})();
var statearr_17330_17394 = state_17320__$1;
(statearr_17330_17394[(2)] = null);

(statearr_17330_17394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (6))){
var inst_17285 = (state_17320[(7)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17320__$1,(11),inst_17285);
} else {
if((state_val_17321 === (17))){
var inst_17306 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
if(cljs.core.truth_(inst_17306)){
var statearr_17331_17395 = state_17320__$1;
(statearr_17331_17395[(1)] = (19));

} else {
var statearr_17332_17396 = state_17320__$1;
(statearr_17332_17396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (3))){
var inst_17318 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17320__$1,inst_17318);
} else {
if((state_val_17321 === (12))){
var inst_17295 = (state_17320[(10)]);
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17320__$1,(14),inst_17295);
} else {
if((state_val_17321 === (2))){
var state_17320__$1 = state_17320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17320__$1,(4),results);
} else {
if((state_val_17321 === (19))){
var state_17320__$1 = state_17320;
var statearr_17333_17397 = state_17320__$1;
(statearr_17333_17397[(2)] = null);

(statearr_17333_17397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (11))){
var inst_17295 = (state_17320[(2)]);
var state_17320__$1 = (function (){var statearr_17334 = state_17320;
(statearr_17334[(10)] = inst_17295);

return statearr_17334;
})();
var statearr_17335_17398 = state_17320__$1;
(statearr_17335_17398[(2)] = null);

(statearr_17335_17398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (9))){
var state_17320__$1 = state_17320;
var statearr_17336_17399 = state_17320__$1;
(statearr_17336_17399[(2)] = null);

(statearr_17336_17399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (5))){
var state_17320__$1 = state_17320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17337_17400 = state_17320__$1;
(statearr_17337_17400[(1)] = (8));

} else {
var statearr_17338_17401 = state_17320__$1;
(statearr_17338_17401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (14))){
var inst_17298 = (state_17320[(8)]);
var inst_17300 = (state_17320[(11)]);
var inst_17298__$1 = (state_17320[(2)]);
var inst_17299 = (inst_17298__$1 == null);
var inst_17300__$1 = cljs.core.not.call(null,inst_17299);
var state_17320__$1 = (function (){var statearr_17339 = state_17320;
(statearr_17339[(8)] = inst_17298__$1);

(statearr_17339[(11)] = inst_17300__$1);

return statearr_17339;
})();
if(inst_17300__$1){
var statearr_17340_17402 = state_17320__$1;
(statearr_17340_17402[(1)] = (15));

} else {
var statearr_17341_17403 = state_17320__$1;
(statearr_17341_17403[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (16))){
var inst_17300 = (state_17320[(11)]);
var state_17320__$1 = state_17320;
var statearr_17342_17404 = state_17320__$1;
(statearr_17342_17404[(2)] = inst_17300);

(statearr_17342_17404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (10))){
var inst_17292 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17343_17405 = state_17320__$1;
(statearr_17343_17405[(2)] = inst_17292);

(statearr_17343_17405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (18))){
var inst_17303 = (state_17320[(2)]);
var state_17320__$1 = state_17320;
var statearr_17344_17406 = state_17320__$1;
(statearr_17344_17406[(2)] = inst_17303);

(statearr_17344_17406[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17321 === (8))){
var inst_17289 = cljs.core.async.close_BANG_.call(null,to);
var state_17320__$1 = state_17320;
var statearr_17345_17407 = state_17320__$1;
(statearr_17345_17407[(2)] = inst_17289);

(statearr_17345_17407[(1)] = (10));


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
var statearr_17349 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__);

(statearr_17349[(1)] = (1));

return statearr_17349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1 = (function (state_17320){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17350){if((e17350 instanceof Object)){
var ex__6659__auto__ = e17350;
var statearr_17351_17408 = state_17320;
(statearr_17351_17408[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17409 = state_17320;
state_17320 = G__17409;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__ = function(state_17320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1.call(this,state_17320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__,jobs,results,process,async))
})();
var state__6713__auto__ = (function (){var statearr_17352 = f__6712__auto__.call(null);
(statearr_17352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17352;
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
var c__6711__auto___17510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___17510,tc,fc){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___17510,tc,fc){
return (function (state_17485){
var state_val_17486 = (state_17485[(1)]);
if((state_val_17486 === (7))){
var inst_17481 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17487_17511 = state_17485__$1;
(statearr_17487_17511[(2)] = inst_17481);

(statearr_17487_17511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (1))){
var state_17485__$1 = state_17485;
var statearr_17488_17512 = state_17485__$1;
(statearr_17488_17512[(2)] = null);

(statearr_17488_17512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (4))){
var inst_17462 = (state_17485[(7)]);
var inst_17462__$1 = (state_17485[(2)]);
var inst_17463 = (inst_17462__$1 == null);
var state_17485__$1 = (function (){var statearr_17489 = state_17485;
(statearr_17489[(7)] = inst_17462__$1);

return statearr_17489;
})();
if(cljs.core.truth_(inst_17463)){
var statearr_17490_17513 = state_17485__$1;
(statearr_17490_17513[(1)] = (5));

} else {
var statearr_17491_17514 = state_17485__$1;
(statearr_17491_17514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (13))){
var state_17485__$1 = state_17485;
var statearr_17492_17515 = state_17485__$1;
(statearr_17492_17515[(2)] = null);

(statearr_17492_17515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (6))){
var inst_17462 = (state_17485[(7)]);
var inst_17468 = p.call(null,inst_17462);
var state_17485__$1 = state_17485;
if(cljs.core.truth_(inst_17468)){
var statearr_17493_17516 = state_17485__$1;
(statearr_17493_17516[(1)] = (9));

} else {
var statearr_17494_17517 = state_17485__$1;
(statearr_17494_17517[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (3))){
var inst_17483 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17485__$1,inst_17483);
} else {
if((state_val_17486 === (12))){
var state_17485__$1 = state_17485;
var statearr_17495_17518 = state_17485__$1;
(statearr_17495_17518[(2)] = null);

(statearr_17495_17518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (2))){
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17485__$1,(4),ch);
} else {
if((state_val_17486 === (11))){
var inst_17462 = (state_17485[(7)]);
var inst_17472 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17485__$1,(8),inst_17472,inst_17462);
} else {
if((state_val_17486 === (9))){
var state_17485__$1 = state_17485;
var statearr_17496_17519 = state_17485__$1;
(statearr_17496_17519[(2)] = tc);

(statearr_17496_17519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (5))){
var inst_17465 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17466 = cljs.core.async.close_BANG_.call(null,fc);
var state_17485__$1 = (function (){var statearr_17497 = state_17485;
(statearr_17497[(8)] = inst_17465);

return statearr_17497;
})();
var statearr_17498_17520 = state_17485__$1;
(statearr_17498_17520[(2)] = inst_17466);

(statearr_17498_17520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (14))){
var inst_17479 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
var statearr_17499_17521 = state_17485__$1;
(statearr_17499_17521[(2)] = inst_17479);

(statearr_17499_17521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (10))){
var state_17485__$1 = state_17485;
var statearr_17500_17522 = state_17485__$1;
(statearr_17500_17522[(2)] = fc);

(statearr_17500_17522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17486 === (8))){
var inst_17474 = (state_17485[(2)]);
var state_17485__$1 = state_17485;
if(cljs.core.truth_(inst_17474)){
var statearr_17501_17523 = state_17485__$1;
(statearr_17501_17523[(1)] = (12));

} else {
var statearr_17502_17524 = state_17485__$1;
(statearr_17502_17524[(1)] = (13));

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
});})(c__6711__auto___17510,tc,fc))
;
return ((function (switch__6655__auto__,c__6711__auto___17510,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6656__auto__ = null;
var cljs$core$async$split_$_state_machine__6656__auto____0 = (function (){
var statearr_17506 = [null,null,null,null,null,null,null,null,null];
(statearr_17506[(0)] = cljs$core$async$split_$_state_machine__6656__auto__);

(statearr_17506[(1)] = (1));

return statearr_17506;
});
var cljs$core$async$split_$_state_machine__6656__auto____1 = (function (state_17485){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17507){if((e17507 instanceof Object)){
var ex__6659__auto__ = e17507;
var statearr_17508_17525 = state_17485;
(statearr_17508_17525[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17526 = state_17485;
state_17485 = G__17526;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6656__auto__ = function(state_17485){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6656__auto____1.call(this,state_17485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6656__auto____0;
cljs$core$async$split_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6656__auto____1;
return cljs$core$async$split_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___17510,tc,fc))
})();
var state__6713__auto__ = (function (){var statearr_17509 = f__6712__auto__.call(null);
(statearr_17509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___17510);

return statearr_17509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___17510,tc,fc))
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
return (function (state_17573){
var state_val_17574 = (state_17573[(1)]);
if((state_val_17574 === (1))){
var inst_17559 = init;
var state_17573__$1 = (function (){var statearr_17575 = state_17573;
(statearr_17575[(7)] = inst_17559);

return statearr_17575;
})();
var statearr_17576_17591 = state_17573__$1;
(statearr_17576_17591[(2)] = null);

(statearr_17576_17591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (2))){
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17573__$1,(4),ch);
} else {
if((state_val_17574 === (3))){
var inst_17571 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17573__$1,inst_17571);
} else {
if((state_val_17574 === (4))){
var inst_17562 = (state_17573[(8)]);
var inst_17562__$1 = (state_17573[(2)]);
var inst_17563 = (inst_17562__$1 == null);
var state_17573__$1 = (function (){var statearr_17577 = state_17573;
(statearr_17577[(8)] = inst_17562__$1);

return statearr_17577;
})();
if(cljs.core.truth_(inst_17563)){
var statearr_17578_17592 = state_17573__$1;
(statearr_17578_17592[(1)] = (5));

} else {
var statearr_17579_17593 = state_17573__$1;
(statearr_17579_17593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (5))){
var inst_17559 = (state_17573[(7)]);
var state_17573__$1 = state_17573;
var statearr_17580_17594 = state_17573__$1;
(statearr_17580_17594[(2)] = inst_17559);

(statearr_17580_17594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (6))){
var inst_17562 = (state_17573[(8)]);
var inst_17559 = (state_17573[(7)]);
var inst_17566 = f.call(null,inst_17559,inst_17562);
var inst_17559__$1 = inst_17566;
var state_17573__$1 = (function (){var statearr_17581 = state_17573;
(statearr_17581[(7)] = inst_17559__$1);

return statearr_17581;
})();
var statearr_17582_17595 = state_17573__$1;
(statearr_17582_17595[(2)] = null);

(statearr_17582_17595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (7))){
var inst_17569 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
var statearr_17583_17596 = state_17573__$1;
(statearr_17583_17596[(2)] = inst_17569);

(statearr_17583_17596[(1)] = (3));


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
var statearr_17587 = [null,null,null,null,null,null,null,null,null];
(statearr_17587[(0)] = cljs$core$async$reduce_$_state_machine__6656__auto__);

(statearr_17587[(1)] = (1));

return statearr_17587;
});
var cljs$core$async$reduce_$_state_machine__6656__auto____1 = (function (state_17573){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17588){if((e17588 instanceof Object)){
var ex__6659__auto__ = e17588;
var statearr_17589_17597 = state_17573;
(statearr_17589_17597[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17598 = state_17573;
state_17573 = G__17598;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6656__auto__ = function(state_17573){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6656__auto____1.call(this,state_17573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6656__auto____0;
cljs$core$async$reduce_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6656__auto____1;
return cljs$core$async$reduce_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_17590 = f__6712__auto__.call(null);
(statearr_17590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17590;
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
return (function (state_17672){
var state_val_17673 = (state_17672[(1)]);
if((state_val_17673 === (7))){
var inst_17654 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
var statearr_17674_17697 = state_17672__$1;
(statearr_17674_17697[(2)] = inst_17654);

(statearr_17674_17697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (1))){
var inst_17648 = cljs.core.seq.call(null,coll);
var inst_17649 = inst_17648;
var state_17672__$1 = (function (){var statearr_17675 = state_17672;
(statearr_17675[(7)] = inst_17649);

return statearr_17675;
})();
var statearr_17676_17698 = state_17672__$1;
(statearr_17676_17698[(2)] = null);

(statearr_17676_17698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (4))){
var inst_17649 = (state_17672[(7)]);
var inst_17652 = cljs.core.first.call(null,inst_17649);
var state_17672__$1 = state_17672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17672__$1,(7),ch,inst_17652);
} else {
if((state_val_17673 === (13))){
var inst_17666 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
var statearr_17677_17699 = state_17672__$1;
(statearr_17677_17699[(2)] = inst_17666);

(statearr_17677_17699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (6))){
var inst_17657 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
if(cljs.core.truth_(inst_17657)){
var statearr_17678_17700 = state_17672__$1;
(statearr_17678_17700[(1)] = (8));

} else {
var statearr_17679_17701 = state_17672__$1;
(statearr_17679_17701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (3))){
var inst_17670 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17672__$1,inst_17670);
} else {
if((state_val_17673 === (12))){
var state_17672__$1 = state_17672;
var statearr_17680_17702 = state_17672__$1;
(statearr_17680_17702[(2)] = null);

(statearr_17680_17702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (2))){
var inst_17649 = (state_17672[(7)]);
var state_17672__$1 = state_17672;
if(cljs.core.truth_(inst_17649)){
var statearr_17681_17703 = state_17672__$1;
(statearr_17681_17703[(1)] = (4));

} else {
var statearr_17682_17704 = state_17672__$1;
(statearr_17682_17704[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (11))){
var inst_17663 = cljs.core.async.close_BANG_.call(null,ch);
var state_17672__$1 = state_17672;
var statearr_17683_17705 = state_17672__$1;
(statearr_17683_17705[(2)] = inst_17663);

(statearr_17683_17705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (9))){
var state_17672__$1 = state_17672;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17684_17706 = state_17672__$1;
(statearr_17684_17706[(1)] = (11));

} else {
var statearr_17685_17707 = state_17672__$1;
(statearr_17685_17707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (5))){
var inst_17649 = (state_17672[(7)]);
var state_17672__$1 = state_17672;
var statearr_17686_17708 = state_17672__$1;
(statearr_17686_17708[(2)] = inst_17649);

(statearr_17686_17708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (10))){
var inst_17668 = (state_17672[(2)]);
var state_17672__$1 = state_17672;
var statearr_17687_17709 = state_17672__$1;
(statearr_17687_17709[(2)] = inst_17668);

(statearr_17687_17709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17673 === (8))){
var inst_17649 = (state_17672[(7)]);
var inst_17659 = cljs.core.next.call(null,inst_17649);
var inst_17649__$1 = inst_17659;
var state_17672__$1 = (function (){var statearr_17688 = state_17672;
(statearr_17688[(7)] = inst_17649__$1);

return statearr_17688;
})();
var statearr_17689_17710 = state_17672__$1;
(statearr_17689_17710[(2)] = null);

(statearr_17689_17710[(1)] = (2));


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
var statearr_17693 = [null,null,null,null,null,null,null,null];
(statearr_17693[(0)] = cljs$core$async$onto_chan_$_state_machine__6656__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var cljs$core$async$onto_chan_$_state_machine__6656__auto____1 = (function (state_17672){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_17672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e17694){if((e17694 instanceof Object)){
var ex__6659__auto__ = e17694;
var statearr_17695_17711 = state_17672;
(statearr_17695_17711[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17712 = state_17672;
state_17672 = G__17712;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6656__auto__ = function(state_17672){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6656__auto____1.call(this,state_17672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6656__auto____0;
cljs$core$async$onto_chan_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6656__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_17696 = f__6712__auto__.call(null);
(statearr_17696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_17696;
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

cljs.core.async.Mux = (function (){var obj17714 = {};
return obj17714;
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


cljs.core.async.Mult = (function (){var obj17716 = {};
return obj17716;
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
if(typeof cljs.core.async.t17938 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17938 = (function (mult,ch,cs,meta17939){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta17939 = meta17939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t17938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17940,meta17939__$1){
var self__ = this;
var _17940__$1 = this;
return (new cljs.core.async.t17938(self__.mult,self__.ch,self__.cs,meta17939__$1));
});})(cs))
;

cljs.core.async.t17938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17940){
var self__ = this;
var _17940__$1 = this;
return self__.meta17939;
});})(cs))
;

cljs.core.async.t17938.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17938.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17938.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17938.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17938.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17938.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17938.cljs$lang$type = true;

cljs.core.async.t17938.cljs$lang$ctorStr = "cljs.core.async/t17938";

cljs.core.async.t17938.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t17938");
});})(cs))
;

cljs.core.async.__GT_t17938 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t17938(mult__$1,ch__$1,cs__$1,meta17939){
return (new cljs.core.async.t17938(mult__$1,ch__$1,cs__$1,meta17939));
});})(cs))
;

}

return (new cljs.core.async.t17938(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6711__auto___18159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18159,cs,m,dchan,dctr,done){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18159,cs,m,dchan,dctr,done){
return (function (state_18071){
var state_val_18072 = (state_18071[(1)]);
if((state_val_18072 === (7))){
var inst_18067 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18073_18160 = state_18071__$1;
(statearr_18073_18160[(2)] = inst_18067);

(statearr_18073_18160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (20))){
var inst_17972 = (state_18071[(7)]);
var inst_17982 = cljs.core.first.call(null,inst_17972);
var inst_17983 = cljs.core.nth.call(null,inst_17982,(0),null);
var inst_17984 = cljs.core.nth.call(null,inst_17982,(1),null);
var state_18071__$1 = (function (){var statearr_18074 = state_18071;
(statearr_18074[(8)] = inst_17983);

return statearr_18074;
})();
if(cljs.core.truth_(inst_17984)){
var statearr_18075_18161 = state_18071__$1;
(statearr_18075_18161[(1)] = (22));

} else {
var statearr_18076_18162 = state_18071__$1;
(statearr_18076_18162[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (27))){
var inst_18012 = (state_18071[(9)]);
var inst_18014 = (state_18071[(10)]);
var inst_17943 = (state_18071[(11)]);
var inst_18019 = (state_18071[(12)]);
var inst_18019__$1 = cljs.core._nth.call(null,inst_18012,inst_18014);
var inst_18020 = cljs.core.async.put_BANG_.call(null,inst_18019__$1,inst_17943,done);
var state_18071__$1 = (function (){var statearr_18077 = state_18071;
(statearr_18077[(12)] = inst_18019__$1);

return statearr_18077;
})();
if(cljs.core.truth_(inst_18020)){
var statearr_18078_18163 = state_18071__$1;
(statearr_18078_18163[(1)] = (30));

} else {
var statearr_18079_18164 = state_18071__$1;
(statearr_18079_18164[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (1))){
var state_18071__$1 = state_18071;
var statearr_18080_18165 = state_18071__$1;
(statearr_18080_18165[(2)] = null);

(statearr_18080_18165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (24))){
var inst_17972 = (state_18071[(7)]);
var inst_17989 = (state_18071[(2)]);
var inst_17990 = cljs.core.next.call(null,inst_17972);
var inst_17952 = inst_17990;
var inst_17953 = null;
var inst_17954 = (0);
var inst_17955 = (0);
var state_18071__$1 = (function (){var statearr_18081 = state_18071;
(statearr_18081[(13)] = inst_17954);

(statearr_18081[(14)] = inst_17953);

(statearr_18081[(15)] = inst_17955);

(statearr_18081[(16)] = inst_17989);

(statearr_18081[(17)] = inst_17952);

return statearr_18081;
})();
var statearr_18082_18166 = state_18071__$1;
(statearr_18082_18166[(2)] = null);

(statearr_18082_18166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (39))){
var state_18071__$1 = state_18071;
var statearr_18086_18167 = state_18071__$1;
(statearr_18086_18167[(2)] = null);

(statearr_18086_18167[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (4))){
var inst_17943 = (state_18071[(11)]);
var inst_17943__$1 = (state_18071[(2)]);
var inst_17944 = (inst_17943__$1 == null);
var state_18071__$1 = (function (){var statearr_18087 = state_18071;
(statearr_18087[(11)] = inst_17943__$1);

return statearr_18087;
})();
if(cljs.core.truth_(inst_17944)){
var statearr_18088_18168 = state_18071__$1;
(statearr_18088_18168[(1)] = (5));

} else {
var statearr_18089_18169 = state_18071__$1;
(statearr_18089_18169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (15))){
var inst_17954 = (state_18071[(13)]);
var inst_17953 = (state_18071[(14)]);
var inst_17955 = (state_18071[(15)]);
var inst_17952 = (state_18071[(17)]);
var inst_17968 = (state_18071[(2)]);
var inst_17969 = (inst_17955 + (1));
var tmp18083 = inst_17954;
var tmp18084 = inst_17953;
var tmp18085 = inst_17952;
var inst_17952__$1 = tmp18085;
var inst_17953__$1 = tmp18084;
var inst_17954__$1 = tmp18083;
var inst_17955__$1 = inst_17969;
var state_18071__$1 = (function (){var statearr_18090 = state_18071;
(statearr_18090[(13)] = inst_17954__$1);

(statearr_18090[(18)] = inst_17968);

(statearr_18090[(14)] = inst_17953__$1);

(statearr_18090[(15)] = inst_17955__$1);

(statearr_18090[(17)] = inst_17952__$1);

return statearr_18090;
})();
var statearr_18091_18170 = state_18071__$1;
(statearr_18091_18170[(2)] = null);

(statearr_18091_18170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (21))){
var inst_17993 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18095_18171 = state_18071__$1;
(statearr_18095_18171[(2)] = inst_17993);

(statearr_18095_18171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (31))){
var inst_18019 = (state_18071[(12)]);
var inst_18023 = done.call(null,null);
var inst_18024 = cljs.core.async.untap_STAR_.call(null,m,inst_18019);
var state_18071__$1 = (function (){var statearr_18096 = state_18071;
(statearr_18096[(19)] = inst_18023);

return statearr_18096;
})();
var statearr_18097_18172 = state_18071__$1;
(statearr_18097_18172[(2)] = inst_18024);

(statearr_18097_18172[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (32))){
var inst_18012 = (state_18071[(9)]);
var inst_18013 = (state_18071[(20)]);
var inst_18014 = (state_18071[(10)]);
var inst_18011 = (state_18071[(21)]);
var inst_18026 = (state_18071[(2)]);
var inst_18027 = (inst_18014 + (1));
var tmp18092 = inst_18012;
var tmp18093 = inst_18013;
var tmp18094 = inst_18011;
var inst_18011__$1 = tmp18094;
var inst_18012__$1 = tmp18092;
var inst_18013__$1 = tmp18093;
var inst_18014__$1 = inst_18027;
var state_18071__$1 = (function (){var statearr_18098 = state_18071;
(statearr_18098[(9)] = inst_18012__$1);

(statearr_18098[(20)] = inst_18013__$1);

(statearr_18098[(22)] = inst_18026);

(statearr_18098[(10)] = inst_18014__$1);

(statearr_18098[(21)] = inst_18011__$1);

return statearr_18098;
})();
var statearr_18099_18173 = state_18071__$1;
(statearr_18099_18173[(2)] = null);

(statearr_18099_18173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (40))){
var inst_18039 = (state_18071[(23)]);
var inst_18043 = done.call(null,null);
var inst_18044 = cljs.core.async.untap_STAR_.call(null,m,inst_18039);
var state_18071__$1 = (function (){var statearr_18100 = state_18071;
(statearr_18100[(24)] = inst_18043);

return statearr_18100;
})();
var statearr_18101_18174 = state_18071__$1;
(statearr_18101_18174[(2)] = inst_18044);

(statearr_18101_18174[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (33))){
var inst_18030 = (state_18071[(25)]);
var inst_18032 = cljs.core.chunked_seq_QMARK_.call(null,inst_18030);
var state_18071__$1 = state_18071;
if(inst_18032){
var statearr_18102_18175 = state_18071__$1;
(statearr_18102_18175[(1)] = (36));

} else {
var statearr_18103_18176 = state_18071__$1;
(statearr_18103_18176[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (13))){
var inst_17962 = (state_18071[(26)]);
var inst_17965 = cljs.core.async.close_BANG_.call(null,inst_17962);
var state_18071__$1 = state_18071;
var statearr_18104_18177 = state_18071__$1;
(statearr_18104_18177[(2)] = inst_17965);

(statearr_18104_18177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (22))){
var inst_17983 = (state_18071[(8)]);
var inst_17986 = cljs.core.async.close_BANG_.call(null,inst_17983);
var state_18071__$1 = state_18071;
var statearr_18105_18178 = state_18071__$1;
(statearr_18105_18178[(2)] = inst_17986);

(statearr_18105_18178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (36))){
var inst_18030 = (state_18071[(25)]);
var inst_18034 = cljs.core.chunk_first.call(null,inst_18030);
var inst_18035 = cljs.core.chunk_rest.call(null,inst_18030);
var inst_18036 = cljs.core.count.call(null,inst_18034);
var inst_18011 = inst_18035;
var inst_18012 = inst_18034;
var inst_18013 = inst_18036;
var inst_18014 = (0);
var state_18071__$1 = (function (){var statearr_18106 = state_18071;
(statearr_18106[(9)] = inst_18012);

(statearr_18106[(20)] = inst_18013);

(statearr_18106[(10)] = inst_18014);

(statearr_18106[(21)] = inst_18011);

return statearr_18106;
})();
var statearr_18107_18179 = state_18071__$1;
(statearr_18107_18179[(2)] = null);

(statearr_18107_18179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (41))){
var inst_18030 = (state_18071[(25)]);
var inst_18046 = (state_18071[(2)]);
var inst_18047 = cljs.core.next.call(null,inst_18030);
var inst_18011 = inst_18047;
var inst_18012 = null;
var inst_18013 = (0);
var inst_18014 = (0);
var state_18071__$1 = (function (){var statearr_18108 = state_18071;
(statearr_18108[(9)] = inst_18012);

(statearr_18108[(20)] = inst_18013);

(statearr_18108[(10)] = inst_18014);

(statearr_18108[(21)] = inst_18011);

(statearr_18108[(27)] = inst_18046);

return statearr_18108;
})();
var statearr_18109_18180 = state_18071__$1;
(statearr_18109_18180[(2)] = null);

(statearr_18109_18180[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (43))){
var state_18071__$1 = state_18071;
var statearr_18110_18181 = state_18071__$1;
(statearr_18110_18181[(2)] = null);

(statearr_18110_18181[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (29))){
var inst_18055 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18111_18182 = state_18071__$1;
(statearr_18111_18182[(2)] = inst_18055);

(statearr_18111_18182[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (44))){
var inst_18064 = (state_18071[(2)]);
var state_18071__$1 = (function (){var statearr_18112 = state_18071;
(statearr_18112[(28)] = inst_18064);

return statearr_18112;
})();
var statearr_18113_18183 = state_18071__$1;
(statearr_18113_18183[(2)] = null);

(statearr_18113_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (6))){
var inst_18003 = (state_18071[(29)]);
var inst_18002 = cljs.core.deref.call(null,cs);
var inst_18003__$1 = cljs.core.keys.call(null,inst_18002);
var inst_18004 = cljs.core.count.call(null,inst_18003__$1);
var inst_18005 = cljs.core.reset_BANG_.call(null,dctr,inst_18004);
var inst_18010 = cljs.core.seq.call(null,inst_18003__$1);
var inst_18011 = inst_18010;
var inst_18012 = null;
var inst_18013 = (0);
var inst_18014 = (0);
var state_18071__$1 = (function (){var statearr_18114 = state_18071;
(statearr_18114[(30)] = inst_18005);

(statearr_18114[(9)] = inst_18012);

(statearr_18114[(20)] = inst_18013);

(statearr_18114[(10)] = inst_18014);

(statearr_18114[(21)] = inst_18011);

(statearr_18114[(29)] = inst_18003__$1);

return statearr_18114;
})();
var statearr_18115_18184 = state_18071__$1;
(statearr_18115_18184[(2)] = null);

(statearr_18115_18184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (28))){
var inst_18011 = (state_18071[(21)]);
var inst_18030 = (state_18071[(25)]);
var inst_18030__$1 = cljs.core.seq.call(null,inst_18011);
var state_18071__$1 = (function (){var statearr_18116 = state_18071;
(statearr_18116[(25)] = inst_18030__$1);

return statearr_18116;
})();
if(inst_18030__$1){
var statearr_18117_18185 = state_18071__$1;
(statearr_18117_18185[(1)] = (33));

} else {
var statearr_18118_18186 = state_18071__$1;
(statearr_18118_18186[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (25))){
var inst_18013 = (state_18071[(20)]);
var inst_18014 = (state_18071[(10)]);
var inst_18016 = (inst_18014 < inst_18013);
var inst_18017 = inst_18016;
var state_18071__$1 = state_18071;
if(cljs.core.truth_(inst_18017)){
var statearr_18119_18187 = state_18071__$1;
(statearr_18119_18187[(1)] = (27));

} else {
var statearr_18120_18188 = state_18071__$1;
(statearr_18120_18188[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (34))){
var state_18071__$1 = state_18071;
var statearr_18121_18189 = state_18071__$1;
(statearr_18121_18189[(2)] = null);

(statearr_18121_18189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (17))){
var state_18071__$1 = state_18071;
var statearr_18122_18190 = state_18071__$1;
(statearr_18122_18190[(2)] = null);

(statearr_18122_18190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (3))){
var inst_18069 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18071__$1,inst_18069);
} else {
if((state_val_18072 === (12))){
var inst_17998 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18123_18191 = state_18071__$1;
(statearr_18123_18191[(2)] = inst_17998);

(statearr_18123_18191[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (2))){
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18071__$1,(4),ch);
} else {
if((state_val_18072 === (23))){
var state_18071__$1 = state_18071;
var statearr_18124_18192 = state_18071__$1;
(statearr_18124_18192[(2)] = null);

(statearr_18124_18192[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (35))){
var inst_18053 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18125_18193 = state_18071__$1;
(statearr_18125_18193[(2)] = inst_18053);

(statearr_18125_18193[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (19))){
var inst_17972 = (state_18071[(7)]);
var inst_17976 = cljs.core.chunk_first.call(null,inst_17972);
var inst_17977 = cljs.core.chunk_rest.call(null,inst_17972);
var inst_17978 = cljs.core.count.call(null,inst_17976);
var inst_17952 = inst_17977;
var inst_17953 = inst_17976;
var inst_17954 = inst_17978;
var inst_17955 = (0);
var state_18071__$1 = (function (){var statearr_18126 = state_18071;
(statearr_18126[(13)] = inst_17954);

(statearr_18126[(14)] = inst_17953);

(statearr_18126[(15)] = inst_17955);

(statearr_18126[(17)] = inst_17952);

return statearr_18126;
})();
var statearr_18127_18194 = state_18071__$1;
(statearr_18127_18194[(2)] = null);

(statearr_18127_18194[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (11))){
var inst_17952 = (state_18071[(17)]);
var inst_17972 = (state_18071[(7)]);
var inst_17972__$1 = cljs.core.seq.call(null,inst_17952);
var state_18071__$1 = (function (){var statearr_18128 = state_18071;
(statearr_18128[(7)] = inst_17972__$1);

return statearr_18128;
})();
if(inst_17972__$1){
var statearr_18129_18195 = state_18071__$1;
(statearr_18129_18195[(1)] = (16));

} else {
var statearr_18130_18196 = state_18071__$1;
(statearr_18130_18196[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (9))){
var inst_18000 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18131_18197 = state_18071__$1;
(statearr_18131_18197[(2)] = inst_18000);

(statearr_18131_18197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (5))){
var inst_17950 = cljs.core.deref.call(null,cs);
var inst_17951 = cljs.core.seq.call(null,inst_17950);
var inst_17952 = inst_17951;
var inst_17953 = null;
var inst_17954 = (0);
var inst_17955 = (0);
var state_18071__$1 = (function (){var statearr_18132 = state_18071;
(statearr_18132[(13)] = inst_17954);

(statearr_18132[(14)] = inst_17953);

(statearr_18132[(15)] = inst_17955);

(statearr_18132[(17)] = inst_17952);

return statearr_18132;
})();
var statearr_18133_18198 = state_18071__$1;
(statearr_18133_18198[(2)] = null);

(statearr_18133_18198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (14))){
var state_18071__$1 = state_18071;
var statearr_18134_18199 = state_18071__$1;
(statearr_18134_18199[(2)] = null);

(statearr_18134_18199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (45))){
var inst_18061 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18135_18200 = state_18071__$1;
(statearr_18135_18200[(2)] = inst_18061);

(statearr_18135_18200[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (26))){
var inst_18003 = (state_18071[(29)]);
var inst_18057 = (state_18071[(2)]);
var inst_18058 = cljs.core.seq.call(null,inst_18003);
var state_18071__$1 = (function (){var statearr_18136 = state_18071;
(statearr_18136[(31)] = inst_18057);

return statearr_18136;
})();
if(inst_18058){
var statearr_18137_18201 = state_18071__$1;
(statearr_18137_18201[(1)] = (42));

} else {
var statearr_18138_18202 = state_18071__$1;
(statearr_18138_18202[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (16))){
var inst_17972 = (state_18071[(7)]);
var inst_17974 = cljs.core.chunked_seq_QMARK_.call(null,inst_17972);
var state_18071__$1 = state_18071;
if(inst_17974){
var statearr_18139_18203 = state_18071__$1;
(statearr_18139_18203[(1)] = (19));

} else {
var statearr_18140_18204 = state_18071__$1;
(statearr_18140_18204[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (38))){
var inst_18050 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18141_18205 = state_18071__$1;
(statearr_18141_18205[(2)] = inst_18050);

(statearr_18141_18205[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (30))){
var state_18071__$1 = state_18071;
var statearr_18142_18206 = state_18071__$1;
(statearr_18142_18206[(2)] = null);

(statearr_18142_18206[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (10))){
var inst_17953 = (state_18071[(14)]);
var inst_17955 = (state_18071[(15)]);
var inst_17961 = cljs.core._nth.call(null,inst_17953,inst_17955);
var inst_17962 = cljs.core.nth.call(null,inst_17961,(0),null);
var inst_17963 = cljs.core.nth.call(null,inst_17961,(1),null);
var state_18071__$1 = (function (){var statearr_18143 = state_18071;
(statearr_18143[(26)] = inst_17962);

return statearr_18143;
})();
if(cljs.core.truth_(inst_17963)){
var statearr_18144_18207 = state_18071__$1;
(statearr_18144_18207[(1)] = (13));

} else {
var statearr_18145_18208 = state_18071__$1;
(statearr_18145_18208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (18))){
var inst_17996 = (state_18071[(2)]);
var state_18071__$1 = state_18071;
var statearr_18146_18209 = state_18071__$1;
(statearr_18146_18209[(2)] = inst_17996);

(statearr_18146_18209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (42))){
var state_18071__$1 = state_18071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18071__$1,(45),dchan);
} else {
if((state_val_18072 === (37))){
var inst_17943 = (state_18071[(11)]);
var inst_18030 = (state_18071[(25)]);
var inst_18039 = (state_18071[(23)]);
var inst_18039__$1 = cljs.core.first.call(null,inst_18030);
var inst_18040 = cljs.core.async.put_BANG_.call(null,inst_18039__$1,inst_17943,done);
var state_18071__$1 = (function (){var statearr_18147 = state_18071;
(statearr_18147[(23)] = inst_18039__$1);

return statearr_18147;
})();
if(cljs.core.truth_(inst_18040)){
var statearr_18148_18210 = state_18071__$1;
(statearr_18148_18210[(1)] = (39));

} else {
var statearr_18149_18211 = state_18071__$1;
(statearr_18149_18211[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18072 === (8))){
var inst_17954 = (state_18071[(13)]);
var inst_17955 = (state_18071[(15)]);
var inst_17957 = (inst_17955 < inst_17954);
var inst_17958 = inst_17957;
var state_18071__$1 = state_18071;
if(cljs.core.truth_(inst_17958)){
var statearr_18150_18212 = state_18071__$1;
(statearr_18150_18212[(1)] = (10));

} else {
var statearr_18151_18213 = state_18071__$1;
(statearr_18151_18213[(1)] = (11));

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
});})(c__6711__auto___18159,cs,m,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6711__auto___18159,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6656__auto__ = null;
var cljs$core$async$mult_$_state_machine__6656__auto____0 = (function (){
var statearr_18155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18155[(0)] = cljs$core$async$mult_$_state_machine__6656__auto__);

(statearr_18155[(1)] = (1));

return statearr_18155;
});
var cljs$core$async$mult_$_state_machine__6656__auto____1 = (function (state_18071){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18156){if((e18156 instanceof Object)){
var ex__6659__auto__ = e18156;
var statearr_18157_18214 = state_18071;
(statearr_18157_18214[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18215 = state_18071;
state_18071 = G__18215;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6656__auto__ = function(state_18071){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6656__auto____1.call(this,state_18071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6656__auto____0;
cljs$core$async$mult_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6656__auto____1;
return cljs$core$async$mult_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18159,cs,m,dchan,dctr,done))
})();
var state__6713__auto__ = (function (){var statearr_18158 = f__6712__auto__.call(null);
(statearr_18158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18159);

return statearr_18158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18159,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18217 = {};
return obj18217;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18218){
var map__18223 = p__18218;
var map__18223__$1 = ((cljs.core.seq_QMARK_.call(null,map__18223))?cljs.core.apply.call(null,cljs.core.hash_map,map__18223):map__18223);
var opts = map__18223__$1;
var statearr_18224_18227 = state;
(statearr_18224_18227[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__18223,map__18223__$1,opts){
return (function (val){
var statearr_18225_18228 = state;
(statearr_18225_18228[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18223,map__18223__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_18226_18229 = state;
(statearr_18226_18229[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18218 = null;
if (arguments.length > 3) {
var G__18230__i = 0, G__18230__a = new Array(arguments.length -  3);
while (G__18230__i < G__18230__a.length) {G__18230__a[G__18230__i] = arguments[G__18230__i + 3]; ++G__18230__i;}
  p__18218 = new cljs.core.IndexedSeq(G__18230__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18218);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18231){
var state = cljs.core.first(arglist__18231);
arglist__18231 = cljs.core.next(arglist__18231);
var cont_block = cljs.core.first(arglist__18231);
arglist__18231 = cljs.core.next(arglist__18231);
var ports = cljs.core.first(arglist__18231);
var p__18218 = cljs.core.rest(arglist__18231);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__18218);
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
if(typeof cljs.core.async.t18351 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18351 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18352){
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
this.meta18352 = meta18352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18353,meta18352__$1){
var self__ = this;
var _18353__$1 = this;
return (new cljs.core.async.t18351(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18352__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18353){
var self__ = this;
var _18353__$1 = this;
return self__.meta18352;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18351.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18351.cljs$lang$type = true;

cljs.core.async.t18351.cljs$lang$ctorStr = "cljs.core.async/t18351";

cljs.core.async.t18351.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t18351");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18351 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t18351(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18352){
return (new cljs.core.async.t18351(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18352));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18351(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6711__auto___18470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18423){
var state_val_18424 = (state_18423[(1)]);
if((state_val_18424 === (7))){
var inst_18367 = (state_18423[(7)]);
var inst_18372 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18367);
var state_18423__$1 = state_18423;
var statearr_18425_18471 = state_18423__$1;
(statearr_18425_18471[(2)] = inst_18372);

(statearr_18425_18471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (20))){
var inst_18382 = (state_18423[(8)]);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18423__$1,(23),out,inst_18382);
} else {
if((state_val_18424 === (1))){
var inst_18357 = (state_18423[(9)]);
var inst_18357__$1 = calc_state.call(null);
var inst_18358 = cljs.core.seq_QMARK_.call(null,inst_18357__$1);
var state_18423__$1 = (function (){var statearr_18426 = state_18423;
(statearr_18426[(9)] = inst_18357__$1);

return statearr_18426;
})();
if(inst_18358){
var statearr_18427_18472 = state_18423__$1;
(statearr_18427_18472[(1)] = (2));

} else {
var statearr_18428_18473 = state_18423__$1;
(statearr_18428_18473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (24))){
var inst_18375 = (state_18423[(10)]);
var inst_18367 = inst_18375;
var state_18423__$1 = (function (){var statearr_18429 = state_18423;
(statearr_18429[(7)] = inst_18367);

return statearr_18429;
})();
var statearr_18430_18474 = state_18423__$1;
(statearr_18430_18474[(2)] = null);

(statearr_18430_18474[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (4))){
var inst_18357 = (state_18423[(9)]);
var inst_18363 = (state_18423[(2)]);
var inst_18364 = cljs.core.get.call(null,inst_18363,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18365 = cljs.core.get.call(null,inst_18363,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18366 = cljs.core.get.call(null,inst_18363,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18367 = inst_18357;
var state_18423__$1 = (function (){var statearr_18431 = state_18423;
(statearr_18431[(11)] = inst_18364);

(statearr_18431[(12)] = inst_18365);

(statearr_18431[(7)] = inst_18367);

(statearr_18431[(13)] = inst_18366);

return statearr_18431;
})();
var statearr_18432_18475 = state_18423__$1;
(statearr_18432_18475[(2)] = null);

(statearr_18432_18475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (15))){
var state_18423__$1 = state_18423;
var statearr_18433_18476 = state_18423__$1;
(statearr_18433_18476[(2)] = null);

(statearr_18433_18476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (21))){
var inst_18375 = (state_18423[(10)]);
var inst_18367 = inst_18375;
var state_18423__$1 = (function (){var statearr_18434 = state_18423;
(statearr_18434[(7)] = inst_18367);

return statearr_18434;
})();
var statearr_18435_18477 = state_18423__$1;
(statearr_18435_18477[(2)] = null);

(statearr_18435_18477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (13))){
var inst_18419 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18436_18478 = state_18423__$1;
(statearr_18436_18478[(2)] = inst_18419);

(statearr_18436_18478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (22))){
var inst_18417 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18437_18479 = state_18423__$1;
(statearr_18437_18479[(2)] = inst_18417);

(statearr_18437_18479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (6))){
var inst_18421 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18423__$1,inst_18421);
} else {
if((state_val_18424 === (25))){
var state_18423__$1 = state_18423;
var statearr_18438_18480 = state_18423__$1;
(statearr_18438_18480[(2)] = null);

(statearr_18438_18480[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (17))){
var inst_18397 = (state_18423[(14)]);
var state_18423__$1 = state_18423;
var statearr_18439_18481 = state_18423__$1;
(statearr_18439_18481[(2)] = inst_18397);

(statearr_18439_18481[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (3))){
var inst_18357 = (state_18423[(9)]);
var state_18423__$1 = state_18423;
var statearr_18440_18482 = state_18423__$1;
(statearr_18440_18482[(2)] = inst_18357);

(statearr_18440_18482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (12))){
var inst_18376 = (state_18423[(15)]);
var inst_18383 = (state_18423[(16)]);
var inst_18397 = (state_18423[(14)]);
var inst_18397__$1 = inst_18376.call(null,inst_18383);
var state_18423__$1 = (function (){var statearr_18441 = state_18423;
(statearr_18441[(14)] = inst_18397__$1);

return statearr_18441;
})();
if(cljs.core.truth_(inst_18397__$1)){
var statearr_18442_18483 = state_18423__$1;
(statearr_18442_18483[(1)] = (17));

} else {
var statearr_18443_18484 = state_18423__$1;
(statearr_18443_18484[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (2))){
var inst_18357 = (state_18423[(9)]);
var inst_18360 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18357);
var state_18423__$1 = state_18423;
var statearr_18444_18485 = state_18423__$1;
(statearr_18444_18485[(2)] = inst_18360);

(statearr_18444_18485[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (23))){
var inst_18408 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18408)){
var statearr_18445_18486 = state_18423__$1;
(statearr_18445_18486[(1)] = (24));

} else {
var statearr_18446_18487 = state_18423__$1;
(statearr_18446_18487[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (19))){
var inst_18405 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18405)){
var statearr_18447_18488 = state_18423__$1;
(statearr_18447_18488[(1)] = (20));

} else {
var statearr_18448_18489 = state_18423__$1;
(statearr_18448_18489[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (11))){
var inst_18382 = (state_18423[(8)]);
var inst_18388 = (inst_18382 == null);
var state_18423__$1 = state_18423;
if(cljs.core.truth_(inst_18388)){
var statearr_18449_18490 = state_18423__$1;
(statearr_18449_18490[(1)] = (14));

} else {
var statearr_18450_18491 = state_18423__$1;
(statearr_18450_18491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (9))){
var inst_18375 = (state_18423[(10)]);
var inst_18375__$1 = (state_18423[(2)]);
var inst_18376 = cljs.core.get.call(null,inst_18375__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18377 = cljs.core.get.call(null,inst_18375__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18378 = cljs.core.get.call(null,inst_18375__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18423__$1 = (function (){var statearr_18451 = state_18423;
(statearr_18451[(17)] = inst_18377);

(statearr_18451[(15)] = inst_18376);

(statearr_18451[(10)] = inst_18375__$1);

return statearr_18451;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18423__$1,(10),inst_18378);
} else {
if((state_val_18424 === (5))){
var inst_18367 = (state_18423[(7)]);
var inst_18370 = cljs.core.seq_QMARK_.call(null,inst_18367);
var state_18423__$1 = state_18423;
if(inst_18370){
var statearr_18452_18492 = state_18423__$1;
(statearr_18452_18492[(1)] = (7));

} else {
var statearr_18453_18493 = state_18423__$1;
(statearr_18453_18493[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (14))){
var inst_18383 = (state_18423[(16)]);
var inst_18390 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18383);
var state_18423__$1 = state_18423;
var statearr_18454_18494 = state_18423__$1;
(statearr_18454_18494[(2)] = inst_18390);

(statearr_18454_18494[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (26))){
var inst_18413 = (state_18423[(2)]);
var state_18423__$1 = state_18423;
var statearr_18455_18495 = state_18423__$1;
(statearr_18455_18495[(2)] = inst_18413);

(statearr_18455_18495[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (16))){
var inst_18393 = (state_18423[(2)]);
var inst_18394 = calc_state.call(null);
var inst_18367 = inst_18394;
var state_18423__$1 = (function (){var statearr_18456 = state_18423;
(statearr_18456[(7)] = inst_18367);

(statearr_18456[(18)] = inst_18393);

return statearr_18456;
})();
var statearr_18457_18496 = state_18423__$1;
(statearr_18457_18496[(2)] = null);

(statearr_18457_18496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (10))){
var inst_18382 = (state_18423[(8)]);
var inst_18383 = (state_18423[(16)]);
var inst_18381 = (state_18423[(2)]);
var inst_18382__$1 = cljs.core.nth.call(null,inst_18381,(0),null);
var inst_18383__$1 = cljs.core.nth.call(null,inst_18381,(1),null);
var inst_18384 = (inst_18382__$1 == null);
var inst_18385 = cljs.core._EQ_.call(null,inst_18383__$1,change);
var inst_18386 = (inst_18384) || (inst_18385);
var state_18423__$1 = (function (){var statearr_18458 = state_18423;
(statearr_18458[(8)] = inst_18382__$1);

(statearr_18458[(16)] = inst_18383__$1);

return statearr_18458;
})();
if(cljs.core.truth_(inst_18386)){
var statearr_18459_18497 = state_18423__$1;
(statearr_18459_18497[(1)] = (11));

} else {
var statearr_18460_18498 = state_18423__$1;
(statearr_18460_18498[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (18))){
var inst_18377 = (state_18423[(17)]);
var inst_18376 = (state_18423[(15)]);
var inst_18383 = (state_18423[(16)]);
var inst_18400 = cljs.core.empty_QMARK_.call(null,inst_18376);
var inst_18401 = inst_18377.call(null,inst_18383);
var inst_18402 = cljs.core.not.call(null,inst_18401);
var inst_18403 = (inst_18400) && (inst_18402);
var state_18423__$1 = state_18423;
var statearr_18461_18499 = state_18423__$1;
(statearr_18461_18499[(2)] = inst_18403);

(statearr_18461_18499[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18424 === (8))){
var inst_18367 = (state_18423[(7)]);
var state_18423__$1 = state_18423;
var statearr_18462_18500 = state_18423__$1;
(statearr_18462_18500[(2)] = inst_18367);

(statearr_18462_18500[(1)] = (9));


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
});})(c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6655__auto__,c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6656__auto__ = null;
var cljs$core$async$mix_$_state_machine__6656__auto____0 = (function (){
var statearr_18466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18466[(0)] = cljs$core$async$mix_$_state_machine__6656__auto__);

(statearr_18466[(1)] = (1));

return statearr_18466;
});
var cljs$core$async$mix_$_state_machine__6656__auto____1 = (function (state_18423){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18467){if((e18467 instanceof Object)){
var ex__6659__auto__ = e18467;
var statearr_18468_18501 = state_18423;
(statearr_18468_18501[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18502 = state_18423;
state_18423 = G__18502;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6656__auto__ = function(state_18423){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6656__auto____1.call(this,state_18423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6656__auto____0;
cljs$core$async$mix_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6656__auto____1;
return cljs$core$async$mix_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6713__auto__ = (function (){var statearr_18469 = f__6712__auto__.call(null);
(statearr_18469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18470);

return statearr_18469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18470,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18504 = {};
return obj18504;
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
return (function (p1__18505_SHARP_){
if(cljs.core.truth_(p1__18505_SHARP_.call(null,topic))){
return p1__18505_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18505_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18628 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18628 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta18629){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18629 = meta18629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t18628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18630,meta18629__$1){
var self__ = this;
var _18630__$1 = this;
return (new cljs.core.async.t18628(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18629__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18630){
var self__ = this;
var _18630__$1 = this;
return self__.meta18629;
});})(mults,ensure_mult))
;

cljs.core.async.t18628.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18628.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18628.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18628.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18628.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18628.cljs$lang$type = true;

cljs.core.async.t18628.cljs$lang$ctorStr = "cljs.core.async/t18628";

cljs.core.async.t18628.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t18628");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18628 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t18628(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18629){
return (new cljs.core.async.t18628(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18629));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18628(cljs$core$async$pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6711__auto___18750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18750,mults,ensure_mult,p){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18750,mults,ensure_mult,p){
return (function (state_18702){
var state_val_18703 = (state_18702[(1)]);
if((state_val_18703 === (7))){
var inst_18698 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18704_18751 = state_18702__$1;
(statearr_18704_18751[(2)] = inst_18698);

(statearr_18704_18751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (20))){
var state_18702__$1 = state_18702;
var statearr_18705_18752 = state_18702__$1;
(statearr_18705_18752[(2)] = null);

(statearr_18705_18752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (1))){
var state_18702__$1 = state_18702;
var statearr_18706_18753 = state_18702__$1;
(statearr_18706_18753[(2)] = null);

(statearr_18706_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (24))){
var inst_18681 = (state_18702[(7)]);
var inst_18690 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18681);
var state_18702__$1 = state_18702;
var statearr_18707_18754 = state_18702__$1;
(statearr_18707_18754[(2)] = inst_18690);

(statearr_18707_18754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (4))){
var inst_18633 = (state_18702[(8)]);
var inst_18633__$1 = (state_18702[(2)]);
var inst_18634 = (inst_18633__$1 == null);
var state_18702__$1 = (function (){var statearr_18708 = state_18702;
(statearr_18708[(8)] = inst_18633__$1);

return statearr_18708;
})();
if(cljs.core.truth_(inst_18634)){
var statearr_18709_18755 = state_18702__$1;
(statearr_18709_18755[(1)] = (5));

} else {
var statearr_18710_18756 = state_18702__$1;
(statearr_18710_18756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (15))){
var inst_18675 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18711_18757 = state_18702__$1;
(statearr_18711_18757[(2)] = inst_18675);

(statearr_18711_18757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (21))){
var inst_18695 = (state_18702[(2)]);
var state_18702__$1 = (function (){var statearr_18712 = state_18702;
(statearr_18712[(9)] = inst_18695);

return statearr_18712;
})();
var statearr_18713_18758 = state_18702__$1;
(statearr_18713_18758[(2)] = null);

(statearr_18713_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (13))){
var inst_18657 = (state_18702[(10)]);
var inst_18659 = cljs.core.chunked_seq_QMARK_.call(null,inst_18657);
var state_18702__$1 = state_18702;
if(inst_18659){
var statearr_18714_18759 = state_18702__$1;
(statearr_18714_18759[(1)] = (16));

} else {
var statearr_18715_18760 = state_18702__$1;
(statearr_18715_18760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (22))){
var inst_18687 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18687)){
var statearr_18716_18761 = state_18702__$1;
(statearr_18716_18761[(1)] = (23));

} else {
var statearr_18717_18762 = state_18702__$1;
(statearr_18717_18762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (6))){
var inst_18683 = (state_18702[(11)]);
var inst_18681 = (state_18702[(7)]);
var inst_18633 = (state_18702[(8)]);
var inst_18681__$1 = topic_fn.call(null,inst_18633);
var inst_18682 = cljs.core.deref.call(null,mults);
var inst_18683__$1 = cljs.core.get.call(null,inst_18682,inst_18681__$1);
var state_18702__$1 = (function (){var statearr_18718 = state_18702;
(statearr_18718[(11)] = inst_18683__$1);

(statearr_18718[(7)] = inst_18681__$1);

return statearr_18718;
})();
if(cljs.core.truth_(inst_18683__$1)){
var statearr_18719_18763 = state_18702__$1;
(statearr_18719_18763[(1)] = (19));

} else {
var statearr_18720_18764 = state_18702__$1;
(statearr_18720_18764[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (25))){
var inst_18692 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18721_18765 = state_18702__$1;
(statearr_18721_18765[(2)] = inst_18692);

(statearr_18721_18765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (17))){
var inst_18657 = (state_18702[(10)]);
var inst_18666 = cljs.core.first.call(null,inst_18657);
var inst_18667 = cljs.core.async.muxch_STAR_.call(null,inst_18666);
var inst_18668 = cljs.core.async.close_BANG_.call(null,inst_18667);
var inst_18669 = cljs.core.next.call(null,inst_18657);
var inst_18643 = inst_18669;
var inst_18644 = null;
var inst_18645 = (0);
var inst_18646 = (0);
var state_18702__$1 = (function (){var statearr_18722 = state_18702;
(statearr_18722[(12)] = inst_18644);

(statearr_18722[(13)] = inst_18646);

(statearr_18722[(14)] = inst_18643);

(statearr_18722[(15)] = inst_18668);

(statearr_18722[(16)] = inst_18645);

return statearr_18722;
})();
var statearr_18723_18766 = state_18702__$1;
(statearr_18723_18766[(2)] = null);

(statearr_18723_18766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (3))){
var inst_18700 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18702__$1,inst_18700);
} else {
if((state_val_18703 === (12))){
var inst_18677 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18724_18767 = state_18702__$1;
(statearr_18724_18767[(2)] = inst_18677);

(statearr_18724_18767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (2))){
var state_18702__$1 = state_18702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18702__$1,(4),ch);
} else {
if((state_val_18703 === (23))){
var state_18702__$1 = state_18702;
var statearr_18725_18768 = state_18702__$1;
(statearr_18725_18768[(2)] = null);

(statearr_18725_18768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (19))){
var inst_18683 = (state_18702[(11)]);
var inst_18633 = (state_18702[(8)]);
var inst_18685 = cljs.core.async.muxch_STAR_.call(null,inst_18683);
var state_18702__$1 = state_18702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18702__$1,(22),inst_18685,inst_18633);
} else {
if((state_val_18703 === (11))){
var inst_18657 = (state_18702[(10)]);
var inst_18643 = (state_18702[(14)]);
var inst_18657__$1 = cljs.core.seq.call(null,inst_18643);
var state_18702__$1 = (function (){var statearr_18726 = state_18702;
(statearr_18726[(10)] = inst_18657__$1);

return statearr_18726;
})();
if(inst_18657__$1){
var statearr_18727_18769 = state_18702__$1;
(statearr_18727_18769[(1)] = (13));

} else {
var statearr_18728_18770 = state_18702__$1;
(statearr_18728_18770[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (9))){
var inst_18679 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18729_18771 = state_18702__$1;
(statearr_18729_18771[(2)] = inst_18679);

(statearr_18729_18771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (5))){
var inst_18640 = cljs.core.deref.call(null,mults);
var inst_18641 = cljs.core.vals.call(null,inst_18640);
var inst_18642 = cljs.core.seq.call(null,inst_18641);
var inst_18643 = inst_18642;
var inst_18644 = null;
var inst_18645 = (0);
var inst_18646 = (0);
var state_18702__$1 = (function (){var statearr_18730 = state_18702;
(statearr_18730[(12)] = inst_18644);

(statearr_18730[(13)] = inst_18646);

(statearr_18730[(14)] = inst_18643);

(statearr_18730[(16)] = inst_18645);

return statearr_18730;
})();
var statearr_18731_18772 = state_18702__$1;
(statearr_18731_18772[(2)] = null);

(statearr_18731_18772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (14))){
var state_18702__$1 = state_18702;
var statearr_18735_18773 = state_18702__$1;
(statearr_18735_18773[(2)] = null);

(statearr_18735_18773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (16))){
var inst_18657 = (state_18702[(10)]);
var inst_18661 = cljs.core.chunk_first.call(null,inst_18657);
var inst_18662 = cljs.core.chunk_rest.call(null,inst_18657);
var inst_18663 = cljs.core.count.call(null,inst_18661);
var inst_18643 = inst_18662;
var inst_18644 = inst_18661;
var inst_18645 = inst_18663;
var inst_18646 = (0);
var state_18702__$1 = (function (){var statearr_18736 = state_18702;
(statearr_18736[(12)] = inst_18644);

(statearr_18736[(13)] = inst_18646);

(statearr_18736[(14)] = inst_18643);

(statearr_18736[(16)] = inst_18645);

return statearr_18736;
})();
var statearr_18737_18774 = state_18702__$1;
(statearr_18737_18774[(2)] = null);

(statearr_18737_18774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (10))){
var inst_18644 = (state_18702[(12)]);
var inst_18646 = (state_18702[(13)]);
var inst_18643 = (state_18702[(14)]);
var inst_18645 = (state_18702[(16)]);
var inst_18651 = cljs.core._nth.call(null,inst_18644,inst_18646);
var inst_18652 = cljs.core.async.muxch_STAR_.call(null,inst_18651);
var inst_18653 = cljs.core.async.close_BANG_.call(null,inst_18652);
var inst_18654 = (inst_18646 + (1));
var tmp18732 = inst_18644;
var tmp18733 = inst_18643;
var tmp18734 = inst_18645;
var inst_18643__$1 = tmp18733;
var inst_18644__$1 = tmp18732;
var inst_18645__$1 = tmp18734;
var inst_18646__$1 = inst_18654;
var state_18702__$1 = (function (){var statearr_18738 = state_18702;
(statearr_18738[(12)] = inst_18644__$1);

(statearr_18738[(13)] = inst_18646__$1);

(statearr_18738[(14)] = inst_18643__$1);

(statearr_18738[(17)] = inst_18653);

(statearr_18738[(16)] = inst_18645__$1);

return statearr_18738;
})();
var statearr_18739_18775 = state_18702__$1;
(statearr_18739_18775[(2)] = null);

(statearr_18739_18775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (18))){
var inst_18672 = (state_18702[(2)]);
var state_18702__$1 = state_18702;
var statearr_18740_18776 = state_18702__$1;
(statearr_18740_18776[(2)] = inst_18672);

(statearr_18740_18776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18703 === (8))){
var inst_18646 = (state_18702[(13)]);
var inst_18645 = (state_18702[(16)]);
var inst_18648 = (inst_18646 < inst_18645);
var inst_18649 = inst_18648;
var state_18702__$1 = state_18702;
if(cljs.core.truth_(inst_18649)){
var statearr_18741_18777 = state_18702__$1;
(statearr_18741_18777[(1)] = (10));

} else {
var statearr_18742_18778 = state_18702__$1;
(statearr_18742_18778[(1)] = (11));

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
});})(c__6711__auto___18750,mults,ensure_mult,p))
;
return ((function (switch__6655__auto__,c__6711__auto___18750,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6656__auto__ = null;
var cljs$core$async$pub_$_state_machine__6656__auto____0 = (function (){
var statearr_18746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18746[(0)] = cljs$core$async$pub_$_state_machine__6656__auto__);

(statearr_18746[(1)] = (1));

return statearr_18746;
});
var cljs$core$async$pub_$_state_machine__6656__auto____1 = (function (state_18702){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18747){if((e18747 instanceof Object)){
var ex__6659__auto__ = e18747;
var statearr_18748_18779 = state_18702;
(statearr_18748_18779[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18780 = state_18702;
state_18702 = G__18780;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6656__auto__ = function(state_18702){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6656__auto____1.call(this,state_18702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6656__auto____0;
cljs$core$async$pub_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6656__auto____1;
return cljs$core$async$pub_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18750,mults,ensure_mult,p))
})();
var state__6713__auto__ = (function (){var statearr_18749 = f__6712__auto__.call(null);
(statearr_18749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18750);

return statearr_18749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18750,mults,ensure_mult,p))
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
var c__6711__auto___18917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18887){
var state_val_18888 = (state_18887[(1)]);
if((state_val_18888 === (7))){
var state_18887__$1 = state_18887;
var statearr_18889_18918 = state_18887__$1;
(statearr_18889_18918[(2)] = null);

(statearr_18889_18918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (1))){
var state_18887__$1 = state_18887;
var statearr_18890_18919 = state_18887__$1;
(statearr_18890_18919[(2)] = null);

(statearr_18890_18919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (4))){
var inst_18851 = (state_18887[(7)]);
var inst_18853 = (inst_18851 < cnt);
var state_18887__$1 = state_18887;
if(cljs.core.truth_(inst_18853)){
var statearr_18891_18920 = state_18887__$1;
(statearr_18891_18920[(1)] = (6));

} else {
var statearr_18892_18921 = state_18887__$1;
(statearr_18892_18921[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (15))){
var inst_18883 = (state_18887[(2)]);
var state_18887__$1 = state_18887;
var statearr_18893_18922 = state_18887__$1;
(statearr_18893_18922[(2)] = inst_18883);

(statearr_18893_18922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (13))){
var inst_18876 = cljs.core.async.close_BANG_.call(null,out);
var state_18887__$1 = state_18887;
var statearr_18894_18923 = state_18887__$1;
(statearr_18894_18923[(2)] = inst_18876);

(statearr_18894_18923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (6))){
var state_18887__$1 = state_18887;
var statearr_18895_18924 = state_18887__$1;
(statearr_18895_18924[(2)] = null);

(statearr_18895_18924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (3))){
var inst_18885 = (state_18887[(2)]);
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18887__$1,inst_18885);
} else {
if((state_val_18888 === (12))){
var inst_18873 = (state_18887[(8)]);
var inst_18873__$1 = (state_18887[(2)]);
var inst_18874 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18873__$1);
var state_18887__$1 = (function (){var statearr_18896 = state_18887;
(statearr_18896[(8)] = inst_18873__$1);

return statearr_18896;
})();
if(cljs.core.truth_(inst_18874)){
var statearr_18897_18925 = state_18887__$1;
(statearr_18897_18925[(1)] = (13));

} else {
var statearr_18898_18926 = state_18887__$1;
(statearr_18898_18926[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (2))){
var inst_18850 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18851 = (0);
var state_18887__$1 = (function (){var statearr_18899 = state_18887;
(statearr_18899[(7)] = inst_18851);

(statearr_18899[(9)] = inst_18850);

return statearr_18899;
})();
var statearr_18900_18927 = state_18887__$1;
(statearr_18900_18927[(2)] = null);

(statearr_18900_18927[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (11))){
var inst_18851 = (state_18887[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18887,(10),Object,null,(9));
var inst_18860 = chs__$1.call(null,inst_18851);
var inst_18861 = done.call(null,inst_18851);
var inst_18862 = cljs.core.async.take_BANG_.call(null,inst_18860,inst_18861);
var state_18887__$1 = state_18887;
var statearr_18901_18928 = state_18887__$1;
(statearr_18901_18928[(2)] = inst_18862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (9))){
var inst_18851 = (state_18887[(7)]);
var inst_18864 = (state_18887[(2)]);
var inst_18865 = (inst_18851 + (1));
var inst_18851__$1 = inst_18865;
var state_18887__$1 = (function (){var statearr_18902 = state_18887;
(statearr_18902[(7)] = inst_18851__$1);

(statearr_18902[(10)] = inst_18864);

return statearr_18902;
})();
var statearr_18903_18929 = state_18887__$1;
(statearr_18903_18929[(2)] = null);

(statearr_18903_18929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (5))){
var inst_18871 = (state_18887[(2)]);
var state_18887__$1 = (function (){var statearr_18904 = state_18887;
(statearr_18904[(11)] = inst_18871);

return statearr_18904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18887__$1,(12),dchan);
} else {
if((state_val_18888 === (14))){
var inst_18873 = (state_18887[(8)]);
var inst_18878 = cljs.core.apply.call(null,f,inst_18873);
var state_18887__$1 = state_18887;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18887__$1,(16),out,inst_18878);
} else {
if((state_val_18888 === (16))){
var inst_18880 = (state_18887[(2)]);
var state_18887__$1 = (function (){var statearr_18905 = state_18887;
(statearr_18905[(12)] = inst_18880);

return statearr_18905;
})();
var statearr_18906_18930 = state_18887__$1;
(statearr_18906_18930[(2)] = null);

(statearr_18906_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (10))){
var inst_18855 = (state_18887[(2)]);
var inst_18856 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18887__$1 = (function (){var statearr_18907 = state_18887;
(statearr_18907[(13)] = inst_18855);

return statearr_18907;
})();
var statearr_18908_18931 = state_18887__$1;
(statearr_18908_18931[(2)] = inst_18856);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18887__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18888 === (8))){
var inst_18869 = (state_18887[(2)]);
var state_18887__$1 = state_18887;
var statearr_18909_18932 = state_18887__$1;
(statearr_18909_18932[(2)] = inst_18869);

(statearr_18909_18932[(1)] = (5));


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
});})(c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6655__auto__,c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6656__auto__ = null;
var cljs$core$async$map_$_state_machine__6656__auto____0 = (function (){
var statearr_18913 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18913[(0)] = cljs$core$async$map_$_state_machine__6656__auto__);

(statearr_18913[(1)] = (1));

return statearr_18913;
});
var cljs$core$async$map_$_state_machine__6656__auto____1 = (function (state_18887){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_18887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e18914){if((e18914 instanceof Object)){
var ex__6659__auto__ = e18914;
var statearr_18915_18933 = state_18887;
(statearr_18915_18933[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18934 = state_18887;
state_18887 = G__18934;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6656__auto__ = function(state_18887){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6656__auto____1.call(this,state_18887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6656__auto____0;
cljs$core$async$map_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6656__auto____1;
return cljs$core$async$map_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6713__auto__ = (function (){var statearr_18916 = f__6712__auto__.call(null);
(statearr_18916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___18917);

return statearr_18916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___18917,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__6711__auto___19042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19042,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19042,out){
return (function (state_19018){
var state_val_19019 = (state_19018[(1)]);
if((state_val_19019 === (7))){
var inst_18997 = (state_19018[(7)]);
var inst_18998 = (state_19018[(8)]);
var inst_18997__$1 = (state_19018[(2)]);
var inst_18998__$1 = cljs.core.nth.call(null,inst_18997__$1,(0),null);
var inst_18999 = cljs.core.nth.call(null,inst_18997__$1,(1),null);
var inst_19000 = (inst_18998__$1 == null);
var state_19018__$1 = (function (){var statearr_19020 = state_19018;
(statearr_19020[(9)] = inst_18999);

(statearr_19020[(7)] = inst_18997__$1);

(statearr_19020[(8)] = inst_18998__$1);

return statearr_19020;
})();
if(cljs.core.truth_(inst_19000)){
var statearr_19021_19043 = state_19018__$1;
(statearr_19021_19043[(1)] = (8));

} else {
var statearr_19022_19044 = state_19018__$1;
(statearr_19022_19044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (1))){
var inst_18989 = cljs.core.vec.call(null,chs);
var inst_18990 = inst_18989;
var state_19018__$1 = (function (){var statearr_19023 = state_19018;
(statearr_19023[(10)] = inst_18990);

return statearr_19023;
})();
var statearr_19024_19045 = state_19018__$1;
(statearr_19024_19045[(2)] = null);

(statearr_19024_19045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (4))){
var inst_18990 = (state_19018[(10)]);
var state_19018__$1 = state_19018;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19018__$1,(7),inst_18990);
} else {
if((state_val_19019 === (6))){
var inst_19014 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19025_19046 = state_19018__$1;
(statearr_19025_19046[(2)] = inst_19014);

(statearr_19025_19046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (3))){
var inst_19016 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19018__$1,inst_19016);
} else {
if((state_val_19019 === (2))){
var inst_18990 = (state_19018[(10)]);
var inst_18992 = cljs.core.count.call(null,inst_18990);
var inst_18993 = (inst_18992 > (0));
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18993)){
var statearr_19027_19047 = state_19018__$1;
(statearr_19027_19047[(1)] = (4));

} else {
var statearr_19028_19048 = state_19018__$1;
(statearr_19028_19048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (11))){
var inst_18990 = (state_19018[(10)]);
var inst_19007 = (state_19018[(2)]);
var tmp19026 = inst_18990;
var inst_18990__$1 = tmp19026;
var state_19018__$1 = (function (){var statearr_19029 = state_19018;
(statearr_19029[(10)] = inst_18990__$1);

(statearr_19029[(11)] = inst_19007);

return statearr_19029;
})();
var statearr_19030_19049 = state_19018__$1;
(statearr_19030_19049[(2)] = null);

(statearr_19030_19049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (9))){
var inst_18998 = (state_19018[(8)]);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19018__$1,(11),out,inst_18998);
} else {
if((state_val_19019 === (5))){
var inst_19012 = cljs.core.async.close_BANG_.call(null,out);
var state_19018__$1 = state_19018;
var statearr_19031_19050 = state_19018__$1;
(statearr_19031_19050[(2)] = inst_19012);

(statearr_19031_19050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (10))){
var inst_19010 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19032_19051 = state_19018__$1;
(statearr_19032_19051[(2)] = inst_19010);

(statearr_19032_19051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (8))){
var inst_18999 = (state_19018[(9)]);
var inst_18990 = (state_19018[(10)]);
var inst_18997 = (state_19018[(7)]);
var inst_18998 = (state_19018[(8)]);
var inst_19002 = (function (){var cs = inst_18990;
var vec__18995 = inst_18997;
var v = inst_18998;
var c = inst_18999;
return ((function (cs,vec__18995,v,c,inst_18999,inst_18990,inst_18997,inst_18998,state_val_19019,c__6711__auto___19042,out){
return (function (p1__18935_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18935_SHARP_);
});
;})(cs,vec__18995,v,c,inst_18999,inst_18990,inst_18997,inst_18998,state_val_19019,c__6711__auto___19042,out))
})();
var inst_19003 = cljs.core.filterv.call(null,inst_19002,inst_18990);
var inst_18990__$1 = inst_19003;
var state_19018__$1 = (function (){var statearr_19033 = state_19018;
(statearr_19033[(10)] = inst_18990__$1);

return statearr_19033;
})();
var statearr_19034_19052 = state_19018__$1;
(statearr_19034_19052[(2)] = null);

(statearr_19034_19052[(1)] = (2));


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
});})(c__6711__auto___19042,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19042,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6656__auto__ = null;
var cljs$core$async$merge_$_state_machine__6656__auto____0 = (function (){
var statearr_19038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19038[(0)] = cljs$core$async$merge_$_state_machine__6656__auto__);

(statearr_19038[(1)] = (1));

return statearr_19038;
});
var cljs$core$async$merge_$_state_machine__6656__auto____1 = (function (state_19018){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19039){if((e19039 instanceof Object)){
var ex__6659__auto__ = e19039;
var statearr_19040_19053 = state_19018;
(statearr_19040_19053[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19054 = state_19018;
state_19018 = G__19054;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6656__auto__ = function(state_19018){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6656__auto____1.call(this,state_19018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6656__auto____0;
cljs$core$async$merge_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6656__auto____1;
return cljs$core$async$merge_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19042,out))
})();
var state__6713__auto__ = (function (){var statearr_19041 = f__6712__auto__.call(null);
(statearr_19041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19042);

return statearr_19041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19042,out))
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
var c__6711__auto___19147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19147,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19147,out){
return (function (state_19124){
var state_val_19125 = (state_19124[(1)]);
if((state_val_19125 === (7))){
var inst_19106 = (state_19124[(7)]);
var inst_19106__$1 = (state_19124[(2)]);
var inst_19107 = (inst_19106__$1 == null);
var inst_19108 = cljs.core.not.call(null,inst_19107);
var state_19124__$1 = (function (){var statearr_19126 = state_19124;
(statearr_19126[(7)] = inst_19106__$1);

return statearr_19126;
})();
if(inst_19108){
var statearr_19127_19148 = state_19124__$1;
(statearr_19127_19148[(1)] = (8));

} else {
var statearr_19128_19149 = state_19124__$1;
(statearr_19128_19149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (1))){
var inst_19101 = (0);
var state_19124__$1 = (function (){var statearr_19129 = state_19124;
(statearr_19129[(8)] = inst_19101);

return statearr_19129;
})();
var statearr_19130_19150 = state_19124__$1;
(statearr_19130_19150[(2)] = null);

(statearr_19130_19150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (4))){
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19124__$1,(7),ch);
} else {
if((state_val_19125 === (6))){
var inst_19119 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
var statearr_19131_19151 = state_19124__$1;
(statearr_19131_19151[(2)] = inst_19119);

(statearr_19131_19151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (3))){
var inst_19121 = (state_19124[(2)]);
var inst_19122 = cljs.core.async.close_BANG_.call(null,out);
var state_19124__$1 = (function (){var statearr_19132 = state_19124;
(statearr_19132[(9)] = inst_19121);

return statearr_19132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19124__$1,inst_19122);
} else {
if((state_val_19125 === (2))){
var inst_19101 = (state_19124[(8)]);
var inst_19103 = (inst_19101 < n);
var state_19124__$1 = state_19124;
if(cljs.core.truth_(inst_19103)){
var statearr_19133_19152 = state_19124__$1;
(statearr_19133_19152[(1)] = (4));

} else {
var statearr_19134_19153 = state_19124__$1;
(statearr_19134_19153[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (11))){
var inst_19101 = (state_19124[(8)]);
var inst_19111 = (state_19124[(2)]);
var inst_19112 = (inst_19101 + (1));
var inst_19101__$1 = inst_19112;
var state_19124__$1 = (function (){var statearr_19135 = state_19124;
(statearr_19135[(10)] = inst_19111);

(statearr_19135[(8)] = inst_19101__$1);

return statearr_19135;
})();
var statearr_19136_19154 = state_19124__$1;
(statearr_19136_19154[(2)] = null);

(statearr_19136_19154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (9))){
var state_19124__$1 = state_19124;
var statearr_19137_19155 = state_19124__$1;
(statearr_19137_19155[(2)] = null);

(statearr_19137_19155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (5))){
var state_19124__$1 = state_19124;
var statearr_19138_19156 = state_19124__$1;
(statearr_19138_19156[(2)] = null);

(statearr_19138_19156[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (10))){
var inst_19116 = (state_19124[(2)]);
var state_19124__$1 = state_19124;
var statearr_19139_19157 = state_19124__$1;
(statearr_19139_19157[(2)] = inst_19116);

(statearr_19139_19157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19125 === (8))){
var inst_19106 = (state_19124[(7)]);
var state_19124__$1 = state_19124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19124__$1,(11),out,inst_19106);
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
});})(c__6711__auto___19147,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19147,out){
return (function() {
var cljs$core$async$take_$_state_machine__6656__auto__ = null;
var cljs$core$async$take_$_state_machine__6656__auto____0 = (function (){
var statearr_19143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19143[(0)] = cljs$core$async$take_$_state_machine__6656__auto__);

(statearr_19143[(1)] = (1));

return statearr_19143;
});
var cljs$core$async$take_$_state_machine__6656__auto____1 = (function (state_19124){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19144){if((e19144 instanceof Object)){
var ex__6659__auto__ = e19144;
var statearr_19145_19158 = state_19124;
(statearr_19145_19158[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19159 = state_19124;
state_19124 = G__19159;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6656__auto__ = function(state_19124){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6656__auto____1.call(this,state_19124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6656__auto____0;
cljs$core$async$take_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6656__auto____1;
return cljs$core$async$take_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19147,out))
})();
var state__6713__auto__ = (function (){var statearr_19146 = f__6712__auto__.call(null);
(statearr_19146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19147);

return statearr_19146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19147,out))
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
if(typeof cljs.core.async.t19167 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19167 = (function (map_LT_,f,ch,meta19168){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19168 = meta19168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19169,meta19168__$1){
var self__ = this;
var _19169__$1 = this;
return (new cljs.core.async.t19167(self__.map_LT_,self__.f,self__.ch,meta19168__$1));
});

cljs.core.async.t19167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19169){
var self__ = this;
var _19169__$1 = this;
return self__.meta19168;
});

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19170 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19170 = (function (map_LT_,f,ch,meta19168,_,fn1,meta19171){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19168 = meta19168;
this._ = _;
this.fn1 = fn1;
this.meta19171 = meta19171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19172,meta19171__$1){
var self__ = this;
var _19172__$1 = this;
return (new cljs.core.async.t19170(self__.map_LT_,self__.f,self__.ch,self__.meta19168,self__._,self__.fn1,meta19171__$1));
});})(___$1))
;

cljs.core.async.t19170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19172){
var self__ = this;
var _19172__$1 = this;
return self__.meta19171;
});})(___$1))
;

cljs.core.async.t19170.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19160_SHARP_){
return f1.call(null,(((p1__19160_SHARP_ == null))?null:self__.f.call(null,p1__19160_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19170.cljs$lang$type = true;

cljs.core.async.t19170.cljs$lang$ctorStr = "cljs.core.async/t19170";

cljs.core.async.t19170.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19170");
});})(___$1))
;

cljs.core.async.__GT_t19170 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t19170(map_LT___$1,f__$1,ch__$1,meta19168__$1,___$2,fn1__$1,meta19171){
return (new cljs.core.async.t19170(map_LT___$1,f__$1,ch__$1,meta19168__$1,___$2,fn1__$1,meta19171));
});})(___$1))
;

}

return (new cljs.core.async.t19170(self__.map_LT_,self__.f,self__.ch,self__.meta19168,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19167.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19167.cljs$lang$type = true;

cljs.core.async.t19167.cljs$lang$ctorStr = "cljs.core.async/t19167";

cljs.core.async.t19167.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19167");
});

cljs.core.async.__GT_t19167 = (function cljs$core$async$map_LT__$___GT_t19167(map_LT___$1,f__$1,ch__$1,meta19168){
return (new cljs.core.async.t19167(map_LT___$1,f__$1,ch__$1,meta19168));
});

}

return (new cljs.core.async.t19167(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t19176 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19176 = (function (map_GT_,f,ch,meta19177){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta19177 = meta19177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19178,meta19177__$1){
var self__ = this;
var _19178__$1 = this;
return (new cljs.core.async.t19176(self__.map_GT_,self__.f,self__.ch,meta19177__$1));
});

cljs.core.async.t19176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19178){
var self__ = this;
var _19178__$1 = this;
return self__.meta19177;
});

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19176.cljs$lang$type = true;

cljs.core.async.t19176.cljs$lang$ctorStr = "cljs.core.async/t19176";

cljs.core.async.t19176.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19176");
});

cljs.core.async.__GT_t19176 = (function cljs$core$async$map_GT__$___GT_t19176(map_GT___$1,f__$1,ch__$1,meta19177){
return (new cljs.core.async.t19176(map_GT___$1,f__$1,ch__$1,meta19177));
});

}

return (new cljs.core.async.t19176(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t19182 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19182 = (function (filter_GT_,p,ch,meta19183){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta19183 = meta19183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t19182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19184,meta19183__$1){
var self__ = this;
var _19184__$1 = this;
return (new cljs.core.async.t19182(self__.filter_GT_,self__.p,self__.ch,meta19183__$1));
});

cljs.core.async.t19182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19184){
var self__ = this;
var _19184__$1 = this;
return self__.meta19183;
});

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19182.cljs$lang$type = true;

cljs.core.async.t19182.cljs$lang$ctorStr = "cljs.core.async/t19182";

cljs.core.async.t19182.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cljs.core.async/t19182");
});

cljs.core.async.__GT_t19182 = (function cljs$core$async$filter_GT__$___GT_t19182(filter_GT___$1,p__$1,ch__$1,meta19183){
return (new cljs.core.async.t19182(filter_GT___$1,p__$1,ch__$1,meta19183));
});

}

return (new cljs.core.async.t19182(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6711__auto___19267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19267,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19267,out){
return (function (state_19246){
var state_val_19247 = (state_19246[(1)]);
if((state_val_19247 === (7))){
var inst_19242 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19248_19268 = state_19246__$1;
(statearr_19248_19268[(2)] = inst_19242);

(statearr_19248_19268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (1))){
var state_19246__$1 = state_19246;
var statearr_19249_19269 = state_19246__$1;
(statearr_19249_19269[(2)] = null);

(statearr_19249_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (4))){
var inst_19228 = (state_19246[(7)]);
var inst_19228__$1 = (state_19246[(2)]);
var inst_19229 = (inst_19228__$1 == null);
var state_19246__$1 = (function (){var statearr_19250 = state_19246;
(statearr_19250[(7)] = inst_19228__$1);

return statearr_19250;
})();
if(cljs.core.truth_(inst_19229)){
var statearr_19251_19270 = state_19246__$1;
(statearr_19251_19270[(1)] = (5));

} else {
var statearr_19252_19271 = state_19246__$1;
(statearr_19252_19271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (6))){
var inst_19228 = (state_19246[(7)]);
var inst_19233 = p.call(null,inst_19228);
var state_19246__$1 = state_19246;
if(cljs.core.truth_(inst_19233)){
var statearr_19253_19272 = state_19246__$1;
(statearr_19253_19272[(1)] = (8));

} else {
var statearr_19254_19273 = state_19246__$1;
(statearr_19254_19273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (3))){
var inst_19244 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19246__$1,inst_19244);
} else {
if((state_val_19247 === (2))){
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19246__$1,(4),ch);
} else {
if((state_val_19247 === (11))){
var inst_19236 = (state_19246[(2)]);
var state_19246__$1 = state_19246;
var statearr_19255_19274 = state_19246__$1;
(statearr_19255_19274[(2)] = inst_19236);

(statearr_19255_19274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (9))){
var state_19246__$1 = state_19246;
var statearr_19256_19275 = state_19246__$1;
(statearr_19256_19275[(2)] = null);

(statearr_19256_19275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (5))){
var inst_19231 = cljs.core.async.close_BANG_.call(null,out);
var state_19246__$1 = state_19246;
var statearr_19257_19276 = state_19246__$1;
(statearr_19257_19276[(2)] = inst_19231);

(statearr_19257_19276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (10))){
var inst_19239 = (state_19246[(2)]);
var state_19246__$1 = (function (){var statearr_19258 = state_19246;
(statearr_19258[(8)] = inst_19239);

return statearr_19258;
})();
var statearr_19259_19277 = state_19246__$1;
(statearr_19259_19277[(2)] = null);

(statearr_19259_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19247 === (8))){
var inst_19228 = (state_19246[(7)]);
var state_19246__$1 = state_19246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19246__$1,(11),out,inst_19228);
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
});})(c__6711__auto___19267,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19267,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6656__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6656__auto____0 = (function (){
var statearr_19263 = [null,null,null,null,null,null,null,null,null];
(statearr_19263[(0)] = cljs$core$async$filter_LT__$_state_machine__6656__auto__);

(statearr_19263[(1)] = (1));

return statearr_19263;
});
var cljs$core$async$filter_LT__$_state_machine__6656__auto____1 = (function (state_19246){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19264){if((e19264 instanceof Object)){
var ex__6659__auto__ = e19264;
var statearr_19265_19278 = state_19246;
(statearr_19265_19278[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19279 = state_19246;
state_19246 = G__19279;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6656__auto__ = function(state_19246){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6656__auto____1.call(this,state_19246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6656__auto____0;
cljs$core$async$filter_LT__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6656__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19267,out))
})();
var state__6713__auto__ = (function (){var statearr_19266 = f__6712__auto__.call(null);
(statearr_19266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19267);

return statearr_19266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19267,out))
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
return (function (state_19445){
var state_val_19446 = (state_19445[(1)]);
if((state_val_19446 === (7))){
var inst_19441 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19447_19488 = state_19445__$1;
(statearr_19447_19488[(2)] = inst_19441);

(statearr_19447_19488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (20))){
var inst_19411 = (state_19445[(7)]);
var inst_19422 = (state_19445[(2)]);
var inst_19423 = cljs.core.next.call(null,inst_19411);
var inst_19397 = inst_19423;
var inst_19398 = null;
var inst_19399 = (0);
var inst_19400 = (0);
var state_19445__$1 = (function (){var statearr_19448 = state_19445;
(statearr_19448[(8)] = inst_19400);

(statearr_19448[(9)] = inst_19422);

(statearr_19448[(10)] = inst_19397);

(statearr_19448[(11)] = inst_19398);

(statearr_19448[(12)] = inst_19399);

return statearr_19448;
})();
var statearr_19449_19489 = state_19445__$1;
(statearr_19449_19489[(2)] = null);

(statearr_19449_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (1))){
var state_19445__$1 = state_19445;
var statearr_19450_19490 = state_19445__$1;
(statearr_19450_19490[(2)] = null);

(statearr_19450_19490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (4))){
var inst_19386 = (state_19445[(13)]);
var inst_19386__$1 = (state_19445[(2)]);
var inst_19387 = (inst_19386__$1 == null);
var state_19445__$1 = (function (){var statearr_19451 = state_19445;
(statearr_19451[(13)] = inst_19386__$1);

return statearr_19451;
})();
if(cljs.core.truth_(inst_19387)){
var statearr_19452_19491 = state_19445__$1;
(statearr_19452_19491[(1)] = (5));

} else {
var statearr_19453_19492 = state_19445__$1;
(statearr_19453_19492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (15))){
var state_19445__$1 = state_19445;
var statearr_19457_19493 = state_19445__$1;
(statearr_19457_19493[(2)] = null);

(statearr_19457_19493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (21))){
var state_19445__$1 = state_19445;
var statearr_19458_19494 = state_19445__$1;
(statearr_19458_19494[(2)] = null);

(statearr_19458_19494[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (13))){
var inst_19400 = (state_19445[(8)]);
var inst_19397 = (state_19445[(10)]);
var inst_19398 = (state_19445[(11)]);
var inst_19399 = (state_19445[(12)]);
var inst_19407 = (state_19445[(2)]);
var inst_19408 = (inst_19400 + (1));
var tmp19454 = inst_19397;
var tmp19455 = inst_19398;
var tmp19456 = inst_19399;
var inst_19397__$1 = tmp19454;
var inst_19398__$1 = tmp19455;
var inst_19399__$1 = tmp19456;
var inst_19400__$1 = inst_19408;
var state_19445__$1 = (function (){var statearr_19459 = state_19445;
(statearr_19459[(8)] = inst_19400__$1);

(statearr_19459[(10)] = inst_19397__$1);

(statearr_19459[(11)] = inst_19398__$1);

(statearr_19459[(12)] = inst_19399__$1);

(statearr_19459[(14)] = inst_19407);

return statearr_19459;
})();
var statearr_19460_19495 = state_19445__$1;
(statearr_19460_19495[(2)] = null);

(statearr_19460_19495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (22))){
var state_19445__$1 = state_19445;
var statearr_19461_19496 = state_19445__$1;
(statearr_19461_19496[(2)] = null);

(statearr_19461_19496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (6))){
var inst_19386 = (state_19445[(13)]);
var inst_19395 = f.call(null,inst_19386);
var inst_19396 = cljs.core.seq.call(null,inst_19395);
var inst_19397 = inst_19396;
var inst_19398 = null;
var inst_19399 = (0);
var inst_19400 = (0);
var state_19445__$1 = (function (){var statearr_19462 = state_19445;
(statearr_19462[(8)] = inst_19400);

(statearr_19462[(10)] = inst_19397);

(statearr_19462[(11)] = inst_19398);

(statearr_19462[(12)] = inst_19399);

return statearr_19462;
})();
var statearr_19463_19497 = state_19445__$1;
(statearr_19463_19497[(2)] = null);

(statearr_19463_19497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (17))){
var inst_19411 = (state_19445[(7)]);
var inst_19415 = cljs.core.chunk_first.call(null,inst_19411);
var inst_19416 = cljs.core.chunk_rest.call(null,inst_19411);
var inst_19417 = cljs.core.count.call(null,inst_19415);
var inst_19397 = inst_19416;
var inst_19398 = inst_19415;
var inst_19399 = inst_19417;
var inst_19400 = (0);
var state_19445__$1 = (function (){var statearr_19464 = state_19445;
(statearr_19464[(8)] = inst_19400);

(statearr_19464[(10)] = inst_19397);

(statearr_19464[(11)] = inst_19398);

(statearr_19464[(12)] = inst_19399);

return statearr_19464;
})();
var statearr_19465_19498 = state_19445__$1;
(statearr_19465_19498[(2)] = null);

(statearr_19465_19498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (3))){
var inst_19443 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19445__$1,inst_19443);
} else {
if((state_val_19446 === (12))){
var inst_19431 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19466_19499 = state_19445__$1;
(statearr_19466_19499[(2)] = inst_19431);

(statearr_19466_19499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (2))){
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19445__$1,(4),in$);
} else {
if((state_val_19446 === (23))){
var inst_19439 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19467_19500 = state_19445__$1;
(statearr_19467_19500[(2)] = inst_19439);

(statearr_19467_19500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (19))){
var inst_19426 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19468_19501 = state_19445__$1;
(statearr_19468_19501[(2)] = inst_19426);

(statearr_19468_19501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (11))){
var inst_19397 = (state_19445[(10)]);
var inst_19411 = (state_19445[(7)]);
var inst_19411__$1 = cljs.core.seq.call(null,inst_19397);
var state_19445__$1 = (function (){var statearr_19469 = state_19445;
(statearr_19469[(7)] = inst_19411__$1);

return statearr_19469;
})();
if(inst_19411__$1){
var statearr_19470_19502 = state_19445__$1;
(statearr_19470_19502[(1)] = (14));

} else {
var statearr_19471_19503 = state_19445__$1;
(statearr_19471_19503[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (9))){
var inst_19433 = (state_19445[(2)]);
var inst_19434 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19445__$1 = (function (){var statearr_19472 = state_19445;
(statearr_19472[(15)] = inst_19433);

return statearr_19472;
})();
if(cljs.core.truth_(inst_19434)){
var statearr_19473_19504 = state_19445__$1;
(statearr_19473_19504[(1)] = (21));

} else {
var statearr_19474_19505 = state_19445__$1;
(statearr_19474_19505[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (5))){
var inst_19389 = cljs.core.async.close_BANG_.call(null,out);
var state_19445__$1 = state_19445;
var statearr_19475_19506 = state_19445__$1;
(statearr_19475_19506[(2)] = inst_19389);

(statearr_19475_19506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (14))){
var inst_19411 = (state_19445[(7)]);
var inst_19413 = cljs.core.chunked_seq_QMARK_.call(null,inst_19411);
var state_19445__$1 = state_19445;
if(inst_19413){
var statearr_19476_19507 = state_19445__$1;
(statearr_19476_19507[(1)] = (17));

} else {
var statearr_19477_19508 = state_19445__$1;
(statearr_19477_19508[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (16))){
var inst_19429 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19478_19509 = state_19445__$1;
(statearr_19478_19509[(2)] = inst_19429);

(statearr_19478_19509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (10))){
var inst_19400 = (state_19445[(8)]);
var inst_19398 = (state_19445[(11)]);
var inst_19405 = cljs.core._nth.call(null,inst_19398,inst_19400);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19445__$1,(13),out,inst_19405);
} else {
if((state_val_19446 === (18))){
var inst_19411 = (state_19445[(7)]);
var inst_19420 = cljs.core.first.call(null,inst_19411);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19445__$1,(20),out,inst_19420);
} else {
if((state_val_19446 === (8))){
var inst_19400 = (state_19445[(8)]);
var inst_19399 = (state_19445[(12)]);
var inst_19402 = (inst_19400 < inst_19399);
var inst_19403 = inst_19402;
var state_19445__$1 = state_19445;
if(cljs.core.truth_(inst_19403)){
var statearr_19479_19510 = state_19445__$1;
(statearr_19479_19510[(1)] = (10));

} else {
var statearr_19480_19511 = state_19445__$1;
(statearr_19480_19511[(1)] = (11));

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
var statearr_19484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19484[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__);

(statearr_19484[(1)] = (1));

return statearr_19484;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1 = (function (state_19445){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19485){if((e19485 instanceof Object)){
var ex__6659__auto__ = e19485;
var statearr_19486_19512 = state_19445;
(statearr_19486_19512[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19513 = state_19445;
state_19445 = G__19513;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__ = function(state_19445){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1.call(this,state_19445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6656__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto__))
})();
var state__6713__auto__ = (function (){var statearr_19487 = f__6712__auto__.call(null);
(statearr_19487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto__);

return statearr_19487;
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
var c__6711__auto___19610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19610,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19610,out){
return (function (state_19585){
var state_val_19586 = (state_19585[(1)]);
if((state_val_19586 === (7))){
var inst_19580 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19587_19611 = state_19585__$1;
(statearr_19587_19611[(2)] = inst_19580);

(statearr_19587_19611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (1))){
var inst_19562 = null;
var state_19585__$1 = (function (){var statearr_19588 = state_19585;
(statearr_19588[(7)] = inst_19562);

return statearr_19588;
})();
var statearr_19589_19612 = state_19585__$1;
(statearr_19589_19612[(2)] = null);

(statearr_19589_19612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (4))){
var inst_19565 = (state_19585[(8)]);
var inst_19565__$1 = (state_19585[(2)]);
var inst_19566 = (inst_19565__$1 == null);
var inst_19567 = cljs.core.not.call(null,inst_19566);
var state_19585__$1 = (function (){var statearr_19590 = state_19585;
(statearr_19590[(8)] = inst_19565__$1);

return statearr_19590;
})();
if(inst_19567){
var statearr_19591_19613 = state_19585__$1;
(statearr_19591_19613[(1)] = (5));

} else {
var statearr_19592_19614 = state_19585__$1;
(statearr_19592_19614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (6))){
var state_19585__$1 = state_19585;
var statearr_19593_19615 = state_19585__$1;
(statearr_19593_19615[(2)] = null);

(statearr_19593_19615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (3))){
var inst_19582 = (state_19585[(2)]);
var inst_19583 = cljs.core.async.close_BANG_.call(null,out);
var state_19585__$1 = (function (){var statearr_19594 = state_19585;
(statearr_19594[(9)] = inst_19582);

return statearr_19594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19585__$1,inst_19583);
} else {
if((state_val_19586 === (2))){
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19585__$1,(4),ch);
} else {
if((state_val_19586 === (11))){
var inst_19565 = (state_19585[(8)]);
var inst_19574 = (state_19585[(2)]);
var inst_19562 = inst_19565;
var state_19585__$1 = (function (){var statearr_19595 = state_19585;
(statearr_19595[(10)] = inst_19574);

(statearr_19595[(7)] = inst_19562);

return statearr_19595;
})();
var statearr_19596_19616 = state_19585__$1;
(statearr_19596_19616[(2)] = null);

(statearr_19596_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (9))){
var inst_19565 = (state_19585[(8)]);
var state_19585__$1 = state_19585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19585__$1,(11),out,inst_19565);
} else {
if((state_val_19586 === (5))){
var inst_19565 = (state_19585[(8)]);
var inst_19562 = (state_19585[(7)]);
var inst_19569 = cljs.core._EQ_.call(null,inst_19565,inst_19562);
var state_19585__$1 = state_19585;
if(inst_19569){
var statearr_19598_19617 = state_19585__$1;
(statearr_19598_19617[(1)] = (8));

} else {
var statearr_19599_19618 = state_19585__$1;
(statearr_19599_19618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (10))){
var inst_19577 = (state_19585[(2)]);
var state_19585__$1 = state_19585;
var statearr_19600_19619 = state_19585__$1;
(statearr_19600_19619[(2)] = inst_19577);

(statearr_19600_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19586 === (8))){
var inst_19562 = (state_19585[(7)]);
var tmp19597 = inst_19562;
var inst_19562__$1 = tmp19597;
var state_19585__$1 = (function (){var statearr_19601 = state_19585;
(statearr_19601[(7)] = inst_19562__$1);

return statearr_19601;
})();
var statearr_19602_19620 = state_19585__$1;
(statearr_19602_19620[(2)] = null);

(statearr_19602_19620[(1)] = (2));


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
});})(c__6711__auto___19610,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19610,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6656__auto__ = null;
var cljs$core$async$unique_$_state_machine__6656__auto____0 = (function (){
var statearr_19606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19606[(0)] = cljs$core$async$unique_$_state_machine__6656__auto__);

(statearr_19606[(1)] = (1));

return statearr_19606;
});
var cljs$core$async$unique_$_state_machine__6656__auto____1 = (function (state_19585){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19607){if((e19607 instanceof Object)){
var ex__6659__auto__ = e19607;
var statearr_19608_19621 = state_19585;
(statearr_19608_19621[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19622 = state_19585;
state_19585 = G__19622;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6656__auto__ = function(state_19585){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6656__auto____1.call(this,state_19585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6656__auto____0;
cljs$core$async$unique_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6656__auto____1;
return cljs$core$async$unique_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19610,out))
})();
var state__6713__auto__ = (function (){var statearr_19609 = f__6712__auto__.call(null);
(statearr_19609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19610);

return statearr_19609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19610,out))
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
var c__6711__auto___19757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19757,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19757,out){
return (function (state_19727){
var state_val_19728 = (state_19727[(1)]);
if((state_val_19728 === (7))){
var inst_19723 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19729_19758 = state_19727__$1;
(statearr_19729_19758[(2)] = inst_19723);

(statearr_19729_19758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (1))){
var inst_19690 = (new Array(n));
var inst_19691 = inst_19690;
var inst_19692 = (0);
var state_19727__$1 = (function (){var statearr_19730 = state_19727;
(statearr_19730[(7)] = inst_19692);

(statearr_19730[(8)] = inst_19691);

return statearr_19730;
})();
var statearr_19731_19759 = state_19727__$1;
(statearr_19731_19759[(2)] = null);

(statearr_19731_19759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (4))){
var inst_19695 = (state_19727[(9)]);
var inst_19695__$1 = (state_19727[(2)]);
var inst_19696 = (inst_19695__$1 == null);
var inst_19697 = cljs.core.not.call(null,inst_19696);
var state_19727__$1 = (function (){var statearr_19732 = state_19727;
(statearr_19732[(9)] = inst_19695__$1);

return statearr_19732;
})();
if(inst_19697){
var statearr_19733_19760 = state_19727__$1;
(statearr_19733_19760[(1)] = (5));

} else {
var statearr_19734_19761 = state_19727__$1;
(statearr_19734_19761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (15))){
var inst_19717 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19735_19762 = state_19727__$1;
(statearr_19735_19762[(2)] = inst_19717);

(statearr_19735_19762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (13))){
var state_19727__$1 = state_19727;
var statearr_19736_19763 = state_19727__$1;
(statearr_19736_19763[(2)] = null);

(statearr_19736_19763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (6))){
var inst_19692 = (state_19727[(7)]);
var inst_19713 = (inst_19692 > (0));
var state_19727__$1 = state_19727;
if(cljs.core.truth_(inst_19713)){
var statearr_19737_19764 = state_19727__$1;
(statearr_19737_19764[(1)] = (12));

} else {
var statearr_19738_19765 = state_19727__$1;
(statearr_19738_19765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (3))){
var inst_19725 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19727__$1,inst_19725);
} else {
if((state_val_19728 === (12))){
var inst_19691 = (state_19727[(8)]);
var inst_19715 = cljs.core.vec.call(null,inst_19691);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19727__$1,(15),out,inst_19715);
} else {
if((state_val_19728 === (2))){
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19727__$1,(4),ch);
} else {
if((state_val_19728 === (11))){
var inst_19707 = (state_19727[(2)]);
var inst_19708 = (new Array(n));
var inst_19691 = inst_19708;
var inst_19692 = (0);
var state_19727__$1 = (function (){var statearr_19739 = state_19727;
(statearr_19739[(7)] = inst_19692);

(statearr_19739[(8)] = inst_19691);

(statearr_19739[(10)] = inst_19707);

return statearr_19739;
})();
var statearr_19740_19766 = state_19727__$1;
(statearr_19740_19766[(2)] = null);

(statearr_19740_19766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (9))){
var inst_19691 = (state_19727[(8)]);
var inst_19705 = cljs.core.vec.call(null,inst_19691);
var state_19727__$1 = state_19727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19727__$1,(11),out,inst_19705);
} else {
if((state_val_19728 === (5))){
var inst_19692 = (state_19727[(7)]);
var inst_19700 = (state_19727[(11)]);
var inst_19695 = (state_19727[(9)]);
var inst_19691 = (state_19727[(8)]);
var inst_19699 = (inst_19691[inst_19692] = inst_19695);
var inst_19700__$1 = (inst_19692 + (1));
var inst_19701 = (inst_19700__$1 < n);
var state_19727__$1 = (function (){var statearr_19741 = state_19727;
(statearr_19741[(11)] = inst_19700__$1);

(statearr_19741[(12)] = inst_19699);

return statearr_19741;
})();
if(cljs.core.truth_(inst_19701)){
var statearr_19742_19767 = state_19727__$1;
(statearr_19742_19767[(1)] = (8));

} else {
var statearr_19743_19768 = state_19727__$1;
(statearr_19743_19768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (14))){
var inst_19720 = (state_19727[(2)]);
var inst_19721 = cljs.core.async.close_BANG_.call(null,out);
var state_19727__$1 = (function (){var statearr_19745 = state_19727;
(statearr_19745[(13)] = inst_19720);

return statearr_19745;
})();
var statearr_19746_19769 = state_19727__$1;
(statearr_19746_19769[(2)] = inst_19721);

(statearr_19746_19769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (10))){
var inst_19711 = (state_19727[(2)]);
var state_19727__$1 = state_19727;
var statearr_19747_19770 = state_19727__$1;
(statearr_19747_19770[(2)] = inst_19711);

(statearr_19747_19770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19728 === (8))){
var inst_19700 = (state_19727[(11)]);
var inst_19691 = (state_19727[(8)]);
var tmp19744 = inst_19691;
var inst_19691__$1 = tmp19744;
var inst_19692 = inst_19700;
var state_19727__$1 = (function (){var statearr_19748 = state_19727;
(statearr_19748[(7)] = inst_19692);

(statearr_19748[(8)] = inst_19691__$1);

return statearr_19748;
})();
var statearr_19749_19771 = state_19727__$1;
(statearr_19749_19771[(2)] = null);

(statearr_19749_19771[(1)] = (2));


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
});})(c__6711__auto___19757,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19757,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6656__auto__ = null;
var cljs$core$async$partition_$_state_machine__6656__auto____0 = (function (){
var statearr_19753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19753[(0)] = cljs$core$async$partition_$_state_machine__6656__auto__);

(statearr_19753[(1)] = (1));

return statearr_19753;
});
var cljs$core$async$partition_$_state_machine__6656__auto____1 = (function (state_19727){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19754){if((e19754 instanceof Object)){
var ex__6659__auto__ = e19754;
var statearr_19755_19772 = state_19727;
(statearr_19755_19772[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19773 = state_19727;
state_19727 = G__19773;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6656__auto__ = function(state_19727){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6656__auto____1.call(this,state_19727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6656__auto____0;
cljs$core$async$partition_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6656__auto____1;
return cljs$core$async$partition_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19757,out))
})();
var state__6713__auto__ = (function (){var statearr_19756 = f__6712__auto__.call(null);
(statearr_19756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19757);

return statearr_19756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19757,out))
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
var c__6711__auto___19916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6711__auto___19916,out){
return (function (){
var f__6712__auto__ = (function (){var switch__6655__auto__ = ((function (c__6711__auto___19916,out){
return (function (state_19886){
var state_val_19887 = (state_19886[(1)]);
if((state_val_19887 === (7))){
var inst_19882 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19888_19917 = state_19886__$1;
(statearr_19888_19917[(2)] = inst_19882);

(statearr_19888_19917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (1))){
var inst_19845 = [];
var inst_19846 = inst_19845;
var inst_19847 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19886__$1 = (function (){var statearr_19889 = state_19886;
(statearr_19889[(7)] = inst_19846);

(statearr_19889[(8)] = inst_19847);

return statearr_19889;
})();
var statearr_19890_19918 = state_19886__$1;
(statearr_19890_19918[(2)] = null);

(statearr_19890_19918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (4))){
var inst_19850 = (state_19886[(9)]);
var inst_19850__$1 = (state_19886[(2)]);
var inst_19851 = (inst_19850__$1 == null);
var inst_19852 = cljs.core.not.call(null,inst_19851);
var state_19886__$1 = (function (){var statearr_19891 = state_19886;
(statearr_19891[(9)] = inst_19850__$1);

return statearr_19891;
})();
if(inst_19852){
var statearr_19892_19919 = state_19886__$1;
(statearr_19892_19919[(1)] = (5));

} else {
var statearr_19893_19920 = state_19886__$1;
(statearr_19893_19920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (15))){
var inst_19876 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19894_19921 = state_19886__$1;
(statearr_19894_19921[(2)] = inst_19876);

(statearr_19894_19921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (13))){
var state_19886__$1 = state_19886;
var statearr_19895_19922 = state_19886__$1;
(statearr_19895_19922[(2)] = null);

(statearr_19895_19922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (6))){
var inst_19846 = (state_19886[(7)]);
var inst_19871 = inst_19846.length;
var inst_19872 = (inst_19871 > (0));
var state_19886__$1 = state_19886;
if(cljs.core.truth_(inst_19872)){
var statearr_19896_19923 = state_19886__$1;
(statearr_19896_19923[(1)] = (12));

} else {
var statearr_19897_19924 = state_19886__$1;
(statearr_19897_19924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (3))){
var inst_19884 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19886__$1,inst_19884);
} else {
if((state_val_19887 === (12))){
var inst_19846 = (state_19886[(7)]);
var inst_19874 = cljs.core.vec.call(null,inst_19846);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19886__$1,(15),out,inst_19874);
} else {
if((state_val_19887 === (2))){
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19886__$1,(4),ch);
} else {
if((state_val_19887 === (11))){
var inst_19850 = (state_19886[(9)]);
var inst_19854 = (state_19886[(10)]);
var inst_19864 = (state_19886[(2)]);
var inst_19865 = [];
var inst_19866 = inst_19865.push(inst_19850);
var inst_19846 = inst_19865;
var inst_19847 = inst_19854;
var state_19886__$1 = (function (){var statearr_19898 = state_19886;
(statearr_19898[(7)] = inst_19846);

(statearr_19898[(11)] = inst_19864);

(statearr_19898[(8)] = inst_19847);

(statearr_19898[(12)] = inst_19866);

return statearr_19898;
})();
var statearr_19899_19925 = state_19886__$1;
(statearr_19899_19925[(2)] = null);

(statearr_19899_19925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (9))){
var inst_19846 = (state_19886[(7)]);
var inst_19862 = cljs.core.vec.call(null,inst_19846);
var state_19886__$1 = state_19886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19886__$1,(11),out,inst_19862);
} else {
if((state_val_19887 === (5))){
var inst_19850 = (state_19886[(9)]);
var inst_19854 = (state_19886[(10)]);
var inst_19847 = (state_19886[(8)]);
var inst_19854__$1 = f.call(null,inst_19850);
var inst_19855 = cljs.core._EQ_.call(null,inst_19854__$1,inst_19847);
var inst_19856 = cljs.core.keyword_identical_QMARK_.call(null,inst_19847,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19857 = (inst_19855) || (inst_19856);
var state_19886__$1 = (function (){var statearr_19900 = state_19886;
(statearr_19900[(10)] = inst_19854__$1);

return statearr_19900;
})();
if(cljs.core.truth_(inst_19857)){
var statearr_19901_19926 = state_19886__$1;
(statearr_19901_19926[(1)] = (8));

} else {
var statearr_19902_19927 = state_19886__$1;
(statearr_19902_19927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (14))){
var inst_19879 = (state_19886[(2)]);
var inst_19880 = cljs.core.async.close_BANG_.call(null,out);
var state_19886__$1 = (function (){var statearr_19904 = state_19886;
(statearr_19904[(13)] = inst_19879);

return statearr_19904;
})();
var statearr_19905_19928 = state_19886__$1;
(statearr_19905_19928[(2)] = inst_19880);

(statearr_19905_19928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (10))){
var inst_19869 = (state_19886[(2)]);
var state_19886__$1 = state_19886;
var statearr_19906_19929 = state_19886__$1;
(statearr_19906_19929[(2)] = inst_19869);

(statearr_19906_19929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19887 === (8))){
var inst_19850 = (state_19886[(9)]);
var inst_19846 = (state_19886[(7)]);
var inst_19854 = (state_19886[(10)]);
var inst_19859 = inst_19846.push(inst_19850);
var tmp19903 = inst_19846;
var inst_19846__$1 = tmp19903;
var inst_19847 = inst_19854;
var state_19886__$1 = (function (){var statearr_19907 = state_19886;
(statearr_19907[(7)] = inst_19846__$1);

(statearr_19907[(14)] = inst_19859);

(statearr_19907[(8)] = inst_19847);

return statearr_19907;
})();
var statearr_19908_19930 = state_19886__$1;
(statearr_19908_19930[(2)] = null);

(statearr_19908_19930[(1)] = (2));


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
});})(c__6711__auto___19916,out))
;
return ((function (switch__6655__auto__,c__6711__auto___19916,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6656__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6656__auto____0 = (function (){
var statearr_19912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19912[(0)] = cljs$core$async$partition_by_$_state_machine__6656__auto__);

(statearr_19912[(1)] = (1));

return statearr_19912;
});
var cljs$core$async$partition_by_$_state_machine__6656__auto____1 = (function (state_19886){
while(true){
var ret_value__6657__auto__ = (function (){try{while(true){
var result__6658__auto__ = switch__6655__auto__.call(null,state_19886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6658__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6658__auto__;
}
break;
}
}catch (e19913){if((e19913 instanceof Object)){
var ex__6659__auto__ = e19913;
var statearr_19914_19931 = state_19886;
(statearr_19914_19931[(5)] = ex__6659__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6657__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19932 = state_19886;
state_19886 = G__19932;
continue;
} else {
return ret_value__6657__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6656__auto__ = function(state_19886){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6656__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6656__auto____1.call(this,state_19886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6656__auto____0;
cljs$core$async$partition_by_$_state_machine__6656__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6656__auto____1;
return cljs$core$async$partition_by_$_state_machine__6656__auto__;
})()
;})(switch__6655__auto__,c__6711__auto___19916,out))
})();
var state__6713__auto__ = (function (){var statearr_19915 = f__6712__auto__.call(null);
(statearr_19915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6711__auto___19916);

return statearr_19915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6713__auto__);
});})(c__6711__auto___19916,out))
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
