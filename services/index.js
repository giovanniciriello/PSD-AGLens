const express = require('express');
var bodyParser = require('body-parser');
const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;

const { checkFrameAvailability, createFrameOrder } = require('./apis/framesupplier');
const { createShippingOrder } = require('./apis/paclink');
const { createInvoice, getInvoiceById, updateInvoice, deleteInvoice } = require('./apis/fattureincloud');

app.use(bodyParser.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/framesupplier/availability/:frameId', checkFrameAvailability);

app.post('/framesupplier/order', createFrameOrder);

app.post('/paclink/order', createShippingOrder);

app.get('/fattureincloud/invoice/:invoiceId', getInvoiceById);
app.post('/fattureincloud/invoice', createInvoice);
app.put('/fattureincloud/invoice/:invoiceId', updateInvoice);
app.delete('/fattureincloud/invoice/:invoiceId', deleteInvoice);

app.listen(port, () => {
  console.log(`AG Lens services listening at http://localhost:${port}`);
});
