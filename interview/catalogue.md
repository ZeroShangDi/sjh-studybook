// 更新时间: 2022.05.02
目录
0.1 + 0.2 === 0.3 嘛？为什么？怎么解决？
JS 整数是怎么表示的？
Number() 的存储空间是多大？如果后台发送了一个超过最大限制的数字怎么办?
判断数据类型的方式有哪些？
new 一个函数发生了什么？
new 一个构造函数，如果函数返回 return {} 、 return null ， return 1 ， return true 会发生什么情况？
symbol 有什么用处？
NaN 是什么，用 typeof 会输出什么？
如何判断一个对象是不是空对象？
如何判断数组类型?
函数中的arguments是数组吗？类数组转数组的方法了解一下？
instance 如何使用？
如果一个构造函数，bind了一个对象，用这个构造函数创建出的实例会继承这个对象的属性吗？为什么？
介绍一下Javascript的执行上下文?
介绍一下Javascript的作用域链?
window.name有什么用？
window.window会输出什么？
什么是闭包？如何产生闭包
词法作用域、块级作用域、作用域链、静态动态作用域
闭包有什么应用场景？
如何用闭包制造惰性函数?
介绍一下Javascript的闭包是什么应用场景?
分析一下箭头语法为什么不能当做构造函数
innerHTML、 nodeValue与 textContent之间的区别
DOM操作中，如何获取元素的属性值？ 
简要描述 DOM操作中查找元素的方式
html页面上的一个按钮添加 onclick事件处理，有几种方法？
简述window对象除 document以外的一些常用子对象，并描述其作用？
实现每隔一秒钟弹出一个对话框，且此弹出过程持续5秒钟 
为页面动态添加按钮,
文本框验证
可以实现页面跳转和刷新的方法
怎样添加、移除、移动、复制、创建和查找节点?
列举浏览器对象模型BOM里常用的至少4个对象，并列举window对象的常用方法至少5个？
document.ready和onload有什么区别？
当一个DOM节点被点击时候，我们希望能够执行一个函数，应该怎么做？
window.location.search() 返回的是什么？
简述列举文档对象模型DOM里document的常用的查找访问节点的方法做简单说明？
Dom是那种基本的数据结构
Dom操作的常用API有哪些？ 
Dom节点的Attribute和Property有和区别？ 
DOM性能优化的基本原则
利用冒泡和不利用冒泡的差别?
按HTML查找和按选择器查找的差别
列举DOM中常用优化?
DOM元素e的e.getAttribute(propName)和e.propName有什么区别和联系?
如何最小化重绘(repaint)和回流(reflow)?
描述一下DOM事件模型
谈谈事件委托和事件代理?
前端优化的方法?
前端性能优化的方法
闭包与科里化、偏应用函数的关系
谈谈闭包与即时函数的应用
如何利用闭包完成类库封装
如何用闭包完成模块化(Webpack原理)
let为什么能够解决循环陷阱
为什么一定要有块级作用域？
let是否会造成变量提升
介绍一下this指向4种形式
如何改变this指向?
call和apply有什么区别？
如何实现call和apply、bind？
如何实现一个bind？
介绍一下Javascript的原型和原型链
Javascript继承的方式有那几种？
什么是组合式继承
ES5继承和ES6继承的区别？
变量提升的一道难题
React中的事件绑定与箭头函数
Javascript中的实例方法、原型方法、静态方法
Vue中的this指向问题
呈现一个wiki页面你会用到哪些语义化标签
图片懒加载的原理
Html5与Html4的不同
块级元素、行内元素分别有哪些
SVG和CANVAS的区别？
Script放在body或header中会阻塞吗?
简述一下浏览器渲染过程
回流和重绘
浏览器的存储方式和区别？
缓存、强缓存和协商缓存？
浏览器中的事件循环宏任务与微任务
浏览器中的通讯方式有哪些
详细说一个ServiceWorker的应用
JavaScript中的垃圾回收和内存泄漏
简要说一下webpack构建的流程和核心概念
说一下Loader是什么，列举一些常见的loader。
说一下常见的Plugin
使用webpack开发时，你用过哪些可以提高效率的插件
source map是什么？生产环境怎么用？
Webpack中的文件监听原理呢？
如何对bundle体积进行监控和分析？
文件指纹是什么？怎么用？
在实际工程中，配置文件上百行乃是常事，如何保证各个loader按照预想方式工作？
如何优化 Webpack 的构建速度？
谈谈什么是chunk，如何分模块分组件分chunk。
是否写过Loader？简单描述一下编写loader的思路？
是否写过Plugin？简单描述一下编写Plugin的思路？
聊一聊Babel原理与AST
谈一谈Treesharking的原理，以及webpack中的Treesharking
如何实现持久化缓存
谈谈通过webpack配置优化实现页面性能提升
如何优化webpack构建速度
是否可以利用swc或者esbuild提升webpack构建速度
简述Webpack的原理与构建过程
聊聊并行与串行、同步与异步、阻塞与非阻塞
解释一下JS中的异步IO、回调、Eventloop
解释如何使用Thunk解决回调地狱
解释一下如何用Promise解决回调地狱
解释一下Promise与观察者模式的关系
解释一下Generator是如何解决回调地狱的
解释一下Co函数的作用，如何编写Co函数
解释一下Async/Await的原理
如何实现一个并发函数
解释一下事件与订阅发布的关系
解释一下事件如何解决回调地狱
如何编写一下并行处理函数
什么是迭代器、手写一个迭代器
说一下webpack中的loader和plugin中配置的执行顺序？
谈谈Promise与有限状态机的关系
大量订单并发，订单状态不同步怎么处理，比如用户已经支付成功，但页面显示还是待支付状态
如果有大量用户，数据库（或redis）存储的Token量超过存储上限怎么办
讲一下Happypack的原理
使用cdn的时候，为什么用户访问次数越多，响应越快
react-fiber可以中断更新，如果大批量的setstate，页面也卡顿吗？
react渲染有不同的优先级是怎么实现的
可视化大屏-如果用户用Sql查询，有哪些防攻击的手段
可视化大屏-大量数据渲染，出现卡顿怎么解决
什么是函数式编程
什么是无状态和数据不可变(Statelessness and Immutable data)
什么是引用透明
什么是惰性计算
React为什么是典型FP，ReactView = render(data)怎样FP方式理解？
解释一下纯函数
解释一下科里化和组合
什么叫做副作用
函数的arguments为什么不是数组？如何转化成数组？
什么是声明式编程，举例说明他的好处
什么是惰性执行
对比vue2，vue3的函数式风格体现在什么地方
TS中any与unkonow与never类型都是什么
TS中接口是什么与类型的关系是什么
TS中的泛型是什么应用场景
TS中的元组和枚举类型的作用
什么是装饰器，与装饰器模式的关系是什么
TS中is关键字的用法
什么是可调用类型注解
什么叫类型推导
TS中什么是索引类型
Typescript的keyof的作用是什么
Typescript中的映射类型是什么
Typescript中的条件类型
解释一下BFC
什么是媒体查询
列举CSS3的新特性
元素居中的方式有哪些
什么是流式布局
什么是栅格化布局
什么是自适应布局
什么是响应式布局
前端本地开发使用端口号3000有没有特殊含义