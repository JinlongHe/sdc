webpackJsonp([7],{IhT5:function(n,e,t){"use strict";function s(n){t("ryaH")}Object.defineProperty(e,"__esModule",{value:!0});var i=t("Dd8w"),o=t.n(i),A=t("NYxO"),r=(o()({},Object(A.b)({isRegAuth:function(n){return n.user.isRegAuth},isReg:function(n){return n.user.isReg}})),{computed:o()({},Object(A.b)({isRegAuth:function(n){return n.user.isRegAuth},isReg:function(n){return n.user.isReg}})),methods:{setType:function(n){this.$store.commit("SET_REG_TYPE",n);var e="student"===n?"1":"2";location.href="http://www.zhiheyikaoqin.cn/wechat/authorize?returnUrl=/book/index.html&role="+e+"&path=register"}}}),l=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"sel-type"},[t("div",{staticClass:"sel-overlay"}),n._v(" "),t("div",{staticClass:"sel-body"},[t("div",{staticClass:"sel-header"},[n._v("我是：")]),n._v(" "),t("div",{staticClass:"sel-box student",on:{click:function(e){n.setType("teacher")}}},[n._m(0)]),n._v(" "),t("div",{staticClass:"sel-box teacher",on:{click:function(e){n.setType("student")}}},[n._m(1)])])])},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"sel-box-content"},[t("i",{staticClass:"iconfont icon-laoshi"}),n._v(" "),t("div",{staticClass:"sel-box-text"},[n._v("老师")])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"sel-box-content"},[t("i",{staticClass:"iconfont icon-nanxuesheng"}),n._v(" "),t("div",{staticClass:"sel-box-text"},[n._v("学生")])])}],c={render:l,staticRenderFns:a},C=c,p=t("VU/8"),h=s,x=p(r,C,!1,h,null,null);e.default=x.exports},"ap+V":function(n,e,t){e=n.exports=t("FZ+f")(!0),e.push([n.i,"\n.green {\n  color: #03b349;\n}\n.sel-type {\n  width: 100%;\n  height: 100%;\n}\n.sel-overlay {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n.sel-body {\n  position: fixed;\n  height: 200px;\n  top: 50%;\n  margin: -100px 0 0 0;\n  width: 100%;\n}\n.sel-header {\n  color: #fff;\n  position: absolute;\n  top: -40px;\n  font-size: 14px;\n  margin: 0 40px;\n}\n.sel-box {\n  width: 49%;\n  display: inline-block;\n  text-align: center;\n  height: 150px;\n}\n.sel-box-content {\n  margin: 0 20px 0 40px;\n  background: #fff;\n  height: 70px;\n  padding: 20px 30px 30px;\n  border-radius: 10px;\n}\n.sel-box:last-child .sel-box-content {\n    margin-left: 20px;\n    margin-right: 40px;\n}\n.sel-box-content .iconfont {\n    font-size: 40px;\n    color: #03b349;\n}\n","",{version:3,sources:["/Users/lh/work/zk/fe/src/register/selType.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;EACb,YAAY;EACZ,+BAA+B;CAChC;AACD;EACE,gBAAgB;EAChB,cAAc;EACd,SAAS;EACT,qBAAqB;EACrB,YAAY;CACb;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,sBAAsB;EACtB,iBAAiB;EACjB,aAAa;EACb,wBAAwB;EACxB,oBAAoB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,gBAAgB;IAChB,eAAe;CAClB",file:"selType.vue",sourcesContent:["\n.green {\n  color: #03b349;\n}\n.sel-type {\n  width: 100%;\n  height: 100%;\n}\n.sel-overlay {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n.sel-body {\n  position: fixed;\n  height: 200px;\n  top: 50%;\n  margin: -100px 0 0 0;\n  width: 100%;\n}\n.sel-header {\n  color: #fff;\n  position: absolute;\n  top: -40px;\n  font-size: 14px;\n  margin: 0 40px;\n}\n.sel-box {\n  width: 49%;\n  display: inline-block;\n  text-align: center;\n  height: 150px;\n}\n.sel-box-content {\n  margin: 0 20px 0 40px;\n  background: #fff;\n  height: 70px;\n  padding: 20px 30px 30px;\n  border-radius: 10px;\n}\n.sel-box:last-child .sel-box-content {\n    margin-left: 20px;\n    margin-right: 40px;\n}\n.sel-box-content .iconfont {\n    font-size: 40px;\n    color: #03b349;\n}\n"],sourceRoot:""}])},ryaH:function(n,e,t){var s=t("ap+V");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);t("rjj0")("b7e45d28",s,!0,{})}});
//# sourceMappingURL=7.ea54c835ef9b84fd9ee3.js.map