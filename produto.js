//model
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
    descricao: Sequelize.STRING
})
module.exports = Produto;