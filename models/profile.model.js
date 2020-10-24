const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    name: {type: String, required:[true, 'Name field is required']},
    firstname:{type: String, required:[true, 'Firstname field is required']},
    lastname:{type: String},
    Sex:{type: String},
    lieuNaissance:{type: String, required:[true, 'Name field is required']},
    dateNaissance:{type: Date, required:true},
    Nationalite:{type: String, default:'Congolese'},
    Taille: {type: Number, required:[true, 'The size must be a number']},
    image: {type: String},
    createAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('profiles', ProfileSchema);