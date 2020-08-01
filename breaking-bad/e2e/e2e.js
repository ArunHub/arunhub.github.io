import { by, element, browser } from 'protractor';

var unlock_url = "http://localhost:4200/#/unlock-canvas";
var dev_unlock = "http://localhost:4200/#/device-unlock";

describe('Unlock Your Device Page', () => {

  it('Browser should open Device Unlock Portal', () => {
    browser.get('http://localhost:4200/');
    expect(browser.getCurrentUrl()).toEqual(unlock_url);
  });

  it("Should open 'International Day Pass' Model Popup", () => {
    element(by.linkText('International Day Pass')).click();
    expect(browser.driver.getCurrentUrl()).toMatch(unlock_url);
  });

  it("Should open 'Unlock a device' Model Popup", () => {
    element(by.linkText('Unlock a device')).click();
    expect(browser.driver.getCurrentUrl()).toMatch(unlock_url);
  });

  it('Click Unlock Your Device should land on Device Unlock Page', () => {
    element(by.linkText('Unlock your device')).click();
    expect(browser.getCurrentUrl()).toEqual(dev_unlock);
  });


  it('Check English to Spanish Content', () => {
    element(by.linkText('Ver en espanol')).click();
    var header = element(by.css('.step-heading'));
    expect(header.getText()).toEqual('Portal de desbloqueo de equipo');
  });

  it('Check Spanish to English Content', () => {

    element(by.linkText('View in English')).click();
    var headerEnglish = element(by.css('.step-heading'));
    expect(headerEnglish.getText()).toEqual('Device unlock portal');
  });

});

describe('Wireless Number - Content Validation', () => {

  it('Should enter AT&T Wireless Number & Clicked Checkbox', () => {

    element(by.name('wirelessNumber')).sendKeys('1234567o90');
    element(by.id('terms2')).click();
    expect(element(by.id('terms2')).isSelected()).toBeTruthy();
  });

  it("Should verify 'eligible to unlock' hyperlink ", () => {
    element(by.linkText('eligible to unlock')).click();
    element(by.id('closeBtn')).click();
    expect(browser.getCurrentUrl()).toEqual(dev_unlock);
  });


  it('Should Validate AT&T Wireless Number contains only numbers', () => {
    expect(element(by.name('wirelessNumber')).getAttribute('value')).toMatch(/^\d+$/);
  });

  it('Should Validate AT&T Wireless Number length', () => {
    element(by.name('wirelessNumber')).getAttribute('value').then(function (text) {
      expect(text.length).toEqual(10);
    });
  });

});

describe('Personal Info Page - Content Validation', () => {

  it('Should Reach Personal Info Page', () => {
    element(by.name('wirelessNumber')).getAttribute('value').then(function (wNumber) {

      var url = new String("http://localhost:4200/#/unlockstep2;wirelessNumber=");
      var actual_url = url.concat(wNumber);

      element(by.id('wNumNext')).click();
      expect(browser.getCurrentUrl()).toEqual(actual_url);
    });
  });

  it('Should Fill Account Holders First Name', () => {
    element(by.id('first_name')).sendKeys('Michell');
    expect(element(by.id('first_name')).getAttribute('value')).toEqual('Michell');

  });

  it('Should Fill Account Holders Last Name', () => {
    element(by.id('last_name')).sendKeys('Johnson');
    expect(element(by.id('last_name')).getAttribute('value')).toEqual('Johnson');

  });

  it('Should Fill Account Holders passcode', () => {
    element(by.id('passcode')).sendKeys('12345678');
    expect(element(by.id('passcode')).getAttribute('value')).toEqual('12345678');

  });

  it("Should verify 'Forgot your passcode?' hyperlink ", () => {

    element(by.linkText('Forgot your passcode?')).click();
    element(by.name('wirelessNumber')).getAttribute('value').then(function (wNumber) {
      var url = new String("http://localhost:4200/#/unlockstep2;wirelessNumber=");
      var actual_url = url.concat(wNumber);
      expect(browser.getCurrentUrl()).toEqual(actual_url);
    });

  });

  it('Should Fill Account Holders email id', () => {
    element(by.id('email')).sendKeys('admin@att.com');
    expect(element(by.id('email')).getAttribute('value')).toEqual('admin@att.com');

  });

  it('Should Fill Account Holders email id again', () => {
    element(by.id('email_again')).sendKeys('admin@att.com');
    expect(element(by.id('email_again')).getAttribute('value')).toEqual('admin@att.com');

  });

  it('Should Check both email address are same', () => {
    expect(element(by.id('email')).getAttribute('value')).toEqual(element(by.id('email_again')).getAttribute('value'));

  });

});

