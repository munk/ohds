// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__21259__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21258 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__21258,(0),null);
var body = cljs.core.nthnext.call(null,vec__21258,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21260__i = 0, G__21260__a = new Array(arguments.length -  0);
while (G__21260__i < G__21260__a.length) {G__21260__a[G__21260__i] = arguments[G__21260__i + 0]; ++G__21260__i;}
  args = new cljs.core.IndexedSeq(G__21260__a,0);
} 
return G__21259__delegate.call(this,args);};
G__21259.cljs$lang$maxFixedArity = 0;
G__21259.cljs$lang$applyTo = (function (arglist__21261){
var args = cljs.core.seq(arglist__21261);
return G__21259__delegate(args);
});
G__21259.cljs$core$IFn$_invoke$arity$variadic = G__21259__delegate;
return G__21259;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__20342__auto__ = (function sablono$core$update_arglists_$_iter__21266(s__21267){
return (new cljs.core.LazySeq(null,(function (){
var s__21267__$1 = s__21267;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21267__$1);
if(temp__4425__auto__){
var s__21267__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21267__$2)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,s__21267__$2);
var size__20341__auto__ = cljs.core.count.call(null,c__20340__auto__);
var b__21269 = cljs.core.chunk_buffer.call(null,size__20341__auto__);
if((function (){var i__21268 = (0);
while(true){
if((i__21268 < size__20341__auto__)){
var args = cljs.core._nth.call(null,c__20340__auto__,i__21268);
cljs.core.chunk_append.call(null,b__21269,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21270 = (i__21268 + (1));
i__21268 = G__21270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21269),sablono$core$update_arglists_$_iter__21266.call(null,cljs.core.chunk_rest.call(null,s__21267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21269),null);
}
} else {
var args = cljs.core.first.call(null,s__21267__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21266.call(null,cljs.core.rest.call(null,s__21267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20342__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__20636__auto__ = [];
var len__20629__auto___21276 = arguments.length;
var i__20630__auto___21277 = (0);
while(true){
if((i__20630__auto___21277 < len__20629__auto___21276)){
args__20636__auto__.push((arguments[i__20630__auto___21277]));

var G__21278 = (i__20630__auto___21277 + (1));
i__20630__auto___21277 = G__21278;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((0) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__20637__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__20342__auto__ = (function sablono$core$iter__21272(s__21273){
return (new cljs.core.LazySeq(null,(function (){
var s__21273__$1 = s__21273;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21273__$1);
if(temp__4425__auto__){
var s__21273__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21273__$2)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,s__21273__$2);
var size__20341__auto__ = cljs.core.count.call(null,c__20340__auto__);
var b__21275 = cljs.core.chunk_buffer.call(null,size__20341__auto__);
if((function (){var i__21274 = (0);
while(true){
if((i__21274 < size__20341__auto__)){
var style = cljs.core._nth.call(null,c__20340__auto__,i__21274);
cljs.core.chunk_append.call(null,b__21275,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21279 = (i__21274 + (1));
i__21274 = G__21279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21275),sablono$core$iter__21272.call(null,cljs.core.chunk_rest.call(null,s__21273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21275),null);
}
} else {
var style = cljs.core.first.call(null,s__21273__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21272.call(null,cljs.core.rest.call(null,s__21273__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20342__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq21271){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21271));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21280 = (function sablono$core$link_to21280(var_args){
var args__20636__auto__ = [];
var len__20629__auto___21283 = arguments.length;
var i__20630__auto___21284 = (0);
while(true){
if((i__20630__auto___21284 < len__20629__auto___21283)){
args__20636__auto__.push((arguments[i__20630__auto___21284]));

var G__21285 = (i__20630__auto___21284 + (1));
i__20630__auto___21284 = G__21285;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((1) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((1)),(0))):null);
return sablono.core.link_to21280.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20637__auto__);
});

sablono.core.link_to21280.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to21280.cljs$lang$maxFixedArity = (1);

sablono.core.link_to21280.cljs$lang$applyTo = (function (seq21281){
var G__21282 = cljs.core.first.call(null,seq21281);
var seq21281__$1 = cljs.core.next.call(null,seq21281);
return sablono.core.link_to21280.cljs$core$IFn$_invoke$arity$variadic(G__21282,seq21281__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21280);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21286 = (function sablono$core$mail_to21286(var_args){
var args__20636__auto__ = [];
var len__20629__auto___21291 = arguments.length;
var i__20630__auto___21292 = (0);
while(true){
if((i__20630__auto___21292 < len__20629__auto___21291)){
args__20636__auto__.push((arguments[i__20630__auto___21292]));

var G__21293 = (i__20630__auto___21292 + (1));
i__20630__auto___21292 = G__21293;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((1) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((1)),(0))):null);
return sablono.core.mail_to21286.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20637__auto__);
});

sablono.core.mail_to21286.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21289){
var vec__21290 = p__21289;
var content = cljs.core.nth.call(null,vec__21290,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__19570__auto__ = content;
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21286.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to21286.cljs$lang$applyTo = (function (seq21287){
var G__21288 = cljs.core.first.call(null,seq21287);
var seq21287__$1 = cljs.core.next.call(null,seq21287);
return sablono.core.mail_to21286.cljs$core$IFn$_invoke$arity$variadic(G__21288,seq21287__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21286);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21294 = (function sablono$core$unordered_list21294(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__20342__auto__ = (function sablono$core$unordered_list21294_$_iter__21299(s__21300){
return (new cljs.core.LazySeq(null,(function (){
var s__21300__$1 = s__21300;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21300__$1);
if(temp__4425__auto__){
var s__21300__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21300__$2)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,s__21300__$2);
var size__20341__auto__ = cljs.core.count.call(null,c__20340__auto__);
var b__21302 = cljs.core.chunk_buffer.call(null,size__20341__auto__);
if((function (){var i__21301 = (0);
while(true){
if((i__21301 < size__20341__auto__)){
var x = cljs.core._nth.call(null,c__20340__auto__,i__21301);
cljs.core.chunk_append.call(null,b__21302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21303 = (i__21301 + (1));
i__21301 = G__21303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21302),sablono$core$unordered_list21294_$_iter__21299.call(null,cljs.core.chunk_rest.call(null,s__21300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21302),null);
}
} else {
var x = cljs.core.first.call(null,s__21300__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21294_$_iter__21299.call(null,cljs.core.rest.call(null,s__21300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20342__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21294);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21304 = (function sablono$core$ordered_list21304(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__20342__auto__ = (function sablono$core$ordered_list21304_$_iter__21309(s__21310){
return (new cljs.core.LazySeq(null,(function (){
var s__21310__$1 = s__21310;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21310__$1);
if(temp__4425__auto__){
var s__21310__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21310__$2)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,s__21310__$2);
var size__20341__auto__ = cljs.core.count.call(null,c__20340__auto__);
var b__21312 = cljs.core.chunk_buffer.call(null,size__20341__auto__);
if((function (){var i__21311 = (0);
while(true){
if((i__21311 < size__20341__auto__)){
var x = cljs.core._nth.call(null,c__20340__auto__,i__21311);
cljs.core.chunk_append.call(null,b__21312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21313 = (i__21311 + (1));
i__21311 = G__21313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21312),sablono$core$ordered_list21304_$_iter__21309.call(null,cljs.core.chunk_rest.call(null,s__21310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21312),null);
}
} else {
var x = cljs.core.first.call(null,s__21310__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21304_$_iter__21309.call(null,cljs.core.rest.call(null,s__21310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20342__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21304);
/**
 * Create an image element.
 */
sablono.core.image21314 = (function sablono$core$image21314(var_args){
var args21315 = [];
var len__20629__auto___21318 = arguments.length;
var i__20630__auto___21319 = (0);
while(true){
if((i__20630__auto___21319 < len__20629__auto___21318)){
args21315.push((arguments[i__20630__auto___21319]));

var G__21320 = (i__20630__auto___21319 + (1));
i__20630__auto___21319 = G__21320;
continue;
} else {
}
break;
}

var G__21317 = args21315.length;
switch (G__21317) {
case 1:
return sablono.core.image21314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21315.length)].join('')));

}
});

sablono.core.image21314.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image21314.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21314.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21314);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21322_SHARP_,p2__21323_SHARP_){
return [cljs.core.str(p1__21322_SHARP_),cljs.core.str("["),cljs.core.str(p2__21323_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21324_SHARP_,p2__21325_SHARP_){
return [cljs.core.str(p1__21324_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21325_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field21326 = (function sablono$core$color_field21326(var_args){
var args21327 = [];
var len__20629__auto___21394 = arguments.length;
var i__20630__auto___21395 = (0);
while(true){
if((i__20630__auto___21395 < len__20629__auto___21394)){
args21327.push((arguments[i__20630__auto___21395]));

var G__21396 = (i__20630__auto___21395 + (1));
i__20630__auto___21395 = G__21396;
continue;
} else {
}
break;
}

var G__21329 = args21327.length;
switch (G__21329) {
case 1:
return sablono.core.color_field21326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21327.length)].join('')));

}
});

sablono.core.color_field21326.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.color_field21326.call(null,name__21247__auto__,null);
});

sablono.core.color_field21326.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.color_field21326.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21326);

/**
 * Creates a date input field.
 */
sablono.core.date_field21330 = (function sablono$core$date_field21330(var_args){
var args21331 = [];
var len__20629__auto___21398 = arguments.length;
var i__20630__auto___21399 = (0);
while(true){
if((i__20630__auto___21399 < len__20629__auto___21398)){
args21331.push((arguments[i__20630__auto___21399]));

var G__21400 = (i__20630__auto___21399 + (1));
i__20630__auto___21399 = G__21400;
continue;
} else {
}
break;
}

var G__21333 = args21331.length;
switch (G__21333) {
case 1:
return sablono.core.date_field21330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21331.length)].join('')));

}
});

sablono.core.date_field21330.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.date_field21330.call(null,name__21247__auto__,null);
});

sablono.core.date_field21330.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.date_field21330.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21330);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21334 = (function sablono$core$datetime_field21334(var_args){
var args21335 = [];
var len__20629__auto___21402 = arguments.length;
var i__20630__auto___21403 = (0);
while(true){
if((i__20630__auto___21403 < len__20629__auto___21402)){
args21335.push((arguments[i__20630__auto___21403]));

var G__21404 = (i__20630__auto___21403 + (1));
i__20630__auto___21403 = G__21404;
continue;
} else {
}
break;
}

var G__21337 = args21335.length;
switch (G__21337) {
case 1:
return sablono.core.datetime_field21334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21335.length)].join('')));

}
});

sablono.core.datetime_field21334.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.datetime_field21334.call(null,name__21247__auto__,null);
});

sablono.core.datetime_field21334.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.datetime_field21334.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21334);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21338 = (function sablono$core$datetime_local_field21338(var_args){
var args21339 = [];
var len__20629__auto___21406 = arguments.length;
var i__20630__auto___21407 = (0);
while(true){
if((i__20630__auto___21407 < len__20629__auto___21406)){
args21339.push((arguments[i__20630__auto___21407]));

var G__21408 = (i__20630__auto___21407 + (1));
i__20630__auto___21407 = G__21408;
continue;
} else {
}
break;
}

var G__21341 = args21339.length;
switch (G__21341) {
case 1:
return sablono.core.datetime_local_field21338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21339.length)].join('')));

}
});

sablono.core.datetime_local_field21338.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.datetime_local_field21338.call(null,name__21247__auto__,null);
});

sablono.core.datetime_local_field21338.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.datetime_local_field21338.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21338);

/**
 * Creates a email input field.
 */
sablono.core.email_field21342 = (function sablono$core$email_field21342(var_args){
var args21343 = [];
var len__20629__auto___21410 = arguments.length;
var i__20630__auto___21411 = (0);
while(true){
if((i__20630__auto___21411 < len__20629__auto___21410)){
args21343.push((arguments[i__20630__auto___21411]));

var G__21412 = (i__20630__auto___21411 + (1));
i__20630__auto___21411 = G__21412;
continue;
} else {
}
break;
}

var G__21345 = args21343.length;
switch (G__21345) {
case 1:
return sablono.core.email_field21342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21343.length)].join('')));

}
});

sablono.core.email_field21342.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.email_field21342.call(null,name__21247__auto__,null);
});

sablono.core.email_field21342.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.email_field21342.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21342);

/**
 * Creates a file input field.
 */
sablono.core.file_field21346 = (function sablono$core$file_field21346(var_args){
var args21347 = [];
var len__20629__auto___21414 = arguments.length;
var i__20630__auto___21415 = (0);
while(true){
if((i__20630__auto___21415 < len__20629__auto___21414)){
args21347.push((arguments[i__20630__auto___21415]));

var G__21416 = (i__20630__auto___21415 + (1));
i__20630__auto___21415 = G__21416;
continue;
} else {
}
break;
}

var G__21349 = args21347.length;
switch (G__21349) {
case 1:
return sablono.core.file_field21346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21347.length)].join('')));

}
});

sablono.core.file_field21346.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.file_field21346.call(null,name__21247__auto__,null);
});

sablono.core.file_field21346.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.file_field21346.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21346);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field21350 = (function sablono$core$hidden_field21350(var_args){
var args21351 = [];
var len__20629__auto___21418 = arguments.length;
var i__20630__auto___21419 = (0);
while(true){
if((i__20630__auto___21419 < len__20629__auto___21418)){
args21351.push((arguments[i__20630__auto___21419]));

var G__21420 = (i__20630__auto___21419 + (1));
i__20630__auto___21419 = G__21420;
continue;
} else {
}
break;
}

var G__21353 = args21351.length;
switch (G__21353) {
case 1:
return sablono.core.hidden_field21350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field21350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21351.length)].join('')));

}
});

sablono.core.hidden_field21350.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.hidden_field21350.call(null,name__21247__auto__,null);
});

sablono.core.hidden_field21350.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.hidden_field21350.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21350);

