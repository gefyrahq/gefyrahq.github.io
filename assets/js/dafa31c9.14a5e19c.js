"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[6372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),a=n(2293);const i={title:"Docker Desktop Extension"},s="Gefyra Docker Desktop Extension",l={unversionedId:"docker-extension",id:"version-1.x/docker-extension",title:"Docker Desktop Extension",description:"Gefyra's Docker Desktop Extension allows you to run containers on your local machine and connect them to Kubernetes-based resources. It is a great way to test a new service in the cluster or write code that depends on Kubernetes resources.",source:"@site/versioned_docs/version-1.x/docker-extension.mdx",sourceDirName:".",slug:"/docker-extension",permalink:"/docs/1.x/docker-extension",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.x/docker-extension.mdx",tags:[],version:"1.x",frontMatter:{title:"Docker Desktop Extension"},sidebar:"docsSidebar",previous:{title:"Run vs Bridge",permalink:"/docs/1.x/run_vs_bridge"},next:{title:"Use Cases and Demos",permalink:"/docs/1.x/usecases/"}},c={},p=[{value:"10 minute demo",id:"10-minute-demo",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gefyra-docker-desktop-extension"},"Gefyra Docker Desktop Extension"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gefyra/docker-desktop-extension"},"Gefyra's Docker Desktop Extension")," allows you to run containers on your local machine and connect them to Kubernetes-based resources. It is a great way to test a new service in the cluster or write code that depends on Kubernetes resources."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Looking for CLI rather than a GUI?")," Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation/"},"Gefyra's CLI")),(0,r.kt)("h2",{id:"10-minute-demo"},"10 minute demo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gefyra Docker Desktop Extension Run Demo Video"),"  "),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/4xmaOVul5Ww",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gefyra Docker Desktop Extension Bridge Demo Video"),"  "),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/EBArR1O2BGk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Gefyra Docker Desktop Extension is available on the Docker Desktop extension ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/extensions/gefyra/docker-desktop-extension"},"marketplace"),". "),(0,r.kt)("p",null,"However, you can also install it by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker extension install gefyra/docker-desktop-extension:latest\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"After installing the extension it becomes available in the Docker Desktop Extension sidebar. Gefyra Docker Desktop currently only\nsupport the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," mode. After clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," tile you're guided through the process of running a container on your local machine."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Desktop Extension Start",src:n(6157).Z,width:"3088",height:"2074"})),(0,r.kt)("p",null,"Firstly Gefyra needs to know about your cluster to allow you to set all settings accordingly."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Desktop Extension Cluster Settings",src:n(3409).Z,width:"3088",height:"2074"})),(0,r.kt)("p",null,"After choosing your kubeconfig and context you can then proceed to adding the settings for your container. In case you have a remote cluster\nyou need to provide Gefyra with its connection parameters under ",(0,r.kt)("inlineCode",{parentName:"p"},"Remote Cluster Settings"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Desktop Extension Container Settings",src:n(3609).Z,width:"3088",height:"2074"})),(0,r.kt)("p",null,"There are several settings for the container - most importantly the ",(0,r.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"command")," settings.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," setting is the image that will be used to run the container - Gefyra will you show any image that is available in the local Docker Desktop context as\nwell as images that are available in the chosen Kubernetes namespace. The ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace")," setting is the namespace in which the container will be available.\nGefyra allows you to copy the environment variables of a certain workload through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Copy Environment From")," dropdown.\nYou can add volumes and more variables through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Volume")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Add Environment Variable")," buttons.\nAs soon as you're done hit run!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Desktop Extension Load",src:n(9282).Z,width:"3088",height:"2074"}),"\nGefyra ensures that its cluster components are in the correct state and starts the container."),(0,r.kt)("p",null,"Once the container is running Gefyra will show you the logs of the container."),(0,r.kt)(a.ZP,{mdxType:"Feedback"}))}m.isMDXComponent=!0},2293:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={toc:[{value:"Provide us with your feedback",id:"provide-us-with-your-feedback",level:2}]},i="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"provide-us-with-your-feedback"},"Provide us with your feedback"),(0,r.kt)("p",null,"Did everything work as expected? How was the experience of using Gefyra?\nWe'd appreciate if you could take 2 minutes of your time to fill out our ",(0,r.kt)("a",{parentName:"p",href:"https://forms.gle/AWT9NparpTVk8E978"},"feedback form"),"."))}s.isMDXComponent=!0},3409:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cluster_light-843a45a6925ea3b62009a9f01463fe8a.png"},3609:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/container_light-490df2f151c144c06d71d34817e655be.png"},6157:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/home_light-01542f179a554d5ef793f649bfbd2e08.png"},9282:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/load_light-c25a1f022f5411e1e144c08029f27ce4.png"}}]);