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

    it('should be possible to control phone order via the drop-down menu', () => {
      const query = element(by.model('$ctrl.query'));
      const order = element(by.model('$ctrl.orderProp'));
      const name = order.element(by.css('option[value="name"]'));
      const nameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

      function getNames() {
        return nameColumn.map((elem) => {
          return elem.getText();
        });
      }

      query.sendKeys('tablet');

      expect(getNames()).toEqual([
        'Motorola XOOM\u2122 with Wi-Fi',
        'MOTOROLA XOOM\u2122',
      ]);

      name.click();

      expect(getNames()).toEqual([
        'MOTOROLA XOOM\u2122',
        'Motorola XOOM\u2122 with Wi-Fi',
      ]);
    });
  });
});
