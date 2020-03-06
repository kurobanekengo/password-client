const path = require('path');
const sourcePath = path.resolve(__dirname, './source');
const outputPath = path.resolve(__dirname, './public/js');
const htmlContentPath = path.resolve(__dirname, './public');

module.exports = {
    mode: 'development',
    entry: `${sourcePath}/index.tsx`,
    output: {
        filename: 'bundle.js',
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
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: htmlContentPath,
	watchContentBase: true,
        watchOptions: {
          poll: 500
        },
        hot: true,
        inline: true
    }
};
