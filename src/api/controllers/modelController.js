const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const moduleModel = require('../models/moduleModels');
const scoreModel = require('../models/scoreModels');
const bcrypt = require('bcrypt');
const Module = mongoose.model('Module');
const Score = mongoose.model('Score');
const config = require('../../config/secrets');


// return the new use, encrypte the password a the creation
exports.create_a_module = function(req, res) {
    var newModule = new Module(req.body);
    newModule.save((err, mod) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.json({message: "Erreur lors de la création du module"});
      } else {
        mod.hash_password = undefined;
        return res.json(mod);
      }
    });
}

exports.get_all_score = (req,res)=>{
    Score.find({id_module: req.params.modules_id},(error,scores)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);  
            res.json(scores);
        }
    });
}
// return all the modules that can be found or a json message if there is an error 
exports.get_all_modules = (req,res)=>{
    Module.find({},(error,mod)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(mod);
        }
    });
};

// get a use, take @modules_id parameter and return if the module exist, the json of the module, or a json error message
exports.get_a_module = (req,res)=>{
    Module.findById(req.params.modules_id,(error,mod)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(mod);
        } 
    })
}

// update a module, take @modules_id parameter, return the new json object or a json message in case of error
exports.update_a_module = (req,res)=>{
    Module.findByIdAndUpdate(req.params.modules_id,req.body,{new : true},(error,mod)=>{
        if(error){
            res.status(500);
            res.json(error);
        }else{
            res.status(200);
            res.json(mod);
        }
    })  
}

// delete a module, take @modules_id parameter and return a json message
exports.delete_a_module = (req,res)=>{
    let id = req.params.modules_id;
    Module.findByIdAndDelete(id,(error,mod)=>{
        if(error){
            res.status(500);
            console.log("error");
            res.json({message : "Erreur serveur"});
        }else{
            res.status(200);
            res.json({message :" Module deleted"});
        }
    })
}


