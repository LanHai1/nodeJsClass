#   Nodejs笔记



### Web开发的三大本质

+ **请求** 客户端发起请求
+ **处理**  服务器处理请求
+ **响应**  服务器将请求的结果返回给客户端

### npm 全局安装权限

```shell
sudo npm install -g 模块
```



## Node 介绍



### 1.1. **Node.js** 是什么？

+ ###### Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.(什么是Node.js)

  - Node.js 不是一门语言
  - Node.js 不是库、不是框架
  - Node.js 是一个 JavaScript (运行时)运行环境
  - 简单来说 Node.js 可以解析和执行 JavaScript 代码
  - 以前只有浏览器可以执行 JavaScript 代码
  - 现在的 JavaScript 完全可以脱离浏览器来运行，一切都归功于:N ode.js

+ ###### 浏览器中的 JavaScript

  - EcmaScript 语法
  - BOM
  - DOM 

+ ###### Node.js中的 JavaScript 

  <!--此JavaScript非浏览器的JavaScript Nodejs中的JavaScript 只是采用了 EcmaScript语法 进行编码-->

  - **没有BOM、DOM**
  - EcmaScript 语法
  - 在 Node 这个 JavaScript 执行环境中为 JavaScript 提供了服务器级别的操作API
    * 例如文件的读写
    * 网络服务的构建
    * 网络通信
    * http 服务器
    * …等处理

+ 构建于 Chrome 的 V8 引擎之上

  - 代码只是具有特定格式的字符串而已
  - 引擎可以认识它，引擎可以帮你去解析和执行
  - Google Chrome 的 V8 引擎是目前公认解析执行 JavaScript 代码最快的 
  - Node.js 的作者把 Google Chrome 的 V8 引擎移植了出来，开发了一个独立的JavaScript运行时环境

+ ###### Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.(Node.js的特点)

  - event-driven   <u>事件驱动</u> (**事件处理函数**)
  - non-blocking I/O model   <u>非阻塞</u><u>I/O模型</u> **(异步处理)**
  -  lightweight and efficient   <u>轻量和高效</u>

+ ###### Node.js' package ecosystem, npm, is the largest ecosystem of open source liraries in the world.

  - 拥有强大的**npm** 生态系统 开源库
  - `npm install jquery `



### 1.2. Node.js 开发网站 和 传统PHP等开发网站的区别

| Node.js 开发网站                                             | 传统PHP等开发网站                                            |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| 不需要web容器，因为Node.js本身就是基于更底层的HTTP协议开始的，本身就一个HTTP服务器 | 需要web容器<!--Apache、IIS、Tomcat等-->                      |
| node.exe 进程监听8080端口，接受用户请求，根据不同请求做出对应的处理，最后将处理后的结果返回给浏览器 | 监听8080端口，解析用户请求报文，读取成功后将文件内容响应给浏览器 |
| ![nodeJs开发网站](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/nodeJs开发网站.png) | ![传统PHP等开发网站](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/传统PHP等开发网站.png) |



### 1.3. 为什么要配置环境变量？

**为了让某一个应用程序在任何一个路径下通过命令行运行成功**

<!--在命令行运行应用程序首先会在输入的路径中寻找,没找到的话就会在环境变量中一个一个去找,直到找到然后运行这个应用程序 -->




## 起步



### 2.1. 安装Node环境

+ 查看当前 Node 环境的版本号
  - `node -v`||`node --version`
+ 下载 https://nodejs.org/en/
+ 安装 <!--傻瓜式next安装--> <!--对于已经安装过的，重新安装就会升级-->
+ 确认是否安装成功
  + `node -v`||`node --version`
+ 配置环境变量



### 2.2. Node.js 文件名命名规范

1. 不要使用中文
2. 不要使用空格
3. 不要使用node关键字`node.js`
4. 建议以`-` <!--中划线-->分割单词



### 2.3. REPL

<!--交互式解析器，类似于浏览器的Console控制台-->

- R：Read 读取

- E：Eval 执行
- P：Print 打印
- L：Loop 循环



## Node学习



### 3.1. Hello World

1. 创建编写JavaScript脚本文件

```javascript
let foo = 'hello nodeJs';
console.log(foo); // hello nodeJs
```

2. 打开终端，定位到脚本文件所属目录

![image-20181218134114564](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/image-20181218134114564.png)

3. 输入 `node 文件名`执行对应文件



### 3.2. No BOM - No DOM

```JavaScript
console.log(window); // window is not defined
console.log(document); // document is not defined
```

```JavaScript
ReferenceError: window is not defined
    at Object.<anonymous> (/Volumes/蓝海/前端/14.nodejs/nodeClass/01-/02-NoBOM-NoDOM.js:1:75)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:266:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:596:3)
```

- 在Node中采用EcmaScript进行编码
- 没有BOM、DOM
- 和浏览器中的JavaScript不一样



### 3.3. Node.js 中的 JavaScript

- EcmaScript
- 核心模块
- 第三方模块
- 用户自定义模块



#### 3.3.1. 核心模块

Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中。

例如：操作文件的`fs`核心模块、http服务构建的`http`模块、`path`路径操作模块、`os`操作系统信息模块...

```javascript
let fs = require('fs');
```





### 3.4 fs 模块



#### 3.4.1. fs模块 读取文件

<!--异步地读取文件的内容-->

