# 面试笔记

### ES6 语法
[toc]
- let 声明变量
- const 声明常量
- import 导入模块（文件/组件）
- class 声明一个类
- Symbol （肾宝： 符号象征）表示唯一值
- ...arg 不定参数功能相似 arguments: 是个类数组不能直接使用数组方法 (...展开运算符)是一个数组可以使用数组方法

### 数据类型 
> 基本数据类型
- 数字 number 
- 字符串 string
- 布尔 bollean （true false） （！是取反） （！！是转布尔值运算）
- null （空对象指针）空
- undefined （未定义）
- Symbol（肾宝： 符号象征）表示唯一值 和谁都不相等包括自己

---

> 引用数据类型
- 对象 object
    - 普通对象
    - 数组对象
    - 正则对象（匹配字符串的规则）
    - 日期对象
- 函数 function

---

### 常见输出方式
> 
- innerHTML/innerText属性修改元素中 HTML 或者文本 前者可以识别标签 输出标签作用后的内容 后者不能识别标签只输出文本
- console.log()在浏览器控制台输出日志( 读作 `console.log` 方法执行，把想要输出的变量或者内容放在小括号里)
- alert (方法 函数)在浏览器中通过弹框形式输出(浏览器提示框)

---

### 有效数字检测 数据类型转换 数据类型检测
- isNaN(需要检测的值) 方法 检测当前是否是一个有效数字,如果是一个有效数字. isNaN 执行后就会得到一个 false ,否者 isNaN 执行后会得到一个 true

### js 判断语句
> if / else if / else 判断语句是流程控制的重要语句,其作用是当满足某些条件时才能执行的某些代码
``` if/else if/else
    // 单独使用if
if (条件) {
  // 浏览器会对条件进行布尔运算，即求出条件时 true 还是 false。条件为 true 时，即条件成立的时候才会执行这个花括号里面的代码
}

// 两种情况，结合 else
if (条件) {
  // 条件为 true 时
} else {
  // 不满足条件的时候要执行的代码
}

// 多种情况，结合 else if
if (条件1) {
  // 条件1为 true 时
} else if (条件2) {
  // 条件2为 true 的时候要执行的代码
} else {
  // 上面条件都不满足条件的时候要执行的代码
}
```
> 三元运算符 语法: 条件? 成立时要做的事情 : 
不成立时返回的值
```
    var num = 12;
    if (num < 10) {
      num++;
    } else {
      num--;
    }
    
    // 改写成三元运算符
    
    num > 10 ? num++ : num--;
    
    -------------
    
    // num > 10就++，否则啥也不做

    num > 10 ? num++ : null;
    num > 10 ? num++ : undefined;
    num > 10 ? num++ : void 0;
    如果三元运算符中条件成立或者不成立时不需要任何操作，我们用null/undefined/ void 0占位
    
    -----------
    
    var num = 10;
    num >= 10 ? (num++, num*=2) : null;
    如果在条件成立（或不成立）时有多条语句，需要用小括号括起来，每条语句；
```

> switch case 
```
    switch (变量或者表达式) {
      case 值1:
        变量或者表达式的值是值1的时候执行的代码;
        break;
      case 值2:
         变量或者表达式的值是值2的时候执行的代码;
         break;
      ...
      case 值n:
        变量或者表达式的值是值1的时候执行的代码;
        break;
      default:
        以上情况都不满足时，相当于else
    }
    
    ------------------
    
    switch case应用于变量（表达式）在不同值的情况下的不同操作，每一种 case 结束后都需要加break（break是结束整个判断）;
    var num = 12;
    if (num == 10) {
      num++;
    } else if (num == 5) {
      num--;
    } else {
      num = 0;
    }
    
    // 改写成 switch case
    switch (num) {
      case 10:
        num++;
        break;
      case 5:
        num--;
        break;
      default:
        num = 0;
    }
    switch case 中每一个 case 的比较都是基于 === 绝对相等来完成判断的。即 10 === '10' 是 false。真实项目中常用绝对比较。
```

### 逻辑运算符 ||或者 &&并且
- || 表示或者, 两者中有一个为 true ,就返回 true
> 先看第一个条件是不是 true 是的话就返回第一个不是的话在看第二个 如果还不是 在往后查看 如果没有了就返回最后一个条件
```
    if (0 || 1) {
      console.log('true')
    }
    if (0 || false) {
      console.log('false')
    }
    if (true || 0) {
      console.log(true);
    }
    
    -------
    
    let num = 0
    let fsa = false
    let kkk = true
    if (num || fsa || kkk) {
      console.log(666)
    } else {
      console.log(777)
    }
```

