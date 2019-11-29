const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

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
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
      ]
};