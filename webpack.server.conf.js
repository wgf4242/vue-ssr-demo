const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(base, {
    target: 'node',
    mode: 'development',
    entry: {
        server: './src/entry-server.js'
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals({
        // do not externalize CSS files in case we need to import it from a dep
        whitelist: /\.css$/
    }),
    plugins: [
        new VueSSRServerPlugin()
      ]
});