exports.checkFrameAvailability = (req, res) => {
  res.json({
    success: true,
    available: false,
    days_to_deliver: 10
   });
}

exports.createFrameOrder = (req, res) => {
  res.json({
    success: true,
    available: true
   });
}