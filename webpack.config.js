const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');

function toObject(paths) {
    var ret = {};

    paths.forEach(function(path) {
        // you can define entry names mapped to [name] here
        ret[path] = path;
    });

    console.log(ret);
    return ret;
}

module.exports = [{
    entry :  toObject(glob.sync('./src/**/*.js*')),
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/public/assets'),
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
                        presets: [],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread"]
                    }
                }
            }
        ]
    }
}, {
    entry :  {
        client: './script.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/public/assets'),
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
                        presets: [],
                        "plugins": ["transform-class-properties", "transform-object-rest-spread"]
                    }
                }
            }
        ]
    }
}];
