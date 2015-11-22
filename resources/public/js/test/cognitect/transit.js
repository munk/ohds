// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__25247_25251 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__25248_25252 = null;
var count__25249_25253 = (0);
var i__25250_25254 = (0);
while(true){
if((i__25250_25254 < count__25249_25253)){
var k_25255 = cljs.core._nth.call(null,chunk__25248_25252,i__25250_25254);
var v_25256 = (b[k_25255]);
(a[k_25255] = v_25256);

var G__25257 = seq__25247_25251;
var G__25258 = chunk__25248_25252;
var G__25259 = count__25249_25253;
var G__25260 = (i__25250_25254 + (1));
seq__25247_25251 = G__25257;
chunk__25248_25252 = G__25258;
count__25249_25253 = G__25259;
i__25250_25254 = G__25260;
continue;
} else {
var temp__4425__auto___25261 = cljs.core.seq.call(null,seq__25247_25251);
if(temp__4425__auto___25261){
var seq__25247_25262__$1 = temp__4425__auto___25261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25247_25262__$1)){
var c__4863__auto___25263 = cljs.core.chunk_first.call(null,seq__25247_25262__$1);
var G__25264 = cljs.core.chunk_rest.call(null,seq__25247_25262__$1);
var G__25265 = c__4863__auto___25263;
var G__25266 = cljs.core.count.call(null,c__4863__auto___25263);
var G__25267 = (0);
seq__25247_25251 = G__25264;
chunk__25248_25252 = G__25265;
count__25249_25253 = G__25266;
i__25250_25254 = G__25267;
continue;
} else {
var k_25268 = cljs.core.first.call(null,seq__25247_25262__$1);
var v_25269 = (b[k_25268]);
(a[k_25268] = v_25269);

var G__25270 = cljs.core.next.call(null,seq__25247_25262__$1);
var G__25271 = null;
var G__25272 = (0);
var G__25273 = (0);
seq__25247_25251 = G__25270;
chunk__25248_25252 = G__25271;
count__25249_25253 = G__25272;
i__25250_25254 = G__25273;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function() {
var cognitect$transit$reader = null;
var cognitect$transit$reader__1 = (function (type){
return cognitect$transit$reader.call(null,type,null);
});
var cognitect$transit$reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__25274 = (i + (2));
var G__25275 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__25274;
ret = G__25275;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$reader = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$reader__1.call(this,type);
case 2:
return cognitect$transit$reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$reader__1;
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$reader__2;
return cognitect$transit$reader;
})()
;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25276_25280 = cljs.core.seq.call(null,v);
var chunk__25277_25281 = null;
var count__25278_25282 = (0);
var i__25279_25283 = (0);
while(true){
if((i__25279_25283 < count__25278_25282)){
var x_25284 = cljs.core._nth.call(null,chunk__25277_25281,i__25279_25283);
ret.push(x_25284);

var G__25285 = seq__25276_25280;
var G__25286 = chunk__25277_25281;
var G__25287 = count__25278_25282;
var G__25288 = (i__25279_25283 + (1));
seq__25276_25280 = G__25285;
chunk__25277_25281 = G__25286;
count__25278_25282 = G__25287;
i__25279_25283 = G__25288;
continue;
} else {
var temp__4425__auto___25289 = cljs.core.seq.call(null,seq__25276_25280);
if(temp__4425__auto___25289){
var seq__25276_25290__$1 = temp__4425__auto___25289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25276_25290__$1)){
var c__4863__auto___25291 = cljs.core.chunk_first.call(null,seq__25276_25290__$1);
var G__25292 = cljs.core.chunk_rest.call(null,seq__25276_25290__$1);
var G__25293 = c__4863__auto___25291;
var G__25294 = cljs.core.count.call(null,c__4863__auto___25291);
var G__25295 = (0);
seq__25276_25280 = G__25292;
chunk__25277_25281 = G__25293;
count__25278_25282 = G__25294;
i__25279_25283 = G__25295;
continue;
} else {
var x_25296 = cljs.core.first.call(null,seq__25276_25290__$1);
ret.push(x_25296);

var G__25297 = cljs.core.next.call(null,seq__25276_25290__$1);
var G__25298 = null;
var G__25299 = (0);
var G__25300 = (0);
seq__25276_25280 = G__25297;
chunk__25277_25281 = G__25298;
count__25278_25282 = G__25299;
i__25279_25283 = G__25300;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25301_25305 = cljs.core.seq.call(null,v);
var chunk__25302_25306 = null;
var count__25303_25307 = (0);
var i__25304_25308 = (0);
while(true){
if((i__25304_25308 < count__25303_25307)){
var x_25309 = cljs.core._nth.call(null,chunk__25302_25306,i__25304_25308);
ret.push(x_25309);

var G__25310 = seq__25301_25305;
var G__25311 = chunk__25302_25306;
var G__25312 = count__25303_25307;
var G__25313 = (i__25304_25308 + (1));
seq__25301_25305 = G__25310;
chunk__25302_25306 = G__25311;
count__25303_25307 = G__25312;
i__25304_25308 = G__25313;
continue;
} else {
var temp__4425__auto___25314 = cljs.core.seq.call(null,seq__25301_25305);
if(temp__4425__auto___25314){
var seq__25301_25315__$1 = temp__4425__auto___25314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25301_25315__$1)){
var c__4863__auto___25316 = cljs.core.chunk_first.call(null,seq__25301_25315__$1);
var G__25317 = cljs.core.chunk_rest.call(null,seq__25301_25315__$1);
var G__25318 = c__4863__auto___25316;
var G__25319 = cljs.core.count.call(null,c__4863__auto___25316);
var G__25320 = (0);
seq__25301_25305 = G__25317;
chunk__25302_25306 = G__25318;
count__25303_25307 = G__25319;
i__25304_25308 = G__25320;
continue;
} else {
var x_25321 = cljs.core.first.call(null,seq__25301_25315__$1);
ret.push(x_25321);

var G__25322 = cljs.core.next.call(null,seq__25301_25315__$1);
var G__25323 = null;
var G__25324 = (0);
var G__25325 = (0);
seq__25301_25305 = G__25322;
chunk__25302_25306 = G__25323;
count__25303_25307 = G__25324;
i__25304_25308 = G__25325;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__25326_25330 = cljs.core.seq.call(null,v);
var chunk__25327_25331 = null;
var count__25328_25332 = (0);
var i__25329_25333 = (0);
while(true){
if((i__25329_25333 < count__25328_25332)){
var x_25334 = cljs.core._nth.call(null,chunk__25327_25331,i__25329_25333);
ret.push(x_25334);

var G__25335 = seq__25326_25330;
var G__25336 = chunk__25327_25331;
var G__25337 = count__25328_25332;
var G__25338 = (i__25329_25333 + (1));
seq__25326_25330 = G__25335;
chunk__25327_25331 = G__25336;
count__25328_25332 = G__25337;
i__25329_25333 = G__25338;
continue;
} else {
var temp__4425__auto___25339 = cljs.core.seq.call(null,seq__25326_25330);
if(temp__4425__auto___25339){
var seq__25326_25340__$1 = temp__4425__auto___25339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25326_25340__$1)){
var c__4863__auto___25341 = cljs.core.chunk_first.call(null,seq__25326_25340__$1);
var G__25342 = cljs.core.chunk_rest.call(null,seq__25326_25340__$1);
var G__25343 = c__4863__auto___25341;
var G__25344 = cljs.core.count.call(null,c__4863__auto___25341);
var G__25345 = (0);
seq__25326_25330 = G__25342;
chunk__25327_25331 = G__25343;
count__25328_25332 = G__25344;
i__25329_25333 = G__25345;
continue;
} else {
var x_25346 = cljs.core.first.call(null,seq__25326_25340__$1);
ret.push(x_25346);

var G__25347 = cljs.core.next.call(null,seq__25326_25340__$1);
var G__25348 = null;
var G__25349 = (0);
var G__25350 = (0);
seq__25326_25330 = G__25347;
chunk__25327_25331 = G__25348;
count__25328_25332 = G__25349;
i__25329_25333 = G__25350;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function() {
var cognitect$transit$writer = null;
var cognitect$transit$writer__1 = (function (type){
return cognitect$transit$writer.call(null,type,null);
});
var cognitect$transit$writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__25359 = obj;
G__25359.push(kfn.call(null,k),vfn.call(null,v));

return G__25359;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x25360 = cljs.core.clone.call(null,handlers);
x25360.forEach = ((function (x25360,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__25361 = cljs.core.seq.call(null,coll);
var chunk__25362 = null;
var count__25363 = (0);
var i__25364 = (0);
while(true){
if((i__25364 < count__25363)){
var vec__25365 = cljs.core._nth.call(null,chunk__25362,i__25364);
var k = cljs.core.nth.call(null,vec__25365,(0),null);
var v = cljs.core.nth.call(null,vec__25365,(1),null);
f.call(null,v,k);

var G__25367 = seq__25361;
var G__25368 = chunk__25362;
var G__25369 = count__25363;
var G__25370 = (i__25364 + (1));
seq__25361 = G__25367;
chunk__25362 = G__25368;
count__25363 = G__25369;
i__25364 = G__25370;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25361);
if(temp__4425__auto__){
var seq__25361__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25361__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__25361__$1);
var G__25371 = cljs.core.chunk_rest.call(null,seq__25361__$1);
var G__25372 = c__4863__auto__;
var G__25373 = cljs.core.count.call(null,c__4863__auto__);
var G__25374 = (0);
seq__25361 = G__25371;
chunk__25362 = G__25372;
count__25363 = G__25373;
i__25364 = G__25374;
continue;
} else {
var vec__25366 = cljs.core.first.call(null,seq__25361__$1);
var k = cljs.core.nth.call(null,vec__25366,(0),null);
var v = cljs.core.nth.call(null,vec__25366,(1),null);
f.call(null,v,k);

var G__25375 = cljs.core.next.call(null,seq__25361__$1);
var G__25376 = null;
var G__25377 = (0);
var G__25378 = (0);
seq__25361 = G__25375;
chunk__25362 = G__25376;
count__25363 = G__25377;
i__25364 = G__25378;
continue;
}
} else {
return null;
}
}
break;
}
});})(x25360,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x25360;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$writer = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$writer__1.call(this,type);
case 2:
return cognitect$transit$writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$writer__1;
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$writer__2;
return cognitect$transit$writer;
})()
;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function() {
var cognitect$transit$write_handler = null;
var cognitect$transit$write_handler__2 = (function (tag_fn,rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,null,null);
});
var cognitect$transit$write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var cognitect$transit$write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t25382 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t25382 = (function (write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta25383){
this.write_handler = write_handler;
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta25383 = meta25383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t25382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25384,meta25383__$1){
var self__ = this;
var _25384__$1 = this;
return (new cognitect.transit.t25382(self__.write_handler,self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta25383__$1));
});

cognitect.transit.t25382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25384){
var self__ = this;
var _25384__$1 = this;
return self__.meta25383;
});

cognitect.transit.t25382.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t25382.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t25382.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t25382.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t25382.cljs$lang$type = true;

cognitect.transit.t25382.cljs$lang$ctorStr = "cognitect.transit/t25382";

cognitect.transit.t25382.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"cognitect.transit/t25382");
});

cognitect.transit.__GT_t25382 = (function cognitect$transit$write_handler_$___GT_t25382(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25383){
return (new cognitect.transit.t25382(write_handler__$1,tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta25383));
});

}

return (new cognitect.transit.t25382(cognitect$transit$write_handler,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});
cognitect$transit$write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return cognitect$transit$write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return cognitect$transit$write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return cognitect$transit$write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$write_handler__2;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$3 = cognitect$transit$write_handler__3;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4 = cognitect$transit$write_handler__4;
return cognitect$transit$write_handler;
})()
;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4076__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
