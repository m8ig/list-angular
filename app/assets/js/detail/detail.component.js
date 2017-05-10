// Register `detail` component, along with its associated controller and template
angular
  .module('detail')
  .component('detail', {
    controller: [
      '$routeParams',
      function DetailController($routeParams) {
        this.dayId = $routeParams.dayId;
      }
    ],
    templateUrl: './detail/detail.template.html',
  });
