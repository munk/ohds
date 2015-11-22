// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__19570__auto__ = (function (){var and__19558__auto__ = typeof Symbol !== 'undefined';
if(and__19558__auto__){
var and__19558__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__19558__auto____$1){
var and__19558__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__19558__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__19558__auto____$2;
}
} else {
return and__19558__auto____$1;
}
} else {
return and__19558__auto__;
}
})();
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__27446_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__27446_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(){
devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__19558__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__19558__auto__){
var map__27453 = c;
var map__27453__$1 = ((((!((map__27453 == null)))?((((map__27453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27453):map__27453);
var path = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__19558__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"card?","card?",2082377665,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});
devcards.core.get_props;

devcards.core.ref__GT_node;
devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var hljs = temp__4425__auto____$1;
var temp__4425__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4425__auto____$2)){
var highlight_block = temp__4425__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__26684__auto___27459 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":"")},React.createElement("code",{"className": (function (){var or__19570__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__26684__auto___27459);
}

var seq__27455_27460 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27456_27461 = null;
var count__27457_27462 = (0);
var i__27458_27463 = (0);
while(true){
if((i__27458_27463 < count__27457_27462)){
var property__26685__auto___27464 = cljs.core._nth.call(null,chunk__27456_27461,i__27458_27463);
if(cljs.core.truth_((base__26684__auto___27459[property__26685__auto___27464]))){
(devcards.core.CodeHighlight.prototype[property__26685__auto___27464] = (base__26684__auto___27459[property__26685__auto___27464]));
} else {
}

var G__27465 = seq__27455_27460;
var G__27466 = chunk__27456_27461;
var G__27467 = count__27457_27462;
var G__27468 = (i__27458_27463 + (1));
seq__27455_27460 = G__27465;
chunk__27456_27461 = G__27466;
count__27457_27462 = G__27467;
i__27458_27463 = G__27468;
continue;
} else {
var temp__4425__auto___27469 = cljs.core.seq.call(null,seq__27455_27460);
if(temp__4425__auto___27469){
var seq__27455_27470__$1 = temp__4425__auto___27469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27455_27470__$1)){
var c__20373__auto___27471 = cljs.core.chunk_first.call(null,seq__27455_27470__$1);
var G__27472 = cljs.core.chunk_rest.call(null,seq__27455_27470__$1);
var G__27473 = c__20373__auto___27471;
var G__27474 = cljs.core.count.call(null,c__20373__auto___27471);
var G__27475 = (0);
seq__27455_27460 = G__27472;
chunk__27456_27461 = G__27473;
count__27457_27462 = G__27474;
i__27458_27463 = G__27475;
continue;
} else {
var property__26685__auto___27476 = cljs.core.first.call(null,seq__27455_27470__$1);
if(cljs.core.truth_((base__26684__auto___27459[property__26685__auto___27476]))){
(devcards.core.CodeHighlight.prototype[property__26685__auto___27476] = (base__26684__auto___27459[property__26685__auto___27476]));
} else {
}

var G__27477 = cljs.core.next.call(null,seq__27455_27470__$1);
var G__27478 = null;
var G__27479 = (0);
var G__27480 = (0);
seq__27455_27460 = G__27477;
chunk__27456_27461 = G__27478;
count__27457_27462 = G__27479;
i__27458_27463 = G__27480;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__20484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20488__auto__,method_table__20484__auto__,prefer_table__20485__auto__,method_cache__20486__auto__,cached_hierarchy__20487__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__27481){
var map__27482 = p__27481;
var map__27482__$1 = ((((!((map__27482 == null)))?((((map__27482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27482):map__27482);
var content = cljs.core.get.call(null,map__27482__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__27484){
var map__27485 = p__27484;
var map__27485__$1 = ((((!((map__27485 == null)))?((((map__27485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27485):map__27485);
var block = map__27485__$1;
var content = cljs.core.get.call(null,map__27485__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.react_element_QMARK_;
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__20636__auto__ = [];
var len__20629__auto___27489 = arguments.length;
var i__20630__auto___27490 = (0);
while(true){
if((i__20630__auto___27490 < len__20629__auto___27489)){
args__20636__auto__.push((arguments[i__20630__auto___27490]));

var G__27491 = (i__20630__auto___27490 + (1));
i__20630__auto___27490 = G__27491;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((0) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((0)),(0))):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__20637__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
var attrs27488 = cljs.core.map.call(null,devcards.core.markdown_block__GT_react,blocks);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27488))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-markdown","com-rigsomelight-devcards-typog"], null)], null),attrs27488)):{"className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27488)], null))));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown. \n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq27487){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27487));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"className": (function (){var G__27493 = devcards.system.devcards_rendered_card_class;
var G__27493__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__27493),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__27493);
var G__27493__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,classname))?[cljs.core.str(G__27493__$1),cljs.core.str(" "),cljs.core.str(classname)].join(''):G__27493__$1);
return G__27493__$2;
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args27494 = [];
var len__20629__auto___27503 = arguments.length;
var i__20630__auto___27504 = (0);
while(true){
if((i__20630__auto___27504 < len__20629__auto___27503)){
args27494.push((arguments[i__20630__auto___27504]));

var G__27505 = (i__20630__auto___27504 + (1));
i__20630__auto___27504 = G__27505;
continue;
} else {
}
break;
}

var G__27496 = args27494.length;
switch (G__27496) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27494.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__27497 = card;
var map__27497__$1 = ((((!((map__27497 == null)))?((((map__27497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27497):map__27497);
var path = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__27497__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": [cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27499 = (cljs.core.truth_(path)?React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__27497,map__27497__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__27497,map__27497__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," "):(function (){var attrs27500 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27500))?sablono.interpreter.attributes.call(null,attrs27500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27500)], null))));
})());
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27499))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-typog"], null)], null),attrs27499)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27499))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27499)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__20225__auto__ = (((this$ == null))?null:this$);
var m__20226__auto__ = (devcards.core._devcard_options[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,this$,devcard_opts);
} else {
var m__20226__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__20225__auto__ = (((this$ == null))?null:this$);
var m__20226__auto__ = (devcards.core._devcard[goog.typeOf(x__20225__auto__)]);
if(!((m__20226__auto__ == null))){
return m__20226__auto__.call(null,this$,devcard_opts);
} else {
var m__20226__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__20226__auto____$1 == null))){
return m__20226__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.hist_recorder_STAR_;
devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4425__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4425__auto__)){
var comp = temp__4425__auto__;
return React.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__19570__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.atom_like_QMARK_;
var base__26684__auto___27514 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null))};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__19570__auto__ = (function (){var and__19558__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__19558__auto__)){
return this$.state;
} else {
return and__19558__auto__;
}
})();
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__19558__auto__ = data_atom;
if(cljs.core.truth_(and__19558__auto__)){
return id;
} else {
return and__19558__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4425__auto__)){
var data_atom = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4425__auto____$1)){
var id = temp__4425__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(id,temp__4425__auto____$1,data_atom,temp__4425__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,this$);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
var main = main_obj;
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4425__auto__)){
var docu = temp__4425__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?(function (){var attrs27509 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27509))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27509)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27509))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27509)], null))));
})():null);
var card__$1 = (((typeof main_obj === 'string') || ((main_obj == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var children = cljs.core.keep.call(null,cljs.core.identity,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,edn),hist_ctl),main),document));
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__26684__auto___27514);
}

