const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'server.js',
        path: path.resolve('./dist/'),
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }],
    },
};