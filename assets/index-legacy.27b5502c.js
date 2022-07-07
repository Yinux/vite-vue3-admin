System.register(["./Badge-legacy.501af8a1.js","./index-legacy.507b014e.js","./dynamic-table-legacy.a396125d.js","./useFormModal-legacy.c37dd9fe.js","./index-legacy.e0431691.js","./PoweroffOutlined-legacy.337eee2e.js","./isNumeric-legacy.71bc4125.js","./pick-legacy.9237dedd.js","./index-legacy.63d24141.js","./css-legacy.afbdb071.js","./schema-form-legacy.fa1ba664.js","./index-legacy.3af98c48.js","./index-legacy.eb8104e3.js","./zh_CN-legacy.96420b0d.js"],(function(e){"use strict";var t,a,n,l,o,i,r,s,d,c,u,m,f,p,b,y,h,g,v,w,I,j,k,P,O;return{setters:[function(e){t=e.B,a=e.R},function(e){n=e.c,l=e.A,o=e.aC,i=e.bB,r=e.di,s=e.d,d=e.U,c=e.I,u=e.J,m=e.a3,f=e.W,p=e.a4,b=e.a5,y=e.V,h=e.at,g=e.O,v=e.ac,w=e.aP},function(e){I=e.u,j=e.P},function(e){k=e.u},function(e){P=e.D},function(e){O=e.P},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t.install=function(e){return e.component(t.name,t),e.component(a.name,a),e};var x={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z"}}]},name:"caret-right",theme:"outlined"};function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){T(e,t,a[t])}))}return e}function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var _=function(e,t){var a=C({},e,t.attrs);return n(l,C({},a,{icon:x}),null)};_.displayName="CaretRightOutlined",_.inheritAttrs=!1;var $=_,M={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"}}]},name:"tool",theme:"outlined"};function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){z(e,t,a[t])}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var q=function(e,t){var a=S({},e,t.attrs);return n(l,S({},a,{icon:M}),null)};q.displayName="ToolOutlined",q.inheritAttrs=!1;var N=q;const R=e=>{switch(e){case 0:return"#d9d9d9";case 1:return"#52c41a"}},V=e=>{switch(e){case 0:return"停止";case 1:return"运行"}},B=[{title:"任务名称",dataIndex:"name",width:240},{title:"状态",width:120,dataIndex:"status",align:"center",bodyCell:({record:e})=>n(t,{status:1===e.status?"processing":"default",color:R(e.status),text:V(e.status)},null)},{title:"类型",width:100,align:"center",dataIndex:"type",bodyCell:({record:e})=>n(o,{color:"processing"},{default:()=>[1===e.type?"Interval":"Cron"]})},{title:"调用服务",dataIndex:"service",hideInSearch:!0,align:"center",width:350},{title:"执行参数",dataIndex:"data",align:"center",hideInSearch:!0,width:450},{title:"备注",width:250,align:"center",dataIndex:"remark"}],D=[{field:"type",component:"RadioGroup",label:"名称",defaultValue:0,rules:[{required:!0,type:"number"}],componentProps:{options:[{label:"Cron",value:0},{label:"时间间隔",value:1}]}},{field:"name",component:"Input",label:"任务名称",rules:[{required:!0,type:"string"}]},{field:"service",component:"Input",label:"服务路径",rules:[{required:!0,type:"string"}],componentProps:{placeholder:"请输入调用服务的路径"}},{field:"data",component:"Input",label:"任务参数",componentProps:{placeholder:"请输入任务参数（可不填）"}},{field:"limit",component:"InputNumber",label:"执行次数",defaultValue:-1,componentProps:{min:-1,style:{width:"100%"}}},{field:"cron",component:"Input",label:"Cron",rules:[{required:!0,type:"string"}],vIf:({formModel:e})=>0===e.type,componentProps:{placeholder:"请输入Cron表达式"}},{field:"every",component:"InputNumber",label:"执行间隔",defaultValue:6e4,vIf:({formModel:e})=>1===e.type,rules:[{required:!0,type:"number"}],componentProps:{min:100,style:{width:"100%"}}},{field:"startTime",component:"DatePicker",label:"开始时间",vIf:({formModel:e})=>0===e.type,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"endTime",component:"DatePicker",label:"结束时间",vIf:({formModel:e})=>0===e.type,componentProps:{showTime:!0,style:{width:"100%"}}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",defaultValue:1,label:"状态",componentProps:{options:[{label:"运行",value:1},{label:"停止",value:0}]}}];function A(e){return i({url:r.page,method:"get",params:e})}function L(e){return i({url:r.add,method:"post",data:e},{successMsg:"添加成功"})}function F(e){return i({url:r.update,method:"post",data:e},{successMsg:"修改成功"})}const E=p(" 新增 "),G=p("秒 分 小时 日期 月份 星期 年(可选)"),W=p("仅一次 "),J=p("运行 "),U=p("停止 ");e("default",s({name:"SystemScheduleTask",setup(e){const[t,a]=I({search:!1,size:"small"}),[l]=k(),o=()=>null==a?void 0:a.reload(),s=async e=>{const[t]=await l({modalProps:{title:(e.id?"编辑":"新增")+"任务",width:640,onFinish:async t=>{const a={...t,id:e.id};console.log("新增/编辑任务",a),await(e.id?F:L)(a),o()}},formProps:{labelWidth:100,schemas:D}});if(e.id){const n=await(a={id:e.id},i({url:r.info,method:"get",params:a}));null==t||t.setFieldsValue({...e,...n})}var a},x=async e=>{var t;await(t={id:e},i({url:r.delete,method:"post",data:t})),o()},C=async e=>{var t;await(t={id:e.id},i({url:r.once,method:"post",data:t})),o()},T=async e=>{var t;await(t={id:e.id},i({url:r.start,method:"post",data:t})),o()},_=async e=>{var t;await(t={id:e.id},i({url:r.stop,method:"post",data:t})),o()},M=e=>e.startTime||e.endTime?!e.startTime&&e.endTime?`无开始时间限制 - ${e.endTime}`:e.startTime&&!e.endTime?`${e.startTime} - 长期有效`:`${e.startTime} - ${e.endTime}`:"无时段限制",S=[...B,{title:"操作",width:220,dataIndex:"$action",align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.task.update",effect:"disable"},onClick:()=>s(e)},{label:"删除",auth:"sys.task.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>x(e.id)}}]}];return(e,a)=>{const l=d("a-button");return c(),u("div",null,[n(f(t),{"row-key":"id","header-title":"定时任务","data-request":f(A),columns:S,scroll:{x:2e3},bordered:""},{toolbar:m((()=>[n(l,{type:"primary",disabled:!e.$auth("sys.task.add"),onClick:a[0]||(a[0]=e=>s({}))},{default:m((()=>[E])),_:1},8,["disabled"])])),expandedRowRender:m((({record:t})=>[n(f(P),{column:1},{default:m((()=>[n(f(P).Item,{label:"任务编号"},{default:m((()=>[p("# "+b(t.id),1)])),_:2},1024),n(f(P).Item,{label:"执行次数"},{default:m((()=>[p(b(t.limit>0?`仅 ${t.limit} 次`:"无次数限制"),1)])),_:2},1024),1===t.type?(c(),y(f(P).Item,{key:0,label:"执行间隔"},{default:m((()=>[p(" 每"+b(t.every)+"毫秒执行一次 ",1)])),_:2},1024)):(c(),y(f(P).Item,{key:1,label:"Cron表达式"},{default:m((()=>[n(f(h),null,{title:m((()=>[G])),default:m((()=>[p(" "+b(t.cron),1)])),_:2},1024)])),_:2},1024)),0===t.type?(c(),y(f(P).Item,{key:2,label:"执行时间段"},{default:m((()=>[g("span",null,b(M(t)),1)])),_:2},1024)):v("",!0),n(f(P).Item,{label:"执行操作"},{default:m((()=>[n(f(j),{title:"确认手动执行一次该任务吗?",disabled:!e.$auth("sys.task.once"),onConfirm:e=>C(t)},{default:m((()=>[n(f(w),{type:"link",size:"small",disabled:!e.$auth("sys.task.once")},{icon:m((()=>[n(f(N))])),default:m((()=>[W])),_:1},8,["disabled"])])),_:2},1032,["disabled","onConfirm"]),n(f(j),{title:"确认运行该任务吗?",disabled:!(e.$auth("sys.task.start")&&0===t.status),onConfirm:e=>T(t)},{default:m((()=>[n(f(w),{type:"link",size:"small",disabled:!(e.$auth("sys.task.start")&&0===t.status)},{icon:m((()=>[n(f($))])),default:m((()=>[J])),_:2},1032,["disabled"])])),_:2},1032,["disabled","onConfirm"]),n(f(j),{title:"确认停止该任务吗?",disabled:!(e.$auth("sys.task.stop")&&1===t.status),onConfirm:e=>_(t)},{default:m((()=>[n(f(w),{type:"link",size:"small",disabled:!(e.$auth("sys.task.stop")&&1===t.status)},{icon:m((()=>[n(f(O))])),default:m((()=>[U])),_:2},1032,["disabled"])])),_:2},1032,["disabled","onConfirm"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-request"])])}}}))}}}));
