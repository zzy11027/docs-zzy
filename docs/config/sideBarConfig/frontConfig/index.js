const utils = require('../../../utils/index.js');
const css = ['css1','css2','css3','css4','css5','css6','css7','css8','css9','css10','css11','css12','css13'];
const html = ['html1','html2'];
// const js = [];
const jsJC = [
    'JS简介',
    '变量',
    '变量的强制类型转换',
    '运算符',
    '流程控制语句：选择结构（if和switch）',
    '流程控制语句：循环结构（for和while）',
    '对象简介和对象的基本操作',
    '基本数据类型vs引用数据类型',
    '函数',
    '作用域',
    'this',
    '对象的创建&构造函数',
    '原型对象',
    '数组简介',
    '数组的四个基本方法&数组的遍历',
    '数组的常见方法',
    '数组的其他方法',
    '内置对象：Date',
    '内置对象：Math',
    '包装类',
    '内置对象：String',
    '正则表达式',
    'DOM操作',
    '事件对象Event和冒泡',
    '事件委托',
    'BOM的常见内置方法和内置对象',
    '原型链',
    '常见代码解读',
    'JS设计模式学习笔记','JS-this-bind-call-apply','EchartsAPI笔记.md'
];
const jsJJ = [
    '创建对象和继承',
    '浅拷贝和深拷贝',
    '作用域和闭包',
    'call、apply、bind的区别',
    'this'
];
const es6 = [
    'ES5中的严格模式',
    'ES5中的一些扩展',
    'ES6的介绍和环境配置',
    'ES6：变量、函数扩展',
    'ES6-数组方法及其实现',
    'ES6-字符串方法及其实现',
    'ES6-对象方法及其实现',
    'ES6-新增数据类型及其实现',
    'ES6-promise学习及手写promise',
    'ES6-async&await语法糖',
    'ES6-生成器及其实现',
    'ES6-面向对象编程',
];
const vue = [
    '00-Vue的介绍和vue-cli',
    '01-01.Vue的系统指令',
    '01-02.v-on的事件修饰符',
    '01-03.Vue的系统指令(二)',
    '01-04.Vue的举例：列表功能',
    '01-05.自定义过滤器：时间格式化举例',
    '01-06.自定义按键修饰符&自定义指令',
    '02-Vue实例的生命周期函数',
    '03-Vue中的Ajax请求',
    '04-Vue动画',
    '05-Vue组件的定义和注册',
    '06-Vue组件之间的传值',
    '07-Vue-router路由',
    'Vue-router路由',
    'Vue.js在开发中的常见写法积累',
    'Vue开发积累',
    'Vue组件'
];
const react = [
    'React基础',
    'React-JSX',
    'React-DOM操作',
    'React创建组件',
    'React-Router',
    'React生命周期',
    'React事件监听',
    'React组件间的通信',
    'React-state状态管理',
    'React-ts项目接入【fundebug-javascript】捕获异常',
    'React进阶之-Hooks',
    'React进阶之-Next',
    'React进阶之-Redux',
    'Ant Design的基本使用',
    'AntD框架的upload组件上传图片时遇到的一些坑',
    'React Navive初识'
];
const tool = [
    '01-VS Code的使用',
    '02-Git的使用',
    '03-Emmet in VS Code',
    '03-VS Code的使用积累',
    '04-Sublime Text在前端中的使用',
    '04-WebStorm的使用',
    '05-Atom在前端的使用',
    '06-chrome浏览器',
    'iconMoon',
    'iTerm2 + OhMyZsh + agnoster 搭建',
    'whistle网络抓包'
];
const jquery = [
    'jQuery操作DOM',
    'jQuery的介绍和选择器',
    'jQuery的事件机制和其他知识',
    'jQuery动画详解',
    'Zepto入门'
];
const angular = ['Angular-学习笔记'];
module.exports = {
    css: [utils.genSiderbar('CSS3技术探究', css)],
    html: [utils.genSiderbar('HTML5技术探究', html)],
    // js: [utils.genSiderbar('JS设计模式', js), utils.genSiderbar('ES6', es6)],
    jsJC: [utils.genSiderbar('JS基础', jsJC),utils.genSiderbar('ES6', es6)],
    jsJJ: [utils.genSiderbar('JS进阶', jsJJ)],
    vue: [utils.genSiderbar('Vue学习笔记', vue)],
    react: [utils.genSiderbar('react学习笔记', react)],
    jquery: [utils.genSiderbar('jquery', jquery)],
    tool: [utils.genSiderbar('前端工具', tool)],
};
