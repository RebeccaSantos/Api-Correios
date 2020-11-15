const { rastrearEncomendas } = require('correios-brasil')
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  
  const {rast} = req.body;

  rastrearEncomendas(rast).then((response) =>{

     return  res.json(response);

  }).catch(error => {

    return res.json(error)

});
      
})

module.exports = router

