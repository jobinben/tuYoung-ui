(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(t,e,n){},381:function(t,e,n){"use strict";n(380)},382:function(t,e,n){"use strict";var i={name:"TIcon",props:["name"]},o=(n(381),n(53)),s=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"t-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"a4d79d52",null);e.a=s.exports},384:function(t,e,n){},388:function(t,e,n){"use strict";n(384)},389:function(t,e,n){"use strict";var i={name:"TButton",components:{"t-icon":n(382).a},props:{icon:{type:String,default:""},type:{type:String,default:"default",validator:function(t){return-1!==["default","primary","success","info","warning","error"].indexOf(t)}},loading:{},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}}},o=(n(388),n(53)),s=Object(o.a)(i,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("button",{staticClass:"t-button",class:[(t={},t["icon-"+e.iconPosition]=!0,t),e.type],on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?i("t-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?i("t-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):e._e(),e._v(" "),i("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,"2d55c3d6",null);e.a=s.exports},414:function(t,e,n){},419:function(t,e,n){"use strict";n(414)},422:function(t,e,n){"use strict";var i={name:"TPopover",props:{position:{type:String,default:"top",validator:function(t){return-1!==["top","bottom","left","right"].indexOf(t)}},trigger:{type:String,default:"click",validator:function(t){return-1!==["click","hover"].indexOf(t)}}},data:function(){return{visible:!1}},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},mounted:function(){this.addPopoverListeners()},beforeDestroy:function(){this.removePopoverListeners()},methods:{addPopoverListeners:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},removePopoverListeners:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},positionContent:function(){var t=this.$refs,e=t.contentWrapper,n=t.triggerWrapper;document.body.appendChild(e);var i=n.getBoundingClientRect(),o=i.width,s=i.height,r=i.left,c=i.top,l=e.getBoundingClientRect().height,a={top:{left:r+window.scrollX,top:c+window.scrollY},bottom:{left:r+window.scrollX,top:c+window.scrollY+s},left:{left:r+window.scrollX,top:c+window.scrollY+(s-l)/2},right:{left:r+window.scrollX+o,top:c+window.scrollY+(s-l)/2}};e.style.left=a[this.position].left+"px",e.style.top=a[this.position].top+"px"},getRefs:function(t,e){return this.$refs[t]&&(this.$refs[t]===e.target||this.$refs[t].contains(e.target))},onClickDocument:function(t){!this.getRefs("popover",t)&&!this.getRefs("contentWrapper",t)&&this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document.removeEventListener("click",this.onClickDocument)},onClick:function(t){if(this.$refs.triggerWrapper.contains(t.target)){if(this.visible)return void this.close();this.open()}}}},o=(n(419),n(53)),s=Object(o.a)(i,(function(){var t,e=this.$createElement,n=this._self._c||e;return n("div",{ref:"popover",staticClass:"popover"},[this.visible?n("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content")],2):this._e(),this._v(" "),n("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"0c496d83",null);e.a=s.exports},511:function(t,e,n){"use strict";n.r(e);var i=n(422),o=n(389),s={components:{TPopover:i.a,TButton:o.a}},r=n(53),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"1em"}},[n("t-popover",{attrs:{position:"top"}},[n("template",{slot:"content"},[n("div",[t._v("I am here!")])]),t._v(" "),n("t-button",[t._v("上面")])],2),t._v(" "),n("t-popover",{attrs:{position:"bottom"}},[n("template",{slot:"content"},[n("div",[t._v("I am here!")])]),t._v(" "),n("t-button",[t._v("下面")])],2),t._v(" "),n("t-popover",{attrs:{position:"left"}},[n("template",{slot:"content"},[n("div",[t._v("I am here!")])]),t._v(" "),n("t-button",[t._v("左边")])],2),t._v(" "),n("t-popover",{attrs:{position:"right"}},[n("template",{slot:"content"},[n("div",[t._v("I am here!")])]),t._v(" "),n("t-button",[t._v("右边")])],2)],1)}),[],!1,null,null,null);e.default=c.exports}}]);