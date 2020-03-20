const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const sourcePath = path.resolve(__dirname, './source');
const outputPath = path.resolve(__dirname, './public');
const htmlContentPath = path.resolve(__dirname, './public');

module.exports = {
    mode: 'development',
    entry: {
        "js/index": [
            'webpack-dev-server/client?http://192.168.33.10:8080',
            'webpack/hot/dev-server',
            `${sourcePath}/index.tsx`
        ],
        "style/style": `${sourcePath}/style/style.scss`
    },
    output: {
        path:  outputPath
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            "@frontend": path.resolve(__dirname, "source/frontend"),
            "@api": path.resolve(__dirname, "source/api"),
            "@core": path.resolve(__dirname, "node_modules/password-core/dist")
        }
    },
    devServer: {
        contentBase: htmlContentPath,
	    watchContentBase: true,
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' }),
    ]
};