- && 是并且,两个值中必须两个都是 true, 才会返回 true 其中有一个是 false 就会返回false

```
    if (0 && 1) {
      console.log(1, '0 && 1')
    }
    if (0 && false) {
      console.log(2, '0 && false')
    }
    if (true && 0) {
      console.log(3, 'true && 0');
    }
```

### for 循环
> for 循环 (for loop) 语句:按照一定的规律,去重复做某一件事情, 此时就需要使用循环语句
- 定义初始值 let i = 0
- 设定循环成立的条件 i < length (如果条件成立执行循环,不成立则结束循环)
- 条件成立会执行循环体中的内容 (循环体就是还括号中的代码)
- 执行累加 ++
```
    var k = 0;
    for (;k < 5;) {
      console.log(k);
      k++;
    }
    console.log(k); // 在外面的k也被更改了，已经变成了5
```
> 倒着循环一个数组
- 把 i 的初始值设置为 ary.length - 1 , 然后条件是 i >= 0; i--
```
    var ary = [12, 23, 34];
    for (var i = ary.length - 1; i >= 0; i--) {
      console.log(ary[i]);
    }
```

> 理解 break 和 continue
- continue 跳出某一轮的循环, 继续后面的循环
```
    for (var i = 0; i < 10; i++) {
      if (i === 5) {
        continue; // 跳出i=5的那一次循环。结束本轮循环（循环体中的continue后面的代码将不再执行，继续执行下一轮循环）
      }
      console.log(i)
    }
```
- break 执行 终止整个循环 写 return 一样
```
    for (var i = 0; i < 10; i++) {
      if (i === 5) {
        break; // 结束i=5及以后所有的循环。break是强制结束整个循环，不做任何处理，同时循环体中的break后面的代码也不会执行了
      }
      console.log(i)
    }
```

### for in 循环
> for in 循环是专门用来遍历对象的可以把对象里面的属性一个一个的遍历出来 <br>
注意: for in 只能遍历对象的可枚举属性,一般浏览器默认添加的都是不可枚举属性, 例如__proto__
```
    var obj = {
      name: '珠峰',
      age: 10
    };
    
    for (var k in obj) {
      // k 代表每次遍历时的属性名
      console.log('k ', k);
      console.log('obj[k]', obj[k]);
    }
```

### 获取 DOM 对象
> DOM 对象: 我们通过 js 的相关和 html 方法获取到的 html 文档中的元素
- document.getElementById(ID 名)
> 返回值(函数执行过后的结果): 如果获取到,就是获取到的 DOM 元素对象, 如果获取不到就是 null;
- 解析:
    - document 是根据 ID 查找上下文,document 代表的是整个 HTML 文档(就是 html 标签自身及包裹的所有内容), getElementById 的上下文只能是 document
    - 通过getElementById 获取的元素是一个对象数据类型的值(里面包含了衡多的内置属性,这些属性都是描述这个对象的)
    - DOM 对象的属性
        - className: 储存的是字符串类型,代表的是当前元素的样式类名
        - id: 储存的是一个字符串类型,当前元素 ID 名
        - innerHTML: 字符串 储存的当前元素中的所有内容(包含标签, 并且以字符串形式存在)
        - innerText: 储存当前元素中的所有文本内容(没有元素标签)
        - onclick:鼠标点击事件元素的点击事件属性,基于这个属性,我们可以给元素绑定点击事件
        - onmouseover: 鼠标划过事件
        - onmouseout:鼠标划出事件
        - style:储存当前元素的所有的(行内样式) 值(获取和操作的都只能是写在标签行内样式,写在样式表中的样式,无无法通过这个属性获取到)
- getElementByTagName()
> 通过标签名获取元素对象集合
- 解析:
    - 返回值: 从 context 下面查到的指定标签名 DOM 元素对象组成的集合;这个集合中的每一项都是 DOM 元素对象
    - context 不是写死的,是我们指定的上下文,你想获取那个元素下面的指定标签元素集合;那个元素就是上下文
    
