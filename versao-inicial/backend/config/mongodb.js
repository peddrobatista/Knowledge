const mongoose = require('mongoose');
// Se conectando ao mongoDB
mongoose.connect('mongodb://localhost:knowledge_status', {useNewUrlParser: true})
.catch(e => {
    const msg = 'ERRO! Não foi possível se conectar ao mongoDB!'
    console.log('\x1b[41m%s\x1b{37m', msg, '\x1b[0m')
})