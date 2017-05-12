// Register `list` component, along with its associated controller and template
angular
  .module('list')
  .component('list', {
    controller: [
      'Forecasts',
      function ListController(Forecasts) {
        this.location = Forecasts.getLocation();

        this.handleForecast = (location) => {
          if (location !== undefined) {
            Forecasts.setLocation(location);
          }

          Forecasts.getData((response) => {
            this.forecasts = response.forecast.forecastday;
          });
        };

        this.handleForecast();
      },
    ],
    templateUrl: './list/list.template.html',
  });
