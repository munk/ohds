// Compiled by ClojureScript 0.0-3058 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('goog.dom');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj21015 = {};
return obj21015;
})();

om.core.display_name = (function om$core$display_name(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.display_name[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.display_name["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj21017 = {};
return obj21017;
})();

om.core.init_state = (function om$core$init_state(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.init_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.init_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj21019 = {};
return obj21019;
})();

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.should_update[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.should_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj21021 = {};
return obj21021;
})();

om.core.will_mount = (function om$core$will_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_mount[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj21023 = {};
return obj21023;
})();

om.core.did_mount = (function om$core$did_mount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_mount[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_mount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj21025 = {};
return obj21025;
})();

om.core.will_unmount = (function om$core$will_unmount(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_unmount[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_unmount["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj21027 = {};
return obj21027;
})();

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_update[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj21029 = {};
return obj21029;
})();

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.did_update[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.did_update["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj21031 = {};
return obj21031;
})();

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.will_receive_props[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.will_receive_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj21033 = {};
return obj21033;
})();

om.core.render = (function om$core$render(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj21035 = {};
return obj21035;
})();

om.core.render_props = (function om$core$render_props(this$,props,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_props[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_props["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj21037 = {};
return obj21037;
})();

om.core.render_state = (function om$core$render_state(this$,state){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core.render_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core.render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj21039 = {};
return obj21039;
})();


om.core.IOmSwap = (function (){var obj21041 = {};
return obj21041;
})();

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj21043 = {};
return obj21043;
})();

om.core._get_state = (function() {
var om$core$_get_state = null;
var om$core$_get_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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


om.core.IGetRenderState = (function (){var obj21045 = {};
return obj21045;
})();

om.core._get_render_state = (function() {
var om$core$_get_render_state = null;
var om$core$_get_render_state__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var om$core$_get_render_state__2 = (function (this$,ks){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_render_state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_render_state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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


om.core.ISetState = (function (){var obj21047 = {};
return obj21047;
})();

om.core._set_state_BANG_ = (function() {
var om$core$_set_state_BANG_ = null;
var om$core$_set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var om$core$_set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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


om.core.IRenderQueue = (function (){var obj21049 = {};
return obj21049;
})();

om.core._get_queue = (function om$core$_get_queue(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_queue[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_queue["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj21051 = {};
return obj21051;
})();

om.core._value = (function om$core$_value(x){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._value[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._value["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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

om.core.ICursor = (function (){var obj21053 = {};
return obj21053;
})();

om.core._path = (function om$core$_path(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._path[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._path["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function om$core$_state(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._state[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._state["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj21055 = {};
return obj21055;
})();

om.core._to_cursor = (function() {
var om$core$_to_cursor = null;
var om$core$_to_cursor__2 = (function (value,state){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var om$core$_to_cursor__3 = (function (value,state,path){
if((function (){var and__4064__auto__ = value;
if(and__4064__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__4064__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4720__auto__ = (((value == null))?null:value);
return (function (){var or__4076__auto__ = (om.core._to_cursor[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._to_cursor["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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


om.core.ICursorDerive = (function (){var obj21057 = {};
return obj21057;
})();

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._derive[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._derive["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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

om.core.ITransact = (function (){var obj21059 = {};
return obj21059;
})();

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj21061 = {};
return obj21061;
})();

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__4064__auto__ = x;
if(and__4064__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4720__auto__ = (((x == null))?null:x);
return (function (){var or__4076__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj21063 = {};
return obj21063;
})();

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_property[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_property["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj21065 = {};
return obj21065;
})();

om.core._root_key = (function om$core$_root_key(cursor){
if((function (){var and__4064__auto__ = cursor;
if(and__4064__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__4064__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4720__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__4076__auto__ = (om.core._root_key[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._root_key["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj21067 = {};
return obj21067;
})();

om.core._adapt = (function om$core$_adapt(this$,other){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._adapt[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._adapt["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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

om.core.IOmRef = (function (){var obj21069 = {};
return obj21069;
})();

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (om.core._get_deps[goog.typeOf(x__4720__auto__)]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (om.core._get_deps["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
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
var ret = (((function (){var G__21071 = state;
if(G__21071){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21071.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__21071.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21071);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__21071);
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
var G__21073 = x;
if(G__21073){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21073.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21073.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21073);
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
var G__21075 = (x.props["__om_cursor"]);
var G__21075__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__21075,korks__$1):G__21075);
return G__21075__$1;
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
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__21077 = state;
(G__21077["__om_prev_state"] = (state["__om_state"]));

(G__21077["__om_state"] = pending_state);

(G__21077["__om_pending_state"] = null);

return G__21077;
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
var props__$1 = (function (){var or__4076__auto__ = props;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
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
if((function (){var G__21079 = c;
if(G__21079){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21079.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21079.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21079);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21079);
}
})()){
var state_21100 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4076__auto__ = (state_21100["__om_prev_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state_21100["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21080 = c;
if(G__21080){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21080.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21080.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21080);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21080);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__21081 = cljs.core.seq.call(null,refs);
var chunk__21082 = null;
var count__21083 = (0);
var i__21084 = (0);
while(true){
if((i__21084 < count__21083)){
var ref = cljs.core._nth.call(null,chunk__21082,i__21084);
om.core.unobserve.call(null,this$,ref);

var G__21101 = seq__21081;
var G__21102 = chunk__21082;
var G__21103 = count__21083;
var G__21104 = (i__21084 + (1));
seq__21081 = G__21101;
chunk__21082 = G__21102;
count__21083 = G__21103;
i__21084 = G__21104;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__21081);
if(temp__4425__auto____$1){
var seq__21081__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21081__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__21081__$1);
var G__21105 = cljs.core.chunk_rest.call(null,seq__21081__$1);
var G__21106 = c__4863__auto__;
var G__21107 = cljs.core.count.call(null,c__4863__auto__);
var G__21108 = (0);
seq__21081 = G__21105;
chunk__21082 = G__21106;
count__21083 = G__21107;
i__21084 = G__21108;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21081__$1);
om.core.unobserve.call(null,this$,ref);

var G__21109 = cljs.core.next.call(null,seq__21081__$1);
var G__21110 = null;
var G__21111 = (0);
var G__21112 = (0);
seq__21081 = G__21109;
chunk__21082 = G__21110;
count__21083 = G__21111;
i__21084 = G__21112;
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
if((function (){var G__21085 = c;
if(G__21085){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21085.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__21085.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21085);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__21085);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__21086 = c;
if(G__21086){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21086.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__21086.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21086);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__21086);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
if(cljs.core.truth_((function (){var and__4064__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__4064__auto__){
return cljs.core.some.call(null,((function (and__4064__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__21078_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__21078_SHARP_);
});})(and__4064__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__4064__auto__;
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
var _STAR_parent_STAR_21087 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_21088 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_21089 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_21090 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_21091 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__21092 = c;
if(G__21092){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21092.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21092.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21092);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21092);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__21093 = c;
if(G__21093){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21093.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21093.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21093);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21093);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__21094 = c;
if(G__21094){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21094.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21094.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21094);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21094);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21091;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21090;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21089;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21088;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_21087;
}}),(function (next_props,next_state){
var this$ = this;
var c_21113 = om.core.children.call(null,this$);
if((function (){var G__21095 = c_21113;
if(G__21095){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21095.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21095.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21095);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21095);
}
})()){
var state_21114 = this$.state;
om.core.will_update.call(null,c_21113,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__4076__auto__ = id;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.call(null,(((function (){var G__21096 = c;
if(G__21096){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21096.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21096.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21096);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21096);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__21097 = c;
if(G__21097){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21097.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__21097.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21097);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__21097);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21098 = c;
if(G__21098){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21098.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__21098.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21098);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__21098);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21115 = om.core.children.call(null,this$);
if((function (){var G__21099 = c_21115;
if(G__21099){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21099.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21099.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21099);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21099);
}
})()){
om.core.will_mount.call(null,c_21115);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x21117 = obj;
x21117.om$core$ISetState$ = true;

x21117.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21117){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21117))
;

x21117.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21117){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__4064__auto__ = !((app_state == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x21117))
;

x21117.om$core$IGetRenderState$ = true;

x21117.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21117){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x21117))
;

x21117.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21117){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21117))
;

x21117.om$core$IGetState$ = true;

x21117.om$core$IGetState$_get_state$arity$1 = ((function (x21117){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__4076__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (state["__om_state"]);
}
});})(x21117))
;

x21117.om$core$IGetState$_get_state$arity$2 = ((function (x21117){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21117))
;

return x21117;
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
var istate = (function (){var or__4076__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__4076__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__21118 = c;
if(G__21118){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21118.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__21118.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21118);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__21118);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_21127 = om.core.children.call(null,this$);
if((function (){var G__21119 = c_21127;
if(G__21119){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21119.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__21119.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21119);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__21119);
}
})()){
om.core.will_mount.call(null,c_21127);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__21120 = c;
if(G__21120){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21120.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__21120.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21120);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__21120);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4425__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__21121 = cljs.core.seq.call(null,refs);
var chunk__21122 = null;
var count__21123 = (0);
var i__21124 = (0);
while(true){
if((i__21124 < count__21123)){
var ref = cljs.core._nth.call(null,chunk__21122,i__21124);
om.core.unobserve.call(null,this$,ref);

var G__21128 = seq__21121;
var G__21129 = chunk__21122;
var G__21130 = count__21123;
var G__21131 = (i__21124 + (1));
seq__21121 = G__21128;
chunk__21122 = G__21129;
count__21123 = G__21130;
i__21124 = G__21131;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__21121);
if(temp__4425__auto____$1){
var seq__21121__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21121__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__21121__$1);
var G__21132 = cljs.core.chunk_rest.call(null,seq__21121__$1);
var G__21133 = c__4863__auto__;
var G__21134 = cljs.core.count.call(null,c__4863__auto__);
var G__21135 = (0);
seq__21121 = G__21132;
chunk__21122 = G__21133;
count__21123 = G__21134;
i__21124 = G__21135;
continue;
} else {
var ref = cljs.core.first.call(null,seq__21121__$1);
om.core.unobserve.call(null,this$,ref);

var G__21136 = cljs.core.next.call(null,seq__21121__$1);
var G__21137 = null;
var G__21138 = (0);
var G__21139 = (0);
seq__21121 = G__21136;
chunk__21122 = G__21137;
count__21123 = G__21138;
i__21124 = G__21139;
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
var props_21140 = this$.props;
var c_21141 = om.core.children.call(null,this$);
if((function (){var G__21125 = c_21141;
if(G__21125){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21125.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__21125.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21125);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__21125);
}
})()){
var state_21142 = this$.state;
om.core.will_update.call(null,c_21141,om.core.get_props.call(null,{"props": next_props, "isOmComponent": true}),om.core._get_state.call(null,this$));
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
if((function (){var G__21126 = c;
if(G__21126){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21126.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__21126.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21126);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__21126);
}
})()){
var state_21143 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props, "isOmComponent": true}),(function (){var or__4076__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
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
var x21145 = cljs.core.clj__GT_js.call(null,methods$);
x21145.om$core$ISetState$ = true;

x21145.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x21145){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__4064__auto__ = !((gstate == null));
if(and__4064__auto__){
return render;
} else {
return and__4064__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x21145))
;

x21145.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x21145){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x21145))
;

x21145.om$core$IGetRenderState$ = true;

x21145.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x21145){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x21145))
;

x21145.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x21145){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x21145))
;

x21145.om$core$IGetState$ = true;

x21145.om$core$IGetState$_get_state$arity$1 = ((function (x21145){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__4076__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x21145))
;

x21145.om$core$IGetState$_get_state$arity$2 = ((function (x21145){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x21145))
;

return x21145;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if((function (){var G__21147 = x;
if(G__21147){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21147.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__21147.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21147);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__21147);
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
return (function (p__21149){
var vec__21150 = p__21149;
var k = cljs.core.nth.call(null,vec__21150,(0),null);
var v = cljs.core.nth.call(null,vec__21150,(1),null);
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
var G__21151 = null;
var G__21151__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21151__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21151 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21151__2.call(this,self__,k);
case 3:
return G__21151__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21151.cljs$core$IFn$_invoke$arity$2 = G__21151__2;
G__21151.cljs$core$IFn$_invoke$arity$3 = G__21151__3;
return G__21151;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args21148){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21148)));
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

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"om.core/MapCursor");
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
var G__21153 = null;
var G__21153__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__21153__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__21153 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__21153__2.call(this,self__,k);
case 3:
return G__21153__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21153.cljs$core$IFn$_invoke$arity$2 = G__21153__2;
G__21153.cljs$core$IFn$_invoke$arity$3 = G__21153__3;
return G__21153;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args21152){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args21152)));
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

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write.call(null,writer__4664__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x21155 = cljs.core.clone.call(null,val);
x21155.cljs$core$IDeref$ = true;

x21155.cljs$core$IDeref$_deref$arity$1 = ((function (x21155){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x21155))
;

x21155.om$core$ICursor$ = true;

x21155.om$core$ICursor$_path$arity$1 = ((function (x21155){
return (function (_){
var ___$1 = this;
return path;
});})(x21155))
;

x21155.om$core$ICursor$_state$arity$1 = ((function (x21155){
return (function (_){
var ___$1 = this;
return state;
});})(x21155))
;

x21155.om$core$ITransact$ = true;

x21155.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21155){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x21155))
;

x21155.cljs$core$IEquiv$ = true;

x21155.cljs$core$IEquiv$_equiv$arity$2 = ((function (x21155){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x21155))
;

return x21155;
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
if((function (){var G__21158 = val;
if(G__21158){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21158.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__21158.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21158);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__21158);
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
if((function (){var G__21159 = val;
if(G__21159){
var bit__4757__auto__ = (G__21159.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4757__auto__) || (G__21159.cljs$core$ICloneable$)){
return true;
} else {
if((!G__21159.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21159);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__21159);
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
if((function (){var G__21161 = atom;
if(G__21161){
var bit__4757__auto__ = (G__21161.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4757__auto__) || (G__21161.cljs$core$IDeref$)){
return true;
} else {
if((!G__21161.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21161);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__21161);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x21163 = cljs.core.clone.call(null,x);
x21163.cljs$core$ICloneable$ = true;

x21163.cljs$core$ICloneable$_clone$arity$1 = ((function (x21163){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x21163))
;

x21163.om$core$IAdapt$ = true;

x21163.om$core$IAdapt$_adapt$arity$2 = ((function (x21163){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x21163))
;

x21163.om$core$ICursorDerive$ = true;

x21163.om$core$ICursorDerive$_derive$arity$4 = ((function (x21163){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21163))
;

x21163.om$core$ITransact$ = true;

x21163.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21163){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x21163))
;

return x21163;
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

if((function (){var G__21170 = cursor;
if(G__21170){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21170.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__21170.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21170);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__21170);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x21171 = cljs.core.clone.call(null,cursor);
x21171.om$core$ICursorDerive$ = true;

x21171.om$core$ICursorDerive$_derive$arity$4 = ((function (x21171,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x21171,path,storage))
;

x21171.om$core$IOmRef$ = true;

x21171.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x21171,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x21171,path,storage))
;

x21171.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x21171,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x21171,path,storage))
;

x21171.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x21171,path,storage){
return (function (_){
var ___$1 = this;
var seq__21172 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__21173 = null;
var count__21174 = (0);
var i__21175 = (0);
while(true){
if((i__21175 < count__21174)){
var c = cljs.core._nth.call(null,chunk__21173,i__21175);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21176 = seq__21172;
var G__21177 = chunk__21173;
var G__21178 = count__21174;
var G__21179 = (i__21175 + (1));
seq__21172 = G__21176;
chunk__21173 = G__21177;
count__21174 = G__21178;
i__21175 = G__21179;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21172);
if(temp__4425__auto__){
var seq__21172__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21172__$1)){
var c__4863__auto__ = cljs.core.chunk_first.call(null,seq__21172__$1);
var G__21180 = cljs.core.chunk_rest.call(null,seq__21172__$1);
var G__21181 = c__4863__auto__;
var G__21182 = cljs.core.count.call(null,c__4863__auto__);
var G__21183 = (0);
seq__21172 = G__21180;
chunk__21173 = G__21181;
count__21174 = G__21182;
i__21175 = G__21183;
continue;
} else {
var c = cljs.core.first.call(null,seq__21172__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__21184 = cljs.core.next.call(null,seq__21172__$1);
var G__21185 = null;
var G__21186 = (0);
var G__21187 = (0);
seq__21172 = G__21184;
chunk__21173 = G__21185;
count__21174 = G__21186;
i__21175 = G__21187;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21171,path,storage))
;

x21171.om$core$IOmRef$_get_deps$arity$1 = ((function (x21171,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x21171,path,storage))
;

x21171.om$core$ITransact$ = true;

x21171.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x21171,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x21171,path,storage))
;

return x21171;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__4076__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
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
var or__4076__auto__ = state.om$render$T;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
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

var seq__21192_21196 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__21193_21197 = null;
var count__21194_21198 = (0);
var i__21195_21199 = (0);
while(true){
if((i__21195_21199 < count__21194_21198)){
var f_21200 = cljs.core._nth.call(null,chunk__21193_21197,i__21195_21199);
f_21200.call(null);

var G__21201 = seq__21192_21196;
var G__21202 = chunk__21193_21197;
var G__21203 = count__21194_21198;
var G__21204 = (i__21195_21199 + (1));
seq__21192_21196 = G__21201;
chunk__21193_21197 = G__21202;
count__21194_21198 = G__21203;
i__21195_21199 = G__21204;
continue;
} else {
var temp__4425__auto___21205 = cljs.core.seq.call(null,seq__21192_21196);
if(temp__4425__auto___21205){
var seq__21192_21206__$1 = temp__4425__auto___21205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21192_21206__$1)){
var c__4863__auto___21207 = cljs.core.chunk_first.call(null,seq__21192_21206__$1);
var G__21208 = cljs.core.chunk_rest.call(null,seq__21192_21206__$1);
var G__21209 = c__4863__auto___21207;
var G__21210 = cljs.core.count.call(null,c__4863__auto___21207);
var G__21211 = (0);
seq__21192_21196 = G__21208;
chunk__21193_21197 = G__21209;
count__21194_21198 = G__21210;
i__21195_21199 = G__21211;
continue;
} else {
var f_21212 = cljs.core.first.call(null,seq__21192_21206__$1);
f_21212.call(null);

var G__21213 = cljs.core.next.call(null,seq__21192_21206__$1);
var G__21214 = null;
var G__21215 = (0);
var G__21216 = (0);
seq__21192_21196 = G__21213;
chunk__21193_21197 = G__21214;
count__21194_21198 = G__21215;
i__21195_21199 = G__21216;
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
if((function (){var or__4076__auto__ = (function (){var G__21223 = x;
if(G__21223){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21223.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__21223.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21223);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__21223);
}
})();
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (function (){var G__21225 = x;
if(G__21225){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$1 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
} else {
return G__21225.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__21225.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21225);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__21225);
}
})();
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
var G__21226 = x;
if(G__21226){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto____$2 = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto____$2)){
return or__4076__auto____$2;
} else {
return G__21226.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__21226.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21226);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__21226);
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
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__4076__auto__ = descriptor;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__4076__auto____$1)){
return or__4076__auto____$1;
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
return ctor.call(null,{"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
});
} else {
var map__21228 = m;
var map__21228__$1 = ((cljs.core.seq_QMARK_.call(null,map__21228))?cljs.core.apply.call(null,cljs.core.hash_map,map__21228):map__21228);
var key = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var key_fn = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var state = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var init_state = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var opts = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__4076__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__21228,map__21228__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21228,map__21228__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__21228,map__21228__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__21228,map__21228__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__4076__auto__ = rkey;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
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
if((function (){var G__21237 = state;
if(G__21237){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21237.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__21237.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21237);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__21237);
}
})()){
} else {
var properties_21245 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_21246 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_21247 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x21238_21248 = state;
x21238_21248.om$core$IRootProperties$ = true;

x21238_21248.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21245,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21245,cljs.core.dissoc,id,k);
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_21245,cljs.core.dissoc,id);
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRootProperties$_get_property$arity$3 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_21245),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$INotify$ = true;

x21238_21248.om$core$INotify$_listen_BANG_$arity$3 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_21246,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_21246,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$INotify$_notify_BANG_$arity$3 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__21239_21249 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_21246));
var chunk__21240_21250 = null;
var count__21241_21251 = (0);
var i__21242_21252 = (0);
while(true){
if((i__21242_21252 < count__21241_21251)){
var vec__21243_21253 = cljs.core._nth.call(null,chunk__21240_21250,i__21242_21252);
var __21254 = cljs.core.nth.call(null,vec__21243_21253,(0),null);
var f_21255 = cljs.core.nth.call(null,vec__21243_21253,(1),null);
f_21255.call(null,tx_data,root_cursor);

var G__21256 = seq__21239_21249;
var G__21257 = chunk__21240_21250;
var G__21258 = count__21241_21251;
var G__21259 = (i__21242_21252 + (1));
seq__21239_21249 = G__21256;
chunk__21240_21250 = G__21257;
count__21241_21251 = G__21258;
i__21242_21252 = G__21259;
continue;
} else {
var temp__4425__auto___21260 = cljs.core.seq.call(null,seq__21239_21249);
if(temp__4425__auto___21260){
var seq__21239_21261__$1 = temp__4425__auto___21260;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21239_21261__$1)){
var c__4863__auto___21262 = cljs.core.chunk_first.call(null,seq__21239_21261__$1);
var G__21263 = cljs.core.chunk_rest.call(null,seq__21239_21261__$1);
var G__21264 = c__4863__auto___21262;
var G__21265 = cljs.core.count.call(null,c__4863__auto___21262);
var G__21266 = (0);
seq__21239_21249 = G__21263;
chunk__21240_21250 = G__21264;
count__21241_21251 = G__21265;
i__21242_21252 = G__21266;
continue;
} else {
var vec__21244_21267 = cljs.core.first.call(null,seq__21239_21261__$1);
var __21268 = cljs.core.nth.call(null,vec__21244_21267,(0),null);
var f_21269 = cljs.core.nth.call(null,vec__21244_21267,(1),null);
f_21269.call(null,tx_data,root_cursor);

var G__21270 = cljs.core.next.call(null,seq__21239_21261__$1);
var G__21271 = null;
var G__21272 = (0);
var G__21273 = (0);
seq__21239_21249 = G__21270;
chunk__21240_21250 = G__21271;
count__21241_21251 = G__21272;
i__21242_21252 = G__21273;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRenderQueue$ = true;

x21238_21248.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_21247);
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_21247),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_21247,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

x21238_21248.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x21238_21248,properties_21245,listeners_21246,render_queue_21247){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_21247,cljs.core.empty);
});})(x21238_21248,properties_21245,listeners_21246,render_queue_21247))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x21275 = cljs.core.clone.call(null,cursor);
x21275.cljs$core$ICloneable$ = true;

x21275.cljs$core$ICloneable$_clone$arity$1 = ((function (x21275){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x21275))
;

x21275.om$core$IAdapt$ = true;

x21275.om$core$IAdapt$_adapt$arity$2 = ((function (x21275){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x21275))
;

x21275.om$core$IRootKey$ = true;

x21275.om$core$IRootKey$_root_key$arity$1 = ((function (x21275){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x21275))
;

return x21275;
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
om.core.root = (function om$core$root(f,value,p__21276){
var map__21339 = p__21276;
var map__21339__$1 = ((cljs.core.seq_QMARK_.call(null,map__21339))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);
var options = map__21339__$1;
var target = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tx_listen = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var path = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var instrument = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var descriptor = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var adapt = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var raf = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__21401 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__21401,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__21401,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__21340 = value;
if(G__21340){
var bit__4757__auto__ = (G__21340.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4757__auto__) || (G__21340.cljs$core$IAtom$)){
return true;
} else {
if((!G__21340.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21340);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__21340);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__4076__auto__ = adapt;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_21402 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_21371 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_21372 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_21373 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_21374 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_21374;

om.core._STAR_state_STAR_ = _STAR_state_STAR_21373;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_21372;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_21371;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_21402);
} else {
}
}

var queue_21403 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_21403)){
} else {
var seq__21375_21404 = cljs.core.seq.call(null,queue_21403);
var chunk__21376_21405 = null;
var count__21377_21406 = (0);
var i__21378_21407 = (0);
while(true){
if((i__21378_21407 < count__21377_21406)){
var c_21408 = cljs.core._nth.call(null,chunk__21376_21405,i__21378_21407);
if(cljs.core.truth_(c_21408.isMounted())){
var temp__4425__auto___21409 = (c_21408.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___21409)){
var next_props_21410 = temp__4425__auto___21409;
(c_21408.props["__om_cursor"] = next_props_21410);

(c_21408.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__21380 = om.core.children.call(null,c_21408);
if(G__21380){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21380.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__21380.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__21380);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__21380);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_21408.shouldComponentUpdate(c_21408.props,c_21408.state);
}
})())){
c_21408.forceUpdate();
} else {
}
} else {
}

var G__21411 = seq__21375_21404;
var G__21412 = chunk__21376_21405;
var G__21413 = count__21377_21406;
var G__21414 = (i__21378_21407 + (1));
seq__21375_21404 = G__21411;
chunk__21376_21405 = G__21412;
count__21377_21406 = G__21413;
i__21378_21407 = G__21414;
continue;
} else {
var temp__4425__auto___21415 = cljs.core.seq.call(null,seq__21375_21404);
if(temp__4425__auto___21415){
var seq__21375_21416__$1 = temp__4425__auto___21415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21375_21416__$1)){
var c__4863__auto___21417 = cljs.core.chunk_first.call(null,seq__21375_21416__$1);
var G__21418 = cljs.core.chunk_rest.call(null,seq__21375_21416__$1);
var G__21419 = c__4863__auto___21417;
var G__21420 = cljs.core.count.call(null,c__4863__auto___21417);
var G__21421 = (0);
seq__21375_21404 = G__21418;
chunk__21376_21405 = G__21419;
count__21377_21406 = G__21420;
i__21378_21407 = G__21421;
continue;
} else {
var c_21422 = cljs.core.first.call(null,seq__21375_21416__$1);
if(cljs.core.truth_(c_21422.isMounted())){
var temp__4425__auto___21423__$1 = (c_21422.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___21423__$1)){
var next_props_21424 = temp__4425__auto___21423__$1;
(c_21422.props["__om_cursor"] = next_props_21424);

(c_21422.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__4076__auto__ = !((function (){var G__21382 = om.core.children.call(null,c_21422);
if(G__21382){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21382.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__21382.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__21382);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__21382);
}
})());
if(or__4076__auto__){
return or__4076__auto__;
} else {
return c_21422.shouldComponentUpdate(c_21422.props,c_21422.state);
}
})())){
c_21422.forceUpdate();
} else {
}
} else {
}

var G__21425 = cljs.core.next.call(null,seq__21375_21416__$1);
var G__21426 = null;
var G__21427 = (0);
var G__21428 = (0);
seq__21375_21404 = G__21425;
chunk__21376_21405 = G__21426;
count__21377_21406 = G__21427;
i__21378_21407 = G__21428;
continue;
}
} else {
}
}
break;
}
}

var _refs_21429 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_21429)){
} else {
var seq__21383_21430 = cljs.core.seq.call(null,_refs_21429);
var chunk__21384_21431 = null;
var count__21385_21432 = (0);
var i__21386_21433 = (0);
while(true){
if((i__21386_21433 < count__21385_21432)){
var vec__21387_21434 = cljs.core._nth.call(null,chunk__21384_21431,i__21386_21433);
var path_21435__$1 = cljs.core.nth.call(null,vec__21387_21434,(0),null);
var cs_21436 = cljs.core.nth.call(null,vec__21387_21434,(1),null);
var cs_21437__$1 = cljs.core.deref.call(null,cs_21436);
var seq__21388_21438 = cljs.core.seq.call(null,cs_21437__$1);
var chunk__21389_21439 = null;
var count__21390_21440 = (0);
var i__21391_21441 = (0);
while(true){
if((i__21391_21441 < count__21390_21440)){
var vec__21392_21442 = cljs.core._nth.call(null,chunk__21389_21439,i__21391_21441);
var id_21443 = cljs.core.nth.call(null,vec__21392_21442,(0),null);
var c_21444 = cljs.core.nth.call(null,vec__21392_21442,(1),null);
if(cljs.core.truth_(c_21444.shouldComponentUpdate(c_21444.props,c_21444.state))){
c_21444.forceUpdate();
} else {
}

var G__21445 = seq__21388_21438;
var G__21446 = chunk__21389_21439;
var G__21447 = count__21390_21440;
var G__21448 = (i__21391_21441 + (1));
seq__21388_21438 = G__21445;
chunk__21389_21439 = G__21446;
count__21390_21440 = G__21447;
i__21391_21441 = G__21448;
continue;
} else {
var temp__4425__auto___21449 = cljs.core.seq.call(null,seq__21388_21438);
if(temp__4425__auto___21449){
var seq__21388_21450__$1 = temp__4425__auto___21449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21388_21450__$1)){
var c__4863__auto___21451 = cljs.core.chunk_first.call(null,seq__21388_21450__$1);
var G__21452 = cljs.core.chunk_rest.call(null,seq__21388_21450__$1);
var G__21453 = c__4863__auto___21451;
var G__21454 = cljs.core.count.call(null,c__4863__auto___21451);
var G__21455 = (0);
seq__21388_21438 = G__21452;
chunk__21389_21439 = G__21453;
count__21390_21440 = G__21454;
i__21391_21441 = G__21455;
continue;
} else {
var vec__21393_21456 = cljs.core.first.call(null,seq__21388_21450__$1);
var id_21457 = cljs.core.nth.call(null,vec__21393_21456,(0),null);
var c_21458 = cljs.core.nth.call(null,vec__21393_21456,(1),null);
if(cljs.core.truth_(c_21458.shouldComponentUpdate(c_21458.props,c_21458.state))){
c_21458.forceUpdate();
} else {
}

var G__21459 = cljs.core.next.call(null,seq__21388_21450__$1);
var G__21460 = null;
var G__21461 = (0);
var G__21462 = (0);
seq__21388_21438 = G__21459;
chunk__21389_21439 = G__21460;
count__21390_21440 = G__21461;
i__21391_21441 = G__21462;
continue;
}
} else {
}
}
break;
}

var G__21463 = seq__21383_21430;
var G__21464 = chunk__21384_21431;
var G__21465 = count__21385_21432;
var G__21466 = (i__21386_21433 + (1));
seq__21383_21430 = G__21463;
chunk__21384_21431 = G__21464;
count__21385_21432 = G__21465;
i__21386_21433 = G__21466;
continue;
} else {
var temp__4425__auto___21467 = cljs.core.seq.call(null,seq__21383_21430);
if(temp__4425__auto___21467){
var seq__21383_21468__$1 = temp__4425__auto___21467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21383_21468__$1)){
var c__4863__auto___21469 = cljs.core.chunk_first.call(null,seq__21383_21468__$1);
var G__21470 = cljs.core.chunk_rest.call(null,seq__21383_21468__$1);
var G__21471 = c__4863__auto___21469;
var G__21472 = cljs.core.count.call(null,c__4863__auto___21469);
var G__21473 = (0);
seq__21383_21430 = G__21470;
chunk__21384_21431 = G__21471;
count__21385_21432 = G__21472;
i__21386_21433 = G__21473;
continue;
} else {
var vec__21394_21474 = cljs.core.first.call(null,seq__21383_21468__$1);
var path_21475__$1 = cljs.core.nth.call(null,vec__21394_21474,(0),null);
var cs_21476 = cljs.core.nth.call(null,vec__21394_21474,(1),null);
var cs_21477__$1 = cljs.core.deref.call(null,cs_21476);
var seq__21395_21478 = cljs.core.seq.call(null,cs_21477__$1);
var chunk__21396_21479 = null;
var count__21397_21480 = (0);
var i__21398_21481 = (0);
while(true){
if((i__21398_21481 < count__21397_21480)){
var vec__21399_21482 = cljs.core._nth.call(null,chunk__21396_21479,i__21398_21481);
var id_21483 = cljs.core.nth.call(null,vec__21399_21482,(0),null);
var c_21484 = cljs.core.nth.call(null,vec__21399_21482,(1),null);
if(cljs.core.truth_(c_21484.shouldComponentUpdate(c_21484.props,c_21484.state))){
c_21484.forceUpdate();
} else {
}

var G__21485 = seq__21395_21478;
var G__21486 = chunk__21396_21479;
var G__21487 = count__21397_21480;
var G__21488 = (i__21398_21481 + (1));
seq__21395_21478 = G__21485;
chunk__21396_21479 = G__21486;
count__21397_21480 = G__21487;
i__21398_21481 = G__21488;
continue;
} else {
var temp__4425__auto___21489__$1 = cljs.core.seq.call(null,seq__21395_21478);
if(temp__4425__auto___21489__$1){
var seq__21395_21490__$1 = temp__4425__auto___21489__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21395_21490__$1)){
var c__4863__auto___21491 = cljs.core.chunk_first.call(null,seq__21395_21490__$1);
var G__21492 = cljs.core.chunk_rest.call(null,seq__21395_21490__$1);
var G__21493 = c__4863__auto___21491;
var G__21494 = cljs.core.count.call(null,c__4863__auto___21491);
var G__21495 = (0);
seq__21395_21478 = G__21492;
chunk__21396_21479 = G__21493;
count__21397_21480 = G__21494;
i__21398_21481 = G__21495;
continue;
} else {
var vec__21400_21496 = cljs.core.first.call(null,seq__21395_21490__$1);
var id_21497 = cljs.core.nth.call(null,vec__21400_21496,(0),null);
var c_21498 = cljs.core.nth.call(null,vec__21400_21496,(1),null);
if(cljs.core.truth_(c_21498.shouldComponentUpdate(c_21498.props,c_21498.state))){
c_21498.forceUpdate();
} else {
}

var G__21499 = cljs.core.next.call(null,seq__21395_21490__$1);
var G__21500 = null;
var G__21501 = (0);
var G__21502 = (0);
seq__21395_21478 = G__21499;
chunk__21396_21479 = G__21500;
count__21397_21480 = G__21501;
i__21398_21481 = G__21502;
continue;
}
} else {
}
}
break;
}

var G__21503 = cljs.core.next.call(null,seq__21383_21468__$1);
var G__21504 = null;
var G__21505 = (0);
var G__21506 = (0);
seq__21383_21430 = G__21503;
chunk__21384_21431 = G__21504;
count__21385_21432 = G__21505;
i__21386_21433 = G__21506;
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
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
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
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__21339,map__21339__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
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

var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
var G__21508 = x;
if(G__21508){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21508.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__21508.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__21508);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__21508);
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

var key = (((function (){var G__21510 = cursor;
if(G__21510){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__21510.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__21510.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__21510);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__21510);
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

var temp__4425__auto__ = owner.refs;
if(cljs.core.truth_(temp__4425__auto__)){
var refs = temp__4425__auto__;
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
