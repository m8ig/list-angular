angular
  .module('weatherApp')
  .config([
    '$locationProvider',
    '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/days', {
          template: '<list></list>',
        })
        .when('/days/:dayId', {
          template: '<detail></detail>',
        })
        .otherwise('/days');
    },
  ]);
