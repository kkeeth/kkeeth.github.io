const JS_PATH  = '../build/'

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-riot',
      'karma-webpack'
    ],
    files: [
      JS_PATH  + 'bundle.js',
      'spec/*.js'
    ],
    preprocessors: {
       'spec/*.js': ['webpack']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    singleRun: true,
    concurrency: Infinity
  })
}
