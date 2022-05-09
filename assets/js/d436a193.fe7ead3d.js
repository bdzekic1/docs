"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5301],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=i,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60023:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={sidebar_position:7},l="Summarizing Data",m={unversionedId:"cep/tutorials/summarizing-data",id:"cep/tutorials/summarizing-data",title:"Summarizing Data",description:"Introduction",source:"@site/docs/cep/tutorials/summarizing-data.md",sourceDirName:"cep/tutorials",slug:"/cep/tutorials/summarizing-data",permalink:"/docs/cep/tutorials/summarizing-data",draft:!1,editUrl:"https://github.com/macrometacorp/docs/edit/master/docs/cep/tutorials/summarizing-data.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Filtering Data",permalink:"/docs/cep/tutorials/filtering-data"},next:{title:"Correlating Data",permalink:"/docs/cep/tutorials/correlating-data"}},p={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Summarization by clock-time",id:"summarization-by-clock-time",level:2},{value:"Calculate and store clock-time-based aggregate values",id:"calculate-and-store-clock-time-based-aggregate-values",level:3},{value:"Retrieve the stored aggregate values",id:"retrieve-the-stored-aggregate-values",level:3},{value:"Summarization by Windowing Criteria",id:"summarization-by-windowing-criteria",level:2},{value:"Performing a time-based summarization in a sliding manner",id:"performing-a-time-based-summarization-in-a-sliding-manner",level:3},{value:"Performing a length-based summarization to a batch of events",id:"performing-a-length-based-summarization-to-a-batch-of-events",level:3}],c={toc:d};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summarizing-data"},"Summarizing Data"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Summarizing data refers to obtaining aggregates in an incremental manner for a specified set of time periods."),(0,r.kt)("h2",{id:"summarization-by-clock-time"},"Summarization by clock-time"),(0,r.kt)("p",null,"Performing clock-time based based summarization involves calculating, storing, and then retrieving aggregations for a selected range of time granularities. This process is carried out in two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Calculating the aggregations for the selected time granularities and storing the results."),(0,r.kt)("li",{parentName:"ol"},"Retrieving previously calculated aggregations for selected time granularities. ")),(0,r.kt)("p",null,"To understand data summarization further, consider the scenario where a business that sells multiple brands stores its sales data in a physical database for the purpose of retrieving them later to perform sales analysis. Each sales transaction is received with the following details:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"`symbol`: The symbol that represents the brand of the items sold.\n`price`: the price at which each item was sold.\n`amount`: The number of items sold.\n")),(0,r.kt)("p",null,"The Sales Analyst needs to retrieve the total number of items sold of each brand per month, per week, per day etc., and then retrieve these totals for specific time durations to prepare sales analysis reports."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is not always required to maintain a physical database for incremental analysis, but it enables you to try out your aggregations with ease."))),(0,r.kt)("p",null,"The following sections explain how to calculate and store time-based aggregations for this scenarios, and then retrieve them."),(0,r.kt)("h3",{id:"calculate-and-store-clock-time-based-aggregate-values"},"Calculate and store clock-time-based aggregate values"),(0,r.kt)("p",null,"To calculate and store time-based aggregation values for the scenario explained above, follow the procedure below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start creating a new stream application. You can name it ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeApp")," For instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/cep/tutorials/create-stream-app"},"Creating a Stream Application"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name("TradeApp");\n@App:qlVersion("2")\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To capture the input events based on which the aggregations are calculated, define an input stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM TradeStream (symbol string, price double, quantity long, timestamp long);\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"In addition to the `symbol`, `price`, and `quantity` attributes to capture the input details already mentioned, the above stream definition includes an attribute named timestamp to capture the time at which the sales transaction occurs. The aggregations are executed based on this time. This attribute's value could either be a long value (reflecting the Unix timestamp in milliseconds), or a string value adhering to one of the following formats.\n\n* **`<YYYY>-<MM>-<dd> <HH>:<mm>:<ss> <Z>`**: This format can be used if the timezone needs to be specified explicitly. Here the ISO 8601 UTC offset must be provided for <Z> . e.g., +05:30 reflects the India Time Zone. If time is not in GMT, this value must be provided.)\n* **`<yyyy>-<MM>-<dd> <HH>:<mm>:<ss>`**: This format can be used if the timezone is in GMT.\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an aggregation as follows. You can name it ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeAggregation"),"."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"The system uses the aggregation name you define here as part of the database table name. Table name is `<Aggregation_Name>_<Granularity>`. System will automatically create a collection `TradeAggregation_HOUR` in `c8db` as we will be calculating the aggregation hourly in the next step.\n")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE AGGREGATION TradeAggregation\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To calculate aggregations, include a query as follows:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To select attributes to be included in the output event, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select symbol, avg(price) as avgPrice, sum(quantity) as total\n")),(0,r.kt)("p",{parentName:"li"},"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"avg()")," fuction is applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"price")," attribute to derive the average price. The ",(0,r.kt)("inlineCode",{parentName:"p"},"sum()")," function is applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity")," attribute to derive the total quantity.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To get input events from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeStream")," stream that you previously defined, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"from TradeStream\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To group the output by the symbol, add a group by clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"group by symbol\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The timestamp included in each input event allows you to calculate aggregates for the range of time granularities seconds-years. Therefore, to calculate aggregates for each time granularity within this range, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregate by")," clause to this aggregate query as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"aggregate by timestamp every hour;\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The completed stream application is as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name("TradeApp")\n@App:qlVersion("2")\n\nCREATE STREAM TradeStream (symbol string, price double, quantity long, timestamp long);\n\nCREATE AGGREGATION TradeAggregation\n\n@info(name = \'CalculatingAggregates\')\nselect symbol, avg(price) as avgPrice, sum(quantity) as total\nfrom TradeStream\ngroup by symbol\naggregate by timestamp every hour;\n')))),(0,r.kt)("h3",{id:"retrieve-the-stored-aggregate-values"},"Retrieve the stored aggregate values"),(0,r.kt)("p",null,"This section involves retrieving the aggregate values that you calculated and persisted in the ",(0,r.kt)("a",{parentName:"p",href:"#calculate-and-store-clock-time-based-aggregate-values"},"Calculate and store clock-time-based aggregate values subsection"),". "),(0,r.kt)("p",null,"To do this, let's add the definitions and queries required for retrieval to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeApp")," stream application that you have already created in the previous section."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeApp")," stream application.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To retrieve aggregations, you need to make retrieval requests. To capture these requests as events, let's define a stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM TradeSummaryRetrievalStream (symbol string);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To process the events captured via the ",(0,r.kt)("inlineCode",{parentName:"p"},"TradeSummaryRetrievalStream")," stream you defined, add a new query as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'insert into TradeSummaryStream\nselect a.symbol, a.total, a.avgPrice \nfrom TradeSummaryRetrievalStream as b join TradeAggregation as a\n    on a.symbol == b.symbol \n    within "2014-02-15 00:00:00 +05:30", "2014-03-16 00:00:00 +05:30" \n    per "days" ;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The completed stream application is as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'@App:name("TradeApp")\n@App:qlVersion("2")\n\nCREATE STREAM TradeStream (symbol string, price double, quantity long, timestamp long);\n\nCREATE STREAM TradeSummaryRetrievalStream (symbol string);\n\nCREATE AGGREGATION TradeAggregation\nselect symbol, avg(price) as avgPrice, sum(quantity) as total\nfrom TradeStream\ngroup by symbol\naggregate by timestamp every hour;\n\n@info(name = \'RetrievingAggregates\') \ninsert into TradeSummaryStream\nselect a.symbol, a.total, a.avgPrice \nfrom TradeSummaryRetrievalStream as b join TradeAggregation as a\n    on a.symbol == b.symbol \n    within "2014-02-15 00:00:00 +05:30", "2014-03-16 00:00:00 +05:30" \n    per "days" ;\n')))),(0,r.kt)("h2",{id:"summarization-by-windowing-criteria"},"Summarization by Windowing Criteria"),(0,r.kt)("p",null,"This section explains how to apply stream processing logic to process a subset of events received to a stream based on time or the number of events. This is achieved via ",(0,r.kt)("inlineCode",{parentName:"p"},"stream windows"),"."),(0,r.kt)("p",null,"The window can apply to a batch of events or in a sliding manner. This is further explained in the following sections."),(0,r.kt)("h3",{id:"performing-a-time-based-summarization-in-a-sliding-manner"},"Performing a time-based summarization in a sliding manner"),(0,r.kt)("p",null,"This subsection demonstrates how to summarize data for a short term based on time and well as how to do a summarization in a sliding manner."),(0,r.kt)("p",null,"To demonstrate this, consider a factory manager who wants to be able to check the production for the last hour at any given time. Every event represents a production run. For this purpose, a Stream application can be created as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start creating a new stream application. You can name it ",(0,r.kt)("inlineCode",{parentName:"p"},"PastHourProductionApp")," For instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/cep/tutorials/create-stream-app"},"Creating a Stream Application"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@App:name('PastHourProductionApp');\n@App:qlVersion(\"2\")\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To capture details about each production run, define an input stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM ProductionStream (name string, amount long, timestamp long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To publish the production for the last hour, define the output stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM PastHourProductionStream WITH (type='log', prefix='Production totals over the past hour:') (name string, pastHourTotal long);\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"A sink annotation is connected to the output stream to log the output events. For more information about adding sinks to publish events, see the [Publishing Data](/docs/cep/tutorials/publishing-data).\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To define how the output is derived, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statement as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select name, sum(amount) as pastHourTotal\n")),(0,r.kt)("p",{parentName:"li"},"Here, the total is derived by applying the ",(0,r.kt)("inlineCode",{parentName:"p"},"sum()")," function to the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductionStream")," input stream.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To specify that the processing done as defined via the ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statement applies to a time window, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," clause and include the time window as shown below. This must be added above the ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," clause."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"from ProductionStream#window.time(1 hour)\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"`window.time` indicates that the window added is a time window. The time considered is one hour. The window is a sliding window which considers the last hour at any given time.\n\n(For example, when the stream processor calculates the total production during the time 13.00-14.00, next it calculates the total production during the time 13.01-14.01 after the 13.01 minute as elapsed.) \n\nFor details about other window types supported, see [Plugins- Unique](/docs/cep/reference/extensions/execution/unique).\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To group by the product name, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"group by")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"group by name\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To insert the results into the ",(0,r.kt)("inlineCode",{parentName:"p"},"PastHourProductionStream")," output stream, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"insert into")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into PastHourProductionStream\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The completed stream application is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@App:name('PastHourProductionApp')\n@App:qlVersion(\"2\")\n\nCREATE STREAM ProductionStream (name string, amount long, timestamp long);\n\nCREATE STREAM PastHourProductionStream WITH (type='log', prefix='Production totals over the past hour:') (name string, pastHourTotal long);\n\ninsert into PastHourProductionStream\nselect name, sum(amount) as pastHourTotal\nfrom ProductionStream#window.time(1 hour)\ngroup by name;\n")))),(0,r.kt)("h3",{id:"performing-a-length-based-summarization-to-a-batch-of-events"},"Performing a length-based summarization to a batch of events"),(0,r.kt)("p",null,"This subsection demonstrates how to summarize data for a specific number of events as well as how to do that summarization for batches of events."),(0,r.kt)("p",null,"To demonstrate this, assume that a factory manager wants to track the maximum production in every 10 production runs. IOn order to do so, let's create a Stream application as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start creating a new stream application. You can name it ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductionApp")," For instructions, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/cep/tutorials/create-stream-app"},"Creating a Stream Application"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@App:name('MaximumProductionApp')\n@App:qlVersion(\"2\")\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define an input stream as follows to capture details about the production."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM ProductionStream (name string, amount long);\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To output the maximum production detected every 10 production runs, define an output stream as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE STREAM DetectedMaximumProductionStream WITH (type='log', prefix='Maximum production in last 10 runs') (name string, maximumValue long);\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"A sink annotation is connected to the output stream to log the output events. For more information about adding sinks to publish events, see the [Publishing Data](/docs/cep/tutorials/publishing-data).\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To define the subset of events to be considered based on the number of events, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"from")," clause with a ",(0,r.kt)("inlineCode",{parentName:"p"},"lengthBatch")," window as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"from ProductionStream#window.lengthBatch(10)\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"window.lengthBatch")," indicates that the window added is a length window that considers events in batches when determin ing subsets. The number of events in each batch is ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),". For details about other window types supported, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/cep/reference/extensions/execution/unique"},"Plugins - Unique"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To derive the values for the ",(0,r.kt)("inlineCode",{parentName:"p"},"DetectedMaximumProductionStream")," output stream, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"select")," statement as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select name, max(amount) as maximumValue\n")),(0,r.kt)("p",{parentName:"li"},"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"max()")," function is applied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," attribute to derive the maximum value.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To group by the product name, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"group by")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"group by name\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To insert the maximum production detected into the ",(0,r.kt)("inlineCode",{parentName:"p"},"DetectedMaximumProductionStream")," output stream, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"insert into")," clause as follows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"insert into DetectedMaximumProductionStream\n")))),(0,r.kt)("p",null,"The completed stream application is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@App:name('MaximumProductionApp') \n@App:qlVersion(\"2\")\n\nCREATE STREAM ProductionStream (name string, amount long, timestamp long);\n\nCREATE STREAM DetectedMaximumProductionStream WITH (type='log', prefix='Maximum production in last 10 runs') (name string, maximumValue long);\n\ninsert into DetectedMaximumProductionStream\nselect name, max(amount) as maximumValue\nfrom ProductionStream#window.lengthBatch(10)\ngroup by name\n;\n")))}u.isMDXComponent=!0}}]);