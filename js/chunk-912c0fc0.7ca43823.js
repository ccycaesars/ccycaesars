(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-912c0fc0"],{1694:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"Level"},[s("div",{staticClass:"header"},[s("div",{staticClass:"header_titel"},[t._v("级别标准")]),s("div",{staticClass:"header_star"},[t._v(t._s(t.wallet.StarLevel)+"星")]),s("div",{staticClass:"header_star_now"},[s("span",[t._v("当前星级")]),s("van-tag",{staticClass:"star",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.wallet.StarLevel)+"星")])],1)]),s("div",{staticClass:"money"},[s("div",{staticClass:"money_content"},[s("div",{staticClass:"money_titel"},[t._v("$"+t._s(t.wallet.Charge))]),s("div",{staticClass:"money_p"},[t._v("当前投资金额")])]),s("div",{staticClass:"money_content",staticStyle:{position:"relative"}},[s("div",{staticClass:"money_titel"},[t._v(t._s(t.NextStar))]),s("div",{staticClass:"money_p"},[t._v("距下离一级")]),s("div",{staticClass:"pa"})]),s("div",{staticClass:"money_content"},[s("div",{staticClass:"money_titel"},[t._v(t._s(t.tui))]),s("div",{staticClass:"money_p"},[t._v("推荐奖励")])])]),s("div",{staticClass:"tui"},[t._v("推荐好友转奖励")]),t._m(0),s("van-cell",{attrs:{title:"评级标准","is-link":"",to:"Grade"}},[s("van-tag",{attrs:{type:"danger",plain:""}},[t._v("星级")])],1),s("van-cell",{attrs:{title:"购买星级","is-link":"",to:"BuyStar"}}),s("van-cell",{attrs:{title:"推荐奖励","is-link":"",to:"Award"}}),s("van-cell",{attrs:{title:"团队福利","is-link":"",to:"Team"}})],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"img"},[e("img",{staticStyle:{width:"100%"},attrs:{src:s("1bef")}})])}],n=s("9ab4"),l=s("60a3"),c=s("4d2c"),r=s("d629");let v=class extends l["c"]{constructor(){super(...arguments),this.OldPayPWD="",this.NewPayPWD="",this.wallet={},this.NextStar="",this.tui="0%"}created(){Object(c["show_button"])()}mounted(){this.init()}async init(){this.wallet=(await r["a"].get())[0],this.NextStar=await r["a"].getNextStar(),this.tui=await r["a"].tui()}};v=n["a"]([Object(l["a"])({components:{Lang:t=>s.e("chunk-40aa5201").then(function(){var a=[s("fab4")];t.apply(null,a)}.bind(this)).catch(s.oe)}})],v);var o=v,d=o,_=(s("18c4"),s("1d9e"),s("2877")),u=Object(_["a"])(d,e,i,!1,null,"784369d7",null);u.options.__file="Level.vue";a["default"]=u.exports},"18c4":function(t,a,s){"use strict";var e=s("5d25"),i=s.n(e);i.a},"1bef":function(t,a,s){t.exports=s.p+"img/Level.0d4ff01a.png"},"1d9e":function(t,a,s){"use strict";var e=s("3baf"),i=s.n(e);i.a},"3baf":function(t,a,s){},"5d25":function(t,a,s){}}]);