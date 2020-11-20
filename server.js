const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    app.use(cors());
    next();
});

require('./src')(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('Amem')
})