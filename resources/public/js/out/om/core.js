// Compiled by ClojureScript 0.0-3058 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj32518 = {};
return obj32518;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.display_name[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.display_name["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj32520 = {};
return obj32520;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.init_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.init_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj32522 = {};
return obj32522;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.should_update[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.should_update["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj32524 = {};
return obj32524;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.will_mount[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.will_mount["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj32526 = {};
return obj32526;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.did_mount[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.did_mount["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj32528 = {};
return obj32528;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.will_unmount[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.will_unmount["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj32530 = {};
return obj32530;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.will_update[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.will_update["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj32532 = {};
return obj32532;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.did_update[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.did_update["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj32534 = {};
return obj32534;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.will_receive_props[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.will_receive_props["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj32536 = {};
return obj32536;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.render[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.render["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj32538 = {};
return obj32538;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.render_props[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.render_props["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj32540 = {};
return obj32540;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core.render_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core.render_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj32542 = {};
return obj32542;
})();


om.core.IOmSwap = (function (){var obj32544 = {};
return obj32544;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj32546 = {};
return obj32546;
})();

om.core._get_state = (function() {
var om$core$_get_state = null;
var om$core$_get_state__1 = (function (this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_state__2 = (function (this$,ks){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_state__1.call(this,this$);
case 2:
return om$core$_get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_state__1;
om$core$_get_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_state__2;
return om$core$_get_state;
})()
;


om.core.IGetRenderState = (function (){var obj32548 = {};
return obj32548;
})();

om.core._get_render_state = (function() {
var om$core$_get_render_state = null;
var om$core$_get_render_state__1 = (function (this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_render_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_render_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_render_state__2 = (function (this$,ks){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_render_state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_render_state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
om$core$_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return om$core$_get_render_state__1.call(this,this$);
case 2:
return om$core$_get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$_get_render_state__1;
om$core$_get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$_get_render_state__2;
return om$core$_get_render_state;
})()
;


om.core.ISetState = (function (){var obj32550 = {};
return obj32550;
})();

om.core._set_state_BANG_ = (function() {
var om$core$_set_state_BANG_ = null;
var om$core$_set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var om$core$_set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
om$core$_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return om$core$_set_state_BANG___3.call(this,this$,ks,val);
case 4:
return om$core$_set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$_set_state_BANG___3;
om$core$_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$_set_state_BANG___4;
return om$core$_set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj32552 = {};
return obj32552;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_queue[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_queue["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj32554 = {};
return obj32554;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__25094__auto__ = x;
if(and__25094__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__25094__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__25750__auto__ = (((x == null))?null:x);
return (function (){var or__25106__auto__ = (om.core._value[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._value["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj32556 = {};
return obj32556;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__25094__auto__ = cursor;
if(and__25094__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__25094__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__25750__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__25106__auto__ = (om.core._path[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._path["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__25094__auto__ = cursor;
if(and__25094__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__25094__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__25750__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__25106__auto__ = (om.core._state[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._state["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj32558 = {};
return obj32558;
})();

om.core._to_cursor = (function() {
var om$core$_to_cursor = null;
var om$core$_to_cursor__2 = (function (value,state){
if((function (){var and__25094__auto__ = value;
if(and__25094__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__25094__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__25750__auto__ = (((value == null))?null:value);
return (function (){var or__25106__auto__ = (om.core._to_cursor[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._to_cursor["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var om$core$_to_cursor__3 = (function (value,state,path){
if((function (){var and__25094__auto__ = value;
if(and__25094__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__25094__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__25750__auto__ = (((value == null))?null:value);
return (function (){var or__25106__auto__ = (om.core._to_cursor[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._to_cursor["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
om$core$_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return om$core$_to_cursor__2.call(this,value,state);
case 3:
return om$core$_to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$_to_cursor__2;
om$core$_to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$_to_cursor__3;
return om$core$_to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj32560 = {};
return obj32560;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__25094__auto__ = cursor;
if(and__25094__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__25094__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__25750__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__25106__auto__ = (om.core._derive[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._derive["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function om$core$path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj32562 = {};
return obj32562;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__25094__auto__ = cursor;
if(and__25094__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__25094__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__25750__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__25106__auto__ = (om.core._transact_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj32564 = {};
return obj32564;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__25094__auto__ = x;
if(and__25094__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__25750__auto__ = (((x == null))?null:x);
return (function (){var or__25106__auto__ = (om.core._listen_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__25094__auto__ = x;
if(and__25094__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__25750__auto__ = (((x == null))?null:x);
return (function (){var or__25106__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__25094__auto__ = x;
if(and__25094__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__25750__auto__ = (((x == null))?null:x);
return (function (){var or__25106__auto__ = (om.core._notify_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj32566 = {};
return obj32566;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_property[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_property["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj32568 = {};
return obj32568;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__25094__auto__ = cursor;
if(and__25094__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__25094__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__25750__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__25106__auto__ = (om.core._root_key[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._root_key["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj32570 = {};
return obj32570;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._adapt[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._adapt["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj32572 = {};
return obj32572;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__25094__auto__ = this$;
if(and__25094__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__25094__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__25750__auto__ = (((this$ == null))?null:this$);
return (function (){var or__25106__auto__ = (om.core._get_deps[goog.typeOf(x__25750__auto__)]);
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (om.core._get_deps["_"]);
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__32574 = state;
if(G__32574){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32574.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__32574.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__32574);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__32574);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
var G__32576 = x;
if(G__32576){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32576.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32576.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__32576);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__32576);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function() {
var om$core$get_props = null;
var om$core$get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var om$core$get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__32578 = (x.props["__om_cursor"]);
var G__32578__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__32578,korks__$1):G__32578);
return G__32578__$1;
});
om$core$get_props = function(x,korks){
switch(arguments.length){
case 1:
return om$core$get_props__1.call(this,x);
case 2:
return om$core$get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_props.cljs$core$IFn$_invoke$arity$1 = om$core$get_props__1;
om$core$get_props.cljs$core$IFn$_invoke$arity$2 = om$core$get_props__2;
return om$core$get_props;
})()
;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function() {
var om$core$get_state = null;
var om$core$get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var om$core$get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
om$core$get_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_state__1.call(this,owner);
case 2:
return om$core$get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_state__1;
om$core$get_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_state__2;
return om$core$get_state;
})()
;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function() {
var om$core$get_shared = null;
var om$core$get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var om$core$get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,om$core$get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return om$core$get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,om$core$get_shared.call(null,owner),korks);

}
}
});
om$core$get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_shared__1.call(this,owner);
case 2:
return om$core$get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_shared.cljs$core$IFn$_invoke$arity$1 = om$core$get_shared__1;
om$core$get_shared.cljs$core$IFn$_invoke$arity$2 = om$core$get_shared__2;
return om$core$get_shared;
})()
;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__32580 = state;
(G__32580["__om_prev_state"] = (state["__om_state"]));

(G__32580["__om_state"] = pending_state);

(G__32580["__om_pending_state"] = null);

return G__32580;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var om$core$merge_props_state = null;
var om$core$merge_props_state__1 = (function (owner){
return om$core$merge_props_state.call(null,owner,null);
});
var om$core$merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__25106__auto__ = props;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__25106__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
om$core$merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return om$core$merge_props_state__1.call(this,owner);
case 2:
return om$core$merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$1 = om$core$merge_props_state__1;
om$core$merge_props_state.cljs$core$IFn$_invoke$arity$2 = om$core$merge_props_state__2;
return om$core$merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__32582 = c;
if(G__32582){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32582.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32582.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__32582);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__32582);
}
})()){
var state_32603 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__25106__auto__ = (state_32603["__om_prev_state"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return (state_32603["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__32583 = c;
if(G__32583){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32583.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32583.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__32583);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__32583);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32584 = cljs.core.seq.call(null,refs);
var chunk__32585 = null;
var count__32586 = (0);
var i__32587 = (0);
while(true){
if((i__32587 < count__32586)){
var ref = cljs.core._nth.call(null,chunk__32585,i__32587);
om.core.unobserve.call(null,this$,ref);

var G__32604 = seq__32584;
var G__32605 = chunk__32585;
var G__32606 = count__32586;
var G__32607 = (i__32587 + (1));
seq__32584 = G__32604;
chunk__32585 = G__32605;
count__32586 = G__32606;
i__32587 = G__32607;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__32584);
if(temp__4126__auto____$1){
var seq__32584__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32584__$1)){
var c__25893__auto__ = cljs.core.chunk_first.call(null,seq__32584__$1);
var G__32608 = cljs.core.chunk_rest.call(null,seq__32584__$1);
var G__32609 = c__25893__auto__;
var G__32610 = cljs.core.count.call(null,c__25893__auto__);
var G__32611 = (0);
seq__32584 = G__32608;
chunk__32585 = G__32609;
count__32586 = G__32610;
i__32587 = G__32611;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32584__$1);
om.core.unobserve.call(null,this$,ref);

var G__32612 = cljs.core.next.call(null,seq__32584__$1);
var G__32613 = null;
var G__32614 = (0);
var G__32615 = (0);
seq__32584 = G__32612;
chunk__32585 = G__32613;
count__32586 = G__32614;
i__32587 = G__32615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__32588 = c;
if(G__32588){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32588.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__32588.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__32588);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__32588);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__32589 = c;
if(G__32589){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32589.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__32589.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__32589);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__32589);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__25094__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__25094__auto__){
return cljs.core.some.call(null,((function (and__25094__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32581_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__32581_SHARP_);
});})(and__25094__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__25094__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_32590 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32591 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32592 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32593 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32594 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__32595 = c;
if(G__32595){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32595.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32595.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__32595);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__32595);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__32596 = c;
if(G__32596){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32596.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32596.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__32596);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__32596);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__32597 = c;
if(G__32597){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32597.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32597.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__32597);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__32597);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32594;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32593;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32592;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32591;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32590;
}}),(function (next_props,next_state){
var this$ = this;
var c_32616 = om.core.children.call(null,this$);
if((function (){var G__32598 = c_32616;
if(G__32598){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32598.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32598.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__32598);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__32598);
}
})()){
var state_32617 = this$.state;
om.core.will_update.call(null,c_32616,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__25106__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__32599 = c;
if(G__32599){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32599.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32599.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__32599);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__32599);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__25106__auto__ = id;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__32600 = c;
if(G__32600){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32600.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__32600.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__32600);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__32600);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__32601 = c;
if(G__32601){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32601.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__32601.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__32601);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__32601);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32618 = om.core.children.call(null,this$);
if((function (){var G__32602 = c_32618;
if(G__32602){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32602.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32602.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__32602);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__32602);
}
})()){
om.core.will_mount.call(null,c_32618);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x32620 = obj;
x32620.om$core$IGetState$ = true;

x32620.om$core$IGetState$_get_state$arity$1 = ((function (x32620){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__25106__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return (state["__om_state"]);
}
});})(x32620))
;

x32620.om$core$IGetState$_get_state$arity$2 = ((function (x32620){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32620))
;

x32620.om$core$IGetRenderState$ = true;

x32620.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32620){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32620))
;

x32620.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32620){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32620))
;

x32620.om$core$ISetState$ = true;

x32620.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32620){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__25094__auto__ = !((app_state == null));
if(and__25094__auto__){
return render;
} else {
return and__25094__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32620))
;

x32620.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32620){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__25094__auto__ = !((app_state == null));
if(and__25094__auto__){
return render;
} else {
return and__25094__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x32620))
;

return x32620;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__25106__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__25106__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__32621 = c;
if(G__32621){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32621.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__32621.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__32621);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__32621);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_32630 = om.core.children.call(null,this$);
if((function (){var G__32622 = c_32630;
if(G__32622){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32622.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__32622.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__32622);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__32622);
}
})()){
om.core.will_mount.call(null,c_32630);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__32623 = c;
if(G__32623){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32623.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__32623.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__32623);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__32623);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__32624 = cljs.core.seq.call(null,refs);
var chunk__32625 = null;
var count__32626 = (0);
var i__32627 = (0);
while(true){
if((i__32627 < count__32626)){
var ref = cljs.core._nth.call(null,chunk__32625,i__32627);
om.core.unobserve.call(null,this$,ref);

var G__32631 = seq__32624;
var G__32632 = chunk__32625;
var G__32633 = count__32626;
var G__32634 = (i__32627 + (1));
seq__32624 = G__32631;
chunk__32625 = G__32632;
count__32626 = G__32633;
i__32627 = G__32634;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__32624);
if(temp__4126__auto____$1){
var seq__32624__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32624__$1)){
var c__25893__auto__ = cljs.core.chunk_first.call(null,seq__32624__$1);
var G__32635 = cljs.core.chunk_rest.call(null,seq__32624__$1);
var G__32636 = c__25893__auto__;
var G__32637 = cljs.core.count.call(null,c__25893__auto__);
var G__32638 = (0);
seq__32624 = G__32635;
chunk__32625 = G__32636;
count__32626 = G__32637;
i__32627 = G__32638;
continue;
} else {
var ref = cljs.core.first.call(null,seq__32624__$1);
om.core.unobserve.call(null,this$,ref);

var G__32639 = cljs.core.next.call(null,seq__32624__$1);
var G__32640 = null;
var G__32641 = (0);
var G__32642 = (0);
seq__32624 = G__32639;
chunk__32625 = G__32640;
count__32626 = G__32641;
i__32627 = G__32642;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_32643 = this$.props;
var c_32644 = om.core.children.call(null,this$);
if((function (){var G__32628 = c_32644;
if(G__32628){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32628.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__32628.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__32628);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__32628);
}
})()){
var state_32645 = this$.state;
om.core.will_update.call(null,c_32644,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__32629 = c;
if(G__32629){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32629.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__32629.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__32629);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__32629);
}
})()){
var state_32646 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__25106__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x32648 = cljs.core.clj__GT_js.call(null,methods$);
x32648.om$core$IGetState$ = true;

x32648.om$core$IGetState$_get_state$arity$1 = ((function (x32648){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__25106__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x32648))
;

x32648.om$core$IGetState$_get_state$arity$2 = ((function (x32648){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x32648))
;

x32648.om$core$IGetRenderState$ = true;

x32648.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32648){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x32648))
;

x32648.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32648){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x32648))
;

x32648.om$core$ISetState$ = true;

x32648.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32648){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__25094__auto__ = !((gstate == null));
if(and__25094__auto__){
return render;
} else {
return and__25094__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x32648))
;

x32648.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32648){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x32648))
;

return x32648;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__32650 = x;
if(G__32650){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32650.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__32650.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__32650);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__32650);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__32652){
var vec__32653 = p__32652;
var k = cljs.core.nth.call(null,vec__32653,(0),null);
var v = cljs.core.nth.call(null,vec__32653,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32654 = null;
var G__32654__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32654__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32654 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32654__2.call(this,self__,k);
case 3:
return G__32654__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32654.cljs$core$IFn$_invoke$arity$2 = G__32654__2;
G__32654.cljs$core$IFn$_invoke$arity$3 = G__32654__3;
return G__32654;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32651){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32651)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32656 = null;
var G__32656__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__32656__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__32656 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32656__2.call(this,self__,k);
case 3:
return G__32656__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32656.cljs$core$IFn$_invoke$arity$2 = G__32656__2;
G__32656.cljs$core$IFn$_invoke$arity$3 = G__32656__3;
return G__32656;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32655){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args32655)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__25693__auto__,writer__25694__auto__,opt__25695__auto__){
return cljs.core._write.call(null,writer__25694__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x32658 = cljs.core.clone.call(null,val);
x32658.cljs$core$IEquiv$ = true;

x32658.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32658){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x32658))
;

x32658.om$core$ITransact$ = true;

x32658.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32658){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x32658))
;

x32658.om$core$ICursor$ = true;

x32658.om$core$ICursor$_path$arity$1 = ((function (x32658){
return (function (_){
var ___$1 = this;
return path;
});})(x32658))
;

x32658.om$core$ICursor$_state$arity$1 = ((function (x32658){
return (function (_){
var ___$1 = this;
return state;
});})(x32658))
;

x32658.cljs$core$IDeref$ = true;

x32658.cljs$core$IDeref$_deref$arity$1 = ((function (x32658){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x32658))
;

return x32658;
});
om.core.to_cursor = (function() {
var om$core$to_cursor = null;
var om$core$to_cursor__1 = (function (val){
return om$core$to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__2 = (function (val,state){
return om$core$to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var om$core$to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__32661 = val;
if(G__32661){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32661.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__32661.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__32661);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__32661);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__32662 = val;
if(G__32662){
var bit__25787__auto__ = (G__32662.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__25787__auto__) || (G__32662.cljs$core$ICloneable$)){
return true;
} else {
if((!G__32662.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__32662);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__32662);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
om$core$to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return om$core$to_cursor__1.call(this,val);
case 2:
return om$core$to_cursor__2.call(this,val,state);
case 3:
return om$core$to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$to_cursor.cljs$core$IFn$_invoke$arity$1 = om$core$to_cursor__1;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$2 = om$core$to_cursor__2;
om$core$to_cursor.cljs$core$IFn$_invoke$arity$3 = om$core$to_cursor__3;
return om$core$to_cursor;
})()
;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if((function (){var G__32664 = atom;
if(G__32664){
var bit__25787__auto__ = (G__32664.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__25787__auto__) || (G__32664.cljs$core$IDeref$)){
return true;
} else {
if((!G__32664.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__32664);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__32664);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x32666 = cljs.core.clone.call(null,x);
x32666.om$core$ITransact$ = true;

x32666.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32666){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x32666))
;

x32666.om$core$ICursorDerive$ = true;

x32666.om$core$ICursorDerive$_derive$arity$4 = ((function (x32666){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32666))
;

x32666.om$core$IAdapt$ = true;

x32666.om$core$IAdapt$_adapt$arity$2 = ((function (x32666){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x32666))
;

x32666.cljs$core$ICloneable$ = true;

x32666.cljs$core$ICloneable$_clone$arity$1 = ((function (x32666){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x32666))
;

return x32666;
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 * properties and methods of the cursor. Reference cursors may be
 * observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__32673 = cursor;
if(G__32673){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32673.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__32673.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__32673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__32673);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x32674 = cljs.core.clone.call(null,cursor);
x32674.om$core$ITransact$ = true;

x32674.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32674,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x32674,path,storage))
;

x32674.om$core$IOmRef$ = true;

x32674.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32674,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x32674,path,storage))
;

x32674.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32674,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32674,path,storage))
;

x32674.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32674,path,storage){
return (function (_){
var ___$1 = this;
var seq__32675 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__32676 = null;
var count__32677 = (0);
var i__32678 = (0);
while(true){
if((i__32678 < count__32677)){
var c = cljs.core._nth.call(null,chunk__32676,i__32678);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32679 = seq__32675;
var G__32680 = chunk__32676;
var G__32681 = count__32677;
var G__32682 = (i__32678 + (1));
seq__32675 = G__32679;
chunk__32676 = G__32680;
count__32677 = G__32681;
i__32678 = G__32682;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32675);
if(temp__4126__auto__){
var seq__32675__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32675__$1)){
var c__25893__auto__ = cljs.core.chunk_first.call(null,seq__32675__$1);
var G__32683 = cljs.core.chunk_rest.call(null,seq__32675__$1);
var G__32684 = c__25893__auto__;
var G__32685 = cljs.core.count.call(null,c__25893__auto__);
var G__32686 = (0);
seq__32675 = G__32683;
chunk__32676 = G__32684;
count__32677 = G__32685;
i__32678 = G__32686;
continue;
} else {
var c = cljs.core.first.call(null,seq__32675__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__32687 = cljs.core.next.call(null,seq__32675__$1);
var G__32688 = null;
var G__32689 = (0);
var G__32690 = (0);
seq__32675 = G__32687;
chunk__32676 = G__32688;
count__32677 = G__32689;
i__32678 = G__32690;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32674,path,storage))
;

x32674.om$core$IOmRef$_get_deps$arity$1 = ((function (x32674,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x32674,path,storage))
;

x32674.om$core$ICursorDerive$ = true;

x32674.om$core$ICursorDerive$_derive$arity$4 = ((function (x32674,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32674,path,storage))
;

return x32674;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__25106__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 * the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__25106__auto__ = state.om$render$T;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 * never recommended.
 */
om.core.render_all = (function() {
var om$core$render_all = null;
var om$core$render_all__0 = (function (){
return om$core$render_all.call(null,null);
});
var om$core$render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__32695_32699 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__32696_32700 = null;
var count__32697_32701 = (0);
var i__32698_32702 = (0);
while(true){
if((i__32698_32702 < count__32697_32701)){
var f_32703 = cljs.core._nth.call(null,chunk__32696_32700,i__32698_32702);
f_32703.call(null);

var G__32704 = seq__32695_32699;
var G__32705 = chunk__32696_32700;
var G__32706 = count__32697_32701;
var G__32707 = (i__32698_32702 + (1));
seq__32695_32699 = G__32704;
chunk__32696_32700 = G__32705;
count__32697_32701 = G__32706;
i__32698_32702 = G__32707;
continue;
} else {
var temp__4126__auto___32708 = cljs.core.seq.call(null,seq__32695_32699);
if(temp__4126__auto___32708){
var seq__32695_32709__$1 = temp__4126__auto___32708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32695_32709__$1)){
var c__25893__auto___32710 = cljs.core.chunk_first.call(null,seq__32695_32709__$1);
var G__32711 = cljs.core.chunk_rest.call(null,seq__32695_32709__$1);
var G__32712 = c__25893__auto___32710;
var G__32713 = cljs.core.count.call(null,c__25893__auto___32710);
var G__32714 = (0);
seq__32695_32699 = G__32711;
chunk__32696_32700 = G__32712;
count__32697_32701 = G__32713;
i__32698_32702 = G__32714;
continue;
} else {
var f_32715 = cljs.core.first.call(null,seq__32695_32709__$1);
f_32715.call(null);

var G__32716 = cljs.core.next.call(null,seq__32695_32709__$1);
var G__32717 = null;
var G__32718 = (0);
var G__32719 = (0);
seq__32695_32699 = G__32716;
chunk__32696_32700 = G__32717;
count__32697_32701 = G__32718;
i__32698_32702 = G__32719;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
om$core$render_all = function(state){
switch(arguments.length){
case 0:
return om$core$render_all__0.call(this);
case 1:
return om$core$render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$render_all.cljs$core$IFn$_invoke$arity$0 = om$core$render_all__0;
om$core$render_all.cljs$core$IFn$_invoke$arity$1 = om$core$render_all__1;
return om$core$render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__25106__auto__ = (function (){var G__32726 = x;
if(G__32726){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32726.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__32726.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__32726);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__32726);
}
})();
if(or__25106__auto__){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = (function (){var G__32728 = x;
if(G__32728){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto____$1 = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto____$1)){
return or__25106__auto____$1;
} else {
return G__32728.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__32728.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__32728);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__32728);
}
})();
if(or__25106__auto____$1){
return or__25106__auto____$1;
} else {
var G__32729 = x;
if(G__32729){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto____$2 = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto____$2)){
return or__25106__auto____$2;
} else {
return G__32729.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__32729.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__32729);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__32729);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var om$core$get_descriptor = null;
var om$core$get_descriptor__1 = (function (f){
return om$core$get_descriptor.call(null,f,null);
});
var om$core$get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__25106__auto__ = descriptor;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
var or__25106__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__25106__auto____$1)){
return or__25106__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
om$core$get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return om$core$get_descriptor__1.call(this,f);
case 2:
return om$core$get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$1 = om$core$get_descriptor__1;
om$core$get_descriptor.cljs$core$IFn$_invoke$arity$2 = om$core$get_descriptor__2;
return om$core$get_descriptor;
})()
;
om.core.getf = (function() {
var om$core$getf = null;
var om$core$getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var om$core$getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
om$core$getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return om$core$getf__2.call(this,f,cursor);
case 3:
return om$core$getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$getf.cljs$core$IFn$_invoke$arity$2 = om$core$getf__2;
om$core$getf.cljs$core$IFn$_invoke$arity$3 = om$core$getf__3;
return om$core$getf;
})()
;
om.core.build_STAR_ = (function() {
var om$core$build_STAR_ = null;
var om$core$build_STAR___2 = (function (f,cursor){
return om$core$build_STAR_.call(null,f,cursor,null);
});
var om$core$build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__32731 = m;
var map__32731__$1 = ((cljs.core.seq_QMARK_.call(null,map__32731))?cljs.core.apply.call(null,cljs.core.hash_map,map__32731):map__32731);
var opts = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__32731__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__25106__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32731,map__32731__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32731,map__32731__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32731,map__32731__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__32731,map__32731__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__25106__auto__ = rkey;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
om$core$build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return om$core$build_STAR___2.call(this,f,cursor);
case 3:
return om$core$build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$2 = om$core$build_STAR___2;
om$core$build_STAR_.cljs$core$IFn$_invoke$arity$3 = om$core$build_STAR___3;
return om$core$build_STAR_;
})()
;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 * :key        - a keyword that should be used to look up the key used by
 * React itself when rendering sequential things.
 * :react-key  - an explicit react key
 * :fn         - a function to apply to the data before invoking f.
 * :init-state - a map of initial state to pass to the component.
 * :state      - a map of state to pass to the component, will be merged in.
 * :opts       - a map of values. Can be used to pass side information down
 * the render tree.
 * :descriptor - a JS object of React methods, will be used to
 * construct a React class per Om component function
 * encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 * (build list-of-gadgets x
 * {:init-state {:event-chan ...
 * :narble ...}})
 * 
 */
om.core.build = (function() {
var om$core$build = null;
var om$core$build__2 = (function (f,x){
return om$core$build.call(null,f,x,null);
});
var om$core$build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
om$core$build = function(f,x,m){
switch(arguments.length){
case 2:
return om$core$build__2.call(this,f,x);
case 3:
return om$core$build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build.cljs$core$IFn$_invoke$arity$2 = om$core$build__2;
om$core$build.cljs$core$IFn$_invoke$arity$3 = om$core$build__3;
return om$core$build;
})()
;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function() {
var om$core$build_all = null;
var om$core$build_all__2 = (function (f,xs){
return om$core$build_all.call(null,f,xs,null);
});
var om$core$build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
om$core$build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return om$core$build_all__2.call(this,f,xs);
case 3:
return om$core$build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$build_all.cljs$core$IFn$_invoke$arity$2 = om$core$build_all__2;
om$core$build_all.cljs$core$IFn$_invoke$arity$3 = om$core$build_all__3;
return om$core$build_all;
})()
;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if((function (){var G__32740 = state;
if(G__32740){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32740.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__32740.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__32740);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__32740);
}
})()){
} else {
var properties_32748 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_32749 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_32750 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x32741_32751 = state;
x32741_32751.om$core$IRenderQueue$ = true;

x32741_32751.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_32750);
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_32750),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_32750,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_32750,cljs.core.empty);
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$INotify$ = true;

x32741_32751.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_32749,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_32749,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32742_32752 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_32749));
var chunk__32743_32753 = null;
var count__32744_32754 = (0);
var i__32745_32755 = (0);
while(true){
if((i__32745_32755 < count__32744_32754)){
var vec__32746_32756 = cljs.core._nth.call(null,chunk__32743_32753,i__32745_32755);
var __32757 = cljs.core.nth.call(null,vec__32746_32756,(0),null);
var f_32758 = cljs.core.nth.call(null,vec__32746_32756,(1),null);
f_32758.call(null,tx_data,root_cursor);

var G__32759 = seq__32742_32752;
var G__32760 = chunk__32743_32753;
var G__32761 = count__32744_32754;
var G__32762 = (i__32745_32755 + (1));
seq__32742_32752 = G__32759;
chunk__32743_32753 = G__32760;
count__32744_32754 = G__32761;
i__32745_32755 = G__32762;
continue;
} else {
var temp__4126__auto___32763 = cljs.core.seq.call(null,seq__32742_32752);
if(temp__4126__auto___32763){
var seq__32742_32764__$1 = temp__4126__auto___32763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32742_32764__$1)){
var c__25893__auto___32765 = cljs.core.chunk_first.call(null,seq__32742_32764__$1);
var G__32766 = cljs.core.chunk_rest.call(null,seq__32742_32764__$1);
var G__32767 = c__25893__auto___32765;
var G__32768 = cljs.core.count.call(null,c__25893__auto___32765);
var G__32769 = (0);
seq__32742_32752 = G__32766;
chunk__32743_32753 = G__32767;
count__32744_32754 = G__32768;
i__32745_32755 = G__32769;
continue;
} else {
var vec__32747_32770 = cljs.core.first.call(null,seq__32742_32764__$1);
var __32771 = cljs.core.nth.call(null,vec__32747_32770,(0),null);
var f_32772 = cljs.core.nth.call(null,vec__32747_32770,(1),null);
f_32772.call(null,tx_data,root_cursor);

var G__32773 = cljs.core.next.call(null,seq__32742_32764__$1);
var G__32774 = null;
var G__32775 = (0);
var G__32776 = (0);
seq__32742_32752 = G__32773;
chunk__32743_32753 = G__32774;
count__32744_32754 = G__32775;
i__32745_32755 = G__32776;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRootProperties$ = true;

x32741_32751.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32748,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32748,cljs.core.dissoc,id,k);
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_32748,cljs.core.dissoc,id);
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

x32741_32751.om$core$IRootProperties$_get_property$arity$3 = ((function (x32741_32751,properties_32748,listeners_32749,render_queue_32750){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_32748),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32741_32751,properties_32748,listeners_32749,render_queue_32750))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x32778 = cljs.core.clone.call(null,cursor);
x32778.om$core$IRootKey$ = true;

x32778.om$core$IRootKey$_root_key$arity$1 = ((function (x32778){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32778))
;

x32778.om$core$IAdapt$ = true;

x32778.om$core$IAdapt$_adapt$arity$2 = ((function (x32778){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x32778))
;

x32778.cljs$core$ICloneable$ = true;

x32778.cljs$core$ICloneable$_clone$arity$1 = ((function (x32778){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x32778))
;

return x32778;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element.
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 * take 2 arguments - the first a map containing the
 * path, old and new state at path, old and new global
 * state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 * intercept all calls to om.core/build. This function should
 * correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 * false setTimeout will be use. If given a function
 * will be invoked instead.
 * 
 * Example:
 * 
 * (root
 * (fn [data owner]
 * ...)
 * {:message :hello}
 * {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__32779){
var map__32842 = p__32779;
var map__32842__$1 = ((cljs.core.seq_QMARK_.call(null,map__32842))?cljs.core.apply.call(null,cljs.core.hash_map,map__32842):map__32842);
var options = map__32842__$1;
var raf = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__32842__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__32904 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__32904,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__32904,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__32843 = value;
if(G__32843){
var bit__25787__auto__ = (G__32843.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__25787__auto__) || (G__32843.cljs$core$IAtom$)){
return true;
} else {
if((!G__32843.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__32843);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__32843);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__25106__auto__ = adapt;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_32905 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_32874 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32875 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32876 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32877 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32877;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32876;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32875;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32874;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_32905);
} else {
}
}

var queue_32906 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_32906)){
} else {
var seq__32878_32907 = cljs.core.seq.call(null,queue_32906);
var chunk__32879_32908 = null;
var count__32880_32909 = (0);
var i__32881_32910 = (0);
while(true){
if((i__32881_32910 < count__32880_32909)){
var c_32911 = cljs.core._nth.call(null,chunk__32879_32908,i__32881_32910);
if(cljs.core.truth_(c_32911.isMounted())){
var temp__4126__auto___32912 = (c_32911.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32912)){
var next_props_32913 = temp__4126__auto___32912;
(c_32911.props["__om_cursor"] = next_props_32913);

(c_32911.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__25106__auto__ = !((function (){var G__32883 = om.core.children.call(null,c_32911);
if(G__32883){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32883.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32883.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32883);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32883);
}
})());
if(or__25106__auto__){
return or__25106__auto__;
} else {
return c_32911.shouldComponentUpdate(c_32911.props,c_32911.state);
}
})())){
c_32911.forceUpdate();
} else {
}
} else {
}

var G__32914 = seq__32878_32907;
var G__32915 = chunk__32879_32908;
var G__32916 = count__32880_32909;
var G__32917 = (i__32881_32910 + (1));
seq__32878_32907 = G__32914;
chunk__32879_32908 = G__32915;
count__32880_32909 = G__32916;
i__32881_32910 = G__32917;
continue;
} else {
var temp__4126__auto___32918 = cljs.core.seq.call(null,seq__32878_32907);
if(temp__4126__auto___32918){
var seq__32878_32919__$1 = temp__4126__auto___32918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32878_32919__$1)){
var c__25893__auto___32920 = cljs.core.chunk_first.call(null,seq__32878_32919__$1);
var G__32921 = cljs.core.chunk_rest.call(null,seq__32878_32919__$1);
var G__32922 = c__25893__auto___32920;
var G__32923 = cljs.core.count.call(null,c__25893__auto___32920);
var G__32924 = (0);
seq__32878_32907 = G__32921;
chunk__32879_32908 = G__32922;
count__32880_32909 = G__32923;
i__32881_32910 = G__32924;
continue;
} else {
var c_32925 = cljs.core.first.call(null,seq__32878_32919__$1);
if(cljs.core.truth_(c_32925.isMounted())){
var temp__4126__auto___32926__$1 = (c_32925.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___32926__$1)){
var next_props_32927 = temp__4126__auto___32926__$1;
(c_32925.props["__om_cursor"] = next_props_32927);

(c_32925.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__25106__auto__ = !((function (){var G__32885 = om.core.children.call(null,c_32925);
if(G__32885){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__32885.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__32885.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32885);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__32885);
}
})());
if(or__25106__auto__){
return or__25106__auto__;
} else {
return c_32925.shouldComponentUpdate(c_32925.props,c_32925.state);
}
})())){
c_32925.forceUpdate();
} else {
}
} else {
}

var G__32928 = cljs.core.next.call(null,seq__32878_32919__$1);
var G__32929 = null;
var G__32930 = (0);
var G__32931 = (0);
seq__32878_32907 = G__32928;
chunk__32879_32908 = G__32929;
count__32880_32909 = G__32930;
i__32881_32910 = G__32931;
continue;
}
} else {
}
}
break;
}
}

var _refs_32932 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_32932)){
} else {
var seq__32886_32933 = cljs.core.seq.call(null,_refs_32932);
var chunk__32887_32934 = null;
var count__32888_32935 = (0);
var i__32889_32936 = (0);
while(true){
if((i__32889_32936 < count__32888_32935)){
var vec__32890_32937 = cljs.core._nth.call(null,chunk__32887_32934,i__32889_32936);
var path_32938__$1 = cljs.core.nth.call(null,vec__32890_32937,(0),null);
var cs_32939 = cljs.core.nth.call(null,vec__32890_32937,(1),null);
var cs_32940__$1 = cljs.core.deref.call(null,cs_32939);
var seq__32891_32941 = cljs.core.seq.call(null,cs_32940__$1);
var chunk__32892_32942 = null;
var count__32893_32943 = (0);
var i__32894_32944 = (0);
while(true){
if((i__32894_32944 < count__32893_32943)){
var vec__32895_32945 = cljs.core._nth.call(null,chunk__32892_32942,i__32894_32944);
var id_32946 = cljs.core.nth.call(null,vec__32895_32945,(0),null);
var c_32947 = cljs.core.nth.call(null,vec__32895_32945,(1),null);
if(cljs.core.truth_(c_32947.shouldComponentUpdate(c_32947.props,c_32947.state))){
c_32947.forceUpdate();
} else {
}

var G__32948 = seq__32891_32941;
var G__32949 = chunk__32892_32942;
var G__32950 = count__32893_32943;
var G__32951 = (i__32894_32944 + (1));
seq__32891_32941 = G__32948;
chunk__32892_32942 = G__32949;
count__32893_32943 = G__32950;
i__32894_32944 = G__32951;
continue;
} else {
var temp__4126__auto___32952 = cljs.core.seq.call(null,seq__32891_32941);
if(temp__4126__auto___32952){
var seq__32891_32953__$1 = temp__4126__auto___32952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32891_32953__$1)){
var c__25893__auto___32954 = cljs.core.chunk_first.call(null,seq__32891_32953__$1);
var G__32955 = cljs.core.chunk_rest.call(null,seq__32891_32953__$1);
var G__32956 = c__25893__auto___32954;
var G__32957 = cljs.core.count.call(null,c__25893__auto___32954);
var G__32958 = (0);
seq__32891_32941 = G__32955;
chunk__32892_32942 = G__32956;
count__32893_32943 = G__32957;
i__32894_32944 = G__32958;
continue;
} else {
var vec__32896_32959 = cljs.core.first.call(null,seq__32891_32953__$1);
var id_32960 = cljs.core.nth.call(null,vec__32896_32959,(0),null);
var c_32961 = cljs.core.nth.call(null,vec__32896_32959,(1),null);
if(cljs.core.truth_(c_32961.shouldComponentUpdate(c_32961.props,c_32961.state))){
c_32961.forceUpdate();
} else {
}

var G__32962 = cljs.core.next.call(null,seq__32891_32953__$1);
var G__32963 = null;
var G__32964 = (0);
var G__32965 = (0);
seq__32891_32941 = G__32962;
chunk__32892_32942 = G__32963;
count__32893_32943 = G__32964;
i__32894_32944 = G__32965;
continue;
}
} else {
}
}
break;
}

var G__32966 = seq__32886_32933;
var G__32967 = chunk__32887_32934;
var G__32968 = count__32888_32935;
var G__32969 = (i__32889_32936 + (1));
seq__32886_32933 = G__32966;
chunk__32887_32934 = G__32967;
count__32888_32935 = G__32968;
i__32889_32936 = G__32969;
continue;
} else {
var temp__4126__auto___32970 = cljs.core.seq.call(null,seq__32886_32933);
if(temp__4126__auto___32970){
var seq__32886_32971__$1 = temp__4126__auto___32970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32886_32971__$1)){
var c__25893__auto___32972 = cljs.core.chunk_first.call(null,seq__32886_32971__$1);
var G__32973 = cljs.core.chunk_rest.call(null,seq__32886_32971__$1);
var G__32974 = c__25893__auto___32972;
var G__32975 = cljs.core.count.call(null,c__25893__auto___32972);
var G__32976 = (0);
seq__32886_32933 = G__32973;
chunk__32887_32934 = G__32974;
count__32888_32935 = G__32975;
i__32889_32936 = G__32976;
continue;
} else {
var vec__32897_32977 = cljs.core.first.call(null,seq__32886_32971__$1);
var path_32978__$1 = cljs.core.nth.call(null,vec__32897_32977,(0),null);
var cs_32979 = cljs.core.nth.call(null,vec__32897_32977,(1),null);
var cs_32980__$1 = cljs.core.deref.call(null,cs_32979);
var seq__32898_32981 = cljs.core.seq.call(null,cs_32980__$1);
var chunk__32899_32982 = null;
var count__32900_32983 = (0);
var i__32901_32984 = (0);
while(true){
if((i__32901_32984 < count__32900_32983)){
var vec__32902_32985 = cljs.core._nth.call(null,chunk__32899_32982,i__32901_32984);
var id_32986 = cljs.core.nth.call(null,vec__32902_32985,(0),null);
var c_32987 = cljs.core.nth.call(null,vec__32902_32985,(1),null);
if(cljs.core.truth_(c_32987.shouldComponentUpdate(c_32987.props,c_32987.state))){
c_32987.forceUpdate();
} else {
}

var G__32988 = seq__32898_32981;
var G__32989 = chunk__32899_32982;
var G__32990 = count__32900_32983;
var G__32991 = (i__32901_32984 + (1));
seq__32898_32981 = G__32988;
chunk__32899_32982 = G__32989;
count__32900_32983 = G__32990;
i__32901_32984 = G__32991;
continue;
} else {
var temp__4126__auto___32992__$1 = cljs.core.seq.call(null,seq__32898_32981);
if(temp__4126__auto___32992__$1){
var seq__32898_32993__$1 = temp__4126__auto___32992__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32898_32993__$1)){
var c__25893__auto___32994 = cljs.core.chunk_first.call(null,seq__32898_32993__$1);
var G__32995 = cljs.core.chunk_rest.call(null,seq__32898_32993__$1);
var G__32996 = c__25893__auto___32994;
var G__32997 = cljs.core.count.call(null,c__25893__auto___32994);
var G__32998 = (0);
seq__32898_32981 = G__32995;
chunk__32899_32982 = G__32996;
count__32900_32983 = G__32997;
i__32901_32984 = G__32998;
continue;
} else {
var vec__32903_32999 = cljs.core.first.call(null,seq__32898_32993__$1);
var id_33000 = cljs.core.nth.call(null,vec__32903_32999,(0),null);
var c_33001 = cljs.core.nth.call(null,vec__32903_32999,(1),null);
if(cljs.core.truth_(c_33001.shouldComponentUpdate(c_33001.props,c_33001.state))){
c_33001.forceUpdate();
} else {
}

var G__33002 = cljs.core.next.call(null,seq__32898_32993__$1);
var G__33003 = null;
var G__33004 = (0);
var G__33005 = (0);
seq__32898_32981 = G__33002;
chunk__32899_32982 = G__33003;
count__32900_32983 = G__33004;
i__32901_32984 = G__33005;
continue;
}
} else {
}
}
break;
}

var G__33006 = cljs.core.next.call(null,seq__32886_32971__$1);
var G__33007 = null;
var G__33008 = (0);
var G__33009 = (0);
seq__32886_32933 = G__33006;
chunk__32887_32934 = G__33007;
count__32888_32935 = G__33008;
i__32889_32936 = G__33009;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32842,map__32842__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__33011 = x;
if(G__33011){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__33011.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__33011.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__33011);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__33011);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 * at the path specified by the cursor + the optional keys by applying
 * f to the specified value in the tree. An Om re-render will be
 * triggered.
 */
om.core.transact_BANG_ = (function() {
var om$core$transact_BANG_ = null;
var om$core$transact_BANG___2 = (function (cursor,f){
return om$core$transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var om$core$transact_BANG___3 = (function (cursor,korks,f){
return om$core$transact_BANG_.call(null,cursor,korks,f,null);
});
var om$core$transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
om$core$transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return om$core$transact_BANG___2.call(this,cursor,korks);
case 3:
return om$core$transact_BANG___3.call(this,cursor,korks,f);
case 4:
return om$core$transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$transact_BANG___2;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$transact_BANG___3;
om$core$transact_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$transact_BANG___4;
return om$core$transact_BANG_;
})()
;
/**
 * Like transact! but no function provided, instead a replacement
 * value is given.
 */
om.core.update_BANG_ = (function() {
var om$core$update_BANG_ = null;
var om$core$update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var om$core$update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var om$core$update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
om$core$update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return om$core$update_BANG___2.call(this,cursor,korks);
case 3:
return om$core$update_BANG___3.call(this,cursor,korks,v);
case 4:
return om$core$update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_BANG___2;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_BANG___3;
om$core$update_BANG_.cljs$core$IFn$_invoke$arity$4 = om$core$update_BANG___4;
return om$core$update_BANG_;
})()
;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 * create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__33013 = cursor;
if(G__33013){
var bit__25787__auto__ = null;
if(cljs.core.truth_((function (){var or__25106__auto__ = bit__25787__auto__;
if(cljs.core.truth_(or__25106__auto__)){
return or__25106__auto__;
} else {
return G__33013.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__33013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__33013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__33013);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React refs. Given a owning pure node
 * extract the ref specified by name.
 */
om.core.get_node = (function() {
var om$core$get_node = null;
var om$core$get_node__1 = (function (owner){
return owner.getDOMNode();
});
var om$core$get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
om$core$get_node = function(owner,name){
switch(arguments.length){
case 1:
return om$core$get_node__1.call(this,owner);
case 2:
return om$core$get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_node.cljs$core$IFn$_invoke$arity$1 = om$core$get_node__1;
om$core$get_node.cljs$core$IFn$_invoke$arity$2 = om$core$get_node__2;
return om$core$get_node;
})()
;
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function() {
var om$core$set_state_BANG_ = null;
var om$core$set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var om$core$set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
om$core$set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_BANG___2;
om$core$set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_BANG___3;
return om$core$set_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function() {
var om$core$set_state_nr_BANG_ = null;
var om$core$set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var om$core$set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
om$core$set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return om$core$set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$set_state_nr_BANG___2;
om$core$set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$set_state_nr_BANG___3;
return om$core$set_state_nr_BANG_;
})()
;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function() {
var om$core$update_state_BANG_ = null;
var om$core$update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var om$core$update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
om$core$update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_BANG___2;
om$core$update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_BANG___3;
return om$core$update_state_BANG_;
})()
;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function() {
var om$core$update_state_nr_BANG_ = null;
var om$core$update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var om$core$update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
om$core$update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return om$core$update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return om$core$update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = om$core$update_state_nr_BANG___2;
om$core$update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = om$core$update_state_nr_BANG___3;
return om$core$update_state_nr_BANG_;
})()
;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function() {
var om$core$get_render_state = null;
var om$core$get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var om$core$get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
om$core$get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return om$core$get_render_state__1.call(this,owner);
case 2:
return om$core$get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$core$get_render_state.cljs$core$IFn$_invoke$arity$1 = om$core$get_render_state__1;
om$core$get_render_state.cljs$core$IFn$_invoke$arity$2 = om$core$get_render_state__2;
return om$core$get_render_state;
})()
;

//# sourceMappingURL=core.js.map?rel=1446160950141