/**
 * Creates a month input field.
 */
sablono.core.month_field21354 = (function sablono$core$month_field21354(var_args){
var args21355 = [];
var len__20629__auto___21422 = arguments.length;
var i__20630__auto___21423 = (0);
while(true){
if((i__20630__auto___21423 < len__20629__auto___21422)){
args21355.push((arguments[i__20630__auto___21423]));

var G__21424 = (i__20630__auto___21423 + (1));
i__20630__auto___21423 = G__21424;
continue;
} else {
}
break;
}

var G__21357 = args21355.length;
switch (G__21357) {
case 1:
return sablono.core.month_field21354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field21354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21355.length)].join('')));

}
});

sablono.core.month_field21354.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.month_field21354.call(null,name__21247__auto__,null);
});

sablono.core.month_field21354.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.month_field21354.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21354);

/**
 * Creates a number input field.
 */
sablono.core.number_field21358 = (function sablono$core$number_field21358(var_args){
var args21359 = [];
var len__20629__auto___21426 = arguments.length;
var i__20630__auto___21427 = (0);
while(true){
if((i__20630__auto___21427 < len__20629__auto___21426)){
args21359.push((arguments[i__20630__auto___21427]));

var G__21428 = (i__20630__auto___21427 + (1));
i__20630__auto___21427 = G__21428;
continue;
} else {
}
break;
}

var G__21361 = args21359.length;
switch (G__21361) {
case 1:
return sablono.core.number_field21358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field21358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21359.length)].join('')));

}
});

