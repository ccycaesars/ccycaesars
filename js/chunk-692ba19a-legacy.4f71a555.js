(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-692ba19a"],{2745:function(t,e,a){"use strict";var n=a("815f"),s=a.n(n);s.a},"29c3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Award"},[a("van-nav-bar",{staticClass:"header",attrs:{title:t.$t("Award.title"),"left-arrow":"",fixed:!0,border:!1},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"head",staticStyle:{"padding-bottom":"35px"}},[a("div",{staticClass:"header_star"},[t._v(t._s(t.$t("Award.Commission")))]),a("div",{staticClass:"header_money"},[t._v("$"+t._s(t.wallet.Award))])]),a("div",{staticClass:"main_content"},[a("div",{staticClass:"main_conair"},[a("div",{staticClass:"content_left"},[a("div",{staticClass:"content_money"},[t._v(t._s(t.wallet.DirectNum))]),a("div",{staticClass:"content_p"},[t._v(t._s(t.$t("Award.People")))])])]),a("div",{staticClass:"main_conair"},[a("div",{staticClass:"content_right"},[a("div",{staticClass:"content_money"},[t._v("$"+t._s(t.wallet.Cash))]),a("div",{staticClass:"content_p"},[t._v(t._s(t.$t("grade.cash")))])])])]),a("div",{staticClass:"tips"},[a("div",{staticClass:"tips_title"},[t._v(t._s(t.$t("Award.Detail")))]),a("div",{staticClass:"table",style:t.css},[a("castle-loadmore",{ref:"vueLoad",attrs:{"top-method":t.handleTop,"top-status-change":t.handleStatusChange,topDistance:44,"bottom-method":t.handleBottom,"bottom-status-change":t.handleBottomStatusChange,"disable-top":!1,"disable-bottom":!1,nodata:t.$t("record.noMoreData"),topLoading:t.$t("record.topLoading"),topPulling:t.$t("record.topPulling"),topLimit:t.$t("record.topLimit")}},[a("table",[a("tr",[a("th",[t._v(t._s(t.$t("Award.detailName")))]),a("th",[t._v(t._s(t.$t("nav.star")))]),a("th",[t._v(t._s(t.$t("Award.detailRatio")))]),a("th",[t._v(t._s(t.$t("Award.detailCommission")))]),a("th",[t._v(t._s(t.$t("Award.detailDate")))])]),t._l(t.List,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.UserInfo.Name))]),a("td",[t._v(t._s(e.PTitle)+t._s(t.$t("star.level")))]),a("td",[t._v(t._s((100*e.AwardProfit).toFixed(2))+"%")]),a("td",[t._v(t._s(e.Money))]),a("td",[t._v(t._s(new Date(e.Users.DTime).toLocaleDateString()))])])})],2)])],1)])],1)},s=[],i=(a("96cf"),a("1da1")),r=a("d4ec"),o=a("bee2"),c=a("99de"),d=a("7e84"),u=a("262e"),l=(a("551c"),a("8a81"),a("9ab4")),h=a("60a3"),v=a("d716"),f=a("d629"),p=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(d["a"])(e).apply(this,arguments)),t.Height=0,t.wallet={},t.AwardRecordApi={},t.Page=1,t.Total=0,t.Refresh=!0,t.List={},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"onClickLeft",value:function(){this.$router.back()}},{key:"mounted",value:function(){this.Height=window.screen.height-46-129-70-30,this.init()}},{key:"init",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f["a"].get();case 2:this.wallet=t.sent[0],this.handleTop();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"Award",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["a"].get({P:this.Page,N:10,W:{},Sort:"CTime DESC"});case 2:return e=t.sent,a=e.L,this.Total=e.T,e.N*e.P>=e.T&&(this.Refresh=!1),t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleTop",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.Page=1,t.next=3,this.Award();case 3:e=t.sent,this.List=e,a=this.$refs.vueLoad,a.onTopLoaded(),this.handleBottom();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleStatusChange",value:function(t){}},{key:"handleBottomStatusChange",value:function(t){}},{key:"handleBottom",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$refs.vueLoad,!this.Refresh){t.next=10;break}return this.Page++,t.next=5,this.Award();case 5:a=t.sent,this.List=this.List.concat(a),e.onBottomLoaded(),t.next=11;break;case 10:e.onBottomLoaded(this.Refresh);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"css",get:function(){return{height:this.Height+"px"}}}]),e}(h["c"]);p=l["a"]([Object(h["a"])({components:{Lang:function(t){return a.e("chunk-ba9363fe").then(function(){var e=[a("fab4")];t.apply(null,e)}.bind(this)).catch(a.oe)}}})],p);var _=p,m=_,w=(a("2745"),a("6dd3"),a("2877")),b=Object(w["a"])(m,n,s,!1,null,"0e6bf1da",null);b.options.__file="Award.vue";e["default"]=b.exports},"6dd3":function(t,e,a){"use strict";var n=a("baef"),s=a.n(n);s.a},"815f":function(t,e,a){},baef:function(t,e,a){}}]);