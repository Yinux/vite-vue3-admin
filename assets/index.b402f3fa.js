var p=Object.defineProperty,f=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var l=(n,t,r)=>t in n?p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,s=(n,t)=>{for(var r in t||(t={}))I.call(t,r)&&l(n,r,t[r]);if(o)for(var r of o(t))h.call(t,r)&&l(n,r,t[r]);return n},d=(n,t)=>f(n,g(t));import{u as x}from"./dynamic-table.1a17b6c9.js";import{d as T,I as _,V as w,W as c,c as a,aC as i}from"./index.44725425.js";import{g as y}from"./index.2fd548d0.js";import"./pick.b8be7556.js";import"./index.948778ba.js";import"./css.82a45a0b.js";import"./schema-form.309c9adc.js";import"./index.5aa97db4.js";import"./index.93fa4281.js";import"./zh_CN.4c83cac5.js";const C={name:"SystemMonitorReqLog"};var P=T(d(s({},C),{setup(n){const[t]=x(),r=e=>e>=200&&e<300?"success":e>=300&&e<400?"default":e>=400&&e<500?"warning":e>=500?"error":"default",m=e=>e<=20?"success":e<=40?"warning":"error",u=[{title:"\u8BF7\u6C42IP",dataIndex:"ip",width:150,align:"center"},{title:"\u64CD\u4F5C\u4EBAID",dataIndex:"userId",align:"center",width:100},{title:"\u8BF7\u6C42\u65B9\u5F0F",dataIndex:"method",align:"center",bodyCell:({record:e})=>a(i,{color:"processing"},{default:()=>[e.method]})},{title:"\u8BF7\u6C42\u53C2\u6570",dataIndex:"params",align:"center",ellipsis:!0,width:150},{title:"\u8BF7\u6C42\u5730\u5740",dataIndex:"action",align:"center"},{title:"\u54CD\u5E94\u72B6\u6001",dataIndex:"status",align:"center",width:120,bodyCell:({record:e})=>a(i,{color:r(e.status)},{default:()=>[e.status]})},{title:"\u8017\u65F6",dataIndex:"consumeTime",align:"center",width:120,bodyCell:({record:e})=>a(i,{color:m(e.consumeTime)},{default:()=>[`${e.consumeTime}ms`]})},{title:"\u64CD\u4F5C\u65F6\u95F4",dataIndex:"createTime",align:"center",width:220}];return(e,b)=>(_(),w(c(t),{"header-title":"\u8BF7\u6C42\u65E5\u5FD7","title-tooltip":"\u8FD9\u662Fmock\u6570\u636E","data-request":c(y),columns:u},null,8,["data-request"]))}}));export{P as default};
