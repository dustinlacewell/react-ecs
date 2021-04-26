(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),b=n(7),r=(n(0),n(159)),c={id:"query",title:"Class: Query",sidebar_label:"Query",custom_edit_url:null,hide_title:!0},i={unversionedId:"core/classes/query",id:"core/classes/query",isDocsHomePage:!1,title:"Class: Query",description:"Hierarchy",source:"@site/api/core/classes/query.md",sourceDirName:"core/classes",slug:"/core/classes/query",permalink:"/api/core/classes/query",editUrl:null,version:"current",sidebar_label:"Query",frontMatter:{id:"query",title:"Class: Query",sidebar_label:"Query",custom_edit_url:null,hide_title:!0},sidebar:"sidebar",previous:{title:"Class: Facet<T>",permalink:"/api/core/classes/facet"},next:{title:"Class: SystemsManager",permalink:"/api/core/classes/systemsmanager"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"onEntityAdded",id:"onentityadded",children:[]},{value:"onEntityRemoved",id:"onentityremoved",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"entities",id:"entities",children:[]},{value:"first",id:"first",children:[]},{value:"isEmpty",id:"isempty",children:[]},{value:"last",id:"last",children:[]},{value:"length",id:"length",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"countBy",id:"countby",children:[]},{value:"filter",id:"filter",children:[]},{value:"find",id:"find",children:[]},{value:"has",id:"has",children:[]},{value:"loop",id:"loop",children:[]},{value:"matchEntities",id:"matchentities",children:[]},{value:"rloop",id:"rloop",children:[]}]}],p={toc:l};function m(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},"_","Query")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"Query")))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new Query"),"(",Object(r.b)("inlineCode",{parentName:"p"},"predicate"),": QueryPredicate): ",Object(r.b)("a",{parentName:"p",href:"/api/core/classes/query"},Object(r.b)("em",{parentName:"a"},"Query"))),Object(r.b)("p",null,"Initializes Query instance"),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"predicate")),Object(r.b)("td",{parentName:"tr",align:"left"},"QueryPredicate"),Object(r.b)("td",{parentName:"tr",align:"left"},"Matching predicate")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/api/core/classes/query"},Object(r.b)("em",{parentName:"a"},"Query"))),Object(r.b)("p",null,"Inherited from: _Query.constructor"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:25"),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"onentityadded"},"onEntityAdded"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"onEntityAdded"),": ",Object(r.b)("em",{parentName:"p"},"Signal"),"<(",Object(r.b)("inlineCode",{parentName:"p"},"snapshot"),": ",Object(r.b)("em",{parentName:"p"},"EntitySnapshot"),") => ",Object(r.b)("em",{parentName:"p"},"void"),">"),Object(r.b)("p",null,"Signal dispatches if new matched entity were added"),Object(r.b)("p",null,"Inherited from: _Query.onEntityAdded"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:17"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onentityremoved"},"onEntityRemoved"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"onEntityRemoved"),": ",Object(r.b)("em",{parentName:"p"},"Signal"),"<(",Object(r.b)("inlineCode",{parentName:"p"},"snapshot"),": ",Object(r.b)("em",{parentName:"p"},"EntitySnapshot"),") => ",Object(r.b)("em",{parentName:"p"},"void"),">"),Object(r.b)("p",null,"Signal dispatches if entity stops matching query"),Object(r.b)("p",null,"Inherited from: _Query.onEntityRemoved"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:21"),Object(r.b)("h2",{id:"accessors"},"Accessors"),Object(r.b)("h3",{id:"entities"},"entities"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"entities"),"(): readonly ",Object(r.b)("em",{parentName:"p"},"Entity"),"[]"),Object(r.b)("p",null,"Entities list which matches the query"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," readonly ",Object(r.b)("em",{parentName:"p"},"Entity"),"[]"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:34"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"first"},"first"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"first"),"(): ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Returns the first entity in the query or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," if query is empty."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:39"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isempty"},"isEmpty"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"isEmpty"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Gets a value indicating that query is empty"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:86"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"last"},"last"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"last"),"(): ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Returns the last entity in the query or ",Object(r.b)("inlineCode",{parentName:"p"},"undefined")," if query is empty."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:44"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"length"},"length"),Object(r.b)("p",null,"\u2022 get ",Object(r.b)("strong",{parentName:"p"},"length"),"(): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Returns the number of the entities in the query"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:49"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"clear"},"clear"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"clear"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Clears the list of entities of the query"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: _Query.clear"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:90"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"countby"},"countBy"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"countBy"),"(",Object(r.b)("inlineCode",{parentName:"p"},"predicate"),": QueryPredicate): ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Returns the number of entities that have been tested by the predicate."),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"predicate")),Object(r.b)("td",{parentName:"tr",align:"left"},"QueryPredicate")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"number")),Object(r.b)("p",null,"Inherited from: _Query.countBy"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:55"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"filter"},"filter"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"filter"),"(",Object(r.b)("inlineCode",{parentName:"p"},"predicate"),": QueryPredicate): ",Object(r.b)("em",{parentName:"p"},"Entity"),"[]"),Object(r.b)("p",null,"Returns new array of entities, which passed testing via predicate"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"predicate")),Object(r.b)("td",{parentName:"tr",align:"left"},"QueryPredicate"),Object(r.b)("td",{parentName:"tr",align:"left"},"function that will be called for every entity in the query.  If function returns ",Object(r.b)("inlineCode",{parentName:"td"},"true")," - entity will stay in the array, if ",Object(r.b)("inlineCode",{parentName:"td"},"false")," than it will be removed.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Entity"),"[]"),Object(r.b)("p",null,"Inherited from: _Query.filter"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:69"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"find"},"find"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"find"),"(",Object(r.b)("inlineCode",{parentName:"p"},"predicate"),": QueryPredicate): ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Returns the first entity from the query, that was accepted by predicate"),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"predicate")),Object(r.b)("td",{parentName:"tr",align:"left"},"QueryPredicate"),Object(r.b)("td",{parentName:"tr",align:"left"},"function that will be called for every entity in the query until  the result of the function become true.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Entity")),Object(r.b)("p",null,"Inherited from: _Query.find"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:62"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"has"},"has"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"has"),"(",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(r.b)("em",{parentName:"p"},"Entity"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Returns a value that indicates whether the entity is in the Query."),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"entity")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"Entity"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"Inherited from: _Query.has"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:75"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"loop"},"loop"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"loop"),"<T, K",">","(",Object(r.b)("inlineCode",{parentName:"p"},"types"),": K, ",Object(r.b)("inlineCode",{parentName:"p"},"cb"),": (",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(r.b)("em",{parentName:"p"},"Entity"),", ",Object(r.b)("inlineCode",{parentName:"p"},"instances"),": ",Object(r.b)("a",{parentName:"p",href:"/api/core/types/instances"},Object(r.b)("em",{parentName:"a"},"Instances")),"<T, K",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"index?"),": ",Object(r.b)("em",{parentName:"p"},"number"),") => ",Object(r.b)("em",{parentName:"p"},"void"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/api/core/types/constructor"},Object(r.b)("em",{parentName:"a"},"Constructor")),"<{}",">","[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",{parentName:"tr",align:"left"},"readonly ","[T, K]")))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"types")),Object(r.b)("td",{parentName:"tr",align:"left"},"K")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"cb")),Object(r.b)("td",{parentName:"tr",align:"left"},"(",Object(r.b)("inlineCode",{parentName:"td"},"entity"),": ",Object(r.b)("em",{parentName:"td"},"Entity"),", ",Object(r.b)("inlineCode",{parentName:"td"},"instances"),": ",Object(r.b)("a",{parentName:"td",href:"/api/core/types/instances"},Object(r.b)("em",{parentName:"a"},"Instances")),"<T, K",">",", ",Object(r.b)("inlineCode",{parentName:"td"},"index?"),": ",Object(r.b)("em",{parentName:"td"},"number"),") => ",Object(r.b)("em",{parentName:"td"},"void"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/Query.ts#L13"},"libs/core/src/lib/Query.ts:13")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"matchentities"},"matchEntities"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"matchEntities"),"(",Object(r.b)("inlineCode",{parentName:"p"},"entities"),": readonly ",Object(r.b)("em",{parentName:"p"},"Entity"),"[]): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"This method is matching passed list of entities with predicate of the query to determine\nif entities are the part of query or not."),Object(r.b)("p",null,"Entities that will pass testing will become a part of the query"),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"entities")),Object(r.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(r.b)("em",{parentName:"td"},"Entity"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Inherited from: _Query.matchEntities"),Object(r.b)("p",null,"Defined in: libs/core/node_modules/tick-knock/lib/ecs/Query.d.ts:82"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rloop"},"rloop"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"rloop"),"<T, K",">","(",Object(r.b)("inlineCode",{parentName:"p"},"types"),": K, ",Object(r.b)("inlineCode",{parentName:"p"},"cb"),": (",Object(r.b)("inlineCode",{parentName:"p"},"entity"),": ",Object(r.b)("em",{parentName:"p"},"Entity"),", ",Object(r.b)("inlineCode",{parentName:"p"},"instances"),": ",Object(r.b)("a",{parentName:"p",href:"/api/core/types/instances"},Object(r.b)("em",{parentName:"a"},"Instances")),"<T, K",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"index?"),": ",Object(r.b)("em",{parentName:"p"},"number"),") => ",Object(r.b)("em",{parentName:"p"},"void"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"T")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/api/core/types/constructor"},Object(r.b)("em",{parentName:"a"},"Constructor")),"<{}",">","[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"K")),Object(r.b)("td",{parentName:"tr",align:"left"},"readonly ","[T, K]")))),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"types")),Object(r.b)("td",{parentName:"tr",align:"left"},"K")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"cb")),Object(r.b)("td",{parentName:"tr",align:"left"},"(",Object(r.b)("inlineCode",{parentName:"td"},"entity"),": ",Object(r.b)("em",{parentName:"td"},"Entity"),", ",Object(r.b)("inlineCode",{parentName:"td"},"instances"),": ",Object(r.b)("a",{parentName:"td",href:"/api/core/types/instances"},Object(r.b)("em",{parentName:"a"},"Instances")),"<T, K",">",", ",Object(r.b)("inlineCode",{parentName:"td"},"index?"),": ",Object(r.b)("em",{parentName:"td"},"number"),") => ",Object(r.b)("em",{parentName:"td"},"void"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dustinlacewell/react-ecs/blob/d06850b/libs/core/src/lib/Query.ts#L27"},"libs/core/src/lib/Query.ts:27")))}m.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var p=b.a.createContext({}),m=function(e){var t=b.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,O=d["".concat(c,".").concat(s)]||d[s]||o[s]||r;return n?b.a.createElement(O,i(i({ref:t},p),{},{components:n})):b.a.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);