### 数组方法
- 创建一个数组 let ary = []
- let arr = new Array()
- 通过索引访问元素
```
    let arr = ['apple', 'banana'];
    let first = arr[0];
    console.log(first, '----通过索引访问数组'); //'apple'
    console.log(arr[arr.length - 1], '-------访问数组中最后一位元素') //'banana'

```
- 遍历数组 
```
    let arr = ['apple', 'banana'];
    arr.forEach((item, index, array) => {
        console.log(item, '------item')  //'apple' 'banana'
        console.log(index, '------index') // 0,1
        console.log(array, '-----array') //['apple','banana']
    })
```
- push() 向数组末尾添加元素
- pop() 删除数组末尾元素
- shift() 删除数组最前面的元素
- unshift() 向数组开头添加元素
- indexOf()查看某个元素在数组中的位置,如果有就返回当前元素的索引,没有就返回 -1
- lastindexOf() 方法 返回指定元素在数组中最后一次出现的位置 如果存在返回该元素 索引 没有返回 -1
- includes() 方法 判断数组中是否包含着一项可以作为条件判定来用 有就返回 true 没有就返回 false
- splice 是数组中最强大的功能之一,增 ,删, 改
- slice 不会改变原数组
- Array.from()方法从一个类似数组或可迭代对象中创建一个新的数组实例
```
    const bar = ['a', 'b', 'c'];
    Array.from(bar);
    const foo = Array.from('foo');
    console.log(foo); //[ 'f', 'o', 'o' ] 
```
- Array.isArray() 用于确定传递的值 是不是一个数组
- Array.of() 方法创建一个具有可变数量的新数组实例
- concat() 将数组拼接起来 需要拼接数组或多个数组项返回拼接后的新数组 元素组不变 不传参相当于把数组复制一遍
- array.copyWithin(target, start, end) 方法是从另一个数组复制索引对应的元素 target 必填, 指定被替换的元素,start 元素复制的起始位置 end 元素复制停止的索引位置不包含end
```
target	必需。复制到指定目标索引位置。
start	必需。元素复制的起始位置。
end	可选。停止复制的索引位置 (默认为 array.length)
let copyWithinArr = ["alpha", "beta", "copy", "delta"].copyWithin(1, 2, 3);
1=='beta'
2=='copy'
3=='delta'
console.log(copyWithinArr) // [ 'alpha', 'copy', 'copy', 'delta' ]
let copyWithinArr1 = ["alpha", "beta", "copy", "delta"].copyWithin(2, 0);
console.log(copyWithinArr1) //[ 'alpha', 'beta', 'alpha', 'beta' ]

```
- fill(x,y,z) 方法替换 能用一个固定值填充从起始索引到终止索引的全部元素写一个值全部替换原数组改变返回替换后的数组  两个值 x 为指定替换元素 y 为替换起始索引位置 三个值 z 代表停止替换的个数
```
    arr.fill(value，start，end)
    let fillArr = [1, 2, 3, 4, 5];
    console.log(fillArr.fill(3)) //[ 3, 3, 3, 3, 3 ]
    console.log(fillArr.fill(2, 0, 2)) //[ 2, 2, 3, 3, 3 ]
    console.log(fillArr.fill(5, 1)) // 2, 5, 5, 5, 5 ]
```
- filter() 方法过滤根据条件过滤出数组中符合条件的数组项并返回新数组原数组不变
```
    let filter = (value) => {
        return value > 10
    }
    console.log([15, 13, 2, 16, 3].filter(filter))  // 15, 13, 16 ]

```
- find() 方法返回数组中满足提供的测试函数的一个元素的值,否者返回 undefined
```
    console.log([15, 13, 2, 16, 3].find(filter))  // 15 返回第一个满足条件的值  否则undefined

```
- findindex() 方法返回数组中满足提供的测试函数的第一个元素的索引,否则返回-1
```
console.log([15, 13, 2, 16, 3].findIndex(filter))  // 0 返回第一个满足条件的下表  否则-1

```
- forEach() 方法参数提供一个回调 对数组中的每一个元素都执行次函数 遍历数组
- join() 方法将一个数组(或者类数组对象)的所有元素通过指定分隔符将数组连接成字符串 参数分隔符 不指定默认空字符串 返回拼接后的字符串 元素组不改变
- toString() 方法 把数组转化成字符串 返回一个新的字符串 原数组不变
- map() 方法 将原数组映射成一个新数组 参数是一个回调函数(回调函数的参数如同forEach)返回值 由回调函数的返回值组成的新数组 原数组不变
- sort() 方法 用于数组排序参数是哥回调函数 如果需要数组升序回到函数return a-b 反之b-a 返回排序过后的数组 原数组发生改变
- reverse() 当数组反转过来 没有参数 返回值是反转后的数组 原数组发生变化
- reduce() 方法 将数组的每一项相加(从左往右)返回相加过后的值
- reduceRight() 方法 和 reduce 一样 只是相加方向是 从右往左
- toLocaleString() 返回一个新的字符串 原数组不变
### js 字符串方法
> 通过索引获取字符或 Unicode
- charAt(index) 获取字符串中索引为index的字符.
- charCodeAt(index) 获取字符串指定索引位置的字符 Unicode 编码值, 返回的是一个 0 - 65535 的整数
> 复制和截取字符串
- substr(n,m) 从 n 开始截取 m 个,若不写 m ,则截取到末尾. 如果 n 和 m 都不写,则截取全部
- subString(n,m)从索引 n 处开始截取, 截取到索引为 m 结束(不包含 m),如果只写 n,是从 n 开始截取到末尾,如果一个都不写,那就是截取全部
- toLowerCase() 方法 大写转换小写(只能转英文字母)
- toUpperCase() 方法 小写转大写(只能转英文字母)
- indexOf() 方法获取字符在字符串中首次出现的索引位置,如果字符串中不包含这个字符,则返回-1 
- lastindexOf() 方法获取字符在字符串中最后一次出现的位置,如果字符串中不包含这个字符,则返回-1
- split() 方法 按照指定的分隔符把字符串拆分成数组(数组中的join方法这个相反,join是根据指定的分隔符数组拼接成字符串)
- replace() 方法字符串替换
```
    var str3 = 'zhufeng培训';
    // 5.1 replace(old, new)
    var s9 = str3.replace('zhufeng', '珠峰');
    console.log(s9);
    
    // 5.2 replace(old, function () { return new})
    var s10 = str3.replace('zhufeng', function () {
      return '珠峰'
    });
    console.log(s10);
```
- match() 方法 如果匹配到,就返回一个数组,如果匹配不到就返回 null 参数正则表达式或者RegExp对象
- trim(退儿牧) 删除前置和后缀的空格 返回的是字符串的副本，原始字符串不变
- search() 接收一个正则,返回中第一个匹配项的索引,没哟返回 -1
> Math对象,是浏览器中内置的专门处理数学计算的对象,Math 内置了很多的数学方法.
- Math.abs() 获取绝对值 可以处理负数 (小数不识别)
- Math.floor() 方法向下取整只要是小数都会向下取整
- Math.ceil() 方法向上取整只要是小数都会向上取整
- Math.round() 方法 四舍五入 注意负数是四舍六入
- Math.random() 方法生成一个 0-1 之间的饿随机小数
- Math.round(Math.random() * (m - n) + n) 生成一个n-m之间的随机数
- Math.sqrt(n) 方法 获取 n 的算数平方根
- Math.PI() 方法 获取圆周率
### Date 类型
> 1. js 中获取日期时间
var date = new Date(); // Date 是一个类型, 我们通过 new 操作符获取 Date 的实例
console.log(date); // 这个 date 是标准的时间格式
console.log(type date) // date 实例是一个对象数据类型的值

