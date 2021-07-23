const niceInvoice = require('nice-invoice');

exports.createInvoice = (req, res) => {
  var id = Math.floor(Math.random() * 100000);
  var price = parseInt(req.body.price);
  const invoiceDetail = {
    shipping: {
      name: req.body.optician_id,
      address: 'example address',
      city: 'Milan',
      state: 'Italy',
      country: 'ITA',
      postal_code: 20235,
    },
    items: [
      {
        item: 'Glass',
        description: 'Glass bought for ' + req.body.optician_id,
        quantity: 1,
        price: price,
        tax: '%22',
      },
    ],
    subtotal: price * 1.22,
    total: price * 1.22,
    order_number: 1234222,
    header: {
      company_name: 'AGLens',
      company_logo: 'logo.png',
      company_address: 'Via Cavalleggeri Treviso, 13/c',
    },
    footer: {
      text: 'Thanks for choose us!',
    },
    currency_symbol: '€',
    date: {
      billing_date: '23 July 2020',
      due_date: '23 August 2021',
    },
  };
  niceInvoice(invoiceDetail, './apis/fatture_pdf/' + id + '.pdf');

  console.log(`✅ Invoice successfull generated! Invoice id -> ${id}`);

  res.json({
    success: true,
    id: id,
    message: '✅ Invoice successfull generated!',
  });
};

exports.getInvoiceById = (req, res) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=' + req.params.invoiceId + '.pdf');
  res.sendFile('/fatture_pdf/' + req.params.invoiceId + '.pdf', { root: __dirname });
};

exports.updateInvoice = (req, res) => {
  res.json({
    success: true,
    id: req.params.invoiceId,
    message: '✅ Update ok!',
  });
};
exports.deleteInvoice = (req, res) => {
  res.json({
    success: true,
    message: '✅ Delete ok!',
  });
};
