"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1093],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(a),d=i,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return a?n.createElement(h,s(s({ref:t},m),{},{components:a})):n.createElement(h,s({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},67195:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=["components"],o={sidebar_position:9},p="Publishing Data",l={unversionedId:"cep/tutorials/publishing-data",id:"cep/tutorials/publishing-data",title:"Publishing Data",description:"When information is processed by the stream processor, the output is presented as events in a streaming manner. This output can be published to databases, files, cloud-based applications or other streaming applications.",source:"@site/docs/cep/tutorials/publishing-data.md",sourceDirName:"cep/tutorials",slug:"/cep/tutorials/publishing-data",permalink:"/docs/cep/tutorials/publishing-data",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/tutorials/publishing-data.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Correlating Data",permalink:"/docs/cep/tutorials/correlating-data"},next:{title:"Executing Scripts",permalink:"/docs/cep/tutorials/executing-scripts"}},m={},u=[{value:"Publishing data using an event sink",id:"publishing-data-using-an-event-sink",level:2},{value:"Defining event sink in the stream application",id:"defining-event-sink-in-the-stream-application",level:3},{value:"Supported event formats",id:"supported-event-formats",level:2},{value:"Publishing data in default format",id:"publishing-data-in-default-format",level:3},{value:"Publishing data in custom format",id:"publishing-data-in-custom-format",level:3}],c={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publishing-data"},"Publishing Data"),(0,r.kt)("p",null,"When information is processed by the stream processor, the output is presented as events in a streaming manner. This output can be published to databases, files, cloud-based applications or other streaming applications."),(0,r.kt)("p",null,"For the stream processor to publish events, the following is required."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"message schema"),": The messages selected to be published by a streaming integration flow are identified by their\nschemas. This schema is defined via an output stream definition. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"sink"),": The output can be published to different interfaces including streaming applications, cloud-based applications, databases, and files. There are different sink types to support the different interfaces. The output can also be published in a range of formats. In order to select the required interface and format for a specific streaming integration flow, you need to configure a sink in the relevant stream application via the ",(0,r.kt)("inlineCode",{parentName:"p"},"sink.type")," annotation."))),(0,r.kt)("p",null,"A sink configuration consists of three parts."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sink.type"),": This annotation defines the sink type via which the data is published, and allows you to configure the sink parameters (which change depending on the sink type). For the complete list of supported sink types, see ",(0,r.kt)("a",{parentName:"li",href:"../reference/query-guide#sink"},"Stream Query Guide - Sink"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map.type"),": This annotation specifies the format in which the data is published, and allows you to configure the mapping parameters (which change based of the mapping type/format selected). For the complete list of supported mapping types, see ",(0,r.kt)("a",{parentName:"li",href:"../reference/query-guide#sink-mapper"},"Stream Query Guide - Sink Mapper"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attributes"),": This annotation specifies a custom mapping based on which events in the streaming integration flow that need to be published are identified. This is useful when the attributes of the output messages you want the Streaming Integrator to publish are different to the corresponding attribute name in the stream definition. e.g., In a scenario where the Streaming Integrator is publishing the average temperature per second, the temperature can be referred to as  ",(0,r.kt)("inlineCode",{parentName:"li"},"avgTemp")," in the output stream definition in your Stream application. However, you want to publish it with the ",(0,r.kt)("inlineCode",{parentName:"li"},"Temperature")," to the streaming application to which you are publishing. In this instance, you need a custom mapping to indicate that ",(0,r.kt)("inlineCode",{parentName:"li"},"Temperature")," is the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"avgTemp"),".")),(0,r.kt)("h2",{id:"publishing-data-using-an-event-sink"},"Publishing data using an event sink"),(0,r.kt)("p",null,"This section explains how to configure a basic sink without mapping. "),(0,r.kt)("h3",{id:"defining-event-sink-in-the-stream-application"},"Defining event sink in the stream application"),(0,r.kt)("p",null,"To create a stream application with the sink configuration defined inline, follow the steps below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the GUI and start creating a new Stream application. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/cep/tutorials/create-stream-app"},"Creating a Stream Application"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for the stream application as shown below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name("<Stream_Application_Name>)\n')),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name("SalesTotalsApp")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define the output stream based on the schema in which you want to publish data. The format is as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM <Stream_Name> (attribute1_name attribute1_type, attribute2_name attribute2_type, ...);\n")),(0,r.kt)("p",{parentName:"li"},"For example: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM PublishSalesTotalsStream (transNo int, product string, price int, quantity int, salesValue long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect a sink to the stream definition you added as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK <Sink_Name> WITH (type='<SINK_TYPE>') (attribute1_name attribute1_type, attribute2_name attribute2_type, ...);\n")),(0,r.kt)("p",{parentName:"li"},"Here, the sink type needs to be selected based on the interface to which you want to publish the output. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"#supported-event-sink-types"},"Supported sink types"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"li"},"Example: If you want to publish the output as messages, you can add a sink with ",(0,r.kt)("inlineCode",{parentName:"p"},"c8streams")," as the type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK PublishSalesTotalsStream WITH (type='stream', stream.list=\"PublishSalesTotalsStream\") (transNo int, product string, price int, quantity int, salesValue long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add and configure parameters related to the sink type you selected:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK <Sink_Name> WITH (type='<SINK_TYPE>', <PARAMETER1_NAME>='<PARAMETER1_VALUE>', ...) (attribute1_name attribute1_type, attribute2_name attribute2_type, ...);\n")),(0,r.kt)("p",{parentName:"li"},"e.g., By adding a parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"prefix")," to the log sink used as an example in the previous step, you can specify a prefix with which you want to see the output logs printed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK PublishSalesTotalsStream WITH (type='stream', stream.list='Sales Totals') (transNo int, product string, price int, quantity int, salesValue long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let's complete adding the required stream app constructs to receive and process the input data."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add an input stream with a connected source configuration as shown below."),(0,r.kt)("p",{parentName:"li"},"e.g., Assuming that the schema of the input events are same as that of the output events, and that they are received via C8DB collection, you can add the input stream definition"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SOURCE ConsumeSalesTotalsStream WITH (type='database', collection='SweetProductionEP') (transNo int, product string, price int, quantity int, salesValue long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a query to get the received events from the input stream and direct them to the output stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into <OUTPUT_STREAM_NAME>\nselect <ATTRIBUTE1_Name>, <ATTRIBUTE2_NAME>, ... \nfrom <INPUT_STREAM_NAME>\ngroup by <ATTRIBUTE_NAME>;\n")),(0,r.kt)("p",{parentName:"li"},"e.g., Assuming that you are publishing the events with the existing values as logs in the output console without any further processing, you can define the query as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into PublishSalesTotalsStream\nselect *\nfrom ConsumeSalesTotalsStream\ngroup by product;\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the stream application."))),(0,r.kt)("h2",{id:"supported-event-formats"},"Supported event formats"),(0,r.kt)("h3",{id:"publishing-data-in-default-format"},"Publishing data in default format"),(0,r.kt)("p",null,"Stream processor publishes events in default format when it does not make any changes to the attribute names in the output stream before publishing. To understand how this is done, follow the procedure below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a stream application with a sink configuration following the instructions in the ",(0,r.kt)("a",{parentName:"p",href:"#defining-event-sink-in-the-stream-application"},"Defining event sink in the Stream application")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"map.type")," annotation with the mapping type to the sink configuration as shown below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK <Sink_Name> WITH (type='<SINK_TYPE>', map.type='MAP_TYPE') (attribute1_name attribute1_type, attribute2_name attribute2_type, ...);\n")),(0,r.kt)("p",{parentName:"li"},"The map type specifies the format in which the events are published. e.g., In the example that you used, you can\nspecify the output logs to be printed in the text format by specifying ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," as the mapping type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SINK PublishSalesTotalsStream WITH (type='stream', stream.list='Sales Totals', map.type=text) (transNo int, product string, price int, quantity int, salesValue long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the stream application. If you save the stream application that was created using the example configurations,\nthe completed stream application is as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```sql\n@App:name(\"SalesTotalsApp\")\n@App:description(\"Description of the plan\")\n@App:qlVersion(\"2\")\n\nCREATE SOURCE ConsumerSalesTotalsStream WITH (type='database', collection.name='SalesTotalsEP', map.type='json') (transNo int, product string, price int, quantity int, salesValue long);\n\nCREATE SINK PublishSalesTotalsStream WITH (type='stream', stream.list='Sales Totals', map.type=text) (transNo int, product string, price int, quantity int, salesValue long);\n\nselect transNo, product, price, quantity, salesValue\nfrom ConsumerSalesTotalsStream\ngroup by product\ninsert into PublishSalesTotalsStream;\n```\n")))),(0,r.kt)("h3",{id:"publishing-data-in-custom-format"},"Publishing data in custom format"),(0,r.kt)("p",null,"Stream processor publishes data in the custom format when it makes changes to the attribute names in the output stream before publishing. To understand how this is done, follow the procedure below:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In this section, you can update the same stream application that you saved in the ",(0,r.kt)("a",{parentName:"p",href:"#publishing-a-message-in-default-format"},"Publishing data in default format")," section."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your stream application with a sink configuration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Within the ",(0,r.kt)("inlineCode",{parentName:"p"},"map.type")," annotation of the sink configuration, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"map.payload")," annotation. There are two ways to configure this:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some mappers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"xml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," accept only one output payload using the following format: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'map.payload="<PAYLOAD>"\n')),(0,r.kt)("p",{parentName:"li"},"  e.g., In the example, the mapping type is ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),". Therefore, you can add a message to be printed with the output by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"map.payload")," annotation as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'map.payload="This is a test message from {{user}}."\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Some mappers such as ",(0,r.kt)("inlineCode",{parentName:"p"},"key-value")," accept series of mapping values defined as follows: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"map.payload=\"key1='mapping_1', 'key2'='user : {{user}}'\"\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the stream application."))))}d.isMDXComponent=!0}}]);