> 2. Date实例方法
- getFullYear() 获取4位年份,就返回4位年份
```
    var year = date.getFullYear();
    console.log(year);
```
- getMonth() 获取月份,返回 0-11 的数字, 0 代表代表1月份11代表12月份
```
    var month = date.getMonth();
    console.log(month);
```
- getDay() 获取星期几,返回 0-6 的数字 0代表周日 6代表周六
```
    var today = date.getDate();
    console.log(today);
```
- getDate() 获取今天是几号 今天是几号就返回几
```
var today = date.getDate();
console.log(today);
```
- getMinutes() 获取去当前几点的分钟数,现在是几点就返回几
```
    var min = date.getMinutes();
    console.log(min);
```
- getSeconds() 获取当前几点的秒数,是几秒就返回几
```
    var mills = date.getMilliseconds(); 
    console.log(mills);
```
- getMilliseconds() 获取当前时间的毫秒数,是几毫秒就返回几
```
    var mills = date.getMilliseconds(); 
    console.log(mills);
```
- getTime() 获取时间戳, 时间戳是当前时间时刻距离 1970年1月1日0时0分0秒的毫秒数
```
    var timeStamp = date.getTime();
    console.log(timeStamp);
```
- Date 格式化时间 
> 时间字符串转时间对象;Date 的另一个作用是可以把事件格式的字符串转换为时间对象,转换成时间对象,转换成时间格式对象后就可以 getFuillYear 等方法
```
    var str = '2019-10-10 17:34:23';
    var date2 = new Date(str);
    console.log(date2);
    console.log(typeof date2);
```

