const Sequelize = require('sequelize');
const database = require('./db');
const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        allownull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allownull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descicao: Sequelize.STRING
})
module.exports = Produto;