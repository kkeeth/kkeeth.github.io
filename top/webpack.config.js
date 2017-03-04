const path    = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
   {
      entry: './app.js',
      output: {
         path: path.resolve(__dirname + '/build/'),
         filename: 'bundle.js'
      },
      module: {
         rules: [
            {
               test: /\.tag$/,
               enforce: 'pre',
               exclude: /node_modules/,
               use: {
                  loader: 'riot-tag-loader',
                  options: {
                     type: 'es6',
                     hot: true,
                     debug: true
                  }
               }
            },
            {
               test: /\.js|\.tag$/,
               enforce: 'post',
               exclude: /node_modules/,
               use: ['buble-loader']
            }
         ]
      },
      resolve: {
         extensions: ['.js', '.tag']
      },
      plugins: [
         new webpack.ProvidePlugin({
            riot: 'riot',
            riot_control: 'riotcontrol'
         })
      ]
   },
   {
      entry: './scss/style.scss',
      output: {
         path: path.resolve(__dirname + '/build/'),
         filename: 'style.css'
      },
      module: {
         rules: [
            {
               test: /\.css$/,
               enforce: 'post',
               use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
               test: /\.scss$/,
               enforce: 'post',
               use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin("style.css")
      ]
   }
]

