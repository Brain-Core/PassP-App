const route = require('express').Router();
const Profile = require('../models/profile.model');
const protect = require('../middleware/protectedRoute');

route.post('/',protect, async (req,res)=>{
    const { 
        name, 
        firstname, 
        lastname, 
        Sex, 
        lieuNaissance, 
        dateNaissance,
         Nationalite, 
         Taille} = req.body;
    
    const newProfile = new Profile({name, firstname, lastname, Sex, lieuNaissance, dateNaissance, Nationalite, Taille})
    
    await newProfile.save()
        .then(() => {
            res.json('profile saved succesfully');
        })
        .catch(err => res.json({msg: err}));

route.put('/:id',protect, (req, res) => {
    const { 
        name, 
        firstname, 
        lastname, 
        Sex, 
        lieuNaissance, 
        dateNaissance,
         Nationalite, 
         Taille} = req.body;

         const newProfile = new Profile({name, firstname, lastname, Sex, lieuNaissance, dateNaissance, Nationalite, Taille})

         Profile.findByIdAndUpdate(req.params.id, newProfile)
            .then(() => {
                res.json('profile Edited succesfully')
            })
            .catch(err => res.json({msg: err}))
});

route.delete('/:id',protect, (req, res) => {
    Profile.findByIdAndDelete(req.params.id)
        .then(() => res.json({msg: "Profile deleted successfuly"}))
});
})

module.exports = route;
