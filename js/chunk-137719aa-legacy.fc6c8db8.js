(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137719aa"],{4590:function(t,e,s){},"50ec":function(t,e,s){"use strict";var n=s("4590"),a=s.n(n);a.a},"6cb9":function(t,e,s){"use strict";var n=s("ef4b"),a=s.n(n);a.a},"9e6a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-row",{staticClass:"Center"},[s("van-col",{attrs:{span:"24"}},[s("van-nav-bar",{staticStyle:{background:"#3377FF",color:"white"},attrs:{title:t.$t("center.title"),"left-arrow":"",fixed:!0,border:!1},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"head"},[s("div",{staticClass:"header_star"},[t._v(t._s(t.$t("Team.teamAchievement")))]),s("div",{staticClass:"header_money"},[t._v("$"+t._s(t.wallet.TeamPerformance))]),s("div",{staticClass:"header_star_now"},[s("span",[t._v(t._s(t.$t("level.nowStar")))]),s("van-tag",{staticClass:"star",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))])],1)]),s("div",{staticStyle:{padding:"0 10px"}},[s("div",{staticClass:"tips_title"},[t._v(t._s(t.$t("Center.nowStatus"))+":"+t._s(t.status))]),s("van-button",{staticClass:"tx_button",attrs:{type:"danger",size:"large",disabled:0==t.Type},on:{click:t.confirm}},[t._v(t._s(t.applyText))]),s("div",{staticClass:"tips"},[s("div",{staticClass:"tips_title"},[t._v(t._s(t.$t("Center.title"))+":")]),s("div",{staticClass:"tips_level"},[t._v("       "+t._s(t.$t("Center.contentOne")))]),s("div",{staticClass:"tips_level"},[t._v("       "+t._s(t.$t("Center.contentTwo")))]),s("div",{staticClass:"tips_level"},[t._v("       "+t._s(t.$t("Center.contentFree")))])])],1)],1)],1)},a=[],r=(s("96cf"),s("1da1")),i=s("d4ec"),c=s("bee2"),o=s("99de"),l=s("7e84"),u=s("262e"),h=(s("551c"),s("8a81"),s("9ab4")),p=s("8bbf"),v=s.n(p),C=s("60a3"),f=s("ef25"),d=s("d629"),_=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.status="",t.wallet={},t.Users={IsCenter:!1,Center:0,CanApply:!1},t.Type=0,t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.status=String(this.$t("Center.toastNine")),this.init()}},{key:"created",value:function(){}},{key:"onClickLeft",value:function(){this.$router.back()}},{key:"init",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d["a"].get();case 2:return this.wallet=t.sent[0],t.next=5,f["a"].checkCenter();case 5:this.Users=t.sent,1==this.Users.IsCenter&&(this.status=String(this.$t("Center.toastSix"))),this.Users.CanApply&&(this.Type=1);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"confirm",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(1==this.Users.IsCenter||1==this.Users.CanApply){t.next=3;break}return this.$toast(this.$t("Center.toastSeven")),t.abrupt("return");case 3:if(1==this.Users.IsCenter||1!=this.Users.CanApply){t.next=7;break}return t.next=6,f["a"].applyCenter();case 6:this.$toast(this.$t("Center.toastEigit"));case 7:return t.next=9,this.init();case 9:e=setInterval(Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.init();case 2:1==s.Users.Center&&clearInterval(e);case 3:case"end":return t.stop()}},t,this)})),1e3);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"style",get:function(){return{width:window.screen.width+"px",height:.3*window.screen.height+"px","background-image":""}}},{key:"applyText",get:function(){return this.Users.IsCenter?this.$t("Center.totastOne"):2==this.Users.Center?this.$t("Center.toastTwo"):-1==this.Users.Center?this.$t("Center.toastFree"):this.Users.CanApply?this.$t("Center.toastFive"):this.$t("Center.toastFor")}}]),e}(v.a);_=h["a"]([Object(C["a"])({props:{},components:{}})],_);var w=_,b=w,y=(s("6cb9"),s("50ec"),s("2877")),k=Object(y["a"])(b,n,a,!1,null,"55afac60",null);k.options.__file="Center.vue";e["default"]=k.exports},ef4b:function(t,e,s){}}]);