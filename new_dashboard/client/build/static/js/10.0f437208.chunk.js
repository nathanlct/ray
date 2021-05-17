(this["webpackJsonpray-dashboard-client"]=this["webpackJsonpray-dashboard-client"]||[]).push([[10],{255:function(e,t,a){"use strict";var n=a(223),r=a(180),c=a(0),l=a.n(c),i=Object(n.a)((function(e){return{card:{padding:e.spacing(2),paddingTop:e.spacing(1.5),margin:[e.spacing(2),e.spacing(1)].map((function(e){return"".concat(e,"px")})).join(" ")},title:{fontSize:e.typography.fontSize+2,fontWeight:500,color:e.palette.text.secondary,marginBottom:e.spacing(1)},body:{padding:e.spacing(.5)}}}));t.a=function(e){var t=e.title,a=e.children,n=i();return l.a.createElement(r.a,{className:n.card},l.a.createElement("div",{className:n.title},t),l.a.createElement("div",{className:n.body},a))}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n,r,c=a(8),l=a(79),i=a(76),o=a(78),u=a(242),s=a(75),d=a(284),m=a(243),p=a(0),f=a.n(p);!function(e){e.ALIVE="ALIVE",e.PENDING="PENDING",e.RECONSTRUCTING="RECONSTRUCTING",e.DEAD="DEAD"}(n||(n={}));var E={node:{ALIVE:l.a,DEAD:i.a},actor:(r={},Object(c.a)(r,n.ALIVE,l.a),Object(c.a)(r,n.DEAD,i.a),Object(c.a)(r,n.PENDING,o.a),Object(c.a)(r,n.RECONSTRUCTING,u.a),r),job:{INIT:s.a,SUBMITTED:o.a,DISPATCHED:u.a,RUNNING:l.a,COMPLETED:d.a,FINISHED:d.a,FAILED:i.a}},g={deps:o.a,INFO:d.a,ERROR:i.a},v=function(e){var t=e.type,a=e.status,n=e.suffix,r={padding:"2px 8px",border:"solid 1px",borderRadius:4,fontSize:12,margin:2},c=m.a;return g[t]?c=g[t]:"string"===typeof a&&E[t]&&E[t][a]&&(c=E[t][a]),r.color=c[500],r.borderColor=c[500],c!==m.a&&(r.backgroundColor="".concat(c[500],"20")),f.a.createElement("span",{style:r},a,n)}},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(223),r=a(240),c=a(285),l=a(234),i=a(286),o=a(0),u=a.n(o),s=Object(n.a)((function(e){return{search:{margin:e.spacing(1),marginTop:0}}})),d=function(e){var t=e.label,a=e.onChange,n=e.defaultValue,l=s();return u.a.createElement(r.a,{className:l.search,size:"small",label:t,InputProps:{onChange:function(e){var t=e.target.value;a&&a(t)},defaultValue:n,endAdornment:u.a.createElement(c.a,{position:"end"},u.a.createElement(i.a,null))}})},m=function(e){var t=e.label,a=e.onChange,n=e.options,c=s();return u.a.createElement(r.a,{className:c.search,size:"small",label:t,select:!0,SelectProps:{onChange:function(e){var t=e.target.value;a&&a(t)},style:{width:100}}},u.a.createElement(l.a,{value:""},"All"),n.map((function(e){return"string"===typeof e?u.a.createElement(l.a,{value:e},e):u.a.createElement(l.a,{value:e[0]},e[1])})))}},260:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var n=a(29),r=a(38),c=a(6),l=a(270),i=a(0),o=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1];return{changeFilter:function(e,t){var c=a.find((function(t){return t.key===e}));c?c.val=t:a.push({key:e,val:t}),n(Object(r.a)(a))},filterFunc:function(e){return a.every((function(t){return!t.val||Object(l.get)(e,t.key,"").toString().includes(t.val)}))}}},u=function(e){var t=Object(i.useState)({key:e||"",desc:!1}),a=Object(c.a)(t,2),r=a[0],o=a[1];return{sorterFunc:function(e,t){if(!r.key)return 0;var a=e,n=t;return r.desc&&(n=e,a=t),Object(l.get)(n,r.key)?Object(l.get)(a,r.key)?Object(l.get)(n,r.key)>Object(l.get)(a,r.key)?1:-1:1:-1},setSortKey:function(e){return o(Object(n.a)(Object(n.a)({},r),{},{key:e}))},setOrderDesc:function(e){return o(Object(n.a)(Object(n.a)({},r),{},{desc:e}))},sorterKey:r.key}}},261:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){return e<1024?"".concat(e,"KB"):e<Math.pow(1024,2)?"".concat((e/Math.pow(1024,1)).toFixed(2),"KB"):e<Math.pow(1024,3)?"".concat((e/Math.pow(1024,2)).toFixed(2),"MB"):e<Math.pow(1024,4)?"".concat((e/Math.pow(1024,3)).toFixed(2),"GB"):e<Math.pow(1024,5)?"".concat((e/Math.pow(1024,4)).toFixed(2),"TB"):e<Math.pow(1024,6)?"".concat((e/Math.pow(1024,5)).toFixed(2),"TB"):""}},262:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(225),r=a(0),c=a.n(r),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:28;return c.a.createElement(n.a,{title:e,interactive:!0},c.a.createElement("span",null,e.length>t?e.slice(0,t)+"...":e))}},264:function(e,t,a){"use strict";var n=a(29),r=a(6),c=a(240),l=a(285),i=a(230),o=a(228),u=a(229),s=a(227),d=a(231),m=a(77),p=a(286),f=a(514),E=a(513),g=a(0),v=a.n(g),b=a(81),h=a(89),O=a(262),j=a(260),y=a(266),I=a(256),k=a(267);t.a=function(e){var t=e.actors,a=void 0===t?{}:t,x=e.workers,C=void 0===x?[]:x,A=Object(g.useState)(1),w=Object(r.a)(A,2),S=w[0],N=w[1],D=Object(j.a)(),M=D.changeFilter,F=D.filterFunc,T=Object(g.useState)(10),P=Object(r.a)(T,2),R=P[0],L=P[1],z=Object(g.useContext)(h.a).ipLogMap,B=Object.values(a||{}).map((function(e){var t,a,r,c;return Object(n.a)(Object(n.a)({},e),{},{functionDesc:Object.values((null===(t=e.taskSpec)||void 0===t||null===(a=t.functionDescriptor)||void 0===a?void 0:a.javaFunctionDescriptor)||(null===(r=e.taskSpec)||void 0===r||null===(c=r.functionDescriptor)||void 0===c?void 0:c.pythonFunctionDescriptor)||{}).join(" ")})})).filter(F),W=B.slice((S-1)*R,S*R);return v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"center"}},v.a.createElement(f.a,{style:{margin:8,width:120},options:Array.from(new Set(Object.values(a).map((function(e){return e.state})))),onInputChange:function(e,t){M("state",t.trim())},renderInput:function(e){return v.a.createElement(c.a,Object.assign({},e,{label:"State"}))}}),v.a.createElement(f.a,{style:{margin:8,width:150},options:Array.from(new Set(Object.values(a).map((function(e){var t;return null===(t=e.address)||void 0===t?void 0:t.ipAddress})))),onInputChange:function(e,t){M("address.ipAddress",t.trim())},renderInput:function(e){return v.a.createElement(c.a,Object.assign({},e,{label:"IP"}))}}),v.a.createElement(c.a,{style:{margin:8,width:120},label:"PID",size:"small",InputProps:{onChange:function(e){var t=e.target.value;M("pid",t.trim())},endAdornment:v.a.createElement(l.a,{position:"end"},v.a.createElement(p.a,null))}}),v.a.createElement(c.a,{style:{margin:8,width:200},label:"Task Func Desc",size:"small",InputProps:{onChange:function(e){var t=e.target.value;M("functionDesc",t.trim())},endAdornment:v.a.createElement(l.a,{position:"end"},v.a.createElement(p.a,null))}}),v.a.createElement(c.a,{style:{margin:8,width:120},label:"Name",size:"small",InputProps:{onChange:function(e){var t=e.target.value;M("name",t.trim())},endAdornment:v.a.createElement(l.a,{position:"end"},v.a.createElement(p.a,null))}}),v.a.createElement(c.a,{style:{margin:8,width:120},label:"Actor ID",size:"small",InputProps:{onChange:function(e){var t=e.target.value;M("actorId",t.trim())},endAdornment:v.a.createElement(l.a,{position:"end"},v.a.createElement(p.a,null))}}),v.a.createElement(c.a,{style:{margin:8,width:120},label:"Page Size",size:"small",InputProps:{onChange:function(e){var t=e.target.value;L(Math.min(Number(t),500)||10)}}})),v.a.createElement("div",{style:{display:"flex",alignItems:"center"}},v.a.createElement("div",null,v.a.createElement(E.a,{page:S,onChange:function(e,t){return N(t)},count:Math.ceil(B.length/R)})),v.a.createElement("div",null,v.a.createElement(y.a,{type:"actor",list:B}))),v.a.createElement(i.a,null,v.a.createElement(o.a,null,v.a.createElement(u.a,null,["","ID(Num Restarts)","Name","Task Func Desc","Job Id","Pid","IP","Port","State","Log"].map((function(e){return v.a.createElement(s.a,{align:"center",key:e},e)})))),v.a.createElement(d.a,null,W.map((function(e){var t=e.actorId,a=e.functionDesc,n=e.jobId,r=e.pid,c=e.address,l=e.state,i=e.name,o=e.numRestarts;return v.a.createElement(k.a,{length:C.filter((function(e){return e.pid===r&&c.ipAddress===e.coreWorkerStats[0].ipAddress})).length,expandComponent:v.a.createElement(k.b,{actorMap:{},workers:C.filter((function(e){return e.pid===r&&c.ipAddress===e.coreWorkerStats[0].ipAddress})),mini:!0}),key:t},v.a.createElement(s.a,{align:"center",style:{color:Number(o)>0?m.a[500]:"inherit"}},t,"(",o,")"),v.a.createElement(s.a,{align:"center"},i),v.a.createElement(s.a,{align:"center"},Object(O.a)(a,60)),v.a.createElement(s.a,{align:"center"},n),v.a.createElement(s.a,{align:"center"},r),v.a.createElement(s.a,{align:"center"},null===c||void 0===c?void 0:c.ipAddress),v.a.createElement(s.a,{align:"center"},null===c||void 0===c?void 0:c.port),v.a.createElement(s.a,{align:"center"},v.a.createElement(I.a,{type:"actor",status:l})),v.a.createElement(s.a,{align:"center"},z[null===c||void 0===c?void 0:c.ipAddress]&&v.a.createElement(b.b,{target:"_blank",to:"/log/".concat(encodeURIComponent(z[null===c||void 0===c?void 0:c.ipAddress]),"?fileName=").concat(n,"-").concat(r)},"Log")))})))))}},265:function(e,t,a){"use strict";var n=a(223),r=a(0),c=a.n(r),l=Object(n.a)((function(e){return{container:{background:"linear-gradient(45deg, #21CBF3ee 30%, #2196F3ee 90%)",border:"1px solid #ffffffbb",padding:"0 12px",height:18,lineHeight:"18px",position:"relative",boxSizing:"content-box",borderRadius:4},displayBar:{background:e.palette.background.paper,position:"absolute",right:0,height:18,transition:"0.5s width",borderRadius:2,borderTopLeftRadius:0,borderBottomLeftRadius:0,border:"2px solid transparent",boxSizing:"border-box"},text:{fontSize:12,zIndex:2,position:"relative",color:e.palette.text.primary,width:"100%",textAlign:"center"}}}));t.a=function(e){var t=e.num,a=e.total,n=l(),r=Math.round(t/a*100);return c.a.createElement("div",{className:n.container},c.a.createElement("div",{className:n.displayBar,style:{width:"".concat(Math.min(Math.max(0,100-r),100),"%")}}),c.a.createElement("div",{className:n.text},e.children))}},266:function(e,t,a){"use strict";var n=a(6),r=a(224),c=a(0),l=a.n(c),i=a(256);t.a=function(e){var t=e.type,a=e.list,c={};return a.forEach((function(e){var t=e.state;c[t]=c[t]+1||1})),l.a.createElement(r.a,{container:!0,spacing:2,alignItems:"center"},l.a.createElement(r.a,{item:!0},l.a.createElement(i.a,{status:"TOTAL",type:t,suffix:"x ".concat(a.length)})),Object.entries(c).map((function(e){var a=Object(n.a)(e,2),c=a[0],o=a[1];return l.a.createElement(r.a,{item:!0},l.a.createElement(i.a,{status:c,type:t,suffix:" x ".concat(o)}))})))}},267:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(6),r=a(2),c=a(229),l=a(227),i=a(181),o=a(287),u=a(235),s=a(230),d=a(228),m=a(231),p=a(224),f=a(510),E=a(511),g=a(263),v=a.n(g),b=a(0),h=a.n(b),O=a(81),j=a(89),y=a(261),I=a(262),k=a(260),x=a(264),C=a(265),A=a(258),w=function(e){var t=e.children,a=e.expandComponent,o=e.length,u=e.stateKey,s=void 0===u?"":u,d=Object(r.a)(e,["children","expandComponent","length","stateKey"]),m=h.a.useState(!1),p=Object(n.a)(m,2),g=p[0],v=p[1];return Object(b.useEffect)((function(){s.startsWith("ON")?v(!0):s.startsWith("OFF")&&v(!1)}),[s]),o<1?h.a.createElement(c.a,d,h.a.createElement(l.a,{padding:"checkbox"}),t):h.a.createElement(h.a.Fragment,null,h.a.createElement(c.a,d,h.a.createElement(l.a,{padding:"checkbox"},h.a.createElement(i.a,{style:{color:"inherit"},onClick:function(){return v(!g)}},o,g?h.a.createElement(f.a,null):h.a.createElement(E.a,null))),t),g&&h.a.createElement(c.a,null,h.a.createElement(l.a,{colSpan:24},a)))},S=function(e){var t=e.actorMap,a=e.coreWorkerStats,n={};return(a||[]).filter((function(e){return t[e.actorId]})).forEach((function(e){return n[e.actorId]=t[e.actorId]})),Object.values(n).length?h.a.createElement(o.a,null,h.a.createElement(x.a,{actors:n})):h.a.createElement("p",null,"The Worker Haven't Had Related Actor Yet.")};t.b=function(e){var t=e.workers,a=void 0===t?[]:t,r=e.actorMap,i=e.mini,o=Object(k.a)(),f=o.changeFilter,E=o.filterFunc,g=Object(b.useState)(""),x=Object(n.a)(g,2),N=x[0],D=x[1],M=Object(b.useContext)(j.a),F=M.nodeMap,T=M.ipLogMap;return h.a.createElement(h.a.Fragment,null,!i&&h.a.createElement("div",{style:{display:"flex",alignItems:"center"}},h.a.createElement(A.a,{label:"Pid",onChange:function(e){return f("pid",e)}}),h.a.createElement(u.a,{onClick:function(){return D("ON".concat(Math.random()))}},"Expand All"),h.a.createElement(u.a,{onClick:function(){return D("OFF".concat(Math.random()))}},"Collapse All"))," ",h.a.createElement(s.a,null,h.a.createElement(d.a,null,h.a.createElement(c.a,null,["","Pid","CPU","CPU Times","Memory","CMD Line","Create Time","Log","Ops","IP/Hostname"].map((function(e){return h.a.createElement(l.a,{align:"center",key:e},e)})))),h.a.createElement(m.a,null,a.filter(E).sort((function(e,t){var a=(e.coreWorkerStats||[]).filter((function(e){return r[e.actorId]})).length||0;return((t.coreWorkerStats||[]).filter((function(e){return r[e.actorId]})).length||0)-a})).map((function(e){var t=e.pid,a=e.cpuPercent,c=e.cpuTimes,i=e.memoryInfo,o=e.cmdline,s=e.createTime,d=e.coreWorkerStats,m=void 0===d?[]:d,f=e.language,E=e.ip,g=e.hostname;return h.a.createElement(w,{expandComponent:h.a.createElement(S,{actorMap:r,coreWorkerStats:m}),length:(m||[]).filter((function(e){return r[e.actorId]})).length,key:t,stateKey:N},h.a.createElement(l.a,{align:"center"},t),h.a.createElement(l.a,{align:"center"},h.a.createElement(C.a,{num:Number(a),total:100},a,"%")),h.a.createElement(l.a,{align:"center"},h.a.createElement("div",{style:{maxHeight:55,overflow:"auto"}},Object.entries(c||{}).map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return h.a.createElement("div",{style:{margin:4}},a,":",r)})))),h.a.createElement(l.a,{align:"center"},h.a.createElement("div",{style:{maxHeight:55,overflow:"auto"}},Object.entries(i||{}).map((function(e){var t=Object(n.a)(e,2),a=t[0],r=t[1];return h.a.createElement("div",{style:{margin:4}},a,":",Object(y.a)(r))})))),h.a.createElement(l.a,{align:"center",style:{lineBreak:"anywhere"}},o&&Object(I.a)(o.filter((function(e){return e})).join(" "))),h.a.createElement(l.a,{align:"center"},v()(1e3*s).format("YYYY/MM/DD HH:mm:ss")),h.a.createElement(l.a,{align:"center"},h.a.createElement(p.a,{container:!0,spacing:2},T[E]&&h.a.createElement(p.a,{item:!0},h.a.createElement(O.b,{target:"_blank",to:"/log/".concat(encodeURIComponent(T[E]),"?fileName=").concat(m[0].jobId||"","-").concat(t)},"Log")))),h.a.createElement(l.a,{align:"center"},"JAVA"===f&&h.a.createElement("div",null,h.a.createElement(u.a,{onClick:function(){var e;window.open("#/cmd/jstack/".concat(null===(e=m[0])||void 0===e?void 0:e.ipAddress,"/").concat(t))}},"jstack")," ",h.a.createElement(u.a,{onClick:function(){var e;window.open("#/cmd/jmap/".concat(null===(e=m[0])||void 0===e?void 0:e.ipAddress,"/").concat(t))}},"jmap"),h.a.createElement(u.a,{onClick:function(){var e;window.open("#/cmd/jstat/".concat(null===(e=m[0])||void 0===e?void 0:e.ipAddress,"/").concat(t))}},"jstat"))),h.a.createElement(l.a,{align:"center"},E,h.a.createElement("br",null),F[g]?h.a.createElement(O.b,{target:"_blank",to:"/node/".concat(F[g])},g):g))})))))}},517:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(223),c=a(0),l=a.n(c),i=a(264),o=a(255),u=a(53),s=Object(r.a)((function(e){return{root:{padding:e.spacing(2),width:"100%"}}}));t.default=function(){var e=s(),t=Object(c.useState)({}),a=Object(n.a)(t,2),r=a[0],d=a[1];return Object(c.useEffect)((function(){Object(u.b)("logical/actors").then((function(e){var t,a;(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.actors)&&d(e.data.data.actors)}))}),[]),l.a.createElement("div",{className:e.root},l.a.createElement(o.a,{title:"ACTORS"},l.a.createElement(i.a,{actors:r})))}}}]);
//# sourceMappingURL=10.0f437208.chunk.js.map