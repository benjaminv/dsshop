(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-userinfo-userinfo"],{"0143":function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("2edd")),s={goLogin:function(e,t,n){a.default.setPostMessage("login",e,"登录中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},goRegister:function(e,t,n){a.default.setPostMessage("register",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},findPassword:function(e,t,n){a.default.setPostMessage("findPassword",e,"处理中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},goWxLogin:function(e,t,n){a.default.setPost("wxlogin",e,(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},getRegisterCellphoneCode:function(e,t,n){a.default.setPost("getRegisterCellphoneCode",e,(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},logout:function(e,t,n){a.default.setPostMessage("logout",{},"退出中",(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},user:function(e,t){a.default.setGetMessage("user",{},"加载中",(function(t){e(t)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))},setUser:function(e,t,n){a.default.setPost("user",e,(function(e){t(e)}),(function(e){uni.showToast({title:e.message,icon:"none",duration:2e3})}))}};t.default=s},"0d3f":function(e,t,n){"use strict";var i=n("892a"),a=n.n(i);a.a},"25ab":function(e,t,n){"use strict";var i,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"list-cell b-b m-t",attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setPortrait.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cell-tit"},[e._v("头像")]),n("v-uni-view",{staticClass:"action"},[e.user.portrait?n("v-uni-view",{staticClass:"cu-avatar round",style:"background-image:url("+e.user.portrait+");"}):e._e()],1),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"data-target":"DialogModal1","hover-class":"cell-hover","hover-stay-time":50},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cell-tit"},[e._v("昵称")]),n("v-uni-view",{staticClass:"action"},[e._v(e._s(e.user.nickname?e.user.nickname:"未设置"))]),n("v-uni-text",{staticClass:"cell-more yticon icon-you"})],1),n("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==e.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[e._v("昵称")]),n("v-uni-view",{staticClass:"action",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl"},[n("v-uni-input",{staticClass:"input",attrs:{placeholder:"昵称","placeholder-class":"placeholder",maxlength:"60"},model:{value:e.user.nickname,callback:function(t){e.$set(e.user,"nickname",t)},expression:"user.nickname"}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-red text-red",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.hideModal.apply(void 0,arguments)}}},[e._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-red margin-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setUser(1)}}},[e._v("确定")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"list-cell b-b",attrs:{"hover-class":"cell-hover","hover-stay-time":50}},[n("v-uni-text",{staticClass:"cell-tit"},[e._v("手机号")]),n("v-uni-view",{staticClass:"action"},[e._v(e._s(e.user.cellphone))])],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}))},"2edd":function(e,t,n){(function(t){function i(e,t,n,i,a,s){this.requestLoading(e,t,n,i,"",a,s)}function a(e,t,n,i){this.requestLoading(e,"get",t,"","",n,i)}function s(e,t,n,i,a){this.requestLoading(e,"get",t,"",n,i,a)}function o(e,t,n,i){this.requestLoading(e,"post",t,"","",n,i)}function u(e,t,n,i,a){this.requestLoading(e,"post",t,"",n,i,a)}function c(e,t,n,i){this.requestLoading(e,"put",t,"","",n,i)}function l(e,t,n,i,a){this.requestLoading(e,"put",t,"",n,i,a)}function r(e,t,n,i){this.requestLoading(e,"delete",t,"","",n,i)}function d(e,t,n,i,a){this.requestLoading(e,"delete",t,"",n,i,a)}function f(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}function g(){var e=uni.getStorageSync("applyDsshopSecret");uni.login({success:function(n){n.code?uni.request({url:e.host+"wxlogin",data:{code:n.code},method:"POST",header:{"Content-Type":"application/json","apply-secret":uni.getStorageSync("applyDsshopSecret").secret},success:function(e){200===e.statusCode?e.data.openid&&(uni.setStorageSync("applyDsshopSession_key",e.data.session_key),uni.setStorageSync("applyDsshopOpenid",e.data.openid)):uni.showToast({icon:"none",title:e.data.message,duration:2e3})},fail:function(e){uni.showToast({title:"服务器无响应",duration:2e3})}}):t.log("无响应")}})}function p(e,t,n,i,a,s,o){uni.showNavigationBarLoading(),""!=a&&uni.showLoading({title:a});var u=uni.getStorageSync("dsshopApplytoken");f("api_token")&&(u=f("api_token")),uni.request({url:uni.getStorageSync("applyDsshopSecret").host+e,data:n,header:i||{"content-type":"application/json","apply-secret":uni.getStorageSync("applyDsshopSecret").secret,openid:uni.getStorageSync("applyDsshopOpenid"),Authorization:"Bearer "+u},method:t||"get",success:function(e){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),200==e.statusCode?s(e.data):500==e.statusCode?(o({message:"服务器异常，请重新尝试"}),g()):302==e.statusCode?(o({message:"登录超时，请重新登录"}),g()):401==e.statusCode?o({message:e.data.message}):o({message:"服务器异常，请重新尝试"})},fail:function(e){uni.hideNavigationBarLoading(),""!=a&&uni.hideLoading(),o({message:"服务器异常"})},complete:function(e){}})}n("4d63"),n("ac1f"),n("25f0"),n("5319"),e.exports={request:i,setGet:a,setGetMessage:s,setPost:o,setPostMessage:u,setPut:c,setPutMessage:l,setDelete:r,setDeleteMessage:d,requestLoading:p}}).call(this,n("5a52")["default"])},"3c1a":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文章场景相关 */uni-page-body[data-v-02d940d6]{background:#f8f8f8}.list-cell[data-v-02d940d6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.list-cell.log-out-btn[data-v-02d940d6]{margin-top:%?40?%}.list-cell.log-out-btn .cell-tit[data-v-02d940d6]{color:#fa436a;text-align:center;margin-right:0}.list-cell.cell-hover[data-v-02d940d6]{background:#fafafa}.list-cell.b-b[data-v-02d940d6]:after{left:%?30?%}.list-cell.m-t[data-v-02d940d6]{margin-top:%?16?%}.list-cell .cell-more[data-v-02d940d6]{-webkit-align-self:baseline;align-self:baseline;font-size:%?32?%;color:#909399;margin-left:%?10?%}.list-cell .cell-tit[data-v-02d940d6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133;margin-right:%?10?%}.list-cell .cell-tip[data-v-02d940d6]{font-size:%?28?%;color:#909399}.list-cell uni-switch[data-v-02d940d6]{-webkit-transform:translateX(%?16?%) scale(.84);transform:translateX(%?16?%) scale(.84)}body.?%PAGE?%[data-v-02d940d6]{background:#f8f8f8}',""]),e.exports=t},"892a":function(e,t,n){var i=n("3c1a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("990eb3ba",i,!0,{sourceMap:!1,shadowMode:!1})},ae4e:function(e,t,n){"use strict";var i=n("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("0143")),s={data:function(){return{user:{},modalName:null}},onLoad:function(){this.getUser()},methods:{getUser:function(){var e=this;a.default.user((function(t){e.user=t}))},setPortrait:function(){this.ChooseImage()},ChooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],success:function(t){uni.uploadFile({url:uni.getStorageSync("applyDsshopSecret").host+"uploadPictures",filePath:t.tempFilePaths[0],name:"file",header:{"apply-secret":uni.getStorageSync("applyDsshopSecret").secret,Authorization:"Bearer "+uni.getStorageSync("dsshopApplytoken")},formData:{type:1,size:512e3},success:function(t){a.default.setUser({portrait:t.data},(function(t){e.user.portrait=t}))},fail:function(t){return e.$api.msg(t.message),!1}})}})},setUser:function(e){var t=this,n={};1===e&&(n={nickname:this.user.nickname}),a.default.setUser(n,(function(e){t.hideModal()}))},showModal:function(e){this.modalName=e.currentTarget.dataset.target},hideModal:function(e){this.modalName=null}}};t.default=s},b5dc:function(e,t,n){"use strict";n.r(t);var i=n("25ab"),a=n("d3ea");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("0d3f");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"02d940d6",null,!1,i["a"],o);t["default"]=c.exports},d3ea:function(e,t,n){"use strict";n.r(t);var i=n("ae4e"),a=n.n(i);for(var s in i)"default"!==s&&function(e){n.d(t,e,(function(){return i[e]}))}(s);t["default"]=a.a}}]);