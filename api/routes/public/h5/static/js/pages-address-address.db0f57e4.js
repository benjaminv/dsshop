(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-address"],{"04f1":function(e,t,n){var i=n("618b");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("04d0ffc6",i,!0,{sourceMap:!1,shadowMode:!1})},"1a27":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content b-t"},[e._l(e.addressList,(function(t,i){return n("v-uni-view",{key:i,staticClass:"list b-b",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.checkAddress(t)}}},[n("v-uni-view",{staticClass:"wrapper"},[n("v-uni-view",{staticClass:"address-box"},[t.defaults?n("v-uni-text",{staticClass:"tag"},[e._v("默认")]):e._e(),n("v-uni-text",{staticClass:"address"},[e._v(e._s(t.location)+"("+e._s(t.address)+") "+e._s(t.house))])],1),n("v-uni-view",{staticClass:"u-box"},[n("v-uni-text",{staticClass:"name"},[e._v(e._s(t.name))]),n("v-uni-text",{staticClass:"mobile"},[e._v(e._s(t.cellphone))])],1)],1),n("v-uni-text",{staticClass:"yticon icon-bianji",on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.addAddress("edit",t)}}}),n("v-uni-text",{staticClass:"cuIcon-delete",on:{click:function(n){n.stopPropagation(),arguments[0]=n=e.$handleEvent(n),e.deleteAddress(i,t)}}})],1)})),n("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addAddress("add")}}},[e._v("新增地址")])],2)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"1c02":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("2edd")),s={getList:function(e,t,n){a.default.setGetMessage("shipping",e,"加载中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getOne:function(e,t,n){a.default.setPostMessage("shippingOne",e,"加载中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getDetails:function(e,t,n,i){a.default.setGetMessage("shipping/"+e,t,"加载中",(function(e){n(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},createSubmit:function(e,t,n){a.default.setPostMessage("shipping",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},updateSubmit:function(e,t,n){a.default.setPostMessage("shipping/"+e.id,e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},deleteSubmit:function(e,t,n){a.default.setPostMessage("shippingDelete/"+e,{},"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},checkSubmit:function(e,t,n){a.default.setPostMessage("shippingCheck",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))}};t.default=s},"2edd":function(e,t,n){(function(t){function i(e,t,n,i,a,s){this.requestLoading(e,t,n,i,"",a,s)}function a(e,t,n,i){this.requestLoading(e,"get",t,"","",n,i)}function s(e,t,n,i,a){this.requestLoading(e,"get",t,"",n,i,a)}function o(e,t,n,i){this.requestLoading(e,"post",t,"","",n,i)}function d(e,t,n,i,a){this.requestLoading(e,"post",t,"",n,i,a)}function c(e,t,n,i){this.requestLoading(e,"put",t,"","",n,i)}function u(e,t,n,i,a){this.requestLoading(e,"put",t,"",n,i,a)}function r(e,t,n,i){this.requestLoading(e,"delete",t,"","",n,i)}function l(e,t,n,i,a){this.requestLoading(e,"delete",t,"",n,i,a)}function f(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function p(){var e=uni.getStorageSync("applyDsshopSecret");uni.login({success:function(n){n.code?uni.request({url:e.host+"wxlogin",data:{code:n.code},method:"POST",header:{"Content-Type":"application/json","apply-secret":uni.getStorageSync("applyDsshopSecret").secret},success:function(e){200===e.statusCode?e.data.openid&&(uni.setStorageSync("applyDsshopSession_key",e.data.session_key),uni.setStorageSync("applyDsshopOpenid",e.data.openid)):uni.showToast({icon:"none",title:e.data.message,duration:2e3})},fail:function(e){uni.showToast({title:"服务器无响应",duration:2e3})}}):t.log("无响应")}})}function g(e,t,n,i,a,s,o){uni.showNavigationBarLoading(),""!=a&&uni.showLoading({title:a});var d=uni.getStorageSync("dsshopApplytoken");f("api_token")&&(d=f("api_token")),uni.request({url:uni.getStorageSync("applyDsshopSecret").host+e,data:n,header:i||{"content-type":"application/json","apply-secret":uni.getStorageSync("applyDsshopSecret").secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+d},method:t||"get",success:function(e){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),200==e.statusCode?s(e.data):500==e.statusCode?(o({message:"服务器异常，请重新尝试"}),p()):302==e.statusCode?(o({message:"登录超时，请重新登录"}),p()):401==e.statusCode?o({message:e.data.message}):o({message:"服务器异常，请重新尝试"})},fail:function(e){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),o({message:"服务器异常"})},complete:function(e){}})}n("4d63"),n("ac1f"),n("25f0"),n("5319"),e.exports={request:i,setGet:a,setGetMessage:s,setPost:o,setPostMessage:d,setPut:c,setPutMessage:u,setDelete:r,setDeleteMessage:l,requestLoading:g}}).call(this,n("5a52")["default"])},4952:function(e,t,n){"use strict";var i=n("04f1"),a=n.n(i);a.a},"618b":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-11d9ed21]{padding-bottom:%?120?%}.content[data-v-11d9ed21]{position:relative}.list[data-v-11d9ed21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?20?% %?30?%;background:#fff;position:relative}.wrapper[data-v-11d9ed21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.address-box[data-v-11d9ed21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-box .tag[data-v-11d9ed21]{font-size:%?24?%;color:#fa436a;margin-right:%?10?%;background:#fffafb;border:1px solid #ffb4c7;border-radius:%?4?%;padding:%?4?% %?10?%;min-width:%?80?%;line-height:1}.address-box .address[data-v-11d9ed21]{font-size:%?30?%;color:#303133}.u-box[data-v-11d9ed21]{font-size:%?28?%;color:#909399;margin-top:%?16?%}.u-box .name[data-v-11d9ed21]{margin-right:%?30?%}.icon-bianji[data-v-11d9ed21]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;font-size:%?40?%;color:#909399;padding-left:%?30?%}.add-btn[data-v-11d9ed21]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?16?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}.cuIcon-delete[data-v-11d9ed21]{padding-left:%?10?%;padding-top:%?18?%;height:%?80?%;font-size:%?40?%;color:#909399}',""]),e.exports=t},"912d":function(e,t,n){"use strict";n.r(t);var i=n("1a27"),a=n("eb3f");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("4952");var o,d=n("f0c5"),c=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,"11d9ed21",null,!1,i["a"],o);t["default"]=c.exports},b9ca:function(e,t,n){"use strict";var i=n("ee27");n("99af"),n("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("1c02")),s={data:function(){return{source:0,addressList:[],type:0}},onLoad:function(e){e.type&&(this.type=e.type),this.loadData()},methods:{loadData:function(){var e=this;a.default.getList({},(function(t){e.addressList=t.data}))},checkAddress:function(e){var t=this;e.defaults?(t.$api.prePage().refreshAddress(e),uni.navigateBack()):uni.showModal({content:"设为默认地址？",success:function(n){n.confirm?a.default.checkSubmit(e,(function(n){"1"===t.type?(t.$api.prePage().refreshAddress(e),uni.navigateBack()):(t.$api.msg("设置成功"),t.loadData())})):"1"===t.type&&(t.$api.prePage().refreshAddress(e),uni.navigateBack())}}),1==this.source&&(this.$api.prePage().addressData=e,uni.navigateBack())},addAddress:function(e,t){uni.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat(JSON.stringify(t))})},refreshList:function(){this.loadData()},deleteAddress:function(e,t){var n=this,i=this;uni.showModal({content:"确定要删除该地址吗？",success:function(s){if(s.confirm){if(t.defaults)return n.$api.msg("默认收货地址无法删除"),!1;a.default.deleteSubmit(t.id,(function(t){i.addressList.splice(e,1)}))}}})}}};t.default=s},eb3f:function(e,t,n){"use strict";n.r(t);var i=n("b9ca"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a}}]);