(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{380:function(t,n,e){},381:function(t,n,e){"use strict";e(380)},382:function(t,n,e){"use strict";var i={name:"TIcon",props:["name"]},a=(e(381),e(53)),o=Object(a.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{staticClass:"t-icon"},[n("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"a4d79d52",null);n.a=o.exports},384:function(t,n,e){},388:function(t,n,e){"use strict";e(384)},389:function(t,n,e){"use strict";var i={name:"TButton",components:{"t-icon":e(382).a},props:{icon:{type:String,default:""},type:{type:String,default:"default",validator:function(t){return-1!==["default","primary","success","info","warning","error"].indexOf(t)}},loading:{},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},a=(e(388),e(53)),o=Object(a.a)(i,(function(){var t,n=this,e=n.$createElement,i=n._self._c||e;return i("button",{staticClass:"t-button",class:[(t={},t["icon-"+n.iconPosition]=!0,t),n.type],on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?i("t-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?i("t-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):n._e(),n._v(" "),i("div",{staticClass:"content"},[n._t("default")],2)],1)}),[],!1,null,"2d55c3d6",null);n.a=o.exports},494:function(t,n,e){"use strict";e.r(n);var i={components:{TButton:e(389).a}},a=e(53),o=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{padding:"1em"}},[e("t-button",[t._v("Default")]),t._v(" "),e("t-button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),e("t-button",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),e("t-button",{attrs:{type:"success"}},[t._v("Success")]),t._v(" "),e("t-button",{attrs:{type:"warning"}},[t._v("Warning")]),t._v(" "),e("t-button",{attrs:{type:"error"}},[t._v("Error")])],1)}),[],!1,null,null,null);n.default=o.exports}}]);