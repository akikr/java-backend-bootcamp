"use strict";(self.webpackChunkjavabrains_bootcamp=self.webpackChunkjavabrains_bootcamp||[]).push([[3931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,h=l["".concat(d,".").concat(m)]||l[m]||u[m]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3082:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={},o="Dependency Management",s={unversionedId:"java-backend-bootcamp/maven/dependency-management",id:"java-backend-bootcamp/maven/dependency-management",title:"Dependency Management",description:"One of the most powerful features of Maven is its ability to manage dependencies. Maven uses a central repository to store libraries and their dependencies, and allows developers to specify the dependencies that their project requires. Maven will then automatically download and manage these dependencies.",source:"@site/docs/java-backend-bootcamp/maven/dependency-management.md",sourceDirName:"java-backend-bootcamp/maven",slug:"/java-backend-bootcamp/maven/dependency-management",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/maven/dependency-management",draft:!1,editUrl:"https://github.com/koushikkothagal/java-backend-bootcamp/tree/main/website/docs/java-backend-bootcamp/maven/dependency-management.md",tags:[],version:"current",frontMatter:{},sidebar:"javaBackendBootcamp",previous:{title:"Project Object Model (POM)",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/maven/project-object-model"},next:{title:"How Maven versioning works",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/maven/versioning-convention"}},d={},p=[{value:"Example ranges",id:"example-ranges",level:3},{value:"Dependency scopes",id:"dependency-scopes",level:2},{value:"Scope use cases",id:"scope-use-cases",level:2}],c={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dependency-management"},"Dependency Management"),(0,r.kt)("p",null,"One of the most powerful features of Maven is its ability to manage dependencies. Maven uses a central repository to store libraries and their dependencies, and allows developers to specify the dependencies that their project requires. Maven will then automatically download and manage these dependencies."),(0,r.kt)("p",null,"To specify a dependency in a Maven project, developers need to add the dependency information to the POM file. This includes information about the groupId, artifactId, and version of the dependency."),(0,r.kt)("p",null,"Here's an example of specifying a dependency in the POM file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.fasterxml.jackson.core</groupId>\n  <artifactId>jackson-databind</artifactId>\n  <version>2.11.3</version>\n</dependency>\n")),(0,r.kt)("p",null,"Maven uses a process called ",(0,r.kt)("em",{parentName:"p"},"dependency resolution")," to determine which versions of the dependencies to use. When a project specifies a dependency, Maven will first look in the local repository to see if the dependency is already present. If the dependency is not present in the local repository, Maven will download the dependency from the remote repository."),(0,r.kt)("p",null,"Maven also supports the use of version ranges for dependencies. This is useful when a project depends on a library that is frequently updated. Instead of specifying a specific version of a library, developers can specify a version range."),(0,r.kt)("p",null,"Here's an example of specifying a version range for a dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.fasterxml.jackson.core</groupId>\n  <artifactId>jackson-databind</artifactId>\n  <version>[2.11.0,2.12.0)</version>\n</dependency>\n")),(0,r.kt)("p",null,"In this example, we are specifying that the project depends on version 2.11.0 or later, but less than 2.12.0 of the jackson-databind library."),(0,r.kt)("h3",{id:"example-ranges"},"Example ranges"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Range"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(,1.0]"),(0,r.kt)("td",{parentName:"tr",align:null},"x <= 1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0 (or a later version if 1.0 is not available)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[1.0]"),(0,r.kt)("td",{parentName:"tr",align:null},"Exactly 1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[1.2,1.3]"),(0,r.kt)("td",{parentName:"tr",align:null},"1.2 <= x <= 1.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[1.0,2.0)"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0 <= x < 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[1.5,)"),(0,r.kt)("td",{parentName:"tr",align:null},"x >= 1.5")))),(0,r.kt)("p",null,"When Maven resolves dependencies, it also considers the dependencies of the dependencies, these are known as transitive dependencies. Transitive dependencies are dependencies that are required by other dependencies in the project."),(0,r.kt)("p",null,"For example, if project A depends on library B, and library B depends on library C, then project A also depends on library C."),(0,r.kt)("p",null,"Maven will automatically download and manage transitive dependencies. However, this can lead to problems if a transitive dependency has a different version than the one that the project explicitly depends on. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Maven uses a technique known as ",(0,r.kt)("em",{parentName:"p"},"dependency mediation")," to figure out which version to use to resolve such conflicts. The way it works is by pulling the dependency that is closest to the project in the dependency tree (fewest transitive hops)")),(0,r.kt)("p",null,"To avoid these issues, Maven provides several ways to manage transitive dependencies, such as excluding transitive dependencies and using dependency management."),(0,r.kt)("p",null,"To exclude a transitive dependency, developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<exclusions>")," element in the POM file."),(0,r.kt)("p",null,"Here's an example of excluding a transitive dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.fasterxml.jackson.core</groupId>\n  <artifactId>jackson-databind</artifactId>\n  <version>2.11.3</version>\n  <exclusions>\n    <exclusion>\n      <groupId>com.fasterxml.jackson.core</groupId>\n      <artifactId>jackson-annotations</artifactId>\n    </exclusion>\n  </exclusions>\n</dependency>\n")),(0,r.kt)("p",null,"In this example, we are excluding the transitive dependency on the ",(0,r.kt)("inlineCode",{parentName:"p"},"jackson-annotations")," library, which is a dependency of the ",(0,r.kt)("inlineCode",{parentName:"p"},"jackson-databind")," library."),(0,r.kt)("p",null,"Another way to manage transitive dependencies is by using dependency management. Dependency management allows developers to specify the versions of dependencies that are used by the project's transitive dependencies. This can be done by specifying the dependencies in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<dependencyManagement>")," section of the POM file."),(0,r.kt)("p",null,"Here's an example of using dependency management:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencyManagement>\n  <dependencies>\n    <dependency>\n      <groupId>com.fasterxml.jackson.core</groupId>\n      <artifactId>jackson-annotations</artifactId>\n      <version>2.11.3</version>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,r.kt)("p",null,"In this example, we are specifying that the version of the jackson-annotations library that should be used by transitive dependencies is 2.11.3."),(0,r.kt)("h2",{id:"dependency-scopes"},"Dependency scopes"),(0,r.kt)("p",null,"Maven dependency scopes are used to define the level of visibility and accessibility of a dependency in a project. Maven has five built-in dependency scopes:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"compile"),": This is the default scope. Dependencies with this scope are available during the entire build process, including compilation, testing, and runtime. These dependencies are also transitive, meaning that they are passed down to dependent projects."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"provided"),": Dependencies with this scope are required for compilation and testing, but are not included in the final artifact. This scope is typically used for dependencies that are provided by the target environment, such as a servlet container or the JDK."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime"),": Dependencies with this scope are not required for compilation, but are needed at runtime. These dependencies are not transitive."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test"),": Dependencies with this scope are only available during the testing phase of the build process. These dependencies are not included in the final artifact."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"system"),": Dependencies with this scope are not available in any remote repository. Developers must specify the path to the local file system for these dependencies. This scope is rarely used."),(0,r.kt)("p",null,"Dependency scope is defined in the POM file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"<dependency>")," element, and can be specified using the scope attribute. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.example</groupId>\n  <artifactId>example-library</artifactId>\n  <version>1.0</version>\n  <scope>compile</scope>\n</dependency>\n")),(0,r.kt)("h2",{id:"scope-use-cases"},"Scope use cases"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"compile"),": This is the default scope and is used in most cases. A common use case for this scope is when a project uses a library that is required for both compilation and runtime. For example, including the Hibernate ORM library as a compile scope dependency to access the database in a project."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"provided"),": This scope is used when a dependency is required during the build process but is already provided by the runtime environment. A common use case for this scope is when a project uses a servlet container such as Apache Tomcat or Jetty, and the servlet API is included as a provided scope dependency."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime"),": This scope is used when a dependency is required at runtime but not during the compilation process. A common use case for this scope is when a project uses a logging library such as Log4j or SLF4j, and the library is included as a runtime scope dependency."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"test"),": This scope is used when a dependency is only required for testing purposes. A common use case for this scope is when a project uses a testing library such as JUnit or TestNG, and the library is included as a test scope dependency."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"system"),": This scope is used when a dependency is not available in any remote repository and must be provided by the developer. A common use case for this scope is when a project uses a proprietary library that is not available in public repositories and must be provided by the developer."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When you use the provided and system scopes, you should be careful to ensure that the required dependency is available in the target environment, whether it is provided by the runtime environment or provided by the developer.")))}l.isMDXComponent=!0}}]);