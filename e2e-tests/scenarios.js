// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('List Application', () => {
  describe('phoneList', () => {
    beforeEach(() => {
      browser.get('index.html');
    });

    it('should filter the phone list as a user types into the search box', () => {
      const list = element.all(by.repeater('phone in $ctrl.phones'));
      const query = element(by.model('$ctrl.query'));

      expect(list.count()).toBe(3);

      query.sendKeys('nexus');
      expect(list.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      expect(list.count()).toBe(2);
    });
  });
});
