const mongoose = require('mongoose');
const userModel = require('../models/userModels');
const User = mongoose.model('User');

exports.isTheCurrentUserAdmin = (user_id) => {
    return new Promise((resolve, reject) => {
        try{
            User.findById(user_id,(error,user)=>{
                if(error){
                    reject(false);
                }
                else{
                    if(!user){
                        reject(false);
                    }else{
                        if(user.is_admin){
                            resolve(true);
                        }else{
                            reject(false);
                        }
                    }
                } 
            })
        } catch(e){
            console.log(e);
            reject(false);
        }
    })
}

exports.asAdminAccess = (req, res, next) => {
    //let token = req.headers['authorization']; // mon token
    let token = "";
    let user_id = req.body.user_id;
    const isUserAdmin =this.isTheCurrentUserAdmin(user_id);
    
    isUserAdmin.then(response=>{
        next();
    },error => {
        res.status(403);
        res.json("acces interdit");
        console.log("access interdit");
    })
  }

exports.verify_token = (req, res, next) => {
    //let token = req.headers['authorization']; // mon token
    let tocken ="";
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