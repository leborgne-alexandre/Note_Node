const mongoose = require('mongoose');
const userModel = require('../models/userModels');
const config = require('../../config/secrets');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

exports.isTheCurrentUserAdmin = (req) => {
    return new Promise((resolve,reject)=>{
        const UserPromise = this.getUserFromToken(req);
        UserPromise.then(user=>{
            try{
                console.log("try");
                if(user.is_admin){
                    resolve(true);
                }else{
                    reject(false);
                }
            } catch(e){
                console.log("catche");
                reject(false);
            }
        },error => {
            reject(false);
        })
    
    })
}


exports.getUserFromToken = (req) => {
    return new Promise((resolve, reject) => {
        let token = req.headers['authorization']; // mon token
        try{
            if(typeof token !== 'undefined'){
            jwt.verify(token, config.secrets.jwt_key, (error, authData) => {
                if(error){
                // res.sendStatus(403);
                reject(false)
                }
                else{
                    resolve(authData.user); 
                }
            })
            }
        }catch{
            reject(false);
        }
        
    })
}

exports.asAdminAccess = (req, res, next) => {
    const isUserAdmin =this.isTheCurrentUserAdmin(req);
    isUserAdmin.then(response=>{
        next();
    },error => {
        res.status(403);
        res.json("acces interdit");
        console.log("access interdit");
    })
  }

exports.verify_token = (req, res, next) => {
    let token = req.headers['authorization']; // mon token
    
    if(typeof token !== 'undefined'){
      jwt.verify(token, config.secrets.jwt_key, (error, authData) => {
        if(error){
          // res.sendStatus(403);
          res.status(403);
          res.json({message: "Accès interdit"});
        }
        else{
          next();
        }
      })
    }
    else{
      res.status(403);
      res.json({message: "Accès interdit"});
    }
  }