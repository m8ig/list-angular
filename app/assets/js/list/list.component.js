// Register `list` component, along with its associated controller and template
angular
  .module('list')
  .component('list', {
    controller: function ListController() {
      this.orderProp = 'age';

      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1,
        },
        {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2,
        },
        {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3,
        },
      ];
    },
    templateUrl: './list/list.template.html',
  });
