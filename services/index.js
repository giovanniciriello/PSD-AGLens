const express = require('express')
const app = express()
const port = 3000

const { checkFrameAvailability, createFrameOrder } = require('./apis/framesupplier');
const { createShippingOrder } = require('./apis/paclink');
const { createInvoice } = require('./apis/fattureincloud');

app.get('/framesupplier/check-frame-availability/:frameId', checkFrameAvailability);

app.post('/framesupplier/create-frame-order', createFrameOrder);

app.post('/paclink/create-shipping-order', createShippingOrder);

app.post('/fattureincloud/create-invoice', createInvoice);

app.listen(port, () => {
  console.log(`AG Lens services listening at http://localhost:${port}`)
})