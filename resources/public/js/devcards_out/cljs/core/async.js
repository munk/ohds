// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23901 = [];
var len__20629__auto___23907 = arguments.length;
var i__20630__auto___23908 = (0);
while(true){
if((i__20630__auto___23908 < len__20629__auto___23907)){
args23901.push((arguments[i__20630__auto___23908]));

var G__23909 = (i__20630__auto___23908 + (1));
i__20630__auto___23908 = G__23909;
continue;
} else {
}
break;
}

var G__23903 = args23901.length;
switch (G__23903) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23901.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23904 = (function (f,blockable,meta23905){
this.f = f;
this.blockable = blockable;
this.meta23905 = meta23905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23906,meta23905__$1){
var self__ = this;
var _23906__$1 = this;
return (new cljs.core.async.t_cljs$core$async23904(self__.f,self__.blockable,meta23905__$1));
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23906){
var self__ = this;
var _23906__$1 = this;
return self__.meta23905;
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23904.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23905","meta23905",64101953,null)], null);
});

cljs.core.async.t_cljs$core$async23904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23904";

cljs.core.async.t_cljs$core$async23904.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async23904");
});

cljs.core.async.__GT_t_cljs$core$async23904 = (function cljs$core$async$__GT_t_cljs$core$async23904(f__$1,blockable__$1,meta23905){
return (new cljs.core.async.t_cljs$core$async23904(f__$1,blockable__$1,meta23905));
});

}

return (new cljs.core.async.t_cljs$core$async23904(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23913 = [];
var len__20629__auto___23916 = arguments.length;
var i__20630__auto___23917 = (0);
while(true){
if((i__20630__auto___23917 < len__20629__auto___23916)){
args23913.push((arguments[i__20630__auto___23917]));

var G__23918 = (i__20630__auto___23917 + (1));
i__20630__auto___23917 = G__23918;
continue;
} else {
}
break;
}

var G__23915 = args23913.length;
switch (G__23915) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23913.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
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

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23920 = [];
var len__20629__auto___23923 = arguments.length;
var i__20630__auto___23924 = (0);
while(true){
if((i__20630__auto___23924 < len__20629__auto___23923)){
args23920.push((arguments[i__20630__auto___23924]));

var G__23925 = (i__20630__auto___23924 + (1));
i__20630__auto___23924 = G__23925;
continue;
} else {
}
break;
}

var G__23922 = args23920.length;
switch (G__23922) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23920.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23927 = [];
var len__20629__auto___23930 = arguments.length;
var i__20630__auto___23931 = (0);
while(true){
if((i__20630__auto___23931 < len__20629__auto___23930)){
args23927.push((arguments[i__20630__auto___23931]));

var G__23932 = (i__20630__auto___23931 + (1));
i__20630__auto___23931 = G__23932;
continue;
} else {
}
break;
}

var G__23929 = args23927.length;
switch (G__23929) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23927.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23934 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23934);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23934,ret){
return (function (){
return fn1.call(null,val_23934);
});})(val_23934,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23935 = [];
var len__20629__auto___23938 = arguments.length;
var i__20630__auto___23939 = (0);
while(true){
if((i__20630__auto___23939 < len__20629__auto___23938)){
args23935.push((arguments[i__20630__auto___23939]));

var G__23940 = (i__20630__auto___23939 + (1));
i__20630__auto___23939 = G__23940;
continue;
} else {
}
break;
}

var G__23937 = args23935.length;
switch (G__23937) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23935.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
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

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20474__auto___23942 = n;
var x_23943 = (0);
while(true){
if((x_23943 < n__20474__auto___23942)){
(a[x_23943] = (0));

var G__23944 = (x_23943 + (1));
x_23943 = G__23944;
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

var G__23945 = (i + (1));
i = G__23945;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23949 = (function (alt_flag,flag,meta23950){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23950 = meta23950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23951,meta23950__$1){
var self__ = this;
var _23951__$1 = this;
return (new cljs.core.async.t_cljs$core$async23949(self__.alt_flag,self__.flag,meta23950__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23951){
var self__ = this;
var _23951__$1 = this;
return self__.meta23950;
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23950","meta23950",2131061905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23949";

cljs.core.async.t_cljs$core$async23949.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async23949");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23949 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23949(alt_flag__$1,flag__$1,meta23950){
return (new cljs.core.async.t_cljs$core$async23949(alt_flag__$1,flag__$1,meta23950));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23949(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23955 = (function (alt_handler,flag,cb,meta23956){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23956 = meta23956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23957,meta23956__$1){
var self__ = this;
var _23957__$1 = this;
return (new cljs.core.async.t_cljs$core$async23955(self__.alt_handler,self__.flag,self__.cb,meta23956__$1));
});

cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23957){
var self__ = this;
var _23957__$1 = this;
return self__.meta23956;
});

cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23956","meta23956",1413128971,null)], null);
});

cljs.core.async.t_cljs$core$async23955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23955";

cljs.core.async.t_cljs$core$async23955.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async23955");
});

cljs.core.async.__GT_t_cljs$core$async23955 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23955(alt_handler__$1,flag__$1,cb__$1,meta23956){
return (new cljs.core.async.t_cljs$core$async23955(alt_handler__$1,flag__$1,cb__$1,meta23956));
});

}

