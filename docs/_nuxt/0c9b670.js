(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{228:function(t,e,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("7388ab72",content,!0,{sourceMap:!1})},254:function(t,e,o){"use strict";var r={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Home",to:"/"},{icon:"mdi-account-group",title:"Clientes",to:"/cliente"},{icon:"mdi-newspaper-variant",title:"Conceptos de puntos",to:"/concepto"},{icon:"mdi-wrench",title:"Parametros",to:"/parametro"},{icon:"mdi-bag-checked",title:"Bolsas",to:"/bolsa"},{icon:"mdi-cart-plus",title:"Usos de puntos",to:"/uso"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}}},n=o(87),c=o(114),l=o.n(c),d=o(381),v=o(387),f=o(382),m=o(192),_=o(388),V=o(383),h=o(171),w=o(172),x=o(108),k=o(173),C=o(84),N=o(384),y=o(386),A=o(385),F=o(251),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.items,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{fixed:"",app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-account")])],1)],1),t._v(" "),o("v-main",[o("v-container",[o("Nuxt")],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:""}},[o("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:f.a,VBtn:m.a,VContainer:_.a,VFooter:V.a,VIcon:h.a,VList:w.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:C.a,VListItemTitle:C.b,VMain:N.a,VNavigationDrawer:y.a,VSpacer:A.a,VToolbarTitle:F.a})},263:function(t,e,o){o(264),t.exports=o(265)},291:function(t,e,o){"use strict";o(228)},292:function(t,e,o){var r=o(18)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},75:function(t,e,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(291),o(87)),c=o(114),l=o.n(c),d=o(381),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[263,13,3,14]]]);