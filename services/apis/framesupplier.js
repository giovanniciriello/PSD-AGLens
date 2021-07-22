exports.checkFrameAvailability = (req, res) => {
  const frameId = req.params.frameId;

  if (framesDatabase.hasOwnProperty(frameId)) {
    // frame is avaialble in supplier warehouse.
    // Response with eyeglass data
    res.json(framesDatabase[frameId]);
  } else {
    // frame is not available in supplier warehouse
    res.json({
      available: false,
      daysToDeliver: 0,
    });
  }
};

exports.createFrameOrder = (req, res) => {
  res.json({
    success: true,
    message: '✅ Order created successfully',
  });
};

// database

const framesDatabase = {
  'persol-light': {
    name: 'Persol light white eyeglass',
    available: true,
    daysToDeliver: 8,
    price: 185,
  },
  'persol-dark': {
    name: 'Persol dark black eyeglass',
    available: true,
    daysToDeliver: 5,
    price: 150,
  },
  'rayban-vintage': {
    name: 'Rayban vintage style eyeglass',
    available: true,
    daysToDeliver: 25,
    price: 120,
  },
  'rayban-modern': {
    name: 'Rayban modern style eyeglass',
    available: true,
    daysToDeliver: 18,
    price: 110,
  },
};
