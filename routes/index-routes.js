const express = require('express')
var router = express.Router(); //Intercepção das rotas

router.use(function (req,res, next){
    //Aqui implementamos rotinas de LOGs, Validações, Autenticações...
    console.log("Interceptação pelo Middleware");
    next();
});

router.get('/', (req, res) => res.json({message:'Rota teste OK'}));

module.exports = router;