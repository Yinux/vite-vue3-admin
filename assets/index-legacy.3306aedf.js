System.register(["./index-legacy.10faf772.js","./index-legacy.5369ad6e.js","./dynamic-table-legacy.a396125d.js","./index-legacy.507b014e.js","./useFormModal-legacy.c37dd9fe.js","./utils-legacy.76523550.js","./pick-legacy.9237dedd.js","./index-legacy.63d24141.js","./css-legacy.afbdb071.js","./schema-form-legacy.fa1ba664.js","./index-legacy.3af98c48.js","./index-legacy.eb8104e3.js","./zh_CN-legacy.96420b0d.js"],(function(e){"use strict";var n,a,t,l,d,o,i,s,c,r,u,p,f,m,h,y,b,g,x;return{setters:[function(e){n=e.b,a=e.e,t=e.f,l=e.a,d=e.h,o=e.i},function(e){i=e.g},function(e){s=e.u},function(e){c=e.d,r=e.U,u=e.I,p=e.J,f=e.c,m=e.a3,h=e.W,y=e.a4},function(e){b=e.u},function(e){g=e.b,x=e.a},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){const I=[{title:"#",dataIndex:"id",width:55,align:"center",hideInSearch:!0},{title:"名称",width:200,align:"center",dataIndex:"name"},{title:"标识",width:80,align:"center",dataIndex:"label"},{title:"备注",dataIndex:"remark",align:"center"},{title:"创建时间",dataIndex:"createdAt",align:"center",hideInSearch:!0},{title:"更新时间",align:"center",dataIndex:"updatedAt",hideInSearch:!0}],k=[{field:"name",component:"Input",label:"名称",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"label",component:"Input",label:"标识",rules:[{required:!0,type:"string"}],colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"menus",component:"Tree",label:"菜单权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}},{field:"depts",component:"Tree",label:"部门权限",colProps:{span:12},componentProps:{checkable:!0,vModelKey:"checkedKeys",style:{height:"350px",paddingTop:"5px",overflow:"auto",borderRadius:"6px",border:"1px solid #dcdfe6"}}}],v=y(" 新增 ");e("default",c({name:"SystemPermissionRole",setup(e){const[c,y]=s(),[j]=b(),w=(e,n,a=[])=>n.reduce(((n,t)=>{var l;return null!==(l=t.children)&&void 0!==l&&l.length?w(e,t.children,a):e.includes(t.value)&&n.push(t.value),n}),a),P=async e=>{const[n]=await j({modalProps:{title:(e.id?"编辑":"新增")+"角色",width:"50%",onFinish:async l=>{var d,o;e.id&&(l.roleId=e.id);const i=null==n||null===(d=n.compRefs)||void 0===d?void 0:d.menus,s=null==n||null===(o=n.compRefs)||void 0===o?void 0:o.depts,c={...l,menus:[...i.halfCheckedKeys,...i.checkedKeys],depts:[...s.halfCheckedKeys,...s.checkedKeys]};console.log("新增/编辑角色",c),await(e.id?a:t)(c),null==y||y.reload()}},formProps:{labelWidth:100,schemas:k}}),[o,s]=await Promise.all([l(),i()]),c=g(s),r=x(o);if(null==n||n.updateSchema([{field:"menus",componentProps:{treeData:c}},{field:"depts",componentProps:{treeData:r}}]),e.id){const a=await d({roleId:e.id}),t=a.menus.map((e=>e.menuId)),l=a.depts.map((e=>e.departmentId));null==n||n.setFieldsValue({...e,name:a.roleInfo.name,label:a.roleInfo.label,remark:a.roleInfo.remark,menus:w(t,c),depts:w(l,r)})}},K=[...I,{title:"操作",width:160,dataIndex:"$action",hideInSearch:!0,align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.role.update",effect:"disable"},onClick:()=>P(e)},{label:"删除",auth:"sys.role.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>(async e=>{await o({roleIds:[e.id]}),null==y||y.reload()})(e)}}]}];return(e,a)=>{const t=r("a-button");return u(),p("div",null,[f(h(c),{"row-key":"id","header-title":"角色管理","data-request":h(n),columns:K,bordered:"",size:"small"},{toolbar:m((()=>[f(t,{type:"primary",disabled:!e.$auth("sys.role.add"),onClick:a[0]||(a[0]=e=>P({}))},{default:m((()=>[v])),_:1},8,["disabled"])])),_:1},8,["data-request"])])}}}))}}}));
