System.register(["./index-legacy.507b014e.js","./dynamic-table-legacy.a396125d.js","./index-legacy.7d7cea3a.js","./Card-legacy.42db4a14.js","./pick-legacy.9237dedd.js","./index-legacy.63d24141.js","./css-legacy.afbdb071.js","./schema-form-legacy.fa1ba664.js","./index-legacy.3af98c48.js","./index-legacy.eb8104e3.js","./zh_CN-legacy.96420b0d.js","./index-legacy.4370461c.js","./Tabs-legacy.f224fea2.js","./PlusOutlined-legacy.18137da5.js"],(function(e){"use strict";var n,t,a,l,o,c,r,s,d,i,u,m;return{setters:[function(e){n=e.c,t=e.a7,a=e.a4,l=e.aC,o=e.d,c=e.I,r=e.J,s=e.a3,d=e.W},function(e){i=e.u},function(e){u=e.A},function(e){m=e.C},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const f=["王路飞","王大蛇","李白","刺客伍六七"],g=["西装","领带","裙子","包包"],p=Array.from({length:30}).map(((e,n)=>({id:n+1,date:(new Date).toLocaleString(),name:f[~~(4*Math.random())],clothes:g[~~(4*Math.random())],price:~~(1e3*Math.random()),gender:~~(2*Math.random()),status:~~(2*Math.random())}))),b=[{title:"姓名",align:"center",dataIndex:"name",sorter:!0,formItemProps:{required:!0}},{title:"性别",align:"center",dataIndex:"gender",formItemProps:{component:"Select",componentProps:({formInstance:e,formModel:n,tableInstance:t})=>({options:[{label:"男",value:1},{label:"女",value:0}],onChange(){var a;console.log("tableInstance",null==t?void 0:t.reload()),null==e||e.updateSchema({field:"clothes",componentProps:{options:(a=n.gender,1===a?[{label:"西装",value:1},{label:"领带",value:0}]:0===a?[{label:"裙子",value:1},{label:"包包",value:0}]:[])}}),n.clothes=void 0}})},bodyCell:({record:e})=>n(t,null,[["女","男"][e.gender]])},{title:"衣服",align:"center",dataIndex:"clothes",formItemProps:{component:"Select"}},{title:"价格",align:"center",dataIndex:"price",formItemProps:{component:"Select"},bodyCell:({record:e})=>n(t,null,[[e.price],a("元")])},{title:"状态",align:"center",dataIndex:"status",formItemProps:{component:"Select",componentProps:{request:()=>new Promise((e=>{setTimeout((()=>{e([{label:"已售罄",value:0},{label:"热卖中",value:1}])}),3e3)}))}},bodyCell:({record:e})=>n(l,{color:1==e.status?"red":"default"},{default:()=>[["已售罄","热卖中"][e.status]]})}],y=a(" 查询表格-查询表单使用示例 ");e("default",o({__name:"index",setup(e){const[t,a]=i(),l=async(e,n)=>(console.log("onChangeParams",n),new Promise((n=>{setTimeout((()=>{var t,l;n({list:p,...e}),null==a||null===(t=a.getQueryFormRef())||void 0===t||null===(l=t.updateSchema)||void 0===l||l.call(t,[{field:"price",componentProps:{options:[{label:"0-199",value:"0-199"},{label:"200-999",value:"200-999"}]}}])}),500)})));return(e,a)=>(c(),r("div",null,[n(d(u),{message:"查询表格",type:"info","show-icon":""},{description:s((()=>[y])),_:1}),n(d(m),{title:"查询表单基本使用示例",style:{"margin-top":"20px"}},{default:s((()=>[n(d(t),{size:"small",bordered:"","data-request":l,columns:d(b),"row-key":"heroid"},null,8,["columns"])])),_:1})]))}}))}}}));
