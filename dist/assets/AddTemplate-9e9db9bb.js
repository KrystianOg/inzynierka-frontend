import{$ as h,r as _,b as e,F as g,aJ as f,aN as b,u as C,aO as S,q as V,af as F,j as u,ag as d,W as I,ah as A,o as D,x as W}from"./index-256b35f3.js";import{u as j}from"./index.esm-22fccc69.js";import{T as c}from"./TextField-0b6183c3.js";import{I as y,W as B}from"./enum-fe51160d.js";import{M as $}from"./MenuItem-b3c698e4.js";import{u as z,q as E}from"./index-98addc77.js";import{a as L}from"./templates-ac113adb.js";import{S as s}from"./Skeleton-d69efb4b.js";import{B as M}from"./Button-e91f9ba3.js";import"./browser-ponyfill-dc401b36.js";import"./Grow-567cf039.js";const o=({register:t,...r})=>{const l=h(),[i,a]=_.useState(!0);return e(c,{variant:"outlined",disabled:i,...r,InputProps:{endAdornment:e(y,{position:"end",style:{display:"flex",flexDirection:"row",gap:"1rem"},children:e(g,{icon:i?f:b,size:"lg",style:{color:l.palette.primary.main,cursor:"pointer"},onClick:()=>a(m=>!m)})})},inputProps:{min:0,...r.inputProps},...t(r.name,{required:r.required})})},x=({options:t,...r})=>{const l=h(),[i,a]=_.useState(!0);return e(c,{select:!0,variant:"outlined",disabled:i,...r,InputProps:{endAdornment:e(y,{position:"end",style:{display:"flex",flexDirection:"row",marginRight:"1.5rem",gap:"1rem"},children:e(g,{icon:i?f:b,size:"lg",style:{color:l.palette.primary.main,cursor:"pointer"},onClick:()=>a(m=>!m)})})},inputProps:{min:0,...r.inputProps},children:t==null?void 0:t.map(m=>e($,{value:m,children:m},m))})},Z=()=>{const{t}=C(),{type:r}=S(),l=V(),{user:i}=F(),{data:a,isLoading:m}=z((i==null?void 0:i.id)??E.skipToken),[w,{isLoading:v}]=L(),{register:n,handleSubmit:T,setError:P}=j(),k=async q=>{if(!i)return;const p=await w({...q,user_id:i==null?void 0:i.id});"error"in p&&P("name",{type:"manual",message:t("error.something_went_wrong").toString()}),"data"in p&&l("/templates")};return u(d,{children:[e(I,{title:`${t("templates.add_title")} ${r??""}| Diet Genius`}),e(A,{flexDirection:"column",gap:"1rem",children:u(D,{component:"form",sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr"},gap:"1rem",width:"100%"},onSubmit:T(k),maxWidth:"sm",children:[e(c,{sx:{gridColumn:"1 / -1",marginTop:{xs:"1rem",sm:"2rem"},marginBottom:"1rem"},label:t("templates.your_name"),autoFocus:!0,...n("name",{required:!1})}),m?u(d,{children:[e(s,{animation:"wave",sx:{width:"100%",height:"56px"}}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56}),e("div",{}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56}),e(s,{animation:"wave",height:56})]}):u(d,{children:[e(o,{label:t("profile.preferences.max_ready_time"),type:"number",defaultValue:a==null?void 0:a.max_ready_time,fullWidth:!0,register:n,name:"max_ready_time"}),e(x,{label:t("profile.preferences.workout"),defaultValue:a==null?void 0:a.workout,options:Object.keys(B),...n("workout",{required:!1})}),e(x,{label:t("profile.preferences.daily_meal_count"),defaultValue:a==null?void 0:a.daily_meal_count,options:[1,2,3,4,5],...n("meal_count",{required:!1})}),e("div",{}),e(o,{label:t("profile.min_max.min_calories"),type:"number",defaultValue:a==null?void 0:a.min_calories,inputProps:{min:0,max:3e3,step:25},register:n,name:"min_calories"}),e(o,{label:t("profile.min_max.max_calories"),type:"number",defaultValue:a==null?void 0:a.max_calories,inputProps:{min:0,max:3e3,step:25},register:n,name:"max_calories"}),e(o,{label:t("profile.min_max.min_protein"),type:"number",defaultValue:a==null?void 0:a.min_protein,register:n,name:"min_protein"}),e(o,{label:t("profile.min_max.max_protein"),type:"number",defaultValue:a==null?void 0:a.max_protein,register:n,name:"max_protein"}),e(o,{label:t("profile.min_max.min_carbs"),type:"number",defaultValue:a==null?void 0:a.min_carbs,register:n,name:"min_carbs"}),e(o,{label:t("profile.min_max.max_carbs"),type:"number",defaultValue:a==null?void 0:a.max_carbs,register:n,name:"max_carbs"})]}),e(M,{variant:"contained",type:"submit",sx:{gridColumn:"1 / -1",marginTop:"1rem"},children:v?e(W,{size:24}):t("templates.create")})]})})]})};export{Z as default};
