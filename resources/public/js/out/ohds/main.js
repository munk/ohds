// Compiled by ClojureScript 0.0-3058 {}
goog.provide('ohds.main');
goog.require('cljs.core');
goog.require('ohds.core');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('weasel.repl');
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.println.call(null,"figwheel reload?!");
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null));
ohds.core.main.call(null);

//# sourceMappingURL=main.js.map?rel=1448168977116