const express = require('express')
const router = express.Router()
const ApiNodeCorreios = require('node-correios')

const correios = new ApiNodeCorreios()

router.post('/:nCdServico/:sCepOrigem/:sCepDestino/:nVlPeso/:nCdFormato/:nVlComprimento/:nVlAltura/:nVlLargura/:nVlDiametro', (request, response) =>{ 
    const req ={
        nCdServico:request.params.nCdServico,
        sCepOrigem:request.params.sCepOrigem,
        sCepDestino:request.params.sCepDestino,
        nVlPeso:request.params.nVlPeso,
        nCdFormato:request.params.nCdFormato,
        nVlComprimento:request.params.nVlComprimento,
        nVlAltura:request.params.nVlAltura,
        nVlLargura:request.params.nVlLargura,
        nVlDiametro:request.params.nVlDiametro, 
    };

    correios.calcPreco(req).then(result => {

        return response.json(result)

    }).catch(error => {

        return response.json(error)

    });
})

module.exports = router