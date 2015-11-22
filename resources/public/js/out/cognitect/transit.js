// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
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
com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
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

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__32892_32896 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32893_32897 = null;
var count__32894_32898 = (0);
var i__32895_32899 = (0);
while(true){
if((i__32895_32899 < count__32894_32898)){
var k_32900 = cljs.core._nth.call(null,chunk__32893_32897,i__32895_32899);
var v_32901 = (b[k_32900]);
(a[k_32900] = v_32901);

var G__32902 = seq__32892_32896;
var G__32903 = chunk__32893_32897;
var G__32904 = count__32894_32898;
var G__32905 = (i__32895_32899 + (1));
seq__32892_32896 = G__32902;
chunk__32893_32897 = G__32903;
count__32894_32898 = G__32904;
i__32895_32899 = G__32905;
continue;
} else {
var temp__4126__auto___32906 = cljs.core.seq.call(null,seq__32892_32896);
if(temp__4126__auto___32906){
var seq__32892_32907__$1 = temp__4126__auto___32906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32892_32907__$1)){
var c__26047__auto___32908 = cljs.core.chunk_first.call(null,seq__32892_32907__$1);
var G__32909 = cljs.core.chunk_rest.call(null,seq__32892_32907__$1);
var G__32910 = c__26047__auto___32908;
var G__32911 = cljs.core.count.call(null,c__26047__auto___32908);
var G__32912 = (0);
seq__32892_32896 = G__32909;
chunk__32893_32897 = G__32910;
count__32894_32898 = G__32911;
i__32895_32899 = G__32912;
continue;
} else {
var k_32913 = cljs.core.first.call(null,seq__32892_32907__$1);
var v_32914 = (b[k_32913]);
(a[k_32913] = v_32914);

var G__32915 = cljs.core.next.call(null,seq__32892_32907__$1);
var G__32916 = null;
var G__32917 = (0);
var G__32918 = (0);
seq__32892_32896 = G__32915;
chunk__32893_32897 = G__32916;
count__32894_32898 = G__32917;
i__32895_32899 = G__32918;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/VectorBuilder");
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
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
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
var G__32919 = (i + (2));
var G__32920 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32919;
ret = G__32920;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/SymbolHandler");
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
var seq__32921_32925 = cljs.core.seq.call(null,v);
var chunk__32922_32926 = null;
var count__32923_32927 = (0);
var i__32924_32928 = (0);
while(true){
if((i__32924_32928 < count__32923_32927)){
var x_32929 = cljs.core._nth.call(null,chunk__32922_32926,i__32924_32928);
ret.push(x_32929);

var G__32930 = seq__32921_32925;
var G__32931 = chunk__32922_32926;
var G__32932 = count__32923_32927;
var G__32933 = (i__32924_32928 + (1));
seq__32921_32925 = G__32930;
chunk__32922_32926 = G__32931;
count__32923_32927 = G__32932;
i__32924_32928 = G__32933;
continue;
} else {
var temp__4126__auto___32934 = cljs.core.seq.call(null,seq__32921_32925);
if(temp__4126__auto___32934){
var seq__32921_32935__$1 = temp__4126__auto___32934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32921_32935__$1)){
var c__26047__auto___32936 = cljs.core.chunk_first.call(null,seq__32921_32935__$1);
var G__32937 = cljs.core.chunk_rest.call(null,seq__32921_32935__$1);
var G__32938 = c__26047__auto___32936;
var G__32939 = cljs.core.count.call(null,c__26047__auto___32936);
var G__32940 = (0);
seq__32921_32925 = G__32937;
chunk__32922_32926 = G__32938;
count__32923_32927 = G__32939;
i__32924_32928 = G__32940;
continue;
} else {
var x_32941 = cljs.core.first.call(null,seq__32921_32935__$1);
ret.push(x_32941);

var G__32942 = cljs.core.next.call(null,seq__32921_32935__$1);
var G__32943 = null;
var G__32944 = (0);
var G__32945 = (0);
seq__32921_32925 = G__32942;
chunk__32922_32926 = G__32943;
count__32923_32927 = G__32944;
i__32924_32928 = G__32945;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/MapHandler");
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
var seq__32946_32950 = cljs.core.seq.call(null,v);
var chunk__32947_32951 = null;
var count__32948_32952 = (0);
var i__32949_32953 = (0);
while(true){
if((i__32949_32953 < count__32948_32952)){
var x_32954 = cljs.core._nth.call(null,chunk__32947_32951,i__32949_32953);
ret.push(x_32954);

var G__32955 = seq__32946_32950;
var G__32956 = chunk__32947_32951;
var G__32957 = count__32948_32952;
var G__32958 = (i__32949_32953 + (1));
seq__32946_32950 = G__32955;
chunk__32947_32951 = G__32956;
count__32948_32952 = G__32957;
i__32949_32953 = G__32958;
continue;
} else {
var temp__4126__auto___32959 = cljs.core.seq.call(null,seq__32946_32950);
if(temp__4126__auto___32959){
var seq__32946_32960__$1 = temp__4126__auto___32959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32946_32960__$1)){
var c__26047__auto___32961 = cljs.core.chunk_first.call(null,seq__32946_32960__$1);
var G__32962 = cljs.core.chunk_rest.call(null,seq__32946_32960__$1);
var G__32963 = c__26047__auto___32961;
var G__32964 = cljs.core.count.call(null,c__26047__auto___32961);
var G__32965 = (0);
seq__32946_32950 = G__32962;
chunk__32947_32951 = G__32963;
count__32948_32952 = G__32964;
i__32949_32953 = G__32965;
continue;
} else {
var x_32966 = cljs.core.first.call(null,seq__32946_32960__$1);
ret.push(x_32966);

var G__32967 = cljs.core.next.call(null,seq__32946_32960__$1);
var G__32968 = null;
var G__32969 = (0);
var G__32970 = (0);
seq__32946_32950 = G__32967;
chunk__32947_32951 = G__32968;
count__32948_32952 = G__32969;
i__32949_32953 = G__32970;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/SetHandler");
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
var seq__32971_32975 = cljs.core.seq.call(null,v);
var chunk__32972_32976 = null;
var count__32973_32977 = (0);
var i__32974_32978 = (0);
while(true){
if((i__32974_32978 < count__32973_32977)){
var x_32979 = cljs.core._nth.call(null,chunk__32972_32976,i__32974_32978);
ret.push(x_32979);

var G__32980 = seq__32971_32975;
var G__32981 = chunk__32972_32976;
var G__32982 = count__32973_32977;
var G__32983 = (i__32974_32978 + (1));
seq__32971_32975 = G__32980;
chunk__32972_32976 = G__32981;
count__32973_32977 = G__32982;
i__32974_32978 = G__32983;
continue;
} else {
var temp__4126__auto___32984 = cljs.core.seq.call(null,seq__32971_32975);
if(temp__4126__auto___32984){
var seq__32971_32985__$1 = temp__4126__auto___32984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32971_32985__$1)){
var c__26047__auto___32986 = cljs.core.chunk_first.call(null,seq__32971_32985__$1);
var G__32987 = cljs.core.chunk_rest.call(null,seq__32971_32985__$1);
var G__32988 = c__26047__auto___32986;
var G__32989 = cljs.core.count.call(null,c__26047__auto___32986);
var G__32990 = (0);
seq__32971_32975 = G__32987;
chunk__32972_32976 = G__32988;
count__32973_32977 = G__32989;
i__32974_32978 = G__32990;
continue;
} else {
var x_32991 = cljs.core.first.call(null,seq__32971_32985__$1);
ret.push(x_32991);

var G__32992 = cljs.core.next.call(null,seq__32971_32985__$1);
var G__32993 = null;
var G__32994 = (0);
var G__32995 = (0);
seq__32971_32975 = G__32992;
chunk__32972_32976 = G__32993;
count__32973_32977 = G__32994;
i__32974_32978 = G__32995;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/UUIDHandler");
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
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x33005 = cljs.core.clone.call(null,handlers);
x33005.forEach = ((function (x33005,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__33006 = cljs.core.seq.call(null,coll);
var chunk__33007 = null;
var count__33008 = (0);
var i__33009 = (0);
while(true){
if((i__33009 < count__33008)){
var vec__33010 = cljs.core._nth.call(null,chunk__33007,i__33009);
var k = cljs.core.nth.call(null,vec__33010,(0),null);
var v = cljs.core.nth.call(null,vec__33010,(1),null);
f.call(null,v,k);

var G__33012 = seq__33006;
var G__33013 = chunk__33007;
var G__33014 = count__33008;
var G__33015 = (i__33009 + (1));
seq__33006 = G__33012;
chunk__33007 = G__33013;
count__33008 = G__33014;
i__33009 = G__33015;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33006);
if(temp__4126__auto__){
var seq__33006__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33006__$1)){
var c__26047__auto__ = cljs.core.chunk_first.call(null,seq__33006__$1);
var G__33016 = cljs.core.chunk_rest.call(null,seq__33006__$1);
var G__33017 = c__26047__auto__;
var G__33018 = cljs.core.count.call(null,c__26047__auto__);
var G__33019 = (0);
seq__33006 = G__33016;
chunk__33007 = G__33017;
count__33008 = G__33018;
i__33009 = G__33019;
continue;
} else {
var vec__33011 = cljs.core.first.call(null,seq__33006__$1);
var k = cljs.core.nth.call(null,vec__33011,(0),null);
var v = cljs.core.nth.call(null,vec__33011,(1),null);
f.call(null,v,k);

var G__33020 = cljs.core.next.call(null,seq__33006__$1);
var G__33021 = null;
var G__33022 = (0);
var G__33023 = (0);
seq__33006 = G__33020;
chunk__33007 = G__33021;
count__33008 = G__33022;
i__33009 = G__33023;
continue;
}
} else {
return null;
}
}
break;
}
});})(x33005,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x33005;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__33004 = obj;
G__33004.push(kfn.call(null,k),vfn.call(null,v));

return G__33004;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
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
if(typeof cognitect.transit.t33027 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t33027 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta33028){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta33028 = meta33028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t33027.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t33027.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t33027.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t33027.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t33027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33029){
var self__ = this;
var _33029__$1 = this;
return self__.meta33028;
});

cognitect.transit.t33027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33029,meta33028__$1){
var self__ = this;
var _33029__$1 = this;
return (new cognitect.transit.t33027(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta33028__$1));
});

cognitect.transit.t33027.cljs$lang$type = true;

cognitect.transit.t33027.cljs$lang$ctorStr = "cognitect.transit/t33027";

cognitect.transit.t33027.cljs$lang$ctorPrWriter = (function (this__25847__auto__,writer__25848__auto__,opt__25849__auto__){
return cljs.core._write.call(null,writer__25848__auto__,"cognitect.transit/t33027");
});

cognitect.transit.__GT_t33027 = (function cognitect$transit$write_handler_$___GT_t33027(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33028){
return (new cognitect.transit.t33027(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta33028));
});

}

return (new cognitect.transit.t33027(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cognitect$transit$write_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return com.cognitect.transit.types.isUUID.call(null,x);
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

//# sourceMappingURL=transit.js.map?rel=1446258008460