"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3127],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||s;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33058:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],i={sidebar_position:12,title:"Subqueries"},u=void 0,l={unversionedId:"c8ql/examples/subqueries",id:"c8ql/examples/subqueries",title:"Subqueries",description:"Wherever an expression is allowed in C8QL, a subquery can be placed. A subquery is a query part that can introduce its own local variables without affecting variables and values in its outer scope(s).",source:"@site/docs/c8ql/examples/subqueries.md",sourceDirName:"c8ql/examples",slug:"/c8ql/examples/subqueries",permalink:"/docs/c8ql/examples/subqueries",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/examples/subqueries.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Subqueries"},sidebar:"tutorialSidebar",previous:{title:"Remove Vertex",permalink:"/docs/c8ql/examples/remove-vertex"},next:{title:"Traversals",permalink:"/docs/c8ql/examples/traversals"}},c={},p=[],m={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Wherever an expression is allowed in C8QL, a subquery can be placed. A subquery is a query part that can introduce its own local variables without affecting variables and values in its outer scope(s)."),(0,s.kt)("p",null,"It is required that subqueries be put inside parentheses ",(0,s.kt)("inlineCode",{parentName:"p"},"(")," and ",(0,s.kt)("inlineCode",{parentName:"p"},")")," to explicitly mark their start and end points:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"FOR p IN persons\n  LET recommendations = (\n    FOR r IN recommendations\n      FILTER p.id == r.personId\n      SORT p.rank DESC\n      LIMIT 10\n      RETURN r\n  )\n  RETURN { person : p, recommendations : recommendations }\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"FOR p IN persons\n  COLLECT city = p.city INTO g\n  RETURN {\n    city : city,\n    numPersons : LENGTH(g),\n    maxRating: MAX(\n      FOR r IN g\n      RETURN r.p.rating\n    )}\n")),(0,s.kt)("p",null,"Subqueries may also include other subqueries."),(0,s.kt)("p",null,"Note that subqueries always return a result ",(0,s.kt)("strong",{parentName:"p"},"array"),", even if there is only a single return value:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"RETURN ( RETURN 1 )\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"[ [ 1 ] ]\n")),(0,s.kt)("p",null,"To avoid such a nested data structure,  ",(0,s.kt)("a",{parentName:"p",href:"../functions/array#first"},"FIRST()")," can be used for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"RETURN FIRST( RETURN 1 )\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"[ 1 ]\n")))}d.isMDXComponent=!0}}]);