### 定时器 
> 设置定时器 `setTimeout(function(){时间到了要执行的代码}, 时间间隔)` 返回定时器ID (延时定时器)
```
    var timer1 = setTimeout(function () {
      console.log('2s到了');
    }, 2000);
```
> setInterval(函数, 时间间隔) 返回定时器ID (间隔定时器)
-  清除定时器 clearTimeout(定时器id) 清除延时定时器
-  清除clearInterval(定时器id) 清除间隔定时器

### js中获取 DOM 的方法
- document.getElementById() 根据id获取 dom 元素对象
- context.getElementsByClassName() 在上下文中,根据元素 class 名获取元素集合
- document.getElementsByName() 通过 name 属性获取元素对象,一般用于表单元素集合
```
    var input = document.getElementsByName('inputField');
    console.log(input);
```
- document.documentElement 获取 html 元素对象
- document.body 获取 body 元素对象
- 获取浏览器可视口的宽度和到度 
```
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(winW);
    -----
    var winH = document.documentElement.clientHeight || document.body.clientHeight;
    console.log(winH);
```
- 根据选择器获取 (可以在移动端使用, 在pc端有兼容问题)
```
    context.querySelector(css选择器) 获取一个
    context.querySelectorAll(css选择器) 获取所有
    ----
    var single = document.querySelector('.some-box');
    console.log(single);
    
    var multi = document.querySelectorAll('.some-box');
    console.log(multi);
```
### DOM 节点
- 节点
> 在 html 中所有的内容都成为节点 (node). 节点是通过节点属性描述节点间关系的,并且根据节点关系获取元素对象
DOM 节点

| 节点 | nodeType | nodeName | nodeValue|
| :---: | :---: | :---: | :---: |
| 元素节点 | 1 | 大写标签名 | null |
| 文本节点 | 3 | #text | 文本内容 |
| 注释节点 | 8 | #comment | 注释内容 |
| document | 9 | #document | null |

> 注意换行和空格都是文本节点

- 节点属性
    - childNodes 获取当前元素的所有子节点,属性值是集合
    - children 获取当前元素的所有元素子节点,属性值是集合
    - firstChild 获取当前元素的第一个子节点
    - firstElementChild 获取当前元素的第一个元素子节点
    - lastChild 获取当前元素的最后一个子节点
    - lastElementChild 获取当前元素的最后一个元素子节点
    - parentNode 获取当前元素的父亲节点,属性值是对象
    - parviousSibing 获取上一个哥哥节点
    - previousElementSibling 获取上一个元素哥哥节点
    - nextSibling 获取下一个弟弟节点
    - nextElementSibling 获取下一个元素弟弟节点
    - 根据节点间关系获取到的节点集合或者节点都是 DOM 元素集合或者 DOM 元素对象, 我们可以操作这些集合或者对象,和操作 DOM 集合或者对象一模一样
    ### 动态操作 DOM 
    - 动态创建 DOM 元素对象 document.createElement()
        - 语法: document.createElement()
        - 参数: html 标签名
        - 返回值: 新创建的 DOM 对象
        - 注意: 新建的 DOM 对象和我们从页面中获取的 DOM 对象操作起来没有任何区别
    - appendChild: 向元素容器的末尾添加一个元素
        - 语法: 父级容器 appendChild(元素对象)
        - 参数: 元素对象(新建的也行,之前已经存在也行)
        - 返回值: 插入到容器中的元素对象
    - 父级容器.removeChild()
    - insertBefore(银色特) 把一个元素插入到指定容器中某一个元素标签之前
    - 语法: 父级容器 insertBofore(newEle, oldEle)
    - 参数: 要插入的新元素,已经存在于容器的老元素
    - 返回值: newEle
- cloneNode() 把一个节点进行克隆
    - 语法: curEle.cloneNode(false)
    - 参数: true 表示深度克隆,把当前节点的子孙节点都克隆;false表示只克隆当前节点
    - 返回值: 克隆出来的节点
- 属性操作
    - setAttribute() 给当前元素设置 html 行内属性
        - 语法: 元素对象.setAttrybute(attr,valus)
        - 参数: 属性名,属性值
    - getAttribute() 获取当前 html 某个行内属性的属性值
        - 语法: 元素对象.getAttribute(attr)
        - 参数: 属性名
        - 返回值: 属性值
    - removeAttribute() 删除指定的属性

