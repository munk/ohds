// Compiled by ClojureScript 0.0-3058 {}
goog.provide('ohds.component_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('reagent.core');
goog.require('ohds.components');
ohds.component_test.example_passing_test = (function ohds$component_test$example_passing_test(){
return cljs.test.test_var.call(null,ohds$component_test$example_passing_test.cljs$lang$var);
});
ohds.component_test.example_passing_test.cljs$lang$test = (function (){
var h = ohds.components.hamburger.call(null);
try{var values__9713__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"button","button",1456579943)),cljs.core.get.call(null,h,(0)));
var result__9714__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__9713__auto__);
if(cljs.core.truth_(result__9714__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),(0)),new cljs.core.Keyword(null,"button","button",1456579943)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__9713__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),(0)),new cljs.core.Keyword(null,"button","button",1456579943)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__9713__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__9714__auto__;
}catch (e9906){var t__9751__auto__ = e9906;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"h","h",-1544777029,null),(0)),new cljs.core.Keyword(null,"button","button",1456579943)),new cljs.core.Keyword(null,"actual","actual",107306363),t__9751__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

ohds.component_test.example_passing_test.cljs$lang$var = new cljs.core.Var(function(){return ohds.component_test.example_passing_test;},new cljs.core.Symbol("ohds.component-test","example-passing-test","ohds.component-test/example-passing-test",-1769210692,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds.component-test","ohds.component-test",-40454299,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"/Users/jdowns/ohds/test/cljs/ohds/component-test.cljs",30,10,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(ohds.component_test.example_passing_test)?ohds.component_test.example_passing_test.cljs$lang$test:null)]));
