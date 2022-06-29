const config = {
    user: 'sa',
    password: 'Bases21234.',
    database: 'BD2',
    server: 'localhost',
    encrypt: false,
    options: {
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

module.exports = config;