const { Client, logger } = require('camunda-external-task-client-js');
const { checkFrameAvailability } = require('./functions/check-frame-availability');
const open = require('open');

const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card'
client.subscribe('check-frame-availability', checkFrameAvailability);
