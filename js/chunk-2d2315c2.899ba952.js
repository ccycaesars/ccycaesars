(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2315c2"],{efe0:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Modal",{staticClass:"modal",attrs:{title:("add"==t.Type?"添加":"修改")+"提现表列表",options:t.Options},model:{value:t.ShowModal,callback:function(a){t.ShowModal=a},expression:"ShowModal"}},[e("Form",{attrs:{model:t.EditData}},[e("Row",[e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"用户编号"}},[e("Input",{attrs:{required:!0,placeholder:"请输入用户编号"},model:{value:t.EditData.UID,callback:function(a){t.$set(t.EditData,"UID",t._n(a))},expression:"EditData.UID"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"申请金额"}},[e("Input",{attrs:{required:!0,placeholder:"请输入申请金额"},model:{value:t.EditData.Money,callback:function(a){t.$set(t.EditData,"Money",t._n(a))},expression:"EditData.Money"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"可提金额"}},[e("Input",{attrs:{required:!0,placeholder:"请输入可提金额"},model:{value:t.EditData.Balance,callback:function(a){t.$set(t.EditData,"Balance",t._n(a))},expression:"EditData.Balance"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"税费金额"}},[e("Input",{attrs:{required:!0,placeholder:"请输入税费金额"},model:{value:t.EditData.CashTax,callback:function(a){t.$set(t.EditData,"CashTax",t._n(a))},expression:"EditData.CashTax"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"成功金额"}},[e("Input",{attrs:{required:!0,placeholder:"请输入成功金额"},model:{value:t.EditData.Successed,callback:function(a){t.$set(t.EditData,"Successed",t._n(a))},expression:"EditData.Successed"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"状态"}},[e("Input",{attrs:{required:!0,placeholder:"请输入状态"},model:{value:t.EditData.Status,callback:function(a){t.$set(t.EditData,"Status",t._n(a))},expression:"EditData.Status"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"银行卡号"}},[e("Input",{attrs:{required:!0,placeholder:"请输入银行卡号"},model:{value:t.EditData.Account,callback:function(a){t.$set(t.EditData,"Account",t._n(a))},expression:"EditData.Account"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"持卡人"}},[e("Input",{attrs:{required:!0,placeholder:"请输入持卡人"},model:{value:t.EditData.Name,callback:function(a){t.$set(t.EditData,"Name","string"===typeof a?a.trim():a)},expression:"EditData.Name"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"申请时间"}},[e("Input",{attrs:{required:!0,placeholder:"请输入申请时间"},model:{value:t.EditData.CTime,callback:function(a){t.$set(t.EditData,"CTime","string"===typeof a?a.trim():a)},expression:"EditData.CTime"}})],1)],1),e("Col",{attrs:{span:"6",sm:"12",md:"6",xs:"12",lg:"6"}},[e("FormItem",{attrs:{label:"确认时间"}},[e("Input",{attrs:{required:!0,placeholder:"请输入确认时间"},model:{value:t.EditData.PayTime,callback:function(a){t.$set(t.EditData,"PayTime","string"===typeof a?a.trim():a)},expression:"EditData.PayTime"}})],1)],1)],1)],1)],1)},l=[],i=e("7146"),r=e("543f"),o=e("535d"),n=e("0700"),d=e("ee27");let c=class extends o["a"]{constructor(){super(...arguments),this.EditData=new d["a"],this.Options={area:["80%","80%"],maxmin:!0,btn:["确定","取消"],yes:this.submit,btn2:this.cancel()}}watchValue(t){t?(this.EditData=Object(n["cloneDeep"])(this.Data),this.listenKey()):this.removeAll()}submit(){"add"==this.Type?this.add():this.edit()}};i["a"]([Object(r["d"])("value")],c.prototype,"watchValue",null),c=i["a"]([Object(r["a"])({})],c);var m=c,u=m,p=e("2877"),D=Object(p["a"])(u,s,l,!1,null,null,null);D.options.__file="CashOrderEdit.vue";a["default"]=D.exports}}]);