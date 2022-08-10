const { Server } = require('http');
const path = require('path');

module.exports = {
    // Relative Path
    entry: './src/app.js',
    // Absolute Path
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        }
    },
    mode: 'development'
};
// Dont exceed babel-loader version 7.1.1