sablono.core.number_field21358.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.number_field21358.call(null,name__21247__auto__,null);
});

sablono.core.number_field21358.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.number_field21358.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21358);

/**
 * Creates a password input field.
 */
sablono.core.password_field21362 = (function sablono$core$password_field21362(var_args){
var args21363 = [];
var len__20629__auto___21430 = arguments.length;
var i__20630__auto___21431 = (0);
while(true){
if((i__20630__auto___21431 < len__20629__auto___21430)){
args21363.push((arguments[i__20630__auto___21431]));

var G__21432 = (i__20630__auto___21431 + (1));
i__20630__auto___21431 = G__21432;
continue;
} else {
}
break;
}

var G__21365 = args21363.length;
switch (G__21365) {
case 1:
return sablono.core.password_field21362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field21362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21363.length)].join('')));

}
});

sablono.core.password_field21362.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.password_field21362.call(null,name__21247__auto__,null);
});

sablono.core.password_field21362.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.password_field21362.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21362);

/**
 * Creates a range input field.
 */
sablono.core.range_field21366 = (function sablono$core$range_field21366(var_args){
var args21367 = [];
var len__20629__auto___21434 = arguments.length;
var i__20630__auto___21435 = (0);
while(true){
if((i__20630__auto___21435 < len__20629__auto___21434)){
args21367.push((arguments[i__20630__auto___21435]));

var G__21436 = (i__20630__auto___21435 + (1));
i__20630__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var G__21369 = args21367.length;
switch (G__21369) {
case 1:
return sablono.core.range_field21366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field21366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21367.length)].join('')));

}
});

