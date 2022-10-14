'use strict';

const events = require('./src/GlobalEventPool.js');
const Chance = require('chance');
const chance = new Chance();

let logger = (payload, eventName) =>
{
  let event = {
    "event": eventName,
    "time": chance.date(),
    "payload": payload,
  }
  console.log("EVENT", event);
};

events.on('pickup', (payload) => {
  logger(payload, 'pickup');

});
events.on('in-transit', (payload) => {
  logger(payload, 'in-transit');
});

events.on('delivered', (payload) => {
  logger(payload, 'delivered');
});
