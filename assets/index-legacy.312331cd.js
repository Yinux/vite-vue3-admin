!function(){var e=document.createElement("style");e.innerHTML=".btn-rows button[data-v-ed289b7a]{margin-right:12px}\n",document.head.appendChild(e),System.register(["./index-legacy.507b014e.js","./index-legacy.92588855.js","./index-legacy.70b90aca.js","./schema-form-legacy.fa1ba664.js","./index-legacy.7d7cea3a.js","./Card-legacy.42db4a14.js","./index-legacy.3af98c48.js","./index-legacy.eb8104e3.js","./pick-legacy.9237dedd.js","./index-legacy.4370461c.js","./Tabs-legacy.f224fea2.js","./PlusOutlined-legacy.18137da5.js"],(function(e,n){"use strict";var l,o,a,i,t,s,r,c,d,u,p,m,f,b,g,v;return{setters:[function(e){l=e.H,o=e.d,a=e.j,i=e.I,t=e.J,s=e.c,r=e.a3,c=e.W,d=e.ag,u=e.Q,p=e.S,m=e.ad,f=e.O},function(){},function(){},function(e){b=e._},function(e){g=e.A},function(e){v=e.C},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const y=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",vShow:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,n)=>n?"1"===n?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:(e,n="")=>new Promise(((e,l)=>{setTimeout((()=>{n.includes("admin")?l("该字段不能包含admin关键字"):e()}),100)}))}]}];const P=(e=>(u("data-v-ed289b7a"),e=e(),p(),e))((()=>f("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vite-vue3-admin/blob/main/src/views/demos/form/rule-form/index.vue"}," 查看源码 ",-1)));e("default",l(o({name:"DemosFormRuleForm",setup(e){console.log("sss",n.meta.url);const l=a(),o={schemas:y,labelWidth:120,actionColOptions:{span:24}};function u(){var e,n;console.log("dynamicForm.value",null===(e=l.value)||void 0===e?void 0:e.formModel),null===(n=l.value)||void 0===n||n.validate().then((()=>m.success("验证通过！")))}return(e,n)=>{const a=v;return i(),t("div",null,[s(c(g),{message:"验证表单",description:"动态验证表单",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:r((()=>[P])),_:1}),s(a,null,{default:r((()=>[s(c(b),d({ref_key:"dynamicForm",ref:l},o,{onSubmit:u}),null,16)])),_:1})])}}}),[["__scopeId","data-v-ed289b7a"]]))}}}))}();
