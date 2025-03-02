import{a as b}from"./index.BdXRMbul.js";import{g as S,u as z}from"./theme.DqnIRwdQ.js";import{A}from"./ArticlesList.BqdEfOe9.js";import{A as B}from"./AttractionsList.B8AJ_5KV.js";import{j as T,G as D,f as H,E as h,l as p,m as u,F as w,B as i,C as E,q as _,p as n,D as r,A as c,z as v,u as d,_ as g,x as t,ao as P}from"./framework.BKtd1kvI.js";import{_ as G}from"./OKIcon.vue_vue_type_script_setup_true_lang.B_Es9s4r.js";const h1=T({__name:"CityContent",setup(e){const{localeIndex:a,params:o}=D(),s=H(()=>S().find(l=>{var f;return l.name===((f=o.value)==null?void 0:f.name)}));return(l,f)=>{var $,L,k,x,y,M,C;const m=h("H2"),V=h("Chinese");return u(),p(w,null,[i(m,{title:"Overview"}),($=s.value)!=null&&$.nameChinese&&((L=s.value)!=null&&L.namePinyin)?(u(),E(V,{key:0,word:s.value.nameChinese},{pinyin:r(()=>[c(v(s.value.namePinyin),1)]),default:r(()=>[c(" "+v(s.value.nameLocale[d(a)]),1)]),_:1},8,["word"])):_("",!0),n(l.$slots,"intro"),i(m,{title:"Attractions",subtitle:"Must-see attractions",actionText:"See all attractions",actionLink:`${(k=s.value)==null?void 0:k.link}/attractions`,actionVisible:d(b).has((x=s.value)==null?void 0:x.name)},null,8,["actionLink","actionVisible"]),i(B,{city:(y=s.value)==null?void 0:y.name,limit:6},null,8,["city"]),n(l.$slots,"after-attractions"),i(m,{title:"Interests",subtitle:"Travel stories",actionText:"See all articles",actionLink:`${(M=s.value)==null?void 0:M.link}/articles`,actionVisible:!1},null,8,["actionLink"]),i(A,{city:(C=s.value)==null?void 0:C.name,limit:6},null,8,["city"]),n(l.$slots,"after-articles"),i(m,{title:"Get There",subtitle:"How to arrive"}),n(l.$slots,"get-there"),n(l.$slots,"flights-banner"),n(l.$slots,"trains-banner")],64)}}}),I=["innerHTML"],N=T({__name:"Ad",props:{html:{type:String}},setup(e){return(a,o)=>(u(),p("div",{class:"ad",innerHTML:e.html},null,8,I))}}),_1=g(N,[["__scopeId","data-v-ed168153"]]),F="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4530'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='m18.92%206.01c-.2-.59-.76-1.01-1.42-1.01h-11c-.66%200-1.21.42-1.42%201.01l-2.08%205.99v8c0%20.55.45%201%201%201h1c.55%200%201-.45%201-1v-1h12v1c0%20.55.45%201%201%201h1c.55%200%201-.45%201-1v-8zm-12.07.99h10.29l1.08%203.11h-12.45zm12.15%2010h-14v-5h14z'%20/%3e%3ccircle%20cx='7.5'%20cy='14.5'%20r='1.5'%20/%3e%3ccircle%20cx='16.5'%20cy='14.5'%20r='1.5'%20/%3e%3c/svg%3e",O="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M12%202C8.13%202%205%205.13%205%209c0%205.25%207%2013%207%2013s7-7.75%207-13c0-3.87-3.13-7-7-7zM7%209c0-2.76%202.24-5%205-5s5%202.24%205%205c0%202.88-2.88%207.19-5%209.88C9.92%2016.21%207%2011.85%207%209z'%20/%3e%3ccircle%20cx='12'%20cy='9'%20r='2.5'%3e%3c/circle%3e%3c/svg%3e",j={class:"airport"},U={class:"item"},W=["src"],Y={class:"item"},q=["src"],J={class:"item"},K={__name:"Airport",props:["name","duration","distance","hour240"],setup(e){const{lang:a}=D();return(o,s)=>{const l=h("Translate");return u(),p(w,null,[t("div",j,[c(v(e.name)+" ",1),s[4]||(s[4]=t("span",{class:"divider"},null,-1)),t("span",U,[t("img",{src:d(F),width:"14",alt:"transportation duration"},null,8,W),t("span",null,[c(v(e.duration)+" ",1),t("span",null,[i(l,null,{default:r(()=>s[0]||(s[0]=[c(" min")])),_:1})])])]),s[5]||(s[5]=t("span",{class:"divider"},null,-1)),t("span",Y,[t("img",{src:d(O),width:"14",alt:"transportation distance"},null,8,q),t("span",null,[c(v(e.distance)+" ",1),t("span",null,[i(l,null,{default:r(()=>s[1]||(s[1]=[c(" km")])),_:1})])])]),e.hour240&&d(a)!=="ja-JP"?(u(),p(w,{key:0},[s[3]||(s[3]=t("span",{class:"divider"},null,-1)),t("span",J,[i(G,{alt:"Support 240-Hour Transit Visa"}),i(l,null,{default:r(()=>s[2]||(s[2]=[c("240-Hour Transit Visa")])),_:1})])],64)):_("",!0)]),n(o.$slots,"default",{},void 0,!0)],64)}}},f1=g(K,[["__scopeId","data-v-db9ef13d"]]),w1={__name:"MobileOnly",setup(e){const{isMobile:a}=z();return(o,s)=>d(a)?n(o.$slots,"default",{key:0}):_("",!0)}},g1={__name:"PCOnly",setup(e){const{isMobile:a}=z();return(o,s)=>d(a)?_("",!0):n(o.$slots,"default",{key:0})}},Q={},R={class:"wrapper"},X={class:"item peak"},Z={class:"detail"},t1={class:"label"},s1={class:"title"},a1={class:"desc"},e1={class:"item off"},n1={class:"detail"},l1={class:"label"},i1={class:"title"},o1={class:"desc"};function c1(e,a){const o=h("Translate");return u(),p("div",R,[t("div",X,[a[1]||(a[1]=P('<svg class="icon" viewBox="0 0 1221 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-7a72d418><path d="M1204.814491 122.670376l-104.202498-9.819364a18.026592 18.026592 0 0 1-14.655767-11.138382L1048.290907 11.139994a17.880035 17.880035 0 0 0-33.122032 0l-37.079088 90.572636a17.586919 17.586919 0 0 1-14.655767 11.138382l-104.349055 9.819364a18.026592 18.026592 0 0 0-10.112479 31.363339l78.554907 69.028659a17.733477 17.733477 0 0 1 5.715749 17.58692L908.91457 337.084236a18.026592 18.026592 0 0 0 26.673495 19.638727l86.908693-51.002067a17.586919 17.586919 0 0 1 18.173151 0L1128.751064 357.162636A18.026592 18.026592 0 0 0 1154.69177 337.084236l-23.302668-96.874615a17.733477 17.733477 0 0 1 5.715749-17.58692l78.554907-69.028659a18.319708 18.319708 0 0 0-10.845267-31.363339z" fill="#FED150" data-v-7a72d418></path><path d="M928.699854 224.674509l4.250173-17.147247a18.026592 18.026592 0 0 0-5.715749-17.000689l-74.451293-66.097505a18.026592 18.026592 0 0 0-4.103614 29.311532l78.554907 69.028659a14.655766 14.655766 0 0 1 1.465576 1.90525zM1211.263028 124.575625L1137.104851 190.526573a18.026592 18.026592 0 0 0-5.715749 17.733478l4.103614 17.293804 1.612135-1.758692 78.554907-69.028659a18.319708 18.319708 0 0 0-4.39673-30.190879zM1150.588155 320.376662a17.880035 17.880035 0 0 1-22.56988 3.663942L1040.816466 272.89198a18.319708 18.319708 0 0 0-18.17315 0l-86.908694 51.148624a17.733477 17.733477 0 0 1-22.423322-3.810499L908.91457 337.084236a18.026592 18.026592 0 0 0 26.673495 19.638727l86.908693-51.002067a17.586919 17.586919 0 0 1 18.173151 0L1128.751064 357.162636A18.026592 18.026592 0 0 0 1154.69177 337.084236z" fill="#FED150" opacity=".5" data-v-7a72d418></path><path d="M869.490559 544.463328a42.501722 42.501722 0 0 0-25.06136-73.278831L601.143479 448.321502a42.208607 42.208607 0 0 1-34.880724-25.794149l-86.762136-211.043034a41.622376 41.622376 0 0 0-77.235888 0l-86.469021 211.043034a41.182703 41.182703 0 0 1-34.734166 25.794149L37.922382 471.331055a41.915491 41.915491 0 0 0-23.595784 73.278831l183.050521 161.213429a42.062049 42.062049 0 0 1 13.336747 41.182703L155.608185 971.97203a42.062049 42.062049 0 0 0 61.993891 46.019106l190.524961-112.116612c71.227024-56.4247 69.468332-125.160244 56.717816-147.583566-14.655766-25.354476-34.294493-36.199743-52.760759-26.673495s-19.638727 18.319708-19.638727 18.319708a34.734166 34.734166 0 1 1 34.294493 60.381757s-40.303357 25.06136-67.416524-22.862995 18.612823-83.39131 28.432186-88.813944a83.537868 83.537868 0 0 1 112.995958 39.424011c27.845956 49.096817 16.414458 112.995958-28.432187 166.489505l193.163 113.435631a41.915491 41.915491 0 0 0 61.993891-46.019106l-54.372893-225.552243a41.915491 41.915491 0 0 1 13.19019-41.182703z" fill="#FED150" data-v-7a72d418></path><path d="M205.43779 713.590871l5.276076-24.768245a41.768934 41.768934 0 0 0-13.336747-41.036146L14.912829 487.012725A8.295164 8.295164 0 0 1 11.542003 483.641898 42.355164 42.355164 0 0 0 14.912829 544.463328l183.05052 161.213429a43.967299 43.967299 0 0 1 7.474441 7.914114zM871.542366 484.81436l-2.051807 2.198365-183.197078 161.213428a41.768934 41.768934 0 0 0-13.19019 41.036146l6.008864 24.621687a42.64828 42.64828 0 0 1 7.181326-8.353787l183.197078-161.213428a42.355164 42.355164 0 0 0 2.051807-59.502411zM460.887796 840.802922a41.622376 41.622376 0 0 0-40.596473 0.732788l-202.689247 119.15138a41.622376 41.622376 0 0 1-55.985027-13.19019l-6.008864 24.47513a42.062049 42.062049 0 0 0 61.993891 46.019106l190.524961-112.116612a173.524272 173.524272 0 0 0 52.760759-65.071602zM727.476184 971.97203l-5.862307-24.328572a41.622376 41.622376 0 0 1-56.131584 13.043632l-166.049832-97.607403a203.275478 203.275478 0 0 1-27.113168 41.475818l193.163 113.435631a41.915491 41.915491 0 0 0 61.993891-46.019106z" fill="#FED150" opacity=".5" data-v-7a72d418></path></svg>',1)),t("div",Z,[t("div",t1,[i(o,null,{default:r(()=>a[0]||(a[0]=[c("Peak Season")])),_:1})]),t("div",s1,[n(e.$slots,"peak-title",{},void 0,!0)]),t("div",a1,[n(e.$slots,"peak-desc",{},void 0,!0)])])]),t("div",e1,[a[3]||(a[3]=t("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",fill:"rgb(76, 121, 83)"},[t("path",{d:"M398.917502 625.542986c-10.154267 8.842389-21.290909 17.115819-33.401738 24.804942a620.500133 620.500133 0 0 0-34.874275 23.822568c-23.254633 15.717983-41.590234 34.221406-55.012941 55.504129-13.430894 21.289885-20.307512 46.171576-20.629853 74.66042h234.787374v-50.101072h-167.494759c2.287089-7.528464 6.54609-14.650675 12.770862-21.366633 6.216585-6.707772 13.507642-13.178137 21.856797-19.401886 8.351202-6.216585 17.438161-12.440333 27.2619-18.665105 9.82374-6.216585 19.647479-12.770861 29.471219-19.647479a368.43935 368.43935 0 0 0 28.488844-22.103414c9.163707-7.860015 17.353227-16.454764 24.559349-25.787316 7.198959-9.332553 12.932544-19.563568 17.192568-30.699186 4.250814-11.128455 6.384407-23.576975 6.384407-37.33021 0-11.128455-1.803066-22.839171-5.402033-35.118845-3.607154-12.279674-9.746992-23.653723-18.419512-34.137495-8.679683-10.475586-20.061918-19.156292-34.137495-26.03291-14.083763-6.876618-31.604812-10.314926-52.557006-10.314926-19.325138 0-36.271088 3.361561-50.837852 10.069333-14.57495 6.714935-26.938536 15.963577-37.084617 27.752064-10.154267 11.788487-17.766642 25.787316-22.840194 41.995463-5.080715 16.210193-7.612375 33.816177-7.612375 52.803623h55.995315c0.322341-12.110829 1.550309-23.408129 3.683903-33.891901 2.12643-10.475586 5.403057-19.562545 9.824762-27.260877 4.420683-7.690146 10.314926-13.753235 17.682732-18.173918 7.366781-4.420683 16.615423-6.631024 27.752064-6.631025 12.110829 0 21.934568 2.048659 29.471218 6.139838 7.528464 4.098341 13.422707 9.17087 17.682731 15.226796 4.250814 6.063089 7.122211 12.609179 8.594749 19.647479 1.473561 7.045463 2.210341 13.676487 2.210341 19.892049-0.329505 13.430894-3.768837 25.297153-10.314926 35.612079-6.556323 10.313903-14.905478 19.892049-25.051559 28.733415zM695.348841 742.445486c-5.080715 6.877641-11.711739 12.279674-19.893072 16.210193-8.188496 3.929496-18.173918 5.894244-29.961382 5.894244-18.343787 0-33.078373-4.988618-44.206828-14.981203-11.136641-9.985422-17.522072-24.314779-19.157315-42.97886h-55.995315c0.652869 17.36039 4.175089 32.502251 10.560519 45.433772 6.385431 12.94073 14.981203 23.822568 25.787317 32.663934 10.806113 8.842389 23.331381 15.47239 37.575803 19.893072 14.244422 4.419659 29.716812 6.630001 46.417169 6.630001 20.952194 0 38.96443-3.852748 54.030568-11.54187 15.057951-7.691169 27.421536-17.513886 37.084616-29.472242 9.654894-11.949146 16.699334-25.211195 21.12104-39.786145 4.420683-14.56574 6.630001-28.734438 6.630001-42.487674 0-16.370853-2.378164-31.597649-7.122211-45.681412-4.751211-14.075577-11.710716-26.278503-20.874423-36.593429-9.171893-10.314926-20.469194-18.3356-33.891901-24.069185-13.430894-5.725398-28.65769-8.594749-45.680389-8.594749-11.466146 0-23.00904 2.210341-34.629705 6.630001-11.626805 4.420683-21.204951 10.891048-28.734438 19.401885l-0.982374-0.982374 17.682731-87.430258h136.058792v-50.101071h-177.809685l-36.839023 188.124611h55.995315c4.582365-12.110829 12.034081-20.384259 22.349007-24.804942s21.367657-6.630001 33.155121-6.630001c11.128455 0 20.875446 1.964748 29.225625 5.894244s15.142885 9.17087 20.385283 15.717983c5.233188 6.553253 9.162684 14.167674 11.788487 22.839171 2.617617 8.679683 3.929496 17.766642 3.929496 27.2619 0 10.483772-1.066285 20.307512-3.192715 29.471219-2.134617 9.17394-5.733585 17.193591-10.806114 24.069185z"}),t("path",{d:"M838.026378 126.409015h-59.445904V79.237669c0-6.723122-5.64251-12.254092-12.603039-12.254092h-34.219359c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346h-415.973969V79.237669c0-6.723122-5.64251-12.254092-12.602016-12.254092h-34.220383c-7.118118 0-12.602016 5.485945-12.602016 12.254092v47.171346H184.311773c-65.738213 0-118.828362 53.168943-118.828363 118.755707v594.434478c0 65.448618 53.200666 118.755708 118.828363 118.755707h653.715628c65.738213 0 118.828362-53.168943 118.828363-118.755707V245.164722c-0.001023-65.448618-53.202713-118.755708-118.829386-118.755707z m59.402925 713.191208c0 32.806173-26.523073 59.331293-59.402925 59.331293H184.310749c-32.757055 0-59.402925-26.65201-59.402925-59.331293V364.107695h772.521479v475.492528z m0-534.916942H124.907824v-59.518559c0-32.806173 26.523073-59.331293 59.402925-59.331293h59.445904v47.171346c0 6.723122 5.64251 12.254092 12.602016 12.254091h34.220382c7.118118 0 12.602016-5.485945 12.602016-12.254091v-47.171346h415.972947v47.171346c0 6.723122 5.64251 12.254092 12.602015 12.254091h34.21936c7.119141 0 12.603039-5.485945 12.603039-12.254091v-47.171346h59.445904c32.757055 0 59.402925 26.65201 59.402924 59.331293v59.518559z"})],-1)),t("div",n1,[t("div",l1,[i(o,null,{default:r(()=>a[2]||(a[2]=[c("Off-season")])),_:1})]),t("div",i1,[n(e.$slots,"off-title",{},void 0,!0)]),t("div",o1,[n(e.$slots,"off-desc",{},void 0,!0)])])])])}const $1=g(Q,[["render",c1],["__scopeId","data-v-7a72d418"]]);export{_1 as A,$1 as S,w1 as _,g1 as a,f1 as b,h1 as c};
