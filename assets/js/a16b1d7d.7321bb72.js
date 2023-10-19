"use strict";(self.webpackChunkgefyra=self.webpackChunkgefyra||[]).push([[5267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Installing Gefyra in a Cluster",sidebar_position:1},i="Gefyra (Remote) Cluster Installation",s={unversionedId:"shared-environments/installation",id:"version-2.0.0/shared-environments/installation",title:"Installing Gefyra in a Cluster",description:"Installing Gefyra to a remote cluster is usually slightly different to a local setup. This is because the networking aspect",source:"@site/versioned_docs/version-2.0.0/shared-environments/installation.md",sourceDirName:"shared-environments",slug:"/shared-environments/installation",permalink:"/docs/shared-environments/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0/shared-environments/installation.md",tags:[],version:"2.0.0",sidebarPosition:1,frontMatter:{title:"Installing Gefyra in a Cluster",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Setting up a Shared Kubernetes Cluster",permalink:"/docs/shared-environments/"},next:{title:"Managing Gefyra Clients",permalink:"/docs/shared-environments/clients"}},l={},p=[{value:"The Installation",id:"the-installation",level:2},{value:"Default Networking",id:"default-networking",level:2},{value:"Setting up a UDP <code>Loadbalancer</code>",id:"setting-up-a-udp-loadbalancer",level:2},{value:"Presets",id:"presets",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gefyra-remote-cluster-installation"},"Gefyra (Remote) Cluster Installation"),(0,r.kt)("p",null,"Installing Gefyra to a remote cluster is usually slightly different to a local setup. This is because the networking aspect\ndiffers considerably between a local cluster, that might be created with overlay networks and port-forwarding, and remote clusters with cloud-specific routing components. Starting with Gefyra 2, you get good control of the cluster-side components. "),(0,r.kt)("admonition",{title:"Prerequisites",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Gefyra is ",(0,r.kt)("a",{parentName:"p",href:"https://gefyra.dev/installation"},"available")," (at least in version 2.0.0)")),(0,r.kt)("h2",{id:"the-installation"},"The Installation"),(0,r.kt)("p",null,"There are a couple of options for the installation procedure. Gefyra's executable ships with all required Kubernetes configs\nfor that specific version."),(0,r.kt)("p",null,"To introspect what is going to be installed into your cluster, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"gefyra install"),". This command generates a list of\nKubernetes objects that can either be stored for manual modification, or directly applied to the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"> gefyra install\n\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: gefyra\n\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: gefyra-operator\n  namespace: gefyra\n\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\n[...]\n")),(0,r.kt)("p",null,"Please check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli#install"},"CLI reference for that command"),".  "),(0,r.kt)("p",null,"If the default configuration is suitable for your environment, directly apply it with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gefyra install | kubectl apply -f -\n")),(0,r.kt)("p",null,"That will pipe the Kubernetes configs generated by Gefyra's install command directly into the cluster context\nthat is currently active."),(0,r.kt)("admonition",{title:"Kubernetes context",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check your active cluster context with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config current-context"),".")),(0,r.kt)("h2",{id:"default-networking"},"Default Networking"),(0,r.kt)("p",null,"Gefyra depends on a working ",(0,r.kt)("a",{parentName:"p",href:"https://www.wireguard.com/"},"Wireguard VPN")," connection between the cluster and Gefyra's clients. Setting up that connection is completely managed by Gefyra and only requires little configuration from a cluster admin: that is configuring the VPN route."),(0,r.kt)("admonition",{title:"NodePort default",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Gefyra's default to expose its Wireguard endpoint is via a Kubernetes service of type ",(0,r.kt)("strong",{parentName:"p"},"NodePort"),". However, this can only work if the Kubernetes nodes have a public (internet-routable) IP address, or at least this IP is reachable for all clients.")),(0,r.kt)("p",null,"You can check out the Kubernetes service object in the output of ",(0,r.kt)("inlineCode",{parentName:"p"},"gefyra install"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'> gefyra install | grep "type:" -B21\n\napiVersion: v1\nkind: Service\nmetadata:\n  annotations: {}\n  labels:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  name: gefyra-stowaway-wireguard\n  namespace: gefyra\nspec:\n  ports:\n  - name: gefyra-wireguard\n    nodePort: 31820\n    port: 51820\n    protocol: UDP\n    targetPort: 51820\n  selector:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  type: NodePort\n')),(0,r.kt)("p",null,"This service will open up the port ",(0,r.kt)("strong",{parentName:"p"},"31820")," on all of your Kubernetes nodes and route VPN traffic to Gefyra."),(0,r.kt)("p",null,"If you don't want to expose Gefyra via a ",(0,r.kt)("em",{parentName:"p"},"NodePort")," service, or you don't have routable IPs on your Kubernetes nodes, you need\nto set up a ",(0,r.kt)("strong",{parentName:"p"},"UDP load balancing")," for Gefyra. Luckily, Gefyra's got you covered."),(0,r.kt)("h2",{id:"setting-up-a-udp-loadbalancer"},"Setting up a UDP ",(0,r.kt)("inlineCode",{parentName:"h2"},"Loadbalancer")),(0,r.kt)("admonition",{title:"UDP load balancing",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Gefyra's VPN connection is established using UDP traffic. Not all cloud providers offer a UDP load balancing solution. If you can not use a ",(0,r.kt)("em",{parentName:"p"},"Loadbalancer"),", you have to stick with the ",(0,r.kt)("em",{parentName:"p"},"NodePort")," service.")),(0,r.kt)("p",null,"To switch the load balancer service for the installation, just set the appropriate option flag for the ",(0,r.kt)("inlineCode",{parentName:"p"},"gefyra install")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> gefyra install --service-type=Loadbalancer\n")),(0,r.kt)("p",null,"In many cases, the external infrastructure for a Kubernetes cluster is managed via service annotations. With Gefyra you can\nset custom annotations easily using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--service-annotations")," as often as you need. "),(0,r.kt)("p",null,"For example:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"gefyra install --service-type=Loadbalancer --service-annotations service.beta.kubernetes.io/aws-load-balancer-nlb-target-type=ip --service-annotations ervice.beta.kubernetes.io/aws-load-balancer-scheme=internet-facing"),"\nwill create the following service in your cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    # see these annotations\n    service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip\n    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n  labels:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  name: gefyra-stowaway-wireguard\n  namespace: gefyra\nspec:\n  ports:\n  - name: gefyra-wireguard\n    port: 31820\n    protocol: UDP\n    targetPort: 51820\n  selector:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  type: LoadBalancer\n")),(0,r.kt)("p",null,"Please be aware that Gefyra comes with a few manually crafted presets for popular Kubernetes offering. Check out the next section to learn how you install Gefyra using an available installation preset."),(0,r.kt)("h2",{id:"presets"},"Presets"),(0,r.kt)("p",null,"To make it as convenient as possible, Gefyra offers presets for widely used Kubernetes offerings, such as Google's GKE or\nAmazon EKS."),(0,r.kt)("p",null,"Please check available presets with: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> gefyra install --help | grep preset\n\n  --preset TEXT               Set configs from a preset (available: aws,gke)\n")),(0,r.kt)("p",null,"Currently, it's only ",(0,r.kt)("em",{parentName:"p"},"aws")," and ",(0,r.kt)("em",{parentName:"p"},"gke"),". If you want to add another preset for another popular Kubernetes provider, please consider ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gefyrahq/gefyra/issues/new?assignees=&labels=enhancement&projects=&template=feature-request.yaml"},"opening a ticket on GitHub")," for it."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," If you install Gefyra to an EKS cluster, you only have to set the preset\n",(0,r.kt)("inlineCode",{parentName:"p"},"gefyra install --preset aws | kubectl apply -f -"),", and it will automatically create the ",(0,r.kt)("em",{parentName:"p"},"Network Load Balancer")," via the required annotations on the Kubernetes service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  annotations:\n    # see these annotations\n    service.beta.kubernetes.io/aws-load-balancer-nlb-target-type: ip\n    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing\n    service.beta.kubernetes.io/aws-load-balancer-type: nlb\n  labels:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  name: gefyra-stowaway-wireguard\n  namespace: gefyra\nspec:\n  ports:\n  - name: gefyra-wireguard\n    port: 31820\n    protocol: UDP\n    targetPort: 51820\n  selector:\n    gefyra.dev/app: stowaway\n    gefyra.dev/provider: stowaway\n    gefyra.dev/role: connection\n  type: LoadBalancer\n")))}d.isMDXComponent=!0}}]);