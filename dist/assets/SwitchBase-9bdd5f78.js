import{d as K,g as W,s as x,B as A,_ as i,r as D,l as G,j as H,b as J,m as M,p as e,K as Q,f as V,n as X}from"./index-256b35f3.js";import{u as Y}from"./TextField-0b6183c3.js";import{u as Z}from"./Grow-567cf039.js";function ee(s){return K("PrivateSwitchBase",s)}W("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const se=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],oe=s=>{const{classes:n,checked:l,disabled:r,edge:a}=s,u={root:["root",l&&"checked",r&&"disabled",a&&`edge${V(a)}`],input:["input"]};return X(u,ee,n)},te=x(A)(({ownerState:s})=>i({padding:9,borderRadius:"50%"},s.edge==="start"&&{marginLeft:s.size==="small"?-3:-12},s.edge==="end"&&{marginRight:s.size==="small"?-3:-12})),ne=x("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),F=D.forwardRef(function(n,l){const{autoFocus:r,checked:a,checkedIcon:u,className:R,defaultChecked:h,disabled:w,disableFocusRipple:f=!1,edge:S=!1,icon:I,id:P,inputProps:j,inputRef:q,name:O,onBlur:b,onChange:g,onFocus:m,readOnly:N,required:v=!1,tabIndex:z,type:d,value:k}=n,E=G(n,se),[y,T]=Z({controlled:a,default:Boolean(h),name:"SwitchBase",state:"checked"}),t=Y(),U=o=>{m&&m(o),t&&t.onFocus&&t.onFocus(o)},_=o=>{b&&b(o),t&&t.onBlur&&t.onBlur(o)},L=o=>{if(o.nativeEvent.defaultPrevented)return;const C=o.target.checked;T(C),g&&g(o,C)};let c=w;t&&typeof c>"u"&&(c=t.disabled);const $=d==="checkbox"||d==="radio",p=i({},n,{checked:y,disabled:c,disableFocusRipple:f,edge:S}),B=oe(p);return H(te,i({component:"span",className:M(B.root,R),centerRipple:!0,focusRipple:!f,disabled:c,tabIndex:null,role:void 0,onFocus:U,onBlur:_,ownerState:p,ref:l},E,{children:[J(ne,i({autoFocus:r,checked:a,defaultChecked:h,className:B.input,disabled:c,id:$&&P,name:O,onChange:L,readOnly:N,ref:q,required:v,ownerState:p,tabIndex:z,type:d},d==="checkbox"&&k===void 0?{}:{value:k},j)),y?u:I]}))});F.propTypes={autoFocus:e.bool,checked:e.bool,checkedIcon:e.node.isRequired,classes:e.object,className:e.string,defaultChecked:e.bool,disabled:e.bool,disableFocusRipple:e.bool,edge:e.oneOf(["end","start",!1]),icon:e.node.isRequired,id:e.string,inputProps:e.object,inputRef:Q,name:e.string,onBlur:e.func,onChange:e.func,onFocus:e.func,readOnly:e.bool,required:e.bool,sx:e.object,tabIndex:e.oneOfType([e.number,e.string]),type:e.string.isRequired,value:e.any};const ie=F;export{ie as S};
