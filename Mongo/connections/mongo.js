const connectMongo = require('mongoose');

connectMongo.connect('mongodb+srv://doadmin:Pu08ZHx31246l7Fe@bases2-d35da2a6.mongo.ondigitalocean.com/admin?tls=true&authSource=admin')

module.exports = connectMongo;