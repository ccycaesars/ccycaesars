(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-057459ca"],{"0b5b":function(t,e,a){},"148d":function(t,e,a){"use strict";var s=a("0b5b"),i=a.n(s);i.a},1694:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Level",staticStyle:{"margin-bottom":"60px"}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header_titel"},[t._v(t._s(t.$t("level.title")))]),a("div",{staticClass:"header_star"},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))]),a("div",{staticClass:"header_star_now"},[a("span",[t._v(t._s(t.$t("level.nowStar")))]),a("van-tag",{staticClass:"star",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))])],1)]),a("div",{staticClass:"money"},[a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v("$"+t._s(t.wallet.Charge))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nowCharge")))])]),a("div",{staticClass:"money_content",staticStyle:{position:"relative"}},["Max"!=t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.NextStar))]):t._e(),"Max"==t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.$t("Max")))]):t._e(),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nextStar")))]),a("div",{staticClass:"pa"})]),a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v(t._s(t.tui))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.award")))])])]),a("div",{staticClass:"tui"},[t._v(t._s(t.$t("level.tips")))]),a("div",{staticClass:"img"},[a("span",{staticStyle:{display:"none"},attrs:{id:"link"}},[t._v(t._s(t.link))]),a("van-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.link,expression:"link",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopyLink,expression:"onCopyLink",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onNumberError,expression:"onNumberError",arg:"error"}],staticStyle:{"background-color":"#1d7ff0",border:"0"},attrs:{type:"danger",size:"large",disabled:t.disabled,"data-clipboard-action":"copy","data-clipboard-target":"#link"}},[t._v(t._s(t.linkText))])],1),a("van-cell",{attrs:{title:t.$t("level.grade"),"is-link":"",to:"Grade"}},[a("van-tag",{attrs:{type:"danger",plain:""}},[t._v(t._s(t.$t("nav.star")))])],1),a("van-cell",{attrs:{title:t.$t("level.buyStar"),"is-link":"",to:"BuyStar"}}),a("van-cell",{attrs:{title:t.$t("level.RAward"),"is-link":"",to:"Award"}}),a("van-cell",{attrs:{title:t.$t("level.team"),"is-link":"",to:"Team"}}),a("van-cell",{attrs:{title:t.$t("center.title"),"is-link":"",to:"Center"}}),a("van-cell",{attrs:{title:"提现处理","is-link":"",to:"Cash"}})],1)},i=[],n=(a("96cf"),a("1da1")),l=a("d4ec"),r=a("bee2"),o=a("99de"),c=a("7e84"),v=a("262e"),d=(a("551c"),a("8a81"),a("9ab4")),u=a("60a3"),_=a("4d2c"),p=a("d629"),b=a("afbc"),y=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.OldPayPWD="",t.NewPayPWD="",t.wallet={},t.NextStar="",t.tui="0%",t}return Object(v["a"])(e,t),Object(r["a"])(e,[{key:"created",value:function(){Object(_["show_button"])()}},{key:"onCopyLink",value:function(){this.$toast(this.$t("level.toastFree"))}},{key:"onCopyError",value:function(){this.$toast(this.$t("level.toastFor"))}},{key:"mounted",value:function(){this.init()}},{key:"init",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].get();case 2:return this.wallet=t.sent[0],t.next=5,p["a"].getNextStar();case 5:return this.NextStar=t.sent,t.next=8,p["a"].tui();case 8:this.tui=t.sent;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"link",get:function(){return[window.location.protocol,"//",window.location.host,window.location.pathname,"?Account=",this.$store.state.Users.Login.Info.Account,"#",b["a"].Register].join("")}},{key:"disabled",get:function(){return 0==this.$store.state.Users.StarLevel&&"disabled"}},{key:"linkText",get:function(){return 0==this.$store.state.Users.StarLevel?this.$t("level.toastOne"):this.$t("level.toastTwo")}}]),e}(u["c"]);y=d["a"]([Object(u["a"])({components:{Lang:function(t){return a.e("chunk-ba9363fe").then(function(){var e=[a("fab4")];t.apply(null,e)}.bind(this)).catch(a.oe)}}})],y);var h=y,f=h,w=(a("148d"),a("1d9e"),a("2877")),k=Object(w["a"])(f,s,i,!1,null,"fc89e2f2",null);k.options.__file="Level.vue";e["default"]=k.exports},"1d9e":function(t,e,a){"use strict";var s=a("3baf"),i=a.n(s);i.a},"3baf":function(t,e,a){}}]);