const mongoose = require('mongoose'); 
require('dotenv').config();

module.exports = () => {
    mongoose.connect(process.env.DB_URL, {useCreateIndex: true,useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    
    const db = mongoose.connection; 
    db.on('error', () =>{
        console.log("database: erreur lors de la connexion"); 
    }); 
}
