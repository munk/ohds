// Compiled by ClojureScript 0.0-3058 {}
goog.provide('ohds.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('ohds.forms');
ohds.core_test.example_passing_test = (function ohds$core_test$example_passing_test(){
return cljs.test.test_var.call(null,ohds$core_test$example_passing_test.cljs$lang$var);
});
ohds.core_test.example_passing_test.cljs$lang$test = (function (){
var f = ohds.forms.login_form.call(null,null,cljs.core.PersistentArrayMap.EMPTY,(function (_AMPERSAND_args){
return null;
}));
return cljs.core.println.call(null,cljs.core.js_keys.call(null,f));
});

ohds.core_test.example_passing_test.cljs$lang$var = new cljs.core.Var(function(){return ohds.core_test.example_passing_test;},new cljs.core.Symbol("ohds.core-test","example-passing-test","ohds.core-test/example-passing-test",2140024174,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ohds.core-test","ohds.core-test",-2040902292,null),new cljs.core.Symbol(null,"example-passing-test","example-passing-test",594018964,null),"/Users/jdowns/ohds/test/cljs/ohds/core-test.cljs",30,10,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(ohds.core_test.example_passing_test)?ohds.core_test.example_passing_test.cljs$lang$test:null)]));
