const express = require('express');
var router = express.Router();

var Game = require('../app/models/game');

router.post("/", function(req, res){
    var game = new Game();
    game.nome = req.body.nome;
    game.preco = req.body.preco;
    game.descricao = req.body.descricao;

    game.save(function(error){
        if(error){
            res.send("Erro ao salvar o game" + error);

            res.status(201).json({message:'Produto inserido com sucesso!'});
        }

    });
});

router.get("/", function(req, res){
        Game.find(function(err,gams){
            if(err){
                res.send(err);
            }

            res.status(200).json({
                message: 'Produtos encontrados',
                games: gams
            });
        });

})