describe('Unlock Step 3 Page Validations', () => {

  it('Should Redirect to unlockstep3 page', () => {
    element(by.id('accountInfoNext')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/unlockstep3');

  });

  it('Should Enter Valid IMEI Number', () => {
    element(by.id('IMEI')).sendKeys('322765434587854');
    element(by.id('IMEI')).getAttribute('value').then(function (text) {
      expect(text.length).toEqual(15);
    });

  });

  it('Should Validate IMEI Number contains only numbers not any alphabets/Special Characters', () => {
    expect(element(by.id('IMEI')).getAttribute('value')).toMatch(/^\d+$/);
  });

  it('Should Submit the Order', () => {
    element(by.id('unlockSubmit')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/unlockConfirm;customerType=true');

  });
});

describe('Check an Unlock status', () => {

  it('Should open unlock status page', () => {
    browser.get('http://localhost:4200/');
    element(by.linkText('Check an unlock status')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/unlock-status');
  });

  it('Should enter valid IMEI Number', () => {
    element(by.id('IMEI')).sendKeys('322765434587853');
    element(by.id('IMEI')).getAttribute('value').then(function (text) {
      expect(text.length).toEqual(15);
    });
  });

  it('Should enter valid Request Number', () => {
    element(by.id('req_num')).sendKeys('CUL71XXX1059703');
    element(by.id('req_num')).getAttribute('value').then(function (text) {
      expect(text.length).toEqual(10);
    });
  });

  it('Should reach current status page', () => {

    element(by.id('IMEI')).getAttribute('value').then(function (imei) {

      var step2url = new String("http://localhost:4200/#/unlock-status-confirm;imeiNumber=");
      var confirm_url = step2url.concat(imei);

      element(by.id('unlockCheck')).click();
      expect(browser.getCurrentUrl()).toEqual(confirm_url);
    });

  });
});

describe('Validating Non Customer Flow', () => {

  it("Should land on Device Unlock Portal & Select 'No' Option", () => {
    browser.get(dev_unlock);
    element(by.id('wirecust')).click();
    expect(element(by.id('wirecust')).isSelected()).toBeTruthy();

  });

  it("Should verify 'device unlock eligibility requirements' hyperlink ", () => {
    element(by.linkText('device unlock eligibility requirements')).click();
    element(by.id('closeBtn')).click();
    expect(browser.getCurrentUrl()).toEqual(dev_unlock);
  });

  it('Should Enter Valid IMEI Number', () => {
    element(by.id('textinputID_01')).sendKeys('322765434587854');
    element(by.id('textinputID_01')).getAttribute('value').then(function (text) {
      expect(text.length).toEqual(15);
    });

  });

  it('Should Validate IMEI Number contains only numbers not any alphabets/Special Characters', () => {
    expect(element(by.id('textinputID_01')).getAttribute('value')).toMatch(/^\d+$/);
  });

  it('Should Clicked Checkbox', () => {
    element(by.id('terms2')).click();
    expect(element(by.id('terms2')).isSelected()).toBeTruthy();
  });

  it('Should Proceed to Personal Info Page', () => {
    element(by.id('wNumNext')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/nonattunlock');
  });

});

describe('Non Customer Flow - Content Validation', () => {

  it('Should Fill Account Holders First Name', () => {
    element(by.id('last_name')).sendKeys('Smith');
    expect(element(by.id('last_name')).getAttribute('value')).toEqual('Smith');

  });

  it('Should Fill Account Holders Last Name', () => {
    element(by.id('address1')).sendKeys('Mary');
    expect(element(by.id('address1')).getAttribute('value')).toEqual('Mary');

  });

  it('Should Fill Wireless Telephone Number', () => {
    element(by.id('wirelessNumber')).sendKeys('3234017875');
    expect(element(by.id('wirelessNumber')).getAttribute('value')).toEqual('3234017875');

  });

  it('Should Fill Account Holders email id', () => {
    element(by.id('email')).sendKeys('admin@att.com');
    expect(element(by.id('email')).getAttribute('value')).toEqual('admin@att.com');

  });

  it('Should Fill Account Holders email id again', () => {
    element(by.id('email_again')).sendKeys('admin@att.com');
    expect(element(by.id('email_again')).getAttribute('value')).toEqual('admin@att.com');

  });

  it('Should Check both email address are same', () => {
    expect(element(by.id('email')).getAttribute('value')).toEqual(element(by.id('email_again')).getAttribute('value'));

  });

  it('Should submit the order', () => {
    element(by.id('nonattSubmit')).click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/unlockConfirm;customerType=false');
  });
});