import{r as h,d as I,g as V,s as f,_ as m,k as R,l as N,j as y,m as B,b as n,p as t,Z as Y,n as G,a2 as le,f as Z,ap as J,aq as ce,u as H,T as _,w as X,ar as K,q as pe,ag as de,W as me,as as xe,F as ke,at as he,ak as ue}from"./index-45114418.js";import{C as ye,a as fe}from"./CardHeader-941c922b.js";import{C as be}from"./CardContent-9796cfdc.js";import{B as U}from"./Button-fc30282a.js";import{u as Se}from"./useStep-6749779a.js";import{c as ee}from"./Grow-72ff1326.js";import{a as ve,b as ge,c as we,T as Ce}from"./TabPanel-7536d751.js";import{T as Te}from"./Tooltip-011a4b8e.js";import"./browser-ponyfill-f1f1b475.js";const te=h.createContext({});te.displayName="StepperContext";const $=te,ae=h.createContext({});ae.displayName="StepContext";const z=ae;function Le(e){return I("MuiStep",e)}V("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const Me=["active","children","className","component","completed","disabled","expanded","index","last"],Be=e=>{const{classes:a,orientation:o,alternativeLabel:i,completed:r}=e;return G({root:["root",o,i&&"alternativeLabel",r&&"completed"]},Le,a)},Pe=f("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.orientation],o.alternativeLabel&&a.alternativeLabel,o.completed&&a.completed]}})(({ownerState:e})=>m({},e.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},e.alternativeLabel&&{flex:1,position:"relative"})),oe=h.forwardRef(function(a,o){const i=R({props:a,name:"MuiStep"}),{active:r,children:l,className:x,component:d="div",completed:s,disabled:c,expanded:p=!1,index:k,last:u}=i,w=N(i,Me),{activeStep:S,connector:b,alternativeLabel:v,orientation:P,nonLinear:M}=h.useContext($);let[g=!1,E=!1,C=!1]=[r,s,c];S===k?g=r!==void 0?r:!0:!M&&S>k?E=s!==void 0?s:!0:!M&&S<k&&(C=c!==void 0?c:!0);const j=h.useMemo(()=>({index:k,last:u,expanded:p,icon:k+1,active:g,completed:E,disabled:C}),[k,u,p,g,E,C]),T=m({},i,{active:g,orientation:P,alternativeLabel:v,completed:E,disabled:C,expanded:p,component:d}),D=Be(T),A=y(Pe,m({as:d,className:B(D.root,x),ref:o,ownerState:T},w,{children:[b&&v&&k!==0?b:null,l]}));return n(z.Provider,{value:j,children:b&&!v&&k!==0?y(h.Fragment,{children:[b,A]}):A})});oe.propTypes={active:t.bool,children:t.node,classes:t.object,className:t.string,completed:t.bool,component:t.elementType,disabled:t.bool,expanded:t.bool,index:Y,last:t.bool,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object])};const Ee=oe,je=ee(n("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),De=ee(n("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Ae(e){return I("MuiStepIcon",e)}const Ie=V("MuiStepIcon",["root","active","completed","error","text"]),F=Ie;var Q;const Ve=["active","className","completed","error","icon"],Re=e=>{const{classes:a,active:o,completed:i,error:r}=e;return G({root:["root",o&&"active",i&&"completed",r&&"error"],text:["text"]},Ae,a)},O=f(le,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,a)=>a.root})(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${F.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${F.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${F.error}`]:{color:(e.vars||e).palette.error.main}})),Ne=f("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,a)=>a.text})(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily})),ne=h.forwardRef(function(a,o){const i=R({props:a,name:"MuiStepIcon"}),{active:r=!1,className:l,completed:x=!1,error:d=!1,icon:s}=i,c=N(i,Ve),p=m({},i,{active:r,completed:x,error:d}),k=Re(p);if(typeof s=="number"||typeof s=="string"){const u=B(l,k.root);return d?n(O,m({as:De,className:u,ref:o,ownerState:p},c)):x?n(O,m({as:je,className:u,ref:o,ownerState:p},c)):y(O,m({className:u,ref:o,ownerState:p},c,{children:[Q||(Q=n("circle",{cx:"12",cy:"12",r:"12"})),n(Ne,{className:k.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:p,children:s})]}))}return s});ne.propTypes={active:t.bool,classes:t.object,className:t.string,completed:t.bool,error:t.bool,icon:t.node,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object])};const Ge=ne;function Ue(e){return I("MuiStepLabel",e)}const $e=V("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),L=$e,_e=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],ze=e=>{const{classes:a,orientation:o,active:i,completed:r,error:l,disabled:x,alternativeLabel:d}=e;return G({root:["root",o,l&&"error",x&&"disabled",d&&"alternativeLabel"],label:["label",i&&"active",r&&"completed",l&&"error",x&&"disabled",d&&"alternativeLabel"],iconContainer:["iconContainer",i&&"active",r&&"completed",l&&"error",x&&"disabled",d&&"alternativeLabel"],labelContainer:["labelContainer",d&&"alternativeLabel"]},Ue,a)},Fe=f("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.orientation]]}})(({ownerState:e})=>m({display:"flex",alignItems:"center",[`&.${L.alternativeLabel}`]:{flexDirection:"column"},[`&.${L.disabled}`]:{cursor:"default"}},e.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Oe=f("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,a)=>a.label})(({theme:e})=>m({},e.typography.body2,{display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${L.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${L.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${L.alternativeLabel}`]:{marginTop:16},[`&.${L.error}`]:{color:(e.vars||e).palette.error.main}})),We=f("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,a)=>a.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${L.alternativeLabel}`]:{paddingRight:0}})),He=f("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,a)=>a.labelContainer})(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${L.alternativeLabel}`]:{textAlign:"center"}})),q=h.forwardRef(function(a,o){var i;const r=R({props:a,name:"MuiStepLabel"}),{children:l,className:x,componentsProps:d={},error:s=!1,icon:c,optional:p,slotProps:k={},StepIconComponent:u,StepIconProps:w}=r,S=N(r,_e),{alternativeLabel:b,orientation:v}=h.useContext($),{active:P,disabled:M,completed:g,icon:E}=h.useContext(z),C=c||E;let j=u;C&&!j&&(j=Ge);const T=m({},r,{active:P,alternativeLabel:b,completed:g,disabled:M,error:s,orientation:v}),D=ze(T),A=(i=k.label)!=null?i:d.label;return y(Fe,m({className:B(D.root,x),ref:o,ownerState:T},S,{children:[C||j?n(We,{className:D.iconContainer,ownerState:T,children:n(j,m({completed:g,active:P,error:s,icon:C},w))}):null,y(He,{className:D.labelContainer,ownerState:T,children:[l?n(Oe,m({ownerState:T},A,{className:B(D.label,A==null?void 0:A.className),children:l})):null,p]})]}))});q.propTypes={children:t.node,classes:t.object,className:t.string,componentsProps:t.shape({label:t.object}),error:t.bool,icon:t.node,optional:t.node,slotProps:t.shape({label:t.object}),StepIconComponent:t.elementType,StepIconProps:t.object,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object])};q.muiName="StepLabel";const qe=q;function Ke(e){return I("MuiStepConnector",e)}V("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Qe=["className"],Ye=e=>{const{classes:a,orientation:o,alternativeLabel:i,active:r,completed:l,disabled:x}=e,d={root:["root",o,i&&"alternativeLabel",r&&"active",l&&"completed",x&&"disabled"],line:["line",`line${Z(o)}`]};return G(d,Ke,a)},Ze=f("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.orientation],o.alternativeLabel&&a.alternativeLabel,o.completed&&a.completed]}})(({ownerState:e})=>m({flex:"1 1 auto"},e.orientation==="vertical"&&{marginLeft:12},e.alternativeLabel&&{position:"absolute",top:8+4,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Je=f("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.line,a[`line${Z(o.orientation)}`]]}})(({ownerState:e,theme:a})=>{const o=a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600];return m({display:"block",borderColor:a.vars?a.vars.palette.StepConnector.border:o},e.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},e.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),ie=h.forwardRef(function(a,o){const i=R({props:a,name:"MuiStepConnector"}),{className:r}=i,l=N(i,Qe),{alternativeLabel:x,orientation:d="horizontal"}=h.useContext($),{active:s,disabled:c,completed:p}=h.useContext(z),k=m({},i,{alternativeLabel:x,orientation:d,active:s,completed:p,disabled:c}),u=Ye(k);return n(Ze,m({className:B(u.root,r),ref:o,ownerState:k},l,{children:n(Je,{className:u.line,ownerState:k})}))});ie.propTypes={classes:t.object,className:t.string,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object])};const Xe=ie;function et(e){return I("MuiStepContent",e)}V("MuiStepContent",["root","last","transition"]);const tt=["children","className","TransitionComponent","transitionDuration","TransitionProps"],at=e=>{const{classes:a,last:o}=e;return G({root:["root",o&&"last"],transition:["transition"]},et,a)},ot=f("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,o.last&&a.last]}})(({ownerState:e,theme:a})=>m({marginLeft:12,paddingLeft:8+12,paddingRight:8,borderLeft:a.vars?`1px solid ${a.vars.palette.StepContent.border}`:`1px solid ${a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}`},e.last&&{borderLeft:"none"})),nt=f(J,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,a)=>a.transition})({}),re=h.forwardRef(function(a,o){const i=R({props:a,name:"MuiStepContent"}),{children:r,className:l,TransitionComponent:x=J,transitionDuration:d="auto",TransitionProps:s}=i,c=N(i,tt),{orientation:p}=h.useContext($),{active:k,last:u,expanded:w}=h.useContext(z),S=m({},i,{last:u}),b=at(S);p!=="vertical"&&console.error("MUI: <StepContent /> is only designed for use with the vertical stepper.");let v=d;return d==="auto"&&!x.muiSupportAuto&&(v=void 0),n(ot,m({className:B(b.root,l),ref:o,ownerState:S},c,{children:n(nt,m({as:x,in:k||w,className:b.transition,ownerState:S,timeout:v,unmountOnExit:!0},s,{children:r}))}))});re.propTypes={children:t.node,classes:t.object,className:t.string,sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object]),TransitionComponent:t.elementType,transitionDuration:t.oneOfType([t.oneOf(["auto"]),t.number,t.shape({appear:t.number,enter:t.number,exit:t.number})]),TransitionProps:t.object};const it=re;function rt(e){return I("MuiStepper",e)}V("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);const st=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],lt=e=>{const{orientation:a,alternativeLabel:o,classes:i}=e;return G({root:["root",a,o&&"alternativeLabel"]},rt,i)},ct=f("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.orientation],o.alternativeLabel&&a.alternativeLabel]}})(({ownerState:e})=>m({display:"flex"},e.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},e.orientation==="vertical"&&{flexDirection:"column"},e.alternativeLabel&&{alignItems:"flex-start"})),pt=n(Xe,{}),se=h.forwardRef(function(a,o){const i=R({props:a,name:"MuiStepper"}),{activeStep:r=0,alternativeLabel:l=!1,children:x,className:d,component:s="div",connector:c=pt,nonLinear:p=!1,orientation:k="horizontal"}=i,u=N(i,st),w=m({},i,{alternativeLabel:l,orientation:k,component:s}),S=lt(w),b=h.Children.toArray(x).filter(Boolean),v=b.map((M,g)=>h.cloneElement(M,m({index:g,last:g+1===b.length},M.props))),P=h.useMemo(()=>({activeStep:r,alternativeLabel:l,connector:c,nonLinear:p,orientation:k}),[r,l,c,p,k]);return n($.Provider,{value:P,children:n(ct,m({as:s,ownerState:w,className:B(S.root,d),ref:o},u,{children:v}))})});se.propTypes={activeStep:Y,alternativeLabel:t.bool,children:t.node,classes:t.object,className:t.string,component:t.elementType,connector:t.element,nonLinear:t.bool,orientation:t.oneOf(["horizontal","vertical"]),sx:t.oneOfType([t.arrayOf(t.oneOfType([t.func,t.object,t.bool])),t.func,t.object])};const dt=se,W=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],mt={monday:{meals:[{id:1440995,imageType:"jpg",title:"Peanut Butter Banana Muffins",readyInMinutes:35,servings:12,sourceUrl:"https://cookienameddesire.com/peanut-butter-banana-muffins/"},{id:557461,imageType:"jpg",title:"Lighter Mini Citrus CheeseCake Bites",readyInMinutes:30,servings:1,sourceUrl:"http://www.sugarfreemom.com/recipes/lighter-mini-citrus-cheesecake-bites/"},{id:133466,imageType:"png",title:"Fried Sauerkraut Cakes with Kielbasa",readyInMinutes:30,servings:4,sourceUrl:"http://www.epicurious.com/recipes/food/views/Fried-Sauerkraut-Cakes-with-Kielbasa-231486"}],nutrients:{calories:2687.51,protein:57.33,fat:190.87,carbohydrates:191.54}},tuesday:{meals:[{id:636026,imageType:"jpg",title:"Breakfast Biscuits and Gravy",readyInMinutes:45,servings:4,sourceUrl:"https://spoonacular.com/breakfast-biscuits-and-gravy-636026"},{id:381708,imageType:"jpg",title:"Texas-Style Steak Sandwiches",readyInMinutes:20,servings:2,sourceUrl:"http://www.tasteofhome.com/Recipes/texas-style-steak-sandwiches"},{id:174401,imageType:"jpg",title:"Cheesy Chicken Quesadillas",readyInMinutes:30,servings:4,sourceUrl:"http://www.BettyCrocker.com/recipes/cheesy-chicken-quesadillas/dab064e2-5275-4f6e-8063-d03b11296485"}],nutrients:{calories:2702.06,protein:127.1,fat:179.72,carbohydrates:145.79}},wednesday:{meals:[{id:68989,imageType:"jpg",title:"Bacon 'n' Egg Breakfast Empanadas",readyInMinutes:45,servings:4,sourceUrl:"http://www.myrecipes.com/recipe/bacon-n-egg-breakfast-empanadas-10000000353924/"},{id:1697535,imageType:"jpg",title:"Panera Spicy Thai Salad",readyInMinutes:20,servings:4,sourceUrl:"https://spoonacular.com/panera-spicy-thai-salad-1697535"},{id:327196,imageType:"jpeg",title:"Grown-Up Farmhouse Grilled Cheese",readyInMinutes:45,servings:4,sourceUrl:"http://www.foodnetwork.com/recipes/claire-robinson/grown-up-farmhouse-grilled-cheese-recipe.html"}],nutrients:{calories:2722.8,protein:151.52,fat:178.74,carbohydrates:135.18}},thursday:{meals:[{id:631730,imageType:"jpg",title:"Paleo double chocolate breakfast cookies",readyInMinutes:45,servings:10,sourceUrl:"http://www.sheknows.com/food-and-recipes/articles/1041561/paleo-double-chocolate-breakfast-cookies"},{id:557461,imageType:"jpg",title:"Lighter Mini Citrus CheeseCake Bites",readyInMinutes:30,servings:1,sourceUrl:"http://www.sugarfreemom.com/recipes/lighter-mini-citrus-cheesecake-bites/"},{id:803001,imageType:"jpg",title:"Keto Chocolate Smoothie",readyInMinutes:45,servings:2,sourceUrl:"http://elanaspantry.com/keto-chocolate-smoothie/"}],nutrients:{calories:2676.9,protein:48.68,fat:209.51,carbohydrates:162.55}},friday:{meals:[{id:970837,imageType:"jpg",title:"Breakfast Banh Mi Sandwich with Eggs and Sausage",readyInMinutes:35,servings:4,sourceUrl:"https://www.epicurious.com/recipes/food/views/breakfast-banh-mi-sandwich-with-eggs-and-sausage-51252290"},{id:690778,imageType:"jpg",title:"Chipotle Ranch Bacon Cheddar Nachos",readyInMinutes:15,servings:4,sourceUrl:"http://www.reneeskitchenadventures.com/2015/11/chipotle-ranch-bacon-cheddar-nachos.html"},{id:153783,imageType:"jpg",title:"Margarita Pizza",readyInMinutes:45,servings:2,sourceUrl:"http://www.epicurious.com/recipes/food/views/Margarita-Pizza-51112270"}],nutrients:{calories:2713.45,protein:129.24,fat:167.38,carbohydrates:177.03}},saturday:{meals:[{id:393410,imageType:"jpeg",title:"The Ultimate Breakfast for Dinner: Sausage and Spinach Egg Strata",readyInMinutes:135,servings:6,sourceUrl:"http://www.foodnetwork.com/recipes/rachael-ray/the-ultimate-breakfast-for-dinner-sausage-and-spinach-egg-strata-recipe.html"},{id:564891,imageType:"jpg",title:"Ravioli Pesto",readyInMinutes:22,servings:2,sourceUrl:"http://www.noobcook.com/ravioli-pesto/2/"},{id:1186339,imageType:"jpg",title:"Spicy Peanut Noodles",readyInMinutes:10,servings:4,sourceUrl:"https://www.jocooks.com/recipes/spicy-peanut-and-chicken-soba-noodles/"}],nutrients:{calories:2707.56,protein:130.32,fat:127.72,carbohydrates:265.62}},sunday:{meals:[{id:287920,imageType:"jpeg",title:"Breakfast Casserole",readyInMinutes:40,servings:8,sourceUrl:"http://www.foodnetwork.com/recipes/breakfast-casserole-recipe.html"},{id:389867,imageType:"jpg",title:"Crunchy Ham and Cheese",readyInMinutes:25,servings:2,sourceUrl:"http://www.tasteofhome.com/Recipes/crunchy-ham-and-cheese"},{id:157623,imageType:"jpg",title:"Hasselback Potato Gratin",readyInMinutes:105,servings:4,sourceUrl:"http://www.seriouseats.com/recipes/2013/12/hasselback-potato-gratin-casserole-holiday-food-lab.html"}],nutrients:{calories:2701.98,protein:86.11,fat:167.01,carbohydrates:224.08}}},xt={week:mt},kt="5.5.7",ht={g:"LottieFiles AE 0.1.20",a:"",k:"",d:"",tc:""},ut=30,yt=0,ft=90,bt=1080,St=1080,vt="CHECK",gt=0,wt=[{id:"comp_0",layers:[{ddd:0,ind:1,ty:4,nm:"Shape Layer 8",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:315,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"Shape Layer 7",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:270,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"Shape Layer 6",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:225,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 5",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:180,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:5,ty:4,nm:"Shape Layer 4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:135,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:6,ty:4,nm:"Shape Layer 3",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:90,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"Shape Layer 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:45,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[552,540,0],ix:2},a:{a:0,k:[-396,-26.286,0],ix:1},s:{a:0,k:[70,70,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0]],o:[[0,0],[0,0]],v:[[-236,-32],[94.286,-32]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"tm",s:{a:1,k:[{i:{x:[.432],y:[1]},o:{x:[.622],y:[0]},t:4.2,s:[0]},{t:14.0000005702317,s:[100]}],ix:1},e:{a:1,k:[{i:{x:[.442],y:[1]},o:{x:[.609],y:[0]},t:0,s:[0]},{t:10.2675004182038,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:4,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0}]}],Ct=[{ddd:0,ind:1,ty:0,nm:"Comp 2",refId:"comp_0",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[496,220.00000000000003,0],ix:2},a:{a:0,k:[540,540,0],ix:1},s:{a:0,k:[31.111,31.111,100],ix:6}},ao:0,w:1080,h:1080,ip:14.0000005702317,op:108.00000439893,st:14.0000005702317,bm:0},{ddd:0,ind:2,ty:4,nm:"Shape Layer 2",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[524,552,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[100,100,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0]],v:[[-156,36],[-32,160],[220,-140]],c:!1},ix:2},nm:"Path 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"st",c:{a:0,k:[1,1,1,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:59,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Shape 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1},e:{a:1,k:[{i:{x:[.221],y:[1]},o:{x:[.333],y:[0]},t:28,s:[0]},{i:{x:[.191],y:[1]},o:{x:[.333],y:[0]},t:44,s:[100]},{t:59.0000024031193,s:[87]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:28.0000011404634,op:122.000004969162,st:28.0000011404634,bm:0},{ddd:0,ind:3,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[540,540,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:0,k:[60,60,100],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[1080,1080],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[1,.5568627450980392,0,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:65,ix:5},lc:2,lj:2,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1},{ty:"tm",s:{a:0,k:0,ix:1},e:{a:1,k:[{i:{x:[.113],y:[1]},o:{x:[.647],y:[0]},t:0,s:[0]},{t:22.0000008960784,s:[100]}],ix:2},o:{a:0,k:0,ix:3},m:1,ix:2,nm:"Trim Paths 1",mn:"ADBE Vector Filter - Trim",hd:!1}],ip:0,op:94.0000038286985,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 5",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[540,540,0],ix:2},a:{a:0,k:[0,0,0],ix:1},s:{a:1,k:[{i:{x:[.321,.321,.667],y:[1,1,1]},o:{x:[.725,.725,.333],y:[0,0,0]},t:17,s:[0,0,100]},{t:40.0000016292334,s:[60,60,100]}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{d:1,ty:"el",s:{a:0,k:[1080,1080],ix:2},p:{a:0,k:[0,0],ix:3},nm:"Ellipse Path 1",mn:"ADBE Vector Shape - Ellipse",hd:!1},{ty:"st",c:{a:0,k:[.956862984452,.145097994337,.203922002456,1],ix:3},o:{a:0,k:100,ix:4},w:{a:0,k:0,ix:5},lc:1,lj:1,ml:4,bm:0,nm:"Stroke 1",mn:"ADBE Vector Graphic - Stroke",hd:!1},{ty:"fl",c:{a:0,k:[1,.5568627450980392,0,1],ix:4},o:{a:0,k:100,ix:5},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"Transform"}],nm:"Ellipse 1",np:3,cix:2,bm:0,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:17.0000006924242,op:111.000004521123,st:17.0000006924242,bm:0}],Tt=[],Lt={v:kt,meta:ht,fr:ut,ip:yt,op:ft,w:bt,h:St,nm:vt,ddd:gt,assets:wt,layers:Ct,markers:Tt},Mt=f(ce)(({theme:e})=>({backgroundColor:e.palette.background.default,maxWidth:"150px",aspectRatio:"1/1",options:{autoplay:!0,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},margin:"25px auto"})),Bt=()=>n(Mt,{animationData:Lt,loop:!1}),Pt=({meal:e})=>{const{t:a}=H(),o=()=>window.open(e.sourceUrl,"_blank");return y(ye,{children:[n(fe,{title:n(_,{component:"h4",variant:"h6",sx:{fontWeight:"bold"},children:e.title})}),y(be,{sx:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[n(_,{children:a("planner.card.max_ready_time",{time:e.readyInMinutes})}),y(_,{children:[a("planner.card.servings")," ",n("span",{children:e.servings})]}),n(U,{variant:"contained",color:"secondary",onClick:o,fullWidth:!0,sx:{color:"white"},children:a("planner.card.navigate_to_recipe")})]})]})},Et=({day:e,disabled:a})=>{const{t:o}=H(),i=[o("planner.meal_stepper.breakfast"),o("planner.meal_stepper.lunch"),o("planner.meal_stepper.dinner")],[r,{canGoToNextStep:l,canGoToPrevStep:x,goToNextStep:d,goToPrevStep:s}]=Se(e.meals.length+1);return y(X,{sx:{pointerEvents:a?"none":"auto",opacity:a?.6:1,maxWidth:600},children:[n(dt,{activeStep:r-1,orientation:"vertical",children:e.meals.map((c,p)=>y(Ee,{children:[n(qe,{sx:{textTransform:"capitalize"},optional:r===e.meals.length&&p===e.meals.length?n(_,{variant:"caption",children:o("planner.meal_stepper.last_step")}):null,children:i[p]}),y(it,{children:[n(Pt,{meal:c}),y("div",{children:[n(U,{variant:"contained",onClick:d,disabled:!l,sx:{mt:1,mr:1,borderRadius:"50px"},children:r===e.meals.length?o("planner.meal_stepper.finish"):o("planner.meal_stepper.next")}),n(U,{disabled:!x,onClick:s,sx:{mt:1,mr:1,borderRadius:"50px"},children:o("planner.meal_stepper.back")})]})]})]},c.id))}),r===e.meals.length+1&&n(Bt,{})]})},jt=xt.week,_t=()=>{const{t:e}=H(),a=W[K().day()>0?K().day()-1:6],[o,i]=h.useState(a??"monday"),{enqueueSnackbar:r,closeSnackbar:l}=pe(),x=s=>{console.log(a),i(s)},d=(s,c)=>()=>{if(s==="day"&&!c)throw new Error(e("planner.error.no_weekday").toString());r(e("planner.generate_new_question"),{variant:"info",autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"center"},action:p=>y(X,{sx:{display:"flex",gap:"1rem"},children:[n(U,{variant:"contained",onClick:()=>l(p),children:e("planner.yes")}),n(U,{variant:"contained",onClick:()=>l(p),children:e("planner.dismiss")})]})})};return y(de,{children:[n(me,{title:`${e("planner.title")} | Diet Genius`}),y(ve,{value:o,children:[n(ge,{onChange:(s,c)=>x(c),variant:"scrollable",allowScrollButtonsMobile:!0,sx:{borderBottom:1,borderColor:"divider"},children:W.map((s,c)=>n(we,{label:s,value:s,sx:{display:"flex",justifyContent:"center",textTransform:"capitalize"}},c))}),W.map((s,c)=>{const p=jt[s];return n(Ce,{value:s,children:n(Et,{day:p,disabled:a!==s})},c)})]}),n(Te,{title:e("planner.generate_tooltip"),children:n(xe,{sx:{bottom:72,top:"auto",ariaLabel:"Generate Day Plan"},onClick:d("week"),children:n(ke,{icon:he,style:{width:"32px",height:"32px"}})})}),n(ue,{})]})};export{_t as default};