class r extends HTMLElement{constructor(){super();const t=document.getElementById("typemachine"),s=this.dataset.message,e=new window.Typewriter(t,{loop:!1,delay:75})||void 0;e&&(console.log("Writing!"),e.pauseFor(2500).typeString(s).pauseFor(300).typeString("!").pauseFor(1e3).start())}}customElements.define("astro-typewriter",r);
