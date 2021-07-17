const express = require('express')
const app = express()
const port = 3000

const { checkFrameAvailability } = require('./apis/framesupplier');


app.get('/framesupplier/check-frame-availability/:frameId', checkFrameAvailability);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})