"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8913],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>c});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){return function(t){var a=d(t.components);return r.createElement(e,o({},t,{components:a}))}},d=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,m=c["".concat(l,".").concat(p)]||c[p]||b[p]||o;return a?r.createElement(m,i(i({ref:t},u),{},{components:a})):r.createElement(m,i({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var r=a(96540),n=a(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.default)(o.tabItem,l),hidden:a},t)}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var r=a(58168),n=a(96540),o=a(20053),l=a(24245),i=a(56347),s=a(62814),u=a(45167),c=a(81269);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:a,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var v=a(11062);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.default)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.default)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,o.default)("tabs-container",h.tabList)},n.createElement(g,(0,r.A)({},e,t)),n.createElement(y,(0,r.A)({},e,t)))}function x(e){const t=(0,v.default)();return n.createElement(w,(0,r.A)({key:String(t)},e))}},45193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=a(58168),n=(a(96540),a(15680)),o=a(49489),l=a(7227);const i={sidebar_position:10,title:"Download Codebase"},s="How to Download Project Aria Tools",u={unversionedId:"data_utilities/installation/download_codebase",id:"data_utilities/installation/download_codebase",title:"Download Codebase",description:"Supported Platforms",source:"@site/docs/data_utilities/installation/download_codebase.mdx",sourceDirName:"data_utilities/installation",slug:"/data_utilities/installation/download_codebase",permalink:"/projectaria_tools/docs/data_utilities/installation/download_codebase",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/installation/download_codebase.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Download Codebase"},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/projectaria_tools/docs/data_utilities/getting_started"},next:{title:"Download MPS Sample Data",permalink:"/projectaria_tools/docs/data_utilities/installation/download_mps_sample_data"}},c={},d=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Stable versus Develop",id:"stable-versus-develop",level:2},{value:"Download codebase",id:"download-codebase",level:2}],p={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,n.mdx)(m,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"how-to-download-project-aria-tools"},"How to Download Project Aria Tools"),(0,n.mdx)("h2",{id:"supported-platforms"},"Supported Platforms"),(0,n.mdx)("p",null,"The codebase is supported on:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"x64 Linux distributions of:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fedora 36, 37, 38"),(0,n.mdx)("li",{parentName:"ul"},"Ubuntu focal (20.04 LTS) and jammy (22.04 LTS)"))),(0,n.mdx)("li",{parentName:"ul"},"Mac Intel or Mac ARM-based (M1) with MacOS 11 (Big Sur) or newer")),(0,n.mdx)("h2",{id:"stable-versus-develop"},"Stable versus Develop"),(0,n.mdx)("p",null,"Access the latest stable version of Project Aria Tools with git TAGS. The develop version is pushed continuously to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"main")," branch."),(0,n.mdx)("h2",{id:"download-codebase"},"Download codebase"),(0,n.mdx)(o.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(l.default,{value:"stable",label:"Stable",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/Documents/projectaria_sandbox\ncd $HOME/Documents/projectaria_sandbox\n\ngit clone https://github.com/facebookresearch/projectaria_tools.git -b 1.4.0\n"))),(0,n.mdx)(l.default,{value:"develop",label:"Develop",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p $HOME/Documents/projectaria_sandbox\ncd $HOME/Documents/projectaria_sandbox\n\ngit clone https://github.com/facebookresearch/projectaria_tools.git -b main\n")))))}b.isMDXComponent=!0}}]);