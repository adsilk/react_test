const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        publicPath: 'assets',
        library: "MyLibrary",
        libraryTarget: "umd",
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015'],
                }
            }]
        }]
    },

}