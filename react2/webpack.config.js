const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ["./src/js/app.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)|(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        compress: false,
        host: "0.0.0.0",
        port: 9001,
        index: "index.html",
        allowedHosts: [
            '*'
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}