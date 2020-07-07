(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{631:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("🌙")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在之前的"),a("strong",[t._v("javascript基础")]),t._v("文章中（编号02、编号07），我们介绍过，变量有以下数据类型：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("基本数据类型（值类型）")]),t._v("：String 字符串、Number 数值、Boolean 布尔值、Null 空值、Undefined 未定义。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("引用数据类型（引用类型）")]),t._v("：Object 对象。")])])]),t._v(" "),a("p",[t._v("本文，我们针对这两种类型，做个详细介绍。我们先来看个例子。")]),t._v(" "),a("p",[a("strong",[t._v("基本数据类型举例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：24")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：23")]),t._v("\n")])])]),a("p",[t._v("上面的代码中：a 和 b 都是基本数据类型，让 b 等于 a，然后"),a("strong",[t._v("改变 a 的值之后，发现 b 的值并没有被改变")]),t._v("。")]),t._v(" "),a("p",[t._v("但是在引用数据类型中，就不同了，我们来看一看。")]),t._v(" "),a("p",[a("strong",[t._v("引用数据类型举例")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smyh'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 让 obj2 等于 obj1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改 obj1 的 name 属性")]),t._v("\n    obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vae'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：vae")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印结果：vae")]),t._v("\n")])])]),a("p",[t._v("上面的代码中：obj1 和 obj2 都是引用数据类型，让 obj2 等于 obj1，然后"),a("strong",[t._v("修改 obj1.name 的值之后，发现 obj2.name 的值也发生了改变")]),t._v("。")]),t._v(" "),a("p",[t._v("从上面的例子中，可以反映出，基本数据类型和引用数据类型是有区别的。")]),t._v(" "),a("h2",{attrs:{id:"栈内存和堆内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存和堆内存"}},[t._v("🌙")]),t._v(" 栈内存和堆内存")]),t._v(" "),a("p",[t._v("我们首先记住一句话：JS中，所有的"),a("strong",[t._v("变量")]),t._v("都是保存在"),a("strong",[t._v("栈内存")]),t._v("中的。")]),t._v(" "),a("p",[t._v("然后来看看下面的区别。")]),t._v(" "),a("p",[a("strong",[t._v("基本数据类型")]),t._v("：")]),t._v(" "),a("p",[t._v("基本数据类型的值，直接保存在栈内存中。值与值之间是独立存在，修改一个变量不会影响其他的变量。")]),t._v(" "),a("p",[a("strong",[t._v("引用数据类型")]),t._v("：")]),t._v(" "),a("p",[t._v("对象是保存到堆内存中的。每创建一个新的对象，就会在堆内存中开辟出一个新的空间，而"),a("strong",[t._v("变量保存了对象的内存地址")]),t._v("（对象的引用）。如果两个变量保存了同一个对象的引用，当一个通过一个变量修改属性时，另一个也会受到影响。")]),t._v(" "),a("h2",{attrs:{id:"我的公众号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("🌙")]),t._v(" 我的公众号")]),t._v(" "),a("p",[t._v("想学习"),a("font",{attrs:{color:"#0000ff"}},[a("strong",[t._v("代码之外的技能")])]),t._v("？不妨关注我的微信公众号："),a("strong",[t._v("千古壹号")]),t._v("（id："),a("code",[t._v("qianguyihao")]),t._v("）。")],1),t._v(" "),a("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/2016040102.jpg",alt:""}})])])}),[],!1,null,null,null);s.default=r.exports}}]);