### 变量提升
- 在 js 代码执行之前,对所有带 var function 的变量进行提前声明和定义(赋值);
- 对带 var 的进行提前声明,不赋值(变量声明不赋值,变量的值是默认值 undefinde),只是浏览器知道有这么个变量
- 对于带 function 的进行提前声明 并且定义为函数本身 变量提升接收后,代码才会从上到下执行
- 当执行到 var 变量 = 值 时,此时才会对变量进行赋值,
- 而当执行到 function 函数名的时候,跳过 因为在变量提升的时候就已经完成了赋值过程

### js 运行原理
- js 运行环境(栈内存): 作用
> 作用域是 js 运行的环境,另一个功能是保存基本数据类型, 在 js 中作用域分为:
    - 全局作用域: 的那个页面打开时,首先 先形成一个全局作用域(window),执行全局中的代码.
    - 私有作用域 (函数作用域)当函数执行时,形成一个函数作用域,这个作用域用来保存函数中的基本数据类型同时执行函数代码
    - 块级作用域(类似私有作用域基于 es6 的 let 声明变量)
- js 运行过程
    - 在 js 代码执行前,浏览器会开辟一个全局作用域,然后执行变量提升,完成变量提升操作后,代码开始从上到下开始执行;
    - 当执行时,如果遇到基本数据类型,就在作用域存储该基本数据类型
    - 如果遇到引用数据类型,则浏览器会再次分配一个堆内存,然后把引用数据类型的内容存储到堆内存中,接下来再把这个堆内存的地址赋值给变量(此时这个地址是存储在作用域内存中)
    - 遇到函数执行时,会经历以下几步
        - 浏览器会开辟一个私有作用域
        - 形参赋值,把执行时的实参赋值给函数形参变量
        - 私有作用域中变量提升
        - 函数代码从上到下执行
- 私有变量和全局变量
    - 全局变量: 在全局作用中声明的变量
    - 私有变量: 函数的形参以及在函数私有作用域中声明的变量
> 预解释只发生在当前作用域,如果函数不执行,函数中的变量不会进行变量提升
### 重复声明的问题
- 同名变量只会声明一次,代表的值就是最后一次的值
- 变量提升时,function 的优先级高于普通变量
- 如果变量名和函数名同名,在执行到变量的赋值语句之前时,这个名字代表函数,但是当执行过变量赋值语句后 就不在代表函数名了 而是变量名
### 变量提升的细节问题
- 等号右侧的不会进行变量提升,即使右侧是函数也不会进行变量提升
- 条件语句中的变量不管条件成立与否都会参与当前作用域中的变量提升.
- 函数中,return 下面的代码虽然不执行,但仍会进行函数作用域中的变量提升
- 函数的返回值不会参与变量提升; return 右边的不会参与变量提升

### 带 var 和不带 var 的区别
- 在全局中,用 var 和 function 声明的变量,也相当于给 window 上添加一个同名属性
    - 全局作用域是一个内置对象 window
- 不带 var 的不会参与变量提升
### 作用域链
- js 中的作用域
    - 全局作用域
    - 私有作用域
    - 块级作用域
### 作用域链: 变量的查找机制:
> 当在作用域中查找一个变量的时候,先看当前作用域中是否声明过这个变量,如果声明过,就是用这个变量,如果没有声明过,那么就去上级作用(上级作用域就是函数声明时所在的作用域)查找.找到就使用,如果没有就一直向上查找,一直找到 window 为止,如果本次使用变量是赋值,那么就相当于给 window 上面增加一个属性,如果是引用变量,就会报错
### 上级作用域的确定:
- 如何查找上级作用域,就看这个函数是在哪里定义的

