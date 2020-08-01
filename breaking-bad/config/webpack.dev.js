const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: path.resolve('./', 'dist'),
        publicPath: 'http://localhost:4000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        inline: true,
        port: 4000,
        historyApiFallback: true,
        stats: 'minimal'
    }
});