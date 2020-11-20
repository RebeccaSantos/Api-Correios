const { rastrearEncomendas } = require('correios-brasil')
const express = require('express')
const router = express.Router()


router.get('/:codigo',(req,res)  => {
 
 const rast =[req.params.codigo];

  rastrearEncomendas(rast).then((response) =>{
     return res.json(Object.values(response));

  }).catch(error => {
        
    return res.json(error)

}
);
      
})

module.exports = router

