const express = require('express')
const app = express()
const port = 3000

const { checkFrameAvailability, createFrameOrder } = require('./apis/framesupplier');
const { createShippingOrder } = require('./apis/paclink');
const { createInvoice } = require('./apis/fattureincloud');

app.get('/framesupplier/check-frame-availability/:frameId', checkFrameAvailability);

app.post('/framesupplier/order', createFrameOrder);

app.post('/paclink/order', checkFramecreateShippingOrderAvailability);

app.post('/fattureincloud/invoice', createInvoice);

app.listen(port, () => {
  console.log(`AG Lens services listening at http://localhost:${port}`)
})