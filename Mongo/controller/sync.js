var sqlserver = require('mssql');
const config = require('../setting/keys')

async function consultaNetflix(){
    await sqlserver.connect(config);

    //*Consulta para traer todas las peliculas de Netflix
    const resultado = await sqlserver.query('select * from Title');
    console.log(resultado.recordset);
    //*Retorna el SET de las peliculas
    return resultado.recordset;
}

async function consultaIMDB(id_imdb){
    /*
    await sqlserver.connect(config);
    //*Rating de IMDB
    const resultado = await sqlserver.query(`select T.idTitle, T.id, T.primaryTitle, T.starYear, T.runtime, R.averageRating as Rating
    from Title T inner join [10.0.0.5].IMDB.dbo.Rating R on T.id = R.titleId;`)
    //*Devolver el set de Peliculas
    */
    //return resultado.recordset;
    return 'HOla mundo'
}

module.exports = {consultaNetflix, consultaIMDB};