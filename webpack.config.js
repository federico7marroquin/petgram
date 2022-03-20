const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'development',
    //output second beer
    output: {
        filename: 'app.bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: {
          disableDotRule: true
        },
        liveReload: true
      },
    //Loaders third beer
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    //Plugins fourth beer
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
        new ESLintPlugin()
    ],
}
