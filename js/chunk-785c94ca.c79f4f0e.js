(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-785c94ca"],{7425:function(t,a,e){},"790c":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("van-row",[e("van-col",{attrs:{span:"24"}},[e("Head",[e("div",{staticClass:"head"},[t._v(t._s(t.$t("star.currentStarLevel")))]),e("br"),e("div",{staticClass:"star-text"},[t._v(t._s(t.Level+" "+t.$t("star.level")))])])],1)],1),e("van-row",{staticClass:"t3row"},[e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"num"},[t._v(t._s(t.Total))]),e("div",{staticClass:"tip"},[t._v(t._s(t.$t("star.buyedMoney")))])]),e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"num"},[t._v(t._s(t.Next))]),e("div",{staticClass:"tip"},[t._v(t._s(t.$t("star.upgradeMoney")))])]),e("van-col",{attrs:{span:"8"}},[e("div",{staticClass:"num"},[t._v(t._s(t.Rate))]),e("div",{staticClass:"tip"},[t._v(t._s(t.$t("star.recommendRate")))])])],1),e("van-row",[e("van-col",{attrs:{span:"24"}},t._l(t.Cells,function(a,s){return e("van-cell",{key:s,attrs:{title:a.Title,"is-link":""},on:{click:function(e){t.cellClick(a)}}})}),1)],1)],1)},n=[],r=e("9ab4"),l=e("2b0e"),i=e("60a3"),c=e("afbc");let u=class extends l["default"]{get Level(){return 3}get Total(){return"$1000"}get Next(){return"$1000"}get Rate(){return"13%"}get Cells(){return[{Title:this.$t("star.starRule"),Route:c["a"].StarRule},{Title:this.$t("star.buyStar"),Route:""},{Title:this.$t("star.recommendAward"),Route:""},{Title:this.$t("star.benefitPremium"),Route:""}]}cellClick(t){t.Route&&this.$router.push(t.Route)}mounted(){}created(){}};u=r["a"]([Object(i["a"])({props:{},components:{Head:t=>e.e("chunk-017ae92a").then(function(){var a=[e("a67a")];t.apply(null,a)}.bind(this)).catch(e.oe)}})],u);var o=u,v=o,d=(e("b319"),e("2877")),p=Object(d["a"])(v,s,n,!1,null,"6d2bcc76",null);p.options.__file="Main.vue";a["default"]=p.exports},b319:function(t,a,e){"use strict";var s=e("7425"),n=e.n(s);n.a}}]);