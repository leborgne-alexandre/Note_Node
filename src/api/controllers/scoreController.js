const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const scoreModel = require('../models/scoreModels');
const bcrypt = require('bcrypt');
const Score = mongoose.model('Score');
const config = require('../../config/secrets');
const ARM = require('../middleware/accessRoleManagement');

// return the new use, encrypte the password a the creation
exports.set_a_score = function(req, res) {
    var newScore = new Score(req.body);
    newScore.save((err, score) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.json({message: "Erreur lors de la création de la note"});
      } else {
        return res.json(score);
      }
    });
}

// return all the scores that can be found or a json message if there is an error 
exports.list_all_scores = (req,res)=>{
    User.find({},(error,score)=>{
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
