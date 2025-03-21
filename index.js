//aplicação create
(async () => {
    const datebase = require('./db');
    const Produto = require('./produto');

    try{
        const resultado = await datebase.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);
    } 
    catch (error) {
        console.log(error);
    }
})();