sablono.core.range_field21366.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.range_field21366.call(null,name__21247__auto__,null);
});

sablono.core.range_field21366.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.range_field21366.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21366);

/**
 * Creates a search input field.
 */
sablono.core.search_field21370 = (function sablono$core$search_field21370(var_args){
var args21371 = [];
var len__20629__auto___21438 = arguments.length;
var i__20630__auto___21439 = (0);
while(true){
if((i__20630__auto___21439 < len__20629__auto___21438)){
args21371.push((arguments[i__20630__auto___21439]));

var G__21440 = (i__20630__auto___21439 + (1));
i__20630__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var G__21373 = args21371.length;
switch (G__21373) {
case 1:
return sablono.core.search_field21370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field21370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21371.length)].join('')));

}
});

sablono.core.search_field21370.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.search_field21370.call(null,name__21247__auto__,null);
});

sablono.core.search_field21370.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.search_field21370.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21370);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field21374 = (function sablono$core$tel_field21374(var_args){
var args21375 = [];
var len__20629__auto___21442 = arguments.length;
var i__20630__auto___21443 = (0);
while(true){
if((i__20630__auto___21443 < len__20629__auto___21442)){
args21375.push((arguments[i__20630__auto___21443]));

var G__21444 = (i__20630__auto___21443 + (1));
i__20630__auto___21443 = G__21444;
continue;
} else {
}
break;
}

var G__21377 = args21375.length;
switch (G__21377) {
case 1:
return sablono.core.tel_field21374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field21374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21375.length)].join('')));

}
});

