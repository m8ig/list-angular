// Register `detail` component, along with its associated controller and template
angular
  .module('detail')
  .component('detail', {
    controller: [
      '$http',
      '$routeParams',
      function DetailController($http, $routeParams) {
        this.dayId = $routeParams.dayId;
        this.location = 'Paris';

        const param = {
          key: '70d1b60c16444f8e9c8112926171005',
          q: this.location,
          unixdt: this.dayId,
        };

        $http
          .get(`https://api.apixu.com/v1/forecast.json?${handleTransform(param)}`)
          .then((response) => {
            this.forecast = response.data.forecast.forecastday[0];
          })
          .catch((reason) => {
            console.log(reason.statusText);
          });


        function handleTransform(obj) {
          const array = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
          return array.join('&');
        }
      },
    ],
    templateUrl: './detail/detail.template.html',
  });
