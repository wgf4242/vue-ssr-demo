const {join:pathJoin} = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // +++
module.exports = {
    mode:'production',
    entry:{
        app:'./src/index.js'
    },
    output:{
        filename:'[name].bundle.js',
        path:pathJoin(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'] // +++
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader','css-loader'] // +++
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin() // +++
    ]
}