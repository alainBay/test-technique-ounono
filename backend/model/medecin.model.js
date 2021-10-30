const mongoose = require('mongoose'); 

const MedecinSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },

    password : {
        type: String,
        required: true
    },

    nom : {
        type: String,
        required: true
    },

    prenom : {
        type: String,
        required: true
    },

    photo : {
        type: String,
        required: false
    },

    tarif : {
        type: String,
        required: false
    },

    remboursement : {
        type: String,
        required: false
    },

    presentation : {
        type: String,
        required: false
    },

    horaire : {
        type: String,
        required: false
    },

    contact : {
        type: String,
        required: false
    },

    formation : {
        type: String,
        required: false
    },

    langue : {
        type: String,
        required: false
    },

    creneau : {
        type: String,
        required: false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Medecin', MedecinSchema );