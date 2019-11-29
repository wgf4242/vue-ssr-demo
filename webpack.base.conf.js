const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, 'src')
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                plugins: [
                    "@babel/plugin-syntax-dynamic-import"
                ]
            }
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ],
    stats: 'errors-only'
};