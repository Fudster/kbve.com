import{r as y,R as O}from"./index.39e0ea27.js";import{g as Q}from"./_commonjsHelpers.87174ba5.js";import{C as X,c as R,a as Z,b as L,d as ee,i as te,o as oe,e as re,s as ae,u as ne,f as se,g as ie,h as le,j as ce,k as de,l as M,m as _,n as f,P as W,p as j,q as $,r as S,t as ue,B as pe,v as U,S as ge,w as fe,x as ve}from"./ButtonBase.918ee032.js";import{j as a}from"./jsx-runtime.e181d7ea.js";import{u as me}from"./useCookies.4e3fc4fd.js";import"./index.00faf15b.js";function he(e,t){return()=>null}function Ce(e,t){return()=>null}function xe(e,t,o,r,n){return null}const be={configure:e=>{X.configure(e)}},ye=Object.freeze(Object.defineProperty({__proto__:null,capitalize:R,createChainedFunction:Z,createSvgIcon:L,debounce:ee,deprecatedPropType:he,isMuiElement:te,ownerDocument:oe,ownerWindow:re,requirePropFactory:Ce,setRef:ae,unstable_ClassNameGenerator:be,unstable_useEnhancedEffect:ne,unstable_useId:se,unsupportedProp:xe,useControlled:ie,useEventCallback:le,useForkRef:ce,useIsFocusVisible:de},Symbol.toStringTag,{value:"Module"}));function Re(e){return M("MuiCard",e)}_("MuiCard",["root"]);const Me=e=>{const{classes:t}=e;return S({root:["root"]},Re,t)},_e=f(W,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),je=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiCard"}),{className:n,raised:i=!1,...l}=r,s={...r,raised:i},c=Me(s);return a.jsx(_e,{className:$(c.root,n),elevation:i?8:void 0,ref:o,ownerState:s,...l})}),$e=je;function Se(e){return M("MuiTypography",e)}_("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const Ie=e=>{const{align:t,gutterBottom:o,noWrap:r,paragraph:n,variant:i,classes:l}=e,s={root:["root",i,e.align!=="inherit"&&`align${R(t)}`,o&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return S(s,Se,l)},we=f("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${R(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>({margin:0,...t.variant&&e.typography[t.variant],...t.align!=="inherit"&&{textAlign:t.align},...t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},...t.gutterBottom&&{marginBottom:"0.35em"},...t.paragraph&&{marginBottom:16}})),D={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},ke={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ae=e=>ke[e]||e,Ne=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiTypography"}),n=Ae(r.color),i=ue({...r,color:n}),{align:l="inherit",className:s,component:c,gutterBottom:u=!1,noWrap:g=!1,paragraph:d=!1,variant:v="body1",variantMapping:h=D,...p}=i,C={...i,align:l,color:n,className:s,component:c,gutterBottom:u,noWrap:g,paragraph:d,variant:v,variantMapping:h},x=c||(d?"p":h[v]||D[v])||"span",b=Ie(C);return a.jsx(we,{as:x,ref:o,ownerState:C,className:$(b.root,s),...p})}),m=Ne;function Pe(e){return M("MuiCardHeader",e)}const ze=_("MuiCardHeader",["root","avatar","action","content","title","subheader"]),H=ze,Be=e=>{const{classes:t}=e;return S({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Pe,t)},Ee=f("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>({[`& .${H.title}`]:t.title,[`& .${H.subheader}`]:t.subheader,...t.root})})({display:"flex",alignItems:"center",padding:16}),Te=f("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Oe=f("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Ue=f("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),De=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiCardHeader"}),{action:n,avatar:i,className:l,component:s="div",disableTypography:c=!1,subheader:u,subheaderTypographyProps:g,title:d,titleTypographyProps:v,...h}=r,p={...r,component:s,disableTypography:c},C=Be(p);let x=d;x!=null&&x.type!==m&&!c&&(x=a.jsx(m,{variant:i?"body2":"h5",className:C.title,component:"span",display:"block",...v,children:x}));let b=u;return b!=null&&b.type!==m&&!c&&(b=a.jsx(m,{variant:i?"body2":"body1",className:C.subheader,color:"text.secondary",component:"span",display:"block",...g,children:b})),a.jsxs(Ee,{className:$(C.root,l),as:s,ref:o,ownerState:p,...h,children:[i&&a.jsx(Te,{className:C.avatar,ownerState:p,children:i}),a.jsxs(Ue,{className:C.content,ownerState:p,children:[x,b]}),n&&a.jsx(Oe,{className:C.action,ownerState:p,children:n})]})}),He=De;function Fe(e){return M("MuiCardMedia",e)}_("MuiCardMedia",["root","media","img"]);const qe=e=>{const{classes:t,isMediaComponent:o,isImageComponent:r}=e;return S({root:["root",o&&"media",r&&"img"]},Fe,t)},Le=f("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:r,isImageComponent:n}=o;return[t.root,r&&t.media,n&&t.img]}})(({ownerState:e})=>({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",...e.isMediaComponent&&{width:"100%"},...e.isImageComponent&&{objectFit:"cover"}})),We=["video","audio","picture","iframe","img"],Ve=["picture","img"],Ge=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiCardMedia"}),{children:n,className:i,component:l="div",image:s,src:c,style:u,...g}=r,d=We.indexOf(l)!==-1,v=!d&&s?{backgroundImage:`url("${s}")`,...u}:u,h={...r,component:l,isMediaComponent:d,isImageComponent:Ve.indexOf(l)!==-1},p=qe(h);return a.jsx(Le,{className:$(p.root,i),as:l,role:!d&&s?"img":void 0,ref:o,style:v,ownerState:h,src:d?s||c:void 0,...g,children:n})}),Je=Ge;function Ke(e){return M("MuiCardContent",e)}_("MuiCardContent",["root"]);const Ye=e=>{const{classes:t}=e;return S({root:["root"]},Ke,t)},Qe=f("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Xe=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiCardContent"}),{className:n,component:i="div",...l}=r,s={...r,component:i},c=Ye(s);return a.jsx(Qe,{as:i,className:$(c.root,n),ownerState:s,ref:o,...l})}),F=Xe;function Ze(e){return M("MuiCardActions",e)}_("MuiCardActions",["root","spacing"]);const et=e=>{const{classes:t,disableSpacing:o}=e;return S({root:["root",!o&&"spacing"]},Ze,t)},tt=f("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:e})=>({display:"flex",alignItems:"center",padding:8,...!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}}})),ot=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiCardActions"}),{disableSpacing:n=!1,className:i,...l}=r,s={...r,disableSpacing:n},c=et(s);return a.jsx(tt,{className:$(c.root,i),ownerState:s,ref:o,...l})}),rt=ot,at=L(a.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function nt(e){return M("MuiAvatar",e)}_("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const st=e=>{const{classes:t,variant:o,colorDefault:r}=e;return S({root:["root",o,r&&"colorDefault"],img:["img"],fallback:["fallback"]},nt,t)},it=f("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",...t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},...t.variant==="square"&&{borderRadius:0},...t.colorDefault&&{color:(e.vars||e).palette.background.default,...e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}}})),lt=f("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ct=f(at,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function dt({crossOrigin:e,referrerPolicy:t,src:o,srcSet:r}){const[n,i]=y.useState(!1);return y.useEffect(()=>{if(!o&&!r)return;i(!1);let l=!0;const s=new Image;return s.onload=()=>{l&&i("loaded")},s.onerror=()=>{l&&i("error")},s.crossOrigin=e,s.referrerPolicy=t,s.src=o,r&&(s.srcset=r),()=>{l=!1}},[e,t,o,r]),n}const ut=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiAvatar"}),{alt:n,children:i,className:l,component:s="div",imgProps:c,sizes:u,src:g,srcSet:d,variant:v="circular",...h}=r;let p=null;const C=dt({...c,src:g,srcSet:d}),x=g||d,b=x&&C!=="error",I={...r,colorDefault:!b,component:s,variant:v},N=st(I);return b?p=a.jsx(lt,{alt:n,src:g,srcSet:d,sizes:u,ownerState:I,className:N.img,...c}):i!=null?p=i:x&&n?p=n[0]:p=a.jsx(ct,{ownerState:I,className:N.fallback}),a.jsx(it,{as:s,ownerState:I,className:$(N.root,l),ref:o,...h,children:p})}),pt=ut;function gt(e){return M("MuiIconButton",e)}const ft=_("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),vt=ft,mt=e=>{const{classes:t,disabled:o,color:r,edge:n,size:i}=e,l={root:["root",o&&"disabled",r!=="default"&&`color${R(r)}`,n&&`edge${R(n)}`,`size${R(i)}`]};return S(l,gt,t)},ht=f(pe,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${R(o.color)}`],o.edge&&t[`edge${R(o.edge)}`],t[`size${R(o.size)}`]]}})(({theme:e,ownerState:t})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),...!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:U(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},...t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},...t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}}),({theme:e,ownerState:t})=>{var o;const r=(o=(e.vars||e).palette)==null?void 0:o[t.color];return{...t.color==="inherit"&&{color:"inherit"},...t.color!=="inherit"&&t.color!=="default"&&{color:r?.main,...!t.disableRipple&&{"&:hover":{...r&&{backgroundColor:e.vars?`rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:U(r.main,e.palette.action.hoverOpacity)},"@media (hover: none)":{backgroundColor:"transparent"}}}},...t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},...t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},[`&.${vt.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}}),Ct=y.forwardRef(function(t,o){const r=j({props:t,name:"MuiIconButton"}),{edge:n=!1,children:i,className:l,color:s="default",disabled:c=!1,disableFocusRipple:u=!1,size:g="medium",...d}=r,v={...r,edge:n,color:s,disabled:c,disableFocusRipple:u,size:g},h=mt(v);return a.jsx(ht,{className:$(h.root,l),centerRipple:!0,focusRipple:!u,disabled:c,ref:o,ownerState:v,...d,children:i})}),w=Ct;var z={},V={exports:{}};(function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(V);var k=V.exports,P={};const xt=Q(ye);var q;function A(){return q||(q=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=xt}(P)),P}var bt=k;Object.defineProperty(z,"__esModule",{value:!0});var G=z.default=void 0,yt=bt(A()),Rt=a,Mt=(0,yt.default)((0,Rt.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");G=z.default=Mt;var B={},_t=k;Object.defineProperty(B,"__esModule",{value:!0});var J=B.default=void 0,jt=_t(A()),$t=a,St=(0,jt.default)((0,$t.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");J=B.default=St;var E={},It=k;Object.defineProperty(E,"__esModule",{value:!0});var K=E.default=void 0,wt=It(A()),kt=a,At=(0,wt.default)((0,kt.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");K=E.default=At;var T={},Nt=k;Object.defineProperty(T,"__esModule",{value:!0});var Y=T.default=void 0,Pt=Nt(A()),zt=a,Bt=(0,Pt.default)((0,zt.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");Y=T.default=Bt;const Ft=({url:e="https://api.kbve.com/api/users/me",display:t=!0})=>{const[o,r]=me(["member"]),[n,i]=O.useState(!1);O.useState(!1);const l=()=>{i(!n)},s=f(u=>{const{expand:g,...d}=u;return a.jsx(w,{...d})})(({theme:u,expand:g})=>({transform:g?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:u.transitions.create("transform",{duration:u.transitions.duration.shortest})})),c=()=>a.jsx(ge,{direction:"column",alignItems:"center",children:a.jsx(W,{variant:"outlined",children:a.jsxs($e,{sx:{maxWidth:345},children:[a.jsx(He,{avatar:a.jsx(pt,{sx:{bgcolor:fe[500]},"aria-label":"recipe",children:o.user.username}),action:a.jsx(w,{"aria-label":"settings",children:a.jsx(Y,{})}),title:`${o.user.username}'s Profile`,subheader:"Your Profile"}),a.jsx(Je,{component:"img",height:"194",image:"/static/images/cards/paella.jpg",alt:"Paella dish"}),a.jsx(F,{children:a.jsx(m,{variant:"body2",color:"text.secondary"})}),a.jsxs(rt,{disableSpacing:!0,children:[a.jsx(w,{"aria-label":"add to favorites",children:a.jsx(G,{})}),a.jsx(w,{"aria-label":"share",children:a.jsx(J,{})}),a.jsx(s,{expand:n,onClick:l,"aria-expanded":n,"aria-label":"show more",children:a.jsx(K,{})})]}),a.jsx(ve,{in:n,timeout:"auto",unmountOnExit:!0,children:a.jsxs(F,{children:[a.jsx(m,{paragraph:!0,children:"Public Key:"}),a.jsx(m,{paragraph:!0,children:o.user.public_key}),a.jsx(m,{paragraph:!0,children:"Extra Paragraph from React?"}),a.jsx(m,{paragraph:!0,children:"Making me hungry. Add rice and stir very gently to distribute. Top with artichokes ... ... minutes more. (Discard any mussels that don't open.)"}),a.jsxs(m,{children:["Email: ",o.user.email]}),a.jsxs(m,{children:["Join: ",o.user.createdAt]}),a.jsxs(m,{children:["Update: ",o.user.updatedAt]})]})})]})})});if(!o.user)window.location="https://kbve.com/login/";else return c()};export{Ft as default};
