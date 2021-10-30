const medecin = require("./controleur/medecin.crud.js");

module.exports = (app) => {
    // Post Medecin
    app.post('/Medecin/', async(req, res) =>{
        medecin.create(req, res);
    });

    // GET Medecin
    app.get('/Medecin/', async(req, res) =>{
        medecin.getAll(req, res);
    });

    // GET Medecin par ID
    app.get('/Medecin/:id', async(req, res) =>{
        medecin.getOne(req, res);
    });

    // LOGIN Medecin
    app.post('/Medecin/Login/', async(req,res) =>{
        medecin.login(req, res);
    });

    // PUT Medecin
    app.put('/Medecin/:id', async(req, res) =>{
        medecin.putOne(req, res);
    });

    // DELETE Medecin
    app.delete('/Medecin/:id', async() =>{
        medecin.deleteOne(req, res); 
    });
};