```javascript
// 读取文件

// 浏览器的 JavaScript 是没有文件操作能力的
// 但是 Node 中的 JavaScript 具有文件操作能力

// fs 是 file-system 的简写，：文件系统
// 在Node中如果想要进行文件操作，就必须要引入 fs 模块
// 在fs 这个核心模块中，就提供了所有的文件操作相关的 API

let fs = require('fs');

// 读取文件 fs.readFile(path[, options], callback)
// 第一个参数 path: 读取文件的路径
// 第二个参数 [, options]: 可填可不填 编码格式 不填写则返回原始的 buffer对象
// 第三个参数 callback: 回调函数 callback有两个参数 (err, data) 
//                            err: 错误信息
//                            data: 读取文件中的内容
fs.readFile("./data/hello.txt", "utf8", function (err, data) {
    if (err) throw err;
    console.log(data);
});
```

`fs.readFile() 会缓存整个文件。 为了最小化内存占用，尽可能优先使用 fs.createReadStream()。`



#### 3.4.2. fs模块 写入文件

<!--异步地将数据写入文件，如果文件已存在，则覆盖文件。-->

```javascript
let fs = require('fs');

// 写入文件 fs.writeFile(file, data[, options], callback)
// 第一个参数 path: 写入文件的路径
// 第二个参数 data：写入的数据 "必须是 string类型 或者 Buffer对象"
// 第三个参数 [, options]: 可填可不填 编码格式 不填写则写入的是原始的 buffer对象 数据
// 第四个参数 callback: 回调函数 callback有两个参数 (err) 
//                            err: 错误信息

fs.writeFile('./data/hello.js', "写入成功", "utf8", function (err) {
    if (err) throw err;
    console.log('写入成功');
})
```

`对同一个文件多次使用 fs.writeFile() 且不等待回调，是不安全的。 对于这种情况，建议使用fs.createWriteStream()。`



### 3.5. http 模块

```javascript
// 使用 Node.js 非常轻松的构建一个web服务器

// 1.加载核心模块 http 
let http = require('http');

// 2.使用 http.createServer() 方法创建一个服务器
// 返回一个server对象
let server = http.createServer();

// 服务器要做什么？
// 提供服务: 对数据的服务
// 发请求
// 接受请求
// 处理请求
// 发送响应
// 3.注册 request 请求事件
// 当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数，callback 回调处理函数

server.on("request",function(){
    console.log('收到客户端请求了');
})

// 4.绑定端口号 启动服务
server.listen(8088,function(){
    console.log('服务器启动成功，请访问 http://localhost:8088')
})

```



#### 3.5.1. http模块 req,res

```javascript
let http = require('http');

let server = http.createServer();

// request 请求事件处理函数有两个参数
//         参数一：request 请求对象: 请求对象可以用来获取客户端的一些请求信息
//         参数二：response 响应对象: 响应对象可以用来给客户端发送响应信息
server.on("request", function (request, response) {

    // request.url 获取路由
    console.log(request.url);
    
    // request.method 获取请求的发送 get/post/...
    console.log(request.method);

    // response.write(chunk[, encoding][, callback]) 给客户端发送响应数据 (可以使用多次，但是最后一定要使用response.end()结束响应)
    // 第一个参数 chunk: 响应的数据(必须是 字符串类型 或者 Buffer对象类型)
    // 第二个参数 [, encoding]: 编码格式 参数是可选的 默认为utf8
    // 第三个参数 [, callback]: 回调函数 参数是可选的 当数据块被刷新且不为空时调用
    response.write('Hello Node');
    response.write('你好 Node',"utf-8");
    
    // 解决乱码
    // response.writeHead(statusCode[, statusMessage][, headers]) 发送一个响应头给请求
    // 第一个参数 statusCode: http响应状态码
    // 第二个参数 [, statusMessage]: http响应状态码对应的消息
    // 第三个参数 [, headers]: 响应头
    response.writeHead(200,"OK",{"Content-Type":"text/html;charset=utf-8"});

    // response.end([data][, encoding][, callback]) 告诉服务器，所有的响应已经处理完毕了，可以结束请求了
    response.end('你好2 Node');
})

server.listen(8081, function () {
    console.log('服务器启动成功，请访问 http://localhost:8081')
})
```

简写

```javascript
require('http').createServer(function(req,res){

}).listen(8080,function(){
    
})
```



##### HTTP Content-Type

Content-Type 常用对照表：http://tool.oschina.net/commons



#### 3.5.2. http-router.js 路由处理

<!--根据请求的不同路径返回不同的处理结果-->

```javascript
require('http').createServer(function (req, res) {
    // 用户请求的路径 .toLowerCase()转小写
    let reqUrl = req.url.toLowerCase();
    // 用户请求的方法
    let reqMethod = req.method.toLowerCase();
    
    // 判断路径 给出不同的处理
    if (reqUrl === '/' || reqUrl === '/index' && reqMethod === 'get') {
        res.end(`index`);
    } else if (reqUrl === '/add' && reqMethod === 'get') {
        res.end(`addGet`);
    } else if (reqUrl === '/submit' && reqMethod === 'get') {
        res.end(`submit`);
    } else {
        // 设置错误响应报文头
        res.writeHead(404, "Not Found", { "Content-Type": "text/html;charset=utf-8" });
        res.end('Page Not Found');
    }
}).listen(8686, function () {
    console.log(`http://localhost:8686`)
})
```

```javascript
// 将数组转化为字符串
JSON.stringify(数组);
// 将字符串转换为数组
JSON.parse(字符串);
```



### 3.6. os 模块

<!--提供了一些操作系统相关的实用方法-->

```javascript
let os = require('os');

// os.arch()方法返回一个字符串, 表明 Node.js 二进制编译所用的 操作系统CPU架构.
console.log(os.arch()); // x64

