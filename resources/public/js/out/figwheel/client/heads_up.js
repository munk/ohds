// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__37079_37087 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__37080_37088 = null;
var count__37081_37089 = (0);
var i__37082_37090 = (0);
while(true){
if((i__37082_37090 < count__37081_37089)){
var k_37091 = cljs.core._nth.call(null,chunk__37080_37088,i__37082_37090);
e.setAttribute(cljs.core.name.call(null,k_37091),cljs.core.get.call(null,attrs,k_37091));

var G__37092 = seq__37079_37087;
var G__37093 = chunk__37080_37088;
var G__37094 = count__37081_37089;
var G__37095 = (i__37082_37090 + (1));
seq__37079_37087 = G__37092;
chunk__37080_37088 = G__37093;
count__37081_37089 = G__37094;
i__37082_37090 = G__37095;
continue;
} else {
var temp__4126__auto___37096 = cljs.core.seq.call(null,seq__37079_37087);
if(temp__4126__auto___37096){
var seq__37079_37097__$1 = temp__4126__auto___37096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37079_37097__$1)){
var c__25893__auto___37098 = cljs.core.chunk_first.call(null,seq__37079_37097__$1);
var G__37099 = cljs.core.chunk_rest.call(null,seq__37079_37097__$1);
var G__37100 = c__25893__auto___37098;
var G__37101 = cljs.core.count.call(null,c__25893__auto___37098);
var G__37102 = (0);
seq__37079_37087 = G__37099;
chunk__37080_37088 = G__37100;
count__37081_37089 = G__37101;
i__37082_37090 = G__37102;
continue;
} else {
var k_37103 = cljs.core.first.call(null,seq__37079_37097__$1);
e.setAttribute(cljs.core.name.call(null,k_37103),cljs.core.get.call(null,attrs,k_37103));

var G__37104 = cljs.core.next.call(null,seq__37079_37097__$1);
var G__37105 = null;
var G__37106 = (0);
var G__37107 = (0);
seq__37079_37087 = G__37104;
chunk__37080_37088 = G__37105;
count__37081_37089 = G__37106;
i__37082_37090 = G__37107;
continue;
}
} else {
}
}
break;
}

