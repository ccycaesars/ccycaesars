(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5027f874"],{"02f4":function(t,e,n){var r=n("4588"),i=n("be13");t.exports=function(t){return function(e,n){var c,a,s=String(i(e)),o=r(n),u=s.length;return o<0||o>=u?t?"":void 0:(c=s.charCodeAt(o),c<55296||c>56319||o+1===u||(a=s.charCodeAt(o+1))<56320||a>57343?t?s.charAt(o):c:t?s.slice(o,o+2):a-56320+(c-55296<<10)+65536)}}},"0390":function(t,e,n){"use strict";var r=n("02f4")(!0);t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"0738":function(t,e,n){"use strict";var r=n("8dd4"),i=n.n(r);i.a},"0a49":function(t,e,n){var r=n("9b43"),i=n("626a"),c=n("4bf8"),a=n("9def"),s=n("cd1c");t.exports=function(t,e){var n=1==t,o=2==t,u=3==t,l=4==t,f=6==t,p=5==t||f,h=e||s;return function(e,s,v){for(var d,b,g=c(e),x=i(g),y=r(s,v,3),m=a(x.length),w=0,k=n?h(e,m):o?h(e,0):void 0;m>w;w++)if((p||w in x)&&(d=x[w],b=y(d,w,g),t))if(n)k[w]=b;else if(b)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:k.push(d)}else if(l)return!1;return f?-1:u||l?l:k}}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"214f":function(t,e,n){"use strict";n("b0c5");var r=n("2aba"),i=n("32e9"),c=n("79e5"),a=n("be13"),s=n("2b4c"),o=n("520a"),u=s("species"),l=!c(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=s(t),h=!c(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),v=h?!c(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!e}):void 0;if(!h||!v||"replace"===t&&!l||"split"===t&&!f){var d=/./[p],b=n(a,p,""[t],function(t,e,n,r,i){return e.exec===o?h&&!i?{done:!0,value:d.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),g=b[0],x=b[1];r(String.prototype,t,g),i(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},"28a5":function(t,e,n){"use strict";var r=n("aae3"),i=n("cb7c"),c=n("ebd6"),a=n("0390"),s=n("9def"),o=n("5f1b"),u=n("520a"),l=Math.min,f=[].push,p="split",h="length",v="lastIndex",d=!!function(){try{return new RegExp("x","y")}catch(t){}}();n("214f")("split",2,function(t,e,n,b){var g;return g="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[h]||2!="ab"[p](/(?:ab)*/)[h]||4!="."[p](/(.?)(.?)/)[h]||"."[p](/()()/)[h]>1||""[p](/.?/)[h]?function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!r(t))return n.call(i,t,e);var c,a,s,o=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,d=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,l+"g");while(c=u.call(b,i)){if(a=b[v],a>p&&(o.push(i.slice(p,c.index)),c[h]>1&&c.index<i[h]&&f.apply(o,c.slice(1)),s=c[0][h],p=a,o[h]>=d))break;b[v]===c.index&&b[v]++}return p===i[h]?!s&&b.test("")||o.push(""):o.push(i.slice(p)),o[h]>d?o.slice(0,d):o}:"0"[p](void 0,0)[h]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,r){var i=t(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,i,r):g.call(String(i),n,r)},function(t,e){var r=b(g,t,this,e,g!==n);if(r.done)return r.value;var u=i(t),f=String(this),p=c(u,RegExp),h=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(d?"y":"g"),x=new p(d?u:"^(?:"+u.source+")",v),y=void 0===e?4294967295:e>>>0;if(0===y)return[];if(0===f.length)return null===o(x,f)?[f]:[];var m=0,w=0,k=[];while(w<f.length){x.lastIndex=d?w:0;var _,A=o(x,d?f:f.slice(w));if(null===A||(_=l(s(x.lastIndex+(d?0:w)),f.length))===m)w=a(f,w,h);else{if(k.push(f.slice(m,w)),k.length===y)return k;for(var C=1;C<=A.length-1;C++)if(k.push(A[C]),k.length===y)return k;w=m=_}}return k.push(f.slice(m)),k}]})},"386d":function(t,e,n){"use strict";var r=n("cb7c"),i=n("83a1"),c=n("5f1b");n("214f")("search",1,function(t,e,n,a){return[function(n){var r=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=a(n,t,this);if(e.done)return e.value;var s=r(t),o=String(this),u=s.lastIndex;i(u,0)||(s.lastIndex=0);var l=c(s,o);return i(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]})},"4bf8":function(t,e,n){var r=n("be13");t.exports=function(t){return Object(r(t))}},"4f37":function(t,e,n){"use strict";n("aa77")("trim",function(t){return function(){return t(this,3)}})},"501e":function(t,e,n){},"520a":function(t,e,n){"use strict";var r=n("0bfb"),i=RegExp.prototype.exec,c=String.prototype.replace,a=i,s="lastIndex",o=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=o||u;l&&(a=function(t){var e,n,a,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),o&&(e=f[s]),a=i.call(f,t),o&&a&&(f[s]=f.global?a.index+a[0].length:e),u&&a&&a.length>1&&c.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},"5f1b":function(t,e,n){"use strict";var r=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var c=n.call(t,e);if("object"!==typeof c)throw new TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"6d67":function(t,e,n){"use strict";var r=n("5ca1"),i=n("0a49")(1);r(r.P+r.F*!n("2f21")([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},"794a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Register",staticStyle:{background:"white"}},[n("van-nav-bar",{staticStyle:{background:"#3377FF"},attrs:{title:t.$t("register.register"),"left-arrow":"",fixed:!0,border:!1},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"heade"}),n("div",{staticClass:"content"},[n("div",{staticClass:"input_user"},[t._m(0),n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.Phone,callback:function(e){t.Phone=e},expression:"Phone"}})],1)],1),n("div",{staticClass:"input_user"},[n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v(t._s(t.$t("register.account")))])]),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.$t("register.writeAccount"),clearable:""},model:{value:t.Account,callback:function(e){t.Account=e},expression:"Account"}})],1)],1),n("div",{staticClass:"input_user"},[t._m(1),n("van-cell-group",[n("van-field",{attrs:{placeholder:"请输入姓名",clearable:""},model:{value:t.Name,callback:function(e){t.Name=e},expression:"Name"}})],1)],1),n("div",{staticClass:"input_user"},[t._m(2),n("van-cell-group",[n("van-field",{attrs:{placeholder:"",disabled:"",clearable:""},model:{value:t.DirectAccount,callback:function(e){t.DirectAccount=e},expression:"DirectAccount"}})],1)],1),n("div",{staticClass:"input_user"},[n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v(t._s(t.$t("register.pwd")))])]),n("van-cell-group",[n("van-field",{attrs:{placeholder:t.$t("register.tipsPwd"),clearable:"",type:t.pwdType,icon:t.incoType},on:{"click-icon":t.checkType},model:{value:t.PWD,callback:function(e){t.PWD=e},expression:"PWD"}})],1)],1),n("van-button",{staticClass:"login_button",attrs:{type:"danger",size:"large"},on:{click:t.Register}},[t._v(t._s(t.$t("register.goRegister")))])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("手机号")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("姓名")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input_title"},[n("span",{staticClass:"money"},[t._v("推荐人")])])}],c=(n("386d"),n("28a5"),n("6d67"),n("4f37"),n("96cf"),n("1da1")),a=n("d4ec"),s=n("bee2"),o=n("99de"),u=n("7e84"),l=n("262e"),f=n("9ab4"),p=n("60a3"),h=n("ef25"),v=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(o["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.pwdType="password",t.incoType="closed-eye",t.Phone="",t.PWD="123456",t.Account="",t.Name="",t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"wPhone",value:function(t,e){this.Account==e&&(this.Account=t)}},{key:"checkType",value:function(){"eye-o"==this.incoType?(this.incoType="closed-eye",this.pwdType="password"):(this.incoType="eye-o",this.pwdType="text")}},{key:"onClickLeft",value:function(){this.$router.back()}},{key:"Register",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(""!=this.Account.trim()&&""!=this.PWD.trim()){t.next=3;break}return this.$toast(this.$t("Public.accountOrPWD")),t.abrupt("return");case 3:if(""!=this.Phone.trim()){t.next=6;break}return this.$toast(this.$t("UpdatePhone.totastOne")),t.abrupt("return");case 6:if(""!=this.Name.trim()){t.next=9;break}return this.$toast(this.$t("register.name")),t.abrupt("return");case 9:if(0!=this.Account){t.next=12;break}return this.$toast(this.$t("register.name")),t.abrupt("return");case 12:return t.next=14,h["a"].register({Account:this.Account,Name:this.Name,DirectAccount:this.DirectAccount,Phone:this.Phone,PWD:this.PWD});case 14:this.$toast(this.$t("register.tipsSuccess")),this.Phone="",this.PWD="123456",this.Account="",this.Name="";case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"link",get:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+"?Account="+this.DirectAccount+window.location.hash}},{key:"DirectAccount",get:function(){var t="",e=window.location.search.substr(1).split("&").map(function(t){return t.split("=")});if(e.length>0)for(var n=0;n<e.length;n++)"Account"==e[n][0]&&(t=e[n][1]);return!t&&this.$store.state.Users.Login.Info&&(t=this.$store.state.Users.Login.Info.Account),t||(t="推荐人错误，请重新获取地址"),t}}]),e}(p["c"]);f["a"]([Object(p["d"])("Phone")],v.prototype,"wPhone",null),v=f["a"]([Object(p["a"])({components:{Lang:function(t){return n.e("chunk-ba9363fe").then(function(){var e=[n("fab4")];t.apply(null,e)}.bind(this)).catch(n.oe)}}})],v);var d=v,b=d,g=(n("0738"),n("b2b1"),n("2877")),x=Object(g["a"])(b,r,i,!1,null,"5fa65b5b",null);x.options.__file="Register.vue";e["default"]=x.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8dd4":function(t,e,n){},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),c=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[c])?!!e:"RegExp"==i(t))}},b0c5:function(t,e,n){"use strict";var r=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b2b1:function(t,e,n){"use strict";var r=n("501e"),i=n.n(r);i.a},cd1c:function(t,e,n){var r=n("e853");t.exports=function(t,e){return new(r(t))(e)}},e853:function(t,e,n){var r=n("d3f4"),i=n("1169"),c=n("2b4c")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?Array:e}}}]);