// os.cpus() 方法返回一个对象数组, 包含每个逻辑 CPU 内核的信息.
//     model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz', <string>
//     speed: 1600, <number> (兆赫兹为单位)
//     times: <object>
//      { user: 37145870, <number> (CPU花费在用户模式下的毫秒时间数.)
//        nice: 0, <number> (CPU花费在良好模式下的毫秒时间数.)
//        sys: 5471950, <number> (CPU花费在系统模式下的毫秒时间数.)
//        idle: 14081840, <number> (CPU花费在空闲模式下的毫秒时间数.)
//        irq: 0 <number> (CPU花费在中断请求模式下的毫秒时间数.)
//      } 
console.log(os.cpus()); 

// os.homedir() 方法以字符串的形式返回当前用户的home目录.
console.log(os.homedir()); // /Users/macbookair

// os.hostname()方法以字符串的形式返回操作系统的主机名.
console.log(os.hostname()); // macbookdeMacBook-Air.local

// os.totalmem()方法以整数的形式返回所有系统内存的字节数.(当前系统的内存)
console.log(os.totalmem()); // 8589934592

// os.type()方法返回一个字符串,表明操作系统的名字
// 'Linux' 在 Linux系统上, 
// 'Darwin' 在 macOS 系统上,
// 'Windows_NT' 在 Windows系统上.
console.log(os.type()); // Darwin

```



### 3.7. path模块

<!--处理文件与目录的路径模块-->

```javascript
// 处理文件与目录的路径模块
let path = require('path');

// path.extname(path) 返回 path 的扩展名 （extension'扩展' name）
console.log(path.extname('./data/hello.js')); // .js

// path.basename(path[, ext]) 返回 path 的最后一部分，类似于 Unix 中的 basename 命令。
// 参数一: path 路径 <string>
// 参数二: [, ext] 文件的扩展名 <string>
console.log(path.basename('./data/hello.js')); // hello.js
console.log(path.basename('./data/hello.js', '.js')); // hello

// path.dirname(path) 返回 path 的目录名(不包含自己文件名，path路径文件的父级路径)，类似于 Unix 中的 dirname 命令。
// 如果 path 不是字符串，则抛出 TypeError
console.log(path.dirname('./data/hello.js')); // ./data

// path.join([...paths]) 使用平台特定的分隔符把所有 path 片段连接到一起，并规范化生成的路径。
// __dirname: 表示当前运行的js文件所在的目录(不包括自己)
// __filename: 表示当前运行的js文件完整目录(包括自己)
console.log(path.join(__dirname,'data','hello.js')); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-/data/hello.js
console.log(path.join(__dirname)); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-
console.log(path.join(__filename)); // /Volumes/蓝海/前端/14.nodejs/nodeClass/01-/08-path.js
```

#### 3.7.1. 获取当前文件的上一级目录

```javascript
var path = require('path')

path.join(__dirname, '..')
```



### 3.8. url 模块

```javascript
let url = require('url'); // 加载模块

let obj = url.parse('/pinlun?name=蓝海&password=lanhai123',true); // get 方式提交的数据

// 路径解析
console.log(obj.query); // { name: '蓝海', password: 'lanhai123' }
```



### 3.9. Node.js 模块化

require加载模块是同步的，因为它使用的是(readFileSync)这个方法，同时加载一个模块多次只会执行一次，在第一次加载的时候会将模块缓存，后续加载会直接在缓存中取。<!--缓存: 键值对-->

<!--在Node中没有全局作用域，只有模块作用域-->

#### 3.9.1. Node.js模块分类

+ ##### 核心模块||内置模块||原生模块

  - fs/http/path/....

+ ##### 文件模块

  - .js/.json/.node(c/c++编写的模块)

  <!--加载是如果没有后缀名则按照此顺序依次尝试加载模块-->

+ ##### 自定义模块

  - mime... `npm install 模块名`

#### 3.9.2. 什么是模块化？

+ 文件作用域
+ 通信规则
  - 加载
  - 导出

#### 3.9.3. CommonJs 模块规范

<!--CommonJs是为JavaScript语言定制的一种模块规范、编程API规范-->

**在 Node 中的 JavaScript 还有一个很重要的概念：模块系统。**

- 模块作用域
- 使用 `require` 方法用来加载模块
- 使用 `exports` 接口对象用来导出模块中的成员

#####    加载 `require `

+ 语法：

```javascript
var 自定义变量名 = require('模块')
```

+ 两个作用： 
  - 执行被加载模块中的代码
  - 得到被加载中的`module.exports`导出接口的对象

#####    导出 `module.exports`

- 语法：

- ```javascript
  module.exports = 对象||函数||值....
  ```

- 作用：

  - Node 中的模块作用域，默认文件中所有的成员只在当前文件模块有效，如果希望被其他文件可以访问的成员则用 module.exports将数据暴露出去即可

#### 3.9.4. 如何进行模块化？(思路)

1. 该模块中要封装什么代码？
2. 这些代码有用到外部的数据吗？if用到了，是否需要通过参数将这些数据传递到当前模块中？
3. 当前模块对外需要暴露的东西 <!--module.exports-->

#### 3.9.5. 一般模块化

+ 模块一：(服务模块) 负责启动服务
+ 模块二：(扩展模块) 负责为req、res对象增加一些更好用更方便的 API <!--context.js-->
+ 模块三：(路由模块) 负责路由判断 <!--router.js-->
+ 模块四：(业务模块) 负责具体路由的业务代码 <!--handler.js-->
+ 模块五：(数据操作模块) 负责进行数据库
+ 模块六：(配置模块) 负责保存项目中用到的配置信息 <!--config.js-->

#### 3.9.6. 模块通讯

在被加载的模块中通过**module.exports**将值传递给加载模块。默认不设置**module.exports**则是一个空对象**{}**。

<!--a.js-->

```javascript
// require 是一个方法 
// require这个函数在 Module.js 这个文件中
// 它的作用就是用来加载模块的