var seq__37083_37108 = cljs.core.seq.call(null,children);
var chunk__37084_37109 = null;
var count__37085_37110 = (0);
var i__37086_37111 = (0);
while(true){
if((i__37086_37111 < count__37085_37110)){
var ch_37112 = cljs.core._nth.call(null,chunk__37084_37109,i__37086_37111);
e.appendChild(ch_37112);

var G__37113 = seq__37083_37108;
var G__37114 = chunk__37084_37109;
var G__37115 = count__37085_37110;
var G__37116 = (i__37086_37111 + (1));
seq__37083_37108 = G__37113;
chunk__37084_37109 = G__37114;
count__37085_37110 = G__37115;
i__37086_37111 = G__37116;
continue;
} else {
var temp__4126__auto___37117 = cljs.core.seq.call(null,seq__37083_37108);
if(temp__4126__auto___37117){
var seq__37083_37118__$1 = temp__4126__auto___37117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37083_37118__$1)){
var c__25893__auto___37119 = cljs.core.chunk_first.call(null,seq__37083_37118__$1);
var G__37120 = cljs.core.chunk_rest.call(null,seq__37083_37118__$1);
var G__37121 = c__25893__auto___37119;
var G__37122 = cljs.core.count.call(null,c__25893__auto___37119);
var G__37123 = (0);
seq__37083_37108 = G__37120;
chunk__37084_37109 = G__37121;
count__37085_37110 = G__37122;
i__37086_37111 = G__37123;
continue;
} else {
var ch_37124 = cljs.core.first.call(null,seq__37083_37118__$1);
e.appendChild(ch_37124);

var G__37125 = cljs.core.next.call(null,seq__37083_37118__$1);
var G__37126 = null;
var G__37127 = (0);
var G__37128 = (0);
seq__37083_37108 = G__37125;
chunk__37084_37109 = G__37126;
count__37085_37110 = G__37127;
i__37086_37111 = G__37128;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__37129__i = 0, G__37129__a = new Array(arguments.length -  2);
while (G__37129__i < G__37129__a.length) {G__37129__a[G__37129__i] = arguments[G__37129__i + 2]; ++G__37129__i;}
  children = new cljs.core.IndexedSeq(G__37129__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__37130){
var t = cljs.core.first(arglist__37130);
arglist__37130 = cljs.core.next(arglist__37130);
var attrs = cljs.core.first(arglist__37130);
var children = cljs.core.rest(arglist__37130);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26005__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26006__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26007__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26003__auto__,prefer_table__26004__auto__,method_cache__26005__auto__,cached_hierarchy__26006__auto__,hierarchy__26007__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26003__auto__,prefer_table__26004__auto__,method_cache__26005__auto__,cached_hierarchy__26006__auto__,hierarchy__26007__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26007__auto__,method_table__26003__auto__,prefer_table__26004__auto__,method_cache__26005__auto__,cached_hierarchy__26006__auto__));
})();
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
var el_37131 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_37131.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_37131.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_37131.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_37131);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__37132,st_map){
var map__37136 = p__37132;
var map__37136__$1 = ((cljs.core.seq_QMARK_.call(null,map__37136))?cljs.core.apply.call(null,cljs.core.hash_map,map__37136):map__37136);
var container_el = cljs.core.get.call(null,map__37136__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__37136,map__37136__$1,container_el){
return (function (p__37137){
var vec__37138 = p__37137;
var k = cljs.core.nth.call(null,vec__37138,(0),null);
var v = cljs.core.nth.call(null,vec__37138,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__37136,map__37136__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__37139,dom_str){
var map__37141 = p__37139;
var map__37141__$1 = ((cljs.core.seq_QMARK_.call(null,map__37141))?cljs.core.apply.call(null,cljs.core.hash_map,map__37141):map__37141);
var c = map__37141__$1;
var content_area_el = cljs.core.get.call(null,map__37141__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__37142){
var map__37144 = p__37142;
var map__37144__$1 = ((cljs.core.seq_QMARK_.call(null,map__37144))?cljs.core.apply.call(null,cljs.core.hash_map,map__37144):map__37144);
var content_area_el = cljs.core.get.call(null,map__37144__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_37186){
var state_val_37187 = (state_37186[(1)]);
if((state_val_37187 === (2))){
var inst_37171 = (state_37186[(7)]);
var inst_37180 = (state_37186[(2)]);
var inst_37181 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_37182 = ["auto"];
var inst_37183 = cljs.core.PersistentHashMap.fromArrays(inst_37181,inst_37182);
var inst_37184 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37171,inst_37183);
var state_37186__$1 = (function (){var statearr_37188 = state_37186;
(statearr_37188[(8)] = inst_37180);

return statearr_37188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37186__$1,inst_37184);
} else {
if((state_val_37187 === (1))){
var inst_37171 = (state_37186[(7)]);
var inst_37171__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37172 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37173 = ["10px","10px","100%","68px","1.0"];
var inst_37174 = cljs.core.PersistentHashMap.fromArrays(inst_37172,inst_37173);
var inst_37175 = cljs.core.merge.call(null,inst_37174,style);
var inst_37176 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37171__$1,inst_37175);
var inst_37177 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37171__$1,msg);
var inst_37178 = cljs.core.async.timeout.call(null,(300));
var state_37186__$1 = (function (){var statearr_37189 = state_37186;
(statearr_37189[(9)] = inst_37177);

(statearr_37189[(10)] = inst_37176);

(statearr_37189[(7)] = inst_37171__$1);

return statearr_37189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37186__$1,(2),inst_37178);
} else {
return null;
}
}
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____0 = (function (){
var statearr_37193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37193[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__);

(statearr_37193[(1)] = (1));

return statearr_37193;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____1 = (function (state_37186){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37194){if((e37194 instanceof Object)){
var ex__28070__auto__ = e37194;
var statearr_37195_37197 = state_37186;
(statearr_37195_37197[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37198 = state_37186;
state_37186 = G__37198;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__ = function(state_37186){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____1.call(this,state_37186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_37196 = f__28123__auto__.call(null);
(statearr_37196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_37196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
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
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__37200 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__37200,(0),null);
var ln = cljs.core.nth.call(null,vec__37200,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__37203 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__37203,(0),null);
var file_line = cljs.core.nth.call(null,vec__37203,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__37203,file_name,file_line){
return (function (p1__37201_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__37201_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__37203,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__37205 = figwheel.client.heads_up.ensure_container.call(null);
var map__37205__$1 = ((cljs.core.seq_QMARK_.call(null,map__37205))?cljs.core.apply.call(null,cljs.core.hash_map,map__37205):map__37205);
var content_area_el = cljs.core.get.call(null,map__37205__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_37252){
var state_val_37253 = (state_37252[(1)]);
if((state_val_37253 === (3))){
var inst_37235 = (state_37252[(7)]);
var inst_37249 = (state_37252[(2)]);
var inst_37250 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37235,"");
var state_37252__$1 = (function (){var statearr_37254 = state_37252;
(statearr_37254[(8)] = inst_37249);

return statearr_37254;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37252__$1,inst_37250);
} else {
if((state_val_37253 === (2))){
var inst_37235 = (state_37252[(7)]);
var inst_37242 = (state_37252[(2)]);
var inst_37243 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37244 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37245 = cljs.core.PersistentHashMap.fromArrays(inst_37243,inst_37244);
var inst_37246 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37235,inst_37245);
var inst_37247 = cljs.core.async.timeout.call(null,(200));
var state_37252__$1 = (function (){var statearr_37255 = state_37252;
(statearr_37255[(9)] = inst_37242);

(statearr_37255[(10)] = inst_37246);

return statearr_37255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37252__$1,(3),inst_37247);
} else {
if((state_val_37253 === (1))){
var inst_37235 = (state_37252[(7)]);
var inst_37235__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37236 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37237 = ["0.0"];
var inst_37238 = cljs.core.PersistentHashMap.fromArrays(inst_37236,inst_37237);
var inst_37239 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37235__$1,inst_37238);
var inst_37240 = cljs.core.async.timeout.call(null,(300));
var state_37252__$1 = (function (){var statearr_37256 = state_37252;
(statearr_37256[(11)] = inst_37239);

(statearr_37256[(7)] = inst_37235__$1);

return statearr_37256;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37252__$1,(2),inst_37240);
} else {
return null;
}
}
}
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__28067__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__28067__auto____0 = (function (){
var statearr_37260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37260[(0)] = figwheel$client$heads_up$clear_$_state_machine__28067__auto__);

(statearr_37260[(1)] = (1));

return statearr_37260;
});
var figwheel$client$heads_up$clear_$_state_machine__28067__auto____1 = (function (state_37252){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37261){if((e37261 instanceof Object)){
var ex__28070__auto__ = e37261;
var statearr_37262_37264 = state_37252;
(statearr_37262_37264[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37265 = state_37252;
state_37252 = G__37265;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__28067__auto__ = function(state_37252){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__28067__auto____1.call(this,state_37252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__28067__auto____0;
figwheel$client$heads_up$clear_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__28067__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_37263 = f__28123__auto__.call(null);
(statearr_37263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_37263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__28122__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28122__auto__){
return (function (){
var f__28123__auto__ = (function (){var switch__28066__auto__ = ((function (c__28122__auto__){
return (function (state_37297){
var state_val_37298 = (state_37297[(1)]);
if((state_val_37298 === (4))){
var inst_37295 = (state_37297[(2)]);
var state_37297__$1 = state_37297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37297__$1,inst_37295);
} else {
if((state_val_37298 === (3))){
var inst_37292 = (state_37297[(2)]);
var inst_37293 = figwheel.client.heads_up.clear.call(null);
var state_37297__$1 = (function (){var statearr_37299 = state_37297;
(statearr_37299[(7)] = inst_37292);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,(4),inst_37293);
} else {
if((state_val_37298 === (2))){
var inst_37289 = (state_37297[(2)]);
var inst_37290 = cljs.core.async.timeout.call(null,(400));
var state_37297__$1 = (function (){var statearr_37300 = state_37297;
(statearr_37300[(8)] = inst_37289);

return statearr_37300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,(3),inst_37290);
} else {
if((state_val_37298 === (1))){
var inst_37287 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37297__$1 = state_37297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37297__$1,(2),inst_37287);
} else {
return null;
}
}
}
}
});})(c__28122__auto__))
;
return ((function (switch__28066__auto__,c__28122__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____0 = (function (){
var statearr_37304 = [null,null,null,null,null,null,null,null,null];
(statearr_37304[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__);

(statearr_37304[(1)] = (1));

return statearr_37304;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____1 = (function (state_37297){
while(true){
var ret_value__28068__auto__ = (function (){try{while(true){
var result__28069__auto__ = switch__28066__auto__.call(null,state_37297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28069__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28069__auto__;
}
break;
}
}catch (e37305){if((e37305 instanceof Object)){
var ex__28070__auto__ = e37305;
var statearr_37306_37308 = state_37297;
(statearr_37306_37308[(5)] = ex__28070__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37309 = state_37297;
state_37297 = G__37309;
continue;
} else {
return ret_value__28068__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__ = function(state_37297){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____1.call(this,state_37297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__28067__auto__;
})()
;})(switch__28066__auto__,c__28122__auto__))
})();
var state__28124__auto__ = (function (){var statearr_37307 = f__28123__auto__.call(null);
(statearr_37307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28122__auto__);

return statearr_37307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28124__auto__);
});})(c__28122__auto__))
);

return c__28122__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1446160953114