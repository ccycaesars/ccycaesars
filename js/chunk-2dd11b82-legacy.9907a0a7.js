(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dd11b82"],{"0769":function(t,e,a){},"080b":function(t,e,a){"use strict";var i=a("c477"),n=a.n(i);n.a},af74:function(t,e,a){"use strict";var i=a("0769"),n=a.n(i);n.a},b5b9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Mine"},[a("div",{staticClass:"head"},[a("div",{staticClass:"header_titel"},[t._v(t._s(t.$t("Mine.title")))]),a("div",{staticClass:"header_star"},[t._v(t._s(t.$t("exchange.balance"))),a("van-tag",{staticClass:"meiyuan",attrs:{plain:"",type:"danger"}},[t._v(t._s(t.$t("common.dollar")))])],1),a("div",{staticClass:"header_money"},[t._v("$"+t._s(t.wallet.Cash))]),a("div",{staticClass:"money"},[a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v("$"+t._s(t.wallet.Charge))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nowCharge")))])]),a("div",{staticClass:"money_content",staticStyle:{position:"relative"}},["Max"!=t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.NextStar))]):t._e(),"Max"==t.NextStar?a("div",{staticClass:"money_titel"},[t._v(t._s(t.$t("Max")))]):t._e(),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.nextStar")))]),a("div",{staticClass:"pa"})]),a("div",{staticClass:"money_content"},[a("div",{staticClass:"money_titel"},[t._v(t._s(t.wallet.Award))]),a("div",{staticClass:"money_p"},[t._v(t._s(t.$t("level.award")))])])])]),a("div",{staticStyle:{background:"#ffffff","margin-top":"-20px","z-index":"-1","padding-top":"13px",position:"relative"}}),a("van-cell",{attrs:{title:t.$t("Mine.safe"),"is-link":"",value:t.$t("Mine.tipsOne"),to:"Safe"}}),a("van-cell",{attrs:{title:t.$t("Mine.kefu"),"is-link":""}}),a("div",{staticClass:"content_tow"},[a("van-cell",{attrs:{title:t.$t("Mine.titleOne"),"is-link":"",value:t.$t("Mine.tipsTwo")}}),a("van-cell",{class:{jihuo:1==t.wallet.Validate},attrs:{title:t.$t("Mine.titleFree"),"is-link":"",value:t.Validate,to:"Validate"}}),a("van-cell",{class:{jihuo:"已激活"==t.jihuoStatus},attrs:{title:t.$t("Mine.tilteFor"),"is-link":"",value:t.jihuoStatus,to:"Activation"}})],1),a("van-button",{staticClass:"login_out",attrs:{size:"large"},on:{click:function(e){t.logout()}}},[t._v(t._s(t.$t("logout")))])],1)},n=[],s=(a("96cf"),a("1da1")),l=a("d4ec"),c=a("bee2"),r=a("99de"),o=a("7e84"),u=a("262e"),v=a("9ab4"),d=a("afbc"),h=a("60a3"),_=a("ef25"),f=a("4d2c"),p=a("d629"),g=function(t){function e(){var t;return Object(l["a"])(this,e),t=Object(r["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.jihuoStatus="",t.Validate="",t.wallet={},t.NextStar="",t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"created",value:function(){Object(f["show_button"])()}},{key:"logout",value:function(){var t=this;this.$dialog.confirm({title:String(this.$t("Mine.Out")),message:String(this.$t("Mine.OutTips"))}).then(Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_["a"].logout();case 2:t.$router.push(d["a"].Login);case 3:case"end":return e.stop()}},e,this)}))).catch(function(){})}},{key:"mounted",value:function(){this.lange(),this.init()}},{key:"lange",value:function(){this.jihuoStatus=String(this.$t("Mine.tipsFive")),this.Validate=String(this.$t("Mine.Validate"))}},{key:"init",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].get();case 2:return this.wallet=t.sent[0],t.next=5,p["a"].getNextStar();case 5:this.NextStar=t.sent,1==this.wallet.Status&&(this.jihuoStatus=String(this.$t("Mine.tipsFiveYes"))),1==this.wallet.Validate&&(this.Validate=String(this.$t("Mine.ValidateYes")));case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(h["c"]);g=v["a"]([Object(h["a"])({components:{Lang:function(t){return a.e("chunk-9827176a").then(function(){var e=[a("fab4")];t.apply(null,e)}.bind(this)).catch(a.oe)}}})],g);var m=g,b=m,w=(a("af74"),a("080b"),a("2877")),$=Object(w["a"])(b,i,n,!1,null,"704aa0a2",null);$.options.__file="Mine.vue";e["default"]=$.exports},c477:function(t,e,a){}}]);