angular
  .module('weatherApp')
  .config([
    '$locationProvider',
    '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/', {
          template: '<list></list>',
        })
        .when('/:dayId', {
          template: '<detail></detail>',
        })
        .otherwise('/');
    },
  ]);
