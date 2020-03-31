var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriaSchema = new Schema({
        genero: String
});

module.exports = mongoose.model('Categoria', categoriaSchema);