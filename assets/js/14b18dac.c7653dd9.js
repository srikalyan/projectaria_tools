"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1275],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>_,useMDXComponents:()=>u,withMDXComponents:()=>p});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=o.createContext({}),p=function(e){return function(t){var a=u(t.components);return o.createElement(e,r({},t,{components:a}))}},u=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,c=p["".concat(i,".").concat(m)]||p[m]||h[m]||r;return a?o.createElement(c,l(l({ref:t},d),{},{components:a})):o.createElement(c,l({ref:t},d))}));function _(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},15051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=a(58168),n=(a(96540),a(15680));const r={sidebar_position:20,title:"Getting Started"},i="Getting Started With ADT",l={unversionedId:"open_datasets/aria_digital_twin_dataset/getting_started",id:"open_datasets/aria_digital_twin_dataset/getting_started",title:"Getting Started",description:"Overview",source:"@site/docs/open_datasets/aria_digital_twin_dataset/getting_started.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/getting_started",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/getting_started.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/"},next:{title:"Dataset Download",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Run Jupyter Notebook on Google Colab",id:"run-jupyter-notebook-on-google-colab",level:2},{value:"Running the Jupyter Notebook locally",id:"running-the-jupyter-notebook-locally",level:2},{value:"Step 0 : Check system requirements and download codebase",id:"step-0--check-system-requirements-and-download-codebase",level:3},{value:"Step 1 : Install Python",id:"step-1--install-python",level:3},{value:"Step 2 : Create a virtual environment",id:"step-2--create-a-virtual-environment",level:3},{value:"Step 3 : Install projectaria_tools from pypi",id:"step-3--install-projectaria_tools-from-pypi",level:3},{value:"Step 4 : Download Sample Sequence:",id:"step-4--download-sample-sequence",level:3},{value:"Step 5 : Run Tutorial",id:"step-5--run-tutorial",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Other useful links",id:"other-useful-links",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.mdx)(u,(0,o.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"getting-started-with-adt"},"Getting Started With ADT"),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"This section provides a step-by-step guide to run the Aria Digital Twin (ADT) quickstart tutorial in a Jupyter notebook."),(0,n.mdx)("p",null,"This notebook provides a walkthrough of:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Loading an ADT sequence"),(0,n.mdx)("li",{parentName:"ul"},"Accessing and visualizing all ADT ground-truth data:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"6DoF object poses"),(0,n.mdx)("li",{parentName:"ul"},"2D object bounding box"),(0,n.mdx)("li",{parentName:"ul"},"Segmentation images"),(0,n.mdx)("li",{parentName:"ul"},"Depth images"),(0,n.mdx)("li",{parentName:"ul"},"Skeleton and synthetic rendering"),(0,n.mdx)("li",{parentName:"ul"},"Eye gaze"))),(0,n.mdx)("li",{parentName:"ul"},"An example of undistorting ADT ground-truth data")),(0,n.mdx)("p",null,"We also have an ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},"Advanced Tutorial")," that will walk you through getting synchronized ground truth data in a multi-person sequence."),(0,n.mdx)("h2",{id:"run-jupyter-notebook-on-google-colab"},"Run Jupyter Notebook on Google Colab"),(0,n.mdx)("p",null,"Use the following link to run the Python notebook in an installation free playground:"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://colab.research.google.com/github/facebookresearch/projectaria_tools/blob/1.4.0/projects/AriaDigitalTwinDatasetTools/examples/adt_quickstart_tutorial.ipynb"},"Aria Digital Twin (ADT)"))),(0,n.mdx)("h2",{id:"running-the-jupyter-notebook-locally"},"Running the Jupyter Notebook locally"),(0,n.mdx)("h3",{id:"step-0--check-system-requirements-and-download-codebase"},"Step 0 : Check system requirements and download codebase"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/download_codebase"},"Ensure your system is supported and then download projectaria_tools codebase from the github")),(0,n.mdx)("h3",{id:"step-1--install-python"},"Step 1 : Install Python"),(0,n.mdx)("p",null,"If you have already installed ",(0,n.mdx)("inlineCode",{parentName:"p"},"projectaria-tools")," using ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/installation_python"},"Python Package Installation"),", you can skip to Step 4. The ADT Python code is part of the main projectaria-tools package."),(0,n.mdx)("admonition",{type:"tip"},(0,n.mdx)("mdxAdmonitionTitle",{parentName:"admonition"},(0,n.mdx)("a",{parentName:"mdxAdmonitionTitle",href:"/projectaria_tools/docs/data_utilities/installation/troubleshooting#jupyter-notebook-error"},"Jupyter notebook error")),(0,n.mdx)("p",{parentName:"admonition"},"If you have problems using Jupyter examples, please ",(0,n.mdx)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"upgrade python3")," to the latest version.")),(0,n.mdx)("h3",{id:"step-2--create-a-virtual-environment"},"Step 2 : Create a virtual environment"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -rf $HOME/projectaria_tools_python_env\n\npython3 -m venv $HOME/projectaria_tools_python_env\n\nsource $HOME/projectaria_tools_python_env/bin/activate\n")),(0,n.mdx)("h3",{id:"step-3--install-projectaria_tools-from-pypi"},"Step 3 : Install projectaria_tools from pypi"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade pip\n\npip3 install projectaria-tools'[all]'\n")),(0,n.mdx)("h3",{id:"step-4--download-sample-sequence"},"Step 4 : Download Sample Sequence:"),(0,n.mdx)("p",null,"Download the sample ADT sequence by following steps 0 to 4 in\n",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/dataset_download#download-the-sample-aria-digital-twin-adt-sequence"},"How to Download the ADT Dataset"),"."),(0,n.mdx)("h3",{id:"step-5--run-tutorial"},"Step 5 : Run Tutorial"),(0,n.mdx)("p",null,"From your projectaria_tools python virtual environment, run:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/Documents/projectaria_sandbox\n\njupyter notebook projectaria_tools/projects/AriaDigitalTwinDatasetTools/examples/adt_quickstart_tutorial.ipynb\n")),(0,n.mdx)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.mdx)("p",null,"Go to ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_utilities/installation/troubleshooting"},"Data Utilities Troubleshooting")," if you have issues implementing this guide."),(0,n.mdx)("h2",{id:"other-useful-links"},"Other useful links"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_utilities/installation/installation_cpp"},"Use projectaria_tools with CMake")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"Timestamps in Aria VRS Files"))))}m.isMDXComponent=!0}}]);