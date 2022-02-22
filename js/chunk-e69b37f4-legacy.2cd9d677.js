(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e69b37f4"],{"20e4":function(e,t,n){"use strict";n("c426")},"2edf":function(e,t,n){},7516:function(e,t,n){"use strict";n("2edf")},"9e0c":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"d-flex flex-column min-vh-100 justify-content-center align-items-center"},r=["src"],a={key:1},s=Object(o["createElementVNode"])("i",{class:"fas fa-check-circle fa-5x text-success"},null,-1),i=Object(o["createElementVNode"])("h3",{class:"mt-4"},"Yesss! You can now use Slack in your Botos :-)",-1),l=["src"],u=Object(o["createElementVNode"])("p",{class:"mt-4"},"Click refresh to select the new channel.",-1);function d(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[e.loading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("img",{key:0,src:e.context+"img/loading.svg"},null,8,r)):Object(o["createCommentVNode"])("",!0),e.showConfirmation?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[s,i,Object(o["createElementVNode"])("img",{class:"mt-4",src:e.context+"img/animations/refresh_dropdown.gif",width:"300",alt:"Animation: Click refresh to select the new channel.",title:"Click refresh to select the new channel."},null,8,l),u,Object(o["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return e.closeWindow&&e.closeWindow.apply(e,t)}),class:"boto-button large primary-btn mt-4"},"Go back to Editor")])):Object(o["createCommentVNode"])("",!0)])}var m=n("9ab4"),h={class:"wrapper"},b={class:"main"},f={class:"content"},p={class:"container-fluid p-0 h-100"},w={class:"row mb-2 mb-xl-3 h-100"};function j(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",h,[Object(o["createElementVNode"])("div",b,[Object(o["createElementVNode"])("main",f,[Object(o["createElementVNode"])("div",p,[Object(o["createElementVNode"])("div",w,[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)])])])])])}var O=Object(o["defineComponent"])({}),k=(n("20e4"),n("6b0d")),g=n.n(k);const v=g()(O,[["render",j],["__scopeId","data-v-bb137160"]]);var E=v,y=n("f1e8"),T=n("f8d5"),C=n("ac15"),x=n("5502"),B=Object(o["defineComponent"])({name:"Slack",components:{ExternalLayout:E},setup:function(){var e=Object(x["e"])();return{store:e}},data:function(){return{context:"/demo/",pars:"",authToken:null,loading:!1,showConfirmation:!1}},computed:Object(m["a"])({},Object(x["d"])("auth",["authToken"])),methods:{closeWindow:function(){window.close()}},mounted:function(){return Object(m["b"])(this,void 0,void 0,(function(){var e,t,n,o,c,r;return Object(m["c"])(this,(function(a){switch(a.label){case 0:return a.trys.push([0,4,,5]),e=this.$route.query.code,t=this.$route.query.state,this.loading=!0,e?(n="https://api.boto.io/app/slack/oauth/",o=new FormData,o.append("code",e.toString()),[4,T["a"].request(n,this.authToken,C["a"].POST,o,!0)]):[3,2];case 1:if(c=a.sent(),!c.ok)throw new Error(c.message+" ("+c["slack-message"]+")");return"from_editor"===t?(this.loading=!1,this.showConfirmation=!0):y["a"].push({name:"home.integrations",params:{actionOutcome:"success",actionMessage:"Yesss! You can now use Slack in your Botos :-) Please use the following channel_id for your Boto: "+c.channel_id}}),[3,3];case 2:throw new Error("Could not authorize Slack");case 3:return[3,5];case 4:return r=a.sent(),console.error(r),y["a"].push({name:"home.integrations",params:{actionOutcome:"error",actionMessage:r.toString()}}),[3,5];case 5:return[2]}}))}))}});n("7516");const N=g()(B,[["render",d]]);t["default"]=N},ac15:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e["GET"]="get",e["POST"]="post",e["PUT"]="put",e["DELETE"]="delete"}(o||(o={}))},c426:function(e,t,n){},f8d5:function(e,t,n){"use strict";var o=n("9ab4"),c=function(e,t,n,c,r){return Object(o["b"])(void 0,void 0,void 0,(function(){var a,s,i,l,u,d,m,h,b;return Object(o["c"])(this,(function(f){switch(f.label){case 0:return a=new AbortController,s=new Headers,r||s.append("Content-Type","application/json"),t&&s.append("Authorization","Token "+t),i={method:n,headers:s,cache:"no-store"},l=i.timeout,u=void 0===l?8e3:l,d=setTimeout((function(){return a.abort()}),u),c&&(i["body"]=c),console.log({url:e,authToken:t,type:n,body:c,form:r}),[4,fetch(e,Object(o["a"])(Object(o["a"])({},i),{signal:a.signal}))];case 1:return m=f.sent(),m.ok?[3,3]:[4,m.clone().json()];case 2:throw h=f.sent(),new Error(h.detail?h.detail:"There was an error with this request ("+m.status+")");case 3:return[4,m.clone().json().catch((function(){return m.text()}))];case 4:return b=f.sent(),clearTimeout(d),[2,b]}}))}))},r=function(e){return"AbortError"===e.name?"The request took too long, please check your Internet connection or try again later.":e.message};t["a"]={request:c,getTextError:r}}}]);
//# sourceMappingURL=chunk-e69b37f4-legacy.2cd9d677.js.map