// Compiled by ClojureScript 1.7.170 {}
goog.provide('ohds_ui.dev');
goog.require('cljs.core');
goog.require('ohds_ui.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),ohds_ui.core.mount_root);
ohds_ui.core.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map?rel=1447608544049