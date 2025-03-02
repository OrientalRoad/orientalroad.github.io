import{g as le,a as ie}from"./index.BdXRMbul.js";import{X as re,h as ce,g as ue,Y as me}from"./theme.DqnIRwdQ.js";import{u as de}from"./useJsonLD.CVVSaCMM.js";import{a as te,A as ve}from"./OKIcon.vue_vue_type_script_setup_true_lang.B_Es9s4r.js";import{j as D,G as ne,f as x,E as C,l as i,m as o,x as a,q as g,B as c,D as m,A as p,z as k,u as d,F as b,_ as A,r as pe,y as oe,v as he,C as ae,at as _e}from"./framework.BKtd1kvI.js";import{B as ge}from"./Breadcrumb.onJNw06o.js";import{S as fe,P as we}from"./SubNav.DOgmZ-O2.js";import"./assets.JE4U2mNC.js";const ke={class:"ticket"},ye={class:"title"},$e=["href"],Le={class:"ticket-button"},Ce=D({__name:"AttractionTicket",props:{name:{type:String,required:!0},nameLocale:{type:String,required:!0},price:{type:Number,required:!0}},setup(u){const{localeIndex:n}=ne(),{currency:h,formattedAmount:v}=re(u.price||0),s=x(()=>{var f;return`${(f=te[u.name])==null?void 0:f.tickets}?curr=${h.value}&Allianceid=${ve}&SID=164267118&trip_sub1=attraction_tickets`}),t={root:()=>`Tickets from CNY ${u.price}${h.value!=="CNY"?` / roughly ${v.value}`:""}`,ja:()=>`観光チケット 人民元${u.price}元${h.value!=="CNY"?`（約${v.value}）`:""}〜`};return(f,l)=>{var _;const e=C("ClientOnly"),r=C("Translate");return o(),i("div",ke,[a("div",ye,[c(e,null,{default:m(()=>[p(k(t[d(n)]()),1)]),_:1})]),(_=d(te)[u.name])!=null&&_.tickets?(o(),i(b,{key:0},[l[1]||(l[1]=a("div",{class:"affiliate"},[a("div",null,"powered by"),a("div",null,[a("img",{src:"https://ak-d.tripcdn.com/images/05E5p12000cga1phzA0ED.webp"})])],-1)),c(e,null,{default:m(()=>[a("a",{href:s.value,target:"_blank",rel:"nofollow"},[a("div",Le,[c(r,null,{default:m(()=>l[0]||(l[0]=[p("Book Tickets")])),_:1})])],8,$e)]),_:1})],64)):g("",!0)])}}}),be=A(Ce,[["__scopeId","data-v-49ba6448"]]),xe={class:"image-gallery"},De={class:"large-image"},Ae=["src"],Se={key:0,class:"thumbnail-list",ref:"thumbnailList"},Te=["src","onClick"],Pe=11,Ne=D({__name:"PhotoSlide",props:{thumbnails:{type:Array,required:!0},photos:{type:Array,required:!0}},setup(u){const n=pe(0),h=x(()=>{var v;return(v=u.photos)==null?void 0:v[n.value]});return(v,s)=>{var t,f,l;return o(),i("div",xe,[a("div",De,[h.value?(o(),i("img",{key:0,src:h.value,alt:"Photo of attraction"},null,8,Ae)):g("",!0),n.value>0?(o(),i("span",{key:1,class:"left",onClick:s[0]||(s[0]=e=>n.value=n.value-1)},"❮")):g("",!0),n.value<((t=u.photos)==null?void 0:t.length)-1?(o(),i("span",{key:2,class:"right",onClick:s[1]||(s[1]=e=>n.value=n.value+1)},"❯")):g("",!0)]),((f=u.thumbnails)==null?void 0:f.length)>1?(o(),i("div",Se,[(o(!0),i(b,null,oe((l=u.thumbnails)==null?void 0:l.slice(0,Pe),(e,r)=>(o(),i("img",{key:r,src:e,onClick:_=>n.value=r,alt:"thumbnails"},null,8,Te))),128))],512)):g("",!0)])}}}),ze=A(Ne,[["__scopeId","data-v-fcc036c0"]]),Be="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1740919466111'%20class='icon'%20viewBox='0%200%201054%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='6219'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='205.859375'%20height='200'%3e%3cpath%20d='M570.477039%2028.040397L694.725004%20290.073071a48.345512%2048.345512%200%200%200%2036.259134%2027.073486l281.370879%2043.027506a48.345512%2048.345512%200%200%201%2027.073486%2081.703915l-206.435335%20211.269886a48.345512%2048.345512%200%200%200-13.053288%2042.060595L870.219212%20966.910236a48.345512%2048.345512%200%200%201-67.683717%2052.696607l-253.813936-115.545773a48.345512%2048.345512%200%200%200-40.126775%200l-255.747757%20115.062318A48.345512%2048.345512%200%200%201%20185.16331%20966.910236l48.345512-268.801046a48.345512%2048.345512%200%200%200-13.053288-42.060595L14.020198%20443.811798A48.345512%2048.345512%200%200%201%2041.093685%20362.591338l281.370879-43.027505A48.345512%2048.345512%200%200%200%20358.723697%20290.073071L483.455118%2028.040397a48.345512%2048.345512%200%200%201%2087.021921%200z'%20fill='%23FFCE00'%20p-id='6220'%3e%3c/path%3e%3cpath%20d='M1039.911958%20443.811798a48.345512%2048.345512%200%200%200-27.073486-81.703915l-281.370879-43.027505a48.345512%2048.345512%200%200%201-36.742589-29.007307L570.477039%2028.040397a48.345512%2048.345512%200%200%200-43.510961-28.040397v898.743064a48.345512%2048.345512%200%200%201%2019.82166%204.351096l253.813937%20115.545773A48.345512%2048.345512%200%200%200%20870.219212%20966.910236l-48.345512-268.801046a48.345512%2048.345512%200%200%201%2013.053288-42.060595z'%20fill='%23FFEC00'%20p-id='6221'%3e%3c/path%3e%3c/svg%3e",Ie={class:"rating"},Me=["src","alt"],Ee={class:"text"},Ve=D({__name:"Rating",props:{star:{type:Number}},setup(u){return(n,h)=>(o(),i("span",Ie,[(o(!0),i(b,null,oe(new Array(Math.ceil(u.star)),(v,s)=>(o(),i("span",{class:"star",key:s},[a("img",{class:he({half:s+1>u.star}),src:d(Be),alt:`${s} star`},null,10,Me)]))),128)),a("span",Ee,[a("b",null,k(u.star),1),h[0]||(h[0]=p(" /5"))])]))}}),Fe=A(Ve,[["__scopeId","data-v-28438da5"]]),se="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1740915848528'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='5546'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='200'%20height='200'%3e%3cpath%20d='M512%20901.12a389.12%20389.12%200%201%201%20389.12-389.12%20389.5296%20389.5296%200%200%201-389.12%20389.12z%20m0-737.28a348.16%20348.16%200%201%200%20348.16%20348.16A348.5696%20348.5696%200%200%200%20512%20163.84z'%20p-id='5547'%3e%3c/path%3e%3cpath%20d='M491.52%20225.28h40.96v81.92h-40.96zM225.28%20491.52h81.92v40.96h-81.92zM491.52%20716.8h40.96v81.92h-40.96zM716.8%20491.52h81.92v40.96h-81.92zM512%20541.0816L374.784%20403.456l28.672-28.672%20108.544%20108.1344%20169.984-169.5744%2028.672%2028.672-198.656%20199.0656z'%20p-id='5548'%3e%3c/path%3e%3c/svg%3e",Ge={class:"more-attractions"},qe={style:{"padding-bottom":"16px"}},Oe={class:"attraction-header"},Ye={class:"base-info"},He={class:"introduce"},je={class:"label"},Re={key:0},Ue={class:"slogan"},We={key:1,class:"fact"},Je=["src"],Xe={key:2,class:"fact"},Ze=["src"],Ke={key:1,class:"introduce bottom"},Qe={class:"ticket-price"},et={class:"photos"},tt=D({__name:"Attraction",setup(u){const{localeIndex:n,params:h}=ne(),{$t:v}=ce(),s=x(()=>ue().find(l=>{var e;return l.name===((e=h.value)==null?void 0:e.cityName)})),t=x(()=>le().find(l=>{var e;return l.name===((e=h.value)==null?void 0:e.name)})),f=l=>{const e=y=>`${y<10?"0":""}${y}`,r=e(Math.floor(l)),_=e(l%1*60);return`${r}:${_}`};return de(()=>{var l,e,r,_,y,$;return{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:v("Destinations"),item:n.value==="root"?"https://www.orientalroad.com/places":`https://www.orientalroad.com/${n.value}/places`},{"@type":"ListItem",position:2,name:(e=(l=s==null?void 0:s.value)==null?void 0:l.nameLocale)==null?void 0:e[n.value],item:n.value==="root"?`https://www.orientalroad.com${s.value.link}`:`https://www.orientalroad.com/${n.value}${s.value.link}`},{"@type":"ListItem",position:3,name:`${(_=(r=s.value)==null?void 0:r.nameLocale)==null?void 0:_[n.value]}${v(" Attractions")}`,item:n.value==="root"?`https://www.orientalroad.com${s.value.link}/attractions`:`https://www.orientalroad.com/${n.value}${s.value.link}/attractions`},{"@type":"ListItem",position:3,name:($=(y=t.value)==null?void 0:y.nameLocale)==null?void 0:$[n.value],item:`https://www.orientalroad.com${location.pathname}`}]}}),(l,e)=>{var $,S;const r=C("Translate"),_=C("Link"),y=C("Chinese");return o(),i(b,null,[c(fe),c(me,{noPaddingTop:"",cover:($=t.value)==null?void 0:$.cover,coverMobile:(S=t.value)==null?void 0:S.cover_mobile},{header:m(()=>{var T,P,N,z,B,I,M,E,V,F,G,q,O,Y,H,j,R,U,W,J,X,Z,K;return[c(ge,{list:[{name:d(v)(`${(T=s.value)==null?void 0:T.region} China`)},{name:d(v)((P=s.value)==null?void 0:P.province)},{name:d(v)((N=s.value)==null?void 0:N.name),link:(z=s.value)==null?void 0:z.link}]},{default:m(()=>{var w,L;return[d(ie).has((w=s.value)==null?void 0:w.name)?(o(),ae(_,{key:0,href:`${(L=s.value)==null?void 0:L.link}/attractions`},{default:m(()=>{var Q,ee;return[a("span",Ge,[a("span",null,[c(r,null,{default:m(()=>e[0]||(e[0]=[p("See all attractions in ")])),_:1})]),a("span",null,k((ee=(Q=s.value)==null?void 0:Q.nameLocale)==null?void 0:ee[d(n)]),1)])]}),_:1},8,["href"])):g("",!0)]}),_:1},8,["list"]),c(we,{name:(B=t.value)==null?void 0:B.name,nameLocale:(M=(I=t.value)==null?void 0:I.nameLocale)==null?void 0:M[d(n)],href:(E=s.value)==null?void 0:E.link},{"after-tag":m(()=>{var w;return[a("div",qe,[c(Fe,{star:(w=t.value)==null?void 0:w.rating},null,8,["star"])])]}),_:1},8,["name","nameLocale","href"]),a("div",Oe,[a("div",Ye,[a("div",He,[a("div",je,[c(r,null,{default:m(()=>e[1]||(e[1]=[p("Facts")])),_:1})]),(V=t.value)!=null&&V.nameChinese?(o(),i("div",Re,[c(y,{word:t.value.nameChinese},_e({default:m(()=>{var w,L;return[(w=t.value)!=null&&w.namePinyin?(o(),i(b,{key:0},[p(k((L=t.value)==null?void 0:L.nameLocale[d(n)]),1)],64)):g("",!0)]}),_:2},[(F=t.value)!=null&&F.namePinyin?{name:"pinyin",fn:m(()=>[p(k(t.value.namePinyin),1)]),key:"0"}:void 0]),1032,["word"])])):g("",!0),a("div",Ue,k((q=(G=t.value)==null?void 0:G.introduce)==null?void 0:q[d(n)]),1),(O=t.value)!=null&&O.opensHour?(o(),i("div",We,[a("div",null,[a("img",{src:d(se),alt:"Open hours"},null,8,Je)]),a("div",null,[c(r,null,{default:m(()=>e[2]||(e[2]=[p("Opens at ")])),_:1}),p(k((H=(Y=t.value.opensHour)==null?void 0:Y.map(f))==null?void 0:H.join("-")),1)])])):g("",!0),(j=t.value)!=null&&j.visitDuration?(o(),i("div",Xe,[a("div",null,[a("img",{src:d(se),alt:"Visit Duration"},null,8,Ze)]),a("div",null,[c(r,null,{default:m(()=>e[3]||(e[3]=[p("Recommended sightseeing time ")])),_:1}),p(k(Array.isArray(t.value.visitDuration)?(R=t.value.visitDuration)==null?void 0:R.join("-"):t.value.visitDuration)+" ",1),c(r,null,{default:m(()=>e[4]||(e[4]=[p("hours")])),_:1})])])):g("",!0)]),((U=t.value)==null?void 0:U.ticketPrice)>0?(o(),ae(be,{key:0,name:(W=t.value)==null?void 0:W.name,nameLocale:(J=t.value)==null?void 0:J.nameLocale[d(n)],price:(X=t.value)==null?void 0:X.ticketPrice},null,8,["name","nameLocale","price"])):(o(),i("div",Ke,[a("div",Qe,[c(r,null,{default:m(()=>e[5]||(e[5]=[p("No Entry Fee")])),_:1})])]))]),a("div",et,[c(ze,{thumbnails:(Z=t.value)==null?void 0:Z.photoThumb,photos:(K=t.value)==null?void 0:K.photo},null,8,["thumbnails","photos"])])])]}),_:1},8,["cover","coverMobile"])],64)}}}),ut=A(tt,[["__scopeId","data-v-3e1053a3"]]);export{ut as default};
