//dependencies:
var restful = require("node-restful");
var mongoose = restful.mongoose;

var dominioSchema = new mongoose.Schema({
    dominio: String,
    equipo: String,
    registro: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }
});

//return models:
module.exports = restful.model('tbldominio', dominioSchema);