'use strict';

require('./index.js');
require('./src/Driver/driver.js');
const vendorPath = require('./src/Vendor/vendor.js');

const storeName = 'Target';

console.log('\nRunning Terminal Test...\n');

vendorPath.vendorPickupRequest(storeName);
