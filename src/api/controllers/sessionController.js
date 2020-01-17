const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const sessionModel = require('../models/sessionModels');
const bcrypt = require('bcrypt');
const Session = mongoose.model('Session');
const config = require('../../config/secrets');


// return the new session
exports.create_a_session = function(req, res) {
    var newSession = new Session(req.body);
    newSession.save((err, session) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.json({message: "Erreur lors de la création de la session"});
      } else {
        res.status(201);
        return res.json(session);
      }
    });
}

// return all the sessions that can be found or a json message if there is an error 
exports.get_all_sessions = (req,res)=>{
    Session.find({},(error,session)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(session);
        }
    });
};

// get a session, take @session_id parameter and return if the session exist, the json of the session, or a json error message
exports.get_a_session = (req,res)=>{
    Session.findById(req.params.session_id,(error,session)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(session);
        } 
    })
}

// update a session, take @session_id parameter, return the new json object or a json message in case of error
exports.update_a_session = (req,res)=>{
    Session.findByIdAndUpdate(req.params.session_id,req.body,{new : true},(error,session)=>{
        if(error){
            res.status(500);
            res.json(error);
        }else{
            res.status(200);
            res.json(session);
        }
    })  
}

// delete a session, take @session_id parameter and return a json message
exports.delete_a_session = (req,res)=>{
    let id = req.params.session_id;
    Session.findByIdAndDelete(id,(error,session)=>{
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


