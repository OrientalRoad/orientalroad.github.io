import{k as v}from"./theme.B_HS8aR3.js";import{d as p,k as c,u as d,q as _,m as h,v as w,o as k,c as y,e as B}from"./framework.C2oIDUA1.js";import{g as $}from"./browser.hwsw6AuU.js";const u="https://www.orientalroad.com",T=["innerHTML"],b=p({__name:"TopNotificationBar",setup(x){const a=c(),{site:o,localeIndex:s}=d(),{primary:i,all:m}=$(),f=Object.keys(o.value.locales),{y:r}=v(),n=c(r.value<50),l=()=>{i!==s.value?m.every(e=>{if(f.includes(e)){const{redirectTemplate:t}=o.value.locales[e];return t&&(a.value=t.replace(":locale",`<a href="${u}/${e}/" hreflang="${e}">${u}/${e}/</a>`)),!1}return!0}):a.value=null};return _(()=>{l()}),h([s],()=>{l()}),w(()=>{n.value=r.value<50}),(e,t)=>a.value&&n.value?(k(),y("div",{key:0,class:"VPBannerContent",innerHTML:a.value},null,8,T)):B("",!0)}});export{b as default};
