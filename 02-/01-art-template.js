// 模版引擎 art-template
// npm 下载 
//     npm install art-template
// 注意：想要使用这个模版引擎 需要在html文件中引入 ./node_modules/art-template/lib/template-web.js 文件

// 强调：模版引擎不关心你的字符串内容，只关系自己能认识的模版标记语法，例如：{{}} 语法被称之为 mustache语法，八字胡语法

// 文档语法 https://aui.github.io/art-template/zh-cn/docs/syntax.html

// 加载模块
var template = require('art-template');

// .render(source, data, options) 编译并返回渲染结果。
// 参数一 {string} source :data
// 参数二 {Object} options :替换的数据对象
var ret = template.render('hi, {{ name }}', {name : 'art-template'});
console.log(ret); // hi, art-template