(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8814"],{"7/3t":function(t,e,a){},ZySA:function(t,e,a){"use strict";var n=a("P2sY"),r=a.n(n),i=(a("jUE0"),{bind:function(t,e){t.addEventListener("click",function(a){var n=r()({},e.value),i=r()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),o=i.ele;if(o){o.style.position="relative",o.style.overflow="hidden";var s=o.getBoundingClientRect(),l=o.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":((l=document.createElement("span")).className="waves-ripple",l.style.height=l.style.width=Math.max(s.width,s.height)+"px",o.appendChild(l)),i.type){case"center":l.style.top=s.height/2-l.offsetHeight/2+"px",l.style.left=s.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(a.pageY-s.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(a.pageX-s.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=i.color,l.className="waves-ripple z-active",!1}},!1)}}),o=function(t){t.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(o)),i.install=o;e.a=i},jUE0:function(t,e,a){},kWfo:function(t,e,a){"use strict";a.r(e);var n=a("P2sY"),r=a.n(n),i=a("wk8/"),o=a("ZySA"),s=a("THBk"),l={name:"ManageList",components:{treeTransfer:a.n(s).a},directives:{waves:o.a},data:function(){var t=this;return{options:[],oldOptions:[],tableKey:0,list:null,total:0,textMap:{update:this.$t("usuel.amend"),create:this.$t("usuel.add")},listLoading:!0,listQuery:{page:1,limit:20,sort:"+id",timeInterval:""},fromData:[],oldFromData:[],toData:[],temp:{roles:"",introduction:"",group:[],groupname:[],oldGroupValue:[],oldGroup:[],rules:[]},dialogFormVisible:!1,dialogStatus:"",adminRules:{roles:[{required:!0,message:this.$t("user.theRoleNameCannotBeEmpty"),trigger:"blur"},{validator:function(e,a,n){/^[A-Za-z]+$/.test(a)?n():n(new Error(t.$t("hint.pleaseEnterLetter")))},trigger:"blur"}],introduction:[{required:!0,message:this.$t("user.theRoleDescriptionCannotBeEmpty"),trigger:"blur"}],rules:[{type:"array",required:!0,message:this.$t("user.pleaseAssignPermissions"),trigger:"blur"}]},downloadLoading:!1,title:[this.$t("usuel.undistributed"),this.$t("usuel.allocated")],mode:"transfer"}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i.k)(this.listQuery).then(function(e){t.list=e.data.data,t.options=e.data.options,t.oldOptions=e.data.options,t.fromData=e.data.fromData,t.oldFromData=e.data.fromData,t.toData=e.data.toData,t.listLoading=!1})},sortChange:function(t){var e=t.prop,a=t.order;"id"===e&&this.sortByID(a)},sortByID:function(t){this.listQuery.sort="ascending"===t?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={roles:"",introduction:"",group:[],groupname:[],oldGroupValue:[],oldGroup:[],rules:[]}},handleCreate:function(){var t=this;this.resetTemp(),this.fromData=this.oldFromData,this.toData=[],this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(i.c)(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.creatingSuccessful"),type:"success",duration:2e3})})})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&Object(i.n)(t.temp).then(function(){t.getList(),t.dialogFormVisible=!1,t.$notify({title:t.$t("hint.succeed"),message:t.$t("hint.updateSuccessful"),type:"success",duration:2e3})})})},handleUpdate:function(t){var e=this;this.temp=r()({},t),this.toData=[],this.temp.toData&&(this.toData=this.temp.toData),this.fromData=[],this.temp.fromData&&(this.fromData=this.temp.fromData),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},handleDelete:function(t){var e=this;this.$confirm(this.$t("hint.deleteDetermine"),this.$t("hint.hint"),{confirmButtonText:this.$t("usuel.confirm"),cancelButtonText:this.$t("usuel.cancel"),type:"warning"}).then(function(){Object(i.g)(t.id).then(function(){e.getList(),e.dialogFormVisible=!1,e.$notify({title:e.$t("hint.succeed"),message:e.$t("hint.deletedSuccessful"),type:"success",duration:2e3})})}).catch(function(){})},changeMode:function(){"transfer"===this.mode?this.mode="addressList":this.mode="transfer"},add:function(t,e,a){this.temp.rules=e},remove:function(t,e,a){this.temp.rules=e}}},u=(a("neUr"),a("KHd+")),d=Object(u.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.CreateManage,expression:"$store.jurisdiction.CreateManage"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(t._s(t.$t("usuel.add")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":t.sortChange}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:t.$t("user.power")}},[a("span",[t._v(t._s(e.row.power.join(",")))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("usuel.id"),sortable:"custom",align:"center",width:"65",prop:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("user.groupName"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.roles))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("user.describe"),align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.introduction))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("user.group")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.groupname?e.row.groupname.join(","):"未配置"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center","class-name":"small-padding fixed-width",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.UpdataManage,expression:"$store.jurisdiction.UpdataManage"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v(t._s(t.$t("usuel.amend")))]),t._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:t.$store.jurisdiction.DeleteManage,expression:"$store.jurisdiction.DeleteManage"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v(t._s(t.$t("usuel.delete")))])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",attrs:{rules:t.adminRules,model:t.temp,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:t.$t("user.groupName"),prop:"roles"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{maxlength:"11",clearable:""},model:{value:t.temp.roles,callback:function(e){t.$set(t.temp,"roles",e)},expression:"temp.roles"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("user.describe"),prop:"introduction"}},[a("el-input",{attrs:{clearable:""},model:{value:t.temp.introduction,callback:function(e){t.$set(t.temp,"introduction",e)},expression:"temp.introduction"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("user.group"),prop:"group"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:t.temp.group,callback:function(e){t.$set(t.temp,"group",e)},expression:"temp.group"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-alert",{attrs:{title:"如果有二级及以下子类添加，请先将该权限移除，再添加",type:"warning"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("user.power"),prop:"rules"}},[a("tree-transfer",{attrs:{title:t.title,from_data:t.fromData,to_data:t.toData,"default-props":{label:"label"},mode:t.mode,placeholder:t.$t("hint.pleaseEnterKeywordsForFiltering"),height:"300px",filter:"","open-all":""},on:{addBtn:t.add,removeBtn:t.remove}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("usuel.cancel")))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v(t._s(t.$t("usuel.confirm")))])],1)],1)],1)},[],!1,null,null,null);d.options.__file="manageGroups.vue";e.default=d.exports},neUr:function(t,e,a){"use strict";var n=a("7/3t");a.n(n).a},"wk8/":function(t,e,a){"use strict";a.d(e,"j",function(){return o}),a.d(e,"b",function(){return s}),a.d(e,"a",function(){return l}),a.d(e,"f",function(){return u}),a.d(e,"q",function(){return d}),a.d(e,"e",function(){return c}),a.d(e,"p",function(){return p}),a.d(e,"i",function(){return m}),a.d(e,"m",function(){return f}),a.d(e,"k",function(){return h}),a.d(e,"c",function(){return g}),a.d(e,"n",function(){return b}),a.d(e,"g",function(){return v}),a.d(e,"l",function(){return y}),a.d(e,"d",function(){return w}),a.d(e,"o",function(){return $}),a.d(e,"h",function(){return _});var n=a("t3Un"),r=a("Qyje"),i=a.n(r);function o(t){return Object(n.a)({url:"admin",method:"get",params:t})}function s(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"admin/create",method:"post",data:t})}function l(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"admin",method:"put",data:t})}function u(t){return Object(n.a)({url:"admin/"+t,method:"DELETE"})}function d(t){return Object(n.a)({url:"user",method:"get",params:t})}function c(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"user/create",method:"post",data:t})}function p(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"user",method:"put",data:t})}function m(t){return Object(n.a)({url:"user/"+t,method:"delete"})}function f(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"user/state",method:"put",data:t})}function h(){return Object(n.a)({url:"manage",method:"get"})}function g(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"manage/create",method:"post",data:t})}function b(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"manage",method:"put",data:t})}function v(t){return Object(n.a)({url:"manage/"+t,method:"delete"})}function y(t){return Object(n.a)({url:"power",method:"get",params:t})}function w(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"power/create",method:"post",data:t})}function $(t){return t=(t=i.a.parse({data:t})).data,Object(n.a)({url:"power",method:"put",data:t})}function _(t){return Object(n.a)({url:"power/"+t,method:"delete"})}}}]);