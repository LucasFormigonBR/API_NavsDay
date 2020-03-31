cat = require('categoria.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
        nome: String,
        preco: Number,
        descricao: String

        categoria: [{ type: Schema.Types.ObjectId, ref: 'Categoria' }]
});

module.exports = mongoose.model('Game', gameSchema);
module.exports = mongoose.model('Categoria', categoriaSchema);