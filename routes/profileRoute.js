const route = require('express').Router();
const Profile = require('../models/profile.model');


route.post('/', async (req,res)=>{
    const { 
        name, 
        firstname, 
        lastname, Sex, 
        lieuNaissance, 
        dateNaissance,
         Nationalite, 
         Taille} = req.body;
    
    const newProfile = new Profile({name, firstname, lastname, Sex, lieuNaissance, dateNaissance, Nationalite, Taille})
    
    await newProfile.save()
        .then(() => {
            res.json('profile saved succesfully')
        })
        .catch(err => res.json({msg: err}))


})

module.exports = route
