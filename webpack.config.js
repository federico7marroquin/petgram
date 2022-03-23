const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

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
        new WebpackPwaManifestPlugin({
            name: 'Petgram - your animal photographic app',
            shortName: 'Petgram 🐶',
            description: 'with petgram, you will find pet pics ',
            background_color: '#fff',
            'theme_color': '#2196f3',
            crossorigin: 'use-credentials',
            icons: [
                {
                  src: path.resolve('src/assets/icon.png'),
                  sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                },
                {
                  src: path.resolve('src/assets/icon.png'),
                  size: '1024x1024' // you can also use the specifications pattern
                },
                {
                  src: path.resolve('src/assets/icon.png'),
                  size: '1024x1024',
                  purpose: 'maskable'
                }
              ]
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            swDest: 'service-worker.js',
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 5000000,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    }
                },
                {
                    urlPattern: new RegExp('https://petgram-fede-server.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }
                }
            ]
        }),
        new ESLintPlugin()
    ],
}
