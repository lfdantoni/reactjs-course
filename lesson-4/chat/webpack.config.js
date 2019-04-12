const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlPlugin = new HtmlWebpackPlugin({
    template : __dirname + "/index.html",
    filename : "index.html",
    inject : "body"
})


module.exports = {
    entry: path.resolve(__dirname, "src/App.js"),
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                use : "babel-loader",
                exclude : /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        }
                    }
                ]
            }
        ]
    },
    mode : "development",
    plugins : [HtmlPlugin]
}