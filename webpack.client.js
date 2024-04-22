const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client.js',
    output: {
        filename: 'client.js',
        path: path.resolve('dist/'),
    },
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