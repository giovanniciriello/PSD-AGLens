const niceInvoice = require('nice-invoice');

exports.createInvoice = (req, res) => {
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
    currency_symbol: '$',
    date: {
      billing_date: '23 July 2020',
      due_date: '23 August 2021',
    },
  };
  niceInvoice(invoiceDetail, './fatture_pdf/' + req.body.optician_id + '.pdf');

  var link = 'http://localhost:3000/' + 'public/' + req.body.optician_id + '.pdf';

  console.log(`Invoice Link -> ${link}`);

  res.json({
    success: true,
    message: '✅ Invoice successfull generated!',
    invoice_link: link,
  });
};

exports.getInvoiceById = (req, res) => {
  res.sendFile('/fatture_pdf/' + req.params.file, { root: __dirname });
};

exports.updateInvoice = () => {};
exports.deleteInvoice = () => {};
