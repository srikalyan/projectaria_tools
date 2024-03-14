"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7065],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>_,useMDXComponents:()=>c,withMDXComponents:()=>d});var o=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),d=function(e){return function(t){var a=c(t.components);return o.createElement(e,n({},t,{components:a}))}},c=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,m=d["".concat(i,".").concat(u)]||d[u]||y[u]||n;return a?o.createElement(m,l(l({ref:t},p),{},{components:a})):o.createElement(m,l({ref:t},p))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=v;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}v.displayName="MDXCreateElement"},48017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(58168),r=(a(96540),a(15680));const n={sidebar_position:10,title:"Getting Started"},i="Getting Started With AEA",l={unversionedId:"open_datasets/aria_everyday_activities_dataset/aea_getting_started",id:"open_datasets/aria_everyday_activities_dataset/aea_getting_started",title:"Getting Started",description:"Overview",source:"@site/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started.mdx",sourceDirName:"open_datasets/aria_everyday_activities_dataset",slug:"/open_datasets/aria_everyday_activities_dataset/aea_getting_started",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_everyday_activities_dataset/aea_getting_started.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Aria Everyday Activities Dataset",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/"},next:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Run Jupyter Notebook on Google Colab",id:"run-jupyter-notebook-on-google-colab",level:2},{value:"Running the Jupyter Notebook locally",id:"running-the-jupyter-notebook-locally",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install <code>projectaria_tools</code> from pypi",id:"step-3--install-projectaria_tools-from-pypi",level:3},{value:"Step 4 : Download Sample Sequence:",id:"step-4--download-sample-sequence",level:3},{value:"Step 5 : Run Tutorial",id:"step-5--run-tutorial",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Other useful links",id:"other-useful-links",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.mdx)(c,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"getting-started-with-aea"},"Getting Started With AEA"),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"This section provides a step-by-step guide to run the Aria Everyday Activities (AEA) quickstart tutorial in a Jupyter notebook."),(0,r.mdx)("p",null,"This notebook covers how to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Access raw sensor data (VRS files)"),(0,r.mdx)("li",{parentName:"ul"},"Visualize Eye Gaze data"),(0,r.mdx)("li",{parentName:"ul"},"Visualize Speech data"),(0,r.mdx)("li",{parentName:"ul"},"Load concurrent sequences from multiple Project Aria glasses in a shared space location"),(0,r.mdx)("li",{parentName:"ul"},"Use Timecode to get synchronized data between two devices")),(0,r.mdx)("h2",{id:"run-jupyter-notebook-on-google-colab"},"Run Jupyter Notebook on Google Colab"),(0,r.mdx)("p",null,"Use the following link to run the Python notebook in an installation free playground:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://colab.research.google.com/github/facebookresearch/projectaria_tools/blob/main/projects/AriaEverydayActivities/examples/aea_quickstart_tutorial.ipynb"},"Aria Everyday Activities (AEA)"))),(0,r.mdx)("h2",{id:"running-the-jupyter-notebook-locally"},"Running the Jupyter Notebook locally"),(0,r.mdx)("h3",{id:"step-0--check-system-requirements-and-download-codebase"},"Step 0 : Check system requirements and download codebase"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/installation/download_codebase"},"Ensure your system is supported and then download projectaria_tools codebase from the github")),(0,r.mdx)("h3",{id:"step-1--install-python"},"Step 1 : Install Python"),(0,r.mdx)("p",null,"If you have already installed ",(0,r.mdx)("inlineCode",{parentName:"p"},"projectaria-tools")," using ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/installation/installation_python"},"Python Package Installation"),", you can skip to Step 4. The AEA Python code is part of the main ",(0,r.mdx)("inlineCode",{parentName:"p"},"projectaria-tools")," package."),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.mdx)("a",{parentName:"mdxAdmonitionTitle",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting#jupyter-notebook-error"},"Jupyter notebook error")),(0,r.mdx)("p",{parentName:"admonition"},"If you have problems using Jupyter examples, please ",(0,r.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"upgrade python3")," to the latest version.")),(0,r.mdx)("h3",{id:"step-2--create-a-virtual-environment"},"Step 2 : Create a virtual environment"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n")),(0,r.mdx)("h3",{id:"step-3--install-projectaria_tools-from-pypi"},"Step 3 : Install ",(0,r.mdx)("inlineCode",{parentName:"h3"},"projectaria_tools")," from pypi"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"pip3 install --upgrade pip\n\npip3 install projectaria-tools'[all]'\n")),(0,r.mdx)("h3",{id:"step-4--download-sample-sequence"},"Step 4 : Download Sample Sequence:"),(0,r.mdx)("p",null,"Download the sample AEA sequence by following steps 0 to 4 in ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_everyday_activities_dataset/aea_download_dataset"},"Dataset Download"),"."),(0,r.mdx)("h3",{id:"step-5--run-tutorial"},"Step 5 : Run Tutorial"),(0,r.mdx)("p",null,"From your projectaria_tools python virtual environment, run:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"cd $HOME/Documents/projectaria_sandbox\n\njupyter notebook projectaria_tools/projects/AriaEverydayActivities/examples/aea_quickstart_tutorial.ipynb\n")),(0,r.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.mdx)("p",null,"Go to ",(0,r.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting"},"Data Utilities Troubleshooting")," if you experience issues implementing this guide."),(0,r.mdx)("h2",{id:"other-useful-links"},"Other useful links"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/installation/installation_cpp"},"Use projectaria_tools with CMake")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"Timestamps in Aria VRS Files"))))}u.isMDXComponent=!0}}]);