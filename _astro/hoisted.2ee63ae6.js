import{r as y}from"./appwrite.b6070051.js";import"./core.astro_astro_type_script_index_0_lang.18466d55.js";import"./ThemeSwitch.astro_astro_type_script_index_0_lang.a91d9298.js";import"./sdk.0b15df0d.js";import"./_commonjsHelpers.87174ba5.js";const r=document.querySelector("form"),a=document.querySelector("#accountLoad"),s=document.querySelector("#errorLoad"),c=document.querySelector("#errorMsg"),S=document.querySelector("#googleSSO"),f=document.querySelector("#twitterSSO"),E=document.querySelector("#githubSSO");function u(){r.style.display="initial",a.style.display="none"}function g(){s.style.display="none",c.innerText=""}function t(e){s.style.display="initial",c.innerText=e,console.log(e),u()}S?.addEventListener("click",(e=>{e.preventDefault(),t("Google SSO is Disabled")})),f?.addEventListener("click",(e=>{e.preventDefault(),t("Twitter SSO is Disabled")})),E?.addEventListener("click",(e=>{e.preventDefault(),t("Github SSO is Disabled")})),a.style.display="none",s.style.display="none",r?.addEventListener("submit",(e=>{e.preventDefault(),g(),u();const n=r.querySelector('input[id="email"]'),s=r.querySelector('input[id="password"]'),i=r.querySelector('input[id="name"]'),o=n?.value,a=s?.value,l=i?.value;o?l?a?a.length<8?t("Password must be at least 8 characters long."):l.length<8?t("Username must be at least 8 characters long."):y(o,a,l).then((function(e){}),(function(e){t(e)})):t("Password is required."):t("Username is required."):t("Email is required.")}));