var seq__27510_27515 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27511_27516 = null;
var count__27512_27517 = (0);
var i__27513_27518 = (0);
while(true){
if((i__27513_27518 < count__27512_27517)){
var property__26685__auto___27519 = cljs.core._nth.call(null,chunk__27511_27516,i__27513_27518);
if(cljs.core.truth_((base__26684__auto___27514[property__26685__auto___27519]))){
(devcards.core.DevcardBase.prototype[property__26685__auto___27519] = (base__26684__auto___27514[property__26685__auto___27519]));
} else {
}

var G__27520 = seq__27510_27515;
var G__27521 = chunk__27511_27516;
var G__27522 = count__27512_27517;
var G__27523 = (i__27513_27518 + (1));
seq__27510_27515 = G__27520;
chunk__27511_27516 = G__27521;
count__27512_27517 = G__27522;
i__27513_27518 = G__27523;
continue;
} else {
var temp__4425__auto___27524 = cljs.core.seq.call(null,seq__27510_27515);
if(temp__4425__auto___27524){
var seq__27510_27525__$1 = temp__4425__auto___27524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27510_27525__$1)){
var c__20373__auto___27526 = cljs.core.chunk_first.call(null,seq__27510_27525__$1);
var G__27527 = cljs.core.chunk_rest.call(null,seq__27510_27525__$1);
var G__27528 = c__20373__auto___27526;
var G__27529 = cljs.core.count.call(null,c__20373__auto___27526);
var G__27530 = (0);
seq__27510_27515 = G__27527;
chunk__27511_27516 = G__27528;
count__27512_27517 = G__27529;
i__27513_27518 = G__27530;
continue;
} else {
var property__26685__auto___27531 = cljs.core.first.call(null,seq__27510_27525__$1);
if(cljs.core.truth_((base__26684__auto___27514[property__26685__auto___27531]))){
(devcards.core.DevcardBase.prototype[property__26685__auto___27531] = (base__26684__auto___27514[property__26685__auto___27531]));
} else {
}

var G__27532 = cljs.core.next.call(null,seq__27510_27525__$1);
var G__27533 = null;
var G__27534 = (0);
var G__27535 = (0);
seq__27510_27515 = G__27532;
chunk__27511_27516 = G__27533;
count__27512_27517 = G__27534;
i__27513_27518 = G__27535;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4425__auto__)){
var node_fn = temp__4425__auto__;
var temp__4425__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto____$1)){
var node = temp__4425__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__26684__auto___27540 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__19558__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__19558__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__19558__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4425__auto__)){
var node = temp__4425__auto__;
return React.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__26684__auto___27540);
}

