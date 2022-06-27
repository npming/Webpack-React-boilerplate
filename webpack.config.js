const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.?(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [new HTMLWebpackPlugin({template: './src/index.html'})],
    mode: process.env.NODE_ENV === "production" ? "production" : "development"
}