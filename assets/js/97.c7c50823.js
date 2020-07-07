(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{575:function(t,a,s){"use strict";s.r(a);var n=s(5),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子模型"}},[t._v("🌙")]),t._v(" 盒子模型")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("🌙")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("盒子模型，英文即box model。无论是div、span、还是a都是盒子。")]),t._v(" "),s("p",[t._v("但是，图片、表单元素一律看作是文本，它们并不是盒子。这个很好理解，比如说，一张图片里并不能放东西，它自己就是自己的内容。")]),t._v(" "),s("h3",{attrs:{id:"盒子中的区域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒子中的区域"}},[t._v("🌙")]),t._v(" 盒子中的区域")]),t._v(" "),s("p",[t._v("一个盒子中主要的属性就5个：width、height、padding、border、margin。如下：")]),t._v(" "),s("ul",[s("li",[t._v("width和height："),s("strong",[t._v("内容")]),t._v("的宽度、高度（不是盒子的宽度、高度）。")]),t._v(" "),s("li",[t._v("padding：内边距。")]),t._v(" "),s("li",[t._v("border：边框。")]),t._v(" "),s("li",[t._v("margin：外边距。")])]),t._v(" "),s("p",[t._v("盒子模型的示意图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170727_2128.png",alt:""}})]),t._v(" "),s("p",[t._v("代码演示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170727_2326.png",alt:""}})]),t._v(" "),s("p",[t._v("上面这个盒子，width:200px; height:200px; 但是真实占有的宽高是302*302。 这是因为还要加上padding、border。")]),t._v(" "),s("p",[t._v("注意：**宽度和真实占有宽度，不是一个概念！**来看下面这例子。")]),t._v(" "),s("h3",{attrs:{id:"标准盒模型和ie盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒模型和ie盒模型"}},[t._v("🌙")]),t._v(" 标准盒模型和IE盒模型")]),t._v(" "),s("blockquote",[s("p",[t._v("我们目前所学习的知识中，以标准盒子模型为准。")])]),t._v(" "),s("p",[t._v("标准盒子模型：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2015-10-03-css-27.jpg",alt:""}})]),t._v(" "),s("p",[t._v("IE盒子模型：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2015-10-03-css-30.jpg",alt:""}})]),t._v(" "),s("p",[t._v("上图显示：")]),t._v(" "),s("p",[t._v("在 CSS 盒子模型 (Box Model) 规定了元素处理元素的几种方式：")]),t._v(" "),s("ul",[s("li",[t._v("width和height："),s("strong",[t._v("内容")]),t._v("的宽度、高度（不是盒子的宽度、高度）。")]),t._v(" "),s("li",[t._v("padding：内边距。")]),t._v(" "),s("li",[t._v("border：边框。")]),t._v(" "),s("li",[t._v("margin：外边距。")])]),t._v(" "),s("p",[t._v("CSS盒模型和IE盒模型的区别：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在 "),s("font",{attrs:{color:"#0000FF"}},[s("strong",[t._v("标准盒子模型")])]),t._v("中，"),s("font",{attrs:{color:"#0000FF"}},[s("strong",[t._v("width 和 height 指的是内容区域")])]),t._v("的宽度和高度。增加内边距、边框和外边距不会影响内容区域的尺寸，但是会增加元素框的总尺寸。")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{color:"#0000FF"}},[s("strong",[t._v("IE盒子模型")])]),t._v("中，"),s("font",{attrs:{color:"#0000FF"}},[s("strong",[t._v("width 和 height 指的是内容区域+border+padding")])]),t._v("的宽度和高度。")],1)])]),t._v(" "),s("p",[t._v("注：Android中也有margin和padding的概念，意思是差不多的，如果你会一点Android，应该比较好理解吧。区别在于，Android中没有border这个东西，而且在Android中，margin并不是控件的一部分，我觉得这样做更合理一些，呵呵。\n"),s("br")]),t._v(" "),s("h3",{attrs:{id:"body-标签也有margin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-标签也有margin"}},[t._v("🌙")]),t._v(" "),s("code",[t._v("<body>")]),t._v("标签也有margin")]),t._v(" "),s("p",[s("code",[t._v("<body>")]),t._v("标签有必要强调一下。很多人以为"),s("code",[t._v("<body>")]),t._v("标签占据的是整个页面的全部区域，其实是错误的，正确的理解是这样的：整个网页最大的盒子是"),s("code",[t._v("<document>")]),t._v("，即浏览器。而"),s("code",[t._v("<body>")]),t._v("是"),s("code",[t._v("<document>")]),t._v("的儿子。浏览器给"),s("code",[t._v("<body>")]),t._v("默认的margin大小是8个像素，此时"),s("code",[t._v("<body>")]),t._v("占据了整个页面的一大部分区域，而不是全部区域。来看一段代码。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!doctype html>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Generator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("EditPlus®"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Author"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Keywords"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("有生之年"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("狭路相逢"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])]),s("p",[t._v("上面的代码中，我们对div标签设置了边距等信息。打开google浏览器，按住F12，显示效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20151003_27.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"认识width、height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识width、height"}},[t._v("🌙")]),t._v(" 认识width、height")]),t._v(" "),s("p",[t._v("一定要知道，在前端开发工程师眼中，世界中的一切都是不同的。")]),t._v(" "),s("p",[t._v("比如说，丈量稿纸，前端开发工程师只会丈量内容宽度：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170727_2329.png",alt:""}})]),t._v(" "),s("p",[t._v("下面这两个盒子，真实占有宽高，都是302*302：")]),t._v(" "),s("p",[t._v("盒子1：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("盒子2：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 250px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("真实占有宽度 = 左border + 左padding + width + 右padding + 右border")]),t._v(" "),s("p",[t._v("上面这两个盒子的盒模型图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_0925.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("如果想保持一个盒子的真实占有宽度不变，那么加width的时候就要减padding。加padding的时候就要减width")]),t._v("。因为盒子变胖了是灾难性的，这会把别的盒子挤下去。")]),t._v(" "),s("h3",{attrs:{id:"认识padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识padding"}},[t._v("🌙")]),t._v(" 认识padding")]),t._v(" "),s("h4",{attrs:{id:"padding区域也有颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding区域也有颜色"}},[t._v("🌙")]),t._v(" padding区域也有颜色")]),t._v(" "),s("p",[t._v("padding就是内边距。padding的区域有背景颜色，css2.1前提下，并且背景颜色一定和内容区域的相同。也就是说，background-color将填充"),s("strong",[t._v("所有border以内的区域。")])]),t._v(" "),s("p",[t._v("效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1005.png",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"padding有四个方向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding有四个方向"}},[t._v("🌙")]),t._v(" padding有四个方向")]),t._v(" "),s("p",[t._v("padding是4个方向的，所以我们能够分别描述4个方向的padding。")]),t._v(" "),s("p",[t._v("方法有两种，第一种写小属性；第二种写综合属性，用空格隔开。")]),t._v(" "),s("p",[t._v("小属性的写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tpadding-top: 30px;\n\tpadding-right: 20px;\n\tpadding-bottom: 40px;\n\tpadding-left: 100px;\n")])])]),s("p",[t._v("综合属性的写法：(上、右、下、左)（顺时针方向，用空格隔开。margin的道理也是一样的）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("padding:30px 20px 40px 100px;\n")])])]),s("p",[t._v("如果写了四个值，则顺序为：上、右、下、左。")]),t._v(" "),s("p",[t._v("如果只写了三个值，则顺序为：上、右、下。??和右一样。")]),t._v(" "),s("p",[t._v("如果只写了两个值，比如说：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("padding: 30px 40px;\n")])])]),s("p",[t._v("则顺序等价于：30px 40px 30px 40px;")]),t._v(" "),s("p",[t._v("要懂得，"),s("strong",[t._v("用小属性层叠大属性")]),t._v("。比如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("padding: 20px;\npadding-left: 30px;\n")])])]),s("p",[t._v("上面的padding对应盒子模型为：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1039.png",alt:""}})]),t._v(" "),s("p",[t._v("下面的写法：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("padding-left: 30px;\npadding: 20px;\n")])])]),s("p",[t._v("第一行的小属性无效，因为被第二行的大属性层叠掉了。")]),t._v(" "),s("p",[t._v("下面的题，会做了，说明你明白了。")]),t._v(" "),s("h4",{attrs:{id:"一些题目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些题目"}},[t._v("🌙")]),t._v(" 一些题目")]),t._v(" "),s("p",[s("strong",[t._v("题目1")]),t._v("：说出下面盒子真实占有宽高，并画出盒模型图。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px 20px 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("答案：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1048.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("题目2")]),t._v("：说出下面盒子真实占有宽高，并画出盒模型图。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-left")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40px 50px 60px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("答案：")]),t._v(" "),s("p",[s("code",[t._v("padding-left:10px；")]),t._v(" 和"),s("code",[t._v("padding-right:20px;")]),t._v(" 没用，因为后面的padding大属性，层叠掉了他们。")]),t._v(" "),s("p",[t._v("盒子模型如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1100.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("题目3")]),t._v("：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1401.png",alt:""}})]),t._v(" "),s("p",[t._v("答案：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\twidth:123px;\n\theight:123px;\n\tpadding:20px 40px;\n\tborder:1px solid red;\n")])])]),s("p",[s("strong",[t._v("题目4")]),t._v("：现在给你一个盒子模型图，请写出代码，试着用最最简单的方法写。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1402.png",alt:""}})]),t._v(" "),s("p",[t._v("答案：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\twidth:123px;\n\theight:123px;\n\tpadding:20px;\n\tpadding-right:40px;\n\tborder:1px solid red;\n\n")])])]),s("h4",{attrs:{id:"一些元素，默认带有padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些元素，默认带有padding"}},[t._v("🌙")]),t._v(" 一些元素，默认带有padding")]),t._v(" "),s("p",[t._v("一些元素，默认带有"),s("code",[t._v("padding")]),t._v("，比如ul标签。如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1413.png",alt:""}})]),t._v(" "),s("p",[t._v("上图显示，不加任何样式的ul，也是有40px的padding-left。")]),t._v(" "),s("p",[t._v("所以，我们做站的时候，为了便于控制，总是喜欢清除这个默认的padding。")]),t._v(" "),s("p",[t._v("可以使用"),s("code",[t._v("*")]),t._v("进行清除：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t\t*{\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t}\n")])])]),s("p",[t._v("但是，"),s("code",[t._v("*")]),t._v("的效率不高，所以我们使用并集选择器，罗列所有的标签（不用背，有专业的清除默认样式的样式表，今后学习）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{\n    margin:0;\n    padding:0;\n}\n")])])]),s("h3",{attrs:{id:"认识border"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识border"}},[t._v("🌙")]),t._v(" 认识border")]),t._v(" "),s("p",[t._v("border就是边框。边框有三个要素：像素（粗细）、线型、颜色。")]),t._v(" "),s("p",[t._v("颜色如果不写，默认是黑色。另外两个属性不写，要命了，显示不出来边框。")]),t._v(" "),s("h4",{attrs:{id:"border-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-style"}},[t._v("🌙")]),t._v(" border-style")]),t._v(" "),s("p",[t._v("border的所有的线型如下：（我们可以通过查看"),s("code",[t._v("CSS参考手册")]),t._v("得到）")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1435.png",alt:""}})]),t._v(" "),s("p",[t._v("比如"),s("code",[t._v("border:10px ridge red;")]),t._v("这个属性，在chrome和firefox、IE中有细微差别：（因为可以显示出效果，因此并不是兼容性问题，只是有细微差别而已）")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1619.png",alt:""}})]),t._v(" "),s("p",[t._v("如果公司里面的设计师是处女座的，追求极高的"),s("strong",[t._v("页面还原度")]),t._v("，那么不能使用css来制作边框。就要用到图片，就要切图了。")]),t._v(" "),s("p",[t._v("所以，比较稳定的border-style就几个：solid、dashed、dotted。")]),t._v(" "),s("h4",{attrs:{id:"border拆分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border拆分"}},[t._v("🌙")]),t._v(" border拆分")]),t._v(" "),s("p",[t._v("border是一个大综合属性。比如说：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:1px solid red;\n")])])]),s("p",[t._v("就是把4个边框，都设置为1px宽度、线型实线、red颜色。")]),t._v(" "),s("p",[t._v("PS：小技巧：在sublime text中，为了快速输入"),s("code",[t._v("border:1px solid red;")]),t._v("这个属性，可以直接输入"),s("code",[t._v("bd")]),t._v("，然后选第二个后回车。")]),t._v(" "),s("p",[t._v("border属性是能够被拆开的，有两大种拆开的方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("（1）按三要素拆开：border-width、border-style、border-color。（一个border属性是由三个小属性综合而成的）")])]),t._v(" "),s("li",[s("p",[t._v("（2）按方向拆开：border-top、border-right、border-bottom、border-left。")])])]),t._v(" "),s("p",[t._v("现在我们明白了："),s("strong",[t._v("一个border属性，是由三个小属性综合而成的")]),t._v("。如果某一个小属性后面是空格隔开的多个值，那么就是上右下左的顺序。举例如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-width:10px 20px;\nborder-style:solid dashed dotted;\nborder-color:red green blue yellow;\n")])])]),s("p",[t._v("效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1516.png",alt:""}})]),t._v(" "),s("p",[t._v("（1）按三要素拆：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-width:10px;    //边框宽度\nborder-style:solid;   //线型\nborder-color:red;     //颜色。\n")])])]),s("p",[t._v("等价于：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:10px solid red;\n")])])]),s("p",[t._v("(2)按方向来拆：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-top:10px solid red;\nborder-right:10px solid red;\nborder-bottom:10px solid red;\nborder-left:10px solid red;\n")])])]),s("p",[t._v("等价于：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:10px solid red;\n")])])]),s("p",[t._v("（3）按三要素和方向来拆：(就是把每个方向的，每个要素拆开。3*4 = 12)")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\tborder-top-width:10px;\n\tborder-top-style:solid;\n\tborder-top-color:red;\n\tborder-right-width:10px;\n\tborder-right-style:solid;\n\tborder-right-color:red;\n\tborder-bottom-width:10px;\n\tborder-bottom-style:solid;\n\tborder-bottom-color:red;\n\tborder-left-width:10px;\n\tborder-left-style:solid;\n\tborder-left-color:red;\n")])])]),s("p",[t._v("等价于：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:10px solid red;\n\n")])])]),s("p",[t._v("工作中到底用什么？很简答：什么简单用什么。但要懂得，用小属性层叠大属性。举例如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1606.png",alt:""}})]),t._v(" "),s("p",[t._v("为了实现上方效果，写法如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:10px solid red;\nborder-right-color:blue;\n")])])]),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1608.png",alt:""}})]),t._v(" "),s("p",[t._v("为了实现上方效果，写法如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:10px solid red;\nborder-style:solid dashed;\n")])])]),s("p",[t._v("border可以没有：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border:none;\n")])])]),s("p",[t._v("可以某一条边没有：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-left: none;\n")])])]),s("p",[t._v("也可以调整左边边框的宽度为0：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("border-left-width: 0;\n")])])]),s("h4",{attrs:{id:"举例：利用border属性画一个三角形（小技巧）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#举例：利用border属性画一个三角形（小技巧）"}},[t._v("🌙")]),t._v(" 举例：利用border属性画一个三角形（小技巧）")]),t._v(" "),s("p",[t._v("步骤如下：")]),t._v(" "),s("p",[t._v("（1）当我们设置盒子的width和height为0时，此时效果如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1640.png",alt:""}})]),t._v(" "),s("p",[t._v("（2）然后将border的底部取消：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1645.png",alt:""}})]),t._v(" "),s("p",[t._v("（3）最后设置border的左边和右边为白色：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20170728_1649.png",alt:""}})]),t._v(" "),s("p",[t._v("这样，一个三角形就画好了。")]),t._v(" "),s("h2",{attrs:{id:"我的公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号"}},[t._v("🌙")]),t._v(" 我的公众号")]),t._v(" "),s("p",[t._v("想学习"),s("font",{attrs:{color:"#0000ff"}},[s("strong",[t._v("代码之外的技能")])]),t._v("？不妨关注我的微信公众号："),s("strong",[t._v("千古壹号")]),t._v("（id："),s("code",[t._v("qianguyihao")]),t._v("）。")],1),t._v(" "),s("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2016040102.jpg",alt:""}})])])}),[],!1,null,null,null);a.default=r.exports}}]);