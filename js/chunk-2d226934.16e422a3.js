(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d226934"],{e8f1:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{staticClass:"modal",attrs:{title:("add"==t.Type?"添加":"修改")+"奖金记录表列表",options:t.Options},model:{value:t.ShowModal,callback:function(a){t.ShowModal=a},expression:"ShowModal"}},[e("Form",{attrs:{model:t.EditData}},[e("Row",[e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"用户编号"}},[e("Input",{attrs:{required:!0,placeholder:"请输入用户编号"},model:{value:t.EditData.UID,callback:function(a){t.$set(t.EditData,"UID",t._n(a))},expression:"EditData.UID"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"Money"}},[e("Input",{attrs:{required:!0,placeholder:"请输入Money"},model:{value:t.EditData.Money,callback:function(a){t.$set(t.EditData,"Money",t._n(a))},expression:"EditData.Money"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"类型"}},[e("Input",{attrs:{required:!0,placeholder:"请输入类型"},model:{value:t.EditData.Type,callback:function(a){t.$set(t.EditData,"Type",t._n(a))},expression:"EditData.Type"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"比例"}},[e("Input",{attrs:{required:!0,placeholder:"请输入比例"},model:{value:t.EditData.Proportion,callback:function(a){t.$set(t.EditData,"Proportion",t._n(a))},expression:"EditData.Proportion"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"CTime"}},[e("Input",{attrs:{required:!0,placeholder:"请输入CTime"},model:{value:t.EditData.CTime,callback:function(a){t.$set(t.EditData,"CTime","string"===typeof a?a.trim():a)},expression:"EditData.CTime"}})],1)],1)],1)],1)],1)},l=[],o=e("7146"),i=e("543f"),n=e("535d"),r=e("0700"),d=e("90c8");let c=class extends n["a"]{constructor(){super(...arguments),this.EditData=new d["a"],this.Options={area:["80%","80%"],maxmin:!0,btn:["确定","取消"],yes:this.submit,btn2:this.cancel()}}watchValue(t){t?(this.EditData=Object(r["cloneDeep"])(this.Data),this.listenKey()):this.removeAll()}submit(){"add"==this.Type?this.add():this.edit()}};o["a"]([Object(i["d"])("value")],c.prototype,"watchValue",null),c=o["a"]([Object(i["a"])({})],c);var p=c,m=p,u=e("2877"),h=Object(u["a"])(m,s,l,!1,null,null,null);h.options.__file="CashRecordEdit.vue";a["default"]=h.exports}}]);