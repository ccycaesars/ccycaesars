(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e96ea53"],{2199:function(t,e,n){"use strict";var s=n("fbc3"),i=n.n(s);i.a},"4f37":function(t,e,n){"use strict";n("aa77")("trim",function(t){return function(){return t(this,3)}})},"501e":function(t,e,n){},"794a":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Register",staticStyle:{background:"white"}},[n("van-nav-bar",{staticStyle:{background:"#3377FF"},attrs:{title:t.$t("register.register"),"left-arrow":"",fixed:!0,border:!1},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"heade"}),n("div",{staticClass:"content"},[n("div",{staticClass:"input_user"},[t._m(0),n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.Phone,callback:function(e){t.Phone=e},expression:"Phone"}})],1)],1),n("div",{staticClass:"input_user"},[n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v(t._s(t.$t("register.account")))])]),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.$t("register.writeAccount"),clearable:""},model:{value:t.Account,callback:function(e){t.Account=e},expression:"Account"}})],1)],1),n("div",{staticClass:"input_user"},[t._m(1),n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入姓名",clearable:""},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}})],1)],1),n("div",{staticClass:"input_user"},[t._m(2),n("van-cell-group",[n("van-field",{attrs:{placeholder:"",disabled:"",clearable:""},model:{value:t.DirectAccount,callback:function(e){t.DirectAccount=e},expression:"DirectAccount"}})],1)],1),n("div",{staticClass:"input_user"},[n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v(t._s(t.$t("register.pwd")))])]),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.$t("register.tipsPwd"),clearable:"",type:t.pwdType,icon:t.incoType},on:{"click-icon":t.checkType},model:{value:t.PWD,callback:function(e){t.PWD=e},expression:"PWD"}})],1)],1),n("van-button",{staticClass:"login_button",attrs:{type:"danger",size:"large"},on:{click:t.Register}},[t._v(t._s(t.$t("register.goRegister")))])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("手机号")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("姓名")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("推荐人")])])}],a=(n("4f37"),n("96cf"),n("1da1")),c=n("d4ec"),r=n("bee2"),o=n("99de"),u=n("7e84"),l=n("262e"),p=(n("551c"),n("8a81"),n("9ab4")),h=n("60a3"),f=n("ef25"),d=function(t){function e(){var t;return Object(c["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.pwdType="password",t.incoType="closed-eye",t.Phone="",t.PWD="123456",t.Account="",t.Name="",t}return Object(l["a"])(e,t),Object(r["a"])(e,[{key:"wPhone",value:function(t,e){this.Account==e&&(this.Account=t)}},{key:"checkType",value:function(){"eye-o"==this.incoType?(this.incoType="closed-eye",this.pwdType="password"):(this.incoType="eye-o",this.pwdType="text")}},{key:"onClickLeft",value:function(){this.$router.back()}},{key:"Register",value:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!=this.Account.trim()&&""!=this.PWD.trim()){t.next=3;break}return this.$toast(this.$t("Public.accountOrPWD")),t.abrupt("return");case 3:if(""!=this.Phone.trim()){t.next=6;break}return this.$toast(this.$t("UpdatePhone.totastOne")),t.abrupt("return");case 6:if(""!=this.Name.trim()){t.next=9;break}return this.$toast(this.$t("register.name")),t.abrupt("return");case 9:if(0!=this.Account){t.next=12;break}return this.$toast(this.$t("register.name")),t.abrupt("return");case 12:return t.next=14,f["a"].register({Account:this.Account,Name:this.Name,DirectAccount:this.DirectAccount,Phone:this.Phone,PWD:this.PWD});case 14:this.$toast(this.$t("register.tipsSuccess")),this.Phone="",this.PWD="123456",this.Account="",this.Name="";case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"DirectAccount",get:function(){return this.$store.state.Users.Login.Info?this.$store.state.Users.Login.Info.Account:"无推介人"}}]),e}(h["c"]);p["a"]([Object(h["d"])("Phone")],d.prototype,"wPhone",null),d=p["a"]([Object(h["a"])({components:{Lang:function(t){return n.e("chunk-ba9363fe").then(function(){var e=[n("fab4")];t.apply(null,e)}.bind(this)).catch(n.oe)}}})],d);var v=d,b=v,m=(n("2199"),n("b2b1"),n("2877")),g=Object(m["a"])(b,s,i,!1,null,"845e2c3c",null);g.options.__file="Register.vue";e["default"]=g.exports},b2b1:function(t,e,n){"use strict";var s=n("501e"),i=n.n(s);i.a},fbc3:function(t,e,n){}}]);