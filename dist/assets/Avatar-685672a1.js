import{b as u,d as C,g as I,s as b,_ as i,r as m,k as P,l as S,m as T,p as r,n as z}from"./index-9cd92da0.js";import{c as D}from"./Grow-3f1f88f3.js";const M=D(u("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function N(e){return C("MuiAvatar",e)}I("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const F=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],O=e=>{const{classes:a,variant:t,colorDefault:o}=e;return z({root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]},N,a)},U=b("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})(({theme:e,ownerState:a})=>i({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.variant==="square"&&{borderRadius:0},a.colorDefault&&i({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),_=b("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),q=b(M,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,a)=>a.fallback})({width:"75%",height:"75%"});function E({crossOrigin:e,referrerPolicy:a,src:t,srcSet:o}){const[n,l]=m.useState(!1);return m.useEffect(()=>{if(!t&&!o)return;l(!1);let c=!0;const s=new Image;return s.onload=()=>{c&&l("loaded")},s.onerror=()=>{c&&l("error")},s.crossOrigin=e,s.referrerPolicy=a,s.src=t,o&&(s.srcset=o),()=>{c=!1}},[e,a,t,o]),n}const x=m.forwardRef(function(a,t){const o=P({props:a,name:"MuiAvatar"}),{alt:n,children:l,className:c,component:s="div",imgProps:y,sizes:k,src:f,srcSet:p,variant:R="circular"}=o,j=S(o,F);let d=null;const w=E(i({},y,{src:f,srcSet:p})),h=f||p,A=h&&w!=="error",g=i({},o,{colorDefault:!A,component:s,variant:R}),v=O(g);return A?d=u(_,i({alt:n,src:f,srcSet:p,sizes:k,ownerState:g,className:v.img},y)):l!=null?d=l:h&&n?d=n[0]:d=u(q,{className:v.fallback}),u(U,i({as:s,ownerState:g,className:T(v.root,c),ref:t},j,{children:d}))});x.propTypes={alt:r.string,children:r.node,classes:r.object,className:r.string,component:r.elementType,imgProps:r.object,sizes:r.string,src:r.string,srcSet:r.string,sx:r.oneOfType([r.arrayOf(r.oneOfType([r.func,r.object,r.bool])),r.func,r.object]),variant:r.oneOfType([r.oneOf(["circular","rounded","square"]),r.string])};const H=x;export{H as A};
