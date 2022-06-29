//const { connectMongo } = require('./connections/mongo');
const { connectsqlserver } = require('./connections/conSqlServer')
//var cron = require('node-cron');
const Actualizar = require('./controller/createQuery')
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

//*Creamos el Index
async function main(){
    const app = express();
    app.use(express.json());

    dotenv.config({path: 'setting/config.env'})


    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }

    const PORT = process.env.PORT || 4000;
    const server = app.listen(PORT, console.log(`Server puerto ${process.env.NODE_ENV} node on port ${PORT}`))


    //*Pruebas de Coneccion
    connectsqlserver();
    
    //cron.schedule('*/15 * * * * *', () => {
    //    console.log(new Date().toLocaleString());
    //})

}

main();