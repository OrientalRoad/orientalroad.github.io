import{g as b}from"./index.BdXRMbul.js";import{j as T,G as g,f as B,E as C,l as v,m as h,q as L,x as u,B as _,D as m,u as d,A as f,z as k,_ as A}from"./framework.BKtd1kvI.js";import{i as N}from"./theme.DqnIRwdQ.js";const I={class:"info custom-block wrapper"},S={key:0,class:"cover"},V=["src","alt"],q={class:"container"},w={class:"link-text"},D={class:"description"},P=T({__name:"AttractionCard",props:{name:{type:String,required:!0}},setup(n){var l,r,i;const{localeIndex:c}=g(),e=B(()=>b().find(o=>o.name===n.name)),t=`/${(r=(l=e.value)==null?void 0:l.city)==null?void 0:r.toLowerCase()}/attractions/${(i=e.value)==null?void 0:i.link}`;return(o,s)=>{var x;const p=C("Link"),$=C("Translate");return h(),v("div",I,[(x=e.value)!=null&&x.avatar?(h(),v("div",S,[_(p,{href:t},{default:m(()=>{var a,y;return[u("img",{src:(a=e.value)==null?void 0:a.avatar,alt:(y=e.value)==null?void 0:y.nameLocale[d(c)]},null,8,V)]}),_:1})])):L("",!0),u("div",q,[_(p,{href:t},{default:m(()=>{var a;return[u("span",w,[_($,null,{default:m(()=>s[0]||(s[0]=[f("Attraction")])),_:1}),f(": "+k((a=e.value)==null?void 0:a.nameLocale[d(c)]),1)])]}),_:1}),u("div",D,[_(p,{href:t},{default:m(()=>{var a;return[f(k((a=e.value)==null?void 0:a.introduce[d(c)]),1)]}),_:1})])])])}}}),G=A(P,[["__scopeId","data-v-941e530c"]]),Y=T({__name:"YoutubePlayTo",props:{to:{type:String,required:!0}},setup(n){const{localeIndex:c}=g(),e=r=>{const[i=0,o=0,s=0]=r.split(":").map(Number).reverse();return s*3600+o*60+i},t={root:()=>`Watch from ${n.to}`,ja:()=>`${n.to}から視聴開始`},l=()=>{N.$emit("youtube-play-to",e(n.to))};return(r,i)=>{var o,s;return h(),v("a",{onClick:l},k(((o=t==null?void 0:t[d(c)])==null?void 0:o.call(t))||((s=t==null?void 0:t.root)==null?void 0:s.call(t))),1)}}}),W=A(Y,[["__scopeId","data-v-60aa130c"]]);export{G as A,W as Y};