sablono.core.tel_field21374.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.tel_field21374.call(null,name__21247__auto__,null);
});

sablono.core.tel_field21374.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.tel_field21374.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21374);

/**
 * Creates a text input field.
 */
sablono.core.text_field21378 = (function sablono$core$text_field21378(var_args){
var args21379 = [];
var len__20629__auto___21446 = arguments.length;
var i__20630__auto___21447 = (0);
while(true){
if((i__20630__auto___21447 < len__20629__auto___21446)){
args21379.push((arguments[i__20630__auto___21447]));

var G__21448 = (i__20630__auto___21447 + (1));
i__20630__auto___21447 = G__21448;
continue;
} else {
}
break;
}

var G__21381 = args21379.length;
switch (G__21381) {
case 1:
return sablono.core.text_field21378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field21378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21379.length)].join('')));

}
});

sablono.core.text_field21378.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.text_field21378.call(null,name__21247__auto__,null);
});

sablono.core.text_field21378.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.text_field21378.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21378);

/**
 * Creates a time input field.
 */
sablono.core.time_field21382 = (function sablono$core$time_field21382(var_args){
var args21383 = [];
var len__20629__auto___21450 = arguments.length;
var i__20630__auto___21451 = (0);
while(true){
if((i__20630__auto___21451 < len__20629__auto___21450)){
args21383.push((arguments[i__20630__auto___21451]));

var G__21452 = (i__20630__auto___21451 + (1));
i__20630__auto___21451 = G__21452;
continue;
} else {
}
break;
}

var G__21385 = args21383.length;
switch (G__21385) {
case 1:
return sablono.core.time_field21382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field21382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21383.length)].join('')));

}
});

