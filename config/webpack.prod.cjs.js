const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const baseWebpackConfig = require('./webpack.base');

const babelConfig = require('../babel.config.json');

// 设置presets下的modules为 commonjs格式
babelConfig.presets[0][1].modules = 'commonjs';

const plugins = [];

const cleanWebpackPlugin = new CleanWebpackPlugin(['../lib'], { allowExternal: true });

plugins.push(cleanWebpackPlugin);

module.exports = merge(baseWebpackConfig, {
    output: {
        path: path.join(__dirname, '../lib')
    },
    mode: 'production',
    plugins,
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: babelConfig
                }
            }
        ]
    },
    optimization: {
        // minimize: false
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
});
