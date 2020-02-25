const path = require('path');
const outputPath = path.resolve(__dirname, './public/js');
const htmlContentPath = path.resolve(__dirname, './public');

module.exports = {
    mode: 'development',
    entry: './source/index.ts',
    output: {
        filename: 'bundle.js',
        path:  outputPath
    },
    module: {
        rules:[
            {
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: htmlContentPath
    }
};
