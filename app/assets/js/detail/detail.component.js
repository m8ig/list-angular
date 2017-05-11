// Register `detail` component, along with its associated controller and template
angular
  .module('detail')
  .component('detail', {
    controller: [
      'Forecasts',
      '$routeParams',
      function DetailController(Forecasts, $routeParams) {
        this.dayId = $routeParams.dayId;
        this.location = 'Paris';

        Forecasts.get(
          {
            q: this.location,
            days: '1',
            unixdt: this.dayId,
          },
          (response) => {
            this.forecast = response.forecast.forecastday[0];
          },
        );
      },
    ],
    templateUrl: './detail/detail.template.html',
  });
