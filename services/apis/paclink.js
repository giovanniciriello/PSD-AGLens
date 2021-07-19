exports.createShippingOrder = (req, res) => {
  console.log(req.body);

  // packlink does not support too large packs...
  const pack = req.body;
  if (pack.height > 20 || pack.width > 10 || pack.depth > 8) {
    res.json({
      success: false,
      message: '⚠️📦 Pack too large!',
    });
  } else {
    res.json({
      success: true,
      message: '✅ order successful issued! 📦 The pack will be delivered soon!',
    });
  }
};
