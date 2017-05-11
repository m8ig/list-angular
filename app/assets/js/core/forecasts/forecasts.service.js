angular
  .module('core.forecasts')
  .factory('Forecasts', [
    '$resource',
    $resource => $resource(
      'https://api.apixu.com/v1/forecast.json',
      {
        key: '70d1b60c16444f8e9c8112926171005',
        days: '10',
      },
    ),
  ]);
