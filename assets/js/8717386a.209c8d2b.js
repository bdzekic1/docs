"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7588],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72360:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(86010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),o=n(72389),i=n(67392),l=n(7094),s=n(12466),u=n(86010),c="tabList_uSqn",p="tabItem_LplD";function m(e){var t,n,o,m=e.lazy,d=e.block,f=e.defaultValue,v=e.values,h=e.groupId,b=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,l.U)(),w=x.tabGroupChoices,T=x.setTabGroupChoices,C=(0,r.useState)(N),j=C[0],O=C[1],I=[],A=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var P=w[h];null!=P&&P!==j&&y.some((function(e){return e.value===P}))&&O(P)}var E=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==j&&(A(t),O(a),null!=h&&T(h,a))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return I.push(e)},onKeyDown:Z,onFocus:E,onClick:E},o,{className:(0,u.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(k.filter((function(e){return e.props.value===j}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function d(e){var t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},27818:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=n(9877),l=n(72360),s=["components"],u={sidebar_position:2,title:"Authentication",slug:"authentication"},c=void 0,p={unversionedId:"essentials/Authentication",id:"essentials/Authentication",title:"Authentication",description:"There are multiple ways users can access their Macrometa GDN account:",source:"@site/docs/essentials/Authentication.md",sourceDirName:"essentials",slug:"/essentials/authentication",permalink:"/docs/essentials/authentication",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/essentials/Authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication",slug:"authentication"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/essentials/overview"},next:{title:"GeoFabrics",permalink:"/docs/essentials/geofabrics"}},m={},d=[{value:"User Authentication",id:"user-authentication",level:2},{value:"Token based Authentication",id:"token-based-authentication",level:2},{value:"API Keys",id:"api-keys",level:2}],f={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are multiple ways users can access their Macrometa GDN account:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User Authentication"),(0,o.kt)("li",{parentName:"ul"},"Token based Authentication"),(0,o.kt)("li",{parentName:"ul"},"API Keys")),(0,o.kt)("h2",{id:"user-authentication"},"User Authentication"),(0,o.kt)("p",null,"Users can authenticate with Macrometa GDN via ",(0,o.kt)("inlineCode",{parentName:"p"},"email and password"),", an ",(0,o.kt)("inlineCode",{parentName:"p"},"API Key"),", or a ",(0,o.kt)("inlineCode",{parentName:"p"}," JSON Web Token (JWT)"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code Samples:")),(0,o.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\nconst client = new jsc8({url: "https://gdn.paas.macrometa.io", token: "", fabricName: \'_system\'});\nawait client.login("nemo@nautilus.com", "xxxxxx");\n'))),(0,o.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443, \n                    email='nemo@nautilus.com', password='xxxxxx')\n")))),(0,o.kt)("h2",{id:"token-based-authentication"},"Token based Authentication"),(0,o.kt)("p",null,"Users can also authenticate with Macrometa GDN via ",(0,o.kt)("inlineCode",{parentName:"p"},"Json web tokens"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT Tokens")," in GDN expire after 12 hours unless renewed. So it is best to use API Keys for access by your apps & apis."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code Samples:")),(0,o.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\nconst client = new jsc8({url: "https://gdn.paas.macrometa.io", token: "xxxxxx", fabricName: \'_system\'});\n'))),(0,o.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443, token=<your tokeb>)\n")))),(0,o.kt)("h2",{id:"api-keys"},"API Keys"),(0,o.kt)("p",null,"Most APIs today use an API Key to authenticate legitimate clients. API Keys are very simple to use from the consumer perspective:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Get an API key from the service (in essence a shared secret)."),(0,o.kt)("li",{parentName:"ul"},"Add the key to an Authorization header."),(0,o.kt)("li",{parentName:"ul"},"Call the API.")),(0,o.kt)("p",null,"API keys never expire."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code Samples:")),(0,o.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const jsc8 = require("jsc8");\nconst client = new jsc8({url: "https://gdn.paas.macrometa.io", apiKey: "xxxxx", fabricName: \'_system\'});\n'))),(0,o.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from c8 import C8Client\nclient = C8Client(protocol='https', host='gdn.paas.macrometa.io', port=443, apikey=\"xxxxxxx\")\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In Macrometa GDN, granular permissions can be assigned to both ",(0,o.kt)("inlineCode",{parentName:"p"},"user accounts")," and for ",(0,o.kt)("inlineCode",{parentName:"p"},"api keys"),"."))))}v.isMDXComponent=!0}}]);