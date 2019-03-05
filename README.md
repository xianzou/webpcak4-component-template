# 说明
打包react组件

## 流程说明
更改package.json中的name(名称)，请阅读[组件开发规范](http://192.168.0.184:20000/share/dev-document/tree/master/%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83)
开启eslint代码检测工具
在src/components写你的组件
exmaple/app.js下展示你的组件
在config/webpack.base.js文件变量commonConfig输入你的入口文件


```js
//配置入口文件
commonConfig = {
    input: '../src/components/Button/index.js', // 组件入口
    cssExtract: true // 是否单独抽取样式
};
```

```js
//  app.js 引入组件 进行开发
import Button from '../src/';

//开发完成 build之后进行效果预览

import Button from '../bin/index';
import '../bin/index.css';
/**
 * require方式
 * const Button = require('../lib/index.js').default;
 * require('../lib//index.css');
 * import方式
 * import Button from '../lib'; // 编译之后的组件
 * import '../lib/index.css'; // 编译之后的组件样式
 */

const btnArr = ['black', 'gray', 'white', 'orange', 'red', 'blue', 'rosy', 'green', 'pink'];
const App = () => (
    <div className="con">
        {btnArr.map((row, index) => {
            return <Button key={index} Type={row} Text="按钮" />;
        })}
    </div>
);
ReactDOM.render(<App />, document.getElementById('root'));

```

- 执行yarn start 进行开发  

- 执行yarn build:es 编译成es6模块规范组件

- 执行yarn build:cjs 编译成CommonJS模块规范组件

- 执行yarn build 进行同时变成CommonJS模块规范组件和ES6格式组件

- 执行yarn start 替换编译后组件进行预览

- 执行yarn lint 进行eslint代码检查，项目根目录生成eslintErrorLog.txt文件

- 编写README.md和CHANGELOG.md文档

- 执行yarn publish 最后调试你的组件无误了,执行发布