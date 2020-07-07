(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{593:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("🌙")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("ECMAScript 是 JS 的语言标准。而 ES6 是新的 JS 语法标准。")]),t._v(" "),a("p",[t._v("PS：严格来说，ECMAScript 还包括其他很多语言的语言标准。")]),t._v(" "),a("p",[t._v("很多人在做业务选型的时候，会倾向于选jQuery。其实jQuery的语法是偏向于ES3的。而现在主流的框架 Vue.js 和React.js的语法，是用的ES6。")]),t._v(" "),a("p",[t._v("ES6中增加了很多功能上的不足。比如："),a("strong",[t._v("常量、作用域、对象代理、类、继承")]),t._v("等。这些在ES5中想实现，比较复杂，但是ES6对它们进行了封装。")]),t._v(" "),a("h3",{attrs:{id:"ecmascript-发展历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-发展历史"}},[t._v("🌙")]),t._v(" ECMAScript 发展历史")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1995年：ECMAScript 诞生。")])]),t._v(" "),a("li",[a("p",[t._v("1997年：ECMAScript 标准确立。")])]),t._v(" "),a("li",[a("p",[t._v("1999年：ES3 出现，与此同时，IE5 风靡一时。")])]),t._v(" "),a("li",[a("p",[t._v("2009年，ES5 出现，例如 foreach、Object.keys、Object.create 和 json 标准。")])]),t._v(" "),a("li",[a("p",[t._v("2015年6月，ES6正式发布。")])])]),t._v(" "),a("p",[t._v("ES6 的目标是：让 JS 语言可以编写复杂的大型应用程序，成为企业级开发语言。")]),t._v(" "),a("h3",{attrs:{id:"ecmascript-的各大版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript-的各大版本"}},[t._v("🌙")]),t._v(" ECMAScript 的各大版本")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ES5 : 09年发布。")])]),t._v(" "),a("li",[a("p",[t._v("ES6：ECMAScript 2015年6月")])]),t._v(" "),a("li",[a("p",[t._v("ES7：ECMAScript 2016")])]),t._v(" "),a("li",[a("p",[t._v("ES8：ECMAScript 2017")])])]),t._v(" "),a("h3",{attrs:{id:"es6-的其他优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-的其他优势"}},[t._v("🌙")]),t._v(" ES6 的其他优势")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("使用 babel 语法转换器，支持低端浏览器。")])]),t._v(" "),a("li",[a("p",[t._v("流行的库基本都是基于 ES6 构建。 React 默认使用 ES6 标准开发。")])])]),t._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("🌙")])]),t._v(" "),a("h2",{attrs:{id:"es6的环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6的环境配置"}},[t._v("🌙")]),t._v(" ES6的环境配置")]),t._v(" "),a("p",[t._v("掌握 ES6 之后，如果要考虑 ES5 的兼容性，可以这样做：写 ES6 语法的 js 代码，然后通过 "),a("code",[t._v("Babel")]),t._v("将 ES6 转换为 ES5。")]),t._v(" "),a("p",[t._v("但是，在这之前，我们需要配置一下相关的环境。")]),t._v(" "),a("h3",{attrs:{id:"建立工程目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立工程目录"}},[t._v("🌙")]),t._v(" 建立工程目录")]),t._v(" "),a("p",[t._v("（1）先建立一个空的工程目录 "),a("code",[t._v("ES6Demo")]),t._v("，并在目录下建立两个文件夹 "),a("code",[t._v("src")]),t._v("和 "),a("code",[t._v("dist")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("src")]),t._v("：书写ES6代码，我们写的 js 程序都放在这里。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("dist")]),t._v("：利用 Babel 编译生成的 ES5 代码。"),a("strong",[t._v("我们在 HTML 页面需要引入 dist 里的 js 文件")]),t._v("。")])])]),t._v(" "),a("p",[t._v("（2）在 src 里新建文件  "),a("code",[t._v("index.html")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 我们引入 ES5 中的 js 文件，而不是引入 ES6 中的 js 文件。 --\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./dist/index.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("strong",[t._v("注意")]),t._v("，上方代码中，我们引入的是"),a("code",[t._v("dist")]),t._v("目录下的 js 文件。")]),t._v(" "),a("p",[t._v("然后我们新建文件 "),a("code",[t._v("src/index.js")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smyhvae'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qianguyihao'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这个文件是一个 ES6语法 的js文件，稍后，我们尝试把这个 ES6 语法的 js 文件转化为 ES5 的 js 文件。")]),t._v(" "),a("p",[t._v("PS：我们在写代码时，能用单引号尽量用单引号，而不是双引号，前者在压缩之后，程序执行会更快。")]),t._v(" "),a("h3",{attrs:{id:"全局安装-babel-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装-babel-cli"}},[t._v("🌙")]),t._v(" 全局安装 Babel-cli")]),t._v(" "),a("p",[t._v("（1）初始化项目：")]),t._v(" "),a("p",[t._v("在安装Babel之前，需要先用 npm init 先初始化我们的项目。打开终端或者通过cmd打开命令行工具，进入项目目录，输入如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" init -y\n")])])]),a("p",[t._v("上方代码中，"),a("code",[t._v("-y")]),t._v(" 代表全部默认同意，就不用一次次按回车了（稍后再根据需要，在文件中手动修改）。命令执行完成后，会在项目的根目录下生成package.json文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es6demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"echo \\"Error: no test specified\\" && exit 1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"author"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smyhvae"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"license"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ISC"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("PS：VS Code 里打开终端的快捷键是："),a("code",[t._v("Contol + ~")]),t._v("。")]),t._v(" "),a("p",[t._v("（2）全局安装 Babel-cli：")]),t._v(" "),a("p",[t._v("在终端中输入以下命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g babel-cli\n")])])]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180304_1305.png",alt:""}})]),t._v(" "),a("p",[t._v("如果安装比较慢的话，Mac 下可以使用"),a("code",[t._v("cnpm")]),t._v("进行安装 ，windows 下可以使用"),a("code",[t._v("nrm")]),t._v("切换到 taobao 的镜像。")]),t._v(" "),a("p",[t._v("（3）本地安装 babel-preset-es2015 和 babel-cli：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev babel-preset-es2015 babel-cli\n")])])]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180304_1307.png",alt:""}})]),t._v(" "),a("p",[t._v("安装完成后，会发现"),a("code",[t._v("package.json")]),t._v("文件，已经多了 devDependencies 选项：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180304_1308.png",alt:""}})]),t._v(" "),a("p",[t._v("（4）新建.babelrc：")]),t._v(" "),a("p",[t._v("在根目录下新建文件"),a("code",[t._v(".babelrc")]),t._v("，输入如下内容：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "presets":[\n        "es2015"\n    ],\n    "plugins":[]\n}\n')])])]),a("p",[t._v("（5）开始转换：")]),t._v(" "),a("p",[t._v("现在，我们应该可以将 ES6 的文件转化为 ES5 的文件了，命令如下：（此命令略显复杂）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\tbabel src/index.js -o dist/index.js\n")])])]),a("p",[t._v("我们可以将上面这个命令进行简化一下。操作如下：")]),t._v(" "),a("p",[t._v("在文件 "),a("code",[t._v("package.json")]),t._v(" 中修改键 "),a("code",[t._v("scripts")]),t._v("中的内容：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel src/index.js -o dist/index.js"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("修改后的效果如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180304_1315.png",alt:""}})]),t._v(" "),a("p",[t._v("目前为止，环境配置好了。以后，我们执行如下命令，即可将"),a("code",[t._v("src/index.js")]),t._v("这个 ES6 文件转化为 "),a("code",[t._v("dist/index.js")]),t._v("这个 ES5 文件：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),a("p",[t._v("我们执行上面的命令之后，会发现， dist目录下会生成 ES5 的 js 文件：")]),t._v(" "),a("p",[t._v("index.js：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'smyhvae'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'qianguyihao'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("当我们打开网页后，就可以在浏览器的控制台，看到代码的输出结果。")]),t._v(" "),a("p",[t._v("本段内容的参考链接：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://jspang.com/2017/06/03/es6/",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术胖带你玩转ES6视频教程 (共18集)"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);