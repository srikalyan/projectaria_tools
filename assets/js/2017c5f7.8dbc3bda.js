"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1360],{15680:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>c});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){return function(t){var n=d(t.components);return i.createElement(e,r({},t,{components:n}))}},d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,u=c["".concat(a,".").concat(m)]||c[m]||h[m]||r;return n?i.createElement(u,s(s({ref:t},l),{},{components:n})):i.createElement(u,s({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},39284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(58168),o=(n(96540),n(15680));const r={sidebar_position:50,title:"Python type annotation"},a="How to use projectaria_tools type annotation",s={unversionedId:"data_utilities/installation/type_hinting",id:"data_utilities/installation/type_hinting",title:"Python type annotation",description:"This page provides information about how to use the python type hinting from stub files (*.pyi).",source:"@site/docs/data_utilities/installation/type_hinting.mdx",sourceDirName:"data_utilities/installation",slug:"/data_utilities/installation/type_hinting",permalink:"/projectaria_tools/docs/data_utilities/installation/type_hinting",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/installation/type_hinting.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Python type annotation"},sidebar:"tutorialSidebar",previous:{title:"CMake for Your Projects",permalink:"/projectaria_tools/docs/data_utilities/installation/build_with_cmake"},next:{title:"Troubleshooting",permalink:"/projectaria_tools/docs/data_utilities/installation/troubleshooting"}},p={},l=[{value:"How to use type hinting",id:"how-to-use-type-hinting",level:2},{value:"Type hinting setup for vscode",id:"type-hinting-setup-for-vscode",level:3},{value:"Type hinting setup for pycharm",id:"type-hinting-setup-for-pycharm",level:3}],c={toc:l},d="wrapper";function m(e){let{components:t,...r}=e;return(0,o.mdx)(d,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"how-to-use-projectaria_tools-type-annotation"},"How to use projectaria_tools type annotation"),(0,o.mdx)("p",null,"This page provides information about how to use the python type hinting from stub files (*.pyi)."),(0,o.mdx)("h2",{id:"how-to-use-type-hinting"},"How to use type hinting"),(0,o.mdx)("p",null,"Please follow the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/installation_python"},"link")," to install projectaria_tools package."),(0,o.mdx)("h3",{id:"type-hinting-setup-for-vscode"},"Type hinting setup for ",(0,o.mdx)("a",{parentName:"h3",href:"https://code.visualstudio.com/download"},"vscode")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install python extension\n",(0,o.mdx)("img",{alt:"Image",src:n(38631).A,width:"2572",height:"1534"})),(0,o.mdx)("li",{parentName:"ul"},"Select your own virtual environment on the bottom right corner\n",(0,o.mdx)("img",{alt:"Image",src:n(73963).A,width:"2572",height:"1534"})),(0,o.mdx)("li",{parentName:"ul"},"Enter the virtual environment path (i.e ",(0,o.mdx)("inlineCode",{parentName:"li"},"$HOME/projectaria_tools_python_env/bin/python"),")\n",(0,o.mdx)("img",{alt:"Image",src:n(6635).A,width:"2572",height:"1534"})),(0,o.mdx)("li",{parentName:"ul"},"Type hinting appears when hover the mouse over the imported functions in your python code\n",(0,o.mdx)("img",{alt:"Image",src:n(21214).A,width:"2572",height:"1534"}))),(0,o.mdx)("h3",{id:"type-hinting-setup-for-pycharm"},"Type hinting setup for ",(0,o.mdx)("a",{parentName:"h3",href:"https://www.jetbrains.com/pycharm/"},"pycharm")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Add new interpreter\n",(0,o.mdx)("img",{alt:"Image",src:n(31289).A,width:"2422",height:"1428"})),(0,o.mdx)("li",{parentName:"ul"},"Enter the virtual environment path (i.e ",(0,o.mdx)("inlineCode",{parentName:"li"},"$HOME/projectaria_tools_python_env/bin/python"),")\n",(0,o.mdx)("img",{alt:"Image",src:n(98949).A,width:"2422",height:"1428"})),(0,o.mdx)("li",{parentName:"ul"},"Type hinting appears when hover the mouse over the imported functions in your python code\n",(0,o.mdx)("img",{alt:"Image",src:n(30734).A,width:"2422",height:"1428"}))))}m.isMDXComponent=!0},6635:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/enter_venv_path-56a4e454c74ae00b72b58bd484e5dbbd.png"},38631:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/install_python_extension-f5c53153a4e7cd423e003360c22f6223.png"},98949:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pycharm_enter_interpreter-978b293c06e9dbf02acd7d74093fd4f5.png"},31289:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pycharm_select_interpreter-327268eb41b523be39500ad423efa67e.png"},30734:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pycharm_typehinting_example-bde885c3f1973925b0faecc1a0d3e384.png"},73963:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select_venv-ff16ff2c2d831e4e5d2d16d5e3566e10.png"},21214:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/vscode_typehinting_example-1c24403c944e5bbe9541aa00a862a273.png"}}]);