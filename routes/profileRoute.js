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

});

route.put('/:id', protect, (req, res) => {
    Profile.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => res.send('The profile has been updated'))
        .catch((err) => res.status(400).send(err.message));
});

route.delete('/profile/:id',protect, (req, res) => {
    Profile.findByIdAndDelete({_id:req.params.id})
    .then(() => res.send('The Profile has been deleted'))
    .catch((err) => res.status(400).send(err.message));
});

/*
route.delete('/delete/:id',protect, (req, res) => {
    Profile.findById(req.params.id)
    .then(profile => profile.remove().then(()=> res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))

*/

module.exports = route;
