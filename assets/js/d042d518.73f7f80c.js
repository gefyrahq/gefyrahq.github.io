"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[7251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),i=r(2802),a=r(9960),s=r(3919),c=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},r)}function d(e){let{href:t,icon:r,title:i,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:i},r," ",i),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:a},a))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},9538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),i=r(2991);const a={title:"Getting Started With Local Kubernetes Cluster",sidebar_position:1},s="Getting Started With Local Kubernetes Cluster",c={unversionedId:"local-environments/index",id:"version-2.0.0/local-environments/index",title:"Getting Started With Local Kubernetes Cluster",description:"This chapter contains guides on how to get started with Gefyra and different local Kubernetes solutions. These",source:"@site/versioned_docs/version-2.0.0/local-environments/index.md",sourceDirName:"local-environments",slug:"/local-environments/",permalink:"/docs/local-environments/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0/local-environments/index.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Getting Started With Local Kubernetes Cluster",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Docker Desktop Extension",permalink:"/docs/docker-extension"},next:{title:"Colima Kubernetes",permalink:"/docs/local-environments/colima"}},l={},u=[{value:"Workflow for single users",id:"workflow-for-single-users",level:2},{value:"Local Kubernetes providers",id:"local-kubernetes-providers",level:2}],d={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-local-kubernetes-cluster"},"Getting Started With Local Kubernetes Cluster"),(0,o.kt)("p",null,"This chapter contains guides on how to get started with Gefyra and different local Kubernetes solutions. These\nguides are for a ",(0,o.kt)("strong",{parentName:"p"},"single user")," on a local machine."),(0,o.kt)("h2",{id:"workflow-for-single-users"},"Workflow for single users"),(0,o.kt)("p",null,"This workflow with Gefyra is an shortcut for local connections: ",(0,o.kt)("inlineCode",{parentName:"p"},"gefyra up")," takes care of creating a ",(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/shared-environments/clients"},"Gefyra Client"),", generating the connection configuration and setting up the connection to the cluster."),(0,o.kt)("mermaid",{value:"flowchart TD;\n    install[\"Install Gefyra (<a href='/docs/cli#up'>gefyra up</a>)\"]\n    run[\"Run workload (<a href='/docs/cli#run'>gefyra run</a>)\"]\n    bridge[\"Bridge a container workload (<a href='/docs/cli#bridge'>gefyra bridge</a>) into the cluster\"]\n    unbridge[\"Unbridge a container workload (<a href='/docs/cli#bridge'>gefyra unbridge</a>) from the cluster\"]\n    down[\"Remove Gefyra (<a href='/docs/cli#down'>gefyra down</a>)\"]\n\n    install--\x3erun\n    run--\x3ebridge\n    bridge--\x3eunbridge\n    run--\x3edown\n    bridge--\x3edown\n    unbridge--\x3edown\n"}),(0,o.kt)("h2",{id:"local-kubernetes-providers"},"Local Kubernetes providers"),(0,o.kt)("p",null,"Follow along these guides to connect Gefyra with your preferred Kubernetes provider."),(0,o.kt)(i.Z,{mdxType:"DocCardList"}),(0,o.kt)("p",null,"Hey! We would be very happy to know about your Kubernetes development setup. If you can't find your distribuition in this\nlist, please request a guide by creating ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gefyrahq/gefyra/issues/new?assignees=&labels=enhancement&template=guide-request.md&title=%5BGuide+request%5D%3A+"},"a GitHub issue using this template"),".",(0,o.kt)("br",{parentName:"p"}),"\n","It's that simple and very helpful."))}f.isMDXComponent=!0}}]);