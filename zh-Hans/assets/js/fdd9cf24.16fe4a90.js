"use strict";(self.webpackChunk_pleisto_flappy_docs=self.webpackChunk_pleisto_flappy_docs||[]).push([[242],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var l=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),u=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||r;return n?l.createElement(k,p(p({ref:t},c),{},{components:n})):l.createElement(k,p({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:a,p[1]=i;for(var u=2;u<r;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(5773),a=(n(7378),n(5318));const r={sidebar_position:1,slug:"/"},p="\u7b80\u4ecb",i={unversionedId:"introduction",id:"introduction",title:"\u7b80\u4ecb",description:"Flappy \u662f\u4e00\u6b3e\u751f\u4ea7\u5c31\u7eea\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff08LLM\uff09\u5e94\u7528/Agent SDK\uff0c\u65e8\u5728\u7b80\u5316\u60a8\u7684\u9879\u76ee\u4e2d\u7684 AI \u96c6\u6210\u3002\u5b83\u662f\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u3001\u901a\u7528\u517c\u5bb9\u4e14\u751f\u4ea7\u5c31\u7eea\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06 AI \u7684\u529b\u91cf\u5e26\u7ed9\u6240\u6709\u5f00\u53d1\u8005\uff0c\u65e0\u8bba\u4ed6\u4eec\u504f\u597d\u7684\u7f16\u7a0b\u8bed\u8a00\u662f\u4ec0\u4e48\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/zh-Hans/docs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docSidebar",next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-Hans/docs/quick-start"}},o={},u=[{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Flappy\uff1f",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-flappy",level:2},{value:"\u6838\u5fc3\u7ec4\u4ef6",id:"\u6838\u5fc3\u7ec4\u4ef6",level:2},{value:"Agent \u51fd\u6570",id:"agent-\u51fd\u6570",level:3},{value:"\u51fd\u6570\u5b9e\u73b0\u7ec6\u8282Flappy \u91c7\u7528\u72ec\u7279\u7684\u5b9e\u73b0\u673a\u5236\u6765\u589e\u5f3a\u8fd9\u4e9b\u51fd\u6570\uff1a",id:"\u51fd\u6570\u5b9e\u73b0\u7ec6\u8282flappy-\u91c7\u7528\u72ec\u7279\u7684\u5b9e\u73b0\u673a\u5236\u6765\u589e\u5f3a\u8fd9\u4e9b\u51fd\u6570",level:4},{value:"\u4ee3\u7801\u89e3\u91ca\u5668",id:"\u4ee3\u7801\u89e3\u91ca\u5668",level:3},{value:"LLM \u62bd\u8c61\u5c42",id:"llm-\u62bd\u8c61\u5c42",level:3},{value:"\u652f\u6301\u7684 LLM",id:"\u652f\u6301\u7684-llm",level:2},{value:"\u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00",id:"\u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00",level:2}],c={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"Flappy \u662f\u4e00\u6b3e\u751f\u4ea7\u5c31\u7eea\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff08LLM\uff09\u5e94\u7528/Agent SDK\uff0c\u65e8\u5728\u7b80\u5316\u60a8\u7684\u9879\u76ee\u4e2d\u7684 AI \u96c6\u6210\u3002\u5b83\u662f\u4e00\u4e2a\u6613\u4e8e\u4f7f\u7528\u3001\u901a\u7528\u517c\u5bb9\u4e14\u751f\u4ea7\u5c31\u7eea\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06 AI \u7684\u529b\u91cf\u5e26\u7ed9\u6240\u6709\u5f00\u53d1\u8005\uff0c\u65e0\u8bba\u4ed6\u4eec\u504f\u597d\u7684\u7f16\u7a0b\u8bed\u8a00\u662f\u4ec0\u4e48\u3002"),(0,a.kt)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6613\u7528\u6027"),"\uff1aFlappy \u7684\u8bbe\u8ba1\u5c31\u50cf CRUD \u5e94\u7528\u5f00\u53d1\u4e00\u6837\u7528\u6237\u53cb\u597d\uff0c\u4e3a\u65b0\u63a5\u89e6 AI \u7684\u5f00\u53d1\u8005\u6700\u5c0f\u5316\u5b66\u4e60\u66f2\u7ebf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u5c31\u7eea"),"\uff1a\u8d85\u8d8a\u7814\u7a76\uff0cFlappy \u662f\u4e00\u4e2a\u575a\u56fa\u7684 SDK\uff0c\u5e73\u8861\u4e86\u6210\u672c\u6548\u76ca\u548c\u6c99\u7bb1\u5b89\u5168\u6027\uff0c\u4e3a\u5546\u4e1a\u73af\u5883\u63d0\u4f9b\u4e86\u7a33\u5b9a\u7684\u5e73\u53f0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u8bed\u8a00\u4e0d\u53ef\u77e5"),"\uff1aFlappy \u53ef\u4ee5\u65e0\u7f1d\u96c6\u6210\u4efb\u4f55\u7f16\u7a0b\u8bed\u8a00\uff0c\u9664\u975e\u60a8\u7684\u5e94\u7528\u660e\u786e\u9700\u8981 Python\uff0c\u5426\u5219\u65e0\u9700 Python\u3002")),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-flappy"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Flappy\uff1f"),(0,a.kt)("p",null,"Flappy \u662f\u60a8\u89e3\u9501\u5927\u8bed\u8a00\u6a21\u578b\uff08LLMs\uff09\u5728\u65e5\u5e38\u5e94\u7528\u4e2d\u6f5c\u529b\u7684\u5173\u952e\u3002\u5b83\u4e0d\u4ec5\u4ec5\u662f\u5173\u4e8e\u521b\u5efa\u65b0\u6570\u636e\uff0c\u800c\u662f\u5173\u4e8e\u8f6c\u6362\u548c\u7efc\u5408\u73b0\u6709\u6570\u636e\u4ee5\u83b7\u5f97\u6709\u610f\u4e49\u7684\u6d1e\u5bdf\u3002"),(0,a.kt)("p",null,"LLMs \u7684\u5546\u4e1a\u4ef7\u503c\u5728\u4e8e\u5b83\u4eec\u5728\u884c\u4e1a\u7279\u5b9a\u7528\u4f8b\u4e2d\u7684\u5e94\u7528\u3002\u7136\u800c\uff0c\u5c06\u8fd9\u4e9b\u6a21\u578b\u96c6\u6210\u5230\u73b0\u6709\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\u662f\u4e00\u9879\u91cd\u5927\u6311\u6218\u3002\u8fd9\u5c31\u662f Flappy \u7684\u5f3a\u9879 - \u4f5c\u4e3a\u6bcf\u4e00\u4e2a\u5f00\u53d1\u8005\u7684\u751f\u4ea7\u5c31\u7eea\u7684 LLM Agent SDK\u3002\u5b83\u4fbf\u5229\u4e86 LLMs \u548c\u5176\u4ed6\u8f6f\u4ef6\u7cfb\u7edf\u4e4b\u95f4\u7684\u4ea4\u4e92\uff0c\u786e\u4fdd\u4e86\u9ad8\u7cbe\u5ea6\u548c\u7279\u5b9a\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u8fd9\u5bf9\u4e8e\u6709\u6548\u7684\u6570\u636e\u4ea4\u6362\u81f3\u5173\u91cd\u8981\u3002"),(0,a.kt)("p",null,"Flappy \u4e0d\u4ec5\u4ec5\u662f\u5173\u4e8e\u7ffb\u8bd1\u3002\u5b83\u662f\u5173\u4e8e\u8d4b\u6743\u3002\u5b83\u6253\u7834\u4e86\u9ad8\u6280\u672f\u58c1\u5792\uff0c\u5c06\u7e41\u91cd\u548c\u590d\u6742\u7684\u5de5\u4f5c\u8f6c\u5316\u4e3a\u7cbe\u7b80\u7684\u6d41\u7a0b\u3002\u6709\u4e86 Flappy\uff0c\u6ca1\u6709 AI \u80cc\u666f\u7684\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u5c06 AI \u5e94\u7528\u96c6\u6210\u5230\u4ed6\u4eec\u7684\u8f6f\u4ef6\u4e2d\uff0c\u4e3a\u5927\u578b\u6a21\u578b\u7684\u884c\u4e1a\u7279\u5b9a\u5e94\u7528\u505a\u51fa\u8d21\u732e\u3002"),(0,a.kt)("p",null,"Flappy \u8d85\u8d8a\u4e86 TypeChat \u548c LangChain \u7b49\u66ff\u4ee3\u65b9\u6848\uff0c\u63d0\u4f9b\u4e86\u751f\u4ea7\u5c31\u7eea\u7684\u89e3\u51b3\u65b9\u6848\u3002Flappy \u4ee5\u73b0\u5b9e\u4e16\u754c\u7684\u5e94\u7528\u4e3a\u8bbe\u8ba1\u76ee\u6807\uff0c\u4f18\u5148\u8003\u8651\u5b89\u5168\u6027\u3001\u6210\u672c\u6548\u76ca\u3001\u7a33\u5065\u6027\u548c\u53ef\u7ef4\u62a4\u6027\u3002"),(0,a.kt)("p",null,"\u672c\u8d28\u4e0a\uff0cFlappy \u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u5de5\u5177\u3002\u5b83\u662f AI \u9886\u57df\u7684\u4e00\u573a\u9769\u547d\uff0c\u5f25\u8865\u4e86\u6f5c\u529b\u548c\u5b9e\u9645\u5e94\u7528\u4e4b\u95f4\u7684\u9e3f\u6c9f\u3002\u5b83\u5c06 AI \u7684\u529b\u91cf\u5e26\u5230\u6bcf\u4e00\u4e2a\u5f00\u53d1\u8005\u624b\u4e2d\uff0c\u63a8\u52a8\u4e86\u5404\u79cd\u5e94\u7528\u4e2d\u7684 AI \u9a71\u52a8\u521b\u65b0\u3002"),(0,a.kt)("p",null,"\u9009\u62e9 Flappy\uff0c\u6210\u4e3a\u8fd9\u573a\u9769\u547d\u7684\u4e00\u90e8\u5206\uff0c\u5145\u5206\u5229\u7528 AI \u7684\u6f5c\u529b\uff0c\u548c\u6211\u4eec\u4e00\u8d77\u5851\u9020 AI \u7684\u672a\u6765\u3002"),(0,a.kt)("h2",{id:"\u6838\u5fc3\u7ec4\u4ef6"},"\u6838\u5fc3\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"agent-\u51fd\u6570"},"Agent \u51fd\u6570"),(0,a.kt)("p",null,"\u5728 Flappy \u7684\u751f\u6001\u7cfb\u7edf\u4e2d\uff0cAgent \u4f5c\u4e3a LLM \u7684\u591a\u529f\u80fd\u901a\u9053\uff0c\u6267\u884c\u5404\u79cd\u4efb\u52a1\uff0c\u5982\u7ed3\u6784\u5316\u6570\u636e\u3001\u8c03\u7528\u5916\u90e8 API\uff0c\u6216\u6839\u636e\u9700\u8981\u5bf9 LLM \u751f\u6210\u7684 Python \u4ee3\u7801\u8fdb\u884c\u6c99\u7bb1\u5316\u3002\u8fd9\u4e2a\u8bbe\u8ba1\u7406\u5ff5\u6ee1\u8db3\u4e86\u5404\u4e2a\u884c\u4e1a\u5bf9\u57fa\u4e8e LLM \u7684 AI \u5e94\u7528\u7684\u65e5\u76ca\u589e\u957f\u7684\u9700\u6c42\u3002"),(0,a.kt)("p",null,"Flappy \u7684 Agent \u51fd\u6570\u5efa\u7acb\u5728\u4e24\u79cd\u57fa\u7840\u7c7b\u578b\u4e4b\u4e0a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"InvokeFunction"),"\uff1a\u8fd9\u4e2a\u51fd\u6570\u5141\u8bb8 Agents \u4e0e\u73af\u5883\u4ea4\u4e92\u3002\u5b83\u7531\u8f93\u5165\u548c\u8f93\u51fa\u53c2\u6570\u5b9a\u4e49\uff0c\u4fbf\u4e8e\u4e0e LLM \u9ad8\u6548\u4ea4\u4e92\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SynthesizedFunction"),"\uff1a\u8fd9\u4e2a\u51fd\u6570\u7531 LLM \u5904\u7406\uff0c\u53ea\u9700\u8981\u5b9a\u4e49\u5176\u63cf\u8ff0\u548c\u8f93\u5165\u8f93\u51fa\u7684\u7ed3\u6784\u3002")),(0,a.kt)("h4",{id:"\u51fd\u6570\u5b9e\u73b0\u7ec6\u8282flappy-\u91c7\u7528\u72ec\u7279\u7684\u5b9e\u73b0\u673a\u5236\u6765\u589e\u5f3a\u8fd9\u4e9b\u51fd\u6570"},"\u51fd\u6570\u5b9e\u73b0\u7ec6\u8282Flappy \u91c7\u7528\u72ec\u7279\u7684\u5b9e\u73b0\u673a\u5236\u6765\u589e\u5f3a\u8fd9\u4e9b\u51fd\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u72ec\u7279\u7684 JSON Schema \u96c6\u6210"),"\uff1a\u7528\u6237\u53ef\u4ee5\u5728\u4ed6\u4eec\u504f\u597d\u7684\u7f16\u7a0b\u8bed\u8a00\u4e2d\u5b9a\u4e49\u62bd\u8c61\u7c7b\uff0cFlappy \u7136\u540e\u5c06\u5176\u8f6c\u6362\u4e3a JSON Schema \u6a21\u5f0f\u3002\u8fd9\u4e2a\u7279\u6027\u63d0\u9ad8\u4e86\u673a\u5668\u7684\u53ef\u8bfb\u6027\u548c\u4e92\u64cd\u4f5c\u6027\uff0c\u7ba1\u7406\u4e86 LLM \u7684\u8f93\u5165\u548c\u8f93\u51fa\uff0c\u63d0\u4f9b\u4e86\u53d7\u63a7\u7684\u3001\u4e00\u81f4\u7684\u3001\u53ef\u88ab\u673a\u5668\u8bfb\u53d6\u7684\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"AST \u89e3\u6790"),"\uff1aFlappy \u5bf9 LLM \u7684\u8f93\u51fa\u8fdb\u884c\u62bd\u8c61\u8bed\u6cd5\u6811\uff08AST\uff09\u89e3\u6790\uff0c\u4ee5\u786e\u4fdd\u751f\u6210\u7684 JSON \u6570\u636e\u4e25\u683c\u9075\u5b88\u5b9a\u4e49\u7684 JSON Schema \u6a21\u5f0f\u3002")),(0,a.kt)("h3",{id:"\u4ee3\u7801\u89e3\u91ca\u5668"},"\u4ee3\u7801\u89e3\u91ca\u5668"),(0,a.kt)("p",null,"Flappy \u7684\u4ee3\u7801\u89e3\u91ca\u5668\u4f5c\u4e3a\u4e00\u4e2a\u5b89\u5168\u7684\u73af\u5883\uff0c\u6267\u884c\u7531 LLM \u751f\u6210\u7684 Python \u6216 TypeScript \u4ee3\u7801\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6c99\u7bb1\u5316\u7684\u5b89\u5168\u7279\u6027\uff0c\u51cf\u5c11\u4e86\u8fd0\u884c\u65f6\u9519\u8bef\u548c\u6f5c\u5728\u7684\u5b89\u5168\u6f0f\u6d1e\uff0c\u4f7f\u5176\u9002\u5408\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u90e8\u7f72\u3002"),(0,a.kt)("h3",{id:"llm-\u62bd\u8c61\u5c42"},"LLM \u62bd\u8c61\u5c42"),(0,a.kt)("p",null,"\u4e3a\u4e86\u589e\u5f3a\u5e94\u7528\u5f00\u53d1\u7684\u7075\u6d3b\u6027\uff0cFlappy \u4e3a\u4e0d\u540c\u7684 LLM \u63d0\u4f9b\u4e86\u4e00\u4e2a\u62bd\u8c61\u5c42\u3002\u8fd9\u4e2a\u7279\u6027\u5141\u8bb8\u7528\u6237\u8f7b\u677e\u5730\u5728\u4e0d\u540c\u7684 LLM \u4e4b\u95f4\u5207\u6362\uff0c\u5e76\u6307\u5b9a\u5907\u7528\u7684 LLM\uff0c\u4ee5\u786e\u4fdd\u5e94\u7528\u7684\u7a33\u5b9a\u6027\u3002"),(0,a.kt)("p",null,"Flappy \u8ba9\u5f00\u53d1\u8005\u80fd\u4ee5\u8bed\u8a00\u4e0d\u53ef\u77e5\u7684\u65b9\u5f0f\u6784\u5efa\u57fa\u4e8e LLM \u7684\u5e94\u7528\u3002\u4ece\u4eca\u5929\u5f00\u59cb\u60a8\u7684 Flappy \u4e4b\u65c5\uff0c\u7528\u60a8\u504f\u597d\u7684\u7f16\u7a0b\u8bed\u8a00\u91ca\u653e AI \u7684\u5de8\u5927\u6f5c\u529b\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u7684-llm"},"\u652f\u6301\u7684 LLM"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenAI ChatGPT & GPT-4"),(0,a.kt)("li",{parentName:"ul"},"\u767e\u5ddd-53B"),(0,a.kt)("li",{parentName:"ul"},"HuggingFace Transformers (Llama, mistral, etc.) ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"Google PaLM2 ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"\u767e\u5ea6 ERNIE ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"iFly XingHuo ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"MiniMax ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa"))),(0,a.kt)("h2",{id:"\u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00"},"\u652f\u6301\u7684\u7f16\u7a0b\u8bed\u8a00"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node.js (JavaScript/TypeScript)"),(0,a.kt)("li",{parentName:"ul"},"Kotlin & Java"),(0,a.kt)("li",{parentName:"ul"},"C# (.NET Core)"),(0,a.kt)("li",{parentName:"ul"},"Go ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"PHP ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"Ruby ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa")),(0,a.kt)("li",{parentName:"ul"},"Python ",(0,a.kt)("inlineCode",{parentName:"li"},"\u5373\u5c06\u63a8\u51fa"))))}m.isMDXComponent=!0}}]);