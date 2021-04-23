(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return j})),n.d(t,"toc",(function(){return g})),n.d(t,"default",(function(){return w}));var r=n(3),i=n(7),a=n(0),o=n.n(a),c=n(160),s=n(207),u=n(194),l=n(252),m=n(165),d=n(284),f=n(281),b=n(285),p=n(189),h=function(){var e=Object(m.useECS)();Object(m.useAnimationFrame)(e.update);var t=Object(d.a)("/models/plane1.gltf").nodes.Regular_Plane.geometry;return o.a.createElement(a.Suspense,{fallback:o.a.createElement("div",null)},o.a.createElement(p.a,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement(f.b,null)},o.a.createElement(e.Provider,null,o.a.createElement("fog",{attach:"fog",args:["black",25,250]}),o.a.createElement("ambientLight",{intensity:.3}),o.a.createElement("directionalLight",{color:"red",intensity:3}),o.a.createElement(b.a,{enablePan:!0,enableRotate:!0,enableZoom:!0,minDistance:80,maxDistance:200,maxPolarAngle:1.5}),o.a.createElement(l.a,{render:function(){return o.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:t},o.a.createElement("meshPhongMaterial",null))}})))))};d.a.preload("/models/plane1.gltf");var y=n(250),v=n(188),O={slug:"/",sidebar_position:0,sidebar_label:"Introduction",title:"React ECS Documentation"},j={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"React ECS Documentation",description:'react-ecs is a declarative "Entity Component System" for React.',source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/dustinlacewell/react-ecs/edit/master/apps/docs/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebarPosition:0,frontMatter:{slug:"/",sidebar_position:0,sidebar_label:"Introduction",title:"React ECS Documentation"},sidebar:"mySidebar",next:{title:"@react-ecs/core overview",permalink:"/docs/core/overview"}},g=[{value:"What&#39;s that?",id:"whats-that",children:[]},{value:"Composition over Inheritance",id:"composition-over-inheritance",children:[]},{value:"Declarative ECS with React",id:"declarative-ecs-with-react",children:[]}],E={toc:g};function w(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},E,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"react-ecs"),' is a declarative "Entity Component System" for React.'),Object(c.b)(s.a,{hidden:!0,mdxType:"Leva"}),Object(c.b)("div",{style:{backgroundColor:"black",height:"250px"}},Object(c.b)(u.a,{fallback:Object(c.b)("div",null),mdxType:"BrowserOnly"},(function(){return Object(c.b)(a.Suspense,{fallback:Object(c.b)("div",null,"???"),mdxType:"Suspense"},Object(c.b)(h,{mdxType:"BoidExample"}))}))),Object(c.b)("div",{style:{float:"right"}},"These boids are driven by react-ecs! Try dragging and zooming!"),Object(c.b)("h2",{id:"whats-that"},"What's that?"),Object(c.b)("img",{style:{float:"right",maxWidth:"400px",marginLeft:"10px"},src:"https://i.imgur.com/nTfGWyF.png"}),Object(c.b)("p",null,"An ",Object(c.b)("strong",{parentName:"p"},"ECS"),", or ",Object(c.b)("em",{parentName:"p"},"Entity Component System")," is a design pattern popular in game development. It eschews rich objects for simple ",Object(c.b)("strong",{parentName:"p"},"Entities")," that compose data-only Components, or ",Object(c.b)("strong",{parentName:"p"},"Facets")," as ",Object(c.b)("inlineCode",{parentName:"p"},"react-ecs")," calls them (to avoid confusion with React Components)."),Object(c.b)("p",null,"Logic is then handled by small update functions called ",Object(c.b)("strong",{parentName:"p"},"Systems")," that operate upon the facets related to it."),Object(c.b)("p",null,"In the example to the right, a common scenario is illustrated. There are a number of entities, comprised merely as a collection of simple data facets. A ",Object(c.b)("inlineCode",{parentName:"p"},"Velocity")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Position")," component may hold a simple vector. Whereas a ",Object(c.b)("inlineCode",{parentName:"p"},"Graphics")," component might hold the URL of a sprite image."),Object(c.b)("p",null,"Two systems, ",Object(c.b)("inlineCode",{parentName:"p"},"PhysicsSystem")," and ",Object(c.b)("inlineCode",{parentName:"p"},"GraphicsSystem")," are responsible for all the behavior and logic:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"PhysicsSystem")," looks at all the entities with ",Object(c.b)("strong",{parentName:"li"},"both")," ",Object(c.b)("inlineCode",{parentName:"li"},"Velocity")," and ",Object(c.b)("inlineCode",{parentName:"li"},"Position")," facets, using the former to update the latter."),Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("inlineCode",{parentName:"li"},"GraphicsSystem")," looks at all the entities with ",Object(c.b)("strong",{parentName:"li"},"both")," ",Object(c.b)("inlineCode",{parentName:"li"},"Position")," and ",Object(c.b)("inlineCode",{parentName:"li"},"Graphics")," facets, using the former to draw the latter.")),Object(c.b)("p",null,"The systems ignore the entities that don't have the facets they're interested in."),Object(c.b)("h2",{id:"composition-over-inheritance"},"Composition over Inheritance"),Object(c.b)("p",null,'ECS takes "composition over inheritance" to its logical conclusion.'),Object(c.b)("p",null,"Entities are nothing more than their facets. They don't have their own data and they don't have any code."),Object(c.b)("p",null,"There's no need to try to find the best inheritance tree to represent your problem domain."),Object(c.b)("p",null,"Just slap some useful facets onto some entities and write some systems to process them. This also means entity capabilities can dynamically change at runtime."),Object(c.b)("p",null,"It's a robust, easy to implement pattern that can enable a fun creativity."),Object(c.b)("h2",{id:"declarative-ecs-with-react"},"Declarative ECS with React"),Object(c.b)("p",null,"The idea behind ",Object(c.b)("inlineCode",{parentName:"p"},"react-ecs")," is to allow you to ",Object(c.b)("em",{parentName:"p"},"describe")," the parts of your ECS in standard React fashion:"),Object(c.b)("p",null,"First, define some useful Facets."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"class Mass extends Facet<Mass> {}\n\nclass Lifetime extends Facet<Lifetime> {\n    timeleft? = 1;\n}\n\nclass Position extends Facet<Position> {\n    location? = new Vector2(0, 0);\n}\n\nclass Velocity extends Facet<Velocity> {\n    amount? = new Vector2(0, 0);\n}\n")),Object(c.b)("p",null,"Let's add a system to remove entities when their ",Object(c.b)("inlineCode",{parentName:"p"},"Lifetime")," has expired:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const LifetimeSystem = () => {\n    // get reference to ECS engine\n    const engine = useEngine();\n    // create a query for entities with the Lifetime face\n    const query = useQuery((e) => e.has(Lifetime));\n\n    // create a system that runs every tick\n    return useSystem((dt: number) => {\n        // use the query to loop over entities with the Lifetime facet\n        query.loop([Lifetime], (e, [lifetime]) => {\n            // subtract the current frame time\n            lifetime.timeleft -= dt;\n\n            // remove entity from engine if it expires\n            if (lifetime.timeleft <= 0) {\n                engine.removeEntity(e);\n            }\n        });\n    });\n};\n")),Object(c.b)("p",null,"Let's add a couple of other systems for moving entities around:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const PhysicsSystem = () => {\n    const query = useQuery((e) => e.hasAll(Position, Velocity));\n\n    return useSystem((dt) => {\n        query.loop([Position, Velocity], (e, [pos, vel]) => {\n            pos.location = pos.location.clone().add(vel.amount);\n        });\n    });\n};\n\nconst GravitySystem = ({ vector }) => {\n    const query = useQuery((e) => e.hasAll(Mass, Velocity));\n\n    return useSystem((dt) => {\n        query.loop([Velocity], (e, [vel]) => {\n            vel.amount = vel.amount\n                .clone()\n                .add(vector.clone().multiplyScalar(dt));\n        });\n    });\n};\n")),Object(c.b)("p",null,"Finally, let's write a system to sync an entity's ",Object(c.b)("inlineCode",{parentName:"p"},"Position")," facet with its standard ",Object(c.b)("inlineCode",{parentName:"p"},"DOMView")," facet:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const DOMViewSystem = () => {\n    const query = useQuery((e) => e.hasAll(DOMView, Position));\n\n    return useSystem((dt) => {\n        query.loop([DOMView, Position], (e, [view, pos]) => {\n            // sync DOM element's style with entity's Position\n            view.element.style.left = `${pos.location.x}px`;\n            view.element.style.top = `${pos.location.y}px`;\n        });\n    });\n};\n")),Object(c.b)("p",null,"Now we can put it all together:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"export const DOMParticles = () => {\n    // create the ECS\n    const ECS = useECS();\n    // update the ECS every frame\n    useAnimationFrame(ECS.update);\n\n    // some helper functions for randomizing things\n    const rnd = (s: number) => Math.random() * s - s * 0.5;\n    const randomVector = (s: number) =>\n        new Vector2(rnd(s), rnd(s));\n\n\n    return (\n        <ECS.Provider> {/* context provider for ECS things */}\n            {/* include all the systems */}\n            <LifetimeSystem />\n            <PhysicsSystem />\n            <GravitySystem vector={new Vector2(0, 10)} />\n            <DOMViewSystem />\n\n            {/* emit entities with a delay using built-in <Emitter /> */}\n            <Emitter emissionDelay={0.025}>\n                {() => {\n                    // create random position\n                    const pos = randomVector(50).add(new Vector2(250, 100));\n                    return (\n                        {/* <Entity> contains all its facets */}\n                        <Entity>\n                            <Mass />\n                            <Lifetime timeleft={3} />\n                            <Position location={pos} />\n                            <Velocity amount={randomVector(10)} />\n                            <DOMView> {/* DOMView's child lets us declare how the entity looks */}\n                                <img\n                                    style={{\n                                        position: 'absolute',\n                                        left: pos.x,\n                                        top: pos.y,\n                                        width: 16,\n                                        height: 16\n                                    }}\n                                    src=\"https://i.imgur.com/kFjaH5l.png\" />\n                            </DOMView>\n                        </Entity>\n                    );\n                }}\n            </Emitter>\n        </ECS.Provider>\n    )\n}\n")),Object(c.b)(v.a,{mdxType:"Example"},Object(c.b)(y.a,{mdxType:"DOMParticles"})))}w.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(162),i=n(0),a=n.n(i),o=n(175),c=n(168),s=Object(i.createContext)(null),u=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new c.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return a.a.createElement(s.Provider,{value:this},e.children)},e}()},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var r=n(0),i=Object(r.createContext)(null);function a(){var e=Object(r.useContext)(i);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},165:function(e,t,n){"use strict";var r=n(179);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var i=n(173);n.d(t,"EntityContext",(function(){return i.a})),n.d(t,"useAnimationFrame",(function(){return i.b})),n.d(t,"useECS",(function(){return i.c})),n.d(t,"useEngine",(function(){return i.d})),n.d(t,"useFacet",(function(){return i.e})),n.d(t,"useQuery",(function(){return i.f})),n.d(t,"useSystem",(function(){return i.g}));var a=n(176);n.o(a,"rad")&&n.d(t,"rad",(function(){return a.rad}))},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n(161),a=function(){return Object(r.useContext)(i.b).engine}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(184),i=n(4),a=n(175),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.loop=function(e,t){for(var n,i=Object(r.a)(this.entities);!(n=i()).done;){for(var a,o=n.value,c=[],s=Object(r.a)(e);!(a=s()).done;){var u=a.value,l=o.get(u);c.push(l)}t(o,c)}},t}(a.Query)},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0);function i(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),i=(n[0],n[1]);return[t,function(e){t.current=e,i({current:e})}]}},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n(161),a=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(i.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n(171),a=function(e,t){var n=Object(r.useRef)(0);Object(i.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},173:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c.a})),n.d(t,"a",(function(){return s.a})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return b.a}));var r=n(0),i=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),i=function r(i){if(null!=n.current){var a=i-n.current;e(a/1e3)}n.current=i,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(i),function(){return cancelAnimationFrame(t.current)}}),[])},a=n(161);function o(){var e=Object(r.useState)((function(){return new a.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var c=n(166),s=n(163);function u(e){var t=Object(s.b)(),n=Object(r.useState)(new e),i=n[0],a=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?a(n):console.error("Couldn't find facet on entity: "+e.prototype.constructor.name)})),i}var l=n(169),m=n(181),d=function(){function e(e){this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(m.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function f(e,t){var n=Object(c.a)(),i=Object(r.useRef)(),a=Object(r.useState)(0),o=a[0],s=a[1],u=function(){return s(o+1)};return Object(r.useEffect)((function(){if(void 0===i.current){var r=new l.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(u),r.onEntityRemoved.connect(u),n.addQuery(r),i.current=r,u()}}),[]),new d(i)}n(170);var b=n(171);n(172)},176:function(e,t,n){"use strict";n(169);var r=n(177);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(168);var i=n(178);n.d(t,"rad",(function(){return i.a}))},177:function(e,t){},178:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m.b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return E}));var r=n(181),i=n(164),a=n(4),o=n(162),c=n(0),s=n.n(c),u=n(173),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(c.createRef)(),n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==c.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return s.a.createElement(s.a.Fragment,null,Object(c.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(c.Component);Object(o.a)(l,"contextType",u.a),l.__componentClassId__=-1;var m=n(161),d=n(166),f=n(170),b=n(172),p={emissionDelay:.1},h=function(e){var t=Object(d.a)(),n=(e=Object.assign({},p,e)).emissionDelay,r=Object(c.useRef)(0),i=e.children,a=Object(f.a)([]),o=a[0],u=a[1];Object(b.a)(n,(function(){var e,t;u([].concat(o.current,[(e=Object(c.createRef)(),t=r.current++,{element:i instanceof Function?Object.assign({},i(),{ref:e,key:t}):Object(c.cloneElement)(i,Object.assign({},{},{ref:e,key:t})),ref:e})]))}));var l=function(e){!function(e){if(e>-1)if(1===o.current.length)u([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);u(t.concat(n))}}(o.current.findIndex((function(t){var n;return(null===(n=t.ref.current)||void 0===n?void 0:n.entity.id)===e.id})))};return Object(c.useEffect)((function(){return t.onEntityRemoved.connect(l),function(){t.onEntityRemoved.disconnect(l)}}),[]),s.a.createElement(s.a.Fragment,null,o.current.map((function(e){return e.element})))},y=n(175),v=n(163),O=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"entity",void 0),n.entity=new y.Entity,n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return s.a.createElement(v.a.Provider,{value:this.entity},this.props.children)},t}(c.Component);Object(o.a)(O,"contextType",m.b);var j=n(195);Object(j.a)({enforceActions:"never"});var g=["props","context","refs","updater","meta"],E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(i.a)(t),"context",void 0),t}Object(a.a)(t,e);var n=t.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!g.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,j.c]}))).entries();return Object.fromEntries(t)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(j.b)(this,t,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return null},t}(c.Component);Object(o.a)(E,"contextType",v.a)},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(181),i=n(164),a=n(4),o=n(162),c=n(165),s=n(0),u=n.n(s),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(i.a)(n),"context",void 0),Object(o.a)(Object(i.a)(n),"ref",void 0),n.ref=Object(s.createRef)(),n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==s.Children.count(this.props.children))throw new Error("<ThreeView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,u.a.cloneElement(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"object3d",get:function(){return this.ref.current}}]),t}(s.Component);Object(o.a)(l,"contextType",c.EntityContext),l.__componentClassId__=100},187:function(e,t,n){e.exports={example:"example_1hIu"}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),i=n.n(r),a=n(194),o=n(3),c=n(182),s=function(e){return i.a.createElement(c.a,Object(o.a)({},c.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,o=e.getTokenProps;return i.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return i.a.createElement("div",a({line:e,key:t}),e.map((function(e,t){return i.a.createElement("span",o({token:e,key:t}))})))})))}))},u=n(187),l=n.n(u),m=function(e){return i.a.createElement("div",{style:{display:"flex",alignItems:"stretch",flexDirection:"column"}},i.a.createElement("div",{className:l.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},i.a.createElement(a.a,null,(function(){return e.children}))),e.code&&i.a.createElement(s,{code:e.code}))}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(164),i=n(162),a=n(4),o=n(0),c=n.n(o),s=n(180),u=n(165),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t}(u.Facet),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(i.a)(Object(r.a)(t),"timeleft",1),t}return Object(a.a)(t,e),t}(u.Facet),d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(i.a)(Object(r.a)(t),"location",new s.Vector2(0,0)),t}return Object(a.a)(t,e),t}(u.Facet),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,Object(i.a)(Object(r.a)(t),"amount",new s.Vector2(0,0)),t}return Object(a.a)(t,e),t}(u.Facet),b=function(){var e=Object(u.useEngine)(),t=Object(u.useQuery)((function(e){return e.has(m)}));return Object(u.useSystem)((function(n){t.loop([m],(function(t,r){var i=r[0];i.timeleft-=n,i.timeleft<=0&&e.removeEntity(t)}))}))},p=function(){var e=Object(u.useQuery)((function(e){return e.hasAll(d,f)}));return Object(u.useSystem)((function(t){e.loop([d,f],(function(e,t){var n=t[0],r=t[1];n.location=n.location.clone().add(r.amount)}))}))},h=function(e){var t=e.vector,n=Object(u.useQuery)((function(e){return e.hasAll(l,f)}));return Object(u.useSystem)((function(e){n.loop([f],(function(n,r){var i=r[0];i.amount=i.amount.clone().add(t.clone().multiplyScalar(e))}))}))},y=function(){var e=Object(u.useQuery)((function(e){return e.hasAll(u.DOMView,d)}));return Object(u.useSystem)((function(t){e.loop([u.DOMView,d],(function(e,t){var n=t[0],r=t[1];n.element.style.left=r.location.x+"px",n.element.style.top=r.location.y+"px"}))}))},v=function(){var e=Object(u.useECS)();Object(u.useAnimationFrame)(e.update);var t=Object(o.useRef)(),n=function(e){return Math.random()*e-.5*e},r=function(e){return new s.Vector2(n(e),n(e))};return c.a.createElement("div",{ref:t},c.a.createElement(e.Provider,null,c.a.createElement(b,null),c.a.createElement(p,null),c.a.createElement(h,{vector:new s.Vector2(0,10)}),c.a.createElement(y,null),c.a.createElement(u.Emitter,{emissionDelay:.05},(function(){var e=r(50).add(new s.Vector2(t.current.offsetWidth/2,50));return c.a.createElement(u.Entity,null,c.a.createElement(l,null),c.a.createElement(m,{timeleft:3}),c.a.createElement(d,{location:e}),c.a.createElement(f,{amount:r(10)}),c.a.createElement(u.DOMView,null,c.a.createElement("img",{style:{position:"absolute",left:e.x,top:e.y,width:32,height:32},src:"https://i.imgur.com/kFjaH5l.png"})))}))))}},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return z}));var r=n(281),i=n(207),a=n(0),o=n.n(a),c=n(164),s=n(4),u=n(162),l=n(165),m=n(180),d=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(u.a)(Object(c.a)(t),"amount",new m.Vector3(0,0,0)),t}return Object(s.a)(t,e),t}(l.Facet),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(u.a)(Object(c.a)(t),"meta",{neighbors:[]}),t}return Object(s.a)(t,e),t}(l.Facet),b=n(183),p=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(b.a,y)}));return Object(l.useSystem)((function(n){t.loop([b.a],(function(t,n){var r=n[0].object3d.position;r.x<-e.size?r.setX(e.size):r.x>e.size&&r.setX(-e.size),r.y<-e.size?r.setY(e.size):r.y>e.size&&r.setY(-e.size),r.z<-e.size?r.setZ(e.size):r.z>e.size&&r.setZ(-e.size)}))}))},h=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{size:e.size}),e.showBounds&&o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{scale:3}),o.a.createElement(r.a,{position:[e.size,e.size,e.size]}),o.a.createElement(r.a,{position:[-e.size,-e.size,-e.size]}),o.a.createElement(r.a,{position:[e.size,-e.size,e.size]}),o.a.createElement(r.a,{position:[-e.size,e.size,-e.size]}),o.a.createElement(r.a,{position:[e.size,e.size,-e.size]}),o.a.createElement(r.a,{position:[-e.size,-e.size,e.size]}),o.a.createElement(r.a,{position:[e.size,-e.size,-e.size]}),o.a.createElement(r.a,{position:[-e.size,e.size,e.size]})))};(function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(u.a)(Object(c.a)(t),"targetView",void 0),Object(u.a)(Object(c.a)(t),"pointerRef",void 0),t}return Object(s.a)(t,e),t}(l.Facet)).__componentClassId__=99;var y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(u.a)(Object(c.a)(t),"amount",new m.Vector3(Math.random(),Math.random(),Math.random())),t}return Object(s.a)(t,e),t}(l.Facet),v=n(184),O=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(f,y,d)}));return Object(l.useSystem)((function(n){t.loop([f,y,d],(function(t,n){for(var r,i=n[0],a=n[1],o=n[2],c=new m.Vector3(0,0,0),s=i.meta.neighbors,u=Object(v.a)(i.meta.neighbors);!(r=u()).done;){var l=r.value.get(y).amount;c.add(l)}s.length&&(c.divideScalar(s.length),c.setLength(1),c.sub(a.amount),c.clampLength(0,10)),o.amount=c.normalize().clone().multiplyScalar(e.amount)}))}))},j=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(b.a,y,f)}));return Object(l.useSystem)((function(e){t.loop([b.a,f,y,d],(function(e,t){for(var n,r=t[0],i=t[1],a=t[2],o=t[3],c=r.object3d,s=new m.Vector3,u=i.meta.neighbors,l=Object(v.a)(u);!(n=l()).done;){var d=n.value;s.add(d.get(b.a).object3d.position)}u.length&&(s.divideScalar(u.length),s.sub(c.position),s.setLength(1),s.sub(a.amount),s.clampLength(0,.2)),o.amount.add(s)}))}))},g=function(){var e=Object(l.useQuery)((function(e){return e.hasAll(b.a,y,d)}));return Object(l.useSystem)((function(t){null==e||e.loop([b.a,y,d],(function(e,n){var r=n[0],i=n[1],a=n[2],o=r.object3d;if(i.amount.length()>0){var c=o.position.clone().add(i.amount);o.lookAt(c)}var s=o.position.clone().add(i.amount.clone().multiplyScalar(t));i.amount.add(a.amount),i.amount.clampLength(10,20),o.position.copy(s)}))}))},E=(l.Facet,new m.LineBasicMaterial({color:new m.Color(Math.random(),Math.random(),Math.random())}),new m.Vector3,function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(b.a,f)}));return Object(l.useSystem)((function(n){t.loop([b.a,f],(function(n,r){var i=r[0],a=r[1],o=i.object3d,c=function(e){return o.position.distanceTo(function(e){return e.get(b.a).object3d}(e).position)};a.meta.neighbors=t.entities.filter((function(e){return e.id!==n.id})).filter((function(t){return!e.filter||e.filter(n,t)})).filter((function(t){return c(t)<e.radius})).sort((function(e,t){return c(e)-c(t)}))}))}))}),w=function(e){var t=Object(l.useQuery)((function(e){return e.hasAll(b.a,y,f)}));return Object(l.useSystem)((function(e){t.loop([b.a,f,y,d],(function(e,t){for(var n,r=t[0],i=t[1],a=t[2],o=t[3],c=r.object3d,s=new m.Vector3,u=i.meta.neighbors,l=Object(v.a)(u);!(n=l()).done;){var d=n.value.get(b.a).object3d.position,f=c.position.distanceTo(d),p=c.position.clone().sub(d);p.divideScalar(f*f),s.add(p)}u.length&&(s.divideScalar(u.length),s.setLength(1),s.sub(a.amount),s.clampLength(0,.2)),o.amount.add(s)}))}))},x=function(e){var t=Object(i.b)("sim",{size:{value:100,min:20,max:100},count:{value:200,min:1,max:200},spawnHeight:{value:1,min:0,max:1},neighborRadius:{value:15,min:1,max:25},showBounds:!1},{}),n=t.size,c=t.count,s=t.spawnHeight,u=t.neighborRadius,l=t.showBounds,m=Object(i.b)("flocking",{alignment:{value:1,min:0,max:2},cohesion:{value:1,min:0,max:2},separation:{value:1,min:0,max:2}}),d=m.alignment,f=m.cohesion,b=m.separation,p=function(){return Math.random()*n*2-n},y=Object(a.useMemo)((function(){for(var t=[],n=0;n<c;n++)t.push(o.a.createElement(a.Suspense,{fallback:o.a.createElement(r.b,null)},o.a.createElement(z,{render:e.render,rotation:[0,Math.random()*Math.PI*2,0],position:[p(),p()*s,p()]})));return t}),[n,s,c]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{showBounds:l,size:n}),o.a.createElement(E,{radius:u}),o.a.createElement(O,{amount:d}),o.a.createElement(j,{amount:f}),o.a.createElement(w,{amount:b}),o.a.createElement(g,null),y)},S=n(3),C=n(7),z=Object(a.forwardRef)((function(e,t){var n=e.render,r=Object(C.a)(e,["render"]);return o.a.createElement(l.Entity,null,o.a.createElement(f,null),o.a.createElement(y,null),o.a.createElement(d,null),o.a.createElement(b.a,null,o.a.createElement("group",Object(S.a)({ref:t},r,{dispose:null}),n())))}))}}]);