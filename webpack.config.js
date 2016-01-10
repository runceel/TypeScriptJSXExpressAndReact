var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: { 
        app: './client/app.tsx'
    },
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        extensions: [
            '', '.ts', '.tsx', '.js', '.webpack.js', 'web.js'
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}