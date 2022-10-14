'use strict';

require('../src/Driver/driver.js');
const hub = require('../index.js');
const events = require('../src/GlobalEventPool');
const handleVendor = require('../src/Vendor/vendor.js');
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

describe('Testing event handlers for vendor', () => {

  test('Should ', () => {
    jest.spyOn(console, "log");
    jest.spyOn(events, "emit");
    jest.spyOn(events, "on");

    handleVendor.vendorPickupRequest(storeName);
    handleVendor.vendorDelivered(payload)
  });
});
