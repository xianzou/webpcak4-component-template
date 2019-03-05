const path = require('path');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelConfig = require('../babel.config.json');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: path.join(__dirname, '../exmaple/app.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /lib/, /bin/],
                use: {
                    loader: 'babel-loader',
                    options: babelConfig
                }
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 3001,
        contentBase: path.join(__dirname, '../dist'),
        open: true,
        hot: true,
        proxy: {}
    },
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        // 启用 HMR
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../exmaple/index.html')
        })
    ]
});
