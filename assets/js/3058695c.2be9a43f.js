"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3350],{15680:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>p});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r.apply(this,arguments)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),p=function(e){return function(t){var a=d(t.components);return o.createElement(e,r({},t,{components:a}))}},d=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||_[m]||r;return a?o.createElement(u,s(s({ref:t},c),{},{components:a})):o.createElement(u,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}b.displayName="MDXCreateElement"},7227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var o=a(96540),n=a(20053);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,n.default)(r.tabItem,i),hidden:a},t)}},49489:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var o=a(58168),n=a(96540),r=a(20053),i=a(24245),s=a(56347),l=a(62814),c=a(45167),p=a(81269);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function _(e){let{queryString:t=!1,groupId:a}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:o}=e,r=m(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[l,c]=_({queryString:a,groupId:o}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,p.Dv)(a);return[o,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:o}),f=(()=>{const e=l??d;return u({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,r]),tabValues:r}}var f=a(11062);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),o=c[a].value;o!==s&&(d(t),l(o))},u=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.default)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,o.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:u,onClick:m},i,{className:(0,r.default)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:o}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=b(e);return n.createElement("div",{className:(0,r.default)("tabs-container",h.tabList)},n.createElement(g,(0,o.A)({},e,t)),n.createElement(v,(0,o.A)({},e,t)))}function x(e){const t=(0,f.default)();return n.createElement(y,(0,o.A)({key:String(t)},e))}},22868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>_,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=a(58168),n=(a(96540),a(15680)),r=a(49489),i=a(7227);const s={sidebar_position:40,title:"MPS"},l="MPS Code Snippets",c={unversionedId:"data_utilities/core_code_snippets/mps",id:"data_utilities/core_code_snippets/mps",title:"MPS",description:"Project Aria Machine Perception Services (MPS) enables Aria users with access to the Aria Research Kit to request derived data on Aria VRS files.",source:"@site/docs/data_utilities/core_code_snippets/mps.mdx",sourceDirName:"data_utilities/core_code_snippets",slug:"/data_utilities/core_code_snippets/mps",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/mps",draft:!1,editUrl:"https://github.com/facebookresearch/projectaria_tools/tree/main/website/docs/data_utilities/core_code_snippets/mps.mdx",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"MPS"},sidebar:"tutorialSidebar",previous:{title:"Calibration",permalink:"/projectaria_tools/docs/data_utilities/core_code_snippets/calibration"},next:{title:"Plot Sensor Data (Python)",permalink:"/projectaria_tools/docs/data_utilities/advanced_code_snippets/plotting_sensor_data"}},p={},d=[{value:"Load MPS output",id:"load-mps-output",level:2},{value:"Open loop/Closed loop trajectory",id:"open-loopclosed-loop-trajectory",level:3},{value:"Point cloud",id:"point-cloud",level:3},{value:"Online calibration",id:"online-calibration",level:3},{value:"Eye gaze",id:"eye-gaze",level:3},{value:"<strong>Static camera calibration</strong>",id:"static-camera-calibration",level:3}],m={toc:d},u="wrapper";function _(e){let{components:t,...a}=e;return(0,n.mdx)(u,(0,o.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"mps-code-snippets"},"MPS Code Snippets"),(0,n.mdx)("p",null,(0,n.mdx)("a",{parentName:"p",href:"/docs/ARK/mps"},"Project Aria Machine Perception Services (MPS)")," enables Aria users with access to the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.projectaria.com/research-kit/"},"Aria Research Kit")," to request derived data on Aria VRS files."),(0,n.mdx)("p",null,"Some ",(0,n.mdx)("a",{parentName:"p",href:"/docs/open_datasets"},"Open Datasets")," also contain ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_summary"},"MPS outputs"),"."),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_synthetic_environments_dataset/ase_getting_started"},"Aria Synthetic Environments (ASE) Dataset")," includes semi-dense point cloud and observations, but they provide their own ",(0,n.mdx)("a",{parentName:"li",href:"/docs/open_datasets/aria_synthetic_environments_dataset/ase_data_tools"},"loading interface"))),(0,n.mdx)("p",null,"This page covers how to consume standard MPS outputs."),(0,n.mdx)("h2",{id:"load-mps-output"},"Load MPS output"),(0,n.mdx)("p",null,"The loaders for MPS output (",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/projectaria_tools/blob/main/core/mps"},"projectaria_tools/main/core/mps"),") provide a convenient way to quickly load the MPS output in a few lines of code into data structures that can then be used downstream."),(0,n.mdx)("p",null,"Please refer to the ",(0,n.mdx)("a",{parentName:"p",href:"/docs/data_formats/mps/mps_summary"},"MPS data schema wiki page")," to learn more about the specifics of what each MPS output consists of. Here, we will focus only on the loading APIs in Python and C++."),(0,n.mdx)("h3",{id:"open-loopclosed-loop-trajectory"},"Open loop/Closed loop trajectory"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nopen_loop_path = "/path/to/mps/output/trajectory/open_loop_trajectory.csv"\nopen_loop_traj = mps.read_open_loop_trajectory(open_loop_path)\n\nclosed_loop_path = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv"\nclosed_loop_traj = mps.read_closed_loop_trajectory(closed_loop_path)\n\n# example: get transformation from this device to world coordinate frame\nfor closed_loop_pose in closed_loop_traj:\n    transform_world_device = closed_loop_pose.transform_world_device\n\n# example: query to find the closest Timestamp device pose and move it to the Aria RGB camera pose\nfrom projectaria_tools.core import data_provider\nfrom projectaria_tools.core.mps.utils import get_nearest_pose\nfrom projectaria_tools.core.stream_id import StreamId\n\nquery_timestamp_ns = int(closed_loop_traj[1].tracking_timestamp.total_seconds() * 1e9) # to be updated with your VRS timestamps\n\npose_info = get_nearest_pose(closed_loop_traj, query_timestamp_ns)\nif pose_info:\n    T_world_device = pose_info.transform_world_device\n\n    # Move this pose to the Project Aria RGB camera\n    vrs_file = "example.vrs"\n    vrs_data_provider = data_provider.create_vrs_data_provider(vrs_file)\n    rgb_stream_id = StreamId("214-1")\n    rgb_stream_label = vrs_data_provider.get_label_from_stream_id(rgb_stream_id)\n    device_calibration = vrs_data_provider.get_device_calibration()\n    rgb_camera_calibration = device_calibration.get_camera_calib(rgb_stream_label)\n\n    T_device_rgb_camera = rgb_camera_calibration.get_transform_device_camera()\n    T_world_rgb_camera = T_world_device @ T_device_rgb_camera\n\n    print(T_world_rgb_camera)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <TrajectoryReaders.h>\nusing namespace projectaria::tools::mps;\n\nstd::string openLoopTrajPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nOpenLoopTrajectory openLoopTraj = readOpenLoopTrajectory(openLoopTrajPath);\n\nstd::string closedLoopTrajPath = "/path/to/mps/output/trajectory/closed_loop_trajectory.csv";\nClosedLoopTrajectory closedLoopTraj = readClosedLoopTrajectory(closedLoopTrajPath);\n\n// example: get transformation from this device to world coordinate frame\nfor (const ClosedLoopTrajectoryPose& closedLoopPose : closedLoopTraj) {\n    const Sophus::SE3d& T_world_device = closedLoopPose.T_world_device;\n}\n')))),(0,n.mdx)("h3",{id:"point-cloud"},"Point cloud"),(0,n.mdx)("admonition",{title:"Always filter global point clouds in 3D",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"Post-filtering the point cloud using inverse distance and distance certainty is required to get point cloud ",(0,n.mdx)("strong",{parentName:"p"},"accurate in 3D space"),". There are points cannot be accurately estimated in 3D space due to low parallax, but those points are well tracked in 2D images, and produce valid 2D observations. We choose to output ",(0,n.mdx)("strong",{parentName:"p"},"all")," the points, include those have poor 3D estimations, in case researchers need them. Go to the ",(0,n.mdx)("a",{parentName:"p",href:"/projectaria_tools/docs/data_formats/mps/slam/mps_pointcloud"},"Semi-Dense Point Cloud page")," for more information.")),(0,n.mdx)("admonition",{title:"Loading observations could be slow",type:"info"},(0,n.mdx)("p",{parentName:"admonition"},"When the Aria recording is long, loading point observations could be memory and time consuming (> 1 minute). A typical 20 minutes long Aria recording will have roughly total 10+ millions of 3D points with total 100+ millions of 2D observations.")),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\nfrom projectaria_tools.core.mps.utils import filter_points_from_confidence\n\nglobal_points_path = "/path/to/mps/output/trajectory/semidense_points.csv.gz"\npoints = mps.read_global_point_cloud(global_points_path)\n\n# filter the point cloud by inverse depth and depth\nconst float inverse_distance_std_threshold = 0.001;\nconst float distance_std_threshold = 0.15;\n\nfiltered_points = filter_points_from_confidence(points, inverse_distance_std_threshold, distance_std_threshold)\n\n# example: get position of this point in the world coordinate frame\nfor point in filtered_points:\n    position_world = point.position_world\n\nobservations_path = "/path/to/mps/output/trajectory/semidense_observations.csv.gz"\nobservations = mps.read_point_observations(observations_path)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <GlobalPointCloudFilter.h>\n#include <GlobalPointCloudReader.h>\n#include <PointObservationReader.h>\n\nusing namespace projectaria::tools::mps;\n\nstd::string globalPointsPath = "/path/to/mps/output/trajectory/open_loop_trajectory.csv";\nGlobalPointCloud points = readGlobalPointCloud(globalPointsPath);\n\n// filter the point cloud by inverse depth and depth\nconst float inverseDistanceStdThreshold = 0.001;\nconst float distanceStdThreshold = 0.15;\nGlobalPointCloud filteredPoints = filterPointsFromConfidence(points, inverseDistanceStdThreshold, distanceStdThreshold);\n\n// example: get position of this point in the world coordinate frame\nfor (const GlobalPointPosition& point : filteredPoints) {\n    const Eigen::Vector3d& position_world = point.position_world;\n}\n\nstd::string observationsPath = "/path/to/mps/output/trajectory/semidense_observations.csv.gz";\nPointObservations observations = readPointObservations(observationsPath);\n')))),(0,n.mdx)("h3",{id:"online-calibration"},"Online calibration"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nonline_calib_path = "/path/to/mps/output/trajectory/online_calibration.jsonl"\nonline_calibs = mps.read_online_calibration(online_calib_path)\n\nfor calib in online_calibs:\n    # example: get left IMU\'s online calibration\n    for imuCalib in calib.imu_calibs:\n        if imuCalib.get_label() == "imu-left":\n            leftImuCalib = imuCalib\n    # example: get left SLAM camera\'s online calibration\n    for camCalib in calib.camera_calibs:\n        if camCalib.get_label() == "camera-slam-left":\n            leftCamCalib = camCalib\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <OnlineCalibrationsReader.h>\nusing namespace projectaria::tools::calibration;\nusing namespace projectaria::tools::mps;\n\nstd::string onlineCalibPath = "/path/to/mps/output/trajectory/online_calibration.jsonl";\nOnlineCalibrations onlineCalibs = readOnlineCalibration(onlineCalibPath);\n\nfor (const OnlineCalibration& calib : onlineCalibs) {\n    // example: get left IMU\'s online calibration\n    for (const ImuCalibration& imuCalib : calib.imuCalibs) {\n        if (imuCalib.getLabel() == "imu-left") {\n            const ImuCalibration& leftImuCalib = imuCalib;\n        }\n    }\n    // example: get left SLAM camera\'s online calibration\n    for (const CameraCalibration& camCalib : calib.cameraCalibs) {\n        if (camCalib.getLabel() == "camera-slam-left") {\n            const CameraCalibration& leftCamCalib = camCalib;\n        }\n    }\n}\n')))),(0,n.mdx)("h3",{id:"eye-gaze"},"Eye gaze"),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\ngaze_path = "/path/to/mps/output/eye_gaze/general_eye_gaze.csv"\ngaze_cpf = mps.read_eyegaze(eye_gaze_path)\n\n# project the 3D gaze point assume depth is 1.0 meter\ndepth_m = 1.0\ngaze_point_cpf = mps.get_eyegaze_point_at_depth(gaze_cpf[1].yaw, gaze_cpf[1].pitch, depth_m)\n\n# example: query to find the closest Timestamp eye gaze data\nfrom projectaria_tools.core import data_provider\nfrom projectaria_tools.core.stream_id import StreamId\nfrom projectaria_tools.core.mps.utils import (\n    get_gaze_vector_reprojection,\n    get_nearest_eye_gaze\n)\n\nquery_timestamp_ns = int(gaze_cpf[1].tracking_timestamp.total_seconds() * 1e9)  # to be updated with your VRS timestamps\n\neye_gaze_info = get_nearest_eye_gaze(gaze_cpf, query_timestamp_ns)\n\nif eye_gaze_info:\n    # Re project the eye gaze point in the RGB camera\n    vrs_file = "example.vrs"\n    vrs_data_provider = data_provider.create_vrs_data_provider(vrs_file)\n\n    rgb_stream_id = StreamId("214-1")\n    rgb_stream_label = vrs_data_provider.get_label_from_stream_id(rgb_stream_id)\n    device_calibration = vrs_data_provider.get_device_calibration()\n    rgb_camera_calibration = device_calibration.get_camera_calib(rgb_stream_label)\n\n    gaze_projection = get_gaze_vector_reprojection(\n                    eye_gaze_info,\n                    rgb_stream_label,\n                    device_calibration,\n                    rgb_camera_calibration,\n                    depth_m,\n                )\n    print(gaze_projection)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <EyeGazeReader.h>\nusing namespace projectaria::tools::mps;\n\nstd::string gazePath = "/path/to/mps/output/eye_gaze/eyegaze.csv";\nEyeGazes gazeCpf = readEyeGaze(gazePath);\n\n// project the 3D gaze point assume depth is 1.0 meter\nfloat depthM = 1.0f;\nEigen::Vector3d gazePointCpf = getEyeGazePointAtDepth(gazeCpf[0].yaw, gazeCpf[0].pitch, depthM);\n')))),(0,n.mdx)("h3",{id:"static-camera-calibration"},(0,n.mdx)("strong",{parentName:"h3"},"Static camera calibration")),(0,n.mdx)(r.default,{groupId:"programming-language",mdxType:"Tabs"},(0,n.mdx)(i.default,{value:"python",label:"Python",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-python"},'import projectaria_tools.core.mps as mps\n\nstatic_cameras_path = "/path/to/mps/output/trajectory/static_cam_calibs.csv"\nstatic_cameras = mps.read_static_camera_calibrations(static_cameras_path)\n'))),(0,n.mdx)(i.default,{value:"cpp",label:"C++",mdxType:"TabItem"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'#include <StaticCameraCalibrationReader.h>\nusing namespace projectaria::tools::mps;\n\nstd::string staticCamerasPath = "/path/to/mps/output/trajectory/static_cam_calibs.csv";\nStaticCameraCalibrations staticCameras = readStaticCameraCalibrations(staticCamerasPath);\n')))))}_.isMDXComponent=!0}}]);