var sql = require('mssql').Connection;

const config = require('../setting/keys')

var connectsqlserver = new sql.ConnectionPool(config);  
connectsqlserver.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connectsqlserver.connect();