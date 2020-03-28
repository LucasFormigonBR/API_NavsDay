const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//PERSISTÊNCIA
mongoose.connect('mongodb://localhost/luska', {useNewUrlParser:true});

//Configurar a App para usar o body-parser 
app.use(bodyParser.urlencoded([{extended:true}]));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//ROTAS
var  productRoute = require("./routes/product-routes");
//Vincular a aplicação (app) com o motor de rotas
//app.use('/api', indexRoute)
//Rotas
app.use('/api/products', productRoute);

//Definindo notas
const router = express.Router(); //Intercept de todas as rotas

//Middleware
router.use(function(req, res, next){
    console.log("Intercept by Middleware");
    next(); //faz a continuação para a próxima API
});

router.get('/', (req,res) => {
    res.json({"message":"Rota teste OK"})
});

//Caminho padrão para as API's
app.use('/api', router);

//Caminho para Index
app.use('/api', );

app.listen(PORT, () => {
    console.log("Server esta rodando");
});