const mongoose = require('mongoose');
const userModel = require('../models/userModels');
const scoreModel = require('../models/scoreModels');
const moduleModel = require('../models/moduleModels');
const config = require('../../config/secrets');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

exports.isTheCurrentUserAdmin = (req) => {
    return new Promise((resolve,reject)=>{
        const UserPromise = this.getUserFromToken(req);
        UserPromise.then(user=>{
            try{
                if(user.is_admin){
                    resolve(true);
                }else{
                    reject(false);
                }
            } catch(e){
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

exports.canMakeAVote = (req,res) =>{
    const isUserAdmin =this.isTheCurrentUserAdmin(req);
    isUserAdmin.then(response=>{
        scoreModel.findOne({id_student: res.body.user_id,id_module:res.body.module},function(err,score){
            if(err){
                res.status(500);
                res.json({message: "erreur interne du serveur"});
            }
            if(score){
                res.status(403);
                res.json({message: "La personne a deja vote"});
            }else{
                moduleModel.findById(res.body.module_id,(err,module)=>{
                    if(err){
                        res.status(500);
                        res.json({message: "erreur interne du serveur"});
                    }
                    if(module){
                        if(module.start_date<Date.now()<module.finnish_date){
                            next();
                        }else{
                            res.status(403);
                            res.json({message: "La periode de vote est fermée"});
                        }
                    }
                })
            }
        })
    },error => {
        res.status(403);
        res.json("utilisteur non connecte");
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