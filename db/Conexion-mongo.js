const mongoose = require('mongoose');

const getConnection = async () => {
    try {   
        const url = 'mongodb+srv://ariasomarjose07:NhEcStkmW4eo1e1i@tegnologiawebdb.dbctaox.mongodb.net/'

        await mongoose.connect(url);

        console.log('Conexion exitosa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection,
}