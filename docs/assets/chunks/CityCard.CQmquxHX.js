import{g as v}from"./index.gU99hOzQ.js";import{j as h,G as k,f as x,E as u,l as C,m as g,x as a,B as s,D as n,u as l,A as r,z as f,_ as D}from"./framework.D3smszVH.js";const y={class:"info custom-block wrapper"},B={class:"cover"},L=["src","alt"],N={class:"container"},T={class:"link-text"},V={class:"description"},w=h({__name:"CityCard",props:{name:{type:String,required:!0}},setup(m){const{localeIndex:o}=k(),t=x(()=>v().find(c=>c.name===m.name));return(c,d)=>{const i=u("Link"),p=u("Translate");return g(),C("div",y,[a("div",B,[s(i,{href:t.value.link},{default:n(()=>{var e,_;return[a("img",{src:(e=t.value)==null?void 0:e.avatar,alt:(_=t.value)==null?void 0:_.nameLocale[l(o)]},null,8,L)]}),_:1},8,["href"])]),a("div",N,[s(i,{href:t.value.link},{default:n(()=>{var e;return[a("span",T,[a("div",null,[s(p,null,{default:n(()=>d[0]||(d[0]=[r("Destination")])),_:1}),r(": "+f((e=t.value)==null?void 0:e.nameLocale[l(o)]),1)])])]}),_:1},8,["href"]),a("div",V,[s(i,{href:t.value.link},{default:n(()=>{var e;return[r(f((e=t.value)==null?void 0:e.introduce[l(o)]),1)]}),_:1},8,["href"])])])])}}}),S=D(w,[["__scopeId","data-v-4f5297d7"]]);export{S as C};
