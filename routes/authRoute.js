const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const route = express.Router();
const protect = require('../middleware/protectedRoute');

route.post('/', (req, res) => {
    const {username, password} = req.body;

    if(!username || !password){
        res.status(400).json('Le username ou le password ne peut etre vide');
    }
    UserModel.findOne({username})
        .then( uName => {
            if(!uName) {
                res.status(400).json(`Aucun utilisateur n'est connu sous ce username : ${username}`);
            }else {
                bcrypt.compare(password, uName.password)
                    .then((success) => {
                        if(!success) res.status(400).json(`Les mots de passe ne correspondent pas`);
                        jwt.sign(
                            {id: uName.id},
                            config.get('secret_key'),
                            {expiresIn: 3600},
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id:uName.id,
                                        name: uName.name
                                    }
                                })
                            }
                        )
                    })
            }
        })
});

route.get('/user', protect, (req,res) => {
    UserModel.findById(req.params.id)
    .select('-password')
        .then(userFound => {
            res.json(userFound)
        })
        .catch(err => res.json({msg: err}));
})

module.exports = route;