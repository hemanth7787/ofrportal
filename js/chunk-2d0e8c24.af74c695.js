(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"8"}},[e("b-card-group",[e("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[t.alert.message?e("div",{class:"alert "+t.alert.type},[t._v(t._s(t.alert.message))]):t._e(),e("b-card-body",[e("b-form",{on:{submit:function(s){return s.preventDefault(),t.handleSubmit(s)}}},[e("h1",[t._v("Login")]),e("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),e("b-input-group",{staticClass:"mb-3"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-user"})])],1),e("b-form-input",{staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.username},attrs:{type:"text",name:"username",placeholder:"Username",autocomplete:"username"},model:{value:t.username,callback:function(s){t.username=s},expression:"username"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&!t.username,expression:"submitted && !username"}],staticClass:"invalid-feedback"},[t._v("Username is required")])],1),e("b-input-group",{staticClass:"mb-4"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),e("b-form-input",{staticClass:"form-control",class:{"is-invalid":t.submitted&&!t.password},attrs:{type:"password",name:"password",placeholder:"Password",autocomplete:"current-password"},model:{value:t.password,callback:function(s){t.password=s},expression:"password"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.submitted&&!t.password,expression:"submitted && !password"}],staticClass:"invalid-feedback"},[t._v("Password is required")])],1),e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-button",{staticClass:"px-4",attrs:{variant:"primary",type:"submit",disabled:t.status.loggingIn}},[t._v("Login")])],1),e("b-col",{staticClass:"text-right",attrs:{cols:"6"}},[e("b-button",{staticClass:"px-0",attrs:{variant:"link"}},[t._v("Forgot password?")])],1)],1)],1)],1)],1),e("b-card",{staticClass:"text-white bg-primary py-5 d-md-down-none",staticStyle:{width:"44%"},attrs:{"no-body":""}},[e("b-card-body",{staticClass:"text-center"},[e("div",[e("h2",[t._v("Sign up")]),e("p",[t._v("Register using reference number")])])])],1)],1)],1)],1)],1)])},r=[],i=e("cebc"),n=e("2f62"),o={data:function(){return{username:"",password:"",submitted:!1}},computed:Object(i["a"])({},Object(n["c"])("account",["status"]),Object(n["c"])({alert:function(t){return t.alert}})),created:function(){this.logout()},methods:Object(i["a"])({},Object(n["b"])("account",["login","logout"]),{handleSubmit:function(t){this.submitted=!0;var s=this.username,e=this.password;s&&e&&this.login({username:s,password:e})}})},c=o,u=e("2877"),l=Object(u["a"])(c,a,r,!1,null,null,null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0e8c24.af74c695.js.map