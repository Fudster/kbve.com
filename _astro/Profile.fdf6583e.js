import{r as R,R as D}from"./index.c6e42af6.js";import{g as X}from"./_commonjsHelpers.87174ba5.js";import{C as Z,c as _,a as ee,b as V,d as te,i as oe,o as ae,e as re,s as se,u as ne,f as ie,g as le,h as ce,j as de,k as ue,l as M,m as j,n as m,P as G,p as $,_ as S,q as l,r as N,t as I,v as pe,B as ge,w as H,S as fe,x as me,y as ve}from"./ButtonBase.94c70ed2.js";import{j as r}from"./jsx-runtime.da7e1c14.js";import{u as he}from"./useCookies.0c6bab74.js";import"./index.4fee4cd8.js";function Ce(e,t){return()=>null}function xe(e,t){return()=>null}function be(e,t,o,a,s){return null}const ye={configure:e=>{Z.configure(e)}},Re=Object.freeze(Object.defineProperty({__proto__:null,capitalize:_,createChainedFunction:ee,createSvgIcon:V,debounce:te,deprecatedPropType:Ce,isMuiElement:oe,ownerDocument:ae,ownerWindow:re,requirePropFactory:xe,setRef:se,unstable_ClassNameGenerator:ye,unstable_useEnhancedEffect:ne,unstable_useId:ie,unsupportedProp:be,useControlled:le,useEventCallback:ce,useForkRef:de,useIsFocusVisible:ue},Symbol.toStringTag,{value:"Module"}));function _e(e){return M("MuiCard",e)}j("MuiCard",["root"]);const Me=["className","raised"],je=e=>{const{classes:t}=e;return I({root:["root"]},_e,t)},$e=m(G,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Se=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiCard"}),{className:s,raised:i=!1}=a,c=S(a,Me),n=l({},a,{raised:i}),d=je(n);return r.jsx($e,l({className:N(d.root,s),elevation:i?8:void 0,ref:o,ownerState:n},c))}),Ne=Se;function Ie(e){return M("MuiTypography",e)}j("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const we=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],ke=e=>{const{align:t,gutterBottom:o,noWrap:a,paragraph:s,variant:i,classes:c}=e,n={root:["root",i,e.align!=="inherit"&&`align${_(t)}`,o&&"gutterBottom",a&&"noWrap",s&&"paragraph"]};return I(n,Ie,c)},Pe=m("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${_(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>l({margin:0},t.variant&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),F={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Ae={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ze=e=>Ae[e]||e,Be=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiTypography"}),s=ze(a.color),i=pe(l({},a,{color:s})),{align:c="inherit",className:n,component:d,gutterBottom:p=!1,noWrap:f=!1,paragraph:u=!1,variant:v="body1",variantMapping:C=F}=i,g=S(i,we),x=l({},i,{align:c,color:s,className:n,component:d,gutterBottom:p,noWrap:f,paragraph:u,variant:v,variantMapping:C}),b=d||(u?"p":C[v]||F[v])||"span",y=ke(x);return r.jsx(Pe,l({as:b,ref:o,ownerState:x,className:N(y.root,n)},g))}),h=Be;function Te(e){return M("MuiCardHeader",e)}const Ee=j("MuiCardHeader",["root","avatar","action","content","title","subheader"]),q=Ee,Oe=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Ue=e=>{const{classes:t}=e;return I({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Te,t)},De=m("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>l({[`& .${q.title}`]:t.title,[`& .${q.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),He=m("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Fe=m("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),qe=m("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),We=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiCardHeader"}),{action:s,avatar:i,className:c,component:n="div",disableTypography:d=!1,subheader:p,subheaderTypographyProps:f,title:u,titleTypographyProps:v}=a,C=S(a,Oe),g=l({},a,{component:n,disableTypography:d}),x=Ue(g);let b=u;b!=null&&b.type!==h&&!d&&(b=r.jsx(h,l({variant:i?"body2":"h5",className:x.title,component:"span",display:"block"},v,{children:b})));let y=p;return y!=null&&y.type!==h&&!d&&(y=r.jsx(h,l({variant:i?"body2":"body1",className:x.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:y}))),r.jsxs(De,l({className:N(x.root,c),as:n,ref:o,ownerState:g},C,{children:[i&&r.jsx(He,{className:x.avatar,ownerState:g,children:i}),r.jsxs(qe,{className:x.content,ownerState:g,children:[b,y]}),s&&r.jsx(Fe,{className:x.action,ownerState:g,children:s})]}))}),Le=We;function Ve(e){return M("MuiCardMedia",e)}j("MuiCardMedia",["root","media","img"]);const Ge=["children","className","component","image","src","style"],Je=e=>{const{classes:t,isMediaComponent:o,isImageComponent:a}=e;return I({root:["root",o&&"media",a&&"img"]},Ve,t)},Ke=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:s}=o;return[t.root,a&&t.media,s&&t.img]}})(({ownerState:e})=>l({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),Ye=["video","audio","picture","iframe","img"],Qe=["picture","img"],Xe=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiCardMedia"}),{children:s,className:i,component:c="div",image:n,src:d,style:p}=a,f=S(a,Ge),u=Ye.indexOf(c)!==-1,v=!u&&n?l({backgroundImage:`url("${n}")`},p):p,C=l({},a,{component:c,isMediaComponent:u,isImageComponent:Qe.indexOf(c)!==-1}),g=Je(C);return r.jsx(Ke,l({className:N(g.root,i),as:c,role:!u&&n?"img":void 0,ref:o,style:v,ownerState:C,src:u?n||d:void 0},f,{children:s}))}),Ze=Xe;function et(e){return M("MuiCardContent",e)}j("MuiCardContent",["root"]);const tt=["className","component"],ot=e=>{const{classes:t}=e;return I({root:["root"]},et,t)},at=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),rt=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiCardContent"}),{className:s,component:i="div"}=a,c=S(a,tt),n=l({},a,{component:i}),d=ot(n);return r.jsx(at,l({as:i,className:N(d.root,s),ownerState:n,ref:o},c))}),W=rt;function st(e){return M("MuiCardActions",e)}j("MuiCardActions",["root","spacing"]);const nt=["disableSpacing","className"],it=e=>{const{classes:t,disableSpacing:o}=e;return I({root:["root",!o&&"spacing"]},st,t)},lt=m("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:e})=>l({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),ct=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiCardActions"}),{disableSpacing:s=!1,className:i}=a,c=S(a,nt),n=l({},a,{disableSpacing:s}),d=it(n);return r.jsx(lt,l({className:N(d.root,i),ownerState:n,ref:o},c))}),dt=ct,ut=V(r.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function pt(e){return M("MuiAvatar",e)}j("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const gt=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],ft=e=>{const{classes:t,variant:o,colorDefault:a}=e;return I({root:["root",o,a&&"colorDefault"],img:["img"],fallback:["fallback"]},pt,t)},mt=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],o.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>l({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.variant==="square"&&{borderRadius:0},t.colorDefault&&l({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),vt=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ht=m(ut,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});function Ct({crossOrigin:e,referrerPolicy:t,src:o,srcSet:a}){const[s,i]=R.useState(!1);return R.useEffect(()=>{if(!o&&!a)return;i(!1);let c=!0;const n=new Image;return n.onload=()=>{c&&i("loaded")},n.onerror=()=>{c&&i("error")},n.crossOrigin=e,n.referrerPolicy=t,n.src=o,a&&(n.srcset=a),()=>{c=!1}},[e,t,o,a]),s}const xt=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiAvatar"}),{alt:s,children:i,className:c,component:n="div",imgProps:d,sizes:p,src:f,srcSet:u,variant:v="circular"}=a,C=S(a,gt);let g=null;const x=Ct(l({},d,{src:f,srcSet:u})),b=f||u,y=b&&x!=="error",k=l({},a,{colorDefault:!y,component:n,variant:v}),z=ft(k);return y?g=r.jsx(vt,l({alt:s,src:f,srcSet:u,sizes:p,ownerState:k,className:z.img},d)):i!=null?g=i:b&&s?g=s[0]:g=r.jsx(ht,{ownerState:k,className:z.fallback}),r.jsx(mt,l({as:n,ownerState:k,className:N(z.root,c),ref:o},C,{children:g}))}),bt=xt;function yt(e){return M("MuiIconButton",e)}const Rt=j("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),_t=Rt,Mt=["edge","children","className","color","disabled","disableFocusRipple","size"],jt=e=>{const{classes:t,disabled:o,color:a,edge:s,size:i}=e,c={root:["root",o&&"disabled",a!=="default"&&`color${_(a)}`,s&&`edge${_(s)}`,`size${_(i)}`]};return I(c,yt,t)},$t=m(ge,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${_(o.color)}`],o.edge&&t[`edge${_(o.edge)}`],t[`size${_(o.size)}`]]}})(({theme:e,ownerState:t})=>l({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:H(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var o;const a=(o=(e.vars||e).palette)==null?void 0:o[t.color];return l({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&l({color:a?.main},!t.disableRipple&&{"&:hover":l({},a&&{backgroundColor:e.vars?`rgba(${a.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:H(a.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${_t.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),St=R.forwardRef(function(t,o){const a=$({props:t,name:"MuiIconButton"}),{edge:s=!1,children:i,className:c,color:n="default",disabled:d=!1,disableFocusRipple:p=!1,size:f="medium"}=a,u=S(a,Mt),v=l({},a,{edge:s,color:n,disabled:d,disableFocusRipple:p,size:f}),C=jt(v);return r.jsx($t,l({className:N(C.root,c),centerRipple:!0,focusRipple:!p,disabled:d,ref:o,ownerState:v},u,{children:i}))}),P=St;var T={},w={},Nt={get exports(){return w},set exports(e){w=e}};(function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Nt);var B={};const It=X(Re);var L;function A(){return L||(L=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=It}(B)),B}var wt=w;Object.defineProperty(T,"__esModule",{value:!0});var J=T.default=void 0,kt=wt(A()),Pt=r,At=(0,kt.default)((0,Pt.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");J=T.default=At;var E={},zt=w;Object.defineProperty(E,"__esModule",{value:!0});var K=E.default=void 0,Bt=zt(A()),Tt=r,Et=(0,Bt.default)((0,Tt.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");K=E.default=Et;var O={},Ot=w;Object.defineProperty(O,"__esModule",{value:!0});var Y=O.default=void 0,Ut=Ot(A()),Dt=r,Ht=(0,Ut.default)((0,Dt.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");Y=O.default=Ht;var U={},Ft=w;Object.defineProperty(U,"__esModule",{value:!0});var Q=U.default=void 0,qt=Ft(A()),Wt=r,Lt=(0,qt.default)((0,Wt.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");Q=U.default=Lt;const Xt=({url:e="https://api.kbve.com/api/users/me",display:t=!0})=>{const[o,a]=he(["member"]),[s,i]=D.useState(!1);D.useState(!1);const c=()=>{i(!s)},n=m(p=>{const{expand:f,...u}=p;return r.jsx(P,{...u})})(({theme:p,expand:f})=>({transform:f?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:p.transitions.create("transform",{duration:p.transitions.duration.shortest})})),d=()=>r.jsx(fe,{direction:"column",alignItems:"center",children:r.jsx(G,{variant:"outlined",children:r.jsxs(Ne,{sx:{maxWidth:345},children:[r.jsx(Le,{avatar:r.jsx(bt,{sx:{bgcolor:me[500]},"aria-label":"recipe",children:o.user.username}),action:r.jsx(P,{"aria-label":"settings",children:r.jsx(Q,{})}),title:`${o.user.username}'s Profile`,subheader:"Your Profile"}),r.jsx(Ze,{component:"img",height:"194",image:"/static/images/cards/paella.jpg",alt:"Paella dish"}),r.jsx(W,{children:r.jsx(h,{variant:"body2",color:"text.secondary"})}),r.jsxs(dt,{disableSpacing:!0,children:[r.jsx(P,{"aria-label":"add to favorites",children:r.jsx(J,{})}),r.jsx(P,{"aria-label":"share",children:r.jsx(K,{})}),r.jsx(n,{expand:s,onClick:c,"aria-expanded":s,"aria-label":"show more",children:r.jsx(Y,{})})]}),r.jsx(ve,{in:s,timeout:"auto",unmountOnExit:!0,children:r.jsxs(W,{children:[r.jsx(h,{paragraph:!0,children:"Public Key:"}),r.jsx(h,{paragraph:!0,children:o.user.public_key}),r.jsx(h,{paragraph:!0,children:"Extra Paragraph from React?"}),r.jsx(h,{paragraph:!0,children:"Making me hungry. Add rice and stir very gently to distribute. Top with artichokes ... ... minutes more. (Discard any mussels that don't open.)"}),r.jsxs(h,{children:["Email: ",o.user.email]}),r.jsxs(h,{children:["Join: ",o.user.createdAt]}),r.jsxs(h,{children:["Update: ",o.user.updatedAt]})]})})]})})});if(!o.user)window.location="https://kbve.com/login/";else return d()};export{Xt as default};
