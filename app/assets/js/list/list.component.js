// Register `list` component, along with its associated controller and template
angular
  .module('list')
  .component('list', {
    controller: [
      '$http',
      function ListController($http) {
        this.location = 'Paris';

        this.getForecast = (location = this.location) => {
          const param = {
            key: '70d1b60c16444f8e9c8112926171005',
            q: location,
            days: '10',
          };

          $http
            .get(`https://api.apixu.com/v1/forecast.json?${handleTransform(param)}`)
            .then((response) => {
              this.forecasts = response.data.forecast.forecastday;
            })
            .catch((reason) => {
              console.log(reason.statusText);
            });
        };

        this.getForecast();

        function handleTransform(obj) {
          const array = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
          return array.join('&');
        }
      },
    ],
    templateUrl: './list/list.template.html',
  });
