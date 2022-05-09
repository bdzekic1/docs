"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1997],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={sidebar_position:5,title:"SEARCH"},s=void 0,p={unversionedId:"c8ql/operations/search",id:"c8ql/operations/search",title:"SEARCH",description:"The SEARCH keyword starts the language construct to filter Views of type Search. Conceptually, a View is just another document data source, similar to an array or a document/edge collection, over which you can iterate using a FOR operation in C8QL:",source:"@site/docs/c8ql/operations/search.md",sourceDirName:"c8ql/operations",slug:"/c8ql/operations/search",permalink:"/docs/c8ql/operations/search",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/c8ql/operations/search.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"SEARCH"},sidebar:"tutorialSidebar",previous:{title:"FILTER",permalink:"/docs/c8ql/operations/filter"},next:{title:"SORT",permalink:"/docs/c8ql/operations/sort"}},c={},d=[{value:"General Syntax",id:"general-syntax",level:2},{value:"Handling of non-indexed fields",id:"handling-of-non-indexed-fields",level:2},{value:"Arrays and trackListPositions",id:"arrays-and-tracklistpositions",level:2},{value:"SEARCH with SORT",id:"search-with-sort",level:2},{value:"Search Options",id:"search-options",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," keyword starts the language construct to filter Views of type Search. Conceptually, a View is just another document data source, similar to an array or a document/edge collection, over which you can iterate using a ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/for"},"FOR operation")," in C8QL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  RETURN doc\n")),(0,r.kt)("p",null,"The optional ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," operation provides the capabilities to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"filter documents based on C8QL Boolean expressions and functions"),(0,r.kt)("li",{parentName:"ul"},"match documents located in different collections backed by a fast index"),(0,r.kt)("li",{parentName:"ul"},"sort the result set based on how closely each document matched the search conditions")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},"Search Views")," on how to set up a View."),(0,r.kt)("h2",{id:"general-syntax"},"General Syntax"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," keyword is followed by an Search filter expressions, which is mostly comprised of calls to Search C8QL functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH expression OPTIONS {\u2026}\n  ...\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," statement, in contrast to ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTER"),", is treated as a part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR")," operation, not as an individual statement. It can not be placed freely in a query nor multiple times in the body of a ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR")," loop. ",(0,r.kt)("inlineCode",{parentName:"p"},"FOR ... IN")," must be followed by the name of a View, not a collection. The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," operation has to follow next, other operations before ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTER"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"COLLECT")," etc. are not allowed in this position. Subsequent operations are possible after ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," and the expression however, including ",(0,r.kt)("inlineCode",{parentName:"p"},"SORT")," to order the search results based on a ranking value computed by the Search View."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expression")," must be an Search expression. The full power of Search is harnessed and exposed via special ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/functions/search"},"Search functions"),", during both the search and sort stages. On top of that, common C8QL operators are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AND")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NOT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"==")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<=")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">=")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"!=")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IN")," (array or range), also ",(0,r.kt)("inlineCode",{parentName:"li"},"NOT IN"))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The alphabetical order of characters is not taken into account by Search, i.e. range queries in SEARCH operations against Views will not follow the language rules as per the defined Analyzer locale."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH ANALYZER(doc.text == "quick" OR doc.text == "brown", "text_en")\nRETURN doc\n')),(0,r.kt)("p",null,"Note that array comparison operators, inline expressions and a few other things are not supported by ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH"),". The server will raise a query error in case of an invalid expression."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," keyword and an object can optionally follow the search expression to set ",(0,r.kt)("a",{parentName:"p",href:"#search-options"},"Search Options"),"."),(0,r.kt)("h2",{id:"handling-of-non-indexed-fields"},"Handling of non-indexed fields"),(0,r.kt)("p",null,"Document attributes which are not configured to be indexed by a View are treated by ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," as non-existent. This affects tests against the documents emitted from the View only."),(0,r.kt)("p",null,"For example, given a collection ",(0,r.kt)("inlineCode",{parentName:"p"},"myCol")," with the following documents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{ "someAttr": "One", "anotherAttr": "One" }\n{ "someAttr": "Two", "anotherAttr": "Two" }\n')),(0,r.kt)("p",null,"\u2026 with a View where ",(0,r.kt)("inlineCode",{parentName:"p"},"someAttr")," is indexed by the following View ",(0,r.kt)("inlineCode",{parentName:"p"},"myView"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'{\n  "type": "search",\n  "links": {\n    "myCol": {\n      "fields": {\n        "someAttr": {}\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u2026 a search on ",(0,r.kt)("inlineCode",{parentName:"p"},"someAttr")," yields the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN myView\n  SEARCH doc.someAttr == "One"\n  RETURN doc\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ { "someAttr": "One", "anotherAttr": "One" } ]\n')),(0,r.kt)("p",null,"A search on ",(0,r.kt)("inlineCode",{parentName:"p"},"anotherAttr")," yields an empty result because only ",(0,r.kt)("inlineCode",{parentName:"p"},"someAttr")," is indexed by the View:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN myView\n  SEARCH doc.anotherAttr == "One"\n  RETURN doc\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[]\n")),(0,r.kt)("p",null,"You can use the special ",(0,r.kt)("inlineCode",{parentName:"p"},"includeAllFields")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},"View property")," to index all (sub-)fields of the source documents if desired."),(0,r.kt)("h2",{id:"arrays-and-tracklistpositions"},"Arrays and trackListPositions"),(0,r.kt)("p",null,"Array elements are indexed individually and can be searched for as if the attribute had each single value at the same time. They behave like a ",(0,r.kt)("em",{parentName:"p"},"disjunctive superposition")," of their values as long as the ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},(0,r.kt)("strong",{parentName:"a"},"trackListPositions"))," View setting is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (default)."),(0,r.kt)("p",null,"Therefore, array comparison operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ALL IN")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ANY ==")," aren't really necessary. Consider the following document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": {\n    "nested": {\n      "deep": [ 1, 2, 3 ]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"A View which is configured to index the field ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," including sub-fields will index the individual numbers under the path ",(0,r.kt)("inlineCode",{parentName:"p"},"value.nested.deep"),", which can be queried for like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH doc.value.nested.deep == 2\n  RETURN doc\n")),(0,r.kt)("p",null,"This is different to ",(0,r.kt)("inlineCode",{parentName:"p"},"FILTER")," operations, where you would use an ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operators#array-comparison-operators"},"array comparison operator")," to find an element in the array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN collection\n  FILTER doc.value.nested.deep ANY == 2\n  RETURN doc\n")),(0,r.kt)("p",null,"You can set ",(0,r.kt)("inlineCode",{parentName:"p"},"trackListPositions")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to query for a value at a specific array index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SEARCH doc.value.nested.deep[1] == 2\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"trackListPositions")," enabled there will be ",(0,r.kt)("strong",{parentName:"p"},"no match")," for the document anymore if the specification of an array index is left out in the expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"SEARCH doc.value.nested.deep == 2\n")),(0,r.kt)("p",null,"Conversely, there will be no match if an array index is specified but ",(0,r.kt)("inlineCode",{parentName:"p"},"trackListPositions")," is disabled."),(0,r.kt)("p",null,"String tokens (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},"Analyzers"),") are also indexed individually, but not all Analyzer types return multiple tokens. If the Analyzer does, then comparison tests are done per token/word. For example, given the field ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," is analyzed with ",(0,r.kt)("inlineCode",{parentName:"p"},'"text_en"')," and contains the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"a quick brown fox jumps over the lazy dog"'),", the following expression will be true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ANALYZER(doc.text == 'fox', \"text_en\")\n")),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},'"text_en"')," Analyzer stems the words, so this is also true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ANALYZER(doc.text == 'jump', \"text_en\")\n")),(0,r.kt)("p",null,"So a comparison will actually test if a word is contained in the text. With ",(0,r.kt)("inlineCode",{parentName:"p"},"trackListPositions: false"),", this means for arrays if the word is contained in any element of the array. For example, given:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"text": [ "a quick", "brown fox", "jumps over the", "lazy dog" ] }\n')),(0,r.kt)("p",null,"\u2026 the following will be true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ANALYZER(doc.text == 'jump', \"text_en\")\n")),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"trackListPositions: true")," you would need to specify the index of the array element ",(0,r.kt)("inlineCode",{parentName:"p"},'"jumps over the"')," to be true:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"ANALYZER(doc.text[2] == 'jump', \"text_en\")\n")),(0,r.kt)("h2",{id:"search-with-sort"},"SEARCH with SORT"),(0,r.kt)("p",null,"The documents emitted from a View can be sorted by attribute values with the standard ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/sort"},"SORT() operation"),", using one or multiple attributes, in ascending or descending order (or a mix thereof)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SORT doc.text, doc.value DESC\n  RETURN doc\n")),(0,r.kt)("p",null,"If the (left-most) fields and their sorting directions match up with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/operations/search"},"primary sort order")," definition of the View then the ",(0,r.kt)("inlineCode",{parentName:"p"},"SORT")," operation is optimized away."),(0,r.kt)("p",null,"Apart from simple sorting, it is possible to sort the matched View documents by relevance score (or a combination of score and attribute values if desired). The document search via the ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," keyword and the sorting via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/functions/search#scoring-functions"},"Search Scoring Functions"),", namely ",(0,r.kt)("inlineCode",{parentName:"p"},"BM25()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TFIDF()"),", are closely intertwined."),(0,r.kt)("p",null,"The query given in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," expression is not only used to filter documents, but also is used with the scoring functions to decide which document matches the query best. Other documents in the View also affect this decision."),(0,r.kt)("p",null,"Therefore the Search scoring functions can work ",(0,r.kt)("em",{parentName:"p"},"only")," on documents emitted from a View, as both the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," expression and the View itself are consulted in order to sort the results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"FOR doc IN viewName\n  SEARCH ...\n  SORT BM25(doc) DESC\n  RETURN doc\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/c8ql/functions/search#boost"},"BOOST() function")," can be used to fine-tune the resulting ranking by weighing sub-expressions in ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," differently."),(0,r.kt)("p",null,"If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," operation prior to calls to scoring functions or if the search expression does not filter out documents (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH true"),") then a score of ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," will be returned for all documents."),(0,r.kt)("h2",{id:"search-options"},"Search Options"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SEARCH")," operation accepts an options object with the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collections")," (array, ",(0,r.kt)("em",{parentName:"li"},"optional"),"): array of strings with collection names to restrict the search to certain source collections")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Given a View with three linked collections ",(0,r.kt)("inlineCode",{parentName:"p"},"coll1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"coll2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"coll3")," it is possible to return documents from the first two collections only and ignore the third using the ",(0,r.kt)("inlineCode",{parentName:"p"},"collections")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'FOR doc IN viewName\n  SEARCH true OPTIONS { collections: ["coll1", "coll2"] }\n  RETURN doc\n')),(0,r.kt)("p",null,"The search expression ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," matches all View documents. You can use any valid expression here while limiting the scope to the chosen source collections."))}m.isMDXComponent=!0}}]);