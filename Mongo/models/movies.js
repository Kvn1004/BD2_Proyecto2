var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Esquema = new Schema({
    primary_title: {
        type: String,
        required: [true, 'Titulo Principal']
    },
    runtime: {
        type: String,
        required: [true, 'Lugar de Origen de Pelicula']
    },
    rating: {
        type: Number
    }

});

module.exports = mongoose.model('Proyecto', Esquema);