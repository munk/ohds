// Compiled by ClojureScript 1.7.170 {}
goog.provide('ohds_ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('accountant.core');
if(typeof ohds_ui.core.app_state !== 'undefined'){
} else {
ohds_ui.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.core.enable_console_print_BANG_.call(null);
ohds_ui.core.home_page = (function ohds_ui$core$home_page(){
cljs.core.swap_BANG_.call(null,ohds_ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"foo","foo",1268894036),(1));

console.log(cljs.core.deref.call(null,ohds_ui.core.app_state));

cljs.core.println.call(null,"home page");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to ohds-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"go to about page"], null)], null)], null);
});
ohds_ui.core.about_page = (function ohds_ui$core$about_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About ohds-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"go to the home page"], null)], null)], null);
});
ohds_ui.core.current_page = (function ohds_ui$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__29391__auto___47556 = (function (params__29392__auto__){
if(cljs.core.map_QMARK_.call(null,params__29392__auto__)){
var map__47553 = params__29392__auto__;
var map__47553__$1 = ((((!((map__47553 == null)))?((((map__47553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47553):map__47553);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ohds_ui.core.home_page;},new cljs.core.Symbol("ohds-ui.core","home-page","ohds-ui.core/home-page",-849270403,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds-ui.core","ohds-ui.core",2036758041,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/jdowns/ohds-ui/src/cljs/ohds_ui/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ohds_ui.core.home_page)?ohds_ui.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29392__auto__)){
var vec__47555 = params__29392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ohds_ui.core.home_page;},new cljs.core.Symbol("ohds-ui.core","home-page","ohds-ui.core/home-page",-849270403,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds-ui.core","ohds-ui.core",2036758041,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/jdowns/ohds-ui/src/cljs/ohds_ui/core.cljs",16,1,16,16,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ohds_ui.core.home_page)?ohds_ui.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__29391__auto___47556);

var action__29391__auto___47560 = (function (params__29392__auto__){
if(cljs.core.map_QMARK_.call(null,params__29392__auto__)){
var map__47557 = params__29392__auto__;
var map__47557__$1 = ((((!((map__47557 == null)))?((((map__47557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47557):map__47557);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ohds_ui.core.about_page;},new cljs.core.Symbol("ohds-ui.core","about-page","ohds-ui.core/about-page",2127881533,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds-ui.core","ohds-ui.core",2036758041,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/jdowns/ohds-ui/src/cljs/ohds_ui/core.cljs",17,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ohds_ui.core.about_page)?ohds_ui.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__29392__auto__)){
var vec__47559 = params__29392__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ohds_ui.core.about_page;},new cljs.core.Symbol("ohds-ui.core","about-page","ohds-ui.core/about-page",2127881533,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds-ui.core","ohds-ui.core",2036758041,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/jdowns/ohds-ui/src/cljs/ohds_ui/core.cljs",17,1,23,23,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ohds_ui.core.about_page)?ohds_ui.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__29391__auto___47560);

ohds_ui.core.mount_root = (function ohds_ui$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ohds_ui.core.current_page], null),document.getElementById("app"));
});
ohds_ui.core.init_BANG_ = (function ohds_ui$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return ohds_ui.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1447608544002