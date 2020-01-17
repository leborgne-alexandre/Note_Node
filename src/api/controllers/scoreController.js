const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const scoreModel = require('../models/scoreModels');
const bcrypt = require('bcrypt');
const Score = mongoose.model('Score');
const config = require('../../config/secrets');

const ARM = require("../middleware/accessRoleManagement");

// return the new session
exports.create_a_score = function(req, res) {
  const currentUser = ARM.getUserFromToken(req);
  console.log("test");
  currentUser.then(response=>{
    console.log(response);
    req.body.id_student = response._id;
    req.body.id_module = req.params.module_id;
    var newScore = new Score(req.body);
    newScore.save((err, score) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.json({message : 'erreur interne'});
      } else {
        res.status(201);
        return res.json(score);
      }
    });
  },error=>{
    res.status(403);
        res.json("utilisteur non connecte");
  })
}

// return all the sessions that can be found or a json message if there is an error 
exports.get_all_score = (req,res)=>{
    Score.find({},(error,score)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(score);
        }
    });
};

// get a use, take @score_id parameter and return if the session, module and user exist, the json of the score, or a json error message
exports.get_a_score = (req,res)=>{
    Score.findById(req.params.score_id,(error,score)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(score);
        } 
    })
}
// update a session, take @session_id parameter, return the new json object or a json message in case of error
exports.update_a_score = (req,res)=>{
    Score.findByIdAndUpdate(req.params.score_id,req.body,{new : true},(error,score)=>{
        if(error){
            res.status(500);
            res.json(error);
        }else{
            res.status(200);
            res.json(score);
        }
    })  
}

// delete a session, take @session_id parameter and return a json message
exports.delete_a_session = (req,res)=>{
    let id = req.params.session_id;
    Score.findByIdAndDelete(id,(error,score)=>{
        if(error){
            res.status(500);
            console.log("error");
            res.json({message : "Erreur serveur"});
        }else{
            res.status(200);
            res.json({message :" Score deleted"});
        }
    })
}


