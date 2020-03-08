const path = require('path');
const webpack = require('webpack');

const sourcePath = path.resolve(__dirname, './source');
const outputPath = path.resolve(__dirname, './public/js');
const htmlContentPath = path.resolve(__dirname, './public');

module.exports = {
    mode: 'development',
    entry: {
        app: [
            'webpack-dev-server/client?http://192.168.33.10:8080',
            'webpack/hot/dev-server',
            `${sourcePath}/index.tsx`
        ]
    },
    output: {
        filename: 'index.js',
        path:  outputPath
    },
    module: {
        rules:[
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        contentBase: htmlContentPath,
	    watchContentBase: true,
        watchOptions: {
          poll: 500
        },
        hot: true,
        inline: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
