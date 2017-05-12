// Register `detail` component, along with its associated controller and template
angular
  .module('detail')
  .component('detail', {
    controller: [
      '$routeParams',
      'Forecasts',
      function DetailController($routeParams, Forecasts) {
        this.dayId = $routeParams.dayId;
        this.location = Forecasts.getLocation();

        Forecasts.getData((response) => {
          this.forecast = response.forecast.forecastday.filter((item) => {
            return item.date_epoch.toString() === this.dayId.toString();
          })[0];
        });
      },
    ],
    templateUrl: './detail/detail.template.html',
  });
