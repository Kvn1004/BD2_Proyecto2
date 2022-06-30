//const { connectMongo } = require('./connections/mongo');
const connectsqlserver  = require('./connections/conSqlServer')
//var cron = require('node-cron');
const Actualizar = require('./controller/createQuery')
const dotenv = require('dotenv');
const express = require('express');
const morgan = require('morgan');

var sql = require('tedious').Connection;
const connectMongo = require('mongoose');

const config = require('./setting/keys')
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
    //* MONGO
   // connectMongo.connect('mongodb+srv://doadmin:Pu08ZHx31246l7Fe@bases2-d35da2a6.mongo.ondigitalocean.com/admin?tls=true&authSource=admin')
    var db = "mongodb+srv://doadmin:Pu08ZHx31246l7Fe@bases2-d35da2a6.mongo.ondigitalocean.com/admin?tls=true&authSource=admin";
    connectMongo.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

    const conSuccess = connectMongo.connection
    conSuccess.once('open', _ => {
        console.log('Database connected:', db)
    })
    
    //*SQL Server
    var connectsqlserver = new sql(config);  
    connectsqlserver.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");
    });
    
    //cron.schedule('*/15 * * * * *', () => {
    //    console.log(new Date().toLocaleString());
    //})

    Actualizar();

}

main();