import{d as p,k as c,u as v,ah as d,p as _,l as h,s as w,o as B,c as k,B as y}from"./framework.5fhU9H-2.js";import{g as $}from"./browser.hwsw6AuU.js";const u="https://www.orientalroad.com",T=["innerHTML"],M=p({__name:"TopNotificationBar",setup(x){const a=c(),{site:s,localeIndex:o}=v(),{primary:i,all:f}=$(),m=Object.keys(s.value.locales),{y:n}=d(),l=c(n.value<50),r=()=>{i!==o.value?f.every(e=>{if(m.includes(e)){const{redirectTemplate:t}=s.value.locales[e];return t&&(a.value=t.replace(":locale",`<a href="${u}/${e}/" hreflang="${e}">${u}/${e}/</a>`)),!1}return!0}):a.value=null};return _(()=>{r()}),h([o],()=>{r()}),w(()=>{l.value=n.value<50}),(e,t)=>a.value&&l.value?(B(),k("div",{key:0,class:"VPBannerContent",innerHTML:a.value},null,8,T)):y("",!0)}});export{M as default};
