(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-057459ca"],{"0b5b":function(t,e,a){},"148d":function(t,e,a){"use strict";var s=a("0b5b"),i=a.n(s);i.a},1694:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Level",staticStyle:{"margin-bottom":"60px"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header_titel"},[t._v(t._s(t.$t("level.title")))]),a("div",{staticClass:"header_star"},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))]),a("div",{staticClass:"header_star_now"},[a("span",[t._v(t._s(t.$t("level.nowStar")))]),a("van-tag",{staticClass:"star",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))])],1)]),a("div",{staticClass:"money"},[a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v("$"+t._s(t.wallet.Charge))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nowCharge")))])]),a("div",{staticClass:"money_content",staticStyle:{position:"relative"}},["Max"!=t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.NextStar))]):t._e(),"Max"==t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.$t("Max")))]):t._e(),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nextStar")))]),a("div",{staticClass:"pa"})]),a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v(t._s(t.tui))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.award")))])])]),a("div",{staticClass:"tui"},[t._v(t._s(t.$t("level.tips")))]),a("div",{staticClass:"img"},[a("span",{staticStyle:{display:"none"},attrs:{id:"link"}},[t._v(t._s(t.link))]),a("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopyLink,expression:"onCopyLink",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onNumberError,expression:"onNumberError",arg:"error"}],staticStyle:{"background-color":"#1d7ff0",border:"0"},attrs:{type:"danger",size:"large",disabled:t.disabled,"data-clipboard-action":"copy","data-clipboard-target":"#link"}},[t._v(t._s(t.linkText))])],1),a("van-cell",{attrs:{title:t.$t("level.grade"),"is-link":"",to:"Grade"}},[a("van-tag",{attrs:{type:"danger",plain:""}},[t._v(t._s(t.$t("nav.star")))])],1),a("van-cell",{attrs:{title:t.$t("level.buyStar"),"is-link":"",to:"BuyStar"}}),a("van-cell",{attrs:{title:t.$t("level.RAward"),"is-link":"",to:"Award"}}),a("van-cell",{attrs:{title:t.$t("level.team"),"is-link":"",to:"Team"}}),a("van-cell",{attrs:{title:t.$t("center.title"),"is-link":"",to:"Center"}}),a("van-cell",{attrs:{title:"提现处理","is-link":"",to:"Cash"}})],1)},i=[],l=a("9ab4"),n=a("60a3"),r=a("4d2c"),o=a("d629"),c=a("afbc");let v=class extends n["c"]{constructor(){super(...arguments),this.OldPayPWD="",this.NewPayPWD="",this.wallet={},this.NextStar="",this.tui="0%"}created(){Object(r["show_button"])()}get link(){return[window.location.protocol,"//",window.location.host,window.location.pathname,"?Account=",this.$store.state.Users.Login.Info.Account,"#",c["a"].Register].join("")}get disabled(){return 0==this.$store.state.Users.StarLevel&&"disabled"}get linkText(){return 0==this.$store.state.Users.StarLevel?this.$t("level.toastOne"):this.$t("level.toastTwo")}onCopyLink(){this.$toast(this.$t("level.toastFree"))}onCopyError(){this.$toast(this.$t("level.toastFor"))}mounted(){this.init()}async init(){this.wallet=(await o["a"].get())[0],this.NextStar=await o["a"].getNextStar(),this.tui=await o["a"].tui()}};v=l["a"]([Object(n["a"])({components:{Lang:t=>a.e("chunk-9827176a").then(function(){var e=[a("fab4")];t.apply(null,e)}.bind(this)).catch(a.oe)}})],v);var d=v,_=d,p=(a("148d"),a("1d9e"),a("2877")),u=Object(p["a"])(_,s,i,!1,null,"fc89e2f2",null);u.options.__file="Level.vue";e["default"]=u.exports},"1d9e":function(t,e,a){"use strict";var s=a("3baf"),i=a.n(s);i.a},"3baf":function(t,e,a){}}]);