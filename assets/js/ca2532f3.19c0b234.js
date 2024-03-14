"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7826],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>c});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},r.apply(this,arguments)}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),c=function(e){return function(t){var a=u(t.components);return i.createElement(e,r({},t,{components:a}))}},u=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(a),p=n,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||r;return a?i.createElement(h,s(s({ref:t},d),{},{components:a})):i.createElement(h,s({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var i=a(96540),n=a(20053);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return i.createElement("div",{role:"tabpanel",className:(0,n.default)(r.tabItem,o),hidden:a},t)}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var i=a(58168),n=a(96540),r=a(20053),o=a(24245),s=a(56347),l=a(62814),d=a(45167),c=a(81269);function u(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,r=p(e),[o,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[l,d]=m({queryString:a,groupId:i}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Dv)(a);return[i,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:i}),g=(()=>{const e=l??u;return h({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var g=a(11062);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:d}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),i=d[a].value;i!==s&&(u(t),l(i))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,i.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},o,{className:(0,r.default)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:i}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=f(e);return n.createElement("div",{className:(0,r.default)("tabs-container",v.tabList)},n.createElement(b,(0,i.A)({},e,t)),n.createElement(_,(0,i.A)({},e,t)))}function D(e){const t=(0,g.default)();return n.createElement(w,(0,i.A)({key:String(t)},e))}},53771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var i=a(58168),n=(a(96540),a(15680)),r=a(49489),o=a(7227);const s={sidebar_position:50,title:"Data Loader"},l=void 0,d={unversionedId:"open_datasets/aria_digital_twin_dataset/data_loader",id:"open_datasets/aria_digital_twin_dataset/data_loader",title:"Data Loader",description:"Data loading is broken down into two main loaders: AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider.",source:"@site/docs/open_datasets/aria_digital_twin_dataset/data_loader.mdx",sourceDirName:"open_datasets/aria_digital_twin_dataset",slug:"/open_datasets/aria_digital_twin_dataset/data_loader",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_loader",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/open_datasets/aria_digital_twin_dataset/data_loader.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"Data Loader"},sidebar:"tutorialSidebar",previous:{title:"Data Format",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format"},next:{title:"Visualizers",permalink:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers"}},c={},u=[{value:"AriaDigitalTwinDataPathsProvider",id:"ariadigitaltwindatapathsprovider",level:2},{value:"AriaDigitalTwinDataProvider",id:"ariadigitaltwindataprovider",level:2},{value:"Skip Data loading",id:"skip-data-loading",level:3},{value:"Check Data Existence",id:"check-data-existence",level:2},{value:"Ground Truth Data Getter Functions",id:"ground-truth-data-getter-functions",level:3},{value:"Getting Instance Information",id:"getting-instance-information",level:4},{value:"Time Query Options",id:"time-query-options",level:4},{value:"Accessing Timestamped Data",id:"accessing-timestamped-data",level:4},{value:"Interpolation Function",id:"interpolation-function",level:4},{value:"Time Synchronization Between Subsequences",id:"time-synchronization-between-subsequences",level:3},{value:"Skeleton Data",id:"skeleton-data",level:3}],p={toc:u},h="wrapper";function m(e){let{components:t,...a}=e;return(0,n.mdx)(h,(0,i.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Data loading is broken down into two main loaders: AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider.\nIn this section, we will give a high level introduction to the two data loader types."),(0,n.mdx)("p",null,"As with all of projectaria_tools, we provide a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/tree/main/projects/AriaDigitalTwinDatasetTools/data_provider"},"C++ implementation"),",\nwith ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/python/AriaDigitalTwinDatasetToolsPyBind.h#L263"},"pybindings")," so that users can use our libraries in C++ or Python without loosing functionality."),(0,n.mdx)("h2",{id:"ariadigitaltwindatapathsprovider"},"AriaDigitalTwinDataPathsProvider"),(0,n.mdx)("p",null,"The main goal of this loader is to give the user an easy way to load\nan ADT ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format#sequence-and-subsequence"},"sequence")," and its metadata,\nto select a specific ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format#sequence-and-subsequence"},"subsequence"),",\nand to select specific annotations to load (e.g., ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/data_format#skeleton-data-and-availability"},"with or without skeleton"),"). AriaDigitalTwinDataPathsProvider manages all ground truth file\npaths that can be used to load ground truth data in AriaDigitalTwinDataProvider.\nThe following shows an example code snippet which loads an ADT sequence and select a subsequence to be passed to the AriaDigitalTwinDataProvider."),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(o.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'from projectaria_tools.projects.adt import AriaDigitalTwinDataPathsProvider\n\n# define the sequence path you want to load\nsequence_path = "PATH/TO/An_ADT_sequence"\n\n# create path provider\npaths_provider = AriaDigitalTwinDataPathsProvider(sequence_path)\n\n# list all subsequences for this sequence\nall_device_serials = paths_provider.get_device_serial_numbers()\n\n# print the Aria device serial number used in each subsequence\nfor idx, device_serial in enumerate(all_device_serials):\n    print("device number - ", idx, ": ", device_serial)\n\n# load the set of ground truth data files without skeleton occlusion of the first Aria device\ndata_paths_without_skeleton_occlusion = paths_provider.get_datapaths_by_device_num(0, False)\n\n# load the set of ground truth data files with skeleton occlusion of the first Aria device\ndata_paths_with_skeleton_occlusion = paths_provider.get_datapaths_by_device_num(0, True)\n'))),(0,n.mdx)(o.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include "AriaDigitalTwinDataPathsProvider.h"\n\nusing namespace projectaria::dataset::adt;\n\n// define the sequence path you want to load\nstd::string sequencePath = "PATH/TO/An_ADT_sequence";\n\n// create path provider\nAriaDigitalTwinDataPathsProvider dataPathsProvider(sequencePath);\n\n// list all subsequences for this sequence\nconst auto& allDevices = dataPathsProvider.getDeviceSerialNumbers();\n\n// print the Aria device serial number used in each subsequence\nfor (size_t i = 0; i < allDevices.size(); ++i) {\n  fmt::print("  -- Device number {}: {}\\n", i, allDevices[i]);\n}\n\n// load the set of ground truth data files without skeleton occlusion of the first Aria device\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithoutSkeletonOcclusion =\n      dataPathsProvider.getDataPathsByDeviceNum(0, false);\n\n// load the set of ground truth data files with skeleton occlusion of the first Aria device\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithSkeletonOcclusion =\n      dataPathsProvider.getDataPathsByDeviceNum(0, true);\n')))),(0,n.mdx)("h2",{id:"ariadigitaltwindataprovider"},"AriaDigitalTwinDataProvider"),(0,n.mdx)("p",null,"This is the core data loader that takes an instance of the AriaDigitalTwinDataPaths class (generated by the AriaDigitalTwinDataPathsProvider) and provides you will query functions to access all ADT data. The following shows an example snippet to load ground truth data with the AriaDigitalTwinDataProvider:"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(o.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'from projectaria_tools.projects.adt import AriaDigitalTwinDataPathsProvider, AriaDigitalTwinDataProvider\n\n# define the sequence path you want to load\nsequence_path = "PATH/TO/An_ADT_sequence"\n\n# create path provider\npaths_provider = AriaDigitalTwinDataPathsProvider(sequence_path)\n\n# load the set of ground truth data files with skeleton occlusion of the first Aria device\ndata_paths_with_skeleton_occlusion = paths_provider.get_datapaths_by_device_num(0, True)\n\n# create data provider\ngt_provider = AriaDigitalTwinDataProvider(data_paths_with_skeleton_occlusion)\n'))),(0,n.mdx)(o.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include "AriaDigitalTwinDataPathsProvider.h"\n\nusing namespace projectaria::dataset::adt;\n\n// define the sequence path you want to load\nstd::string sequencePath = "PATH/TO/An_ADT_sequence";\n\n// create path provider\nAriaDigitalTwinDataPathsProvider dataPathsProvider(sequencePath);\n\n// load the set of ground truth data files with skeleton occlusion of the first Aria device\nstd::optional<AriaDigitalTwinDataPaths> dataPathsWithSkeletonOcclusion =\n      dataPathsProvider.getDataPathsByDeviceNum(0, true);\n\n// create data provider\nAriaDigitalTwinDataProvider adtDataProvider(dataPaths);\n')))),(0,n.mdx)("h3",{id:"skip-data-loading"},"Skip Data loading"),(0,n.mdx)("p",null,"All data loaders are designed to allow the user to skip the loading of specific data types.\nYou can do this by setting the path to an empty string in your ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataPathsProvider.h"},"AriaDigitalTwinDataPaths"),"\ninstance prior to constructing the AriaDigitalTwinDataProvider."),(0,n.mdx)("h2",{id:"check-data-existence"},"Check Data Existence"),(0,n.mdx)("p",null,"Since we allow users to skip specific data type loading as explained above, we also provide functions in in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataProvider.h"},"AriaDigitalTwinDataProvider"),"\nto check if data exists by calling their appropriate functions before calling the corresponding getter functions. E.g. hasObject3dBoundingboxes()"),(0,n.mdx)("h3",{id:"ground-truth-data-getter-functions"},"Ground Truth Data Getter Functions"),(0,n.mdx)("p",null,"For a full example of the python getters, please refer to the notebook in the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/getting_started"},"Getting Started"),".\nFor a full example of the C++ getters, please refer to the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/visualizers"},"visualizer example"),"."),(0,n.mdx)("h4",{id:"getting-instance-information"},"Getting Instance Information"),(0,n.mdx)("p",null,"In ADT, we define an instance to be either a human or an object. The attributes of an instance is defined in class InstanceInfo in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataTypes.h"},"AriaDigitalTwinDataTypes"),".\nWe use instanceType to differentiate a human and an object."),(0,n.mdx)("h4",{id:"time-query-options"},"Time Query Options"),(0,n.mdx)("p",null,"You may have also noticed the timeQueryOptions parameter in the above getter functions. Same as dataprovider, all getter functions for timestamped data allow you to\nspecify how to query the timestamps. The options are defined in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/data_provider/TimeTypes.h"},"TimeTypes")),(0,n.mdx)("h4",{id:"accessing-timestamped-data"},"Accessing Timestamped Data"),(0,n.mdx)("p",null,"All timestamped data query APIs return a templated DataWithDt class. For example, BoundingBox2dDataWithDt defined in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataTypes.h"},"AriaDigitalTwinDataTypes")," as:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre"},"using BoundingBox2dDataWithDt = DataWithDt<TypeBoundingBox2dMap>;\n")),(0,n.mdx)("p",null,"The goal of wrapping all data in a DataWithDt class is to ensure all returned timestamped data has two fields: isValid, and dtNs. Where isValid defined whether or not the returned data is valid,\nsince all timestamp queries may be invalid times, and dtNs to ensure the user always knows the time difference between the returned data and the query time."),(0,n.mdx)("h4",{id:"interpolation-function"},"Interpolation Function"),(0,n.mdx)("p",null,'We provide interpolation functions for 6DoF Aria poses and Object 3d bounding boxes called "getInterpolatedAria3dPoseAtTimestampNs" and "getInterpolatedObject3dBoundingBoxesAtTimestampNs"\nin ',(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinDataProvider.h"},"AriaDigitalTwinDataProvider")),(0,n.mdx)("h3",{id:"time-synchronization-between-subsequences"},"Time Synchronization Between Subsequences"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/open_datasets/aria_digital_twin_dataset/advanced_tutorials"},"Advanced Tutorial")," shows how to synchronize subsequences in an ADT sequence."),(0,n.mdx)("p",null,(0,n.mdx)("strong",{parentName:"p"},"Further resources:")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/data_formats/aria_vrs/timestamps_in_aria_vrs"},"Timestamps in Aria VRS Files")," - how Project Aria timestamp data is formatted in VRS for single and multiple devices"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/tech_insights/device_timestamping"},"Project Aria Device Timestamping")," - how the hardware is configured"),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/projectaria_tools/docs/tech_insights/temporal_alignment_of_sensor_data"},"Temporal Alignment of Aria Sensor Data")," - how the data is temporally aligned and how to finely align IMU, barometer and magnetometer data")),(0,n.mdx)("h3",{id:"skeleton-data"},"Skeleton Data"),(0,n.mdx)("p",null,"Separate from the 2D skeleton data, we also have skeleton frames as measured by Optitrack.\nThis data can be accessed directly from the AriaDigitalTwinDataProvider, or using the AriaDigitalTwinSkeletonProvider which can be extracted from AriaDigitalTwinDataProvider.\nMotive, the software that runs the Optitrack system, generates two types of skeleton data:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Skeleton Markers: a set of 3D marker positions of all visible markers that are attached to the bodysuit. If markers are occluded, they are set to ","[0,0,0]",".\nWe provide a helper function to get the labels: getMarkerLabels() in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinSkeletonProvider.h"},"AriaDigitalTwinSkeletonProvider"),".\nFor more information see motive\u2019s ",(0,n.mdx)("a",{parentName:"p",href:"https://v22.wiki.optitrack.com/index.php?title=Biomechanics_Markersets"},(0,n.mdx)("em",{parentName:"a"},"Biomech57 template")))),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("p",{parentName:"li"},"Skeleton Joints: a set of estimated 3D joint positions. We provide a list of these joint positions for each timestamp,\nas well as the joint labels getJointConnections(), and connections getJointLabels() in in ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/projects/AriaDigitalTwinDatasetTools/data_provider/AriaDigitalTwinSkeletonProvider.h"},"AriaDigitalTwinSkeletonProvider")))),(0,n.mdx)("p",null,"Note that both the markers and the joints are provided in the ADT Scene frame to be consistent with all other ground truth data."))}m.isMDXComponent=!0}}]);