### js 堆栈内存, let const
> 堆栈内存开辟及销毁 let,const
js 引擎中的内存分类:
- 栈内存(作用域)供 js 代码执行的环境,保存基本数据类型
- 堆内存: 存储引用数据类型
### 堆内存的创建和销毁
- 创建: 创建一个对象,数组,函数,等引用数据类型,浏览器都会分配一块堆内存地址,存储引用数据类型的数据;
- 堆内存释放: 让所有引用堆栈内存空间地址的变量赋值为 null 即可(没有变量占用这个堆内存了,浏览器会在空闲的时候把它释放掉)
### js 中的栈内存开辟和释放
- 栈内存(作用域): 供 js 代码执行的环境,也是用来保存基本数据类型的
#### 栈内存的创建:
- 当浏览器打开时,首先会开辟一个顶层的栈内存,就是全局作用域
- 函数执行时,也会开辟一个供函数代码执行的栈内存(私有作用域)
> 函数每一次执行,都会形成一个全新的在栈内存,即每次函数执行都是一个全新的环境里面执行,所以函数每次执行都是相互排斥的
#### 栈内存销毁:
- 全局栈内存: 页面关闭时才会销毁
- 函数的私有作用域: 一般函数执行完成后,栈内存自动销毁,但是有一些特殊情况需要注意;
### 栈内存不销毁的情形
- 函数栈内存: 正常情况下,函数执行会形成一个栈内存(作用域),当函数执行完成后就会自动销毁.
- 但是函数执行完成后,当前形成的栈内存中,某些内容被栈内存以外的变量占用了,此时栈内存不能释放(一旦释放外面找不到原有的内容了).栈内存不销毁,保存在栈内存中的数据也不会被销毁
- 函数返回值被占用
```
    function fe() {
      return {
        name: "珠峰培训"
      }
    }
    var obj = fe(); // 函数fe执行形成一个不销毁的栈内存，里面定义的对象被外部obj变量占用，因而作用域不销毁
    
    fe(); // 他们正常形成栈内存，但是执行后会被销毁

```
- 函数内部的引用数据类型被外部占用,函数执行的作用域不销毁
```
    var x = null;
    
    function fn() {
      x = {
        name: 'zf'
      }
    };
    fn(); // 此时x占用着fn的作用域中对象{name: 'zf'}

```
### 累加计数
- 需求: 实现一个累加计数的功能,点击一次,让按钮中的数字累加
- 思路: 既然是累加,一定是有一个地方保存着他的上一个值,关键就在于保存在哪里
- 1. 把值保存在全局作用域
```
    var count = 0; // count保存在全局作用域
    btn.onclick = function () {
      count++; // 操作全局变量
      btn.innerHTML = count;
    };
```
- 2. 自定义不销毁的私有作用域
```
    btn.onclick = (function () {
      var count = 0; // count的值保存在
      return function () {
        btn.innerHTML = count;
      }
    })();

```
- 3.自定义不销毁的函数作用域2
```
    (function () {
      var count = 0; // count保存在自执行函数形成的私有作用域中
      btn.onclick = function () {
        count++;
        this.innerHTML = count;
      }
    })();
```
- 4. 块级作用域
```
    {
        let count = 0; // let 会把花括号变成块级作用域，等效于私有作用域，count的值保存在块级作用域中
        btn.onclick = function () {
        count++;
        this.innerHTML = count;
        }
    }
```

### 闭包 面向对象基础
- 闭包定义: 函数执行时形成一个私有作用域,保护里面的变量不受外界干扰,这种保护机制称为闭包; 形成一个不销毁的私有作用域(私有栈内存)才是闭包
#### 闭包应用
    - 柯里化函数思想: 把多参数的函数变成单参数的函数
    ```
    function fn(a, b, c) {
      return a + b + c;
    }
    
    function fn1(a) {
      return function (b) { // 这种在函数中return 函数的做法是市面中认为的闭包
        return function (c) {
          return a + b + c;
        }
      }
    }
    fn1(1)(2)(3);
    
    ```
    - 利用闭包机制隔离全局命名空间
    ```
        (function () {
          // 自执行函数执行也是闭包
          let a = 100; // a是一个私有变量，不会影响全局作用域中的变量命名
        })();
    ```
    - 惰性封装
    ```
      var utils = (function () {
      var version = '1.0.1';
      function sum(a, b) {
        return a + b
      }
      function minus(a, b) {
        return a - b;
      }
      return {
        sum: sum,
        minus: minus
      }
    })();
    ```
    - 重写: 子类改写父类的属性或者方法
    - 重载: 根据不同的函数签名(函数参数)自动调用不同的方法; js 中没有真正意义上的重载
    > 真正意义上的重载:
    ```
        function sum(int a, int b) {
          return a + + b;
        }
        
        function sum(char a, char b) {
          return Number(a) + Number(b)
        }
        sum(1, 2)
        sum('2', '3')
    ```
    - 但是因为 js 中的同名变量会相互覆盖,同名的函数,这个函数名只能代表最后一个函数,所以不会有真实意义上的重载
    - 但是可以模拟: 因为重载要的效果就是根据参数的不同情况作出不同的处理
    ```
        function sum(a, b) {
          if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
          } else {
            return Number(a) + Number(b);
          }
        }
    ```
