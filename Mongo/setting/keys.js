const config = {
    user: 'sa',
    password: 'Bases21234.',
    database: 'BD2',
    server: '34.125.28.117',
    encrypt: false,
    options: {
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

module.exports = config;