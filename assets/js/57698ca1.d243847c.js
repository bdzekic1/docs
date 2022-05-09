"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4333],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,x=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(x,c(c({ref:n},p),{},{components:t})):r.createElement(x,c({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38957:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),c=["components"],i={},s=void 0,l={unversionedId:"collections/dynamo/reference/updateTable",id:"collections/dynamo/reference/updateTable",title:"updateTable",description:"Update Table",source:"@site/docs/collections/dynamo/reference/updateTable.md",sourceDirName:"collections/dynamo/reference",slug:"/collections/dynamo/reference/updateTable",permalink:"/docs/collections/dynamo/reference/updateTable",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/collections/dynamo/reference/updateTable.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"updateAnItem",permalink:"/docs/collections/dynamo/reference/updateAnItem"},next:{title:"Quickstart",permalink:"/docs/collections/graphs/quickstart"}},p={},d=[],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Update Table"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Browser")),(0,o.kt)("p",null,"Save as .html and open the file in your browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n  <head>\n    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.7.16.min.js"><\/script>\n\n    <script>\n      const dcName = "test.macrometa.io";\n      const host = "https://api-" + dcName;\n\n      const apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\n      const accessKeyId = "apikey " + apiKey;\n\n      // OR\n      // const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n      // const accessKeyId = "bearer " + JWT;\n\n      const service = "dynamodb";\n      const region = "us-east-1";\n      const endpoint = host + "/_api/dynamo";\n      const secretAccessKey = "c8";\n\n      AWS.config.update({\n        region,\n        endpoint,\n        accessKeyId,\n        secretAccessKey,\n      });\n\n      var docClient = new AWS.DynamoDB.DocumentClient();\n\n      function createItem() {\n        var params = {\n          TableName: "Movies",\n          Item: {\n            year: 2015,\n            title: "The Big New Movie",\n            info: {\n              plot: "Nothing happens at all.",\n              rating: 0,\n            },\n          },\n        };\n        docClient.put(params, function (err, data) {\n          if (err) {\n            document.getElementById("textarea").innerHTML =\n              "Unable to add item: " + "\\n" + JSON.stringify(err, undefined, 2);\n          } else {\n            document.getElementById("textarea").innerHTML =\n              "PutItem succeeded: " + "\\n" + JSON.stringify(data, undefined, 2);\n          }\n        });\n      }\n    <\/script>\n  </head>\n\n  <body>\n    <input\n      id="createItem"\n      type="button"\n      value="Create Item"\n      onclick="createItem();"\n    />\n    <br /><br />\n    <textarea\n      readonly\n      id="textarea"\n      style={{ width:400px; height:800px }}\n    ></textarea>\n  </body>\n</html>\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"JS/NODE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var AWS = require("aws-sdk");\n\nAWS.config.update({\n  region: "",\n  endpoint: "",\n});\n\nvar dynamodb = new AWS.DynamoDB();\n\nvar params = {\n  TableName: "Movies",\n  KeySchema: [\n    { AttributeName: "year", KeyType: "HASH" }, //Partition key\n    { AttributeName: "title", KeyType: "RANGE" }, //Sort key\n  ],\n  AttributeDefinitions: [\n    { AttributeName: "year", AttributeType: "N" },\n    { AttributeName: "title", AttributeType: "S" },\n  ],\n  ProvisionedThroughput: {\n    ReadCapacityUnits: 10,\n    WriteCapacityUnits: 10,\n  },\n};\n\ndynamodb.createTable(params, function (err, data) {\n  if (err) {\n    console.error(\n      "Unable to create table. Error JSON:",\n      JSON.stringify(err, null, 2)\n    );\n  } else {\n    console.log(\n      "Created table. Table description JSON:",\n      JSON.stringify(data, null, 2)\n    );\n  }\n});\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"JS/NODE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var AWS = require("aws-sdk");\n\nconst dcName = "test.macrometa.io";\nconst host = "https://api-" + dcName;\n\nconst apiKey = "xxxxxxxxxxxxxxxxxxxxxx";\nconst accessKeyId = "apikey " + apiKey;\n\n// OR\n// const JWT = "xxxxxxxxxxxxxxxxxxxxxx";\n// const accessKeyId = "bearer " + JWT;\n\nconst service = "dynamodb";\nconst region = "us-east-1";\nconst endpoint = host + "/_api/dynamo";\nconst secretAccessKey = "c8";\n\nAWS.config.update({\n  region,\n  endpoint,\n  accessKeyId,\n  secretAccessKey,\n});\n\nvar docClient = new AWS.DynamoDB.DocumentClient();\n\nfunction createItem() {\n  var params = {\n    TableName: "Movies",\n    Item: {\n      year: 2015,\n      title: "The Big New Movie",\n      info: {\n        plot: "Nothing happens at all.",\n        rating: 0,\n      },\n    },\n  };\n  docClient.put(params, function (err, data) {\n    if (err) {\n      document.getElementById("textarea").innerHTML =\n        "Unable to add item: " + "\\n" + JSON.stringify(err, undefined, 2);\n    } else {\n      document.getElementById("textarea").innerHTML =\n        "PutItem succeeded: " + "\\n" + JSON.stringify(data, undefined, 2);\n    }\n  });\n}\n')))}m.isMDXComponent=!0}}]);