(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b51e8f"],{4614:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Row",[s("Col",{attrs:{span:"12"}},[s("blockquote",{staticClass:"layui-elem-quote"},[s("div",{staticClass:"layui-inline"},[s("div",{staticClass:"layui-input-inline"},[s("Input",{attrs:{placeholder:"请输入关键字"},model:{value:t.Where.Keyword,callback:function(e){t.$set(t.Where,"Keyword",e)},expression:"Where.Keyword"}})],1),s("Button",{attrs:{type:"info"}},[s("Icon",{attrs:{icon:"search"}}),t._v("条件查询")],1)],1),s("div",{staticClass:"layui-inline"},[t.canAdd?s("Button",{on:{click:function(e){t.add(t.EmptyTeamConfig)}}},[s("Icon",{attrs:{icon:"add-circle"}}),t._v("添加")],1):t._e()],1)])]),s("Col",{attrs:{span:"12"}},[s("Table",{staticClass:"layui-table"},[s("thead",[s("tr",[s("td",[t._v("编号")]),s("td",[t._v("TCID")]),s("td",[t._v("从几代开始")]),s("td",[t._v("到几代结束")]),s("td",[t._v("津贴占比")]),s("td",[t._v("CTime")]),s("td",[t._v("UTime")]),s("td",[t._v("操作")])])]),s("tbody",t._l(t.Result.L,function(e,a){return s("tr",{key:a,class:{"tr-select":a==t.Table.Index}},[s("td",[t._v(t._s(a+1))]),s("td",[t._v(t._s(e.TCID))]),s("td",[t._v(t._s(e.StartLevel))]),s("td",[t._v(t._s(e.EndLevel))]),s("td",[t._v(t._s(e.Profit))]),s("td",[t._v(t._s(e.CTime))]),s("td",[t._v(t._s(e.UTime))]),s("td",[s("ButtonGroup",[t.canEdit?s("Button",{attrs:{type:"info",size:"xs"},on:{click:function(s){t.edit(e)}}},[s("Icon",{attrs:{icon:"edit"}}),t._v("编辑")],1):t._e()],1)],1)])}),0),s("tfoot",[s("tr",[s("td",{attrs:{colspan:"9999"}},[s("div",[t._v("共"+t._s(t.Result.T)+"条数据")]),s("Page",{attrs:{total:t.Result.T,limit:t.Where.N},model:{value:t.Where.P,callback:function(e){t.$set(t.Where,"P",e)},expression:"Where.P"}})],1)])])])],1),s("TeamConfigEdit",{attrs:{Data:t.Modal.Data,Type:t.Modal.Type,Code:t.Vuex.Code},model:{value:t.Modal.Show,callback:function(e){t.$set(t.Modal,"Show",e)},expression:"Modal.Show"}})],1)},i=[],o=s("7146"),n=s("543f"),l=s("9adb"),r=s("535d"),d=s("ce09");let c=class extends r["b"]{constructor(){super(...arguments),this.EmptyTeamConfig=new d["a"]}mounted(){super._mounted()}created(){this.Vuex.Code="TeamConfig",this.Vuex.PK="TCID",this.Where.Sort="TCID ASC",this.Vuex.API=l["a"],this.Import.Map={},this.Export.Map={},this.Operate.Add=!0,this.Operate.Del=!1,this.Operate.Edit=!0,super._created()}beforeDestroy(){super._beforeDestroy()}};c=o["a"]([Object(n["a"])({components:{TeamConfigEdit:t=>s.e("chunk-2d0df267").then(function(){var e=[s("894d")];t.apply(null,e)}.bind(this)).catch(s.oe)}})],c);var u=c,h=u,p=s("2877"),_=Object(p["a"])(h,a,i,!1,null,null,null);_.options.__file="TeamConfigList.vue";e["default"]=_.exports},ce09:function(t,e,s){"use strict";s.d(e,"a",function(){return a});class a{constructor(){this.TCID=0,this.StartLevel=0,this.EndLevel=0,this.Profit=0,this.CTime=new Date,this.UTime=new Date}}}}]);