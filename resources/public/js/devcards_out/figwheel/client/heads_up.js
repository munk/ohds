// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20636__auto__ = [];
var len__20629__auto___29959 = arguments.length;
var i__20630__auto___29960 = (0);
while(true){
if((i__20630__auto___29960 < len__20629__auto___29959)){
args__20636__auto__.push((arguments[i__20630__auto___29960]));

var G__29961 = (i__20630__auto___29960 + (1));
i__20630__auto___29960 = G__29961;
continue;
} else {
}
break;
}

var argseq__20637__auto__ = ((((2) < args__20636__auto__.length))?(new cljs.core.IndexedSeq(args__20636__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20637__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29951_29962 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29952_29963 = null;
var count__29953_29964 = (0);
var i__29954_29965 = (0);
while(true){
if((i__29954_29965 < count__29953_29964)){
var k_29966 = cljs.core._nth.call(null,chunk__29952_29963,i__29954_29965);
e.setAttribute(cljs.core.name.call(null,k_29966),cljs.core.get.call(null,attrs,k_29966));

var G__29967 = seq__29951_29962;
var G__29968 = chunk__29952_29963;
var G__29969 = count__29953_29964;
var G__29970 = (i__29954_29965 + (1));
seq__29951_29962 = G__29967;
chunk__29952_29963 = G__29968;
count__29953_29964 = G__29969;
i__29954_29965 = G__29970;
continue;
} else {
var temp__4425__auto___29971 = cljs.core.seq.call(null,seq__29951_29962);
if(temp__4425__auto___29971){
var seq__29951_29972__$1 = temp__4425__auto___29971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29951_29972__$1)){
var c__20373__auto___29973 = cljs.core.chunk_first.call(null,seq__29951_29972__$1);
var G__29974 = cljs.core.chunk_rest.call(null,seq__29951_29972__$1);
var G__29975 = c__20373__auto___29973;
var G__29976 = cljs.core.count.call(null,c__20373__auto___29973);
var G__29977 = (0);
seq__29951_29962 = G__29974;
chunk__29952_29963 = G__29975;
count__29953_29964 = G__29976;
i__29954_29965 = G__29977;
continue;
} else {
var k_29978 = cljs.core.first.call(null,seq__29951_29972__$1);
e.setAttribute(cljs.core.name.call(null,k_29978),cljs.core.get.call(null,attrs,k_29978));

var G__29979 = cljs.core.next.call(null,seq__29951_29972__$1);
var G__29980 = null;
var G__29981 = (0);
var G__29982 = (0);
seq__29951_29962 = G__29979;
chunk__29952_29963 = G__29980;
count__29953_29964 = G__29981;
i__29954_29965 = G__29982;
continue;
}
} else {
}
}
break;
}

var seq__29955_29983 = cljs.core.seq.call(null,children);
var chunk__29956_29984 = null;
var count__29957_29985 = (0);
var i__29958_29986 = (0);
while(true){
if((i__29958_29986 < count__29957_29985)){
var ch_29987 = cljs.core._nth.call(null,chunk__29956_29984,i__29958_29986);
e.appendChild(ch_29987);

var G__29988 = seq__29955_29983;
var G__29989 = chunk__29956_29984;
var G__29990 = count__29957_29985;
var G__29991 = (i__29958_29986 + (1));
seq__29955_29983 = G__29988;
chunk__29956_29984 = G__29989;
count__29957_29985 = G__29990;
i__29958_29986 = G__29991;
continue;
} else {
var temp__4425__auto___29992 = cljs.core.seq.call(null,seq__29955_29983);
if(temp__4425__auto___29992){
var seq__29955_29993__$1 = temp__4425__auto___29992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29955_29993__$1)){
var c__20373__auto___29994 = cljs.core.chunk_first.call(null,seq__29955_29993__$1);
var G__29995 = cljs.core.chunk_rest.call(null,seq__29955_29993__$1);
var G__29996 = c__20373__auto___29994;
var G__29997 = cljs.core.count.call(null,c__20373__auto___29994);
var G__29998 = (0);
seq__29955_29983 = G__29995;
chunk__29956_29984 = G__29996;
count__29957_29985 = G__29997;
i__29958_29986 = G__29998;
continue;
} else {
var ch_29999 = cljs.core.first.call(null,seq__29955_29993__$1);
e.appendChild(ch_29999);

var G__30000 = cljs.core.next.call(null,seq__29955_29993__$1);
var G__30001 = null;
var G__30002 = (0);
var G__30003 = (0);
seq__29955_29983 = G__30000;
chunk__29956_29984 = G__30001;
count__29957_29985 = G__30002;
i__29958_29986 = G__30003;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29948){
var G__29949 = cljs.core.first.call(null,seq29948);
var seq29948__$1 = cljs.core.next.call(null,seq29948);
var G__29950 = cljs.core.first.call(null,seq29948__$1);
var seq29948__$2 = cljs.core.next.call(null,seq29948__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29949,G__29950,seq29948__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20484__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20488__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20484__auto__,prefer_table__20485__auto__,method_cache__20486__auto__,cached_hierarchy__20487__auto__,hierarchy__20488__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20484__auto__,prefer_table__20485__auto__,method_cache__20486__auto__,cached_hierarchy__20487__auto__,hierarchy__20488__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20488__auto__,method_table__20484__auto__,prefer_table__20485__auto__,method_cache__20486__auto__,cached_hierarchy__20487__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30004 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30004.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30004.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_30004.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30004);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30005,st_map){
var map__30010 = p__30005;
var map__30010__$1 = ((((!((map__30010 == null)))?((((map__30010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30010):map__30010);
var container_el = cljs.core.get.call(null,map__30010__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30010,map__30010__$1,container_el){
return (function (p__30012){
var vec__30013 = p__30012;
var k = cljs.core.nth.call(null,vec__30013,(0),null);
var v = cljs.core.nth.call(null,vec__30013,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30010,map__30010__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30014,dom_str){
var map__30017 = p__30014;
var map__30017__$1 = ((((!((map__30017 == null)))?((((map__30017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);
var c = map__30017__$1;
var content_area_el = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30019){
var map__30022 = p__30019;
var map__30022__$1 = ((((!((map__30022 == null)))?((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var content_area_el = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_30065){
var state_val_30066 = (state_30065[(1)]);
if((state_val_30066 === (1))){
var inst_30050 = (state_30065[(7)]);
var inst_30050__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30051 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30052 = ["10px","10px","100%","68px","1.0"];
var inst_30053 = cljs.core.PersistentHashMap.fromArrays(inst_30051,inst_30052);
var inst_30054 = cljs.core.merge.call(null,inst_30053,style);
var inst_30055 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30050__$1,inst_30054);
var inst_30056 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30050__$1,msg);
var inst_30057 = cljs.core.async.timeout.call(null,(300));
var state_30065__$1 = (function (){var statearr_30067 = state_30065;
(statearr_30067[(7)] = inst_30050__$1);

(statearr_30067[(8)] = inst_30056);

(statearr_30067[(9)] = inst_30055);

return statearr_30067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30065__$1,(2),inst_30057);
} else {
if((state_val_30066 === (2))){
var inst_30050 = (state_30065[(7)]);
var inst_30059 = (state_30065[(2)]);
var inst_30060 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30061 = ["auto"];
var inst_30062 = cljs.core.PersistentHashMap.fromArrays(inst_30060,inst_30061);
var inst_30063 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30050,inst_30062);
var state_30065__$1 = (function (){var statearr_30068 = state_30065;
(statearr_30068[(10)] = inst_30059);

return statearr_30068;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30065__$1,inst_30063);
} else {
return null;
}
}
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____0 = (function (){
var statearr_30072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30072[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__);

(statearr_30072[(1)] = (1));

return statearr_30072;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____1 = (function (state_30065){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30073){if((e30073 instanceof Object)){
var ex__23748__auto__ = e30073;
var statearr_30074_30076 = state_30065;
(statearr_30074_30076[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30077 = state_30065;
state_30065 = G__30077;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__ = function(state_30065){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____1.call(this,state_30065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_30075 = f__23857__auto__.call(null);
(statearr_30075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_30075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30079 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__30079,(0),null);
var ln = cljs.core.nth.call(null,vec__30079,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30082 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30082,(0),null);
var file_line = cljs.core.nth.call(null,vec__30082,(1),null);
var file_column = cljs.core.nth.call(null,vec__30082,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30082,file_name,file_line,file_column){
return (function (p1__30080_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__30080_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__30082,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19570__auto__ = file_line;
if(cljs.core.truth_(or__19570__auto__)){
return or__19570__auto__;
} else {
var and__19558__auto__ = cause;
if(cljs.core.truth_(and__19558__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19558__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30085 = figwheel.client.heads_up.ensure_container.call(null);
var map__30085__$1 = ((((!((map__30085 == null)))?((((map__30085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30085):map__30085);
var content_area_el = cljs.core.get.call(null,map__30085__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_30133){
var state_val_30134 = (state_30133[(1)]);
if((state_val_30134 === (1))){
var inst_30116 = (state_30133[(7)]);
var inst_30116__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30117 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30118 = ["0.0"];
var inst_30119 = cljs.core.PersistentHashMap.fromArrays(inst_30117,inst_30118);
var inst_30120 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30116__$1,inst_30119);
var inst_30121 = cljs.core.async.timeout.call(null,(300));
var state_30133__$1 = (function (){var statearr_30135 = state_30133;
(statearr_30135[(8)] = inst_30120);

(statearr_30135[(7)] = inst_30116__$1);

return statearr_30135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(2),inst_30121);
} else {
if((state_val_30134 === (2))){
var inst_30116 = (state_30133[(7)]);
var inst_30123 = (state_30133[(2)]);
var inst_30124 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30125 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30126 = cljs.core.PersistentHashMap.fromArrays(inst_30124,inst_30125);
var inst_30127 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30116,inst_30126);
var inst_30128 = cljs.core.async.timeout.call(null,(200));
var state_30133__$1 = (function (){var statearr_30136 = state_30133;
(statearr_30136[(9)] = inst_30123);

(statearr_30136[(10)] = inst_30127);

return statearr_30136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30133__$1,(3),inst_30128);
} else {
if((state_val_30134 === (3))){
var inst_30116 = (state_30133[(7)]);
var inst_30130 = (state_30133[(2)]);
var inst_30131 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30116,"");
var state_30133__$1 = (function (){var statearr_30137 = state_30133;
(statearr_30137[(11)] = inst_30130);

return statearr_30137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30133__$1,inst_30131);
} else {
return null;
}
}
}
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23745__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23745__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = figwheel$client$heads_up$clear_$_state_machine__23745__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var figwheel$client$heads_up$clear_$_state_machine__23745__auto____1 = (function (state_30133){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__23748__auto__ = e30142;
var statearr_30143_30145 = state_30133;
(statearr_30143_30145[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30146 = state_30133;
state_30133 = G__30146;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23745__auto__ = function(state_30133){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23745__auto____1.call(this,state_30133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23745__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23745__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_30144 = f__23857__auto__.call(null);
(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23856__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23856__auto__){
return (function (){
var f__23857__auto__ = (function (){var switch__23744__auto__ = ((function (c__23856__auto__){
return (function (state_30178){
var state_val_30179 = (state_30178[(1)]);
if((state_val_30179 === (1))){
var inst_30168 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_30178__$1 = state_30178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30178__$1,(2),inst_30168);
} else {
if((state_val_30179 === (2))){
var inst_30170 = (state_30178[(2)]);
var inst_30171 = cljs.core.async.timeout.call(null,(400));
var state_30178__$1 = (function (){var statearr_30180 = state_30178;
(statearr_30180[(7)] = inst_30170);

return statearr_30180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30178__$1,(3),inst_30171);
} else {
if((state_val_30179 === (3))){
var inst_30173 = (state_30178[(2)]);
var inst_30174 = figwheel.client.heads_up.clear.call(null);
var state_30178__$1 = (function (){var statearr_30181 = state_30178;
(statearr_30181[(8)] = inst_30173);

return statearr_30181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30178__$1,(4),inst_30174);
} else {
if((state_val_30179 === (4))){
var inst_30176 = (state_30178[(2)]);
var state_30178__$1 = state_30178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30178__$1,inst_30176);
} else {
return null;
}
}
}
}
});})(c__23856__auto__))
;
return ((function (switch__23744__auto__,c__23856__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____0 = (function (){
var statearr_30185 = [null,null,null,null,null,null,null,null,null];
(statearr_30185[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__);

(statearr_30185[(1)] = (1));

return statearr_30185;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____1 = (function (state_30178){
while(true){
var ret_value__23746__auto__ = (function (){try{while(true){
var result__23747__auto__ = switch__23744__auto__.call(null,state_30178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23747__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23747__auto__;
}
break;
}
}catch (e30186){if((e30186 instanceof Object)){
var ex__23748__auto__ = e30186;
var statearr_30187_30189 = state_30178;
(statearr_30187_30189[(5)] = ex__23748__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30190 = state_30178;
state_30178 = G__30190;
continue;
} else {
return ret_value__23746__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__ = function(state_30178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____1.call(this,state_30178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23745__auto__;
})()
;})(switch__23744__auto__,c__23856__auto__))
})();
var state__23858__auto__ = (function (){var statearr_30188 = f__23857__auto__.call(null);
(statearr_30188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23856__auto__);

return statearr_30188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23858__auto__);
});})(c__23856__auto__))
);

return c__23856__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1447608118207