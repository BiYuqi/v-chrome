var path = require('path');
var buildPath = path.resolve(__dirname,"dist");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/js/index.js'
    },
    output: {
        path:buildPath,
        filename:"bundle.js"
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            },
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    resolve: {
        alias:{
            'vue$':'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
