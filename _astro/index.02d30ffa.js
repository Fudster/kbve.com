import{r as e}from"./index.0b2a3d34.js";import"./lottie-react.esm.d4496b6d.js";import{e as m}from"./exports.39d33ffe.js";import{j as t}from"./jsx-runtime.32b752e4.js";function O({apps:s,buttonClass:f}){const[a,l]=e.useState(!1);e.useState(!1);const[U,x]=e.useState(!1),[N,v]=e.useState(),[S,h]=e.useState(),[g,k]=e.useState(f),c=e.useRef(!0),p=e.useRef(null);e.useEffect(()=>()=>{c.current=!1},[]);const w=e.useCallback(async()=>{a||(l(!0),await API.sendRequest(),c.current&&l(!1))},[a]),{unityProvider:y,sendMessage:C,addEventListener:d,removeEventListener:u,isLoaded:P,loadingProgression:b}=m.useUnityContext({loaderUrl:s.loaderUrl,dataUrl:s.dataUrl,frameworkUrl:s.frameworkUrl,codeUrl:s.codeUrl}),i=e.useCallback((r,n)=>{x(!0),v(r),h(n)},[]);e.useEffect(()=>(d("GameOver",i),()=>{u("GameOver",i)}),[d,u,i]);const[o,j]=e.useState(window.devicePixelRatio);e.useCallback(function(){const r=function(){j(window.devicePixelRatio)},n=window.matchMedia(`screen and (resolution: ${o}dppx)`);return n.addEventListener("change",r),function(){n.removeEventListener("change",r)}},[o]);const R=Math.round(b*100);return a===!1?t.jsx(t.Fragment,{children:t.jsxs("button",{type:"button",className:g,disabled:a,onClick:w,children:["Play Now",t.jsx("span",{className:"absolute top-0 right-0 px-5 py-1 text-xs gradient-text tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-orange-400",children:"New"})]})}):t.jsxs("div",{children:[P===!1&&t.jsx("div",{className:"loading-overlay",children:t.jsxs("p",{children:["Zane's Rage is Loading... (",R,"%)"]})}),t.jsx(e.Fragment,{children:t.jsx("div",{id:"unity-container",className:"",children:t.jsx(m.Unity,{ref:p,className:"",matchWebGLToCanvasSize:!0,unityProvider:y,style:{width:1280,height:720},devicePixelRatio:o})})})]})}export{O as default};