return (new cljs.core.async.t_cljs$core$async23955(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23958_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23958_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23959_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23959_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19570__auto__ = wport;
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23960 = (i + (1));
i = G__23960;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19570__auto__ = ret;
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19558__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19558__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19558__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20636__auto__ = [];
var len__20629__auto___23966 = arguments.length;
var i__20630__auto___23967 = (0);
while(true){
if((i__20630__auto___23967 < len__20629__auto___23966)){
args__20636__auto__.push((arguments[i__20630__auto___23967]));

var G__23968 = (i__20630__auto___23967 + (1));
i__20630__auto___23967 = G__23968;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((1) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20637__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23963){
var map__23964 = p__23963;
var map__23964__$1 = ((((!((map__23964 == null)))?((((map__23964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23964):map__23964);
var opts = map__23964__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23961){
var G__23962 = cljs.core.first.call(null,seq23961);
var seq23961__$1 = cljs.core.next.call(null,seq23961);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23962,seq23961__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23969 = [];
var len__20629__auto___24019 = arguments.length;
var i__20630__auto___24020 = (0);
while(true){
if((i__20630__auto___24020 < len__20629__auto___24019)){
args23969.push((arguments[i__20630__auto___24020]));

var G__24021 = (i__20630__auto___24020 + (1));
i__20630__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var G__23971 = args23969.length;
switch (G__23971) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23969.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23856__auto___24023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___24023){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___24023){
return (function (state_23995){
var state_val_23996 = (state_23995[(1)]);
if((state_val_23996 === (7))){
var inst_23991 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_23997_24024 = state_23995__$1;
(statearr_23997_24024[(2)] = inst_23991);

(statearr_23997_24024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (1))){
var state_23995__$1 = state_23995;
var statearr_23998_24025 = state_23995__$1;
(statearr_23998_24025[(2)] = null);

(statearr_23998_24025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (4))){
var inst_23974 = (state_23995[(7)]);
var inst_23974__$1 = (state_23995[(2)]);
var inst_23975 = (inst_23974__$1 == null);
var state_23995__$1 = (function (){var statearr_23999 = state_23995;
(statearr_23999[(7)] = inst_23974__$1);

return statearr_23999;
})();
if(cljs.core.truth_(inst_23975)){
var statearr_24000_24026 = state_23995__$1;
(statearr_24000_24026[(1)] = (5));

} else {
var statearr_24001_24027 = state_23995__$1;
(statearr_24001_24027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (13))){
var state_23995__$1 = state_23995;
var statearr_24002_24028 = state_23995__$1;
(statearr_24002_24028[(2)] = null);

(statearr_24002_24028[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (6))){
var inst_23974 = (state_23995[(7)]);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23995__$1,(11),to,inst_23974);
} else {
if((state_val_23996 === (3))){
var inst_23993 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23995__$1,inst_23993);
} else {
if((state_val_23996 === (12))){
var state_23995__$1 = state_23995;
var statearr_24003_24029 = state_23995__$1;
(statearr_24003_24029[(2)] = null);

(statearr_24003_24029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (2))){
var state_23995__$1 = state_23995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23995__$1,(4),from);
} else {
if((state_val_23996 === (11))){
var inst_23984 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
if(cljs.core.truth_(inst_23984)){
var statearr_24004_24030 = state_23995__$1;
(statearr_24004_24030[(1)] = (12));

} else {
var statearr_24005_24031 = state_23995__$1;
(statearr_24005_24031[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (9))){
var state_23995__$1 = state_23995;
var statearr_24006_24032 = state_23995__$1;
(statearr_24006_24032[(2)] = null);

(statearr_24006_24032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (5))){
var state_23995__$1 = state_23995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24007_24033 = state_23995__$1;
(statearr_24007_24033[(1)] = (8));

} else {
var statearr_24008_24034 = state_23995__$1;
(statearr_24008_24034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (14))){
var inst_23989 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24009_24035 = state_23995__$1;
(statearr_24009_24035[(2)] = inst_23989);

(statearr_24009_24035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (10))){
var inst_23981 = (state_23995[(2)]);
var state_23995__$1 = state_23995;
var statearr_24010_24036 = state_23995__$1;
(statearr_24010_24036[(2)] = inst_23981);

(statearr_24010_24036[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23996 === (8))){
var inst_23978 = cljs.core.async.close_BANG_.call(null,to);
var state_23995__$1 = state_23995;
var statearr_24011_24037 = state_23995__$1;
(statearr_24011_24037[(2)] = inst_23978);

(statearr_24011_24037[(1)] = (10));


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
});})(c__23856__auto___24023))
;
return ((function (switch__23744__auto__,c__23856__auto___24023){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_24015 = [null,null,null,null,null,null,null,null];
(statearr_24015[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_24015[(1)] = (1));

return statearr_24015;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_23995){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_23995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24016){if((e24016 instanceof Object)){
var ex__23748__auto__ = e24016;
var statearr_24017_24038 = state_23995;
(statearr_24017_24038[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24039 = state_23995;
state_23995 = G__24039;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_23995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_23995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___24023))
})();
var state__23858__auto__ = (function (){var statearr_24018 = f__23857__auto__.call(null);
(statearr_24018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24023);

return statearr_24018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___24023))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24223){
var vec__24224 = p__24223;
var v = cljs.core.nth.call(null,vec__24224,(0),null);
var p = cljs.core.nth.call(null,vec__24224,(1),null);
var job = vec__24224;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23856__auto___24406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results){
return (function (state_24229){
var state_val_24230 = (state_24229[(1)]);
if((state_val_24230 === (1))){
var state_24229__$1 = state_24229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24229__$1,(2),res,v);
} else {
if((state_val_24230 === (2))){
var inst_24226 = (state_24229[(2)]);
var inst_24227 = cljs.core.async.close_BANG_.call(null,res);
var state_24229__$1 = (function (){var statearr_24231 = state_24229;
(statearr_24231[(7)] = inst_24226);

return statearr_24231;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24229__$1,inst_24227);
} else {
return null;
}
}
});})(c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results))
;
return ((function (switch__23744__auto__,c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_24235 = [null,null,null,null,null,null,null,null];
(statearr_24235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__);

(statearr_24235[(1)] = (1));

return statearr_24235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1 = (function (state_24229){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24236){if((e24236 instanceof Object)){
var ex__23748__auto__ = e24236;
var statearr_24237_24407 = state_24229;
(statearr_24237_24407[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24408 = state_24229;
state_24229 = G__24408;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = function(state_24229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1.call(this,state_24229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results))
})();
var state__23858__auto__ = (function (){var statearr_24238 = f__23857__auto__.call(null);
(statearr_24238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24406);

return statearr_24238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___24406,res,vec__24224,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24239){
var vec__24240 = p__24239;
var v = cljs.core.nth.call(null,vec__24240,(0),null);
var p = cljs.core.nth.call(null,vec__24240,(1),null);
var job = vec__24240;
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
var n__20474__auto___24409 = n;
var __24410 = (0);
while(true){
if((__24410 < n__20474__auto___24409)){
var G__24241_24411 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24241_24411) {
case "compute":
var c__23856__auto___24413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24410,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (__24410,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (1))){
var state_24254__$1 = state_24254;
var statearr_24256_24414 = state_24254__$1;
(statearr_24256_24414[(2)] = null);

(statearr_24256_24414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (2))){
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(4),jobs);
} else {
if((state_val_24255 === (3))){
var inst_24252 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (4))){
var inst_24244 = (state_24254[(2)]);
var inst_24245 = process.call(null,inst_24244);
var state_24254__$1 = state_24254;
if(cljs.core.truth_(inst_24245)){
var statearr_24257_24415 = state_24254__$1;
(statearr_24257_24415[(1)] = (5));

} else {
var statearr_24258_24416 = state_24254__$1;
(statearr_24258_24416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (5))){
var state_24254__$1 = state_24254;
var statearr_24259_24417 = state_24254__$1;
(statearr_24259_24417[(2)] = null);

(statearr_24259_24417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var state_24254__$1 = state_24254;
var statearr_24260_24418 = state_24254__$1;
(statearr_24260_24418[(2)] = null);

(statearr_24260_24418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (7))){
var inst_24250 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24261_24419 = state_24254__$1;
(statearr_24261_24419[(2)] = inst_24250);

(statearr_24261_24419[(1)] = (3));


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
});})(__24410,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
;
return ((function (__24410,switch__23744__auto__,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_24265 = [null,null,null,null,null,null,null];
(statearr_24265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__);

(statearr_24265[(1)] = (1));

return statearr_24265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1 = (function (state_24254){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24266){if((e24266 instanceof Object)){
var ex__23748__auto__ = e24266;
var statearr_24267_24420 = state_24254;
(statearr_24267_24420[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24421 = state_24254;
state_24254 = G__24421;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__;
})()
;})(__24410,switch__23744__auto__,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
})();
var state__23858__auto__ = (function (){var statearr_24268 = f__23857__auto__.call(null);
(statearr_24268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24413);

return statearr_24268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(__24410,c__23856__auto___24413,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
);


break;
case "async":
var c__23856__auto___24422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24410,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (__24410,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function (state_24281){
var state_val_24282 = (state_24281[(1)]);
if((state_val_24282 === (1))){
var state_24281__$1 = state_24281;
var statearr_24283_24423 = state_24281__$1;
(statearr_24283_24423[(2)] = null);

(statearr_24283_24423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (2))){
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24281__$1,(4),jobs);
} else {
if((state_val_24282 === (3))){
var inst_24279 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24281__$1,inst_24279);
} else {
if((state_val_24282 === (4))){
var inst_24271 = (state_24281[(2)]);
var inst_24272 = async.call(null,inst_24271);
var state_24281__$1 = state_24281;
if(cljs.core.truth_(inst_24272)){
var statearr_24284_24424 = state_24281__$1;
(statearr_24284_24424[(1)] = (5));

} else {
var statearr_24285_24425 = state_24281__$1;
(statearr_24285_24425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (5))){
var state_24281__$1 = state_24281;
var statearr_24286_24426 = state_24281__$1;
(statearr_24286_24426[(2)] = null);

(statearr_24286_24426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (6))){
var state_24281__$1 = state_24281;
var statearr_24287_24427 = state_24281__$1;
(statearr_24287_24427[(2)] = null);

(statearr_24287_24427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24282 === (7))){
var inst_24277 = (state_24281[(2)]);
var state_24281__$1 = state_24281;
var statearr_24288_24428 = state_24281__$1;
(statearr_24288_24428[(2)] = inst_24277);

(statearr_24288_24428[(1)] = (3));


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
});})(__24410,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
;
return ((function (__24410,switch__23744__auto__,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_24292 = [null,null,null,null,null,null,null];
(statearr_24292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__);

(statearr_24292[(1)] = (1));

return statearr_24292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1 = (function (state_24281){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24293){if((e24293 instanceof Object)){
var ex__23748__auto__ = e24293;
var statearr_24294_24429 = state_24281;
(statearr_24294_24429[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24430 = state_24281;
state_24281 = G__24430;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = function(state_24281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1.call(this,state_24281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__;
})()
;})(__24410,switch__23744__auto__,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
})();
var state__23858__auto__ = (function (){var statearr_24295 = f__23857__auto__.call(null);
(statearr_24295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24422);

return statearr_24295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(__24410,c__23856__auto___24422,G__24241_24411,n__20474__auto___24409,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24431 = (__24410 + (1));
__24410 = G__24431;
continue;
} else {
}
break;
}

var c__23856__auto___24432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___24432,jobs,results,process,async){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___24432,jobs,results,process,async){
return (function (state_24317){
var state_val_24318 = (state_24317[(1)]);
if((state_val_24318 === (1))){
var state_24317__$1 = state_24317;
var statearr_24319_24433 = state_24317__$1;
(statearr_24319_24433[(2)] = null);

(statearr_24319_24433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24318 === (2))){
var state_24317__$1 = state_24317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24317__$1,(4),from);
} else {
if((state_val_24318 === (3))){
var inst_24315 = (state_24317[(2)]);
var state_24317__$1 = state_24317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24317__$1,inst_24315);
} else {
if((state_val_24318 === (4))){
var inst_24298 = (state_24317[(7)]);
var inst_24298__$1 = (state_24317[(2)]);
var inst_24299 = (inst_24298__$1 == null);
var state_24317__$1 = (function (){var statearr_24320 = state_24317;
(statearr_24320[(7)] = inst_24298__$1);

return statearr_24320;
})();
if(cljs.core.truth_(inst_24299)){
var statearr_24321_24434 = state_24317__$1;
(statearr_24321_24434[(1)] = (5));

} else {
var statearr_24322_24435 = state_24317__$1;
(statearr_24322_24435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24318 === (5))){
var inst_24301 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24317__$1 = state_24317;
var statearr_24323_24436 = state_24317__$1;
(statearr_24323_24436[(2)] = inst_24301);

(statearr_24323_24436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24318 === (6))){
var inst_24303 = (state_24317[(8)]);
var inst_24298 = (state_24317[(7)]);
var inst_24303__$1 = cljs.core.async.chan.call(null,(1));
var inst_24304 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24305 = [inst_24298,inst_24303__$1];
var inst_24306 = (new cljs.core.PersistentVector(null,2,(5),inst_24304,inst_24305,null));
var state_24317__$1 = (function (){var statearr_24324 = state_24317;
(statearr_24324[(8)] = inst_24303__$1);

return statearr_24324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24317__$1,(8),jobs,inst_24306);
} else {
if((state_val_24318 === (7))){
var inst_24313 = (state_24317[(2)]);
var state_24317__$1 = state_24317;
var statearr_24325_24437 = state_24317__$1;
(statearr_24325_24437[(2)] = inst_24313);

(statearr_24325_24437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24318 === (8))){
var inst_24303 = (state_24317[(8)]);
var inst_24308 = (state_24317[(2)]);
var state_24317__$1 = (function (){var statearr_24326 = state_24317;
(statearr_24326[(9)] = inst_24308);

return statearr_24326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24317__$1,(9),results,inst_24303);
} else {
if((state_val_24318 === (9))){
var inst_24310 = (state_24317[(2)]);
var state_24317__$1 = (function (){var statearr_24327 = state_24317;
(statearr_24327[(10)] = inst_24310);

return statearr_24327;
})();
var statearr_24328_24438 = state_24317__$1;
(statearr_24328_24438[(2)] = null);

(statearr_24328_24438[(1)] = (2));


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
});})(c__23856__auto___24432,jobs,results,process,async))
;
return ((function (switch__23744__auto__,c__23856__auto___24432,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_24332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__);

(statearr_24332[(1)] = (1));

return statearr_24332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1 = (function (state_24317){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24333){if((e24333 instanceof Object)){
var ex__23748__auto__ = e24333;
var statearr_24334_24439 = state_24317;
(statearr_24334_24439[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24440 = state_24317;
state_24317 = G__24440;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = function(state_24317){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1.call(this,state_24317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___24432,jobs,results,process,async))
})();
var state__23858__auto__ = (function (){var statearr_24335 = f__23857__auto__.call(null);
(statearr_24335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24432);

return statearr_24335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___24432,jobs,results,process,async))
);


var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__,jobs,results,process,async){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__,jobs,results,process,async){
return (function (state_24373){
var state_val_24374 = (state_24373[(1)]);
if((state_val_24374 === (7))){
var inst_24369 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24375_24441 = state_24373__$1;
(statearr_24375_24441[(2)] = inst_24369);

(statearr_24375_24441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (20))){
var state_24373__$1 = state_24373;
var statearr_24376_24442 = state_24373__$1;
(statearr_24376_24442[(2)] = null);

(statearr_24376_24442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (1))){
var state_24373__$1 = state_24373;
var statearr_24377_24443 = state_24373__$1;
(statearr_24377_24443[(2)] = null);

(statearr_24377_24443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (4))){
var inst_24338 = (state_24373[(7)]);
var inst_24338__$1 = (state_24373[(2)]);
var inst_24339 = (inst_24338__$1 == null);
var state_24373__$1 = (function (){var statearr_24378 = state_24373;
(statearr_24378[(7)] = inst_24338__$1);

return statearr_24378;
})();
if(cljs.core.truth_(inst_24339)){
var statearr_24379_24444 = state_24373__$1;
(statearr_24379_24444[(1)] = (5));

} else {
var statearr_24380_24445 = state_24373__$1;
(statearr_24380_24445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (15))){
var inst_24351 = (state_24373[(8)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24373__$1,(18),to,inst_24351);
} else {
if((state_val_24374 === (21))){
var inst_24364 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24381_24446 = state_24373__$1;
(statearr_24381_24446[(2)] = inst_24364);

(statearr_24381_24446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (13))){
var inst_24366 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24382 = state_24373;
(statearr_24382[(9)] = inst_24366);

return statearr_24382;
})();
var statearr_24383_24447 = state_24373__$1;
(statearr_24383_24447[(2)] = null);

(statearr_24383_24447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (6))){
var inst_24338 = (state_24373[(7)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(11),inst_24338);
} else {
if((state_val_24374 === (17))){
var inst_24359 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
if(cljs.core.truth_(inst_24359)){
var statearr_24384_24448 = state_24373__$1;
(statearr_24384_24448[(1)] = (19));

} else {
var statearr_24385_24449 = state_24373__$1;
(statearr_24385_24449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (3))){
var inst_24371 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24373__$1,inst_24371);
} else {
if((state_val_24374 === (12))){
var inst_24348 = (state_24373[(10)]);
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(14),inst_24348);
} else {
if((state_val_24374 === (2))){
var state_24373__$1 = state_24373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24373__$1,(4),results);
} else {
if((state_val_24374 === (19))){
var state_24373__$1 = state_24373;
var statearr_24386_24450 = state_24373__$1;
(statearr_24386_24450[(2)] = null);

(statearr_24386_24450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (11))){
var inst_24348 = (state_24373[(2)]);
var state_24373__$1 = (function (){var statearr_24387 = state_24373;
(statearr_24387[(10)] = inst_24348);

return statearr_24387;
})();
var statearr_24388_24451 = state_24373__$1;
(statearr_24388_24451[(2)] = null);

(statearr_24388_24451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (9))){
var state_24373__$1 = state_24373;
var statearr_24389_24452 = state_24373__$1;
(statearr_24389_24452[(2)] = null);

(statearr_24389_24452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (5))){
var state_24373__$1 = state_24373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24390_24453 = state_24373__$1;
(statearr_24390_24453[(1)] = (8));

} else {
var statearr_24391_24454 = state_24373__$1;
(statearr_24391_24454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (14))){
var inst_24353 = (state_24373[(11)]);
var inst_24351 = (state_24373[(8)]);
var inst_24351__$1 = (state_24373[(2)]);
var inst_24352 = (inst_24351__$1 == null);
var inst_24353__$1 = cljs.core.not.call(null,inst_24352);
var state_24373__$1 = (function (){var statearr_24392 = state_24373;
(statearr_24392[(11)] = inst_24353__$1);

(statearr_24392[(8)] = inst_24351__$1);

return statearr_24392;
})();
if(inst_24353__$1){
var statearr_24393_24455 = state_24373__$1;
(statearr_24393_24455[(1)] = (15));

} else {
var statearr_24394_24456 = state_24373__$1;
(statearr_24394_24456[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (16))){
var inst_24353 = (state_24373[(11)]);
var state_24373__$1 = state_24373;
var statearr_24395_24457 = state_24373__$1;
(statearr_24395_24457[(2)] = inst_24353);

(statearr_24395_24457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (10))){
var inst_24345 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24396_24458 = state_24373__$1;
(statearr_24396_24458[(2)] = inst_24345);

(statearr_24396_24458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (18))){
var inst_24356 = (state_24373[(2)]);
var state_24373__$1 = state_24373;
var statearr_24397_24459 = state_24373__$1;
(statearr_24397_24459[(2)] = inst_24356);

(statearr_24397_24459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24374 === (8))){
var inst_24342 = cljs.core.async.close_BANG_.call(null,to);
var state_24373__$1 = state_24373;
var statearr_24398_24460 = state_24373__$1;
(statearr_24398_24460[(2)] = inst_24342);

(statearr_24398_24460[(1)] = (10));


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
});})(c__23856__auto__,jobs,results,process,async))
;
return ((function (switch__23744__auto__,c__23856__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_24402 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__);

(statearr_24402[(1)] = (1));

return statearr_24402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1 = (function (state_24373){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24403){if((e24403 instanceof Object)){
var ex__23748__auto__ = e24403;
var statearr_24404_24461 = state_24373;
(statearr_24404_24461[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24462 = state_24373;
state_24373 = G__24462;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__ = function(state_24373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1.call(this,state_24373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__,jobs,results,process,async))
})();
var state__23858__auto__ = (function (){var statearr_24405 = f__23857__auto__.call(null);
(statearr_24405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_24405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__,jobs,results,process,async))
);

return c__23856__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24463 = [];
var len__20629__auto___24466 = arguments.length;
var i__20630__auto___24467 = (0);
while(true){
if((i__20630__auto___24467 < len__20629__auto___24466)){
args24463.push((arguments[i__20630__auto___24467]));

var G__24468 = (i__20630__auto___24467 + (1));
i__20630__auto___24467 = G__24468;
continue;
} else {
}
break;
}

var G__24465 = args24463.length;
switch (G__24465) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24463.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24470 = [];
var len__20629__auto___24473 = arguments.length;
var i__20630__auto___24474 = (0);
while(true){
if((i__20630__auto___24474 < len__20629__auto___24473)){
args24470.push((arguments[i__20630__auto___24474]));

var G__24475 = (i__20630__auto___24474 + (1));
i__20630__auto___24474 = G__24475;
continue;
} else {
}
break;
}

var G__24472 = args24470.length;
switch (G__24472) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24470.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24477 = [];
var len__20629__auto___24530 = arguments.length;
var i__20630__auto___24531 = (0);
while(true){
if((i__20630__auto___24531 < len__20629__auto___24530)){
args24477.push((arguments[i__20630__auto___24531]));

var G__24532 = (i__20630__auto___24531 + (1));
i__20630__auto___24531 = G__24532;
continue;
} else {
}
break;
}

var G__24479 = args24477.length;
switch (G__24479) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24477.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23856__auto___24534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___24534,tc,fc){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___24534,tc,fc){
return (function (state_24505){
var state_val_24506 = (state_24505[(1)]);
if((state_val_24506 === (7))){
var inst_24501 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24507_24535 = state_24505__$1;
(statearr_24507_24535[(2)] = inst_24501);

(statearr_24507_24535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (1))){
var state_24505__$1 = state_24505;
var statearr_24508_24536 = state_24505__$1;
(statearr_24508_24536[(2)] = null);

(statearr_24508_24536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (4))){
var inst_24482 = (state_24505[(7)]);
var inst_24482__$1 = (state_24505[(2)]);
var inst_24483 = (inst_24482__$1 == null);
var state_24505__$1 = (function (){var statearr_24509 = state_24505;
(statearr_24509[(7)] = inst_24482__$1);

return statearr_24509;
})();
if(cljs.core.truth_(inst_24483)){
var statearr_24510_24537 = state_24505__$1;
(statearr_24510_24537[(1)] = (5));

} else {
var statearr_24511_24538 = state_24505__$1;
(statearr_24511_24538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (13))){
var state_24505__$1 = state_24505;
var statearr_24512_24539 = state_24505__$1;
(statearr_24512_24539[(2)] = null);

(statearr_24512_24539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (6))){
var inst_24482 = (state_24505[(7)]);
var inst_24488 = p.call(null,inst_24482);
var state_24505__$1 = state_24505;
if(cljs.core.truth_(inst_24488)){
var statearr_24513_24540 = state_24505__$1;
(statearr_24513_24540[(1)] = (9));

} else {
var statearr_24514_24541 = state_24505__$1;
(statearr_24514_24541[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (3))){
var inst_24503 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24505__$1,inst_24503);
} else {
if((state_val_24506 === (12))){
var state_24505__$1 = state_24505;
var statearr_24515_24542 = state_24505__$1;
(statearr_24515_24542[(2)] = null);

(statearr_24515_24542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (2))){
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24505__$1,(4),ch);
} else {
if((state_val_24506 === (11))){
var inst_24482 = (state_24505[(7)]);
var inst_24492 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24505__$1,(8),inst_24492,inst_24482);
} else {
if((state_val_24506 === (9))){
var state_24505__$1 = state_24505;
var statearr_24516_24543 = state_24505__$1;
(statearr_24516_24543[(2)] = tc);

(statearr_24516_24543[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (5))){
var inst_24485 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24486 = cljs.core.async.close_BANG_.call(null,fc);
var state_24505__$1 = (function (){var statearr_24517 = state_24505;
(statearr_24517[(8)] = inst_24485);

return statearr_24517;
})();
var statearr_24518_24544 = state_24505__$1;
(statearr_24518_24544[(2)] = inst_24486);

(statearr_24518_24544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (14))){
var inst_24499 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24519_24545 = state_24505__$1;
(statearr_24519_24545[(2)] = inst_24499);

(statearr_24519_24545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (10))){
var state_24505__$1 = state_24505;
var statearr_24520_24546 = state_24505__$1;
(statearr_24520_24546[(2)] = fc);

(statearr_24520_24546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (8))){
var inst_24494 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
if(cljs.core.truth_(inst_24494)){
var statearr_24521_24547 = state_24505__$1;
(statearr_24521_24547[(1)] = (12));

} else {
var statearr_24522_24548 = state_24505__$1;
(statearr_24522_24548[(1)] = (13));

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
});})(c__23856__auto___24534,tc,fc))
;
return ((function (switch__23744__auto__,c__23856__auto___24534,tc,fc){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_24526 = [null,null,null,null,null,null,null,null,null];
(statearr_24526[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_24526[(1)] = (1));

return statearr_24526;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_24505){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24527){if((e24527 instanceof Object)){
var ex__23748__auto__ = e24527;
var statearr_24528_24549 = state_24505;
(statearr_24528_24549[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24550 = state_24505;
state_24505 = G__24550;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_24505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_24505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___24534,tc,fc))
})();
var state__23858__auto__ = (function (){var statearr_24529 = f__23857__auto__.call(null);
(statearr_24529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___24534);

return statearr_24529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___24534,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_24614){
var state_val_24615 = (state_24614[(1)]);
if((state_val_24615 === (7))){
var inst_24610 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24616_24637 = state_24614__$1;
(statearr_24616_24637[(2)] = inst_24610);

(statearr_24616_24637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (1))){
var inst_24594 = init;
var state_24614__$1 = (function (){var statearr_24617 = state_24614;
(statearr_24617[(7)] = inst_24594);

return statearr_24617;
})();
var statearr_24618_24638 = state_24614__$1;
(statearr_24618_24638[(2)] = null);

(statearr_24618_24638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (4))){
var inst_24597 = (state_24614[(8)]);
var inst_24597__$1 = (state_24614[(2)]);
var inst_24598 = (inst_24597__$1 == null);
var state_24614__$1 = (function (){var statearr_24619 = state_24614;
(statearr_24619[(8)] = inst_24597__$1);

return statearr_24619;
})();
if(cljs.core.truth_(inst_24598)){
var statearr_24620_24639 = state_24614__$1;
(statearr_24620_24639[(1)] = (5));

} else {
var statearr_24621_24640 = state_24614__$1;
(statearr_24621_24640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (6))){
var inst_24601 = (state_24614[(9)]);
var inst_24594 = (state_24614[(7)]);
var inst_24597 = (state_24614[(8)]);
var inst_24601__$1 = f.call(null,inst_24594,inst_24597);
var inst_24602 = cljs.core.reduced_QMARK_.call(null,inst_24601__$1);
var state_24614__$1 = (function (){var statearr_24622 = state_24614;
(statearr_24622[(9)] = inst_24601__$1);

return statearr_24622;
})();
if(inst_24602){
var statearr_24623_24641 = state_24614__$1;
(statearr_24623_24641[(1)] = (8));

} else {
var statearr_24624_24642 = state_24614__$1;
(statearr_24624_24642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (3))){
var inst_24612 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24614__$1,inst_24612);
} else {
if((state_val_24615 === (2))){
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(4),ch);
} else {
if((state_val_24615 === (9))){
var inst_24601 = (state_24614[(9)]);
var inst_24594 = inst_24601;
var state_24614__$1 = (function (){var statearr_24625 = state_24614;
(statearr_24625[(7)] = inst_24594);

return statearr_24625;
})();
var statearr_24626_24643 = state_24614__$1;
(statearr_24626_24643[(2)] = null);

(statearr_24626_24643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (5))){
var inst_24594 = (state_24614[(7)]);
var state_24614__$1 = state_24614;
var statearr_24627_24644 = state_24614__$1;
(statearr_24627_24644[(2)] = inst_24594);

(statearr_24627_24644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (10))){
var inst_24608 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24628_24645 = state_24614__$1;
(statearr_24628_24645[(2)] = inst_24608);

(statearr_24628_24645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (8))){
var inst_24601 = (state_24614[(9)]);
var inst_24604 = cljs.core.deref.call(null,inst_24601);
var state_24614__$1 = state_24614;
var statearr_24629_24646 = state_24614__$1;
(statearr_24629_24646[(2)] = inst_24604);

(statearr_24629_24646[(1)] = (10));


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
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23745__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23745__auto____0 = (function (){
var statearr_24633 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24633[(0)] = cljs$core$async$reduce_$_state_machine__23745__auto__);

(statearr_24633[(1)] = (1));

return statearr_24633;
});
var cljs$core$async$reduce_$_state_machine__23745__auto____1 = (function (state_24614){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24634){if((e24634 instanceof Object)){
var ex__23748__auto__ = e24634;
var statearr_24635_24647 = state_24614;
(statearr_24635_24647[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24648 = state_24614;
state_24614 = G__24648;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23745__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23745__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23745__auto____0;
cljs$core$async$reduce_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23745__auto____1;
return cljs$core$async$reduce_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_24636 = f__23857__auto__.call(null);
(statearr_24636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_24636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24649 = [];
var len__20629__auto___24701 = arguments.length;
var i__20630__auto___24702 = (0);
while(true){
if((i__20630__auto___24702 < len__20629__auto___24701)){
args24649.push((arguments[i__20630__auto___24702]));

var G__24703 = (i__20630__auto___24702 + (1));
i__20630__auto___24702 = G__24703;
continue;
} else {
}
break;
}

var G__24651 = args24649.length;
switch (G__24651) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24649.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_24676){
var state_val_24677 = (state_24676[(1)]);
if((state_val_24677 === (7))){
var inst_24658 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24678_24705 = state_24676__$1;
(statearr_24678_24705[(2)] = inst_24658);

(statearr_24678_24705[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (1))){
var inst_24652 = cljs.core.seq.call(null,coll);
var inst_24653 = inst_24652;
var state_24676__$1 = (function (){var statearr_24679 = state_24676;
(statearr_24679[(7)] = inst_24653);

return statearr_24679;
})();
var statearr_24680_24706 = state_24676__$1;
(statearr_24680_24706[(2)] = null);

(statearr_24680_24706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (4))){
var inst_24653 = (state_24676[(7)]);
var inst_24656 = cljs.core.first.call(null,inst_24653);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24676__$1,(7),ch,inst_24656);
} else {
if((state_val_24677 === (13))){
var inst_24670 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24681_24707 = state_24676__$1;
(statearr_24681_24707[(2)] = inst_24670);

(statearr_24681_24707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (6))){
var inst_24661 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24661)){
var statearr_24682_24708 = state_24676__$1;
(statearr_24682_24708[(1)] = (8));

} else {
var statearr_24683_24709 = state_24676__$1;
(statearr_24683_24709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (3))){
var inst_24674 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24676__$1,inst_24674);
} else {
if((state_val_24677 === (12))){
var state_24676__$1 = state_24676;
var statearr_24684_24710 = state_24676__$1;
(statearr_24684_24710[(2)] = null);

(statearr_24684_24710[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (2))){
var inst_24653 = (state_24676[(7)]);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24653)){
var statearr_24685_24711 = state_24676__$1;
(statearr_24685_24711[(1)] = (4));

} else {
var statearr_24686_24712 = state_24676__$1;
(statearr_24686_24712[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (11))){
var inst_24667 = cljs.core.async.close_BANG_.call(null,ch);
var state_24676__$1 = state_24676;
var statearr_24687_24713 = state_24676__$1;
(statearr_24687_24713[(2)] = inst_24667);

(statearr_24687_24713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (9))){
var state_24676__$1 = state_24676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24688_24714 = state_24676__$1;
(statearr_24688_24714[(1)] = (11));

} else {
var statearr_24689_24715 = state_24676__$1;
(statearr_24689_24715[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (5))){
var inst_24653 = (state_24676[(7)]);
var state_24676__$1 = state_24676;
var statearr_24690_24716 = state_24676__$1;
(statearr_24690_24716[(2)] = inst_24653);

(statearr_24690_24716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (10))){
var inst_24672 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24691_24717 = state_24676__$1;
(statearr_24691_24717[(2)] = inst_24672);

(statearr_24691_24717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (8))){
var inst_24653 = (state_24676[(7)]);
var inst_24663 = cljs.core.next.call(null,inst_24653);
var inst_24653__$1 = inst_24663;
var state_24676__$1 = (function (){var statearr_24692 = state_24676;
(statearr_24692[(7)] = inst_24653__$1);

return statearr_24692;
})();
var statearr_24693_24718 = state_24676__$1;
(statearr_24693_24718[(2)] = null);

(statearr_24693_24718[(1)] = (2));


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
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_24697 = [null,null,null,null,null,null,null,null];
(statearr_24697[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_24697[(1)] = (1));

return statearr_24697;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_24676){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_24676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e24698){if((e24698 instanceof Object)){
var ex__23748__auto__ = e24698;
var statearr_24699_24719 = state_24676;
(statearr_24699_24719[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24720 = state_24676;
state_24676 = G__24720;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_24700 = f__23857__auto__.call(null);
(statearr_24700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20225__auto__ = (((_ == null))?null:_);
var m__20226__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,_);
} else {
var m__20226__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20226__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,ch);
} else {
var m__20226__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m);
} else {
var m__20226__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24942 = (function (mult,ch,cs,meta24943){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24943 = meta24943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24944,meta24943__$1){
var self__ = this;
var _24944__$1 = this;
return (new cljs.core.async.t_cljs$core$async24942(self__.mult,self__.ch,self__.cs,meta24943__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24944){
var self__ = this;
var _24944__$1 = this;
return self__.meta24943;
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24943","meta24943",267641038,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24942.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24942.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24942";

cljs.core.async.t_cljs$core$async24942.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async24942");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24942 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24942(mult__$1,ch__$1,cs__$1,meta24943){
return (new cljs.core.async.t_cljs$core$async24942(mult__$1,ch__$1,cs__$1,meta24943));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24942(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23856__auto___25163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___25163,cs,m,dchan,dctr,done){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___25163,cs,m,dchan,dctr,done){
return (function (state_25075){
var state_val_25076 = (state_25075[(1)]);
if((state_val_25076 === (7))){
var inst_25071 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25077_25164 = state_25075__$1;
(statearr_25077_25164[(2)] = inst_25071);

(statearr_25077_25164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (20))){
var inst_24976 = (state_25075[(7)]);
var inst_24986 = cljs.core.first.call(null,inst_24976);
var inst_24987 = cljs.core.nth.call(null,inst_24986,(0),null);
var inst_24988 = cljs.core.nth.call(null,inst_24986,(1),null);
var state_25075__$1 = (function (){var statearr_25078 = state_25075;
(statearr_25078[(8)] = inst_24987);

return statearr_25078;
})();
if(cljs.core.truth_(inst_24988)){
var statearr_25079_25165 = state_25075__$1;
(statearr_25079_25165[(1)] = (22));

} else {
var statearr_25080_25166 = state_25075__$1;
(statearr_25080_25166[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (27))){
var inst_25018 = (state_25075[(9)]);
var inst_25016 = (state_25075[(10)]);
var inst_25023 = (state_25075[(11)]);
var inst_24947 = (state_25075[(12)]);
var inst_25023__$1 = cljs.core._nth.call(null,inst_25016,inst_25018);
var inst_25024 = cljs.core.async.put_BANG_.call(null,inst_25023__$1,inst_24947,done);
var state_25075__$1 = (function (){var statearr_25081 = state_25075;
(statearr_25081[(11)] = inst_25023__$1);

return statearr_25081;
})();
if(cljs.core.truth_(inst_25024)){
var statearr_25082_25167 = state_25075__$1;
(statearr_25082_25167[(1)] = (30));

} else {
var statearr_25083_25168 = state_25075__$1;
(statearr_25083_25168[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (1))){
var state_25075__$1 = state_25075;
var statearr_25084_25169 = state_25075__$1;
(statearr_25084_25169[(2)] = null);

(statearr_25084_25169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (24))){
var inst_24976 = (state_25075[(7)]);
var inst_24993 = (state_25075[(2)]);
var inst_24994 = cljs.core.next.call(null,inst_24976);
var inst_24956 = inst_24994;
var inst_24957 = null;
var inst_24958 = (0);
var inst_24959 = (0);
var state_25075__$1 = (function (){var statearr_25085 = state_25075;
(statearr_25085[(13)] = inst_24957);

(statearr_25085[(14)] = inst_24958);

(statearr_25085[(15)] = inst_24959);

(statearr_25085[(16)] = inst_24993);

(statearr_25085[(17)] = inst_24956);

return statearr_25085;
})();
var statearr_25086_25170 = state_25075__$1;
(statearr_25086_25170[(2)] = null);

(statearr_25086_25170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (39))){
var state_25075__$1 = state_25075;
var statearr_25090_25171 = state_25075__$1;
(statearr_25090_25171[(2)] = null);

(statearr_25090_25171[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (4))){
var inst_24947 = (state_25075[(12)]);
var inst_24947__$1 = (state_25075[(2)]);
var inst_24948 = (inst_24947__$1 == null);
var state_25075__$1 = (function (){var statearr_25091 = state_25075;
(statearr_25091[(12)] = inst_24947__$1);

return statearr_25091;
})();
if(cljs.core.truth_(inst_24948)){
var statearr_25092_25172 = state_25075__$1;
(statearr_25092_25172[(1)] = (5));

} else {
var statearr_25093_25173 = state_25075__$1;
(statearr_25093_25173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (15))){
var inst_24957 = (state_25075[(13)]);
var inst_24958 = (state_25075[(14)]);
var inst_24959 = (state_25075[(15)]);
var inst_24956 = (state_25075[(17)]);
var inst_24972 = (state_25075[(2)]);
var inst_24973 = (inst_24959 + (1));
var tmp25087 = inst_24957;
var tmp25088 = inst_24958;
var tmp25089 = inst_24956;
var inst_24956__$1 = tmp25089;
var inst_24957__$1 = tmp25087;
var inst_24958__$1 = tmp25088;
var inst_24959__$1 = inst_24973;
var state_25075__$1 = (function (){var statearr_25094 = state_25075;
(statearr_25094[(13)] = inst_24957__$1);

(statearr_25094[(14)] = inst_24958__$1);

(statearr_25094[(15)] = inst_24959__$1);

(statearr_25094[(18)] = inst_24972);

(statearr_25094[(17)] = inst_24956__$1);

return statearr_25094;
})();
var statearr_25095_25174 = state_25075__$1;
(statearr_25095_25174[(2)] = null);

(statearr_25095_25174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (21))){
var inst_24997 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25099_25175 = state_25075__$1;
(statearr_25099_25175[(2)] = inst_24997);

(statearr_25099_25175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (31))){
var inst_25023 = (state_25075[(11)]);
var inst_25027 = done.call(null,null);
var inst_25028 = cljs.core.async.untap_STAR_.call(null,m,inst_25023);
var state_25075__$1 = (function (){var statearr_25100 = state_25075;
(statearr_25100[(19)] = inst_25027);

return statearr_25100;
})();
var statearr_25101_25176 = state_25075__$1;
(statearr_25101_25176[(2)] = inst_25028);

(statearr_25101_25176[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (32))){
var inst_25018 = (state_25075[(9)]);
var inst_25016 = (state_25075[(10)]);
var inst_25017 = (state_25075[(20)]);
var inst_25015 = (state_25075[(21)]);
var inst_25030 = (state_25075[(2)]);
var inst_25031 = (inst_25018 + (1));
var tmp25096 = inst_25016;
var tmp25097 = inst_25017;
var tmp25098 = inst_25015;
var inst_25015__$1 = tmp25098;
var inst_25016__$1 = tmp25096;
var inst_25017__$1 = tmp25097;
var inst_25018__$1 = inst_25031;
var state_25075__$1 = (function (){var statearr_25102 = state_25075;
(statearr_25102[(9)] = inst_25018__$1);

(statearr_25102[(10)] = inst_25016__$1);

(statearr_25102[(22)] = inst_25030);

(statearr_25102[(20)] = inst_25017__$1);

(statearr_25102[(21)] = inst_25015__$1);

return statearr_25102;
})();
var statearr_25103_25177 = state_25075__$1;
(statearr_25103_25177[(2)] = null);

(statearr_25103_25177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (40))){
var inst_25043 = (state_25075[(23)]);
var inst_25047 = done.call(null,null);
var inst_25048 = cljs.core.async.untap_STAR_.call(null,m,inst_25043);
var state_25075__$1 = (function (){var statearr_25104 = state_25075;
(statearr_25104[(24)] = inst_25047);

return statearr_25104;
})();
var statearr_25105_25178 = state_25075__$1;
(statearr_25105_25178[(2)] = inst_25048);

(statearr_25105_25178[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (33))){
var inst_25034 = (state_25075[(25)]);
var inst_25036 = cljs.core.chunked_seq_QMARK_.call(null,inst_25034);
var state_25075__$1 = state_25075;
if(inst_25036){
var statearr_25106_25179 = state_25075__$1;
(statearr_25106_25179[(1)] = (36));

} else {
var statearr_25107_25180 = state_25075__$1;
(statearr_25107_25180[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (13))){
var inst_24966 = (state_25075[(26)]);
var inst_24969 = cljs.core.async.close_BANG_.call(null,inst_24966);
var state_25075__$1 = state_25075;
var statearr_25108_25181 = state_25075__$1;
(statearr_25108_25181[(2)] = inst_24969);

(statearr_25108_25181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (22))){
var inst_24987 = (state_25075[(8)]);
var inst_24990 = cljs.core.async.close_BANG_.call(null,inst_24987);
var state_25075__$1 = state_25075;
var statearr_25109_25182 = state_25075__$1;
(statearr_25109_25182[(2)] = inst_24990);

(statearr_25109_25182[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (36))){
var inst_25034 = (state_25075[(25)]);
var inst_25038 = cljs.core.chunk_first.call(null,inst_25034);
var inst_25039 = cljs.core.chunk_rest.call(null,inst_25034);
var inst_25040 = cljs.core.count.call(null,inst_25038);
var inst_25015 = inst_25039;
var inst_25016 = inst_25038;
var inst_25017 = inst_25040;
var inst_25018 = (0);
var state_25075__$1 = (function (){var statearr_25110 = state_25075;
(statearr_25110[(9)] = inst_25018);

(statearr_25110[(10)] = inst_25016);

(statearr_25110[(20)] = inst_25017);

(statearr_25110[(21)] = inst_25015);

return statearr_25110;
})();
var statearr_25111_25183 = state_25075__$1;
(statearr_25111_25183[(2)] = null);

(statearr_25111_25183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (41))){
var inst_25034 = (state_25075[(25)]);
var inst_25050 = (state_25075[(2)]);
var inst_25051 = cljs.core.next.call(null,inst_25034);
var inst_25015 = inst_25051;
var inst_25016 = null;
var inst_25017 = (0);
var inst_25018 = (0);
var state_25075__$1 = (function (){var statearr_25112 = state_25075;
(statearr_25112[(9)] = inst_25018);

(statearr_25112[(10)] = inst_25016);

(statearr_25112[(20)] = inst_25017);

(statearr_25112[(21)] = inst_25015);

(statearr_25112[(27)] = inst_25050);

return statearr_25112;
})();
var statearr_25113_25184 = state_25075__$1;
(statearr_25113_25184[(2)] = null);

(statearr_25113_25184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (43))){
var state_25075__$1 = state_25075;
var statearr_25114_25185 = state_25075__$1;
(statearr_25114_25185[(2)] = null);

(statearr_25114_25185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (29))){
var inst_25059 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25115_25186 = state_25075__$1;
(statearr_25115_25186[(2)] = inst_25059);

(statearr_25115_25186[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (44))){
var inst_25068 = (state_25075[(2)]);
var state_25075__$1 = (function (){var statearr_25116 = state_25075;
(statearr_25116[(28)] = inst_25068);

return statearr_25116;
})();
var statearr_25117_25187 = state_25075__$1;
(statearr_25117_25187[(2)] = null);

(statearr_25117_25187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (6))){
var inst_25007 = (state_25075[(29)]);
var inst_25006 = cljs.core.deref.call(null,cs);
var inst_25007__$1 = cljs.core.keys.call(null,inst_25006);
var inst_25008 = cljs.core.count.call(null,inst_25007__$1);
var inst_25009 = cljs.core.reset_BANG_.call(null,dctr,inst_25008);
var inst_25014 = cljs.core.seq.call(null,inst_25007__$1);
var inst_25015 = inst_25014;
var inst_25016 = null;
var inst_25017 = (0);
var inst_25018 = (0);
var state_25075__$1 = (function (){var statearr_25118 = state_25075;
(statearr_25118[(9)] = inst_25018);

(statearr_25118[(10)] = inst_25016);

(statearr_25118[(20)] = inst_25017);

(statearr_25118[(30)] = inst_25009);

(statearr_25118[(21)] = inst_25015);

(statearr_25118[(29)] = inst_25007__$1);

return statearr_25118;
})();
var statearr_25119_25188 = state_25075__$1;
(statearr_25119_25188[(2)] = null);

(statearr_25119_25188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (28))){
var inst_25015 = (state_25075[(21)]);
var inst_25034 = (state_25075[(25)]);
var inst_25034__$1 = cljs.core.seq.call(null,inst_25015);
var state_25075__$1 = (function (){var statearr_25120 = state_25075;
(statearr_25120[(25)] = inst_25034__$1);

return statearr_25120;
})();
if(inst_25034__$1){
var statearr_25121_25189 = state_25075__$1;
(statearr_25121_25189[(1)] = (33));

} else {
var statearr_25122_25190 = state_25075__$1;
(statearr_25122_25190[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (25))){
var inst_25018 = (state_25075[(9)]);
var inst_25017 = (state_25075[(20)]);
var inst_25020 = (inst_25018 < inst_25017);
var inst_25021 = inst_25020;
var state_25075__$1 = state_25075;
if(cljs.core.truth_(inst_25021)){
var statearr_25123_25191 = state_25075__$1;
(statearr_25123_25191[(1)] = (27));

} else {
var statearr_25124_25192 = state_25075__$1;
(statearr_25124_25192[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (34))){
var state_25075__$1 = state_25075;
var statearr_25125_25193 = state_25075__$1;
(statearr_25125_25193[(2)] = null);

(statearr_25125_25193[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (17))){
var state_25075__$1 = state_25075;
var statearr_25126_25194 = state_25075__$1;
(statearr_25126_25194[(2)] = null);

(statearr_25126_25194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (3))){
var inst_25073 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25075__$1,inst_25073);
} else {
if((state_val_25076 === (12))){
var inst_25002 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25127_25195 = state_25075__$1;
(statearr_25127_25195[(2)] = inst_25002);

(statearr_25127_25195[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (2))){
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25075__$1,(4),ch);
} else {
if((state_val_25076 === (23))){
var state_25075__$1 = state_25075;
var statearr_25128_25196 = state_25075__$1;
(statearr_25128_25196[(2)] = null);

(statearr_25128_25196[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (35))){
var inst_25057 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25129_25197 = state_25075__$1;
(statearr_25129_25197[(2)] = inst_25057);

(statearr_25129_25197[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (19))){
var inst_24976 = (state_25075[(7)]);
var inst_24980 = cljs.core.chunk_first.call(null,inst_24976);
var inst_24981 = cljs.core.chunk_rest.call(null,inst_24976);
var inst_24982 = cljs.core.count.call(null,inst_24980);
var inst_24956 = inst_24981;
var inst_24957 = inst_24980;
var inst_24958 = inst_24982;
var inst_24959 = (0);
var state_25075__$1 = (function (){var statearr_25130 = state_25075;
(statearr_25130[(13)] = inst_24957);

(statearr_25130[(14)] = inst_24958);

(statearr_25130[(15)] = inst_24959);

(statearr_25130[(17)] = inst_24956);

return statearr_25130;
})();
var statearr_25131_25198 = state_25075__$1;
(statearr_25131_25198[(2)] = null);

(statearr_25131_25198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (11))){
var inst_24976 = (state_25075[(7)]);
var inst_24956 = (state_25075[(17)]);
var inst_24976__$1 = cljs.core.seq.call(null,inst_24956);
var state_25075__$1 = (function (){var statearr_25132 = state_25075;
(statearr_25132[(7)] = inst_24976__$1);

return statearr_25132;
})();
if(inst_24976__$1){
var statearr_25133_25199 = state_25075__$1;
(statearr_25133_25199[(1)] = (16));

} else {
var statearr_25134_25200 = state_25075__$1;
(statearr_25134_25200[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (9))){
var inst_25004 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25135_25201 = state_25075__$1;
(statearr_25135_25201[(2)] = inst_25004);

(statearr_25135_25201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (5))){
var inst_24954 = cljs.core.deref.call(null,cs);
var inst_24955 = cljs.core.seq.call(null,inst_24954);
var inst_24956 = inst_24955;
var inst_24957 = null;
var inst_24958 = (0);
var inst_24959 = (0);
var state_25075__$1 = (function (){var statearr_25136 = state_25075;
(statearr_25136[(13)] = inst_24957);

(statearr_25136[(14)] = inst_24958);

(statearr_25136[(15)] = inst_24959);

(statearr_25136[(17)] = inst_24956);

return statearr_25136;
})();
var statearr_25137_25202 = state_25075__$1;
(statearr_25137_25202[(2)] = null);

(statearr_25137_25202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (14))){
var state_25075__$1 = state_25075;
var statearr_25138_25203 = state_25075__$1;
(statearr_25138_25203[(2)] = null);

(statearr_25138_25203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (45))){
var inst_25065 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25139_25204 = state_25075__$1;
(statearr_25139_25204[(2)] = inst_25065);

(statearr_25139_25204[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (26))){
var inst_25007 = (state_25075[(29)]);
var inst_25061 = (state_25075[(2)]);
var inst_25062 = cljs.core.seq.call(null,inst_25007);
var state_25075__$1 = (function (){var statearr_25140 = state_25075;
(statearr_25140[(31)] = inst_25061);

return statearr_25140;
})();
if(inst_25062){
var statearr_25141_25205 = state_25075__$1;
(statearr_25141_25205[(1)] = (42));

} else {
var statearr_25142_25206 = state_25075__$1;
(statearr_25142_25206[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (16))){
var inst_24976 = (state_25075[(7)]);
var inst_24978 = cljs.core.chunked_seq_QMARK_.call(null,inst_24976);
var state_25075__$1 = state_25075;
if(inst_24978){
var statearr_25143_25207 = state_25075__$1;
(statearr_25143_25207[(1)] = (19));

} else {
var statearr_25144_25208 = state_25075__$1;
(statearr_25144_25208[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (38))){
var inst_25054 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25145_25209 = state_25075__$1;
(statearr_25145_25209[(2)] = inst_25054);

(statearr_25145_25209[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (30))){
var state_25075__$1 = state_25075;
var statearr_25146_25210 = state_25075__$1;
(statearr_25146_25210[(2)] = null);

(statearr_25146_25210[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (10))){
var inst_24957 = (state_25075[(13)]);
var inst_24959 = (state_25075[(15)]);
var inst_24965 = cljs.core._nth.call(null,inst_24957,inst_24959);
var inst_24966 = cljs.core.nth.call(null,inst_24965,(0),null);
var inst_24967 = cljs.core.nth.call(null,inst_24965,(1),null);
var state_25075__$1 = (function (){var statearr_25147 = state_25075;
(statearr_25147[(26)] = inst_24966);

return statearr_25147;
})();
if(cljs.core.truth_(inst_24967)){
var statearr_25148_25211 = state_25075__$1;
(statearr_25148_25211[(1)] = (13));

} else {
var statearr_25149_25212 = state_25075__$1;
(statearr_25149_25212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (18))){
var inst_25000 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25150_25213 = state_25075__$1;
(statearr_25150_25213[(2)] = inst_25000);

(statearr_25150_25213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (42))){
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25075__$1,(45),dchan);
} else {
if((state_val_25076 === (37))){
var inst_24947 = (state_25075[(12)]);
var inst_25043 = (state_25075[(23)]);
var inst_25034 = (state_25075[(25)]);
var inst_25043__$1 = cljs.core.first.call(null,inst_25034);
var inst_25044 = cljs.core.async.put_BANG_.call(null,inst_25043__$1,inst_24947,done);
var state_25075__$1 = (function (){var statearr_25151 = state_25075;
(statearr_25151[(23)] = inst_25043__$1);

return statearr_25151;
})();
if(cljs.core.truth_(inst_25044)){
var statearr_25152_25214 = state_25075__$1;
(statearr_25152_25214[(1)] = (39));

} else {
var statearr_25153_25215 = state_25075__$1;
(statearr_25153_25215[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (8))){
var inst_24958 = (state_25075[(14)]);
var inst_24959 = (state_25075[(15)]);
var inst_24961 = (inst_24959 < inst_24958);
var inst_24962 = inst_24961;
var state_25075__$1 = state_25075;
if(cljs.core.truth_(inst_24962)){
var statearr_25154_25216 = state_25075__$1;
(statearr_25154_25216[(1)] = (10));

} else {
var statearr_25155_25217 = state_25075__$1;
(statearr_25155_25217[(1)] = (11));

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
});})(c__23856__auto___25163,cs,m,dchan,dctr,done))
;
return ((function (switch__23744__auto__,c__23856__auto___25163,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23745__auto__ = null;
var cljs$core$async$mult_$_state_machine__23745__auto____0 = (function (){
var statearr_25159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25159[(0)] = cljs$core$async$mult_$_state_machine__23745__auto__);

(statearr_25159[(1)] = (1));

return statearr_25159;
});
var cljs$core$async$mult_$_state_machine__23745__auto____1 = (function (state_25075){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e25160){if((e25160 instanceof Object)){
var ex__23748__auto__ = e25160;
var statearr_25161_25218 = state_25075;
(statearr_25161_25218[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25219 = state_25075;
state_25075 = G__25219;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23745__auto__ = function(state_25075){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23745__auto____1.call(this,state_25075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23745__auto____0;
cljs$core$async$mult_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23745__auto____1;
return cljs$core$async$mult_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___25163,cs,m,dchan,dctr,done))
})();
var state__23858__auto__ = (function (){var statearr_25162 = f__23857__auto__.call(null);
(statearr_25162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___25163);

return statearr_25162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___25163,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args25220 = [];
var len__20629__auto___25223 = arguments.length;
var i__20630__auto___25224 = (0);
while(true){
if((i__20630__auto___25224 < len__20629__auto___25223)){
args25220.push((arguments[i__20630__auto___25224]));

var G__25225 = (i__20630__auto___25224 + (1));
i__20630__auto___25224 = G__25225;
continue;
} else {
}
break;
}

var G__25222 = args25220.length;
switch (G__25222) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25220.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,ch);
} else {
var m__20226__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,ch);
} else {
var m__20226__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m);
} else {
var m__20226__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,state_map);
} else {
var m__20226__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20225__auto__ = (((m == null))?null:m);
var m__20226__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,m,mode);
} else {
var m__20226__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20636__auto__ = [];
var len__20629__auto___25237 = arguments.length;
var i__20630__auto___25238 = (0);
while(true){
if((i__20630__auto___25238 < len__20629__auto___25237)){
args__20636__auto__.push((arguments[i__20630__auto___25238]));

var G__25239 = (i__20630__auto___25238 + (1));
i__20630__auto___25238 = G__25239;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((3) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20637__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25231){
var map__25232 = p__25231;
var map__25232__$1 = ((((!((map__25232 == null)))?((((map__25232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25232):map__25232);
var opts = map__25232__$1;
var statearr_25234_25240 = state;
(statearr_25234_25240[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__25232,map__25232__$1,opts){
return (function (val){
var statearr_25235_25241 = state;
(statearr_25235_25241[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25232,map__25232__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_25236_25242 = state;
(statearr_25236_25242[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25227){
var G__25228 = cljs.core.first.call(null,seq25227);
var seq25227__$1 = cljs.core.next.call(null,seq25227);
var G__25229 = cljs.core.first.call(null,seq25227__$1);
var seq25227__$2 = cljs.core.next.call(null,seq25227__$1);
var G__25230 = cljs.core.first.call(null,seq25227__$2);
var seq25227__$3 = cljs.core.next.call(null,seq25227__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25228,G__25229,G__25230,seq25227__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async25406 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25406 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25407){
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
this.meta25407 = meta25407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25408,meta25407__$1){
var self__ = this;
var _25408__$1 = this;
return (new cljs.core.async.t_cljs$core$async25406(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25407__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25408){
var self__ = this;
var _25408__$1 = this;
return self__.meta25407;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25406.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25407","meta25407",5602114,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25406.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25406";

cljs.core.async.t_cljs$core$async25406.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async25406");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25406 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25407){
return (new cljs.core.async.t_cljs$core$async25406(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25407));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25406(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23856__auto___25569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25506){
var state_val_25507 = (state_25506[(1)]);
if((state_val_25507 === (7))){
var inst_25424 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25508_25570 = state_25506__$1;
(statearr_25508_25570[(2)] = inst_25424);

(statearr_25508_25570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (20))){
var inst_25436 = (state_25506[(7)]);
var state_25506__$1 = state_25506;
var statearr_25509_25571 = state_25506__$1;
(statearr_25509_25571[(2)] = inst_25436);

(statearr_25509_25571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (27))){
var state_25506__$1 = state_25506;
var statearr_25510_25572 = state_25506__$1;
(statearr_25510_25572[(2)] = null);

(statearr_25510_25572[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (1))){
var inst_25412 = (state_25506[(8)]);
var inst_25412__$1 = calc_state.call(null);
var inst_25414 = (inst_25412__$1 == null);
var inst_25415 = cljs.core.not.call(null,inst_25414);
var state_25506__$1 = (function (){var statearr_25511 = state_25506;
(statearr_25511[(8)] = inst_25412__$1);

return statearr_25511;
})();
if(inst_25415){
var statearr_25512_25573 = state_25506__$1;
(statearr_25512_25573[(1)] = (2));

} else {
var statearr_25513_25574 = state_25506__$1;
(statearr_25513_25574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (24))){
var inst_25459 = (state_25506[(9)]);
var inst_25480 = (state_25506[(10)]);
var inst_25466 = (state_25506[(11)]);
var inst_25480__$1 = inst_25459.call(null,inst_25466);
var state_25506__$1 = (function (){var statearr_25514 = state_25506;
(statearr_25514[(10)] = inst_25480__$1);

return statearr_25514;
})();
if(cljs.core.truth_(inst_25480__$1)){
var statearr_25515_25575 = state_25506__$1;
(statearr_25515_25575[(1)] = (29));

} else {
var statearr_25516_25576 = state_25506__$1;
(statearr_25516_25576[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (4))){
var inst_25427 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25427)){
var statearr_25517_25577 = state_25506__$1;
(statearr_25517_25577[(1)] = (8));

} else {
var statearr_25518_25578 = state_25506__$1;
(statearr_25518_25578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (15))){
var inst_25453 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25453)){
var statearr_25519_25579 = state_25506__$1;
(statearr_25519_25579[(1)] = (19));

} else {
var statearr_25520_25580 = state_25506__$1;
(statearr_25520_25580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (21))){
var inst_25458 = (state_25506[(12)]);
var inst_25458__$1 = (state_25506[(2)]);
var inst_25459 = cljs.core.get.call(null,inst_25458__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25460 = cljs.core.get.call(null,inst_25458__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25461 = cljs.core.get.call(null,inst_25458__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25506__$1 = (function (){var statearr_25521 = state_25506;
(statearr_25521[(12)] = inst_25458__$1);

(statearr_25521[(9)] = inst_25459);

(statearr_25521[(13)] = inst_25460);

return statearr_25521;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25506__$1,(22),inst_25461);
} else {
if((state_val_25507 === (31))){
var inst_25488 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25488)){
var statearr_25522_25581 = state_25506__$1;
(statearr_25522_25581[(1)] = (32));

} else {
var statearr_25523_25582 = state_25506__$1;
(statearr_25523_25582[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (32))){
var inst_25465 = (state_25506[(14)]);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25506__$1,(35),out,inst_25465);
} else {
if((state_val_25507 === (33))){
var inst_25458 = (state_25506[(12)]);
var inst_25436 = inst_25458;
var state_25506__$1 = (function (){var statearr_25524 = state_25506;
(statearr_25524[(7)] = inst_25436);

return statearr_25524;
})();
var statearr_25525_25583 = state_25506__$1;
(statearr_25525_25583[(2)] = null);

(statearr_25525_25583[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (13))){
var inst_25436 = (state_25506[(7)]);
var inst_25443 = inst_25436.cljs$lang$protocol_mask$partition0$;
var inst_25444 = (inst_25443 & (64));
var inst_25445 = inst_25436.cljs$core$ISeq$;
var inst_25446 = (inst_25444) || (inst_25445);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25446)){
var statearr_25526_25584 = state_25506__$1;
(statearr_25526_25584[(1)] = (16));

} else {
var statearr_25527_25585 = state_25506__$1;
(statearr_25527_25585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (22))){
var inst_25465 = (state_25506[(14)]);
var inst_25466 = (state_25506[(11)]);
var inst_25464 = (state_25506[(2)]);
var inst_25465__$1 = cljs.core.nth.call(null,inst_25464,(0),null);
var inst_25466__$1 = cljs.core.nth.call(null,inst_25464,(1),null);
var inst_25467 = (inst_25465__$1 == null);
var inst_25468 = cljs.core._EQ_.call(null,inst_25466__$1,change);
var inst_25469 = (inst_25467) || (inst_25468);
var state_25506__$1 = (function (){var statearr_25528 = state_25506;
(statearr_25528[(14)] = inst_25465__$1);

(statearr_25528[(11)] = inst_25466__$1);

return statearr_25528;
})();
if(cljs.core.truth_(inst_25469)){
var statearr_25529_25586 = state_25506__$1;
(statearr_25529_25586[(1)] = (23));

} else {
var statearr_25530_25587 = state_25506__$1;
(statearr_25530_25587[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (36))){
var inst_25458 = (state_25506[(12)]);
var inst_25436 = inst_25458;
var state_25506__$1 = (function (){var statearr_25531 = state_25506;
(statearr_25531[(7)] = inst_25436);

return statearr_25531;
})();
var statearr_25532_25588 = state_25506__$1;
(statearr_25532_25588[(2)] = null);

(statearr_25532_25588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (29))){
var inst_25480 = (state_25506[(10)]);
var state_25506__$1 = state_25506;
var statearr_25533_25589 = state_25506__$1;
(statearr_25533_25589[(2)] = inst_25480);

(statearr_25533_25589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (6))){
var state_25506__$1 = state_25506;
var statearr_25534_25590 = state_25506__$1;
(statearr_25534_25590[(2)] = false);

(statearr_25534_25590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (28))){
var inst_25476 = (state_25506[(2)]);
var inst_25477 = calc_state.call(null);
var inst_25436 = inst_25477;
var state_25506__$1 = (function (){var statearr_25535 = state_25506;
(statearr_25535[(7)] = inst_25436);

(statearr_25535[(15)] = inst_25476);

return statearr_25535;
})();
var statearr_25536_25591 = state_25506__$1;
(statearr_25536_25591[(2)] = null);

(statearr_25536_25591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (25))){
var inst_25502 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25537_25592 = state_25506__$1;
(statearr_25537_25592[(2)] = inst_25502);

(statearr_25537_25592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (34))){
var inst_25500 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25538_25593 = state_25506__$1;
(statearr_25538_25593[(2)] = inst_25500);

(statearr_25538_25593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (17))){
var state_25506__$1 = state_25506;
var statearr_25539_25594 = state_25506__$1;
(statearr_25539_25594[(2)] = false);

(statearr_25539_25594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (3))){
var state_25506__$1 = state_25506;
var statearr_25540_25595 = state_25506__$1;
(statearr_25540_25595[(2)] = false);

(statearr_25540_25595[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (12))){
var inst_25504 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25506__$1,inst_25504);
} else {
if((state_val_25507 === (2))){
var inst_25412 = (state_25506[(8)]);
var inst_25417 = inst_25412.cljs$lang$protocol_mask$partition0$;
var inst_25418 = (inst_25417 & (64));
var inst_25419 = inst_25412.cljs$core$ISeq$;
var inst_25420 = (inst_25418) || (inst_25419);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25420)){
var statearr_25541_25596 = state_25506__$1;
(statearr_25541_25596[(1)] = (5));

} else {
var statearr_25542_25597 = state_25506__$1;
(statearr_25542_25597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (23))){
var inst_25465 = (state_25506[(14)]);
var inst_25471 = (inst_25465 == null);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25471)){
var statearr_25543_25598 = state_25506__$1;
(statearr_25543_25598[(1)] = (26));

} else {
var statearr_25544_25599 = state_25506__$1;
(statearr_25544_25599[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (35))){
var inst_25491 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
if(cljs.core.truth_(inst_25491)){
var statearr_25545_25600 = state_25506__$1;
(statearr_25545_25600[(1)] = (36));

} else {
var statearr_25546_25601 = state_25506__$1;
(statearr_25546_25601[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (19))){
var inst_25436 = (state_25506[(7)]);
var inst_25455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25436);
var state_25506__$1 = state_25506;
var statearr_25547_25602 = state_25506__$1;
(statearr_25547_25602[(2)] = inst_25455);

(statearr_25547_25602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (11))){
var inst_25436 = (state_25506[(7)]);
var inst_25440 = (inst_25436 == null);
var inst_25441 = cljs.core.not.call(null,inst_25440);
var state_25506__$1 = state_25506;
if(inst_25441){
var statearr_25548_25603 = state_25506__$1;
(statearr_25548_25603[(1)] = (13));

} else {
var statearr_25549_25604 = state_25506__$1;
(statearr_25549_25604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (9))){
var inst_25412 = (state_25506[(8)]);
var state_25506__$1 = state_25506;
var statearr_25550_25605 = state_25506__$1;
(statearr_25550_25605[(2)] = inst_25412);

(statearr_25550_25605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (5))){
var state_25506__$1 = state_25506;
var statearr_25551_25606 = state_25506__$1;
(statearr_25551_25606[(2)] = true);

(statearr_25551_25606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (14))){
var state_25506__$1 = state_25506;
var statearr_25552_25607 = state_25506__$1;
(statearr_25552_25607[(2)] = false);

(statearr_25552_25607[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (26))){
var inst_25466 = (state_25506[(11)]);
var inst_25473 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25466);
var state_25506__$1 = state_25506;
var statearr_25553_25608 = state_25506__$1;
(statearr_25553_25608[(2)] = inst_25473);

(statearr_25553_25608[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (16))){
var state_25506__$1 = state_25506;
var statearr_25554_25609 = state_25506__$1;
(statearr_25554_25609[(2)] = true);

(statearr_25554_25609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (38))){
var inst_25496 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25555_25610 = state_25506__$1;
(statearr_25555_25610[(2)] = inst_25496);

(statearr_25555_25610[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (30))){
var inst_25459 = (state_25506[(9)]);
var inst_25460 = (state_25506[(13)]);
var inst_25466 = (state_25506[(11)]);
var inst_25483 = cljs.core.empty_QMARK_.call(null,inst_25459);
var inst_25484 = inst_25460.call(null,inst_25466);
var inst_25485 = cljs.core.not.call(null,inst_25484);
var inst_25486 = (inst_25483) && (inst_25485);
var state_25506__$1 = state_25506;
var statearr_25556_25611 = state_25506__$1;
(statearr_25556_25611[(2)] = inst_25486);

(statearr_25556_25611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (10))){
var inst_25412 = (state_25506[(8)]);
var inst_25432 = (state_25506[(2)]);
var inst_25433 = cljs.core.get.call(null,inst_25432,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25434 = cljs.core.get.call(null,inst_25432,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25435 = cljs.core.get.call(null,inst_25432,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25436 = inst_25412;
var state_25506__$1 = (function (){var statearr_25557 = state_25506;
(statearr_25557[(16)] = inst_25433);

(statearr_25557[(7)] = inst_25436);

(statearr_25557[(17)] = inst_25434);

(statearr_25557[(18)] = inst_25435);

return statearr_25557;
})();
var statearr_25558_25612 = state_25506__$1;
(statearr_25558_25612[(2)] = null);

(statearr_25558_25612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (18))){
var inst_25450 = (state_25506[(2)]);
var state_25506__$1 = state_25506;
var statearr_25559_25613 = state_25506__$1;
(statearr_25559_25613[(2)] = inst_25450);

(statearr_25559_25613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (37))){
var state_25506__$1 = state_25506;
var statearr_25560_25614 = state_25506__$1;
(statearr_25560_25614[(2)] = null);

(statearr_25560_25614[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25507 === (8))){
var inst_25412 = (state_25506[(8)]);
var inst_25429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25412);
var state_25506__$1 = state_25506;
var statearr_25561_25615 = state_25506__$1;
(statearr_25561_25615[(2)] = inst_25429);

(statearr_25561_25615[(1)] = (10));


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
});})(c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23744__auto__,c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23745__auto__ = null;
var cljs$core$async$mix_$_state_machine__23745__auto____0 = (function (){
var statearr_25565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25565[(0)] = cljs$core$async$mix_$_state_machine__23745__auto__);

(statearr_25565[(1)] = (1));

return statearr_25565;
});
var cljs$core$async$mix_$_state_machine__23745__auto____1 = (function (state_25506){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e25566){if((e25566 instanceof Object)){
var ex__23748__auto__ = e25566;
var statearr_25567_25616 = state_25506;
(statearr_25567_25616[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25617 = state_25506;
state_25506 = G__25617;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23745__auto__ = function(state_25506){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23745__auto____1.call(this,state_25506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23745__auto____0;
cljs$core$async$mix_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23745__auto____1;
return cljs$core$async$mix_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23858__auto__ = (function (){var statearr_25568 = f__23857__auto__.call(null);
(statearr_25568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___25569);

return statearr_25568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___25569,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20225__auto__ = (((p == null))?null:p);
var m__20226__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20226__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20225__auto__ = (((p == null))?null:p);
var m__20226__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,p,v,ch);
} else {
var m__20226__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25618 = [];
var len__20629__auto___25621 = arguments.length;
var i__20630__auto___25622 = (0);
while(true){
if((i__20630__auto___25622 < len__20629__auto___25621)){
args25618.push((arguments[i__20630__auto___25622]));

var G__25623 = (i__20630__auto___25622 + (1));
i__20630__auto___25622 = G__25623;
continue;
} else {
}
break;
}

var G__25620 = args25618.length;
switch (G__25620) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25618.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20225__auto__ = (((p == null))?null:p);
var m__20226__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,p);
} else {
var m__20226__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20225__auto__ = (((p == null))?null:p);
var m__20226__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,p,v);
} else {
var m__20226__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25626 = [];
var len__20629__auto___25751 = arguments.length;
var i__20630__auto___25752 = (0);
while(true){
if((i__20630__auto___25752 < len__20629__auto___25751)){
args25626.push((arguments[i__20630__auto___25752]));

var G__25753 = (i__20630__auto___25752 + (1));
i__20630__auto___25752 = G__25753;
continue;
} else {
}
break;
}

var G__25628 = args25626.length;
switch (G__25628) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25626.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19570__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19570__auto__,mults){
return (function (p1__25625_SHARP_){
if(cljs.core.truth_(p1__25625_SHARP_.call(null,topic))){
return p1__25625_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25625_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19570__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25629 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25629 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25630){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25630 = meta25630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25631,meta25630__$1){
var self__ = this;
var _25631__$1 = this;
return (new cljs.core.async.t_cljs$core$async25629(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25630__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25631){
var self__ = this;
var _25631__$1 = this;
return self__.meta25630;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25630","meta25630",150239735,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25629";

cljs.core.async.t_cljs$core$async25629.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async25629");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25629 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25629(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25630){
return (new cljs.core.async.t_cljs$core$async25629(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25630));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25629(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23856__auto___25755 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___25755,mults,ensure_mult,p){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___25755,mults,ensure_mult,p){
return (function (state_25703){
var state_val_25704 = (state_25703[(1)]);
if((state_val_25704 === (7))){
var inst_25699 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25705_25756 = state_25703__$1;
(statearr_25705_25756[(2)] = inst_25699);

(statearr_25705_25756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (20))){
var state_25703__$1 = state_25703;
var statearr_25706_25757 = state_25703__$1;
(statearr_25706_25757[(2)] = null);

(statearr_25706_25757[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (1))){
var state_25703__$1 = state_25703;
var statearr_25707_25758 = state_25703__$1;
(statearr_25707_25758[(2)] = null);

(statearr_25707_25758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (24))){
var inst_25682 = (state_25703[(7)]);
var inst_25691 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25682);
var state_25703__$1 = state_25703;
var statearr_25708_25759 = state_25703__$1;
(statearr_25708_25759[(2)] = inst_25691);

(statearr_25708_25759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (4))){
var inst_25634 = (state_25703[(8)]);
var inst_25634__$1 = (state_25703[(2)]);
var inst_25635 = (inst_25634__$1 == null);
var state_25703__$1 = (function (){var statearr_25709 = state_25703;
(statearr_25709[(8)] = inst_25634__$1);

return statearr_25709;
})();
if(cljs.core.truth_(inst_25635)){
var statearr_25710_25760 = state_25703__$1;
(statearr_25710_25760[(1)] = (5));

} else {
var statearr_25711_25761 = state_25703__$1;
(statearr_25711_25761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (15))){
var inst_25676 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25712_25762 = state_25703__$1;
(statearr_25712_25762[(2)] = inst_25676);

(statearr_25712_25762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (21))){
var inst_25696 = (state_25703[(2)]);
var state_25703__$1 = (function (){var statearr_25713 = state_25703;
(statearr_25713[(9)] = inst_25696);

return statearr_25713;
})();
var statearr_25714_25763 = state_25703__$1;
(statearr_25714_25763[(2)] = null);

(statearr_25714_25763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (13))){
var inst_25658 = (state_25703[(10)]);
var inst_25660 = cljs.core.chunked_seq_QMARK_.call(null,inst_25658);
var state_25703__$1 = state_25703;
if(inst_25660){
var statearr_25715_25764 = state_25703__$1;
(statearr_25715_25764[(1)] = (16));

} else {
var statearr_25716_25765 = state_25703__$1;
(statearr_25716_25765[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (22))){
var inst_25688 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
if(cljs.core.truth_(inst_25688)){
var statearr_25717_25766 = state_25703__$1;
(statearr_25717_25766[(1)] = (23));

} else {
var statearr_25718_25767 = state_25703__$1;
(statearr_25718_25767[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (6))){
var inst_25634 = (state_25703[(8)]);
var inst_25684 = (state_25703[(11)]);
var inst_25682 = (state_25703[(7)]);
var inst_25682__$1 = topic_fn.call(null,inst_25634);
var inst_25683 = cljs.core.deref.call(null,mults);
var inst_25684__$1 = cljs.core.get.call(null,inst_25683,inst_25682__$1);
var state_25703__$1 = (function (){var statearr_25719 = state_25703;
(statearr_25719[(11)] = inst_25684__$1);

(statearr_25719[(7)] = inst_25682__$1);

return statearr_25719;
})();
if(cljs.core.truth_(inst_25684__$1)){
var statearr_25720_25768 = state_25703__$1;
(statearr_25720_25768[(1)] = (19));

} else {
var statearr_25721_25769 = state_25703__$1;
(statearr_25721_25769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (25))){
var inst_25693 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25722_25770 = state_25703__$1;
(statearr_25722_25770[(2)] = inst_25693);

(statearr_25722_25770[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (17))){
var inst_25658 = (state_25703[(10)]);
var inst_25667 = cljs.core.first.call(null,inst_25658);
var inst_25668 = cljs.core.async.muxch_STAR_.call(null,inst_25667);
var inst_25669 = cljs.core.async.close_BANG_.call(null,inst_25668);
var inst_25670 = cljs.core.next.call(null,inst_25658);
var inst_25644 = inst_25670;
var inst_25645 = null;
var inst_25646 = (0);
var inst_25647 = (0);
var state_25703__$1 = (function (){var statearr_25723 = state_25703;
(statearr_25723[(12)] = inst_25647);

(statearr_25723[(13)] = inst_25644);

(statearr_25723[(14)] = inst_25669);

(statearr_25723[(15)] = inst_25646);

(statearr_25723[(16)] = inst_25645);

return statearr_25723;
})();
var statearr_25724_25771 = state_25703__$1;
(statearr_25724_25771[(2)] = null);

(statearr_25724_25771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (3))){
var inst_25701 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25703__$1,inst_25701);
} else {
if((state_val_25704 === (12))){
var inst_25678 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25725_25772 = state_25703__$1;
(statearr_25725_25772[(2)] = inst_25678);

(statearr_25725_25772[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (2))){
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25703__$1,(4),ch);
} else {
if((state_val_25704 === (23))){
var state_25703__$1 = state_25703;
var statearr_25726_25773 = state_25703__$1;
(statearr_25726_25773[(2)] = null);

(statearr_25726_25773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (19))){
var inst_25634 = (state_25703[(8)]);
var inst_25684 = (state_25703[(11)]);
var inst_25686 = cljs.core.async.muxch_STAR_.call(null,inst_25684);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25703__$1,(22),inst_25686,inst_25634);
} else {
if((state_val_25704 === (11))){
var inst_25658 = (state_25703[(10)]);
var inst_25644 = (state_25703[(13)]);
var inst_25658__$1 = cljs.core.seq.call(null,inst_25644);
var state_25703__$1 = (function (){var statearr_25727 = state_25703;
(statearr_25727[(10)] = inst_25658__$1);

return statearr_25727;
})();
if(inst_25658__$1){
var statearr_25728_25774 = state_25703__$1;
(statearr_25728_25774[(1)] = (13));

} else {
var statearr_25729_25775 = state_25703__$1;
(statearr_25729_25775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (9))){
var inst_25680 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25730_25776 = state_25703__$1;
(statearr_25730_25776[(2)] = inst_25680);

(statearr_25730_25776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (5))){
var inst_25641 = cljs.core.deref.call(null,mults);
var inst_25642 = cljs.core.vals.call(null,inst_25641);
var inst_25643 = cljs.core.seq.call(null,inst_25642);
var inst_25644 = inst_25643;
var inst_25645 = null;
var inst_25646 = (0);
var inst_25647 = (0);
var state_25703__$1 = (function (){var statearr_25731 = state_25703;
(statearr_25731[(12)] = inst_25647);

(statearr_25731[(13)] = inst_25644);

(statearr_25731[(15)] = inst_25646);

(statearr_25731[(16)] = inst_25645);

return statearr_25731;
})();
var statearr_25732_25777 = state_25703__$1;
(statearr_25732_25777[(2)] = null);

(statearr_25732_25777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (14))){
var state_25703__$1 = state_25703;
var statearr_25736_25778 = state_25703__$1;
(statearr_25736_25778[(2)] = null);

(statearr_25736_25778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (16))){
var inst_25658 = (state_25703[(10)]);
var inst_25662 = cljs.core.chunk_first.call(null,inst_25658);
var inst_25663 = cljs.core.chunk_rest.call(null,inst_25658);
var inst_25664 = cljs.core.count.call(null,inst_25662);
var inst_25644 = inst_25663;
var inst_25645 = inst_25662;
var inst_25646 = inst_25664;
var inst_25647 = (0);
var state_25703__$1 = (function (){var statearr_25737 = state_25703;
(statearr_25737[(12)] = inst_25647);

(statearr_25737[(13)] = inst_25644);

(statearr_25737[(15)] = inst_25646);

(statearr_25737[(16)] = inst_25645);

return statearr_25737;
})();
var statearr_25738_25779 = state_25703__$1;
(statearr_25738_25779[(2)] = null);

(statearr_25738_25779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (10))){
var inst_25647 = (state_25703[(12)]);
var inst_25644 = (state_25703[(13)]);
var inst_25646 = (state_25703[(15)]);
var inst_25645 = (state_25703[(16)]);
var inst_25652 = cljs.core._nth.call(null,inst_25645,inst_25647);
var inst_25653 = cljs.core.async.muxch_STAR_.call(null,inst_25652);
var inst_25654 = cljs.core.async.close_BANG_.call(null,inst_25653);
var inst_25655 = (inst_25647 + (1));
var tmp25733 = inst_25644;
var tmp25734 = inst_25646;
var tmp25735 = inst_25645;
var inst_25644__$1 = tmp25733;
var inst_25645__$1 = tmp25735;
var inst_25646__$1 = tmp25734;
var inst_25647__$1 = inst_25655;
var state_25703__$1 = (function (){var statearr_25739 = state_25703;
(statearr_25739[(12)] = inst_25647__$1);

(statearr_25739[(13)] = inst_25644__$1);

(statearr_25739[(15)] = inst_25646__$1);

(statearr_25739[(16)] = inst_25645__$1);

(statearr_25739[(17)] = inst_25654);

return statearr_25739;
})();
var statearr_25740_25780 = state_25703__$1;
(statearr_25740_25780[(2)] = null);

(statearr_25740_25780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (18))){
var inst_25673 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25741_25781 = state_25703__$1;
(statearr_25741_25781[(2)] = inst_25673);

(statearr_25741_25781[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (8))){
var inst_25647 = (state_25703[(12)]);
var inst_25646 = (state_25703[(15)]);
var inst_25649 = (inst_25647 < inst_25646);
var inst_25650 = inst_25649;
var state_25703__$1 = state_25703;
if(cljs.core.truth_(inst_25650)){
var statearr_25742_25782 = state_25703__$1;
(statearr_25742_25782[(1)] = (10));

} else {
var statearr_25743_25783 = state_25703__$1;
(statearr_25743_25783[(1)] = (11));

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
});})(c__23856__auto___25755,mults,ensure_mult,p))
;
return ((function (switch__23744__auto__,c__23856__auto___25755,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_25747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25747[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_25747[(1)] = (1));

return statearr_25747;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_25703){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e25748){if((e25748 instanceof Object)){
var ex__23748__auto__ = e25748;
var statearr_25749_25784 = state_25703;
(statearr_25749_25784[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25785 = state_25703;
state_25703 = G__25785;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_25703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_25703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___25755,mults,ensure_mult,p))
})();
var state__23858__auto__ = (function (){var statearr_25750 = f__23857__auto__.call(null);
(statearr_25750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___25755);

return statearr_25750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___25755,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25786 = [];
var len__20629__auto___25789 = arguments.length;
var i__20630__auto___25790 = (0);
while(true){
if((i__20630__auto___25790 < len__20629__auto___25789)){
args25786.push((arguments[i__20630__auto___25790]));

var G__25791 = (i__20630__auto___25790 + (1));
i__20630__auto___25790 = G__25791;
continue;
} else {
}
break;
}

var G__25788 = args25786.length;
switch (G__25788) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25786.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25793 = [];
var len__20629__auto___25796 = arguments.length;
var i__20630__auto___25797 = (0);
while(true){
if((i__20630__auto___25797 < len__20629__auto___25796)){
args25793.push((arguments[i__20630__auto___25797]));

var G__25798 = (i__20630__auto___25797 + (1));
i__20630__auto___25797 = G__25798;
continue;
} else {
}
break;
}

var G__25795 = args25793.length;
switch (G__25795) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25793.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25800 = [];
var len__20629__auto___25871 = arguments.length;
var i__20630__auto___25872 = (0);
while(true){
if((i__20630__auto___25872 < len__20629__auto___25871)){
args25800.push((arguments[i__20630__auto___25872]));

var G__25873 = (i__20630__auto___25872 + (1));
i__20630__auto___25872 = G__25873;
continue;
} else {
}
break;
}

var G__25802 = args25800.length;
switch (G__25802) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25800.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
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
var c__23856__auto___25875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25841){
var state_val_25842 = (state_25841[(1)]);
if((state_val_25842 === (7))){
var state_25841__$1 = state_25841;
var statearr_25843_25876 = state_25841__$1;
(statearr_25843_25876[(2)] = null);

(statearr_25843_25876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (1))){
var state_25841__$1 = state_25841;
var statearr_25844_25877 = state_25841__$1;
(statearr_25844_25877[(2)] = null);

(statearr_25844_25877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (4))){
var inst_25805 = (state_25841[(7)]);
var inst_25807 = (inst_25805 < cnt);
var state_25841__$1 = state_25841;
if(cljs.core.truth_(inst_25807)){
var statearr_25845_25878 = state_25841__$1;
(statearr_25845_25878[(1)] = (6));

} else {
var statearr_25846_25879 = state_25841__$1;
(statearr_25846_25879[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (15))){
var inst_25837 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25847_25880 = state_25841__$1;
(statearr_25847_25880[(2)] = inst_25837);

(statearr_25847_25880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (13))){
var inst_25830 = cljs.core.async.close_BANG_.call(null,out);
var state_25841__$1 = state_25841;
var statearr_25848_25881 = state_25841__$1;
(statearr_25848_25881[(2)] = inst_25830);

(statearr_25848_25881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (6))){
var state_25841__$1 = state_25841;
var statearr_25849_25882 = state_25841__$1;
(statearr_25849_25882[(2)] = null);

(statearr_25849_25882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (3))){
var inst_25839 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25841__$1,inst_25839);
} else {
if((state_val_25842 === (12))){
var inst_25827 = (state_25841[(8)]);
var inst_25827__$1 = (state_25841[(2)]);
var inst_25828 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25827__$1);
var state_25841__$1 = (function (){var statearr_25850 = state_25841;
(statearr_25850[(8)] = inst_25827__$1);

return statearr_25850;
})();
if(cljs.core.truth_(inst_25828)){
var statearr_25851_25883 = state_25841__$1;
(statearr_25851_25883[(1)] = (13));

} else {
var statearr_25852_25884 = state_25841__$1;
(statearr_25852_25884[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (2))){
var inst_25804 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25805 = (0);
var state_25841__$1 = (function (){var statearr_25853 = state_25841;
(statearr_25853[(7)] = inst_25805);

(statearr_25853[(9)] = inst_25804);

return statearr_25853;
})();
var statearr_25854_25885 = state_25841__$1;
(statearr_25854_25885[(2)] = null);

(statearr_25854_25885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (11))){
var inst_25805 = (state_25841[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25841,(10),Object,null,(9));
var inst_25814 = chs__$1.call(null,inst_25805);
var inst_25815 = done.call(null,inst_25805);
var inst_25816 = cljs.core.async.take_BANG_.call(null,inst_25814,inst_25815);
var state_25841__$1 = state_25841;
var statearr_25855_25886 = state_25841__$1;
(statearr_25855_25886[(2)] = inst_25816);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (9))){
var inst_25805 = (state_25841[(7)]);
var inst_25818 = (state_25841[(2)]);
var inst_25819 = (inst_25805 + (1));
var inst_25805__$1 = inst_25819;
var state_25841__$1 = (function (){var statearr_25856 = state_25841;
(statearr_25856[(7)] = inst_25805__$1);

(statearr_25856[(10)] = inst_25818);

return statearr_25856;
})();
var statearr_25857_25887 = state_25841__$1;
(statearr_25857_25887[(2)] = null);

(statearr_25857_25887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (5))){
var inst_25825 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25858 = state_25841;
(statearr_25858[(11)] = inst_25825);

return statearr_25858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25841__$1,(12),dchan);
} else {
if((state_val_25842 === (14))){
var inst_25827 = (state_25841[(8)]);
var inst_25832 = cljs.core.apply.call(null,f,inst_25827);
var state_25841__$1 = state_25841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25841__$1,(16),out,inst_25832);
} else {
if((state_val_25842 === (16))){
var inst_25834 = (state_25841[(2)]);
var state_25841__$1 = (function (){var statearr_25859 = state_25841;
(statearr_25859[(12)] = inst_25834);

return statearr_25859;
})();
var statearr_25860_25888 = state_25841__$1;
(statearr_25860_25888[(2)] = null);

(statearr_25860_25888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (10))){
var inst_25809 = (state_25841[(2)]);
var inst_25810 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25841__$1 = (function (){var statearr_25861 = state_25841;
(statearr_25861[(13)] = inst_25809);

return statearr_25861;
})();
var statearr_25862_25889 = state_25841__$1;
(statearr_25862_25889[(2)] = inst_25810);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25842 === (8))){
var inst_25823 = (state_25841[(2)]);
var state_25841__$1 = state_25841;
var statearr_25863_25890 = state_25841__$1;
(statearr_25863_25890[(2)] = inst_25823);

(statearr_25863_25890[(1)] = (5));


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
});})(c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23744__auto__,c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_25867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25867[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_25867[(1)] = (1));

return statearr_25867;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_25841){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e25868){if((e25868 instanceof Object)){
var ex__23748__auto__ = e25868;
var statearr_25869_25891 = state_25841;
(statearr_25869_25891[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25892 = state_25841;
state_25841 = G__25892;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_25841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_25841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23858__auto__ = (function (){var statearr_25870 = f__23857__auto__.call(null);
(statearr_25870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___25875);

return statearr_25870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___25875,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25894 = [];
var len__20629__auto___25950 = arguments.length;
var i__20630__auto___25951 = (0);
while(true){
if((i__20630__auto___25951 < len__20629__auto___25950)){
args25894.push((arguments[i__20630__auto___25951]));

var G__25952 = (i__20630__auto___25951 + (1));
i__20630__auto___25951 = G__25952;
continue;
} else {
}
break;
}

var G__25896 = args25894.length;
switch (G__25896) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25894.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___25954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___25954,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___25954,out){
return (function (state_25926){
var state_val_25927 = (state_25926[(1)]);
if((state_val_25927 === (7))){
var inst_25906 = (state_25926[(7)]);
var inst_25905 = (state_25926[(8)]);
var inst_25905__$1 = (state_25926[(2)]);
var inst_25906__$1 = cljs.core.nth.call(null,inst_25905__$1,(0),null);
var inst_25907 = cljs.core.nth.call(null,inst_25905__$1,(1),null);
var inst_25908 = (inst_25906__$1 == null);
var state_25926__$1 = (function (){var statearr_25928 = state_25926;
(statearr_25928[(7)] = inst_25906__$1);

(statearr_25928[(9)] = inst_25907);

(statearr_25928[(8)] = inst_25905__$1);

return statearr_25928;
})();
if(cljs.core.truth_(inst_25908)){
var statearr_25929_25955 = state_25926__$1;
(statearr_25929_25955[(1)] = (8));

} else {
var statearr_25930_25956 = state_25926__$1;
(statearr_25930_25956[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (1))){
var inst_25897 = cljs.core.vec.call(null,chs);
var inst_25898 = inst_25897;
var state_25926__$1 = (function (){var statearr_25931 = state_25926;
(statearr_25931[(10)] = inst_25898);

return statearr_25931;
})();
var statearr_25932_25957 = state_25926__$1;
(statearr_25932_25957[(2)] = null);

(statearr_25932_25957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (4))){
var inst_25898 = (state_25926[(10)]);
var state_25926__$1 = state_25926;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25926__$1,(7),inst_25898);
} else {
if((state_val_25927 === (6))){
var inst_25922 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25933_25958 = state_25926__$1;
(statearr_25933_25958[(2)] = inst_25922);

(statearr_25933_25958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (3))){
var inst_25924 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25926__$1,inst_25924);
} else {
if((state_val_25927 === (2))){
var inst_25898 = (state_25926[(10)]);
var inst_25900 = cljs.core.count.call(null,inst_25898);
var inst_25901 = (inst_25900 > (0));
var state_25926__$1 = state_25926;
if(cljs.core.truth_(inst_25901)){
var statearr_25935_25959 = state_25926__$1;
(statearr_25935_25959[(1)] = (4));

} else {
var statearr_25936_25960 = state_25926__$1;
(statearr_25936_25960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (11))){
var inst_25898 = (state_25926[(10)]);
var inst_25915 = (state_25926[(2)]);
var tmp25934 = inst_25898;
var inst_25898__$1 = tmp25934;
var state_25926__$1 = (function (){var statearr_25937 = state_25926;
(statearr_25937[(10)] = inst_25898__$1);

(statearr_25937[(11)] = inst_25915);

return statearr_25937;
})();
var statearr_25938_25961 = state_25926__$1;
(statearr_25938_25961[(2)] = null);

(statearr_25938_25961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (9))){
var inst_25906 = (state_25926[(7)]);
var state_25926__$1 = state_25926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25926__$1,(11),out,inst_25906);
} else {
if((state_val_25927 === (5))){
var inst_25920 = cljs.core.async.close_BANG_.call(null,out);
var state_25926__$1 = state_25926;
var statearr_25939_25962 = state_25926__$1;
(statearr_25939_25962[(2)] = inst_25920);

(statearr_25939_25962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (10))){
var inst_25918 = (state_25926[(2)]);
var state_25926__$1 = state_25926;
var statearr_25940_25963 = state_25926__$1;
(statearr_25940_25963[(2)] = inst_25918);

(statearr_25940_25963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25927 === (8))){
var inst_25898 = (state_25926[(10)]);
var inst_25906 = (state_25926[(7)]);
var inst_25907 = (state_25926[(9)]);
var inst_25905 = (state_25926[(8)]);
var inst_25910 = (function (){var cs = inst_25898;
var vec__25903 = inst_25905;
var v = inst_25906;
var c = inst_25907;
return ((function (cs,vec__25903,v,c,inst_25898,inst_25906,inst_25907,inst_25905,state_val_25927,c__23856__auto___25954,out){
return (function (p1__25893_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25893_SHARP_);
});
;})(cs,vec__25903,v,c,inst_25898,inst_25906,inst_25907,inst_25905,state_val_25927,c__23856__auto___25954,out))
})();
var inst_25911 = cljs.core.filterv.call(null,inst_25910,inst_25898);
var inst_25898__$1 = inst_25911;
var state_25926__$1 = (function (){var statearr_25941 = state_25926;
(statearr_25941[(10)] = inst_25898__$1);

return statearr_25941;
})();
var statearr_25942_25964 = state_25926__$1;
(statearr_25942_25964[(2)] = null);

(statearr_25942_25964[(1)] = (2));


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
});})(c__23856__auto___25954,out))
;
return ((function (switch__23744__auto__,c__23856__auto___25954,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_25946 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25946[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_25946[(1)] = (1));

return statearr_25946;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_25926){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e25947){if((e25947 instanceof Object)){
var ex__23748__auto__ = e25947;
var statearr_25948_25965 = state_25926;
(statearr_25948_25965[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25966 = state_25926;
state_25926 = G__25966;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_25926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_25926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___25954,out))
})();
var state__23858__auto__ = (function (){var statearr_25949 = f__23857__auto__.call(null);
(statearr_25949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___25954);

return statearr_25949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___25954,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25967 = [];
var len__20629__auto___26016 = arguments.length;
var i__20630__auto___26017 = (0);
while(true){
if((i__20630__auto___26017 < len__20629__auto___26016)){
args25967.push((arguments[i__20630__auto___26017]));

var G__26018 = (i__20630__auto___26017 + (1));
i__20630__auto___26017 = G__26018;
continue;
} else {
}
break;
}

var G__25969 = args25967.length;
switch (G__25969) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25967.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___26020 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___26020,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___26020,out){
return (function (state_25993){
var state_val_25994 = (state_25993[(1)]);
if((state_val_25994 === (7))){
var inst_25975 = (state_25993[(7)]);
var inst_25975__$1 = (state_25993[(2)]);
var inst_25976 = (inst_25975__$1 == null);
var inst_25977 = cljs.core.not.call(null,inst_25976);
var state_25993__$1 = (function (){var statearr_25995 = state_25993;
(statearr_25995[(7)] = inst_25975__$1);

return statearr_25995;
})();
if(inst_25977){
var statearr_25996_26021 = state_25993__$1;
(statearr_25996_26021[(1)] = (8));

} else {
var statearr_25997_26022 = state_25993__$1;
(statearr_25997_26022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (1))){
var inst_25970 = (0);
var state_25993__$1 = (function (){var statearr_25998 = state_25993;
(statearr_25998[(8)] = inst_25970);

return statearr_25998;
})();
var statearr_25999_26023 = state_25993__$1;
(statearr_25999_26023[(2)] = null);

(statearr_25999_26023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (4))){
var state_25993__$1 = state_25993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25993__$1,(7),ch);
} else {
if((state_val_25994 === (6))){
var inst_25988 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26000_26024 = state_25993__$1;
(statearr_26000_26024[(2)] = inst_25988);

(statearr_26000_26024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (3))){
var inst_25990 = (state_25993[(2)]);
var inst_25991 = cljs.core.async.close_BANG_.call(null,out);
var state_25993__$1 = (function (){var statearr_26001 = state_25993;
(statearr_26001[(9)] = inst_25990);

return statearr_26001;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25993__$1,inst_25991);
} else {
if((state_val_25994 === (2))){
var inst_25970 = (state_25993[(8)]);
var inst_25972 = (inst_25970 < n);
var state_25993__$1 = state_25993;
if(cljs.core.truth_(inst_25972)){
var statearr_26002_26025 = state_25993__$1;
(statearr_26002_26025[(1)] = (4));

} else {
var statearr_26003_26026 = state_25993__$1;
(statearr_26003_26026[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (11))){
var inst_25970 = (state_25993[(8)]);
var inst_25980 = (state_25993[(2)]);
var inst_25981 = (inst_25970 + (1));
var inst_25970__$1 = inst_25981;
var state_25993__$1 = (function (){var statearr_26004 = state_25993;
(statearr_26004[(8)] = inst_25970__$1);

(statearr_26004[(10)] = inst_25980);

return statearr_26004;
})();
var statearr_26005_26027 = state_25993__$1;
(statearr_26005_26027[(2)] = null);

(statearr_26005_26027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (9))){
var state_25993__$1 = state_25993;
var statearr_26006_26028 = state_25993__$1;
(statearr_26006_26028[(2)] = null);

(statearr_26006_26028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (5))){
var state_25993__$1 = state_25993;
var statearr_26007_26029 = state_25993__$1;
(statearr_26007_26029[(2)] = null);

(statearr_26007_26029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (10))){
var inst_25985 = (state_25993[(2)]);
var state_25993__$1 = state_25993;
var statearr_26008_26030 = state_25993__$1;
(statearr_26008_26030[(2)] = inst_25985);

(statearr_26008_26030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25994 === (8))){
var inst_25975 = (state_25993[(7)]);
var state_25993__$1 = state_25993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25993__$1,(11),out,inst_25975);
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
});})(c__23856__auto___26020,out))
;
return ((function (switch__23744__auto__,c__23856__auto___26020,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_26012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26012[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_26012[(1)] = (1));

return statearr_26012;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_25993){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_25993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26013){if((e26013 instanceof Object)){
var ex__23748__auto__ = e26013;
var statearr_26014_26031 = state_25993;
(statearr_26014_26031[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26032 = state_25993;
state_25993 = G__26032;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_25993){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_25993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___26020,out))
})();
var state__23858__auto__ = (function (){var statearr_26015 = f__23857__auto__.call(null);
(statearr_26015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___26020);

return statearr_26015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___26020,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26040 = (function (map_LT_,f,ch,meta26041){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26041 = meta26041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26042,meta26041__$1){
var self__ = this;
var _26042__$1 = this;
return (new cljs.core.async.t_cljs$core$async26040(self__.map_LT_,self__.f,self__.ch,meta26041__$1));
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26042){
var self__ = this;
var _26042__$1 = this;
return self__.meta26041;
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26043 = (function (map_LT_,f,ch,meta26041,_,fn1,meta26044){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26041 = meta26041;
this._ = _;
this.fn1 = fn1;
this.meta26044 = meta26044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26045,meta26044__$1){
var self__ = this;
var _26045__$1 = this;
return (new cljs.core.async.t_cljs$core$async26043(self__.map_LT_,self__.f,self__.ch,self__.meta26041,self__._,self__.fn1,meta26044__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26045){
var self__ = this;
var _26045__$1 = this;
return self__.meta26044;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26033_SHARP_){
return f1.call(null,(((p1__26033_SHARP_ == null))?null:self__.f.call(null,p1__26033_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26041","meta26041",195253548,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26040","cljs.core.async/t_cljs$core$async26040",-839209385,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26044","meta26044",248104927,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26043";

cljs.core.async.t_cljs$core$async26043.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async26043");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26043 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26043(map_LT___$1,f__$1,ch__$1,meta26041__$1,___$2,fn1__$1,meta26044){
return (new cljs.core.async.t_cljs$core$async26043(map_LT___$1,f__$1,ch__$1,meta26041__$1,___$2,fn1__$1,meta26044));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26043(self__.map_LT_,self__.f,self__.ch,self__.meta26041,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19558__auto__ = ret;
if(cljs.core.truth_(and__19558__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19558__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26041","meta26041",195253548,null)], null);
});

cljs.core.async.t_cljs$core$async26040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26040";

cljs.core.async.t_cljs$core$async26040.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async26040");
});

cljs.core.async.__GT_t_cljs$core$async26040 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26040(map_LT___$1,f__$1,ch__$1,meta26041){
return (new cljs.core.async.t_cljs$core$async26040(map_LT___$1,f__$1,ch__$1,meta26041));
});

}

return (new cljs.core.async.t_cljs$core$async26040(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26049 = (function (map_GT_,f,ch,meta26050){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26050 = meta26050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26051,meta26050__$1){
var self__ = this;
var _26051__$1 = this;
return (new cljs.core.async.t_cljs$core$async26049(self__.map_GT_,self__.f,self__.ch,meta26050__$1));
});

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26051){
var self__ = this;
var _26051__$1 = this;
return self__.meta26050;
});

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26050","meta26050",-1813340745,null)], null);
});

cljs.core.async.t_cljs$core$async26049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26049";

cljs.core.async.t_cljs$core$async26049.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async26049");
});

cljs.core.async.__GT_t_cljs$core$async26049 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26049(map_GT___$1,f__$1,ch__$1,meta26050){
return (new cljs.core.async.t_cljs$core$async26049(map_GT___$1,f__$1,ch__$1,meta26050));
});

}

return (new cljs.core.async.t_cljs$core$async26049(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26055 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26055 = (function (filter_GT_,p,ch,meta26056){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26056 = meta26056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26057,meta26056__$1){
var self__ = this;
var _26057__$1 = this;
return (new cljs.core.async.t_cljs$core$async26055(self__.filter_GT_,self__.p,self__.ch,meta26056__$1));
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26057){
var self__ = this;
var _26057__$1 = this;
return self__.meta26056;
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26055.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26056","meta26056",-1423091189,null)], null);
});

cljs.core.async.t_cljs$core$async26055.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26055";

cljs.core.async.t_cljs$core$async26055.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"cljs.core.async/t_cljs$core$async26055");
});

cljs.core.async.__GT_t_cljs$core$async26055 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26055(filter_GT___$1,p__$1,ch__$1,meta26056){
return (new cljs.core.async.t_cljs$core$async26055(filter_GT___$1,p__$1,ch__$1,meta26056));
});

}

return (new cljs.core.async.t_cljs$core$async26055(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args26058 = [];
var len__20629__auto___26102 = arguments.length;
var i__20630__auto___26103 = (0);
while(true){
if((i__20630__auto___26103 < len__20629__auto___26102)){
args26058.push((arguments[i__20630__auto___26103]));

var G__26104 = (i__20630__auto___26103 + (1));
i__20630__auto___26103 = G__26104;
continue;
} else {
}
break;
}

var G__26060 = args26058.length;
switch (G__26060) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26058.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___26106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___26106,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___26106,out){
return (function (state_26081){
var state_val_26082 = (state_26081[(1)]);
if((state_val_26082 === (7))){
var inst_26077 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26083_26107 = state_26081__$1;
(statearr_26083_26107[(2)] = inst_26077);

(statearr_26083_26107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (1))){
var state_26081__$1 = state_26081;
var statearr_26084_26108 = state_26081__$1;
(statearr_26084_26108[(2)] = null);

(statearr_26084_26108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (4))){
var inst_26063 = (state_26081[(7)]);
var inst_26063__$1 = (state_26081[(2)]);
var inst_26064 = (inst_26063__$1 == null);
var state_26081__$1 = (function (){var statearr_26085 = state_26081;
(statearr_26085[(7)] = inst_26063__$1);

return statearr_26085;
})();
if(cljs.core.truth_(inst_26064)){
var statearr_26086_26109 = state_26081__$1;
(statearr_26086_26109[(1)] = (5));

} else {
var statearr_26087_26110 = state_26081__$1;
(statearr_26087_26110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (6))){
var inst_26063 = (state_26081[(7)]);
var inst_26068 = p.call(null,inst_26063);
var state_26081__$1 = state_26081;
if(cljs.core.truth_(inst_26068)){
var statearr_26088_26111 = state_26081__$1;
(statearr_26088_26111[(1)] = (8));

} else {
var statearr_26089_26112 = state_26081__$1;
(statearr_26089_26112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (3))){
var inst_26079 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26081__$1,inst_26079);
} else {
if((state_val_26082 === (2))){
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26081__$1,(4),ch);
} else {
if((state_val_26082 === (11))){
var inst_26071 = (state_26081[(2)]);
var state_26081__$1 = state_26081;
var statearr_26090_26113 = state_26081__$1;
(statearr_26090_26113[(2)] = inst_26071);

(statearr_26090_26113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (9))){
var state_26081__$1 = state_26081;
var statearr_26091_26114 = state_26081__$1;
(statearr_26091_26114[(2)] = null);

(statearr_26091_26114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (5))){
var inst_26066 = cljs.core.async.close_BANG_.call(null,out);
var state_26081__$1 = state_26081;
var statearr_26092_26115 = state_26081__$1;
(statearr_26092_26115[(2)] = inst_26066);

(statearr_26092_26115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (10))){
var inst_26074 = (state_26081[(2)]);
var state_26081__$1 = (function (){var statearr_26093 = state_26081;
(statearr_26093[(8)] = inst_26074);

return statearr_26093;
})();
var statearr_26094_26116 = state_26081__$1;
(statearr_26094_26116[(2)] = null);

(statearr_26094_26116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26082 === (8))){
var inst_26063 = (state_26081[(7)]);
var state_26081__$1 = state_26081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26081__$1,(11),out,inst_26063);
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
});})(c__23856__auto___26106,out))
;
return ((function (switch__23744__auto__,c__23856__auto___26106,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_26098 = [null,null,null,null,null,null,null,null,null];
(statearr_26098[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_26098[(1)] = (1));

return statearr_26098;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_26081){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_26081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26099){if((e26099 instanceof Object)){
var ex__23748__auto__ = e26099;
var statearr_26100_26117 = state_26081;
(statearr_26100_26117[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26118 = state_26081;
state_26081 = G__26118;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_26081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_26081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___26106,out))
})();
var state__23858__auto__ = (function (){var statearr_26101 = f__23857__auto__.call(null);
(statearr_26101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___26106);

return statearr_26101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___26106,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26119 = [];
var len__20629__auto___26122 = arguments.length;
var i__20630__auto___26123 = (0);
while(true){
if((i__20630__auto___26123 < len__20629__auto___26122)){
args26119.push((arguments[i__20630__auto___26123]));

var G__26124 = (i__20630__auto___26123 + (1));
i__20630__auto___26123 = G__26124;
continue;
} else {
}
break;
}

var G__26121 = args26119.length;
switch (G__26121) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26119.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_26291){
var state_val_26292 = (state_26291[(1)]);
if((state_val_26292 === (7))){
var inst_26287 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26293_26334 = state_26291__$1;
(statearr_26293_26334[(2)] = inst_26287);

(statearr_26293_26334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (20))){
var inst_26257 = (state_26291[(7)]);
var inst_26268 = (state_26291[(2)]);
var inst_26269 = cljs.core.next.call(null,inst_26257);
var inst_26243 = inst_26269;
var inst_26244 = null;
var inst_26245 = (0);
var inst_26246 = (0);
var state_26291__$1 = (function (){var statearr_26294 = state_26291;
(statearr_26294[(8)] = inst_26245);

(statearr_26294[(9)] = inst_26268);

(statearr_26294[(10)] = inst_26244);

(statearr_26294[(11)] = inst_26246);

(statearr_26294[(12)] = inst_26243);

return statearr_26294;
})();
var statearr_26295_26335 = state_26291__$1;
(statearr_26295_26335[(2)] = null);

(statearr_26295_26335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (1))){
var state_26291__$1 = state_26291;
var statearr_26296_26336 = state_26291__$1;
(statearr_26296_26336[(2)] = null);

(statearr_26296_26336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (4))){
var inst_26232 = (state_26291[(13)]);
var inst_26232__$1 = (state_26291[(2)]);
var inst_26233 = (inst_26232__$1 == null);
var state_26291__$1 = (function (){var statearr_26297 = state_26291;
(statearr_26297[(13)] = inst_26232__$1);

return statearr_26297;
})();
if(cljs.core.truth_(inst_26233)){
var statearr_26298_26337 = state_26291__$1;
(statearr_26298_26337[(1)] = (5));

} else {
var statearr_26299_26338 = state_26291__$1;
(statearr_26299_26338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (15))){
var state_26291__$1 = state_26291;
var statearr_26303_26339 = state_26291__$1;
(statearr_26303_26339[(2)] = null);

(statearr_26303_26339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (21))){
var state_26291__$1 = state_26291;
var statearr_26304_26340 = state_26291__$1;
(statearr_26304_26340[(2)] = null);

(statearr_26304_26340[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (13))){
var inst_26245 = (state_26291[(8)]);
var inst_26244 = (state_26291[(10)]);
var inst_26246 = (state_26291[(11)]);
var inst_26243 = (state_26291[(12)]);
var inst_26253 = (state_26291[(2)]);
var inst_26254 = (inst_26246 + (1));
var tmp26300 = inst_26245;
var tmp26301 = inst_26244;
var tmp26302 = inst_26243;
var inst_26243__$1 = tmp26302;
var inst_26244__$1 = tmp26301;
var inst_26245__$1 = tmp26300;
var inst_26246__$1 = inst_26254;
var state_26291__$1 = (function (){var statearr_26305 = state_26291;
(statearr_26305[(8)] = inst_26245__$1);

(statearr_26305[(10)] = inst_26244__$1);

(statearr_26305[(11)] = inst_26246__$1);

(statearr_26305[(12)] = inst_26243__$1);

(statearr_26305[(14)] = inst_26253);

return statearr_26305;
})();
var statearr_26306_26341 = state_26291__$1;
(statearr_26306_26341[(2)] = null);

(statearr_26306_26341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (22))){
var state_26291__$1 = state_26291;
var statearr_26307_26342 = state_26291__$1;
(statearr_26307_26342[(2)] = null);

(statearr_26307_26342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (6))){
var inst_26232 = (state_26291[(13)]);
var inst_26241 = f.call(null,inst_26232);
var inst_26242 = cljs.core.seq.call(null,inst_26241);
var inst_26243 = inst_26242;
var inst_26244 = null;
var inst_26245 = (0);
var inst_26246 = (0);
var state_26291__$1 = (function (){var statearr_26308 = state_26291;
(statearr_26308[(8)] = inst_26245);

(statearr_26308[(10)] = inst_26244);

(statearr_26308[(11)] = inst_26246);

(statearr_26308[(12)] = inst_26243);

return statearr_26308;
})();
var statearr_26309_26343 = state_26291__$1;
(statearr_26309_26343[(2)] = null);

(statearr_26309_26343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (17))){
var inst_26257 = (state_26291[(7)]);
var inst_26261 = cljs.core.chunk_first.call(null,inst_26257);
var inst_26262 = cljs.core.chunk_rest.call(null,inst_26257);
var inst_26263 = cljs.core.count.call(null,inst_26261);
var inst_26243 = inst_26262;
var inst_26244 = inst_26261;
var inst_26245 = inst_26263;
var inst_26246 = (0);
var state_26291__$1 = (function (){var statearr_26310 = state_26291;
(statearr_26310[(8)] = inst_26245);

(statearr_26310[(10)] = inst_26244);

(statearr_26310[(11)] = inst_26246);

(statearr_26310[(12)] = inst_26243);

return statearr_26310;
})();
var statearr_26311_26344 = state_26291__$1;
(statearr_26311_26344[(2)] = null);

(statearr_26311_26344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (3))){
var inst_26289 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26291__$1,inst_26289);
} else {
if((state_val_26292 === (12))){
var inst_26277 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26312_26345 = state_26291__$1;
(statearr_26312_26345[(2)] = inst_26277);

(statearr_26312_26345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (2))){
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26291__$1,(4),in$);
} else {
if((state_val_26292 === (23))){
var inst_26285 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26313_26346 = state_26291__$1;
(statearr_26313_26346[(2)] = inst_26285);

(statearr_26313_26346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (19))){
var inst_26272 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26314_26347 = state_26291__$1;
(statearr_26314_26347[(2)] = inst_26272);

(statearr_26314_26347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (11))){
var inst_26257 = (state_26291[(7)]);
var inst_26243 = (state_26291[(12)]);
var inst_26257__$1 = cljs.core.seq.call(null,inst_26243);
var state_26291__$1 = (function (){var statearr_26315 = state_26291;
(statearr_26315[(7)] = inst_26257__$1);

return statearr_26315;
})();
if(inst_26257__$1){
var statearr_26316_26348 = state_26291__$1;
(statearr_26316_26348[(1)] = (14));

} else {
var statearr_26317_26349 = state_26291__$1;
(statearr_26317_26349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (9))){
var inst_26279 = (state_26291[(2)]);
var inst_26280 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26291__$1 = (function (){var statearr_26318 = state_26291;
(statearr_26318[(15)] = inst_26279);

return statearr_26318;
})();
if(cljs.core.truth_(inst_26280)){
var statearr_26319_26350 = state_26291__$1;
(statearr_26319_26350[(1)] = (21));

} else {
var statearr_26320_26351 = state_26291__$1;
(statearr_26320_26351[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (5))){
var inst_26235 = cljs.core.async.close_BANG_.call(null,out);
var state_26291__$1 = state_26291;
var statearr_26321_26352 = state_26291__$1;
(statearr_26321_26352[(2)] = inst_26235);

(statearr_26321_26352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (14))){
var inst_26257 = (state_26291[(7)]);
var inst_26259 = cljs.core.chunked_seq_QMARK_.call(null,inst_26257);
var state_26291__$1 = state_26291;
if(inst_26259){
var statearr_26322_26353 = state_26291__$1;
(statearr_26322_26353[(1)] = (17));

} else {
var statearr_26323_26354 = state_26291__$1;
(statearr_26323_26354[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (16))){
var inst_26275 = (state_26291[(2)]);
var state_26291__$1 = state_26291;
var statearr_26324_26355 = state_26291__$1;
(statearr_26324_26355[(2)] = inst_26275);

(statearr_26324_26355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26292 === (10))){
var inst_26244 = (state_26291[(10)]);
var inst_26246 = (state_26291[(11)]);
var inst_26251 = cljs.core._nth.call(null,inst_26244,inst_26246);
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26291__$1,(13),out,inst_26251);
} else {
if((state_val_26292 === (18))){
var inst_26257 = (state_26291[(7)]);
var inst_26266 = cljs.core.first.call(null,inst_26257);
var state_26291__$1 = state_26291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26291__$1,(20),out,inst_26266);
} else {
if((state_val_26292 === (8))){
var inst_26245 = (state_26291[(8)]);
var inst_26246 = (state_26291[(11)]);
var inst_26248 = (inst_26246 < inst_26245);
var inst_26249 = inst_26248;
var state_26291__$1 = state_26291;
if(cljs.core.truth_(inst_26249)){
var statearr_26325_26356 = state_26291__$1;
(statearr_26325_26356[(1)] = (10));

} else {
var statearr_26326_26357 = state_26291__$1;
(statearr_26326_26357[(1)] = (11));

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
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____0 = (function (){
var statearr_26330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26330[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__);

(statearr_26330[(1)] = (1));

return statearr_26330;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____1 = (function (state_26291){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_26291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26331){if((e26331 instanceof Object)){
var ex__23748__auto__ = e26331;
var statearr_26332_26358 = state_26291;
(statearr_26332_26358[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26359 = state_26291;
state_26291 = G__26359;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__ = function(state_26291){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____1.call(this,state_26291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23745__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_26333 = f__23857__auto__.call(null);
(statearr_26333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_26333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26360 = [];
var len__20629__auto___26363 = arguments.length;
var i__20630__auto___26364 = (0);
while(true){
if((i__20630__auto___26364 < len__20629__auto___26363)){
args26360.push((arguments[i__20630__auto___26364]));

var G__26365 = (i__20630__auto___26364 + (1));
i__20630__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var G__26362 = args26360.length;
switch (G__26362) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26360.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26367 = [];
var len__20629__auto___26370 = arguments.length;
var i__20630__auto___26371 = (0);
while(true){
if((i__20630__auto___26371 < len__20629__auto___26370)){
args26367.push((arguments[i__20630__auto___26371]));

var G__26372 = (i__20630__auto___26371 + (1));
i__20630__auto___26371 = G__26372;
continue;
} else {
}
break;
}

var G__26369 = args26367.length;
switch (G__26369) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26367.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26374 = [];
var len__20629__auto___26425 = arguments.length;
var i__20630__auto___26426 = (0);
while(true){
if((i__20630__auto___26426 < len__20629__auto___26425)){
args26374.push((arguments[i__20630__auto___26426]));

var G__26427 = (i__20630__auto___26426 + (1));
i__20630__auto___26426 = G__26427;
continue;
} else {
}
break;
}

var G__26376 = args26374.length;
switch (G__26376) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26374.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___26429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___26429,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___26429,out){
return (function (state_26400){
var state_val_26401 = (state_26400[(1)]);
if((state_val_26401 === (7))){
var inst_26395 = (state_26400[(2)]);
var state_26400__$1 = state_26400;
var statearr_26402_26430 = state_26400__$1;
(statearr_26402_26430[(2)] = inst_26395);

(statearr_26402_26430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (1))){
var inst_26377 = null;
var state_26400__$1 = (function (){var statearr_26403 = state_26400;
(statearr_26403[(7)] = inst_26377);

return statearr_26403;
})();
var statearr_26404_26431 = state_26400__$1;
(statearr_26404_26431[(2)] = null);

(statearr_26404_26431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (4))){
var inst_26380 = (state_26400[(8)]);
var inst_26380__$1 = (state_26400[(2)]);
var inst_26381 = (inst_26380__$1 == null);
var inst_26382 = cljs.core.not.call(null,inst_26381);
var state_26400__$1 = (function (){var statearr_26405 = state_26400;
(statearr_26405[(8)] = inst_26380__$1);

return statearr_26405;
})();
if(inst_26382){
var statearr_26406_26432 = state_26400__$1;
(statearr_26406_26432[(1)] = (5));

} else {
var statearr_26407_26433 = state_26400__$1;
(statearr_26407_26433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (6))){
var state_26400__$1 = state_26400;
var statearr_26408_26434 = state_26400__$1;
(statearr_26408_26434[(2)] = null);

(statearr_26408_26434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (3))){
var inst_26397 = (state_26400[(2)]);
var inst_26398 = cljs.core.async.close_BANG_.call(null,out);
var state_26400__$1 = (function (){var statearr_26409 = state_26400;
(statearr_26409[(9)] = inst_26397);

return statearr_26409;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26400__$1,inst_26398);
} else {
if((state_val_26401 === (2))){
var state_26400__$1 = state_26400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26400__$1,(4),ch);
} else {
if((state_val_26401 === (11))){
var inst_26380 = (state_26400[(8)]);
var inst_26389 = (state_26400[(2)]);
var inst_26377 = inst_26380;
var state_26400__$1 = (function (){var statearr_26410 = state_26400;
(statearr_26410[(7)] = inst_26377);

(statearr_26410[(10)] = inst_26389);

return statearr_26410;
})();
var statearr_26411_26435 = state_26400__$1;
(statearr_26411_26435[(2)] = null);

(statearr_26411_26435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (9))){
var inst_26380 = (state_26400[(8)]);
var state_26400__$1 = state_26400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26400__$1,(11),out,inst_26380);
} else {
if((state_val_26401 === (5))){
var inst_26377 = (state_26400[(7)]);
var inst_26380 = (state_26400[(8)]);
var inst_26384 = cljs.core._EQ_.call(null,inst_26380,inst_26377);
var state_26400__$1 = state_26400;
if(inst_26384){
var statearr_26413_26436 = state_26400__$1;
(statearr_26413_26436[(1)] = (8));

} else {
var statearr_26414_26437 = state_26400__$1;
(statearr_26414_26437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (10))){
var inst_26392 = (state_26400[(2)]);
var state_26400__$1 = state_26400;
var statearr_26415_26438 = state_26400__$1;
(statearr_26415_26438[(2)] = inst_26392);

(statearr_26415_26438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26401 === (8))){
var inst_26377 = (state_26400[(7)]);
var tmp26412 = inst_26377;
var inst_26377__$1 = tmp26412;
var state_26400__$1 = (function (){var statearr_26416 = state_26400;
(statearr_26416[(7)] = inst_26377__$1);

return statearr_26416;
})();
var statearr_26417_26439 = state_26400__$1;
(statearr_26417_26439[(2)] = null);

(statearr_26417_26439[(1)] = (2));


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
});})(c__23856__auto___26429,out))
;
return ((function (switch__23744__auto__,c__23856__auto___26429,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_26421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26421[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_26421[(1)] = (1));

return statearr_26421;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_26400){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_26400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26422){if((e26422 instanceof Object)){
var ex__23748__auto__ = e26422;
var statearr_26423_26440 = state_26400;
(statearr_26423_26440[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26441 = state_26400;
state_26400 = G__26441;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_26400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_26400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___26429,out))
})();
var state__23858__auto__ = (function (){var statearr_26424 = f__23857__auto__.call(null);
(statearr_26424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___26429);

return statearr_26424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___26429,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26442 = [];
var len__20629__auto___26512 = arguments.length;
var i__20630__auto___26513 = (0);
while(true){
if((i__20630__auto___26513 < len__20629__auto___26512)){
args26442.push((arguments[i__20630__auto___26513]));

var G__26514 = (i__20630__auto___26513 + (1));
i__20630__auto___26513 = G__26514;
continue;
} else {
}
break;
}

var G__26444 = args26442.length;
switch (G__26444) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26442.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___26516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___26516,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___26516,out){
return (function (state_26482){
var state_val_26483 = (state_26482[(1)]);
if((state_val_26483 === (7))){
var inst_26478 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26484_26517 = state_26482__$1;
(statearr_26484_26517[(2)] = inst_26478);

(statearr_26484_26517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (1))){
var inst_26445 = (new Array(n));
var inst_26446 = inst_26445;
var inst_26447 = (0);
var state_26482__$1 = (function (){var statearr_26485 = state_26482;
(statearr_26485[(7)] = inst_26447);

(statearr_26485[(8)] = inst_26446);

return statearr_26485;
})();
var statearr_26486_26518 = state_26482__$1;
(statearr_26486_26518[(2)] = null);

(statearr_26486_26518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (4))){
var inst_26450 = (state_26482[(9)]);
var inst_26450__$1 = (state_26482[(2)]);
var inst_26451 = (inst_26450__$1 == null);
var inst_26452 = cljs.core.not.call(null,inst_26451);
var state_26482__$1 = (function (){var statearr_26487 = state_26482;
(statearr_26487[(9)] = inst_26450__$1);

return statearr_26487;
})();
if(inst_26452){
var statearr_26488_26519 = state_26482__$1;
(statearr_26488_26519[(1)] = (5));

} else {
var statearr_26489_26520 = state_26482__$1;
(statearr_26489_26520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (15))){
var inst_26472 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26490_26521 = state_26482__$1;
(statearr_26490_26521[(2)] = inst_26472);

(statearr_26490_26521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (13))){
var state_26482__$1 = state_26482;
var statearr_26491_26522 = state_26482__$1;
(statearr_26491_26522[(2)] = null);

(statearr_26491_26522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (6))){
var inst_26447 = (state_26482[(7)]);
var inst_26468 = (inst_26447 > (0));
var state_26482__$1 = state_26482;
if(cljs.core.truth_(inst_26468)){
var statearr_26492_26523 = state_26482__$1;
(statearr_26492_26523[(1)] = (12));

} else {
var statearr_26493_26524 = state_26482__$1;
(statearr_26493_26524[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (3))){
var inst_26480 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26482__$1,inst_26480);
} else {
if((state_val_26483 === (12))){
var inst_26446 = (state_26482[(8)]);
var inst_26470 = cljs.core.vec.call(null,inst_26446);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(15),out,inst_26470);
} else {
if((state_val_26483 === (2))){
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26482__$1,(4),ch);
} else {
if((state_val_26483 === (11))){
var inst_26462 = (state_26482[(2)]);
var inst_26463 = (new Array(n));
var inst_26446 = inst_26463;
var inst_26447 = (0);
var state_26482__$1 = (function (){var statearr_26494 = state_26482;
(statearr_26494[(7)] = inst_26447);

(statearr_26494[(10)] = inst_26462);

(statearr_26494[(8)] = inst_26446);

return statearr_26494;
})();
var statearr_26495_26525 = state_26482__$1;
(statearr_26495_26525[(2)] = null);

(statearr_26495_26525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (9))){
var inst_26446 = (state_26482[(8)]);
var inst_26460 = cljs.core.vec.call(null,inst_26446);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(11),out,inst_26460);
} else {
if((state_val_26483 === (5))){
var inst_26447 = (state_26482[(7)]);
var inst_26450 = (state_26482[(9)]);
var inst_26446 = (state_26482[(8)]);
var inst_26455 = (state_26482[(11)]);
var inst_26454 = (inst_26446[inst_26447] = inst_26450);
var inst_26455__$1 = (inst_26447 + (1));
var inst_26456 = (inst_26455__$1 < n);
var state_26482__$1 = (function (){var statearr_26496 = state_26482;
(statearr_26496[(12)] = inst_26454);

(statearr_26496[(11)] = inst_26455__$1);

return statearr_26496;
})();
if(cljs.core.truth_(inst_26456)){
var statearr_26497_26526 = state_26482__$1;
(statearr_26497_26526[(1)] = (8));

} else {
var statearr_26498_26527 = state_26482__$1;
(statearr_26498_26527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (14))){
var inst_26475 = (state_26482[(2)]);
var inst_26476 = cljs.core.async.close_BANG_.call(null,out);
var state_26482__$1 = (function (){var statearr_26500 = state_26482;
(statearr_26500[(13)] = inst_26475);

return statearr_26500;
})();
var statearr_26501_26528 = state_26482__$1;
(statearr_26501_26528[(2)] = inst_26476);

(statearr_26501_26528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (10))){
var inst_26466 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26502_26529 = state_26482__$1;
(statearr_26502_26529[(2)] = inst_26466);

(statearr_26502_26529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (8))){
var inst_26446 = (state_26482[(8)]);
var inst_26455 = (state_26482[(11)]);
var tmp26499 = inst_26446;
var inst_26446__$1 = tmp26499;
var inst_26447 = inst_26455;
var state_26482__$1 = (function (){var statearr_26503 = state_26482;
(statearr_26503[(7)] = inst_26447);

(statearr_26503[(8)] = inst_26446__$1);

return statearr_26503;
})();
var statearr_26504_26530 = state_26482__$1;
(statearr_26504_26530[(2)] = null);

(statearr_26504_26530[(1)] = (2));


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
});})(c__23856__auto___26516,out))
;
return ((function (switch__23744__auto__,c__23856__auto___26516,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_26508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26508[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_26508[(1)] = (1));

return statearr_26508;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_26482){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_26482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26509){if((e26509 instanceof Object)){
var ex__23748__auto__ = e26509;
var statearr_26510_26531 = state_26482;
(statearr_26510_26531[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26532 = state_26482;
state_26482 = G__26532;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_26482){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_26482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___26516,out))
})();
var state__23858__auto__ = (function (){var statearr_26511 = f__23857__auto__.call(null);
(statearr_26511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___26516);

return statearr_26511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___26516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26533 = [];
var len__20629__auto___26607 = arguments.length;
var i__20630__auto___26608 = (0);
while(true){
if((i__20630__auto___26608 < len__20629__auto___26607)){
args26533.push((arguments[i__20630__auto___26608]));

var G__26609 = (i__20630__auto___26608 + (1));
i__20630__auto___26608 = G__26609;
continue;
} else {
}
break;
}

var G__26535 = args26533.length;
switch (G__26535) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26533.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23856__auto___26611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto___26611,out){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto___26611,out){
return (function (state_26577){
var state_val_26578 = (state_26577[(1)]);
if((state_val_26578 === (7))){
var inst_26573 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26579_26612 = state_26577__$1;
(statearr_26579_26612[(2)] = inst_26573);

(statearr_26579_26612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (1))){
var inst_26536 = [];
var inst_26537 = inst_26536;
var inst_26538 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26577__$1 = (function (){var statearr_26580 = state_26577;
(statearr_26580[(7)] = inst_26538);

(statearr_26580[(8)] = inst_26537);

return statearr_26580;
})();
var statearr_26581_26613 = state_26577__$1;
(statearr_26581_26613[(2)] = null);

(statearr_26581_26613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (4))){
var inst_26541 = (state_26577[(9)]);
var inst_26541__$1 = (state_26577[(2)]);
var inst_26542 = (inst_26541__$1 == null);
var inst_26543 = cljs.core.not.call(null,inst_26542);
var state_26577__$1 = (function (){var statearr_26582 = state_26577;
(statearr_26582[(9)] = inst_26541__$1);

return statearr_26582;
})();
if(inst_26543){
var statearr_26583_26614 = state_26577__$1;
(statearr_26583_26614[(1)] = (5));

} else {
var statearr_26584_26615 = state_26577__$1;
(statearr_26584_26615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (15))){
var inst_26567 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26585_26616 = state_26577__$1;
(statearr_26585_26616[(2)] = inst_26567);

(statearr_26585_26616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (13))){
var state_26577__$1 = state_26577;
var statearr_26586_26617 = state_26577__$1;
(statearr_26586_26617[(2)] = null);

(statearr_26586_26617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (6))){
var inst_26537 = (state_26577[(8)]);
var inst_26562 = inst_26537.length;
var inst_26563 = (inst_26562 > (0));
var state_26577__$1 = state_26577;
if(cljs.core.truth_(inst_26563)){
var statearr_26587_26618 = state_26577__$1;
(statearr_26587_26618[(1)] = (12));

} else {
var statearr_26588_26619 = state_26577__$1;
(statearr_26588_26619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (3))){
var inst_26575 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26577__$1,inst_26575);
} else {
if((state_val_26578 === (12))){
var inst_26537 = (state_26577[(8)]);
var inst_26565 = cljs.core.vec.call(null,inst_26537);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(15),out,inst_26565);
} else {
if((state_val_26578 === (2))){
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26577__$1,(4),ch);
} else {
if((state_val_26578 === (11))){
var inst_26545 = (state_26577[(10)]);
var inst_26541 = (state_26577[(9)]);
var inst_26555 = (state_26577[(2)]);
var inst_26556 = [];
var inst_26557 = inst_26556.push(inst_26541);
var inst_26537 = inst_26556;
var inst_26538 = inst_26545;
var state_26577__$1 = (function (){var statearr_26589 = state_26577;
(statearr_26589[(7)] = inst_26538);

(statearr_26589[(8)] = inst_26537);

(statearr_26589[(11)] = inst_26555);

(statearr_26589[(12)] = inst_26557);

return statearr_26589;
})();
var statearr_26590_26620 = state_26577__$1;
(statearr_26590_26620[(2)] = null);

(statearr_26590_26620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (9))){
var inst_26537 = (state_26577[(8)]);
var inst_26553 = cljs.core.vec.call(null,inst_26537);
var state_26577__$1 = state_26577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26577__$1,(11),out,inst_26553);
} else {
if((state_val_26578 === (5))){
var inst_26538 = (state_26577[(7)]);
var inst_26545 = (state_26577[(10)]);
var inst_26541 = (state_26577[(9)]);
var inst_26545__$1 = f.call(null,inst_26541);
var inst_26546 = cljs.core._EQ_.call(null,inst_26545__$1,inst_26538);
var inst_26547 = cljs.core.keyword_identical_QMARK_.call(null,inst_26538,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26548 = (inst_26546) || (inst_26547);
var state_26577__$1 = (function (){var statearr_26591 = state_26577;
(statearr_26591[(10)] = inst_26545__$1);

return statearr_26591;
})();
if(cljs.core.truth_(inst_26548)){
var statearr_26592_26621 = state_26577__$1;
(statearr_26592_26621[(1)] = (8));

} else {
var statearr_26593_26622 = state_26577__$1;
(statearr_26593_26622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (14))){
var inst_26570 = (state_26577[(2)]);
var inst_26571 = cljs.core.async.close_BANG_.call(null,out);
var state_26577__$1 = (function (){var statearr_26595 = state_26577;
(statearr_26595[(13)] = inst_26570);

return statearr_26595;
})();
var statearr_26596_26623 = state_26577__$1;
(statearr_26596_26623[(2)] = inst_26571);

(statearr_26596_26623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (10))){
var inst_26560 = (state_26577[(2)]);
var state_26577__$1 = state_26577;
var statearr_26597_26624 = state_26577__$1;
(statearr_26597_26624[(2)] = inst_26560);

(statearr_26597_26624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26578 === (8))){
var inst_26537 = (state_26577[(8)]);
var inst_26545 = (state_26577[(10)]);
var inst_26541 = (state_26577[(9)]);
var inst_26550 = inst_26537.push(inst_26541);
var tmp26594 = inst_26537;
var inst_26537__$1 = tmp26594;
var inst_26538 = inst_26545;
var state_26577__$1 = (function (){var statearr_26598 = state_26577;
(statearr_26598[(7)] = inst_26538);

(statearr_26598[(8)] = inst_26537__$1);

(statearr_26598[(14)] = inst_26550);

return statearr_26598;
})();
var statearr_26599_26625 = state_26577__$1;
(statearr_26599_26625[(2)] = null);

(statearr_26599_26625[(1)] = (2));


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
});})(c__23856__auto___26611,out))
;
return ((function (switch__23744__auto__,c__23856__auto___26611,out){
return (function() {
var cljs$core$async$state_machine__23745__auto__ = null;
var cljs$core$async$state_machine__23745__auto____0 = (function (){
var statearr_26603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26603[(0)] = cljs$core$async$state_machine__23745__auto__);

(statearr_26603[(1)] = (1));

return statearr_26603;
});
var cljs$core$async$state_machine__23745__auto____1 = (function (state_26577){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_26577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e26604){if((e26604 instanceof Object)){
var ex__23748__auto__ = e26604;
var statearr_26605_26626 = state_26577;
(statearr_26605_26626[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26577;
state_26577 = G__26627;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
cljs$core$async$state_machine__23745__auto__ = function(state_26577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23745__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23745__auto____1.call(this,state_26577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23745__auto____0;
cljs$core$async$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23745__auto____1;
return cljs$core$async$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto___26611,out))
})();
var state__23858__auto__ = (function (){var statearr_26606 = f__23857__auto__.call(null);
(statearr_26606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto___26611);

return statearr_26606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto___26611,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1447608113936