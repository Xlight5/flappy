"use strict";(self.webpackChunk_pleisto_flappy_docs=self.webpackChunk_pleisto_flappy_docs||[]).push([[699],{2599:(e,n,t)=>{t.d(n,{Z:()=>r});t(7378);var a=t(7140);const i={tabItem:"tabItem_wHwb"};var s=t(4246);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(7378),i=t(7140),s=t(9169),r=t(3620),l=t(9749),o=t(8981),c=t(56),d=t(8796);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=p(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=g({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),y=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{y&&o(y)}),[y]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(362);const y={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=t(4246);function v(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==a&&(c(n),r(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function x(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function j(e){const n=(0,m.Z)();return(0,b.jsx)(x,{...e,children:u(e.children)},String(n))}},7829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(4246),i=t(1670),s=t(8447),r=t(2599);const l={sidebar_position:2},o="Quick Start",c={id:"quick-start",title:"Quick Start",description:"\u26a0\ufe0f This project is still under development. We're working hard to release the first version of Flappy as soon as possible. Stay tuned! Documentation and code examples will be available soon.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Synthesized Function",permalink:"/docs/sythesized-function"}},d={},u=[{value:"Installation",id:"installation",level:2},{value:"Create LLM Adapter",id:"create-llm-adapter",level:2},{value:"Define your agent",id:"define-your-agent",level:2},{value:"Key Concepts",id:"key-concepts",level:3},{value:"Functions",id:"functions",level:4},{value:"Code Interpreter",id:"code-interpreter",level:4},{value:"Call your agent",id:"call-your-agent",level:2},{value:"Create and execute a action plan",id:"create-and-execute-a-action-plan",level:3},{value:"Call synthesized function directly",id:"call-synthesized-function-directly",level:3},{value:"Call Code Interpreter",id:"call-code-interpreter",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"\u26a0\ufe0f This project is still under development. We're working hard to release the first version of Flappy as soon as possible. Stay tuned! Documentation and code examples will be available soon."})}),"\n",(0,a.jsx)(n.p,{children:"Flappy is a programming language agnostic sdk for building LLM based agents/applications. Please specify the language you are using to get started."}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs",label:"NodeJS (TypeScript)",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install @plesito/node-flappy@next\n# or yarn add @pleisto/node-flappy@next\n"})})}),(0,a.jsxs)(r.Z,{value:"java",label:"Java",default:!0,children:[(0,a.jsx)(n.p,{children:"Plugin"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<build>\n  <extensions>\n    <extension>\n      <groupId>kr.motd.maven</groupId>\n      <artifactId>os-maven-plugin</artifactId>\n      <version>1.7.0</version>\n    </extension>\n  </extensions>\n</build>\n"})}),(0,a.jsx)(n.p,{children:"Dependency"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>com.pleisto</groupId>\n    <artifactId>flappy</artifactId>\n    <version>0.0.8</version>\n</dependency>\n<dependency>\n    <groupId>com.pleisto</groupId>\n    <artifactId>flappy-java-bindings</artifactId>\n    <version>0.0.8</version>\n</dependency>\n<dependency>\n    <groupId>com.pleisto</groupId>\n    <artifactId>flappy-java-bindings</artifactId>\n    <version>0.0.8</version>\n    <classifier>${os.detected.classifier}</classifier>\n</dependency>\n"})})]}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'// plugins\nid("com.google.osdetector") version "1.7.3"\n\n// dependencies\nimplementation("com.pleisto:flappy:0.0.8")\nimplementation("com.pleisto:flappy-java-bindings:0.0.8")\nimplementation("com.pleisto:flappy-java-bindings:0.0.8:${osdetector.classifier}")\n'})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'  <PackageReference Include="Pleisto.Flappy" Version="0.0.0.4-alpha" />\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"create-llm-adapter",children:"Create LLM Adapter"}),"\n",(0,a.jsxs)(n.p,{children:["Flappy supports multiple LLM implementations, such as OpenAI ChatGPT and hugingface transformers. You can also create your own LLM adapter by implementing the ",(0,a.jsx)(n.code,{children:"LLMBase"})," interface."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs-chatgpt",label:"NodeJS (TypeScript) with ChatGPT",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// you need to manually install `openai` package.\nimport { env } from 'node:process'\nimport OpenAI from 'openai'\nimport { ChatGPT } from '@pleisto/node-flappy'\n\nconst chatGpt = new ChatGPT(\n  new OpenAI({\n    apiKey: env.OPENAI_API_KEY!,\n    baseURL: env.OPENAI_API_BASE!\n  }),\n  'gpt-3.5-turbo'\n)\n"})})}),(0,a.jsx)(r.Z,{value:"nodejs-baichuan",label:"NodeJS (TypeScript) with Baichuan-53B API",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { env } from 'node:process'\nimport { Baichuan } from '@pleisto/node-flappy'\n\nconst chatGpt = new Baichuan(\n {\n  baichuan_api_key: env.BAICHUAN_API_KEY!,\n  baichuan_secret_key: env.BAICHUAN_SECRET_KEY!,\n }\n)\n"})})}),(0,a.jsx)(r.Z,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'    Dotenv dotenv = Dotenv.load();\n    ChatGPT llm = new ChatGPT("gpt-3.5-turbo", new ChatGPT.ChatGPTConfig(dotenv.get("OPENAI_TOKEN"), dotenv.get("OPENAI_API_BASE")));\n'})})}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'  val dotenv = dotenv()\n\n  val chatGPT = ChatGPT(\n    model = "gpt-3.5-turbo",\n    chatGPTConfig = ChatGPT.ChatGPTConfig(token = dotenv["OPENAI_TOKEN"], host = dotenv["OPENAI_API_BASE"])\n  )\n'})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'  var gpt35 = new ChatGPT(new OpenAIAPI\n  {\n    Auth = new APIAuthentication(apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")),\n    ApiUrlFormat = "https://openai.api2d.net/{0}/{1}",\n    ApiVersion = "v1",\n  }, "gpt-3.5-turbo", null, null);\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"define-your-agent",children:"Define your agent"}),"\n",(0,a.jsx)(n.p,{children:"In artificial intelligence, an agent is a computer program or system that is designed to perceive its environment, make decisions and take actions to achieve a specific goal or set of goals. The agent operates autonomously, meaning it is not directly controlled by a human operator."}),"\n",(0,a.jsx)(n.p,{children:"In Flappy's ecosystem, the agent operates as a versatile conduit for the LLM. It's designed to juggle a variety of tasks - structuring data, invoking external APIs, or sandboxing LLM-generated Python code - in any combination as needed. It's a flexible tool, not a rigid cog, adapting to your needs for a more efficient and secure LLM interaction."}),"\n",(0,a.jsx)(n.h3,{id:"key-concepts",children:"Key Concepts"}),"\n",(0,a.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,a.jsxs)(n.p,{children:["Functions act as the foundation for your agent in the Flappy framework. In this documentation, we will introduce ",(0,a.jsx)(n.code,{children:"InvokeFunction"})," and ",(0,a.jsx)(n.code,{children:"SythesizedFunction"}),", two essential function types you can define and utilize."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"InvokeFunction"})," enables agents to interact with the environment, similar to Tools in Langchain's Agents. It's defined by input and output parameters, whose structures must be clear for the Language Learning Model (LLM) to interact efficiently. Understanding these parameters and the function's role in interacting with user requests and the world is essential. For cost-effective task planning."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SythesizedFunction"})," is a type of function played by the LLM. You only need to define its description and the structure of its inputs and outputs. The LLM will then attempt to process inputs in the defined format and produce outputs in the expected format. This feature makes SythesizedFunction particularly useful in scenarios where structured data extraction tasks are performed by the LLM or when the LLM is expected to output structured data."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"code-interpreter",children:"Code Interpreter"}),"\n",(0,a.jsx)(n.p,{children:"The Code Interpreter in Flappy serves as an equivalent replacement for ChatGPT Code Interpreter, enabling the language model to fulfill complex user requirements through Python code. What sets Flappy's Code Interpreter apart from other open-source implementations in the market is its sandboxed safety feature. This ensures that it meets the stringent security needs necessary for deployment in a production environment."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs",label:"NodeJS (TypeScript) with ChatGPT",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { createFlappyAgent,  createInvokeFunction,  createSynthesizedFunction, createCodeInterpreter,  z } from '@pleisto/node-flappy'\n\nenum Verdict {\n  Innocent = 'Innocent',\n  Guilty = 'Guilty',\n  Unknown = 'Unknown'\n}\n\nconst MOCK_LAWSUIT_DATA =\n  \"As Alex Jones continues telling his Infowars audience about his money problems and pleads for them to buy his products, his own documents show life is not all that bad \u2014 his net worth is around $14 million and his personal spending topped $93,000 in July alone, including thousands of dollars on meals and entertainment. The conspiracy theorist and his lawyers file monthly financial reports in his personal bankruptcy case, and the latest one has struck a nerve with the families of victims of Sandy Hook Elementary School shooting. They're still seeking the $1.5 billion they won last year in lawsuits against Jones and his media company for repeatedly calling the 2012 massacre a hoax on his shows. \u201cIt is disturbing that Alex Jones continues to spend money on excessive household expenditures and his extravagant lifestyle when that money rightfully belongs to the families he spent years tormenting,\u201d said Christopher Mattei, a Connecticut lawyer for the families. \u201cThe families are increasingly concerned and will continue to contest these matters in court.\u201d In an Aug. 29 court filing, lawyers for the families said that if Jones doesn\u2019t reduce his personal expenses to a \u201creasonable\u201d level, they will ask the bankruptcy judge to bar him from \u201cfurther waste of estate assets,\u201d appoint a trustee to oversee his spending, or dismiss the bankruptcy case. On his Infowars show Tuesday, Jones said he\u2019s not doing anything wrong.\"\n\nconst agent = createFlappyAgent({\n  llm: chatGpt,\n  // Define your agent's features.\n  features: [\n    createCodeInterpreter(),\n    createSynthesizedFunction({\n      name: 'getMeta',\n      description: 'Extract meta data from a lawsuit full text.',\n      args: z.object({\n        lawsuit: z.string().describe('Lawsuit full text.')\n      }),\n      returnType: z.object({\n        verdict: z.nativeEnum(Verdict),\n        plaintiff: z.string(),\n        defendant: z.string(),\n        judgeOptions: z.array(z.string())\n      })\n    }),\n    createInvokeFunction({\n      name: 'getLatestLawsuitsByPlaintiff',\n      description: 'Get the latest lawsuits by plaintiff.',\n      args: z.object({\n        plaintiff: z.string(),\n        arg1: z.boolean().describe('For demo purpose. set to False'),\n        arg2: z.array(z.string()).describe('ignore it').optional()\n      }),\n      returnType: z.string(),\n      resolve: async args => {\n        // Do something\n        // e.g. query SQL database\n        console.debug('getLatestLawsuitsByPlaintiff called', args)\n        return MOCK_LAWSUIT_DATA\n      }\n    })\n  ]\n})\n"})})}),(0,a.jsx)(r.Z,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class Law {\n  public static final String LAW_EXECUTE_PLAN_PROMPT = "Find the latest case with the plaintiff being families of victims and return its metadata.";\n  static final String MOCK_LAWSUIT_DATA =\n    "As Alex Jones continues telling his Infowars audience about his money problems and pleads for them to buy his products, his own documents show life is not all that bad \u2014 his net worth is around $14 million and his personal spending topped $93,000 in July alone, including thousands of dollars on meals and entertainment. The conspiracy theorist and his lawyers file monthly financial reports in his personal bankruptcy case, and the latest one has struck a nerve with the families of victims of Sandy Hook Elementary School shooting. They\'re still seeking the $1.5 billion they won last year in lawsuits against Jones and his media company for repeatedly calling the 2012 massacre a hoax on his shows. \u201cIt is disturbing that Alex Jones continues to spend money on excessive household expenditures and his extravagant lifestyle when that money rightfully belongs to the families he spent years tormenting,\u201d said Christopher Mattei, a Connecticut lawyer for the families. \u201cThe families are increasingly concerned and will continue to contest these matters in court.\u201d In an Aug. 29 court filing, lawyers for the families said that if Jones doesn\u2019t reduce his personal expenses to a \u201creasonable\u201d level, they will ask the bankruptcy judge to bar him from \u201cfurther waste of estate assets,\u201d appoint a trustee to oversee his spending, or dismiss the bankruptcy case. On his Infowars show Tuesday, Jones said he\u2019s not doing anything wrong.";\n  public static FlappyFeatureBase<?, ?> lawGetLatestLawsuitsByPlaintiff = new FlappyInvokeFunction(\n    "getLatestLawsuitsByPlaintiff",\n    "Get the latest lawsuits by plaintiff.",\n    GetLatestLawsuitsArguments.class,\n    String.class,\n    (a, agent, $completion) -> MOCK_LAWSUIT_DATA\n  );\n  public static FlappyFeatureBase<?, ?> lawGetMeta = new FlappySynthesizedFunction(\n    "getMeta",\n    "Extract meta data from a lawsuit full text.",\n    LawMetaArguments.class,\n    LawMetaReturn.class\n  );\n\n  public static void main(String[] args) throws ExecutionException, InterruptedException {\n    Dotenv dotenv = Dotenv.load();\n    ChatGPT llm = new ChatGPT(new ChatGPT.ChatGPTConfig(null, dotenv.get("OPENAI_TOKEN"), dotenv.get("OPENAI_API_BASE")));\n\n    FlappyBaseAgent agent = new FlappyBaseAgent(\n      llm, Arrays.asList(lawGetMeta, lawGetLatestLawsuitsByPlaintiff)\n    );\n  }\n\n  public enum Verdict {\n    Innocent, Guilty, Unknown\n  }\n\n  public static class LawMetaReturn {\n    @FlappyField\n    Verdict verdict;\n\n    @FlappyField\n    String plaintiff;\n\n    @FlappyField\n    String defendant;\n\n    @FlappyField\n    List<String> judgeOptions;\n\n    public Verdict getVerdict() {\n      return verdict;\n    }\n\n    public void setVerdict(Verdict verdict) {\n      this.verdict = verdict;\n    }\n\n    public String getPlaintiff() {\n      return plaintiff;\n    }\n\n    public void setPlaintiff(String plaintiff) {\n      this.plaintiff = plaintiff;\n    }\n\n    public String getDefendant() {\n      return defendant;\n    }\n\n    public void setDefendant(String defendant) {\n      this.defendant = defendant;\n    }\n\n    public List<String> getJudgeOptions() {\n      return judgeOptions;\n    }\n\n    public void setJudgeOptions(List<String> judgeOptions) {\n      this.judgeOptions = judgeOptions;\n    }\n  }\n\n  static class GetLatestLawsuitsArguments {\n    @FlappyField\n    String plaintiff;\n\n    @FlappyField(description = "For demo purpose. set to False")\n    Boolean arg1;\n\n    @FlappyField(description = "ignore it", optional = true)\n    List<String> arg2 = null;\n\n    public String getPlaintiff() {\n      return plaintiff;\n    }\n\n    public void setPlaintiff(String plaintiff) {\n      this.plaintiff = plaintiff;\n    }\n\n    public Boolean getArg1() {\n      return arg1;\n    }\n\n    public void setArg1(Boolean arg1) {\n      this.arg1 = arg1;\n    }\n\n    public List<String> getArg2() {\n      return arg2;\n    }\n\n    public void setArg2(List<String> arg2) {\n      this.arg2 = arg2;\n    }\n  }\n\n  static class LawMetaArguments {\n    @FlappyField(description = "Lawsuit full text.")\n    String lawsuit;\n\n    public String getLawsuit() {\n      return lawsuit;\n    }\n\n    public void setLawsuit(String lawsuit) {\n      this.lawsuit = lawsuit;\n    }\n  }\n}\n'})})}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'import flappy.FlappyBaseAgent\nimport flappy.annotations.FlappyField\nimport flappy.features.FlappyInvokeFunction\nimport flappy.features.FlappySynthesizedFunction\nimport flappy.llms.ChatGPT\nimport io.github.cdimascio.dotenv.dotenv\n\nenum class Verdict {\n  Innocent, Guilty, Unknown\n}\n\nconst val MOCK_LAWSUIT_DATA =\n  """As Alex Jones continues telling his Infowars audience about his money problems and pleads for them to buy his products, his own documents show life is not all that bad \u2014 his net worth is around $14 million and his personal spending topped $93,000 in July alone, including thousands of dollars on meals and entertainment. The conspiracy theorist and his lawyers file monthly financial reports in his personal bankruptcy case, and the latest one has struck a nerve with the families of victims of Sandy Hook Elementary School shooting. They\'re still seeking the $1.5 billion they won last year in lawsuits against Jones and his media company for repeatedly calling the 2012 massacre a hoax on his shows. \u201cIt is disturbing that Alex Jones continues to spend money on excessive household expenditures and his extravagant lifestyle when that money rightfully belongs to the families he spent years tormenting,\u201d said Christopher Mattei, a Connecticut lawyer for the families. \u201cThe families are increasingly concerned and will continue to contest these matters in court.\u201d In an Aug. 29 court filing, lawyers for the families said that if Jones doesn\u2019t reduce his personal expenses to a \u201creasonable\u201d level, they will ask the bankruptcy judge to bar him from \u201cfurther waste of estate assets,\u201d appoint a trustee to oversee his spending, or dismiss the bankruptcy case. On his Infowars show Tuesday, Jones said he\u2019s not doing anything wrong."""\n\nclass LawMetaArguments(\n  @FlappyField(description = "Lawsuit full text.")\n  val lawsuit: String\n)\n\nclass LawMetaReturn(\n  @FlappyField\n  val verdict: Verdict,\n\n  @FlappyField\n  val plaintiff: String,\n\n  @FlappyField\n  val defendant: String,\n\n  @FlappyField\n  val judgeOptions: List<String>\n)\n\nval lawGetMeta = FlappySynthesizedFunction(\n  name = "getMeta",\n  description = "Extract meta data from a lawsuit full text.",\n  args = LawMetaArguments::class.java,\n  returnType = LawMetaReturn::class.java,\n)\n\nclass GetLatestLawsuitsArguments(\n  @FlappyField\n  val plaintiff: String,\n\n  @FlappyField(description = "For demo purpose. set to False")\n  val arg1: Boolean,\n\n  @FlappyField(description = "ignore it", optional = true)\n  val arg2: List<String>?\n)\n\n\nval lawGetLatestLawsuitsByPlaintiff = FlappyInvokeFunction(\n  name = "getLatestLawsuitsByPlaintiff",\n  description = "Get the latest lawsuits by plaintiff.",\n  args = GetLatestLawsuitsArguments::class.java,\n  returnType = String::class.java,\n  invoker = { _, _ -> MOCK_LAWSUIT_DATA }\n)\n\nconst val LAW_EXECUTE_PLAN_PROMPT =\n  "Find the latest case with the plaintiff being families of victims and return its metadata."\n\n\nsuspend fun main(args: Array<String>) {\n  val dotenv = dotenv()\n\n  val chatGPT = ChatGPT(\n    ChatGPT.ChatGPTConfig(token = dotenv["OPENAI_TOKEN"], host = dotenv["OPENAI_API_BASE"])\n  )\n\n  val agent = FlappyBaseAgent(\n    maxRetry = 2,\n    inferenceLLM = chatGPT,\n    features = listOf(lawGetMeta, lawGetLatestLawsuitsByPlaintiff)\n  )\n}\n'})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'  internal class LawCase\n  {\n    public static void Main()\n    {\n      var gpt35 = new ChatGPT(new OpenAIAPI\n      {\n        Auth = new APIAuthentication(apiKey: Environment.GetEnvironmentVariable("OPENAI_API_KEY")),\n        ApiUrlFormat = "https://openai.api2d.net/{0}/{1}",\n        ApiVersion = "v1",\n      }, "gpt-3.5-turbo", null, Logger.CreateLogger<ChatGPT>());\n\n      var lawAgent = new FlappyAgent(new FlappyAgentConfig\n      {\n        LLM = gpt35,\n        Features = new IFlappyFeature[]\n           {\n               new SynthesizedFeature<getMeta_Args,getMeta_Return,FlappyFeatureOption>(new SynthesizedFeatureDefinition<getMeta_Args,getMeta_Return>\n               {\n                   Name = "getMeta",\n                   Description = "Extract meta data from a lawsuit full text.",\n                   Args = new getMeta_Args(),\n                   ReturnType = new getMeta_Return()\n               }),\n               new InvokeFeature<getLatestLawsuits_Args,getMeta_Args,FlappyFeatureOption>(new InvokeFeatureDefinition<getLatestLawsuits_Args, getMeta_Args>\n               {\n                   Name = "getLatestLawsuitsByPlaintiff",\n                   Description= "Get the latest lawsuits by plaintiff.",\n                   Args = new getLatestLawsuits_Args(),\n                   ReturnType = new getMeta_Args(),\n                   Resolve = (args) =>\n                   {\n                      Console.WriteLine($"====================== getLatestLawsuitsByPlaintiff call =========================");\n                      Console.WriteLine($"getLatestLawsuitsByPlaintiff called");\n                      Console.WriteLine(JObject.FromObject(args).ToString());\n                      Console.WriteLine($"====================== getLatestLawsuitsByPlaintiff call =========================");\n                      return Task.FromResult(new getMeta_Args\n                      {\n                        lawsuit =MOCK_LAWSUIT_DATA\n                      });\n                   }\n               })\n           },\n      }, null, null, Logger.CreateLogger<FlappyAgent>());\n    }\n\n    private const string LAW_EXECUTE_PLAN_PROMPT = "Find the resume of a frontend engineer and return their metadata.";\n\n    private const string MOCK_LAWSUIT_DATA =\n        "As Alex Jones continues telling his Infowars audience about his money problems and pleads for them to buy his products, his own documents show life is not all that bad \u2014 his net worth is around $14 million and his personal spending topped $93,000 in July alone, including thousands of dollars on meals and entertainment. The conspiracy theorist and his lawyers file monthly financial reports in his personal bankruptcy case, and the latest one has struck a nerve with the families of victims of Sandy Hook Elementary School shooting. They\'re still seeking the $1.5 billion they won last year in lawsuits against Jones and his media company for repeatedly calling the 2012 massacre a hoax on his shows. \u201cIt is disturbing that Alex Jones continues to spend money on excessive household expenditures and his extravagant lifestyle when that money rightfully belongs to the families he spent years tormenting,\u201d said Christopher Mattei, a Connecticut lawyer for the families. \u201cThe families are increasingly concerned and will continue to contest these matters in court.\u201d In an Aug. 29 court filing, lawyers for the families said that if Jones doesn\u2019t reduce his personal expenses to a \u201creasonable\u201d level, they will ask the bankruptcy judge to bar him from \u201cfurther waste of estate assets,\u201d appoint a trustee to oversee his spending, or dismiss the bankruptcy case. On his Infowars show Tuesday, Jones said he\u2019s not doing anything wrong.";\n  }\n\n  internal class getLatestLawsuits_Args\n  {\n    public string plantiff { get; set; }\n\n    [Description("For demo purpose. set to False")]\n    public bool arg1 { get; set; }\n\n    [Description("ignore it")]\n    public bool arg2 { get; set; }\n\n    public override string ToString()\n    {\n      return JObject.FromObject(this).ToString();\n    }\n  }\n\n  internal class getMeta_Args\n  {\n    [Description("Lawsuit full text.")]\n    public string lawsuit { get; set; }\n\n    public override string ToString()\n    {\n      return JObject.FromObject(this).ToString();\n    }\n  }\n\n  [JsonObject(ItemRequired = Required.Always)]\n  public class getMeta_Return\n  {\n    [JsonConverter(typeof(StringEnumConverter))]\n    [DefaultValue(Verdict.Unknow)]\n    public Verdict verdict { get; set; } = Verdict.Unknow;\n\n    public string plaintiff { get; set; } = string.Empty;\n\n    public string defendant { get; set; } = string.Empty;\n\n    public string[] judgeOptions { get; set; } = Array.Empty<string>();\n\n    public override string ToString()\n    {\n      return JObject.FromObject(this).ToString();\n    }\n  }\n\n  public enum Verdict\n  {\n    Innocent,\n    Guilty,\n    Unknow\n  }\n'})})})]}),"\n",(0,a.jsx)(n.h2,{id:"call-your-agent",children:"Call your agent"}),"\n",(0,a.jsx)(n.h3,{id:"create-and-execute-a-action-plan",children:"Create and execute a action plan"}),"\n",(0,a.jsx)(n.p,{children:"Augmented Language Models (ALMs) blend the reasoning capabilities of Large Language Models (LLMs) with tools that allow for knowledge retrieval and action execution. Existing ALM systems trigger LLM thought processes while pulling observations from these tools in an interleaved fashion. Specifically, an LLM reasons to call an external tool, gets halted to fetch the tool's response, and then decides the next action based on all preceding response tokens. Such a paradigm, though straightforward and easy to implement, often leads to huge computation complexity from redundant prompts and repeated execution."}),"\n",(0,a.jsxs)(n.p,{children:["Flappy uses ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2305.18323",children:"ReWOO"})," instead of ",(0,a.jsx)(n.a,{href:"https://arxiv.org/abs/2210.03629",children:"ReAct"})," to minimize LLM token output, thereby reducing costs. Building on this, the agent is equipped to autonomously devise a plan based on the user's prompt. This involves determining the sequence of functions that need to be invoked to fulfill the given prompt. The execution then proceeds according to this formulated plan, further optimizing the efficiency of our system."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs",label:"NodeJS (TypeScript) with ChatGPT",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"agent.executePlan('Find the latest case with the plaintiff being families of victims and return its metadata.')\n"})})}),(0,a.jsx)(r.Z,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Future<LawMetaReturn> future = agent.executePlanAsync(LAW_EXECUTE_PLAN_PROMPT);\n"})})}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"agent.use {\n  it.executePlan<LawMetaReturn>(LAW_EXECUTE_PLAN_PROMPT)\n}\n"})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"var data = lawAgent.ExecutePlan(LAW_EXECUTE_PLAN_PROMPT).GetAwaiter().GetResult();\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"call-synthesized-function-directly",children:"Call synthesized function directly"}),"\n",(0,a.jsx)(n.p,{children:"You can also call synthesized function directly without executing a action plan."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs",label:"NodeJS (TypeScript) with ChatGPT",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"agent.callFeature('getMeta', {lawsuit: MOCK_LAWSUIT_DATA})\n"})})}),(0,a.jsx)(r.Z,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Future<String> future = agent.callFeatureAsync("getMeta", LAW_EXECUTE_PLAN_PROMPT);\n'})})}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'agent.use {\n  val future = it.callFeature<String>("getMeta", LAW_EXECUTE_PLAN_PROMPT)\n}\n'})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:"var result = await agent.CallFeature<TestObject>(callName, LAW_EXECUTE_PLAN_PROMPT);\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"call-code-interpreter",children:"Call Code Interpreter"}),"\n",(0,a.jsx)(n.p,{children:"Code Interpreter currently needs to be called directly. We are working on a better way to integrate it with the agent."}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"nodejs",label:"NodeJS (TypeScript) with ChatGPT",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"agent.executePlan(\n  'There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs  and 150 heads in the barn?'\n)\n\n// or call feature directly:\n\nagent.callFeature('pythonSandbox', {\n  code: 'There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?'\n})\n"})})}),(0,a.jsx)(r.Z,{value:"java",label:"Java",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Future<String> future = agent.executePlanAsync("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?");\n'})})}),(0,a.jsx)(r.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'agent.use {\n  it.executePlan<String>("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?")\n}\n'})})}),(0,a.jsx)(r.Z,{value:"csharp",label:"C#",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-csharp",children:'var data = lawAgent.ExecutePlan("There are some rabbits and chickens in a barn. What is the number of chickens if there are 396 legs and 150 heads in the barn?").GetAwaiter().GetResult();\n'})})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(7378);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);