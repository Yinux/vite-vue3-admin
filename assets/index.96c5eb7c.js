var S=Object.defineProperty,b=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var u=(t,e,o)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,c=(t,e)=>{for(var o in e||(e={}))C.call(e,o)&&u(t,o,e[o]);if(i)for(var o of i(e))I.call(e,o)&&u(t,o,e[o]);return t},m=(t,e)=>b(t,g(e));import{d as q,I as P,J as k,c as n,W as f,a3 as d,ad as y,av as _}from"./index.44725425.js";/* empty css              *//* empty css              */import{u as U}from"./useForm.bbe94c79.js";import{A as V}from"./index.f164cbea.js";import{C as w}from"./Card.cafd124d.js";import"./schema-form.309c9adc.js";import"./index.5aa97db4.js";import"./index.93fa4281.js";import"./pick.b8be7556.js";import"./index.2e2c2bac.js";import"./Tabs.3ecb3ebc.js";import"./PlusOutlined.f3c39d24.js";const A={name:"custom-form"};var L=q(m(c({},A),{setup(t){const e=[{field:"field1",label:"comp vnode\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],component:({formModel:r,field:l})=>n(_,{modelValue:r[l],"onUpdate:modelValue":s=>r[l]=s,placeholder:"\u8BF7\u8F93\u5165"},{prefix:()=>"component"})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],componentSlots:r=>({prefix:()=>"prefix",suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],componentSlots:{prefix:()=>"prefix",suffix:r=>"suffix"}},{field:"field4",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f4",colProps:{span:8},rules:[{required:!0}]}],[o]=U({labelWidth:140,schemas:e,actionColOptions:{span:24}}),x=r=>{y.success(`click search,values:${JSON.stringify(r)}`)};return(r,l)=>{const s=_,v=w;return P(),k("div",null,[n(f(V),{message:"\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u793A\u4F8B",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),n(v,null,{default:d(()=>[n(f(o),{onSubmit:x},{f4:d(({formModel:a,field:p})=>[n(s,{value:a[p],"onUpdate:value":h=>a[p]=h,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1})]),_:1})])}}}));export{L as default};
