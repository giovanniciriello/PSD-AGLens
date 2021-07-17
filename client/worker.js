const { Client, logger } = require('camunda-external-task-client-js');
const { checkFrameAvailability } = require('./functions/check-frame-availability');
const open = require('open');

const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'check-frame-availability'
client.subscribe('check-frame-availability', checkFrameAvailability);

// susbscribe to the topic: 'create-frame-order'
client.subscribe('create-frame-order', createFrameOrder);

// susbscribe to the topic: 'create-shipping-order'
client.subscribe('create-shipping-order', createShippingOrder);

// susbscribe to the topic: 'create-invoice'
client.subscribe('create-invoice', createInvoice);
