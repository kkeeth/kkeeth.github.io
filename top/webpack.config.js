const path    = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      autoprefixer = require('autoprefixer')

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
               use: ['riot-tag-loader']
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
            riot_control: 'riotcontrol',
            $: 'jquery',
            jQuery: 'jquery'
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
               use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' })
            },
            {
               test: /\.scss$/,
               enforce: 'post',
               use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            }
         ]
      },
      plugins: [
         new ExtractTextPlugin("style.css"),
         new webpack.LoaderOptionsPlugin({
            options: {
               postcss: [
                  require('autoprefixer')({
                     browsers: ['last 2 versions']
                  })
               ]
            }
         })
      ]
   }
]

