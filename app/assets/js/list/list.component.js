// Register `list` component, along with its associated controller and template
angular
  .module('list')
  .component('list', {
    templateUrl: './list/list.template.html',
    controller: function ListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
        },
        {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
        },
        {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
        },
      ];
    },
  });
