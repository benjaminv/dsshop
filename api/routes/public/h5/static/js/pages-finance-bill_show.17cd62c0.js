(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-finance-bill_show"],{"08f7":function(t,e,a){"use strict";var i=a("f292"),n=a.n(i);n.a},"39b3":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),s=i(a("cf68")),o={components:{},data:function(){return{details:[]}},onLoad:function(t){this.getList(t.id)},methods:{getList:function(t){var e=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=e,t>0&&s.default.getDetails(t,{},(function(t){i.details=t}));case 2:case"end":return a.stop()}}),a)})))()}}};e.default=o},"70a7":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-324ec8b7]{background-color:#f7f7f7;padding-bottom:%?30?%}.cu-avatar .avatar-text[data-v-324ec8b7]{font-size:18px}body.?%PAGE?%[data-v-324ec8b7]{background-color:#f7f7f7}',""]),t.exports=e},8649:function(t,e,a){"use strict";a.r(e);var i=a("b426"),n=a("9287");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("08f7");var o,r=a("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"324ec8b7",null,!1,i["a"],o);e["default"]=u.exports},9287:function(t,e,a){"use strict";a.r(e);var i=a("39b3"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},b426:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"bg-white text-center padding-top padding-bottom"},[0===t.details.type?[a("v-uni-view",{staticClass:"cu-avatar round lg bg-green margin-bottom"},[a("v-uni-text",{staticClass:"avatar-text"},[t._v("收")])],1)]:1===t.details.type?[a("v-uni-view",{staticClass:"cu-avatar round lg bg-red margin-bottom"},[a("v-uni-text",{staticClass:"avatar-text"},[t._v("支")])],1)]:t._e(),a("v-uni-view",{staticClass:"text-lg margin-bottom"},[a("v-uni-text",[t._v(t._s(t.details.remark))])],1),a("v-uni-view",[a("v-uni-text",{staticClass:"text-lg text-bold margin-bottom"},[0===t.details.type?[t._v("+"+t._s(t._f("1000")(t.details.money_show)))]:1===t.details.type?[t._v("-"+t._s(t._f("1000")(t.details.money_show)))]:t._e()],2)],1)],2),t.details.good_indent?a("v-uni-view",{staticClass:"bg-white text-center margin-top-sm"},[a("v-uni-view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[a("v-uni-view",{staticClass:"flex-sub padding-sm"},[t._v("订单单号")]),a("v-uni-view",{staticClass:"flex-twice padding-sm text-left"},[t._v(t._s(t.details.good_indent.identification))])],1),a("v-uni-view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[a("v-uni-view",{staticClass:"flex-sub padding-sm"},[t._v("订单备注")]),a("v-uni-view",{staticClass:"flex-twice padding-sm text-left"},[t._v(t._s(t.details.good_indent.remark))])],1),a("v-uni-view",{staticClass:"flex  p-xs margin-bottom-sm mb-sm"},[a("v-uni-view",{staticClass:"flex-sub padding-sm"},[t._v("收支日期")]),a("v-uni-view",{staticClass:"flex-twice padding-sm text-left"},[t._v(t._s(t.details.created_at))])],1)],1):t._e()],1)},s=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}))},f292:function(t,e,a){var i=a("70a7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0b3661c7",i,!0,{sourceMap:!1,shadowMode:!1})}}]);