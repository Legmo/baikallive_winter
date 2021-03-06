'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
   //где лежат исходные файлы (точки входа)
    context: __dirname + '/src',
    entry: {
        home:  "./main.js",
        //about: "./about",
        //home:  ["../node_modules/webpack-dev-server/client", "../node_modules/webpack/hot/dev-server", "./main.js"],
    },

    //куда компилируется финальный файл
    output: {
        path:     __dirname + '/final',
        filename: './webpack/bundle.js',
        library:  "[name]"
    },
    
    //директория с модулями
    resolve: {
        modules: ['../node_modules'] 
    },

    //автоматически отслеживаем изменения
    watch: true,
    watchOptions: {
      aggregateTimeout: 100
    },
    
    //создаём source map
    devtool: "source-map",
    
    //Loaders
    module: {
        rules: [
            { test: /\.html$/,
              use: [{
                loader: 'html-loader',
                options: {
                  minimize: true
                }
              }],
            },
            { test:   /\.js$/,
              use: [{
                loader: "babel-loader?presets[]=env",
              }],
            },
            { test: /\.(scss)$/,
              use: [
                {
                  loader: 'style-loader', // inject CSS to page
                },
                //Section for Webpack-dev-server (develoemnt only).
                /*{ loader: 'css-loader',
                  options: {
                      sourceMap: true
                  }
                },
                { loader: 'postcss-loader',
                  options: {
                      ident: 'postcss',
                      plugins: (loader) => [
                          require('precss'),
                          require('autoprefixer')('ie >= 9', 'last 2 version')
                      ],
                      sourceMap: true
                    }
                },
                {  loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
                */
              ]
            },
            //Disable this section at Webpack-dev-server mode. For css hot reload
            {test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        { loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('precss'),
                                    require('autoprefixer')('ie >= 9', 'last 2 version')
                                ],
                                sourceMap: true
                            }
                        },
                        {  loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                    publicPath: '../',
                })
            },
            { test: /\.(png|jpg|svg)$/,
            use: [{
            loader: 'file-loader?name=[name].[ext]?[hash]&outputPath=img/',
            }],
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                  loader: 'url-loader?name=[name].[ext]?[hash]&outputPath=fonts/',
                  options: {
                      limit: 10000,
                      mimetype: 'application/font-woff'
                  }
              }]
            },
            { test: /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            exclude: [/img/],
            use: [{
              loader: 'file-loader?name=[name].[ext]?[hash]&outputPath=fonts/'
            }],
            },
        ]
    },

    //Plugins
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('./css/[name].css', {allChunks: true}), //disable this line at Webpack-dev-server mode. For css hot reload
    ],

    //Webpack-dev-server
    devServer: {
        contentBase: __dirname + '/final',
        //hot: true,
        //inline: true,
    },

}
