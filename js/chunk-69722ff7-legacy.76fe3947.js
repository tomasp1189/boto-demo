(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69722ff7"],{4671:function(e,t,a){"use strict";a("e42f")},"63fb":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),o={class:"mx-2 mt-2"},l=Object(n["createElementVNode"])("div",{class:"text-start"},[Object(n["createElementVNode"])("h3",{class:"ml-2 mt-3"},"Frequently Asked Questions")],-1),c={class:"mx-3 mr-3 h-100"},s={class:"text-start"},i=Object(n["createElementVNode"])("span",{class:"mx-3 text-white"},"|",-1),r={class:"faq w-full"},d=["onClick"],u={class:"rounded"},f={class:"faq-heading break-all"},p=Object(n["createElementVNode"])("div",{class:"faq-arrow"},null,-1),h=["innerHTML"];function b(e,t){var a=Object(n["resolveComponent"])("admin-layout");return Object(n["openBlock"])(),Object(n["createBlock"])(a,null,{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",o,[l,Object(n["createElementVNode"])("div",c,[Object(n["createElementVNode"])("section",s,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("div",null,[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.expandAll&&e.expandAll.apply(e,t)}),class:"bg-transparent focus:outline-none hover:underline py-2 link"}," Expand All "),i,Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.collapseAll&&e.collapseAll.apply(e,t)}),class:"bg-transparent focus:outline-none hover:underline py-2 link"}," Collapse All ")]),Object(n["createElementVNode"])("div",r,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.faqContent,(function(t,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{key:t.q},[Object(n["createElementVNode"])("div",{class:"rounded mb-2",onClick:function(t){return e.showFaq(a)}},[Object(n["createElementVNode"])("label",u,[Object(n["createElementVNode"])("p",f,Object(n["toDisplayString"])(t.q),1),p]),Object(n["createElementVNode"])("p",{class:Object(n["normalizeClass"])(["faq-text text-white",e.faqContent[a].displayed?"":"d-none"]),innerHTML:t.a},null,10,h)],8,d)])})),128))])])])])])]})),_:1})}var m=a("96cd"),w=a("f1e8"),y=[{q:"How can I use data from a previous block?",a:"When you connect two blocks, you will have access to the context of all the previous blocks. To use data from another block simply type # and the list of available fields will come up.",displayed:!1},{q:"How long will my bot be running?",a:"Once activated, your bot will be running indefinitely with the frequency you chose until you switch it off again. You can do that in the <a href='/botos' class='text-white'><u>My Botos</u></a> option.",displayed:!1},{q:"Can I create my own block?",a:"Yes! Boto is an open platform for developers, if you want to create your own block and make it available to others <a href='/contact' class='text-white'><u>drop us a line</u></a>.",displayed:!1},{q:"Are there predefined bots I can use?",a:"Yes! You can find some of the available predefined bots in the <a href='/recipes' class='text-white'><u>Recipes</u></a> section.",displayed:!1},{q:"My bot has not run when expected, what can I do?",a:"If you are having issues with your bit, <a href='/botos' class='text-white'><u>send us a message</u></a> and we will look into it straight away.",displayed:!1},{q:"I found a bug or have a suggestion, how can I report it?",a:"If you found a bug or have an idea of a cool feature we could implement please <a href='/contact' class='text-white'><u>send us a message</u></a>, we would love to hear from you.",displayed:!1}],v=Object(n["defineComponent"])({name:"Faq",components:{AdminLayout:m["a"]},data:function(){return{faqContent:y}},created:function(){navigator.onLine||w["a"].push({name:"home.offline",params:{route:this.$route.fullPath}})},methods:{showFaq:function(e){this.faqContent[e].displayed=!this.faqContent[e].displayed},expandAll:function(){for(var e=0,t=this.faqContent;e<t.length;e++){var a=t[e];a.displayed=!0}},collapseAll:function(){for(var e=0,t=this.faqContent;e<t.length;e++){var a=t[e];a.displayed=!1}}}}),O=(a("4671"),a("6b0d")),j=a.n(O);const k=j()(v,[["render",b]]);t["default"]=k},e42f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-69722ff7-legacy.76fe3947.js.map