import{d as R,g as T,aF as y,s as _,_ as r,h as O,aG as p,r as S,k as $,l as U,b as j,m as M,p as e,n as A}from"./index-256b35f3.js";function N(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function X(t){return parseFloat(t)}function F(t){return R("MuiSkeleton",t)}T("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const B=["animation","className","component","height","style","variant","width"];let l=t=>t,f,g,m,b;const E=t=>{const{classes:a,variant:n,animation:o,hasChildren:i,width:d,height:s}=t;return A({root:["root",n,o,i&&"withChildren",i&&!d&&"fitContent",i&&!s&&"heightAuto"]},F,a)},K=y(f||(f=l`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),P=y(g||(g=l`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),W=_("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:n}=t;return[a.root,a[n.variant],n.animation!==!1&&a[n.animation],n.hasChildren&&a.withChildren,n.hasChildren&&!n.width&&a.fitContent,n.hasChildren&&!n.height&&a.heightAuto]}})(({theme:t,ownerState:a})=>{const n=N(t.shape.borderRadius)||"px",o=X(t.shape.borderRadius);return r({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:O(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${n}/${Math.round(o/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:t})=>t.animation==="pulse"&&p(m||(m=l`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),K),({ownerState:t,theme:a})=>t.animation==="wave"&&p(b||(b=l`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),P,(a.vars||a).palette.action.hover)),v=S.forwardRef(function(a,n){const o=$({props:a,name:"MuiSkeleton"}),{animation:i="pulse",className:d,component:s="span",height:h,style:k,variant:C="text",width:w}=o,c=U(o,B),u=r({},o,{animation:i,component:s,variant:C,hasChildren:Boolean(c.children)}),x=E(u);return j(W,r({as:s,ref:n,className:M(x.root,d),ownerState:u},c,{style:r({width:w,height:h},k)}))});v.propTypes={animation:e.oneOf(["pulse","wave",!1]),children:e.node,classes:e.object,className:e.string,component:e.elementType,height:e.oneOfType([e.number,e.string]),style:e.object,sx:e.oneOfType([e.arrayOf(e.oneOfType([e.func,e.object,e.bool])),e.func,e.object]),variant:e.oneOfType([e.oneOf(["circular","rectangular","rounded","text"]),e.string]),width:e.oneOfType([e.number,e.string])};const L=v;export{L as S};
