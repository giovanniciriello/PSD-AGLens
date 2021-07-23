exports.createShippingOrder = (req, res) => {
  console.log('✅ order successful issued! 📦 The pack will be delivered soon!');

  res.json({
    success: true,
    message: '✅ order successful issued! 📦 The pack will be delivered soon!',
  });
};
