(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{159:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),i=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=i(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(a),d=r,O=m["".concat(c,".").concat(d)]||m[d]||o[d]||b;return a?n.a.createElement(O,s(s({ref:t},p),{},{components:a})):n.a.createElement(O,s({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return i}));var r=a(3),n=a(7),b=(a(0),a(159)),c={id:"systemsmanager",title:"Class: SystemsManager",sidebar_label:"SystemsManager",custom_edit_url:null,hide_title:!0},s={unversionedId:"core/classes/systemsmanager",id:"core/classes/systemsmanager",isDocsHomePage:!1,title:"Class: SystemsManager",description:"Constructors",source:"@site/api/core/classes/systemsmanager.md",sourceDirName:"core/classes",slug:"/core/classes/systemsmanager",permalink:"/api/core/classes/systemsmanager",editUrl:null,version:"current",sidebar_label:"SystemsManager",frontMatter:{id:"systemsmanager",title:"Class: SystemsManager",sidebar_label:"SystemsManager",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Class: Query",permalink:"/api/core/classes/query"},next:{title:"Interface: DOMViewProps",permalink:"/api/core/interfaces/domviewprops"}},l=[{value:"constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"systems",id:"systems",children:[]}]},{value:"Methods",id:"methods",children:[{value:"add",id:"add",children:[]},{value:"clear",id:"clear",children:[]},{value:"remove",id:"remove",children:[]},{value:"sort",id:"sort",children:[]},{value:"update",id:"update",children:[]}]}],p={toc:l};function i(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new SystemsManager"),"(): ",Object(b.b)("a",{parentName:"p",href:"/api/core/classes/systemsmanager"},Object(b.b)("em",{parentName:"a"},"SystemsManager"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/api/core/classes/systemsmanager"},Object(b.b)("em",{parentName:"a"},"SystemsManager"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L7"},"libs/core/src/lib/SystemsManager.ts:7")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"systems"},"systems"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("strong",{parentName:"p"},"systems"),": ",Object(b.b)("a",{parentName:"p",href:"/api/core/types/systementry"},Object(b.b)("em",{parentName:"a"},"SystemEntry")),"[]"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L7"},"libs/core/src/lib/SystemsManager.ts:7")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"add"},"add"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"add"),"(",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": ",Object(b.b)("a",{parentName:"p",href:"/api/core/types/system"},Object(b.b)("em",{parentName:"a"},"System")),", ",Object(b.b)("inlineCode",{parentName:"p"},"priority?"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/api/core/types/system"},Object(b.b)("em",{parentName:"a"},"System"))),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"priority")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"number")),Object(b.b)("td",{parentName:"tr",align:"left"},"0")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L17"},"libs/core/src/lib/SystemsManager.ts:17")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"clear"},"clear"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"clear"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L32"},"libs/core/src/lib/SystemsManager.ts:32")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"remove"},"remove"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"remove"),"(",Object(b.b)("inlineCode",{parentName:"p"},"callback"),": ",Object(b.b)("a",{parentName:"p",href:"/api/core/types/system"},Object(b.b)("em",{parentName:"a"},"System")),"): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"callback")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/api/core/types/system"},Object(b.b)("em",{parentName:"a"},"System")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L22"},"libs/core/src/lib/SystemsManager.ts:22")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"sort"},"sort"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected"),Object(b.b)("strong",{parentName:"p"},"sort"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L13"},"libs/core/src/lib/SystemsManager.ts:13")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"update"),"(",Object(b.b)("inlineCode",{parentName:"p"},"dt"),": ",Object(b.b)("em",{parentName:"p"},"number"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"dt")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"number"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/SystemsManager.ts#L36"},"libs/core/src/lib/SystemsManager.ts:36")))}i.isMDXComponent=!0}}]);