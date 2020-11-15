  
module.exports = (app) => {
    app.use('/cep', require('./routes/cep'))
    app.use('/frete', require('./routes/frete'))
    app.use('/rastrear', require('./routes/rastrear'))
  }