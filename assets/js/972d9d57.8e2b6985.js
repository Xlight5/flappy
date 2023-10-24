"use strict";(self.webpackChunk_pleisto_flappy_docs=self.webpackChunk_pleisto_flappy_docs||[]).push([[937],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(5773),i=(n(7378),n(5318));const r={sidebar_position:1,slug:"/"},o="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Flappy is a production-ready Language Learning Model (LLM) Application/Agent SDK designed to simplify AI integration in your projects. It is an easy-to-use, universally compatible, and production-ready solution that brings the power of AI to developers regardless of their preferred programming language.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},s={},p=[{value:"Key Features",id:"key-features",level:2},{value:"Why Flappy?",id:"why-flappy",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Agent Functions",id:"agent-functions",level:3},{value:"Function Implementation Details",id:"function-implementation-details",level:4},{value:"Code Interpreter",id:"code-interpreter",level:3},{value:"LLM Abstraction Layer",id:"llm-abstraction-layer",level:3},{value:"Supported LLMs",id:"supported-llms",level:2},{value:"Supported Programming Languages",id:"supported-programming-languages",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Flappy is a production-ready Language Learning Model (LLM) Application/Agent SDK designed to simplify AI integration in your projects. It is an easy-to-use, universally compatible, and production-ready solution that brings the power of AI to developers regardless of their preferred programming language."),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ease of Use"),": Flappy is designed to be as user-friendly as CRUD application development, minimizing the learning curve for developers new to AI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Production-Ready"),": Beyond research, Flappy is a robust SDK that balances cost-efficiency and sandbox security to provide a stable platform for commercial environments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Language-Agnostic"),": Flappy integrates seamlessly with any programming language, eliminating the need for Python unless explicitly required by your application.")),(0,i.kt)("h2",{id:"why-flappy"},"Why Flappy?"),(0,i.kt)("p",null,"Flappy is your key to unlocking the potential of large language models (LLMs) in everyday applications. It's not just about creating new data, but about transforming and synthesizing the existing data for meaningful insights."),(0,i.kt)("p",null,"Commercial value of LLMs lies in their application within industry-specific use cases. However, integrating these models into existing business systems is a significant challenge. This is where Flappy shines - acting as a production-ready LLM Agent SDK for every developer. It facilitates the interaction between LLMs and other software systems, ensuring high accuracy and specific output formatting that's crucial for efficient data exchange."),(0,i.kt)("p",null,"Flappy is not just about translation. It's about empowerment. It breaks down the high technical barriers, turning extensive and complicated work into streamlined processes. With Flappy, developers without an AI background can integrate AI applications into their software, contributing to the industry-specific application of large models."),(0,i.kt)("p",null,"Flappy surpasses alternatives like TypeChat, and LangChain in delivering production-ready solutions. Designed with real-world applications in mind, Flappy prioritizes safety, cost-effectiveness, robustness, and maintainability."),(0,i.kt)("p",null,"In essence, Flappy is more than a tool. It's a revolution in the field of AI, bridging the gap between potential and practical application. It brings the power of AI into the hands of every developer, driving forward AI-driven innovation in a variety of applications."),(0,i.kt)("p",null,"Choose Flappy to be part of this revolution, to harness the full potential of AI, and to shape the future of AI together."),(0,i.kt)("h2",{id:"core-components"},"Core Components"),(0,i.kt)("h3",{id:"agent-functions"},"Agent Functions"),(0,i.kt)("p",null,"In Flappy's ecosystem, an agent operates as a versatile conduit for the LLM, performing a variety of tasks such as structuring data, invoking external APIs, or sandboxing LLM-generated Python code as needed. This design philosophy caters to the increasing demand for LLM-based AI applications across various sectors."),(0,i.kt)("p",null,"The agent functions in Flappy are built on two foundational types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"InvokeFunction"),": This function allows agents to interact with the environment. It's defined by input and output parameters, facilitating efficient interaction with the LLM."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"SynthesizedFunction"),": This function is processed by the LLM and only requires the definition of its description and the structure of its inputs and outputs.")),(0,i.kt)("h4",{id:"function-implementation-details"},"Function Implementation Details"),(0,i.kt)("p",null,"Flappy introduces unique implementation mechanisms to enhance these functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Unique JSON Schema Integration"),": Users can define abstract classes in their preferred programming language, which Flappy then transforms into JSON Schema schemas. This feature enhances machine readability and interoperability and manages the inputs and outputs of LLMs, providing controlled, consistent, and machine-readable data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AST Parsing"),": Flappy performs Abstract Syntax Tree (AST) parsing on the LLM outputs to ensure that the generated JSON data strictly adheres to the defined JSON Schema schema.")),(0,i.kt)("h3",{id:"code-interpreter"},"Code Interpreter"),(0,i.kt)("p",null,"Flappy's Code Interpreter serves as a secure environment to execute Python or TypeScript code produced by LLMs. It provides a sandboxed safety feature that reduces runtime errors and potential security vulnerabilities, making it suitable for deployment in a production environment."),(0,i.kt)("h3",{id:"llm-abstraction-layer"},"LLM Abstraction Layer"),(0,i.kt)("p",null,"To enhance the flexibility of application development, Flappy provides an abstraction layer for different LLMs. This feature allows users to easily switch between different LLMs and designate fallback LLMs, ensuring application stability."),(0,i.kt)("p",null,"Flappy empowers developers to build LLM-based applications in a language-agnostic way. Start your journey with Flappy today and harness the immense potential of AI in your preferred programming language."),(0,i.kt)("h2",{id:"supported-llms"},"Supported LLMs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"OpenAI ChatGPT & GPT-4"),(0,i.kt)("li",{parentName:"ul"},"Baichuan-53B"),(0,i.kt)("li",{parentName:"ul"},"HuggingFace Transformers (Llama, mistral, etc.) ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"Google PaLM2 ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"Baidu ERNIE ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"iFly XingHuo ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"MiniMax ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon"))),(0,i.kt)("h2",{id:"supported-programming-languages"},"Supported Programming Languages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js (JavaScript/TypeScript)"),(0,i.kt)("li",{parentName:"ul"},"Kotlin & Java"),(0,i.kt)("li",{parentName:"ul"},"C# (.NET Core)"),(0,i.kt)("li",{parentName:"ul"},"Go ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"PHP ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"Ruby ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon")),(0,i.kt)("li",{parentName:"ul"},"Python ",(0,i.kt)("inlineCode",{parentName:"li"},"Coming Soon"))))}d.isMDXComponent=!0}}]);