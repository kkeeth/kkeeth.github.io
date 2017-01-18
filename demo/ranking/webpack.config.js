const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: {
         app: './src/app.js',
         pie: './src/pie.js'
      },
      output: {
         path: __dirname + '/build/',
         filename: '[name].bundle.js'
      },
      plugins: [
       new webpack.optimize.OccurenceOrderPlugin(),
       new webpack.ProvidePlugin({ riot: 'riot' })
      ],
      module: {
         preLoaders: [
            {
               test: /\.tag$/,
               exclude: /node_modules/,
               loader: 'tag-loader'
            }
         ],
         loaders: [
            {
               test: /\.js|\.tag$/,
               exclude: /node_modules/,
               loader : 'babel-loader'
            }
         ]
      },
      resolve: {
         extensions: ['', '.js', '.tag']
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
