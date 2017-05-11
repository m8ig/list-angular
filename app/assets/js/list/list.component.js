// Register `list` component, along with its associated controller and template
angular
  .module('list')
  .component('list', {
    controller: [
      'Forecasts',
      function ListController(Forecasts) {
        this.location = 'Paris';

        this.getForecast = (location = this.location) => {
          Forecasts.get(
            {
              q: location,
            },
            (response) => {
              this.forecasts = response.forecast.forecastday;
            },
          );
        };

        this.getForecast();
      },
    ],
    templateUrl: './list/list.template.html',
  });
