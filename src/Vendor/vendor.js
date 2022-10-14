'use strict';

const events = require ('../GlobalEventPool.js');
const Chance = require('chance');
const chance = new Chance();

let vendorPickupRequest = storeName => {
  let payload = {
    "store": storeName,
    "orderID": chance.guid(),
    "customer": chance.name(),
    "address": chance.address()
  }
  events.emit('pickup', payload);
}

let vendorDelivered = payload => {
  console.log(`Thank you for delivering order# ${payload.orderID}`);
}

events.on('delivered', (payload) => vendorDelivered(payload));

module.exports = {
  vendorPickupRequest,
  vendorDelivered
}
