"use strict";(self.webpackChunk_pleisto_flappy_docs=self.webpackChunk_pleisto_flappy_docs||[]).push([[222],{2599:(e,n,t)=>{t.d(n,{Z:()=>i});t(7378);var r=t(7140);const a={tabItem:"tabItem_wHwb"};var s=t(4246);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(7378),a=t(7140),s=t(9169),i=t(3620),o=t(9749),l=t(8981),u=t(56),c=t(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=t(4246);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function I(e){const n=(0,g.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},8632:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(4246),a=t(1670),s=t(8447),i=t(2599);const o={},l="Code Interpreter",u={id:"code-interpreter",title:"Code Interpreter",description:"The Code Interpreter in Flappy serves as an equivalent replacement for ChatGPT Code Interpreter, enabling the language model to fulfill complex user requirements through Python code. What sets Flappy's Code Interpreter apart from other open-source implementations in the market is its sandboxed safety feature. This ensures that it meets the stringent security needs necessary for deployment in a production environment.",source:"@site/docs/code-interpreter.mdx",sourceDirName:".",slug:"/code-interpreter",permalink:"/zh-Hans/docs/code-interpreter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code-interpreter.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Invoke Function",permalink:"/zh-Hans/docs/invoke-function"},next:{title:"Examples",permalink:"/zh-Hans/docs/examples"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Security-First Design",id:"security-first-design",level:2},{value:"Usage",id:"usage",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"code-interpreter",children:"Code Interpreter"}),"\n",(0,r.jsxs)(n.p,{children:["The Code Interpreter in Flappy serves as an equivalent replacement for ",(0,r.jsx)(n.a,{href:"https://openai.com/blog/chatgpt-plugins#code-interpreter",children:"ChatGPT Code Interpreter"}),", enabling the language model to fulfill complex user requirements through Python code. What sets Flappy's Code Interpreter apart from other open-source implementations in the market is its sandboxed safety feature. This ensures that it meets the stringent security needs necessary for deployment in a production environment."]}),"\n",(0,r.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsxs)(n.p,{children:["Flappy's Code Interpreter is built with Rust, featuring a WebAssembly runtime environment that complies with the ",(0,r.jsx)(n.a,{href:"https://wasix.org/docs/api-reference",children:"WASIX specifications"}),". Unlike standard WebAssembly runtimes, this environment hosts a Python interpreter and supports nearly all POSIX interfaces, including socket, net, and filesystem IO operations. This means that even though the Python interpreter operates within a wasm sandbox, all functionalities remain fully intact."]}),"\n",(0,r.jsxs)(n.p,{children:["The current version of the Python interpreter used in this environment is ",(0,r.jsx)(n.code,{children:"Python 3.12"}),". All standard libraries (stdlib) work as expected. We are also in the process of adding support for the pip package manager, which will allow for further extension of capabilities."]}),"\n",(0,r.jsx)(n.h2,{id:"security-first-design",children:"Security-First Design"}),"\n",(0,r.jsx)(n.p,{children:'Our core design principle is "safety first". By default, access to the external network is off to ensure a secure environment. Similarly, environment variables are sandbox-isolated. However, if required, these settings can be overridden using custom configurations.'}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"nodejs",label:"NodeJS (TypeScript)",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createFlappyAgent, ChatGPT, createCodeInterpreter } from '@pleisto/node-flappy'\nimport OpenAI from 'openai'\n\nconst gpt35 = new ChatGPT(\n  new OpenAI({\n    apiKey: process.env.OPENAI_API_KEY!,\n    baseURL: process.env.OPENAI_API_BASE!\n  }),\n  'gpt-3.5-turbo'\n)\n\nconst agent = createFlappyAgent({\n  llm: gpt35,\n  features: [createCodeInterpreter({}, { enableNetwork: false })]\n})\n\nvoid agent.executePlan(\n  'There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs  and 150 heads in the barn?'\n)\n"})})}),(0,r.jsx)(i.Z,{value:"java",label:"Java",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'public class CodeInterpreter {\n\n  public static void main(String[] args) throws ExecutionException, InterruptedException {\n    Dotenv dotenv = Dotenv.load();\n    ChatGPT llm = new ChatGPT(new ChatGPT.ChatGPTConfig(null, dotenv.get("OPENAI_TOKEN"), dotenv.get("OPENAI_API_BASE")));\n\n    FlappyBaseAgent agent = new FlappyBaseAgent(\n      llm, Collections.singletonList(new FlappyCodeInterpreter())\n    );\n\n    Future<String> future = agent.executePlanAsync("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?");\n    String ret = future.get();\n  }\n}\n'})})}),(0,r.jsx)(i.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-kotlin",children:'  val dotenv = dotenv()\n  val chatGPT = ChatGPT(\n    ChatGPT.ChatGPTConfig(token = dotenv["OPENAI_TOKEN"], host = dotenv["OPENAI_API_BASE"])\n  )\n\n  val agent = FlappyBaseAgent(\n    maxRetry = 2,\n    inferenceLLM = chatGPT,\n    features = listOf(FlappyCodeInterpreter())\n  )\n\n  agent.use {\n    it.executePlan<String>("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?")\n  }\n'})})}),(0,r.jsx)(i.Z,{value:"csharp",label:"C#",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'var gpt35 = new ChatGPT(new OpenAIAPI\n{\n  Auth = new APIAuthentication(apiKey: OpenAIApiKey),\n  ApiUrlFormat = "https://openai.api2d.net/{0}/{1}",\n  ApiVersion = "v1",\n}, "gpt-3.5-turbo", null, Logger.CreateLogger<ChatGPT>());\n\nvar agent = new FlappyAgent(new FlappyAgentConfig\n{\n  LLM = gpt35,\n  Features = new IFlappyFeature[]\n   {\n     new CodeInterpreterFeature(null,new CodeInterpreterOptions\n     {\n        EnableNetwork=false,\n     })\n   }\n}, null, null, Logger.CreateLogger<FlappyAgent>());\nvar data = await agent.ExecutePlan("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?");\nConsole.WriteLine($"====================== Final Result =========================");\nConsole.WriteLine(data.ToString());\nConsole.WriteLine($"====================== Final Result Of Data =========================");\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(7378);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);