const Medecin = require('../model/medecin.model.js');
const bcrypt = require('bcrypt');

// Post Medecin
exports.create = (async(req, res)  => {
    if(!req.body) {
        res.status(400).send({
            message: "The content cannot be empty"
        });
    }
    await Medecin.find({email: req.body.user.email}, async(err, data) =>{
        if(data.length == 0){
            bcrypt.hash(req.body.user.password, 10, async (err, p) => {
                req.body.user.password = p;
                await Medecin.create(req.body.user).then(r =>{
                    res.status(200).send(r);
                });
            });
        }else{
            res.status(400).send({
                message: "The account is already existing"
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred"
        });
    });
});

// GET Medecin
exports.getAll = (async(req, res) => {
    await Medecin.find().then(r => {
        res.status(200).send(r);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred"
        });
    });
});

// GET Medecin par ID
exports.getOne = (async(req, res) => {
    await Medecin.findById(req.params.id).then(r => {
        if(!r) {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });            
        }
        res.status(200).send(r);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });                
        }
        res.status(500).send({
            message: "Some error occurred"
        });
    });
});

// LOGIN Medecin
exports.login = (async(req,res) =>{
    await Medecin.find({email: req.body.email}).then(async(p) => {
        if(p.length != 0){
            p.forEach(async(pe) => {
                if(await bcrypt.compare(req.body.password, pe.password)){
                    res.status(200).send(pe);
                }else{
                    res.status(400).send({
                        message: "The mail or the password is wrong"
                    });
                }
            });
        }else{
            return res.status(400).send({
                message: "The mail or the password is wrong"
            });
        }         
    }).catch(err => {
        res.status(500).send({
            status: "error",
            error: "Some error occurred"
        });
    });
})

// PUT Medecin
exports.putOne = (async(req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "The content cannot be empty"
        });
    }
    
    await Medecin.findByIdAndUpdate(req.params.id, req.body.user).then(r => {
        if(!r) {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });
        }
        res.status(200).send(r);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });                
        }
        res.status(500).send({
            message: "Some error occurred"
        });
    });
});

// DELETE Medecin
exports.deleteOne = (async(req, res) => {
    await Medecin.findByIdAndRemove(req.params.id).then(r => {
        if(!r) {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });
        }
        res.status(200).send({
            message: "Doctor has been successfully deleted"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            res.status(404).send({
                message: "Couldn't find the doctor"
            });                
        }
        res.status(500).send({
            message: "Some error occurred"
        });
    });
});