sablono.core.time_field21382.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.time_field21382.call(null,name__21247__auto__,null);
});

sablono.core.time_field21382.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.time_field21382.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21382);

/**
 * Creates a url input field.
 */
sablono.core.url_field21386 = (function sablono$core$url_field21386(var_args){
var args21387 = [];
var len__20629__auto___21454 = arguments.length;
var i__20630__auto___21455 = (0);
while(true){
if((i__20630__auto___21455 < len__20629__auto___21454)){
args21387.push((arguments[i__20630__auto___21455]));

var G__21456 = (i__20630__auto___21455 + (1));
i__20630__auto___21455 = G__21456;
continue;
} else {
}
break;
}

var G__21389 = args21387.length;
switch (G__21389) {
case 1:
return sablono.core.url_field21386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field21386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21387.length)].join('')));

}
});

sablono.core.url_field21386.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.url_field21386.call(null,name__21247__auto__,null);
});

sablono.core.url_field21386.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.url_field21386.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21386);

/**
 * Creates a week input field.
 */
sablono.core.week_field21390 = (function sablono$core$week_field21390(var_args){
var args21391 = [];
var len__20629__auto___21458 = arguments.length;
var i__20630__auto___21459 = (0);
while(true){
if((i__20630__auto___21459 < len__20629__auto___21458)){
args21391.push((arguments[i__20630__auto___21459]));

var G__21460 = (i__20630__auto___21459 + (1));
i__20630__auto___21459 = G__21460;
continue;
} else {
}
break;
}

var G__21393 = args21391.length;
switch (G__21393) {
case 1:
return sablono.core.week_field21390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field21390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21391.length)].join('')));

}
});

sablono.core.week_field21390.cljs$core$IFn$_invoke$arity$1 = (function (name__21247__auto__){
return sablono.core.week_field21390.call(null,name__21247__auto__,null);
});

sablono.core.week_field21390.cljs$core$IFn$_invoke$arity$2 = (function (name__21247__auto__,value__21248__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21247__auto__,value__21248__auto__);
});

sablono.core.week_field21390.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21390);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box21462 = (function sablono$core$check_box21462(var_args){
var args21463 = [];
var len__20629__auto___21466 = arguments.length;
var i__20630__auto___21467 = (0);
while(true){
if((i__20630__auto___21467 < len__20629__auto___21466)){
args21463.push((arguments[i__20630__auto___21467]));

var G__21468 = (i__20630__auto___21467 + (1));
i__20630__auto___21467 = G__21468;
continue;
} else {
}
break;
}

var G__21465 = args21463.length;
switch (G__21465) {
case 1:
return sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21463.length)].join('')));

}
});

sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box21462.call(null,name,null);
});

sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box21462.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box21462.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box21462.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21462);
/**
 * Creates a radio button.
 */
sablono.core.radio_button21470 = (function sablono$core$radio_button21470(var_args){
var args21471 = [];
var len__20629__auto___21474 = arguments.length;
var i__20630__auto___21475 = (0);
while(true){
if((i__20630__auto___21475 < len__20629__auto___21474)){
args21471.push((arguments[i__20630__auto___21475]));

var G__21476 = (i__20630__auto___21475 + (1));
i__20630__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var G__21473 = args21471.length;
switch (G__21473) {
case 1:
return sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21471.length)].join('')));

}
});

sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button21470.call(null,group,null);
});

sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button21470.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button21470.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button21470.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21470);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options21478 = (function sablono$core$select_options21478(coll){
var iter__20342__auto__ = (function sablono$core$select_options21478_$_iter__21487(s__21488){
return (new cljs.core.LazySeq(null,(function (){
var s__21488__$1 = s__21488;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21488__$1);
if(temp__4425__auto__){
var s__21488__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21488__$2)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,s__21488__$2);
var size__20341__auto__ = cljs.core.count.call(null,c__20340__auto__);
var b__21490 = cljs.core.chunk_buffer.call(null,size__20341__auto__);
if((function (){var i__21489 = (0);
while(true){
if((i__21489 < size__20341__auto__)){
var x = cljs.core._nth.call(null,c__20340__auto__,i__21489);
cljs.core.chunk_append.call(null,b__21490,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21493 = x;
var text = cljs.core.nth.call(null,vec__21493,(0),null);
var val = cljs.core.nth.call(null,vec__21493,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21493,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21478.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__21495 = (i__21489 + (1));
i__21489 = G__21495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21490),sablono$core$select_options21478_$_iter__21487.call(null,cljs.core.chunk_rest.call(null,s__21488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21490),null);
}
} else {
var x = cljs.core.first.call(null,s__21488__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21494 = x;
var text = cljs.core.nth.call(null,vec__21494,(0),null);
var val = cljs.core.nth.call(null,vec__21494,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__21494,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options21478.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options21478_$_iter__21487.call(null,cljs.core.rest.call(null,s__21488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20342__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21478);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down21496 = (function sablono$core$drop_down21496(var_args){
var args21497 = [];
var len__20629__auto___21500 = arguments.length;
var i__20630__auto___21501 = (0);
while(true){
if((i__20630__auto___21501 < len__20629__auto___21500)){
args21497.push((arguments[i__20630__auto___21501]));

var G__21502 = (i__20630__auto___21501 + (1));
i__20630__auto___21501 = G__21502;
continue;
} else {
}
break;
}

var G__21499 = args21497.length;
switch (G__21499) {
case 2:
return sablono.core.drop_down21496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down21496.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21497.length)].join('')));

}
});

sablono.core.drop_down21496.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down21496.call(null,name,options,null);
});

sablono.core.drop_down21496.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down21496.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21496);
/**
 * Creates a text area element.
 */
sablono.core.text_area21504 = (function sablono$core$text_area21504(var_args){
var args21505 = [];
var len__20629__auto___21508 = arguments.length;
var i__20630__auto___21509 = (0);
while(true){
if((i__20630__auto___21509 < len__20629__auto___21508)){
args21505.push((arguments[i__20630__auto___21509]));

var G__21510 = (i__20630__auto___21509 + (1));
i__20630__auto___21509 = G__21510;
continue;
} else {
}
break;
}

var G__21507 = args21505.length;
switch (G__21507) {
case 1:
return sablono.core.text_area21504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area21504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21505.length)].join('')));

}
});

sablono.core.text_area21504.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area21504.call(null,name,null);
});

sablono.core.text_area21504.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area21504.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21504);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label21512 = (function sablono$core$label21512(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21512);
/**
 * Creates a submit button.
 */
sablono.core.submit_button21513 = (function sablono$core$submit_button21513(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21513);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button21514 = (function sablono$core$reset_button21514(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21514);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to21515 = (function sablono$core$form_to21515(var_args){
var args__20636__auto__ = [];
var len__20629__auto___21520 = arguments.length;
var i__20630__auto___21521 = (0);
while(true){
if((i__20630__auto___21521 < len__20629__auto___21520)){
args__20636__auto__.push((arguments[i__20630__auto___21521]));

var G__21522 = (i__20630__auto___21521 + (1));
i__20630__auto___21521 = G__21522;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((1) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((1)),(0))):null);
return sablono.core.form_to21515.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20637__auto__);
});

sablono.core.form_to21515.cljs$core$IFn$_invoke$arity$variadic = (function (p__21518,body){
var vec__21519 = p__21518;
var method = cljs.core.nth.call(null,vec__21519,(0),null);
var action = cljs.core.nth.call(null,vec__21519,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to21515.cljs$lang$maxFixedArity = (1);

sablono.core.form_to21515.cljs$lang$applyTo = (function (seq21516){
var G__21517 = cljs.core.first.call(null,seq21516);
var seq21516__$1 = cljs.core.next.call(null,seq21516);
return sablono.core.form_to21515.cljs$core$IFn$_invoke$arity$variadic(G__21517,seq21516__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21515);

//# sourceMappingURL=core.js.map?rel=1447608109196