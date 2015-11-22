// Compiled by ClojureScript 0.0-3058 {}
goog.provide('ohds.test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('ohds.core_test');
goog.require('ohds.component_test');
cljs.core.enable_console_print_BANG_.call(null);
ohds.test_runner.runner = (function ohds$test_runner$runner(){
if(cljs.test.successful_QMARK_.call(null,cljs.test.run_block.call(null,(function (){var env9913 = cljs.test.empty_env.call(null);
var summary9914 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9913,summary9914){
return (function (){
cljs.test.set_env_BANG_.call(null,env9913);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ohds.core-test","ohds.core-test",-2040902292,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9818__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9818__auto__,env9913,summary9914){
return (function (){
if((env__9818__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9818__auto__,env9913,summary9914))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return ohds.core_test.example_passing_test;},new cljs.core.Symbol("ohds.core-test","example-passing-test","ohds.core-test/example-passing-test",2140024174,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds.core-test","ohds.core-test",-2040902292,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"/Users/jdowns/ohds/test/cljs/ohds/core-test.cljs",30,10,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(ohds.core_test.example_passing_test)?ohds.core_test.example_passing_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9818__auto__,env9913,summary9914){
return (function (){
if((env__9818__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9818__auto__,env9913,summary9914))
], null));
})());
});})(env9913,summary9914))
,((function (env9913,summary9914){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ohds.core-test","ohds.core-test",-2040902292,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env9913,summary9914))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9913,summary9914){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary9914,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary9914),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env9913,summary9914))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9913,summary9914){
return (function (){
cljs.test.set_env_BANG_.call(null,env9913);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ohds.component-test","ohds.component-test",-40454299,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__9818__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9818__auto__,env9913,summary9914){
return (function (){
if((env__9818__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__9818__auto__,env9913,summary9914))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return ohds.component_test.example_passing_test;},new cljs.core.Symbol("ohds.component-test","example-passing-test","ohds.component-test/example-passing-test",-1769210692,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds.component-test","ohds.component-test",-40454299,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"/Users/jdowns/ohds/test/cljs/ohds/component-test.cljs",30,10,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(ohds.component_test.example_passing_test)?ohds.component_test.example_passing_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__9818__auto__,env9913,summary9914){
return (function (){
if((env__9818__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__9818__auto__,env9913,summary9914))
], null));
})());
});})(env9913,summary9914))
,((function (env9913,summary9914){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"ohds.component-test","ohds.component-test",-40454299,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env9913,summary9914))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9913,summary9914){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary9914,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary9914),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env9913,summary9914))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env9913,summary9914){
return (function (){
cljs.test.set_env_BANG_.call(null,env9913);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary9914));

return cljs.test.clear_env_BANG_.call(null);
});})(env9913,summary9914))
], null));
})()))){
return (0);
} else {
return (1);
}
});
