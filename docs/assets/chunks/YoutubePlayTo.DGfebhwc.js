import{e as g,k as B}from"./theme.IbICzeIE.js";import{j as T,G as A,f as L,E as C,l as f,m as h,q as N,x as u,B as _,D as m,u as d,A as v,z as k,_ as $}from"./framework.D3smszVH.js";const I={class:"info custom-block wrapper"},S={key:0,class:"cover"},V=["src","alt"],q={class:"container"},w={class:"link-text"},D={class:"description"},P=T({__name:"AttractionCard",props:{name:{type:String,required:!0}},setup(n){var l,r,i;const{localeIndex:c}=A(),e=L(()=>g().find(o=>o.name===n.name)),t=`/${(r=(l=e.value)==null?void 0:l.city)==null?void 0:r.toLowerCase()}/attractions/${(i=e.value)==null?void 0:i.link}`;return(o,s)=>{var x;const p=C("Link"),b=C("Translate");return h(),f("div",I,[(x=e.value)!=null&&x.avatar?(h(),f("div",S,[_(p,{href:t},{default:m(()=>{var a,y;return[u("img",{src:(a=e.value)==null?void 0:a.avatar,alt:(y=e.value)==null?void 0:y.nameLocale[d(c)]},null,8,V)]}),_:1})])):N("",!0),u("div",q,[_(p,{href:t},{default:m(()=>{var a;return[u("span",w,[_(b,null,{default:m(()=>s[0]||(s[0]=[v("Attraction")])),_:1}),v(": "+k((a=e.value)==null?void 0:a.nameLocale[d(c)]),1)])]}),_:1}),u("div",D,[_(p,{href:t},{default:m(()=>{var a;return[v(k((a=e.value)==null?void 0:a.introduce[d(c)]),1)]}),_:1})])])])}}}),z=$(P,[["__scopeId","data-v-941e530c"]]),Y=T({__name:"YoutubePlayTo",props:{to:{type:String,required:!0}},setup(n){const{localeIndex:c}=A(),e=r=>{const[i=0,o=0,s=0]=r.split(":").map(Number).reverse();return s*3600+o*60+i},t={root:()=>`Watch from ${n.to}`,ja:()=>`${n.to}から視聴開始`},l=()=>{B.$emit("youtube-play-to",e(n.to))};return(r,i)=>{var o,s;return h(),f("a",{onClick:l},k(((o=t==null?void 0:t[d(c)])==null?void 0:o.call(t))||((s=t==null?void 0:t.root)==null?void 0:s.call(t))),1)}}}),G=$(Y,[["__scopeId","data-v-60aa130c"]]);export{z as A,G as Y};
