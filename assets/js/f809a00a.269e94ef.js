(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(155)),o=n(184),c=(n(179),n(281),n(207)),u=(n(282),{sidebar_position:3,sidebar_label:"Boids",title:"Boids"}),s={unversionedId:"three/BoidExample",id:"three/BoidExample",isDocsHomePage:!1,title:"Boids",description:"",source:"@site/examples/three/BoidExample.md",sourceDirName:"three",slug:"/three/BoidExample",permalink:"/examples/three/BoidExample",version:"current",sidebar_label:"Boids",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Boids",title:"Boids"},sidebar:"mySidebar",previous:{title:"Particle System",permalink:"/examples/three/ParticleSystem"}},l=[],f={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{code:"import React, {\n    FC,\n    Suspense\n} from 'react';\n\nimport { Mesh } from 'three';\n\nimport { BoidSim } from '@react-ecs/boids';\nimport {\n    useAnimationFrame,\n    useECS\n} from '@react-ecs/core';\nimport {\n    OrbitControls,\n    Torus,\n    useGLTF\n} from '@react-three/drei';\nimport { Canvas } from '@react-three/fiber';\n\nconst LOGO_PATH = '/models/plane1.gltf';\n\n\nexport const BoidExample = (props) => {\n    const ECS = useECS();\n\n    useAnimationFrame(ECS.update)\n\n    const { nodes } = useGLTF(LOGO_PATH);\n    const geometry = (nodes.Regular_Plane as Mesh).geometry;\n\n    return (\n            <Canvas>\n                <Suspense fallback={<Torus />}>\n                    <ECS.Provider>\n                        <fog attach=\"fog\" args={['black', 25, 250]} />\n                        <ambientLight intensity={.3} />\n                        <directionalLight\n                            color='red'\n                            intensity={3}\n                        />\n                        <OrbitControls\n                            enablePan\n                            enableRotate\n                            enableZoom\n                            minDistance={80}\n                            maxDistance={200}\n                            maxPolarAngle={1.5}\n                            {...props.cameraProps}\n                        />\n\n                        <BoidSim render={() =>\n                            <mesh\n                                castShadow\n                                receiveShadow\n                                geometry={geometry}>\n                                <meshPhongMaterial />\n                            </mesh>\n                        } />\n                    </ECS.Provider>\n                </Suspense>\n            </Canvas>\n    )\n}\n\nuseGLTF.preload(LOGO_PATH)\n",style:{minHeight:"400px",padding:"1em"},mdxType:"Example"},Object(i.b)(c.a,{mdxType:"BoidExample"})))}d.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),m=r,p=f["".concat(o,".").concat(m)]||f[m]||d[m]||i;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(156),a=n(0),i=n.n(a),o=n(170),c=n(163),u=Object(a.createContext)(null),s=function(){function e(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=[]),Object(r.a)(this,"engine",new o.Engine),Object(r.a)(this,"systems",new c.a),this.update=this.update.bind(this),this.Provider=this.Provider.bind(this),e.forEach((function(e){return n.systems.add(e)})),t.forEach((function(e){return n.engine.addEntity(e)}))}var t=e.prototype;return t.update=function(e){this.systems.update(e)},t.Provider=function(e){return i.a.createElement(u.Provider,{value:this},e.children)},e}()},158:function(e,t,n){"use strict";var r=n(175);n.d(t,"DOMView",(function(){return r.a})),n.d(t,"ECSContext",(function(){return r.b})),n.d(t,"Emitter",(function(){return r.c})),n.d(t,"Entity",(function(){return r.d})),n.d(t,"Facet",(function(){return r.e}));var a=n(168);n.d(t,"EntityContext",(function(){return a.a})),n.d(t,"useAnimationFrame",(function(){return a.b})),n.d(t,"useECS",(function(){return a.c})),n.d(t,"useEngine",(function(){return a.d})),n.d(t,"useFacet",(function(){return a.e})),n.d(t,"useQuery",(function(){return a.f})),n.d(t,"useSystem",(function(){return a.g}));var i=n(171);n.o(i,"rad")&&n.d(t,"rad",(function(){return i.rad}))},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(0),a=Object(r.createContext)(null);function i(){var e=Object(r.useContext)(a);if(!e)throw new Error("Missing Entity instance in EntityContext!");return e}},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(157),i=function(){return Object(r.useContext)(a.b).engine}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){this.systems=new Array}var t=e.prototype;return t.sort=function(){this.systems.sort((function(e,t){return e.priority-t.priority}))},t.add=function(e,t){void 0===t&&(t=0),this.systems.push({callback:e,priority:t}),this.sort()},t.remove=function(e){var t=this.systems.findIndex((function(t){return t.callback===e}));return t>-1&&(this.systems.splice(t,1),this.sort(),!0)},t.clear=function(){this.systems=[]},t.update=function(e){this.systems.forEach((function(t){return t.callback(e)}))},e}()},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(178),a=n(4),i=n(170),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.loop=function(e,t){for(var n,a=Object(r.a)(this.entities);!(n=a()).done;){for(var i,o=n.value,c=[],u=Object(r.a)(e);!(i=u()).done;){var s=i.value,l=o.get(s);c.push(l)}t(o,c)}},t}(i.Query)},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=Object(r.useRef)(e),n=Object(r.useState)({current:e}),a=(n[0],n[1]);return[t,function(e){t.current=e,a({current:e})}]}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(157),i=function(e,t){void 0===t&&(t=0);var n=Object(r.useContext)(a.b).systems;return Object(r.useEffect)((function(){return n.add(e,t),function(){n.remove(e)}}),[e,t]),null}},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n(166),i=function(e,t){var n=Object(r.useRef)(0);Object(a.a)((function(r){n.current+=r,n.current>e&&(n.current=0,t())}))}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c.a})),n.d(t,"a",(function(){return u.a})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return m})),n.d(t,"g",(function(){return p.a}));var r=n(0),a=function(e){var t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=function r(a){if(null!=n.current){var i=a-n.current;e(i/1e3)}n.current=a,t.current=requestAnimationFrame(r)};Object(r.useEffect)((function(){return t.current=requestAnimationFrame(a),function(){return cancelAnimationFrame(t.current)}}),[])},i=n(157);function o(){var e=Object(r.useState)((function(){return new i.a}))[0];return Object(r.useEffect)((function(){"undefined"!=typeof window&&(window.ecs=e)})),e}var c=n(161),u=n(159);function s(e){var t=Object(u.b)(),n=Object(r.useState)(new e),a=n[0],i=n[1];return Object(r.useEffect)((function(){var n=t.get(e);n?i(n):console.error("Couldn't find facet on entity: "+e.prototype.constructor.name)})),a}var l=n(164),f=n(177),d=function(){function e(e){this.ref=e}var t=e.prototype;return t.loop=function(e,t){if(this.current)return this.current.loop(e,t)},t.countBy=function(e){return this.current?this.current.countBy(e):0},t.filter=function(e){return this.current?this.current.filter(e):[]},t.has=function(e){return!!this.current&&this.current.has(e)},t.clear=function(){if(this.current)return this.current.clear()},Object(f.a)(e,[{key:"current",get:function(){return this.ref.current}},{key:"entities",get:function(){if(this.current)return this.current.entities}},{key:"first",get:function(){if(this.current)return this.current.first}},{key:"last",get:function(){if(this.current)return this.current.last}},{key:"length",get:function(){if(this.current)return this.current.length}},{key:"isEmpty",get:function(){return!this.current||this.current.isEmpty}}]),e}();function m(e,t){var n=Object(c.a)(),a=Object(r.useRef)(),i=Object(r.useState)(0),o=i[0],u=i[1],s=function(){return u(o+1)};return Object(r.useEffect)((function(){if(void 0===a.current){var r=new l.a(e);null!=t&&t.added&&r.onEntityAdded.connect(t.added),null!=t&&t.removed&&r.onEntityRemoved.connect(t.removed),r.onEntityAdded.connect(s),r.onEntityRemoved.connect(s),n.addQuery(r),a.current=r,s()}}),[]),new d(a)}n(165);var p=n(166);n(167)},171:function(e,t,n){"use strict";n(164);var r=n(172);n.o(r,"rad")&&n.d(t,"rad",(function(){return r.rad}));n(163);var a=n(173);n.d(t,"rad",(function(){return a.a}))},172:function(e,t){},173:function(e,t,n){"use strict";function r(e){return e*Math.PI/180}n.d(t,"a",(function(){return r}))},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f.b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return E}));var r=n(177),a=n(160),i=n(4),o=n(156),c=n(0),u=n.n(c),s=n(168),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"context",void 0),Object(o.a)(Object(a.a)(n),"ref",void 0),n.ref=Object(c.createRef)(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==c.Children.count(this.props.children))throw new Error("<DOMView /> must have a single child.");return u.a.createElement(u.a.Fragment,null,Object(c.cloneElement)(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"element",get:function(){return this.ref.current}}]),t}(c.Component);Object(o.a)(l,"contextType",s.a),l.__componentClassId__=-1;var f=n(157),d=n(161),m=n(165),p=n(167),b={emissionDelay:.1},h=function(e){var t=Object(d.a)(),n=(e=Object.assign({},b,e)).emissionDelay,r=Object(c.useRef)(0),a=e.children,i=Object(m.a)([]),o=i[0],s=i[1];Object(p.a)(n,(function(){var e,t;s([(e=Object(c.createRef)(),t=r.current++,{element:a instanceof Function?Object.assign({},a(),{ref:e,key:t}):Object(c.cloneElement)(a,Object.assign({},{},{ref:e,key:t})),ref:e})].concat(o.current))}));var l=function(e){!function(e){if(e>-1)if(1===o.current.length)s([]);else{var t=o.current.slice(0,e),n=o.current.slice(e+1);s(t.concat(n))}}(o.current.findIndex((function(t){var n;return(null===(n=t.ref.current)||void 0===n?void 0:n.entity.id)===e.id})))};return Object(c.useEffect)((function(){return t.onEntityRemoved.connect(l),function(){t.onEntityRemoved.disconnect(l)}}),[]),u.a.createElement(u.a.Fragment,null,o.current.map((function(e){return e.element})))},v=n(170),y=n(159),O=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"context",void 0),Object(o.a)(Object(a.a)(n),"entity",void 0),n.entity=new v.Entity,n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.engine.addEntity(this.entity)},n.componentWillUnmount=function(){this.entity.clear(),this.entity.invalidate(),this.context.engine.removeEntity(this.entity)},n.render=function(){return u.a.createElement(y.a.Provider,{value:this.entity},this.props.children)},t}(c.Component);Object(o.a)(O,"contextType",f.b);var j=n(191);Object(j.a)({enforceActions:"never"});var g=["props","context","refs","updater","meta"],E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,Object(o.a)(Object(a.a)(t),"context",void 0),t}Object(i.a)(t,e);var n=t.prototype;return n.createFake=function(){return new(0,Object.getPrototypeOf(this).constructor)},n.getAnnotations=function(e){var t=new Map(Object.getOwnPropertyNames(e).filter((function(e){return!g.includes(e)&&!e.endsWith("Ref")})).map((function(e){return[e,j.c]}))).entries();return Object.fromEntries(t)},n.asComponent=function(){return this},n.componentDidMount=function(){if(this.context){Object.assign(this,this.props);var e=this.createFake(),t=this.getAnnotations(e);Object(j.b)(this,t,{autoBind:!0}),this.context.add(this)}else console.error("Data Component without Entity Context!")},n.render=function(){return Object.assign(this,this.props),null},t}(c.Component);Object(o.a)(E,"contextType",y.a)},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(177),a=n(160),i=n(4),o=n(156),c=n(158),u=n(0),s=n.n(u),l=function(e){function t(t){var n;return n=e.call(this,t)||this,Object(o.a)(Object(a.a)(n),"context",void 0),Object(o.a)(Object(a.a)(n),"ref",void 0),n.ref=Object(u.createRef)(),n}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.context.add(this)},n.render=function(){if(1!==u.Children.count(this.props.children))throw new Error("<ThreeView /> must have a single child.");return s.a.createElement(s.a.Fragment,null,s.a.cloneElement(this.props.children,{ref:this.ref}))},Object(r.a)(t,[{key:"object3d",get:function(){return this.ref.current}}]),t}(u.Component);Object(o.a)(l,"contextType",c.EntityContext),l.__componentClassId__=100},182:function(e,t,n){e.exports={example:"example_1hIu",leva:"leva_2JxF"}},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),i=n(179),o=n(187),c=n(3),u=n(181),s=function(e){return a.a.createElement(u.a,Object(c.a)({},u.b,{code:e.code,language:"tsx"}),(function(e){var t=e.className,n=e.style,r=e.tokens,i=e.getLineProps,o=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},r.map((function(e,t){return a.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",o({token:e,key:t}))})))})))}))},l=n(182),f=n.n(l),d=function(e){return a.a.createElement("div",{style:{flex:1,display:"flex",alignItems:"stretch",flexDirection:"column"}},a.a.createElement("div",{className:f.a.leva,style:{top:"75px"}},a.a.createElement(i.a,{fill:!0,collapsed:e.collapsed})),a.a.createElement("div",{className:f.a.example,style:Object.assign({marginBottom:"1em",position:"relative",overflow:"hidden",padding:"1em"},e.style||{})},a.a.createElement(o.a,{fallback:a.a.createElement("div",null)},(function(){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},e.children)}))),e.code&&a.a.createElement(s,{code:e.code}))}},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return F}));var r=n(3),a=n(0),i=n.n(a),o=n(277),c=n(179),u=n(160),s=n(4),l=n(156),f=n(158),d=n(174),m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(l.a)(Object(u.a)(t),"amount",new d.Vector3(0,0,0)),t}return Object(s.a)(t,e),t}(f.Facet),p=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(l.a)(Object(u.a)(t),"meta",{neighbors:[]}),t}return Object(s.a)(t,e),t}(f.Facet),b=n(176),h=function(e){var t=Object(f.useQuery)((function(e){return e.hasAll(b.a,y)}));return Object(f.useSystem)((function(n){t.loop([b.a],(function(t,n){var r=n[0].object3d.position;r.x<-e.size?r.setX(e.size):r.x>e.size&&r.setX(-e.size),r.y<-e.size?r.setY(e.size):r.y>e.size&&r.setY(-e.size),r.z<-e.size?r.setZ(e.size):r.z>e.size&&r.setZ(-e.size)}))}))},v=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{size:e.size}),e.showBounds&&i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{scale:3}),i.a.createElement(o.a,{position:[e.size,e.size,e.size]}),i.a.createElement(o.a,{position:[-e.size,-e.size,-e.size]}),i.a.createElement(o.a,{position:[e.size,-e.size,e.size]}),i.a.createElement(o.a,{position:[-e.size,e.size,-e.size]}),i.a.createElement(o.a,{position:[e.size,e.size,-e.size]}),i.a.createElement(o.a,{position:[-e.size,-e.size,e.size]}),i.a.createElement(o.a,{position:[e.size,-e.size,-e.size]}),i.a.createElement(o.a,{position:[-e.size,e.size,e.size]})))};(function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(l.a)(Object(u.a)(t),"targetView",void 0),Object(l.a)(Object(u.a)(t),"pointerRef",void 0),t}return Object(s.a)(t,e),t}(f.Facet)).__componentClassId__=99;var y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,Object(l.a)(Object(u.a)(t),"amount",new d.Vector3(Math.random(),Math.random(),Math.random())),t}return Object(s.a)(t,e),t}(f.Facet),O=n(178),j=function(e){var t=Object(f.useQuery)((function(e){return e.hasAll(p,y,m)}));return Object(f.useSystem)((function(n){t.loop([p,y,m],(function(t,n){for(var r,a=n[0],i=n[1],o=n[2],c=new d.Vector3(0,0,0),u=a.meta.neighbors,s=Object(O.a)(a.meta.neighbors);!(r=s()).done;){var l=r.value.get(y).amount;c.add(l)}u.length&&(c.divideScalar(u.length),c.setLength(1),c.sub(i.amount),c.clampLength(0,10)),o.amount=c.normalize().clone().multiplyScalar(e.amount)}))}))},g=function(e){var t=Object(f.useQuery)((function(e){return e.hasAll(b.a,y,p)}));return Object(f.useSystem)((function(e){t.loop([b.a,p,y,m],(function(e,t){for(var n,r=t[0],a=t[1],i=t[2],o=t[3],c=r.object3d,u=new d.Vector3,s=a.meta.neighbors,l=Object(O.a)(s);!(n=l()).done;){var f=n.value;u.add(f.get(b.a).object3d.position)}s.length&&(u.divideScalar(s.length),u.sub(c.position),u.setLength(1),u.sub(i.amount),u.clampLength(0,.2)),o.amount.add(u)}))}))},E=function(){var e=Object(f.useQuery)((function(e){return e.hasAll(b.a,y,m)}));return Object(f.useSystem)((function(t){null==e||e.loop([b.a,y,m],(function(e,n){var r=n[0],a=n[1],i=n[2],o=r.object3d;if(a.amount.length()>0){var c=o.position.clone().add(a.amount);o.lookAt(c)}var u=o.position.clone().add(a.amount.clone().multiplyScalar(t));a.amount.add(i.amount),a.amount.clampLength(10,20),o.position.copy(u)}))}))},x=(f.Facet,new d.LineBasicMaterial({color:new d.Color(Math.random(),Math.random(),Math.random())}),new d.Vector3,function(e){var t=Object(f.useQuery)((function(e){return e.hasAll(b.a,p)}));return Object(f.useSystem)((function(n){t.loop([b.a,p],(function(n,r){var a=r[0],i=r[1],o=a.object3d,c=function(e){return o.position.distanceTo(function(e){return e.get(b.a).object3d}(e).position)};i.meta.neighbors=t.entities.filter((function(e){return e.id!==n.id})).filter((function(t){return!e.filter||e.filter(n,t)})).filter((function(t){return c(t)<e.radius})).sort((function(e,t){return c(e)-c(t)}))}))}))}),w=function(e){var t=Object(f.useQuery)((function(e){return e.hasAll(b.a,y,p)}));return Object(f.useSystem)((function(e){t.loop([b.a,p,y,m],(function(e,t){for(var n,r=t[0],a=t[1],i=t[2],o=t[3],c=r.object3d,u=new d.Vector3,s=a.meta.neighbors,l=Object(O.a)(s);!(n=l()).done;){var f=n.value.get(b.a).object3d.position,m=c.position.distanceTo(f),p=c.position.clone().sub(f);p.divideScalar(m*m),u.add(p)}s.length&&(u.divideScalar(s.length),u.setLength(1),u.sub(i.amount),u.clampLength(0,.2)),o.amount.add(u)}))}))},S=function(e){var t=Object(c.b)("sim",{size:{value:100,min:20,max:100},count:{value:200,min:1,max:200},spawnHeight:{value:1,min:0,max:1},neighborRadius:{value:15,min:1,max:25},showBounds:!1},{}),n=t.size,r=t.count,u=t.spawnHeight,s=t.neighborRadius,l=t.showBounds,f=Object(c.b)("flocking",{alignment:{value:1,min:0,max:2},cohesion:{value:1,min:0,max:2},separation:{value:1,min:0,max:2}}),d=f.alignment,m=f.cohesion,p=f.separation,b=function(){return Math.random()*n*2-n},h=Object(a.useMemo)((function(){for(var t=[],n=0;n<r;n++)t.push(i.a.createElement(a.Suspense,{fallback:i.a.createElement(o.b,null)},i.a.createElement(C,{render:e.render,rotation:[0,0,0],position:[b(),b()*u,b()]})));return t}),[n,u,r]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{showBounds:l,size:n}),i.a.createElement(x,{radius:s}),i.a.createElement(j,{amount:d}),i.a.createElement(g,{amount:m}),i.a.createElement(w,{amount:p}),i.a.createElement(E,null),h)},z=n(7),C=Object(a.forwardRef)((function(e,t){var n=e.render,a=Object(z.a)(e,["render"]);return i.a.createElement(f.Entity,null,i.a.createElement(p,null),i.a.createElement(y,null),i.a.createElement(m,null),i.a.createElement(b.a,null,i.a.createElement("group",Object(r.a)({ref:t},a,{dispose:null}),n())))})),P=n(283),k=n(284),A=n(185),F=function(e){var t=Object(f.useECS)();Object(f.useAnimationFrame)(t.update);var n=Object(P.a)("/models/plane1.gltf").nodes.Regular_Plane.geometry;return i.a.createElement(A.a,null,i.a.createElement(a.Suspense,{fallback:i.a.createElement(o.b,null)},i.a.createElement(t.Provider,null,i.a.createElement("fog",{attach:"fog",args:["black",25,250]}),i.a.createElement("ambientLight",{intensity:.3}),i.a.createElement("directionalLight",{color:"red",intensity:3}),i.a.createElement(k.a,Object(r.a)({enablePan:!0,enableRotate:!0,enableZoom:!0,minDistance:80,maxDistance:200,maxPolarAngle:1.5},e.cameraProps)),i.a.createElement(S,{render:function(){return i.a.createElement("mesh",{castShadow:!0,receiveShadow:!0,geometry:n},i.a.createElement("meshPhongMaterial",null))}}))))};P.a.preload("/models/plane1.gltf")},281:function(e,t,n){e.exports={leva:"leva_1iJc"}},282:function(e,t,n){e.exports={leva:"leva_19_e"}}}]);