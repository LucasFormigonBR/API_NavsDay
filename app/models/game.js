var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
        nome: String,
        preco: Number,
        descricao: String

});

module.exports = mongoose.model('Game', gameSchema);