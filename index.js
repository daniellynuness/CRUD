const { where } = require('sequelize');

//aplicação
(async () => {
    const datebase = require('./db');
    const Produto = require('./produto');

    try{
        const resultado = await datebase.sync();
        console.log(resultado);

    //create
        /*const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);*/
    } 
    catch (error) {
        console.log(error);
    }

    //read
    const produtos = await Produto.findAll();
    console.log(produtos);

    //update
    /*const produto = await Produto.findByPk(1);
    produto.nome = "Mouse Top";
    const resultadoSave = await produto.save();
    console.log(resultadoSave);*/

    //delete
    Produto.destroy({where: {id:2}});
})();