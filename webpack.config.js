const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, './src/client'),
    entry :  {
        client: './client.js',
        bundle: './bundle.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/public/assets'),
        open: true,
        port: 5000,
        compress: true
    },
    module: {
        rules:[
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './assets'
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    // you can specify a publicPath here
                    // by default it use publicPath in webpackOptions.output
                    publicPath: path.resolve(__dirname, 'public')
                    }
                },
                "css-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/, /backend_src/, /serve.js/],
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react"],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread"]
                    }
                }
            }
        ]
    }
};
