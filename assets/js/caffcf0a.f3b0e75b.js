"use strict";(self.webpackChunkjavabrains_bootcamp=self.webpackChunkjavabrains_bootcamp||[]).push([[2158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),h=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),u=o,m=c["".concat(r,".").concat(u)]||c[u]||p[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var h=2;h<i;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(7462),o=(n(7294),n(3905));const i={},l="Object equality and hashcode",s={unversionedId:"java-backend-bootcamp/java-collections/object-equality-and-hashcode",id:"java-backend-bootcamp/java-collections/object-equality-and-hashcode",title:"Object equality and hashcode",description:"Object equality",source:"@site/docs/java-backend-bootcamp/java-collections/object-equality-and-hashcode.md",sourceDirName:"java-backend-bootcamp/java-collections",slug:"/java-backend-bootcamp/java-collections/object-equality-and-hashcode",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-collections/object-equality-and-hashcode",draft:!1,editUrl:"https://github.com/koushikkothagal/java-backend-bootcamp/tree/main/website/docs/java-backend-bootcamp/java-collections/object-equality-and-hashcode.md",tags:[],version:"current",frontMatter:{},sidebar:"javaBackendBootcamp",previous:{title:"Generalization with Interfaces",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-collections/generalization-with-interfaces"},next:{title:"Time Complexity and Big O",permalink:"/java-backend-bootcamp/docs/java-backend-bootcamp/java-collections/time-complexity-and-big-o"}},r={},h=[{value:"Object equality",id:"object-equality",level:2},{value:"The contract of the <code>equals()</code> method",id:"the-contract-of-the-equals-method",level:2},{value:"The relationship between equality and hash code",id:"the-relationship-between-equality-and-hash-code",level:2},{value:"Hashcode options",id:"hashcode-options",level:2},{value:"The impact of equality on different types of collections",id:"the-impact-of-equality-on-different-types-of-collections",level:2}],d={toc:h};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"object-equality-and-hashcode"},"Object equality and hashcode"),(0,o.kt)("h2",{id:"object-equality"},"Object equality"),(0,o.kt)("p",null,"In Java, two objects are considered equal if they are the same instance. However, we tend to perceive objects equal if their states are the same. The state of an object includes the values of its fields, and the state of any objects referenced by those fields. By default, the equality of two objects is determined by comparing their memory addresses using the ",(0,o.kt)("inlineCode",{parentName:"p"},"==")," operator. But, this default behavior can be overridden by implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method is a method defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," class, which is the parent class of all objects in Java. The method is used to determine if two objects are equal. The default implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method compares the memory addresses of the two objects using the ",(0,o.kt)("inlineCode",{parentName:"p"},"==")," operator. This means that, by default, ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," deems two objects equal only if they are the same instance."),(0,o.kt)("p",null,"However, in many cases it's necessary to determine if two objects are equal based on their state rather than their memory addresses. To do this, the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method can be overridden in a class to provide a custom implementation of equality."),(0,o.kt)("p",null,"For example, consider the following class representing a point in 2D space:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Point {\n    int x;\n    int y;\n\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n}\n")),(0,o.kt)("p",null,"By default, two ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," objects are only considered equal if they are the same instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);\nSystem.out.println(p1 == p2); // false\n")),(0,o.kt)("p",null,"However, we may want to consider two Point objects equal if they have the same x and y values. To do this, we can override the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method in the Point class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic boolean equals(Object obj) {\n    if (obj instanceof Point) {\n        Point other = (Point) obj;\n        return this.x == other.x && this.y == other.y;\n    }\n    return false;\n}\n")),(0,o.kt)("p",null,"Now, when we compare two Point objects using the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, it compares their x and y values, rather than their memory addresses."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);\nSystem.out.println(p1.equals(p2)); // true\n")),(0,o.kt)("p",null,"It's important to note that when overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, it's also necessary to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method is used by Java collections such as HashMap and HashSet to determine the location of an object in their internal data structures. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method is overridden, the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method should also be overridden to ensure that two equal objects have the same hash code."),(0,o.kt)("p",null,"In conclusion, the definition of object equality in Java is determined by the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method. By default, objects are only considered equal if they are the same instance, but this default behavior can be overridden by providing a custom implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method. When overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, it's also necessary to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method to ensure that equal objects have the same hash code. This will ensure that the objects behave correctly when used with Java collections."),(0,o.kt)("h2",{id:"the-contract-of-the-equals-method"},"The contract of the ",(0,o.kt)("inlineCode",{parentName:"h2"},"equals()")," method"),(0,o.kt)("p",null,"When overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method in a custom class, it's important to follow a specific contract to ensure that the method behaves correctly."),(0,o.kt)("p",null,"The contract of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method includes the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reflexivity: For any non-null reference value x, x.equals(x) should return true. This means that an object should be equal to itself.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nSystem.out.println(p1.equals(p1)); // true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Symmetry: For any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true. This means that if object x is equal to object y, then object y should also be equal to object x.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);\nSystem.out.println(p1.equals(p2)); // true\nSystem.out.println(p2.equals(p1)); // true\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Transitivity: For any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true. This means that if object x is equal to object y and object y is equal to object z, then object x should also be equal to object z.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);\nPoint p3 = new Point(1, 2);\nSystem.out.println(p1.equals(p2)); // true\nSystem.out.println(p2.equals(p3)); // true\nSystem.out.println(p1.equals(p3)); // true\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Consistency: The ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method should return the same result for the same input, unless the state of the object has been modified. This means that if object x is equal to object y at one point in time, it should also be equal to object y at a later point in time, assuming the state of the object has not been modified.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nPoint p2 = new Point(1, 2);\nSystem.out.println(p1.equals(p2)); // true\np1.x = 3;\nSystem.out.println(p1.equals(p2)); // false\np1.x = 1;\nSystem.out.println(p1.equals(p2)); // true\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Non-nullity: The ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method should never return true when passed a null value. This means that an object should never be considered equal to null.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Point p1 = new Point(1, 2);\nSystem.out.println(p1.equals(null)); // false\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"While not strictly a rule for the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method itself, if the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method is overridden, the ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method should also be overridden to ensure that two equal objects have the same hash code. This will ensure that the objects behave correctly when used with Java collections.")),(0,o.kt)("p",null,"In conclusion, the contract of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method is a set of rules that must be followed when overriding the method in a custom class. Following this contract ensures that the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method behaves correctly and that objects can be compared for equality in a consistent and reliable way."),(0,o.kt)("h2",{id:"the-relationship-between-equality-and-hash-code"},"The relationship between equality and hash code"),(0,o.kt)("p",null,"The concept of equality is determined by the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method."),(0,o.kt)("p",null,"However, when working with Java collections such as ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HashSet"),", it's important to consider the relationship between equality and hash code. The hash code of an object is an integer value that is used to determine the location of an object in the internal data structures of these collections."),(0,o.kt)("p",null,"When two objects are equal according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, they should also have the same hash code. This means that if two objects are considered equal, their hash code should return the same value."),(0,o.kt)("p",null,"For example, consider the following class representing a point in 2D space:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class Point {\n    int x;\n    int y;\n\n    public Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (obj instanceof Point) {\n            Point other = (Point) obj;\n            return this.x == other.x && this.y == other.y;\n        }\n        return false;\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(x, y);\n    }\n}\n")),(0,o.kt)("p",null,"Here, we have overridden the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode()")," method and both methods are based on the state of the object, x and y. When we use these objects as key in ",(0,o.kt)("inlineCode",{parentName:"p"},"HashMap")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HashSet"),", they will be considered equal as well as their hashcode will be same."),(0,o.kt)("p",null,"If two objects are not equal according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, they should also have different hash codes. This means that if two objects are not considered equal, their hash code should return different values."),(0,o.kt)("h2",{id:"hashcode-options"},"Hashcode options"),(0,o.kt)("p",null,"There are several methods and classes available for generating hash codes for objects. The most commonly used ones are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Just use the default ",(0,o.kt)("inlineCode",{parentName:"li"},"hashCode()")," method: This is a method defined in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Object")," class, which is the parent class of all objects in Java. The default implementation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"hashCode()")," method generates a hash code based on the memory address of the object. However, when overriding the ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method in a custom class, it's necessary to also override this ",(0,o.kt)("inlineCode",{parentName:"li"},"hashCode()")," method. Remember: equal objects need to have the same hash code."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Objects.hashCode()")," method: This is a static utility method in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Objects")," class. It takes an argument and returns the hashcode for that instance. It's null-safe, unlike the previous method which throws a ",(0,o.kt)("inlineCode",{parentName:"li"},"NullPointerException")," if the object reference is null."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Objects.hash()")," method: This is a static utility method in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Objects")," class. It generates a hash code for a set of objects, which can be useful when generating a hash code for an object that contains multiple fields. The method takes a variable number of arguments, and each argument is used to compute the hash code.")),(0,o.kt)("h2",{id:"the-impact-of-equality-on-different-types-of-collections"},"The impact of equality on different types of collections"),(0,o.kt)("p",null,"The behavior of equality can have a significant impact on different types of collections, such as lists, sets, and maps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Lists: Lists have a method ",(0,o.kt)("inlineCode",{parentName:"li"},"contains")," which accepts an object instance and return true if that instance exists in the list. When comparing the input object reference, the ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method is used to determine if the element matches any of the elements present in the list.")),(0,o.kt)("p",null,"For example, consider the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"List<Point> list = new ArrayList<>();\nlist.add(new Point(1, 2));\nSystem.out.println(list.contains(new Point(1, 2))); // true\n")),(0,o.kt)("p",null,"Here, the two Point objects are considered equal according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, and so ",(0,o.kt)("inlineCode",{parentName:"p"},"contains")," returns true."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Sets: Sets such as HashSet and TreeSet are collections of unique elements. When adding an element to a set, the ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method is used to determine if the element is already present in the set. If the element is not present, it is added to the set. If the element is already present, it is not added.")),(0,o.kt)("p",null,"For example, consider the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Set<Point> set = new HashSet<>();\nset.add(new Point(1, 2));\nset.add(new Point(1, 2));\nSystem.out.println(set); // [Point(1, 2)]\n")),(0,o.kt)("p",null,"Here, the two ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," objects are considered equal according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, and only one of them is added to the set."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Maps: Maps such as ",(0,o.kt)("inlineCode",{parentName:"li"},"HashMap")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"TreeMap")," are collections of key-value pairs, where each key is unique. When adding a key-value pair to a map, the ",(0,o.kt)("inlineCode",{parentName:"li"},"equals()")," method is used to determine if the key is already present in the map. If the key is not present, the key-value pair is added to the map. If the key is present, the associated value is updated.")),(0,o.kt)("p",null,"For example, consider the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Map<Point, String> map = new HashMap<>();\nmap.put(new Point(1, 2), "A");\nmap.put(new Point(1, 2), "B");\nSystem.out.println(map); // {Point(1, 2)=B}`\n')),(0,o.kt)("p",null,"Here, the two ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," objects are considered equal according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"equals()")," method, and the second key-value pair overwrites the first one."))}c.isMDXComponent=!0}}]);