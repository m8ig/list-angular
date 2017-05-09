describe('list', () => {
  beforeEach(module('list'));

  // Test the controller
  describe('ListController', () => {
    it('should create a `phones` model with 3 phones', inject(($componentController) => {
      const ctrl = $componentController('list');

      expect(ctrl.phones.length).toBe(3);
    }));
  });
});
