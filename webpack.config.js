var webpack = require('webpack');
var path = require('path');
module.exports = {
    context: __dirname + '/app/src',
    entry: './root.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],

                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',

            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=0',
            },


        ]

    },

    output: {
        path: __dirname + '/app/',
        filename: 'budle.js'
    },


};
