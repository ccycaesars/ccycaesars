(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-327ccc22"],{"2ecd":function(t,e,a){"use strict";var n=a("d313"),s=a.n(n);s.a},"2f50":function(t,e,a){"use strict";var n=a("a397"),s=a.n(n);s.a},"9eb5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Team"},[a("van-nav-bar",{staticClass:"header",attrs:{title:t.$t("Team.title"),"left-arrow":"",fixed:!0,border:!1},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"head"},[a("div",{staticClass:"header_star"},[t._v(t._s(t.$t("Team.Money")))]),a("div",{staticClass:"header_money"},[t._v("$"+t._s(t.wallet.TeamAward))]),a("div",{staticClass:"header_star_now"},[a("span",[t._v(t._s(t.$t("level.nowStar")))]),a("van-tag",{staticClass:"star",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.wallet.StarLevel)+t._s(t.$t("star.level")))])],1)]),a("div",{staticClass:"main_content"},[a("div",{staticClass:"main_conair"},[a("div",{staticClass:"content_left"},[a("div",{staticClass:"content_money"},[t._v("$"+t._s(t.team.total))]),a("div",{staticClass:"content_p"},[t._v(t._s(t.$t("Team.teamAchievement")))])])]),a("div",{staticClass:"main_conair"},[a("div",{staticClass:"content_right"},[a("div",{staticClass:"content_money"},[t._v(t._s(t.team.TeamNumber))]),a("div",{staticClass:"content_p"},[t._v(t._s(t.$t("level.teamNumber")))])])]),a("div",{staticClass:"main_conair"},[a("div",{staticClass:"content_right"},[a("div",{staticClass:"content_money"},[t._v(t._s(t.team.TeamLevel))]),a("div",{staticClass:"content_p"},[t._v(t._s(t.$t("level.teamLevel")))])])])]),a("div",{staticClass:"tips"},[a("div",{staticClass:"tips_title"},[t._v(t._s(t.$t("Team.Detail")))]),a("div",{staticClass:"table",staticStyle:{height:"300px"}},[a("castle-loadmore",{ref:"vueLoad",attrs:{"top-method":t.handleTop,"top-status-change":t.handleStatusChange,topDistance:44,"bottom-method":t.handleBottom,"bottom-status-change":t.handleBottomStatusChange,"disable-top":!1,"disable-bottom":!1,nodata:t.$t("record.noMoreData"),topLoading:t.$t("record.topLoading"),topPulling:t.$t("record.topPulling"),topLimit:t.$t("record.topLimit")}},[a("table",[a("tr",[a("th",[t._v(t._s(t.$t("nav.star")))]),a("th",[t._v(t._s(t.$t("Team.detailMoney")))]),a("th",[t._v(t._s(t.$t("Team.detailDate")))])]),t._l(t.List,function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.TeamLevel)+"星")]),a("td",[t._v(t._s(e.Money))]),a("td",[t._v(t._s(new Date(e.CTime).toLocaleDateString()))])])})],2)])],1)])],1)},s=[],i=(a("96cf"),a("1da1")),r=a("d4ec"),o=a("bee2"),c=a("99de"),l=a("7e84"),u=a("262e"),h=(a("551c"),a("8a81"),a("9ab4")),d=a("60a3"),v=a("86b7"),m=a("d629"),_=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.Height=0,t.wallet={},t.team={},t.Page=1,t.Total=0,t.Refresh=!0,t.List={},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"onClickLeft",value:function(){this.$router.back()}},{key:"mounted",value:function(){this.Height=window.screen.height-46-129-70-30,this.init(),this.handleTop()}},{key:"init",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["a"].get();case 2:return this.wallet=t.sent[0],t.next=5,m["a"].teamPerformance();case 5:this.team=t.sent;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"Award",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,v["a"].query({P:this.Page,N:10,W:{},Sort:"CTime DESC"});case 2:return e=t.sent,a=e.L,this.Total=e.T,e.N*e.P>=e.T&&(this.Refresh=!1),t.abrupt("return",a);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleTop",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.Page=1,t.next=3,this.Award();case 3:e=t.sent,this.List=e,a=this.$refs.vueLoad,a.onTopLoaded(),this.handleBottom();case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"handleStatusChange",value:function(t){}},{key:"handleBottomStatusChange",value:function(t){}},{key:"handleBottom",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$refs.vueLoad,!this.Refresh){t.next=10;break}return this.Page++,t.next=5,this.Award();case 5:a=t.sent,this.List=this.List.concat(a),e.onBottomLoaded(),t.next=11;break;case 10:e.onBottomLoaded(this.Refresh);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"css",get:function(){return{height:this.Height+"px"}}}]),e}(d["c"]);_=h["a"]([Object(d["a"])({components:{Lang:function(t){return a.e("chunk-ba9363fe").then(function(){var e=[a("fab4")];t.apply(null,e)}.bind(this)).catch(a.oe)}}})],_);var p=_,f=p,b=(a("2ecd"),a("2f50"),a("2877")),g=Object(b["a"])(f,n,s,!1,null,"b9f86644",null);g.options.__file="Team.vue";e["default"]=g.exports},a397:function(t,e,a){},d313:function(t,e,a){}}]);