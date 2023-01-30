import{d as G,g as K,aF as T,s as g,f as s,_ as i,aG as A,r as I,k as E,l as H,$ as Z,j as p,b as n,m as $,p as o,n as X,a9 as J,aa as Q,V as ee,a0 as re,Z as j,ag as R,T as N,C as te,w as oe,F as z,aH as ne,aI as ae}from"./index-9cd92da0.js";import{G as ie,I as L}from"./enum-6daa183a.js";import{B as P}from"./Button-ab6e28d6.js";import{T as S}from"./TextField-93489492.js";import{u as se}from"./useStep-166bc02c.js";import"./browser-ponyfill-f1f1b475.js";import"./Grow-3f1f88f3.js";function le(e){return G("MuiLinearProgress",e)}K("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const ce=["className","color","value","valueBuffer","variant"];let v=e=>e,_,D,q,U,F,W;const w=4,pe=T(_||(_=v`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),de=T(D||(D=v`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),ue=T(q||(q=v`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),fe=e=>{const{classes:r,variant:t,color:a}=e,d={root:["root",`color${s(a)}`,t],dashed:["dashed",`dashedColor${s(a)}`],bar1:["bar",`barColor${s(a)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar",t!=="buffer"&&`barColor${s(a)}`,t==="buffer"&&`color${s(a)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return X(d,le,r)},O=(e,r)=>r==="inherit"?"currentColor":e.vars?e.vars.palette.LinearProgress[`${r}Bg`]:e.palette.mode==="light"?J(e.palette[r].main,.62):Q(e.palette[r].main,.5),be=g("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`color${s(t.color)}`],r[t.variant]]}})(({ownerState:e,theme:r})=>i({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:O(r,e.color)},e.color==="inherit"&&e.variant!=="buffer"&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},e.variant==="buffer"&&{backgroundColor:"transparent"},e.variant==="query"&&{transform:"rotate(180deg)"})),me=g("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.dashed,r[`dashedColor${s(t.color)}`]]}})(({ownerState:e,theme:r})=>{const t=O(r,e.color);return i({position:"absolute",marginTop:0,height:"100%",width:"100%"},e.color==="inherit"&&{opacity:.3},{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`,backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})},A(U||(U=v`
    animation: ${0} 3s infinite linear;
  `),ue)),ge=g("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${s(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar1Indeterminate,t.variant==="determinate"&&r.bar1Determinate,t.variant==="buffer"&&r.bar1Buffer]}})(({ownerState:e,theme:r})=>i({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.variant==="determinate"&&{transition:`transform .${w}s linear`},e.variant==="buffer"&&{zIndex:1,transition:`transform .${w}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&A(F||(F=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `),pe)),ve=g("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.bar,r[`barColor${s(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&r.bar2Indeterminate,t.variant==="buffer"&&r.bar2Buffer]}})(({ownerState:e,theme:r})=>i({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},e.variant!=="buffer"&&{backgroundColor:e.color==="inherit"?"currentColor":(r.vars||r).palette[e.color].main},e.color==="inherit"&&{opacity:.3},e.variant==="buffer"&&{backgroundColor:O(r,e.color),transition:`transform .${w}s linear`}),({ownerState:e})=>(e.variant==="indeterminate"||e.variant==="query")&&A(W||(W=v`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `),de)),Y=I.forwardRef(function(r,t){const a=E({props:r,name:"MuiLinearProgress"}),{className:d,color:k="primary",value:h,valueBuffer:x,variant:b="indeterminate"}=a,M=H(a,ce),u=i({},a,{color:k,variant:b}),f=fe(u),C=Z(),l={},c={bar1:{},bar2:{}};if(b==="determinate"||b==="buffer")if(h!==void 0){l["aria-valuenow"]=Math.round(h),l["aria-valuemin"]=0,l["aria-valuemax"]=100;let m=h-100;C.direction==="rtl"&&(m=-m),c.bar1.transform=`translateX(${m}%)`}else console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");if(b==="buffer")if(x!==void 0){let m=(x||0)-100;C.direction==="rtl"&&(m=-m),c.bar2.transform=`translateX(${m}%)`}else console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");return p(be,i({className:$(f.root,d),ownerState:u,role:"progressbar"},l,{ref:t},M,{children:[b==="buffer"?n(me,{className:f.dashed,ownerState:u}):null,n(ge,{className:f.bar1,ownerState:u,style:c.bar1}),b==="determinate"?null:n(ve,{className:f.bar2,ownerState:u,style:c.bar2})]}))});Y.propTypes={classes:o.object,className:o.string,color:o.oneOfType([o.oneOf(["inherit","primary","secondary"]),o.string]),sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object]),value:o.number,valueBuffer:o.number,variant:o.oneOf(["buffer","determinate","indeterminate","query"])};const he=Y;function ye(e){return G("MuiMobileStepper",e)}K("MuiMobileStepper",["root","positionBottom","positionTop","positionStatic","dots","dot","dotActive","progress"]);const Pe=["activeStep","backButton","className","LinearProgressProps","nextButton","position","steps","variant"],xe=e=>{const{classes:r,position:t}=e,a={root:["root",`position${s(t)}`],dots:["dots"],dot:["dot"],dotActive:["dotActive"],progress:["progress"]};return X(a,ye,r)},Ce=g(ee,{name:"MuiMobileStepper",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`position${s(t.position)}`]]}})(({theme:e,ownerState:r})=>i({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:(e.vars||e).palette.background.default,padding:8},r.position==="bottom"&&{position:"fixed",bottom:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper},r.position==="top"&&{position:"fixed",top:0,left:0,right:0,zIndex:(e.vars||e).zIndex.mobileStepper})),Se=g("div",{name:"MuiMobileStepper",slot:"Dots",overridesResolver:(e,r)=>r.dots})(({ownerState:e})=>i({},e.variant==="dots"&&{display:"flex",flexDirection:"row"})),ke=g("div",{name:"MuiMobileStepper",slot:"Dot",shouldForwardProp:e=>re(e)&&e!=="dotActive",overridesResolver:(e,r)=>{const{dotActive:t}=e;return[r.dot,t&&r.dotActive]}})(({theme:e,ownerState:r,dotActive:t})=>i({},r.variant==="dots"&&i({transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),backgroundColor:(e.vars||e).palette.action.disabled,borderRadius:"50%",width:8,height:8,margin:"0 2px"},t&&{backgroundColor:(e.vars||e).palette.primary.main}))),Me=g(he,{name:"MuiMobileStepper",slot:"Progress",overridesResolver:(e,r)=>r.progress})(({ownerState:e})=>i({},e.variant==="progress"&&{width:"50%"})),V=I.forwardRef(function(r,t){const a=E({props:r,name:"MuiMobileStepper"}),{activeStep:d=0,backButton:k,className:h,LinearProgressProps:x,nextButton:b,position:M="bottom",steps:u,variant:f="dots"}=a,C=H(a,Pe),l=i({},a,{activeStep:d,position:M,variant:f}),c=xe(l);return p(Ce,i({square:!0,elevation:0,className:$(c.root,h),ref:t,ownerState:l},C,{children:[k,f==="text"&&p(I.Fragment,{children:[d+1," / ",u]}),f==="dots"&&n(Se,{ownerState:l,className:c.dots,children:[...new Array(u)].map((m,B)=>n(ke,{className:$(c.dot,B===d&&c.dotActive),ownerState:l,dotActive:B===d},B))}),f==="progress"&&n(Me,i({ownerState:l,className:c.progress,variant:"determinate",value:Math.ceil(d/(u-1)*100)},x)),b]}))});V.propTypes={activeStep:j,backButton:o.node,classes:o.object,className:o.string,LinearProgressProps:o.object,nextButton:o.node,position:o.oneOf(["bottom","static","top"]),steps:j.isRequired,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object]),variant:o.oneOf(["dots","progress","text"])};const Be=V,Ie=()=>{const e=Object.values(ie);return p(R,{children:[n(N,{variant:"h6",children:"Select your gender"}),e.map((r,t)=>n(P,{variant:"outlined",children:r},t))]})},$e=()=>p(R,{children:[n(S,{label:"Height (cm)",type:"number",InputProps:{endAdornment:n(L,{position:"end",children:"cm"}),inputProps:{min:140,max:220}},autoComplete:"off",variant:"outlined"}),n(S,{label:"Age (years)",type:"number",InputProps:{inputProps:{min:18,max:60}},autoComplete:"off",variant:"outlined"}),n(S,{label:"Weight (kg)",type:"number",InputProps:{endAdornment:n(L,{position:"end",children:"kg"}),inputProps:{min:40,max:145}},variant:"outlined",autoComplete:"off"})]}),Le=()=>p(R,{children:[n(N,{variant:"h6",children:"What is your desired weight?"}),n(S,{label:"Weight (kg)",type:"number",InputProps:{endAdornment:n(L,{position:"end",children:"kg"})},variant:"outlined"}),n(P,{variant:"contained",children:"Continue"})]}),y=[{title:"Select your gender",content:Ie()},{title:"Please tell us about your body measurements",content:$e()},{title:"What is your desired weight?",content:Le()}],ze=()=>{const[e,r]=se(y.length),{goToNextStep:t,goToPrevStep:a}=r;return p(te,{children:[p(oe,{component:"form",onSubmit:t,children:[n(N,{component:"h2",variant:"h5",children:y[e].title}),y[e].content,!y[e].multiple&&n(P,{variant:"contained",type:"submit",fullWidth:!0,children:"Continue"})]}),n(Be,{variant:"progress",steps:y.length,activeStep:e-1,nextButton:p(P,{size:"small",onClick:t,children:["Skip",n(z,{icon:ne,size:"lg"})]}),backButton:p(P,{size:"small",onClick:a,children:[n(z,{icon:ae,size:"lg"}),"Back"]})})]})};export{ze as default};
