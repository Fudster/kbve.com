import{r as e}from"./chunks/index.0d03162d.js";import"./chunks/lottie-react.esm.df7ac6f1.js";import{e as x}from"./chunks/exports.a36c4946.js";import{j as t}from"./chunks/jsx-runtime.44949ced.js";function O({apps:s,buttonClass:p}){const[r,l]=e.exports.useState(!1);e.exports.useState(!1);const[U,m]=e.exports.useState(!1),[N,f]=e.exports.useState(),[S,v]=e.exports.useState(),[h,k]=e.exports.useState(p),c=e.exports.useRef(!0),g=e.exports.useRef(null);e.exports.useEffect(()=>()=>{c.current=!1},[]);const w=e.exports.useCallback(async()=>{r||(l(!0),await API.sendRequest(),c.current&&l(!1))},[r]),{unityProvider:y,sendMessage:C,addEventListener:d,removeEventListener:u,isLoaded:P,loadingProgression:b}=x.useUnityContext({loaderUrl:s.loaderUrl,dataUrl:s.dataUrl,frameworkUrl:s.frameworkUrl,codeUrl:s.codeUrl}),n=e.exports.useCallback((a,o)=>{m(!0),f(a),v(o)},[]);e.exports.useEffect(()=>(d("GameOver",n),()=>{u("GameOver",n)}),[d,u,n]);const[i,j]=e.exports.useState(window.devicePixelRatio);e.exports.useCallback(function(){const a=function(){j(window.devicePixelRatio)},o=window.matchMedia(`screen and (resolution: ${i}dppx)`);return o.addEventListener("change",a),function(){o.removeEventListener("change",a)}},[i]);const R=Math.round(b*100);return r===!1?t.exports.jsx(t.exports.Fragment,{children:t.exports.jsxs("button",{type:"button",className:h,disabled:r,onClick:w,children:["Play Now",t.exports.jsx("span",{className:"absolute top-0 right-0 px-5 py-1 text-xs gradient-text tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-orange-400",children:"New"})]})}):t.exports.jsxs("div",{children:[P===!1&&t.exports.jsx("div",{className:"loading-overlay",children:t.exports.jsxs("p",{children:["Zane's Rage is Loading... (",R,"%)"]})}),t.exports.jsx(e.exports.Fragment,{children:t.exports.jsx("div",{id:"unity-container",className:"",children:t.exports.jsx(x.Unity,{ref:g,className:"",matchWebGLToCanvasSize:!0,unityProvider:y,style:{width:1280,height:720},devicePixelRatio:i})})})]})}export{O as default};
