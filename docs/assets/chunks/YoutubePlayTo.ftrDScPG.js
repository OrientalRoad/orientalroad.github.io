import{q as g,c as B,r as L}from"./theme.D_xMloUw.js";import{j as A,G as T,f as N,E as C,l as f,m as h,q,x as u,B as _,D as m,u as d,A as v,z as k,_ as $}from"./framework.D3smszVH.js";const I=()=>g.map((e,c)=>({...e,...B[e.name]||{}})),S={class:"info custom-block wrapper"},V={key:0,class:"cover"},w=["src","alt"],D={class:"container"},P={class:"link-text"},Y={class:"description"},j=A({__name:"AttractionCard",props:{name:{type:String,required:!0}},setup(e){var l,r,i;const{localeIndex:c}=T(),a=N(()=>I().find(s=>s.name===e.name)),t=`/${(r=(l=a.value)==null?void 0:l.city)==null?void 0:r.toLowerCase()}/attractions/${(i=a.value)==null?void 0:i.link}`;return(s,n)=>{var x;const p=C("Link"),b=C("Translate");return h(),f("div",S,[(x=a.value)!=null&&x.avatar?(h(),f("div",V,[_(p,{href:t},{default:m(()=>{var o,y;return[u("img",{src:(o=a.value)==null?void 0:o.avatar,alt:(y=a.value)==null?void 0:y.nameLocale[d(c)]},null,8,w)]}),_:1})])):q("",!0),u("div",D,[_(p,{href:t},{default:m(()=>{var o;return[u("span",P,[_(b,null,{default:m(()=>n[0]||(n[0]=[v("Attraction")])),_:1}),v(": "+k((o=a.value)==null?void 0:o.nameLocale[d(c)]),1)])]}),_:1}),u("div",Y,[_(p,{href:t},{default:m(()=>{var o;return[v(k((o=a.value)==null?void 0:o.introduce[d(c)]),1)]}),_:1})])])])}}}),W=$(j,[["__scopeId","data-v-941e530c"]]),E=A({__name:"YoutubePlayTo",props:{to:{type:String,required:!0}},setup(e){const{localeIndex:c}=T(),a=r=>{const[i=0,s=0,n=0]=r.split(":").map(Number).reverse();return n*3600+s*60+i},t={root:()=>`Watch from ${e.to}`,ja:()=>`${e.to}から視聴開始`},l=()=>{L.$emit("youtube-play-to",a(e.to))};return(r,i)=>{var s,n;return h(),f("a",{onClick:l},k(((s=t==null?void 0:t[d(c)])==null?void 0:s.call(t))||((n=t==null?void 0:t.root)==null?void 0:n.call(t))),1)}}}),F=$(E,[["__scopeId","data-v-60aa130c"]]);export{W as A,F as Y};
