/* eslint-disable */
module.exports = (config) => {
  config.set({

    basePath: './app',

    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-animate/angular-animate.js',
      '../node_modules/angular-resource/angular-resource.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '../node_modules/angular-route/angular-route.js',
      'assets/js/**/*.module.js',
      'assets/js/*!(.module|.spec|.component).js',
      'assets/js/**/*.component.js',
      'assets/js/**/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};
