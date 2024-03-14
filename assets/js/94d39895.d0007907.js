"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2074],{15680:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>b,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){return function(t){var r=u(t.components);return o.createElement(e,a({},t,{components:r}))}},u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return r?o.createElement(m,l(l({ref:t},s),{},{components:r})):o.createElement(m,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(58168),n=(r(96540),r(15680));const a={sidebar_position:40,title:"Clear Desktop App Cache"},i="How to Clear the Desktop App's Cache",l={unversionedId:"ARK/troubleshooting/clear_cache",id:"ARK/troubleshooting/clear_cache",title:"Clear Desktop App Cache",description:"Overview",source:"@site/docs/ARK/troubleshooting/clear_cache.mdx",sourceDirName:"ARK/troubleshooting",slug:"/ARK/troubleshooting/clear_cache",permalink:"/projectaria_tools/docs/ARK/troubleshooting/clear_cache",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/ARK/troubleshooting/clear_cache.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"Clear Desktop App Cache"},sidebar:"tutorialSidebar",previous:{title:"Desktop App Logs",permalink:"/projectaria_tools/docs/ARK/troubleshooting/desktop_app_logs"},next:{title:"Update Glasses OS",permalink:"/projectaria_tools/docs/ARK/troubleshooting/update_glasses_os"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Clear the Cache",id:"clear-the-cache",level:2},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.mdx)(u,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"how-to-clear-the-desktop-apps-cache"},"How to Clear the Desktop App's Cache"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This page provides information about how to clear Project Aria's Desktop Companion App's cache. Users may wish to do this if they're encountering issues signing into the app, experiencing instabilities in the app or are directed to do so by User Support to resolve an issue."),(0,n.mdx)("p",null,"Please note, clearing the cache will clear all your history in Recordings > Tools, so you will no longer be able to download previously generated MPS."),(0,n.mdx)("h2",{id:"clear-the-cache"},"Clear the Cache"),(0,n.mdx)("p",null,"Use the following commands:"),(0,n.mdx)("h3",{id:"macos"},"MacOS"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"rm -f /Users/unixname/Library/Preferences/com.meta.Aria.plist && killall -u unixname cfprefsd\n")),(0,n.mdx)("h3",{id:"windows"},"Windows"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"Remove-Item -Path 'HKCU:\\SOFTWARE\\Meta\\Aria\\'\n")),(0,n.mdx)("p",null,"Or open the Registry Editor and go to HKEY_CURRENT_USER->SOFTWARE->Meta then delete ",(0,n.mdx)("inlineCode",{parentName:"p"},"Aria")),(0,n.mdx)("h3",{id:"linux"},"Linux"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"rm -f /home/unixname/.config/Meta/Aria.conf\n")))}d.isMDXComponent=!0}}]);