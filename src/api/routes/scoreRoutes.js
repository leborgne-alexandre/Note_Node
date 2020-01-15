// src/api/routes/userRoutes.js
module.exports = (app) => {
    const userControleur = require('../controleur/scoreControleur');
  
    app.route('/users/') // req.params.post_id
    .get(commentControleur.get_all_users)
    .post(commentControleur.create_an_user);
  
    app.route('/users/:user_id')
    .get(commentControleur.get_an_user)
    .put(commentControleur.update_an_user)
    .delete(commentControleur.delete_an_user);
  }
  