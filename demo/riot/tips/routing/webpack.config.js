const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: [
         './src/app.js'
      ],
      output: {
         path: __dirname + '/build/',
         filename: 'bundle.js'
      },
      devServer: {
         port: 8000
      },
      plugins: [
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.ProvidePlugin({ riot: 'riot' })
      ],
      module: {
         loaders: [
            {
               test: /\.tag$/,
               exclude: /node_modules/,
               loader : 'riotjs-loader',
               query  : {
                  presets: ['es6']
               }
            },
            {
               test: /\.js$/,
               exclude: /node_modules/,
               loader : 'babel-loader'
            }
         ]
      }
   },
   {
      entry: './src/app.scss',
      output: {
         path: __dirname + '/build/',
         filename: 'app.css'
      },
      module: {
         loaders: [
            {
               test: /\.css$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
               test: /\.scss$/,
               loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin("app.css")
      ]
   }
]
