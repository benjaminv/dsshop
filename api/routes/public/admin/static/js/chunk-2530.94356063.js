(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2530"],{"5wvE":function(t,e,a){"use strict";var i=a("joOG");a.n(i).a},IzYG:function(t,e,a){"use strict";a.r(e);var i=a("t3Un"),n=a("Qyje"),s=a.n(n);function l(t,e){return e=(e=s.a.parse({data:e})).data,Object(i.a)({url:"banner/"+t,method:"DELETE",data:e})}var r=a("X4fA"),o={name:"BannerList",components:{Pagination:a("Mz3J").a},data:function(){return{actionurl:"http://dsshop.dswjcms.com/api/v1/admin/uploadPictures",imgHeaders:{Authorization:"Bearer "+Object(r.a)("access_token")},dialogVisible:!1,ruleForm:[],checkAll:!1,tableKey:0,list:null,total:0,textMap:{update:"修改",create:"添加"},imgData:{type:1,size:512e3},imgProgressPercent:0,loading:!1,listLoading:!1,imgProgress:!1,dialogStatus:"",dialogFormVisible:!1,listQuery:{page:1,limit:10,sort:"+id",activeIndex:"1"},temp:{},rules:{name:[{required:!0,message:"请输入轮播名称",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],state:[{required:!0,message:"请选择状态",trigger:"change"}],sort:[{required:!0,message:"请填写排序",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,function(t){return Object(i.a)({url:"banner",method:"get",params:t})}(this.listQuery).then(function(e){t.list=e.data.data,t.total=e.data.total,t.listLoading=!1})},handleFilter:function(){this.getList()},sortChange:function(t){var e=t.prop,a=t.order;"id"===e?this.sortByID(a):"time"===e&&this.sortByTIME(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},handleSelect:function(t,e){this.listQuery.activeIndex=t,this.handleFilter()},resetTemp:function(){this.temp={state:0,sort:"5",img:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},handleUpdate:function(t){var e=this;this.temp=null,this.temp=t,t.resources&&(this.temp.img=t.resources.img),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleCheckAllChange:function(){this.$refs.multipleTable.toggleAllSelection()},handleSelectionChange:function(t){this.multipleSelection=t},handleDelete:function(t){var e=this;this.$confirm("是否确认删除该内容?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){l(t.id,t).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:e.$t("hint.succeed"),message:"删除成功",type:"success",duration:2e3})})}).catch(function(){})},handleAllDelete:function(){var t=this;this.$confirm("是否确认批量删除内容?",this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){l(0,t.multipleSelection).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:"删除成功",type:"success",duration:2e3})})}).catch(function(){})},createSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&function(t){return t=(t=s.a.parse({data:t})).data,Object(i.a)({url:"banner",method:"POST",data:t})}(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.creatingSuccessful"),type:"success",duration:2e3})})})},updateSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&function(t,e){return e=(e=s.a.parse({data:e})).data,Object(i.a)({url:"banner/"+t,method:"PUT",data:e})}(t.temp.id,t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.updateSuccessful"),type:"success",duration:2e3})})})},handleAvatarSuccess:function(t,e){this.temp.img=e.response,this.imgProgress=!1,this.imgProgressPercent=0},handleProgress:function(t,e){this.imgProgressPercent=t.percent},beforeAvatarUpload:function(t){var e=t.size/1024<500;return-1===["image/jpeg","image/gif","image/png","image/bmp"].indexOf(t.type)?(this.$message.error("请上传正确的图片格式"),!1):(e||this.$message.error("上传头像图片大小不能超过 500KB!"),this.imgProgress=!0,e)}}},c=(a("5wvE"),a("KHd+")),u=Object(c.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.listQuery}},[a("el-form-item",{attrs:{label:"轮播名称"}},[a("el-input",{attrs:{placeholder:"名称",clearable:""},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{placeholder:"类型",clearable:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[a("el-option",{attrs:{label:"首页轮播",value:"0"}}),t._v(" "),a("el-option",{attrs:{label:"首页广告",value:"1"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")])],1)],1),t._v(" "),a("br"),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.CreateBanner,expression:"$store.jurisdiction.CreateBanner"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px",float:"right"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("添加")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange,"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{label:"编号",prop:"id",fixed:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"轮播名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"轮播图片",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.resources?a("el-image",{staticStyle:{width:"200px"},attrs:{src:e.row.resources.img,"preview-src-list":[e.row.resources.img],fit:"contain"}}):a("span",[t._v("无")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"轮播地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.url))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.type_show))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"排序",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.sort))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.state_show))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"时间",align:"center",prop:"goods_sn"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","class-name":"small-padding fixed-width",width:"250",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.EditBanner,expression:"$store.jurisdiction.EditBanner"}],staticStyle:{width:"80px"},attrs:{type:"warning",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.DeleteBanner,expression:"$store.jurisdiction.DeleteBanner"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-operation"},[a("div",{staticClass:"operation"},[a("el-button",{attrs:{size:"mini"},on:{click:t.handleCheckAllChange}},[t._v("全选/反选")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){t.handleAllDelete()}}},[t._v("删除")])],1),t._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],staticClass:"pagination",attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){t.$set(t.listQuery,"page",e)},"update:limit":function(e){t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"轮播名称",prop:"name"}},[a("el-input",{attrs:{maxlength:"16",clearable:""},model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择类型",clearable:""},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},[a("el-option",{attrs:{value:0,label:"首页轮播"}}),t._v(" "),a("el-option",{attrs:{value:1,label:"首页广告"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"图片",prop:"img"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,"on-progress":t.handleProgress,action:t.actionurl,headers:t.imgHeaders,data:t.imgData}},[t.imgProgress?a("span",[a("el-progress",{staticClass:"progress-img",attrs:{percentage:t.imgProgressPercent,type:"circle"}})],1):a("span",[t.temp.img?a("img",{staticClass:"avatar",attrs:{src:t.temp.img}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png/gif文件，且不超过500kb")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"轮播地址",prop:"url"}},[a("el-input",{attrs:{placeholder:"为空不设置",clearable:""},model:{value:t.temp.url,callback:function(e){t.$set(t.temp,"url",e)},expression:"temp.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"是否显示",prop:"state"}},[a("el-radio-group",{model:{value:t.temp.state,callback:function(e){t.$set(t.temp,"state",e)},expression:"temp.state"}},[a("el-radio",{attrs:{label:0}},[t._v("显示")]),t._v(" "),a("el-radio",{attrs:{label:1}},[t._v("隐藏")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-radio-group",{model:{value:t.temp.sort,callback:function(e){t.$set(t.temp,"sort",e)},expression:"temp.sort"}},[a("el-input",{staticStyle:{width:"80px"},attrs:{maxlength:"11",clearable:""},model:{value:t.temp.sort,callback:function(e){t.$set(t.temp,"sort",e)},expression:"temp.sort"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("usuel.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createSubmit():t.updateSubmit()}}},[t._v("确定")])],1)],1)],1)},[],!1,null,null,null);u.options.__file="list.vue";e.default=u.exports},Lcw6:function(t,e,a){"use strict";var i=a("qULk");a.n(i).a},Mz3J:function(t,e,a){"use strict";Math.easeInOutQuad=function(t,e,a,i){return(t/=i/2)<1?a/2*t*t+e:-a/2*(--t*(t-2)-1)+e};var i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function n(t,e,a){var n=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,s=t-n,l=0;e=void 0===e?500:e;!function t(){l+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(l,n,s,e)),l<e?i(t):a&&"function"==typeof a&&a()}()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&n(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&n(0,800)}}},l=(a("Lcw6"),a("KHd+")),r=Object(l.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},[],!1,null,"331ed7d4",null);r.options.__file="index.vue";e.a=r.exports},joOG:function(t,e,a){},qULk:function(t,e,a){}}]);