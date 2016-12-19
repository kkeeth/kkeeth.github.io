let TEST_PATH  = '../build/'
let TAG_PATH  = '../tag/*.tag'

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'riot'],
    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
      'karma-riot'
    ],
    files: [
      '../node_modules/riot-route/dist/route.js',
       TEST_PATH  + 'test.bundle.js',
       TAG_PATH
    ],
    preprocessors: {
       '../**/*.tag': ['riot']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true,
    concurrency: Infinity
  })
}
