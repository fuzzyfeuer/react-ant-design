const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    devServer: {
        hot: true,
        port: 3000
    },
    devtool: 'inline-source-map',
    entry: [
        './src/index.tsx'
    ],
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            enforce: 'pre',
            exclude: /node_modules/,
            use: ['eslint-loader']
        }, {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader']
        }, {
            test: /\.css$/,
            /* exclude: /node_modules/,  -- requred for antd.css */
            use: ['style-loader', 'css-loader']
        }]
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        plugins: [
            new TsconfigPathsPlugin({
                extensions: ['.js', '.ts', '.tsx']
            })
        ]
    }
};
