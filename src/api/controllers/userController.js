const mongoose = require('mongoose');
const userModel = require('../models/userModels');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');


// return the new use, encrypte the password a the creation
exports.create_a_user = function(req, res) {
    var newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    newUser.save((err, user) => {
      if (err) {
        res.status(500);
        console.log(err);
        res.json({message: "Erreur lors de la création de l'user"});
      } else {
        user.hash_password = undefined;
        return res.json(user);
      }
    });
}

// Return a token if the email and password correspond to a user in the base
exports.sign_in = function(req, res) {
    User.findOne({
        email: req.body.email
      }, function(err, user) {
        if (err) {
            res.status(500);
            res.json({message: "Erreur serveur lors de la connexion"})
        }
        if (!user) {
            res.status(418).json({ message: 'Auth failed' });
        } else if (user) {
          if (!user.comparePassword(req.body.password)) {
            res.status(418).json({ message: 'Auth failed' });
          } else {
            return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'nodejs_api')});
          }
        }
      });
}

// return all the users that can be found or a json message if there is an error 
exports.list_all_users = (req,res)=>{
    User.find({},(error,users)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(users);
        }
    });
};

// get a use, take @user_id parameter and return if the user exist, the json of the user, or a json error message
exports.get_a_user = (req,res)=>{
    User.findById(req.params.user_id,(error,user)=>{
        if(error){
            res.status(500);
            console.log(error); 
            res.json({message: "Erreur serveur"});
        }
        else{
            res.status(200);
            res.json(user);
        } 
    })
}

// update a user, take @user_id parameter, return the new json object or a json message in case of error
exports.update_a_user = (req,res)=>{
    User.findByIdAndUpdate(req.params.user_id,req.body,{new : true},(error,user)=>{
        if(error){
            res.status(500);
            res.json(error);
        }else{
            res.status(200);
            res.json(user);
        }
    })  
}

// delete a user, take @user_id parameter and return a json message
exports.delete_a_user = (req,res)=>{
    let id = req.params.user_id;
    User.findByIdAndDelete(id,(error,user)=>{
        if(error){
            res.status(500);
            console.log("error");
            res.json({message : "Erreur serveur"});
        }else{
            res.status(200);
            res.json({message :" user deleted"});
        }
    })
}

