(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{646:function(t,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"call-和apply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-和apply"}},[t._v("🌙")]),t._v(" call()和apply()")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("🌙")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("这两个方法都是函数对象的方法，需要通过函数对象来调用。")]),t._v(" "),s("p",[t._v("当函数调用call()和apply()时，函数都会立即"),s("strong",[t._v("执行")]),t._v("。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("都可以用来改变函数的this对象的指向。")])]),t._v(" "),s("li",[s("p",[t._v("第一个参数都是this要指向的对象（函数执行时，this将指向这个对象），后续参数用来传实参。")])])]),t._v(" "),s("h3",{attrs:{id:"显式绑定this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显式绑定this"}},[t._v("🌙")]),t._v(" 显式绑定this")]),t._v(" "),s("p",[t._v("JS提供的绝大多数函数以及我们自己创建的所有函数，都可以使用call 和apply方法。")]),t._v(" "),s("p",[t._v("它们的第一个参数是一个对象。因为你可以直接指定 this 绑定的对象，因此我们称之为显式绑定。")]),t._v(" "),s("p",[t._v("例1：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 this 指向 obj")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打印结果：2")]),t._v("\n")])])]),s("h3",{attrs:{id:"第一个参数的传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个参数的传递"}},[t._v("🌙")]),t._v(" 第一个参数的传递")]),t._v(" "),s("p",[t._v("1、thisObj不传或者为null、undefined时，函数中的this会指向window对象（非严格模式）。")]),t._v(" "),s("p",[t._v("2、传递一个别的函数名时，函数中的this将指向这个"),s("strong",[t._v("函数的引用")]),t._v("。")]),t._v(" "),s("p",[t._v("3、传递的值为数字、布尔值、字符串时，this会指向这些基本类型的包装对象Number、Boolean、String。")]),t._v(" "),s("p",[t._v("4、传递一个对象时，函数中的this则指向传递的这个对象。")]),t._v(" "),s("h3",{attrs:{id:"call-和apply-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-和apply-的区别"}},[t._v("🌙")]),t._v(" call()和apply()的区别")]),t._v(" "),s("p",[t._v("call()和apply()方法都可以将实参在对象之后依次传递，但是apply()方法需要将实参封装到一个"),s("strong",[t._v("数组")]),t._v("中统一传递（即使只有实参只有一个，也要放到数组中）。")]),t._v(" "),s("p",[t._v("比如针对下面这样的代码：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" persion1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小王"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gender"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" grade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" , "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gender "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ,今年"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ,在"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" school "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"上"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" grade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"小红"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        gender"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果是通过call的参数进行传参，是这样的：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\tpersion1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("persion2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"实验小学"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"六年级"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果是通过apply的参数进行传参，是这样的：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("\tpersion1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("persion2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"实验小学"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"六年级"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("看到区别了吗，call后面的实参与say方法中是一一对应的，而apply传实参时，要封装成一个数组，数组中的元素是和say方法中一一对应的，这就是两者最大的区别。")]),t._v(" "),s("h3",{attrs:{id:"call-和apply-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#call-和apply-的作用"}},[t._v("🌙")]),t._v(" call()和apply()的作用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("改变this的指向")])]),t._v(" "),s("li",[s("p",[t._v("实现继承。Father.call(this)")])])]),t._v(" "),s("h2",{attrs:{id:"bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[t._v("🌙")]),t._v(" bind()")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("都能改变this的指向")])]),t._v(" "),s("li",[s("p",[t._v("call()/apply()是"),s("strong",[t._v("立即调用函数")])])]),t._v(" "),s("li",[s("p",[t._v("bind()是将函数返回，因此后面还需要加"),s("code",[t._v("()")]),t._v("才能调用。")])])]),t._v(" "),s("p",[t._v("bind()传参的方式与call()相同。")]),t._v(" "),s("p",[t._v("参考链接：")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/56a9c2d11adc",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.jianshu.com/p/56a9c2d11adc"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://github.com/lin-xin/blog/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/lin-xin/blog/issues/7"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000007402815",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000007402815"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.xiaoxiaohan.com/js/38.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS中改变this指向的方法"),s("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);