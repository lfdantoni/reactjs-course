const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HtmlPlugin = new HtmlWebpackPlugin({
    template : __dirname + "/index.html",
    filename : "index.html",
    inject : "body"
})


module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    output : {
        path: path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },
    mode : "development",
    plugins : [HtmlPlugin]
}