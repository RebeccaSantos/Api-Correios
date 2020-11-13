const express = require('express')
const app = express()

app.use(express.json());

require('./src')(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('Amem')
})