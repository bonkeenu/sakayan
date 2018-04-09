const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
         port: 8085,
     }
}
