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
   console.log(id_imdb)
    await sqlserver.connect(config);
    //*Rating de IMDB
    const resultado = await sqlserver.query(`SELECT T.idTitle, T.id, T.primaryTitle, T.startYear, T.runtime, R.averageRating AS Rating FROM Title T
    INNER JOIN [34.125.9.143].BD2.dbo.Rating R ON
    T.id = R.titleId;`)
    //*Devolver el set de Peliculas

    return resultado.recordset;
}

module.exports = {consultaNetflix, consultaIMDB};