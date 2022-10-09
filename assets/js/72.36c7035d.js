(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{337:function(a,t,s){"use strict";s.r(t);var n=s(13),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#lambda-表达式"}},[a._v("Lambda 表达式")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1、foreach如何提前终止"}},[a._v("1、foreach如何提前终止")])])])]),t("li",[t("a",{attrs:{href:"#函数式接口"}},[a._v("函数式接口")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1、什么是函数式接口"}},[a._v("1、什么是函数式接口")])]),t("li",[t("a",{attrs:{href:"#_2、常用四大核心函数式接口"}},[a._v("2、常用四大核心函数式接口")])])])]),t("li",[t("a",{attrs:{href:"#stream"}},[a._v("Stream")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"lambda-表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lambda-表达式"}},[a._v("#")]),a._v(" Lambda 表达式")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compare")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareTo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n转换为"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Lambda")]),a._v("表达式为：\n        \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("compareTo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"_1、foreach如何提前终止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、foreach如何提前终止"}},[a._v("#")]),a._v(" 1、foreach如何提前终止")]),a._v(" "),t("p",[a._v("普通的"),t("code",[a._v("for循")]),a._v("环，终止循环使用"),t("code",[a._v("break")]),a._v("，中断本次继续下次循环使用"),t("code",[a._v("continue")]),a._v("，如果使用"),t("code",[a._v("return")]),a._v("则终止此"),t("code",[a._v("for")]),a._v("循环和整个方法")]),a._v(" "),t("p",[t("code",[a._v("java8")]),a._v("的"),t("code",[a._v("foreach")]),a._v("中，"),t("code",[a._v("break")]),a._v("和"),t("code",[a._v("continue")]),a._v("不被允许使用；关键字"),t("code",[a._v("return")]),a._v("，在这里执行的效果相当于普通"),t("code",[a._v("for")]),a._v("循环里的关键词"),t("code",[a._v("continue")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("java8")]),a._v("的"),t("code",[a._v("foreach")]),a._v("中，要提前终止的方法：\n"),t("ul",[t("li",[a._v("抛出异常然后在循环外套一层"),t("code",[a._v("try..cache")]),a._v(" 或者是 改成原始的"),t("code",[a._v("for")]),a._v("循环")])])])]),a._v(" "),t("h2",{attrs:{id:"函数式接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数式接口"}},[a._v("#")]),a._v(" 函数式接口")]),a._v(" "),t("h3",{attrs:{id:"_1、什么是函数式接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么是函数式接口"}},[a._v("#")]),a._v(" 1、什么是函数式接口")]),a._v(" "),t("ul",[t("li",[a._v("只包含一个抽象方法的接口")]),a._v(" "),t("li",[a._v("可以通过Lambda表达式来创建该接口的对象")]),a._v(" "),t("li",[a._v("可以在任意函数式接口上使用"),t("code",[a._v("@FunctionalInterface")]),a._v("注解")])]),a._v(" "),t("h4",{attrs:{id:"案例-runnable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例-runnable"}},[a._v("#")]),a._v(" 案例 Runnable")]),a._v(" "),t("p",[a._v("@FunctionalInterface注解修饰；Runnable接口就是一个函数式接口")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@FunctionalInterface")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Runnable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"_2、常用四大核心函数式接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、常用四大核心函数式接口"}},[a._v("#")]),a._v(" 2、常用四大核心函数式接口")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Consumer<T>")]),a._v(" "),t("ul",[t("li",[a._v("消费型接口")]),a._v(" "),t("li",[a._v("对类型为T的对象应用操作")])])]),a._v(" "),t("li",[t("code",[a._v("Supplier<T>")]),a._v(" "),t("ul",[t("li",[a._v("供给型接口")]),a._v(" "),t("li",[a._v("返回类型为T的对象")])])]),a._v(" "),t("li",[t("code",[a._v("Function<T, R>")]),a._v(" "),t("ul",[t("li",[a._v("函数型接口")]),a._v(" "),t("li",[a._v("对类型为T的对象应用操作，并返回结果，结果为R类型的对象")])])]),a._v(" "),t("li",[t("code",[a._v("Predicate<T>")]),a._v(" "),t("ul",[t("li",[a._v("断定型接口")]),a._v(" "),t("li",[a._v("确定类型为T的对象是否满足某约束，并返回boolean值")])])])]),a._v(" "),t("h2",{attrs:{id:"stream"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream"}},[a._v("#")]),a._v(" Stream")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("java.util.stream")])]),a._v(" "),t("li",[a._v("能用声明式的方式处理数据（集合、数组等）")]),a._v(" "),t("li",[a._v("Stream流支持同步执行也支持并发执行\n"),t("ul",[t("li",[t("code",[a._v("stream()")]),a._v("创建串行流")]),a._v(" "),t("li",[t("code",[a._v("parallelStream()")]),a._v(" 创建并行流")])])]),a._v(" "),t("li",[a._v("只能对实现了"),t("code",[a._v("java.util.Collection")]),a._v("接口的类做流的处理操作")])]),a._v(" "),t("h4",{attrs:{id:"_1、获取流的方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取流的方式"}},[a._v("#")]),a._v(" 1、获取流的方式")]),a._v(" "),t("ul",[t("li",[a._v("对于实现了"),t("code",[a._v("java.util.Collection")]),a._v("接口的类：直接"),t("code",[a._v(".stream()")]),a._v("即可")]),a._v(" "),t("li",[a._v("对于实现了"),t("code",[a._v("java.util.Map")]),a._v("接口的类：需要"),t("code",[a._v("keySet().stream()")]),a._v("或者"),t("code",[a._v("values().stream()")]),a._v("或者"),t("code",[a._v("entrySet().stream()")])]),a._v(" "),t("li")]),a._v(" "),t("h4",{attrs:{id:"_2、常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、常用方法"}},[a._v("#")]),a._v(" 2、常用方法")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("Filter")]),a._v(" "),t("ul",[t("li",[a._v("过滤掉不符合条件的")])])])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Integer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" list "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("34")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("23")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("17")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//  过滤掉集合中奇数")]),a._v("\n    list"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("stream")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("item "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" item "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("%")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("::")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 输出：")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 12")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 34")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("ul",[t("li",[a._v("Sorted\n"),t("ul",[t("li",[a._v("排序\nlist.stream().sorted()")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);