#### 深入原型,原型链
> 原型链: 对象.属性名(obj.xxx)先看私有属性是否私有属性是否有这样一个属性,如果私有属性中没有,根据是实例对象的 proto 找到当前对象所属类的原型查找,如果原型上也没有,就通过原型对象 proto 继续向上查找; 一直找到 Object.prototype 如果也没有就返回 undefined
```
    function Fn() {
      this.name = 'Hi';
    }
```
    - 原型上的添加公有属性的方法
        - 直接给原型添加方法
        ```
            Fn.prototype.say = 'hello';
            Fn.prototype.title = 'world';
            Fn.prototype.greeting = function () {
              console.log('hi~');
            };
        ```
        - 通过实例对象的 proto 因为实例的 proto 指向当前实例所属类的原型对象,所以可以通过修改实例的 proto 方式来修改原型对象
        ```
            let f1 = new Fn();
             f1.__proto__.say = 'hello';
             f1.__proto__.hello = 'world';
             f1.__proto__.greeting = function () {
              console.log('hi~')
             };
        ```
        - 修改原型对象的指向:
        ```
            Fn.prototype = {
              say: 'hell',
              hello: 'world',
              greeting: function () {
                console.log('hi~')
              }
            };
            console.log(Fn.constructor); // Object
            Fn.prototype.constructor = Fn;
            // 当需要批量给原型增加属性或者方法时，我们需要把一个新的对象赋值给类的原型时，此时要给这个对象增加一个constructor属性
        ```
    - 用 constructor 检测数据类型:
    ```
        new Fn().constructor === Fn; // true
        [].constructor === Array; // true
    ```
        - 但是有一个问题, constructor 很容易被修改, 导致检测结果不准确
        ```
            Array.prototype.constructor = 123;
            console.log([1, 2, 3].constructor === Array); // false
        ```
### 面向过程和面向对象的比较
- 面向过程
```
    var name = '张三';
    var age = 26;
    function eat() {
      console.log('张三eat')
    }
    function drink() {
      console.log('张三drink')
    }
    
    function sleep() {
      console.log('张三sleep')
    }
    eat();
    drink();
    sleep();
```
- 面向对象
```
    function People(name, age) {
      this.name = name;
      this.age = age;
    }
    
    People.prototype.eat = function () {
      console.log(this.name + 'eat')
    };
    People.prototype.drink = function () {
      console.log(this.name + 'drink')
    };
    People.prototype.sleep = function () {
      console.log(this.name + 'sleep')
    };
    
    // 描述一个主题：
    let lisi = new People('李四', 20);
    lisi.eat();
    lisi.drink();
    lisi.sleep();

    let wangwu = new People('王五', 35);
    wangwu.eat();
    wangwu.drink();
```

#### 创建文档碎片 创建元素
- `let frg = document.createDocumentFragment(); // 创建文档碎片(fragment:富瑞哥梦特)`
- `let newLi = document.createElement('li');`

### 浏览器是如何实现异步机制的
> js 是单线程的,他一次只能干一件事.而能实现异步,是依赖于浏览器的任务队列实现的.浏览器中有两个任务队列: 主任务队列和等待任务队列;
- 主任务队列: 主任务队列放的都是当前需要同步执行的同步任务;
- 等待任务队列: 把不需要立刻执行的异步任务都放到等待任务队列中
> 当主任务队列中的任务执行结束后,就去执行等待任务队列中的任务,看看那些任务该执行了,如果某个任务该执行了,那么浏览器就会执行它,如果有多个都达到条件了,谁先到的就先执行谁
- 如果主任务队列中的代码执行不完,那么等待任务队列中的任务是不会执行的;
### Promise
- Promise 是 ES6 新增的类 (new Promise) 目的是为了(管理) js 中的异步编程的
- promise 对象的三种状态,
- pending (准备: 初始化成功,开始执行异步任务)
- fulfilled (成功: 异步处理成功)
- rejected (失败: 异步处理异常)

### Vue
```

  // 事件修饰符是为了方便Vue中的事件处理，特有的一种修饰符号；
  // 用法：@事件名.修饰符

  // 常见的事件修饰符
  // .prevent 阻止元素的默认行为
  // .stop 阻止事件冒泡
  // .capture 事件在捕获阶段触发
  // .once 事件只会执行一次
  // .self 自身的事件触发时才执行事件函数

  // 键盘事件修饰符
  // .enter 回车
  // .esc esc键
  // .delete 删除键
  // .space 空格
  // .tab tab键
  // .up 上键
  // .down 下
  // .left 左
  // .right 右

  // 事件修饰符可以连用：@click.prevent.stop

```


