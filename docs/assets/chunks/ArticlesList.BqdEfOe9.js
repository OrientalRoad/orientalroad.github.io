import{j as v,G as g,f as k,E as h,l as u,m as c,F as x,y as A,x as o,B as l,D as r,u as i,H as B,A as m,z as _,_ as L}from"./framework.BKtd1kvI.js";import{e as N}from"./theme.DqnIRwdQ.js";import{d as C}from"./constants.CCij70ew.js";const D={class:"article"},S={class:"cover"},T=["src","alt"],V={class:"type"},$={class:"title"},b={class:"description"},w=v({__name:"ArticlesList",props:{city:{type:String},attraction:{type:String},limit:{type:Number}},setup(a){const{localeIndex:f}=g(),p=k(()=>{let n=N();return typeof a.city=="string"&&(n=n.filter(d=>{var e;return(e=d.city)==null?void 0:e.includes(a.city)})),typeof a.attraction=="string"&&(n=n.filter(d=>{var e;return(e=d.attraction)==null?void 0:e.includes(a.attraction)})),typeof a.limit=="number"&&(n=n.slice(0,a.limit)),n});return(n,d)=>{const e=h("Link"),y=h("Translate");return c(),u("div",null,[(c(!0),u(x,null,A(p.value,t=>(c(),u("dl",{key:t.link},[o("dd",D,[o("article",null,[o("div",S,[l(e,{href:`/articles/${t.link}`},{default:r(()=>{var s;return[o("img",{src:t!=null&&t.avatar?i(B)(t==null?void 0:t.avatar):i(C),alt:(s=t==null?void 0:t.title)==null?void 0:s[i(f)]},null,8,T)]}),_:2},1032,["href"])]),o("div",null,[o("div",V,[l(y,null,{default:r(()=>{var s;return[m(_((s=t==null?void 0:t.category)==null?void 0:s[0]),1)]}),_:2},1024)]),o("div",$,[l(e,{href:`/articles/${t.link}`},{default:r(()=>{var s;return[m(_((s=t==null?void 0:t.title)==null?void 0:s[i(f)]),1)]}),_:2},1032,["href"])]),o("div",b,[l(e,{href:`/articles/${t.link}`},{default:r(()=>{var s;return[m(_((s=t==null?void 0:t.description)==null?void 0:s[i(f)]),1)]}),_:2},1032,["href"])])])])])]))),128))])}}}),j=L(w,[["__scopeId","data-v-d4164f82"]]);export{j as A};