// 加载b模块
let b = require('./b.js');

// a模块想要使用b模块中 getSum() 方法
console.log(b.getSun(10, 10)) // 20

// a模块访问b模块中的配置对象中的端口号
console.log(b.config.port) // 9999
```

<!--b.js-->

```javascript
function getSun(x,y){
    return x+y;
}

module.exports.getSun = getSun;

exports.config = {
    "port":9999
}
```

##### 3.9.6.1. module.exports 和 exports 区别

module.exports 和 exports 指向的是同一个对象。

最终 require() 函数返回的是 module.exports 中的数据

return module.exports. <!--建议使用 module.exports -->

![exports or module.exports](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/exports or module.exports.png)

##### 3.9.6.2. ip 地址 和 端口号

- IP 地址用来定位计算机

- 端口号用来定位具体的应用程序

- 所有需要联网通讯的软件都必须具有端口号
- 端口号的范围从 0 - 65536 之间
- 在计算机中有些默认的端口号，最好不要去使用
  - 例如: http 服务的 80 ...

![ip地址 or 端口号](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/ip地址和端口号.png)



### 3.10. 模版引擎 art-template

npm 下载  `npm install art-template`

**注意**：想要使用这个模版引擎 需要在html文件中引入 ./node_modules/art-template/lib/template-web.js 文件

**强调**：模版引擎不关心你的字符串内容，只关系自己能认识的模版标记语法，例如：{{}} 语法被称之为 mustache语法，八字胡语法

**文档语法** https://aui.github.io/art-template/zh-cn/docs/syntax.html

#### 3.10.1. html中使用 art-template

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="./node_modules/art-template/lib/template-web.js"></script>
    <title>Document</title>
</head>

<body>
</body>
<script type="text/template" id="tp2">
    我叫 {{ name }},
    我今年 {{ age }} 岁,
    我喜欢 {{each love}} {{ $value }} {{/each}}
</script>
<script>
    var ret =  template('tp2', {
        name: '兰海',
        age: 18,
        love: ['a', 'b', 'c']
    })
    console.log(ret);
</script>


</html>
```

```
Console
	我叫 兰海,
    我今年 18 岁,
    我喜欢  a  b  c 
```

#### 3.10.2. node中使用 art-template

```javascript
// 加载模块
var template = require('art-template');

// .render(source, data, options) 编译并返回渲染结果。
// 参数一 {string} source :data
// 参数二 {Object} options :替换的数据对象
var ret = template.render('hi, {{ name }}', {name : 'art-template'});
console.log(ret); // hi, art-template
```

#### 3.10.3. 客户端渲染与服务端渲染的区别

1. 客户端渲染不利于 **SEO** 搜索引擎优化
2. 服务器渲染是可以被爬虫抓取到的，客户端渲染是很难被爬虫爬取到的

<!--真正的网站即不是纯服务器渲染也不是纯客户端ajax渲染，例如京东商品列表就是采用服务器端渲染，为了方便SEO搜索引擎优化，商品评论为了用户体验，而且不需要SEO搜索引擎的优化，所以采用的则是客户端渲染-->



### 3.11. npm

- Node package manager <Node包管理器> 是 Node.js 默认的 以 JavaScript 编写的软件包管理系统

`npm install 模块名`

#### 3.11.1. npm 网站

> npmjs.com

#### 3.11.2. npm 命令行工具

查看npm版本号

`npm --version`、`npm -v`

升级npm

`npm install --global npm`

##### 	3.11.2.1. npm 常用命令

