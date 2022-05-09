const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://admin:admin123456@fiap-tecnico.dsp0j.mongodb.net/sapo')
}

module.exports = conexao
