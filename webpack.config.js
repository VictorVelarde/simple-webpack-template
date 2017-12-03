const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/sass/main.scss', './src/js/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
        libraryTarget: 'var',
        library: 'main'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
                )
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: 'url-loader'
                }
            }
        ]
    },
    plugins: [new ExtractTextPlugin('bundle.css')],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
