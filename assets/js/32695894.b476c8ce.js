(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||u[d]||c;return n?r.a.createElement(f,i(i({ref:t},l),{},{components:n})):r.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<c;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(151)),s={title:"Defining Facets",sidebar_label:"Defining Facets",sidebar_position:1},i={unversionedId:"core/defining_facets",id:"core/defining_facets",isDocsHomePage:!1,title:"Defining Facets",description:"Facets are simple data classes. Here are a couple examples:",source:"@site/docs/core/defining_facets.md",sourceDirName:"core",slug:"/core/defining_facets",permalink:"/docs/core/defining_facets",editUrl:"https://github.com/dustinlacewell/react-ecs/edit/master/apps/docs/docs/core/defining_facets.md",version:"current",sidebar_label:"Defining Facets",sidebarPosition:1,frontMatter:{title:"Defining Facets",sidebar_label:"Defining Facets",sidebar_position:1},sidebar:"mySidebar",previous:{title:"Creating an ECS",permalink:"/docs/core/creating_an_ecs"},next:{title:"Declaring Entities",permalink:"/docs/core/declaring_entities"}},o=[{value:"Facet Classes",id:"facet-classes",children:[{value:"Facet Tags",id:"facet-tags",children:[]}]},{value:"Facet Components",id:"facet-components",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/api/core/classes/facet"},"Facets")," are simple data classes. Here are a couple examples:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"class Transform extends Facet<Position> {\n    position? = new Vector2(0, 0);\n    rotation? = 0;\n}\n\nclass Health extends Facet<Position> {\n    current? = 100;\n    max? = 100;\n}\n\nclass Invincible extends Facet<Position> {}\n")),Object(c.b)("h2",{id:"facet-classes"},"Facet Classes"),Object(c.b)("p",null,"Every facet must extend ",Object(c.b)("a",{parentName:"p",href:"/api/core/classes/facet"},"Facet","<","T",">"),", with itself as the ",Object(c.b)("inlineCode",{parentName:"p"},"T")," type parameter."),Object(c.b)("p",null,"Facet attributes are declared as ",Object(c.b)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/classes.html#fields"},"class fields"),"."),Object(c.b)("p",null,"You can either provide a default:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"    position? = new Vector2(0, 0)\n")),Object(c.b)("p",null,"...in which case you should mark the field as optional. This is so the corresponding ",Object(c.b)("a",{parentName:"p",href:"#facetprops"},"Facet Prop")," is also optional."),Object(c.b)("p",null,"Or you can provide a type:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"position: Vector2;\n")),Object(c.b)("p",null,"...in which case you should ",Object(c.b)("em",{parentName:"p"},"not")," mark the field as options. This is to ensure the corresponding ",Object(c.b)("a",{parentName:"p",href:"#facetprops"},"Facet Prop")," is also required."),Object(c.b)("h3",{id:"facet-tags"},"Facet Tags"),Object(c.b)("p",null,"Facets may have no fields, in which case they may be used as marker tags:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class IsEnemy extends Facet<IsEnemy> {}\n")),Object(c.b)("h2",{id:"facet-components"},"Facet Components"),Object(c.b)("p",null,"Facets are automatically valid React Components. Use them within an ",Object(c.b)("a",{parentName:"p",href:"/docs/core/declaring_entities"},"Entity Declaration")," to associate them with an ",Object(c.b)("a",{parentName:"p",href:"/api/core/classes/entity"},"Entity"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<Entity>\n    <Transform />\n    <Velocity />\n    <Health max={500} />\n</Entity>\n")))}p.isMDXComponent=!0}}]);