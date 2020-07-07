(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{685:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack学习笔记之核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack学习笔记之核心概念"}},[t._v("🌙")]),t._v(" Webpack学习笔记之核心概念")]),t._v(" "),a("h2",{attrs:{id:"_1-entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-entry"}},[t._v("🌙")]),t._v(" 1.Entry")]),t._v(" "),a("p",[t._v("Entry用来指定webpack的打包入口。")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:%5Cblog%5Cimages%5Cwebpack%5Centry.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_1-1-entry单入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-entry单入口"}},[t._v("🌙")]),t._v(" 1.1 entry单入口")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("单入口： "),a("code",[t._v("entry")]),t._v("是一个字符串")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/my/entry/file.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-entry多入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-entry多入口"}},[t._v("🌙")]),t._v(" 1.2  entry多入口")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("多入口："),a("code",[t._v("entry")]),t._v("是一个对象：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        admin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./scr/admin/app.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-output"}},[t._v("🌙")]),t._v(" 2. Output")]),t._v(" "),a("p",[t._v("output来告诉webpack如何将编译后的文件输出到磁盘")]),t._v(" "),a("h3",{attrs:{id:"_2-1-output单入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-output单入口"}},[t._v("🌙")]),t._v(" 2.1 output单入口")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./path/to/my/entry/file.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-1-output多入口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-output多入口"}},[t._v("🌙")]),t._v(" 2.1 output多入口")]),t._v(" "),a("p",[t._v("output并没有专门的多入口配置，它是通过"),a("strong",[t._v("占位符")]),t._v("确保文件名称的唯一性来实现多入口的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        login"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/login.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[name].js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 占位符 [name]")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-loaders"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-loaders"}},[t._v("🌙")]),t._v(" 3. Loaders")]),t._v(" "),a("p",[t._v("webpack开箱即用只支持JS和JSON两种文件类型，通过Loaders区支持其他文件类型并且把它们转化为有效的模块，并且乐意添加到依赖图中。")]),t._v(" "),a("p",[t._v("Loaders本身是一个函数，接受源文件作为参数，返回转换后的结果。")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:%5Cblog%5Cimages%5Cwebpack%5Cloaders.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-loaders的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-loaders的用法"}},[t._v("🌙")]),t._v(" 3.1  Loaders的用法")]),t._v(" "),a("p",[t._v("通过rules中的"),a("code",[t._v("test")]),t._v("指定正则匹配规则（匹配文件名），"),a("code",[t._v("use")]),t._v("指定对应的loader来解析：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.txt/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'raw-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-plugins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-plugins"}},[t._v("🌙")]),t._v(" 4.Plugins")]),t._v(" "),a("p",[t._v("plugins即插件，用于bundle文件的优化，资源管理和环境变量的注入，它作用于整个构建过程。")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:%5Cblog%5Cimages%5Cwebpack%5Cplugins.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_4-1-plugins的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-plugins的用法"}},[t._v("🌙")]),t._v(" 4.1 Plugins的用法")]),t._v(" "),a("p",[t._v("将plugin放在"),a("code",[t._v("plugins")]),t._v("数组中：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-mode"}},[t._v("🌙")]),t._v(" 5. Mode")]),t._v(" "),a("p",[t._v("mode用来指定当前的构建环境："),a("code",[t._v("production")]),t._v("、"),a("code",[t._v("development")]),t._v("或"),a("code",[t._v("none")]),t._v("。")]),t._v(" "),a("p",[t._v("设置mode可以使用webpack内置的函数，默认值为"),a("code",[t._v("production")]),t._v("(生产环境)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"E:%5Cblog%5Cimages%5Cwebpack%5Cmode.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_6-resolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-resolve"}},[t._v("🌙")]),t._v(" 6.Resolve")])])}),[],!1,null,null,null);s.default=r.exports}}]);