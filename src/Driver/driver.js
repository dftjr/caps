'use strict';

const events = require('../GlobalEventPool.js');

let driverInTransit = payload => {
  console.log(`DRIVER: picked up order# ${payload.orderID}`);
  events.emit(`in-transit`, payload);
}

let driverDelivered = payload => {
  console.log(`DRIVER: delivered order# ${payload.orderID}`);
  events.emit(`delivered`, payload);
}

events.on('pickup', (payload) => driverInTransit(payload));
events.on('in-transit', (payload) => driverDelivered(payload));

module.exports = {
  driverInTransit,
  driverDelivered
}
