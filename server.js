const express = require('express')
const cors = require('cors');

const app = express()

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    app.use(cors());
    next();
});

require('./src')(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('Amem')
})