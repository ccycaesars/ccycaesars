(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c315"],{f1d8:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{staticClass:"modal",attrs:{title:("add"==t.Type?"添加":"修改")+"福利津贴表（团队）列表",options:t.Options},model:{value:t.ShowModal,callback:function(e){t.ShowModal=e},expression:"ShowModal"}},[a("Form",{attrs:{model:t.EditData}},[a("Row",[a("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[a("FormItem",{attrs:{label:"用户编号"}},[a("Input",{attrs:{required:!0,placeholder:"请输入用户编号"},model:{value:t.EditData.UID,callback:function(e){t.$set(t.EditData,"UID",t._n(e))},expression:"EditData.UID"}})],1)],1),a("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[a("FormItem",{attrs:{label:"Money"}},[a("Input",{attrs:{required:!0,placeholder:"请输入Money"},model:{value:t.EditData.Money,callback:function(e){t.$set(t.EditData,"Money",t._n(e))},expression:"EditData.Money"}})],1)],1),a("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[a("FormItem",{attrs:{label:"CTime"}},[a("Input",{attrs:{required:!0,placeholder:"请输入CTime"},model:{value:t.EditData.CTime,callback:function(e){t.$set(t.EditData,"CTime","string"===typeof e?e.trim():e)},expression:"EditData.CTime"}})],1)],1),a("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[a("FormItem",{attrs:{label:"几代"}},[a("Input",{attrs:{required:!0,placeholder:"请输入几代"},model:{value:t.EditData.TeamLevel,callback:function(e){t.$set(t.EditData,"TeamLevel",t._n(e))},expression:"EditData.TeamLevel"}})],1)],1),a("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[a("FormItem",{attrs:{label:"津贴占比"}},[a("Input",{attrs:{required:!0,placeholder:"请输入津贴占比"},model:{value:t.EditData.TeamProfit,callback:function(e){t.$set(t.EditData,"TeamProfit",t._n(e))},expression:"EditData.TeamProfit"}})],1)],1)],1)],1)],1)},s=[],i=a("d4ec"),o=a("bee2"),n=a("99de"),r=a("7e84"),d=a("262e"),c=a("7146"),m=a("543f"),u=a("535d"),p=a("0700"),b=a("fe7b"),h=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(n["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.EditData=new b["a"],t.Options={area:["80%","80%"],maxmin:!0,btn:["确定","取消"],yes:t.submit,btn2:t.cancel()},t}return Object(d["a"])(e,t),Object(o["a"])(e,[{key:"watchValue",value:function(t){t?(this.EditData=Object(p["cloneDeep"])(this.Data),this.listenKey()):this.removeAll()}},{key:"submit",value:function(){"add"==this.Type?this.add():this.edit()}}]),e}(u["a"]);c["a"]([Object(m["d"])("value")],h.prototype,"watchValue",null),h=c["a"]([Object(m["a"])({})],h);var D=h,f=D,E=a("2877"),v=Object(E["a"])(f,l,s,!1,null,null,null);v.options.__file="TeamRecordEdit.vue";e["default"]=v.exports}}]);