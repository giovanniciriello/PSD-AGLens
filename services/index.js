const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;

const { checkFrameAvailability, createFrameOrder } = require('./apis/framesupplier');
const { createShippingOrder } = require('./apis/paclink');
const { createInvoice } = require('./apis/fattureincloud');

app.use(bodyParser.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/public/:file', (req, res) => {
  res.sendFile('/fatture_pdf/' + req.params.file, { root: __dirname });
});

app.get('/framesupplier/availability/:frameId', checkFrameAvailability);

app.post('/framesupplier/order', createFrameOrder);

app.post('/paclink/order', createShippingOrder);

app.post('/fattureincloud/invoice', createInvoice);

app.listen(port, () => {
  console.log(`AG Lens services listening at http://localhost:${port}`);
});
