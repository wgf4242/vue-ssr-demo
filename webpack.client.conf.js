const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
   entry: {
       client: './src/entry-client.js'
   },
   plugins: [
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin()
    ]
});