import{a}from"./appwrite.b6070051.js";import"./core.astro_astro_type_script_index_0_lang.18466d55.js";import"./nav.astro_astro_type_script_index_0_lang.a40e6ab5.js";import"./ThemeSwitch.astro_astro_type_script_index_0_lang.a91d9298.js";import"./sdk.0b15df0d.js";import"./_commonjsHelpers.87174ba5.js";const r=document.querySelector("form");r?.addEventListener("submit",(e=>{e.preventDefault();const t=r.querySelector('input[id="email"]'),s=r.querySelector('input[id="password"]'),o=t?.value,i=s?.value;o?i?i.length<8?alert("Password must be at least 8 characters long."):a(o,i):alert("Password is required."):alert("Email is required.")}));