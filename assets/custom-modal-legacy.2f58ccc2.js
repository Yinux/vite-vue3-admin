System.register(["./index-legacy.507b014e.js","./index-legacy.92588855.js","./index-legacy.70b90aca.js","./index-legacy.7d7cea3a.js","./Card-legacy.42db4a14.js","./index-legacy.4370461c.js","./Tabs-legacy.f224fea2.js","./pick-legacy.9237dedd.js","./PlusOutlined-legacy.18137da5.js","./index-legacy.3af98c48.js"],(function(e){"use strict";var t,n,i,a,s,l,o,c,u,d,r,f,b,y,p;return{setters:[function(e){t=e.d,n=e.cC,i=e.r,a=e.U,s=e.I,l=e.J,o=e.c,c=e.a3,u=e.W,d=e.aJ,r=e.as,f=e.a4,b=e.O},function(){},function(){},function(e){y=e.A},function(e){p=e.C},function(){},function(){},function(){},function(){},function(){}],execute:function(){const m=f(" 对ant-design-vue的modal进行二次封装，自定义一个可拖拽、可调整大小的模态框， "),g=b("span",{class:"text-red-500"}," Tips: 如果你的弹窗依赖于App上下文（provide/inject），你应该使用`useModal组件方式` ",-1),v=b("a",{class:"text-blue-500",target:"_blank",href:"https://github.com/buqiyuan/vue3-antd-admin/blob/main/src/views/demos/custom-modal.vue"}," 查看源码 ",-1),j=f("普通组件方式"),x=f("useModal组件方式"),h=f("hook纯函数式");e("default",t({name:"CustomModal",setup(e){const[t]=n(),[f]=n(),b=i({visible:!1}),k=()=>{t.show({title:"我是hook纯函数式模态框",content:"hello"})},C=()=>{f.show({title:"我是UseModalComp",content:"嘿嘿嘿"})},_=()=>{b.visible=!1};return(e,t)=>{const n=a("a-button"),i=p;return s(),l("div",null,[o(u(y),{message:"自定义模态框",type:"info","show-icon":"",style:{"margin-bottom":"12px"}},{description:c((()=>[m,g,v])),_:1}),o(i,null,{default:c((()=>[o(u(d),null,{default:c((()=>[o(n,{type:"primary",onClick:t[0]||(t[0]=e=>b.visible=!0)},{default:c((()=>[j])),_:1}),o(n,{type:"primary",onClick:C},{default:c((()=>[x])),_:1}),o(n,{type:"primary",onClick:k},{default:c((()=>[h])),_:1})])),_:1})])),_:1}),o(u(r),{visible:b.visible,"onUpdate:visible":t[1]||(t[1]=e=>b.visible=e),onOk:_},null,8,["visible"]),o(u(f))])}}}))}}}));
