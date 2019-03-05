// import 'core-js/es6/map';//开启IE支持
// import 'core-js/es6/set';//开启IE支持
import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../src/';
// import Button from '../bin'; // 编译之后的组件
// import '../bin/index.css'; // 编译之后的组件样式
/**
 * const Button = require('../lib/index.js').default;
 * require('../lib//index.css');
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
