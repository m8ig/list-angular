describe('list', () => {
  beforeEach(module('list'));

  // Test the controller
  describe('ListController', () => {
    let $httpBackend;
    let ctrl;

    beforeEach(inject(($componentController, _$httpBackend_) => {
      $httpBackend = _$httpBackend_;

      $httpBackend
        .expectGET('https://api.apixu.com/v1/forecast.json?key=70d1b60c16444f8e9c8112926171005&q=37.773972%2C-122.431297&days=10')
        .respond({
          forecast: {
            forecastday: [
              {
                date: '2017-05-10',
              },
              {
                date: '2017-05-10',
              },
            ],
          },
        });

      ctrl = $componentController('list');
    }));

    it('should create a `forecasts` property with 2 days fetched with `$http`', () => {
      expect(ctrl.forecasts).toBeUndefined();

      $httpBackend.flush();

      expect(ctrl.forecasts).toEqual([
        {
          date: '2017-05-10',
        },
        {
          date: '2017-05-10',
        },
      ]);
    });

    it('should set a default value for the `orderProp` property', () => {
      expect(ctrl.orderProp).toBe('age');
    });
  });
});
