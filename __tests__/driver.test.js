'use strict';

require('../src/Vendor/vendor.js');
const hub = require('../index.js');
const events = require('../src/GlobalEventPool');
const handleDriver = require('../src/Driver/driver.js');
const Chance = require('chance');
const chance = new Chance();

const storeName = 'Target';

jest.mock('chance', () => {
  return jest.fn().mockImplementation(() => {
    return {
      guid: () => 'testId',
      name: () => 'testName',
      address: () => 'testAddress',
      date: () => 'testDate'
    };
  });
});

const payload = {
  "store": storeName,
  "orderID": chance.guid(),
  "customer": chance.name(),
  "address": chance.address()
}

describe('Testing event handlers for driver', () => {

  test('Should ', () => {
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");
    jest.spyOn(events, "on");

    handleDriver.driverInTransit(payload);
    handleDriver.driverDelivered(payload);
  });
});
