describe('list', () => {
  beforeEach(module('list'));

  // Test the controller
  describe('ListController', () => {
    beforeEach(inject(($componentController) => {
      return ctrl = $componentController('list');
    }));

    it('should create a `phones` model with 3 phones', () => {
      expect(ctrl.phones.length).toBe(3);
    });

    it('should set a default value for the `orderProp` model', () => {
      expect(ctrl.orderProp).toBe('age');
    });
  });
});
