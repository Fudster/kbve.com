const n=()=>{},u=t=>(e,n,r,{client:o})=>{if(!t.hasAttribute("ssr"))return;const s={};for(const[t,e]of Object.entries(r))s[t]=i(t,e);try{new e({target:t,props:{...n,$$slots:s,$$scope:{ctx:[]}},hydrate:"only"!==o,$$inline:!0})}catch{}};function i(t,e){let r;return[()=>({m(n){r=n,n.insertAdjacentHTML("beforeend",`<astro-slot${"default"===t?"":` name="${t}"`}>${e}</astro-slot>`)},c:n,l:n,d(){if(!r)return;const e=r.querySelector("astro-slot"+("default"===t?":not([name])":`[name="${t}"]`));e&&e.remove()}}),n,n]}export{u as default};