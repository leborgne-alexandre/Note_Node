const mongoose = require('mongoose');
const userModel = require('../models/user');
const User = mongoose.model('User');


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
    User.findById({id : req.params.user_id},(req,user)=>{
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