var seq__27536_27541 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27537_27542 = null;
var count__27538_27543 = (0);
var i__27539_27544 = (0);
while(true){
if((i__27539_27544 < count__27538_27543)){
var property__26685__auto___27545 = cljs.core._nth.call(null,chunk__27537_27542,i__27539_27544);
if(cljs.core.truth_((base__26684__auto___27540[property__26685__auto___27545]))){
(devcards.core.DomComponent.prototype[property__26685__auto___27545] = (base__26684__auto___27540[property__26685__auto___27545]));
} else {
}

var G__27546 = seq__27536_27541;
var G__27547 = chunk__27537_27542;
var G__27548 = count__27538_27543;
var G__27549 = (i__27539_27544 + (1));
seq__27536_27541 = G__27546;
chunk__27537_27542 = G__27547;
count__27538_27543 = G__27548;
i__27539_27544 = G__27549;
continue;
} else {
var temp__4425__auto___27550 = cljs.core.seq.call(null,seq__27536_27541);
if(temp__4425__auto___27550){
var seq__27536_27551__$1 = temp__4425__auto___27550;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27536_27551__$1)){
var c__20373__auto___27552 = cljs.core.chunk_first.call(null,seq__27536_27551__$1);
var G__27553 = cljs.core.chunk_rest.call(null,seq__27536_27551__$1);
var G__27554 = c__20373__auto___27552;
var G__27555 = cljs.core.count.call(null,c__20373__auto___27552);
var G__27556 = (0);
seq__27536_27541 = G__27553;
chunk__27537_27542 = G__27554;
count__27538_27543 = G__27555;
i__27539_27544 = G__27556;
continue;
} else {
var property__26685__auto___27557 = cljs.core.first.call(null,seq__27536_27551__$1);
if(cljs.core.truth_((base__26684__auto___27540[property__26685__auto___27557]))){
(devcards.core.DomComponent.prototype[property__26685__auto___27557] = (base__26684__auto___27540[property__26685__auto___27557]));
} else {
}

var G__27558 = cljs.core.next.call(null,seq__27536_27551__$1);
var G__27559 = null;
var G__27560 = (0);
var G__27561 = (0);
seq__27536_27541 = G__27558;
chunk__27537_27542 = G__27559;
count__27538_27543 = G__27560;
i__27539_27544 = G__27561;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19570__auto__ = x === true;
if(or__19570__auto__){
return or__19570__auto__;
} else {
var or__19570__auto____$1 = x === false;
if(or__19570__auto____$1){
return or__19570__auto____$1;
} else {
var or__19570__auto____$2 = (x == null);
if(or__19570__auto____$2){
return or__19570__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__19570__auto__ = typeof x === 'string';
if(or__19570__auto__){
return or__19570__auto__;
} else {
var or__19570__auto____$1 = (x == null);
if(or__19570__auto____$1){
return or__19570__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__19570__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__27562_SHARP_){
return !(p1__27562_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__27571 = opts;
var map__27571__$1 = ((((!((map__27571 == null)))?((((map__27571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);
var name = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__19570__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__19570__auto__){
return or__19570__auto__;
} else {
var or__19570__auto____$1 = (options == null);
if(or__19570__auto____$1){
return or__19570__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__19570__auto__ = (initial_data == null);
if(or__19570__auto__){
return or__19570__auto__;
} else {
var or__19570__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__19570__auto____$1){
return or__19570__auto____$1;
} else {
var or__19570__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__19570__auto____$2){
return or__19570__auto____$2;
} else {
var or__19570__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__19570__auto____$3){
return or__19570__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__27571,map__27571__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__27563_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__27563_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__27571,map__27571__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs27579 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27579))?sablono.interpreter.attributes.call(null,attrs27579):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27579))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27579)], null))));
})()));
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs27583 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27583))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs27583)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27583))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27583)], null))));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs27584 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27584))?sablono.interpreter.attributes.call(null,attrs27584):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27584))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27584)], null))));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs27585 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27585))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs27585)):{"className": "com-rigsomelight-devcards-padding-top-border"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27585))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27585)], null))));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__27586_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__27586_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20184__auto__,k__20185__auto__){
var self__ = this;
var this__20184__auto____$1 = this;
return cljs.core._lookup.call(null,this__20184__auto____$1,k__20185__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20186__auto__,k27588,else__20187__auto__){
var self__ = this;
var this__20186__auto____$1 = this;
var G__27590 = (((k27588 instanceof cljs.core.Keyword))?k27588.fqn:null);
switch (G__27590) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27588,else__20187__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20198__auto__,writer__20199__auto__,opts__20200__auto__){
var self__ = this;
var this__20198__auto____$1 = this;
var pr_pair__20201__auto__ = ((function (this__20198__auto____$1){
return (function (keyval__20202__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,cljs.core.pr_writer,""," ","",opts__20200__auto__,keyval__20202__auto__);
});})(this__20198__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,pr_pair__20201__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__20200__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27587){
var self__ = this;
var G__27587__$1 = this;
return (new cljs.core.RecordIter((0),G__27587__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20182__auto__){
var self__ = this;
var this__20182__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20178__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20188__auto__){
var self__ = this;
var this__20188__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20179__auto__){
var self__ = this;
var this__20179__auto____$1 = this;
var h__20005__auto__ = self__.__hash;
if(!((h__20005__auto__ == null))){
return h__20005__auto__;
} else {
var h__20005__auto____$1 = cljs.core.hash_imap.call(null,this__20179__auto____$1);
self__.__hash = h__20005__auto____$1;

return h__20005__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20180__auto__,other__20181__auto__){
var self__ = this;
var this__20180__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19558__auto__ = other__20181__auto__;
if(cljs.core.truth_(and__19558__auto__)){
var and__19558__auto____$1 = (this__20180__auto____$1.constructor === other__20181__auto__.constructor);
if(and__19558__auto____$1){
return cljs.core.equiv_map.call(null,this__20180__auto____$1,other__20181__auto__);
} else {
return and__19558__auto____$1;
}
} else {
return and__19558__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20193__auto__,k__20194__auto__){
var self__ = this;
var this__20193__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20194__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20193__auto____$1),self__.__meta),k__20194__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20194__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20191__auto__,k__20192__auto__,G__27587){
var self__ = this;
var this__20191__auto____$1 = this;
var pred__27591 = cljs.core.keyword_identical_QMARK_;
var expr__27592 = k__20192__auto__;
if(cljs.core.truth_(pred__27591.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27592))){
return (new devcards.core.IdentiyOptions(G__27587,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20192__auto__,G__27587),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20196__auto__){
var self__ = this;
var this__20196__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20183__auto__,G__27587){
var self__ = this;
var this__20183__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__27587,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20189__auto__,entry__20190__auto__){
var self__ = this;
var this__20189__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20190__auto__)){
return cljs.core._assoc.call(null,this__20189__auto____$1,cljs.core._nth.call(null,entry__20190__auto__,(0)),cljs.core._nth.call(null,entry__20190__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20189__auto____$1,entry__20190__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__20218__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__20218__auto__,writer__20219__auto__){
return cljs.core._write.call(null,writer__20219__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__27589){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27589),null,cljs.core.dissoc.call(null,G__27589,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__27595){
var map__27598 = p__27595;
var map__27598__$1 = ((((!((map__27598 == null)))?((((map__27598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27598):map__27598);
var devcard_opts = map__27598__$1;
var options = cljs.core.get.call(null,map__27598__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__27598,map__27598__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__27598,map__27598__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20184__auto__,k__20185__auto__){
var self__ = this;
var this__20184__auto____$1 = this;
return cljs.core._lookup.call(null,this__20184__auto____$1,k__20185__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20186__auto__,k27601,else__20187__auto__){
var self__ = this;
var this__20186__auto____$1 = this;
var G__27603 = (((k27601 instanceof cljs.core.Keyword))?k27601.fqn:null);
switch (G__27603) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27601,else__20187__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20198__auto__,writer__20199__auto__,opts__20200__auto__){
var self__ = this;
var this__20198__auto____$1 = this;
var pr_pair__20201__auto__ = ((function (this__20198__auto____$1){
return (function (keyval__20202__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,cljs.core.pr_writer,""," ","",opts__20200__auto__,keyval__20202__auto__);
});})(this__20198__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,pr_pair__20201__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__20200__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27600){
var self__ = this;
var G__27600__$1 = this;
return (new cljs.core.RecordIter((0),G__27600__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20182__auto__){
var self__ = this;
var this__20182__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20178__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20188__auto__){
var self__ = this;
var this__20188__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20179__auto__){
var self__ = this;
var this__20179__auto____$1 = this;
var h__20005__auto__ = self__.__hash;
if(!((h__20005__auto__ == null))){
return h__20005__auto__;
} else {
var h__20005__auto____$1 = cljs.core.hash_imap.call(null,this__20179__auto____$1);
self__.__hash = h__20005__auto____$1;

return h__20005__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20180__auto__,other__20181__auto__){
var self__ = this;
var this__20180__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19558__auto__ = other__20181__auto__;
if(cljs.core.truth_(and__19558__auto__)){
var and__19558__auto____$1 = (this__20180__auto____$1.constructor === other__20181__auto__.constructor);
if(and__19558__auto____$1){
return cljs.core.equiv_map.call(null,this__20180__auto____$1,other__20181__auto__);
} else {
return and__19558__auto____$1;
}
} else {
return and__19558__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20193__auto__,k__20194__auto__){
var self__ = this;
var this__20193__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20194__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20193__auto____$1),self__.__meta),k__20194__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20194__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20191__auto__,k__20192__auto__,G__27600){
var self__ = this;
var this__20191__auto____$1 = this;
var pred__27604 = cljs.core.keyword_identical_QMARK_;
var expr__27605 = k__20192__auto__;
if(cljs.core.truth_(pred__27604.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27605))){
return (new devcards.core.AtomLikeOptions(G__27600,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20192__auto__,G__27600),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20196__auto__){
var self__ = this;
var this__20196__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20183__auto__,G__27600){
var self__ = this;
var this__20183__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__27600,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20189__auto__,entry__20190__auto__){
var self__ = this;
var this__20189__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20190__auto__)){
return cljs.core._assoc.call(null,this__20189__auto____$1,cljs.core._nth.call(null,entry__20190__auto__,(0)),cljs.core._nth.call(null,entry__20190__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20189__auto____$1,entry__20190__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__20218__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__20218__auto__,writer__20219__auto__){
return cljs.core._write.call(null,writer__20219__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__27602){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27602),null,cljs.core.dissoc.call(null,G__27602,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20184__auto__,k__20185__auto__){
var self__ = this;
var this__20184__auto____$1 = this;
return cljs.core._lookup.call(null,this__20184__auto____$1,k__20185__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20186__auto__,k27611,else__20187__auto__){
var self__ = this;
var this__20186__auto____$1 = this;
var G__27613 = (((k27611 instanceof cljs.core.Keyword))?k27611.fqn:null);
switch (G__27613) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27611,else__20187__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20198__auto__,writer__20199__auto__,opts__20200__auto__){
var self__ = this;
var this__20198__auto____$1 = this;
var pr_pair__20201__auto__ = ((function (this__20198__auto____$1){
return (function (keyval__20202__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,cljs.core.pr_writer,""," ","",opts__20200__auto__,keyval__20202__auto__);
});})(this__20198__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20199__auto__,pr_pair__20201__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__20200__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27610){
var self__ = this;
var G__27610__$1 = this;
return (new cljs.core.RecordIter((0),G__27610__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20182__auto__){
var self__ = this;
var this__20182__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20178__auto__){
var self__ = this;
var this__20178__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20188__auto__){
var self__ = this;
var this__20188__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20179__auto__){
var self__ = this;
var this__20179__auto____$1 = this;
var h__20005__auto__ = self__.__hash;
if(!((h__20005__auto__ == null))){
return h__20005__auto__;
} else {
var h__20005__auto____$1 = cljs.core.hash_imap.call(null,this__20179__auto____$1);
self__.__hash = h__20005__auto____$1;

return h__20005__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20180__auto__,other__20181__auto__){
var self__ = this;
var this__20180__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19558__auto__ = other__20181__auto__;
if(cljs.core.truth_(and__19558__auto__)){
var and__19558__auto____$1 = (this__20180__auto____$1.constructor === other__20181__auto__.constructor);
if(and__19558__auto____$1){
return cljs.core.equiv_map.call(null,this__20180__auto____$1,other__20181__auto__);
} else {
return and__19558__auto____$1;
}
} else {
return and__19558__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20193__auto__,k__20194__auto__){
var self__ = this;
var this__20193__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__20194__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20193__auto____$1),self__.__meta),k__20194__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20194__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20191__auto__,k__20192__auto__,G__27610){
var self__ = this;
var this__20191__auto____$1 = this;
var pred__27614 = cljs.core.keyword_identical_QMARK_;
var expr__27615 = k__20192__auto__;
if(cljs.core.truth_(pred__27614.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__27615))){
return (new devcards.core.EdnLikeOptions(G__27610,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20192__auto__,G__27610),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20196__auto__){
var self__ = this;
var this__20196__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20183__auto__,G__27610){
var self__ = this;
var this__20183__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__27610,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20189__auto__,entry__20190__auto__){
var self__ = this;
var this__20189__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20190__auto__)){
return cljs.core._assoc.call(null,this__20189__auto____$1,cljs.core._nth.call(null,entry__20190__auto__,(0)),cljs.core._nth.call(null,entry__20190__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20189__auto____$1,entry__20190__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__20218__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__20218__auto__,writer__20219__auto__){
return cljs.core._write.call(null,writer__20219__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__27612){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__27612),null,cljs.core.dissoc.call(null,G__27612,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__19558__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__19558__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__19558__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__27629 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__27629 == null))){
if((false) || (G__27629.devcards$core$IDevcard$)){
return true;
} else {
if((!G__27629.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27629);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__27629);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__27632 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__27632__$1 = ((((!((map__27632 == null)))?((((map__27632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27632):map__27632);
var history = cljs.core.get.call(null,map__27632__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27632__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27636 = cljs.core.deref.call(null,history_atom);
var map__27636__$1 = ((((!((map__27636 == null)))?((((map__27636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27636):map__27636);
var history = cljs.core.get.call(null,map__27636__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27636__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27640 = cljs.core.deref.call(null,history_atom);
var map__27640__$1 = ((((!((map__27640 == null)))?((((map__27640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27640):map__27640);
var history = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__27640__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__27644 = cljs.core.deref.call(null,history_atom);
var map__27644__$1 = ((((!((map__27644 == null)))?((((map__27644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var history = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)))));
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__19558__auto__ = data_atom;
if(cljs.core.truth_(and__19558__auto__)){
return id;
} else {
return and__19558__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__27646){
var map__27647 = p__27646;
var map__27647__$1 = ((((!((map__27647 == null)))?((((map__27647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27647):map__27647);
var ha = map__27647__$1;
var pointer = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__27647__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__19570__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__19570__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},""));
})()),sablono.interpreter.interpret.call(null,(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"}));
})()));
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_27662 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_27662;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__20484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20488__auto__,method_table__20484__auto__,prefer_table__20485__auto__,method_cache__20486__auto__,cached_hierarchy__20487__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs27663 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27663))?sablono.interpreter.attributes.call(null,attrs27663):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27663))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27663)], null))));
}));
devcards.core.display_message = (function devcards$core$display_message(p__27664,body){
var map__27668 = p__27664;
var map__27668__$1 = ((((!((map__27668 == null)))?((((map__27668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27668):map__27668);
var message = cljs.core.get.call(null,map__27668__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs27670 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs27670))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs27670)):{"className": "com-rigsomelight-devcards-test-message"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27670))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27670)], null))));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__27671){
var map__27674 = p__27671;
var map__27674__$1 = ((((!((map__27674 == null)))?((((map__27674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27674):map__27674);
var m = map__27674__$1;
var expected = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
return devcards.core.display_message.call(null,m,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"}));
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs27678 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs27678))?sablono.interpreter.attributes.call(null,attrs27678):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27678))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27678)], null))));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs27679 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27679))?sablono.interpreter.attributes.call(null,attrs27679):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27679))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27679)], null))));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__27680){
var map__27681 = p__27680;
var map__27681__$1 = ((((!((map__27681 == null)))?((((map__27681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27681):map__27681);
var testing_contexts = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs27683 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map.call(null,((function (map__27681,map__27681__$1,testing_contexts){
return (function (t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__27681,map__27681__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.first.call(null,testing_contexts)], null))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27683))?sablono.interpreter.attributes.call(null,attrs27683):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27683))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27683)], null))));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs27688 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__27689,t){
var map__27690 = p__27689;
var map__27690__$1 = ((((!((map__27690 == null)))?((((map__27690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27690):map__27690);
var last_context = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__27690__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = cljs.core._conj.call(null,cljs.core.List.EMPTY,devcards.core.test_renderer.call(null,t));
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)))),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,tests)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27688))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs27688)):{"className": "com-rigsomelight-devcards-test-card"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27688))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27688)], null))));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__27704){
var map__27705 = p__27704;
var map__27705__$1 = ((((!((map__27705 == null)))?((((map__27705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);
var type = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__27703 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__27703__$1 = ((((!((map__27703 == null)))?((((map__27703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27703):map__27703);
var fail = cljs.core.get.call(null,map__27703__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__27703__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__27703__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (p__27708){
var map__27709 = p__27708;
var map__27709__$1 = ((((!((map__27709 == null)))?((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var type = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1){
return (function (p__27711){
var map__27712 = p__27711;
var map__27712__$1 = ((((!((map__27712 == null)))?((((map__27712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27712):map__27712);
var type = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__27703,map__27703__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__19570__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (7))){
var state_27800__$1 = state_27800;
var statearr_27802_27851 = state_27800__$1;
(statearr_27802_27851[(2)] = false);

(statearr_27802_27851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (20))){
var inst_27741 = (state_27800[(7)]);
var inst_27760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27741);
var state_27800__$1 = state_27800;
var statearr_27803_27852 = state_27800__$1;
(statearr_27803_27852[(2)] = inst_27760);

(statearr_27803_27852[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (27))){
var inst_27775 = (state_27800[(8)]);
var inst_27765 = (state_27800[(9)]);
var inst_27779 = inst_27765.call(null,inst_27775);
var state_27800__$1 = state_27800;
var statearr_27804_27853 = state_27800__$1;
(statearr_27804_27853[(2)] = inst_27779);

(statearr_27804_27853[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (1))){
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(2),devcards.core.test_channel);
} else {
if((state_val_27801 === (24))){
var state_27800__$1 = state_27800;
var statearr_27805_27854 = state_27800__$1;
(statearr_27805_27854[(2)] = null);

(statearr_27805_27854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (4))){
var state_27800__$1 = state_27800;
var statearr_27806_27855 = state_27800__$1;
(statearr_27806_27855[(2)] = false);

(statearr_27806_27855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (15))){
var state_27800__$1 = state_27800;
var statearr_27807_27856 = state_27800__$1;
(statearr_27807_27856[(2)] = false);

(statearr_27807_27856[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (21))){
var inst_27741 = (state_27800[(7)]);
var state_27800__$1 = state_27800;
var statearr_27808_27857 = state_27800__$1;
(statearr_27808_27857[(2)] = inst_27741);

(statearr_27808_27857[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (13))){
var inst_27798 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
if((state_val_27801 === (22))){
var inst_27764 = (state_27800[(10)]);
var inst_27763 = (state_27800[(2)]);
var inst_27764__$1 = cljs.core.get.call(null,inst_27763,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27765 = cljs.core.get.call(null,inst_27763,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_27800__$1 = (function (){var statearr_27809 = state_27800;
(statearr_27809[(10)] = inst_27764__$1);

(statearr_27809[(9)] = inst_27765);

return statearr_27809;
})();
if(cljs.core.truth_(inst_27764__$1)){
var statearr_27810_27858 = state_27800__$1;
(statearr_27810_27858[(1)] = (23));

} else {
var statearr_27811_27859 = state_27800__$1;
(statearr_27811_27859[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (29))){
var inst_27789 = (state_27800[(2)]);
var inst_27790 = cljs.test.clear_env_BANG_.call(null);
var state_27800__$1 = (function (){var statearr_27812 = state_27800;
(statearr_27812[(11)] = inst_27789);

(statearr_27812[(12)] = inst_27790);

return statearr_27812;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(30),devcards.core.test_channel);
} else {
if((state_val_27801 === (6))){
var state_27800__$1 = state_27800;
var statearr_27813_27860 = state_27800__$1;
(statearr_27813_27860[(2)] = true);

(statearr_27813_27860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (28))){
var inst_27765 = (state_27800[(9)]);
var inst_27781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_27782 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_27783 = cljs.core.PersistentHashMap.fromArrays(inst_27781,inst_27782);
var inst_27784 = devcards.core.collect_test.call(null,inst_27783);
var inst_27785 = cljs.test.get_current_env.call(null);
var inst_27786 = cljs.core.assoc.call(null,inst_27785,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_27787 = inst_27765.call(null,inst_27786);
var state_27800__$1 = (function (){var statearr_27814 = state_27800;
(statearr_27814[(13)] = inst_27784);

return statearr_27814;
})();
var statearr_27815_27861 = state_27800__$1;
(statearr_27815_27861[(2)] = inst_27787);

(statearr_27815_27861[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (25))){
var inst_27796 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27816_27862 = state_27800__$1;
(statearr_27816_27862[(2)] = inst_27796);

(statearr_27816_27862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (17))){
var state_27800__$1 = state_27800;
var statearr_27817_27863 = state_27800__$1;
(statearr_27817_27863[(2)] = true);

(statearr_27817_27863[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (3))){
var inst_27718 = (state_27800[(14)]);
var inst_27723 = inst_27718.cljs$lang$protocol_mask$partition0$;
var inst_27724 = (inst_27723 & (64));
var inst_27725 = inst_27718.cljs$core$ISeq$;
var inst_27726 = (inst_27724) || (inst_27725);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27726)){
var statearr_27818_27864 = state_27800__$1;
(statearr_27818_27864[(1)] = (6));

} else {
var statearr_27819_27865 = state_27800__$1;
(statearr_27819_27865[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (12))){
var inst_27741 = (state_27800[(7)]);
var inst_27745 = (inst_27741 == null);
var inst_27746 = cljs.core.not.call(null,inst_27745);
var state_27800__$1 = state_27800;
if(inst_27746){
var statearr_27820_27866 = state_27800__$1;
(statearr_27820_27866[(1)] = (14));

} else {
var statearr_27821_27867 = state_27800__$1;
(statearr_27821_27867[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (2))){
var inst_27718 = (state_27800[(14)]);
var inst_27718__$1 = (state_27800[(2)]);
var inst_27720 = (inst_27718__$1 == null);
var inst_27721 = cljs.core.not.call(null,inst_27720);
var state_27800__$1 = (function (){var statearr_27822 = state_27800;
(statearr_27822[(14)] = inst_27718__$1);

return statearr_27822;
})();
if(inst_27721){
var statearr_27823_27868 = state_27800__$1;
(statearr_27823_27868[(1)] = (3));

} else {
var statearr_27824_27869 = state_27800__$1;
(statearr_27824_27869[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (23))){
var inst_27764 = (state_27800[(10)]);
var inst_27768 = (state_27800[(15)]);
var inst_27768__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_27769 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27770 = devcards.core.run_card_tests.call(null,inst_27764);
var inst_27771 = [inst_27770,inst_27768__$1];
var inst_27772 = (new cljs.core.PersistentVector(null,2,(5),inst_27769,inst_27771,null));
var state_27800__$1 = (function (){var statearr_27825 = state_27800;
(statearr_27825[(15)] = inst_27768__$1);

return statearr_27825;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27800__$1,(26),inst_27772);
} else {
if((state_val_27801 === (19))){
var inst_27755 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27826_27870 = state_27800__$1;
(statearr_27826_27870[(2)] = inst_27755);

(statearr_27826_27870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (11))){
var inst_27718 = (state_27800[(14)]);
var inst_27738 = (state_27800[(2)]);
var inst_27739 = cljs.core.get.call(null,inst_27738,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_27740 = cljs.core.get.call(null,inst_27738,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_27741 = inst_27718;
var state_27800__$1 = (function (){var statearr_27827 = state_27800;
(statearr_27827[(16)] = inst_27739);

(statearr_27827[(7)] = inst_27741);

(statearr_27827[(17)] = inst_27740);

return statearr_27827;
})();
var statearr_27828_27871 = state_27800__$1;
(statearr_27828_27871[(2)] = null);

(statearr_27828_27871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (9))){
var inst_27718 = (state_27800[(14)]);
var inst_27735 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27718);
var state_27800__$1 = state_27800;
var statearr_27829_27872 = state_27800__$1;
(statearr_27829_27872[(2)] = inst_27735);

(statearr_27829_27872[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (5))){
var inst_27733 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27733)){
var statearr_27830_27873 = state_27800__$1;
(statearr_27830_27873[(1)] = (9));

} else {
var statearr_27831_27874 = state_27800__$1;
(statearr_27831_27874[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (14))){
var inst_27741 = (state_27800[(7)]);
var inst_27748 = inst_27741.cljs$lang$protocol_mask$partition0$;
var inst_27749 = (inst_27748 & (64));
var inst_27750 = inst_27741.cljs$core$ISeq$;
var inst_27751 = (inst_27749) || (inst_27750);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27751)){
var statearr_27832_27875 = state_27800__$1;
(statearr_27832_27875[(1)] = (17));

} else {
var statearr_27833_27876 = state_27800__$1;
(statearr_27833_27876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (26))){
var inst_27768 = (state_27800[(15)]);
var inst_27774 = (state_27800[(2)]);
var inst_27775 = cljs.core.nth.call(null,inst_27774,(0),null);
var inst_27776 = cljs.core.nth.call(null,inst_27774,(1),null);
var inst_27777 = cljs.core.not_EQ_.call(null,inst_27776,inst_27768);
var state_27800__$1 = (function (){var statearr_27834 = state_27800;
(statearr_27834[(8)] = inst_27775);

return statearr_27834;
})();
if(inst_27777){
var statearr_27835_27877 = state_27800__$1;
(statearr_27835_27877[(1)] = (27));

} else {
var statearr_27836_27878 = state_27800__$1;
(statearr_27836_27878[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (16))){
var inst_27758 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
if(cljs.core.truth_(inst_27758)){
var statearr_27837_27879 = state_27800__$1;
(statearr_27837_27879[(1)] = (20));

} else {
var statearr_27838_27880 = state_27800__$1;
(statearr_27838_27880[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (30))){
var inst_27792 = (state_27800[(2)]);
var inst_27741 = inst_27792;
var state_27800__$1 = (function (){var statearr_27839 = state_27800;
(statearr_27839[(7)] = inst_27741);

return statearr_27839;
})();
var statearr_27840_27881 = state_27800__$1;
(statearr_27840_27881[(2)] = null);

(statearr_27840_27881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (10))){
var inst_27718 = (state_27800[(14)]);
var state_27800__$1 = state_27800;
var statearr_27841_27882 = state_27800__$1;
(statearr_27841_27882[(2)] = inst_27718);

(statearr_27841_27882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (18))){
var state_27800__$1 = state_27800;
var statearr_27842_27883 = state_27800__$1;
(statearr_27842_27883[(2)] = false);

(statearr_27842_27883[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27801 === (8))){
var inst_27730 = (state_27800[(2)]);
var state_27800__$1 = state_27800;
var statearr_27843_27884 = state_27800__$1;
(statearr_27843_27884[(2)] = inst_27730);

(statearr_27843_27884[(1)] = (5));


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
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var devcards$core$state_machine__23745__auto__ = null;
var devcards$core$state_machine__23745__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = devcards$core$state_machine__23745__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var devcards$core$state_machine__23745__auto____1 = (function (state_27800){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__23748__auto__ = e27848;
var statearr_27849_27885 = state_27800;
(statearr_27849_27885[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27886 = state_27800;
state_27800 = G__27886;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
devcards$core$state_machine__23745__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return devcards$core$state_machine__23745__auto____0.call(this);
case 1:
return devcards$core$state_machine__23745__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__23745__auto____0;
devcards$core$state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__23745__auto____1;
return devcards$core$state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_27850 = f__23857__auto__.call(null);
(statearr_27850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__26684__auto___27891 = {"componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4425__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4425__auto__)){
var test_thunks = temp__4425__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__26684__auto___27891);
}

var seq__27887_27892 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__27888_27893 = null;
var count__27889_27894 = (0);
var i__27890_27895 = (0);
while(true){
if((i__27890_27895 < count__27889_27894)){
var property__26685__auto___27896 = cljs.core._nth.call(null,chunk__27888_27893,i__27890_27895);
if(cljs.core.truth_((base__26684__auto___27891[property__26685__auto___27896]))){
(devcards.core.TestDevcard.prototype[property__26685__auto___27896] = (base__26684__auto___27891[property__26685__auto___27896]));
} else {
}

var G__27897 = seq__27887_27892;
var G__27898 = chunk__27888_27893;
var G__27899 = count__27889_27894;
var G__27900 = (i__27890_27895 + (1));
seq__27887_27892 = G__27897;
chunk__27888_27893 = G__27898;
count__27889_27894 = G__27899;
i__27890_27895 = G__27900;
continue;
} else {
var temp__4425__auto___27901 = cljs.core.seq.call(null,seq__27887_27892);
if(temp__4425__auto___27901){
var seq__27887_27902__$1 = temp__4425__auto___27901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27887_27902__$1)){
var c__20373__auto___27903 = cljs.core.chunk_first.call(null,seq__27887_27902__$1);
var G__27904 = cljs.core.chunk_rest.call(null,seq__27887_27902__$1);
var G__27905 = c__20373__auto___27903;
var G__27906 = cljs.core.count.call(null,c__20373__auto___27903);
var G__27907 = (0);
seq__27887_27892 = G__27904;
chunk__27888_27893 = G__27905;
count__27889_27894 = G__27906;
i__27890_27895 = G__27907;
continue;
} else {
var property__26685__auto___27908 = cljs.core.first.call(null,seq__27887_27902__$1);
if(cljs.core.truth_((base__26684__auto___27891[property__26685__auto___27908]))){
(devcards.core.TestDevcard.prototype[property__26685__auto___27908] = (base__26684__auto___27891[property__26685__auto___27908]));
} else {
}

var G__27909 = cljs.core.next.call(null,seq__27887_27902__$1);
var G__27910 = null;
var G__27911 = (0);
var G__27912 = (0);
seq__27887_27892 = G__27909;
chunk__27888_27893 = G__27910;
count__27889_27894 = G__27911;
i__27890_27895 = G__27912;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__20636__auto__ = [];
var len__20629__auto___27917 = arguments.length;
var i__20630__auto___27918 = (0);
while(true){
if((i__20630__auto___27918 < len__20629__auto___27917)){
args__20636__auto__.push((arguments[i__20630__auto___27918]));

var G__27919 = (i__20630__auto___27918 + (1));
i__20630__auto___27918 = G__27919;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((0) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((0)),(0))):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__20637__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core27914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core27914 = (function (test_thunks,meta27915){
this.test_thunks = test_thunks;
this.meta27915 = meta27915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core27914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27916,meta27915__$1){
var self__ = this;
var _27916__$1 = this;
return (new devcards.core.t_devcards$core27914(self__.test_thunks,meta27915__$1));
});

devcards.core.t_devcards$core27914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27916){
var self__ = this;
var _27916__$1 = this;
return self__.meta27915;
});

devcards.core.t_devcards$core27914.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core27914.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core27914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta27915","meta27915",-1466379986,null)], null);
});

devcards.core.t_devcards$core27914.cljs$lang$type = true;

devcards.core.t_devcards$core27914.cljs$lang$ctorStr = "devcards.core/t_devcards$core27914";

devcards.core.t_devcards$core27914.cljs$lang$ctorPrWriter = (function (this__20168__auto__,writer__20169__auto__,opt__20170__auto__){
return cljs.core._write.call(null,writer__20169__auto__,"devcards.core/t_devcards$core27914");
});

devcards.core.__GT_t_devcards$core27914 = (function devcards$core$__GT_t_devcards$core27914(test_thunks__$1,meta27915){
return (new devcards.core.t_devcards$core27914(test_thunks__$1,meta27915));
});

}

return (new devcards.core.t_devcards$core27914(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq27913){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27913));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var cards = temp__4425__auto__;
var temp__4425__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4425__auto____$1)){
var card = temp__4425__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4425__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4425__auto__)){
var base_card_options = temp__4425__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4425__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4425__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs27921 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27921))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27921)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27921))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27921)], null))));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4425__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4425__auto__)){
var card = temp__4425__auto__;
return React.render((function (){var attrs27923 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27923))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs27923)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs27923))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27923)], null))));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_27953){
var state_val_27954 = (state_27953[(1)]);
if((state_val_27954 === (1))){
var inst_27944 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_27953__$1 = state_27953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27953__$1,(2),inst_27944);
} else {
if((state_val_27954 === (2))){
var inst_27946 = (state_27953[(2)]);
var inst_27947 = cljs.core.async.timeout.call(null,(100));
var state_27953__$1 = (function (){var statearr_27955 = state_27953;
(statearr_27955[(7)] = inst_27946);

return statearr_27955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27953__$1,(3),inst_27947);
} else {
if((state_val_27954 === (3))){
var inst_27949 = (state_27953[(2)]);
var inst_27950 = (function (){return ((function (inst_27949,state_val_27954,c__23856__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_27949,state_val_27954,c__23856__auto__))
})();
var inst_27951 = setTimeout(inst_27950,(0));
var state_27953__$1 = (function (){var statearr_27956 = state_27953;
(statearr_27956[(8)] = inst_27949);

return statearr_27956;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27953__$1,inst_27951);
} else {
return null;
}
}
}
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__23745__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__23745__auto____0 = (function (){
var statearr_27960 = [null,null,null,null,null,null,null,null,null];
(statearr_27960[(0)] = devcards$core$mount_namespace_$_state_machine__23745__auto__);

(statearr_27960[(1)] = (1));

return statearr_27960;
});
var devcards$core$mount_namespace_$_state_machine__23745__auto____1 = (function (state_27953){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_27953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e27961){if((e27961 instanceof Object)){
var ex__23748__auto__ = e27961;
var statearr_27962_27964 = state_27953;
(statearr_27962_27964[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27961;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27965 = state_27953;
state_27953 = G__27965;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__23745__auto__ = function(state_27953){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__23745__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__23745__auto____1.call(this,state_27953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__23745__auto____0;
devcards$core$mount_namespace_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__23745__auto____1;
return devcards$core$mount_namespace_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_27963 = f__23857__auto__.call(null);
(statearr_27963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_27963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1447608115573