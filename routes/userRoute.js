require('../connect/index')
const route = require('express').Router();
const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


// registration
route.post('/', async (req,res)=>{
    const { name, phone, username, password } = req.body;
    // add validation
    if(!name || !phone || !username || !password){
        res.status(400).json({msg: "champ vide"});
    }

    await UserModel.findOne({username}) // findone username if exists
        .then(userN => {
            if(userN){
                res.json({msg:"User Already exists"})
            }
            else{
                const newUser = new UserModel({name,phone, username, password}); //set data to model
                //chiffrer mot de passe
                bcrypt.genSalt(10,(err, salt)=>{ // crypt password by generating a code
                    if(err) throw err;
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{ 
                        console.log(newUser.password)// hashing password
                        if(err) throw err;
                        newUser.password = hash; // hashed password is putting to the user password
                        newUser.save()
                            .then(user =>{
                                jwt.sign( // generating token
                                    {id: user.id},
                                    config.get('secret_key'),
                                    {expiresIn: 3600},
                                    (err, token)=>{ // return token
                                        if(err) throw err;
                                        res.json({
                                            token,
                                            user:{
                                                name: user.name,
                                                username: user.username
                                            }
                                        })
                                    }
                                )
                            })
                            .catch(err => res.json(err))
                    })
                })
            }
        })
        .catch(err => res.json(err));

})

module.exports = route;