​	[npm 常用命令](http://www.cnblogs.com/PeunZhang/p/5553574.html)

##### 	3.11.2.2. 解决 npm 被强问题

​	npm 存储包文件的服务器在国外，有时候被强速度很慢。

​	https://npm.taobao.org 淘宝的开发团队把 npm 在国内做了一个备份。淘宝 NPM 镜像

​	安装淘宝的 cnpm：

```shell
# 在任意目录执行都可以
# --global 表示安装到全局
npm install --global cnpm 
sudo npm install -g cnpm
```

​	接下来安装包的时候 把之前的 `npm` 换成 `cnpm` 

```shell
# 通过 npm 下载
npm install jquery
# 通过 cnpm 下载
cnpm install jquery
```



### 3.12. package.json

建议每个项目都要有一个`package.json`文件(包描述文件、项目描述文件，就像产品说明书一样)

`npm init -y`

如果你的node_modules不小心删除了也不用担心，我们只需要`npm install`就会自动把package.json文件中的dependencies所依赖的模块都下载下来。

#### 3.12.1. package.json 与 package-lock.json 的区别

package-lock.json(让安装速度变快，保存了项目中所依赖的所有包的地址/版本号)



### 3.13. 浏览器解析请求渲染

<!--浏览器接收到 HTML 响应内容之后，就要开始从上到下进行解析，在解析的过程中，如果发现<link、script、img、iframe、video、audio...>等带有 scr 或者 href(like) 属性标签时，浏览器会自动对这些资源发起新的请求(一个资源对应一个请求)-->

#### 3.13.1. 浏览器访问网站过程面试题

+ 用户在浏览器地址栏中输入地址(<https://www>.taobao.com)

+ 浏览器通过用户输入的地址(URL)构建HTTP请求报文

![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/HTTP请求报文.png)

+ 浏览器发起DNS解析请求，将域名转换为IP地址

  ![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/DNS解析.png)

+ 浏览器将请求报文发送给服务器

+ 服务器接收请求报文并且解析

+ 服务器处理用户请求，将处理的结果封装成HTTP响应报文

  ![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/HTTP响应报文.png)

+ 服务器将HTTP响应报文发送给浏览器
+ 浏览器接受服务器响应的HTTP报文，并解析
+ 浏览器解析HTML页面并展示(响应报文里面的HTML网页代码调用渲染引擎“DOM树-css规则树-渲染树-layout/reflow-再绘制出网页”)，在解析HTML页面时遇到新的资源需要再次发起请求
+ 最终浏览器展示出页面

#### 3.13.2. HTTP请求报文和响应报文的格式(下图有注释)

![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/HTTP请求报文和响应报文的格式.png)



### 3.14. 如何通过服务器让客户端重定向？

1. 状态码设置为 `302` 临时重定向
2. 状态码对应的消息设置为`Found`
3. 在响应头中通过 `Location`告诉客户端往哪重定向

```javascript
	res.statusCode = 302;
    res.statusMessage = 'Found';
    res.setHeader('Location', '/');
    res.end(); // 结束响应
```

301 永久重定向 : 浏览器会记住 (a.html 有个连接到 b.html 再次访问a.html 浏览器会直接访问b.html)

302 临时重定向 : 浏览器不记忆 (a.html 有个连接到 b.html 再次访问a.html 浏览器打开的依旧是a.html )

**服务端重定向针对异步请求无效**



### 3.15. Node 封装函数(异步API)

如果该函数中存在异步处理的代码 那么 这个封装的函数得通过**回调函数**将处理的结果返回出去

因为异步操作可能读取的时间比较长，如果这个时候返回了结果，有可能导致异步操作未结束就将结果给返回了

回调函数：获取异步操作的结果



### 3.16. Promise

callback hell:回调地狱

![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/回调地域.png)

执行读取多个异步代码，执行顺序不会按照代码顺序来执行，取决于的是文件的大小　(异步不会等待 多线程 ) 

想要执行多个异步代码并且顺序要按照代码顺序来执行 => 回调地狱嵌套(异步代码中嵌套异步代码)

为了解决 回调地狱嵌套 带来的代码很难维护并且很丑的问题。所以在 EcmaScrpit 6 中新增了一个API:`Promise`(构造函数)

Promise本身不是异步 里面的任务是异步的

#### 3.16.1. Promise 基本语法

> 参考文档: http://es6.ruanyifeng.com/#docs/promise

```javascript
let fs = require('fs')
let path = require('path')

console.log(`1`)

// Promise 是一个构造函数
// 创建Promise容器 实例化
let readTxtA = new Promise((resolve, reject) => {
    console.log(`2`)
    fs.readFile(path.join(__dirname, 'data', 'a.txt'), 'utf8', (err, data) => {
        console.log(`3`)
        if (err) {
            // console.log(err)
            // 把 Promise 容器的 pediing 状态变为 Rejected 失败

            // 这里调用 reject 实际上就是 then 方法传递的第二个 function
            reject(err)
        } else {
            // console.log(data)
            // 把 Promise 容器的 pediing 状态变为 Resolved 成功

            // 这里调用 resolve 实际上就是 then 方法传递的第一个 function
            resolve(data)
        }
    })
})

console.log(`4`)

// 1 2 4 3

readTxtA.then((data) => {
    console.log('sss',data)
}, (err) => {
    console.log(err)
})
```

![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/PromiseApi代码图示.png)

#### 3.16.2. Promise 解决 callback-hell

```javascript
// 解决 回调地狱

let fs = require('fs')
let path = require('path')

/**
 * Promise 读取文件
 * @param {*} pathTxt 
 */
let readTxt = (pathTxt) => {
    return new Promise((resolve, reject) => {
        fs.readFile(pathTxt, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

readTxt(path.join(__dirname, 'data', 'a.txt'))
    .then((data) => {
        console.log(data)
        // 当 a文件读取成功的时候 
        // 当前函数中 return 的结果就可以在后面的 then 中接收 以此类推 
        // return 一个 Promise 对象
        return readTxt(path.join(__dirname, 'data', 'b.txt'))
    }, (err) => {
        console.log(err)
    })
    .then((data) => {
        console.log(data)
        return readTxt(path.join(__dirname, 'data', 'c.txt'))
    }, (err) => {
        console.log(err)
    })
    .then((data) => {
        console.log(data)
    }, (err) => {
        console.log(err)
    })

    // hello aaa
    // hello bbb
    // hello ccc
```

![](https://github.com/LanHai1/nodeJsClass/blob/master/Node笔记Img/Promise解决callback-hell.png)

#### 3.16.3. Promise 数据库操作 注册用户

先查询数据库是否存在这个用户 存在则提醒用户已存在 不存在则插入数据(注册成功)

```javascript
// 注册用户
// callbcak(errCode) errCode:{0=失败,1=成功}
module.exports.registered = (adminObj, callback) => {
    Admin.findOne({
        name: adminObj.username
    })
        .then((data) => {
            if (data) {
                if (callback) callback(0)
                console.log(`插入失败`)
            } else {
                return new Admin({
                    name: adminObj.username,
                    age: adminObj.age,
                    job: Number(adminObj.job)
                }).save()
            }
        }).then((ret) => {
            console.log(`插入成功` + ret)
            if (callback) callback(1) 
        })
}
```

#### 3.16.4. Promise 数据库多表查询(外键)

```javascript
let db = require('./db.js')
module.exports.promiseIndex = (req, res) => {
    let indexAdmin = new Promise((resolve, reject) => {
        db.queryAdmin((err, ret) => {
            if (err) {
                reject(err)
            } else {
                resolve(ret)
            }
        })
    })
    indexAdmin
        .then((ret) => {
            let adminRet = ret
            console.log(adminRet[0].job)
            let indexJob = new Promise((resolve, reject) => {
                db.queryJob(adminRet[0].job,(err, ret) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve([adminRet, ret]) // 重点
                    }
                })
            })
            return indexJob
        }, (err) => {
            res.send(`<h1>暂无文件</h1>`, err)
        })
        .then((ret) => {
            console.log(ret[0],"---------------",ret[1])
            res.render('Promise使用场景.html', {
                admin: ret[0],
                job: ret[1]
            })
        })
}
```



### 3.17. 原生 Node 中间件

用户从请求到响应中间的一系列处理环节，分步骤处理，每个步骤做一件事，这个步骤就是一个中间处理环节



## Express



### 4.1. 安装

```shell
 npm install --save express
```



### 4.2. Hello Express

``` javascript
// 1. 安装 express (npm install express)
// 2. 加载 express
let express = require('express');
// 3. 创建服务器应用程序
let app = express();
let port = 3033; // 端口号

let fs = require('fs');
let path = require('path');

// 4. 设计路由 业务设计
app.get('/', function (req, res) {
    //res.send(`Hello express`)
    fs.readFile(path.join(__dirname, 'views', 'index.html'), "utf8", function (err, data) {
        if (err) throw err;
        res.send(data);
    })
    //res.send(`你好`)
})
app.get('/about', (req, res) => res.send(`你好，我是expres!`))
// 4.1. 静态资源处理
app.use('/public/', express.static('./public'));

// 5. 开启服务器监听连接
app.listen(port, function () {
    console.log(`http://localhost:${port}`)
})
```



### 4.3. 修改完代码自动重启

第三方命令行插件`nodemon`来帮我们解决频繁修改代码重启服务器问题

`nodemon`是一个基于Node.js开发的第三方命令行工具，安装：

```shell
npm install --global nodemon 
sudo npm install -g nodemon
```

安装完毕后，使用：

```shell
node app.js // all

# 使用 nodemon
nodemon app.js 
```

nodemon 启动的服务会监听文件变化。



### 4.4. 基本路由

路由器

- 请求方法
- 请求路径
- 请求处理函数

get：

```javascript
// 当以 GET 方式请求 / 的时候，执行对应的处理函数
app.get('/',function(req, res){
    res.send(`Hello `)
})
```

post：

```javascript
// 当以 POST 方式请求 / 的时候，执行对应的处理函数
app.post('/',function(req, res){
    res.send(`post router`);
})
```



### 4.5. 静态服务

``` javascript
app.use('/public/',express.static(path.join(__dirname,'public')))
```



### 4.6. Express —— art-template   

#### 4.6.1. 安装

```shell
npm install --save art-template
npm install --save express-art-template
```

#### 4.6.2. 例子

```JavaScript
var express = require（'express'）; // 加载模版
var app = express（）; 
app.engine（'html'，require（'express-art-template'））;  // 渲染文件的后缀

app.get（'/'，function（req，res） { 
    res.render（'index.html'，{ 
        user：{ 
            name：'aui'，
            tags：[ 'art'，'template'，'nodejs' ] 
        } 
    }）; 
}）;

// 修改默认的 views 视图渲染存储目录，可以
app.set('views','新默认路径');
```

#### 4.6.3. 解析表单POST请求

##### 	4.6.3.1. 安装

```shell
npm install body-parser
```

##### 	4.6.3.2. 例子

```javascript
var express = require('express')
// 加载
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parser 中间件
// 只要加了这个配置，req 请求对象上就会多出来一个属性：body (POST请求体数据了)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})
```

#### 4.6.4. Express 处理 404 和 全局错误中间件

注意：处理404的路由模块一定要放在所有处理路由模块的最后面

```javascript
// Express 对于没有设定的请求路径，默认会返回 Cannot GET /xxx
// 如果想要定制这个404 只需要以下配置
app.use((req,res)=>{
    // 所有未处理的请求路径都会跑到这里
    res.send('404.html')
})
```

```javascript
// 全局错误中间件
app.get('/index', (req, res, next) => {
    fs.readFile('/a', 'utf8', (err, data) => {
        if (err) {
            // 当调用 next 的时候，如果传递了参数，则直接往后找 带有四个参数的 应用程序级别中间件
            next(err)
        }
    })
})
app.get('/index', (req, res, next) => {
    console.log(`get第二个中间件`)
})
app.use((err, req, res, next) => {
    console.log(`err 错误了`)
})

// err 错误了
```

#### 4.6.5. Express 常用API

```javascript
// 引用
var express = require("express");
// 应用中间件
var app = express();
// 路由中间件
var router = express.Router();
// get\post请求路径
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
// 获取参数
get请求 req.query.name
post请求 req.body.name // 需要加载 body-parser 模块并配置
// 加载 body-parser
var bodyParser = require('body-parser')
// 配置 body-parser 中间件
app.use(bodyParser.urlencoded({ extended: false }))
// 指向页面index.html 
// 第一个参数不写全路径 默认会从项目中的 views 目录查找该文件 
res.render('index', { title: 'Express' });
// 如果想要修改默认的 views 路径 则可以
app.set('views','新默认路径');
// 指向路由 重定向
res.redirect('/ceo_data');
// psot返回回json 
res.json({success: 1,id: id});
// 发送http响应 会自己设置Content-Type
res.send(data);
// 模块化
var MATH = {
   "pi": 3.14,
   "e": 2.72,
 };
module.exports = MATH;
// 调用
var MATH = require("./MATH")
console.log(MATH.pi); // 3.14
// 注册静态文件
app.use(express.static(path.join(__dirname, 'public')));
// 注册404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// sequelize数据库配置
var Sequelize = require('sequelize');
var my_db=new Sequelize(
    "数据库",
    "sa",
    "pass123",{
        dialect:'mysql', // mysql
        host:'10.7.19.58',
        port:3306
    });
```



### 4.7. art-template 模版继承

```javascript
{{extend './layout.art'}}
{{block 'head'}} ... {{/block}}
```

```html
<!--layout.art-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>

    {{block 'head'}}
    <link rel="stylesheet" href="main.css">
    {{/block}}
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>
```

```hxml
<!--index.art-->
{{extend './layout.art'}}

{{block 'title'}}{{title}}{{/block}}

{{block 'head'}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
<p>This is just an awesome page.</p>
{{/block}}
```

子模版

```javascript
{{include './header.art'}}
{{include './header.art' data}}
```



### 4.8. Express - Session

```shell
npm install express-session
```

```javascript
var session = require('express-session')

app.use(session({
  secret: 'keyboard cat', // 配置加密字符串，它会在原有加密基础上和这个字符串拼接起来进行加密，增加安全性
  resave: false,
  saveUninitialized: true // 无论你是否使用 Session，都默认分配一把钥匙
}))

req.session.user = user // 设置 Session
req.session.user // 获取 Session

// 删除 Session
req.session.user = null
delete rea.session.user // 更严谨 删除对象的某个成员
```

**默认 Session 数据是内存存储的，服务器一旦重启就会丢失 Session，真正的生产环境会把 Session 进行持久化存储。**



### 4.9. Express - 中间件

**中间件的本质就是一个请求处理的方法，把用户从请求到响应的整个过程分发到多个中间件去处理**

> **目的**：提高代码的灵活性，动态可扩展的

- 同一个请求所经过的中间件都是同一个请求对象和响应对象

```javascript

var express = require('express')

var app = express()

// 中间件：处理请求的，本质上就是个函数



// 在 Express 中 对中间件有几种分类

// 不关心请求路径和请求方法
/**
 * Request 请求对象
 * Response 响应对象
 * next 下一个中间件 ： 当一个请求进入中间件的时候，如果不调用 next() 则会停留在这个中间件
 *                  next() 用来调用下一个中间件的
 */
//同一个请求所经过的中间件都是同一个请求对象和响应对象
app.use((req, res, next) => {
    res.send(`1`)
    res.foo = `第一个中间件`
    next()
})

app.use((req, res, next) => {
    res.send(`2` + res.foo)
})

// 1 
// 2 第一个中间件

// 以 /XXX/ 开头的路径的中间件
// /a --- /a/b --- /a/csds/w 
app.use('/a', (req, res, next) => {
    res.send(`req.url`)
})

// 严格匹配请求路径和请求方法的中间件
// app.get()
// app.post()

app.listen(3000, () => {
    console.log(`http://localhost:3000`)
})
```



## MongoDB



 (MySQL更灵活、MongoDB更省事)

### 5.1. 安装

http://www.runoob.com/mongodb/mongodb-osx-install.html

```shell
# 进入 /usr/local
cd /usr/local

# 下载
sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-x86_64-3.4.2.tgz
 
# 解压
sudo tar -zxvf mongodb-osx-x86_64-3.4.2.tgz

# 重命名为 mongodb 目录

sudo mv mongodb-osx-x86_64-3.4.2 mongodb

# 安装完成后，我们可以把 MongoDB 的二进制命令文件目录（安装目录/bin）添加到 PATH 路径中：

export PATH=/usr/local/mongodb/bin:$PATH
```



### 5.2. 关系型数据库与非关系型数据库

表就是关系

或者说表与表之前存在关系

- 所有的关系型数据库都需要通过`sql`语言来操作
- 所有的关系型数据库在设计前都需要设计表结构
- 而且数据表还支持约束
  - 唯一的
  - 主键
  - 默认值
  - 非空

- 非关系型数据库非常灵活
- 有的非关系型数据库就是key-value对儿(键值对)
- 但是 MongoDB 是长得最像关系型数据库的**非关系型数据库**
  - 数据库->数据库
  - 数据表->集合(数组)
  - 表记录->(文档对象)
- MongoDB数据库不需要设计表结构
- 也就是说你可以任意的往里面存储数据，没有结构性一说



### 5.3. 启动和关闭数据库(连接和退出)

####  5.3.1. 首先我们创建一个数据库存储目录 /data/db：

```shell
sudo mkdir -p /data/db
```

#### 5.3.2. 启动 与 连接 MongoDB 

##### 	5.3.2.1. 启动 MongoDB，默认数据库目录即为 /data/db：

```shell
sudo mongod

# 如果没有创建全局路径 PATH，需要进入以下目录
cd /usr/local/mongodb/bin
sudo ./mongod
```

##### 	5.3.2.2. 连接 再打开一个终端进入执行以下命令：

```shell
$ cd /usr/local/mongodb/bin 
$ ./mongo
```

##### 	5.3.2.3. 退出 连接

```shell
# 在连接状态输入 exit 退出连接
exit
```

#### 5.3.3. 修改默认的数据存储目录

```shell
mongod --dbpath=数据存储目录路径
```

#### 5.3.4. 关闭 MongoDB

```shell
在开启的终端 直接 control + C
或者直接关闭终端
```



### 5.4. 基本命令

- 查看显示所有数据库

  - `show dbs` (如果数据库中没有数据库 查看显示所有数据库则不显示)
- 查看当前连接的数据库

  - `db` (默认test)
- 切换到指定的数据库(如果没有会新建)

  - `use 数据库名称`

- 插入一条数据

  ```shell
  db.students.insertOne({"name":"蓝海"})
  ```

- 显示当前db的所有集合

  ```shell
  show collections  //studnets
  ```

- 查看当前集合中的数据

  ```shell
  db.students.find()  
  // { "_id" : ObjectId("5c3c1f2ccef24fb085255b2e"), "name" : "蓝海" }
  ```



### 5.5. 在Node中操作MongoDB

#### 	5.5.1. 使用官方的 `mongodb` 包来操作

​	https://github.com/mongodb/node-mongodb-native

#### 	5.5.2. 使用第三方 `mongoose` 来操作 MongoDB 数据库

​	第三方包: `mongoose`基于MongoDB官方的`mongodb`包再一次做了封装

​	网址:https://mongoosejs.com

​	API:https://mongoosejs.com/docs/index.html	

- 设计 Schema
- 发布 Model (得到模型构造函数)
  - 增、删、改、查



### 5.6. mogoose

例子：

```javascript
let mongoose = require('mongoose')

// 连接 MongoDB 数据库
mongoose.connect('mongodb://127.0.0.1:27017/itcast', { useNewUrlParser: true })

// 创建一个模型
// 就是在设计数据库
let Cat = mongoose.model('Cat', { name: String, age: Number })

// 实例化一个 Cat (最终在数据库中是 cats)
let Kitty = new Cat({ name: '蓝1', age: 9 })

// 持久化保存 Kitty 实例
Kitty.save().then((err) => {
    if (err) { console.log(err) }
    console.log('meow')
})
```

#### 5.6.1. 官方指南

```javascript
let mongoose = require('mongoose')

let Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据后就会被创建出来
mongoose.connect('mongodb://127.0.0.1:27017/itcast', { useNewUrlParser: true })

// 2.设计文档结构(表结构)
// 字段名称就是表结构里面的属性名称
// 约束的目的是要保证数据的完整兴，不要有 脏数据
let userShema = new Schema({
    userName: {
        type: String,
        required: true // 必填
    },
    passWord: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

// 3.将文档结构发布为模型
// mongoose.model 方法就是将一个架构发布为 model
// 第一个参数：传入一个大写单词字符串用来表示你的数据库名称
//           mongoose会自动将大写名词的字符串转换为 小写复数 的集合名称 (users) 
// 第二个参数：架构 User
let User = mongoose.model('User', userShema);
// 当我们有了这个模型后就可以对这个构造函数 users 集合进行增删改查了
```

#### 5.6.2. 增

```javascript
// 4.增
let admin = new User({
    userName: 'admin',
    passWord: '123456',
    email: 'admin@admin.cn'
})

// 将数据持久化存储在数据库
admin.save((err, ret) => {
    if (err) {
        console.log(`存储失败+${err}`)
    }else{
    	console.log(`存储成功+${ret}`)
    }
})
```

#### 5.6.3. 删

```javascript
User.remove({
    userName: '蓝海'
}, (err, ret) => {
    if (err) {
        console.log(`删除失败${err}`)
    } else {
        console.log(`删除成功${ret}`)
    }
})
```

#### 5.6.4. 改

```javascript
// 第一个参数 id (String)
// 第二个参数 修改的属性加值 (Object)
// 第三个参数 回调函数
User.findByIdAndUpdate('5c3d99b169baff3e44b7b64f', {
    userName: 'owo'
}, (err) => {
    if (err) {
        console.log(`更新失败${err}`)
    } else {
        console.log(`更新成功`)
    }
})
```

#### 5.6.5. 查

<!--查询不到则返回null-->

##### 	5.6.5.1. 查询所有数据

```javascript
User.find((err, data) => {
    if (err) {
        console.log(err)
    }else{
    	console.log(`查询成功${data}`)
    }
})
```

##### 	5.6.5.2.  根据条件查询

```javascript
User.find({
    userName: '蓝海'
}, (err, data) => {
    if (err) {
        console.log(err)
    }else{
    	console.log(`${data}`)
    }
})
```

##### 	5.6.5.3. 根据条件查询数据 返回的是一个对象

```javascript
User.findOne({
    userName: '蓝海11'
}, (err, data) => {
    if (err) {
        console.log(err)
    }else{
    	console.log(`${data}`)
    }
}) // null
```

###### id 两个双引号

根据id查询数据的时候 传递的id会多带一个双引号 (""id"") (之前没这个bug)笨办法 req.query.id.replace(/"/g,' e') 将所有双引号转换为空格



## 扩展



### 6.1. 通过时间戳计算时间差,包括计算、天、时、分、秒

```javascript
function getTime(faultDat, completeTime) {
    var stime = Date.parse(new Date(faultDat)); // old Time
    var etime = Date.parse(new Date(completeTime)); // new Time
    var usedTime = etime - stime;  //两个时间戳相差的毫秒数
    var days = Math.floor(usedTime / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = usedTime % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000)
    var time = days + "天" + hours + "时" + minutes + "分" + seconds + "秒";
    return time;
}
console.log(getTime(1546411435441, 1546411640398))//0天0时3分25秒
```



### 6.2. 阻止超链接默认事件

```javascript
event.preventDefault();
```



### 6.3. Jquery 获取表单FORM所有元素进行AJAX提交

```javascript
// 获取 表单FROM所有的元素可以采用
var a = $('#form_id').serialize() 
// 进行获取；
```



### 6.4. 密码加密 

```shell
npm install blueimp-md5
```

```javascript
var md5 = require('blueimp-md5')
md5('密码') 可多次套嵌 
md5(md5('密码'))
```

