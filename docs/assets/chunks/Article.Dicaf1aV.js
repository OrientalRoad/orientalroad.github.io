import{j as Q,i as X,Q as U,h as W,g as J,e as K,U as O,W as Z}from"./theme.BJAnYumd.js";import{g as ee}from"./index.BaOabKnd.js";import{u as te}from"./useJsonLD.CPVQRHB5.js";import{_ as b,u as H,z as P,c as y,e as x,x as c,o as f,C as t,I as _,w as L,a as T,F as oe,G as se,t as V,d as Y,k as $,l as I,q as B,s as j,S as q,K as ae,n as D,r as G,Q as ne,b as ie}from"./framework.CDATIFxo.js";import{B as le}from"./Breadcrumb.fRCaxPRR.js";import{_ as re}from"./YouTube.BRv66vYJ.js";import"./config.D1Mz7_m6.js";const ce={key:0,class:"reference"},de={class:"reference-title"},ue={class:"reference-list-wrap"},ve={class:"reference-list"},me=["href"],pe={class:"site"},_e={__name:"References",setup(h){const{frontmatter:i}=H();return(n,e)=>{const u=P("Translate");return c(i).reference?(f(),y("dl",ce,[t("dt",de,[_(u,null,{default:L(()=>e[0]||(e[0]=[T("References")])),_:1})]),t("dd",ue,[t("ul",ve,[(f(!0),y(oe,null,se(c(i).reference,o=>(f(),y("li",{key:o.title,class:"reference-item"},[e[2]||(e[2]=t("span",{class:"index"},"-",-1)),t("a",{href:o.href,rel:"noreferrer",target:"_blank",class:"text"},[T(V(o.title)+" ",1),e[1]||(e[1]=t("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",height:"24px",viewBox:"0 0 24 24",width:"24px",class:"icon"},[t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"})],-1))],8,me),t("span",pe,V(o.site),1)]))),128))])])])):x("",!0)}}},fe=b(_e,[["__scopeId","data-v-ce98e6c0"]]),he=Y({__name:"FloatingSlot",setup(h){const i=$(null),n=$(null),e=$(!0),u=$({width:0,height:0}),o=$({isDragging:!1,startX:0,startY:0,initialBottom:0,initialRight:0}),v=Q("floatingSlotPosition",["20px","20px"]),m=I(()=>({bottom:v.value[1],right:v.value[0]})),w=()=>{if(i.value){const s=i.value.getBoundingClientRect();e.value=s.top>=0&&s.bottom<=window.innerHeight}},l=()=>{if(i.value){const s=i.value.querySelector(":first-child");s&&(u.value={width:s.offsetWidth,height:s.offsetHeight})}},a=()=>{w()},p=s=>{const g=s.touches?s.touches[0]:s;o.value.isDragging=!0,o.value.startX=g.clientX,o.value.startY=g.clientY,o.value.initialBottom=parseFloat(v.value[1]),o.value.initialRight=parseFloat(v.value[0]),document.addEventListener("mousemove",d),document.addEventListener("touchmove",d),document.addEventListener("mouseup",r),document.addEventListener("touchend",r)},d=s=>{if(!o.value.isDragging)return;const g=s.touches?s.touches[0]:s;s.cancelable&&s.preventDefault();const S=g.clientX-o.value.startX,k=g.clientY-o.value.startY;v.value=[`${o.value.initialRight-S}px`,`${o.value.initialBottom-k}px`]},r=()=>{o.value.isDragging=!1,document.removeEventListener("mousemove",d),document.removeEventListener("touchmove",d),document.removeEventListener("mouseup",r),document.removeEventListener("touchend",r)};B(()=>{l(),window.addEventListener("scroll",a),window.addEventListener("resize",a),w()}),j(()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)});const E=I(()=>({width:`${u.value.width}px`,height:`${u.value.height}px`}));return(s,g)=>(f(),y("div",{ref_key:"container",ref:i,class:"slot-container"},[e.value?x("",!0):(f(),y("div",{key:0,class:"placeholder",style:q(E.value)},null,4)),t("div",{ref_key:"floatingSlot",ref:n,class:D({"floating-slot":!e.value}),style:q(m.value),onMousedown:p,onTouchstart:ae(p,["stop"])},[G(s.$slots,"default",{},void 0,!0)],38)],512))}}),ge=b(he,[["__scopeId","data-v-c1001a13"]]),ye={name:"YouTubePlayer",props:{videoId:{type:String,required:!0},height:{type:String,default:"360"},width:{type:String,default:"640"}},setup(h){const i=$(null),n=`youtube-player-${Math.random().toString(36).substr(2,9)}`;let e=null;const u=()=>{if(window.onYouTubeIframeAPIReady)o();else{const a=document.createElement("script");a.src="https://www.youtube.com/iframe_api";const p=document.getElementsByTagName("script")[0];p.parentNode.insertBefore(a,p),window.onYouTubeIframeAPIReady=o}},o=()=>{var a;(a=window.YT)!=null&&a.Player&&(e=new window.YT.Player(n,{height:h.height,width:h.width,videoId:h.videoId,events:{onReady:()=>console.log(`Player ${n} is ready!`)}}))},v=a=>{e&&e.seekTo(a,!0)},m=()=>{e&&e.playVideo()},w=()=>{e&&e.pauseVideo()},l=a=>{v(a)};return B(()=>{u()}),B(()=>{X.$on("youtube-play-to",l)}),j(()=>{X.$off("youtube-play-to",l)}),{playerRef:i,playerId:n,jumpToTime:v,playVideo:m,pauseVideo:w}}},we=["id"];function $e(h,i,n,e,u,o){return f(),y("div",{id:e.playerId,ref:"playerRef"},null,8,we)}const Ie=b(ye,[["render",$e],["__scopeId","data-v-9249eae5"]]),be={class:"vlog-container"},Se={class:"video"},ke={class:"background"},xe={class:"description"},Le=Y({__name:"Vlog",props:{videoId:{type:String,required:!0}},setup(h){return(i,n)=>{const e=P("Translate");return f(),y("div",be,[_(ge,null,{default:L(()=>[t("div",Se,[t("div",ke,[t("div",null,[_(re,{size:"40"})]),t("div",null,[_(e,null,{default:L(()=>n[0]||(n[0]=[T("Gathering YouTube awesomeness...")])),_:1})])]),_(Ie,{videoId:h.videoId,width:"100%",height:"100%"},null,8,["videoId"])])]),_:1}),t("div",xe,[G(i.$slots,"default",{},void 0,!0)])])}}}),Te=b(Le,[["__scopeId","data-v-f493d4f0"]]),Ve={class:"container"},Ee={key:0,class:"aside"},Be={class:"aside-container"},De={class:"aside-content"},Pe={class:"content"},Ye={class:"content-container"},Re={class:"main"},ze={class:"vp-doc"},Ae=Y({__name:"Article",setup(h){const{theme:i,frontmatter:n,localeIndex:e,params:u}=H(),o=ne(),{hasAside:v}=U(),{$t:m}=W(),w=I(()=>o.path.replace(/[./]+/g,"_").replace(/_html$/,"")),l=I(()=>J().find(d=>d.name===n.value.city)),a=I(()=>{if(typeof n.value.attraction=="string")return ee().find(d=>{var r;return d.city===((r=l.value)==null?void 0:r.name)&&d.name===n.value.attraction})}),p=I(()=>K().find(d=>{var r;return d.link===((r=u.value)==null?void 0:r.article)}));return te(()=>({"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:m("Articles"),item:e.value==="root"?"https://www.orientalroad.com/articles":`https://www.orientalroad.com/${e.value}/articles`},{"@type":"ListItem",position:2,name:n.value.title,item:`https://www.orientalroad.com${location.pathname}`}]})),(d,r)=>{var s,g,S,k,R,z,A,C,F;const E=P("Content");return f(),y("div",{class:D(["VPDoc",{"has-sidebar":((s=c(n))==null?void 0:s.aside)!==!1}])},[t("div",Ve,[c(v)?(f(),y("div",Ee,[r[0]||(r[0]=t("div",{class:"aside-curtain"},null,-1)),t("div",Be,[t("div",De,[_(O)])])])):x("",!0),t("div",Pe,[t("div",Ye,[_(le,{list:[l.value&&{name:c(m)(`${(g=l.value)==null?void 0:g.region} China`)},l.value&&{name:c(m)((S=l.value)==null?void 0:S.province)},l.value&&{name:c(m)((k=l.value)==null?void 0:k.name),link:(R=l.value)==null?void 0:R.link},a.value&&{name:c(m)("attractions"),link:((z=l.value)==null?void 0:z.link)+"/attractions"},a.value&&{name:c(m)(c(n).attraction),link:a.value.url}].filter(Boolean)},null,8,["list"]),t("main",Re,[t("div",ze,[t("h1",null,V((C=(A=p.value)==null?void 0:A.title)==null?void 0:C[c(e)]),1),(F=p.value)!=null&&F.videoId?(f(),ie(Te,{key:0,videoId:p.value.videoId},{default:L(()=>{var N,M;return[T(V((M=(N=p.value)==null?void 0:N.introduce)==null?void 0:M[c(e)]),1)]}),_:1},8,["videoId"])):x("",!0)]),_(E,{class:D(["vp-doc",[w.value,c(i).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"]),_(fe)]),_(Z)])])])],2)}}}),je=b(Ae,[["__scopeId","data-v-d8a2c4df"]]);export{je as default};
