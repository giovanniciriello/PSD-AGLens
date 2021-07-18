exports.checkFrameAvailability = (req, res) => {

  if(req.params.frameId == 'Fr1'){
    res.json({
      success: true,
      available: true,
      days_to_deliver: 5
     });
  }else{
    res.json({
      success: true,
      available: false,
      days_to_deliver: 0
     });
  }
}

exports.createFrameOrder = (req, res) => {
  res.json({
    success: true,
    available: true
   });
}