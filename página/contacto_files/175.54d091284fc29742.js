"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[175],{73175:function(l,e,o){o.r(e),o.d(e,{default:function(){return z}});var i=o(14251),n=o(85893),t=o(31996),s=o(67294),a=o(52077),r=o(90387),d=o(41664),c=o.n(d),u=o(72510),v=o(18732),h=o(71029),m=o(85296),f=o(44171),x=o(43180),g=o(10151),p=o(36234),y=o(66909),j=o(49791),b=o(28239),N=o(48192),k=o(94206),w=o(13487),A=o(32713),C=o(65710),Z=o(43751),S=o(3677),F=o(41984),K=o(74007),_=[{id:"facebook",host:"facebook.com"},{id:"twitter",host:"twitter.com"},{id:"linkedin",host:"linkedin.com"},{id:"youtube",host:"youtube.com"},{id:"pinterest",host:"pinterest.com"},{id:"instagram",host:"instagram.com"},{id:"tiktok",host:"tiktok.com"},{id:"thumbtack",host:"thumbtack.com"},{id:"homeadvisor",host:"homeadvisor.com"},{id:"angi",host:"angi.com"},{id:"behance",host:"behance.net"},{id:"dribbble",host:"dribbble.com"}];function z(l){var e,o,d,z,M,P,W,E,L,T,D,B=l.website,I=(0,t.ac)("(max-width: 1023px)"),O=(0,s.useState)(!1),R=O[0],V=O[1],H=(0,s.useState)("#FFFFFF"),$=H[0],q=H[1],G=(0,s.useState)("#000000"),J=G[0],Q=G[1],U=(0,s.useState)(null),X=U[0],Y=U[1],ll=(0,r.useRouter)(),el=null===B||void 0===B?void 0:B.header,ol=null===(o=null===(e=B.pages)||void 0===e?void 0:e.filter((function(l){return(!0===l.showOnHeader||void 0===l.showOnHeader)&&null!==l.slug})))||void 0===o?void 0:o.map((function(l){var e={href:"/".concat(l.slug||""),name:l.label,current:ll.asPath==="/".concat(l.slug||""),type:l.type};return"parent"===e.type&&(e.nests=B.pages.filter((function(e){return e.Parent===l._id})).map((function(e){return{href:"/".concat(l.slug,"/").concat(e.slug||""),name:e.label,current:ll.asPath==="/".concat(l.slug,"/").concat(e.slug||"")}})),0===e.nests.length)?null:e})).filter((function(l){return null!==l&&"nested"!==l.type})),il=function(l,e){var o=e?"w-6 h-6 lg:w-8 lg:h-8":"w-8 h-8";switch(l.type){case"angi":return(0,n.jsx)(h.Z,{className:o,style:{color:J}});case"behance":return(0,n.jsx)(m.Z,{className:o,style:{color:J}});case"dribbble":return(0,n.jsx)(f.Z,{className:o,style:{color:J}});case"facebook":return(0,n.jsx)(x.Z,{className:o,style:{color:J}});case"homeadvisor":return(0,n.jsx)(g.Z,{className:o,style:{color:J}});case"instagram":return(0,n.jsx)(p.Z,{className:o,style:{color:J}});case"linkedin":return(0,n.jsx)(y.Z,{className:o,style:{color:J}});case"pinterest":return(0,n.jsx)(j.Z,{className:o,style:{color:J}});case"tiktok":return(0,n.jsx)(b.Z,{className:o,style:{color:J}});case"thumbtack":return(0,n.jsx)(N.Z,{className:o,style:{color:J}});case"twitter":return(0,n.jsx)(k.Z,{className:o,style:{color:J}});case"youtube":return(0,n.jsx)(w.Z,{className:o,style:{color:J}});case"custom":var i,s;return(0,n.jsx)("div",{className:(0,t.AK)("flex-shrink-0 relative",o),children:(0,n.jsx)("div",{className:"absolute w-full h-full",style:{backgroundColor:J||"#000000",WebkitMaskImage:'url("'.concat(null===l||void 0===l||null===(i=l.icon)||void 0===i?void 0:i.url,'")'),maskImage:'url("'.concat(null===l||void 0===l||null===(s=l.icon)||void 0===s?void 0:s.url,'")'),WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"contain",maskSize:"contain"}})})}},nl=function(){return(0,n.jsx)("div",{className:(0,t.AK)("hidden lg:flex items-center flex-shrink-0"),children:(0,n.jsx)(a.Z,{className:"xl !text-2xl !py-1.5",button:null===el||void 0===el?void 0:el.button,website:B})})},tl=function(l,e){return(0,n.jsx)("ul",{className:(0,t.AK)("lg:flex items-center gap-x-4 gap-y-2 flex-wrap","full-center"!==l?"justify-end":"",!e&&"hidden"),children:Array.isArray(B.social)&&B.social.map((function(l,o){var i=_.find((function(e){return e.id===l.type})),t=l.link;return"custom"!==l.type&&(t=(t=l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"")).replace(null===i||void 0===i?void 0:i.host,""),t="https://".concat(null===i||void 0===i?void 0:i.host,"/").concat(t)),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:t,children:(0,n.jsx)("a",{target:"_blank",children:il(l,e)})})},"social-icon-header-".concat(o))}))})},sl=function(){var l,e,o,s,a,r,d,u;return(null===el||void 0===el?void 0:el.showLogo)&&"branding"===(null===el||void 0===el?void 0:el.source)&&(null===B||void 0===B?void 0:B.logo)?(0,n.jsx)(c(),{href:"/",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:null===B||void 0===B||null===(l=B.logo)||void 0===l?void 0:l.url,alt:null===el||void 0===el?void 0:el.siteName,style:{height:(null===el||void 0===el||null===(e=el.logoDesktop)||void 0===e?void 0:e.height)+"px"}}),(0,n.jsx)("img",{className:"lg:hidden transition-all object-contain",src:null===B||void 0===B||null===(o=B.logo)||void 0===o?void 0:o.url,alt:null===el||void 0===el?void 0:el.siteName,style:{height:(null===el||void 0===el||null===(s=el.logoMobile)||void 0===s?void 0:s.height)+"px"}})]})}):(null===el||void 0===el?void 0:el.showLogo)&&"upload"===(null===el||void 0===el?void 0:el.source)&&(null===el||void 0===el?void 0:el.customLogo)?(0,n.jsx)(c(),{href:"/",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("img",{className:"hidden lg:block transition-all object-contain",src:null===el||void 0===el||null===(a=el.customLogo)||void 0===a?void 0:a.url,alt:null===el||void 0===el?void 0:el.siteName,style:{height:(null===el||void 0===el||null===(r=el.logoDesktop)||void 0===r?void 0:r.height)+"px"}}),(0,n.jsx)("img",{className:"lg:hidden transition-all object-contain",src:null===el||void 0===el||null===(d=el.customLogo)||void 0===d?void 0:d.url,alt:null===el||void 0===el?void 0:el.siteName,style:{height:(null===el||void 0===el||null===(u=el.logoMobile)||void 0===u?void 0:u.height)+"px"}})]})}):(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("h1",{className:"heading-small lg:heading-medium overflow-hidden overflow-ellipsis max-w-full",style:(0,i.Z)({color:J},(0,t.j2)(B)),children:null===el||void 0===el?void 0:el.siteName})})})},al=function(l){if(0===(null===ol||void 0===ol?void 0:ol.length))return(0,n.jsx)(n.Fragment,{});var e=(0,t.h)($,-10);return e!==J&&e!==$||(e=(0,t.h)($,10)),(0,n.jsx)("ul",{className:(0,t.AK)("hidden lg:flex items-center flex-wrap gap-x-6","left"===l&&"justify-end","full-center"===l&&"justify-center"),style:{color:J},children:null===ol||void 0===ol?void 0:ol.map((function(l){var o;return(0,n.jsx)("li",{className:"border-b-2",style:{borderColor:l.current?"".concat(J):"transparent"},children:"parent"===l.type?(0,n.jsx)(K.Z,{buttonClassName:"inline-flex items-center gap-2 py-1.5",itemsContainerClass:"!pl-6 !pr-12 w-max max-w-120",button:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"body-normal whitespace-nowrap",children:l.name}),(0,n.jsx)(A.Z,{className:"w-4 h-4"})]}),itemsContainerStyle:{backgroundColor:e,color:J},children:null===(o=l.nests)||void 0===o?void 0:o.map((function(l){return(0,n.jsx)(u.v.Item,{children:(0,n.jsx)(c(),{href:l.href,legacyBehavior:!1,className:"block py-2 body-normal border-b-2",style:{borderColor:l.current?"".concat(J):"transparent"},children:l.name})},"page-link-".concat(l.href))}))}):(0,n.jsx)(c(),{href:l.href,children:(0,n.jsx)("a",{className:"block py-1.5 body-normal whitespace-nowrap",children:l.name})})},"page-link-".concat(l.href))}))})};return(0,s.useEffect)((function(){if(el){var l,e,o;if(q(el.background),null===el.siteName||void 0===el.siteName)el.siteName=null===B||void 0===B||null===(o=B.Business)||void 0===o?void 0:o.name;el.style||(el.style="left"),(null===(l=el.logoDesktop)||void 0===l?void 0:l.height)||(el.logoDesktop={height:80}),(null===(e=el.logoMobile)||void 0===e?void 0:e.height)||(el.logoMobile={height:40})}}),[el]),(0,s.useEffect)((function(){$&&Q((0,t.$O)($))}),[$]),(0,s.useEffect)((function(){V(!1),Y(null)}),[ll,I]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("header",{className:(0,t.AK)((null===el||void 0===el?void 0:el.sticky)?"sticky top-0 shadow-sm":"",(null===el||void 0===el?void 0:el.sticky)&&!R?"!z-[2000]":""),style:{backgroundColor:$,color:J},children:(0,n.jsx)("div",{className:(0,t.AK)("grid items-center lg:gap-6 xl:gap-10 mx-auto py-6",(null===el||void 0===el?void 0:el.fullWidth)?"px-6 lg:px-12":"container"),style:(D=null===el||void 0===el?void 0:el.style,"center"===D?{gridTemplateColumns:"1fr auto 1fr"}:"full-center"===D?(null===ol||void 0===ol?void 0:ol.length)>6?{gridTemplateColumns:"1fr 4fr 1fr"}:{gridTemplateColumns:"1fr 1fr 1fr"}:{gridTemplateColumns:"auto auto auto"}),children:"center"===(null===el||void 0===el?void 0:el.style)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-9 lg:w-auto",children:al(null===el||void 0===el?void 0:el.style)}),(0,n.jsx)("div",{className:"flex justify-center truncate",children:sl()}),(0,n.jsxs)("div",{className:"flex justify-end",children:[(0,n.jsxs)("div",{className:"hidden lg:flex item-center gap-10",children:[(null===el||void 0===el?void 0:el.showSocial)&&tl(null===el||void 0===el?void 0:el.style),(null===el||void 0===el?void 0:el.button)&&nl()]}),(0,n.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null===el||void 0===el?void 0:el.button)||(null===ol||void 0===ol?void 0:ol.length)>0||(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&(null===B||void 0===B||null===(d=B.social)||void 0===d?void 0:d.length)>1)&&(0,n.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:J},onClick:function(){return V(!0)},children:(0,n.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null===el||void 0===el?void 0:el.button)&&0===(null===ol||void 0===ol?void 0:ol.length)&&(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&1===(null===B||void 0===B||null===(z=B.social)||void 0===z?void 0:z.length)&&tl(null===el||void 0===el?void 0:el.style,!0)]})]})]}):"full-center"===(null===el||void 0===el?void 0:el.style)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"w-9 lg:w-auto",children:(null===el||void 0===el?void 0:el.showSocial)&&tl(null===el||void 0===el?void 0:el.style)}),(0,n.jsxs)("div",{className:"flex-1 flex flex-col items-center gap-4",children:[(0,n.jsx)("div",{className:"flex justify-center w-full truncate",children:sl()}),al(null===el||void 0===el?void 0:el.style)]}),(0,n.jsxs)("div",{className:"flex justify-end",children:[(null===el||void 0===el?void 0:el.button)&&nl(),(0,n.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null===el||void 0===el?void 0:el.button)||(null===ol||void 0===ol?void 0:ol.length)>0||(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&(null===B||void 0===B||null===(M=B.social)||void 0===M?void 0:M.length)>1)&&(0,n.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:J},onClick:function(){return V(!0)},children:(0,n.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null===el||void 0===el?void 0:el.button)&&0===(null===ol||void 0===ol?void 0:ol.length)&&(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&1===(null===B||void 0===B||null===(P=B.social)||void 0===P?void 0:P.length)&&tl(null===el||void 0===el?void 0:el.style,!0)]})]})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"col-span-2 lg:col-span-1 truncate",children:sl()}),(0,n.jsxs)("div",{className:"hidden lg:flex item-center justify-end gap-10 lg:col-span-2",children:[al(null===el||void 0===el?void 0:el.style),(null===el||void 0===el?void 0:el.showSocial)&&tl(null===el||void 0===el?void 0:el.style),(null===el||void 0===el?void 0:el.button)&&nl()]}),(0,n.jsxs)("div",{className:"ml-auto lg:hidden",children:[((null===el||void 0===el?void 0:el.button)||(null===ol||void 0===ol?void 0:ol.length)>0||(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&(null===B||void 0===B||null===(W=B.social)||void 0===W?void 0:W.length)>1)&&(0,n.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:J},onClick:function(){return V(!0)},children:(0,n.jsx)(C.Z,{className:"block h-5 w-5","aria-hidden":"true"})}),!(null===el||void 0===el?void 0:el.button)&&0===(null===ol||void 0===ol?void 0:ol.length)&&(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&1===(null===B||void 0===B||null===(E=B.social)||void 0===E?void 0:E.length)&&tl(null===el||void 0===el?void 0:el.style,!0)]})]})})}),(0,n.jsx)(v.V,{open:R,onClose:function(){return V(!1)},className:"relative z-[3000] h-full",children:(0,n.jsx)(v.V.Panel,{className:(0,t.AK)("fixed flex flex-col",(!(null===el||void 0===el?void 0:el.button)||0!==(null===ol||void 0===ol?void 0:ol.length)||(null===el||void 0===el?void 0:el.showSocial))&&!(0===(null===ol||void 0===ol?void 0:ol.length)&&(null===el||void 0===el?void 0:el.showSocial)&&Array.isArray(null===B||void 0===B?void 0:B.social)&&(null===B||void 0===B?void 0:B.social.length)>1)&&((null===el||void 0===el?void 0:el.button)||el.showSocial||1!==ol.length)&&(1!==ol.length||!(null===el||void 0===el?void 0:el.button)&&!el.showSocial)?"inset-0 h-full":"top-0 left-0 right-0"),style:{backgroundColor:$,color:J},children:(0,n.jsxs)("div",{className:(0,t.AK)("flex-1 flex flex-col h-full mx-auto pb-6",(null===el||void 0===el?void 0:el.fullWidth)?"w-full px-6":"container"),children:[(0,n.jsxs)("div",{className:(0,t.AK)("items-center gap-3 py-6","left"!==(null===el||void 0===el?void 0:el.style)?"grid":"flex justify-between"),style:"left"!==(null===el||void 0===el?void 0:el.style)?{gridTemplateColumns:"1fr auto 1fr"}:{},children:[("center"===(null===el||void 0===el?void 0:el.style)||"full-center"===(null===el||void 0===el?void 0:el.style))&&(0,n.jsx)("div",{}),sl(),(0,n.jsx)("div",{className:"ml-auto lg:hidden",children:(0,n.jsx)("button",{className:"inline-flex items-center justify-center p-2 rounded-md focus:outline-none",style:{color:J},onClick:function(){return V(!1)},children:(0,n.jsx)(Z.Z,{className:"block h-5 w-5","aria-hidden":"true"})})})]}),(null===ol||void 0===ol?void 0:ol.length)>0&&(0,n.jsx)("ul",{className:(0,t.AK)("flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto","center"===(null===el||void 0===el?void 0:el.style)||"full-center"===(null===el||void 0===el?void 0:el.style)?"text-center":""),style:(0,i.Z)({color:J},(0,t.SV)(B)),children:1===ol.length&&"parent"===ol[0].type?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("li",{className:"text-xl font-medium py-2",style:{borderColor:ol[0].current?"".concat(J):"transparent"},children:(0,n.jsx)("span",{className:"block w-full",children:ol[0].name})},"page-link-".concat(ol[0].href)),null===(L=ol[0].nests)||void 0===L?void 0:L.map((function(l){return(0,n.jsx)("li",{className:(0,t.AK)("body-large py-2 border-b-2"),style:{borderColor:l.current?"".concat(J):"transparent"},children:(0,n.jsx)(c(),{href:l.href,children:(0,n.jsx)("a",{className:"block w-full",children:l.name})})},"page-link-".concat(l.href))}))]}):(0,n.jsxs)(n.Fragment,{children:[X&&(0,n.jsx)("li",{className:"pb-6",children:(0,n.jsxs)("button",{className:"inline-flex items-center gap-2 body-large",onClick:function(){return Y(null)},children:[(0,n.jsx)(S.Z,{className:"w-4 h-4","aria-hidden":"true"}),(0,n.jsx)("span",{children:"Back"})]})}),!X&&(null===ol||void 0===ol?void 0:ol.map((function(l){return(0,n.jsx)("li",{className:(0,t.AK)("body-large py-2 border-b-2"),style:{borderColor:l.current?"".concat(J):"transparent"},children:"parent"===l.type&&l.nests.length>0?(0,n.jsxs)("button",{className:"inline-flex items-center gap-2",onClick:function(){return Y(l.nests)},children:[(0,n.jsx)("span",{children:l.name}),(0,n.jsx)(F.Z,{className:"w-4 h-4","aria-hidden":"true"})]}):(0,n.jsx)(c(),{href:l.href,children:(0,n.jsx)("a",{className:"block w-full",children:l.name})})},"page-link-".concat(l.href))}))),null===X||void 0===X?void 0:X.map((function(l){return(0,n.jsx)("li",{className:(0,t.AK)("body-large py-2 border-b-2"),style:{borderColor:l.current?"".concat(J):"transparent"},children:(0,n.jsx)(c(),{href:l.href,children:(0,n.jsx)("a",{className:"block w-full",children:l.name})})},"page-link-".concat(l.href))}))]})}),(0,n.jsxs)("div",{className:(0,t.AK)("flex flex-col max-w-[100vw]","center"===(null===el||void 0===el?void 0:el.style)||"full-center"===(null===el||void 0===el?void 0:el.style)?"items-center":"",(null===ol||void 0===ol?void 0:ol.length)>0?"":"h-full justify-center"),children:[(null===el||void 0===el?void 0:el.showSocial)&&(null===(T=B.social)||void 0===T?void 0:T.length)>0&&(0,n.jsx)("ul",{className:"flex items-center gap-x-4 gap-y-2 flex-wrap py-6",children:Array.isArray(B.social)&&B.social.map((function(l,e){var o=_.find((function(e){return e.id===l.type})),i=l.link;return"custom"!==l.type&&(i=(i=l.link.replace(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,"").replace(/https?:/g,"").replace(/^\/\/?/g,"")).replace(null===o||void 0===o?void 0:o.host,""),i="https://".concat(null===o||void 0===o?void 0:o.host,"/").concat(i)),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:i,children:(0,n.jsx)("a",{target:"_blank",children:il(l)})})},"social-icon-header-".concat(e))}))}),(null===el||void 0===el?void 0:el.button)&&(0,n.jsx)("div",{className:"py-6",children:(0,n.jsx)(a.Z,{className:"xl !font-normal !py-1.5",button:el.button,website:B})})]})]})})})]})}}}]);